import React, { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Search, AlertCircle, CheckCircle, Info } from 'lucide-react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  success?: string;
  info?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showPasswordToggle?: boolean;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: string;
  info?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export interface SearchInputProps extends Omit<InputProps, 'leftIcon'> {
  onSearch?: (value: string) => void;
  isLoading?: boolean;
}

const inputSizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-5 py-4 text-lg'
};

const inputVariants = {
  default: 'bg-white border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20',
  filled: 'bg-pink-50 border border-transparent focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20',
  outlined: 'bg-transparent border-2 border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20'
};

const getValidationState = (error?: string, success?: string) => {
  if (error) return 'error';
  if (success) return 'success';
  return 'default';
};

const validationStyles = {
  default: '',
  error: 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
  success: 'border-green-500 focus:border-green-500 focus:ring-green-500/20'
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  success,
  info,
  size = 'md',
  variant = 'default',
  leftIcon,
  rightIcon,
  showPasswordToggle = false,
  type = 'text',
  className = '',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const validationState = getValidationState(error, success);
  const inputType = showPasswordToggle && type === 'password' 
    ? (showPassword ? 'text' : 'password') 
    : type;

  const inputClasses = `
    w-full rounded-xl transition-all duration-200 outline-none
    ${inputSizes[size]}
    ${inputVariants[variant]}
    ${validationStyles[validationState]}
    ${leftIcon ? 'pl-12' : ''}
    ${rightIcon || showPasswordToggle ? 'pr-12' : ''}
    ${className}
  `.trim();

  return (
    <div className="space-y-2">
      {label && (
        <motion.label
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </motion.label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}
        
        <motion.input
          ref={ref}
          type={inputType}
          className={inputClasses}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          whileFocus={{ scale: 1.01 }}
          // Spread all other props except Framer Motion specific ones
          {...(props as any)}
        />
        
        {(rightIcon || showPasswordToggle) && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {showPasswordToggle && type === 'password' ? (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            ) : rightIcon}
          </div>
        )}
        
        {/* Focus indicator */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute inset-0 rounded-xl border-2 border-pink-400 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>
      
      {/* Validation messages */}
      <AnimatePresence>
        {(error || success || info) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-sm"
          >
            {error && (
              <>
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span className="text-red-600">{error}</span>
              </>
            )}
            {success && (
              <>
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-600">{success}</span>
              </>
            )}
            {info && !error && !success && (
              <>
                <Info className="w-4 h-4 text-blue-500" />
                <span className="text-blue-600">{info}</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  success,
  info,
  resize = 'vertical',
  className = '',
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const validationState = getValidationState(error, success);
  
  const textareaClasses = `
    w-full px-4 py-3 rounded-xl transition-all duration-200 outline-none
    bg-white border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20
    ${validationStyles[validationState]}
    ${resize === 'none' ? 'resize-none' : 
      resize === 'vertical' ? 'resize-y' : 
      resize === 'horizontal' ? 'resize-x' : 'resize'}
    ${className}
  `.trim();

  return (
    <div className="space-y-2">
      {label && (
        <motion.label
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </motion.label>
      )}
      
      <div className="relative">
        <motion.textarea
          ref={ref}
          className={textareaClasses}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          whileFocus={{ scale: 1.01 }}
          // Spread all other props except Framer Motion specific ones
          {...(props as any)}
        />
        
        {/* Focus indicator */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute inset-0 rounded-xl border-2 border-pink-400 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>
      
      {/* Validation messages */}
      <AnimatePresence>
        {(error || success || info) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-sm"
          >
            {error && (
              <>
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span className="text-red-600">{error}</span>
              </>
            )}
            {success && (
              <>
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-600">{success}</span>
              </>
            )}
            {info && !error && !success && (
              <>
                <Info className="w-4 h-4 text-blue-500" />
                <span className="text-blue-600">{info}</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

Textarea.displayName = 'Textarea';

export const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  isLoading = false,
  placeholder = "Search...",
  ...props
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onSearch) {
      onSearch(newValue);
    }
  };

  return (
    <Input
      {...props}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      leftIcon={
        isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Search className="w-5 h-5" />
          </motion.div>
        ) : (
          <Search className="w-5 h-5" />
        )
      }
    />
  );
};

// Form wrapper component for better spacing and layout
export const FormGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {children}
    </div>
  );
};

// Input with floating label
export const FloatingLabelInput = forwardRef<HTMLInputElement, InputProps>(({
  label,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className="relative">
      <Input
        ref={ref}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        className="pt-6 pb-2"
      />
      
      {label && (
        <motion.label
          animate={{
            top: isFocused || hasValue ? '0.5rem' : '50%',
            fontSize: isFocused || hasValue ? '0.75rem' : '1rem',
            color: isFocused ? '#ec4899' : '#6b7280'
          }}
          transition={{ duration: 0.2 }}
          className="absolute left-4 pointer-events-none transform -translate-y-1/2 font-medium"
        >
          {label}
        </motion.label>
      )}
    </div>
  );
});

FloatingLabelInput.displayName = 'FloatingLabelInput';
