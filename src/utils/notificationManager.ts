/**
 * Notification Manager
 * Advanced notification system for the Zion Tech Group website
 */

interface NotificationConfig {
  position:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
  duration: number;
  maxNotifications: number;
  enableSound: boolean;
  enableVibration: boolean;
  enableBrowserNotifications: boolean;
  theme: "light" | "dark" | "auto";
}

interface NotificationOptions {
  title: string;
  message?: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  persistent?: boolean;
  actions?: Array<{
    label: string;
    action: () => void;
    style?: "primary" | "secondary";
  }>;
  icon?: string;
  sound?: string;
  vibration?: number[];
  onClick?: () => void;
  onClose?: () => void;
  metadata?: Record<string, unknown>;
}

interface Notification extends NotificationOptions {
  id: string;
  timestamp: number;
  visible: boolean;
  progress?: number;
}

export class NotificationManager {
  private static instance: NotificationManager;
  private config: NotificationConfig;
  private notifications: Map<string, Notification> = new Map();
  private container: HTMLElement | null = null;
  private soundEnabled = false;
  private permissionGranted = false;

  private constructor() {
    this.config = {
      position: "top-right",
      duration: 5000,
      maxNotifications: 5,
      enableSound: true,
      enableVibration: true,
      enableBrowserNotifications: true,
      theme: "auto",
    };

    this.initializeContainer();
    this.requestPermission();
    this.setupKeyboardShortcuts();
  }

