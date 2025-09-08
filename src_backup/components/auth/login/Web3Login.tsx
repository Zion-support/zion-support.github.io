<<<<<<< HEAD
=======





import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWallet as useAppWallet } from "../../../context/WalletContext ;
import { Wallet } from 'lucide-react'import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
export function Web3Login() {;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba


  const handleWeb3Login = async () => {
    if (!isWalletSystemAvailable) {
      toast("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),
      return;


    }
    try {


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading(true),
      
      // Check if Ethereum provider (e.g., MetaMask) is available
      const ethereum = (window as any).ethereum,



<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (!ethereum) {
        toast("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet."}),
        return;

<<<<<<< HEAD

=======
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }

      
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      


<<<<<<< HEAD
=======
      }
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      
>>>>>>> origin/cursor/delete-old-data-records-6bba

    } catch (error: any) {
      toast("Login failed", {
        description: error.message |"Failed to connect wallet. Please try again."})
      logErrorToProduction('Web3 login error:', { data: error })

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleWeb3Login = async () => {;
    if (!isWalletSystemAvailable) {;
      toast("Web3 login unavailable", {;
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),;
      return;
    }


    try {;
      setIsLoading(true);

      // Check if Ethereum provider (e && e.g., MetaMask) is available;
      const ethereum = (window as any).ethereum;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (!ethereum) {;
        toast("Web3 wallet not found", {;
          description: "Please install MetaMask or another compatible wallet."}),;
        return;
      }


      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow;

    } catch (error: any) {;
      toast("Login failed", {;
        description: error && error.message || "Failed to connect wallet. Please try again."}),;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      logErrorToProduction('Web3 login error:', { data: error });
    } finally {;
      setIsLoading(false);
    }

  };

  const buttonDisabled = isLoading || !isWalletSystemAvailable;
  const buttonTitle = !isWalletSystemAvailable;

<<<<<<< HEAD
=======
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.;
    : ";)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const button_disabled = is_loading || !isWalletSystemAvailable;
  const button_title = !isWalletSystemAvailable;
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.";
    : "";
}
  );
}

<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
=======

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
