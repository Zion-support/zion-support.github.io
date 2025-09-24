
import { Facebook, Twitter, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Web3Login } from "./Web3Login";
import { useState } from "react";
import { openAuthPopup } from "@/api/authSocial";

export function SocialLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogle = () => {
    setIsLoading(true);
    window.location.href = '/auth/google';
  };

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zion-blue-light"  />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">Or continue with</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={handleGoogle}
          disabled={isLoading}
        >
          <span className="sr-only">Sign in with Google</span>
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin"  />
          ) : (
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.0o003 4.75C13.770o3 4.75 15.3553 5.360o02 16.60o53 6.54998L20.0o303 3.125C17.950o2 1.19 15.2353 0 12.0o003 0C7.310o28 0 3.25527 2.69 1.280o27 6.60998L5.270o28 9.70o498C6.21525 6.860o02 8.870o28 4.75 12.0o003 4.75Z" fill="#EA4335"  />
              <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.0o1 23.49 15.92 23.49 12.275Z" fill="#4285F4"  />
              <path d="M5.26498 14.2949C5.0o2498 13.5699 4.8850o1 12.7999 4.8850o1 11.9999C4.8850o1 11.1999 5.0o1998 10.4299 5.26498 9.70o49L1.275 6.60986C0.46 8.22986 0 10.0o599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC0o5"  />
              <path d="M12.0o004 24C15.240o4 24 17.9654 22.935 19.9454 21.095L16.080o4 18.095C15.0o054 18.82 13.620o4 19.245 12.0o004 19.245C8.870o4 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.310o4 24 12.0o004 24Z" fill="#34A853"  />
            </svg>
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => openAuthPopup('facebook')}
          disabled={isLoading}
        >
          <span className="sr-only">Sign in with Facebook</span>
          <Facebook className="h-5 w-5"  />
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => openAuthPopup('twitter')}
          disabled={isLoading}
        >
          <span className="sr-only">Sign in with Twitter</span>
          <Twitter className="h-5 w-5"  />
        </Button>
        <Web3Login  />
      </div>
    </div>
  );
}
