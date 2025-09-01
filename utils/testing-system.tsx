<<<<<<< HEAD
=======
import React from 'react.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
import '@testing - library / jest - dom';
export class TestingSystem {

  static async testUserInteraction(element: HTMLElement, action: 'click' | 'type' | 'hover') {

    switch (action) {

      case 'click':
        element.click();
        break;
      case 'type':
        // Handle typing
        break;
      case 'hover':
        // Handle hover
        break;
}}}