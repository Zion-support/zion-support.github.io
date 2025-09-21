import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {
  translations: Record<string, string>;

// Stub translation function
const translateTextViaAI = async (text: string, target: string): Promise<string> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${text} (${target})`);
    }, 100);
  });
};

export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean;
  loading: boolean;
  error?: string;
};

export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]);
  
  useEffect(() => {
    if (!text || targets.length === 0) {
      setTranslations({});
      setLoading(false);
      setError(undefined);
      return;
    },
    
    setLoading(true);
    setError(undefined);
    
    const timeoutId = setTimeout(async () => {
      try {
        const newTranslations: Record<string, string> = {};
        
        // Translate to each target language
        await Promise.all(
          targets.map(async (target) => {
            const translation = await translateTextViaAI(text, target);
            newTranslations[target] = translation;
          })
        );
        
        setTranslations(newTranslations);
        setError(undefined);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Translation failed');
      } finally {
        setLoading(false);
      },
    }, debounceMs);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [key, debounceMs]);
  
  return {
    translations,
    loading,
    error
  };
  const [error, setError] = useState<string | undefined>();

  const debouncedText = useMemo(() => {
    const timer = setTimeout(() => text, debounceMs);
    return () => clearTimeout(timer);
  }, [text, debounceMs]);

  useEffect(() => {
    if (!text || targets.length === 0) return;

    setLoading(true);
    setError(undefined);

    const translatePromises = targets.map(async (target) => {
      try {
        const result = await translateTextViaAI(text, target);
        return { target, translation: result };
      } catch (err) {
        console.error(`Translation failed for ${target}:`, err);
        return { target, translation: text };
      },
    });

    Promise.all(translatePromises).then((results) => {
      const newTranslations = results.reduce((acc, { target, translation }) => {
        acc[target] = translation;
        return acc;
      }, {} as Record<string, string>);
      
      setTranslations(newTranslations);
      setLoading(false);
    }).catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, [text, targets]);

  return { translations, loading, error };
}
