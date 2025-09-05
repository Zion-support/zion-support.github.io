import React, {useState, useEffect, createContext, useContext} from 'react'';';,"});,"});
;,"});,"});
const AccessibilityContext = createContext(null);,"});,"});
export const useAccessibility = ("props": "any) => {"}"});,"});
""";,"});,"});
';;,"});,"});
;,"});,"});
const AccessibilityContext = createContext (null) ;,"});,"});
    const context = useContext (AccessibilityContext) ;,"});,"});
    if (!context) {}"});,"});
';,"});,"});
'';,"});,"});
''';,"});,"});
        throw new Error('useAccessibility must be used within an AccessibilityProvider')}"});,"});
    return context};,"});,"});
// Accessibility Provider Component;,"});,"});
export const AccessibilityProvider = ("props": "any) => {"}"});,"});
    const [highContrast, setHighContrast] = useState(false);,"});,"});
    const [reducedMotion, setReducedMotion] = useState(false)';;,"});,"});
    const [fontSize, setFontSize] = useState('medium')';;,"});,"});
    const [colorBlindMode, setColorBlindMode] = useState('none');,"});,"});
    // Load settings from localStorage;,"});,"});
    useEffect(() => {}"});,"});
';,"});,"});
'';,"});,"});
''';,"});,"});
        const savedSettings = localStorage.getItem('zion-accessibility-settings');,"});,"});
        if (savedSettings) {}"});,"});
            const settings = JSON.parse(savedSettings);,"});,"});
            setHighContrast(settings.highContrast || false);,"});,"});
            setReducedMotion(settings.reducedMotion || false)';;,"});,"});
            setFontSize(settings.fontSize || 'medium')';;,"});,"});
            setColorBlindMode(settings.colorBlindMode || 'none')}"});,"});
    }, []);,"});,"});
    // Save settings to localStorage;,"});,"});
    useEffect(() => {}"});,"});
        const settings = {}"});,"});
  highContrast,;,"});,"});
            reducedMotion,""";,"});,"});
            fontSize,"'""";,"});,"});
import React, {useState, useEffect, createContext, useContext} from 'react'';';,"}
    );,"})
    );,"})
    );,"}
    );,"}
    );,"})
const AccessibilityContext = createContext(null);,"}
    );,"})
export const useAccessibility = (props: any) => {}"}
    );,"})
""";,"}
    );,"})
';,"}
    );,"})
    );,"}
    );,"}
    );,"})
const AccessibilityContext = createContext (null) ;,"}
    );,"})
    const context = useContext (AccessibilityContext) ;,"}
    );,"})
    if (!context) {}"}
    );,"})
';,"}
    );,"})
'';,"}
    );,"})
''';,"}
    );,"})
        throw new Error('useAccessibility must be used within an AccessibilityProvider')}"}
    );,"})
    return context};,"}
    );,"})
// Accessibility Provider Component;,"}
    );,"})
export const AccessibilityProvider = (props: any) => {}"}
    );,"})
    const [highContrast, setHighContrast] = useState(false);,"}
    );,"})
    const [reducedMotion, setReducedMotion] = useState(false)';,"}
    );,"})
    const [fontSize, setFontSize] = useState('medium')';,"}
    );,"})
    const [colorBlindMode, setColorBlindMode] = useState('none');,"}
    );,"})
    // Load settings from localStorage;,"}
    );,"})
    useEffect(() => {}"}
    );,"})
';,"}
    );,"})
'';,"}
    );,"})
''';,"}
    );,"})
        const savedSettings = localStorage.getItem('zion-accessibility-settings');,"}
    );,"})
        if (savedSettings) {}"}
    );,"})
            const settings = JSON.parse(savedSettings);,"}
    );,"})
            setHighContrast(settings.highContrast || false);,"}
    );,"})
            setReducedMotion(settings.reducedMotion || false)';,"}
    );,"})
            setFontSize(settings.fontSize || 'medium')';,"}
    );,"})
            setColorBlindMode(settings.colorBlindMode || 'none')}"}
    );,"})
    }, []);,"}
    );,"})
    // Save settings to localStorage;,"}
    );,"})
    useEffect(() => {}"}
    );,"})
        const settings = {}"}
    );,"})
  highContrast,;,"}
    );,"})
            reducedMotion,""";,"}
    );,"})
            fontSize,"'""";,"}
    );,"})





;

;

;

;

const React,{useState,useEffect,createContext,useContext} from "react","
  "});,"
  "})";"
  "});,"
  "})";"
  "});,"
  "}) ;,"
  "});,"
  "}) const AccessibilityContext = createContext(null);,"
  "});,"
  "}) export const useAccessibility = (props) => {}"};);,"
  "})";"
  ";,"
  "});,"
  "})";"
  ";"
  ";,"
  "});,"
  "})";"
  "});,"
  "}) ;,"
  "});,"
  "}) const AccessibilityContext = createContext (null) ;,"
  "});,"
  "}) const context = useContext (AccessibilityContext) ;,"
  "});,"
  "})"; if (!context) {}"});,"
  "})";"
  ";"
  ";,"
  "});,"
  "})";"
  ";"
  ","
  "});,"
  "})";"
  ";"
  ","
  "});,"
  "})";"
  "; throw new Error("
  "useAccessibility must be used within an AccessibilityProvider")}"});,"
  "}) return context};,"
  "});,"
  "}) export const AccessibilityProvider = (props) => {}"};);,"
  "})"; const [highContrast,setHighContrast] = useState(false);,"
  "});,"
  "})";"
  "; const [reducedMotion,setReducedMotion] = useState(false)";,"
  "});,"
  "})";"
  "; const [fontSize,setFontSize] = useState("
  "medium")";,"
  "});,"
  "})";"
  "; const [colorBlindMode,setColorBlindMode] = useState("
  "none");,"
  "});,"
  "}) useEffect(() => {}"});,"
  "})";"
  ";"
  ";,"
  "});,"
  "})";"
  ";"
  ","
  "});,"
  "})";"
  ";"
  ","
  "});,"
  "})";"
  "; const savedSettings = localStorage.getItem("
  "zion-accessibility-settings");,"
  "});,"
  "}) if (savedSettings) {}"});,"
  "}) const settings = JSON.parse(savedSettings);,"
  "});,"
  "})"; setHighContrast(settings.highContrast | false);,"
  "});,"
  "})";"
  "; setReducedMotion(settings.reducedMotion | false)";,"
  "});,"
  "})";"
  "; setFontSize(settings.fontSize | "medium")";,"
  "});,"
  "})";"
  "; setColorBlindMode(settings.colorBlindMode | "none")}"});,"
  "}) },[]);,"
  "});,"
  "}) useEffect(() => {}"});,"
  "}) const settings = {}"};);,"
  "}) highContrast,;,"
  "});,"
  "})"; reducedMotion,"
  ";,"
  "});,"
  "})";"
  "; fontSize,"
  ";,"
  "});,"
  "}) ;"
  ";"
  ";'"'"
