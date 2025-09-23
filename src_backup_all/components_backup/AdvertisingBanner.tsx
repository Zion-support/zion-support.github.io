import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  Star, 
  Zap, 
  Sparkles, 
  TrendingUp,
  Gift,
  Clock,
  Users,
  Award,
  Rocket,
  Shield,
  Brain,
  Globe
} from 'lucide-react';

interface AdvertisingBannerProps {
  variant?: 'hero' | 'floating' | 'sidebar' | 'inline' | 'popup';
  theme?: 'dark' | 'light' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  dismissible?: boolean;
  autoHide?: boolean;
  autoHideDelay?: number;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const AdvertisingBanner: React.FC<AdvertisingBannerProps> = ({
  variant = 'hero',
  theme = 'gradient',
  size = 'medium',
  dismissible = true,
  autoHide = false,
  autoHideDelay = 10000,
  position = 'top',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotionalMessages = [
    {
      id: 1,
      title: "🎉 New Year Special: 50% OFF AI Services!",
      description: "Transform your business with our cutting-edge AI solutions. Limited time offer!",
      icon: Brain,
      cta: "Get Started",
      color: "from-purple-500 to-pink-500",
      badge: "HOT"
    },
    {
      id: 2,
      title: "🚀 Quantum Computing Beta Now Available!",
      description: "Be among the first to experience next-generation quantum solutions.",
      icon: Zap,
      cta: "Join Beta",
      color: "from-blue-500 to-cyan-500",
      badge: "NEW"
    },
    {
      id: 3,
      title: "⭐ Enterprise Security Suite - 30% OFF",
      description: "Advanced cybersecurity protection for your organization.",
      icon: Shield,
      cta: "Learn More",
      color: "from-red-500 to-orange-500",
      badge: "POPULAR"
    },
    {
      id: 4,
      title: "🌍 Global Expansion - New Data Centers",
      description: "Faster performance with our new edge computing infrastructure.",
      icon: Globe,
      cta: "Explore",
      color: "from-green-500 to-teal-500",
      badge: "FEATURED"
    }
  ];

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoHideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotionalMessages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentMessage = promotionalMessages[currentPromo];

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    // Analytics tracking
    console.log(`CTA clicked: ${currentMessage.cta}`);
    // Navigate to appropriate page
    window.location.href = '/services';
  };

  if (!isVisible) return null;

  const baseClasses = {
    hero: 'w-full py-6 px-4',
    floating: 'fixed z-50 max-w-md',
    sidebar: 'w-full p-4 mb-4',
    inline: 'w-full py-4 px-4 my-4',
    popup: 'fixed inset-0 z-50 flex items-center justify-center bg-black/50'
  };

  const themeClasses = {
    dark: 'bg-gray-900 text-white border-gray-700',
    light: 'bg-white text-gray-900 border-gray-200 shadow-lg',
    gradient: `bg-gradient-to-r ${currentMessage.color} text-white border-transparent`
  };

  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  const positionClasses = {
    top: 'top-0',
    bottom: 'bottom-0',
    left: 'left-0 top-1/2 transform -translate-y-1/2',
    right: 'right-0 top-1/2 transform -translate-y-1/2'
  };

  const bannerContent = (
    <motion.div
      initial={{ opacity: 0, y: variant === 'floating' && position === 'top' ? -100 : variant === 'floating' && position === 'bottom' ? 100 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: variant === 'floating' && position === 'top' ? -100 : variant === 'floating' && position === 'bottom' ? 100 : 0 }}
      transition={{ duration: 0.5 }}
      className={`
        ${baseClasses[variant]}
        ${themeClasses[theme]}
        ${sizeClasses[size]}
        ${variant === 'floating' ? positionClasses[position] : ''}
        ${variant === 'popup' ? 'rounded-2xl p-8 max-w-2xl mx-4' : 'rounded-lg border'}
        ${variant === 'floating' ? 'shadow-2xl' : ''}
        ${className}
      `}
    >
      {variant === 'popup' && (
        <div className="text-center">
          <div className="absolute top-4 right-4">
            {dismissible && (
              <button
                onClick={handleDismiss}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      )}

      <div className={`flex items-center ${variant === 'popup' ? 'flex-col text-center' : 'justify-between'} gap-4`}>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className={`p-3 rounded-lg ${theme === 'gradient' ? 'bg-white/20' : 'bg-blue-100'} ${theme === 'dark' ? 'bg-gray-800' : ''}`}>
              <currentMessage.icon className={`w-6 h-6 ${theme === 'gradient' ? 'text-white' : 'text-blue-600'}`} />
            </div>
          </div>
          
          <div className={`${variant === 'popup' ? 'text-center' : ''}`}>
            <div className="flex items-center gap-2 mb-1">
              <h3 className={`font-bold ${sizeClasses[size]}`}>
                {currentMessage.title}
              </h3>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                theme === 'gradient' 
                  ? 'bg-white/20 text-white' 
                  : theme === 'dark' 
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-blue-100 text-blue-600'
              }`}>
                {currentMessage.badge}
              </span>
            </div>
            <p className={`${theme === 'gradient' ? 'text-white/90' : 'text-gray-600'} ${theme === 'dark' ? 'text-gray-300' : ''}`}>
              {currentMessage.description}
            </p>
          </div>
        </div>

        <div className={`flex items-center gap-3 ${variant === 'popup' ? 'justify-center mt-4' : ''}`}>
          <button
            onClick={handleCTAClick}
            className={`
              px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
              ${theme === 'gradient' 
                ? 'bg-white text-gray-900 hover:bg-gray-100' 
                : theme === 'dark'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }
              flex items-center gap-2
            `}
          >
            {currentMessage.cta}
            <ArrowRight className="w-4 h-4" />
          </button>
          
          {dismissible && variant !== 'popup' && (
            <button
              onClick={handleDismiss}
              className={`
                p-2 rounded-lg transition-colors
                ${theme === 'gradient' 
                  ? 'hover:bg-white/20 text-white' 
                  : theme === 'dark'
                    ? 'hover:bg-gray-700 text-gray-400'
                    : 'hover:bg-gray-100 text-gray-600'
                }
              `}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Progress indicator for rotating messages */}
      {variant === 'hero' && (
        <div className="flex justify-center mt-4 gap-2">
          {promotionalMessages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPromo 
                  ? (theme === 'gradient' ? 'bg-white' : 'bg-blue-600') 
                  : (theme === 'gradient' ? 'bg-white/30' : 'bg-gray-300')
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );

  if (variant === 'popup') {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          {bannerContent}
        </motion.div>
      </AnimatePresence>
    );
  }

  return bannerContent;
};

// Specialized banner components for different use cases
export const HeroBanner: React.FC<Omit<AdvertisingBannerProps, 'variant'>> = (props) => (
  <AdvertisingBanner {...props} variant="hero" size="large" />
);

export const FloatingBanner: React.FC<Omit<AdvertisingBannerProps, 'variant'>> = (props) => (
  <AdvertisingBanner {...props} variant="floating" size="small" />
);

export const SidebarBanner: React.FC<Omit<AdvertisingBannerProps, 'variant'>> = (props) => (
  <AdvertisingBanner {...props} variant="sidebar" size="small" />
);

export const InlineBanner: React.FC<Omit<AdvertisingBannerProps, 'variant'>> = (props) => (
  <AdvertisingBanner {...props} variant="inline" size="medium" />
);

export const PopupBanner: React.FC<Omit<AdvertisingBannerProps, 'variant'>> = (props) => (
  <AdvertisingBanner {...props} variant="popup" size="large" dismissible={true} autoHide={true} autoHideDelay={15000} />
);

export default AdvertisingBanner;