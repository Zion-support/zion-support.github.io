import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface NeoFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'holographic' | 'cyberpunk' | 'quantum' | 'neural';
  onClick?: () => void;
  disabled?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
}

const NeoFuturisticCard: React.FC<NeoFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  onClick,
  glowIntensity = 'medium'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Motion values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse position to rotation
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  // Spring animation for smooth movement
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'holographic':
        return {
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))',
          border: '1px solid rgba(0, 255, 255, 0.3)',
          shadow: '0 0 30px rgba(0, 255, 255, 0.3)',
          glow: 'rgba(0, 255, 255, 0.5)'
        };
      case 'cyberpunk':
        return {
          background: 'linear-gradient(135deg, rgba(255, 0, 100, 0.1), rgba(0, 255, 200, 0.1))',
          border: '1px solid rgba(255, 0, 100, 0.3)',
          shadow: '0 0 30px rgba(255, 0, 100, 0.3)',
          glow: 'rgba(255, 0, 100, 0.5)'
        };
      case 'quantum':
        return {
          background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(75, 0, 130, 0.1))',
          border: '1px solid rgba(138, 43, 226, 0.3)',
          shadow: '0 0 30px rgba(138, 43, 226, 0.3)',
          glow: 'rgba(138, 43, 226, 0.5)'
        };
      case 'neural':
        return {
          background: 'linear-gradient(135deg, rgba(0, 255, 127, 0.1), rgba(0, 191, 255, 0.1))',
          border: '1px solid rgba(0, 255, 127, 0.3)',
          shadow: '0 0 30px rgba(0, 255, 127, 0.3)',
          glow: 'rgba(0, 255, 127, 0.5)'
        };
      default:
        return {
          background: 'linear-gradient(135deg, rgba(0, 150, 255, 0.1), rgba(0, 255, 150, 0.1))',
          border: '1px solid rgba(0, 150, 255, 0.3)',
          shadow: '0 0 30px rgba(0, 150, 255, 0.3)',
          glow: 'rgba(0, 150, 255, 0.5)'
        };
    }
  };

  const variantStyles = getVariantStyles();

const NeoFuturisticCard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NeoFuturisticCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default NeoFuturisticCard;
