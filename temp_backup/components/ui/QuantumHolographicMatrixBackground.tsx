<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumHolographicMatrixBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const QuantumHolographicMatrixBackground: React.FC<QuantumHolographicMatrixBackgroundProps> = ({
  children,
  className = '',
  intensity = 'medium'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Quantum particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'holographic' | 'matrix';
    }> = [];

    // Initialize particles
    const initParticles = () => {
      const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 150 : 100;
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080', '#8000ff'][Math.floor(Math.random() * 6)],
          type: ['quantum', 'holographic', 'matrix'][Math.floor(Math.random() * 3)] as any
        });
      }
    };

    // Matrix rain effect
    const matrixRain: Array<{ x: number; y: number; speed: number; char: string; opacity: number }> = [];
    
    const initMatrixRain = () => {
      for (let i = 0; i < 50; i++) {
        matrixRain.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          char: String.fromCharCode(0x30A0 + Math.random() * 96),
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };

    // Holographic grid
    const drawHolographicGrid = () => {
      const gridSize = 50;
      const gridOpacity = 0.1;
      
      ctx.strokeStyle = `rgba(0, 255, 255, ${gridOpacity})`;
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Quantum entanglement effect
    const drawQuantumEntanglement = () => {
      particles.forEach((particle, i) => {
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100 && particle.type === 'quantum' && otherParticle.type === 'quantum') {
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw holographic grid
      drawHolographicGrid();

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        
        if (particle.type === 'quantum') {
          // Quantum particle with glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'holographic') {
          // Holographic particle with geometric shape
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y - particle.size);
          ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
          ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
          ctx.closePath();
          ctx.fill();
        } else {
          // Matrix particle
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 3;
          ctx.fillRect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
        }

        // Reset shadow
        ctx.shadowBlur = 0;
      });

      // Update and draw matrix rain
      matrixRain.forEach((drop, index) => {
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
        }

        ctx.globalAlpha = drop.opacity;
        ctx.fillStyle = '#00ff00';
        ctx.font = '14px monospace';
        ctx.fillText(drop.char, drop.x, drop.y);
      });

      // Draw quantum entanglement
      drawQuantumEntanglement();

      // Reset global alpha
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    initMatrixRain();
    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity]);
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const QuantumHolographicMatrixBackground: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">QuantumHolographicMatrixBackground</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default QuantumHolographicMatrixBackground;
