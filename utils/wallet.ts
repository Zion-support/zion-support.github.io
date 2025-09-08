  if (typeof window === 'undefined' || !window && window.ethereum) {
    });
    return accounts;
  } catch (error) {
    throw new Error("Failed to connect to MetaMask");
  }
}

  if (typeof window === 'undefined' || !window && window.ethereum) {

  }
  try {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",    });
    return accounts;
  } catch (error) {
    return [];
  }
}
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("MetaMask is not installed");
  }
  try {
    const balance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
=======
  if (typeof window === 'undefined' || !window && window.ethereum) {

    });
    return balance;
  } catch (error) {
    throw new Error("Failed to get balance");
  }
}
  message: string,
  address: string,
): Promise<string> {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("MetaMask is not installed");
  }
  try {
    const signature = await window.ethereum.request({
      method: "personal_sign",
=======
  if (typeof window === 'undefined' || !window && window.ethereum) {

    });
    return signature;
  } catch (error) {
    throw new Error("Failed to sign message");
  }
}

// Extend Window interface for TypeScript;

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise < any>;
      on: (event: string, callback: (accounts: string[]) => void) => void;
    }      removeListener: (
        event: string,
        callback: (accounts: string[]) => void,
      ) => void;
=======
      remove_listener: (event: string, callback: (accounts: string[]) => void) => void;

    }
      removeListener: (event: string, callback: (accounts: string[]) => void) => void
};

    }

    };

  }
}
  }
}
