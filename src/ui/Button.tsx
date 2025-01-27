import { ReactNode } from 'react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large' | 'rect';
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
    secondary: ' hover:bg-gray-700 lg:text-gray-neutral ',
    outline:
      'bg-primary-cyan text-white w-full md:w-1/4 rounded-md leading-[1.15] tracking-tightest',
  };

  // Size styles
  const sizeStyles = {
    small: 'px-6 py-2 text-sm',
    medium: 'px-12 py-4 text-xl',
    large: 'px-24 py-2 text-2xl',
    rect: 'px-12  py-4 text-xl',
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
