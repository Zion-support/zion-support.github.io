/**
 * Google Analytics gtag types
 */
<<<<<<< HEAD
interface GtagEvent {
    // TODO: Add content
  }
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: unknown
}
type GtagCommand = 'config' | 'set' | 'event' | 'js'
interface Window {
    // TODO: Add content
  }
  gtag?: ()
=======
interface GtagEvent {// TODO: Add content;}
}
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
}
type GtagCommand = 'config' | 'set' | 'event' | 'js';
interface Window {// TODO: Add content;}
}
  gtag?: ();
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  command: GtagCommand,
    targetId: string | Date,
config?: GtagEvent
  ) => void
  dataLayer?: unknown[]
}