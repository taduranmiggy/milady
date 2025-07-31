import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Info, X, AlertCircle } from 'lucide-react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'info' | 'error' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export interface StatusBadgeProps {
  status: 'online' | 'offline' | 'busy' | 'away';
  showText?: boolean;
  className?: string;
}

export interface NotificationBadgeProps {
  count: number;
  max?: number;
  className?: string;
}

const badgeVariants = {
  success: {
    bg: 'bg-green-100 border-green-200 text-green-800',
    icon: CheckCircle,
    iconColor: 'text-green-600'
  },
  warning: {
    bg: 'bg-yellow-100 border-yellow-200 text-yellow-800',
    icon: AlertTriangle,
    iconColor: 'text-yellow-600'
  },
  info: {
    bg: 'bg-blue-100 border-blue-200 text-blue-800',
    icon: Info,
    iconColor: 'text-blue-600'
  },
  error: {
    bg: 'bg-red-100 border-red-200 text-red-800',
    icon: AlertCircle,
    iconColor: 'text-red-600'
  },
  primary: {
    bg: 'bg-pink-100 border-pink-200 text-pink-800',
    icon: Info,
    iconColor: 'text-pink-600'
  },
  secondary: {
    bg: 'bg-gray-100 border-gray-200 text-gray-800',
    icon: Info,
    iconColor: 'text-gray-600'
  }
};

const badgeSizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base'
};

const iconSizes = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5'
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = false,
  removable = false,
  onRemove,
  className = ''
}) => {
  const variantStyles = badgeVariants[variant];
  const IconComponent = variantStyles.icon;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      className={`
        inline-flex items-center gap-1.5 font-medium rounded-full border
        ${variantStyles.bg}
        ${badgeSizes[size]}
        ${className}
      `.trim()}
    >
      {icon && (
        <IconComponent className={`${iconSizes[size]} ${variantStyles.iconColor}`} />
      )}
      
      <span>{children}</span>
      
      {removable && onRemove && (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={onRemove}
          className={`ml-1 hover:bg-black/10 rounded-full p-0.5 ${variantStyles.iconColor}`}
        >
          <X className={iconSizes[size]} />
        </motion.button>
      )}
    </motion.span>
  );
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  showText = true,
  className = ''
}) => {
  const statusConfig = {
    online: { color: 'bg-green-500', text: 'Online', textColor: 'text-green-700' },
    offline: { color: 'bg-gray-400', text: 'Offline', textColor: 'text-gray-700' },
    busy: { color: 'bg-red-500', text: 'Busy', textColor: 'text-red-700' },
    away: { color: 'bg-yellow-500', text: 'Away', textColor: 'text-yellow-700' }
  };

  const config = statusConfig[status];

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`w-3 h-3 rounded-full ${config.color}`}
      >
        {status === 'online' && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-full h-full bg-green-400 rounded-full"
          />
        )}
      </motion.div>
      
      {showText && (
        <span className={`text-sm font-medium ${config.textColor}`}>
          {config.text}
        </span>
      )}
    </div>
  );
};

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  max = 99,
  className = ''
}) => {
  const displayCount = count > max ? `${max}+` : count.toString();
  
  if (count === 0) return null;

  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className={`
        absolute -top-2 -right-2 min-w-[1.25rem] h-5 
        bg-red-500 text-white text-xs font-bold 
        rounded-full flex items-center justify-center
        px-1 shadow-lg border-2 border-white
        ${className}
      `.trim()}
    >
      {displayCount}
    </motion.span>
  );
};

// Specialized badge components
export const ProgressBadge: React.FC<{
  progress: number;
  className?: string;
}> = ({ progress, className = '' }) => {
  const getVariant = (progress: number) => {
    if (progress >= 80) return 'success';
    if (progress >= 60) return 'info';
    if (progress >= 40) return 'warning';
    return 'error';
  };

  return (
    <Badge variant={getVariant(progress)} className={className}>
      {progress}% Complete
    </Badge>
  );
};

export const PriorityBadge: React.FC<{
  priority: 'high' | 'medium' | 'low';
  className?: string;
}> = ({ priority, className = '' }) => {
  const priorityConfig = {
    high: { variant: 'error' as const, text: 'High Priority' },
    medium: { variant: 'warning' as const, text: 'Medium Priority' },
    low: { variant: 'info' as const, text: 'Low Priority' }
  };

  const config = priorityConfig[priority];

  return (
    <Badge variant={config.variant} icon className={className}>
      {config.text}
    </Badge>
  );
};

export const TrendBadge: React.FC<{
  value: number;
  suffix?: string;
  showIcon?: boolean;
  className?: string;
}> = ({ value, suffix = '', showIcon = true, className = '' }) => {
  const isPositive = value > 0;
  const variant = isPositive ? 'success' : value < 0 ? 'error' : 'secondary';
  
  return (
    <Badge variant={variant} className={className}>
      {showIcon && (
        <span className="text-sm">
          {isPositive ? '↗' : value < 0 ? '↘' : '→'}
        </span>
      )}
      {Math.abs(value)}{suffix}
    </Badge>
  );
};
