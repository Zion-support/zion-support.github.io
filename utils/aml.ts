<<<<<<< HEAD
export type WatchlistMatch = {
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
  score: number; // 0-1 match confidence
  referenceId?: string;
  detailsUrl?: string;
};

export type AmlCheckResult = {
  status: 'clear' | 'match' | 'review' | 'unknown';
  matches: WatchlistMatch[];
  checkedAt: string; // ISO
  provider: 'mock' | 'remote';
};

export interface AmlProvider {
  checkPerson(params: { fullLegalName: string; country: string, dob?: string }): Promise<AmlResult>;
  checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult>;
}

class MockAmlProvider implements AmlProvider {
  async checkPerson(params: { fullLegalName: string; country: string, dob?: string }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
    const name = params.fullLegalName.toLowerCase();
    if (name.includes('test') || name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test name detected' } };
    }
    return { status: 'clear' };
  }

  async checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
    const name = params.businessName.toLowerCase();
    if (name.includes('test') || name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test business name detected' } };
    }
    return { status: 'clear' };
  }
}

export function getAmlProvider(): AmlProvider {
  return provider;
=======
  return new MockAmlProvider();
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
