// UserExperienceEnhancer utility
export class UserExperienceEnhancer {
  private animations: Map<string, Animation> = new Map();
  private intersectionObserver: IntersectionObserver | null = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor() {
    this.init();
  }

  init() {
    this.setupAnimations();
    this.setupIntersectionObserver();
    this.setupResizeObserver();
    this.setupSmoothScrolling();
    this.setupLoadingStates();
    this.setupErrorHandling();
    this.setupAccessibilityEnhancements();
  }

  private setupAnimations() {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      this.setupScrollAnimations();
      this.setupHoverAnimations();
      this.setupPageTransitions();
    }
  }

  private setupScrollAnimations() {
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    animatedElements.forEach(element => {
      const animationType = element.getAttribute('data-animate');
      const delay = parseInt(element.getAttribute('data-delay') || '0');
      
      setTimeout(() => {
        element.classList.add('animate-in');
      }, delay);
    });
  }

  private setupHoverAnimations() {
    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll('[data-hover]');
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('hover-active');
      });
      
      element.addEventListener('mouseleave', () => {
        element.classList.remove('hover-active');
      });
    });
  }

  private setupPageTransitions() {
    // Add page transition effects
    document.addEventListener('DOMContentLoaded', () => {
      document.body.classList.add('page-loaded');
    });
  }

  private setupIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            // Trigger animation if element has animation data
            const animationType = entry.target.getAttribute('data-animation');
            if (animationType) {
              this.triggerAnimation(entry.target as HTMLElement, animationType);
            }
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      // Observe elements with animation attributes
      const animatedElements = document.querySelectorAll('[data-animation]');
      animatedElements.forEach(element => {
        this.intersectionObserver?.observe(element);
      });
    }
  }

  private setupResizeObserver() {
    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(entry => {
          const element = entry.target as HTMLElement;
          
          // Adjust layout based on size changes
          if (entry.contentRect.width < 768) {
            element.classList.add('mobile-layout');
          } else {
            element.classList.remove('mobile-layout');
          }
        });
      });

      // Observe main content areas
      const mainContent = document.querySelector('main');
      if (mainContent) {
        this.resizeObserver.observe(mainContent);
      }
    }
  }

  private setupSmoothScrolling() {
    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  private setupLoadingStates() {
    // Add loading states to async operations
    const asyncElements = document.querySelectorAll('[data-async]');
    
    asyncElements.forEach(element => {
      element.classList.add('loading');
      
      // Simulate async operation completion
      setTimeout(() => {
        element.classList.remove('loading');
        element.classList.add('loaded');
      }, 1000);
    });
  }

  private setupErrorHandling() {
    // Global error handling for better UX
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
      this.showErrorMessage('An unexpected error occurred. Please try again.');
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      this.showErrorMessage('An unexpected error occurred. Please try again.');
    });
  }

  private setupAccessibilityEnhancements() {
    // Enhance focus management
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Add focus indicators
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
      element.addEventListener('focus', () => {
        element.classList.add('focused');
      });
      
      element.addEventListener('blur', () => {
        element.classList.remove('focused');
      });
    });
  }

  private triggerAnimation(element: HTMLElement, animationType: string) {
    const animationClasses = {
      'fade-in': 'animate-fade-in',
      'slide-up': 'animate-slide-up',
      'slide-down': 'animate-slide-down',
      'slide-left': 'animate-slide-left',
      'slide-right': 'animate-slide-right',
      'scale-up': 'animate-scale-up',
      'rotate': 'animate-rotate'
    };

    const animationClass = animationClasses[animationType as keyof typeof animationClasses];
    if (animationClass) {
      element.classList.add(animationClass);
      
      // Remove animation class after completion
      element.addEventListener('animationend', () => {
        element.classList.remove(animationClass);
      }, { once: true });
    }
  }

  private showErrorMessage(message: string) {
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md z-50';
    errorDiv.textContent = message;
    
    document.body.appendChild(errorDiv);
    
    // Remove error message after 5 seconds
    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }

  // Method to add animation to element
  addAnimation(element: HTMLElement, animationType: string, duration: number = 1000) {
    element.style.animationDuration = `${duration}ms`;
    this.triggerAnimation(element, animationType);
  }

  // Method to show loading state
  showLoading(element: HTMLElement) {
    element.classList.add('loading');
  }

  // Method to hide loading state
  hideLoading(element: HTMLElement) {
    element.classList.remove('loading');
    element.classList.add('loaded');
  }

  // Method to show success message
  showSuccessMessage(message: string) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md z-50';
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
      successDiv.remove();
    }, 3000);
  }

  cleanup() {
    // Cleanup observers and animations
    this.intersectionObserver?.disconnect();
    this.resizeObserver?.disconnect();
    
    this.animations.forEach(animation => {
      animation.cancel();
    });
    this.animations.clear();
  }
}

export default UserExperienceEnhancer;