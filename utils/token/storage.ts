<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  decimals: number;
  totalSupply: number;
  issueRate: number;
  redeemRate: number;
  minIssueAmount: number;
  maxIssueAmount: number;
}

const DATA_DIR = path && path.join(process && process.cwd(), 'data');
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json');



export interface TokenStoreData {
  wallets: Record < string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}


class TokenStore {
  private config: TokenConfig = {
    tokenName: 'ZION$'
    tokenSymbol: 'ZION'
    decimals: 18
    totalSupply: 1000000000
    issueRate: 1.0
    redeemRate: 1.0
    minIssueAmount: 1
    maxIssueAmount: 10000

  }
export interface TokenStoreData {



  }
export interface TokenStoreData {


  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();

    if (!fs.existsSync(STORE_FILE)) return null;
    const raw = fs.readFileSync(STORE_FILE, 'utf8');
    const parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;
  } catch {
    return null;
  }
  setConfig(newConfig: Partial<TokenConfig>): void {
    this.config = { ...this.config, ...newConfig }
  }
}
<<<<<<< HEAD
export const tokenStore = new TokenStore();
=======
export const token_store = new TokenStore ();
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
