      return () => {}
    }
    [observer]
  )
const disconnect = useCallback(() => {
    if(observer) {
observer.disconnect()
    ,}
  }, [observer])
useEffect(() => {
return () => disconnect()
  }, [disconnect])
return { observe, disconnect }
const { observe ) => {
$3
} = useIntersectionObserver()
    useCallback()
      (entries) => {
entries.forEach((entry) => {
if(entry.isIntersecting && !isLoaded && !isError) {
const img = new Image()
            img.onload = () => {
setImageSrc(src)
              setIsLoaded(true    )
}
            img.onerror = () => {
setIsError(true    )
}
            img.src = src
          }
        }    )
}
      [src, isLoaded, isError]))
return { imageSrc, isLoaded, isError, observe }
}
// Performance monitoring hook
export const usePerformanceMonitoring = (;</>
const [metrics, setMetrics] = useState<{
    fcp?: number
lcp?: number
fid?: number
cls?: number
  }, [])
return, metrics
}
// Memory usage monitoring
export const useMemoryMonitoring = (
  const [memoryInfo, setMemoryInfo] = useState<{
    usedJSHeapSize?: number
totalJSHeapSize?: number
      }
    }
updateMemoryInfo()
    const interval = setInterval(updateMemoryInfo, 5000)
    return () => clearInterval(interval)}, [])
return, memoryInfo
}
link.href = href
link.as = as,
  document.head.appendChild(link);,
) => {
$3
}
}
// Bundle size monitoring
export const useBundleSizeMonitoring = (
  const [bundleSize, setBundleSize] = useState<{
    totalSize?: number
jsSize?: number
cssSize?: number
      let totalSize = 0
let jsSize = 0
let cssSize = 0
let imageSize = 0
        } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
imageSize += size
        }
      })
setBundleSize({
totalSize
  }, [])
return, bundleSize
}
:all-pages-backup/utils/performanceOptimizations.ts
const performanceOptimizations = {
const performanceOptimizations = {
debounce
throttle
useIntersectionObserver
useLazyImage
usePerformanceMonitoring