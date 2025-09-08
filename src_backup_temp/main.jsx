import React from 'react';'
import { createRoot, hydrateRoot } from 'react-dom/client';'
import App from "./App.tsx";"
";"; import { AppLayout } from "@/layout/AppLayout"; import { AuthProvider } from "./src/context/auth/AuthProvider.jsx"; import { NotificationProvider } from "./context/notifications/NotificationContext"; import { AnalyticsProvider } from "./context/AnalyticsContext import { ViewModeProvider } from "./context/ViewModeContext"; "
import _React from 'react';",'; ';';';';'; import {createRoot,hydrateRoot} from 'react-dom/client';";';';';'; import App from "./App.tsx";",'; ';';';';'; import './index.css';",'; ';';';';'; import {HelmetProvider} from 'react-helmet-async';",'; ';';';';'; import {BrowserRouter as Router} from 'react-router-dom';",'; ';';';';'; import {QueryClient,QueryClientProvider} from '@tanstack/react-query';",'; ';';';';'; import './utils/globalFetchInterceptor';",'; ';';';';'; import './utils/consoleErrorToast';';'; ';';';';'; import './i18n';",'; ';';';';'; import {LanguageProvider} from '@/context/LanguageContext';";';';';'; import {LanguageDetectionPopup} from "./components/LanguageDetectionPopup";",'; ';';';';'; import {WhitelabelProvider} from '@/context/WhitelabelContext';",'; ';';';'; '
const React from "react";","; ";";";";"; import {createRoot,hydrateRoot} from "react-dom/client";";";";";"; import App from "./App.tsx";","; ";";";";"; import "./index.css";","; ";";";";"; import {HelmetProvider} from "react-helmet-async";","; ";";";";"; import {BrowserRouter as Router} from "react-router-dom";","; ";";";";"; import {QueryClient,QueryClientProvider} from "@tanstack/react-query";","; ";";";";"; import "./utils/globalFetchInterceptor";","; ";";";";"; import "./utils/consoleErrorToast";";"; ";";";";"; import "./i18n";","; ";";";";"; import {LanguageProvider} from "@/context/LanguageContext";";";";";"; import {LanguageDetectionPopup} from "./components/LanguageDetectionPopup";","; ";";";";"; import {WhitelabelProvider} from "@/context/WhitelabelContext";","; ";";";"; ";"; import {AppLayout} from "@/layout/AppLayout"; import {AuthProvider} from "./context/auth/AuthProvider";";";";"; import {NotificationProvider} from "./context/notifications/NotificationContext"; ";";";";"; import {AnalyticsProvider} from "./context/AnalyticsContext";","; ";";";";"; import React from "react"; import {createRoot,hydrateRoot} from "react-dom/client;"; import App from "./App.tsx";"; ";";";";"; import "./index.css";";"; import {HelmetProvider} from "react-helmet-async";"; ";";";";"; import {BrowserRouter as Router} from "react-router-dom"; import {QueryClient,QueryClientProvider} from "@tanstack/react-query;","; ";";";";"; import "./utils/globalFetchInterceptor;";";"; import "./utils/consoleErrorToast",;"; ";";";";"; import "./i18n",;"; ";";";";"; import {LanguageProvider} from "@/context/LanguageContext;"; import {LanguageDetectionPopup} from "./components/LanguageDetectionPopup;","; ";";";";"; import {WhitelabelProvider} from "@/context/WhitelabelContext;"; import {AppLayout} from "@/layout/AppLayout"; import {AuthProvider} from "./context/auth/AuthProvider;"; import {NotificationProvider} from "./context/notifications/NotificationContext"; ";";";";"; import {AnalyticsProvider} from "./context/AnalyticsContext;"; import {ViewModeProvider} from "./context/ViewModeContext"; ";"; import { AppLayout } from "@/layout/AppLayout"; import { AuthProvider } from "./src/context/auth/AuthProvider.jsx"; import { NotificationProvider } from "./context/notifications/NotificationContext"; import { AnalyticsProvider } from "./context/AnalyticsContext import { ViewModeProvider } from "./context/ViewModeContext"; import _React from 'react';",'; ';';';';'; import {createRoot,hydrateRoot} from 'react-dom/client';";';';';'; import App from "./App.tsx";",'; ';';';';'; import './index.css';",'; ';';';';'; import {HelmetProvider} from 'react-helmet-async';",'; ';';';';'; import {BrowserRouter as Router} from 'react-router-dom';",'; ';';';';'; import {QueryClient,QueryClientProvider} from '@tanstack/react-query';",'; ';';';';'; import './utils/globalFetchInterceptor';",'; ';';';';'; import './utils/consoleErrorToast';';'; ';';';';'; import './i18n';",'; ';';';';'; import {LanguageProvider} from '@/context/LanguageContext';";';';';'; import {LanguageDetectionPopup} from "./components/LanguageDetectionPopup";",'; ';';';';'; import {WhitelabelProvider} from '@/context/WhitelabelContext';",'; ';';';'; '
import App from './App.tsx';'
import './index.css';'
import { HelmetProvider } from 'react-helmet-async';'
import { BrowserRouter as Router } from 'react-router-dom';'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';'
import './utils/globalFetchInterceptor';'
import './utils/consoleErrorToast';'
// Import i18n configuration;
import './i18n';'
import { LanguageProvider } from '@/context/LanguageContext';'
<<<<<<< HEAD
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';'
import { WhitelabelProvider } from '@/context/WhitelabelContext';'
import { AppLayout } from '@/layout/AppLayout';'
// Import auth and notification providers;
import { AuthProvider } from './context/auth/AuthProvider';'
import { NotificationProvider } from './context/notifications/NotificationContext';'
=======
import { LanguageDetectionPopup } from "./components/LanguageDetectionPopup";"
import { WhitelabelProvider } from '@/context/WhitelabelContext';'
import { AppLayout } from '@/layout/AppLayout';'
// Import auth and notification providers;
import { AuthProvider } from "./context/auth/AuthProvider";"
import { NotificationProvider } from "./context/notifications/NotificationContext";"
>>>>>>> origin/resolved-merge-conflicts
// Import analytics provider;
import { AnalyticsProvider } from './context/AnalyticsContext';'
;
// Create a client;
const queryClient = new QueryClient({;
<<<<<<< HEAD
  'defaultOptions': '{;'
    'queries': {;'
      'staleTime': 1000 * 60 * 5', // 5 minutes;'
      'retry': '1',;'
=======
  "defaultOptions": "{;"
    "queries": {;"
      "staleTime": 1000 * 60 * 5", // 5 minutes;"
      "retry": "1",;"
>>>>>>> origin/resolved-merge-conflicts
    },;
  },;
});
;
// Check if we're in development mode;'
const isDevelopment = import.meta.env.DEV;
;
// Get the root element;
const container = document.getElementById('root');'
;
if (!container) {;
  }
  throw new Error('Root element not found');'
}
;
// Create root;
const root = createRoot(container);
;
// Render the app;
root.render(;
  <React.StrictMode>;
    <HelmetProvider>;
      <QueryClientProvider client={queryClient}>;
        <Router>;
          <LanguageProvider>;
            <WhitelabelProvider>;
              <AuthProvider>;
                <NotificationProvider>;
                  <AnalyticsProvider>;
                    <AppLayout>;
                      <App />;
                      <LanguageDetectionPopup />;
                    </AppLayout>;
                  </AnalyticsProvider>;
                </NotificationProvider>;
              </AuthProvider>;
            </WhitelabelProvider>;
          </LanguageProvider>;
        </Router>;
      </QueryClientProvider>;
    </HelmetProvider>;
  </React.StrictMode>;
);
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';'
import { AuthProvider } from './context/auth/AuthProvider';'
import { NotificationProvider } from './context/notifications/NotificationContext';'
import { ViewModeProvider } from './context/ViewModeContext';'
const queryClient = new QueryClient({
    }
<<<<<<< HEAD
    'defaultOptions': {';'
        }
        'queries': {';';'
            }
            'retry': 1, 'refetchOnWindowFocus': false}}
    );';';';'
