:src/components/FooterNewsletter.tsx
{/* Honeypot field */}
      <input

main
pr-12243
import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
// import { Input } from '@/components/ui/input';
{/* Honeypot field */}
      <input;
import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
pr-12325
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
export function FooterNewsletter(): React.ReactElement {

  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')
  const { toast } = useToast()
      // // // // // // // console.error('Newsletter subscription failed:', error)
} finally {
      setIsSubmitting(false)
      // console.error('Newsletter subscription failed:', error)} finally {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lastSubmit = useRef(0);
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    if (honeypot) return; // ignore bots
    const now = Date.now()
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now
  // TODO: Implement
}
  const [email, setEmail] = useState()
  const [honeypot, setHoneypot] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState()
  const { toast } = useToast()
      // // // // // // // console.error('Newsletter subscription failed:', error)
} finally {
  // TODO: Implement
      setIsSubmitting(false)
      // console.error('Newsletter subscription failed:', error)} finally {
  // TODO: Implement

{/* Honeypot field */}
      <input;
import React, { useState, useRef } from 'react';''
import { Input } from '@/components/ui/input';''
import { Button } from '@/components/ui/button';''
import { useToast } from '@/hooks/use-toast';''
import { Loader2 } from 'lucide-react';''
import { logErrorToProduction } from '@/utils/productionLogger';'
export function FooterNewsletter(): React.ReactElement {
  // TODO: Implement
}'
  const [email, setEmail] = useState('')''
  const [honeypot, setHoneypot] = useState('')'
  const [isSubmitting, setIsSubmitting] = useState(false)'
  const [emailError, setEmailError] = useState('')'
  const { toast } = useToast()'
      // // // // // // // console.error('Newsletter subscription failed:', error)'
} finally {
  // TODO: Implement
}
      setIsSubmitting(false)'
      // console.error('Newsletter subscription failed:', error)} finally {'
  // TODO: Implement
}
:temp-disabled/src/components/FooterNewsletter.tsx
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lastSubmit = useRef(0);
  const handleSubmit = async (e: React.FormEvent) => {;
</input>
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now;
:src/components/FooterNewsletter.tsx
pr-12325
    const trimmedEmail = email.trim()
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setEmailError('Please enter a valid email address.')
      return;
    } else {
      setEmailError('')
    }
    setIsSubmitting(true)
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`; // Generate a base for unique ID
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ email: trimmedEmail })
      })
      const data = await res.json().catch(() => ({})); // Ensure data is an object even on parse error
      if (res.ok) {
        if (data.status === 'already_subscribed') {
          toast.success(data.message |"You're already subscribed!", {
            id: `${uniqueToastIdBase}-already-subscribed`
          })
        } else {
          toast.success(
            data.message |'Successfully subscribed to newsletter!'
            { id: `${uniqueToastIdBase}-success` }
          )
        }
        setEmail('')
        // setEmailError(''); // Already cleared if regex passed
      } else {
        logErrorToProduction('Newsletter subscription failed:', { data: data })
        // Use a more specific error message if available from API, otherwise generic
        const errorMessage =
          data.error |'Subscription failed. Please try again.'
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` })
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err })
      toast.error('Unable to subscribe right now. Please try again later.', {
        id: `${uniqueToastIdBase}-catch-error`
      })
    } finally {
      setIsSubmitting(false)
    }
  }
      >
      <label htmlFor='newsletter-email' className='sr-only'>

