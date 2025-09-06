 //Using centralized Supabase client (imported at top) //Effect for initial session check and auth state changes const sessionTimeoutId = setTimeout ( () => {
  if (mounted) {
  setIsCheckingSession (true);
try {
  
}
});
return () => {
  //Cleanup for listener logInfo ('LoginPage: Unsubscribing from onAuthStateChange.');
authListener?.subscription?.unsubscribe () 
}
};
const unsubscribePromise = checkSessionAndListen ();
return () => {
  mounted = false;
clearTimeout (sessionTimeoutId), //Clear timeout on unmount logInfo ('LoginPage: Unmounting, cleaning up auth listener.');
unsubscribePromise.then (cleanup => cleanup && cleanup () ) 
}
}, []), //Run only once on mount //Effect for handling redirection AFTER session is checked and user state is updated useEffect ( () => {
  logInfo (`LoginPage: Redirection effect runs. sessionChecked: $ {
  sessionChecked 
}, isLoading: $ {
  isLoading 
}, user: $ {
  user?.id 
}, pathname: $ {
  router.pathname 
}`);
//Only redirect if the initial session check is complete, not currently submitting login form, and user exists if (sessionChecked && !isLoading && user) {
  //Get returnTo from query params, decode it if it exists let returnTo = '/dashboard', //Default fallback if (router.query.returnTo && typeof router.query.returnTo === 'string') {
  try {
  returnTo = decodeURIComponent (router.query.returnTo) 
}catch (e) {
  logWarn ('Failed to decode returnTo parameter:', {
  data: router.query.returnTo 
});
returnTo = '/dashboard' 
}
}//Prevent redirecting back to auth pages or creating loops //Add a small delay to ensure session is fully established const redirectTimer = setTimeout ( () => {
  //Double-check that we're still logged in before redirecting if (user && router.pathname === '/auth/login') {
  logInfo (`LoginPage: Executing delayed redirect to $ {
  returnTo 
}`);
router.replace (returnTo), //Use replace to avoid back button issues 
}
}, 100), //Small delay to let session stabilize return () => clearTimeout (redirectTimer) 
}//Return undefined for all other cases return undefined;
}, [user, sessionChecked, isLoading, router, router.query.returnTo]), //Dependencies: user, sessionChecked, isLoading, router //Check if error is related to email verification const messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase () .includes ('email not confirmed') || signInError.message?.toLowerCase () .includes ('email not confirmed') || signInError.message?.toLowerCase () .includes ('verify') || //Assuming 'code' is a property on the error object. Supabase errors might have different structures. 
}return undefined, //Explicitly return undefined if condition is not met 
}, [isEmailUnverified, verificationEmailSent, email, router]);
//--- Rendering Logic --- //1. Primary Loading State: During initial session check min-h-screen flex items-center justify-center"> <div className=" text-center"> <div className=" animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div> <p className=" text-gray-600">Checking authentication...</p> <p className=" text-sm text-gray-500 mt-2">This should only take a moment</p> </div> </div> min-h-screen flex items-center justify-center" > <div className="text-center" > <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4" ></div> <h2 className="text-2xl font-bold mb-4" >Already Logged In</h2> <p className="text-gray-600 mb-4" >Redirecting to your dashboard...</p> </div> </div> 
}return (<> <Head> </Head> <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" > <Card className="w-full max-w-md" > <CardHeader> <CardTitle>Sign In</CardTitle> <CardDescription> Enter your email and password to access your account </CardDescription> </CardHeader> <CardContent> </div>) 
}<div className="space-y-2" > <label htmlFor="email" className="text-sm font-medium" > Email </label> <Input required disabled= {
  isLoading 
}/> </div> <div className="space-y-2" > <label htmlFor="password" className="text-sm font-medium" > Password </label> <Input required disabled= {
  isLoading 
}/> </div> 
};
export default LoginPage;
