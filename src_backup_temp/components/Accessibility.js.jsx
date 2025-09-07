import React, {useState, useEffect, createContext, useContext} from 'react';'''';';
import {motion, AnimatePresence} from 'framer-motion';';';
import {Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility, X} from 'lucide-react';
;const AccessibilityContext = createContext(null);
export const useAccessibility = (props: any) => {}
  const context = useContext(AccessibilityContext);';
  if (!context) {}';';
''';';
''''';';
    throw new Error('''',';';
      'useAccessibility must be used within an AccessibilityProvider'
import React, {useState, useEffect, createContext, useContext} from 'react';
import React, {useState, useEffect, createContext, useContext} from 'react';'''
import {motion, AnimatePresence} from 'framer-motion';
export const useAccessibility = ("props": "any) => {"}
  const context = useContext(AccessibilityContext);
  if (!context) {}
'';
'''';
    throw new Error('''',;
      'useAccessibility must be used within an AccessibilityProvider';
''
''''
    throw new Error('''',
    );
  }
  return context;
};
// Accessibility Provider Component;
export const AccessibilityProvider = (props: any) => {}';
  const [highContrast, setHighContrast] = useState(false);';';
  const [reducedMotion, setReducedMotion] = useState(false);'';';
  const [fontSize, setFontSize] = useState('medium');'';';
  const [colorBlindMode, setColorBlindMode] = useState('none');
  // Load settings from localStorage;';
  useEffect(() => {}';';
'''';';
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {}
      const settings = JSON.parse(savedSettings);';
      setHighContrast(settings.highContrast || false);';';
      setReducedMotion(settings.reducedMotion || false);'';';
      setFontSize(settings.fontSize || 'medium');'';';
export const AccessibilityProvider = (props: any) => {}
export const AccessibilityProvider = ("props": "any) => {"}
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);'
  const [fontSize, setFontSize] = useState('medium');'
  // Load settings from localStorage;
  useEffect(() => {}
'''
      const settings = JSON.parse(savedSettings);
      setHighContrast(settings.highContrast || false);
      setReducedMotion(settings.reducedMotion || false);';
      setFontSize(settings.fontSize || 'medium');';
      setReducedMotion(settings.reducedMotion || false);'
      setFontSize(settings.fontSize || 'medium');'
      setColorBlindMode(settings.colorBlindMode || 'none');
}, []);
  // Save settings to localStorage;
  useEffect(() => {;
  // "TODO": "Add dependencies if needed;
  return () => {;
    // Cleanup function;
  "};
}, []);, []);
    const settings = {";
;,"});,"})";
 const AccessibilityContext = createContext (null) ; export const useAccessibility = ("props": "any) => { const context = useContext (AccessibilityContext) ; if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider") "} return context};"""";,"});,"})";
 const AccessibilityContext = createContext(null); export const useAccessibility = ("props": "any) => { const context = useContext(AccessibilityContext); if(!context) { throw new Error(" "useAccessibility must be used within an AccessibilityProvider" )"} return context};,"});,"})"""";,"});,"})","});,"})","});,"})";
;const AccessibilityContext = createContext(null);,"});,"})";
export const useAccessibility = ("props": "any) => {"}"});,"})";
  const context = useContext(AccessibilityContext);,"});,"})";
  if (!context) {}"});,"})";
";,"});,"})";
"";,"});,"})";
""";,"});,"})";
    throw new Error("""";,"});,"})";
      "useAccessibility must be used within an AccessibilityProvider";,"});,"})";
    );,"});,"});";
}"});,"})";
  return context,"});,"});";
};,"});,"})";
// comment;
export const AccessibilityProvider = ("props": "any) => {"}"});,"})";
  const [highContrast, setHighContrast] = useState(false);,"});,"})";
  const [reducedMotion, setReducedMotion] = useState(false);,"});,"})";
  const [fontSize, setFontSize] = useState("medium");,"});,"})";
  const [colorBlindMode, setColorBlindMode] = useState("none");,"});,"})";
  useEffect(() => {}"});,"})";
    const savedSettings = localStorage.getItem("zion-accessibility-settings");,"});,"})";
    if (savedSettings) {}"});,"})";
      const settings = JSON.parse(savedSettings);,"});,"})";
      setHighContrast(settings.highContrast || false);,"});,"})";
      setReducedMotion(settings.reducedMotion || false);,"});,"})";
      setFontSize(settings.fontSize || "medium");,"});,"})";
      setColorBlindMode(settings.colorBlindMode || "none");,"});,"});";
}"});,"});";
}, []);,"});,"})";
    const settings = {}"});,"})";
      highContrast,,"});,"})";
      reducedMotion,";,"});,"})";
      fontSize,"";,"});,"})";
      colorBlindMode};""";,"});,"})";
    localStorage.setItem("""";,"});,"})";
      "zion-accessibility-settings",,"});,"})";
      JSON.stringify(settings);,"});,"})";
}, [highContrast, reducedMotion, fontSize, colorBlindMode]);,"});,"})";
    const root = document.documentElement,"});,"})";
    if (highContrast) {}"});,"})";
      root.classList.add("high-contrast");,"});,"});";
} else {}"});,"})";
      root.classList.remove("high-contrast");,"});,"});";
    if (reducedMotion) {}"});,"})";
      root.classList.add("reduced-motion");,"});,"});";
      root.classList.remove("reduced-motion");,"});,"});";
}"";,"});,"})";
    root.style.fontSize ="""";,"});,"})";
      fontSize == = "small" ? "14px" : "fontSize === "large" ? "18px" : "16px"",";,"});,"})";
    root.style.filter ="""";,"});,"})";
      colorBlindMode === "none""""";,"});,"})";
        ? "none""""";,"});,"})";
        : "colorBlindMode === "protanopia""""";","});,"})";
          ? "url(#protanopia)""""";,"});,"})";
          : "colorBlindMode === "deuteranopia""""";","});,"})";
            ? "url(#deuteranopia)""""";,"});,"})";
            : "url(#tritanopia);,"});,"});";
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);,"});,"})";
  const value = {}"});,"})";
    reducedMotion,,"});,"})";
    fontSize,,"});,"})";
    colorBlindMode,,"});,"})";
    toggleHighContrast,,"});,"})";
    toggleReducedMotion,,"});,"})";
    setFontSize,,"});,"})";
    setColorBlindMode};,"});,"})";
  return ();,"});,"})";
    <AccessibilityContext.Provider value="{value}">;,"});,"})";
      {children}"});,"})";
    </AccessibilityContext.Provider>;,"});,"})";
export const AccessibilityPanel = ("props": "any) => {"}"});,"})";
  const [isOpen, setIsOpen] = useState(false);,"});,"})";
  const {}"});,"})";
    setColorBlindMode} = useAccessibility();,"});,"})";
    const handleKeyDown = event => {}"});,"})";
      if();,"});,"})";
        (event.ctrlKey || event.metaKey) &&";,"});,"})";
        event.shiftKey &&"";,"});,"})";
        event.key === "A";,"});,"})";
      ) {}"});,"})";
        event.preventDefault();,"});,"})";
        setIsOpen(!isOpen);,"});,"});";
        event.key === "H";,"});,"})";
        toggleHighContrast();,"});,"});";
        event.key === "M";,"});,"})";
        toggleReducedMotion();,"});,"});";
}"";,"});,"});";
};""";,"});,"})";
    window.addEventListener();"";,"});,"})";
    return () => window.removeEventListener("keydown", handleKeyDown);,"});,"});";
}, [isOpen, toggleHighContrast, toggleReducedMotion]);,"});,"})";
    <>;,"});,"})";
      {/* comment */}"});,"})";
      <motion.button,"});,"})";
        whileHover="{{" "scale": "1.1 "}}"});,"})";
        whileTap="{{" "scale": "0.9 "}}"});,"})";
        onClick="{()" => setIsOpen(true)}"});,"})";
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 z-50 flex items-center justify-center "hover": "shadow-2xl "hover":shadow-zion-cyan/40 transition-all duration-300""""","});,"})";
        aria-label="Open Accessibility Settings"""";,"});,"})";
      >"""";,"});,"})";
        <Accessibility className="w-6 h-6"   />;,"});,"})";
      </motion.button>;,"});,"})";
      <AnimatePresence>;,"});,"})";
        {isOpen && (;,"});,"})";
          <motion.div,"});,"})";
            initial="{{" "opacity": "0 "}}"});,"})";
            animate="{{" "opacity": "1 "}}""";,"});,"})";
            exit="{{" "opacity": "0 "}}"""";,"});,"})";
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4""";,"});,"})";
            onClick="{()" => setIsOpen(false)}"});,"})";
          >;,"});,"})";
              initial="{{" "scale": "0.9", "opacity": "0 "}}"});,"})";
              animate="{{" "scale": "1", "opacity": "1 "}}""";,"});,"})";
              exit="{{" "scale": "0.9", "opacity": "0 "}}"""";,"});,"})";
              className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto""";,"});,"})";
              onClick="{e" => e.stopPropagation()}"});,"})";
            >""";,"});,"})";
              {/* comment */}"""";,"});,"})";
              <div className="flex items-center justify-between mb-6">"""";,"});,"})";
                <h2 className="text-xl font-bold text-white flex items-center gap-2">"""";,"});,"})";
                  <Accessibility className="w-5 h-5 text-zion-cyan"   />;,"});,"})";
                  Accessibility Settings,"});,"})";
                </h2>""";,"});,"})";
                <Button"""";,"});,"})";
                  variant="ghost"""";,"});,"})";
                  size="sm"""";,"});,"})";
                  onClick="{()" => setIsOpen(false)}"""";,"});,"})";
                  className="text-zion-slate-light "hover": "text-white""""","});,"})";
                  <X className="w-4 h-4"   />;,"});,"})";
                </Button>;,"});,"})";
              </div>;,"});,"})";
              <div className="space-y-6">""";,"});,"})";
                <div className="flex items-center justify-between">""";,"});,"})";
                  <div>"""";,"});,"})";
                    <h3 className="text-white font-medium mb-1">;,"});,"})";
                      High Contrast""";,"});,"})";
                    """";,"});,"})";
                    <p className="text-sm text-zion-slate-light">;,"});,"})";
                      Increase contrast for better visibility,"});,"})";
                    </p>;,"});,"})";
                  </div>";,"});,"})";
                    variant="{highContrast" ? "default" : "outline"}"""";,"});,"})";
                    size="sm""";,"});,"})";
                    onClick={toggleHighContrast}"});,"})";
                    className={}"});,"})";
                      highContrast"";,"});,"})";
                        ? "bg-zion-cyan text-white""";,"});,"})";
                        : "border-zion-cyan/30 text-zion-cyan";,"});,"});";
                    {highContrast ? ("""";,"});,"})";
                      <Eye className="w-4 h-4"   />""";,"});,"})";
                    ) : "("""";","});,"})";
                      <EyeOff className="w-4 h-4"   />;,"});,"})";
                    )}"});,"})";
                      Reduced Motion""";,"});,"})";
                      Minimize animations and transitions,"});,"})";
                    variant="{reducedMotion" ? "default" : "outline"}"""";,"});,"})";
                    onClick={toggleReducedMotion}"});,"})";
                      reducedMotion"";,"});,"})";
                    {reducedMotion ? ("""";,"});,"})";
                      <VolumeX className="w-4 h-4"   />""";,"});,"})";
                      <Volume2 className="w-4 h-4"   />;,"});,"})";
                {/* comment */}""";,"});,"})";
                  <h3 className="text-white font-medium mb-3">Font Size"""";,"});,"})";
                  <div className="flex gap-2">";,"});,"})";
                    {["small",medium",large"].map(size => (;,"});,"})";
                      <Button,"});,"})";
                        key={size}""";,"});,"})";
                        variant="{fontSize" === size ? "default" : "outline"}"""";,"});,"})";
                        onClick="{()" => setFontSize(size)}"});,"})";
                          fontSize === size"""";,"});,"})";
                            ? "bg-zion-cyan text-white""""";,"});,"})";
                        {size.charAt(0).toUpperCase() + size.slice(1)}"});,"})";
                    ))}"});,"})";
                  <h3 className="text-white font-medium mb-3">;,"});,"})";
                    Color Blind Support""";,"});,"})";
                  <div className="grid grid-cols-2 gap-2">";,"});,"})";
                    {["none",protanopia",deuteranopia",tritanopia"].map();,"});,"})";
                      mode => (;,"});,"})";
                          key={mode}"});,"})";
                          variant={}"});,"})";
                            colorBlindMode === mode ? "default" : "outline""";,"});,"});";
}"""";,"});,"})";
                          onClick="{()" => setColorBlindMode(mode)}"});,"})";
                            colorBlindMode === mode"""";,"});,"})";
                          {mode.charAt(0).toUpperCase() + mode.slice(1)}"});,"})";
                      );,"});,"})";
                <div className="bg-zion-blue-dark/50 rounded-lg p-4">"""";,"});,"})";
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">"""";,"});,"})";
                    <Keyboard className="w-4 h-4 text-zion-cyan"   />;,"});,"})";
                    Keyboard Shortcuts""";,"});,"})";
                  <div className="space-y-2 text-sm text-zion-slate-light">"""";,"});,"})";
                    <div className="flex justify-between">""";,"});,"})";
                      <span>Open "Panel": "</span>""""","});,"})";
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">;,"});,"})";
                        Ctrl/Cmd + Shift + A,"});,"})";
                      </kbd>""";,"});,"})";
                    </div>"""";,"});,"})";
                      <span>High "Contrast": "</span>""""","});,"})";
                        Ctrl/Cmd + Shift + H,"});,"})";
                      <span>Reduced "Motion": "</span>""""","});,"})";
                        Ctrl/Cmd + Shift + M,"});,"})";
                      </kbd>;,"});,"})";
              <div className="mt-6 pt-4 border-t border-zion-cyan/20">"""";,"});,"})";
                <p className="text-xs text-zion-slate-light text-center">;,"});,"})";
                  These settings are saved locally and will persist across,"});,"})";
                  sessions.</p>;,"});,"})";
            </motion.div>;,"});,"})";
      </AnimatePresence>;,"});,"})";
    </>"});,"})";
export const SkipToContent = () => (""";,"});,"})";
  <a"""";,"});,"})";
    href="#main-content"""";,"});,"})";
    className="sr-only "focus": "not-sr-only "focus":absolute "focus":top-4 "focus":left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-medium z-50 "hover":bg-zion-cyan-light transition-colors duration-300"""","});,"})";
    Skip to main content,"});,"})";
  </a>;,"});,"})";
export const useFocusTrap = isActive => {}"});,"})";
    if (!isActive) return,""";,"});,"})";
    const focusableElements =""""";,"});,"})";
      "button, [href], input, select, textarea, [tabindex]: "not([tabindex="-1"]);","});,"})";
    const container = document.activeElement?.closest("[data-focus-trap]");,"});,"})";
    if(!container) return,"});,"})";
    const firstFocusableElement = focusableContent[0];,"});,"})";
    const lastFocusableElement = focusableContent[focusableContent.length-1];,"});,"})";
    const handleTabKey = e => {}"});,"})";
      if (e.key === "Tab") {}"});,"})";
        if(e.shiftKey) {}"});,"})";
          if(document.activeElement === firstFocusableElement) {}"});,"})";
            e.preventDefault();,"});,"})";
            lastFocusableElement.focus();,"});,"});";
          if(document.activeElement === lastFocusableElement) {}"});,"})";
            firstFocusableElement.focus();,"});,"});";
}";,"});,"});";
    document.addEventListener();"";,"});,"})";
    return () => document.removeEventListener("keydown", handleTabKey);,"});,"});";
}, [isActive]);,"});,"});";
export const SrOnly = ({children}) => ("""";,"});,"})";
  <span className="sr-only">{children}</span>;,"});,"})";
export default AccessibilityPanel;""";,"});,"})";
""""";,"});,"})";
 const AccessibilityContext = createContext (null)  export const useAccessibility = ("props": "any) => { const context = useContext (AccessibilityContext)  if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider")  "} return context }";;import React, {useState, useEffect, createContext, useContext} from "react"";import React, {useState, useEffect, createContext, useContext} from "react""";""";
 const AccessibilityContext = createContext (null)  export const useAccessibility = ("props": "any) => { const context = useContext (AccessibilityContext)  if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider")  "} return context }";import React, {useState, useEffect, createContext, useContext}  from "react,;
const AccessibilityContext = createContext()";
const context = useContext(AccessibilityContext)";
  if (!context) {}"";
""";
""""";
    throw new Error(""""";
  // Save settings to localStorage
  useEffect(() => {
  // TODO: Add dependencies if needed
  return () => {
    // Cleanup function
    const settings = {"
;,"}
    );,"})"
 const AccessibilityContext = createContext (null) ; export const useAccessibility = (props: any) => { const context = useContext (AccessibilityContext) ; if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider") } return context};"""";,"}
 const AccessibilityContext = createContext(null); export const useAccessibility = (props: any) => { const context = useContext(AccessibilityContext); if(!context) { throw new Error(" "useAccessibility must be used within an AccessibilityProvider" )} return context};,"}
    );,"})"""";,"}
    );,"})","}
;const AccessibilityContext = createContext(null);,"}
export const useAccessibility = (props: any) => {}"}
  const context = useContext(AccessibilityContext);,"}
  if (!context) {}"}
";,"}
"";,"}
""";,"}
    throw new Error("""";,"}
      "useAccessibility must be used within an AccessibilityProvider";,"}
    );,"}
    );"
}"}
  return context,"}
};,"}
// comment
export const AccessibilityProvider = (props: any) => {}"}
  const [highContrast, setHighContrast] = useState(false);,"}
  const [reducedMotion, setReducedMotion] = useState(false);,"}
  const [fontSize, setFontSize] = useState("medium");,"}
  const [colorBlindMode, setColorBlindMode] = useState("none");,"}
  useEffect(() => {}"}
    const savedSettings = localStorage.getItem("zion-accessibility-settings");,"}
    if (savedSettings) {}"}
      const settings = JSON.parse(savedSettings);,"}
      setHighContrast(settings.highContrast || false);,"}
      setReducedMotion(settings.reducedMotion || false);,"}
      setFontSize(settings.fontSize || "medium");,"}
      setColorBlindMode(settings.colorBlindMode || "none");,"}
}, []);,"}
    const settings = {}"}
      highContrast,,"}
      reducedMotion,";,"}
      fontSize,"";,"}
      colorBlindMode};""";,"}
    localStorage.setItem("""";,"}
      "zion-accessibility-settings",,"}
      JSON.stringify(settings);,"}
}, [highContrast, reducedMotion, fontSize, colorBlindMode]);,"}
    const root = document.documentElement,"}
    if (highContrast) {}"}
      root.classList.add("high-contrast");,"}
} else {}"}
      root.classList.remove("high-contrast");,"}
    if (reducedMotion) {}"}
      root.classList.add("reduced-motion");,"}
      root.classList.remove("reduced-motion");,"}
}"";,"}
    root.style.fontSize ="""";,"}
      fontSize == = "small" ? "14px" : fontSize === "large" ? "18px" : "16px",";,"}
    root.style.filter ="""";,"}
      colorBlindMode === "none""""";,"}
        ? "none""""";,"}
        : colorBlindMode === "protanopia""""";,"}
          ? "url(#protanopia)""""";,"}
          : colorBlindMode === "deuteranopia""""";,"}
            ? "url(#deuteranopia)""""";,"}
            : "url(#tritanopia);,"}
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion);,"}
  const value = {}"}
    reducedMotion,,"}
    fontSize,,"}
    colorBlindMode,,"}
    toggleHighContrast,,"}
    toggleReducedMotion,,"}
    setFontSize,,"}
    setColorBlindMode};,"}
  return ();,"}
    <AccessibilityContext.Provider value="{value}">;,"}
      {children}"}
    </AccessibilityContext.Provider>;,"}
export const AccessibilityPanel = (props: any) => {}"}
  const [isOpen, setIsOpen] = useState(false);,"}
  const {}"}
    setColorBlindMode} = useAccessibility();,"}
    const handleKeyDown = event => {}"}
      if();,"}
        (event.ctrlKey || event.metaKey) &&";,"}
        event.shiftKey &&"";,"}
        event.key === "A";,"}
      ) {}"}
        event.preventDefault();,"}
        setIsOpen(!isOpen);,"}
        event.key === "H";,"}
        toggleHighContrast();,"}
        event.key === "M";,"}
        toggleReducedMotion();,"}
};""";,"}
    window.addEventListener();"";,"}
    return () => window.removeEventListener("keydown", handleKeyDown);,"}
}, [isOpen, toggleHighContrast, toggleReducedMotion]);,"}
    <>;,"}
      {/* comment */}"}
      <motion.button,"}
        whileHover="{{" scale: 1.1 }}"}
        whileTap="{{" scale: 0.9 }}"}
        onClick="{()" => setIsOpen(true)}"}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 z-50 flex items-center justify-center hover: shadow-2xl hover:shadow-zion-cyan/40 transition-all duration-300"""","}
        aria-label="Open Accessibility Settings"""";,"}
      >"""";,"}
        <Accessibility className="w-6 h-6"   />;,"}
      </motion.button>;,"}
      <AnimatePresence>;,"}
        {isOpen && (;,"}
          <motion.div,"}
            initial="{{" opacity: 0 }}"}
            animate="{{" opacity: 1 }}""";,"}
            exit="{{" opacity: 0 }}"""";,"}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4""";,"}
            onClick="{()" => setIsOpen(false)}"}
          >;,"}
              initial="{{" scale: 0.9, opacity: 0 }}"}
              animate="{{" scale: 1, opacity: 1 }}""";,"}
              exit="{{" scale: 0.9, opacity: 0 }}"""";,"}
              className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto""";,"}
              onClick="{e" => e.stopPropagation()}"}
            >""";,"}
              {/* comment */}"""";,"}
              <div className="flex items-center justify-between mb-6">"""";,"}
                <h2 className="text-xl font-bold text-white flex items-center gap-2">"""";,"}
                  <Accessibility className="w-5 h-5 text-zion-cyan"   />;,"}
                  Accessibility Settings,"}
                </h2>""";,"}
                <Button"""";,"}
                  variant="ghost"""";,"}
                  size="sm"""";,"}
                  onClick="{()" => setIsOpen(false)}"""";,"}
                  className="text-zion-slate-light hover: text-white"""","}
                  <X className="w-4 h-4"   />;,"}
                </Button>;,"}
              </div>;,"}
              <div className="space-y-6">""";,"}
                <div className="flex items-center justify-between">""";,"}
                  <div>"""";,"}
                    <h3 className="text-white font-medium mb-1">;,"}
                      High Contrast""";,"}
                    """";,"}
                    <p className="text-sm text-zion-slate-light">;,"}
                      Increase contrast for better visibility,"}
                    </p>;,"}
                  </div>";,"}
                    variant="{highContrast" ? "default" : "outline"}"""";,"}
                    size="sm""";,"}
                    onClick={toggleHighContrast}"}
                    className={}"}
                      highContrast"";,"}
                        ? "bg-zion-cyan text-white""";,"}
                        : "border-zion-cyan/30 text-zion-cyan";,"}
                    {highContrast ? ("""";,"}
                      <Eye className="w-4 h-4"   />""";,"}
                    ) : ("""";,"}
                      <EyeOff className="w-4 h-4"   />;,"}
                    )}"}
                      Reduced Motion""";,"}
                      Minimize animations and transitions,"}
                    variant="{reducedMotion" ? "default" : "outline"}"""";,"}
                    onClick={toggleReducedMotion}"}
                      reducedMotion"";,"}
                    {reducedMotion ? ("""";,"}
                      <VolumeX className="w-4 h-4"   />""";,"}
                      <Volume2 className="w-4 h-4"   />;,"}
                {/* comment */}""";,"}
                  <h3 className="text-white font-medium mb-3">Font Size"""";,"}
                  <div className="flex gap-2">";,"}
                    {["small",medium",large"].map(size => (;,"}
                      <Button,"}
                        key={size}""";,"}
                        variant="{fontSize" === size ? "default" : "outline"}"""";,"}
                        onClick="{()" => setFontSize(size)}"}
                          fontSize === size"""";,"}
                            ? "bg-zion-cyan text-white""""";,"}
                        {size.charAt(0).toUpperCase() + size.slice(1)}"}
                    ))}"}
                  <h3 className="text-white font-medium mb-3">;,"}
                    Color Blind Support""";,"}
                  <div className="grid grid-cols-2 gap-2">";,"}
                    {["none",protanopia",deuteranopia",tritanopia"].map();,"}
                      mode => (;,"}
                          key={mode}"}
                          variant={}"}
                            colorBlindMode === mode ? "default" : "outline""";,"}
}"""";,"}
                          onClick="{()" => setColorBlindMode(mode)}"}
                            colorBlindMode === mode"""";,"}
                          {mode.charAt(0).toUpperCase() + mode.slice(1)}"}
                <div className="bg-zion-blue-dark/50 rounded-lg p-4">"""";,"}
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">"""";,"}
                    <Keyboard className="w-4 h-4 text-zion-cyan"   />;,"}
                    Keyboard Shortcuts""";,"}
                  <div className="space-y-2 text-sm text-zion-slate-light">"""";,"}
                    <div className="flex justify-between">""";,"}
                      <span>Open Panel: </span>"""","}
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">;,"}
                        Ctrl/Cmd + Shift + A,"}
                      </kbd>""";,"}
                    </div>"""";,"}
                      <span>High Contrast: </span>"""","}
                        Ctrl/Cmd + Shift + H,"}
                      <span>Reduced Motion: </span>"""","}
                        Ctrl/Cmd + Shift + M,"}
                      </kbd>;,"}
              <div className="mt-6 pt-4 border-t border-zion-cyan/20">"""";,"}
                <p className="text-xs text-zion-slate-light text-center">;,"}
                  These settings are saved locally and will persist across,"}
                  sessions.</p>;,"}
            </motion.div>;,"}
      </AnimatePresence>;,"}
    </>"}
export const SkipToContent = () => (""";,"}
  <a"""";,"}
    href="#main-content"""";,"}
    className="sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-medium z-50 hover:bg-zion-cyan-light transition-colors duration-300""","}
    Skip to main content,"}
  </a>;,"}
export const useFocusTrap = isActive => {}"}
    if (!isActive) return,""";,"}
    const focusableElements =""""";,"}
      "button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]);,"}
    const container = document.activeElement?.closest("[data-focus-trap]");,"}
    if(!container) return,"}
    const firstFocusableElement = focusableContent[0];,"}
    const lastFocusableElement = focusableContent[focusableContent.length-1];,"}
    const handleTabKey = e => {}"}
      if (e.key === "Tab") {}"}
        if(e.shiftKey) {}"}
          if(document.activeElement === firstFocusableElement) {}"}
            e.preventDefault();,"}
            lastFocusableElement.focus();,"}
          if(document.activeElement === lastFocusableElement) {}"}
            firstFocusableElement.focus();,"}
}";,"}
    document.addEventListener();"";,"}
    return () => document.removeEventListener("keydown", handleTabKey);,"}
}, [isActive]);,"}
export const SrOnly = ({children}) => ("""";,"}
  <span className="sr-only">{children}</span>;,"}
export default AccessibilityPanel;""";,"}
""""";,"}
 const AccessibilityContext = createContext (null)  export const useAccessibility = (props: any) => { const context = useContext (AccessibilityContext)  if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider")  } return context }";import React, {useState, useEffect, createContext, useContext} from "react"";import React, {useState, useEffect, createContext, useContext} from "react""";"""
 const AccessibilityContext = createContext (null)  export const useAccessibility = (props: any) => { const context = useContext (AccessibilityContext)  if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider")  } return context }";import React, {useState, useEffect, createContext, useContext}  from "react,
const AccessibilityContext = createContext()"
const context = useContext(AccessibilityContext)"
  if (!context) {}""
"""
"""""
    throw new Error("""""
      "useAccessibility must be used within an AccessibilityProvider"    )}
  return context}
;
export const AccessibilityProvider = ("props": "any) => {"}";
  const [highContrast, setHighContrast] = useState(false)"";
  const [reducedMotion, setReducedMotion] = useState(false)"";
  const [fontSize, setFontSize] = useState("medium")"";
  const [colorBlindMode, setColorBlindMode] = useState();
export const AccessibilityProvider = (props: any) => {}"
  const [highContrast, setHighContrast] = useState(false)""
  const [reducedMotion, setReducedMotion] = useState(false)""
  const [fontSize, setFontSize] = useState("medium")""
  const [colorBlindMode, setColorBlindMode] = useState()
useEffect(() => {}""
    const savedSettings = localStorage.getItem()
      const settings = JSON.parse(savedSettings)"
      setHighContrast(settings.highContrast || false)""
      setReducedMotion(settings.reducedMotion || false)"""
      setFontSize(settings.fontSize || "medium")"""
      setColorBlindMode(settings.colorBlindMode || "none")}
  }, [])
useEffect(() => {}"
    const settings = {}""
      highContrast, reducedMotion,""
      fontSize, "";""
      colorBlindMode}"
    const settings = {}"
      fontSize,
colorBlindMode};
    localStorage.setItem('
      'zion-accessibility-settings',
      JSON.stringify(settings)
useEffect(() => {}";
    const settings = {}"";
      highContrast, reducedMotion,"";
      fontSize, "";"";
      colorBlindMode}";
    const settings = {}";
      fontSize,;
    localStorage.setItem(';
      'zion-accessibility-settings',;
      JSON.stringify(settings);
  }, [highContrast, reducedMotion, fontSize, colorBlindMode]);
  // Apply accessibility settings to document;
  // Apply accessibility settings to document
    const root = document.documentElement;
    // High contrast mode
    if(highContrast) {localStorage.setItem()}
    )}, [highContrast, reducedMotion, fontSize, colorBlindMode])
    const root = document.documentElement,
if (highContrast) {}""
      root.classList.add("high-contrast")} else {}""
      root.classList.remove("high-contrast")}
if (reducedMotion) {}"";
      root.classList.add("reduced-motion")} else {}"";
"";
"""";
      root.classList.remove("reduced - motion")", ",;
}""";
    root.style.fontSize = """"";
      fontSize === "small" ? "14px" : "fontSize === "large" ? "18px" : "16px"""";
    root.style.filter =""""";
      colorBlindMode === "none"""""";
        ? "none"""""";
        : colorBlindMode === "protanopia"""""";
          ? "url(#protanopia)"""""";
          : colorBlindMode === "deuteranopia"""""";
            ? "url(#deuteranopia)""""";
            : "url(#tritanopia)",;
if (reducedMotion) {}""
      root.classList.add("reduced-motion")} else {}""
""
""""
      root.classList.remove("reduced - motion")", ",
}"""
    root.style.fontSize = """""
      fontSize === "small" ? "14px" : fontSize === "large" ? "18px" : "16px""""
    root.style.filter ="""""
      colorBlindMode === "none""""""
        ? "none""""""
        : colorBlindMode === "protanopia""""""
          ? "url(#protanopia)""""""
          : colorBlindMode === "deuteranopia""""""
            ? "url(#deuteranopia)"""""
            : "url(#tritanopia),
}, [highContrast, reducedMotion, fontSize, colorBlindMode])
  const toggleReducedMotion = () => setReducedMotion()
}  const value = {}
    highContrast, reducedMotion, fontSize, colorBlindMode, toggleHighContrast, toggleReducedMotion, setFontSize, setColorBlindMode}
  return ()"
    <AccessibilityContext .Provider value={value}" >"
      {children}
    </AccessibilityContext.Provider>
  )}
highContrast,
    reducedMotion,
    colorBlindMode,
    toggleHighContrast,
    toggleReducedMotion,
    setFontSize,
    setColorBlindMode} = useAccessibility();
  // Keyboard shortcuts;
  // Keyboard shortcuts
    const handleKeyDown = event => {const [isOpen, setIsOpen] = useState()}
  const {}
    highContrast, reducedMotion, fontSize, colorBlindMode, toggleHighContrast, toggleReducedMotion, setFontSize, setColorBlindMode} = useAccessibility()
  // commentuseEffect(() => {}
    const handleKeyDown = event => {}
if()""
        (event.ctrlKey || event.metaKey) &&"""
        event.shiftKey &&"""
        event.key === "A
      ) {}
        event.preventDefault()
        setIsOpen(!isOpen)}
        event.key === "H"
        toggleHighContrast()}
        event.key === "M"
      ) {}"
        event.preventDefault()""
        toggleReducedMotion()", "
}""}";""
    window.addEventListener("keydown", handleKeyDown)";""
    return () => window.removeEventListener("keydown", handleKeyDown)}, [isOpen, toggleHighContrast, toggleReducedMotion])
}"
    window.addEventListener("keydown", handleKeyDown)"
  return()
    <>
      {/* comment */}
      <motion .button,";
whileHover = "{{" "scale": "1.1 "}}";
        whileTap="{{" "scale": "0.9 "}}";
        onClick="{()" =" > setIsOpen(true)}"";
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 z-50 flex items-center justify-center "hover": "shadow-2xl "hover":shadow-zion-cyan/40 transition-all duration-300""""";
        aria-label="Open Accessibility Settings"""""";
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 z-50 flex items-center justify-center "hover":shadow-2xl "hover":shadow-zion-cyan/40 transition-all duration-300"";
        aria-label="Open Accessibility Settings""""";
      >"""";
        <Accessibility className="w-6 h-6" /" >";
      </motion.button>",;
      <AnimatePresence>;
        {isOpen && (;
          <motion .div,";
initial="{{" "opacity": "0 "}}""";
            animate="{{" "opacity": "1 "}}"""";
            exit="{{" "opacity": "0 "}}"""";
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4""";
            onClick="{()" =" > setIsOpen(false)}"";
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"";
            onClick="{()" =" > setIsOpen(false)}
          >;
initial="{{" "scale": "0.9", "opacity": "0 "}}""";
              animate="{{" "scale": "1", "opacity": "1 "}}"""";
              exit="{{" "scale": "0.9", "opacity": "0 "}}"""";
              className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"";
              onClick="{e" =" > e.stopPropagation()}";
            >""""";
              {/* comment */}""""";
              <div className="flex items-center justify-between mb-6">"""";
                <h2 className="text-xl font-bold text-white flex items-center gap-2">"""";
                  <Accessibility className="w-5 h-5 text-zion-cyan" /" >"";
                  Accessibility Settings"";
                </h2>""""";
                <Button """"";
                  variant="ghost"""""";
                  size="sm"""""";
                  onClick="{()" =" > setIsOpen(false)}""""";
                  className="text-zion-slate-light "hover": "text-white""""";
                  variant="ghost""""";
                  size="sm"""""",;
                  onClick="{()" =" > setIsOpen(false)}"""";
                  className="text-zion-slate-light "hover": "text-white"";
                  <X className="w-4 h-4" /" >";
                </Button>";
              </div>"";
"""""",;
              <div className="space-y-6">""""";
                {/* comment */}"""";
                <div className="flex items-center justify-between">""""";
                  <div>"""";
                    <h3 className="text-white font-medium mb-1">"";
                      High Contrast""""";
                    <p className="text-sm text-zion-slate-light">;
                      Increase contrast for better visibility";
                    </p>"";
                  </div>""";
                  <Button """"""";
                    variant="{highContrast" ? "default" : "outline"}""""";
                    size="sm""";
                    onClick="{toggleHighContrast}"";
                    className={}"";
                      highContrast""";
                        ? "bg-zion-cyan text-white"""";
                        : "border-zion-cyan/30 text-zion-cyan"}"" >""""";
                    {highContrast ? ("""";
                      <Eye className="w-4 h-4" /" >"""";
                    ) : "("""";
                      <EyeOff className="w-4 h-4" /" >";
                    )"}
                      Reduced Motion""""";
                      Minimize animations and transitions";
                    variant="{reducedMotion" ? "default" : "outline"}""""";
                    onClick="{toggleReducedMotion}"";
                      reducedMotion""";
                    {reducedMotion ? ("""";
                      <VolumeX className="w-4 h-4" /" >"""";
                      <Volume2 className="w-4 h-4" /" >";
                <div>""""";
                  <h3 className="text-white font-medium mb-3">Font Size"""";
                  <div className="flex gap-2">""";
                    {["small", medium",large"].map(size => (";
                      <Button "";
                        key={size}""""";
                        variant="{fontSize" === size ? "default" : "outline"}""""";
                        onClick="{()" =" > setFontSize(size)}"";
                          fontSize === size""""";
                            ? "bg-zion-cyan text-white"""""";
      <motion .button,"
whileHover = "{{" scale: 1.1 }}"
        whileTap="{{" scale: 0.9 }}"
        onClick="{()" =" > setIsOpen(true)}""
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 z-50 flex items-center justify-center hover: shadow-2xl hover:shadow-zion-cyan/40 transition-all duration-300"""""
        aria-label="Open Accessibility Settings""""""
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/25 z-50 flex items-center justify-center hover:shadow-2xl hover:shadow-zion-cyan/40 transition-all duration-300""
        aria-label="Open Accessibility Settings"""""
      >""""
        <Accessibility className="w-6 h-6" /" >"
      </motion.button>,
      <AnimatePresence>
        {isOpen && (
          <motion .div,"
initial="{{" opacity: 0 }}"""
            animate="{{" opacity: 1 }}""""
            exit="{{" opacity: 0 }}""""
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"""
            onClick="{()" =" > setIsOpen(false)}""
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4""
          >
initial="{{" scale: 0.9, opacity: 0 }}"""
              animate="{{" scale: 1, opacity: 1 }}""""
              exit="{{" scale: 0.9, opacity: 0 }}""""
              className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto""
              onClick="{e" =" > e.stopPropagation()}"
            >"""""
              {/* comment */}"""""
              <div className="flex items-center justify-between mb-6">""""
                <h2 className="text-xl font-bold text-white flex items-center gap-2">""""
                  <Accessibility className="w-5 h-5 text-zion-cyan" /" >""
                  Accessibility Settings""
                </h2>"""""
                <Button """""
                  variant="ghost""""""
                  size="sm""""""
                  onClick="{()" =" > setIsOpen(false)}"""""
                  className="text-zion-slate-light hover: text-white"""""
                  variant="ghost"""""
                  size="sm""""",
                  onClick="{()" =" > setIsOpen(false)}""""
                  className="text-zion-slate-light hover: text-white""
                  <X className="w-4 h-4" /" >"
                </Button>"
              </div>""
""""",
              <div className="space-y-6">"""""
                {/* comment */}""""
                <div className="flex items-center justify-between">"""""
                  <div>""""
                    <h3 className="text-white font-medium mb-1">""
                      High Contrast"""""
                    <p className="text-sm text-zion-slate-light">
                      Increase contrast for better visibility"
                    </p>""
                  </div>"""
                  <Button """""""
                    variant="{highContrast" ? "default" : "outline"}"""""
                    size="sm"""
                    onClick="{toggleHighContrast}""
                    className={}""
                      highContrast"""
                        ? "bg-zion-cyan text-white""""
                        : "border-zion-cyan/30 text-zion-cyan"}"" >"""""
                    {highContrast ? (""""
                      <Eye className="w-4 h-4" /" >""""
                    ) : (""""
                      <EyeOff className="w-4 h-4" /" >"
                      Reduced Motion"""""
                      Minimize animations and transitions"
                    variant="{reducedMotion" ? "default" : "outline"}"""""
                    onClick="{toggleReducedMotion}""
                      reducedMotion"""
                    {reducedMotion ? (""""
                      <VolumeX className="w-4 h-4" /" >""""
                      <Volume2 className="w-4 h-4" /" >"
                <div>"""""
                  <h3 className="text-white font-medium mb-3">Font Size""""
                  <div className="flex gap-2">"""
                    {["small", medium",large"].map(size => ("
                      <Button ""
                        key={size}"""""
                        variant="{fontSize" === size ? "default" : "outline"}"""""
                        onClick="{()" =" > setFontSize(size)}""
                          fontSize === size"""""
                            ? "bg-zion-cyan text-white""""""
                            : "border-zion-cyan/30 text-zion-cyan"}
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </Button>
                    ))}
                  </div>"
                  <h3 className="text-white font-medium mb-3">""
                    Color Blind Support"""""
                  <div className="grid grid-cols-2 gap-2">"""
                    {["none", protanopia",deuteranopia", tritanopia"].map()"
                      mode => ("
                        <Button key="{mode}""
                          variant={}""
"">
                            colorBlindMode === mode ? "default"  : "outline"""", ",
}"""""
                          size = "sm"""
                          onClick="{()" =" > setColorBlindMode(mode)}""
                            colorBlindMode === mode"""""
                          {mode.charAt(0).toUpperCase() + mode.slice(1)}
                      )
                  </div>";
                <div className="bg-zion-blue-dark/50 rounded-lg p-4">"""";
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">"""";
                    <Keyboard className="w-4 h-4 text-zion-cyan" /" >";
                    Keyboard Shortcuts""""";
                  <div className="space-y-2 text-sm text-zion-slate-light">"""";
                    <div className="flex justify-between">""""";
                      <span>Open "Panel": "</span>"""";
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">";
                        Ctrl/Cmd + Shift + A"";
                      </kbd>""""";
                    </div>""""";
                      <span>High "Contrast":</span>"""";
                        Ctrl/Cmd + Shift + H"";
                      <span>Reduced "Motion":</span>"""";
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">;
                        Ctrl/Cmd + Shift + M",;
                      </kbd>;
                    </div>;
""""",;
              <div className="mt-6 pt-4 border-t border-zion-cyan/20">"""";
                <p className="text-xs text-zion-slate-light text-center">;
                  These settings are saved locally and will persist across,;
sessions.</p>;
            </motion.div>;
      </AnimatePresence>;
</>;
  )}";
export const SkipToContent = () => (""""";
  <a""""";
    href="#main-content""""";
    className="sr-only "focus": "not-sr-only "focus":absolute "focus":top-4 "focus":left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-medium z-50 "hover":bg-zion-cyan-light transition-colors duration-300 ">;
    Skip to main content",;
  </a>;
),;
export const useFocusTrap = isActive => {}";
  useEffect(() => {}"";
    if (!isActive) return"";"";
    if (!isActive) return"";
    const focusableElements = """""";
      "button, [href], input, select, textarea, [tabindex]: "not([tabindex="-1"])";
    const container = document.activeElement?.closest();
"}
    if(!container) return,;
const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length-1]";
    const handleTabKey = e => {}"";
      if (e.key === "Tab") {}
        if(e.shiftKey) {}
}, []);, []);';
    if(!isActive) return;';';
    const focusableElements ='"';';
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]);';';
    if(!isActive) return;
    const focusableElements ='";
      'button, [href], input, select, textarea, [tabindex]: "not([tabindex="-1"]);
                <div className="bg-zion-blue-dark/50 rounded-lg p-4">""""
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">""""
                    <Keyboard className="w-4 h-4 text-zion-cyan" /" >"
                    Keyboard Shortcuts"""""
                  <div className="space-y-2 text-sm text-zion-slate-light">""""
                    <div className="flex justify-between">"""""
                      <span>Open Panel: </span>""""
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">"
                        Ctrl/Cmd + Shift + A""
                      </kbd>"""""
                    </div>"""""
                      <span>High Contrast:</span>""""
                        Ctrl/Cmd + Shift + H""
                      <span>Reduced Motion:</span>""""
                      <kbd className="px-2 py-1 bg-zion-blue-light/20 rounded text-xs">
                        Ctrl/Cmd + Shift + M,
                      </kbd>
                    </div>
              <div className="mt-6 pt-4 border-t border-zion-cyan/20">""""
                <p className="text-xs text-zion-slate-light text-center">
                  These settings are saved locally and will persist across,
sessions.</p>
            </motion.div>
      </AnimatePresence>
</>
  )}"
export const SkipToContent = () => ("""""
  <a"""""
    href="#main-content"""""
    className="sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-medium z-50 hover:bg-zion-cyan-light transition-colors duration-300 ">
    Skip to main content,
  </a>
),
export const useFocusTrap = isActive => {}"
    if (!isActive) return"";""
    if (!isActive) return""
    const focusableElements = """"""
      "button, [href], input, select, textarea, [tabindex]: not([tabindex="-1"])"
    const container = document.activeElement?.closest()
    if(!container) return,
const firstFocusableElement = focusableContent[0]
    const lastFocusableElement = focusableContent[focusableContent.length-1]"
    const handleTabKey = e => {}""
    const focusableElements ='"
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]);
    const container = document.activeElement?.closest('[data-focus-trap]');
    if(!container) return;
    const lastFocusableElement = focusableContent[focusableContent.length-1];
    const handleTabKey = e => {e.preventDefault()"}            lastFocusableElement.focus()}
    const handleTabKey = e => {e.preventDefault()}            lastFocusableElement.focus()}
        } else {}
          if(document.activeElement === lastFocusableElement) {}
            e.preventDefault()"
            firstFocusableElement.focus()}","
}", "
    document.addEventListener("keydown", handleTabKey)"
    return () => document.removeEventListener("keydown", handleTabKey)}, [isActive])}""
export const SrOnly = ({children}) => (""""
  <span className="sr-only">{children}</span>"
)""
export default AccessibilityPanel"";""
"""""""
)"
export default AccessibilityPanel""
""""'""
</Keyboard>
</Volume2>
</VolumeX>
</EyeOff>
</Eye>
</X>
</Accessibility>
</motion>
</AccessibilityContext>
</motion>';
</AccessibilityContext>;';;';
            e.preventDefault()";
            firstFocusableElement.focus()}",";
}", ";
}""}";"";
    document.addEventListener("keydown", handleTabKey)";
    return () => document.removeEventListener("keydown", handleTabKey)}, [isActive])}"";
export const SrOnly = ({children}) => ("""";
  <span className="sr-only">{children}</span>";
)"";
export default AccessibilityPanel"";"";
""""""";
}";
)";
export default AccessibilityPanel"";
""""'"";
</Keyboard>;
</Volume2>;
</VolumeX>;
</EyeOff>;
</Eye>;
</X>;
</Accessibility>;
</motion>;
</AccessibilityContext>;