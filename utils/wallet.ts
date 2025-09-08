export async function connectMetaMask(): Promise<string[]> {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("MetaMask is not installed");
  }
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts;
  } catch (error) {
    throw new Error("Failed to connect to MetaMask");
  }
}

export async function getAccounts(): Promise<string[]> {
  if (typeof window === "undefined" || !window.ethereum) {
    return [];
  }
  try {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    return accounts;
  } catch (error) {
    return [];
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

export async function getBalance(address: string): Promise<string> {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("MetaMask is not installed");
  }
  try {
    const balance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    });
    return balance;
  } catch (error) {
    throw new Error("Failed to get balance");
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

export async function signMessage(
  message: string,
  address: string,
): Promise<string> {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("MetaMask is not installed");
  }
  try {
    const signature = await window.ethereum.request({
      method: "personal_sign",
      params: [message, address],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    });
    return signature;
  } catch (error) {
    throw new Error("Failed to sign message");
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

// Extend Window interface for TypeScript;

=======
// Extend Window interface for TypeScript
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

// Extend Window interface for TypeScript;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise < any>;
      on: (event: string, callback: (accounts: string[]) => void) => void;
      removeListener: (
        event: string,
        callback: (accounts: string[]) => void,
      ) => void;
    };
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
    }

    };

  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  }
}
