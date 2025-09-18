<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface EnhancedQuantumBackgroundProps {
  children?: React.ReactNode;
  intensity?: number;
  variant?: 'default' | 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
}

const EnhancedQuantumBackground: React.FC<EnhancedQuantumBackgroundProps> = ({
  children,
  intensity = 1.0,
  variant = 'default'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Quantum particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;
      type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
    }> = [];

    const colors = {
      quantum: ['#00ffff', '#0080ff', '#8000ff', '#ff0080'],
      holographic: ['#ff00ff', '#8000ff', '#0080ff', '#00ffff'],
      neural: ['#00ff80', '#80ff00', '#ff8000', '#ff0080'],
      cyberpunk: ['#ff0000', '#ff8000', '#ffff00', '#80ff00']
    };

    const createParticle = () => {
      const type = variant === 'default' ? 'quantum' : variant;
      const colorSet = colors[type];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * intensity,
        vy: (Math.random() - 0.5) * 2 * intensity,
        size: Math.random() * 3 * intensity + 1,
        life: Math.random() * 100,
        maxLife: 100,
        color: colorSet[Math.floor(Math.random() * colorSet.length)],
        type
      };
    };

    // Initialize particles
    for (let i = 0; i < 100 * intensity; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = createParticle();
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle trail
        ctx.globalAlpha = alpha * 0.3;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5);
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = particle.size * 0.5;
        ctx.stroke();
      });

      // Draw quantum connections
      ctx.globalAlpha = 0.1;
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          );
          
          if (distance < 100 * intensity) {
            const alpha = (100 - distance) / 100 * 0.1;
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = particle1.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      // Draw quantum field effects
      if (variant === 'quantum' || variant === 'default') {
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = '#00ffff';
        for (let i = 0; i < 5; i++) {
          const x = Math.sin(Date.now() * 0.001 + i) * canvas.width * 0.5 + canvas.width * 0.5;
          const y = Math.cos(Date.now() * 0.001 + i) * canvas.height * 0.5 + canvas.height * 0.5;
          const radius = 50 + Math.sin(Date.now() * 0.002 + i) * 30;
          
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw holographic matrix
      if (variant === 'holographic') {
        ctx.globalAlpha = 0.03;
        ctx.strokeStyle = '#ff00ff';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < canvas.width; i += 50) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }
        
        for (let i = 0; i < canvas.height; i += 50) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i);
          ctx.stroke();
        }
      }

      // Draw neural network
      if (variant === 'neural') {
        ctx.globalAlpha = 0.02;
        ctx.strokeStyle = '#00ff80';
        ctx.lineWidth = 2;
        
        const nodes = 8;
        for (let i = 0; i < nodes; i++) {
          for (let j = i + 1; j < nodes; j++) {
            const x1 = (i / (nodes - 1)) * canvas.width;
            const y1 = Math.sin(Date.now() * 0.001 + i) * 100 + canvas.height * 0.5;
            const x2 = (j / (nodes - 1)) * canvas.width;
            const y2 = Math.cos(Date.now() * 0.001 + j) * 100 + canvas.height * 0.5;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }

      // Draw cyberpunk grid
      if (variant === 'cyberpunk') {
        ctx.globalAlpha = 0.04;
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 1;
        
        const gridSize = 80;
        for (let i = 0; i < canvas.width; i += gridSize) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i + gridSize * 0.5, canvas.height);
          ctx.stroke();
        }
        
        for (let i = 0; i < canvas.height; i += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(canvas.width, i + gridSize * 0.5);
          ctx.stroke();
        }
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
  }, [intensity, variant]);
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const EnhancedQuantumBackground: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedQuantumBackground</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedQuantumBackground;
