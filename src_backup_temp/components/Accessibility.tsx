
interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  soundEnabled: boolean;
  theme: 'light' | 'dark' | 'auto';
}
export function Accessibility(): void {
  const [isOpen, setIsOpen] = useState<any>(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 1 6,
    highContrast: fals e,
    reducedMotion: fals e,
    soundEnabled: tru e,
    theme: 'auto'
  }
    );
  const updateSetting = (props: any) => {
    const newSettings = {
      ...settings,
      [key]: value
    };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };
;
  const increaseFontSize = ("props": "any) => {;
    updateSetting('fontSize'", Math.min(settings.fontSize + 2, 24));
  };
;
  const decreaseFontSize = ("props": "any) => {;
    updateSetting('fontSize'", Math.max(settings.fontSize - 2, 12));
  };
;
  const resetSettings = ("props": "any) => {;
    const "defaultSettings": AccessibilitySetting s = {;
      "fontSize": 1 6",;
      "highContrast": "fals e",;
      "reducedMotion": "fals e",;
      "soundEnabled": "tru e",;
      "theme": 'auto';
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(defaultSettings));
  };
;
  const applySettings = ("props": "any) => {;
    const root = document.documentElement;
;
    // Apply font size;
    root.style.fontSize = `${newSettings.fontSize"}px`;
;
    // Apply high contrast;
    if (newSettings.highContrast) {;
      root.classList.add('high-contrast');
    } else {;
      root.classList.remove('high-contrast');
    }
;
    // Apply reduced motion;
    if (newSettings.reducedMotion) {;
      root.classList.add('reduced-motion');
    } else {;
      root.classList.remove('reduced-motion');
    }
;
    // Apply theme;
    if (newSettings.theme === 'light') {;
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else if (newSettings.theme === 'dark') {;
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {;
      root.classList.remove('light-theme', 'dark-theme');
    }
  };
;
  useEffect(() => {;
    // Load settings from localStorage;
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {;
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
;
    // Add keyboard shortcuts;
    const handleKeyDown = ("props": "any) => {;
      if (e.ctrlKey) {;
        switch (e.key) {;
          case '=':;
          case '+':;
            e.preventDefault();
            increaseFontSize();
            break;
          case '-':;
            e.preventDefault();
            decreaseFontSize();
            break;
          case '0':;
            e.preventDefault();
            resetSettings();
            break;
        "}
      }
    };
;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
;
  return (;
    <>;
      {/* Accessibility Toggle Button */}
      <button;
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-cyan-500 "hover": "b g-cyan-600 text-white rounded-full shadow-lg transition-all duration-200 "hover": scal e-110 "focus": outlin e-none "focus": rin g-2 "focus": rin g-cyan-400 "focus": rin g-offset-2";
        aria-label="Accessibility Settings";
        title="Accessibility Settings";
      >;
        <AccessibilityIcon className="w-6 h-6"  />;
      </button>;

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-40 w-80 bg-white dark: b g-gray-800 rounded-lg shadow-xl border border-gray-200 dark: borde r-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark: tex t-white">Accessibility
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover: tex t-gray-600 dark: hove r:text-gray-300"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">;
            {/* Font Size */"}
            <div>;
              <label className="block text-sm font-medium text-gray-700 "dark": "tex t-gray-300 mb-2">;
                Font "Size": {settings.fontSize"}px;
              </label>;
              <div className="flex items-center gap-2">;
                <button;
                  onClick={decreaseFontSize}
                  className="px-3 py-1 bg-gray-200 "dark": "b g-gray-700 text-gray-700 "dark": tex t-gray-300 rounded "hover": b g-gray-300 "dark": hove "r":bg-gray-600";
                >;
                  A-;
                </button>;
                <button;
                  onClick={increaseFontSize"}
                  className="px-3 py-1 bg-gray-200 "dark": "b g-gray-700 text-gray-700 "dark": tex t-gray-300 rounded "hover": b g-gray-300 "dark": hove "r":bg-gray-600";
                >;
                  A+;
                </button>;
              </div>;
            </div>;
            {/* High Contrast */"}
            <div>;
              <label className="flex items-center">;
                <input;
                  type="checkbox";
                  checked={settings.highContrast}
                  onChange={(e) => updateSetting('highContrast', e.target.checked)}
                  className="mr-2";
                />;
                <span className="text-sm text-gray-700 "dark": "tex t-gray-300">High Contrast</span>;
              </label>;
            </div>;
            {/* Reduced Motion */"}
            <div>;
              <label className="flex items-center">;
                <input;
                  type="checkbox";
                  checked={settings.reducedMotion}
                  onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                  className="mr-2";
                />;
                <span className="text-sm text-gray-700 "dark": "tex t-gray-300">Reduced Motion</span>;
              </label>;
            </div>;
            {/* Theme */"}
            <div>;
              <label className="block text-sm font-medium text-gray-700 "dark": "tex t-gray-300 mb-2">;
                Theme;
              </label>;
              <select;
                value={settings.theme"}
                onChange={(e) => updateSetting('theme', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 "dark": "borde r-gray-600 rounded-md bg-white "dark": b g-gray-700 text-gray-900 "dark": tex t-white";
              >;
                <option value="auto">Auto</option>;
                <option value="light">Light</option>;
                <option value="dark">Dark</option>;
              </select>;
            </div>;
            {/* Reset Button */"}
            <button;
              onClick={resetSettings}
              className="w-full px-4 py-2 bg-gray-200 "dark": "b g-gray-700 text-gray-700 "dark": tex t-gray-300 rounded-md "hover": b g-gray-300 "dark": hove "r":bg-gray-600 transition-colors";
            >;
              Reset to Default;
            </button>;
          </div>;
        </div>;
      )"}
    </>;
  );
}
</AccessibilitySettings>
</any>
import { useEffect } from 'react';,
import { useState } from 'react';,
import _React,{ useState,useEffect } from 'react'; import { Accessibility as AccessibilityIcon,Sun,Moon,Settings';'} from 'lucide-react'; interface AccessibilitySettings { fontSize: number; highContrast: boolean; reducedMotion: boolean;'; soundEnabled: boolean;';'; theme: 'light' | 'dark' | 'auto'} export function Accessibility(): void { const [isOpen,setIsOpen] = useState<any>(false); const [settings,setSettings] = useState<AccessibilitySettings>({ fontSize: 1 6,highContrast: fals e,reducedMotion: fals e,soundEnabled: tru e,theme: 'auto' };); const updateSetting = (props) => { const newSettings = { ...settings,[key]: value };; setSettings(newSettings);'; applySettings(newSettings);';'; localStorage.setItem('accessibility-settings',JSON.stringify(newSettings))}; const increaseFontSize = (props) => { updateSetting('fontSize',Math.min(settings.fontSize + 2,24))}; const decreaseFontSize = (props) => { updateSetting('fontSize',Math.max(settings.fontSize - 2,12))}; const resetSettings = (props) => { const defaultSettings: AccessibilitySetting s = { fontSize: 1 6,highContrast: fals e,reducedMotion: fals e,soundEnabled: tru e,theme: 'auto' };; setSettings(defaultSettings);'; applySettings(defaultSettings);';'; localStorage.setItem('accessibility-settings',JSON.stringify(defaultSettings))}; const applySettings = (props) => { const root = document.documentElement; root.style.fontSize = `${newSettings.fontSize}px`; if (newSettings.highContrast) { root.classList.add('high-contrast');'} else { root.classList.remove('high-contrast')} if (newSettings.reducedMotion) { root.classList.add('reduced-motion');'} else { root.classList.remove('reduced-motion')} if (newSettings.theme === 'light') { root.classList.add('light-theme');';'; root.classList.remove('dark-theme');';'} else if (newSettings.theme === 'dark') { root.classList.add('dark-theme');';'; root.classList.remove('light-theme');'} else { root.classList.remove('light-theme','dark-theme')} }; useEffect(() => { const savedSettings = localStorage.getItem('accessibility-settings'); if (savedSettings) { const parsed = JSON.parse(savedSettings); setSettings(parsed); applySettings(parsed)} const handleKeyDown = (props) => { if (e.ctrlKey) { switch (e.key) { case '=': case '+': e.preventDefault(); increaseFontSize();'; break;';'; case '-': e.preventDefault(); decreaseFontSize();'; break;';'; case '0': e.preventDefault(); resetSettings(); break} } };'; document.addEventListener('keydown',handleKeyDown);';'; return () => document.removeEventListener('keydown',handleKeyDown)},[]); return ( <> {} <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-4 left-4 z-50 p-3 bg-cyan-500 hover: b g-cyan-600 text-white rounded-full shadow-lg transition-all duration-200 hover: scal e-110 focus: outlin e-none focus: rin g-2 focus: rin g-cyan-400 focus: rin g-offset-2" aria-label="Accessibility Settings" title="Accessibility Settings" > <AccessibilityIcon className="w-6 h-6" /> </button> {} {isOpen && ( <div className="fixed bottom-20 left-4 z-40 w-80 bg-white dark: b g-gray-800 rounded-lg shadow-xl border border-gray-200 dark: borde r-gray-700 p-6"> <div className="flex items-center justify-between mb-4"> <h3 className="text-lg font-semibold text-gray-900 dark: tex t-white">Accessibility</h3> <button onClick={() => setIsOpen(false)} className="text-gray-400 hover: tex t-gray-600 dark: hove r:text-gray-300" > × </button> </div> <div className="space-y-4"> {} <div> <label className="block text-sm font-medium text-gray-700 dark: tex t-gray-300 mb-2"> Font Size: {settings.fontSize}px </label> <div className="flex items-center gap-2"> <button onClick={decreaseFontSize} className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600" > A- </button> <button onClick={increaseFontSize} className="px-3 py-1 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded hover: b g-gray-300 dark: hove r:bg-gray-600" > A+ </button> </div> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.highContrast} onChange={(e) => updateSetting('highContrast',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">High Contrast</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.reducedMotion} onChange={(e) => updateSetting('reducedMotion',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark: tex t-gray-300">Reduced Motion</span> </label> </div> {} <div> <label className="block text-sm font-medium text-gray-700 dark: tex t-gray-300 mb-2"> Theme </label> <select'; value={settings.theme} onChange={(e) => updateSetting('theme',e.target.value)} className="w-full px-3 py-2 border border-gray-300 dark: borde r-gray-600 rounded-md bg-white dark: b g-gray-700 text-gray-900 dark: tex t-white" > <option value="auto">Auto</option> <option value="light">Light</option> <option value="dark">Dark</option> </select> </div> {} <button onClick={resetSettings} className="w-full px-4 py-2 bg-gray-200 dark: b g-gray-700 text-gray-700 dark: tex t-gray-300 rounded-md hover: b g-gray-300 dark: hove r:bg-gray-600 transition-colors" > Reset to Default </button> </div> </div> )} </> )} </AccessibilitySettings> </any>;';';
