"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type AuthUser = { id: string; email: string } | null;

type AuthContextValue = {
	user: AuthUser;
	signIn: (email: string, _password: string) => Promise<void>;
	signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }): React.ReactElement {
	const [user, setUser] = useState<AuthUser>(null);

	const signIn = async (email: string): Promise<void> => {
		setUser({ id: "demo-user", email });
	};

	const signOut = async (): Promise<void> => {
		setUser(null);
	};

	const value = useMemo<AuthContextValue>(() => ({ user, signIn, signOut }), [user]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
	const ctx = useContext(AuthContext);
	if (!ctx) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return ctx;
}
























































































