import React, { useEffect, useState } from 'react';

const ModernMobileOptimizer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [touchDevice, setTouchDevice] = useState(false);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth <= 768;
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const currentOrientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      
      setIsMobile(mobile);
      setTouchDevice(touch);
      setOrientation(currentOrientation);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    // Add touch-friendly classes
    if (touchDevice) {
      document.body.classList.add('touch-device');
    }

    // Add mobile-specific optimizations
    if (isMobile) {
      document.body.classList.add('mobile-device');
      
      // Prevent zoom on input focus
      const meta = document.querySelector('meta[name="viewport"]');
      if (meta) {
        meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      }
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
      document.body.classList.remove('touch-device', 'mobile-device');
    };
  }, [isMobile, touchDevice]);

  useEffect(() => {
    // Add orientation-specific classes
    document.body.classList.remove('portrait', 'landscape');
    document.body.classList.add(orientation);
  }, [orientation]);

  // Add smooth scrolling for mobile
  useEffect(() => {
    if (isMobile) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, [isMobile]);

  // Add touch gesture support
  useEffect(() => {
    if (!touchDevice) return;

    let startY = 0;
    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startY || !startX) return;

      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const diffY = startY - currentY;
      const diffX = startX - currentX;

      // Prevent horizontal scroll on vertical swipe
      if (Math.abs(diffY) > Math.abs(diffX)) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [touchDevice]);

  return null; // This component doesn't render anything visible
};

export default ModernMobileOptimizer;