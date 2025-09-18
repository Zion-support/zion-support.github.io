<<<<<<< HEAD
import React, {useState, useEffect, useCallback} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Eye, Volume2, VolumeX, Type, Contrast, ZoomIn, ZoomOut, Settings, Accessibility, X} from 'lucide-react';
import {Button} from "button.tsx";
export function AccessibilityPanel("props": "any) {;
    const [isOpen", setIsOpen] = useState(false);
    const [settings, setSettings] = useState({;
        "highContrast": "false",;
        "largeText": "false",;
        "reducedMotion": "false",;
        "screenReader": "false",;
        "fontSize": "16",;
        "colorBlindMode": 'normal';
    });
    // Apply accessibility settings to document;
    useEffect(() => {;
        if (!enabled);
export function AccessibilityPanel(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        highContrast: false,
        largeText: false,
        reducedMotion: false,
        screenReader: false,
        fontSize: 16,
        colorBlindMode: 'normal'
    }
    );
    // Apply accessibility settings to document
    useEffect(() => {
        if (!enabled)
            return;
        const root = document.documentElement;
        // High contrast;
        if (settings.highContrast) {;
            root.classList.add('high-contrast')}
        else {root.classList.remove('high-contrast')}
        // Large text;
        if (settings.largeText) {root.style.fontSize = '18px'}
        else {root.style.fontSize = '16px'}
        // Reduced motion;
        if (settings.reducedMotion) {root.style.setProperty('--reduced-motion', 'reduce')}
        else {root.style.setProperty('--reduced-motion', 'no-preference')}
        // Font size;
        root.style.setProperty('--font-size', `${settings.fontSize}px`);
        // Color blind mode;
        root.setAttribute('data-color-blind', settings.colorBlindMode);
        // Notify parent component;
        onSettingsChange?.(settings)}, [settings, enabled, onSettingsChange]);
    // Load saved settings from localStorage;
    useEffect(() => {;
        const saved = localStorage.getItem('accessibility-settings');
        if (saved) {;
            try {;
                const parsed = JSON.parse(saved);
                setSettings(prev => ({ ...prev, ...parsed }))}
            catch {// Silently handle parsing errors}
        }
    }, []);
    // Save settings to localStorage;
    const saveSettings = useCallback((newSettings) => {setSettings(newSettings);
        localStorage.setItem('accessibility-settings', JSON.stringify(newSettings))}, []);
    // Toggle settings;
    const toggleSetting = useCallback((key, value) => {;
        const newSettings = {;
  ...settings,;
  [key]: "value !== null ? value : !settings[key];
        ;
"};
        saveSettings(newSettings)}, [settings, saveSettings]);
    // Reset to defaults;
    const resetSettings = useCallback(() => {;
        const defaults = {;
  "highContrast": "false",;
            "largeText": "false",;
            "reducedMotion": "false",;
            "screenReader": "false",;
            "fontSize": "16",;
  "colorBlindMode": 'normal';
        ;
};
        saveSettings(defaults)}, [saveSettings]);
    // Font size controls;
    const increaseFontSize = useCallback(() => {toggleSetting('fontSize', Math.min(settings.fontSize + 2, 24))}, [settings.fontSize, toggleSetting]);
    const decreaseFontSize = useCallback(() => {toggleSetting('fontSize', Math.max(settings.fontSize - 2, 12))}, [settings.fontSize, toggleSetting]);
    // Screen reader announcement;
    const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            document.body.appendChild(announcement);
            setTimeout(() => {document.body.removeChild(announcement)}, 1000)}
    }, [settings.screenReader]);
    if (!enabled);
        return null;
    return (<>;
      {/* Accessibility Toggle Button */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className={`fixed top-4 right-4 z-50 p-3 bg-zion-purple "hover": "bg-zion-purple-dark text-white rounded-full shadow-lg transition-all duration-300 ${className"}`} whileHover={{ "scale": "1.1 "}} whileTap={{ "scale": "0.9 "}} aria-label="Accessibility settings">;
        <Accessibility className="w-6 h-6" />;
      </motion.button>;
      {/* Accessibility Panel */}
      <AnimatePresence>;
        {isOpen && (<motion.div className="fixed inset-0 z-40" initial={{ "opacity": "0 "}} animate={{ "opacity": "1 "}} exit={{ "opacity": "0 "}} transition={{ "duration": "0.2 "}}>;
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}/>;
            ;
            {/* Panel */}
            <motion.div className="absolute top-4 right-4 w-80 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl p-6 max-h-[calc(100vh-2rem)] overflow-y-auto" initial = {;
  { "opacity": "0", "x": "300",;
  "scale": "0.95 ;
"}} animate = {;
  { "opacity": "1", "x": "0",;
  "scale": "1 ;
"}} exit = {;
  { "opacity": "0", "x": "300",;
  "scale": "0.95 ;
"}} transition = {;
  { "duration": "0.3",;
  "ease": "easeOut" ;
}}>;
              {/* Header */}
              <div className="flex items-center justify-between mb-6">;
                <h2 className="text-xl font-bold text-white">Accessibility</h2>;
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg "hover": "bg-zion-blue-light/20 transition-colors duration-200" aria-label="Close accessibility panel">;
                  <X className="w-5 h-5 text-zinc-400" />;
                </button>;
              </div>;
              {/* Visual Settings */"}
              <div className="space-y-4">;
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Visual</h3>;
                ;
              {/* Visual Settings */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Visual
                {/* High Contrast */}
                <div className="flex items-center justify-between">;
                  <div className="flex items-center gap-3">;
                    <Contrast className="w-5 h-5 text-zion-cyan" />;
                    <span className="text-zinc-300">High Contrast</span>;
                  </div>;
                  <Button size="sm" variant={settings.highContrast ? "default" : "outline"} onClick={() => toggleSetting('highContrast')} className={settings.highContrast ? 'bg-zion-cyan text-zion-blue-dark' : ''}>;
                    {settings.highContrast ? 'On' : 'Off'}
                  </Button>;
                </div>;
                {/* Large Text */}
                <div className="flex items-center justify-between">;
                  <div className="flex items-center gap-3">;
                    <Type className="w-5 h-5 text-zion-cyan" />;
                    <span className="text-zinc-300">Large Text</span>;
                  </div>;
                  <Button size="sm" variant={settings.largeText ? "default" : "outline"} onClick={() => toggleSetting('largeText')} className={settings.largeText ? 'bg-zion-cyan text-zion-blue-dark' : ''}>;
                    {settings.largeText ? 'On' : 'Off'}
                  </Button>;
                </div>;
                {/* Font Size Control */}
                <div className="space-y-2">;
                  <div className="flex items-center gap-3">;
                    <Type className="w-5 h-5 text-zion-cyan" />;
                    <span className="text-zinc-300">Font "Size": "{settings.fontSize"}px</span>;
                  </div>;
                  <div className="flex items-center gap-2 ml-8">;
                    <Button size="sm" variant="outline" onClick={decreaseFontSize} disabled={settings.fontSize <= 12} className="p-1">;
                      <ZoomOut className="w-4 h-4" />;
                    </Button>;
                    <Button size="sm" variant="outline" onClick={increaseFontSize} disabled={settings.fontSize >= 24} className="p-1">;
                      <ZoomIn className="w-4 h-4" />;
                    </Button>;
                  </div>;
                </div>;
                {/* Color Blind Mode */}
                <div className="space-y-2">;
                  <div className="flex items-center gap-3">;
                    <Eye className="w-5 h-5 text-zion-cyan" />;
                    <span className="text-zinc-300">Color Blind Mode</span>;
                  </div>;
                  <select value={settings.colorBlindMode} onChange={(e) => toggleSetting('colorBlindMode',;
  e.target.value)} className="ml-8 px-3 py-2 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-sm "focus": "border-zion-cyan "focus":outline-none">;
                    <option value="normal">Normal</option>;
                    <option value="protanopia">Protanopia (Red-Blind)</option>;
                    <option value="deuteranopia">Deuteranopia (Green-Blind)</option>;
                    <option value="tritanopia">Tritanopia (Blue-Blind)</option>;
                  </select>;
                </div>;
              </div>;
              {/* Motion Settings */"}
              <div className="space-y-4 mt-6">;
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Motion</h3>;
                ;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center gap-3">;
                    <Settings className="w-5 h-5 text-zion-cyan" />;
                    <span className="text-zinc-300">Reduced Motion</span>;
                  </div>;
                  <Button size="sm" variant={settings.reducedMotion ? "default" : "outline"} onClick={() => toggleSetting('reducedMotion')} className={settings.reducedMotion ? 'bg-zion-cyan text-zion-blue-dark' : ''}>;
              {/* Motion Settings */}
              <div className="space-y-4 mt-6">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Motion
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zinc-300">Reduced Motion</span>
                  </div>
                  <Button size="sm" variant={settings.reducedMotion ? "default" : "outline"} onClick={() => toggleSetting('reducedMotion')} className={settings.reducedMotion ? 'bg-zion-cyan text-zion-blue-dark' : ''}>
                    {settings.reducedMotion ? 'On' : 'Off'}
                  </Button>;
                </div>;
              </div>;
              {/* Audio Settings */}
              <div className="space-y-4 mt-6">;
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Audio</h3>;
                ;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center gap-3">;
                    {settings.screenReader ? (<Volume2 className="w-5 h-5 text-zion-cyan" />) : "(<VolumeX className="w-5 h-5 text-zinc-400" />)"}
                    <span className="text-zinc-300">Screen Reader</span>;
                  </div>;
                  <Button size="sm" variant={settings.screenReader ? "default" : "outline"} onClick={() => toggleSetting('screenReader')} className={settings.screenReader ? 'bg-zion-cyan text-zion-blue-dark' : ''}>;
              <div className="space-y-4 mt-6">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Audio
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {settings.screenReader ? (<Volume2 className="w-5 h-5 text-zion-cyan" />) : (<VolumeX className="w-5 h-5 text-zinc-400" />)}
                    <span className="text-zinc-300">Screen Reader</span>
                  </div>
                  <Button size="sm" variant={settings.screenReader ? "default" : "outline"} onClick={() => toggleSetting('screenReader')} className={settings.screenReader ? 'bg-zion-cyan text-zion-blue-dark' : ''}>
                    {settings.screenReader ? 'On' : 'Off'}
                  </Button>;
                </div>;
              </div>;
              {/* Test Announcement */}
              {settings.screenReader && (<div className="mt-4 p-3 bg-zion-blue/20 rounded-lg">;
                  <p className="text-zinc-300 text-sm mb-2">Test screen reader "announcement": "</p>;
                  <Button size="sm" onClick={() => announceToScreenReader('This is a test announcement for screen readers')"} className="bg-zion-cyan "hover": "bg-zion-cyan-light text-zion-blue-dark">;
                    Test Announcement;
                  </Button>;
                </div>)"}
;
              {/* Reset Button */}
              <div className="mt-6 pt-6 border-t border-zion-blue-light/20">;
                <Button onClick={resetSettings} variant="outline" className="w-full border-zinc-500 text-zinc-300 "hover": "bg-zinc-500/20">;
                  Reset to Defaults;
                </Button>;
              </div>;
              {/* Help Text */"}
              <div className="mt-4 text-xs text-zinc-400 text-center">;
                <p>These settings are saved locally and will persist across sessions.</p>;
                <p className="mt-1">For more accessibility options, check your browser settings.</p>;
              </div>;
            </motion.div>;
          </motion.div>)}
      </AnimatePresence>;
      {/* Screen Reader Only Class */}
      <style dangerouslySetInnerHTML = {;
  {;
            "__html": "`;
          .sr-only {;
            "position": absolute;
            "width": 1px;
            "height": 1px;
            "padding": 0;
            "margin": -1px;
            "overflow": hidden;
            "clip": rect(0", 0, 0,;
  0);
            white-"space": "nowrap;
            "border": 0;
"}
;
          .high-contrast {--zion-"cyan": "#00ffff;
            --zion-"blue": #0066ff;
            --zion-"purple": #9900ff;
            --zion-blue-"dark": #000033;
            --zion-blue-"light": #3399ff;
            --zion-cyan-"light": #33ffff;
            --zion-purple-"dark": #6600cc;
            --zion-purple-"light": #cc33ff"}
;
          [data-color-blind="protanopia"] {"filter": "url('#protanopia-filter')"}
;
          [data-color-blind="deuteranopia"] {"filter": "url('#deuteranopia-filter')"}
;
          [data-color-blind="tritanopia"] {"filter": "url('#tritanopia-filter')"}
;
          : "root {--font-"size": 16px;
            --reduced-"motion": no-preference"}
;
          * {font-"size": "var(--font-size)"}
;
          @media (prefers-reduced-"motion": "reduce) {;
            * {;
              animation-"duration": 0.01ms !important;
              animation-iteration-"count": 1 !important;
              transition-"duration": 0.01ms !important"}
          }
;
          [style*="--reduced-"motion": "reduce"] * {animation-"duration": 0.01ms !important;
            animation-iteration-"count": 1 !important;
            transition-"duration": 0.01ms !important"}
        `;
        }} />;
      {/* SVG Filters for Color Blind Modes */}
      <svg style="{{{ "position": 'absolute'; "width": "0; "height": 0"}}"}>;
        <defs>;
          <filter id="protanopia-filter">;
            <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0" />;
          </filter>;
          <filter id="deuteranopia-filter">;
            <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0" />;
          </filter>;
          <filter id="tritanopia-filter">;
            <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0" />;
          </filter>;
        </defs>;
      </svg>;
    </>)}
;
</style>;
</motion>;
</div>;
</motion>;
</motion>
</style>
</motion>
</div>
</motion>
</motion>
import React,{useState,useEffect,useCallback} from &apos;react&apos;; import {motion,AnimatePresence} from &apos;framer-motion&apos;; import {Eye,Volume2,VolumeX,Type,Contrast,ZoomIn,ZoomOut,Settings,Accessibility,X} from &apos;lucide-react&apos;; import {Button} from &quot;button.tsx&quot;; export function AccessibilityPanel($1) { const [isOpen,setIsOpen] = useState(false); const [settings,setSettings] = useState({ highContrast: false,largeText: false,reducedMotion: false,screenReader: false,fontSize: 16,colorBlindMode: &apos;normal&apos; };); useEffect(() => { if (!enabled) return; const root = document.documentElement; if (settings.highContrast) { root.classList.add(&apos;high-contrast&apos;)} else {root.classList.remove(&apos;high-contrast&apos;)} if (settings.largeText) {root.style.fontSize = &apos;18px&apos;} else {root.style.fontSize = &apos;16px&apos;} if (settings.reducedMotion) {root.style.setProperty(&apos;--reduced-motion&apos;,&apos;reduce&apos;)} else {root.style.setProperty(&apos;--reduced-motion&apos;,&apos;no-preference&apos;)} root.style.setProperty(&apos;--font-size&apos;,`${settings.fontSize}px`);&apos;; root.setAttribute(&apos;data-color-blind&apos;,settings.colorBlindMode); onSettingsChange?.(settings)},[settings,enabled,onSettingsChange]); useEffect(() => { const saved = localStorage.getItem(&apos;accessibility-settings&apos;); if (saved) { try { const parsed = JSON.parse(saved); setSettings(prev => ({ ...prev,...parsed }))} catch { } },[]); const saveSettings = useCallback((newSettings) => {setSettings(newSettings); localStorage.setItem(&apos;accessibility-settings&apos;,JSON.stringify(newSettings))},[]); const toggleSetting = useCallback((key,value) => { const newSettings = { ...settings,[key]: value !== null ? value : !settings[key] };; saveSettings(newSettings)},[settings,saveSettings]); const resetSettings = useCallback(() => { const defaults = { highContrast: false,largeText: false,reducedMotion: false,screenReader: false,fontSize: 16,colorBlindMode: &apos;normal&apos; };; saveSettings(defaults)},[saveSettings]);&apos;; const increaseFontSize = useCallback(() => {toggleSetting(&apos;fontSize&apos;,Math.min(settings.fontSize + 2,24))};,[settings.fontSize,toggleSetting]); const decreaseFontSize = useCallback(() => {toggleSetting(&apos;fontSize&apos;,Math.max(settings.fontSize - 2,12))};,[settings.fontSize,toggleSetting]); const announcement = document.createElement(&apos;div&apos;); announcement.setAttribute(&apos;aria-live&apos;,&apos;polite&apos;);&apos;;&apos;; announcement.setAttribute(&apos;aria-atomic&apos;,&apos;true&apos;);&apos;;&apos;; announcement.className = &apos;sr-only&apos;; announcement.textContent = message; document.body.appendChild(announcement); setTimeout(() => {document.body.removeChild(announcement)},1000)} },[settings.screenReader]); if (!enabled) return null; return (<> {} <motion.button onClick={() => setIsOpen(!isOpen)} className={`fixed top-4 right-4 z-50 p-3 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-full shadow-lg transition-all duration-300 ${className}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label=&quot;Accessibility settings&quot;> <Accessibility className=&quot;w-6 h-6&quot; /> </motion.button> {} <AnimatePresence> {isOpen && (<motion.div className=&quot;fixed inset-0 z-40&quot; initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}> {} <div className=&quot;absolute inset-0 bg-black/50 backdrop-blur-sm&quot; onClick={() => setIsOpen(false)}/> {} <motion.div className=&quot;absolute top-4 right-4 w-80 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl p-6 max-h-[calc(100vh-2rem)] overflow-y-auto&quot; initial = { { opacity: 0,x: 300,scale: 0.95 }} animate = { { opacity: 1,x: 0,scale: 1 }} exit = { { opacity: 0,x: 300,scale: 0.95 }} transition = { { duration: 0.3,ease: &quot;easeOut&quot; }}> {} <div className=&quot;flex items-center justify-between mb-6&quot;> <h2 className=&quot;text-xl font-bold text-white&quot;>Accessibility</h2> <button onClick={() => setIsOpen(false)} className=&quot;p-2 rounded-lg hover:bg-zion-blue-light/20 transition-colors duration-200&quot; aria-label=&quot;Close accessibility panel&quot;> <X className=&quot;w-5 h-5 text-zinc-400&quot; /> </button> </div> {} <div className=&quot;space-y-4&quot;> <h3 className=&quot;text-white font-semibold text-sm uppercase tracking-wider&quot;>Visual</h3> {} <div className=&quot;flex items-center justify-between&quot;> <div className=&quot;flex items-center gap-3&quot;> <Contrast className=&quot;w-5 h-5 text-zion-cyan&quot; /> <span className=&quot;text-zinc-300&quot;>High Contrast</span> </div>&apos;; <Button size=&quot;sm&quot; variant={settings.highContrast ? &quot;default&quot; : &quot;outline&quot;} onClick={() => toggleSetting(&apos;highContrast&apos;)} className={settings.highContrast ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &quot;}>&apos;;&apos;; {settings.highContrast ? &apos;On&apos; : &apos;Off&apos;} </Button> </div> {} <div className=&quot;flex items-center justify-between&quot;> <div className=&quot;flex items-center gap-3&quot;> <Type className=&quot;w-5 h-5 text-zion-cyan&quot; /> <span className=&quot;text-zinc-300&quot;>Large Text</span> </div>&apos;; <Button size=&quot;sm&quot; variant={settings.largeText ? &quot;default&quot; : &quot;outline&quot;} onClick={() => toggleSetting(&apos;largeText&apos;)} className={settings.largeText ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &quot;}>&apos;;&apos;; {settings.largeText ? &apos;On&apos; : &apos;Off&apos;} </Button> </div> {} <div className=&quot;space-y-2&quot;> <div className=&quot;flex items-center gap-3&quot;> <Type className=&quot;w-5 h-5 text-zion-cyan&quot; /> <span className=&quot;text-zinc-300&quot;>Font Size: {settings.fontSize}px</span> </div> <div className=&quot;flex items-center gap-2 ml-8&quot;> <Button size=&quot;sm&quot; variant=&quot;outline&quot; onClick={decreaseFontSize} disabled={settings.fontSize <= 12} className=&quot;p-1&quot;> <ZoomOut className=&quot;w-4 h-4&quot; /> </Button> <Button size=&quot;sm&quot; variant=&quot;outline&quot; onClick={increaseFontSize} disabled={settings.fontSize >= 24} className=&quot;p-1&quot;> <ZoomIn className=&quot;w-4 h-4&quot; /> </Button> </div> </div> {} <div className=&quot;space-y-2&quot;> <div className=&quot;flex items-center gap-3&quot;> <Eye className=&quot;w-5 h-5 text-zion-cyan&quot; /> <span className=&quot;text-zinc-300&quot;>Color Blind Mode</span> </div>&apos;; <select value={settings.colorBlindMode} onChange={(e) => toggleSetting(&apos;colorBlindMode&apos;,e.target.value)} className=&quot;ml-8 px-3 py-2 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-sm focus:border-zion-cyan focus:outline-none&quot;> <option value=&quot;normal&quot;>Normal</option> <option value=&quot;protanopia&quot;>Protanopia (Red-Blind)</option> <option value=&quot;deuteranopia&quot;>Deuteranopia (Green-Blind)</option> <option value=&quot;tritanopia&quot;>Tritanopia (Blue-Blind)</option> </select> </div> </div> {} <div className=&quot;space-y-4 mt-6&quot;> <h3 className=&quot;text-white font-semibold text-sm uppercase tracking-wider&quot;>Motion</h3> <div className=&quot;flex items-center justify-between&quot;> <div className=&quot;flex items-center gap-3&quot;> <Settings className=&quot;w-5 h-5 text-zion-cyan&quot; /> <span className=&quot;text-zinc-300&quot;>Reduced Motion</span> </div>&apos;; <Button size=&quot;sm&quot; variant={settings.reducedMotion ? &quot;default&quot; : &quot;outline&quot;} onClick={() => toggleSetting(&apos;reducedMotion&apos;)} className={settings.reducedMotion ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &quot;}>&apos;;&apos;; {settings.reducedMotion ? &apos;On&apos; : &apos;Off&apos;} </Button> </div> </div> {} <div className=&quot;space-y-4 mt-6&quot;> <h3 className=&quot;text-white font-semibold text-sm uppercase tracking-wider&quot;>Audio</h3> <div className=&quot;flex items-center justify-between&quot;> <div className=&quot;flex items-center gap-3&quot;> {settings.screenReader ? (<Volume2 className=&quot;w-5 h-5 text-zion-cyan&quot; />) : (<VolumeX className=&quot;w-5 h-5 text-zinc-400&quot; />)} <span className=&quot;text-zinc-300&quot;>Screen Reader</span> </div>&apos;; <Button size=&quot;sm&quot; variant={settings.screenReader ? &quot;default&quot; : &quot;outline&quot;} onClick={() => toggleSetting(&apos;screenReader&apos;)} className={settings.screenReader ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &quot;}>&apos;;&apos;; {settings.screenReader ? &apos;On&apos; : &apos;Off&apos;} </Button> </div> </div> {} {settings.screenReader && (<divclassName=&quot;mt-4 p-3 bg-zion-blue/20 rounded-lg&quot;> <p className=&quot;text-zinc-300 text-sm mb-2&quot;>Test screen reader announcement:</p>&apos;; <Button size=&quot;sm&quot; onClick={() => announceToScreenReader(&apos;This is a test announcement for screen readers&apos;)} className=&quot;bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark&quot;> Test Announcement </Button> </div> )} {} <div className=&quot;mt-6 pt-6 border-t border-zion-blue-light/20&quot;> <Button onClick={resetSettings} variant=&quot;outline&quot; className=&quot;w-full border-zinc-500 text-zinc-300 hover:bg-zinc-500/20&quot;> Reset to Defaults </Button> </div> {} <div className=&quot;mt-4 text-xs text-zinc-400 text-center&quot;> <p>These settings are saved locally and will persist across sessions.</p> <p className=&quot;mt-1&quot;>For more accessibility options,check your browser settings.</p> </div> </motion.div> </motion.div>)} </AnimatePresence> {} <styledangerouslySetInnerHTML = { { __html: ` .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0 } .high-contrast {--zion-cyan: #00ffff; --zion-blue: #0066ff; --zion-purple: #9900ff; --zion-blue-dark: #000033; --zion-blue-light: #3399ff; --zion-cyan-light: #33ffff; --zion-purple-dark: #6600cc; --zion-purple-light: #cc33ff} [data-color-blind=&quot;protanopia&quot;] {filter: url(&apos;#protanopia-filter&apos;)} [data-color-blind=&quot;deuteranopia&quot;] {filter: url(&apos;#deuteranopia-filter&apos;)} [data-color-blind=&quot;tritanopia&quot;] {filter: url(&apos;#tritanopia-filter&apos;)} :root {--font-size: 16px; --reduced-motion: no-preference} * {font-size: var(--font-size)} @media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important} } [style*=&quot;--reduced-motion: reduce&quot;] * {animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important} ` }} /> {} <svg style=&quot;{{{ position: &apos;absolute&apos;; width: 0; height: 0}}&quot;}> <defs> <filter id=&quot;protanopia-filter&quot;> <feColorMatrix type=&quot;matrix&quot; values=&quot;0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0&quot; /> </filter> <filter id=&quot;deuteranopia-filter&quot;> <feColorMatrix type=&quot;matrix&quot; values=&quot;0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0&quot; /> </filter> <filter id=&quot;tritanopia-filter&quot;> <feColorMatrix type=&quot;matrix&quot; values=&quot;0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0&quot; /> </filter> </defs> </svg> </>)} </style> </motion> </div> </motion> </motion>;&apos;;&apos;;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
