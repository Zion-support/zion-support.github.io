export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          // Registration successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
              return;
            }
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // New content is available
                  console.log('New content is available; please refresh.');
                  
                  // Show update notification
                  showUpdateNotification();
                } else {
                  // Content is cached for offline use
                  console.log('Content is cached for offline use.');
                }
              }
            };
          });
        })
        .catch((error) => {
          console.error('Error during service worker registration:', error);
        });
    });
  }
}
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
function showUpdateNotification() {
  // Create a notification element
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-zion-cyan text-white px-6 py-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full';
  notification.innerHTML = `
    <div class="flex items-center space-x-3">
      <div class="w-6 h-6 bg-white rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-zion-cyan" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <p class="font-semibold">Update Available</p>
        <p class="text-sm opacity-90">New version is ready to install</p>
      </div>
      <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <div class="mt-3 flex space-x-2">
      <button 
        onclick="window.location.reload()" 
        class="bg-white text-zion-cyan px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
      >
        Update Now
      </button>
      <button 
        onclick="this.parentElement.parentElement.remove()" 
        class="text-white opacity-75 hover:opacity-100 text-sm transition-opacity duration-200"
      >
        Later
      </button>
    </div>
  `;
  // Add to page
  document.body.appendChild(notification);
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  // Auto-remove after 10 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 300);
    }
  }, 10000);
}
// Request notification permission
export function requestNotificationPermission() {
  if ('Notification' in window) {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted');
        }
      });
    }
  }
}
// Send notification
export function sendNotification(title: string, options?: NotificationOptions) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, options);
  }
}
// Check if app is running as PWA
export function isPWA(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone === true;
}
// Install prompt handling
export function handleInstallPrompt() {
  let deferredPrompt: any;
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show install button or notification
    showInstallPrompt();
  });
  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    // Hide install prompt
    hideInstallPrompt();
  });
}
function showInstallPrompt() {
  // Create install prompt element
  const prompt = document.createElement('div');
  prompt.id = 'install-prompt';
  prompt.className = 'fixed bottom-4 left-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-4 rounded-2xl shadow-2xl z-50 transform transition-all duration-300 translate-y-full';
  prompt.innerHTML = `
    <div class="flex items-center space-x-3">
      <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <svg class="w-5 h-5 text-zion-cyan" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      </div>
      <div>
        <p class="font-semibold">Install Zion Tech Group</p>
        <p class="text-sm opacity-90">Add to home screen for quick access</p>
      </div>
      <button class="ml-4 text-white hover:text-gray-200" onclick="document.getElementById('install-prompt').remove()">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <div class="mt-3 flex space-x-2">
      <button 
        id="install-button"
        class="bg-white text-zion-cyan px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
      >
        Install
      </button>
      <button 
        onclick="document.getElementById('install-prompt').remove()" 
        class="text-white opacity-75 hover:opacity-100 text-sm transition-opacity duration-200"
      >
        Not now
      </button>
    </div>
  `;
  // Add to page
  document.body.appendChild(prompt);
  // Animate in
  setTimeout(() => {
    prompt.classList.remove('translate-y-full');
  }, 100);
  // Add install button functionality
  const installButton = document.getElementById('install-button');
  if (installButton) {
    installButton.addEventListener('click', () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult: any) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          deferredPrompt = null;
        });
      }
    });
  }
}
function hideInstallPrompt() {
  const prompt = document.getElementById('install-prompt');
  if (prompt) {
    prompt.classList.add('translate-y-full');
    setTimeout(() => {
      if (prompt.parentElement) {
        prompt.remove();
      }
    }, 300);
  }
}