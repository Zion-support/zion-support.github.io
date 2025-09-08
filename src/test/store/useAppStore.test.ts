import { describe, it, expect, beforeEach } from 'vitest';
import { useAppStore } from '../../store/useAppStore';

describe('useAppStore', () => {
  beforeEach(() => {
    // Reset store state before each test
    useAppStore.setState({
      user: null,
      isAuthenticated: false,
      theme: 'system',
      sidebarOpen: false,
      loading: false,
      notifications: [],
      currentPage: '/',
      lastVisited: []
    });
  });

  it('should have initial state', () => {
    const state = useAppStore.getState();
    expect(state.user).toBeNull();
    expect(state.isAuthenticated).toBe(false);
    expect(state.theme).toBe('system');
    expect(state.sidebarOpen).toBe(false);
    expect(state.loading).toBe(false);
    expect(state.notifications).toEqual([]);
    expect(state.currentPage).toBe('/');
    expect(state.lastVisited).toEqual([]);
  });

  it('should set user and authentication status', () => {
    const user = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user' as const
    };

    useAppStore.getState().setUser(user);
    const state = useAppStore.getState();

    expect(state.user).toEqual(user);
    expect(state.isAuthenticated).toBe(true);
  });

  it('should clear user on logout', () => {
    const user = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user' as const
    };

    useAppStore.getState().setUser(user);
    useAppStore.getState().logout();
    const state = useAppStore.getState();

    expect(state.user).toBeNull();
    expect(state.isAuthenticated).toBe(false);
    expect(state.notifications).toEqual([]);
    expect(state.lastVisited).toEqual([]);
  });

  it('should add and remove notifications', () => {
    const { addNotification, removeNotification } = useAppStore.getState();

    addNotification({
      type: 'success',
      title: 'Success',
      message: 'Operation completed'
    });

    let state = useAppStore.getState();
    expect(state.notifications).toHaveLength(1);
    expect(state.notifications[0].title).toBe('Success');

    const notificationId = state.notifications[0].id;
    removeNotification(notificationId);

    state = useAppStore.getState();
    expect(state.notifications).toHaveLength(0);
  });

  it('should limit notifications to 50', () => {
    const { addNotification } = useAppStore.getState();

    // Add 55 notifications
    for (let i = 0; i < 55; i++) {
      addNotification({
        type: 'info',
        title: `Notification ${i}`,
        message: `Message ${i}`
      });
    }

    const state = useAppStore.getState();
    expect(state.notifications).toHaveLength(50);
    // Should keep the most recent ones
    expect(state.notifications[0].title).toBe('Notification 54');
  });

  it('should update theme', () => {
    const { setTheme } = useAppStore.getState();

    setTheme('dark');
    expect(useAppStore.getState().theme).toBe('dark');

    setTheme('light');
    expect(useAppStore.getState().theme).toBe('light');
  });

  it('should toggle sidebar', () => {
    const { setSidebarOpen } = useAppStore.getState();

    setSidebarOpen(true);
    expect(useAppStore.getState().sidebarOpen).toBe(true);

    setSidebarOpen(false);
    expect(useAppStore.getState().sidebarOpen).toBe(false);
  });

  it('should set loading state', () => {
    const { setLoading } = useAppStore.getState();

    setLoading(true);
    expect(useAppStore.getState().loading).toBe(true);

    setLoading(false);
    expect(useAppStore.getState().loading).toBe(false);
  });

  it('should update current page', () => {
    const { setCurrentPage } = useAppStore.getState();

    setCurrentPage('/about');
    expect(useAppStore.getState().currentPage).toBe('/about');
  });

  it('should add to last visited and limit to 10', () => {
    const { addToLastVisited } = useAppStore.getState();

    // Add 12 pages
    for (let i = 0; i < 12; i++) {
      addToLastVisited(`/page${i}`);
    }

    const state = useAppStore.getState();
    expect(state.lastVisited).toHaveLength(10);
    // Should keep the most recent ones
    expect(state.lastVisited[0]).toBe('/page11');
    expect(state.lastVisited[9]).toBe('/page2');
  });

  it('should not add duplicate pages to last visited', () => {
    const { addToLastVisited } = useAppStore.getState();

    addToLastVisited('/about');
    addToLastVisited('/contact');
    addToLastVisited('/about'); // Duplicate

    const state = useAppStore.getState();
    expect(state.lastVisited).toEqual(['/about', '/contact']);
  });

  it('should clear notifications', () => {
    const { addNotification, clearNotifications } = useAppStore.getState();

    addNotification({
      type: 'info',
      title: 'Test',
      message: 'Test message'
    });

    expect(useAppStore.getState().notifications).toHaveLength(1);

    clearNotifications();
    expect(useAppStore.getState().notifications).toHaveLength(0);
  });
});