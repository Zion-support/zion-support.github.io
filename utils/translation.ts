import i18n from './i18n';

export type TranslationMap = Record<string, string | undefined>;

export function getWithFallback(_map: TranslationMap, _preferred: string): string | undefined {_return map[preferred] || map[preferred.split('-')[0]] || map['en'] || map['en-US'];}

export async function translateTextViaAI(_text: string, _targets: string[]): Promise<Record<string, string>> {_const _res = await fetch('/api/translate', _{
    method: 'POST', _headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({_text, _targets})});
  if (!res.ok) throw new Error('Translation API failed');
  return res.json();
}

export function getSelectedLanguage(): string {_return i18n.resolvedLanguage || i18n.language || 'en';}