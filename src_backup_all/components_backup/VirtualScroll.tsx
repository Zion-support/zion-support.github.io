import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VirtualScrollProps<T> {
  items: T[];
  height: number;
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscan?: number;
  className?: string;
  onScroll?: (scrollTop: number) => void;
}

export function VirtualScroll<T>({
  items,
  height,
  itemHeight,
  renderItem,
  overscan = 5,
  className = '',
  onScroll
}: VirtualScrollProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate visible range
  const visibleRange = useMemo(() => {
    const start = Math.floor(scrollTop / itemHeight);
    const visibleCount = Math.ceil(height / itemHeight);
    const end = start + visibleCount + overscan;
    
    return {
      start: Math.max(0, start - overscan),
      end: Math.min(items.length, end)
    };
  }, [scrollTop, itemHeight, height, overscan, items.length]);

  // Calculate total height and transform
  const totalHeight = items.length * itemHeight;
  const transform = `translateY(${visibleRange.start * itemHeight}px)`;

  // Handle scroll
  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    const newScrollTop = event.currentTarget.scrollTop;
    setScrollTop(newScrollTop);
    onScroll?.(newScrollTop);
  }, [onScroll]);

  // Scroll to specific item
  const scrollToItem = useCallback((index: number) => {
    if (containerRef.current) {
      const scrollTop = index * itemHeight;
      containerRef.current.scrollTop = scrollTop;
    }
  }, [itemHeight]);

  // Scroll to top
  const scrollToTop = useCallback(() => {
    scrollToItem(0);
  }, [scrollToItem]);

  // Auto-scroll to specific item on mount if needed
  useEffect(() => {
    if (items.length > 0 && containerRef.current) {
      // You can add logic here to scroll to a specific item on mount
      // For example, scroll to the last viewed item
    }
  }, [items.length]);

  return (
    <div className={`relative ${className}`}>
      {/* Scroll to top button */}
      {scrollTop > 200 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}

      {/* Virtual scroll container */}
      <div
        ref={containerRef}
        className="overflow-auto"
        style={{ height }}
        onScroll={handleScroll}
      >
        <div style={{ height: totalHeight, position: 'relative' }}>
          <div style={{ transform }}>
            <AnimatePresence>
              {items.slice(visibleRange.start, visibleRange.end).map((item, index) => (
                <motion.div
                  key={visibleRange.start + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  style={{ height: itemHeight }}
                >
                  {renderItem(item, visibleRange.start + index)}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Scroll position indicator */}
      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        {Math.round((scrollTop / (totalHeight - height)) * 100)}%
      </div>
    </div>
  );
}

// Specialized virtual scroll for service cards
interface ServiceCard {
  id: string;
  name: string;
  description: string;
  category: string;
  icon?: string;
}

interface ServiceVirtualScrollProps {
  services: ServiceCard[];
  height?: number;
  onServiceClick?: (service: ServiceCard) => void;
  className?: string;
}

export function ServiceVirtualScroll({
  services,
  height = 600,
  onServiceClick,
  className = ''
}: ServiceVirtualScrollProps) {
  const renderServiceCard = useCallback((service: ServiceCard, index: number) => (
    <div className="p-4">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => onServiceClick?.(service)}
      >
        <div className="flex items-start space-x-4">
          {service.icon && (
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-2xl">{service.icon}</span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {service.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {service.description}
            </p>
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
              {service.category}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  ), [onServiceClick]);

  return (
    <VirtualScroll
      items={services}
      height={height}
      itemHeight={120}
      renderItem={renderServiceCard}
      overscan={3}
      className={className}
    />
  );
}