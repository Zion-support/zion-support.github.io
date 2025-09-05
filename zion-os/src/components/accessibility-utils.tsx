"use client",

<<<<<<< HEAD
import { useEffect, useRef, useState } from "react",

// Skip link component for keyboard navigation
export function SkipLink({ targetId, children }: { targetId: string, children: React.ReactNode }) {
  return (
=======

// Skip link component for keyboard navigation
export function SkipLink(_{_targetId, _children}: {_targetId: string; children: React.ReactNode}) {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--accent)] text-white px-4 py-2 rounded z-50"
    >
      {_children}
    </a>
  )
}

// Live region for screen reader announcements
<<<<<<< HEAD
export function LiveRegion({ 
  message,
  role = "status",
  "aria-live": ariaLive = "polite" 
}: { 
  message: string, 
  role?: "status" | "alert" | "log", 
  "aria-live"?: "polite" | "assertive" | "off"
}) {
  return (
=======
export function LiveRegion(_{_message, _role = "status", _"aria-live": ariaLive = "polite"}: {_message: string; 
  role?: "status" | "alert" | "log"; 
  "aria-live"?: "polite" | "assertive" | "off";}) {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <div
      role={role}
      aria-live={_ariaLive}
      className="sr-only"
      aria-atomic="true"
    >
      {_message}
    </div>
  )
}

// Focus trap for modals and dialogs
<<<<<<< HEAD
export function useFocusTrap(enabled: boolean = true) {
  const containerRef = useRef<HTMLDivElement>(null),

  useEffect(() => {
    if (!enabled || !containerRef.current) return,

    const container = containerRef.current,
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ),
    const firstElement = focusableElements[0] as HTMLElement,
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement,
=======
export function useFocusTrap(_enabled: boolean = true) {_const _containerRef = useRef<HTMLDivElement>(null);

  useEffect__(() => {
    if (!enabled || !containerRef.current) return;

    const _container = containerRef.current;
    const _focusableElements = container.querySelectorAll(
      'button, _[href], _input, _select, _textarea, _[tabindex]:not([tabindex="-1"])'
    );
    const _firstElement = focusableElements[0] as HTMLElement;
    const _lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _handleKeyDown = (_e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
<<<<<<< HEAD
            e.preventDefault(),
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault(),
            firstElement.focus()
          }
=======
            e.preventDefault();
            lastElement.focus();}
        } else {_if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      }
    },

    container.addEventListener("keydown", handleKeyDown),
    return () => container.removeEventListener("keydown", handleKeyDown)
  }, [enabled]),

  return containerRef
}

// Keyboard navigation hook
<<<<<<< HEAD
export function useKeyboardNavigation(items: any[], onSelect: (item: any) => void) {
  const [selectedIndex, setSelectedIndex] = useState(-1),
=======
export function useKeyboardNavigation(_items: unknown[], _onSelect: (item: unknown) => void) {_const [selectedIndex, _setSelectedIndex] = useState(-1);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleKeyDown = (_e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown": e.preventDefault(),
        setSelectedIndex(prev => (prev + 1) % items.length),
        break,
      case "ArrowUp":
        e.preventDefault(),
        setSelectedIndex(prev => (prev - 1 + items.length) % items.length),
        break,
      case "Enter":
      case " ":
        e.preventDefault(),
        if (selectedIndex >= 0) {
<<<<<<< HEAD
          onSelect(items[selectedIndex])
        }
        break,
      case "Escape": setSelectedIndex(-1),
        break
=======
          onSelect(items[selectedIndex]);}
        break;
      case "Escape":
        setSelectedIndex(-1);
        break;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown),
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [items, selectedIndex, onSelect]),

  return { selectedIndex, setSelectedIndex }
}

// Announcement component for screen readers
export function Announcement({ 
  message,
  priority = "polite" 
}: { 
  message: string, 
  priority?: "polite" | "assertive"
}) {
  const [announcements, setAnnouncements] = useState<string[]>([]),
=======
  useEffect__(() => {_document.addEventListener("keydown", _handleKeyDown);
    return () => document.removeEventListener("keydown", _handleKeyDown);}, [items, selectedIndex, onSelect]);

  return {_selectedIndex, _setSelectedIndex};
}

