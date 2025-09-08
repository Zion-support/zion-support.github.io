<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src_backup/mobile/components/onboarding/LanguageThemeSelector.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import React, { useState } from 'react;
import { Button } from @/components/ui/button';
import { useTheme } from '@/hooks/useTheme;
import { Moon, Sun, Check } from lucide-react';
import { Card, CardContent } from '@/components/ui/card;

import React, { useState } from "react,
import { Button } from @/components/ui/button",
import { useTheme } from "@/hooks/useTheme;
import { Moon, Sun, Check } from lucide-react'
import { Card, CardContent } from @/components/ui/card";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
<<<<<<< HEAD
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme";
            <Card
              key = {language.code,}
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme";
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun, Check } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/mobile/components/onboarding/LanguageThemeSelector.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
interface Language {
  code: string;
  name: string;
  flag: string
const languages: Language[] = [
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src_backup/mobile/components/onboarding/LanguageThemeSelector.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  { code: 'en, name: English', flag: '🇺🇸 }
  { code: es', name: 'Español, flag: 🇪🇸' }
  { code: 'fr, name: Français', flag: '🇫🇷 }
  { code: de', name: 'Deutsch, flag: 🇩🇪' }
  { code: 'zh, name: 中文', flag: '🇨🇳 }
]
export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en),

  return (
    <div className=space-y-8 px-4'>
      <div className='space-y-2>
        <h2 className=text-xl font-medium'>Select your language</h2>
        <p className='text-muted-foreground>Choose your preferred language</p>
        <div className=grid grid-cols-2 gap-3 mt-4'>
          {languages.map(language => (
            <Card
              key={language.code}    <div className=space-y-8 px-4">
      <div className="space-y-2>
        <h2 className=text-xl font-medium">Select your language</h2>
        <p className="text-muted-foreground>Choose your preferred language</p>
        <div className=grid grid-cols-2 gap-3 mt-4">
          {languages.map((language,) => (
            <Card
              key = {language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code
                  ? 'border-primary bg-primary/5
                  : border-border hover:border-primary/40'
              }`}
              onClick = {(,) => setSelectedLanguage(language.code)}
            >
              <CardContent className='p-3 flex items-center justify-between>
                <div className=flex items-center'>
                  <span className='text-xl mr-2>{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
                  <Check className=h-4 w-4 text-primary' />
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
  { code: 'en', name: 'English', flag: '🇺🇸' }
  { code: 'es', name: 'Español', flag: '🇪🇸' }
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  { code: 'zh', name: '中文', flag: '🇨🇳' }
]
export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme();
<<<<<<< HEAD
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en'),
=======
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),
>>>>>>> origin/resolved-merge-conflicts

  return (
    <div className='space-y-8 px-4'>
      <div className='space-y-2'>
        <h2 className='text-xl font-medium'>Select your language</h2>
        <p className='text-muted-foreground'>Choose your preferred language</p>
        <div className='grid grid-cols-2 gap-3 mt-4'>
          {languages.map(language => (
            <Card
<<<<<<< HEAD
              key={language.code}    <div className='space-y-8 px-4'>
      <div className='space-y-2'>
        <h2 className='text-xl font-medium'>Select your language</h2>
        <p className='text-muted-foreground'>Choose your preferred language</p>
        <div className='grid grid-cols-2 gap-3 mt-4'>
=======
              key={language.code}    <div className="space-y-8 px-4">
      <div className="space-y-2">
        <h2 className="text-xl font-medium">Select your language</h2>
        <p className="text-muted-foreground">Choose your preferred language</p>
        <div className="grid grid-cols-2 gap-3 mt-4">
>>>>>>> origin/resolved-merge-conflicts
          {languages.map((language,) => (
            <Card
              key = {language.code,}
            <Card 
              key = {language.code,}

import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { useTheme } from "@/hooks/useTheme",
import { Moon, Sun, Check } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card",

interface Language {
  code: string,
  name: string,
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" }],

export function LanguageThemeSelector() {
  const { theme, setTheme } = useTheme(),
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"),

  return (
    <div className="space-y-8 px-4">
      <div className="space-y-2">
        <h2 className="text-xl font-medium">Select your language</h2>
        <p className="text-muted-foreground">Choose your preferred language</p>
        
        <div className="grid grid-cols-2 gap-3 mt-4">
          {languages.map((language) => (
            <Card 
              key={language.code}
key={language.code}
              className={`cursor-pointer transition-all ${
=======
key={language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code
                  ? "border-primary bg-primary/5"
              onClick = {(,) => setSelectedLanguage(language && language.code),}
            >;
              <CardContent className='p-3 flex items-center justify-between'>;
                <div className='flex items-center'>;
                  <span className='text-xl mr-2'>{language && language.flag}</span>;
                  <span>{language && language.name}</span>;
                </div>;
                {selectedLanguage === language && language.code && (;
                  <Check className='h-4 w-4 text-primary' />                )}          {languages && languages.map((language) => (;
            <Card
              key={language && language.code}
              className={`cursor-pointer transition-all ${
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                selectedLanguage === language.code 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/40"
              }`}
<<<<<<< HEAD
              onClick={() => setSelectedLanguage(language.code)}
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
            <Card
                  <Check className="h-4 w-4 text-primary" />
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/hooks/useTheme",;
import { Moon, Sun, Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card",;
interface Language {;
  code: string,;
  name: string,;
  flag: string;
}
;
const languages: Language[] = [;
  { code: "en", name: "English", flag: "🇺🇸" },;
  { code: "es", name: "Español", flag: "🇪🇸" },;
  { code: "fr", name: "Français", flag: "🇫🇷" },;
  { code: "de", name: "Deutsch", flag: "🇩🇪" },;
  { code: "zh", name: "中文", flag: "🇨🇳" }],;
export function LanguageThemeSelector() {;
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  return (;
    <div className="space-y-8 px-4">;
      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Select your language</h2>;
        <p className="text-muted-foreground">Choose your preferred language</p>;
        <div className="grid grid-cols-2 gap-3 mt-4">;
          {languages.map((language) => (;
            <Card;
ursor/fix-website-loading-errors-and-merge-6662
              key={language.code}
                selectedLanguage === language.code
                  ? "border-primary bg-primary/5"
              onClick = {(,) => setSelectedLanguage(language && language.code),}
            >;
              <CardContent className='p-3 flex items-center justify-between'>;
                <div className='flex items-center'>;
                  <span className='text-xl mr-2'>{language && language.flag}</span>;
                  <span>{language && language.name}</span>;
                </div>;
                {selectedLanguage === language && language.code && (;
                  <Check className='h-4 w-4 text-primary' />                )}          {languages && languages.map((language) => (;
            <Card
              key={language && language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/40"
              }`}
              onClick={() => setSelectedLanguage(language.code)}
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
                  <Check className='h-4 w-4 text-primary' />                )}          {languages.map((language) => (
            <Card
            <Card 
                  <Check className="h-4 w-4 text-primary" />
import React, { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useTheme } from "@/hooks/useTheme",;
import { Moon, Sun, Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card",;
interface Language {;
  code: string,;
  name: string,;
  flag: string;
}
;
const languages: Language[] = [;
  { code: "en", name: "English", flag: "🇺🇸" },;
  { code: "es", name: "Español", flag: "🇪🇸" },;
  { code: "fr", name: "Français", flag: "🇫🇷" },;
  { code: "de", name: "Deutsch", flag: "🇩🇪" },;
  { code: "zh", name: "中文", flag: "🇨🇳" }],;
export function LanguageThemeSelector() {;
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  return (;
    <div className="space-y-8 px-4">;
      <div className="space-y-2">;
        <h2 className="text-xl font-medium">Select your language</h2>;
        <p className="text-muted-foreground">Choose your preferred language</p>;
        <div className="grid grid-cols-2 gap-3 mt-4">;
          {languages.map((language) => (;
            <Card;
              key={language.code}
              className={`cursor-pointer transition-all ${
                selectedLanguage === language.code
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/40"
              }`}
              onClick={() => setSelectedLanguage(language.code)}
            >
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className='space-y-2'>
        <h2 className='text-xl font-medium'>Choose theme</h2>
        <p className='text-muted-foreground'>
          Select your preferred appearance
        </p>
        <div className='flex gap-3 mt-4'>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onClick={() => setSelectedLanguage(language.code)}

            >;
              <CardContent className="p-3 flex items-center justify-between">;
                <div className="flex items-center">;
                  <span className="text-xl mr-2">{language.flag}</span>;
                  <span>{language.name}</span>;
                </div>;
                {selectedLanguage === language.code && (;
                  <Check className="h-4 w-4 text-primary" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/mobile/components/onboarding/LanguageThemeSelector.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                )}
              </CardContent>;
            </Card>;
          ))}
        </div>
      </div>

<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src_backup/mobile/components/onboarding/LanguageThemeSelector.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
<div className='space-y-2>
        <h2 className=text-xl font-medium'>Choose theme</h2>
        <p className='text-muted-foreground>
          Select your preferred appearance
        </p>
        <div className=flex gap-3 mt-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </div>;
      </div>;

      <div className='space-y-2'>;
        <h2 className='text-xl font-medium'>Choose theme</h2>;
        <p className='text-muted-foreground'>;
          Select your preferred appearance;
        </p>;

        <div className='flex gap-3 mt-4'>;

<<<<<<< HEAD

=======
<<<<<<< HEAD
              theme === 'light'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
ursor/fix-website-loading-errors-and-merge-6662
            }`}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/mobile/components/onboarding/LanguageThemeSelector.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Card
              theme === 'light
                ? border-primary bg-primary/5'
                : 'border-border hover:border-primary/40
            }`}
            onClick = {() => setTheme(light')}
          >;
            <CardContent className='p-3 flex flex-col items-center justify-center>;
              <Sun className=h-8 w-8 mb-2' />;
              <span>Light</span>;
              {theme === 'light && (;
                <Check className=h-4 w-4 text-primary mt-2' />;
              )}

            </CardContent>;
          </Card>;


          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark
                ? border-primary bg-primary/5'
                : 'border-border hover:border-primary/40
            }`}
            onClick = {() => setTheme('dark'),}
          >;
            <CardContent className='p-3 flex flex-col items-center justify-center'>;
              <Moon className='h-8 w-8 mb-2' />;
              <span>Dark</span>;
              {theme === 'dark' && (;
                <Check className='h-4 w-4 text-primary mt-2' />              )}              )}
            </CardContent>;
          </Card>;
<<<<<<< HEAD
                <Check className='h-4 w-4 text-primary mt-2' />;

=======
                <Check className="h-4 w-4 text-primary mt-2" />;

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD:src_backup/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </div>
      </div>


<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="space-y-2">
        <h2 className="text-xl font-medium">Choose theme</h2>
        <p className="text-muted-foreground">Select your preferred appearance</p>
        
<<<<<<< HEAD
        <div className='flex gap-3 mt-4'>
          <Card 
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'light' 
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-primary/40'
=======
        <div className="flex gap-3 mt-4">
          <Card 
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'light' 
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/40"
>>>>>>> origin/resolved-merge-conflicts



            }`}
            onClick={() => setTheme('light')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/mobile/components/onboarding/LanguageThemeSelector.tsx
<<<<<<< HEAD
          >
            <CardContent className='p-3 flex flex-col items-center justify-center'>
              <Sun className='h-8 w-8 mb-2' />
              <span>Light</span>
              {theme === 'light' && (
                <Check className='h-4 w-4 text-primary mt-2' />
              )}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
              <Sun className="h-8 w-8 mb-2" />
              <span>Light</span>
              {theme === 'light' && (
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

            </CardContent>;
          </Card>;

          <Card
            className={`flex-1 cursor-pointer transition-all ${
            </CardContent>
          </Card>
              )}
            </CardContent>
          </Card>
          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
            }`}
            onClick = {() => setTheme('dark'),}
          >
            <CardContent className='p-3 flex flex-col items-center justify-center'>
              <Moon className='h-8 w-8 mb-2' />
              <span>Dark</span>
              {theme === 'dark' && (
                <Check className='h-4 w-4 text-primary mt-2' />              )}              )}
            </CardContent>
          </Card>
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
            </CardContent>
          </Card>
          <Card
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark'
                ? "border-primary bg-primary/5"
          <Card 
            className={`flex-1 cursor-pointer transition-all ${
          
          <Card 
            className={`flex-1 cursor-pointer transition-all ${
              theme === 'dark' 
                ? "border-primary bg-primary/5" 
          
          <Card 
            className={`flex-1 cursor-pointer transition-all ${



              theme === 'dark' 
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/40"
            onClick={() => setTheme('dark')}
          >
            <CardContent className="p-3 flex flex-col items-center justify-center">
              <Moon className="h-8 w-8 mb-2" />
              <span>Dark</span>
              {theme === 'dark' && (
                <Check className="h-4 w-4 text-primary mt-2" />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </CardContent>;
          </Card>;

          <Card
            className={`flex-1 cursor-pointer transition-all ${
            </CardContent>
          </Card>

          <Card 
            className={`flex-1 cursor-pointer transition-all ${

          
          <Card 
            className={`flex-1 cursor-pointer transition-all ${



              theme === 'dark' 
<<<<<<< HEAD
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-primary/40'
=======
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/40"
>>>>>>> origin/resolved-merge-conflicts
            }`}
            onClick={() => setTheme('dark')}


              )}


<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </div>;
    </div>;
  );
};
<<<<<<< HEAD




=======
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </div>;
  );
}
;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from 'react';
import { Button } from '@/components/ui/ button';
import { use_theme } from '@/hooks/ use_theme';
import { Moon, Sun, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/ card';
interface Language {
  code: string;
  name: string;
  flag: string;
const languages: Language[] = [;
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];
export /**
 * LanguageThemeSelector - Function description
 */
function LanguageThemeSelector() {
  const { theme, set_theme } = use_theme ();
  const [selected_language, setSelectedLanguage] = useState < string>('en');
  return (
    <div className='space - y-8 px - 4'>;
      <div className='space - y-2'>;
        <h2 className='text - xl font - medium'>Select your language</h2>;
        <p className='text - muted - foreground'>Choose your preferred language</p>;
        <div className='grid grid - cols - 2 gap - 3 mt - 4'>;
          {languages.map (language => (
            <Card;
<<<<<<< HEAD
              key={language.code}    <div className='space - y-8 px - 4'>;
      <div className='space - y-2'>;
        <h2 className='text - xl font - medium'>Select your language</h2>;
        <p className='text - muted - foreground'>Choose your preferred language</p>;
        <div className='grid grid - cols - 2 gap - 3 mt - 4'>;
=======
              key={language.code}    <div className="space - y-8 px - 4">;
      <div className="space - y-2">;
        <h2 className="text - xl font - medium">Select your language</h2>;
        <p className="text - muted - foreground">Choose your preferred language</p>;
        <div className="grid grid - cols - 2 gap - 3 mt - 4">;
>>>>>>> origin/resolved-merge-conflicts
          {languages.map ((language, ) => (
            <Card;
              key = {language.code, }
              className={`cursor - pointer transition - all ${
                selected_language === language.code;
                  ? 'border - primary bg - primary / 5';
                  : 'border - border hover:border - primary / 40';
              }`}
              on_click = {(, ) => setSelectedLanguage (language.code), }
            >;
              <CardContent className='p - 3 flex items - center justify - between'>;
                <div className='flex items - center'>;
                  <span className='text - xl mr - 2'>{language.flag}</span>;
                  <span>{language.name}</span>;
                </div>;
                {selected_language === language.code && (
                  <Check className='h - 4 w - 4 text - primary' />                )}          {languages.map ((language) => (
            <Card;
              key={language.code}
              className={`cursor - pointer transition - all ${
                selected_language === language.code;
<<<<<<< HEAD
                  ? 'border - primary bg - primary / 5';
                  : 'border - border hover:border - primary / 40';
              }`}
              on_click={() => setSelectedLanguage (language.code)}
            >;
              <CardContent className='p - 3 flex items - center justify - between'>;
                <div className='flex items - center'>;
                  <span className='text - xl mr - 2'>{language.flag}</span>;
                  <span>{language.name}</span>;
                </div>;
                {selected_language === language.code && (
                  <Check className='h - 4 w - 4 text - primary' />)}
=======
                  ? "border - primary bg - primary / 5";
                  : "border - border hover:border - primary / 40";
              }`}
              on_click={() => setSelectedLanguage (language.code)}
            >;
              <CardContent className="p - 3 flex items - center justify - between">;
                <div className="flex items - center">;
                  <span className="text - xl mr - 2">{language.flag}</span>;
                  <span>{language.name}</span>;
                </div>;
                {selected_language === language.code && (
                  <Check className="h - 4 w - 4 text - primary" />)}
>>>>>>> origin/resolved-merge-conflicts
              </CardContent>;
            </Card>))}
        </div>;
      </div>;
      <div className='space - y-2'>;
        <h2 className='text - xl font - medium'>Choose theme</h2>;
        <p className='text - muted - foreground'>;
          Select your preferred appearance;
        </p>;
        <div className='flex gap - 3 mt - 4'>;
          <Card;
              theme === 'light';
                ? 'border - primary bg - primary / 5';
                : 'border - border hover:border - primary / 40';
            }`}
            on_click = {() => set_theme ('light'), }
          >;
            <CardContent className='p - 3 flex flex - col items - center justify - center'>;
              <Sun className='h - 8 w - 8 mb - 2' />;
              <span > Light</span>;
              {theme === 'light' && (
                <Check className='h - 4 w - 4 text - primary mt - 2' />)}
            </CardContent>;
          </Card>;
          <Card;
            className={`flex - 1 cursor - pointer transition - all ${
              theme === 'dark';
                ? 'border - primary bg - primary / 5';
                : 'border - border hover:border - primary / 40';
            }`}
            on_click = {() => set_theme ('dark'), }
          >;
            <CardContent className='p - 3 flex flex - col items - center justify - center'>;
              <Moon className='h - 8 w - 8 mb - 2' />;
              <span > Dark</span>;
              {theme === 'dark' && (
                <Check className='h - 4 w - 4 text - primary mt - 2' />              )}              )}
            </CardContent>;
          </Card>;
<<<<<<< HEAD
                <Check className='h - 4 w - 4 text - primary mt - 2' />)}
=======
                <Check className="h - 4 w - 4 text - primary mt - 2" />)}
>>>>>>> origin/resolved-merge-conflicts
            </CardContent>;
          </Card>;
          <Card;
            className={`flex - 1 cursor - pointer transition - all ${
              theme === 'dark';
<<<<<<< HEAD
                ? 'border - primary bg - primary / 5';
                : 'border - border hover:border - primary / 40';
            }`}
            on_click={() => set_theme ('dark')}
          >;
            <CardContent className='p - 3 flex flex - col items - center justify - center'>;
              <Moon className='h - 8 w - 8 mb - 2' />;
              <span > Dark</span>;
              {theme === 'dark' && (
                <Check className='h - 4 w - 4 text - primary mt - 2' />)}
=======
                ? "border - primary bg - primary / 5";
                : "border - border hover:border - primary / 40";
            }`}
            on_click={() => set_theme ('dark')}
          >;
            <CardContent className="p - 3 flex flex - col items - center justify - center">;
              <Moon className="h - 8 w - 8 mb - 2" />;
              <span > Dark</span>;
              {theme === 'dark' && (
                <Check className="h - 4 w - 4 text - primary mt - 2" />)}
>>>>>>> origin/resolved-merge-conflicts
            </CardContent>;
          </Card>;
        </div>;
      </div>;

  );
}

    </div>);
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD:src_backup/mobile/components/onboarding/LanguageThemeSelector.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src_backup/mobile/components/onboarding/LanguageThemeSelector.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
;
          >
            <CardContent className='p-3 flex flex-col items-center justify-center'>
              <Moon className='h-8 w-8 mb-2' />
              <span>Dark</span>
              {theme === 'dark && (
                <Check className=h-4 w-4 text-primary mt-2' />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/mobile/components/onboarding/LanguageThemeSelector.tsx
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
