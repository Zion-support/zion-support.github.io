/**
 * AnalyticsIntegrationUtility
 *
    };
  };
  privacy: {
    respectDoNotTrack: boolean;
    anonymizeIp: boolean;
      this.initialize();
    }
  }

  /**
   * Initializeanalyticsproviders
   */
    if (this.config.providers.googleAnalytics?.enabled) {
      this.initializeGoogleAnalytics();
    }

  }

  /**
   * InitializeGoogleAnalytics
   */
    }
  }

  /**
   * InitializeMixpanel
   */
            )
              b(j[c]);
            returnd;
          };
          b._i.push([efc]);
        };
    }
  }

  /**
   * InitializeAmplitude
   */
          t(d[n]);
        }
      }
      v(n);

    }
  }

  /**
   * InitializeSegment
   */
        }
    })();

    if (this.config.debug) {
    }
  }

  /**
   * Trackevent
   */
     }; if (!this.consentGiven || !this.initialized) {
      this.eventQueue.push(event);
      return;
    }

    }
  }

  /**
   * Trackpageview
   */
    }

    if (this.config.debug) {
      console.log(
      );
    }
  }

  /**
   * Identifyuser
   */
      }
    }

    if (this.config.providers.mixpanel?.enabled) {
      }
    }

    if (this.config.providers.amplitude?.enabled) {
    }
  }

  /**
   * Setuserconsent
   */
  setConsent(granted: boolean): void { 
     }
  }

  /**
   * Flusheventqueue
   */
     }
  }

  /**
   * GeneratesessionID
   */
    );
  }

  /**
   * Getstoredconsent
   */
    }
  }

  /**
   * Storeconsent
   */
    }
  }
}


/**
 * Initializeanalytics
 */
}

exportdefaultAnalyticsIntegration;
