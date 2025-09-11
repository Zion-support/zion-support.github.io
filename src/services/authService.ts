export const loginUser = async (email: string, password: string) => {
  // Mock login service
  console.log('Login service called with:', email);
  // In a real app, this would make an API call to your backend
  return {
    user: { id: '1', email, name: 'User' },
    token: 'mock-token'
  };
};

export const registerUser = async (email: string, password: string, name?: string) => {
  // Mock register service
  console.log('Register service called with:', email, name);
  // In a real app, this would make an API call to your backend
  return {
    user: { id: '1', email, name: name || 'User' },
    token: 'mock-token'
  };
};