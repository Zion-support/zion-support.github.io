/**
 * Global type definitions for enhanced type safety
 */

// Extend Window interface for browser APIs
declare global {
  interface Window {
    SpeechRecognition?: typeof SpeechRecognition;
    webkitSpeechRecognition?: typeof SpeechRecognition;
    __securityEnhancerInstance?: unknown;
  }

  interface Performance {
    memory?: {
      usedJSHeapSize?: number;
      jsHeapSizeLimit?: number;
    };
  }

  interface PerformanceEntry {
    processingStart?: number;
    hadRecentInput?: boolean;
    value?: number;
  }

  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionResultList {
    [index: number]: SpeechRecognitionResult;
    length: number;
  }

  interface SpeechRecognitionResult {
    [index: number]: SpeechRecognitionAlternative;
    length: number;
    isFinal: boolean;
  }

  interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
  }

  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
    start(): void;
    stop(): void;
  }

  const SpeechRecognition: {
    new (): SpeechRecognition;
  };

  const webkitSpeechRecognition: {
    new (): SpeechRecognition;
  };
}

// Service Worker event interface
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ServiceWorkerEvent extends Event {
  request: Request;
  respondWith(response: Promise<Response>): void;
}

// XMLHttpRequest interface extensions
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface XMLHttpRequest {
  _url?: string;
}

export {};