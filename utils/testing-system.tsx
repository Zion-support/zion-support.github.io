<<<<<<< HEAD
import
  '@testing-library/jest-dom';
=======
<<<<<<< HEAD
import '@testing-library/jest-dom';
>>>>>>> main

export class TestingSystem {
  static async testUserInteraction(element: HTMLElement, action: 'click' | 'type' | 'hover') {
    switch (action) {
<<<<<<< HEAD
      case 'click': 
=======
      case 'click':
>>>>>>> main
        element.click();
        break;
      case 'type':
        // Handle typing
        break;
      case 'hover':
        // Handle hover
        break;
    }
  }
=======
import "@testing-library/jest-dom"; export class TestingSystem { static async testUserInteraction(element: HTMLElement, action: "click" | "type" | "hover") { switch (action) { case "click": element.click(), break, case "type": // comment
>>>>>>> main
}