export type WatchlistMatch = {_list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
  score: number; // 0-1 match confidence
  referenceId?: string;
  detailsUrl?: string;};

export type AmlCheckResult = {_status: 'clear' | 'match' | 'review' | 'unknown';
  matches: WatchlistMatch[];
  checkedAt: string; // ISO
  provider: 'mock' | 'remote';};

export interface AmlProvider {_checkPerson(input: { fullLegalName: string; country?: string; dob?: string}): Promise<AmlCheckResult>;
  checkBusiness(input: {_businessName: string; country?: string; registrationNumber?: string}): Promise<AmlCheckResult>;
}

class MockAmlProvider implements AmlProvider {_async checkPerson({ fullLegalName}: {_fullLegalName: string}): Promise<AmlCheckResult> {_const _lowered = fullLegalName.toLowerCase();
    const _isPep = lowered.includes('minister') || lowered.includes('president');
    const _isOfac = lowered.includes('sanction');
    const matches: WatchlistMatch[] = [];
    if (isPep) matches.push({ list: 'PEP', _name: fullLegalName, _score: 0.9});
    if (isOfac) matches.push({_list: 'OFAC', _name: fullLegalName, _score: 0.95});
    return {_status: matches.length ? 'review' : 'clear', _matches, _checkedAt: new Date().toISOString(), _provider: 'mock'};
  }

  async checkBusiness({_businessName}: {_businessName: string}): Promise<AmlCheckResult> {_const _lowered = businessName.toLowerCase();
    const _isSanction = lowered.includes('banned');
    return {
      status: isSanction ? 'review' : 'clear', _matches: isSanction ? [{ list: 'Sanctions', _name: businessName, _score: 0.8}] : [],
      checkedAt: new Date().toISOString(),
      provider: 'mock'};
  }
}

let provider: AmlProvider = new MockAmlProvider();

export function setAmlProvider(_custom: AmlProvider) {_provider = custom;}

export function getAmlProvider(): AmlProvider {_return provider;}