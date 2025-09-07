export type WatchlistMatch = {;
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
  score: number; // 0-1 match confidence
  referenceId?: string;
  detailsUrl?: string;

  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';

}

export type WatchlistMatch = {;
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
  score: number; // 0-1 match confidence
  referenceId?: string;
  detailsUrl?: string;

  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';

}
class MockAmlProvider implements AmlProvider {
  async checkPerson(params: { fullLegalName: string; country: string, dob?: string }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
    const name = params.fullLegalName.toLowerCase();
    if (name.includes('test') |name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test name detected' } }

  status: 'clear' | 'match' | 'review' | 'unknown';
  matches: WatchlistMatch[];
  checked_at: string; // ISO;
  provider: 'mock' | 'remote';

  checkPerson(params: { fullLegalName: string; country: string, dob?: string }): Promise<AmlResult>;
  checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult>;

  status: "clear" | "match" | "review" | "unknown";

};

export type AmlCheckResult = {;

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  status: 'clear' | 'match' | 'review' | 'unknown';

}
export interface AmlProvider {
  check_person (params: { fullLegalName: string; country: string, dob?: string }): Promise < AmlResult>;
  check_business (params: { business_name: string, country: string }): Promise < AmlResult>;
}

    const name = params && params.fullLegalName.toLowerCase();
    if (name && name.includes('test') || name && name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test name detected' } };

    const name = params && params.businessName.toLowerCase();
    if (name && name.includes('test') || name && name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test business name detected' } };

    }

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

export function getAmlProvider(): AmlProvider {
  return provider;
  return new MockAmlProvider();

main
}

export function getAmlProvider(): AmlProvider {;
  return new MockAmlProvider();

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
interface AmlMatch {
  // TODO: Implement
}
  list: string;,
  name: string;
  score: number;

interface AmlResult {
  // TODO: Implement
  status: 'review' | 'clear';',
  matches: AmlMatch[];
  checkedAt: string;,
  provider: string;

interface AmlProvider {
  // TODO: Implement
  checkBusiness(businessName: string): Promise<AmlResult>;

  async checkBusiness(businessName: string): Promise<AmlResult> {

  }): Promise<AmlResult>;

  check_person (params: { fullLegalName: string; country: string, dob?: string }): Promise < AmlResult>;
  check_business (params: { business_name: string, country: string }): Promise < AmlResult>;
class MockAmlProvider implements AmlProvider {
  // TODO: Implement
  async checkPerson(params: {,
  fullLegalName: string;
    country: string;
    dob?: string;)
  }): Promise<AmlResult> {

  private profiles: Map<string, AmlProfile> = new Map();
</string>
  private checks: Map<string, AmlCheck> = new Map();
  async createProfile(userId: string, fullName: string, additionalData?: Partial<AmlProfile>): Promise<AmlProfile> {

  async getProfile(userId: string): Promise<AmlProfile | null> {

  async updateProfile(userId: string, updates: Partial<AmlProfile>): Promise<AmlProfile | null> {

  async runAmlCheck(userId: string, checkType: AmlCheck['checkType']): Promise<AmlCheck> {

  async checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult> {

): Omit<AmlCheck, 'id' | 'createdAt' | 'expiresAt'> {

  return new Date(check.expiresAt) < new Date();
export function getRiskLevelColor(riskLevel: AmlProfile['riskLevel']): string {
  // TODO: Implement
pr-12325
  const colors = {
    low: 'green',
    medium: 'yellow',
    high: 'orange',
    critical: 'red'
  };
  return colors[riskLevel];
}
    critical: 'red
  };
  return colors[riskLevel];
pr-12325
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

    }
    return { status: 'clear' }
  }

export function getAmlProvider (): AmlProvider {
  return new MockAmlProvider ();
}

origin/cursor/expand-services-advertise-and-build-project-c28b

}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

export function getAmlProvider(): AmlProvider {
  return provider;
origin/cursor/automate-test-improve-and-merge-code-2533

}
export function getAmlProvider (): AmlProvider {
  return new MockAmlProvider ();
}