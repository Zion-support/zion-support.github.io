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
export type AmlCheckResult = {
=======
};

export type AmlCheckResult = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  status: 'clear' | 'match' | 'review' | 'unknown';
  matches: WatchlistMatch[];
  checkedAt: string; // ISO
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
  async checkPerson(params: { fullLegalName: string; country: string, dob?: string }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
    const name = params.fullLegalName.toLowerCase();
    if (name.includes('test') |name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test name detected' } }
    }
    return { status: 'clear' }
  }
  async checkBusiness(params: { businessName: string, country: string }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
    const name = params.businessName.toLowerCase();
    if (name.includes('test') |name.includes('demo')) {
      return { status: 'match', details: { reason: 'Test business name detected' } }
    }
    return { status: 'clear' }
  }
<<<<<<< HEAD
}
<<<<<<< HEAD
export function getAmlProvider(): AmlProvider {
  return new MockAmlProvider();
}
=======
<<<<<<< HEAD

let provider: AmlProvider = new MockAmlProvider();
}

export function setAmlProvider(custom: AmlProvider) {
  provider = custom;
}

export function getAmlProvider(): AmlProvider {
  return provider;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

export function getAmlProvider(): AmlProvider {;
  return new MockAmlProvider();
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
