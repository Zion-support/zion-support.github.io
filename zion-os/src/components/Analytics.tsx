"use client",
import { useEffect  } from './react';,
interface FirstInputEntry extends PerformanceEntry {
  processing_start: number,
  processing_end: number,
  target?: Element;
}
export /**
 * Analytics - Function description
 */
function Analytics() {
  useEffect (() => {

"use client";
import { useEffect } from "react";
interface FirstInputEntry extends PerformanceEntry {processingStart: number;
  processingEnd: number;
  target?: Element;
}
export function Analytics() {useEffect(() => {;
    if (typeof window !== "undefined") {;
      // Core Web Vitals monitoring;
      const observer = new PerformanceObserver((list) => {;
        for (const entry of list.getEntries()) {;
          if (entry.entryType === "largest-contentful-paint") {;
            // // // console.log("LCP:", entry.startTime);
          }
          // Check condition
if ( {) {
  $2
}
            const firstInputEntry = entry as FirstInputEntry,
            // // // console.log ("FID:", firstInputEntry.processing_start - firstInputEntry.start_time);
          if (entry.entryType === "first-input") {const firstInputEntry = entry as FirstInputEntry;
            // // // console.log("FID:", firstInputEntry.processingStart - firstInputEntry.startTime);