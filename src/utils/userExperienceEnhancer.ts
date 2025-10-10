// UserExperienceEnhancer utility
// This file contains utility functions and configurations for user experience enhancement

export default class UserExperienceEnhancer {
  constructor() {
    this.init();
  }

  init() {
    if (typeof window !== 'undefined') {
      this.addLoadingStates();
      this.optimizeAnimations();
      this.addSmoothScrolling();
      this.enhanceInteractions();
    }
  }

  addLoadingStates() {
    // Add loading states for better UX
    const style = document.createElement('style');
    style.textContent = `
      .loading {
        opacity: 0.6;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }
      
      .skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `;
    document.head.appendChild(style);
  }

  optimizeAnimations() {
    // Optimize animations for better performance
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  addSmoothScrolling() {
    // Add smooth scrolling behavior
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
  }

  enhanceInteractions() {
    // Add hover effects and transitions
    const style = document.createElement('style');
    style.textContent = `
      .interactive {
        transition: all 0.3s ease;
        cursor: pointer;
      }
      
      .interactive:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      
      .interactive:active {
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  }
}
