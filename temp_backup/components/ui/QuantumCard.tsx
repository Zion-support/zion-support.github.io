<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuantumCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  onClick?: () => void;
  hover?: boolean;
  glow?: boolean;
  border?: boolean;
  shadow?: boolean;
}

const QuantumCard: React.FC<QuantumCardProps> = ({
  children,
  className = '',
  variant = 'quantum',
  intensity = 'medium',
  onClick,
  hover = true,
  glow = true,
  border = true,
  shadow = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  // Get variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          borderGradient: 'from-cyan-400 via-blue-500 to-purple-600',
          glowColor: 'rgba(34, 211, 238, 0.3)',
          bgGradient: 'from-slate-900/80 to-slate-800/60',
          textColor: 'text-cyan-400'
        };
      case 'holographic':
        return {
          borderGradient: 'from-pink-400 via-purple-500 to-indigo-600',
          glowColor: 'rgba(236, 72, 153, 0.3)',
          bgGradient: 'from-slate-900/80 to-slate-800/60',
          textColor: 'text-pink-400'
        };
      case 'neural':
        return {
          borderGradient: 'from-green-400 via-emerald-500 to-teal-600',
          glowColor: 'rgba(34, 197, 94, 0.3)',
          bgGradient: 'from-slate-900/80 to-slate-800/60',
          textColor: 'text-green-400'
        };
      case 'cyberpunk':
        return {
          borderGradient: 'from-orange-400 via-red-500 to-pink-600',
          glowColor: 'rgba(251, 146, 60, 0.3)',
          bgGradient: 'from-slate-900/80 to-slate-800/60',
          textColor: 'text-orange-400'
        };
      default:
        return {
          borderGradient: 'from-cyan-400 via-blue-500 to-purple-600',
          glowColor: 'rgba(34, 211, 238, 0.3)',
          bgGradient: 'from-slate-900/80 to-slate-800/60',
          textColor: 'text-cyan-400'
        };
    }
  };

  const variantStyles = getVariantStyles();

  // Canvas animation for quantum effects
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !glow) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const count = intensity === 'high' ? 20 : intensity === 'medium' ? 12 : 8;
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          life: Math.random() * 100,
          maxLife: 100
        });
      }
    };

    const animate = () => {
      time += 1;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha * 0.6;
        ctx.fillStyle = variantStyles.glowColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [variant, intensity, glow, variantStyles.glowColor]);

  const cardVariants = {
    initial: { 
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0
    },
    hover: { 
      scale: 1.02,
      rotateX: 2,
      rotateY: 2,
      z: 20,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    pressed: { 
      scale: 0.98,
      rotateX: 1,
      rotateY: 1,
      z: 10,
      transition: {
        duration: 0.1
      }
    }
  };

  const borderVariants = {
    initial: { opacity: 0.3 },
    hover: { opacity: 0.8 },
    pressed: { opacity: 0.6 }
  };
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const QuantumCard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">QuantumCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default QuantumCard;
