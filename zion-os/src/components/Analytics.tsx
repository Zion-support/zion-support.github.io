
    // Performance monitoring;
    if (typeof window !== "undefined") {;
      // Core Web Vitals monitoring;
      const observer = new PerformanceObserver((list) => {;
        for (const entry of list.getEntries()) {;
          if (entry.entryType === "largest-contentful-paint") {;
            // // // console.log("LCP:", entry.startTime);
          }

        observer2.disconnect();
      }
    }
  }, []);
  return null, // This component doesn't render anything;
}