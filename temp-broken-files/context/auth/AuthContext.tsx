import React from "react;";

export interface User {;
<<<<<<< HEAD
id: string; email: string;
=======
id: string, email: string;
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
displayName?: string;
avatar?: string;
role?: string;
isEmailVerified?: boolean;
}
createdAt?: string;}
updatedAt?: string};
export interface AuthTokens {;}
<<<<<<< HEAD
createdAt?: string;
updatedAt?: string};
export interface AuthTokens {;
accessToken: string | null; refreshToken: string | null};
export interface AuthContextType {;
user: User | null; setUser: (user: User | null) => void;,
isLoading: boolean; setIsLoading: (loading: boolean) => void;,
onboardingStep: number; setOnboardingStep: (step: number) => void;
}
}
onboardingStep: number; setOnboardingStep: (step: number) => void;,
tokens: AuthTokens; setTokens: (tokens: AuthTokens) => void};
=======
accessToken: string | null, refreshToken: string | null};
export interface AuthContextType {;
user: User | null, setUser: (user: User | null) => void;,
isLoading: boolean, setIsLoading: (loading: boolean) => void;,
onboardingStep: number, setOnboardingStep: (step: number) => void;
}
}
tokens: AuthTokens, setTokens: (tokens: AuthTokens) => void};
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
export const AuthContext = React.createContext<AuthContextType | undefined>(undefined);</AuthContextType | undefined><//AuthContextType | undefined>