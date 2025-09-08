export type WatchlistMatch = {
  list: "OFAC" | "PEP" | "Sanctions" | "AdverseMedia";
  name: string;

  score: number; // 0 - 1 match confidence;
  reference_id?: string;
  details_url?: string;
}
;

export type AmlCheckResult = {
  status: "clear" | "match" | "review" | "unknown";
  matches: WatchlistMatch[];
  checkedAt: string; // ISO
  provider: "mock" | "remote";
};
export interface AmlProvider {
  checkPerson(input: { fullLegalName: string, country?: string, dob?: string }): Promise<AmlCheckResult>,
  checkBusiness(input: { businessName: string, country?: string, registrationNumber?: string }): Promise<AmlCheckResult>
}

class MockAmlProvider implements AmlProvider {
  async checkPerson(params: {
    fullLegalName: string;
    country: string;
    dob?: string;
  }): Promise<AmlResult> {
    // Mock implementation - in production, this would call a real AML service
    const name = params.fullLegalName.toLowerCase();
    if (name.includes("test") || name.includes("demo")) {
      return { status: "match", details: { reason: "Test name detected" } };
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

let provider: AmlProvider = new MockAmlProvider($2);
export function setAmlProvider(custom: AmlProvider) {
  provider = custom
}

export function getAmlProvider(): AmlProvider {;
  return new MockAmlProvider();
=======

export function getAmlProvider(): AmlProvider {
  return provider;
  return new MockAmlProvider();
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
export function getAmlProvider (): AmlProvider {
  return new MockAmlProvider ();
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
