// Performance optimization utilities
// Debounce function for search inputs and other frequent events
export function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
// Throttle function for scroll events and other high-frequency events
export function throttle(func, limit) {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
// Lazy loading utility for images
export function lazyLoadImage(img, src) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                img.src = src;
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    observer.observe(img);
}
// Performance monitoring
export function measurePerformance(name, fn) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
}
// Memory usage monitoring
export function getMemoryUsage() {
    if ('memory' in performance) {
        const memory = performance.memory;
        return {
            used: Math.round(memory.usedJSHeapSize / 1048576), // MB
            total: Math.round(memory.totalJSHeapSize / 1048576), // MB
            limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
        };
    }
    return null;
}
// Preload critical resources
export function preloadResource(href, as) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
}
// Optimize images based on device pixel ratio
export function getOptimizedImageSrc(baseSrc, sizes = [1, 2, 3]) {
    const pixelRatio = window.devicePixelRatio || 1;
    const closestSize = sizes.reduce((prev, curr) => Math.abs(curr - pixelRatio) < Math.abs(prev - pixelRatio) ? curr : prev);
    return baseSrc.replace(/\.(jpg|jpeg|png|webp)/, `@${closestSize}x.$1`);
}
