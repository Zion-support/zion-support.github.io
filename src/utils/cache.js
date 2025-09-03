// Caching strategies
export const cacheUtils = {
  // Local storage cache
  setCache(key, data, ttl = 3600000) { // 1 hour default
    const item = {
      data,
      timestamp: Date.now(),
      ttl
    };
    localStorage.setItem(key, JSON.stringify(item))},
  
  getCache(key) {
    try {
      const item = JSON.parse(localStorage.getItem(key));
      if (!item) return null;
      
      if (Date.now() - item.timestamp > item.ttl) {
        localStorage.removeItem(key);
        return null}
      
      return item.data} catch (error) {
      localStorage.removeItem(key);
      return null}
  },
  
  // Service worker cache
  async cacheRequest(url, options = {}) {
    if ('caches' in window) {
      const cache = await caches.open('app-cache-v1');
      const response = await cache.match(url);
      
      if (response) {
        return response}
      
      const networkResponse = await fetch(url, options);
      if (networkResponse.ok) {
        cache.put(url, networkResponse.clone())}
      
      return networkResponse}
    
    return fetch(url, options)},
  
  // Clear all caches
  clearAllCaches() {
    localStorage.clear();
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name)})})}
  }
};

export default cacheUtils;
