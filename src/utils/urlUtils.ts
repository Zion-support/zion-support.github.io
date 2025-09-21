export interface URLParts {
  protocol: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
}

export class URLUtils {
  public static parseURL(url: string): URLParts | null {
    try {
      const urlObj = new URL(url);
      return {
        protocol: urlObj.protocol;
        hostname: urlObj.hostname;
        port: urlObj.port;
        pathname: urlObj.pathname;
        search: urlObj.search;
        hash: urlObj.hash
      };
    } catch {
      return null;
    }
  }

  public static isValidURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  public static getDomain(url: string): string | null {
    const parts = this.parseURL(url);
    return parts ? parts.hostname : null;
  }

  public static getPath(url: string): string | null {
    const parts = this.parseURL(url);
    return parts ? parts.pathname : null;
  }

  public static getQueryParams(url: string): Record<string, string> {
    try {
      const urlObj = new URL(url);
      const params: Record<string, string> = {};
      
      urlObj.searchParams.forEach((value, key) => {
        params[key] = value;
      });
      
      return params;
    } catch {
      return {};
    }
  }

  public static addQueryParam(url: string, key: string, value: string): string {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set(key, value);
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  public static removeQueryParam(url: string, key: string): string {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.delete(key);
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  public static isExternalURL(url: string): boolean {
    if (typeof window === "undefined") {
      return false;
    }

    try {
      const urlObj = new URL(url);
      return urlObj.hostname !== window.location.hostname;
    } catch {
      return false;
    }
  }

  public static isSameOrigin(url: string): boolean {
    return !this.isExternalURL(url);
  }

  public static normalizeURL(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  public static getRelativeURL(url: string): string {
    if (typeof window === "undefined") {
      return url;
    }

    try {
      const urlObj = new URL(url, window.location.origin);
      return urlObj.pathname + urlObj.search + urlObj.hash;
    } catch {
      return url;
    }
  }
}