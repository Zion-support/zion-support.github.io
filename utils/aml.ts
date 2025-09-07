export type WatchlistMatch = $2;
  name: string,
  score: number, // 0-1 match confidence
  referenceId?: string,
  detailsUrl?: string
},

export type AmlCheckResult = $2;
  matches: WatchlistMatch[],
  checkedAt: string, // ISO
  provider: 'mock' | 'remote'
},

export interface AmlProvider {
  checkPerson(input: { fullLegalName: string, country?: string, dob?: string }): Promise<AmlCheckResult>,
  checkBusiness(input: { businessName: string, country?: string, registrationNumber?: string }): Promise<AmlCheckResult>
}

class MockAmlProvider implements AmlProvider {
  async checkPerson({ fullLegalName }: { fullLegalName: string}): Promise<AmlCheckResult> {
    const lowered = fullLegalName.toLowerCase($2);
    const isPep = lowered.includes('minister') || lowered.includes($2);
    const isOfac = lowered.includes($2);
    const matches: WatchlistMatch[] = [],
    if (isPep) matches.push($2);
    if (isOfac) matches.push($2);
    return {
      status: matches.length ? 'review' : 'clear',
      matches,
      checkedAt: new Date().toISOString($2);
      provider: 'mock'}
  }

  async checkBusiness({ businessName }: { businessName: string}): Promise<AmlCheckResult> {
    const lowered = businessName.toLowerCase($2);
    const isSanction = lowered.includes($2);
    return {
      status: isSanction ? 'review' : 'clear',
      matches: isSanction ? [{ list: 'Sanctions', name: businessName, score: 0.8 }] : [],
      checkedAt: new Date().toISOString($2);
      provider: 'mock'}
  }
}

let provider: AmlProvider = new MockAmlProvider($2);
export function setAmlProvider(custom: AmlProvider) {
  provider = custom
}

export function getAmlProvider(): AmlProvider {
  return provider
}