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
import {logErrorToProduction} from '@/utils/productionLogger',export default function TranslationManager() {

  const { t, i18n } = useTranslation(),
  const isMobile = useIsMobile(),
  const { supportedLanguages } = useLanguage(),
  const { translateContent, isTranslating } = useTranslationService(),
import React, {useState, useEffect} from 'react';

export default function TranslationManager() {const { t, i18n} = useTranslation();
  const isMobile = useIsMobile();
  const {supportedLanguages} = useLanguage();
  const {translateContent, isTranslating} = useTranslationService();
  
  const [selectedNamespace, setSelectedNamespace] = useState("translation"),
  const [searchQuery, setSearchQuery] = useState(""),
  const [translations, setTranslations] = useState<Record<string any>>({}),
  const [filteredKeys, setFilteredKeys] = useState<string[]>([]),
  const [editingKey, setEditingKey] = useState<string | null>(null),
  const [editedTranslations, setEditedTranslations] = useState<Record<string Record<SupportedLanguage string>>>({}),
  const [isSaving, setIsSaving] = useState(false),  
  // Simulated translation data - in a real app, this would come from your backend,
useEffect(() => {
    // For demo purposes, we're using the loaded translations from i18next,
const currentTranslations: Record<string any> = {},
    
    supportedLanguages.forEach(lang => {
      const res = i18n.getResourceBundle(lang.code, selectedNamespace),
      if (res) {
        // Flatten nested objects for easier management,
const flattenObject = (obj: any, prefix = '') => {
          return Object.keys(obj).reduce((acc, key) => {
            const pre = prefix.length ? `${prefix}.` : '',
            if (typeof obj[key] === 'object' && obj[key] !== null) {
              Object.assign(acc, flattenObject(obj[key], `${pre}${key}`))
            } else {
              acc[`${pre}${key}`] = obj[key]            }
            return acc
          }, {} as Record<string string>)
        },
        
        currentTranslations[lang.code] = flattenObject(res)
      }
    }),
    
    setTranslations(currentTranslations),
    
    // Get all unique keys across all languages,
const allKeys = new Set<string>(),
    Object.values(currentTranslations).forEach(langTranslations => {
      Object.keys(langTranslations).forEach(key => allKeys.add(key))
    }),    
    setFilteredKeys(Array.from(allKeys))
  }, [selectedNamespace, i18n]),
  
  // Filter keys based on search query,
useEffect_(() => {if (!searchQuery.trim()) {
      // Get all unique keys across all languages,
const allKeys = new Set<string>(),
      Object.values(translations).forEach(langTranslations => {
        Object.keys(langTranslations).forEach(key => allKeys.add(key))
      }),
      setFilteredKeys(Array.from(allKeys)),
      return
    }
    
    const query = searchQuery.toLowerCase().trim(),
    const filtered: string[] = [],    
    // Search in keys and values,
Object.values(translations).forEach(langTranslations => {Object.entries(langTranslations).forEach(_([key, value]) => {
        if (
          key.toLowerCase().includes(query) || 
          (typeof value === 'string' && value.toLowerCase().includes(query))
        ) {
          filtered.push(key)
        }
      })
    }),    
    setFilteredKeys([...new Set(filtered)])
  }, [searchQuery, translations]),
  
  const handleEdit = (key: string) => {
    setEditingKey(key),
    
    // Initialize edited translations for this key,
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
    // In a real application, you would save these to your backend,
setTimeout_(() => {
      // Update translations with edited values,
const updatedTranslations = { ...translations },
      
      supportedLanguages.forEach(lang => {
        if (!updatedTranslations[lang.code]) {
          updatedTranslations[lang.code] = {}        }
        updatedTranslations[lang.code][key] = editedTranslations[key]?.[lang.code] || ''
      }),
      
      setTranslations(updatedTranslations),
      setEditingKey(null),
      setIsSaving(false),
      
      toast({
        title: t("translation.saved"),
        description: t("translation.changessaved")})
    }, 1000)
  }    }, 1000)
  };
  
  const handleTranslateKey = async (key: string) => {
    // Find first non-empty translation to use as source,
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
        title: t('translation.nocontent'),
        description: t('translation.addcontent_first'),
        variant: "destructive"}),
      return      return
    }
    
    try {const { translations: translatedText, error} = await translateContent(
        sourceText, 
        'general', 
        sourceLanguage
      ),
      
      if (error) {
        toast({
          title: t('translation.translationfailed'),
          description: error,
          variant: "destructive"}),
        return        return
      }
      
      // Update edited translations with auto-translated content,
setEditedTranslations({
        ...editedTranslations,
        [key]: translatedText
      }),
      
      toast({
        title: t('translation.translationsuccess'),
        description: t('translation.contenttranslated')})
    } catch (error) {
      logErrorToProduction('Error translating key ${key}:', { data: error }),
      toast({
        title: t('translation.translationfailed'),
        description: error instanceof Error ? error.message : t('translation.unknownerror'),
        variant: "destructive"})      setEditedTranslations({_...editedTranslations, _[key]: translatedText});
      
      toast({title: t('translation.translationsuccess'), description: t('translation.contenttranslated')})
    } catch (error) {logErrorToProduction('Error translating key ${key}:', {data: error});
      toast({title: t('translation.translationfailed'), description: error instanceof Error ? error.message : t('translation.unknownerror'), variant: "destructive"})
    }
  },
  
  const handleCancel = () => {
    setEditingKey(null)
  },
  
  const handleChange = (lang: SupportedLanguage, key: string, value: string) => {
    setEditedTranslations({
      ...editedTranslations,
      [key]: {
        ...(editedTranslations[key] || {} as Record<SupportedLanguage string>),        [lang]: value
      }
    } as Record<string Record<SupportedLanguage string>>)
  },
  
  const getMissingLanguages = (key: string): SupportedLanguage[] => {return supportedLanguages
      .map(lang => lang.code)
      .filter(lang => !translations[lang]?.[key])
  },  
  return (
    <>
      <SEO,
title={t('translation.managertitle')} 
        description={t('translation.managerdescription')}
      />
      <Header />
      <main className={_`container mx-auto px-${isMobile ? '4' : '6'} py-8`}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t('translation.managertitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {_/* Search and filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground&quot; />
                  <Input,
type=&quot;search"
                    className="pl-8&quot;
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Tabs,
defaultValue=&quot;translation" 
                  value={selectedNamespace}
                  onValueChange={(value) => setSelectedNamespace(value)}
                  className="w-full sm:w-auto&quot;                >
                  <TabsList>
                    <TabsTrigger value=&quot;translation&quot;>General</TabsTrigger>
                    <TabsTrigger value=&quot;admin">Admin</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              {_/* Translations table */}
              <div className="border rounded-md">
                <div className="grid grid-cols-[1fr2fr] sm:grid-cols-[1fr2fr_auto] border-b">
                  <div className="p-3 font-medium">{t('translation.key')}</div>
                  <div className="p-3 font-medium">{t('translation.translations')}</div>
                  <div className="hidden sm:block p-3 font-medium">{t('translation.actions')}</div>
                </div>
                
                {filteredKeys.length === 0 ? (
                  <div className="p-6 text-center text-muted-foreground">
                    {t('translation.noresults')}
                  </div>
                ) : (_<div className="divide-y">
                    {filteredKeys.map((key) => (_<div key={key} className="grid grid-cols-[1fr2fr] sm:grid-cols-[1fr2fr_auto]">
                        <div className="p-3 break-words">{key}</div>
                        {editingKey === key ? (
                          <div className="p-3">
                            <div className="space-y-4">
                              {supportedLanguages.map((lang) => (
                                <div key={lang.code}>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span>{lang.flag}</span>
                                    <span>{lang.name}</span>
                                  </div>
                                  {editedTranslations[key]?.[lang.code]?.includes('\n') || 
                                   (editedTranslations[key]?.[lang.code]?.length || 0) > 100 ? (_<Textarea,
value={editedTranslations[key]?.[lang.code] || ''}
                                      onChange={_(e) => handleChange(lang.code, key, e.target.value)}
                                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                                      className="min-h-20"
                                    />
                                  ) : (_<Input,
value={editedTranslations[key]?.[lang.code] || ''}
                                      onChange={_(e) => handleChange(lang.code, key, e.target.value)}
                                      dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2 mt-4&quot;>
                              <Button,
size=&quot;sm" 
                                onClick={() => handleSave(key)}
                                disabled={isSaving}                              >
                                {isSaving ? (
                                  <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    {t('general.saving')}
                                  </>
                                ) : (
                                  <>
                                    <Check className="mr-2 h-4 w-4&quot; />
                                    {t('general.save')}                                  </>
                                )}
                              </Button>
                              <Button,
size=&quot;sm&quot; 
                                variant=&quot;outline&quot; 
                                onClick={handleCancel}                              >
                                {t('general.cancel')}
                              </Button>
                              <Button,
size=&quot;sm&quot;
                                variant=&quot;secondary"
                                onClick={() => handleTranslateKey(key)}
                                disabled={isTranslating}                              >
                                {isTranslating ? (
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                  <Globe className="mr-2 h-4 w-4" />
                                )}
                                {t('translation.autotranslate')}
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="p-3">
                            <div className="space-y-2">
                              {supportedLanguages.slice(0, 2).map(_(lang) => (
                                <div key={lang.code} className="flex items-start gap-2">
                                  <span className="mt-0.5 flex-shrink-0">{lang.flag}</span>
                                  <span,
className={_`${!translations[lang.code]?.[key] ? 'text-zion-purple italic' : ''}`}
                                    dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                                  >
                                    {translations[lang.code]?.[key] || t('translation.missing')}
                                  </span>
                                </div>
                              ))}
                              {getMissingLanguages(key).length > 0 && (
                                <div className="flex items-center gap-2 text-sm text-zion-purple">
                                  <AlertTriangle className="h-4 w-4" />
                                  {t('translation.missinglanguages', _{ count: getMissingLanguages(key).length})}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        <div className="p-3 flex items-center justify-end&quot;>
                          {editingKey === key ? null : (
                            <Button,
size=&quot;sm&quot;
                              variant=&quot;outline"                              onClick={() => handleEdit(key)}
                            >
                              {t('translation.edit')}
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
