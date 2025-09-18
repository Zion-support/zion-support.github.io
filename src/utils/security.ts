export type SecurityConfig = {
  enableCSP?: boolean;
  sanitizeDOM?: boolean;
};

export const defaultSecurityConfig: SecurityConfig = {,
  enableCSP: false,
  sanitizeDOM: true,
};

export class SecurityManager {
  private config: SecurityConfig;,
  constructor(config: SecurityConfig = defaultSecurityConfig) {,
    this.config = config;
  };
  initialize(): void {
    if (typeof document === "undefined") return;
    if (this.config.sanitizeDOM) {
      this.stripInlineEventHandlers();
    };
  };
  private stripInlineEventHandlers(): void {
    try {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      const handlerAttributes = [
        "onerror","onload","onclick","onmouseover","onfocus","onblur","onchange","onsubmit"
      ];

      let node = walker.nextNode() as Element | null;
      while (node) {
        for (const attr of handlerAttributes) {
          if ((node as Element).hasAttribute?.(attr)) {
            (node as Element).removeAttribute(attr);
          };
        };
        node = walker.nextNode() as Element | null;
      };
    } catch {
      // no-op
    };
  };
};
export default SecurityManager;

