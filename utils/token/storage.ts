<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5




export interface TokenConfig {
<<<<<<< HEAD
  token_name: string;
  token_symbol: string;
=======
=======
<<<<<<< HEAD
export interface TokenConfig {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  tokenName: string;
  tokenSymbol: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  decimals: number;
  total_supply: number;
  issue_rate: number;
  redeem_rate: number;
  minIssueAmount: number;
  maxIssueAmount: number;
}

const DATA_DIR = path && path.join(process && process.cwd(), 'data');
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json');


=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

  }
export interface TokenStoreData {
=======
<<<<<<< HEAD
  }
export interface TokenStoreData {
=======
  };

export interface TokenStoreData {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();

=======
  set_config (new_config: Partial < TokenConfig>): void {
    this.config = { ...this.config, ...new_config }
  }
}
<<<<<<< HEAD
export const token_store = new TokenStore ();
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export const tokenStore = new TokenStore();
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
