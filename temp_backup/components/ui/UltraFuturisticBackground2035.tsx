<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2035Props {
  children?: React.ReactNode;
  className?: string;
}

const UltraFuturisticBackground2035: React.FC<UltraFuturisticBackground2035Props> = ({ 
  children, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    // Create particles
    const createParticle = (x: number, y: number) => {
      const colors = [
        '#00ffff', // Cyan
        '#ff00ff', // Magenta
        '#ffff00', // Yellow
        '#00ff00', // Green
        '#ff0080', // Pink
        '#8000ff', // Purple
        '#ff8000', // Orange
        '#0080ff'  // Blue
      ];
      
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        maxLife: Math.random() * 100 + 50
      });
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Remove dead particles
        if (particle.life > particle.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle with glow effect
        const alpha = 1 - (particle.life / particle.maxLife);
        ctx.save();
        
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.globalAlpha = alpha;
        
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }

      // Create new particles
      if (Math.random() < 0.1) {
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }

      // Create particles on mouse movement
      if (Math.random() < 0.05) {
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        );
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const UltraFuturisticBackground2035: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticBackground2035</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraFuturisticBackground2035;
