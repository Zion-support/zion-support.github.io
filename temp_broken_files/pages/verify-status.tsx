 
}return () => clearInterval (interval) 
}, [countdown]);
setIsResending (true);
setError ('');
setMessage ('');
setIsCheckingStatus (true);
setError ('');
setMessage ('');
</div> <h1 className="text-2xl font-bold text-gray-900" >Email Verification</h1> <p className="text-sm text-gray-600 mt-2" > Check and manage your email verification status </p> </div> <AlertDescription> {
  message 
}</AlertDescription> </Alert>) 
}<AlertDescription> {
  error 
}</AlertDescription> </Alert>) 
}We'll check the verification status for this email address </p>) 
}</div> <p>• Check your email inbox for a verification link</p> <p>• Click the link in the email to verify your account</p> <p>• Return here or try logging in after verification</p> </div> {
  lastSentTime && (<p className="text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center" > <Clock className="h-3 w-3 mr-1" /> Last email sent: {
  lastSentTime.toLocaleTimeString () 
}</p>) 
}</div>) 
}> {
  isCheckingStatus ? (<> <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> Checking Status... </>) : (<> <Eye className="h-4 w-4 mr-2" /> Check Verification Status </>) 
}</Button> {
  /* Resend Email Button */ 
}<Button > {
  isResending ? (<> <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> Sending Email... </>) : countdown > 0 ? (<> <Clock className="h-4 w-4 mr-2" /> Resend in {
  countdown 
}s </>) : (<> <Mail className="h-4 w-4 mr-2" /> Resend Verification Email </>) 
}</Button> {
  /* Try Login Button */ 
}<Button > Try Login </Button> </div> <p> Can't find the verification email? Check your spam folder or try a different email address. </p> <Button > <ArrowLeft className="h-4 w-4 mr-1" /> Go Back </Button> </div> > Use Different Email Address </Button> <Button > Contact Support </Button> </div> </div> </div> </AuthLayout>) 
}