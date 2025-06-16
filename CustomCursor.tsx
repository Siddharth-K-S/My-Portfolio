
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set cursor visible after component mounts to prevent flashing on page load
    setTimeout(() => setIsVisible(true), 500);

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const checkHoverable = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      const isHoverable = hoveredElement?.matches('a, button, input, textarea, select, [role="button"]') || 
                           hoveredElement?.closest('a, button, input, textarea, select, [role="button"]');
      setIsPointer(!!isHoverable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    // Handle cursor visibility on page idle
    let timeout: NodeJS.Timeout;
    const resetTimeout = () => {
      if (timeout) clearTimeout(timeout);
      setIsVisible(true);
      timeout = setTimeout(() => setIsVisible(false), 5000); // Hide cursor after 5s of inactivity
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousemove', checkHoverable);
    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial timeout
    resetTimeout();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousemove', checkHoverable);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (timeout) clearTimeout(timeout);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <>
      {/* Main cursor with blur effect */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference ${
          isPointer || !isVisible ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          opacity: isVisible && !isPointer ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.8
        }}
      />

      {/* Hover effect for buttons and links */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm pointer-events-none z-40"
        style={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        animate={{
          scale: isPointer ? 1.5 : 0,
          opacity: isPointer ? 0.5 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      />
    </>
  );
};

export default CustomCursor;
