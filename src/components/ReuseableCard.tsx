import { ReactNode } from 'react';

interface CardProps {
  title: ReactNode;
  content: ReactNode;
  descriptions: ReactNode;
}

// Open/Closed Principle: This component is open for extension and closed for modification
const ReuseableCard = ({ title, content, descriptions }: CardProps) => {
  return (
    <div className="relative z-10 flex h-max w-full flex-col items-center justify-center rounded-md bg-White p-8 md:items-start">
      <div>{content}</div>
      <div>{title}</div>
      <div>{descriptions}</div>
    </div>
  );
};

export default ReuseableCard;
