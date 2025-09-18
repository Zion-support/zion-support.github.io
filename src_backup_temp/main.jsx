import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from "./App.tsx";
const React from "react";","; ";";";";"; import {createRoot,hydrateRoot} from "react-dom/client";";";";";"; import App from "./App.tsx";","; ";";";";"; import "./index.css";","; ";";";";"; import {HelmetProvider} from "react-helmet-async";","; ";";";";"; import {BrowserRouter as Router} from "react-router-dom";","; ";";";";"; import {QueryClient,QueryClientProvider} from "@tanstack/react-query";","; ";";";";"; import "./utils/globalFetchInterceptor";","; ";";";";"; import "./utils/consoleErrorToast";";"; ";";";";"; import "./i18n";","; ";";";";"; import {LanguageProvider} from "@/context/LanguageContext";";";";";"; import {LanguageDetectionPopup} from "./components/LanguageDetectionPopup";","; ";";";";"; import {WhitelabelProvider} from "@/context/WhitelabelContext";","; ";";";"; ";"; import {AppLayout} from "@/layout/AppLayout"; import {AuthProvider} from "./context/auth/AuthProvider";";";";"; import {NotificationProvider} from "./context/notifications/NotificationContext"; ";";";";"; import {AnalyticsProvider} from "./context/AnalyticsContext";","; ";";";";"; import React from "react"; import {createRoot,hydrateRoot} from "react-dom/client;"; import App from "./App.tsx",;"; ";";";";"; import "./index.css";";"; import {HelmetProvider} from "react-helmet-async",;"; ";";";";"; import {BrowserRouter as Router} from "react-router-dom"; import {QueryClient,QueryClientProvider} from "@tanstack/react-query;","; ";";";";"; import "./utils/globalFetchInterceptor;";";"; import "./utils/consoleErrorToast",;"; ";";";";"; import "./i18n",;"; ";";";";"; import {LanguageProvider} from "@/context/LanguageContext;"; import {LanguageDetectionPopup} from "./components/LanguageDetectionPopup;","; ";";";";"; import {WhitelabelProvider} from "@/context/WhitelabelContext;"; import {AppLayout} from "@/layout/AppLayout"; import {AuthProvider} from "./context/auth/AuthProvider;"; import {NotificationProvider} from "./context/notifications/NotificationContext"; ";";";";"; import {AnalyticsProvider} from "./context/AnalyticsContext;"; import {ViewModeProvider} from "./context/ViewModeContext"; ";"; import { AppLayout } from "@/layout/AppLayout"; import { AuthProvider } from "./src/context/auth/AuthProvider.jsx"; import { NotificationProvider } from "./context/notifications/NotificationContext"; import { AnalyticsProvider } from "./context/AnalyticsContext import { ViewModeProvider } from "./context/ViewModeContext"; import _React from 'react';",'; ';';';';'; import {createRoot,hydrateRoot} from 'react-dom/client';";';';';'; import App from "./App.tsx";",'; ';';';';'; import './index.css';",'; ';';';';'; import {HelmetProvider} from 'react-helmet-async';",'; ';';';';'; import {BrowserRouter as Router} from 'react-router-dom';",'; ';';';';'; import {QueryClient,QueryClientProvider} from '@tanstack/react-query';",'; ';';';';'; import './utils/globalFetchInterceptor';",'; ';';';';'; import './utils/consoleErrorToast';';'; ';';';';'; import './i18n';",'; ';';';';'; import {LanguageProvider} from '@/context/LanguageContext';";';';';'; import {LanguageDetectionPopup} from "./components/LanguageDetectionPopup";",'; ';';';';'; import {WhitelabelProvider} from '@/context/WhitelabelContext';",'; ';';';'; 
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './utils/globalFetchInterceptor';
import './utils/consoleErrorToast';
// Import i18n configuration;
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from "./components/LanguageDetectionPopup";
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
// Import auth and notification providers;
import { AuthProvider } from "./context/auth/AuthProvider";
import { NotificationProvider } from "./context/notifications/NotificationContext";
// Import analytics provider;
import { AnalyticsProvider } from './context/AnalyticsContext';
;
// Create a client;
const queryClient = new QueryClient({;
  "defaultOptions": "{;
    "queries": {;
      "staleTime": 1000 * 60 * 5", // 5 minutes;
      "retry": "1",;
    },;
  },;
});
;
// Check if we're in development mode;
const isDevelopment = import.meta.env.DEV;
;
// Get the root element;
const container = document.getElementById('root');
;
if (!container) {;
  throw new Error('Root element not found');
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
import './i18n';
import { LanguageProvider } from '@/context/LanguageContext';
import { LanguageDetectionPopup } from './components/LanguageDetectionPopup';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { AppLayout } from '@/layout/AppLayout';
import { AuthProvider } from './context/auth/AuthProvider';
import { NotificationProvider } from './context/notifications/NotificationContext';
import { AnalyticsProvider } from './context/AnalyticsContext';
import { ViewModeProvider } from './context/ViewModeContext';
const queryClient = new QueryClient({
    defaultOptions: {';
        queries: {';';
            retry: 1, refetchOnWindowFocus: false}}}
    );';';';
""',';';
    ';';';
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});
const rootElement = document.getElementById('root');
const renderApp = (props) => {
  const app = (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <WhitelabelProvider>
            <Router>
              <AuthProvider>
                <NotificationProvider>
                  <AnalyticsProvider>
                    <LanguageProvider authState={{ isAuthenticated: false, user: null }}>
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
    hydrateRoot(rootElement, app);
  } else if (rootElement) {
    createRoot(rootElement).render(app);
  }
};
function displayFatalError(props: any) {
    if (rootElement) {
        rootElement.innerHTML = `""
            <div style="{{`padding: 20px;text-align}}"</p>`
            </div>`;}';
}';';
try {';';';
    renderApp();} catch (error) {``}',';';
    ';';';
    console.error('Global error caught in main.jsx: ', error);';';
    displayFatalError(error.message);}';';';
""',';';
    ';';';
window.addEventListener('error', (e) => {""',';';
    ';';';
    console.error('Unhandled error: ', e.error || e.message);';';
    displayFatalError(e.message);}
    );';';';
"`""';';';';
</LanguageDetectionPopup>
</App>
</React>
function displayFatalError(errorMessage) {
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; color: red;">
        <h2>Application Error</h2>
        <p>${errorMessage}</p>
      </div>
    `;
  }
}
try {
  renderApp();
} catch (error) {
  console.error('Global error caught in main.jsx: ', error);
  displayFatalError(error.message);
}
window.addEventListener('error', (e) => {
  console.error('Unhandled error: ', e.error || e.message);
  displayFatalError(e.message);
});
