<<<<<<< HEAD
<<<<<<< HEAD:src_backup/components/auth/login/Web3Login.tsx
=======
<<<<<<< HEAD

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react'
import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
export function Web3Login() {

  const { loginWithWeb3 } = useAuth()
  const { isWalletSystemAvailable } = useAppWallet()
  const [isLoading, setIsLoading] = useState(false)
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWallet as useAppWallet } from "../../../context/WalletContext ;
import { Wallet } from 'lucide-react'import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
export function Web3Login() {;

<<<<<<< HEAD
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react'
import { toast } from "sonner",
import {logErrorToProduction} from '@/utils/productionLogger',
export function Web3Login() {

  const { loginWithWeb3 } = useAuth(),
  const { isWalletSystemAvailable } = useAppWallet(),
  const [isLoading, setIsLoading] = useState(false),

  const handleWeb3Login = async () => {
    if (!isWalletSystemAvailable) {
      toast("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."})
      return
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/Web3Login.tsx


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD


=======
<<<<<<< HEAD:src_backup/components/auth/login/Web3Login.tsx
=======
<<<<<<< HEAD

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react'
import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
export function Web3Login() {

  const { loginWithWeb3 } = useAuth()
  const { isWalletSystemAvailable } = useAppWallet()
  const [isLoading, setIsLoading] = useState(false)
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWallet as useAppWallet } from "../../../context/WalletContext ;
import { Wallet } from 'lucide-react'import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
export function Web3Login() {;

<<<<<<< HEAD
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react'
import { toast } from "sonner",
import {logErrorToProduction} from '@/utils/productionLogger',
export function Web3Login() {

  const { loginWithWeb3 } = useAuth(),
  const { isWalletSystemAvailable } = useAppWallet(),
  const [isLoading, setIsLoading] = useState(false),

  const handleWeb3Login = async () => {
    if (!isWalletSystemAvailable) {
      toast("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."})
      return
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/Web3Login.tsx


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const handleWeb3Login = async () => {
    if (!isWalletSystemAvailable) {
      toast("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),
      return;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    try {
      setIsLoading(true)
      // Check if Ethereum provider (e.g., MetaMask) is available
      const ethereum = (window as any).ethereum
    }
    try {
      setIsLoading(true)
      // Check if Ethereum provider (e.g., MetaMask) is available
      const ethereum = (window as any).ethereum
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

    }
    try {

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD:src_backup/components/auth/login/Web3Login.tsx

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/Web3Login.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      setIsLoading(true),
      
      // Check if Ethereum provider (e.g., MetaMask) is available
      const ethereum = (window as any).ethereum,
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
      if (!ethereum) {
        toast("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet."})
        return
=======

<<<<<<< HEAD:src_backup/components/auth/login/Web3Login.tsx

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/Web3Login.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      if (!ethereum) {
        toast("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet."}),
        return;
<<<<<<< HEAD
<<<<<<< HEAD
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
<<<<<<< HEAD
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      }

      
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD:src_backup/components/auth/login/Web3Login.tsx

=======
<<<<<<< HEAD
      }
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/Web3Login.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    } catch (error: any) {
      toast("Login failed", {
        description: error.message |"Failed to connect wallet. Please try again."})
      logErrorToProduction('Web3 login error:', { data: error })
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  }
  const buttonDisabled = isLoading |!isWalletSystemAvailable
  const buttonTitle = !isWalletSystemAvailable
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured."
    : ""
}

  )
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import { useState  } from './react';
import { Button  } from '@/components/ui/ button';
import { use_auth  } from '@/hooks/ use_auth';
import { use_wallet as useAppWallet  } from '../../../context / WalletContext.tsx';, // Renamed to avoid conflict if use_wallet hook is defined locally;
import { Wallet } from 'lucide-react'import { toast  } from './sonner';
import {logErrorToProduction} from '@/utils/ production_logger';
export /**
 * Web3Login - Function description
 */
function Web3Login() {
  const { loginWithWeb3 } = use_auth ();
  const { isWalletSystemAvailable } = useAppWallet ();
  const [is_loading, setIsLoading] = useState (false);
  const handleWeb3Login = async () => {
    // Check condition
if ( {) {
  $2
}
      toast ("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),
      return;
    }
    try {
      setIsLoading (true);
      // Check if Ethereum provider (e.g., MetaMask) is available;
      const ethereum = (window as any).ethereum;
    }
    try {setIsLoading(true),// Check if Ethereum provider (e.g., MetaMask) is available;
      const ethereum = (window as any).ethereum}
    try {if (!ethereum) {toast("Web3 wallet not found, {description: Please install MetaMask or another compatible wallet."})return;
      if (!ethereum) {toast("Web3 wallet not found, {description: Please install MetaMask or another compatible wallet."}),return;
      }await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow;
    } catch (error: any) {toast("Login failed, {description: error.message |Failed to connect wallet. Please try again."})logErrorToProduction('Web3 login error:, { data: error })import { useState   } from ./react';
import { Button   } from '@/components / ui / button;
import { use_auth   } from @/hooks / use_auth';
import { use_wallet as useAppWallet  } from '../../../context / WalletContext.tsx;, // Renamed to avoid conflict if use_wallet hook is defined locally;
import { Wallet } from lucide-react'import { toast   } from './sonner;
import { logErrorToProduction } from @/utils / production_logger';
export /**;
 * Web3Login - Function description;
 */;
function Web3Login() {const { loginWithWeb3 } = use_auth ()const { isWalletSystemAvailable } = useAppWallet ()const [is_loading, setIsLoading] = useState (false)const handleWeb3Login = async () => {// Check condition;
if ( {) {$2;
}
      toast ("Web3 login unavailable, {description: The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),return;
    }
    try {setIsLoading (true)// Check if Ethereum provider (e.g., MetaMask) is available;
      // Check condition;
if ( {) {$2;
}
        toast ("Web3 wallet not found, {description: Please install MetaMask or another compatible wallet."}),return;
      }
      await loginWithWeb3 (), // This is from use_auth, assumed to be a separate flow;
    } catch (error: any) {
      toast ("Login failed", {
        description: error.message || "Failed to connect wallet. Please try again."}),
      logErrorToProduction ('Web3 login error:', { data: error });
    } finally {
      setIsLoading (false);
    }


  const { loginWithWeb3 } = useAuth();
  const { isWalletSystemAvailable } = useAppWallet();
  const [isLoading, setIsLoading] = useState(false);

    : "";
};
  );
};

  },

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  const buttonDisabled = isLoading || !isWalletSystemAvailable,
  const buttonTitle = !isWalletSystemAvailable
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured."
    : "",

  let buttonContent,
  if (!isWalletSystemAvailable) {
    buttonContent = (
      <>
        <Wallet className="h-5 w-5 mr-2" /> Web3 Login Unavailable
      </>
    )
  } else if (isLoading) {
    buttonContent = (
      <span className="flex items-center">
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http: //www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Connecting...
      </span>
    )
  } else {
    buttonContent = (
      <>
        <Wallet className="h-5 w-5 mr-2" /> Sign in with Web3
        <span className="sr-only">Sign in with Web3</span>
      </>
    )
  }

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally;
import { Wallet } from 'lucide-react';
import { toast } from "sonner",;
import {logErrorToProduction} from '@/utils/productionLogger',;
export function Web3Login() {;
  const { loginWithWeb3 } = useAuth(),;
  const { isWalletSystemAvailable } = useAppWallet(),;
  const [isLoading, setIsLoading] = useState(false),;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const handleWeb3Login = async () => {;
    if (!isWalletSystemAvailable) {;
      toast("Web3 login unavailable", {;
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),;
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
;
    try {;
      setIsLoading(true),;
      // Check if Ethereum provider (e.g., MetaMask) is available;
      const ethereum = (window as any).ethereum,;
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

    try {;
      setIsLoading(true);

      // Check if Ethereum provider (e && e.g., MetaMask) is available;
      const ethereum = (window as any).ethereum;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD:src_backup/components/auth/login/Web3Login.tsx

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/Web3Login.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      if (!ethereum) {;
        toast("Web3 wallet not found", {;
          description: "Please install MetaMask or another compatible wallet."}),;
        return;
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
;
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow;
    } catch (error: any) {;
      toast("Login failed", {;
        description: error.message || "Failed to connect wallet. Please try again."}),;
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow;

    } catch (error: any) {;
      toast("Login failed", {;
        description: error && error.message || "Failed to connect wallet. Please try again."}),;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD:src_backup/components/auth/login/Web3Login.tsx

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/Web3Login.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      logErrorToProduction('Web3 login error:', { data: error });
    } finally {;
      setIsLoading(false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  },;
  const buttonDisabled = isLoading || !isWalletSystemAvailable,;
  const buttonTitle = !isWalletSystemAvailable;
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.";
    : "";
  let buttonContent;
  if (!isWalletSystemAvailable) {;
    buttonContent = (;
      <>;
        <Wallet className="h-5 w-5 mr-2" /> Web3 Login Unavailable;
      </>;
    );
  } else if (isLoading) {;
    buttonContent = (;
      <span className="flex items-center">;
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http: //www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">;
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>;
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>;
        </svg>;
        Connecting...;
      </span>;
    );
  } else {;
    buttonContent = (;
      <>;
        <Wallet className="h-5 w-5 mr-2" /> Sign in with Web3;
        <span className="sr-only">Sign in with Web3</span>;
      </>;
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  };

  const buttonDisabled = isLoading || !isWalletSystemAvailable;
  const buttonTitle = !isWalletSystemAvailable;
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/components/auth/login/Web3Login.tsx
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.;
    : ";)}
=======
=======
<<<<<<< HEAD
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.;
    : ";)}
=======
<<<<<<< HEAD:src_backup/components/auth/login/Web3Login.tsx
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.;
    : ";)}
=======
>>>>>>> origin/resolved-merge-conflicts
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.";
    : "";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/Web3Login.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const button_disabled = is_loading || !isWalletSystemAvailable;
  const button_title = !isWalletSystemAvailable;
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.";
    : "";
}
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;


<<<<<<< HEAD:src_backup/components/auth/login/Web3Login.tsx
=======


=======
<<<<<<< HEAD
;


<<<<<<< HEAD:src_backup/components/auth/login/Web3Login.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useWallet as useAppWallet } from '../../../context/WalletContext.tsx'; // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react';
import { toast } from 'sonner';
import { logErrorToProduction } from '@/utils/productionLogger';

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react'
import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
export function Web3Login() {
  );
}return;
}await loginWithWeb3 (), //This is from useAuth, assumed to be a separate flow ;
}finally {setIsLoading (false)}const buttonDisabled = isLoading || !isWalletSystemAvailable;
const buttonTitle = !isWalletSystemAvailable ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured." : "";";
>Sign in with Web3</span> </> 
}//Ensure title is not an empty string if not needed > {;
  buttonContent ;
}</Button>) ;
}"
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
    );
  }
;
  return (;
    <Button;
      type="button";
      variant="outline";
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
      onClick={handleWeb3Login}
      disabled={buttonDisabled}
      title={buttonTitle || undefined} // Ensure title is not an empty string if not needed;
    >;
      {buttonContent}
    </Button>;
  );
}
;

;
=======


;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/auth/login/Web3Login.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
