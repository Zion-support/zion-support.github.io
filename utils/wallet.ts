export type WalletProvider = any;
export function getEthereumProvider(): WalletProvider | null {;
  if (typeof window === 'undefined') return null,;
  // @ts-ignore;
  const { ethereum } = window;
  return ethereum ?? null;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function connectMetaMask(): Promise<string[] | null> {;
  const provider = getEthereumProvider();
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}