''',';';'
    ';';';'
  'defaultOptions': {
    }
    'queries': {
      }
      'retry': 1,
      'refetchOnWindowFocus': false
=======
    "defaultOptions": {';'
        }
        "queries": {';';'
            }
            "retry": 1, "refetchOnWindowFocus": false}}}
    );';';';'
""',';';'
    ';';';'
  "defaultOptions": {
    }
    "queries": {
      }
      "retry": 1,
      "refetchOnWindowFocus": false
>>>>>>> origin/resolved-merge-conflicts
    }
  }
});
const rootElement = document.getElementById('root');'
const renderApp = (props) => {
  }
  const app = (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <WhitelabelProvider>
            <Router>
              <AuthProvider>
                <NotificationProvider>
                  <AnalyticsProvider>
<<<<<<< HEAD
                    <LanguageProvider authState={ 'isAuthenticated': false, 'user': null }>
=======
                    <LanguageProvider authState={{ "isAuthenticated": false, "user": null }}>
>>>>>>> origin/resolved-merge-conflicts
                      <ViewModeProvider>
                        <AppLayout>
                          <App />
                        </AppLayout>
                      </ViewModeProvider>
                      <LanguageDetectionPopup />
                    </LanguageProvider>
                  </AnalyticsProvider>
                </NotificationProvider>
              </AuthProvider>
            </Router>
          </WhitelabelProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
  if (rootElement?.hasChildNodes()) {
    }
    hydrateRoot(rootElement, app);
  } else if (rootElement) {
    }
    createRoot(rootElement).render(app);
  }
};
function displayFatalError() {
    }
    if (rootElement) {
        }
<<<<<<< HEAD
        rootElement.innerHTML = `'''            <div style='{`'padding': 20px;text-align}'</p>``            </div>`;}';'
=======
        rootElement.innerHTML = `"""            <div style="{{`"padding": 20px;text-align}}"</p>``            </div>`;}';'
>>>>>>> origin/resolved-merge-conflicts
}';';'
try {';';';'
    }
    renderApp();} catch (error) {``}',';';'    ';';';'
<<<<<<< HEAD
    console.error('Global error caught in main.'jsx': ', error);';';'
    displayFatalError(error.message);}';';';'
''',';';'
    ';';';'
window.addEventListener('error', (e) => {''',';';'
    ';';';'
    }
    console.error('Unhandled 'error': ', e.error || e.message);';';'
    displayFatalError(e.message);}
    );';';';'
'`''';';';';'
=======
    console.error('Global error caught in main."jsx": ', error);';';'
    displayFatalError(error.message);}';';';'
""',';';'
    ';';';'
window.addEventListener('error', (e) => {""',';';'
    ';';';'
    }
    console.error('Unhandled "error": ', e.error || e.message);';';'
    displayFatalError(e.message);}
    );';';';'
"`""';';';';'
>>>>>>> origin/resolved-merge-conflicts
</LanguageDetectionPopup>
</App>
</React>
function displayFatalError() {
  }
  if (rootElement) {
    }
<<<<<<< HEAD
    rootElement.innerHTML = ``      <div style=''padding': 20px; text-'align': center; 'color': red;'>'
=======
    rootElement.innerHTML = ``      <div style=""padding": 20px; text-"align": center; "color": red;">"
>>>>>>> origin/resolved-merge-conflicts
        <h2>Application Error</h2>
        <p>${errorMessage}</p>
      </div>
    `;`
  }
}
try {
  }
  renderApp();
} catch (error) {
  }
<<<<<<< HEAD
  console.error('Global error caught in main.'jsx': ', error);'
=======
  console.error('Global error caught in main."jsx": ', error);'
>>>>>>> origin/resolved-merge-conflicts
  displayFatalError(error.message);
}
window.addEventListener('error', (e) => {'
  }
<<<<<<< HEAD
  console.error('Unhandled 'error': ', e.error || e.message);'
=======
  console.error('Unhandled "error": ', e.error || e.message);'
>>>>>>> origin/resolved-merge-conflicts
  displayFatalError(e.message);
});