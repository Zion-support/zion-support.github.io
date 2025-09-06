export type WatchlistMatch = {
export type WatchlistMatch = {;
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
  score: number; // 0-1 match confidence
  referenceId?: string;
  detailsUrl?: string;


  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;

  score: number; // 0 - 1 match confidence;
  reference_id?: string;
  details_url?: string;
}
;

export type AmlCheckResult = {
};

export type AmlCheckResult = {;
export type WatchlistMatch = {
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
export type AmlCheckResult = {
  status: 'clear' | 'match' | 'review' | 'unknown';
  matches: WatchlistMatch[];
  checked_at: string; // ISO;
  provider: 'mock' | 'remote';


};
export interface AmlProvider {;

  checkPerson(params: { fullLegalName: string; country: string, dob?: string }): Promise<AmlResult>;
  checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult>;

}
export interface AmlProvider {
  check_person (params: { fullLegalName: string; country: string, dob?: string }): Promise < AmlResult>;
  check_business (params: { business_name: string, country: string }): Promise < AmlResult>;
}
class MockAmlProvider implements AmlProvider {
// AML (Anti-Money Laundering) utilities
export interface AmlCheck {
  id: string;
  userId: string;
  checkType: 'sanctions' | 'pep' | 'adverse_media' | 'watchlist';
  status: 'pending' | 'completed' | 'failed' | 'error';
  result: 'clear' | 'hit' | 'error';
  confidence: number; // 0-100
  details: {
    matchedNames?: string[];
    matchedCountries?: string[];
    riskLevel?: 'low' | 'medium' | 'high' | 'critical';
    sources?: string[];
    notes?: string;
  };
  createdAt: string;
  completedAt?: string;
  expiresAt: string;
}

export interface AmlProfile {
  userId: string;
  fullName: string;
  dateOfBirth?: string;
  nationality?: string;
  countryOfResidence?: string;
  businessName?: string;
  businessType?: string;
  businessCountry?: string;
  riskScore: number; // 0-100
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  status: 'active' | 'suspended' | 'blocked';
  lastChecked: string;
  checks: AmlCheck[];
  flags: string[];
  notes?: string;
}

export interface AmlConfig {
  enabled: boolean;
  providers: {
    sanctions: boolean;
    pep: boolean;
    adverseMedia: boolean;
    watchlist: boolean;
  };
  thresholds: {
    low: number;
    medium: number;
    high: number;
    critical: number;
  };
  autoBlock: boolean;
  autoBlockThreshold: number;
  checkInterval: number; // days
  retentionPeriod: number; // days
}

class AmlManager {
  private profiles: Map<string, AmlProfile> = new Map();
  private checks: Map<string, AmlCheck> = new Map();
  private config: AmlConfig;

  constructor() {
    this.config = {
      enabled: true,
      providers: {
        sanctions: true,
        pep: true,
        adverseMedia: true,
        watchlist: true
      },
      thresholds: {
        low: 25,
        medium: 50,
        high: 75,
        critical: 90
      },
      autoBlock: false,
      autoBlockThreshold: 90,
      checkInterval: 30,
      retentionPeriod: 365
    };
  }

  // Profile methods
  async createProfile(userId: string, fullName: string, additionalData?: Partial<AmlProfile>): Promise<AmlProfile> {
    const profile: AmlProfile = {
      userId,
      fullName,
      riskScore: 0,
      riskLevel: 'low',
      status: 'active',
      lastChecked: new Date().toISOString(),
      checks: [],
      flags: [],
      ...additionalData
    };

    this.profiles.set(userId, profile);
    return profile;
  }

  async getProfile(userId: string): Promise<AmlProfile | null> {
    return this.profiles.get(userId) || null;
  }

  async updateProfile(userId: string, updates: Partial<AmlProfile>): Promise<AmlProfile | null> {
    const profile = this.profiles.get(userId);
    if (!profile) return null;

    const updatedProfile = { ...profile, ...updates };
    this.profiles.set(userId, updatedProfile);
    return updatedProfile;
  }

  // Check methods
  async runAmlCheck(userId: string, checkType: AmlCheck['checkType']): Promise<AmlCheck> {
    const profile = this.profiles.get(userId);
    if (!profile) {
      throw new Error('Profile not found');
    }
    return { status: 'clear' }
  }
  async checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
    }
    return { status: 'clear' }
  }
}
}

export function getAmlProvider(): AmlProvider {;
  return new MockAmlProvider();
}
export function getAmlProvider (): AmlProvider {
  return new MockAmlProvider ();
}
