export const cleanupAuthState: any = (): void => {}
  try {}
    if (typeof window !== 'undefined' && window.sessionStorage) {}
      sessionStorage.removeItem('auth');
    }
  } catch (error) {}
    console.error('Error cleaning up auth state:', error);
  }
};

export const isAuthenticated: any = (): boolean => {}
  try {}
    if (typeof window !== 'undefined' && window.sessionStorage) {}
      const auth: any = sessionStorage.getItem('auth');
      return !!auth;
    }
    return false;
  } catch (error) {}
    console.error('Error checking authentication status:', error);
    return false;
  }
};

export const getAuthToken: any = (): string | null => {}
  try {}
    if (typeof window !== 'undefined' && window.sessionStorage) {}
      const auth: any = sessionStorage.getItem('auth');
      if (auth) {}
        const parsed: any = JSON.parse(auth);
        return parsed.token || null;
      }
    }
    return null;
  } catch (error) {}
    console.error('Error getting auth token:', error);
    return null;
  }
};

export const getUserData: any = (): any | null => {}
  try {}
    if (typeof window !== 'undefined' && window.sessionStorage) {}
      const auth: any = sessionStorage.getItem('auth');
      if (auth) {}
        const parsed: any = JSON.parse(auth);
        return parsed.user || null;
      }
    }
    return null;
  } catch (error) {}
    console.error('Error getting user data:', error);
    return null;
  }
};