"use client";
import React{ useEffectuseRef } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2035Props {
  children: React.ReactNode;
}

export default function UltraFuturisticBackground2035({ children }: UltraFuturisticBackground2035Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
    if (ctx) {
      ctx.scale(window.devicePixelRatio || 1);
    }

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'hologram' | 'neon' | 'energy';
      life: number;
      maxLife: number;
    }> = [];

    // Initialize particles with enhanced types
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const particleCount = prefersReducedMotion ? 15 : (isSmallScreen ? 60 : 150);
      
      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'hologram', 'neon', 'energy'][Math.floor(Math.random() * 4)] as any;
        const maxLife = Math.random() * 200 + 100;
        
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8,
          opacity: Math.random() * 0.35 + 0.08,
          color: ['#8b5cf6'#06b6d4'#ec4899'#10b981'][Math.floor(Math.random() * 4)]
        });
      }
    };

    // Get color based on particle type
    const getColorForType = (type: string) => {
      switch (type) {
        case 'quantum':
          return ['#8b5cf6', '#06b6d4', '#ec4899'][Math.floor(Math.random() * 3)];
        case 'hologram':
          return ['#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 3)];
        case 'neon':
          return ['#f97316', '#eab308', '#a855f7'][Math.floor(Math.random() * 3)];
        case 'energy':
          return ['#dc2626', '#7c3aed', '#059669'][Math.floor(Math.random() * 3)];
        default:
          return '#8b5cf6';
      }
    };

    // Update and draw particles with enhanced effects
    const updateParticles = () => {
      ctx.clearRect(0canvas.widthcanvas.height);

      particles.forEach((particleindex) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.xparticle.yparticle.size0Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw particle based on type
        drawParticle(ctx, particle, currentOpacity);

        // Draw connections with enhanced effects
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 120 : 180);
        if (maxDistance > 0) {
          particles.forEach((otherParticleotherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(particle.xparticle.y);
                ctx.lineTo(otherParticle.xotherParticle.y);
                ctx.strokeStyle = particle.color;
                ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.08;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        }
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateParticles);
      }
    };

    // Enhanced particle drawing with different types
    const drawParticle = (ctx: CanvasRenderingContext2D, particle: any, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;

      switch (particle.type) {
        case 'quantum':
          drawQuantumParticle(ctx, particle);
          break;
        case 'hologram':
          drawHologramParticle(ctx, particle);
          break;
        case 'neon':
          drawNeonParticle(ctx, particle);
          break;
        case 'energy':
          drawEnergyParticle(ctx, particle);
          break;
      }

      ctx.restore();
    };

    // Quantum particle with wave-like effects
    const drawQuantumParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.001;
      const wave = Math.sin(time + particle.x * 0.01) * 0.5;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y + wave, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Add quantum glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y + wave, particle.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    // Hologram particle with transparency and distortion
    const drawHologramParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.002;
      const distortion = Math.sin(time + particle.y * 0.02) * 2;
      
      ctx.globalAlpha *= 0.7;
      ctx.beginPath();
      ctx.arc(particle.x + distortion, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Add holographic effect
      ctx.globalAlpha *= 0.5;
      ctx.beginPath();
      ctx.arc(particle.x + distortion, particle.y, particle.size * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    // Neon particle with bright glow
    const drawNeonParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      // Bright core
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Neon glow
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    // Energy particle with pulsing effect
    const drawEnergyParticle = (ctx: CanvasRenderingContext2D, particle: any) => {
      const time = Date.now() * 0.003;
      const pulse = Math.sin(time) * 0.3 + 0.7;
      const size = particle.size * pulse;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Energy field effect
      ctx.globalAlpha *= 0.3;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    };

    // Enhanced connection drawing with different effects
    const drawConnections = (ctx: CanvasRenderingContext2D, particles: any[], currentIndex: number, maxDistance: number, opacity: number) => {
      particles.forEach((otherParticle, otherIndex) => {
        if (currentIndex !== otherIndex) {
          const dx = particles[currentIndex].x - otherParticle.x;
          const dy = particles[currentIndex].y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const connectionOpacity = (maxDistance - distance) / maxDistance * 0.15 * opacity;
            
            // Different connection styles based on particle types
            if (particles[currentIndex].type === otherParticle.type) {
              // Same type - stronger connection
              ctx.globalAlpha = connectionOpacity * 1.5;
              ctx.strokeStyle = particles[currentIndex].color;
              ctx.lineWidth = 2;
            } else {
              // Different types - weaker connection
              ctx.globalAlpha = connectionOpacity * 0.7;
              ctx.strokeStyle = '#ffffff';
              ctx.lineWidth = 1;
            }

            ctx.beginPath();
            ctx.moveTo(particles[currentIndex].x, particles[currentIndex].y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
      if (ctx) {
        ctx.setTransform(1010);
        ctx.scale(window.devicePixelRatio || 1);
      }
      initParticles();
    };

    window.addEventListener('resize'handleResize);

    return () => {
      window.removeEventListener('resize'handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }[]);

  return (
    <>
      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at centergba(139,92,246,0.04) 0%rgba(0,0,0,0) 70%)' }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            scale: [1.151],
            rotate: [0180360],
            opacity: [0.220.450.22]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45"
          animate={{
            scale: [1.31],
            rotate: [45225405],
            opacity: [0.20.50.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{
            scale: [1.41],
            y: [0-20],
            opacity: [0.40.70.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1pxtransparent 1px),
              linear-gradient(90degrgba(139,92,246,0.3) 1pxtransparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0-30],
              opacity: [010],
              scale: [010]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating neon orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
          animate={{
            scaleX: [010],
            opacity: [010]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            scaleX: [010],
            opacity: [010]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />

        {/* Quantum Dots */}
        {[...Array(15)].map((_i) => (
          <motion.div
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
              scale: [010],
              opacity: [0.80],
              rotate: [0360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Neural Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          {[...Array(8)].map((_i) => (
            <motion.circle
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}
              r="3"
              fill="url(#neuralGradient)"
              animate={{
                r: [363],
                opacity: [0.30.80.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Holographic Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            animate={{
              scale: [1.1],
              rotate: [090180270360],
              opacity: [0.10.30.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{
              scale: [1.21],
              rotate: [36027018090],
              opacity: [0.10.40.1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Data Streams */}
        <div className="absolute right-0 top-0 w-32 h-full opacity-30">
          {[...Array(20)].map((_i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent"
              style={{
                right: `${Math.random() * 32}px`,
                top: `${i * 5}%`
              }}
              animate={{
                height: [8328],
                opacity: [0.310.3]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Render children */}
      {children}
    </>
  );
}