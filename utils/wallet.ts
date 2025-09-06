    throw new Error('MetaMask is not installed');
  }
  try {
      method: 'eth_requestAccounts',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    return accounts;
  } catch (error) {
    throw new Error ('Failed to connect to MetaMask');
  }
}
    return [];
  }
  try {
      method: 'eth_accounts',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    return accounts;
  } catch (error) {
    return [];
  }
}
    throw new Error('MetaMask is not installed');
  }
  try {
      method: 'eth_getBalance',
      params: [address, 'latest'],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    return balance;
  } catch (error) {
    throw new Error ('Failed to get balance');
  }
}
    throw new Error('MetaMask is not installed');
  }
  try {
      method: 'personal_sign',
      params: [message, address],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    return signature;
  } catch (error) {
    throw new Error ('Failed to sign message');
  }
}
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise < any>;
      on: (event: string, callback: (accounts: string[]) => void) => void;
    }
  }
}