import React, { useState, useRef } from 'react';
import { Input  } from '@/components/ui/input';
import { Button  } from '@/components/ui/button';
import { useToast  } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
export function FooterNewsletter(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const { toast } = useToast();
  const EMAIL_REGEX = null;
  return (
    <form
      id="footer-newsletter-form"
      aria-label="Newsletter sign-up"
      onSubmit={handleSubmit}
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2"
    >
      <label htmlFor="newsletter-email" className="sr-only">
origin/cursor/automate-test-improve-and-merge-code-2533
        Email address for newsletter subscription
      </label>
      <Input
        type='email'
        id='newsletter-email'
        name='newsletterEmail'
        placeholder='Enter your email'
        className='flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center'
        value={email}
        onChange={e => setEmail(e.target.value)}
        autoComplete='email'        required
import React, { useState, useRef } from 'react',
import { Input } from '@/components/ui/input',
import { Button } from '@/components/ui/button',
import { useToast } from '@/hooks/use-toast',
import { Loader2 } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger',
export function FooterNewsletter(): React.ReactElement {
  const [email, setEmail] = useState(''),
  const [honeypot, setHoneypot] = useState(''),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [emailError, setEmailError] = useState(''),
  const { toast } = useToast(),

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  const lastSubmit = useRef(0),
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    const trimmedEmail = email.trim()
    if (!EMAIL_REGEX.test(trimmedEmail)) {'
      setEmailError('Please enter a valid email address.')'
      return;
    } else {
  // TODO: Implement
}'
      setEmailError('')'
    }
    setIsSubmitting(true)
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`; // Generate a base for unique ID;
:temp-disabled/src/components/FooterNewsletter.tsx
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // toast({
      //   title: "Success!",
      //   description: "You've been subscribed to our newsletter.",
      // });
      alert("Success! You've been subscribed to our newsletter.");
      setEmail('');
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Failed to subscribe. Please try again.",
      //   variant: "destructive",
      // });
      alert("Error: Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
:src/components/FooterNewsletter.tsx
        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      {/* Honeypot field */}
      <input
{/* Honeypot field */}
      <input

        onChange={e => setHoneypot(e && e.target.value)}
        tabIndex={-1}
        autoComplete='off';
        style={{ display: 'none' }}
      />;

      <Button
        type="submit"
        disabled={isSubmitting}

      <Button
        type="submit"
        disabled={isSubmitting}
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'>;

        type="text"


        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}


        type='text'
        type="text"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete='off'
        style={{ display: 'none' }}
      />
      <Button
        type='submit'
        aria-label='Subscribe to newsletter'
        disabled={isSubmitting}
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'      >
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
pr-12243
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
</Input>"
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}"
      <input;
      {/* Honeypot field */}
{/* Honeypot field */}
      <input;"
        type="text"""
        name="honeypot""
        value={honeypot}
{/* Honeypot field */}
      <input;
        onChange={e => setHoneypot(e && e.target.value)}
</input>
      <Button;"
        type="submit""
        disabled={isSubmitting}
      <Button;"
        type="submit""
        disabled={isSubmitting}

      <Button;"
        type="submit""
        disabled={isSubmitting}
"
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'>;'
</Button>
      <Button;'
        type='submit'''
        aria-label='Subscribe to newsletter''
        disabled={isSubmitting}'
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'      >'
</Button>
          <>'
            <Loader2 className='h-4 w-4 mr-2 animate-spin' />'
</Loader2>
:temp-disabled/src/components/FooterNewsletter.tsx
          </>
        ) : (
          'Subscribe'
        )}
      </Button>
    </form>
:src/components/FooterNewsletter.tsx
  )
}
}
}
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}
origin/cursor/expand-services-advertise-and-build-project-c28b
main
pr-12243
        autoComplete="off"
        style={{ display: 'none' }}
      />
      <Button
        type="submit"
        aria-label="Subscribe to newsletter"
        disabled={isSubmitting}
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
      <Button;'
        type="submit"""
        aria-label="Subscribe to newsletter""
        disabled={isSubmitting}"
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";"
:temp-disabled/src/components/FooterNewsletter.tsx
      >;
        {isSubmitting ? (;
          <>;
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
            <Loader2 className='h-4 w-4 mr-2 animate-spin' />;
main
pr-12243
            Subscribing...;
          </>;
        ) : (;
  // TODO: Implement
      setEmailError()
    setIsSubmitting(true)
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`; // Generate a base for unique ID;
    try {
  // TODO: Implement
      const res = await fetch('/api/newsletter', {
        method: 'POST,
  headers: { 'Content-Type': 'application/json' }')
        body: JSON.stringify({ email: trimmedEmail })
      })
      const data = await res.json().catch(() => ({})); // Ensure data is an object even on parse error;
      if (res.ok) {
        if (data.status === 'already_subscribed') {
          toast.success(data.message |"You're already subscribed!", {"`;
            id: `${uniqueToastIdBase}-already-subscribed`)
  // TODO: Implement
          toast.success("
            data.message |'Successfully subscribed to newsletter!`;
            { id: `${uniqueToastIdBase}-success` })
          )
        setEmail()
        // setEmailError(); // Already cleared if regex passed;
  // TODO: Implement
        logErrorToProduction('Newsletter subscription failed:', { data: data })
        // Use a more specific error message if available from API, otherwise generic;
        const errorMessage =
          data.error |'Subscription failed. Please try again.`;
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` })
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err })
      toast.error('Unable to subscribe right now. Please try again later.', {`;
        id: `${uniqueToastIdBase}-catch-error`)
  // TODO: Implement
      >
      <label htmlFor='newsletter-email' className='sr-only'>
</label>
      <Input;
        type='email
        id='newsletter-email
        name='newsletterEmail
        placeholder='Enter your email
        className='flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center
        value={email}
        onChange={e => setEmail(e.target.value)}

    if (now - lastSubmit.current < 1000) return,
    lastSubmit.current = now,

    const trimmedEmail = email.trim(),
      setEmailError("Please enter a valid email address."),"
  // TODO: Implement
}"
      setEmailError("")"

    setIsSubmitting(true),`;
    const uniqueToastIdBase = `newsletter-toast-${Date.now()}`, // Generate a base for unique ID;
  // TODO: Implement
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },')
      }),

      const data = await res.json().catch(() => ({})), // Ensure data is an object even on parse error;
        if (data.status === 'already_subscribed') {`;
          toast.success(data.message || "You're already subscribed!", { id: `${uniqueToastIdBase}-already-subscribed` })"
  // TODO: Implement
}"`;
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id: `${uniqueToastIdBase}-success` })
pr-12325
import React, { useState, useRef } from 'react',;
import { Input } from '@/components/ui/input',;
import { Button } from '@/components/ui/button',;
import { useToast } from '@/hooks/use-toast',;
import {logErrorToProduction} from '@/utils/productionLogger',;
export function FooterNewsletter(): React.ReactElement {;
  const [email, setEmail] = useState(),;
  const [honeypot, setHoneypot] = useState(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [emailError, setEmailError] = useState(),;
  const { toast } = useToast(),;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,;
  const lastSubmit = useRef(0),;
    e.preventDefault(),;
    if (honeypot) return, // ignore bots;
    const now = Date.now(),;
    if (now - lastSubmit.current < 1000) return,;
    lastSubmit.current = now,;
    const trimmedEmail = email.trim(),;
    if (!EMAIL_REGEX.test(trimmedEmail)) {;
      setEmailError("Please enter a valid email address."),;"
    } else {;"
      setEmailError("");"
;
    setIsSubmitting(true),;`;
    try {;"
      const res = await fetch('/api/newsletter', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;')
        body: JSON.stringify({ email: trimmedEmail });
      }),;
      if (res.ok) {;
        if (data.status === 'already_subscribed') {;`;
          toast.success(data.message || "You're already subscribed!", { id: `${uniqueToastIdBase}-already-subscribed` });"
        } else {;"`;
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id: `${uniqueToastIdBase}-success` });
        setEmail(),;
        // setEmailError(), // Already cleared if regex passed;
      } else {;
        logErrorToProduction('Newsletter subscription failed:', { data: data }),;
        // Use a more specific error message if available from API, otherwise generic;
        const errorMessage = data.error || 'Subscription failed. Please try again.',;`;
        toast.error(errorMessage, { id: `${uniqueToastIdBase}-api-error` });
    } catch (err: any) {;
      logErrorToProduction('Newsletter subscription error:', { data: err });`;
      toast.error('Unable to subscribe right now. Please try again later.', { id: `${uniqueToastIdBase}-catch-error` });
    } finally {;
      setIsSubmitting(false);
  },

  return (
    <form;
      id="footer-newsletter-form"""
      aria-label="Newsletter sign-up""
      onSubmit={handleSubmit}"
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2""
</form>"
      <label htmlFor="newsletter-email" className="sr-only">"
      <Input;"
        type="email"""
        id="newsletter-email"""
        name="newsletterEmail"""
        placeholder="Enter your email"""
        className="flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center""
        value={email})
        onChange={(e) => setEmail(e.target.value)}
