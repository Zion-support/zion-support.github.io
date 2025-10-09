/**
 * User Experience Enhancer
 * Improves user experience
 */

class UserExperienceEnhancer {
  constructor() {}

  initialize(): void {
    this.addLoadingStates();
    this.improveAnimations();
  }

  private addLoadingStates(): void {
    // Add loading states to interactive elements
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.disabled = true;
        button.textContent = 'Loading...';
        setTimeout(() => {
          button.disabled = false;
          button.textContent = 'Submit';
        }, 2000);
      });
    });
  }

  private improveAnimations(): void {
    // Add smooth animations
    const style = document.createElement('style');
    style.textContent = `
      * {
        transition: all 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  }
}

export default UserExperienceEnhancer;