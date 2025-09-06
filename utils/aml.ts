<<<<<<< HEAD
<<<<<<< HEAD
export type WatchlistMatch = {
=======
export type WatchlistMatch = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
  score: number; // 0-1 match confidence
  referenceId?: string;
  detailsUrl?: string;
<<<<<<< HEAD
}
;

export type AmlCheckResult = {
=======

};

export type AmlCheckResult = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  status: 'clear' | 'match' | 'review' | 'unknown';
  matches: WatchlistMatch[];
  checked_at: string; // ISO;
  provider: 'mock' | 'remote';
<<<<<<< HEAD
}
export interface AmlProvider {
=======
};
export interface AmlProvider {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
}




=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
<<<<<<< HEAD
export function getAmlProvider(): AmlProvider {
  return new MockAmlProvider();
}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

export function getAmlProvider(): AmlProvider {;
  return new MockAmlProvider();
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
