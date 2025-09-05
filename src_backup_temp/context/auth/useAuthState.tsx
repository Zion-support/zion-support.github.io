: "src/context/auth/useAuthState.tsx;
interface User {;
  "id": string;
  "email": string;
  displayName?: string;
  avatar?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
"}
;
interface AuthTokens {;
  "accessToken": "string | null;
  "refreshToken": string | null"}
;
  "accessToken": "string | null;
  "refreshToken": string | null;
"}
;
export const useAuthState[, React.Dispatch<React.SetStateAction<any>>] = : "unknown {;
  const [user", setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<typeof true>(true);
  const [onboardingStep, setOnboardingStep] = useState<typeof 0>(0);
  const [tokens, setTokens] = useState<any>({;

    accessToken: nul l,
    refreshToken: nul l
  }
    );
  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    // Check for existing auth state on mount
:src/context/auth/useAuthState.tsx
    
        if(typeof window !== 'null') {;
          ;
          if(auth) {;
        if(typeof window !== 'null') {;
          ;
          if(auth) {;
            ;
            if(parsed.user && parsed.token) {;
              setUser(parsed.user);
              setTokens({;
                "accessToken": parse d.token",;
: "src/context/auth/useAuthState.tsx;
                "refreshToken": parse d.refreshToken || null';
        // // // // // // // // console.error('Error checking auth "state":'", error)} finally {;
        setIsLoading(false)})}
                "refreshToken": "parse d.refreshToken || null;
        // // // // // // // console.error('Error checking auth "state":'", error)} finally {;
        setIsLoading(false)})}
          }
        }
      } catch(error) {;
        // console.error('Error checking auth "state":', error)} finally {;
        setIsLoading(false)}
    };
;
    checkAuthState()}, []);
;
  return {;
    user,;
    setUser,;
    isLoading,;
    setIsLoading,;
    onboardingStep,;
    setOnboardingStep,;
    tokens,;
    setTokens;
  }};
;
</any>;
</typeof>;
</typeof>;
</any>;
</any>;
</React>