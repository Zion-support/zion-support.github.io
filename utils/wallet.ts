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
