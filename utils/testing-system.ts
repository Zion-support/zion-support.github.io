<<<<<<< HEAD
export class TestingSystem {;
  static async testUserInteraction(element:HTMLElement, action:'click' | 'type' | 'hover') {;
    switch (action) {;
      case 'click':;
        element.click(),;
        break,;
      case 'type':// Handle typing;
        break,;
      case 'hover':// Handle hover;
        break;
    }
  }
=======
export class TestingSystem {_static async testUserInteraction(element: HTMLElement, _action: 'click' | 'type' | 'hover') {
    switch (action) {
      case 'click':
        element.click(),
        break,
      case 'type': // Handle typing
        break,
      case 'hover': // Handle hover
        break
    }  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}