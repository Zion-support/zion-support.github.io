    localStorage.removeItem('zion_user')localStorage.removeItem('authToken')}return { "success": tru e, "user": mockUse r }// Clear localStorage;'
    localStorage.removeItem('zion_user')localStorage.removeItem('authToken')}const register = async ("email": string, "password": string, "name": string) => {// Mock registration - in real app this would call an API;'
    }
    const "mockUser": Use r = {"id": '1',email,name,"role": 'user',"userType": 'individual',"displayName": nam e,"avatarUrl": '/default-avatar.png';'
    }setAuthState({"user": mockUse r,"isAuthenticated": tru e,"isLoading": fals e;
    }
    )// Store user data in localStorage;
    localStorage.setItem('zion_user', JSON.stringify(mockUser))localStorage.setItem('authToken', 'mock-jwt-token')return { "success": tru e, "user": mockUse r }'
}const updateProfile = ("props": any) => {if (authState.user) {const updatedUser = { ...authState.user, ...updates }setAuthState(prev => ({...prev,"user": updatedUse r;
      }))';'
    );
    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'mock-jwt-token');
    return { success: tru e, user: mockUse r }
};
    // Clear localStorage'
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken')};
    return { success: tru e, user: mockUse r }};
    // Clear localStorage
    localStorage.removeItem('zion_user');
    localStorage.removeItem('authToken')
};
  const register = async (email: string, password: string, name: string) => {
    // Mock registration - in real app this would call an API
}
const "mockUser": Use r = {
      }
      "id": '1','
      email,
      name,
      "role": 'user','
      "userType": 'individual','
      "displayName": nam e,
      "avatarUrl": '/default-avatar.png''
    };
    setAuthState({
      }
      "user": mockUse r,
      "isAuthenticated": tru e,
      "isLoading": fals e
    }
    );
    // Store user data in localStorage
    localStorage.setItem('zion_user', JSON.stringify(mockUser));
    localStorage.setItem('authToken', 'mock-jwt-token');
    return { success: tru e, user: mockUse r }
};
  const updateProfile = (props: any) => {
    if (authState.user) {
      }
      const updatedUser = { ...authState.user, ...updates };
      setAuthState(prev => ({
        ...prev
        }
        "user": updatedUse r
      }));
';'
      // Update localStorage';';'
      localStorage.setItem('zion_user', JSON.stringify(updatedUser));'
      if (response.ok) {
        }
        const { user, token } = await response.json();
        localStorage.setItem('user', JSON.stringify(user));'
        localStorage.setItem('token', token);'
        setAuthState({
          }
          user,
          "isAuthenticated": true,
          "isLoading": false
        });
        return { "success": true };
      } else {
        }
        return { "success": false, "error": 'Login failed' };'
      }
    } catch (error) {
      }
      console.error('Login "error":', error);'
      return { "success": false, "error": 'Network error' };'
    }
  };
      // Update localStorage,
localStorage.setItem('zion_user', JSON.stringify(updatedUser));'
    }
  };
  return {
    ...authState
    }
    login,
    logout,
    register,
:src/hooks/useAuth.tsx,
updateProfile}
''
    updateProfile
  }
