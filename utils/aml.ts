<<<<<<< HEAD
export type WatchlistMatch = {
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia',
  name: string,
  score: number, // 0-1 match confidence
  referenceId?: string,
  detailsUrl?: string
},

export type AmlCheckResult = {
  status: 'clear' | 'match' | 'review' | 'unknown',
  matches: WatchlistMatch[],
  checkedAt: string, // ISO
  provider: 'mock' | 'remote'
},

export interface AmlProvider {
  checkPerson(input: { fullLegalName: string, country?: string, dob?: string }): Promise<AmlCheckResult>,
  checkBusiness(input: { businessName: string, country?: string, registrationNumber?: string }): Promise<AmlCheckResult>
}

class MockAmlProvider implements AmlProvider {
  async checkPerson({ fullLegalName }: { fullLegalName: string }): Promise<AmlCheckResult> {
    const lowered = fullLegalName.toLowerCase(),
    const isPep = lowered.includes('minister') || lowered.includes('president'),
    const isOfac = lowered.includes('sanction'),
    const matches: WatchlistMatch[] = [],
    if (isPep) matches.push({ list: 'PEP', name: fullLegalName, score: 0.9 }),
    if (isOfac) matches.push({ list: 'OFAC', name: fullLegalName, score: 0.95 }),
    return {
      status: matches.length ? 'review' : 'clear',
      matches,
      checkedAt: new Date().toISOString(),
      provider: 'mock'}
  }

  async checkBusiness({ businessName }: { businessName: string }): Promise<AmlCheckResult> {
    const lowered = businessName.toLowerCase(),
    const isSanction = lowered.includes('banned'),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    return {
      status: isSanction ? 'review' : 'clear', _matches: isSanction ? [{ list: 'Sanctions', _name: businessName, _score: 0.8}] : [],
      checkedAt: new Date().toISOString(),
      provider: 'mock'}
  }
}

let provider: AmlProvider = new MockAmlProvider(),

<<<<<<< HEAD
export function setAmlProvider(custom: AmlProvider) {
  provider = custom
}

export function getAmlProvider(): AmlProvider {
  return provider
}
=======
export function setAmlProvider(_custom: AmlProvider) {_provider = custom;}

export function getAmlProvider(): AmlProvider {_return provider;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
