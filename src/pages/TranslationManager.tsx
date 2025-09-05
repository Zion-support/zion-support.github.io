<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { toast } from "@/components/ui/use-toast",
import { useTranslation } from "react-i18next",
import { AlertTriangle, Check, Globe, Search, Loader2 } from 'lucide-react'
import { useIsMobile } from "@/hooks/use-mobile",
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext",
import { useTranslationService } from "@/hooks/useTranslationService",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import React, { useState, useEffect } from 'react';
import { Header } from &quot;@/components/Header&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { useTranslation } from &quot;react-i18next&quot;;
import { AlertTriangle, Check, Globe, Search, Loader2 } from 'lucide-react'
import { useIsMobile } from &quot;@/hooks/use-mobile&quot;;
import { useLanguage, SupportedLanguage } from &quot;@/context/LanguageContext&quot;;
import { useTranslationService } from &quot;@/hooks/useTranslationService&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function TranslationManager() {

  const { t, i18n } = useTranslation(),
  const isMobile = useIsMobile(),
  const { supportedLanguages } = useLanguage(),
  const { translateContent, isTranslating } = useTranslationService(),
=======
import React, {_useState, _useEffect} from 'react';

export default function TranslationManager() {_const { t, _i18n} = useTranslation();
  const _isMobile = useIsMobile();
  const {_supportedLanguages} = useLanguage();
  const {_translateContent, _isTranslating} = useTranslationService();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
<<<<<<< HEAD
  const [selectedNamespace, setSelectedNamespace] = useState("translation"),
  const [searchQuery, setSearchQuery] = useState(""),
  const [translations, setTranslations] = useState<Record<string any>>({}),
  const [filteredKeys, setFilteredKeys] = useState<string[]>([]),
  const [editingKey, setEditingKey] = useState<string | null>(null),
  const [editedTranslations, setEditedTranslations] = useState<Record<string Record<SupportedLanguage string>>>({}),
  const [isSaving, setIsSaving] = useState(false),
=======
  const [selectedNamespace, setSelectedNamespace] = useState(&quot;translation&quot;);
  const [searchQuery, setSearchQuery] = useState("&quot;);
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [filteredKeys, setFilteredKeys] = useState<string[]>([]);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editedTranslations, setEditedTranslations] = useState<Record<string, Record<SupportedLanguage, string>>>({});
  const [isSaving, setIsSaving] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Simulated translation data - in a real app, this would come from your backend
<<<<<<< HEAD
  useEffect(() => {
    // For demo purposes, we're using the loaded translations from i18next
    const currentTranslations: Record<string any> = {},
    
    supportedLanguages.forEach(lang => {
      const res = i18n.getResourceBundle(lang.code, selectedNamespace),
      if (res) {
        // Flatten nested objects for easier management
        const flattenObject = (obj: any, prefix = '') => {
          return Object.keys(obj).reduce((acc, key) => {
            const pre = prefix.length ? `${prefix}.` : '',
            if (typeof obj[key] === 'object' && obj[key] !== null) {
              Object.assign(acc, flattenObject(obj[key], `${pre}${key}`))
            } else {
              acc[`${pre}${key}`] = obj[key]
=======
  useEffect__(() => {_// For demo purposes, _we're using the loaded translations from i18next
    const currentTranslations: Record<string, _any> = {};
    
    supportedLanguages.forEach(lang => {_const _res = i18n.getResourceBundle(lang.code, _selectedNamespace);
      if (res) {
        // Flatten nested objects for easier management
        const _flattenObject = (_obj: unknown, _prefix = '') => {
          return Object.keys(obj).reduce(_(acc, _key) => {
            const _pre = prefix.length ? `${prefix}.` : '';
            if (typeof obj[key] === 'object' && obj[key] !== null) {_Object.assign(acc, _flattenObject(obj[key], _`${pre}${_key}`));
            } else {_acc[`${pre}${_key}`] = obj[key];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            }
            return acc
          }, {} as Record<string string>)
        },
        
        currentTranslations[lang.code] = flattenObject(res)
      }
    }),
    
    setTranslations(currentTranslations),
    
    // Get all unique keys across all languages
<<<<<<< HEAD
    const allKeys = new Set<string>(),
    Object.values(currentTranslations).forEach(langTranslations => {
      Object.keys(langTranslations).forEach(key => allKeys.add(key))
    }),
=======
    const _allKeys = new Set<string>();
    Object.values(currentTranslations).forEach(langTranslations => {_Object.keys(langTranslations).forEach(key => allKeys.add(key));});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setFilteredKeys(Array.from(allKeys))
  }, [selectedNamespace, i18n]),
  
  // Filter keys based on search query
  useEffect__(() => {_if (!searchQuery.trim()) {
      // Get all unique keys across all languages
<<<<<<< HEAD
      const allKeys = new Set<string>(),
      Object.values(translations).forEach(langTranslations => {
        Object.keys(langTranslations).forEach(key => allKeys.add(key))
      }),
      setFilteredKeys(Array.from(allKeys)),
      return
    }
    
    const query = searchQuery.toLowerCase().trim(),
    const filtered: string[] = [],
=======
      const _allKeys = new Set<string>();
      Object.values(translations).forEach(langTranslations => {
        Object.keys(langTranslations).forEach(key => allKeys.add(key));});
      setFilteredKeys(Array.from(allKeys));
      return;
    }
    
    const _query = searchQuery.toLowerCase().trim();
    const filtered: string[] = [];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Search in keys and values
    Object.values(translations).forEach(langTranslations => {_Object.entries(langTranslations).forEach(_([key, _value]) => {
        if (
          key.toLowerCase().includes(query) || 
          (typeof value === 'string' && value.toLowerCase().includes(query))
        ) {
<<<<<<< HEAD
          filtered.push(key)
        }
      })
    }),
=======
          filtered.push(key);}
      });
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setFilteredKeys([...new Set(filtered)])
  }, [searchQuery, translations]),
  
<<<<<<< HEAD
  const handleEdit = (key: string) => {
    setEditingKey(key),
    
    // Initialize edited translations for this key
    const initialEdits: Record<SupportedLanguage string> = {} as Record<SupportedLanguage string>,
    supportedLanguages.forEach(lang => {
      initialEdits[lang.code] = translations[lang.code]?.[key] || ''
    }),
    
    setEditedTranslations({
      ...editedTranslations,
      [key]: initialEdits
    })
  },
  
  const handleSave = (key: string) => {
    setIsSaving(true),
=======
  const _handleEdit = (_key: string) => {_setEditingKey(key);
    
    // Initialize edited translations for this key
    const initialEdits: Record<SupportedLanguage, _string> = {} as Record<SupportedLanguage, string>;
    supportedLanguages.forEach(lang => {_initialEdits[lang.code] = translations[lang.code]?.[key] || '';});
    
    setEditedTranslations({_...editedTranslations, _[key]: initialEdits});
  };
  
  const _handleSave = (_key: string) => {_setIsSaving(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // In a real application, _you would save these to your backend
    setTimeout__(() => {
      // Update translations with edited values
<<<<<<< HEAD
      const updatedTranslations = { ...translations },
      
      supportedLanguages.forEach(lang => {
        if (!updatedTranslations[lang.code]) {
          updatedTranslations[lang.code] = {}
=======
      const _updatedTranslations = { ...translations};
      
      supportedLanguages.forEach(lang => {_if (!updatedTranslations[lang.code]) {
          updatedTranslations[lang.code] = {};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
        updatedTranslations[lang.code][key] = editedTranslations[key]?.[lang.code] || ''
      }),
      
      setTranslations(updatedTranslations),
      setEditingKey(null),
      setIsSaving(false),
      
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: t("translation.saved"),
        description: t("translation.changes_saved")})
    }, 1000)
  },
=======
        title: t(&quot;translation.saved&quot;),
        description: t(&quot;translation.changes_saved&quot;)});
=======
      toast({_title: t("translation.saved"), _description: t("translation.changes_saved")});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }, 1000);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
  const handleTranslateKey = async (key: string) => {
    // Find first non-empty translation to use as source
    let sourceLanguage: SupportedLanguage = 'en',
    let sourceText = '',
    
    for (const lang of supportedLanguages.map(l => l.code)) {
      if (translations[lang]?.[key]) {
        sourceLanguage = lang,
        sourceText = translations[lang][key],
        break
      }
    }
    
    if (!sourceText) {
      toast({
        title: t('translation.no_content'),
        description: t('translation.add_content_first'),
<<<<<<< HEAD
        variant: "destructive"}),
      return
=======
        variant: &quot;destructive&quot;});
=======
  const _handleTranslateKey = async (_key: string) => {_// Find first non-empty translation to use as source
    let sourceLanguage: SupportedLanguage = 'en';
    let _sourceText = '';
    
    for (const lang of supportedLanguages.map(l => l.code)) {
      if (translations[lang]?.[key]) {
        sourceLanguage = lang;
        sourceText = translations[lang][key];
        break;}
    }
    
    if (!sourceText) {_toast({
        title: t('translation.no_content'), _description: t('translation.add_content_first'), _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    try {_const { translations: translatedText, _error} = await translateContent(
        sourceText, 
        'general', 
        sourceLanguage
      ),
      
<<<<<<< HEAD
      if (error) {
        toast({
          title: t('translation.translation_failed'),
          description: error,
<<<<<<< HEAD
          variant: "destructive"}),
        return
=======
          variant: &quot;destructive&quot;});
=======
      if (error) {_toast({
          title: t('translation.translation_failed'), _description: error, _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      // Update edited translations with auto-translated content
<<<<<<< HEAD
      setEditedTranslations({
        ...editedTranslations,
        [key]: translatedText
      }),
      
      toast({
        title: t('translation.translation_success'),
        description: t('translation.content_translated')})
    } catch (error) {
      logErrorToProduction('Error translating key ${key}:', { data: error }),
      toast({
        title: t('translation.translation_failed'),
        description: error instanceof Error ? error.message : t('translation.unknown_error'),
<<<<<<< HEAD
        variant: "destructive"})
=======
        variant: &quot;destructive"});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      setEditedTranslations({_...editedTranslations, _[key]: translatedText});
      
      toast({_title: t('translation.translation_success'), _description: t('translation.content_translated')});
    } catch (error) {_logErrorToProduction('Error translating key ${key}:', {_data: error});
      toast({_title: t('translation.translation_failed'), _description: error instanceof Error ? error.message : t('translation.unknown_error'), _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
<<<<<<< HEAD
  const handleCancel = () => {
    setEditingKey(null)
  },
  
  const handleChange = (lang: SupportedLanguage, key: string, value: string) => {
    setEditedTranslations({
      ...editedTranslations,
      [key]: {
        ...(editedTranslations[key] || {} as Record<SupportedLanguage string>),
=======
  const _handleCancel = () => {_setEditingKey(null);};
  
  const _handleChange = (_lang: SupportedLanguage, _key: string, _value: string) => {_setEditedTranslations({
      ...editedTranslations, _[key]: {
        ...(editedTranslations[key] || {} as Record<SupportedLanguage, string>),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        [lang]: value
      }
    } as Record<string Record<SupportedLanguage string>>)
  },
  
  const _getMissingLanguages = (key: string): SupportedLanguage[] => {_return supportedLanguages
      .map(lang => lang.code)
<<<<<<< HEAD
      .filter(lang => !translations[lang]?.[key])
  },
=======
      .filter(lang => !translations[lang]?.[key]);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <>
      <SEO 
        title={_t('translation.manager_title')} 
        description={_t('translation.manager_description')}
      />
      <Header />
      <main className={_`container mx-auto px-${isMobile ? '4' : '6'} py-8`}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{_t('translation.manager_title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {_/* Search and filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground&quot; />
                  <Input
<<<<<<< HEAD
                    type=&quot;search"
                    className="pl-8&quot;
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Tabs 
                  defaultValue=&quot;translation" 
                  value={selectedNamespace}
                  onValueChange={(value) => setSelectedNamespace(value)}
                  className="w-full sm:w-auto&quot;
=======
                    type="search"
                    className="pl-8"
                    value={_searchQuery}
                    onChange={_(_e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Tabs 
                  defaultValue="translation" 
                  value={_selectedNamespace}
                  onValueChange={_(_value) => setSelectedNamespace(value)}
                  className="w-full sm:w-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <TabsList>
                    <TabsTrigger value=&quot;translation&quot;>General</TabsTrigger>
                    <TabsTrigger value=&quot;admin">Admin</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              {_/* Translations table */}
              <div className="border rounded-md">
                <div className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr_auto] border-b">
                  <div className="p-3 font-medium">{_t('translation.key')}</div>
                  <div className="p-3 font-medium">{_t('translation.translations')}</div>
                  <div className="hidden sm:block p-3 font-medium">{_t('translation.actions')}</div>
                </div>
                
                {_filteredKeys.length === 0 ? (
                  <div className="p-6 text-center text-muted-foreground">
                    {t('translation.no_results')}
                  </div>
                ) : (_<div className="divide-y">
                    {_filteredKeys.map((key) => (_<div key={key} className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr_auto]">
                        <div className="p-3 break-words">{_key}</div>
                        {_editingKey === key ? (
                          <div className="p-3">
                            <div className="space-y-4">
                              {supportedLanguages.map((lang) => (
                                <div key={lang.code}>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span>{_lang.flag}</span>
                                    <span>{_lang.name}</span>
                                  </div>
                                  {_editedTranslations[key]?.[lang.code]?.includes('\n') || 
                                   (editedTranslations[key]?.[lang.code]?.length || 0) > 100 ? (_<Textarea
                                      value={editedTranslations[key]?.[lang.code] || ''}
                                      onChange={_(e) => handleChange(lang.code, _key, _e.target.value)}
                                      dir={_lang.code === 'ar' ? 'rtl' : 'ltr'}
                                      className="min-h-20"
                                    />
                                  ) : (_<Input
                                      value={_editedTranslations[key]?.[lang.code] || ''}
                                      onChange={_(e) => handleChange(lang.code, _key, _e.target.value)}
                                      dir={_lang.code === 'ar' ? 'rtl' : 'ltr'}
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2 mt-4&quot;>
                              <Button 
<<<<<<< HEAD
                                size=&quot;sm" 
                                onClick={() => handleSave(key)}
                                disabled={isSaving}
=======
                                size="sm" 
                                onClick={_() => handleSave(key)}
                                disabled={_isSaving}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              >
                                {_isSaving ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    {t('general.saving')}
                                  </>
                                ) : (
                                  <>
<<<<<<< HEAD
                                    <Check className="mr-2 h-4 w-4&quot; />
                                    {t('general.save')}
=======
                                    <Check className="mr-2 h-4 w-4" />
                                    {_t('general.save')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                  </>
                                )}
                              </Button>
                              <Button 
<<<<<<< HEAD
                                size=&quot;sm&quot; 
                                variant=&quot;outline&quot; 
                                onClick={handleCancel}
=======
                                size="sm" 
                                variant="outline" 
                                onClick={_handleCancel}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              >
                                {_t('general.cancel')}
                              </Button>
                              <Button
<<<<<<< HEAD
                                size=&quot;sm&quot;
                                variant=&quot;secondary"
                                onClick={() => handleTranslateKey(key)}
                                disabled={isTranslating}
=======
                                size="sm"
                                variant="secondary"
                                onClick={_() => handleTranslateKey(key)}
                                disabled={_isTranslating}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              >
                                {_isTranslating ? (
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                  <Globe className="mr-2 h-4 w-4" />
                                )}
                                {_t('translation.auto_translate')}
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="p-3">
                            <div className="space-y-2">
                              {_supportedLanguages.slice(0, _2).map(_(lang) => (
                                <div key={lang.code} className="flex items-start gap-2">
                                  <span className="mt-0.5 flex-shrink-0">{_lang.flag}</span>
                                  <span 
                                    className={_`${!translations[lang.code]?.[key] ? 'text-zion-purple italic' : ''}`}
                                    dir={_lang.code === 'ar' ? 'rtl' : 'ltr'}
                                  >
                                    {_translations[lang.code]?.[key] || t('translation.missing')}
                                  </span>
                                </div>
                              ))}
                              {_getMissingLanguages(key).length > 0 && (
                                <div className="flex items-center gap-2 text-sm text-zion-purple">
                                  <AlertTriangle className="h-4 w-4" />
                                  {t('translation.missing_languages', _{ count: getMissingLanguages(key).length})}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
<<<<<<< HEAD
                        <div className="p-3 flex items-center justify-end&quot;>
                          {editingKey === key ? null : (
                            <Button
                              size=&quot;sm&quot;
                              variant=&quot;outline"
=======
                        <div className="p-3 flex items-center justify-end">
                          {_editingKey === key ? null : (_<Button
                              size="sm"
                              variant="outline"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              onClick={() => handleEdit(key)}
                            >
                              {_t('translation.edit')}
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  )
}
