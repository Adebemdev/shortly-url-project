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
    'font-bold rounded-full font-sans text-White block transition-colors focus:outline-none focus:ring-2';

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-cyan hover:bg-blue-700 text-White',
    secondary: 'bg-gray-600 hover:bg-gray-700 lg:text-gray-neutral',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  // Size styles
  const sizeStyles = {
    small: 'px-6 py-2 text-sm',
    medium: 'px-12 py-4 text-xl',
    large: 'px-24 py-2 text-2xl',
  };

  return (
    <button
      onClick={onClick}
      {...props}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
