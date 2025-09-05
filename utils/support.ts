<<<<<<< HEAD
export type HelpArticle = {
  id: string,
  slug: string,
  title: string,
  body: string,
  category: 'Getting Started' | 'Hiring' | 'Profile Setup' | 'Payments' | 'Disputes',
  updatedAt: string,
  keywords?: string[]
},

export type IntentResult = {
  intentMatched: boolean,
  matchedArticleIds: string[]
},

export function matchIntent(query: string, articles: HelpArticle[]): IntentResult {
  const q = query.toLowerCase(),
  const matched = new Set<string>(),

  const keywordToArticle = new Map<string string[]>(),
  for (const art of articles) {
    for (const kw of art.keywords ?? []) {
      const list = keywordToArticle.get(kw) ?? [],
      list.push(art.id),
      keywordToArticle.set(kw, list)
    }
=======
export type HelpArticle = {_id: string;
  slug: string;
  title: string;
  body: string;
  category: 'Getting Started' | 'Hiring' | 'Profile Setup' | 'Payments' | 'Disputes';
  updatedAt: string;
  keywords?: string[];};

export type IntentResult = {_intentMatched: boolean;
  matchedArticleIds: string[];};

export function matchIntent(_query: string, _articles: HelpArticle[]): IntentResult {_const _q = query.toLowerCase();
  const _matched = new Set<string>();

  const _keywordToArticle = new Map<string, _string[]>();
  for (const art of articles) {
    for (const kw of art.keywords ?? []) {
      const _list = keywordToArticle.get(kw) ?? [];
      list.push(art.id);
      keywordToArticle.set(kw, _list);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  // Simple heuristics
  const heuristics: Array<[RegExp, string[]]> = [
    [/login|log in|sign in|password|2fa|otp|cannot.*sign/i, []],
    [/hire|post job|find talent|contract/i, []],
    [/match|matching|get matched/i, []],
    [/bill|invoice|payment|refund|charge|card/i, []],
    [/dispute|issue|complaint|chargeback/i, []],
    [/profile|setup|verification|kyc|tax/i, []]],

<<<<<<< HEAD
  let heuristicHit = false,
  for (const [re] of heuristics) {
    if (re.test(q)) {
      heuristicHit = true,
      for (const [kw, ids] of keywordToArticle.entries()) {
        if (q.includes(kw)) ids.forEach((id) => matched.add(id))
      }
=======
  let _heuristicHit = false;
  for (const [re] of heuristics) {_if (re.test(q)) {
      heuristicHit = true;
      for (const [kw, _ids] of keywordToArticle.entries()) {
        if (q.includes(kw)) ids.forEach(_(id) => matched.add(id));}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }

  // Keyword fallback
<<<<<<< HEAD
  for (const [kw, ids] of keywordToArticle.entries()) {
    if (q.includes(kw)) ids.forEach((id) => matched.add(id))
  }

  const matchedIds = Array.from(matched),
  return { intentMatched: heuristicHit || matchedIds.length > 0, matchedArticleIds: matchedIds.slice(0, 3) }
=======
  for (const [kw, ids] of keywordToArticle.entries()) {_if (q.includes(kw)) ids.forEach(_(id) => matched.add(id));}

  const _matchedIds = Array.from(matched);
  return {_intentMatched: heuristicHit || matchedIds.length > 0, _matchedArticleIds: matchedIds.slice(0, _3)};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}