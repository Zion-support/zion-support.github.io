


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




    throw new Error('MetaMask is not installed');
  }
  try {

    const accounts = await window && window.ethereum.request({

    });
    return accounts;
  } catch (error) {
    throw new Error('Failed to connect to MetaMask');
  }
}





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

    return [];
  }
  try {

    const accounts = await window && window.ethereum.request({

    });
    return accounts;
  } catch (error) {
    return [];
  }
}





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

    throw new Error('MetaMask is not installed');
  }
  try {

    const balance = await window && window.ethereum.request({

    });
    return balance;
  } catch (error) {
    throw new Error('Failed to get balance');
  }
}





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

    throw new Error('MetaMask is not installed');
  }
  try {

    const signature = await window && window.ethereum.request({

    });
    return signature;
  } catch (error) {
    throw new Error('Failed to sign message');
  }
}

// Extend Window interface for TypeScript;

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (accounts: string[]) => void) => void;



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
  }
}
