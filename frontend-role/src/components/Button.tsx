// Button.tsx
import React from 'react';
import '../styles/Button.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, className }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`button ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
