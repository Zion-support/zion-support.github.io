';'
    if (this.isInitialized || typeof window === 'undefined') return;'
    document.addEventListener('keydown', (event) => {'
      if (event.key === 'Tab' && event.shiftKey) {'
      } else if (event.key === 'Tab') {'
      if (event.key === 'Escape') {'
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {'
const modals = document.querySelectorAll('[role="dialog"][aria-hidden="false"
const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"
const menus = document.querySelectorAll('[role="menu"][aria-expanded="true"