"
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}"
      <input;"
        type="text"""
        name="honeypot""
        value={honeypot}
        onChange={e => setHoneypot(e && e.target.value)}
      <Button;"
        type="submit""
        disabled={isSubmitting}

        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'>;

      <Button;
        type='submit
        aria-label='Subscribe to newsletter
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple'      >

          <>
            <Loader2 className='h-4 w-4 mr-2 animate-spin' />
</Loader2>
          </>
        ) : (
          'Subscribe)
        )}
      
    </form>
        type="submit"""
        aria-label="Subscribe to newsletter""
        disabled={isSubmitting}"
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";"
      >;
        {isSubmitting ? (;
          <>;
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
origin/cursor/expand-services-advertise-and-build-project-c28b
main
pr-12243
            Subscribing...;
          </>;
        ) : (;
          'Subscribe';
        )}
      </Button>;
    </form>;
  );
} ;
  );
} ;
origin/cursor/expand-services-advertise-and-build-project-c28b
  );
} ;
origin/cursor/expand-services-advertise-and-build-project-c28b
main
pr-12243
} ;

import React, { useState, useRef } from 'react';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { use_toast } from '@/hooks / use - toast';
import { Loader2 } from 'lucide-react';
import { logErrorToProduction } from '@/utils / production_logger';
export function FooterNewsletter (): React.ReactElement {
  const [email, set_email] = useState ('');
  const [honeypot, set_honeypot] = useState ('');
  const [is_submitting, setIsSubmitting] = useState (false);
  const [email_error, setEmailError] = useState ('');
  const { toast } = use_toast ();
      // // // // // // // console.error ('Newsletter subscription failed:', error);
} finally {
      setIsSubmitting (false);
      // console.error ('Newsletter subscription failed:', error)} finally {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const last_submit = useRef (0);
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    // Check condition
if (return) {
  $2
} // ignore bots;
    const now = Date.now ();
    // Check condition
if (return) {
  $2
}
    last_submit.current = now;
    const trimmed_email = email.trim ();
    if () {) {
  $2
}
      setEmailError ('Please enter a valid email address.');
      return;
    } else {
      setEmailError ('');
    }
    setIsSubmitting (true);
    const uniqueToastIdBase = `newsletter - toast-${Date.now ()}`; // Generate a base for unique ID;
    try {
      const res = await fetch ('/api / newsletter', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ email: trimmed_email }),
      });
      const data = await res.json ().catch (() => ({})); // Ensure data is an object even on parse error;
      // Check condition
