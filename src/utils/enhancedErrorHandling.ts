/**
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId ? : string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category : | 'javascript'
    | 'network'
    | 'resource'
    | 'promise'
    | 'react'
  errors: ErrorInfo[];
  totalErrors: number;
  criticalErrors: number;
  lastError ? : ErrorInfo;
  errorRate: number;
       });
    });

    this.isInitialized = true;
  }

      message.includes('chunk') ||
      message.includes('loading') ||
      message.includes('network')
    ) {
      return 'critical';
    }

    // Highseverityerrors
    if (
      message.includes('syntax') ||
      message.includes('reference') ||
      message.includes('type')
    ) {
      return 'high';
    }

    if (message.includes('warning') || message.includes('deprecated')) {
      return 'medium';
    }

    return 'low';
  }

  }
}

// Exportsingletoninstance
exportconstenhancedErrorHandler = newEnhancedErrorHandler();
