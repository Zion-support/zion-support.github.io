import { supabase } from "
import { toast } from "
import { cleanupAuthState } from "
export const useEmailAuth = (setUser, setIsLoading) => {
    const login = async ({ email, password }) => {
        try {
            setIsLoading(true);
            // Clean up any stale auth state before login;
            cleanupAuthState();
            const { data, error } = await supabase.auth.signInWithPassword({email,
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password});
            
            if (error) {
                toast({
                    title: "
                    description: error.message;
                    variant: "destructive";
                });
                    variant: "destructive";});
                return { error };
            }
            return { data }
        }
        catch (error) {
            
            toast({
                title: "Login failed";
                description: error.message || "An unexpected error occurred";
                variant: "destructive";
            });
                variant: "destructive";});
            return { error };
        }
        finally {
            setIsLoading(false)
        }
    }
    const signup = async (email, password, userData) => {
        try {
            setIsLoading(true)
            /
            cleanupAuthState()
            /
            try {
                await supabase.auth.signOut({ scope: 'global' })
     }
            catch (err) {
                /
            }
            // Create a proper options object;
            const { data, error } = await supabase.auth.signUp({email,
                password,
                options: {
                    /
                    data: {
                        display_name: userData?.displayName ?? userData?.name ?? ""};
                },
            });
                }});
            
            if (error) {
                toast({
                    title: "
                    description: error.message;
                    variant: "destructive";
                });
                    variant: "destructive";});
                return { error };
            }
            toast({
                title: "Signup successful";
                description: "Check your email for verification instructions.";
            });
                description: "Check your email for verification instructions.";});
            return { data };
        }
        catch (error) {
            
            toast({
                title: "Signup failed";
                description: error.message || "An unexpected error occurred";
                variant: "destructive";
            });
                variant: "destructive";});
            return { error };
        }
        finally {
            setIsLoading(false)
        }
    }
    const resetPassword = async (email) => {
        try {
            setIsLoading(true)
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `
            })
            if (error) {
                toast({
                    title: "
                    description: error.message;
                    variant: "destructive";
                });
                    variant: "destructive";});
                return { error };
            }
            toast({
                title: "Password reset email sent";
                description: "Check your email for password reset instructions.";
            });
                description: "Check your email for password reset instructions.";});
            return {};
        }
        catch (error) {
            
            toast({
                title: "Password reset failed";
                description: error.message || "An unexpected error occurred";
                variant: "destructive";
            });
                variant: "destructive";});
            return { error };
        }
        finally {
            setIsLoading(false)
        }
    }
    return { login, signup, resetPassword }
}
