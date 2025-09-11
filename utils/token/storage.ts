




export interface TokenConfig {
  token_name: string;
  token_symbol: string;
<<<<<<< HEAD
export interface TokenConfig {
export interface TokenConfig {;
  tokenName: string;
  tokenSymbol: string;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  decimals: number;
  totalSupply: number;
  issueRate: number;
  redeemRate: number;
  minIssueAmount: number;
  maxIssueAmount: number;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const DATA_DIR = path && path.join(process && process.cwd(), 'data');
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json');


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class TokenStore {
  private config: TokenConfig = {
    token_name: 'ZION$',
    token_symbol: 'ZION',
    decimals: 18,
    total_supply: 1000000000,
    issue_rate: 1.0,
    redeem_rate: 1.0,
    minIssueAmount: 1,
    maxIssueAmount: 10000;
  }
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
export interface TokenStoreData {
  }
export interface TokenStoreData {
  };

export interface TokenStoreData {;
=======
  };

export interface TokenStoreData {;
=======

  }
export interface TokenStoreData {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  set_config (new_config: Partial < TokenConfig>): void {
    this.config = { ...this.config, ...new_config }
  }
}
export const token_store = new TokenStore ();
;
<<<<<<< HEAD


    if (!fs.existsSync(STORE_FILE)) return null;
    const raw = fs.readFileSync(STORE_FILE, "utf8");
    const parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;
  } catch {;
    return null;
=======

=======
  set_config (new_config: Partial < TokenConfig>): void {
    this.config = { ...this.config, ...new_config }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
export const token_store = new TokenStore ();
;
<<<<<<< HEAD
function writeToDisk(data: TokenStoreData): void {;
  try {;
    ensureDataDir();
    fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch {}
}
;
class InMemoryTokenStore {;
  private data: TokenStoreData;
  constructor() {;
    const fromDisk = readFromDisk();
    this.data =;
      fromDisk ?? {;
        wallets: {};
        transactions: [];
        config: DEFAULT_TOKEN_CONFIG}
  }
;
  getData(): TokenStoreData {;
    return this.data;
  }
;
  save(): void {;
    writeToDisk(this.data);
  }
}
export const tokenStore = new TokenStore();

}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
