export async function register(params: any) {
  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    
      throw new Error('Registration failed');
    }
    
    return await res.json();
  } catch (error) {
    console.error('Error in register:', error);
    throw error;
  }
}

export async function login(params: any) {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    
      throw new Error('Login failed');
    }
    
    return await res.json();
  } catch (error) {
    console.error('Error in login:', error);
    throw error;
  }
}

export async function logout() {
  try {
    const res = await fetch('/api/auth/logout', {
      method: 'POST'
    });
    
      throw new Error('Logout failed');
    }
    
    return await res.json();
  } catch (error) {
    console.error('Error in logout:', error);
    throw error;
  }
}