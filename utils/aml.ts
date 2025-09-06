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
