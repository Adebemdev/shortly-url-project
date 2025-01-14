import React, { useState } from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: ButtonStyle; // Use 'variant' instead of 'type' for styling
  // type?: 'submit' | 'reset' | 'button'; // Keep the HTML button type
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  onClick?: () => void;
  bgBehavior?: BackgroundBehavior;
}

type ButtonStyle = 'primary' | 'secondary' | 'transparent'; // etc
type BackgroundBehavior = 'default' | 'onClick';

export const Button = ({
  children,
  disabled = false,
  to,
  onClick,
  variant = 'primary',
  bgBehavior = 'default',
  ...props
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState<Boolean>(false);
  const getBgClasses = (
    buttonType: ButtonStyle,
    behavior: BackgroundBehavior,
  ) => {
    if (behavior === 'onClick') {
      return isClicked ? '' : 'bg-transparent hover:bg-yellow-300';
    }

    switch (buttonType) {
      case 'primary':
        return ' hover: focus: focus:';
      case 'secondary':
        return 'bg-transparent hover: focus:bg-stone-200 focus:';
      case 'transparent':
        return 'bg-transparent hover:bg-stone-200 focus:bg-stone-100 focus:';
      default:
        return ' hover: focus: focus:';
    }
  };

  const base = `
  transition-color 
  text-sm 
  capitalize
  inline-block 
  rounded-full 
  font-semibold 
  tracking-wide
`;

  const styles: Record<ButtonStyle, string> = {
    primary: `${base}  ${getBgClasses('primary', bgBehavior)} px-2 py-8 sm:px-5 sm:py-3`,
    secondary: `
    transition-color 
    text-sm 
    inline-block 
    px-8
    py-2.5  
    rounded-full 
    font-semibold 
    tracking-wide 
    bg-primary-cyan 
  `,
    transparent: `${base}
    ${getBgClasses('transparent', bgBehavior)}
    px-4 py-2.5`,
  };

  const handleClick = () => {
    if (bgBehavior === 'onClick') {
      setIsClicked(!isClicked);
    }
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={styles[variant]}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
