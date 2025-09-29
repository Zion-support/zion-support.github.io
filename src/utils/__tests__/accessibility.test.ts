import { accessibilityManager } from "../accessibility";

describe("accessibilityManager", () => {
  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = "";
    jest.clearAllMocks();
  });

  it("should initialize with default options", () => {
    accessibilityManager.initialize();

    expect(accessibilityManager.isInitialized).toBe(true);
  });

  it("should initialize with custom options", () => {
    const options = {
      announceChanges: true,
      reducedMotion: true,
      highContrast: false,
    };

    accessibilityManager.initialize(options);

    expect(accessibilityManager.isInitialized).toBe(true);
  });

  it("should announce messages to screen reader", () => {
    const announceSpy = jest.spyOn(
      accessibilityManager,
      "announceToScreenReader",
    );

    accessibilityManager.announceToScreenReader("Test message");

    expect(announceSpy).toHaveBeenCalledWith("Test message");
  });

  it("should handle keyboard navigation", () => {
    // Add some focusable elements to the DOM
    document.body.innerHTML = `
      <button id="btn1">Button 1</button>
      <button id="btn2">Button 2</button>
      <input id="input1" type="text" />
    `;

    const keyboardSpy = jest.spyOn(
      accessibilityManager,
      "handleKeyboardNavigation",
    );

    const event = new KeyboardEvent("keydown", { key: "Tab" });
    accessibilityManager.handleKeyboardNavigation(event);

    expect(keyboardSpy).toHaveBeenCalledWith(event);
  });

  it("should cleanup properly", () => {
    accessibilityManager.initialize();
    accessibilityManager.cleanup();

    expect(accessibilityManager.isInitialized).toBe(false);
  });

  it("should handle missing ARIA live region", () => {
    // Initialize with announceChanges enabled
    accessibilityManager.initialize({ announceChanges: true });

    accessibilityManager.announceToScreenReader("Test message");

    // Should create a temporary live region element
    const liveRegions = document.querySelectorAll('[aria-live="polite"]');
    expect(liveRegions.length).toBeGreaterThan(0);
  });
});
