<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticMatrixBackground2027Props {
  children: React.ReactNode;
  className?: string;
}

export default function UltraFuturisticMatrixBackground2027({ 
  children, 
  className = '' 
}: UltraFuturisticMatrixBackground2027Props) {
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

    // Matrix rain effect
    const matrix = {
      chars: '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
      fontSize: 14,
      columns: 0,
      drops: [] as number[],
      colors: ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6', '#f59e0b']
    };

    // Initialize drops
    const initDrops = () => {
      matrix.columns = Math.floor(canvas.width / matrix.fontSize);
      matrix.drops = Array(matrix.columns).fill(1);
    };

    initDrops();

    // Animation loop
    const animate = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
      gradient.addColorStop(0.3, 'rgba(0, 0, 0, 0.9)');
      gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.85)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix rain effect
      ctx.font = `${matrix.fontSize}px monospace`;
      
      for (let i = 0; i < matrix.drops.length; i++) {
        const char = matrix.chars[Math.floor(Math.random() * matrix.chars.length)];
        const x = i * matrix.fontSize;
        const y = matrix.drops[i] * matrix.fontSize;
        
        // Create glowing effect
        const color = matrix.colors[Math.floor(Math.random() * matrix.colors.length)];
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        
        ctx.fillText(char, x, y);
        
        // Reset drop when it reaches bottom
        if (y > canvas.height && Math.random() > 0.975) {
          matrix.drops[i] = 0;
        }
        matrix.drops[i]++;
      }

      // Add floating particles
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3;
        const color = matrix.colors[Math.floor(Math.random() * matrix.colors.length)];
        
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add quantum entanglement effect
      for (let i = 0; i < 20; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
        
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const UltraFuturisticMatrixBackground2027: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticMatrixBackground2027</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraFuturisticMatrixBackground2027;
