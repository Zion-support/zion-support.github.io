<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
;
export const AccessibilityPanel = ("props": "any) => {;
    const [settings", setSettings] = useState({;
        "highContrast": "false",;
        "fontSize": "100",;
        "colorBlindness": 'none',;
        "reducedMotion": "false",;
        "screenReader": "false",;
        "keyboardNavigation": "false",;
        "focusIndicator": "true;
    "});
    ;
export const AccessibilityPanel = (props: any) => {
    const [settings, setSettings] = useState({
        highContrast: false,
        fontSize: 100,
        colorBlindness: 'none',
        reducedMotion: false,
        screenReader: false,
        keyboardNavigation: false,
        focusIndicator: true
    }
    );
    const [accessibilityScore, setAccessibilityScore] = useState(85);
    const [activeTab, setActiveTab] = useState('general');
;
    useEffect(() => {;
        // Load saved settings from localStorage;
        const savedSettings = localStorage.getItem('accessibility-settings');
        if (savedSettings) {;
            try {;
                const parsed = JSON.parse(savedSettings);
                setSettings(prev => ({ ...prev, ...parsed }));
            } catch (error) {console.error('Failed to parse accessibility "settings":', error);}
        }
    }, []);
;
    useEffect(() => {// Apply settings to document;
        applySettings(settings);
        // Save to localStorage;
        localStorage.setItem('accessibility-settings', JSON.stringify(settings));}, [settings]);
;
    const applySettings = ("props": "any) => {;
        const root = document.documentElement;
        ;
        // High contrast;
        if (newSettings.highContrast) {;
            root.style.setProperty('--high-contrast'", '1');
            root.classList.add('high-contrast');
        } else {root.style.setProperty('--high-contrast', '0');
            root.classList.remove('high-contrast');}
        ;
        // Font size;
        root.style.setProperty('--font-size', `${newSettings.fontSize}%`);
        ;
        // Reduced motion;
        if (newSettings.reducedMotion) {root.classList.add('reduced-motion');} else {root.style.setProperty('--reduced-motion', 'no-preference');}
        ;
        // Apply focus indicator;
        if (settings.focusIndicator) {root.style.setProperty('--focus-visible', 'auto');} else {root.style.setProperty('--focus-visible', 'none');}
        ;
        // Color blindness;
        root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        if (newSettings.colorBlindness !== 'none') {root.classList.add(newSettings.colorBlindness);}
        ;
        // Focus indicator;
        if (newSettings.focusIndicator) {root.classList.add('focus-visible');} else {root.classList.remove('focus-visible');}
    };
;
    const updateSetting = ("props": "any) => {;
        setSettings(prev => ({ ...prev", [key]: "value "}));
    };
;
    const resetSettings = ("props": "any) => {;
        const defaultSettings = {;
            "highContrast": false",;
            "fontSize": "100",;
            "reducedMotion": "false",;
            "screenReader": "false",;
            "keyboardNavigation": "false",;
            "focusIndicator": "true",;
            "colorBlindness": 'none';
        };
        setSettings(defaultSettings);
    };
;
    return (;
        <AnimatePresence>;
            {isOpen && (;
                <motion.div;
                    initial={{ "opacity": "0", "x": "-300 "}}
                    animate={{ "opacity": "1", "x": "0 "}}
                    exit={{ "opacity": "0", "x": "-300 "}}
                    className="fixed left-0 top-0 h-full w-80 bg-white "dark": "bg-gray-800 shadow-xl z-50";
                >;
                    <div className="p-6">;
                        <div className="flex items-center justify-between mb-6">;
                            <h2 className="text-xl font-bold text-gray-900 "dark":text-white">;
                                Accessibility;
                            </h2>;
                            <button;
                                onClick={onToggle"}
                                className="text-gray-500 "hover": "text-gray-700 "dark":text-gray-400 "dark":"hover":text-gray-200";
                            >;
                                ×;
                            </button>;
                        </div>;
                        <div className="space-y-6">;
                            {/* Font Size */"}
                            <div>;
                                <label className="block text-sm font-medium text-gray-700 "dark": "text-gray-300 mb-2">;
                                    Font "Size": {settings.fontSize"}%;
                                </label>;
                                <input;
                                    type="range";
                                    min="80";
                                    max="200";
                                    value={settings.fontSize}
                                    onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                                    className="w-full";
                                />;
                            </div>;
                            {/* High Contrast */}
                            <div>;
                                <label className="flex items-center">;
                                    <input;
                                        type="checkbox";
                                        checked={settings.highContrast}
                                        onChange={(e) => updateSetting('highContrast', e.target.checked)}
                                        className="mr-2";
                                    />;
                                    <span className="text-sm text-gray-700 "dark": "text-gray-300">High Contrast</span>;
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
                                    <span className="text-sm text-gray-700 "dark": "text-gray-300">Reduced Motion</span>;
                                </label>;
                            </div>;
                            {/* Focus Indicator */"}
                            <div>;
                                <label className="flex items-center">;
                                    <input;
                                        type="checkbox";
                                        checked={settings.focusIndicator}
                                        onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                                        className="mr-2";
                                    />;
                                    <span className="text-sm text-gray-700 "dark": "text-gray-300">Focus Indicators</span>;
                                </label>;
                            </div>;
                            {/* Reset Button */"}
                            <button;
                                onClick={resetSettings}
                                className="w-full px-4 py-2 bg-gray-200 "dark": "bg-gray-700 text-gray-700 "dark":text-gray-300 rounded-lg "hover":bg-gray-300 "dark":"hover":bg-gray-600 transition-colors";
                            >;
                                Reset to Default;
                            </button>;
                        </div>;
                    </div>;
                </motion.div>;
            )"}
        </AnimatePresence>;
    );
};
;
</motion>
</motion>
import React,{useState,useEffect} from &apos;react&apos;; import {motion,AnimatePresence} from &apos;framer-motion&apos;; export const AccessibilityPanel = (props) => { const [settings,setSettings] = useState({ highContrast: false,fontSize: 100,colorBlindness: &apos;none&apos;,reducedMotion: false,screenReader: false,keyboardNavigation: false,focusIndicator: true };); &apos;; const [accessibilityScore,setAccessibilityScore] = useState(85); const [activeTab,setActiveTab] = useState(&apos;general&apos;); useEffect(() => { const savedSettings = localStorage.getItem(&apos;accessibility-settings&apos;); if (savedSettings) { try { const parsed = JSON.parse(savedSettings); setSettings(prev => ({ ...prev,...parsed }));&apos;;&apos;} catch (error) {} } },[]); useEffect(() => { applySettings(settings);&apos;; localStorage.setItem(&apos;accessibility-settings&apos;,JSON.stringify(settings))},[settings]); const applySettings = (props) => { const root = document.documentElement; if (newSettings.highContrast) { root.style.setProperty(&apos;--high-contrast&apos;,&apos;1&apos;);&apos;;&apos;; root.classList.add(&apos;high-contrast&apos;);&apos;;&apos;} else {root.style.setProperty(&apos;--high-contrast&apos;,&apos;0&apos;);&apos;;&apos;; root.classList.remove(&apos;high-contrast&apos;)} root.style.setProperty(&apos;--font-size&apos;,`${newSettings.fontSize}%`); &apos;; if (newSettings.reducedMotion) {root.classList.add(&apos;reduced-motion&apos;)} else {root.style.setProperty(&apos;--reduced-motion&apos;,&apos;no-preference&apos;)} if (settings.focusIndicator) {root.style.setProperty(&apos;--focus-visible&apos;,&apos;auto&apos;)} else {root.style.setProperty(&apos;--focus-visible&apos;,&apos;none&apos;)} root.classList.remove(&apos;protanopia&apos;,&apos;deuteranopia&apos;,&apos;tritanopia&apos;);&apos;;&apos;; if (newSettings.colorBlindness !== &apos;none&apos;) {root.classList.add(newSettings.colorBlindness)} if (newSettings.focusIndicator) {root.classList.add(&apos;focus-visible&apos;)} else {root.classList.remove(&apos;focus-visible&apos;)} }; const updateSetting = (props) => { setSettings(prev => ({ ...prev,[key]: value };))}; const resetSettings = (props) => { const defaultSettings = { highContrast: false,fontSize: 100,reducedMotion: false,screenReader: false,keyboardNavigation: false,focusIndicator: true,colorBlindness: &apos;none&apos; };; setSettings(defaultSettings)}; return ( <AnimatePresence> {isOpen && ( <motion.div initial={{ opacity: 0,x: -300 }} animate={{ opacity: 1,x: 0 }} exit={{ opacity: 0,x: -300 }} className=&quot;fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl z-50&quot; > <div className=&quot;p-6&quot;> <div className=&quot;flex items-center justify-between mb-6&quot;> <h2 className=&quot;text-xl font-bold text-gray-900 dark:text-white&quot;> Accessibility </h2> <button onClick={onToggle} className=&quot;text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200&quot; > × </button> </div> <div className=&quot;space-y-6&quot;> {} <div> <label className=&quot;block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2&quot;> Font Size: {settings.fontSize}% </label> <input type=&quot;range&quot; min=&quot;80&quot; max=&quot;200&quot;; value={settings.fontSize} onChange={(e) => updateSetting(&apos;fontSize&apos;,parseInt(e.target.value))} className=&quot;w-full&quot; /> </div> {} <div> <label className=&quot;flex items-center&quot;> <input type=&quot;checkbox&quot;; checked={settings.highContrast} onChange={(e) => updateSetting(&apos;highContrast&apos;,e.target.checked)} className=&quot;mr-2&quot; /> <span className=&quot;text-sm text-gray-700 dark:text-gray-300&quot;>High Contrast</span> </label> </div> {} <div> <label className=&quot;flex items-center&quot;> <input type=&quot;checkbox&quot;; checked={settings.reducedMotion} onChange={(e) => updateSetting(&apos;reducedMotion&apos;,e.target.checked)} className=&quot;mr-2&quot; /> <span className=&quot;text-sm text-gray-700 dark:text-gray-300&quot;>Reduced Motion</span> </label> </div> {} <div> <label className=&quot;flex items-center&quot;> <input type=&quot;checkbox&quot;; checked={settings.focusIndicator} onChange={(e) => updateSetting(&apos;focusIndicator&apos;,e.target.checked)} className=&quot;mr-2&quot; /> <span className=&quot;text-sm text-gray-700 dark:text-gray-300&quot;>Focus Indicators</span> </label> </div> {} <button onClick={resetSettings} className=&quot;w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors&quot; > Reset to Default </button> </div> </div> </motion.div> )} </AnimatePresence> )}; </motion>;&apos;;&apos;;
const React,{useState,useEffect} from "react"; import {motion,AnimatePresence} from "framer-motion"; export const AccessibilityPanel = (props) => { const [settings,setSettings] = useState({ highContrast: false,fontSize: 100,colorBlindness:"
  "none",reducedMotion: false,screenReader: false,keyboardNavigation: false,focusIndicator: true };);"
  "; const [accessibilityScore,setAccessibilityScore] = useState(85); const [activeTab,setActiveTab] = useState("
  "general"); useEffect(() => { const savedSettings = localStorage.getItem("
  "accessibility-settings"); if (savedSettings) { try { const parsed = JSON.parse(savedSettings); setSettings(prev => ({ .prev,.parsed }));"
  ";"
  "} catch (error) {console.error("
  "Failed to parse accessibility settings:"
  ",error)} } },[]); useEffect(() => { applySettings(settings);"
  "; localStorage.setItem("
  "accessibility-settings",JSON.stringify(settings))},[settings]); const applySettings = (props) => { const root = document.documentElement; if (newSettings.highContrast) { root.style.setProperty("
  "--high-contrast","
  "1");"
  ";"
  "; root.classList.add("
  "high-contrast");"
  ";"
  "} else {root.style.setProperty("
  "--high-contrast","
  "0");"
  ";"
  "; root.classList.remove("
  "high-contrast")} root.style.setProperty("
  "--font-size",`${newSettings.fontSize}%`);"
  "; if (newSettings.reducedMotion) {root.classList.add("
  "reduced-motion")} else {root.style.setProperty("
  "--reduced-motion","
  "no-preference")} if (settings.focusIndicator) {root.style.setProperty("
  "--focus-visible","
  "auto")} else {root.style.setProperty("
  "--focus-visible","
  "none")} root.classList.remove("
  "protanopia","
  "deuteranopia","
  "tritanopia");"
  ";"
  "; if (newSettings.colorBlindness !== "none") {root.classList.add(newSettings.colorBlindness)} if (newSettings.focusIndicator) {root.classList.add("
  "focus-visible")} else {root.classList.remove("
  "focus-visible")} }; const updateSetting = (props) => { setSettings(prev => ({ .prev,[key]: value };))}; const resetSettings = (props) => { const defaultSettings = { highContrast: false,fontSize: 100,reducedMotion: false,screenReader: false,keyboardNavigation: false,focusIndicator: true,colorBlindness:"
  "none" }; setSettings(defaultSettings)}; return ( <AnimatePresence> {isOpen && ( <motion.div initial={{ opacity: 0,x: -300 }} animate={{ opacity: 1,x: 0 }} exit={{ opacity: 0,x: -300 }} className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl z-50" > <div className="p-6"> <div className="flex items-center justify-between mb-6"> <h2 className="text-xl font-bold text-gray-900 dark:text-white"> Accessibility </h2> <button onClick={onToggle} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" > </button> </div> <div className="space-y-6"> {} <div> <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> Font Size: {settings.fontSize}% </label> <input type="range" min="80" max="200"; value={settings.fontSize} onChange={(e) => updateSetting("
  "fontSize",parseInt(e.target.value))} className="w-full" /> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.highContrast} onChange={(e) => updateSetting("
  "highContrast",e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.reducedMotion} onChange={(e) => updateSetting("
  "reducedMotion",e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.focusIndicator} onChange={(e) => updateSetting("
  "focusIndicator",e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span> </label> </div> {} <button onClick={resetSettings} className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" > Reset to Default </button> </div> </div> </motion.div> )} </AnimatePresence> )}; </motion>;"
  ";"
  ";"
  ""`"`
import { useEffect } from 'react';,
import { useState } from 'react';,
import _React,{useState,useEffect} from 'react'; import {motion,AnimatePresence} from 'framer-motion'; export const AccessibilityPanel = (props) => { const [settings,setSettings] = useState({ highContrast: false,fontSize: 100,colorBlindness: 'none,reducedMotion: false,screenReader: false,keyboardNavigation: false,focusIndicator: true };); '; const [accessibilityScore,setAccessibilityScore] = useState(85); const [activeTab,setActiveTab] = useState('general'); useEffect(() => { const savedSettings = localStorage.getItem('accessibility-settings'); if (savedSettings) { try { const parsed = JSON.parse(savedSettings); setSettings(prev => ({ ...prev,...parsed }));';'} catch (error) {_console.error('Failed to parse accessibility settings:',error)} } },[]); useEffect(() => { applySettings(settings);'; localStorage.setItem('accessibility-settings',JSON.stringify(settings))},[settings]); const applySettings = (props) => { const root = document.documentElement; if (newSettings.highContrast) { root.style.setProperty('--high-contrast','1');';'; root.classList.add('high-contrast');';'} else {root.style.setProperty('--high-contrast','0');';'; root.classList.remove('high-contrast')} root.style.setProperty('--font-size',`${newSettings.fontSize}%`); '; if (newSettings.reducedMotion) {root.classList.add('reduced-motion')} else {root.style.setProperty('--reduced-motion','no-preference')} if (settings.focusIndicator) {root.style.setProperty('--focus-visible','auto')} else {root.style.setProperty('--focus-visible','none')} root.classList.remove('protanopia','deuteranopia','tritanopia');';'; if (newSettings.colorBlindness !== 'none') {root.classList.add(newSettings.colorBlindness)} if (newSettings.focusIndicator) {root.classList.add('focus-visible')} else {root.classList.remove('focus-visible')} }; const updateSetting = (props) => { setSettings(prev => ({ ...prev,[key]: value };))}; const resetSettings = (props) => { const defaultSettings = { highContrast: false,fontSize: 100,reducedMotion: false,screenReader: false,keyboardNavigation: false,focusIndicator: true,colorBlindness: 'none' };; setSettings(defaultSettings)}; return ( <AnimatePresence> {isOpen && ( <motion.div initial={{ opacity: 0,x: -300 }} animate={{ opacity: 1,x: 0 }} exit={{ opacity: 0,x: -300 }} className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl z-50" > <div className="p-6"> <div className="flex items-center justify-between mb-6"> <h2 className="text-xl font-bold text-gray-900 dark:text-white"> Accessibility </h2> <button onClick={onToggle} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" > × </button> </div> <div className="space-y-6"> {} <div> <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"> Font Size: {settings.fontSize}% </label> <input type="range" min="80" max="200"; value={settings.fontSize} onChange={(e) => updateSetting('fontSize',parseInt(e.target.value))} className="w-full" /> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.highContrast} onChange={(e) => updateSetting('highContrast',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.reducedMotion} onChange={(e) => updateSetting('reducedMotion',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span> </label> </div> {} <div> <label className="flex items-center"> <input type="checkbox"; checked={settings.focusIndicator} onChange={(e) => updateSetting('focusIndicator',e.target.checked)} className="mr-2" /> <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span> </label> </div> {} <button onClick={resetSettings} className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" > Reset to Default </button> </div> </div> </motion.div> )} </AnimatePresence> )}; </motion>;';';
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
