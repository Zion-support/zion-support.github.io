/* eslint-disable */
 ;
}setIsSubmitting (true);
const uniqueToastIdBase = `newsletter-toast-$ {;
  Date.now () ;`
}`, //Generate a base for unique ID try {;
  const res = await fetch ('/api/newsletter', {';''
  method: 'POST';''
headers: {';''
  'Content-Type': 'application/json' ;
};
body: JSON.stringify ({;
  email: trimmedEmail ;
}) ;
});
const data = await res.json () .catch ( () => ({;'
  ;''
}) ), //Ensure data is an object even on parse error if (res.ok) {';''
  if (data.status === 'already subscribed') {;'
  ;''
}else {';''
  toast.success (data.message || 'Successfully subscribed to newsletter!', {;`
  id: `$ {;
  uniqueToastIdBase ;'`
}-success` ;''
}) ';''
}setEmail ('');';''
//setEmailError (''), //Already cleared if regex passed ;''
}else {';''
  logErrorToProduction ('Newsletter subscription failed:', {;'
  data: data ;''
});';''
//Use a more specific error message if available from API, otherwise generic const errorMessage = data.error || 'Subscription failed. Please try again.';
toast.error (errorMessage, {;`
  id: `$ {;
  uniqueToastIdBase ;`
}-api-error` ;
}) ;'
}''
}catch (err: any) {';''
  logErrorToProduction ('Newsletter subscription error:', {;'
  data: err ;''
});';''
toast.error ('Unable to subscribe right now. Please try again later.', {;`
  id: `$ {;
  uniqueToastIdBase ;`
}-catch-error` ;
}) ;
}finally {;
  setIsSubmitting (false) ;
}
};
return (<form id='footer-newsletter-form' aria-label='Newsletter sign-up' onSubmit= {;'''
  handleSubmit ';''''
}className='flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2' newsletter-email'className='sr-only'> Email address for newsletter subscription </label> <Input className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'> {'';''''
  isSubmitting ? (<> <Loader2 className='h-4 w-4 mr-2 animate-spin' /> Subscribing... </>) : ('Subscribe') ;''
}</Button> </form>) ;''''
}''''''`