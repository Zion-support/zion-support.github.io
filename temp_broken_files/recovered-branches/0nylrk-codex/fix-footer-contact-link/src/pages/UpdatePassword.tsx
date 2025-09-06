 import {
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Form validation schema const updatePasswordSchema = z .object ({
  password: z .string () if (token) {
  setAccessToken (token) 
}else {
  
}
}, [location]);
//Form submission handler 
}setIsLoading (true);
try {
  //Set the session with the access token await supabase.auth.setSession ({
  access token: accessToken;
refresh token: '' 
});
//Update the password const {
  error 
}= await supabase.auth.updateUser ({
  password: data.password 
});
if (error) {
  toast ({
  title: "Password update failed";
description: error.message;
setError (error.message);
return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}//Show success message and clean up auth state //Clean auth state and redirect after a delay cleanupAuthState ();
setTimeout ( () => {
  
}finally {
  setIsLoading (false) 
}
};
flex min-h-screen bg-zion-blue"> <div className=" flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24"> <div className=" mx-auto w-full max-w-sm lg:w-96"> <div className=" text-center mb-10"> <h2 className=" text-3xl font-bold tracking-tight text-white"> Update your password </h2> <p className=" mt-2 text-sm text-zion-slate-light"> Enter your new password below. </p> </div> > Request new reset link </Button> </div>) 
}</div> <h3 className=" text-lg font-medium text-white">Password updated</h3> <p className=" mt-2 text-sm text-zion-slate-light"> Your password has been successfully updated. </p> <p className=" mt-2 text-sm text-zion-slate-light"> Redirecting you to login... </p> </div>) : (<Form {
  ...form 
}> <FormItem> <FormLabel className=" text-zion-slate-light">New Password</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) 
}/> <FormField <FormItem> <FormLabel className=" text-zion-slate-light">Confirm Password</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage className=" text-red-400"/> </FormItem>) 
}/> <Button </Button> <div className=" text-center" > <Button > Back to login </Button> </div> </form> </Form>) 
}</div> </div> </div> Set a strong password to secure your account and continue your journey in the Zion marketplace. </p> </div> </div> </div> </div> </div> <Footer /> </>) 
}