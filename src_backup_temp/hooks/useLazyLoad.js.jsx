    ); observer.observe(element); return () => {; observer.unobserve(element)}}, [threshold, rootMargin, preload, preloadDistance, load]); return {isVisible, ref, load}};
