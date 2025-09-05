import i18n from './i18n',
export type TranslationMap = Record<string string | undefined>,

<<<<<<< HEAD
export function getWithFallback(map: TranslationMap, preferred: string): string | undefined {
  return map[preferred] || map[preferred.split('-')[0]] || map['en'] || map['en-US']
}

export async function translateTextViaAI(text: string, targets: string[]): Promise<Record<string string>> {
  const res = await fetch('/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, targets })}),
  if (!res.ok) throw new Error('Translation API failed'),
  return res.json()
}

export function getSelectedLanguage(): string {
  return i18n.resolvedLanguage || i18n.language || 'en'
}
=======
export function getWithFallback(_map: TranslationMap, _preferred: string): string | undefined {_return map[preferred] || map[preferred.split('-')[0]] || map['en'] || map['en-US'];}

export async function translateTextViaAI(_text: string, _targets: string[]): Promise<Record<string, string>> {_const _res = await fetch('/api/translate', _{
    method: 'POST', _headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({_text, _targets})});
  if (!res.ok) throw new Error('Translation API failed');
  return res.json();
}

export function getSelectedLanguage(): string {_return i18n.resolvedLanguage || i18n.language || 'en';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
