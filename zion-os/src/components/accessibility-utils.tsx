<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
"use client",
import { useEffect, useRef, useState  } from './react';,
// Skip link component for keyboard navigation;
export /**
 * SkipLink - Function description
 */
function SkipLink() {
  return (

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
"use client";
import { useEffect, useRef, useState } from "react";
// Skip link component for keyboard navigation;
export function SkipLink({ targetId, children }: { targetId: string, children: React.ReactNode }) {return (;
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
"use client",;
import { useEffect, useRef, useState } from "react",;
// Skip link component for keyboard navigation;
export function SkipLink({ targetId, children }: { targetId: string, children: React.ReactNode }) {;
  return (;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <a;
      href={`#${target_id}`}
      className="sr - only focus:not - sr - only focus:absolute focus:top - 4 focus:left - 4 bg-[var (--accent)] text - white px - 4 py - 2 rounded z - 50";
    >;
      {children}
    </a>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export /**
 * LiveRegion - Function description
 */
function LiveRegion() {
  return (

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Live region for screen reader announcements;
export function LiveRegion({message;
  role = "status";
  "aria-live": ariaLive = "polite";
}: {message: string;
  role?: "status" | "alert" | "log";
  "aria-live"?: "polite" | "assertive" | "off";
}) {return (;
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div;
      role={role}
      aria - live={aria_live}
      className="sr - only";
      aria - atomic="true";
    >;
      {message}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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


    const handleKeyDown = (e: KeyboardEvent) => {;
      if (e.key === "Tab") {;
        if (e.shiftKey) {;
          if (document.activeElement === firstElement) {;


            e.preventDefault(),;
            lastElement.focus();
          }
        } else {;
          if (document.activeElement === lastElement) {;
            e.preventDefault(),;


            firstElement.focus();
          }
        }
      }


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


  return (;
    <div aria-live={priority} aria-atomic="true" className="sr-only">;
      {announcements.map((announcement, index) => (;
        <div key={index}>{announcement}</div>;
      ))}
    </div>;
  );
}

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
// Focus trap for modals and dialogs;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
// Focus trap for modals and dialogs;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function useFocusTrap(enabled: boolean = true) {const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {;
    if (!enabled |!containerRef.current) return;
    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(;
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
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
    const handleKeyDown = (e: KeyboardEvent) => {;
      if (e.key === "Tab") {;
        if (e.shiftKey) {;
          if (document.activeElement === firstElement) {;
            e.preventDefault();
            lastElement.focus();
          }
        } else {if (document.activeElement === lastElement) {;
            e.preventDefault();
            e.preventDefault(),;
            lastElement.focus();
          }
        } else {;
          if (document.activeElement === lastElement) {;
            e.preventDefault(),;
            firstElement.focus();
          }
        }
      }
    }
    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [enabled]);
  return containerRef;
}
// Keyboard navigation hook;
<<<<<<< HEAD
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
=======
export function useKeyboardNavigation(items: any[], onSelect: (item: any) => void) {const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleKeyDown = (e: KeyboardEvent) => {;
    switch (e.key) {;
      case "ArrowDown": e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % items.length);
        break;
      case "ArrowUp":;
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + items.length) % items.length);
        break;
      case "Enter":;
      case " ":;
        e.preventDefault();
        if (selectedIndex >= 0) {;
          onSelect(items[selectedIndex]);
        }
        break;
      case "Escape": setSelectedIndex(-1);
        break;
    }
  }
  useEffect(() => {document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedIndex, onSelect]);
  return { selectedIndex, setSelectedIndex }
}
// Announcement component for screen readers;
export function Announcement({message;
  priority = "polite";
}: {message: string;
  priority?: "polite" | "assertive";
}) {const [announcements, setAnnouncements] = useState<string[]>([]);
  useEffect(() => {;
    if (message) {;
      setAnnouncements(prev => [...prev, message]);
      // Clear announcement after a delay;
      const timer = setTimeout(() => {;
        setAnnouncements(prev => prev.slice(1));
      }, 1000);
      return () => clearTimeout(timer);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }, [message]);
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
  return (;
    <div aria-live={priority} aria-atomic="true" className="sr-only">;
      {announcements.map((announcement, index) => (;
        <div key={index}>{announcement}</div>;
      ))}
    </div>;
  );
}
// Progress indicator component;
export function ProgressIndicator({value;
  max;
  label;
}: {value: number;
  max: number;
  label: string;
}) {const percentage = Math.round((value / max) * 100);
<<<<<<< HEAD
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
  return (;
    <div className="space-y-2">;
      <div className="flex justify-between text-sm">;
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
    const handleKeyDown = (e: KeyboardEvent) => {;
      if (e.key === "Tab") {;
        if (e.shiftKey) {;
          if (document.activeElement === firstElement) {;
            e.preventDefault(),;
            lastElement.focus();
          }
        } else {;
          if (document.activeElement === lastElement) {;
            e.preventDefault(),;
            firstElement.focus();
          }
        }
      }
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
  return (;
    <div aria-live={priority} aria-atomic="true" className="sr-only">;
      {announcements.map((announcement, index) => (;
        <div key={index}>{announcement}</div>;
      ))}
    </div>;
  );
}
export function ProgressIndicator({value;
  max;
  label;
}: {value: number;
  max: number;
  label: string;
}) {const percentage = Math.round((value / max) * 100);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        <span>{label}</span>;
        <span>{percentage}%</span>;
      </div>;
      <div className="w - full bg-[var (--border)] rounded - full h - 2">;
        <div;
          className="bg-[var (--accent)] h - 2 rounded - full transition - all duration - 300";
          style={{ width: `${percentage}%` }}
          role="progressbar";
          aria - valuenow={value}
          aria - valuemin={0}
          aria - valuemax={max}
          aria - label={label}
        />;
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
// Collapsible section component;
export function CollapsibleSection({title;
  children;
  defaultExpanded = false;
}: {title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}) {const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const contentRef = useRef<HTMLDivElement>(null);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD


  return (;
    <div className="border border-[var(--border)] rounded-lg">;
<<<<<<< HEAD
=======
=======
  return (;
    <div className="border border-[var(--border)] rounded-lg">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function CollapsibleSection({title;
  children;
  defaultExpanded = false;
}: {title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}) {const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const contentRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      <button;
        className="w - full px - 4 py - 3 text - left font - medium hover:bg-[var (--bg - secondary)] transition - colors flex items - center justify - between";
        on_click={() => setIsExpanded (!is_expanded)}
        aria - expanded={is_expanded}
        aria - controls={`collapsible-${title.toLowerCase ().replace (/\s+/g, '-')}`}
      >;
        {title}
        <span className="text-[var (--accent)]">;
          {is_expanded ? "−" : "+"}
        </span>;
      </button>;
      <div;

        id={`collapsible-${title.toLowerCase ().replace (/\s+/g, '-')}`}
        ref={content_ref}
        className={`overflow - hidden transition - all duration - 300 ${
          is_expanded ? "max - h-96 opacity - 100" : "max - h-0 opacity - 0";

<<<<<<< HEAD
        className={`overflow-hidden transition-all duration-300 ${;
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0";

        id={`collapsible-${title.toLowerCase().replace(/\s+/g, '-')}`}
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0";
        className={`overflow-hidden transition-all duration-300 ${;
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0";
=======
=======

        className={`overflow-hidden transition-all duration-300 ${;
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0";

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }`}
        aria - hidden={!is_expanded}
      >;
        <div className="px - 4 pb - 3">;
          {children}
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
// Tooltip component with proper accessibility;
export function Tooltip({children;
  content;
  position = "top";
}: {children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}) {const [isVisible, setIsVisible] = useState(false);
  const [tooltipId] = useState(() => `tooltip-${Math.random().toString(36).substr(2, 9)}`);
  const positionClasses = {top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2";
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2";
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2";
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD


  return (;
    <div className="relative inline-block">;
<<<<<<< HEAD
=======
=======
  return (;
    <div className="relative inline-block">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  return (
    <div className="relative inline - block">;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      <div;
        onMouseEnter={() => setIsVisible (true)}
        onMouseLeave={() => setIsVisible (false)}
        on_focus={() => setIsVisible (true)}
        on_blur={() => setIsVisible (false)}
        aria - describedby={tooltip_id}
        tab_index={0}
      >;
        {children}
      </div>;
      {is_visible && (
        <div;
          id={tooltip_id}
          className={`absolute z - 50 px - 2 py - 1 text - sm text - white bg - gray - 900 rounded shadow - lg ${position_classes[position]}`}
          role="tooltip";
        >;
          {content}
          <div className="absolute w - 2 h - 2 bg - gray - 900 transform rotate - 45" />;
        </div>)}
    </div>);
}