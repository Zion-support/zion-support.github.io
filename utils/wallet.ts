    throw new Error('MetaMask is not installed');
  }
  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
      method: 'eth_requestAccounts',
    });
    return accounts;
  } catch (error) {
    throw new Error ('Failed to connect to MetaMask');
  }
}
    return [];
  }
  try {
    const accounts = await window.ethereum.request({
      method: 'eth_accounts'
      method: 'eth_accounts',
    });
    return accounts;
  } catch (error) {
    return [];
  }
}
    throw new Error('MetaMask is not installed');
  }
  try {
    const balance = await window.ethereum.request({
      method: 'eth_getBalance'
      params: [address, 'latest']
      method: 'eth_getBalance',
      params: [address, 'latest'],
    });
    return balance;
  } catch (error) {
    throw new Error ('Failed to get balance');
  }
}
    throw new Error('MetaMask is not installed');
  }
  try {
    const signature = await window.ethereum.request({
      method: 'personal_sign'
      params: [message, address]
      method: 'personal_sign',
      params: [message, address],
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
      removeListener: (event: string, callback: (accounts: string[]) => void) => void;



    };

  }
}
