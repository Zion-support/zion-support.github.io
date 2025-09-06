<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type WatchlistMatch = {
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export type WatchlistMatch = {;
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
  score: number; // 0-1 match confidence
  referenceId?: string;
  detailsUrl?: string;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface AmlMatch {
  list: string;
  name: string;
  score: number;
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
<<<<<<< HEAD

interface AmlProvider {
  checkBusiness(businessName: string): Promise<AmlResult>;
}

class MockAmlProvider implements AmlProvider {
  async checkBusiness(businessName: string): Promise<AmlResult> {
    const isSanction = businessName.toLowerCase().includes('sanction');
    return {
      status: isSanction ? 'review' : 'clear',
      matches: isSanction ? [{
        list: 'Sanctions',
        name: businessName,
        score: 0.8
      }] : [],
      checkedAt: new Date().toISOString(),
      provider: 'mock'
    };
  }
}

let provider: AmlProvider = new MockAmlProvider();

export type { AmlProvider, AmlResult, AmlMatch };
export { provider };export type WatchlistMatch = {
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
<<<<<<< HEAD
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export type WatchlistMatch = {;
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
  score: number; // 0-1 match confidence
  referenceId?: string;
  detailsUrl?: string;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/expand-services-advertise-and-build-project-c28b



  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';

main
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
interface AmlMatch {
  list: string;
  name: string;
  score: number;
}

interface AmlResult {
  status: 'review' | 'clear';
  matches: AmlMatch[];
  checkedAt: string;
  provider: string;
}

interface AmlProvider {
  checkBusiness(businessName: string): Promise<AmlResult>;
}

class MockAmlProvider implements AmlProvider {
  async checkBusiness(businessName: string): Promise<AmlResult> {
    const isSanction = businessName.toLowerCase().includes('sanction');
    return {
      status: isSanction ? 'review' : 'clear',
      matches: isSanction ? [{
        list: 'Sanctions',
        name: businessName,
        score: 0.8
      }] : [],
      checkedAt: new Date().toISOString(),
      provider: 'mock'
    };
  }
}

let provider: AmlProvider = new MockAmlProvider();

export type { AmlProvider, AmlResult, AmlMatch };
export { provider };
export type WatchlistMatch = {
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";


  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  name: string;

  score: number; // 0 - 1 match confidence;
  reference_id?: string;
  details_url?: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
class MockAmlProvider implements AmlProvider {
  async checkPerson(params: { fullLegalName: string; country: string, dob?: string }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
    const name = params.fullLegalName.toLowerCase();
    if (name.includes('test') |name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test name detected' } }

=======
export type AmlCheckResult = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};

export type AmlCheckResult = {;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export type WatchlistMatch = {
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
export type AmlCheckResult = {
=======
=======

};

export type AmlCheckResult = {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  status: 'clear' | 'match' | 'review' | 'unknown';
  matches: WatchlistMatch[];
  checked_at: string; // ISO;
  provider: 'mock' | 'remote';
<<<<<<< HEAD
}
export interface AmlProvider {
};
export interface AmlProvider {;
=======


};
export interface AmlProvider {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  checkPerson(params: { fullLegalName: string; country: string, dob?: string }): Promise<AmlResult>;
  checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult>;

=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  status: "clear" | "match" | "review" | "unknown";
=======
<<<<<<< HEAD
  status: "clear" | "match" | "review" | "unknown";
=======
<<<<<<< HEAD
};

export type AmlCheckResult = {;
export type WatchlistMatch = {
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
export type AmlCheckResult = {
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

};

export type AmlCheckResult = {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  status: 'clear' | 'match' | 'review' | 'unknown';
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
=======
  status: "clear" | "match" | "review" | "unknown";  status: 'clear' | 'match' | 'review' | 'unknown';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

main
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
  status: "clear" | "match" | "review" | "unknown";
  status: "clear" | "match" | "review" | "unknown";
};

export type AmlCheckResult = {;
export type WatchlistMatch = {
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
export type AmlCheckResult = {
  status: 'clear' | 'match' | 'review' | 'unknown';
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  matches: WatchlistMatch[];
  checkedAt: string; // ISO
  provider: "mock" | "remote"
};
export interface AmlProvider {
  checkPerson(params: {
    fullLegalName: string;
    country: string;
    dob?: string;
  }): Promise<AmlResult>;
  checkBusiness(params: {
    businessName: string;
    country: string;
  }): Promise<AmlResult>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
export interface AmlProvider {
  check_person (params: { fullLegalName: string; country: string, dob?: string }): Promise < AmlResult>;
  check_business (params: { business_name: string, country: string }): Promise < AmlResult>;
}
<<<<<<< HEAD
class MockAmlProvider implements AmlProvider {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    const name = params && params.fullLegalName.toLowerCase();
    if (name && name.includes('test') || name && name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test name detected' } };

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
  async checkPerson(params: {
    fullLegalName: string;
    country: string;
    dob?: string;
  }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
    const name = params.fullLegalName.toLowerCase();
    if (name.includes("test") || name.includes("demo")) {
      return { status: "match", details: { reason: "Test name detected" } };
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
    return { status: 'clear' }
  }
  async checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
    const name = params && params.businessName.toLowerCase();
    if (name && name.includes('test') || name && name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test business name detected' } };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  async checkPerson(params: {
    fullLegalName: string;
    country: string;
    dob?: string;
  }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
    const name = params.fullLegalName.toLowerCase();
    if (name.includes("test") || name.includes("demo")) {
      return { status: "match", details: { reason: "Test name detected" } };
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
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
=======

    const name = params && params.fullLegalName.toLowerCase();
    if (name && name.includes('test') || name && name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test name detected' } };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    }
    return { status: 'clear' }
  }
  async checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    const name = params && params.businessName.toLowerCase();
    if (name && name.includes('test') || name && name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test business name detected' } };

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

main

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }
=======
class MockAmlProvider implements AmlProvider {    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    return { status: "clear" };
  }

  async checkBusiness(params: {
    businessName: string;
    country: string;
  }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
    const name = params.businessName.toLowerCase();
    if (name.includes("test") || name.includes("demo")) {
      return {
        status: "match",
        details: { reason: "Test business name detected" },
      };
    }
    return { status: "clear" };
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
export function getAmlProvider(): AmlProvider {
  return provider;
  return new MockAmlProvider();
=======}

export function getAmlProvider(): AmlProvider {;
  return new MockAmlProvider();
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======

export function getAmlProvider(): AmlProvider {
  return provider;
  return new MockAmlProvider();
}

export function getAmlProvider(): AmlProvider {;
  return new MockAmlProvider();
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31





// Singleton instance
export const amlManager = new AmlManager();
// Utility functions
export function createAmlCheck(
  userId: string,
  checkType: AmlCheck['checkType']
): Omit<AmlCheck, 'id' | 'createdAt' | 'expiresAt'> {
  return {
    userId,
    checkType,
    status: 'pending',
    result: 'clear',
    confidence: 0,
    details: {}
  };
}
export function generateAmlCheckId(): string {
  return `aml_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function isAmlCheckExpired(check: AmlCheck): boolean {
  return new Date(check.expiresAt) < new Date();
}
export function getRiskLevelColor(riskLevel: AmlProfile['riskLevel']): string {
  const colors = {
    low: 'green',
    medium: 'yellow',
    high: 'orange',
    critical: 'red'
  };
  return colors[riskLevel];
}
  async check_person (params: { fullLegalName: string; country: string, dob?: string }): Promise < AmlResult> {
    // Mock implementation - in production, this would call a real AML service;
    const name = params.fullLegalName.toLowerCase ();
    if (|| name.includes ('demo')) {) {
  $2
}
      return { status: 'match', details: { reason: 'Test name detected' } }
    }
    return { status: 'clear' }
  }
  async check_business (params: { business_name: string, country: string }): Promise < AmlResult> {
    // Mock implementation - in production, this would call a real AML service;
    const name = params.business_name.toLowerCase ();
    if (|| name.includes ('demo')) {) {
  $2
}
      return { status: 'match', details: { reason: 'Test business name detected' } }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    return { status: 'clear' }
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function getAmlProvider (): AmlProvider {
  return new MockAmlProvider ();
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======}
export function getAmlProvider (): AmlProvider {
  return new MockAmlProvider ();
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
export function getAmlProvider(): AmlProvider {
  return provider;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/cursor/expand-services-advertise-and-build-project-c28b

}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b


export function getAmlProvider(): AmlProvider {
  return provider;
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
export function getAmlProvider (): AmlProvider {};
  return new MockAmlProvider ();
}




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
}
export function getAmlProvider (): AmlProvider {
  return new MockAmlProvider ();
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
