>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
"use client",
import { useEffect, useRef, useState  } from './react';,
// Skip link component for keyboard navigation;
export /**
 * SkipLink - Function description
 */
function SkipLink() {
  return (


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
  };
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
  return (;
    <div className="relative inline-block">;=======
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