/**
 * Enhanced User Feedback and Communication Manager
 */

export interface FeedbackMessage {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  duration?: number;
  actions?: FeedbackAction[];
  timestamp: number;
}

export interface FeedbackAction {
  label: string;
  action: () => void;
  primary?: boolean;
}

export class UserFeedbackManager {
  private static instance: UserFeedbackManager;
  private messages: FeedbackMessage[] = [];
  private maxMessages = 5;
  private container: HTMLElement | null = null;

  private constructor() {
    this.createContainer();
    this.setupGlobalErrorHandler();
  }

  public static getInstance(): UserFeedbackManager {
    if (!UserFeedbackManager.instance) {
      UserFeedbackManager.instance = new UserFeedbackManager();
    }
    return UserFeedbackManager.instance;
  }

  private createContainer(): void {
    if (typeof document === "undefined") return;

    this.container = document.createElement("div");
    this.container.id = "feedback-container";
    this.container.className = "fixed top-4 right-4 z-50 space-y-2";
    this.container.style.cssText = `
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 8px;
      max-width: 400px;
    `;

    document.body.appendChild(this.container);
  }

  private setupGlobalErrorHandler(): void {
    if (typeof window === "undefined") return;

    window.addEventListener("error", (event) => {
      this.showError(
        "Application Error",
        event.message || "An unexpected error occurred",
      );
    });

    window.addEventListener("unhandledrejection", (event) => {
      this.showError(
        "Promise Rejection",
        event.reason?.message || "An unexpected error occurred",
      );
    });
  }

  public showMessage(message: Omit<FeedbackMessage, "id" | "timestamp">): void {
    const feedbackMessage: FeedbackMessage = {
      ...message,
      id: this.generateId(),
      timestamp: Date.now(),
    };

    this.messages.push(feedbackMessage);
    this.renderMessage(feedbackMessage);

    // Auto-remove after duration
    if (feedbackMessage.duration) {
      setTimeout(() => {
        this.removeMessage(feedbackMessage.id);
      }, feedbackMessage.duration);
    }

    // Limit number of messages
    if (this.messages.length > this.maxMessages) {
      const oldestMessage = this.messages.shift();
      if (oldestMessage) {
        this.removeMessageElement(oldestMessage.id);
      }
    }
  }

  public showSuccess(title: string, message: string, duration = 5000): void {
    this.showMessage({
      type: "success",
      title,
      message,
      duration,
    });
  }

  public showError(title: string, message: string, duration = 8000): void {
    this.showMessage({
      type: "error",
      title,
      message,
      duration,
    });
  }

  public showWarning(title: string, message: string, duration = 6000): void {
    this.showMessage({
      type: "warning",
      title,
      message,
      duration,
    });
  }

  public showInfo(title: string, message: string, duration = 4000): void {
    this.showMessage({
      type: "info",
      title,
      message,
      duration,
    });
  }

  public showLoading(title: string, message: string): string {
    const id = this.generateId();
    this.showMessage({
      type: "info",
      title,
      message,
      duration: 0, // Don't auto-remove
    });
    return id;
  }

  public removeMessage(id: string): void {
    const index = this.messages.findIndex((msg) => msg.id === id);
    if (index !== -1) {
      this.messages.splice(index, 1);
      this.removeMessageElement(id);
    }
  }

  public clearAll(): void {
    this.messages.forEach((message) => {
      this.removeMessageElement(message.id);
    });
    this.messages = [];
  }

  private renderMessage(message: FeedbackMessage): void {
    if (!this.container) return;

    const messageElement = document.createElement("div");
    messageElement.id = `feedback-${message.id}`;
    messageElement.className = `feedback-message feedback-${message.type}`;
    messageElement.style.cssText = `
      background: ${this.getBackgroundColor(message.type)};
      color: white;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      min-width: 300px;
    `;

    messageElement.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
        <h4 style="margin: 0; font-size: 14px; font-weight: 600;">${message.title}</h4>
        <button class="feedback-close" style="background: none; border: none; color: white; cursor: pointer; font-size: 18px; line-height: 1;">&times;</button>
      </div>
      <p style="margin: 0; font-size: 13px; line-height: 1.4; opacity: 0.9;">${message.message}</p>
      ${message.actions ? this.renderActions(message.actions) : ""}
    `;

    // Add close functionality
    const closeButton = messageElement.querySelector(".feedback-close");
    closeButton?.addEventListener("click", () => {
      this.removeMessage(message.id);
    });

    this.container.appendChild(messageElement);

    // Animate in
    setTimeout(() => {
      messageElement.style.transform = "translateX(0)";
    }, 10);
  }

  private renderActions(actions: FeedbackAction[]): string {
    return `
      <div style="margin-top: 12px; display: flex; gap: 8px; justify-content: flex-end;">
        ${actions
          .map(
            (action) => `
          <button 
            class="feedback-action" 
            data-action="${action.label}"
            style="
              background: ${action.primary ? "rgba(255, 255, 255, 0.2)" : "transparent"};
              border: 1px solid rgba(255, 255, 255, 0.3);
              color: white;
              padding: 6px 12px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 12px;
              transition: background 0.2s;
            "
          >
            ${action.label}
          </button>
        `,
          )
          .join("")}
      </div>
    `;
  }

  private removeMessageElement(id: string): void {
    if (!this.container) return;

    const element = document.getElementById(`feedback-${id}`);
    if (element) {
      element.style.transform = "translateX(100%)";
      setTimeout(() => {
        element.remove();
      }, 300);
    }
  }

  private getBackgroundColor(type: string): string {
    const colors = {
      success: "#10b981",
      error: "#ef4444",
      warning: "#f59e0b",
      info: "#3b82f6",
    };
    return colors[type as keyof typeof colors] || colors.info;
  }

  private generateId(): string {
    return `feedback-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Export singleton instance
export const userFeedback = UserFeedbackManager.getInstance();
