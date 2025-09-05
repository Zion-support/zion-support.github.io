
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm, ControllerRenderProps } from "react-hook-form",
import { z } from "zod",
import { LockKeyhole } from 'lucide-react'

import { supabase } from "@/integrations/supabase/client",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
=======
import { useState, useEffect } from &quot;react&quot;;
import { useRouter } from 'next/router';
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { useForm, ControllerRenderProps } from &quot;react-hook-form&quot;;
import { z } from &quot;zod&quot;;
import { LockKeyhole } from 'lucide-react'

import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
<<<<<<< HEAD
  FormMessage} from "@/components/ui/form",
import { toast } from "@/hooks/use-toast",
import { cleanupAuthState } from "@/utils/authUtils",
import { logErrorToProduction } from '@/utils/productionLogger',
=======
  FormMessage} from &quot;@/components/ui/form&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { cleanupAuthState } from &quot;@/utils/authUtils&quot;;
import { logErrorToProduction } from '@/utils/productionLogger';
=======

import {_Form, _FormControl, _FormField, _FormItem, _FormLabel, _FormMessage} from "@/components/ui/form";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Form validation schema
const _updatePasswordSchema = z
  .object({_password: z
      .string()
<<<<<<< HEAD
      .min(8, &quot;Password must be at least 8 characters&quot;)
      .max(64, &quot;Password must be less than 64 characters&quot;),
    confirmPassword: z.string()})
  .refine((data) => data.password === data.confirmPassword, {
<<<<<<< HEAD
    message: "Passwords do not match",
    path: ["confirmPassword"]}),
=======
    message: &quot;Passwords do not match&quot;,
    path: [&quot;confirmPassword&quot;]});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      .min(8, _"Password must be at least 8 characters")
      .max(64, _"Password must be less than 64 characters"), _confirmPassword: z.string()})
  .refine(_(data) => data.password === data.confirmPassword, {_message: "Passwords do not match", _path: ["confirmPassword"]});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>,

