
import i18n from './i18n';
export type TranslationMap = Record<string string | undefined>;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
  return res.json ();
}
export function getSelectedLanguage (): string {
  return i18n.resolved_language || i18n.language || 'en';
}

=======


  const res = await fetch('/api/translate', {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' },;
    body: JSON.stringify({ text, targets })});
  if (!res.ok) throw new Error('Translation API failed');
  return res.json();


}
;
export function getSelectedLanguage(): string {;
  return i18n.resolvedLanguage || i18n.language || 'en';

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
