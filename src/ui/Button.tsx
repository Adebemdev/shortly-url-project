import { ReactNode } from 'react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const Button = ({
  variant = 'primary',
  size = 'small',
  children,
  onClick,
  className = '',

  ...props
}: ButtonProps) => {
  //BaseStyles
  const baseStyles =
    'font-semibold rounded-full font-sans block transition-colors focus:outline-none focus:ring-2';

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-cyan hover:bg-blue-700 text-White',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  // Size styles
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      {...props}
      className={`flex ${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
