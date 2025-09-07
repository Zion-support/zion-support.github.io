interface User {
  id: string;
  role: 'client' | 'talent' | 'admin';
  email: string;
  name: string;
}

export function validateUser(userId: string, role: string): User | null {
  if (!userId || !role) return null;
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null;
  
  return {
    id: userId,
    role: role as 'client' | 'talent' | 'admin',
    email: '',
    name: ''
  };
}