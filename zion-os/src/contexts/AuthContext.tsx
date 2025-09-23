








  const login = async (email: string, password: string) => {
  };


  const register = async (name: string, email: string, password: string) => {
    }
    await login(email, password);
  };

  const completeOnboarding = async () => {
  };



export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
