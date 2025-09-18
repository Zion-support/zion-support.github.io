import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FuturisticNeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  disabled?: boolean;
  className?: string;
  neonIntensity?: 'low' | 'medium' | 'high';
}

const FuturisticNeonButton: React.FC<FuturisticNeonButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  disabled = false,
  className = '',
  neonIntensity = 'medium'
}) => {
  const variants = {
    primary: {
      border: 'border-cyan-400',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-400/50',
      hoverGlow: 'hover:shadow-cyan-400/80',
      bg: 'bg-cyan-400/10',
      hoverBg: 'hover:bg-cyan-400/20'
    },
    secondary: {
      border: 'border-purple-400',
      text: 'text-purple-400',
      glow: 'shadow-purple-400/50',
      hoverGlow: 'hover:shadow-purple-400/80',
      bg: 'bg-purple-400/10',
      hoverBg: 'hover:bg-purple-400/20'
    },
    success: {
      border: 'border-emerald-400',
      text: 'text-emerald-400',
      glow: 'shadow-emerald-400/50',
      hoverGlow: 'hover:shadow-emerald-400/80',
      bg: 'bg-emerald-400/10',
      hoverBg: 'hover:bg-emerald-400/20'
    },
    warning: {
      border: 'border-amber-400',
      text: 'text-amber-400',
      glow: 'shadow-amber-400/50',
      hoverGlow: 'hover:shadow-amber-400/80',
      bg: 'bg-amber-400/10',
      hoverBg: 'hover:bg-amber-400/20'
    },
    danger: {
      border: 'border-red-400',
      text: 'text-red-400',
      glow: 'shadow-red-400/50',
      hoverGlow: 'hover:shadow-red-400/80',
      bg: 'bg-red-400/10',
      hoverBg: 'hover:bg-red-400/20'
    }
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const neonIntensities = {
    low: 'shadow-lg',
    medium: 'shadow-xl',
    high: 'shadow-2xl'
  };

  const selectedVariant = variants[variant];
  const selectedSize = sizes[size];
  const selectedNeonIntensity = neonIntensities[neonIntensity];

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FuturisticNeonButton</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default FuturisticNeonButton;