// Announcement component for screen readers
export function Announcement(_{_message, _priority = "polite"}: {_message: string; 
  priority?: "polite" | "assertive";}) {_const [announcements, _setAnnouncements] = useState<string[]>([]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    if (message) {
<<<<<<< HEAD
      setAnnouncements(prev => [...prev, message]),
      
      // Clear announcement after a delay
      const timer = setTimeout(() => {
        setAnnouncements(prev => prev.slice(1))
      }, 1000),
=======
      setAnnouncements(prev => [...prev, _message]);
      
      // Clear announcement after a delay
      const _timer = setTimeout__(() => {
        setAnnouncements(prev => prev.slice(1));}, 1000);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      return () => clearTimeout(timer)
    }
  }, [message]),

  return (_<div aria-live={_priority} aria-atomic="true" className="sr-only">
      {_announcements.map((announcement, _index) => (
        <div key={index}>{_announcement}</div>
      ))}
    </div>
  )
}

// Progress indicator component
<<<<<<< HEAD
export function ProgressIndicator({ 
  value,
  max,
  label 
}: { 
  value: number, 
  max: number, 
  label: string
}) {
  const percentage = Math.round((value / max) * 100),
=======
export function ProgressIndicator(_{_value, _max, _label}: {_value: number; 
  max: number; 
  label: string;}) {_const _percentage = Math.round((value / max) * 100);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{_percentage}%</span>
      </div>
      <div className="w-full bg-[var(--border)] rounded-full h-2">
        <div
          className="bg-[var(--accent)] h-2 rounded-full transition-all duration-300"
          style={_{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={_value}
          aria-valuemin={_0}
          aria-valuemax={_max}
          aria-label={_label}
        />
      </div>
    </div>
  )
}

// Collapsible section component
<<<<<<< HEAD
export function CollapsibleSection({ 
  title,
  children,
  defaultExpanded = false 
}: { 
  title: string, 
  children: React.ReactNode, 
  defaultExpanded?: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded),
  const contentRef = useRef<HTMLDivElement>(null),
=======
export function CollapsibleSection(_{_title, _children, _defaultExpanded = false}: {_title: string; 
  children: React.ReactNode; 
  defaultExpanded?: boolean;}) {_const [isExpanded, _setIsExpanded] = useState(defaultExpanded);
  const _contentRef = useRef<HTMLDivElement>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className="border border-[var(--border)] rounded-lg">
      <button
        className="w-full px-4 py-3 text-left font-medium hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={_isExpanded}
        aria-controls={_`collapsible-${title.toLowerCase().replace(/\s+/g, _'-')}`}
      >
        {_title}
        <span className="text-[var(--accent)]">
          {_isExpanded ? "−" : "+"}
        </span>
      </button>
      
      <div
        id={_`collapsible-${title.toLowerCase().replace(/\s+/g, _'-')}`}
        ref={_contentRef}
        className={_`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={_!isExpanded}
      >
        <div className="px-4 pb-3">
          {_children}
        </div>
      </div>
    </div>
  )
}

// Tooltip component with proper accessibility
<<<<<<< HEAD
export function Tooltip({ 
  children,
  content,
  position = "top" 
}: { 
  children: React.ReactNode, 
  content: string, 
  position?: "top" | "bottom" | "left" | "right"
}) {
  const [isVisible, setIsVisible] = useState(false),
  const [tooltipId] = useState(() => `tooltip-${Math.random().toString(36).substr(2, 9)}`),

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  },
=======
export function Tooltip(_{_children, _content, _position = "top"}: {_children: React.ReactNode; 
  content: string; 
  position?: "top" | "bottom" | "left" | "right";}) {_const [isVisible, _setIsVisible] = useState(false);
  const [tooltipId] = useState__(() => `tooltip-${Math.random().toString(36).substr(2, _9)}`);

  const _positionClasses = {_top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2", _bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2", _left: "right-full top-1/2 transform -translate-y-1/2 mr-2", _right: "left-full top-1/2 transform -translate-y-1/2 ml-2"};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<div className="relative inline-block">
      <div
        onMouseEnter={_() => setIsVisible(true)}
        onMouseLeave={_() => setIsVisible(false)}
        onFocus={_() => setIsVisible(true)}
        onBlur={_() => setIsVisible(false)}
        aria-describedby={_tooltipId}
        tabIndex={_0}
      >
        {_children}
      </div>
      
      {_isVisible && (
        <div
          id={tooltipId}
          className={_`absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg ${positionClasses[position]}`}
          role="tooltip"
        >
          {_content}
          <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45" />
        </div>
      )}
    </div>
  )
}