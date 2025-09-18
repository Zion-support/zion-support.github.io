<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'neural' | 'quantum' | 'holographic' | 'cyberpunk' | 'space' | 'biotech' | 'energy';
  intensity?: 'low' | 'medium' | 'high';
  glow?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'neural',
  intensity = 'medium',
  glow = true,
  interactive = true,
  onClick
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Get variant-specific colors and effects
  const getVariantStyles = () => {
    switch (variant) {
      case 'neural':
        return {
          borderColor: 'from-cyan-500/50 to-blue-500/50',
          glowColor: 'from-cyan-400/20 to-blue-400/20',
          accentColor: 'text-cyan-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#60a5fa'
        };
      case 'quantum':
        return {
          borderColor: 'from-purple-500/50 to-pink-500/50',
          glowColor: 'from-purple-400/20 to-pink-400/20',
          accentColor: 'text-purple-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#a855f7'
        };
      case 'holographic':
        return {
          borderColor: 'from-green-500/50 to-emerald-500/50',
          glowColor: 'from-green-400/20 to-emerald-400/20',
          accentColor: 'text-green-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#10b981'
        };
      case 'cyberpunk':
        return {
          borderColor: 'from-red-500/50 to-orange-500/50',
          glowColor: 'from-red-400/20 to-orange-400/20',
          accentColor: 'text-red-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#ef4444'
        };
      case 'space':
        return {
          borderColor: 'from-blue-500/50 to-indigo-500/50',
          glowColor: 'from-blue-400/20 to-indigo-400/20',
          accentColor: 'text-blue-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#3b82f6'
        };
      case 'biotech':
        return {
          borderColor: 'from-green-500/50 to-teal-500/50',
          glowColor: 'from-green-400/20 to-teal-400/20',
          accentColor: 'text-green-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#14b8a6'
        };
      case 'energy':
        return {
          borderColor: 'from-yellow-500/50 to-orange-500/50',
          glowColor: 'from-yellow-400/20 to-orange-400/20',
          accentColor: 'text-yellow-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#eab308'
        };
      default:
        return {
          borderColor: 'from-cyan-500/50 to-blue-500/50',
          glowColor: 'from-cyan-400/20 to-blue-400/20',
          accentColor: 'text-cyan-400',
          bgGradient: 'from-slate-900/80 to-slate-800/80',
          particleColor: '#60a5fa'
        };
    }
  };

  const styles = getVariantStyles();

  // Canvas animation for particle effects
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

    const createParticles = () => {
      const count = intensity === 'high' ? 20 : intensity === 'medium' ? 12 : 6;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1,
          life: Math.random() * 100,
          maxLife: 100
        });
      }
    };

    const getParticleColor = (variant: string): string => {
      switch (variant) {
        case 'quantum':
          return `hsl(${280 + Math.sin(Date.now() * 0.001) * 80}, 80%, 70%)`;
        case 'holographic':
          return `hsl(${160 + Math.sin(Date.now() * 0.001) * 100}, 90%, 65%)`;
        case 'cyberpunk':
          return `hsl(${0 + Math.sin(Date.now() * 0.001) * 60}, 100%, 60%)`;
        case 'neural':
          return `hsl(${200 + Math.sin(Date.now() * 0.001) * 60}, 70%, 60%)`;
        case 'space':
          return `hsl(${220 + Math.sin(Date.now() * 0.001) * 80}, 90%, 75%)`;
        default:
          return `hsl(${200 + Math.sin(Date.now() * 0.001) * 60}, 70%, 60%)`;
      }
    };

    const animate = () => {
      time += 1;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.fillStyle = `${styles.particleColor}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawHolographicGrid = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      ctx.strokeStyle = `hsla(${160 + Math.sin(time * 0.015) * 100}, 90%, 65%, 0.3)`;
      ctx.lineWidth = 0.5;
      
      for (let x = 0; x < canvas.width; x += 30) {
        for (let y = 0; y < canvas.height; y += 30) {
          const opacity = Math.sin(time + x * 0.01 + y * 0.01) * 0.2 + 0.1;
          ctx.globalAlpha = opacity;
          ctx.strokeRect(x, y, 30, 30);
        }
      }
      ctx.globalAlpha = 1;
    };

    const drawQuantumEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      for (let i = 0; i < 5; i++) {
        const x = (i / 5) * canvas.width;
        const y = Math.sin(time + i * 0.5) * 20 + canvas.height / 2;
        ctx.fillStyle = `rgba(0, 255, 255, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawCyberpunkEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const height = Math.random() * 50 + 30;
        ctx.fillStyle = `rgba(0, 255, 0, ${0.4 + Math.sin(time + i) * 0.2})`;
        ctx.fillRect(x, y, 2, height);
      }
    };

    const drawNeuralConnections = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            const opacity = (80 - distance) / 80 * 0.3;
            ctx.strokeStyle = `rgba(0, 255, 128, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawSpaceEffects = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const x = canvas.width / 2 + Math.cos(time + i) * 100;
        const y = canvas.height / 2 + Math.sin(time + i) * 100;
        const radius = Math.sin(time + i) * 20 + 40;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(255, 255, 255, 0.2)`);
        gradient.addColorStop(0.5, `rgba(0, 255, 255, 0.1)`);
        gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      }
    };

    createParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant, intensity, glow, styles.particleColor]);

  const handleMouseEnter = () => {
    if (interactive) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (interactive) setIsHovered(false);
  };

  const handleMouseDown = () => {
    if (interactive) setIsPressed(true);
  };

  const handleMouseUp = () => {
    if (interactive) setIsPressed(false);
  };
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const EnhancedFuturisticCard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedFuturisticCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedFuturisticCard;
