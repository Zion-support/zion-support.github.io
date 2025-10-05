/**

  /**
   * Setavalue incache
   */
    };

    switch (strategy) {
      case 'memory':
        break;
    }
  }

  /**
   * Getavalue fromcache
   */
  get<T>(
  }

  /**
   * Deleteavalue fromcache
   */
  delete(
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
      sessionStorage.clear();
    }
  }

  /**
   * Checkifa keyexistsand isnotexpired
   */
  has(
  }

  /**
   * Invalidatecacheentries matchingapattern
   */
  invalidatePattern(
  ): void { 
    switch (strategy) {
      case 'memory':
        Array.from(this.memoryCache.keys())
     }
  }

  /**
   * Getcachestatistics
   */
  getStats(): {
    memorySize: number;
    localStorageSize: number;
    };
  }

  // Privatehelpermethods

      if (this.isExpired(entry)) {
        this.memoryCache.delete(key);
      }
    }

          localStorage.removeItem(key);
         }
      }
    }

          sessionStorage.removeItem(key);
         }
      }
    }
  }
}

// Exportsingletoninstance
exportconstcacheManager = newCacheManager();

  );
}

exportdefaultcacheManager;
