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
export { provider };export type WatchlistMatch = {
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";

  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;

  score: number; // 0 - 1 match confidence;
  reference_id?: string;
  details_url?: string;
}
;

export type AmlCheckResult = {
  status: "clear" | "match" | "review" | "unknown";  status: 'clear' | 'match' | 'review' | 'unknown';
  matches: WatchlistMatch[];
  checkedAt: string; // ISO
  provider: "mock" | "remote"
};
export interface AmlProvider {
  checkPerson(input: { fullLegalName: string, country?: string, dob?: string }): Promise<AmlCheckResult>,
  checkBusiness(input: { businessName: string, country?: string, registrationNumber?: string }): Promise<AmlCheckResult>
}
class MockAmlProvider implements AmlProvider {    }
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
