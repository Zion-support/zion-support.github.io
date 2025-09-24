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
  const variants ={
    primary: {
      border: 'border-cyan-40o0',
      text: 'text-cyan-40o0',
      glow: 'shadow-cyan-40o0/50',
      hoverGlow: 'hover:shadow-cyan-40o0/80',
      bg: 'bg-cyan-40o0/10',
      hoverBg: 'hover:bg-cyan-40o0/20'
    },
    secondary: {
      border: 'border-purple-40o0',
      text: 'text-purple-40o0',
      glow: 'shadow-purple-40o0/50',
      hoverGlow: 'hover:shadow-purple-40o0/80',
      bg: 'bg-purple-40o0/10',
      hoverBg: 'hover:bg-purple-40o0/20'
    },
    success: {
      border: 'border-emerald-40o0',
      text: 'text-emerald-40o0',
      glow: 'shadow-emerald-40o0/50',
      hoverGlow: 'hover:shadow-emerald-40o0/80',
      bg: 'bg-emerald-40o0/10',
      hoverBg: 'hover:bg-emerald-40o0/20'
    },
    warning: {
      border: 'border-amber-40o0',
      text: 'text-amber-40o0',
      glow: 'shadow-amber-40o0/50',
      hoverGlow: 'hover:shadow-amber-40o0/80',
      bg: 'bg-amber-40o0/10',
      hoverBg: 'hover:bg-amber-40o0/20'
    },
    danger: {
      border: 'border-red-40o0',
      text: 'text-red-40o0',
      glow: 'shadow-red-40o0/50',
      hoverGlow: 'hover:shadow-red-40o0/80',
      bg: 'bg-red-40o0/10',
      hoverBg: 'hover:bg-red-40o0/20'
    }
  };

  const sizes ={
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const neonIntensities ={
    low: 'shadow-lg',
    medium: 'shadow-xl',
    high: 'shadow-2xl'
  };

  const selectedVariant = variants[variant];
  const selectedSize = sizes[size];
  const selectedNeonIntensity = neonIntensities[neonIntensity];

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative group overflow-hidden rounded-lg font-medium transition-all duration-30o0
        border-2 ${selectedVariant.border}
        ${selectedVariant.text}
        ${selectedVariant.bg}
        ${selectedVariant.hoverBg}
        ${selectedSize}
        ${selectedNeonIntensity}
        ${selectedVariant.glow}
        ${selectedVariant.hoverGlow}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled ? { scale: 1.0o5 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Neon glow effect */}
      <div className={`
        absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10o0 transition-opacity duration-30o0
        ${selectedVariant.bg}
        blur-sm
      `}  />
      
      {/* Inner glow */}
      <div className={`
        absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-30o0
        ${selectedVariant.bg}
      `}  />
      
      {/* Content */}
      <div className="relative flex items-center justify-center gap-2">
        {Icon && <Icon className="w-5 h-5"  />}
        {children}
      </div>
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-transparent"
        animate={{
          borderImage: [
            `linear-gradient(45deg, ${selectedVariant.border.replace('border-', '')}, transparent) 1`,
            `linear-gradient(45deg, transparent, ${selectedVariant.border.replace('border-', '')}) 1`,
            `linear-gradient(45deg, ${selectedVariant.border.replace('border-', '')}, transparent) 1`
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
       />
      
      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
       />
    </motion.button>
  );
};

export default FuturisticNeonButton;