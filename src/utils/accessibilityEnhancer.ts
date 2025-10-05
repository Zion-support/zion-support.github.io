/**
  keyboardNavigation: boolean;
  screenReaderSupport: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  focusManagement: boolean;
  ariaLabels: boolean;
  type: | 'color_contrast'
    | 'keyboard_navigation'
    | 'aria_labels'
    | 'focus_management';
  score: number;
  issues: string[];
    this.setupFocusManagement();
    this.setupAriaLabels();
    this.setupColorContrast();
    this.setupReducedMotion();
    this.observeAccessibility();
  }

          event.preventDefault();
          }
      }

        }
      }
    });
  }

         }
      }
    });

        this.restoreFocus();
      }
    });
  }

          }
      }
    });

      }
    });
  }

          );
        }
      }
    });

    if (contrastIssues.length  > 0) {
      this.recordMetric({
      });
    }
  }

        }
      `;
      document.head.appendChild(style);
    }
  }

            }
        }
      });
    });

        firstElement.focus(); event.preventDefault();
      }
    }
  }

      lastFocusedElement.focus();
      lastFocusedElement.removeAttribute('data-last-focused');
    }
  }

    this.isInitialized = false; this.metrics = []; this.focusTrapElements = [];
  }
}

// Exportsingletoninstance
exportconstaccessibilityEnhancer = newAccessibilityEnhancer();

      accessibilityEnhancer.initialize();
     });
  } else {
    accessibilityEnhancer.initialize();
  }
}
