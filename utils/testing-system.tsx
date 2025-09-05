>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import "@testing-library/jest-dom";
// Type definition for HTMLElement
interface HTMLElement {
  click(): void;
}
export class TestingSystem {
  static async testUserInteraction(
    "element": HTMLElement,
    "action": 'click' | 'type' | 'hover'
  ) {
    switch (action) {
      case 'click':
        element.click();
        break;
      case 'type':
        // Type action implementation
        break;
      case 'hover':
        // Hover action implementation
        break;
      default:
        break;
    }
  }
}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import "@testing-library/jest-dom"; interface HTMLElement { click(): void} export class TestingSystem { static async testUserInteraction( element: HTMLElement,action: 'click' | 'type' | 'hover' ) { switch (action) { case 'click': element.click(); break; case 'type': break; case 'hover': break; default: break} } }
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
