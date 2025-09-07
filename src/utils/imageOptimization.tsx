
import Image from 'next/image';
import { cn } from '@/lib/utils';
interface OptimizedImageProps {
  src: string;
import React, { useRef, useEffect, useState, useCallback } from 'react';
interface OptimizedImageProps {
  // TODO: Implement
}
  src: string;,
pr-12325
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
  lazy?: boolean
}

export function OptimizedImage({
  src;
  alt;
  width;
  height;
  className;
  priority;
    img.src = src
  })
} 

