import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Zap, Shield, TrendingUp, ArrowRight, ExternalLink, Check, Sparkles, Atom, Brain, Rocket, Globe, Cpu, Database, Lock, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Code, BookOpen, Activity, Settings, Mail, Phone, MapPin } from 'lucide-react';

interface UltraAdvancedFuturisticCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  color?: string;
  textColor?: string;
  features?: string[];
  price?: string;
  period?: string;
  popular?: boolean;
  onClick?: () => void;
  link?: string;
  className?: string;
  children?: React.ReactNode;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

const UltraAdvancedFuturisticCard: React.FC<UltraAdvancedFuturisticCardProps> = ({
  title,
  description,
  icon,
  variant = 'default',
  color = 'from-blue-500 to-purple-600',
  textColor = 'text-blue-400',
  features = [],
  price,
  period,
  popular = false,
  onClick,
  link,
  className = '',
  children,
  contactInfo
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number; life: number }>>([]);

  const config = variantConfigs[variant] || variantConfigs.quantum;

  // Enhanced particle system
  useEffect(() => {
    if (isHovered && variant.includes('quantum')) {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 300,
        y: Math.random() * 200,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 0
      }));
      setParticles(newParticles);
    }
  }, [isHovered, variant]);

  useEffect(() => {
    if (particles.length > 0) {
      const interval = setInterval(() => {
        setParticles(prev => 
          prev.map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life + 1
          })).filter(p => p.life < 100)
        );
      }, 50);
      return () => clearInterval(interval);
    }
  }, [particles]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
          border: '1px solid rgba(0, 255, 255, 0.3)',
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 30px rgba(0, 255, 255, 0.05)'
        };
      case 'holographic':
        return {
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1), rgba(245, 158, 11, 0.1))',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.2), inset 0 0 30px rgba(139, 92, 246, 0.05)'
        };
      case 'cyberpunk':
        return {
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1))',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          boxShadow: '0 0 30px rgba(236, 72, 153, 0.2), inset 0 0 30px rgba(236, 72, 153, 0.05)'
        };
      case 'neural':
        return {
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 0 30px rgba(16, 185, 129, 0.2), inset 0 0 30px rgba(16, 185, 129, 0.05)'
        };
      case 'quantum-entanglement':
        return {
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15), rgba(16, 185, 129, 0.15))',
          border: '2px solid rgba(0, 255, 255, 0.4)',
          boxShadow: '0 0 40px rgba(0, 255, 255, 0.3), inset 0 0 40px rgba(0, 255, 255, 0.1)'
        };
      case 'holographic-matrix':
        return {
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15), rgba(16, 185, 129, 0.15))',
          border: '2px solid rgba(139, 92, 246, 0.4)',
          boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 40px rgba(139, 92, 246, 0.1)'
        };
      case 'neural-quantum-cyberpunk':
        return {
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))',
          border: '2px solid rgba(16, 185, 129, 0.4)',
          boxShadow: '0 0 40px rgba(16, 185, 129, 0.3), inset 0 0 40px rgba(16, 185, 129, 0.1)'
        };
      default:
        return {
          background: `linear-gradient(135deg, ${color.replace('from-', 'rgba(').replace('to-', 'rgba(').replace('-', ', 0.1), ').replace('500', '500, 0.1)')}`,
          border: `1px solid ${textColor.replace('text-', 'rgba(').replace('-', ', 0.3)')}`,
          boxShadow: `0 0 30px ${textColor.replace('text-', 'rgba(').replace('-', ', 0.2)')}, inset 0 0 30px ${textColor.replace('text-', 'rgba(').replace('-', ', 0.05)')}`
        };
    }
  };

  const handleClick = () => {
    if (onClick) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
      onClick();
    }
  };

  const handleExternalClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

const UltraAdvancedFuturisticCard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraAdvancedFuturisticCard</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraAdvancedFuturisticCard;
