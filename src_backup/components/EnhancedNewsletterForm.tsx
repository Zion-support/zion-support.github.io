
    setIsSubmitting(true),
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, useRef } from 'react'
import { Mail } from 'lucide-react'
import { useToast } from "@/hooks/use-toast";
import {logErrorToProduction} from '@/utils/productionLogger';
export function EnhancedNewsletterForm() {
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { logErrorToProduction } from '@/utils/productionLogger';
import { Button } from @/components/ui/button';
import { Input } from '@/components/ui/input;
import { useState, useRef } from react';
import { Mail } from 'lucide-react;
import { useToast } from @/hooks/use-toast';
import { logErrorToProduction } from '@/utils/productionLogger;

export function EnhancedNewsletterForm() {

origin/cursor/automate-test-improve-and-merge-code-2533
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const lastSubmit = useRef(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now;
    const trimmed = email.trim();
    if (!EMAIL_REGEX.test(trimmed)) {
      toast.error("Invalid email");
    const trimmed = email.trim();
    if (!EMAIL_REGEX.test(trimmed)) {
      toast.error("Invalid email");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

          toast.success(data.message || "Thanks for subscribing!)
        }
        setIsSubmitted(true),
        setEmail(");
      } else {
        // Handle error responses
        logErrorToProduction("Newsletter subscription failed:", { data: data });
        toast.error(data.error || "Subscription failed. Please try again.");
      }
    } catch (err: any) {
      logErrorToProduction("Newsletter subscription error:", { data: err });
      toast.error("Unable to subscribe right now. Please try again later.");
    } finally {
      setIsSubmitting(false)
    }
  }
          toast.success(data.message || "Thanks for subscribing!")
        }
        setIsSubmitted(true),;
        setEmail("");
      } else {;
        // Handle error responses;
        logErrorToProduction(Newsletter subscription failed:', { data: data }),
        toast.error(data.error || "Subscription failed. Please try again.);
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:, { data: err }),
      toast.error(Unable to subscribe right now. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  },

  const EMAIL_REGEX = null;



origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6>
      <div className=flex items-center mb-4">
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3>
          <Mail className=h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white>Stay Updated</h3>
          <p className=text-zion-slate-light text-sm">
            Get exclusive offers, trending AI news, and early access to best
            deals
          </p>
        </div>
      </div>
      



;
    setIsSubmitting(true),import { Button  } from @/components/ui/button';
import { Input  } from '@/components/ui/input;
import { useState, useRef  } from react';
import { Mail  } from 'lucide-react;
import { useToast  } from @/hooks/use-toast';
export function EnhancedNewsletterForm() {const [email, setEmail] = useState(")import { logErrorToProduction  } from @/utils/productionLogger';
export function EnhancedNewsletterForm() {const [email, setEmail]  = useState(")export function EnhancedNewsletterForm() {const [email, setEmail]  = useState(')const [isSubmitting, setIsSubmitting] = useState(false)const [isSubmitted, setIsSubmitted] = useState(false)const { toast } = useToast()const EMAIL_REGEX  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;const EMAIL_REGEX  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;const lastSubmit  = useRef(0)const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()const now = Date.now()if (now - lastSubmit.current < 1000) return;
    lastSubmit.current = now;
    const trimmed = email.trim()if (!EMAIL_REGEX.test(trimmed)) {toast.error("Invalid email)const trimmed = email.trim()if (!EMAIL_REGEX.test(trimmed)) {toast.error(Invalid email")const trimmed = email.trim()if (!EMAIL_REGEX.test(trimmed)) {toast.error("Invalid email)const trimmed = email.trim()if (!EMAIL_REGEX.test(trimmed)) {toast.error(Invalid email")const trimmed = email.trim()if (!EMAIL_REGEX.test(trimmed)) {toast({title: Invalid email',description: 'Please enter a valid email address.,variant: destructive';
      })return;
    }setIsSubmitting(true)try {try {const res = await fetch("/api/newsletter, {method: POST",headers: { "Content-Type: application/json" },body: JSON.stringify({ email: trimmed })})ursor/automate-test-improve-and-merge-code-646c;
      const res = await fetch("/api/newsletter, {method: POST",headers: { "Content-Type: application/json" },body: JSON.stringify({ email: trimmed })body: JSON.stringify({ email: trimmed })})setIsSubmitting (false)}
  }const data = await res.json().catch(() => ({})),if (res.ok) {// Handle different success statuses;
        if (data.status === "already_subscribed) {toast.success(data.message || You're already subscribed!")} else {toast.success(data.message || "Thanks for subscribing!)}
        setIsSubmitted(true)setEmail(")} else {// Handle error responses;
        logErrorToProduction("Newsletter subscription failed:, { data: data })toast.error(data.error || Subscription failed. Please try again.")}
    } catch (err: any) {logErrorToProduction("Newsletter subscription error:, { data: err })toast.error(Unable to subscribe right now. Please try again later.")} finally {setIsSubmitting(false)}
  }
          toast.success(data.message || "Thanks for subscribing!)}
        setIsSubmitted(true),setEmail(")} else {// Handle error responses;
        logErrorToProduction(Newsletter subscription failed:, { data: data }),toast.error(data.error || "Subscription failed. Please try again.)}
    } catch (err: any) {logErrorToProduction('Newsletter subscription error:', { data: err }),toast.error(Unable to subscribe right now. Please try again later.")} finally {setIsSubmitting(false)}
  },const EMAIL_REGEX  = null;return (<div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6>;
      <div className=flex items-center mb-4">;
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3>;
          <Mail className=h-6 w-6" />;
        </div>;
        <div>;
          <h3 className="text-lg font-bold text-white>Stay Updated</h3>;
          <p className=text-zion-slate-light text-sm">;
            Get exclusive offers, trending AI news, and early access to best;
            deals;
          </p>;
        </div>;
      </div>;
      {isSubmitted ? (<div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40>;
          <p className=text-white font-medium">Thank you for subscribing!</p>;
          <p className="text-zion-slate-light mt-1>;
            We&apos;ll keep you updated with the latest from Zion.;
          </p>;
      <div className='mt-4 flex items-center text-xs text-zion-slate-light'>;
      <div className=mt-4 flex items-center text-xs text-zion-slate-light>;
        <div className='flex -space-x-1 mr-2'>;
          {[...Array(3)].map((_, i) => (<div;
              key={i}
              className=h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan>              {String && String.fromCharCode(65 + i)}
            </div>;
          ))}

            We&apos;ll keep you updated with the latest from Zion.
          </p>

      

      {isSubmitted ? (
        <div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40">
          <p className="text-white font-medium">Thank you for subscribing!</p>
          <p className="text-zion-slate-light mt-1">We'll keep you updated with the latest from Zion.</p>
        </div>
      ) : (
        <form
          ))}We&apos;ll keep you updated with the latest from Zion.;
          </p>;
      {isSubmitted ? (<div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40>;
          <p className=text-white font-medium">Thank you for subscribing!</p>;
          <p className="text-zion-slate-light mt-1>We'll keep you updated with the latest from Zion.</p>;
        </div>;
      ) : (<form;
          onSubmit={handleSubmit}
          className=flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2";
        >;
          <label htmlFor="enhanced-newsletter-email className=sr-only">;
            Email address for newsletter subscription;
          </label>;
          <Input;
            type="email;
            id=enhanced-newsletter-email";
            name="email;
            placeholder=Enter your email";
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple;
            value={email}onChange={(e: React.ChangeEvent<HTMLInputElement>) =>;
              setEmail(e.target.value)}
            autoComplete=email";
            required;
          />;
          <Button;
            type="submit;
            disabled={isSubmitting}
            className=bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
          >;
            {isSubmitting ? "Subscribing... : Subscribe"}
          </Button>;
            disabled={isSubmitting}
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple;
          >;
            {isSubmitting ? Subscribing..." : "Subscribe}
          </Button>;
        </form>;
      )}<div className=mt-4 flex items-center text-xs text-zion-slate-light">;
        <div className="flex -space-x-1 mr-2>;
          {[...Array(3)].map((_, i) => (<div;
              key={i}
              className=h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan";
            >;
              {" }
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <span>Join 10,000+ tech professionals who already subscribe</span>
      </div>
    </div>
  )
}


            type="email"
            id="enhanced-newsletter-email"
            name="email"
            placeholder="Enter your email"
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple"
            </div>;
          ))}</div>;
        <span>Join 10,000+ tech professionals who already subscribe</span>;
      </div>;
    </div>;
  ))}type="email";
            id="enhanced-newsletter-email";
            name="email";
            placeholder="Enter your email";
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple";
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            autoComplete=email";
            required;
          />;
          <Button;
            type="submit;
            disabled={isSubmitting}
            className=bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
          >;
            {isSubmitting ? "Subscribing... : Subscribe"}
          </Button>;
        </form>;
      )}<div className="mt-4 flex items-center text-xs text-zion-slate-light>;
        <div className=flex -space-x-1 mr-2">;
          {[...Array(3)].map((_, i) => (<div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan>;
    } catch (err: any) {logErrorToProduction(Newsletter subscription error:, { data: err })toast.error(Unable to subscribe right now. Please try again later.")} finally {setIsSubmitting(false)}
  }return (<div className="w-full max-w-lg mx-auto bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6>;
      <div className=flex items-center mb-4">;
        <div className="p-2 bg-zion-purple/20 rounded-full text-zion-cyan mr-3>;
          <Mail className=h-6 w-6" />;
        </div>;
        <div>;
          <h3 className="text-lg font-bold text-white>Stay Updated</h3>;
          <p className=text-zion-slate-light text-sm">Get exclusive offers, trending AI news, and early access to best deals</p>;
        </div>;
      </div>;
      {isSubmitted ? (<div className="text-center p-4 rounded-lg bg-zion-purple/20 border border-zion-purple/40>;
          <p className=text-white font-medium">Thank you for subscribing!</p>;
          <p className="text-zion-slate-light mt-1>We'll keep you updated with the latest from Zion.</p>;
        </div>;
      ) : (<form onSubmit={handleSubmit} className=flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">;
          <label htmlFor="enhanced-newsletter-email className=sr-only">;
            Email address for newsletter subscription;
          </label>;
          <Input;
            type="email;
            id=enhanced-newsletter-email";
            name="email;
            placeholder=Enter your email";
            className="flex-grow bg-zion-blue-dark text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple;
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            autoComplete=email";
            required;
          />;
          <Button;
            type="submit;
            disabled={isSubmitting}
            className=bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple";
          >;
            {isSubmitting ? "Subscribing... : Subscribe"}
          </Button>;
        </form>;
      )}<div className="mt-4 flex items-center text-xs text-zion-slate-light>;
        <div className=flex -space-x-1 mr-2">;
          {[...Array(3)].map((_, i) => (<div key={i} className="h-5 w-5 rounded-full border border-zion-blue-dark bg-zion-blue flex items-center justify-center text-zion-cyan>;
              {String.fromCharCode(65 + i)}
            </div>;
          ))}
        </div>;
        <span>Join 10,000+ tech professionals who already subscribe</span>;
      </div>;
    </div>;
  );
}



      {is_submitted ? (
        <div className='text - center p - 4 rounded - lg bg - zion - purple / 20 border border - zion - purple / 40'>;
  )}}{is_submitted ? (<div className='text - center p - 4 rounded - lg bg - zion - purple / 20 border border - zion - purple / 40'>;
          <p className='text - white font - medium'>Thank you for subscribing!</p>;
          <p className='text - zion - slate - light mt - 1'>;
          <p className='text - white font - medium>Thank you for subscribing!</p>;
          <p className=text - zion - slate - light mt - 1'>;
            We & apos;ll keep you updated with the latest from Zion.;
          </p>;
        </div>) : (<form;
          on_submit={handle_submit}
          className='flex flex - col space - y-3 sm:flex - row sm:space - y-0 sm:space - x-2;
        >;
          <label html_for=enhanced - newsletter - email' className='sr - only>;
            Email address for newsletter subscription;
          </label>;
          <Input;
            type=email';
            id='enhanced - newsletter - email;
            name=email';
            placeholder='Enter your email;
            className=flex - grow bg - zion - blue - dark text - white border - zion - purple / 20 focus:border - zion - purple focus:ring - zion - purple';
            value={email}
            on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
              set_email (e.target.value)}
            auto_complete='email;
            required;
          />;
          <Button;
            type=submit';
            disabled={is_submitting}
            className='bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white hover:from - zion - purple - light hover:to - zion - purple          >;
            {is_submitting ? Subscribing...' : 'Subscribe}
          </Button>;
        </form>)}
      <div className=mt - 4 flex items - center text - xs text - zion - slate - light'>;
        <div className='flex -space - x-1 mr - 2>;
          {[...Array (3)].map ((_, i) => (<div;
              key={i}
              className=h - 5 w - 5 rounded - full border border - zion - blue - dark bg - zion - blue flex items - center justify - center text - zion - cyan';
            >              {String.fromCharCode (65 + i)}
            </div>))}
        </div>;
        <span > Join 10, 000+ tech professionals who already subscribe</span>;
      </div>;
    </div>);


}
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed })
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        // Handle different success statuses
        if (data.status === 'already_subscribed) {
          toast({
            title: Already subscribed',
            description: data.message || You're already subscribed!"});
        } else {
          toast({
            title: Success!,
            description: data.message || 'Thanks for subscribing!'});
        }
        setIsSubmitted(true);
        setEmail();
      } else {
        // Handle error responses
        logErrorToProduction('Newsletter subscription failed:', { data: data });
        toast({
          title: Subscription failed,
          description: data.error || 'Please try again.',
          variant: destructive
        });
      }
    } catch (err: any) {
      logErrorToProduction('Newsletter subscription error:', { data: err });
      toast({
        title: Error,
        description: 'Something went wrong. Please try again.',
        variant: destructive
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8>
        <div className=inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Mail className="w-8 h-8 text-green-600 />
        </div>
        <h3 className=text-lg font-semibold text-gray-900 mb-2">
          Thank you for subscribing!
        </h3>
        <p className="text-gray-600 mb-4>
          You'll receive our latest updates and exclusive content.
        </p>
        <Button
    </div>)}const res = await fetch('/api/newsletter', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({ email: trimmed })})const data  = await res.json().catch(() => ({}))if (res.ok) {// Handle different success statuses;
        if (data.status === 'already_subscribed') {toast({title: 'Already subscribed',description: data.message || "You're already subscribed!";
            description: data.message || "You're already subscribed!";
          })} else {toast({title: 'Success!',description: data.message || 'Thanks for subscribing!';
            description: data.message || 'Thanks for subscribing!';
          })}
        setIsSubmitted(true)setEmail(')} else {// Handle error responses;
        logErrorToProduction(Newsletter subscription failed:', { data: data })toast({title: 'Subscription failed,description: data.error || Please try again.',variant: 'destructive;
        })}
    } catch (err: any) {logErrorToProduction(Newsletter subscription error:', { data: err })toast({title: 'Error,description: Something went wrong. Please try again.',variant: 'destructive;
      })} finally {setIsSubmitting(false)}
  }if (isSubmitted) {return (<div className=text-center py-8">;
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4>;
          <Mail className=w-8 h-8 text-green-600" />;
        </div>;
        <h3 className="text-lg font-semibold text-gray-900 mb-2>;
          Thank you for subscribing!;
        </h3>;
        <p className=text-gray-600 mb-4">;
          Youll receive our latest updates and exclusive content.;
        </p>;
        <Button;
          onClick={() => setIsSubmitted(false)}
          variant="outline;
          size=sm";
        >;
          Subscribe another email;
        </Button>;
      </div>;
    )}return (<div className="max-w-md mx-auto>;
      <div className=text-center mb-6">;
        <h3 className="text-xl font-semibold text-gray-900 mb-2>;
          Stay Updated;
        </h3>;
        <p className=text-gray-600">;
          Get the latest news, updates, and exclusive content delivered to your inbox.;
        </p>;
      </div>;
      <form onSubmit={handleSubmit} className="space-y-4>;
        <div className=flex space-x-2">;
          <Input;
            type="email;
            placeholder=Enter your email";
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required;
            disabled={isSubmitting}
            className="flex-1;
          />;
          <Button;
            type=submit";
            disabled={isSubmitting || !email.trim()}
            className="px-6;
          >;
            {isSubmitting ? (<div className=flex items-center space-x-2">;
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin />;
                <span>Subscribing...</span>;
              </div>;
            ) : (<div className=flex items-center space-x-2">;
                <Mail className="w-4 h-4 />;
                <span>Subscribe</span>;
              </div>;
            )}
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}

