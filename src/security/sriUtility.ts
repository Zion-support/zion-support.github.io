// Subresource Integrity Utility
export class SRIUtility {
  private static instance: SRIUtility;
  private integrityMap: Map<string, string> = new Map();
  
  static getInstance(): SRIUtility {
    if (!SRIUtility.instance) {
      SRIUtility.instance = new SRIUtility();
    }
    return SRIUtility.instance;
  }
  
  async generateIntegrity(content: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(content);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashBase64 = btoa(String.fromCharCode.apply(null, hashArray));
    return `sha256-${hashBase64}`;
  }
  
  addIntegrity(url: string, integrity: string): void {
    this.integrityMap.set(url, integrity);
  }
  
  getIntegrity(url: string): string | undefined {
    return this.integrityMap.get(url);
  }
  
  createSecureScript(src: string, integrity?: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.src = src;
    if (integrity) {
      script.integrity = integrity;
      script.crossOrigin = 'anonymous';
    }
    return script;
  }
  
  createSecureLink(href: string, integrity?: string): HTMLLinkElement {
    const link = document.createElement('link');
    link.href = href;
    if (integrity) {
      link.integrity = integrity;
      link.crossOrigin = 'anonymous';
    }
    return link;
  }
}

export const sriUtility = SRIUtility.getInstance();
