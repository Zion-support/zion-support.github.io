import { accessibilityManager } from '../accessibility';

describe('accessibilityManager', () => {
  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  it('should initialize with default options', () => {
    accessibilityManager.initialize();
    
    expect(accessibilityManager.isInitialized).toBe(true);
  });

  it('should initialize with custom options', () => {
    const options = {
      announceChanges: true,
      reducedMotion: true,
      highContrast: false
    };
    
    accessibilityManager.initialize(options);
    
    expect(accessibilityManager.isInitialized).toBe(true);
  });

  it('should announce messages to screen reader', () => {
    const announceSpy = jest.spyOn(accessibilityManager, 'announceToScreenReader');
    
    accessibilityManager.announceToScreenReader('Test message');
    
    expect(announceSpy).toHaveBeenCalledWith('Test message');
  });

  it('should handle keyboard navigation', () => {
    const keyboardSpy = jest.spyOn(accessibilityManager, 'handleKeyboardNavigation');
    
    const event = new KeyboardEvent('keydown', { key: 'Tab' });
    accessibilityManager.handleKeyboardNavigation(event);
    
    expect(keyboardSpy).toHaveBeenCalledWith(event);
  });

  it('should cleanup properly', () => {
    accessibilityManager.initialize();
    accessibilityManager.cleanup();
    
    expect(accessibilityManager.isInitialized).toBe(false);
  });

  it('should handle missing ARIA live region', () => {
    // Remove any existing live region
    const existingLiveRegion = document.getElementById('aria-live-region');
    if (existingLiveRegion) {
      existingLiveRegion.remove();
    }
    
    accessibilityManager.announceToScreenReader('Test message');
    
    // Should create a new live region
    const liveRegion = document.getElementById('aria-live-region');
    expect(liveRegion).toBeInTheDocument();
  });
});