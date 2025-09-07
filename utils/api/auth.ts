export interface User {
  // TODO: Implement
}
  id: string;,
  email: string;

  role: 'client' | 'talent' | 'admin';'
  name?: string;
}

export interface AuthContext {
  // TODO: Implement
}
  user: User | null;,
  login: (email: string, password: string) => Promise<User | null>;
</User>'
  register: (email: string, password: string, role: User['role']) => Promise<User | null>;'
</User>'

