import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'guest';
}

interface AppState {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  
  // UI state
  theme: 'light' | 'dark' | 'system';
  sidebarOpen: boolean;
  loading: boolean;
  notifications: Notification[];
  
  // App data
  currentPage: string;
  lastVisited: string[];
  
  // Actions
  setUser: (user: User | null) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setSidebarOpen: (open: boolean) => void;
  setLoading: (loading: boolean) => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  setCurrentPage: (page: string) => void;
  addToLastVisited: (page: string) => void;
  clearNotifications: () => void;
  logout: () => void;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: number;
  read: boolean;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        user: null,
        isAuthenticated: false,
        theme: 'system',
        sidebarOpen: false,
        loading: false,
        notifications: [],
        currentPage: '/',
        lastVisited: [],

        // Actions
        setUser: (user) => set(
          { 
            user, 
            isAuthenticated: !!user 
          }, 
          false, 
          'setUser'
        ),

        setTheme: (theme) => set(
          { theme }, 
          false, 
          'setTheme'
        ),

        setSidebarOpen: (sidebarOpen) => set(
          { sidebarOpen }, 
          false, 
          'setSidebarOpen'
        ),

        setLoading: (loading) => set(
          { loading }, 
          false, 
          'setLoading'
        ),

        addNotification: (notification) => {
          const newNotification: Notification = {
            ...notification,
            id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            timestamp: Date.now(),
            read: false
          };
          
          set(
            (state) => ({
              notifications: [newNotification, ...state.notifications].slice(0, 50) // Keep only last 50
            }),
            false,
            'addNotification'
          );
        },

        removeNotification: (id) => set(
          (state) => ({
            notifications: state.notifications.filter(n => n.id !== id)
          }),
          false,
          'removeNotification'
        ),

        setCurrentPage: (currentPage) => set(
          { currentPage },
          false,
          'setCurrentPage'
        ),

        addToLastVisited: (page) => set(
          (state) => ({
            lastVisited: [page, ...state.lastVisited.filter(p => p !== page)].slice(0, 10) // Keep only last 10
          }),
          false,
          'addToLastVisited'
        ),

        clearNotifications: () => set(
          { notifications: [] },
          false,
          'clearNotifications'
        ),

        logout: () => set(
          {
            user: null,
            isAuthenticated: false,
            notifications: [],
            lastVisited: []
          },
          false,
          'logout'
        )
      }),
      {
        name: 'zion-app-store',
        partialize: (state) => ({
          user: state.user,
          isAuthenticated: state.isAuthenticated,
          theme: state.theme,
          lastVisited: state.lastVisited
        })
      }
    ),
    {
      name: 'zion-app-store'
    }
  )
);

// Selectors for better performance
export const useUser = () => useAppStore(state => state.user);
export const useIsAuthenticated = () => useAppStore(state => state.isAuthenticated);
export const useTheme = () => useAppStore(state => state.theme);
export const useSidebarOpen = () => useAppStore(state => state.sidebarOpen);
export const useLoading = () => useAppStore(state => state.loading);
export const useNotifications = () => useAppStore(state => state.notifications);
export const useCurrentPage = () => useAppStore(state => state.currentPage);
export const useLastVisited = () => useAppStore(state => state.lastVisited);