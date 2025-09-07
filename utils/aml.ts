<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
interface AmlMatch  {list: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
interface AmlMatch {
  list: string;
  name: string;
  score: number;
}interface AmlResult  {status: 'review' | 'clear';
  matches: AmlMatch[];
  checkedAt: string;
  provider: string;
}interface AmlProvider  {checkBusiness(businessName: string): Promise<AmlResult>;
}class MockAmlProvider implements AmlProvider {async checkBusiness(businessName: string): Promise<AmlResult> {const isSanction = businessName.toLowerCase().includes('sanction')return {status: isSanction ? 'review' : 'clear',matches: isSanction ? [{list: 'Sanctions',name: businessName,score: 0.8;
      }] : [],checkedAt: new Date().toISOString(),provider: 'mock';
    }}
}let provider: AmlProvider  = new MockAmlProvider()export type { AmlProvider, AmlResult, AmlMatch }export { provider }export type WatchlistMatch = {list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
export type WatchlistMatch = {export type WatchlistMatch = {list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
export type WatchlistMatch = {list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
  score: number; // 0-1 match confidence;
  referenceId?: string;
  detailsUrl?: string;list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';name: string;score: number; // 0 - 1 match confidence;
  reference_id?: string;
  details_url?: string;
}export type AmlCheckResult = {status: "clear" | "match" | "review" | "unknown";
  status: "clear" | "match" | "review" | "unknown";
}export type AmlCheckResult = {export type WatchlistMatch = {list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
export type AmlCheckResult = {}export type AmlCheckResult = {ursor/fix-website-loading-errors-and-merge-6662;
  status: 'clear' | 'match' | 'review' | 'unknown';status: 'clear' | 'match' | 'review' | 'unknown';
  status: "clear" | "match" | "review" | "unknown";
  status: "clear" | "match" | "review" | "unknown";
}export type AmlCheckResult = {export type WatchlistMatch = {list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
export type AmlCheckResult = {}export type AmlCheckResult = {ursor/fix-website-loading-errors-and-merge-6662;
  status: 'clear' | 'match' | 'review' | 'unknown';matches: WatchlistMatch[];
  checkedAt: string; // ISO;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
export type WatchlistMatch = {
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export type WatchlistMatch = {;
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
  score: number; // 0-1 match confidence
  referenceId?: string;
  detailsUrl?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
export type WatchlistMatch = {
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c


  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
=======
origin/cursor/expand-services-advertise-and-build-project-c28b



  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  name: string;

  score: number; // 0 - 1 match confidence;
  reference_id?: string;
  details_url?: string;
}
;

export type AmlCheckResult = {
<<<<<<< HEAD
  status: "clear" | "match" | "review" | "unknown";
  status: "clear" | "match" | "review" | "unknown";
};

export type AmlCheckResult = {
export type WatchlistMatch = {
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
export type AmlCheckResult = {
  status: 'clear' | 'match' | 'review' | 'unknown';
=======

};

export type AmlCheckResult = {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  status: 'clear' | 'match' | 'review' | 'unknown';

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  matches: WatchlistMatch[];
  checkedAt: string; // ISO
  provider: "mock" | "remote";
}export interface AmlProvider  {checkPerson(params: {fullLegalName: string;
    country: string;
    dob?: string;
  }): Promise<AmlResult>;
  checkBusiness(params: {businessName: string;
    country: string;
  }): Promise<AmlResult>;
}
export interface AmlProvider  {check_person (params: { fullLegalName: string; country: string, dob?: string }): Promise < AmlResult>;
  check_business (params: { business_name: string, country: string }): Promise < AmlResult>;
}
class MockAmlProvider implements AmlProvider {async checkPerson(params: {fullLegalName: string;
    country: string;
    dob?: string;
  }): Promise<AmlResult> {// Mock implementation - in production, this would call a real AML service;
    const name = params.fullLegalName.toLowerCase()if (name.includes("test") || name.includes("demo")) {return { status: "match", details: { reason: "Test name detected" } }// AML (Anti-Money Laundering) utilities;
export interface AmlCheck  {id: string;
class MockAmlProvider implements AmlProvider {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
// AML (Anti-Money Laundering) utilities
export interface AmlCheck {
  id: string;
  userId: string;
  checkType: 'sanctions' | 'pep' | 'adverse_media' | 'watchlist';
  status: 'pending' | 'completed' | 'failed' | 'error';
  result: 'clear' | 'hit' | 'error';
  confidence: number; // 0-100;
  details: {matchedNames?: string[];
    matchedCountries?: string[];
    riskLevel?: 'low' | 'medium' | 'high' | 'critical';
    sources?: string[];
    notes?: string;
  }createdAt: string;
  completedAt?: string;
  expiresAt: string;
}export interface AmlProfile  {userId: string;
  fullName: string;
  dateOfBirth?: string;
  nationality?: string;
  countryOfResidence?: string;
  businessName?: string;
  businessType?: string;
  businessCountry?: string;
  riskScore: number; // 0-100;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  status: 'active' | 'suspended' | 'blocked';
  lastChecked: string;
  checks: AmlCheck[];
  flags: string[];
  notes?: string;
}export interface AmlConfig  {enabled: boolean;
  providers: {sanctions: boolean;
    pep: boolean;
    adverseMedia: boolean;
    watchlist: boolean;
  }thresholds: {low: number;
    medium: number;
    high: number;
    critical: number;
  }autoBlock: boolean;
  autoBlockThreshold: number;
  checkInterval: number; // days;
  retentionPeriod: number; // days;
}class AmlManager {private profiles: Map<string, AmlProfile> = new Map()private checks: Map<string, AmlCheck> = new Map()private config: AmlConfig;constructor() {this.config = {enabled: true,providers: {sanctions: true,pep: true,adverseMedia: true,watchlist: true;
      },thresholds: {low: 25,medium: 50,high: 75,critical: 90;
      },autoBlock: false,autoBlockThreshold: 90,checkInterval: 30,retentionPeriod: 365;
    }}// Profile methods;
  async createProfile(userId: string, fullName: string, additionalData?: Partial<AmlProfile>): Promise<AmlProfile> {const profile: AmlProfile = {userId,fullName,riskScore: 0,riskLevel: 'low',status: 'active',lastChecked: new Date().toISOString(),checks: [],flags: [],...additionalData;
    }this.profiles.set(userId, profile)return profile;
  }async getProfile(userId: string): Promise<AmlProfile | null> {return this.profiles.get(userId) || null;
  }async updateProfile(userId: string, updates: Partial<AmlProfile>): Promise<AmlProfile | null> {const profile = this.profiles.get(userId)if (!profile) return null;const updatedProfile = { ...profile, ...updates }this.profiles.set(userId, updatedProfile)return updatedProfile;
  }// Check methods;
  async runAmlCheck(userId: string, checkType: AmlCheck['checkType']): Promise<AmlCheck> {const profile = this.profiles.get(userId)if (!profile) {throw new Error('Profile not found')const name = params && params.fullLegalName.toLowerCase()if (name && name.includes('test') || name && name.includes('demo')) {return { status: 'match', details: { reason: 'Test name detected' } }}
    return { status: 'clear' }
  }
  async checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult> {// Mock implementation - in production, this would call a real AML service;
    const name = params && params.businessName.toLowerCase()if (name && name.includes('test') || name && name.includes('demo')) {return { status: 'match', details: { reason: 'Test business name detected' } }}
    return { status: "clear" }}async checkBusiness(params: {businessName: string;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

    const name = params && params.fullLegalName.toLowerCase();
    if (name && name.includes('test') || name && name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test name detected' } };

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    }
    return { status: 'clear' }
  }
  async checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

    const name = params && params.businessName.toLowerCase();
    if (name && name.includes('test') || name && name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test business name detected' } };

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    }
    return { status: "clear" };
  }

  async checkBusiness(params: {
    businessName: string;
    country: string;
  }): Promise<AmlResult> {// Mock implementation - in production, this would call a real AML service;
    const name = params.businessName.toLowerCase()if (name.includes("test") || name.includes("demo")) {return {status: "match",details: { reason: "Test business name detected" }
        details: { reason: "Test business name detected" }
        details: { reason: "Test business name detected" }
      }}
    return { status: "clear" }}
}export function getAmlProvider(): AmlProvider {return provider;
  return new MockAmlProvider()}export function getAmlProvider(): AmlProvider {return new MockAmlProvider()ursor/automate-test-improve-and-merge-code-646c;
// Singleton instance;
export const amlManager = new AmlManager()// Utility functions;
export function createAmlCheck(userId: string,checkType: AmlCheck['checkType'];
): Omit<AmlCheck, 'id' | 'createdAt' | 'expiresAt'> {return {userId,checkType,status: 'pending',result: 'clear',confidence: 0,details: {}
  }}
export function generateAmlCheckId(): string {return `aml_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
export function isAmlCheckExpired(check: AmlCheck): boolean {return new Date(check.expiresAt) < new Date()}
export function getRiskLevelColor(riskLevel: AmlProfile['riskLevel']): string {const colors = {low: 'green',medium: 'yellow',high: 'orange',critical: 'red';
  }return colors[riskLevel];
}
  async check_person (params: { fullLegalName: string; country: string, dob?: string }): Promise < AmlResult> {// Mock implementation - in production, this would call a real AML service;
    const name = params.fullLegalName.toLowerCase ()if (|| name.includes ('demo')) {) {$2;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

export function getAmlProvider(): AmlProvider {
  return provider;
  return new MockAmlProvider();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}

export function getAmlProvider(): AmlProvider {;
  return new MockAmlProvider();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c





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
  async check_business (params: { business_name: string, country: string }): Promise < AmlResult> {// Mock implementation - in production, this would call a real AML service;
    const name = params.business_name.toLowerCase ()if (|| name.includes ('demo')) {) {$2;
}
      return { status: 'match', details: { reason: 'Test business name detected' } }
    }
    return { status: 'clear' }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}
export function getAmlProvider (): AmlProvider {return new MockAmlProvider ()}}
export function getAmlProvider (): AmlProvider {return new MockAmlProvider ()}export function getAmlProvider(): AmlProvider {return provider;
export function getAmlProvider (): AmlProvider {
  return new MockAmlProvider ();
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
export function getAmlProvider(): AmlProvider {
  return provider;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b


export function getAmlProvider(): AmlProvider {
  return provider;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
