<<<<<<< HEAD
"use client",

import { createContext, useContext, useEffect, useState } from "react",
import { useSession, signIn, signOut } from "next-auth/react",
import { useRouter } from "next/navigation",
interface User {
  id: string,
  name?: string,
  email: string,
  role: string,
  onboardingCompleted: boolean
}

interface AuthContextType {
  user: User | null,
  isLoading: boolean,
  isAuthenticated: boolean,
  login: (email: string, password: string) => Promise<void>,
  logout: () => Promise<void>,
  register: (name: string, email: string, password: string) => Promise<void>,
  completeOnboarding: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined),

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession(),
  const [user, setUser] = useState<User | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const router = useRouter(),

  useEffect(() => {
    if (status === "loading") {
      setIsLoading(true),
      return
    }

    if (session?.user) {
      setUser({
        id: session.user.id,
        name: session.user.name || undefined,
        email: session.user.email!,
        role: session.user.role || "user",
        onboardingCompleted: false, // This would come from the database
      })
    } else {
      setUser(null)
    }
=======
"use client";


interface User {_id: string;
  name?: string;
  email: string;
  role: string;
  onboardingCompleted: boolean;}

interface AuthContextType {_user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (_email: string, _password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (_name: string, _email: string, _password: string) => Promise<void>;
  completeOnboarding: () => Promise<void>;}

const _AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider(_{_children}: {_children: React.ReactNode}) {_const { data: session, _status} = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const _router = useRouter();

  useEffect__(() => {_if (status === "loading") {
      setIsLoading(true);
      return;}

    if (session?.user) {_setUser({
        id: session.user.id, _name: session.user.name || undefined, _email: session.user.email!, _role: session.user.role || "user", _onboardingCompleted: false, _// This would come from the database});
    } else {_setUser(null);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setIsLoading(false)
  }, [session, status]),

<<<<<<< HEAD
  const login = async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false}),

      if (result?.error) {
        throw new Error(result.error)
      }

      router.push("/dashboard")
    } catch (error) {
      throw error
    }
  },

  const logout = async () => {
    await signOut({ redirect: false }),
    router.push("/")
  },
=======
  const _login = async (_email: string, _password: string) => {_try {
      const _result = await signIn("credentials", _{
        email, _password, _redirect: false});

      if (result?.error) {_throw new Error(result.error);}

      router.push("/dashboard");
    } catch (error) {_throw error;}
  };

  const _logout = async () => {_await signOut({ redirect: false});
    router.push("/");
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _register = async (_name: string, _email: string, _password: string) => {_try {
      const _response = await fetch("/api/auth/register", _{
        method: "POST", _headers: {
          "Content-Type": "application/json"},
<<<<<<< HEAD
        body: JSON.stringify({ name, email, password })}),

      if (!response.ok) {
        const error = await response.json(),
        throw new Error(error.message)
      }

      // Auto-login after successful registration
      await login(email, password)
    } catch (error) {
      throw error
    }
  },

  const completeOnboarding = async () => {
    try {
      const response = await fetch("/api/user/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"}}),

      if (!response.ok) {
        throw new Error("Failed to complete onboarding")
      }

      if (user) {
        setUser({ ...user, onboardingCompleted: true })
      }
    } catch (error) {
      throw error
    }
  },

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    completeOnboarding},

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext),
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
=======
        body: JSON.stringify({_name, _email, _password})});

      if (!response.ok) {_const _error = await response.json();
        throw new Error(error.message);}

      // Auto-login after successful registration
      await login(email, password);
    } catch (error) {_throw error;}
  };

  const _completeOnboarding = async () => {_try {
      const _response = await fetch("/api/user/onboarding", _{
        method: "POST", _headers: {
          "Content-Type": "application/json"}});

      if (!response.ok) {_throw new Error("Failed to complete onboarding");}

      if (user) {_setUser({ ...user, _onboardingCompleted: true});
      }
    } catch (error) {_throw error;}
  };

  const value: AuthContextType = {_user, _isLoading, _isAuthenticated: !!user, _login, _logout, _register, _completeOnboarding};

  return <AuthContext.Provider value={_value}>{_children}</AuthContext.Provider>;
}

export function useAuth() {_const _context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");}
  return context;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}