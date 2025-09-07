setMetrics (newMetrics) 
}
}, [])
//Optimize images for (const img of Array.from (images) ) {
  if (img.complete && img.naturalWidth > 0) {
  //Add lazy loading img.loading = 'lazy'
//Add responsive sizes if not present if (!img.sizes) {
  optimizedCount++ 
}
} from 'lucide-react';

interface PerformanceMetrics {load_time: number;

  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;


  className = ''}
              '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';}
          }optimizedCount++;
        }
      }

      setOptimizationStatus(`Optimized ${optimizedCount} images`);
// Simulate optimization delay;
await new Promise(resolve => setTimeout(resolve, 1000));
      setOptimizationStatus('Image optimization complete');
    } catch (error) {
      setOptimizationStatus ('Image optimization failed');}
      console.error ('Image optimization error:', error);}
    } finally {
}
      setIsOptimizing(false);}
    }
    setMetrics(newMetrics);
    if (onMetricsUpdate) {
      onMetricsUpdate(newMetrics);
    }
    if (enableReporting && process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', newMetrics);
    }
  }, [onMetricsUpdate, enableReporting]);
  useEffect(() => {
    if (document.readyState === 'complete') {
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
    }
    return () => {
      window.removeEventListener('load', measureWebVitals);
    }
  }, [measureWebVitals]);
  // Monitor for performance issues
  useEffect(() => {
    if (!metrics) return;
    const warnings: string[] = [];
    if (metrics.fcp > 1800) warnings.push('First Contentful Paint is slow (>1.8s)');
    if (metrics.lcp > 2500) warnings.push('Largest Contentful Paint is slow (>2.5s)');
    if (metrics.ttfb > 600) warnings.push('Time to First Byte is slow (>600ms)');
    if (metrics.memory) {
      const memoryUsage = (metrics.memory.used / metrics.memory.limit) * 100;
      if (memoryUsage > 80) warnings.push('High memory usage detected');
    }
    if (warnings.length > 0 && enableReporting) {
      console.warn('Performance Issues Detected:', warnings);
    }
  }, [metrics, enableReporting]);
  return null;
}
})
}
}, [measurePerformance])
if (metrics.firstContentfulPaint > 1800) score -= 20
if (metrics.largestContentfulPaint > 2500) score -= 25
if (metrics.loadTime > 3000) score -= 15
if (metrics.timeToInteractive > 3500) score -= 20
> {
  showMetrics ? 'Hide' : 'Show' 
}Metrics </button> </div> </div> <div className='w-full bg-white/10 rounded-full h-3' > <motion.div </div> </div> {
  /* Metrics Display */ 
}{
  showMetrics && (<motion.div </div> </motion.div>) 
}<button onClick= {
  runAllOptimizations 
}disabled= {
  isOptimizing 
}className= {
  `w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 $ {
  isOptimizing ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105' 
}flex items-center justify-center gap-2` 
}> {
  isOptimizing ? (<> <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' /> <span>Optimizing...</span> </>) : (<> <Zap className='w-4 h-4' /> <span>Run All Optimizations</span> </>) 
}</button> </div>) 
}</div> <li>• Use WebP images for better compression</li> <li>• Implement lazy loading for images</li> <li>• Minimize CSS and JavaScript bundles</li> <li>• Use CDN for static assets</li> <li>• Enable gzip compression</li> </ul> </div> </div>) 
}
export default PerformanceOptimizer