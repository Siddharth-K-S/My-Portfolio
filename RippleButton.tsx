
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

const RippleButton = ({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button'
}: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleCount = useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      
      // Calculate ripple position centered on click
      const centerX = e.clientX - rect.left;
      const centerY = e.clientY - rect.top;
      
      // Calculate ripple size (needs to cover the button)
      const size = Math.max(rect.width, rect.height) * 2;
      
      // Add new ripple
      const newRipple = {
        x: centerX - size / 2,
        y: centerY - size / 2,
        size,
        id: rippleCount.current
      };
      
      rippleCount.current += 1;
      setRipples([...ripples, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prevRipples => prevRipples.filter(r => r.id !== newRipple.id));
      }, 600);
    }
    
    if (onClick) onClick();
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'linear' }}
        />
      ))}
      {children}
    </button>
  );
};

export default RippleButton;
