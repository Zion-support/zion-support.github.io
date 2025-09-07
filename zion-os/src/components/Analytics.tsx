<<<<<<< HEAD
<<<<<<< HEAD

;
"use client",import { useEffect  } from './react';,interface FirstInputEntry extends PerformanceEntry  {processing_start: number,processing_end: number,target?: Element;
}
export /**;
 * Analytics - Function description;
 */;
function Analytics() {useEffect (() => {"use client",import { useEffect } from "react",interface FirstInputEntry extends PerformanceEntry  {processingStart: number,processingEnd: number,target?: Element;
}export function Analytics() {useEffect(() => {// Performance monitoring;
    // Check condition;
if ( {) {$2;
}
      // Core Web Vitals monitoring;
      const observer = new PerformanceObserver ((list) => {for (const entry of list.get_entries ()) {// Check condition;
if ( {) {$2;
}
            // // // console.log ("LCP:", entry.start_time)}// Check condition;
if ( {) {$2;
}
            const firstInputEntry = entry as FirstInputEntry,// // // console.log ("FID:", firstInputEntry.processing_start - firstInputEntry.start_time)}
        }
      })observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] })// Cumulative Layout Shift monitoring;return () => {observer.disconnect()observer2.disconnect()return () => {observer.disconnect()if (entry.entryType === "first-input") {const firstInputEntry = entry as FirstInputEntry;
            // // // console.log("FID:", firstInputEntry.processingStart - firstInputEntry.startTime)}
        }
      }),observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] }),// Cumulative Layout Shift monitoring;
      let cls = 0,const observer2 = new PerformanceObserver((list) => {for (const entry of list.getEntries()) {if (entry.entryType === "layout-shift") {const layoutShiftEntry = entry as any;
            cls += layoutShiftEntry.value;
          }
        }
      }),observer2.observe({ entryTypes: ["layout-shift"] }),// Report metrics on page unload;
      window.addEventListener("beforeunload", () => {// // // console.log("CLS:", cls)}),// Cleanup;
      return () => {observer.disconnect()observer2.disconnect()}
      // Cumulative Layout Shift monitoring;      }


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

;
"use client",import { useEffect  } from './react';,interface FirstInputEntry extends PerformanceEntry  {processing_start: number,processing_end: number,target?: Element;
}
export /**;
 * Analytics - Function description;
 */;
function Analytics() {useEffect (() => {"use client",import { useEffect } from "react",interface FirstInputEntry extends PerformanceEntry  {processingStart: number,processingEnd: number,target?: Element;
}export function Analytics() {useEffect(() => {// Performance monitoring;
    // Check condition;
if ( {) {$2;
}
      // Core Web Vitals monitoring;
      const observer = new PerformanceObserver ((list) => {for (const entry of list.get_entries ()) {// Check condition;
if ( {) {$2;
}
            // // // console.log ("LCP:", entry.start_time)}// Check condition;
if ( {) {$2;
}
            const firstInputEntry = entry as FirstInputEntry,// // // console.log ("FID:", firstInputEntry.processing_start - firstInputEntry.start_time)}
        }
      })observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] })// Cumulative Layout Shift monitoring;return () => {observer.disconnect()observer2.disconnect()return () => {observer.disconnect()if (entry.entryType === "first-input") {const firstInputEntry = entry as FirstInputEntry;
            // // // console.log("FID:", firstInputEntry.processingStart - firstInputEntry.startTime)}
        }
      }),observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] }),// Cumulative Layout Shift monitoring;
      let cls = 0,const observer2 = new PerformanceObserver((list) => {for (const entry of list.getEntries()) {if (entry.entryType === "layout-shift") {const layoutShiftEntry = entry as any;
            cls += layoutShiftEntry.value;
          }
        }
      }),observer2.observe({ entryTypes: ["layout-shift"] }),// Report metrics on page unload;
      window.addEventListener("beforeunload", () => {// // // console.log("CLS:", cls)}),// Cleanup;
      return () => {observer.disconnect()observer2.disconnect()}
      // Cumulative Layout Shift monitoring;      }


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

"use client",;
import { useEffect } from "react",;
interface FirstInputEntry extends PerformanceEntry {;
  processingStart: number,;
  processingEnd: number,;
  target?: Element;
}
;
export function Analytics() {;
  useEffect(() => {;


    // Performance monitoring;
    // Check condition
if ( {) {
  $2
}
      // Core Web Vitals monitoring;
      const observer = new PerformanceObserver ((list) => {
        for (const entry of list.get_entries ()) {
          // Check condition
if ( {) {
  $2
}
            // // // console.log ("LCP:", entry.start_time);
          }


          // Check condition
if ( {) {
  $2
}
            const firstInputEntry = entry as FirstInputEntry,
            // // // console.log ("FID:", firstInputEntry.processing_start - firstInputEntry.start_time);

          if (entry.entryType === "first-input") {;
            const firstInputEntry = entry as FirstInputEntry;
            // // // console.log("FID:", firstInputEntry.processingStart - firstInputEntry.startTime);

<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          }
        }
      });
      observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      // Cumulative Layout Shift monitoring;
      let cls = 0,
      const observer2 = new PerformanceObserver ((list) => {
        for (const entry of list.get_entries ()) {
          // Check condition
if ( {) {
  $2
}
            const layoutShiftEntry = entry as any,
            cls += layoutShiftEntry.value;
          }
        }
      }),
      observer2.observe ({ entry_types: ["layout - shift"] }),
      // Report metrics on page unload;
      window.addEventListener ("beforeunload", () => {
        // // // console.log ("CLS:", cls);
      }),
      // Cleanup;

      return () => {;
        observer.disconnect();

        observer2.disconnect();

      }
<<<<<<< HEAD
=======
      // Cumulative Layout Shift monitoring;      }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    }
  }, [])return null, // This component doesn't render anything;
}