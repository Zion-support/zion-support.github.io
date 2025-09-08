import React, { useRef, useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';}
}
}

const ParallaxSection: React.FC<ParallaxSectionProps /> = ({ children,speed = 0.5,className = '',direction = 'up',   }) => {


const elementRef =;
  useRef<HTMLDivElement />(null)const [offset, setOffset]  =;
  useState(0;
  useEffect(() => {
const handleScroll = (if (elementRef.current) {const rect = elementRef.current.getBoundingClientRect(;
  const scrolled = window.pageYOffset;

const rate  = scrolled * -speed;switch (direction) {case 'up':;
            setOffset(rate)break;
          case 'down':;
            setOffset(-rate)break;
          case 'left':;
            setOffset(rate)break;
          case 'right':;
            setOffset(-rate)break;
          default:;) => {
  return $3;}
}
            setOffset(rate)}
      }
    }window.addEventListener('scroll', handleScroll)return () => window.removeEventListener('scroll', handleScroll)}, [speed, direction])const getTransform = (switch (direction) {case 'up':;
      case 'down':;) => {
  return $3;}
}
        return `translateY(${offset}px)`;
      case 'left':;
      case 'right':;
        return `translateX(${offset}px)`;
      default:;
        return `translateY(${offset}px)`;
    }
  }return (<div;
      ref={elementRef}
      className={className}
      style={transform: getTransform()}
     />;
      {children}
    </div>;
  )}

export default ParallaxSection;