import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass' | 'neon' | 'holographic';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function FuturisticCard({ 
  children, 
  className = '', 
  variant = 'default',
  hoverEffect = true,
  onClick 
}: FuturisticCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `
    relative overflow-hidden rounded-2xl border transition-all duration-500
    ${hoverEffect ? 'cursor-pointer transform-gpu' : ''}
    ${className}
  `;

  const variants = {
    default: `
      bg-gray-900/50 border-gray-700/50 backdrop-blur-sm
      ${hoverEffect ? 'hover:bg-gray-800/60 hover:border-gray-600/50 hover:scale-105' : ''}
    `,
    gradient: `
      bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20 
      border-blue-500/30 backdrop-blur-sm
      ${hoverEffect ? 'hover:from-blue-800/30 hover:via-purple-800/30 hover:to-green-800/30 hover:scale-105' : ''}
    `,
    glass: `
      bg-white/5 border-white/10 backdrop-blur-xl
      ${hoverEffect ? 'hover:bg-white/10 hover:border-white/20 hover:scale-105' : ''}
    `,
    neon: `
      bg-gray-900/80 border-cyan-400/50 backdrop-blur-sm
      ${hoverEffect ? 'hover:border-cyan-300/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-105' : ''}
    `,
    holographic: `
      bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 
      border-cyan-400/30 backdrop-blur-sm
      ${hoverEffect ? 'hover:from-cyan-400/20 hover:via-blue-400/20 hover:to-purple-400/20 hover:scale-105' : ''}
    `
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: { opacity: 1, scale: 1.2 }
  };

const FuturisticCard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FuturisticCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default FuturisticCard;
