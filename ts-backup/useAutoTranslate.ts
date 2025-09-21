import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  isLoading: boolean;
  error: string | null;
};

export function useAutoTranslate(texts: string[], targetLanguage: string): UseAutoTranslateResult {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (texts.length === 0) return;

    setIsLoading(true);
    setError(null);

    Promise.all(
      texts.map(text => translateTextViaAI(text, targetLanguage))
    )
      .then(results => {
        const translationMap: Record<string, string> = {};
        texts.forEach((text, index) => {
          translationMap[text] = results[index];
        });
        setTranslations(translationMap);
      })
      .catch(err => {
        setError(err.message || 'Translation failed');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [texts, targetLanguage]);

  return { translations, isLoading, error };
}