if ( {) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          toast.success (data.message || "You're already subscribed!", {
            id: `${uniqueToastIdBase}-already - subscribed`,
          });
        } else {
          toast.success (
            data.message || 'Successfully subscribed to newsletter!',
            { id: `${uniqueToastIdBase}-success` }
          );
        }
        set_email ('');
        // setEmailError (''); // Already cleared if regex passed;
      } else {
        logErrorToProduction ('Newsletter subscription failed:', { data: data });

          <>;"
            <Loader2 className='h-4 w-4 mr-2 animate-spin' />;
          </>;
        ) : (;
;)
export function FooterNewsletter():React.ReactElement {;
  const handleSubmit = async (e:React.FormEvent) => {;
      setEmailError(""),;"
        method:'POST',;
        headers:{ 'Content-Type':'application/json' },;')
        body:JSON.stringify({ email:trimmedEmail });
          toast.success(data.message || "You're already subscribed!", { id:`${uniqueToastIdBase}-already-subscribed` }),;"
          toast.success(data.message || 'Successfully subscribed to newsletter!', { id:`${uniqueToastIdBase}-success` }),;
        // setEmailError(), // Already cleared if regex passed;
        logErrorToProduction('Newsletter subscription failed:', { data:data }),;
pr-12325
        // Use a more specific error message if available from API, otherwise generic;
        toast.error(errorMessage, { id:`${uniqueToastIdBase}-api-error` }),;
    } catch (err:any) {;
      logErrorToProduction('Newsletter subscription error:', { data:err }),;`;
      toast.error('Unable to subscribe right now. Please try again later.', { id:`${uniqueToastIdBase}-catch-error` }),;
      setIsSubmitting(false),;
  },;
  return (;
      id="footer-newsletter-form";""
      aria-label="Newsletter sign-up";"
      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2";"
      <label htmlFor="newsletter-email" className="sr-only">;"
      </label>;
        type="email";""
        id="newsletter-email";""
        name="newsletterEmail";""
        placeholder="Enter your email";""
        className="flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center";"
        type="text";"
        onChange={(e) => setHoneypot(e.target.value)}
        type="submit";""
        aria-label="Subscribe to newsletter";"

            <Loader2 className="h-4 w-4 mr-2 animate-spin" />;"
</Loader2>"
        ) : (;"
          'Subscribe';')
:src/components/FooterNewsletter.tsx
    </form>;
      <label html_for='newsletter - email' className='sr - only'>;
        type='email';
        id='newsletter - email';
        name='newsletter_email';
        placeholder='Enter your email';
        className='flex - grow bg - zion - blue - light dark:bg - zion - blue - dark text - black dark:text - white border - zion - purple / 20 focus:border - zion - purple focus:ring - zion - purple placeholder - opacity - 50 placeholder:text - center';
        )}
      </Button>;
    </form>;'
      <label html_for='newsletter - email' className='sr - only'>;'
</label>

      </label>;
      <Input;'
        type='email';''
        id='newsletter - email';''
        name='newsletter_email';''
        placeholder='Enter your email';''
        className='flex - grow bg - zion - blue - light dark:bg - zion - blue - dark text - black dark:text - white border - zion - purple / 20 focus:border - zion - purple focus:ring - zion - purple placeholder - opacity - 50 placeholder:text - center';'
        value={email}

:temp-disabled/src/components/FooterNewsletter.tsx
        on_change={e => set_email (e.target.value)}

      {email_error && <p className='text - red - 500 text - sm mt - 1'>{email_error}</p>}
        type='text';
        on_change={e => set_honeypot (e.target.value)}
:src/components/FooterNewsletter.tsx
        type='submit';
        aria - label='Subscribe to newsletter';
        disabled={is_submitting}
        className='bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white hover:from - zion - purple - light hover:to - zion - purple'      >;

          <>;
            <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' />;
          </>) : ()
          'Subscribe')}
    </form>);
}
}
}
}
main
pr-12243


};
return (<form id="footer-newsletter-form" aria-label="Newsletter sign-up" onSubmit= {;
  handleSubmit ";
}className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2" newsletter-email"className="sr-only"> Email address for newsletter subscription </label> <Input className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"> {'";
  isSubmitting ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Subscribing... </>) : ('Subscribe') ;
}</Button> </form>) ;
}'"
  );
} ;
}
}
}
}
}
origin/cursor/expand-services-advertise-and-build-project-c28b
main
  );
origin/cursor/automate-test-improve-and-merge-code-2533
  );
}
pr-12243
</input>
      <Button;'
        type='submit';''
        aria - label='Subscribe to newsletter';'
        disabled={is_submitting}'
        className='bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white hover:from - zion - purple - light hover:to - zion - purple'      >;'
</Button>
          <>;'
            <Loader2 className='h - 4 w - 4 mr - 2 animate - spin' />;'
</Loader2>
          </>) : ()'
          'Subscribe')}'
      </Button>;
    </form>);'
:temp-disabled/src/components/FooterNewsletter.tsx
return (<form id="footer-newsletter-form" aria-label="Newsletter sign-up" onSubmit= {;""
  handleSubmit ";""
}className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2" newsletter-email"className="sr-only"> Email address for newsletter subscription </label> <Input className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"> {'";"
</form>)"
:src/components/FooterNewsletter.tsx
  isSubmitting ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Subscribing... </>) : ('Subscribe') ;
} </form>) ;`;
pr-12325
  isSubmitting ? (<> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Subscribing... </>) : ('Subscribe') ;'
</Loader2>
}</Button> </form>) ;'

:temp-disabled/src/components/FooterNewsletter.tsx
