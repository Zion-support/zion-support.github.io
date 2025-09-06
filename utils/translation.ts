
import i18n from './i18n';
export type TranslationMap = Record<string string | undefined>;

  const res = await fetch('/api/translate', {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' },;
    body: JSON.stringify({ text, targets })});
  if (!res.ok) throw new Error('Translation API failed');
  return res.json();

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
;
export function getSelectedLanguage(): string {;
  return i18n.resolvedLanguage || i18n.language || 'en';

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