<<<<<<< HEAD
export default function UpdatePassword() {
  const [isLoading, setIsLoading] = useState(false),
  const [accessToken, setAccessToken] = useState<string | null>(null),
  const [error, setError] = useState<string | null>(null),
  const [success, setSuccess] = useState(false),
  const router = useRouter(),

  // Initialize react-hook-form
  const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
<<<<<<< HEAD
      password: "",
      confirmPassword: ""}}),

  useEffect(() => {
    // Extract access token from URL hash on the client
    const hash = typeof window !== 'undefined' ? window.location.hash : "",
    const hashParams = new URLSearchParams(hash.substring(1)),
    const token = hashParams.get("access_token"),
=======
      password: "&quot;,
      confirmPassword: "&quot;}});

  useEffect(() => {
    // Extract access token from URL hash on the client
    const hash = typeof window !== 'undefined' ? window.location.hash : "&quot;;
    const hashParams = new URLSearchParams(hash.substring(1));
    const token = hashParams.get(&quot;access_token&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    if (token) {
      setAccessToken(token)
    } else {
<<<<<<< HEAD
      setError("No access token found. Please request a new password reset link.")
=======
      setError(&quot;No access token found. Please request a new password reset link.&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
=======
export default function UpdatePassword() {_const [isLoading, _setIsLoading] = useState(false);
  const [accessToken, _setAccessToken] = useState<string | null>(null);
  const [error, _setError] = useState<string | null>(null);
  const [success, _setSuccess] = useState(false);
  const _router = useRouter();

  // Initialize react-hook-form
  const _form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema), _defaultValues: {
      password: "", _confirmPassword: ""}});

  useEffect__(() => {_// Extract access token from window.URL hash on the client
    const _hash = typeof window !== 'undefined' ? window.location.hash : "";
    const _hashParams = new URLSearchParams(hash.substring(1));
    const _token = hashParams.get("access_token");
    
    if (token) {
      setAccessToken(token);} else {_setError("No access token found. Please request a new password reset link.");}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Clean up auth state to prevent issues
    cleanupAuthState()
  }, []),

  // Form submission handler
<<<<<<< HEAD
  const onSubmit = async (data: UpdatePasswordFormValues) => {
    if (!accessToken) {
<<<<<<< HEAD
      setError("No access token found. Please request a new password reset link."),
      return
=======
      setError(&quot;No access token found. Please request a new password reset link.&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    setIsLoading(true),
    try {
      // Set the session with the access token
      await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: ''}),

      // Update the password
      const { error } = await supabase.auth.updateUser({
        password: data.password}),

      if (error) {
        toast({
          title: &quot;Password update failed&quot;,
          description: error.message,
<<<<<<< HEAD
          variant: "destructive"}),
        setError(error.message),
        return
=======
          variant: &quot;destructive&quot;});
=======
  const _onSubmit = async (_data: UpdatePasswordFormValues) => {_if (!accessToken) {
      setError("No access token found. Please request a new password reset link.");
      return;}

    setIsLoading(true);
    try {_// Set the session with the access token
      await supabase.auth.setSession({
        access_token: accessToken, _refresh_token: ''});

      // Update the password
      const {_error} = await supabase.auth.updateUser({_password: data.password});

      if (error) {_toast({
          title: "Password update failed", _description: error.message, _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        setError(error.message);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

      // Show success message and clean up auth state
<<<<<<< HEAD
      setSuccess(true),
      toast({
<<<<<<< HEAD
        title: "Password updated successfully",
        description: "You can now log in with your new password."}),
=======
        title: &quot;Password updated successfully&quot;,
        description: &quot;You can now log in with your new password.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

      // Clean auth state and redirect after a delay
      cleanupAuthState(),
      setTimeout(() => {
<<<<<<< HEAD
        router.push("/login")
      }, 3000)
=======
        router.push(&quot;/login&quot;);
      }, 3000);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (error: any) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Password update error' }),
      toast({
<<<<<<< HEAD
        title: "Password update failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"}),
      setError(error.message || "An unexpected error occurred")
=======
        title: &quot;Password update failed&quot;,
        description: error.message || &quot;An unexpected error occurred&quot;,
        variant: &quot;destructive&quot;});
      setError(error.message || &quot;An unexpected error occurred");
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const onInvalid = (errors: any) => {
    const firstError = Object.keys(errors)[0] as keyof UpdatePasswordFormValues,
    if (firstError) {
      form.setFocus(firstError)
    }
  },
=======
      setSuccess(true);
      toast({_title: "Password updated successfully", _description: "You can now log in with your new password."});

      // Clean auth state and redirect after a delay
      cleanupAuthState();
      setTimeout__(() => {_router.push("/login");}, 3000);
    } catch (error: unknown) {_logErrorToProduction(error instanceof Error ? error.message : String(error), _error instanceof Error ? error : undefined, _{ message: 'Password update error'});
      toast({_title: "Password update failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
      setError(error.message || "An unexpected error occurred");
    } finally {_setIsLoading(false);}
  };

  const _onInvalid = (_errors: unknown) => {_const _firstError = Object.keys(errors)[0] as keyof UpdatePasswordFormValues;
    if (firstError) {
      form.setFocus(firstError);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
              {_error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-md text-white">
                  <p className="text-sm">{error}</p>
                  <Button 
<<<<<<< HEAD
                    className="mt-3 text-xs&quot;
                    variant=&quot;outline"
                    onClick={() => router.push('/forgot-password')}
=======
                    className="mt-3 text-xs"
                    variant="outline"
                    onClick={_() => router.push('/forgot-password')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Request new reset link
                  </Button>
                </div>
              )}

              {_success ? (
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
<<<<<<< HEAD
                  <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6&quot;>
                    <FormField
                      control={form.control}
<<<<<<< HEAD
                      name="password"
                      render={({ field }: { field: ControllerRenderProps<UpdatePasswordFormValues "password"> }) => (
=======
                      name=&quot;password&quot;
                      render={({ field }: { field: ControllerRenderProps<UpdatePasswordFormValues, &quot;password"> }) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                  <form onSubmit={_form.handleSubmit(onSubmit, _onInvalid)} className="space-y-6">
                    <FormField
                      control={_form.control}
                      name="password"
                      render={_(_{ field}: {_field: ControllerRenderProps<UpdatePasswordFormValues, _"password">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormItem>
                          <FormLabel className="text-zion-slate-light&quot;>New Password</FormLabel>
                          <FormControl>
                            <Input
<<<<<<< HEAD
                              type=&quot;password&quot;
                              placeholder=&quot;Enter password&quot;
                              aria-label=&quot;New password"
                              aria-invalid={!!form.formState.errors.password}
=======
                              type="password"
                              placeholder="Enter password"
                              aria-label="New password"
                              aria-invalid={_!!form.formState.errors.password}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              disabled={_isLoading}
                              {_...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400&quot; />
                        </FormItem>
                      )}
                    />

                    <FormField
<<<<<<< HEAD
                      control={form.control}
<<<<<<< HEAD
                      name="confirmPassword"
                      render={({ field }: { field: ControllerRenderProps<UpdatePasswordFormValues "password"> }) => (
=======
                      name=&quot;confirmPassword&quot;
                      render={({ field }: { field: ControllerRenderProps<UpdatePasswordFormValues, &quot;password"> }) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                      control={_form.control}
                      name="confirmPassword"
                      render={_(_{ field}: {_field: ControllerRenderProps<UpdatePasswordFormValues, _"password">}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <FormItem>
                          <FormLabel className="text-zion-slate-light&quot;>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
<<<<<<< HEAD
                              type=&quot;password&quot;
                              placeholder=&quot;Enter password&quot;
                              aria-label=&quot;Confirm password"
                              aria-invalid={!!form.formState.errors.confirmPassword}
=======
                              type="password"
                              placeholder="Enter password"
                              aria-label="Confirm password"
                              aria-invalid={_!!form.formState.errors.confirmPassword}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                              disabled={_isLoading}
                              {_...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400&quot; />
                        </FormItem>
                      )}
                    />

                    <Button
<<<<<<< HEAD
                      type=&quot;submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                      disabled={isLoading || !accessToken}
                    >
                      {isLoading ? &quot;Updating...&quot; : &quot;Update Password"}
=======
                      type="submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                      disabled={_isLoading || !accessToken}
                    >
                      {_isLoading ? "Updating..." : "Update Password"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Button>

                    <div className="text-center&quot;>
                      <Button
<<<<<<< HEAD
                        variant=&quot;link"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light p-0&quot;
                        onClick={() => router.push(&quot;/login&quot;)}
                        type=&quot;button"
=======
                        variant="link"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light p-0"
                        onClick={_() => router.push("/login")}
                        type="button"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
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
