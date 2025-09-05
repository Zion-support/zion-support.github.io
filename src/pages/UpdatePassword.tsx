
import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { z } from "zod",
import { LockKeyhole } from 'lucide-react'

import { supabase } from "@/integrations/supabase/client",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { toast } from "@/hooks/use-toast",
import { cleanupAuthState } from "@/utils/authUtils",
import { logErrorToProduction } from '@/utils/productionLogger',
// Form validation schema,
const updatePasswordSchema = z
  .object({password: z
      .string()
      .min(8, &quot;Password must be at least 8 characters&quot;)
      .max(64, &quot;Password must be less than 64 characters&quot;),
    confirmPassword: z.string()})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]}),      .min(8, _"Password must be at least 8 characters")
      .max(64, _"Password must be less than 64 characters"), confirmPassword: z.string()})
  .refine(_(data) => data.password === data.confirmPassword, {message: "Passwords do not match", path: ["confirmPassword"]});

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>,

export default function UpdatePassword() {
  const [isLoading, setIsLoading] = useState(false),
  const [accessToken, setAccessToken] = useState<string | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [success, setSuccess] = useState(false),
  const router = useRouter(),

  // Initialize react-hook-form,
const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: ""}}),

  useEffect(() => {
    // Extract access token from URL hash on the client,
const hash = typeof window !== 'undefined' ? window.location.hash : "",
    const hashParams = new URLSearchParams(hash.substring(1)),
    const token = hashParams.get("accesstoken"),    
    if (token) {
      setAccessToken(token)
    } else {
      setError("No access token found. Please request a new password reset link.")    }
export default function UpdatePassword() {const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // Initialize react-hook-form,
const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema), defaultValues: {
      password: "", confirmPassword: ""}});

  useEffect_(() => {_// Extract access token from window.URL hash on the client,
const hash = typeof window !== 'undefined' ? window.location.hash : "";
    const hashParams = new URLSearchParams(hash.substring(1));
    const token = hashParams.get("accesstoken");
    
    if (token) {
      setAccessToken(token)} else {setError("No access token found. Please request a new password reset link.")}

    // Clean up auth state to prevent issues,
cleanupAuthState()
  }, []),

  // Form submission handler,
const onSubmit = async (data: UpdatePasswordFormValues) => {
    if (!accessToken) {
      setError("No access token found. Please request a new password reset link."),
      return    }

    setIsLoading(true),
    try {
      // Set the session with the access token,
await supabase.auth.setSession({
        accesstoken: accessToken,
        refreshtoken: ''}),

      // Update the password,
const { error } = await supabase.auth.updateUser({
        password: data.password}),

      if (error) {
        toast({
          title: &quot;Password update failed&quot;,
          description: error.message,
          variant: "destructive"}),
        setError(error.message),
        return        setError(error.message);
        return
      }

      // Show success message and clean up auth state,
setSuccess(true),
      toast({
        title: "Password updated successfully",
        description: "You can now log in with your new password."}),
      // Clean auth state and redirect after a delay,
cleanupAuthState(),
      setTimeout(() => {
        router.push("/login")
      }, 3000)    } catch (error: any) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Password update error' }),
      toast({
        title: "Password update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      setError(error.message || "An unexpected error occurred")    } finally {
      setIsLoading(false)
    }
  },

  const onInvalid = (errors: any) => {
    const firstError = Object.keys(errors)[0] as keyof UpdatePasswordFormValues,
    if (firstError) {
      form.setFocus(firstError)
    }
  },
      setSuccess(true);
      toast({title: "Password updated successfully", description: "You can now log in with your new password."});

      // Clean auth state and redirect after a delay,
cleanupAuthState();
      setTimeout_(() => {router.push("/login")}, 3000)
    } catch (error: unknown) {logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, _{ message: 'Password update error'});
      toast({title: "Password update failed", description: error.message || "An unexpected error occurred", variant: "destructive"});
      setError(error.message || "An unexpected error occurred")
    } finally {setIsLoading(false)}
  };

  const onInvalid = (errors: unknown) => {const firstError = Object.keys(errors)[0] as keyof UpdatePasswordFormValues;
    if (firstError) {
      form.setFocus(firstError)}
  };

  return (_<>
      <div className="flex min-h-screen bg-zion-blue">
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Update your password
              </h2>
              <p className="mt-2 text-sm text-zion-slate-light">
                Enter your new password below.
              </p>
            </div>

            <div className="bg-zion-blue-dark rounded-lg p-6">
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-md text-white">
                  <p className="text-sm">{error}</p>
                  <Button,
className="mt-3 text-xs&quot;
                    variant=&quot;outline"
                    onClick={() => router.push('/forgot-password')}                  >
                    Request new reset link
                  </Button>
                </div>
              )}

              {success ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">
                    <LockKeyhole className="h-6 w-6 text-zion-purple" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Password updated</h3>
                  <p className="mt-2 text-sm text-zion-slate-light">
                    Your password has been successfully updated.
                  </p>
                  <p className="mt-2 text-sm text-zion-slate-light">
                    Redirecting you to login...
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6&quot;>
                    <FormField,
control={form.control}
                      name="password"
                      render={({ field }: { field: ControllerRenderProps<UpdatePasswordFormValues "password"> }) => (                  <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6">
                    <FormField,
control={form.control}
                      name="password"
                      render={_(_{ field}: {field: ControllerRenderProps<UpdatePasswordFormValues, _"password">}) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light&quot;>New Password</FormLabel>
                          <FormControl>
                            <Input,
type=&quot;password&quot;
                              placeholder=&quot;Enter password&quot;
                              aria-label=&quot;New password"
                              aria-invalid={!!form.formState.errors.password}                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              disabled={isLoading}
                              {_...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400&quot; />
                        </FormItem>
                      )}
                    />

                    <FormField,
control={form.control}
                      name="confirmPassword"
                      render={({ field }: { field: ControllerRenderProps<UpdatePasswordFormValues "password"> }) => (                      control={form.control}
                      name="confirmPassword"
                      render={_(_{ field}: {field: ControllerRenderProps<UpdatePasswordFormValues, _"password">}) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light&quot;>Confirm Password</FormLabel>
                          <FormControl>
                            <Input,
type=&quot;password&quot;
                              placeholder=&quot;Enter password&quot;
                              aria-label=&quot;Confirm password"
                              aria-invalid={!!form.formState.errors.confirmPassword}                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              disabled={isLoading}
                              {_...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400&quot; />
                        </FormItem>
                      )}
                    />

                    <Button,
type=&quot;submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                      disabled={isLoading || !accessToken}
                    >
                      {isLoading ? &quot;Updating...&quot; : &quot;Update Password"}                    </Button>

                    <div className="text-center&quot;>
                      <Button,
variant=&quot;link"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light p-0&quot;
                        onClick={() => router.push(&quot;/login&quot;)}
                        type=&quot;button"                      >
                        Back to login
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg: block relative w-0 flex-1">
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">
            <div className="flex flex-col justify-center items-center h-full px-8">
              <div className="max-w-md text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Password Recovery</h3>
                <p className="text-lg text-white/80">
                  Set a strong password to secure your account and continue your journey in the Zion marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
