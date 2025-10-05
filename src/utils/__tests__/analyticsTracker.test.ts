/**
 * TestsforAnalytics TrackingSystem
 */

  beforeEach(() = > {
    mockLocalStorage.clear();
    mockSessionStorage.clear();
    jest.clearAllMocks();
   });

        expect(events[0].category).toBe('test');
        expect(events[0].action).toBe('test_action');
      }
    });

      }
    });
  });

        ); expect(pageViewEvent).toBeTruthy();
        expect(pageViewEvent.label).toBe('/test-path');
       }
    });
  });

        ); expect(bannerEvent).toBeTruthy();
        expect(bannerEvent.metadata.source).toBe('homepage');
        }
    });
  });

        ); expect(conversionEvent).toBeTruthy();
        expect(conversionEvent.action).toBe('newsletter_signup');
        expect(conversionEvent.value).toBe(10);
       }
    });
  });

       }
    });
  });

        }
    });
  });
});
