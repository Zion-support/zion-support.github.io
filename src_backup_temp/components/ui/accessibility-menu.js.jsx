import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Settings, FileText, Eye, Zap, Volume2, VolumeX} from 'lucide-react';
import {Button} from "button.tsx";
export function AccessibilityMenu("props": "any) {;
    const [isOpen", setIsOpen] = useState(false);
    const [settings, setSettings] = useState({;
        "fontSize": 'medium',;
        "highContrast": "false",;
        "reducedMotion": "false",;
        "soundEnabled": "true;
    "});
    useEffect(() => {;
        // Load settings from localStorage;
export function AccessibilityMenu(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        fontSize: 'medium',
        highContrast: false,
        reducedMotion: false,
        soundEnabled: true
    }
    );
    useEffect(() => {
        // Load settings from localStorage
        const savedSettings = localStorage.getItem('accessibility-settings');
        if (savedSettings) {;
            setSettings(JSON.parse(savedSettings))}
    }, []);
    useEffect(() => {// Apply settings to document;
        applySettings(settings);
        // Save to localStorage;
        localStorage.setItem('accessibility-settings', JSON.stringify(settings))}, [settings]);
    const applySettings = ("props": "any) => {;
        const root = document.documentElement;
        // Font size;
        root.style.setProperty('--font-size-multiplier'", newSettings.fontSize === 'small' ? '0.875' : ";
            newSettings.fontSize === 'large' ? '1.125' : '1');
        // High contrast;
        if (newSettings.highContrast) {;
            root.classList.add('high-contrast')"}
        else {root.classList.remove('high-contrast')}
        // Reduced motion;
        if (newSettings.reducedMotion) {root.classList.add('reduced-motion')}
        else {root.classList.remove('reduced-motion')}
    };
    const toggleSetting = ("props": "any) => {;
        setSettings(prev => ({;
            ...prev",;
            [key]: "!prev[key];
        "}))};
    const updateFontSize = ("props": "any) => {;
        setSettings(prev => ({ ...prev", "fontSize": "size "}))};
    const resetSettings = ("props": "any) => {;
        const defaultSettings = {;
  "fontSize": 'medium'",;
            "highContrast": "false",;
            "reducedMotion": "false",;
  "soundEnabled": "true;
        ;
"};
        setSettings(defaultSettings)};
    return (<>;
      {/* Toggle Button */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-24 right-8 z-50 bg-gradient-to-r from-zion-purple to-zion-cyan text-white p-3 rounded-full shadow-lg "hover": "shadow-xl transition-all duration-300" whileHover={{ "scale": 1.1 "}} whileTap={{ "scale": "0.95 "}} aria-label="Accessibility settings" aria-expanded={isOpen}>;
        <Settings className="h-5 w-5" />;
      </motion.button>;
      {/* Menu Panel */}
      <AnimatePresence>;
        {isOpen && (<motion.div className="fixed bottom-32 right-8 z-50 w-80 bg-zion-blue-dark/95 backdrop-blur-md rounded-2xl border border-zion-purple/20 shadow-2xl" initial = {;
  { "opacity": "0", "scale": "0.9",;
  "y": "20 ;
"}} animate = {;
  { "opacity": "1", "scale": "1",;
  "y": "0 ;
"}} exit = {;
  { "opacity": "0", "scale": "0.9",;
  "y": "20 ;
"}} transition = {;
  { "type": "spring", "stiffness": "300",;
  "damping": "30 ;
"}}>;
            <div className="p-6">;
              <div className="flex items-center justify-between mb-6">;
                <h3 className="text-lg font-semibold text-white">Accessibility</h3>;
                <Button variant="ghost" size="sm" onClick={resetSettings} className="text-zion-cyan "hover": "text-zion-cyan-light text-sm">;
                  Reset;
                </Button>;
              </div>;
}}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Accessibility
                <Button variant="ghost" size="sm" onClick={resetSettings} className="text-zion-cyan hover:text-zion-cyan-light text-sm">
                  Reset
                </Button>
              </div>
              {/* Font Size */"}
              <div className="mb-6">;
                <label className="flex items-center gap-3 text-white mb-3">;
                  <FileText className="h-4 w-4 text-zion-cyan" />;
                  <span className="text-sm font-medium">Font Size</span>;
                </label>;
                <div className="flex gap-2">;
                  {['small', 'medium', 'large'].map((size) => (<Button key={size} variant={settings.fontSize === size ? "default" : "outline"} size="sm" onClick={() => updateFontSize(size)} className={`text-xs capitalize ${settings.fontSize === size;
                    ? 'bg-zion-cyan text-zion-blue-dark';
                    : 'text-zion-slate-light "hover": "text-white'"}`}>;
                      {size}
                    </Button>))}
                </div>;
              </div>;
              {/* High Contrast */}
              <div className="mb-6">;
                <label className="flex items-center gap-3 text-white mb-3">;
                  <Eye className="h-4 w-4 text-zion-cyan" />;
                  <span className="text-sm font-medium">High Contrast</span>;
                </label>;
                <Button variant={settings.highContrast ? "default" : "outline"} size="sm" onClick={() => toggleSetting('highContrast')} className={`w-full ${settings.highContrast;
                ? 'bg-zion-cyan text-zion-blue-dark';
                : 'text-zion-slate-light "hover": "text-white'"}`}>;
                  {settings.highContrast ? 'Enabled' : 'Disabled'}
                </Button>;
              </div>;
              {/* Reduced Motion */}
              <div className="mb-6">;
                <label className="flex items-center gap-3 text-white mb-3">;
                  <Zap className="h-4 w-4 text-zion-cyan" />;
                  <span className="text-sm font-medium">Reduced Motion</span>;
                </label>;
                <Button variant={settings.reducedMotion ? "default" : "outline"} size="sm" onClick={() => toggleSetting('reducedMotion')} className={`w-full ${settings.reducedMotion;
                ? 'bg-zion-cyan text-zion-blue-dark';
                : 'text-zion-slate-light "hover": "text-white'"}`}>;
                  {settings.reducedMotion ? 'Enabled' : 'Disabled'}
                </Button>;
              </div>;
              {/* Sound Toggle */}
              <div className="mb-6">;
                <label className="flex items-center gap-3 text-white mb-3">;
                  {settings.soundEnabled ? (<Volume2 className="h-4 w-4 text-zion-cyan" />) : "(<VolumeX className="h-4 w-4 text-zion-cyan" />)"}
                  <span className="text-sm font-medium">Sound Effects</span>;
                </label>;
                <Button variant={settings.soundEnabled ? "default" : "outline"} size="sm" onClick={() => toggleSetting('soundEnabled')} className={`w-full ${settings.soundEnabled;
                ? 'bg-zion-cyan text-zion-blue-dark';
                : 'text-zion-slate-light "hover": "text-white'"}`}>;
                  {settings.soundEnabled ? 'Enabled' : 'Disabled'}
                </Button>;
              </div>;
              {/* Info */}
              <div className="text-xs text-zion-slate-light text-center">;
                Settings are automatically saved and applied across your session;
              </div>;
            </div>;
          </motion.div>)}
      </AnimatePresence>;
      {/* Backdrop */}
      <AnimatePresence>;
        {isOpen && (<motion.div className="fixed inset-0 z-40 bg-black/20" initial={{ "opacity": "0 "}} animate={{ "opacity": "1 "}} exit={{ "opacity": "0 "}} onClick={() => setIsOpen(false)}/>)}
      </AnimatePresence>;
    </>)}
;
</motion>;
</motion>;
</motion>
</motion>
</motion>
</motion>
import React,{useState,useEffect} from &apos;react&apos;; import {motion,AnimatePresence} from &apos;framer-motion&apos;; import {Settings,FileText,Eye,Zap,Volume2,VolumeX} from &apos;lucide-react&apos;; import {Button} from &quot;button.tsx&quot;; export function AccessibilityMenu($1) { const [isOpen,setIsOpen] = useState(false); const [settings,setSettings] = useState({ fontSize: &apos;medium&apos;,highContrast: false,reducedMotion: false,soundEnabled: true };); useEffect(() => { const savedSettings = localStorage.getItem(&apos;accessibility-settings&apos;); if (savedSettings) { setSettings(JSON.parse(savedSettings))} },[]); useEffect(() => { applySettings(settings);&apos;; localStorage.setItem(&apos;accessibility-settings&apos;,JSON.stringify(settings))},[settings]); const applySettings = (props) => { const root = document.documentElement; root.style.setProperty(&apos;--font-size-multiplier&apos;,newSettings.fontSize === &apos;small&apos; ? &apos;0.875&apos; :&apos;; newSettings.fontSize === &apos;large&apos; ? &apos;1.125&apos; : &apos;1&apos;); if (newSettings.highContrast) { root.classList.add(&apos;high-contrast&apos;)} else {root.classList.remove(&apos;high-contrast&apos;)} if (newSettings.reducedMotion) {root.classList.add(&apos;reduced-motion&apos;)} else {root.classList.remove(&apos;reduced-motion&apos;)} }; const toggleSetting = (props) => { setSettings(prev => ({ ...prev,[key]: !prev[key] }))};; const updateFontSize = (props) => { setSettings(prev => ({ ...prev,fontSize: size }))};; const resetSettings = (props) => { const defaultSettings = { fontSize: &apos;medium&apos;,highContrast: false,reducedMotion: false,soundEnabled: true };; setSettings(defaultSettings)}; return (<> {} <motion.button onClick={() => setIsOpen(!isOpen)} className=&quot;fixed bottom-24 right-8 z-50 bg-gradient-to-r from-zion-purple to-zion-cyan text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300&quot; whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label=&quot;Accessibility settings&quot; aria-expanded={isOpen}> <Settings className=&quot;h-5 w-5&quot; /> </motion.button> {} <AnimatePresence> {isOpen && (<motion.div className=&quot;fixed bottom-32 right-8 z-50 w-80 bg-zion-blue-dark/95 backdrop-blur-md rounded-2xl border border-zion-purple/20 shadow-2xl&quot; initial = { { opacity: 0,scale: 0.9,y: 20 }} animate = { { opacity: 1,scale: 1,y: 0 }} exit = { { opacity: 0,scale: 0.9,y: 20 }} transition = { { type: &quot;spring&quot;,stiffness: 300,damping: 30 }}> <div className=&quot;p-6&quot;> <div className=&quot;flex items-center justify-between mb-6&quot;> <h3 className=&quot;text-lg font-semibold text-white&quot;>Accessibility</h3> <Button variant=&quot;ghost&quot; size=&quot;sm&quot; onClick={resetSettings} className=&quot;text-zion-cyan hover:text-zion-cyan-light text-sm&quot;> Reset </Button> </div> {} <div className=&quot;mb-6&quot;> <label className=&quot;flex items-center gap-3 text-white mb-3&quot;> <FileText className=&quot;h-4 w-4 text-zion-cyan&quot; /> <span className=&quot;text-sm font-medium&quot;>Font Size</span> </label> <divclassName=&quot;flex gap-2&quot;>&apos;; {[&apos;small&apos;,&apos;medium&apos;,&apos;large&apos;].map((size) => (<Button key={size} variant={settings.fontSize === size ? &quot;default&quot; : &quot;outline&quot;} size=&quot;sm&quot; onClick={() => updateFontSize(size)} className={`text-xs capitalize ${settings.fontSize === size&apos;;&apos;; ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &apos;text-zion-slate-light hover:text-white&apos;}`}> {size} </Button>))} </div> </div> {} <div className=&quot;mb-6&quot;> <label className=&quot;flex items-center gap-3 text-white mb-3&quot;> <Eye className=&quot;h-4 w-4 text-zion-cyan&quot; /> <span className=&quot;text-sm font-medium&quot;>High Contrast</span> </label>&apos;; <Button variant={settings.highContrast ? &quot;default&quot; : &quot;outline&quot;} size=&quot;sm&quot; onClick={() => toggleSetting(&apos;highContrast&apos;)} className={`w-full ${settings.highContrast&apos;;&apos;; ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &apos;text-zion-slate-light hover:text-white&apos;}`}>&apos;;&apos;; {settings.highContrast ? &apos;Enabled&apos; : &apos;Disabled&apos;} </Button> </div> {} <div className=&quot;mb-6&quot;> <label className=&quot;flex items-center gap-3 text-white mb-3&quot;> <Zap className=&quot;h-4 w-4 text-zion-cyan&quot; /> <span className=&quot;text-sm font-medium&quot;>Reduced Motion</span> </label>&apos;; <Button variant={settings.reducedMotion ? &quot;default&quot; : &quot;outline&quot;} size=&quot;sm&quot; onClick={() => toggleSetting(&apos;reducedMotion&apos;)} className={`w-full ${settings.reducedMotion&apos;;&apos;; ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &apos;text-zion-slate-light hover:text-white&apos;}`}>&apos;;&apos;; {settings.reducedMotion ? &apos;Enabled&apos; : &apos;Disabled&apos;} </Button> </div> {} <div className=&quot;mb-6&quot;> <label className=&quot;flex items-center gap-3 text-white mb-3&quot;> {settings.soundEnabled ? (<Volume2 className=&quot;h-4 w-4 text-zion-cyan&quot; />) : (<VolumeX className=&quot;h-4 w-4 text-zion-cyan&quot; />)} <span className=&quot;text-sm font-medium&quot;>Sound Effects</span> </label>&apos;; <Button variant={settings.soundEnabled ? &quot;default&quot; : &quot;outline&quot;} size=&quot;sm&quot; onClick={() => toggleSetting(&apos;soundEnabled&apos;)} className={`w-full ${settings.soundEnabled&apos;;&apos;; ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &apos;text-zion-slate-light hover:text-white&apos;}`}>&apos;;&apos;; {settings.soundEnabled ? &apos;Enabled&apos; : &apos;Disabled&apos;} </Button> </div> {} <div className=&quot;text-xs text-zion-slate-light text-center&quot;> Settings are automatically saved and applied across your session </div> </div> </motion.div>)} </AnimatePresence> {} <AnimatePresence> {isOpen && (<motion.div className=&quot;fixed inset-0 z-40 bg-black/20&quot; initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)}/>)} </AnimatePresence> </>)} </motion> </motion>;&apos;;&apos;;