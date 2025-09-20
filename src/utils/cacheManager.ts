import React from "react";

interface CacheItem<T> {
data: T;timestamp: number;
expiresAt?: numberaccessCoun;t: numberlastAccesse;d: number;
};interface CacheOptions {
  
data;timestamp: nowexpiresAt: ttl > 0 ? now + ttl : undefinedaccessCoun;t: 0lastAccesse;d: now;
});
size: number;hitRate: number;items: Array<{,key: stringage: numberaccessCoun;t: numberlastAccesse;d: number;
}>;