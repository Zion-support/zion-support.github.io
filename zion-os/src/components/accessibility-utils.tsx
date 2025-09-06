<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

"use client",
import { useEffect, useRef, useState  } from './react';,
// Skip link component for keyboard navigation;
export /**
 * SkipLink - Function description
 */
function SkipLink() {
  return (

=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
"use client",;
import { useEffect, useRef, useState } from "react",;
// Skip link component for keyboard navigation;
export function SkipLink({ targetId, children }: { targetId: string, children: React.ReactNode }) {;
  return (;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    <a;
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--accent)] text-white px-4 py-2 rounded z-50";
    >;
      {children}
    </a>;
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

export /**
 * LiveRegion - Function description
 */
function LiveRegion() {
  return (

=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
// Live region for screen reader announcements;
export function LiveRegion({;
  message,;
  role = "status",;
  "aria-live": ariaLive = "polite";
}: {;
  message: string,;
  role?: "status" | "alert" | "log",;
  "aria-live"?: "polite" | "assertive" | "off";
}) {;
  return (;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    <div;
      role={role}
      aria-live={ariaLive}
      className="sr-only";
      aria-atomic="true";
    >;
      {message}
    </div>;
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
// Focus trap for modals and dialogs;
export function useFocusTrap(enabled: boolean = true) {;
  const containerRef = useRef<HTMLDivElement>(null),;
  useEffect(() => {;
    if (!enabled || !containerRef.current) return,;
    const container = containerRef.current,;
    const focusableElements = container.querySelectorAll(;
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    ),;
    const firstElement = focusableElements[0] as HTMLElement,;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement,;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    const handleKeyDown = (e: KeyboardEvent) => {;
      if (e.key === "Tab") {;
        if (e.shiftKey) {;
          if (document.activeElement === firstElement) {;
<<<<<<< HEAD
            e.preventDefault(),;
            lastElement.focus();
          }
        } else {;
          if (document.activeElement === lastElement) {;
            e.preventDefault(),;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            firstElement.focus();
          }
        }
      }
<<<<<<< HEAD
    },;
    container.addEventListener("keydown", handleKeyDown),;
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [enabled]),;
  return containerRef;
}
;
// Keyboard navigation hook;
export function useKeyboardNavigation(items: any[], onSelect: (item: any) => void) {;
  const [selectedIndex, setSelectedIndex] = useState(-1),;
  const handleKeyDown = (e: KeyboardEvent) => {;
    switch (e.key) {;
      case "ArrowDown": e.preventDefault(),;
        setSelectedIndex(prev => (prev + 1) % items.length),;
        break,;
      case "ArrowUp":;
        e.preventDefault(),;
        setSelectedIndex(prev => (prev - 1 + items.length) % items.length),;
        break,;
      case "Enter":;
      case " ":;
        e.preventDefault(),;
        if (selectedIndex >= 0) {;
          onSelect(items[selectedIndex]);
        }
        break,;
      case "Escape": setSelectedIndex(-1),;
        break;
    }
  },;
  useEffect(() => {;
    document.addEventListener("keydown", handleKeyDown),;
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedIndex, onSelect]),;
  return { selectedIndex, setSelectedIndex }
}
;
// Announcement component for screen readers;
export function Announcement({;
  message,;
  priority = "polite";
}: {;
  message: string,;
  priority?: "polite" | "assertive";
}) {;
  const [announcements, setAnnouncements] = useState<string[]>([]),;
  useEffect(() => {;
    if (message) {;
      setAnnouncements(prev => [...prev, message]),;
      // Clear announcement after a delay;
      const timer = setTimeout(() => {;
        setAnnouncements(prev => prev.slice(1));
      }, 1000),;
      return () => clearTimeout(timer);
    }
  }, [message]),;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (;
    <div aria-live={priority} aria-atomic="true" className="sr-only">;
      {announcements.map((announcement, index) => (;
        <div key={index}>{announcement}</div>;
      ))}
    </div>;
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
// Progress indicator component;
export function ProgressIndicator({;
  value,;
  max,;
  label;
}: {;
  value: number,;
  max: number,;
  label: string;
}) {;
  const percentage = Math.round((value / max) * 100),;


  return (;
    <div className="space-y-2">;
      <div className="flex justify-between text-sm">;
<<<<<<< HEAD
=======
=======
export /**
 * useFocusTrap - Function description
 */
function useFocusTrap() {
  const container_ref = useRef < HTMLDivElement>(null),
  useEffect (() => {
    // Check condition
if (return, ) {
  $2
}
    const container = container_ref.current,
    const focusable_elements = container.querySelectorAll (
      'button, [href], input, select, textarea, [tabindex]:not ([tabindex="-1"])'),
    const first_element = focusable_elements[0] as HTMLElement,
    const last_element = focusable_elements[focusable_elements.length - 1] as HTMLElement,
    const handleKeyDown = (e: KeyboardEvent) =>: any {
      // Check condition
if ( {) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          // Check condition
if ( {) {
  $2
}
            e.prevent_default (),
            last_element.focus ();
          }
        } else {
          // Check condition
if ( {) {
  $2
}
            e.prevent_default (),
            first_element.focus ();
          }
        }
      }
    },
    container.addEventListener ("keydown", handleKeyDown),
    return () => container.removeEventListener ("keydown", handleKeyDown);
  }, [enabled]),
  return container_ref;
=======
export function useFocusTrap(enabled: boolean = true) {const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {;
    if (!enabled |!containerRef.current) return;
    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(;
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
=======
;
// Focus trap for modals and dialogs;
export function useFocusTrap(enabled: boolean = true) {;
  const containerRef = useRef<HTMLDivElement>(null),;
  useEffect(() => {;
    if (!enabled || !containerRef.current) return,;
    const container = containerRef.current,;
    const focusableElements = container.querySelectorAll(;
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    ),;
    const firstElement = focusableElements[0] as HTMLElement,;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    const handleKeyDown = (e: KeyboardEvent) => {;
      if (e.key === "Tab") {;
        if (e.shiftKey) {;
          if (document.activeElement === firstElement) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            e.preventDefault();
            lastElement.focus();
          }
        } else {if (document.activeElement === lastElement) {;
            e.preventDefault();
=======
            e.preventDefault(),;
            lastElement.focus();
          }
        } else {;
          if (document.activeElement === lastElement) {;
            e.preventDefault(),;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            firstElement.focus();
          }
        }
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [enabled]);
  return containerRef;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
// Keyboard navigation hook;
export function useKeyboardNavigation (items: any[], on_select: (item: any) => void) {
  const [selected_index, setSelectedIndex] = useState (-1),
  const handleKeyDown = (e: KeyboardEvent) =>: any {
    switch (e.key) {
      case "ArrowDown": e.prevent_default (),
        setSelectedIndex (prev => (prev + 1) % items.length),
        break,
      case "ArrowUp":;
        e.prevent_default (),
        setSelectedIndex (prev => (prev - 1 + items.length) % items.length),
        break,
      case "Enter":;
      case " ":;
        e.prevent_default (),
        // Check condition
if ( {) {
  $2
}
          on_select (items[selected_index]);
        }
        break,
      case "Escape": setSelectedIndex (-1),
        break;
    }
  },
  useEffect (() => {
    document.addEventListener ("keydown", handleKeyDown),
    return () => document.removeEventListener ("keydown", handleKeyDown);
  }, [items, selected_index, on_select]),
  return { selected_index, setSelectedIndex }
}
// Announcement component for screen readers;
export /**
 * Announcement - Function description
 */
function Announcement() {
  const [announcements, set_announcements] = useState < string[]>([]),
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      set_announcements (prev => [...prev, message]),
      // Clear announcement after a delay;
      const timer = set_timeout (() => {
        set_announcements (prev => prev.slice (1));
      }, 1000),
      return () => clear_timeout (timer);
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }, [message]),
  return (
    <div aria - live={priority} aria - atomic="true" className="sr - only">;
      {announcements.map ((announcement, index) => (
        <div key={index}>{announcement}</div>))}
    </div>);
=======
  }, [message]);
=======
    },;
    container.addEventListener("keydown", handleKeyDown),;
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [enabled]),;
  return containerRef;
}
;
// Keyboard navigation hook;
export function useKeyboardNavigation(items: any[], onSelect: (item: any) => void) {;
  const [selectedIndex, setSelectedIndex] = useState(-1),;
  const handleKeyDown = (e: KeyboardEvent) => {;
    switch (e.key) {;
      case "ArrowDown": e.preventDefault(),;
        setSelectedIndex(prev => (prev + 1) % items.length),;
        break,;
      case "ArrowUp":;
        e.preventDefault(),;
        setSelectedIndex(prev => (prev - 1 + items.length) % items.length),;
        break,;
      case "Enter":;
      case " ":;
        e.preventDefault(),;
        if (selectedIndex >= 0) {;
          onSelect(items[selectedIndex]);
        }
        break,;
      case "Escape": setSelectedIndex(-1),;
        break;
    }
  },;
  useEffect(() => {;
    document.addEventListener("keydown", handleKeyDown),;
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedIndex, onSelect]),;
  return { selectedIndex, setSelectedIndex }
}
;
// Announcement component for screen readers;
export function Announcement({;
  message,;
  priority = "polite";
}: {;
  message: string,;
  priority?: "polite" | "assertive";
}) {;
  const [announcements, setAnnouncements] = useState<string[]>([]),;
  useEffect(() => {;
    if (message) {;
      setAnnouncements(prev => [...prev, message]),;
      // Clear announcement after a delay;
      const timer = setTimeout(() => {;
        setAnnouncements(prev => prev.slice(1));
      }, 1000),;
      return () => clearTimeout(timer);
    }
  }, [message]),;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (;
    <div aria-live={priority} aria-atomic="true" className="sr-only">;
      {announcements.map((announcement, index) => (;
        <div key={index}>{announcement}</div>;
      ))}
    </div>;
  );
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
// Progress indicator component;
<<<<<<< HEAD
export /**
 * ProgressIndicator - Function description
 */
function ProgressIndicator() {
  const percentage = Math.round ((value / max) * 100),
  return (
    <div className="space - y-2">;
      <div className="flex justify - between text - sm">;
=======
export function ProgressIndicator({value;
  max;
  label;
}: {value: number;
  max: number;
  label: string;
}) {const percentage = Math.round((value / max) * 100);
=======
;
// Progress indicator component;
export function ProgressIndicator({;
  value,;
  max,;
  label;
}: {;
  value: number,;
  max: number,;
  label: string;
}) {;
  const percentage = Math.round((value / max) * 100),;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (;
    <div className="space-y-2">;
      <div className="flex justify-between text-sm">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <span>{label}</span>;
        <span>{percentage}%</span>;
      </div>;
      <div className="w-full bg-[var(--border)] rounded-full h-2">;
        <div;
          className="bg-[var(--accent)] h-2 rounded-full transition-all duration-300";
          style={{ width: `${percentage}%` }}
          role="progressbar";
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
        />;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
// Collapsible section component;
export function CollapsibleSection({;
  title,;
  children,;
  defaultExpanded = false;
}: {;
  title: string,;
  children: React.ReactNode,;
  defaultExpanded?: boolean;
}) {;
  const [isExpanded, setIsExpanded] = useState(defaultExpanded),;
  const contentRef = useRef<HTMLDivElement>(null),;


  return (;
    <div className="border border-[var(--border)] rounded-lg">;
<<<<<<< HEAD
=======
=======
export /**
 * CollapsibleSection - Function description
 */
function CollapsibleSection() {
  const [is_expanded, setIsExpanded] = useState (default_expanded),
  const content_ref = useRef < HTMLDivElement>(null),
  return (
    <div className="border border-[var (--border)] rounded - lg">;
=======
export function CollapsibleSection({title;
  children;
  defaultExpanded = false;
}: {title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}) {const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const contentRef = useRef<HTMLDivElement>(null);
=======
;
// Collapsible section component;
export function CollapsibleSection({;
  title,;
  children,;
  defaultExpanded = false;
}: {;
  title: string,;
  children: React.ReactNode,;
  defaultExpanded?: boolean;
}) {;
  const [isExpanded, setIsExpanded] = useState(defaultExpanded),;
  const contentRef = useRef<HTMLDivElement>(null),;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (;
    <div className="border border-[var(--border)] rounded-lg">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <button;
        className="w-full px-4 py-3 text-left font-medium hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-between";
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={`collapsible-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >;
        {title}
        <span className="text-[var(--accent)]">;
          {isExpanded ? "−" : "+"}
        </span>;
      </button>;
      <div;
<<<<<<< HEAD
        id={`collapsible-${title.toLowerCase().replace(/\s+/g, '-')}`}
        ref={contentRef}
=======
<<<<<<< HEAD
=======

        id={`collapsible-${title.toLowerCase ().replace (/\s+/g, '-')}`}
        ref={content_ref}
        className={`overflow - hidden transition - all duration - 300 ${
          is_expanded ? "max - h-96 opacity - 100" : "max - h-0 opacity - 0";

=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className={`overflow-hidden transition-all duration-300 ${;
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0";

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        }`}
        aria-hidden={!isExpanded}
      >;
        <div className="px-4 pb-3">;
          {children}
        </div>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
// Tooltip component with proper accessibility;
export function Tooltip({;
  children,;
  content,;
  position = "top";
}: {;
  children: React.ReactNode,;
  content: string,;
  position?: "top" | "bottom" | "left" | "right";
}) {;
  const [isVisible, setIsVisible] = useState(false),;
  const [tooltipId] = useState(() => `tooltip-${Math.random().toString(36).substr(2, 9)}`),;
  const positionClasses = {;
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",;
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",;
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2";
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2";
  };


  return (;
    <div className="relative inline-block">;
<<<<<<< HEAD
=======
=======
export /**
 * Tooltip - Function description
 */
function Tooltip() {
  const [is_visible, setIsVisible] = useState (false),
  const [tooltip_id] = useState (() => `tooltip-${Math.random ().to_string (36).substr (2, 9)}`),
  const position_classes = {
    top: "bottom - full left - 1/2 transform -translate - x-1 / 2 mb - 2",
    bottom: "top - full left - 1/2 transform -translate - x-1 / 2 mt - 2",
    left: "right - full top - 1/2 transform -translate - y-1 / 2 mr - 2";
    right: "left - full top - 1/2 transform -translate - y-1 / 2 ml - 2";
  }
<<<<<<< HEAD
  return (
    <div className="relative inline - block">;
=======
=======
;
// Tooltip component with proper accessibility;
export function Tooltip({;
  children,;
  content,;
  position = "top";
}: {;
  children: React.ReactNode,;
  content: string,;
  position?: "top" | "bottom" | "left" | "right";
}) {;
  const [isVisible, setIsVisible] = useState(false),;
  const [tooltipId] = useState(() => `tooltip-${Math.random().toString(36).substr(2, 9)}`),;
  const positionClasses = {;
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",;
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",;
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2";
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2";
  };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (;
    <div className="relative inline-block">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div;
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        aria-describedby={tooltipId}
        tabIndex={0}
      >;
        {children}
      </div>;
      {isVisible && (;
        <div;
          id={tooltipId}
          className={`absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg ${positionClasses[position]}`}
          role="tooltip";
        >;
          {content}
<<<<<<< HEAD
          <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45" />;
        </div>;
      )}
    </div>;
  );
}
=======
          <div className="absolute w - 2 h - 2 bg - gray - 900 transform rotate - 45" />;
        </div>)}
    </div>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
