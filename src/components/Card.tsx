import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  className?: string;
}

const cardVariants = {
  default: 'bg-white pinky-accent-bg border border-pink-200 shadow-sm',
  elevated: 'bg-white pinky-accent-bg border border-pink-200 shadow-lg',
  outlined: 'bg-transparent border-2 border-pink-300',
  glass: 'bg-white/80 backdrop-blur-lg border border-white/20 shadow-xl'
};

const cardSizes = {
  sm: 'p-4',
  md: 'p-6', 
  lg: 'p-8'
};

const hoverEffects = {
  lift: 'hover:shadow-xl hover:-translate-y-2 transition-all duration-300',
  glow: 'hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-300',
  scale: 'hover:scale-105 transition-transform duration-300',
  none: ''
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  size = 'md',
  hover = true,
  className = '',
  onClick
}) => {
  const baseClasses = `
    rounded-3xl 
    ${cardVariants[variant]} 
    ${cardSizes[size]}
    ${hover ? hoverEffects.lift : hoverEffects.none}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim();

  if (onClick) {
    return (
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={baseClasses}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`mt-6 pt-4 border-t border-pink-100 ${className}`}>
      {children}
    </div>
  );
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  gradient = 'from-pink-500 to-rose-500',
  className = ''
}) => {
  return (
    <Card variant="elevated" hover className={`group ${className}`}>
      <CardHeader>
        <motion.div 
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} text-white mb-4`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      </CardHeader>
      
      <CardContent>
        <h3 className="heading-md text-gray-900 group-hover:text-pink-600 transition-colors mb-3">
          {title}
        </h3>
        <p className="text-body-md text-gray-700 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

// Specialized cards for different use cases
export const StatCard: React.FC<{
  value: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}> = ({ value, label, trend = 'neutral', className = '' }) => {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600', 
    neutral: 'text-gray-600'
  };

  return (
    <Card variant="glass" className={`text-center ${className}`}>
      <CardContent>
        <div className={`heading-lg text-gradient-primary mb-2`}>
          {value}
        </div>
        <div className={`text-body-sm ${trendColors[trend]}`}>
          {label}
        </div>
      </CardContent>
    </Card>
  );
};

export const TestimonialCard: React.FC<{
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  className?: string;
}> = ({ quote, author, role, rating = 5, className = '' }) => {
  return (
    <Card variant="elevated" className={`${className}`}>
      <CardContent>
        {rating && (
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
        )}
        
        <blockquote className="text-body-md text-gray-700 italic mb-4">
          "{quote}"
        </blockquote>
        
        <div className="text-sm">
          <div className="font-semibold text-gray-900">{author}</div>
          {role && <div className="text-gray-600">{role}</div>}
        </div>
      </CardContent>
    </Card>
  );
};
