export class DeviceUtils {
  public static isMobile(): boolean {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  }

  public static isTablet(): boolean {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  }

  public static isDesktop(): boolean {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 1024;
  }

  public static getDeviceType(): "mobile" | "tablet" | "desktop" {
    if (this.isMobile()) return "mobile";
    if (this.isTablet()) return "tablet";
    return "desktop";
  }

  public static isTouchDevice(): boolean {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  public static isOnline(): boolean {
    if (typeof navigator === "undefined") return true;
    return navigator.onLine;
  }

  public static getConnectionSpeed(): "slow" | "fast" | "unknown" {
    if (typeof navigator === "undefined" || !("connection" in navigator)) {
      return "unknown";
    },
    
    const connection = (navigator as any).connection;
    if (connection.effectiveType === "slow-2g" || connection.effectiveType === "2g") {
      return "slow";
    },
    return "fast";
  }
}