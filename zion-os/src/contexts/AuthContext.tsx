"use client&quot;;

import { createContext, useContext, useEffect, useState } from &quot;react&quot;;
import { useSession, signIn, signOut } from &quot;next-auth/react&quot;;
import { useRouter } from &quot;next/navigation&quot;;

interface User {
  id: string;
  name?: string;
  email: string;
  role: string;
  onboardingCompleted: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  completeOnboarding: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (status === &quot;loading&quot;) {
      setIsLoading(true);
      return;
    }

    if (session?.user) {
      setUser({
        id: session.user.id,
        name: session.user.name || undefined,
        email: session.user.email!,
        role: session.user.role || &quot;user&quot;,
        onboardingCompleted: false, // This would come from the database
      });
    } else {
      setUser(null);
    }

    setIsLoading(false);
  }, [session, status]);

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn(&quot;credentials&quot;, {
        email,
        password,
        redirect: false});

      if (result?.error) {
        throw new Error(result.error);
      }

      router.push(&quot;/dashboard&quot;);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    await signOut({ redirect: false });
    router.push(&quot;/&quot;);
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await fetch(&quot;/api/auth/register&quot;, {
        method: &quot;POST&quot;,
        headers: {
          &quot;Content-Type&quot;: &quot;application/json&quot;},
        body: JSON.stringify({ name, email, password })});

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      // Auto-login after successful registration
      await login(email, password);
    } catch (error) {
      throw error;
    }
  };

  const completeOnboarding = async () => {
    try {
      const response = await fetch(&quot;/api/user/onboarding&quot;, {
        method: &quot;POST&quot;,
        headers: {
          &quot;Content-Type&quot;: &quot;application/json&quot;}});

      if (!response.ok) {
        throw new Error(&quot;Failed to complete onboarding&quot;);
      }

      if (user) {
        setUser({ ...user, onboardingCompleted: true });
      }
    } catch (error) {
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    completeOnboarding};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(&quot;useAuth must be used within an AuthProvider");
  }
  return context;
}