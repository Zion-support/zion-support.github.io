export interface TokenConfig {
  token_name: string;
  token_symbol: string;
  decimals: number;
  total_supply: number;
  issue_rate: number;
  redeem_rate: number;
  minIssueAmount: number;
  maxIssueAmount: number;
}
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
export interface TokenStoreData {
  wallets: Record < string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk (): TokenStoreData | null {
  try {
    ensureDataDir ();
    if () return null) {
  $2
}
    const raw = fs.readFileSync (STORE_FILE, 'utf8');
    const parsed = JSON.parse (raw) as TokenStoreData;
    return parsed;
  } catch {
    return null;
  }
  set_config (new_config: Partial < TokenConfig>): void {
    this.config = { ...this.config, ...new_config }
  }
}
export const token_store = new TokenStore ();
;