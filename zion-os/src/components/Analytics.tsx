



"use client",
import { useEffect  } from './react';,
interface FirstInputEntry extends PerformanceEntry {}
  processing_start: number,
  processing_end: number,
  target?: Element;
}
export /**;
 * Analytics - Function description;
 */
function Analytics() {}
  useEffect (() => {}
"
"use client",;"
import { useEffect } from "react",;
interface FirstInputEntry extends PerformanceEntry {;
  processingStart: number,;
  processingEnd: number,;
  target?: Element;
}
;
export function Analytics() { return null; }
if ( {) {}
  $2;
}
      // Core Web Vitals monitoring;
      const observer = new PerformanceObserver ((list) => {}
        for (const entry of list.get_entries ()) {}
          // Check condition;
if ( {) {}
  $2;
}"
            // // // console.log ("LCP:", entry.start_time);
          }




          // Check condition;
if ( {) {}
  $2;
}
            const firstInputEntry = entry as FirstInputEntry,"
            // // // console.log ("FID:", firstInputEntry.processing_start - firstInputEntry.start_time);


"
          if (entry.entryType === "first-input") {;
            const firstInputEntry = entry as FirstInputEntry,;"
            // // // console.log("FID:", firstInputEntry.processingStart - firstInputEntry.startTime);






          }
        }
      });"
      observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] });
      // Cumulative Layout Shift monitoring;


      return () => {;
        observer.disconnect();

        observer2.disconnect();






      }
    }
  }, []);'
  return null, // This component doesn't render anything;
}
'"