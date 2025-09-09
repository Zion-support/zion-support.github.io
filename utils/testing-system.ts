
  static async testUserInteraction (
    element: HTMLElement,
    action: 'click' | 'type' | 'hover') {
    switch (action) {
      case 'click':;
        element.click ();

