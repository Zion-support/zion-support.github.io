<<<<<<< HEAD
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
=======
interface AmlMatch  {list: string;
interface AmlMatch {
  list: string;
>>>>>>> origin/merge-pr-12271
  name: string;
  score: number; // 0-1 match confidence
  referenceId?: string;
  detailsUrl?: string;





  status: 'clear' | 'match' | 'review' | 'unknown';
  matches: WatchlistMatch[];
  checked_at: string; // ISO;
  provider: 'mock' | 'remote';

}
export interface AmlProvider {
};
export interface AmlProvider {;

  checkPerson(params: { fullLegalName: string; country: string, dob?: string }): Promise<AmlResult>;
  checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult>;

}
class MockAmlProvider implements AmlProvider {

    const name = params && params.fullLegalName.toLowerCase();
    if (name && name.includes('test') || name && name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test name detected' } };

    }
    return { status: 'clear' }
  }
  async checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service

    const name = params && params.businessName.toLowerCase();
    if (name && name.includes('test') || name && name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test business name detected' } };

    }
    return { status: 'clear' }
  }
<<<<<<< HEAD
=======

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
export function isAmlCheckExpired(check: AmlCheck): boolean {return new Date(check.expiresAt) < new Date()}
export function getRiskLevelColor(riskLevel: AmlProfile['riskLevel']): string {const colors = {low: 'green',medium: 'yellow',high: 'orange',critical: 'red';
  }return colors[riskLevel];
}
  async check_person (params: { fullLegalName: string; country: string, dob?: string }): Promise < AmlResult> {// Mock implementation - in production, this would call a real AML service;
    const name = params.fullLegalName.toLowerCase ()if (|| name.includes ('demo')) {) {$2;

export function getAmlProvider(): AmlProvider {
  return provider;
  return new MockAmlProvider();
>>>>>>> origin/merge-pr-12271
}








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
    }
    return { status: 'clear' }
  }
}

export function getAmlProvider(): AmlProvider {
  return new MockAmlProvider();
}


export function getAmlProvider (): AmlProvider {
  return new MockAmlProvider ();
}






=======
};

export type AmlCheckResult = {
  status: 'clear' | 'match' | 'review' | 'unknown';
  matches: WatchlistMatch[];
  checkedAt: string; // ISO
  provider: 'mock' | 'remote';
};

export interface AmlProvider {
  checkPerson(input: { fullLegalName: string; country?: string; dob?: string }): Promise<AmlCheckResult>;
  checkBusiness(input: { businessName: string; country?: string; registrationNumber?: string }): Promise<AmlCheckResult>;
}

class MockAmlProvider implements AmlProvider {
  async checkPerson({ fullLegalName }: { fullLegalName: string }): Promise<AmlCheckResult> {
    const lowered = fullLegalName.toLowerCase();
    const isPep = lowered.includes('minister') || lowered.includes('president');
    const isOfac = lowered.includes('sanction');
    const matches: WatchlistMatch[] = [];
    if (isPep) matches.push({ list: 'PEP', name: fullLegalName, score: 0.9 });
    if (isOfac) matches.push({ list: 'OFAC', name: fullLegalName, score: 0.95 });
    return {
      status: matches.length ? 'review' : 'clear',
      matches,
      checkedAt: new Date().toISOString(),
      provider: 'mock',
    };
  }

  async checkBusiness({ businessName }: { businessName: string }): Promise<AmlCheckResult> {
    const lowered = businessName.toLowerCase();
    const isSanction = lowered.includes('banned');
    return {
      status: isSanction ? 'review' : 'clear',
      matches: isSanction ? [{ list: 'Sanctions', name: businessName, score: 0.8 }] : [],
      checkedAt: new Date().toISOString(),
      provider: 'mock',
    };
  }
}

let provider: AmlProvider = new MockAmlProvider();

export function setAmlProvider(custom: AmlProvider) {
  provider = custom;
}

export function getAmlProvider(): AmlProvider {
  return provider;
}
