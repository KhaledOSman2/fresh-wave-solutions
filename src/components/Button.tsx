
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick 
}: ButtonProps) => {
  const baseStyles = 'relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background overflow-hidden';
  
  const variantStyles = {
    primary: 'bg-sea-600 text-white shadow-button hover:bg-sea-700',
    secondary: 'bg-sea-100 text-sea-900 hover:bg-sea-200',
    outline: 'border border-sea-300 text-sea-800 hover:bg-sea-50',
  };
  
  const buttonContent = (
    <span className="relative z-10 px-4 py-2">
      {children}
    </span>
  );

  const rippleEffect = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.className = 'absolute rounded-full bg-white/30 animate-ripple';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      button.removeChild(ripple);
    }, 1000);

    if (onClick) onClick();
  };

  if (href) {
    return (
      <Link
        to={href}
        className={cn(baseStyles, variantStyles[variant], className)}
        onClick={rippleEffect}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={rippleEffect}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
