"use client&quot;;

import { useEffect, useRef, useState } from &quot;react";

// Skip link component for keyboard navigation
export function SkipLink({ targetId, children }: { targetId: string; children: React.ReactNode }) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--accent)] text-white px-4 py-2 rounded z-50&quot;
    >
      {children}
    </Link>
  );
}

// Live region for screen reader announcements
export function LiveRegion({ 
  message, 
  role = &quot;status&quot;, 
  &quot;aria-live&quot;: ariaLive = &quot;polite&quot; 
}: { 
  message: string; 
  role?: &quot;status&quot; | &quot;alert&quot; | &quot;log&quot;; 
  &quot;aria-live&quot;?: &quot;polite&quot; | &quot;assertive&quot; | &quot;off";
}) {
  return (
    <div
      role={role}
      aria-live={ariaLive}
      className="sr-only&quot;
      aria-atomic=&quot;true&quot;
    >
      {message}
    </div>
  );
}

// Focus trap for modals and dialogs
export function useFocusTrap(enabled: boolean = true) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === &quot;Tab&quot;) {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener(&quot;keydown&quot;, handleKeyDown);
    return () => container.removeEventListener(&quot;keydown&quot;, handleKeyDown);
  }, [enabled]);

  return containerRef;
}

// Keyboard navigation hook
export function useKeyboardNavigation(items: any[], onSelect: (item: any) => void) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case &quot;ArrowDown&quot;:
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % items.length);
        break;
      case &quot;ArrowUp&quot;:
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + items.length) % items.length);
        break;
      case &quot;Enter&quot;:
      case &quot; &quot;:
        e.preventDefault();
        if (selectedIndex >= 0) {
          onSelect(items[selectedIndex]);
        }
        break;
      case &quot;Escape&quot;:
        setSelectedIndex(-1);
        break;
    }
  };

  useEffect(() => {
    document.addEventListener(&quot;keydown&quot;, handleKeyDown);
    return () => document.removeEventListener(&quot;keydown&quot;, handleKeyDown);
  }, [items, selectedIndex, onSelect]);

  return { selectedIndex, setSelectedIndex };
}

// Announcement component for screen readers
export function Announcement({ 
  message, 
  priority = &quot;polite&quot; 
}: { 
  message: string; 
  priority?: &quot;polite&quot; | &quot;assertive&quot;;
}) {
  const [announcements, setAnnouncements] = useState<string[]>([]);

  useEffect(() => {
    if (message) {
      setAnnouncements(prev => [...prev, message]);
      
      // Clear announcement after a delay
      const timer = setTimeout(() => {
        setAnnouncements(prev => prev.slice(1));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div aria-live={priority} aria-atomic=&quot;true" className="sr-only">
      {announcements.map((announcement, index) => (
        <div key={index}>{announcement}</div>
      ))}
    </div>
  );
}

// Progress indicator component
export function ProgressIndicator({ 
  value, 
  max, 
  label 
}: { 
  value: number; 
  max: number; 
  label: string;
}) {
  const percentage = Math.round((value / max) * 100);
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-[var(--border)] rounded-full h-2">
        <div
          className="bg-[var(--accent)] h-2 rounded-full transition-all duration-300&quot;
          style={{ width: `${percentage}%` }}
          role=&quot;progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
        />
      </div>
    </div>
  );
}

// Collapsible section component
export function CollapsibleSection({ 
  title, 
  children, 
  defaultExpanded = false 
}: { 
  title: string; 
  children: React.ReactNode; 
  defaultExpanded?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border border-[var(--border)] rounded-lg">
      <button
        className="w-full px-4 py-3 text-left font-medium hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={`collapsible-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {title}
        <span className="text-[var(--accent)]&quot;>
          {isExpanded ? &quot;−&quot; : &quot;+"}
        </span>
      </button>
      
      <div
        id={`collapsible-${title.toLowerCase().replace(/\s+/g, '-')}`}
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-96 opacity-100&quot; : &quot;max-h-0 opacity-0"
        }`}
        aria-hidden={!isExpanded}
      >
        <div className="px-4 pb-3&quot;>
          {children}
        </div>
      </div>
    </div>
  );
}

// Tooltip component with proper accessibility
export function Tooltip({ 
  children, 
  content, 
  position = &quot;top&quot; 
}: { 
  children: React.ReactNode; 
  content: string; 
  position?: &quot;top&quot; | &quot;bottom&quot; | &quot;left&quot; | &quot;right&quot;;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipId] = useState(() => `tooltip-${Math.random().toString(36).substr(2, 9)}`);

  const positionClasses = {
    top: &quot;bottom-full left-1/2 transform -translate-x-1/2 mb-2&quot;,
    bottom: &quot;top-full left-1/2 transform -translate-x-1/2 mt-2&quot;,
    left: &quot;right-full top-1/2 transform -translate-y-1/2 mr-2&quot;,
    right: &quot;left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        aria-describedby={tooltipId}
        tabIndex={0}
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          id={tooltipId}
          className={`absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg ${positionClasses[position]}`}
          role="tooltip"
        >
          {content}
          <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45" />
        </div>
      )}
    </div>
  );
}