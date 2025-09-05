export class PerformanceMonitor {; static measure(name,fn) {; const start = performance.now(); const result = fn(); const end = performance.now(); ; ; if (typeof window !== 'undefined' && window.gtag) {; window.gtag('event','performance',{; "event_category": 'timing',; "event_label": 'name',; "value": "Math.round(end - start)"})} ; return result} ; static measureAsync(name,fn) {; const start = performance.now(); return fn().then(result => {; const end = performance.now(); ; if (typeof window !== 'undefined' && window.gtag) {; window.gtag('event','performance',{; "event_category": 'timing',; "event_label": 'name',; "value": "Math.round(end - start)"})} ; return result})} ; static reportWebVitals() {; if (typeof window !== 'undefined' && 'web-vitals' in window) {; import('web-vitals').then(({ getCLS,getFID,getFCP,getLCP,getTTFB }) => {; getCLS(console.log); getFID(console.log); getFCP(console.log); getLCP(console.log); getTTFB(console.log)})} } }
<<<<<<< HEAD
export class PerformanceMonitor {; static measure(name,fn) {; const start = performance.now(); const result = fn(); const end = performance.now(); ; ; if (typeof window !== &apos;undefined&apos; && window.gtag) {;&apos;;&apos;; window.gtag(&apos;event&apos;,&apos;performance&apos;,{;&apos;;&apos;; event_category: &apos;timing&apos;,event_label: name,value: Math.round(end - start)})} ; return result} ; static measureAsync(name,fn) {; const start = performance.now(); return fn().then(result => {; const end = performance.now(); ;&apos;;&apos;; if (typeof window !== &apos;undefined&apos; && window.gtag) {;&apos;;&apos;; window.gtag(&apos;event&apos;,&apos;performance&apos;,{;&apos;;&apos;; event_category: &apos;timing&apos;,event_label: name,value: Math.round(end - start)})} ; return result})} ; static reportWebVitals() {;&apos;;&apos;; if (typeof window !== &apos;undefined&apos; && &apos;web-vitals&apos; in window) {;&apos;;&apos;; import(&apos;web-vitals&apos;).then(({ getCLS,getFID,getFCP,getLCP,getTTFB }) => {; getCLS(console.log); getFID(console.log); getFCP(console.log); getLCP(console.log); getTTFB(console.log)})} } }
=======
<<<<<<< HEAD
=======
export class PerformanceMonitor {; static measure(name,fn) {; const start = performance.now(); const result = fn(); const end = performance.now(); ; ; if (typeof window !== &apos;undefined&apos; && window.gtag) {;&apos;;&apos;; window.gtag(&apos;event&apos;,&apos;performance&apos;,{;&apos;;&apos;; event_category: &apos;timing&apos;,event_label: name,value: Math.round(end - start)})} ; return result} ; static measureAsync(name,fn) {; const start = performance.now(); return fn().then(result => {; const end = performance.now(); ;&apos;;&apos;; if (typeof window !== &apos;undefined&apos; && window.gtag) {;&apos;;&apos;; window.gtag(&apos;event&apos;,&apos;performance&apos;,{;&apos;;&apos;; event_category: &apos;timing&apos;,event_label: name,value: Math.round(end - start)})} ; return result})} ; static reportWebVitals() {;&apos;;&apos;; if (typeof window !== &apos;undefined&apos; && &apos;web-vitals&apos; in window) {;&apos;;&apos;; import(&apos;web-vitals&apos;).then(({ getCLS,getFID,getFCP,getLCP,getTTFB }) => {; getCLS(console.log); getFID(console.log); getFCP(console.log); getLCP(console.log); getTTFB(console.log)})} } }
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
// Performance monitoring utilities;
export class PerformanceMonitor {;
  static measure(name, fn) {;
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    //
    ;
    // Send to analytics if available;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    if (typeof window !== 'undefined' && window.gtag) {;
      window.gtag('event', 'performance', {;
        event_category: 'timing',;
        event_label: name,;
        value: Math.round(end - start);
      }
    );
    }
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    if (typeof window !== 'undefined' && window.gtag) {;';';
      window.gtag('event', 'performance', {;';';
        "event_category": 'timing',
        "event_label": name,
        "value": Math.round(end - start)})}
    ;
    return result}
  ;
  static measureAsync(name, fn) {;
    const start = performance.now();
    return fn().then(result => {;
      const end = performance.now();
      //
      ;';';
      if (typeof window !== 'undefined' && window.gtag) {;';';
        window.gtag('event', 'performance', {;';';
          "event_category": 'timing',
          "event_label": name,
          "value": Math.round(end - start)})}
      ;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
      if (typeof window !== 'undefined' && window.gtag) {;
        window.gtag('event', 'performance', {;
          event_category: 'timing',;
          event_label: name,;
          value: Math.round(end - start);
        }
    );
      }
      ;
      return result;
    }
    );
  }
      return result})}
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  ;
  static reportWebVitals() {;';';
    if (typeof window !== 'undefined' && 'web-vitals' in window) {;';';
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {;
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
export class PerformanceMonitor {; static measure(name,fn) {; const start = performance.now(); const result = fn(); const end = performance.now(); ; ; if (typeof window !== 'undefined' && window.gtag) {; window.gtag('event','performance',{; event_category: 'timing',; event_label: 'name',; value: Math.round(end - start)})} ; return result} ; static measureAsync(name,fn) {; const start = performance.now(); return fn().then(result => {; const end = performance.now(); ; if (typeof window !== 'undefined' && window.gtag) {; window.gtag('event','performance',{; event_category: 'timing',; event_label: 'name',; value: Math.round(end - start)})} ; return result})} ; static reportWebVitals() {; if (typeof window !== 'undefined' && 'web-vitals' in window) {; import('web-vitals').then(({ getCLS,getFID,getFCP,getLCP,getTTFB }) => {; getCLS(console.log); getFID(console.log); getFCP(console.log); getLCP(console.log); getTTFB(console.log)})} } }
}
export class PerformanceMonitor {; static measure(name,fn) {; const start = performance.now(); const result = fn(); const end = performance.now(); ; ; if (typeof window !== 'undefined' && window.gtag) {;';'; window.gtag('event','performance',{;';'; event_category: 'timing',event_label: name,value: Math.round(end - start)})} ; return result} ; static measureAsync(name,fn) {; const start = performance.now(); return fn().then(result => {; const end = performance.now(); ;';'; if (typeof window !== 'undefined' && window.gtag) {;';'; window.gtag('event','performance',{;';'; event_category: 'timing',event_label: name,value: Math.round(end - start)})} ; return result})} ; static reportWebVitals() {;';'; if (typeof window !== 'undefined' && 'web-vitals' in window) {;';'; import('web-vitals').then(({ getCLS,getFID,getFCP,getLCP,getTTFB }) => {; getCLS(console.log); getFID(console.log); getFCP(console.log); getLCP(console.log); getTTFB(console.log)})} } }
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
        getTTFB(console.log);
      }
    );
    }
        getTTFB(console.log)})}
  }
}';
';';
export class PerformanceMonitor {; static measure(name,fn) {; const start = performance.now(); const result = fn(); const end = performance.now(); ; ; if (typeof window !== 'undefined' && window.gtag) {; window.gtag('event','performance',{; event_category: 'timing',; event_label: 'name',; value: Math.round(end - start)})} ; return result} ; static measureAsync(name,fn) {; const start = performance.now(); return fn().then(result => {; const end = performance.now(); ; if (typeof window !== 'undefined' && window.gtag) {; window.gtag('event','performance',{; event_category: 'timing',; event_label: 'name',; value: Math.round(end - start)})} ; return result})} ; static reportWebVitals() {; if (typeof window !== 'undefined' && 'web-vitals' in window) {; import('web-vitals').then(({ getCLS,getFID,getFCP,getLCP,getTTFB }) => {; getCLS(console.log); getFID(console.log); getFCP(console.log); getLCP(console.log); getTTFB(console.log)})} } }
}
<<<<<<< HEAD
export class PerformanceMonitor {; static measure(name,fn) {; const start = performance.now(); const result = fn(); const end = performance.now(); ; ; if (typeof window !== 'undefined' && window.gtag) {;';'; window.gtag('event','performance',{;';'; event_category: 'timing',event_label: name,value: Math.round(end - start)})} ; return result} ; static measureAsync(name,fn) {; const start = performance.now(); return fn().then(result => {; const end = performance.now(); ;';'; if (typeof window !== 'undefined' && window.gtag) {;';'; window.gtag('event','performance',{;';'; event_category: 'timing',event_label: name,value: Math.round(end - start)})} ; return result})} ; static reportWebVitals() {;';'; if (typeof window !== 'undefined' && 'web-vitals' in window) {;';'; import('web-vitals').then(({ getCLS,getFID,getFCP,getLCP,getTTFB }) => {; getCLS(console.log); getFID(console.log); getFCP(console.log); getLCP(console.log); getTTFB(console.log)})} } }
=======
export class PerformanceMonitor {; static measure(name,fn) {; const start = performance.now(); const result = fn(); const end = performance.now(); ; ; if (typeof window !== 'undefined' && window.gtag) {;';'; window.gtag('event','performance',{;';'; event_category: 'timing',event_label: name,value: Math.round(end - start)})} ; return result} ; static measureAsync(name,fn) {; const start = performance.now(); return fn().then(result => {; const end = performance.now(); ;';'; if (typeof window !== 'undefined' && window.gtag) {;';'; window.gtag('event','performance',{;';'; event_category: 'timing',event_label: name,value: Math.round(end - start)})} ; return result})} ; static reportWebVitals() {;';'; if (typeof window !== 'undefined' && 'web-vitals' in window) {;';'; import('web-vitals').then(({ getCLS,getFID,getFCP,getLCP,getTTFB }) => {; getCLS(console.log); getFID(console.log); getFCP(console.log); getLCP(console.log); getTTFB(console.log)})} } }
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
