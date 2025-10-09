/**
 * Google Analytics gtag types;
 */
interface GtagEvent {
  // TODO: Add content
 }
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
 }
type GtagCommand = 'config' | 'set' | 'event' | 'js';
interface Window {
  // TODO: Add content
 }
  gtag?: ();
  command: GtagCommand,
    targetId: string | Date,
config?: GtagEvent;
  ) => void;
  dataLayer?: unknown[];
}