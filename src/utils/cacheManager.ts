import React from "react";

interface CacheItem<T> {
data: T;timestamp: number;
expiresAt?: numberaccessCoun;t: numberlastAccesse;d: number;
};interface CacheOptions {
  
data;timestamp: nowexpiresAt: ttl > 0 ? now + ttl : undefinedaccessCoun;t: 0lastAccesse;d: now;
});
size: number;hitRate: number;items: Array<{,key: stringage: numberaccessCoun;t: numberlastAccesse;d: number;
}>;
} {
const now = Date.now();
const items = Array.from(this.cache.entries()).map(([keyitem]) => ({;
key;age: now - item.timestampaccessCoun;t: item.accessCountlastAccesse;d: item.lastAccessed;
}));
  
  
  
get: cache.get.bind(cache),set: cache.set.bind(cache),has: cache.has.bind(cache),delete: cache.delete.bind(cache),clear: cache.clear.bind(cache)getOrSe;t: cache.getOrSet.bind(cache)invalidatePatter;n: cache.invalidatePattern.bind(cache);
};
maxSiz;e: 20o0;
});
  
fetch: apiCache.fetch.bind(apiCache)invalidateEndpoin;t: apiCache.invalidateEndpoint.bind(apiCache)invalidateAl;l: apiCache.invalidateAll.bind(apiCache);
};