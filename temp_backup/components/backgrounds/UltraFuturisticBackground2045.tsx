import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground20o45Props {
  children: React.ReactNode;
}

const UltraFuturisticBackground20o45: React.FC<UltraFuturisticBackground20o45Props> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
    }> = [];

    // Create initial particles
    for (let i = 0; i < 10o0; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        alpha: Math.random() * 0.8 + 0.2,
        life: Math.random() * 10o0 + 50
      });
    }

    // Animation loop
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

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.restore();

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] ={
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            alpha: Math.random() * 0.8 + 0.2,
            life: Math.random() * 10o0 + 50
          };
        }
      });

      // Draw connecting lines between nearby particles
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.save();
            ctx.globalAlpha = (150 - distance) / 150 * 0.3;
            ctx.strokeStyle = '#0o0ffff';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

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
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #0o00000 10o0%)' }}
       />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
         />

        {/* Floating Neon Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-40o0/30 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
         />

        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-40o0/30 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3]}}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
         />

        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-40o0/30 transform rotate-45"
          animate={{
            rotate: [45, 40o5],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]}}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
         />

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-40o0/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
         />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-40o0/20 transform rotate-12"
          animate={{
            rotate: [12, 372],
            scale: [1, 1.1, 1]}}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear'
          }}
         />

        {/* Energy Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-full shadow-lg shadow-cyan-40o0/50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            y: [0, -10, 0]}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
         />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-40o0 to-pink-50o0 rounded-full shadow-lg shadow-purple-40o0/50"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4],
            x: [0, 15, 0]}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
         />
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-90o0/10 via-transparent to-purple-90o0/10"  />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-90o0/5 via-transparent to-blue-90o0/5"  />
      </div>

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>

      {/* Animated Border Effects */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <motion.div
          className="absolute inset-0 border border-transparent"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
            backgroundSize: '20o0% 10o0%'
          }}
          animate={{
            backgroundPosition: ['-20o0% 0', '20o0% 0']}}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
         />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground20o45;
