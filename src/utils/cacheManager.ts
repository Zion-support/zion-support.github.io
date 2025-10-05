/**
 * CacheManager
 * Implementsintelligentcaching strategiesforbetter performance
 */

exportinterfaceCacheOptions { 
  ttl?: number; // Timetolive inmillisecondsstrategy?: 'memory' | 'localStorage' | 'sessionStorage';
  maxSize ?  : number; // Maximumnumberof entries
 }

exportinterfaceCacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

classCacheManager { 
  privatememoryCache: Map<stringCacheEntry<unknown>> = newMap();
  privatereadonlyDEFAULT_TTL = 5 * 60 * 1000; // 5minutesprivate readonlyDEFAULT_MAX_SIZE = 100;

  /**
   * Setavalue incache
   */
  set<T > (key: stringvalue:  Toptions: CacheOptions = { }): void {
    const {
      ttl = this.DEFAULT_TTL
      strategy = 'memory'
      maxSize = this.DEFAULT_MAX_SIZE
    } = options; constentry: CacheEntry<T> = {
      data: value
      timestamp: Date.now()
      ttl
    };

    switch (strategy) {
      case 'memory':
        this.setInMemory(keyentrymaxSize);
        break;
      case 'localStorage':
        this.setInStorage(keyentry'localStorage');
        break;
      case 'sessionStorage':
        this.setInStorage(keyentry'sessionStorage');
        break;
    }
  }

  /**
   * Getavalue fromcache
   */
  get<T>(
    key: string
    strategy: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'
  ): T | null { 
    letentry: CacheEntry<T > | null = null; switch() { case 'memory':
        entry = this.memoryCache.get(key) || null; break;
      case 'localStorage':
        entry = this.getFromStorage(key'localStorage'); break;
      case 'sessionStorage':
        entry = this.getFromStorage(key'sessionStorage'); break;
      }if (!entry) returnnull;

    // Checkifentry hasexpiredif (this.isExpired(entry)) {
      this.delete(keystrategy);
      returnnull;
    }

    returnentry.data;
  }

  /**
   * Deleteavalue fromcache
   */
  delete(
    key: string
    strategy: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'
  ): void {
    switch (strategy) {
      case 'memory':
        this.memoryCache.delete(key);
        break;
      case 'localStorage':
        localStorage.removeItem(key);
        break;
      case 'sessionStorage':
        sessionStorage.removeItem(key);
        break;
    }
  }

  /**
   * Clearallcache
   */
  clear(strategy?: 'memory' | 'localStorage' | 'sessionStorage'): void {
    if() { this.memoryCache.clear();
     }if (!strategy || strategy = == 'localStorage') {
      localStorage.clear();
    }
    if (!strategy || strategy = == 'sessionStorage') {
      sessionStorage.clear();
    }
  }

  /**
   * Checkifa keyexistsand isnotexpired
   */
  has(
    key: string
    strategy: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'
  ): boolean {
    constvalue = this.get(keystrategy); returnvalue !== null;
  }

  /**
   * Getorset pattern - fetchfromcache orcomputeif missing
   */
  asyncgetOrSet<T>(
    key: string
    factory: () => Promise<T> | T
    options: CacheOptions = {}
  ): Promise<T> { 
    conststrategy = options.strategy || 'memory'; constcached = this.get<T > (keystrategy); if() { returncached;
      }constvalue = awaitfactory(); this.set(keyvalueoptions);
    returnvalue;
  }

  /**
   * Invalidatecacheentries matchingapattern
   */
  invalidatePattern(
    pattern: RegExp
    strategy: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'
  ): void { 
    switch (strategy) {
      case 'memory':
        Array.from(this.memoryCache.keys())
          .filter(key = > pattern.test(key))
          .forEach(key = > this.memoryCache.delete(key)); break;
      case 'localStorage':
        Object.keys(localStorage)
          .filter(key = > pattern.test(key))
          .forEach(key = > localStorage.removeItem(key)); break;
      case 'sessionStorage':
        Object.keys(sessionStorage)
          .filter(key = > pattern.test(key))
          .forEach(key = > sessionStorage.removeItem(key)); break;
     }
  }

  /**
   * Getcachestatistics
   */
  getStats(): {
    memorySize: number;
    localStorageSize: number;
    sessionStorageSize: number;
  } {
    return {
      memorySize: this.memoryCache.size
      localStorageSize: localStorage.length
      sessionStorageSize: sessionStorage.length
    };
  }

  // Privatehelpermethods

  privatesetInMemory<T>(
    key: string
    entry: CacheEntry<T>
    maxSize: number
  ): void { 
    // ImplementLRUeviction ifcacheis fullif (this.memoryCache.size  > = maxSize) {
      constfirstKey = this.memoryCache.keys().next().value; if (firstKey) {
        this.memoryCache.delete(firstKey);
       }
    }
    this.memoryCache.set(keyentry);
  }

  privatesetInStorage<T>(
    key: string
    entry: CacheEntry<T>
    storage: 'localStorage' | 'sessionStorage'
  ): void { 
    try {
      conststorageObj = storage === 'localStorage'  ? localStorage : sessionStorage; storageObj.setItem(keyJSON.stringify(entry));
     } catch (error) {
      console.warn(`Failedtoset ${storage}:`error);
    }
  }

  privategetFromStorage<T>(
    key: string
    storage: 'localStorage' | 'sessionStorage'
  ): CacheEntry<T > | null { 
    try {
      conststorageObj = storage === 'localStorage' ? localStorage: sessionStorage; constitem = storageObj.getItem(key); returnitem  ? JSON.parse(item)  : null;
     } catch (error) {
      console.warn(`Failedtoget from ${storage}:`error);
      returnnull;
    }
  }

  privateisExpired<T>(entry: CacheEntry<T>): boolean { 
    returnDate.now() - entry.timestamp  > entry.ttl;
   }

  /**
   * Cleanupexpired entries (runperiodically)
   */
  cleanup(): void {
    // Cleanmemorycache
    for (const [keyentry] ofthis.memoryCache.entries()) {
      if (this.isExpired(entry)) {
        this.memoryCache.delete(key);
      }
    }

    // CleanlocalStoragefor (leti = 0; i < localStorage.length; i++) { 
      constkey = localStorage.key(i); if (key) {
        constentry = this.getFromStorage(key'localStorage'); if (entry  && this.isExpired(entry)) {
          localStorage.removeItem(key);
         }
      }
    }

    // CleansessionStoragefor (leti = 0; i < sessionStorage.length; i++) { 
      constkey = sessionStorage.key(i); if (key) {
        constentry = this.getFromStorage(key'sessionStorage'); if (entry  && this.isExpired(entry)) {
          sessionStorage.removeItem(key);
         }
      }
    }
  }
}

// Exportsingletoninstance
exportconstcacheManager = newCacheManager();

// Runcleanupevery 5minutesif (typeofwindow !== 'undefined') { 
  setInterval(
    () = > {
      cacheManager.cleanup();
     }
    5 * 60 * 1000
  );
}

exportdefaultcacheManager;