  public static getInstance(): NotificationManager {
    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager();
    }
    return NotificationManager.instance;
  }

  public configure(config: Partial<NotificationConfig>): void {
    this.config = { ...this.config, ...config };
    this.updateContainerPosition();
    this.updateContainerTheme();
  }

  public async show(options: NotificationOptions): Promise<string> {
    const id = this.generateId();
    const notification: Notification = {
      id,
      timestamp: Date.now(),
      visible: true,
      ...options,
    };

    this.notifications.set(id, notification);

    // Remove oldest notifications if limit exceeded
    if (this.notifications.size > this.config.maxNotifications) {
      const oldestId = this.getOldestNotificationId();
      if (oldestId) {
        this.remove(oldestId);
      }
    }

    // Show browser notification if enabled and permission granted
    if (this.config.enableBrowserNotifications && this.permissionGranted) {
      this.showBrowserNotification(notification);
    }

    // Play sound if enabled
    if (this.config.enableSound && options.sound !== "none") {
      this.playSound(options.sound || this.getDefaultSound(options.type));
    }

    // Vibrate if enabled
    if (
      this.config.enableVibration &&
      options.vibration &&
      "vibrate" in navigator
    ) {
      navigator.vibrate(options.vibration);
    }

    // Render notification
    this.renderNotification(notification);

    // Auto-remove if not persistent
    if (!options.persistent) {
      const duration = options.duration || this.config.duration;
      setTimeout(() => {
        this.remove(id);
      }, duration);
    }

    return id;
  }

  public success(
    title: string,
    message?: string,
    options?: Partial<NotificationOptions>,
  ): Promise<string> {
    return this.show({
      title,
      message,
      type: "success",
      icon: "✓",
      ...options,
    });
  }

  public error(
    title: string,
    message?: string,
    options?: Partial<NotificationOptions>,
  ): Promise<string> {
    return this.show({
      title,
      message,
      type: "error",
      icon: "✕",
      persistent: true,
      ...options,
    });
  }

  public warning(
    title: string,
    message?: string,
    options?: Partial<NotificationOptions>,
  ): Promise<string> {
    return this.show({
      title,
      message,
      type: "warning",
      icon: "⚠",
      ...options,
    });
  }

  public info(
    title: string,
    message?: string,
    options?: Partial<NotificationOptions>,
  ): Promise<string> {
    return this.show({
      title,
      message,
      type: "info",
      icon: "ℹ",
      ...options,
    });
  }

  public remove(id: string): void {
    const notification = this.notifications.get(id);
    if (notification) {
      this.notifications.delete(id);
      this.removeNotificationElement(id);
      notification.onClose?.();
    }
  }

  public clear(): void {
    this.notifications.forEach((notification) => {
      notification.onClose?.();
    });
    this.notifications.clear();
    if (this.container) {
      this.container.innerHTML = "";
    }
  }

  public getNotifications(): Notification[] {
    return Array.from(this.notifications.values());
  }

  public getVisibleCount(): number {
    return Array.from(this.notifications.values()).filter((n) => n.visible)
      .length;
  }

  private initializeContainer(): void {
    this.container = document.createElement("div");
    this.container.id = "notification-container";
    this.container.className = "notification-container";

    this.updateContainerPosition();
    this.updateContainerTheme();

    document.body.appendChild(this.container);
  }

  private updateContainerPosition(): void {
    if (!this.container) return;

    this.container.className = `notification-container notification-${this.config.position}`;
  }

  private updateContainerTheme(): void {
    if (!this.container) return;

    const theme =
      this.config.theme === "auto"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : this.config.theme;

    this.container.setAttribute("data-theme", theme);
  }

  private renderNotification(notification: Notification): void {
    if (!this.container) return;

    const element = document.createElement("div");
    element.className = `notification notification-${notification.type || "info"}`;
    element.id = `notification-${notification.id}`;
    element.setAttribute("data-id", notification.id);

    // Add click handler
    if (notification.onClick) {
      element.addEventListener("click", notification.onClick);
      element.style.cursor = "pointer";
    }

    // Build notification content
    element.innerHTML = `
      <div class="notification-content">
        <div class="notification-header">
          ${notification.icon ? `<span class="notification-icon">${notification.icon}</span>` : ""}
          <span class="notification-title">${notification.title}</span>
          <button class="notification-close" aria-label="Close notification">&times;</button>
        </div>
        ${notification.message ? `<div class="notification-message">${notification.message}</div>` : ""}
        ${notification.actions ? this.renderActions(notification.actions) : ""}
        ${notification.progress !== undefined ? `<div class="notification-progress"><div class="notification-progress-bar" style="width: ${notification.progress}%"></div></div>` : ""}
      </div>
    `;

    // Add close button handler
    const closeButton = element.querySelector(".notification-close");
    closeButton?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.remove(notification.id);
    });

    // Add action handlers
    if (notification.actions) {
      notification.actions.forEach((action) => {
        const button = element.querySelector(`[data-action="${action.label}"]`);
        button?.addEventListener("click", (e) => {
          e.stopPropagation();
          action.action();
        });
      });
    }

    this.container.appendChild(element);

    // Animate in
    requestAnimationFrame(() => {
      element.classList.add("notification-visible");
    });
  }

  private renderActions(
    actions: Array<{
      label: string;
      action: () => void;
      style?: "primary" | "secondary";
    }>,
  ): string {
    return `
      <div class="notification-actions">
        ${actions
          .map(
            (action) => `
          <button 
            class="notification-action notification-action-${action.style || "secondary"}"
            data-action="${action.label}"
          >
            ${action.label}
          </button>
        `,
          )
          .join("")}
      </div>
    `;
  }

  private removeNotificationElement(id: string): void {
    const element = document.getElementById(`notification-${id}`);
    if (element) {
      element.classList.remove("notification-visible");
      element.classList.add("notification-removing");

      setTimeout(() => {
        element.remove();
      }, 300); // Match CSS transition duration
    }
  }

  private async showBrowserNotification(
    notification: Notification,
  ): Promise<void> {
    if (!this.permissionGranted) return;

    try {
      const browserNotification = new Notification(notification.title, {
        body: notification.message,
        icon: "/favicon.ico",
        badge: "/favicon.ico",
        tag: notification.id,
        requireInteraction: notification.persistent,
        silent: notification.sound === "none",
      });

      browserNotification.onclick = () => {
        notification.onClick?.();
        browserNotification.close();
      };

      // Auto-close browser notification
      if (!notification.persistent) {
        const duration = notification.duration || this.config.duration;
        setTimeout(() => {
          browserNotification.close();
        }, duration);
      }
    } catch (error) {
      console.warn("Failed to show browser notification:", error);
    }
  }

  private async requestPermission(): Promise<void> {
    if (!this.config.enableBrowserNotifications) return;

    try {
      if ("Notification" in window) {
        const permission = await Notification.requestPermission();
        this.permissionGranted = permission === "granted";
      }
    } catch (error) {
      console.warn("Failed to request notification permission:", error);
    }
  }

  private playSound(soundName?: string): void {
    if (!this.config.enableSound || !soundName) return;

    try {
      const audio = new Audio(`/sounds/${soundName}.mp3`);
      audio.volume = 0.3;
      audio.play().catch(() => {
        // Fallback to system sound
        console.log("🔔"); // Visual sound indicator
      });
    } catch (error) {
      console.warn("Failed to play notification sound:", error);
    }
  }

  private getDefaultSound(type?: string): string {
    switch (type) {
      case "success":
        return "success";
      case "error":
        return "error";
      case "warning":
        return "warning";
      default:
        return "info";
    }
  }

  private generateId(): string {
    return `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getOldestNotificationId(): string | null {
    let oldestId: string | null = null;
    let oldestTime = Date.now();

    for (const [id, notification] of this.notifications) {
      if (notification.timestamp < oldestTime) {
        oldestTime = notification.timestamp;
        oldestId = id;
      }
    }

    return oldestId;
  }

  private setupKeyboardShortcuts(): void {
    document.addEventListener("keydown", (e) => {
      // Ctrl/Cmd + Shift + N to clear all notifications
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "N") {
        e.preventDefault();
        this.clear();
      }

      // Escape to close latest notification
      if (e.key === "Escape") {
        const notifications = Array.from(this.notifications.values());
        const latest = notifications[notifications.length - 1];
        if (latest) {
          this.remove(latest.id);
        }
      }
    });
  }

  public updateProgress(id: string, progress: number): void {
    const notification = this.notifications.get(id);
    if (notification) {
      notification.progress = Math.max(0, Math.min(100, progress));

      const element = document.getElementById(`notification-${id}`);
      const progressBar = element?.querySelector(".notification-progress-bar");
      if (progressBar) {
        (progressBar as HTMLElement).style.width = `${notification.progress}%`;
      }
    }
  }

  public destroy(): void {
    this.clear();
    if (this.container) {
      this.container.remove();
    }
  }
}

// Export singleton instance
export const notificationManager = NotificationManager.getInstance();

// Auto-configure for production
if (typeof window !== "undefined") {
  notificationManager.configure({
    position: "top-right",
    duration: 5000,
    maxNotifications: 5,
    enableSound: true,
    enableVibration: true,
    enableBrowserNotifications: true,
    theme: "auto",
  });
}