main

  );
origin/cursor/automate-test-improve-and-merge-code-2533
          </Button>;
        </div>;
        <p className=text-xs text-gray-500 text-center">;
          We respect your privacy. Unsubscribe at any time.;
        </p>;
      </form>;
    </div>;
  )}ursor/automate-test-improve-and-merge-code-646c;
      {is_submitted ? (<div className='text - center p - 4 rounded - lg bg - zion - purple / 20 border border - zion - purple / 40'>;
          <p className=text - white font - medium>Thank you for subscribing!</p>;
          <p className='text - zion - slate - light mt - 1'>;
            We & apos;ll keep you updated with the latest from Zion.;
          </p>;
        </div>) : (<form;
          on_submit={handle_submit}
          className=flex flex - col space - y-3 sm:flex - row sm:space - y-0 sm:space - x-2;
        >;
          <label html_for='enhanced - newsletter - email' className=sr - only>;
            Email address for newsletter subscription;
          </label>;
          <Input;
            type='email';
            id=enhanced - newsletter - email;
            name='email';
            placeholder=Enter your email;
            className='flex - grow bg - zion - blue - dark text - white border - zion - purple / 20 focus:border - zion - purple focus:ring - zion - purple';
            value={email}
            on_change={(e: React.ChangeEvent < HTMLInputElement>) =>;
              set_email (e.target.value)}
            auto_complete=email;
            required;
          />;
          <Button;
            type='submit';
            disabled={is_submitting}
            className=bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white hover:from - zion - purple - light hover:to - zion - purple          >;
            {is_submitting ? 'Subscribing...' : Subscribe}
          </Button>;
        </form>)}
      <div className='mt - 4 flex items - center text - xs text - zion - slate - light'>;
        <div className=flex -space - x-1 mr - 2>;
          {[...Array (3)].map ((_, i) => (<div;
              key={i}
              className='h - 5 w - 5 rounded - full border border - zion - blue - dark bg - zion - blue flex items - center justify - center text - zion - cyan';
            >              {String.fromCharCode (65 + i)}
            </div>))}
        </div>;
        <span > Join 10, 000+ tech professionals who already subscribe</span>;
      </div>;
    </div>)})
