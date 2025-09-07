interface AmlResult {
  status: 'clear' | 'review' | 'blocked';
  matches: Array<{
    list: string;
    name: string;
    score: number;
  }>;
  checkedAt: string;
  provider: string;
}

interface AmlProvider {
  check(businessName: string): Promise<AmlResult>;
}

class MockAmlProvider implements AmlProvider {
  async check(businessName: string): Promise<AmlResult> {
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

export { provider, type AmlResult, type AmlProvider };