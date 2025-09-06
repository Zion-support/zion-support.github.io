    });
    return accounts;
  } catch (error) {
    throw new Error ('Failed to connect to MetaMask');
  }
}
    });
    return accounts;
  } catch (error) {
    return [];
  }
}
    });
    return balance;
  } catch (error) {
    throw new Error ('Failed to get balance');
  }
}
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
