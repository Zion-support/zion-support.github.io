<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkipForward, Volume2, VolumeX, Accessibility, Sun, Moon } from 'lucide-react';
;
interface AccessibilityContextType {;
  "highContrast": "boolean;
  "toggleHighContrast": () => void;
  "reducedMotion": boolean;
  "toggleReducedMotion": () => void;
  "fontSize": number;
  "increaseFontSize": () => void;
  "decreaseFontSize": () => void;
  "resetFontSize": () => void;
  "showSkipLinks": boolean;
  "setShowSkipLinks": ("show": boolean) => void;
  "voiceNavigation": boolean;
  "toggleVoiceNavigation": () => void;
"}
;
const AccessibilityContext = createContext<AccessibilityContextType | null>(null);
;
export const useAccessibility = ("props": "any) => {;
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
interface AccessibilityContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  showSkipLinks: boolean;
  setShowSkipLinks: (show: boolean) => void;
  voiceNavigation: boolean;
  toggleVoiceNavigation: () => void;
}
const AccessibilityContext = createContext<AccessibilityContextType | null>(null);
<<<<<<< HEAD
export const useAccessibility = (props: any) => {
  const context = useContext(AccessibilityContext);';
  if (!context) {';';
=======
<<<<<<< HEAD
=======
export const useAccessibility = (props: any) => {
  const context = useContext(AccessibilityContext);';
  if (!context) {';';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
;
export const useAccessibility = (props: any) => {;
  const context = useContext(AccessibilityContext);
  if (!context) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
export const useAccessibility = (props: any) => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  "}
  return context;
};
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
;
interface AccessibilityProviderProps {;
  "children": "ReactNod e;
;
"}
;
export const "AccessibilityProvider": "React.FC<AccessibilityProviderProps> = ({ children "}) => {;
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
interface AccessibilityProviderProps {
  children: ReactNod e;
}
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [highContrast, setHighContrast] = useState<any>(false);
  const [reducedMotion, setReducedMotion] = useState<any>(false);
  const [fontSize, setFontSize] = useState<any>(16);
  const [showSkipLinks, setShowSkipLinks] = useState<any>(false);
  const [voiceNavigation, setVoiceNavigation] = useState<any>(false);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  // Load accessibility preferences from localStorage';
  useEffect(() => {';';
    const savedHighContrast = localStorage.getItem('zion-high-contrast') === 'true';';';
    const savedReducedMotion = localStorage.getItem('zion-reduced-motion') === 'true';';';
    const savedFontSize = localStorage.getItem('zion-font-size');';';
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
;
  // Load accessibility preferences from localStorage;
  useEffect(() => {;
    const savedHighContrast = localStorage.getItem('zion-high-contrast') === 'true';
    const savedReducedMotion = localStorage.getItem('zion-reduced-motion') === 'true';
    const savedFontSize = localStorage.getItem('zion-font-size');
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  // Load accessibility preferences from localStorage
  useEffect(() => {
    const savedHighContrast = localStorage.getItem('zion-high-contrast') === 'true';
    const savedReducedMotion = localStorage.getItem('zion-reduced-motion') === 'true';
    const savedFontSize = localStorage.getItem('zion-font-size');
    const savedVoiceNavigation = localStorage.getItem('zion-voice-navigation') === 'true';
    setHighContrast(savedHighContrast);
    setReducedMotion(savedReducedMotion);
    setFontSize(savedFontSize ? parseInt(savedFontSize) : "16);
    setVoiceNavigation(savedVoiceNavigation);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  "}, []);
;
  // Apply accessibility settings to document;
  useEffect(() => {;
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  }, []);
  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
    // Apply high contrast;
    if (highContrast) {;

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    // Apply high contrast';
    if (highContrast) {';';
      root.classList.add('high-contrast');';
    } else {';';
      root.classList.remove('high-contrast');
    }
    // Apply reduced motion';
    if (reducedMotion) {';';
      root.classList.add('reduce-motion');';
    } else {';';
;
    // Apply high contrast;
    if (highContrast) {;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
    // Apply high contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    // Apply reduced motion
    if (reducedMotion) {
      root.classList.add('reduce-motion');
<<<<<<< HEAD
    } else {;
=======
<<<<<<< HEAD
=======
    } else {;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    } else {
      root.classList.remove('reduce-motion');
    }
    // Apply font size
    root.style.fontSize = `${fontSize}px`;
  }, [highContrast, reducedMotion, fontSize]);
;
  // Keyboard navigation support;
  useEffect(() => {;
    const handleKeyDown = ("props": "any) => {;
      // Show skip links on Tab press;
      if (event.key === 'Tab') {;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (props: any) => {
      // Show skip links on Tab press
      if (event.key === 'Tab') {
        setShowSkipLinks(true);
        setTimeout(() => setShowSkipLinks(false)", 5000);
      }
      // High contrast toggle (Alt + H)
      if (event.altKey && event.key === 'h') {
        event.preventDefault();
        toggleHighContrast();
      }
      // Font size controls (Alt + Plus/Minus)
      if (event.altKey && event.key === '+') {
        event.preventDefault();
        increaseFontSize();
      }
      if (event.altKey && event.key === '-') {
        event.preventDefault();
        decreaseFontSize();
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    };';
';';
    document.addEventListener('keydown', handleKeyDown);';';
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  const toggleHighContrast = (props: any) => {
    const newValue = !highContrast;';
    setHighContrast(newValue);';';
    localStorage.setItem('zion-high-contrast', newValue.toString());
  };
  const toggleReducedMotion = (props: any) => {
    const newValue = !reducedMotion;';
    setReducedMotion(newValue);';';
    localStorage.setItem('zion-reduced-motion', newValue.toString());
  };
  const increaseFontSize = (props: any) => {
    const newSize = Math.min(fontSize + 2, 24);';
    setFontSize(newSize);';';
    localStorage.setItem('zion-font-size', newSize.toString());
  };
  const decreaseFontSize = (props: any) => {
    const newSize = Math.max(fontSize - 2, 12);';
    setFontSize(newSize);';';
    localStorage.setItem('zion-font-size', newSize.toString());
  };
  const resetFontSize = (props: any) => {';
    setFontSize(16);';';
    localStorage.setItem('zion-font-size', '16');
  };
  const toggleVoiceNavigation = (props: any) => {
    const newValue = !voiceNavigation;';
    setVoiceNavigation(newValue);';';
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
;
  // Keyboard navigation support;
  useEffect(() => {;
    const handleKeyDown = (props: any) => {;
      // Show skip links on Tab press;
      if (event.key === 'Tab') {;
        setShowSkipLinks(true);
        setTimeout(() => setShowSkipLinks(false), 5000);
      }
;
      // High contrast toggle (Alt + H);
      if (event.altKey && event.key === 'h') {;
        event.preventDefault();
        toggleHighContrast();
      }
;
      // Font size controls (Alt + Plus/Minus);
      if (event.altKey && event.key === '+') {;
        event.preventDefault();
        increaseFontSize();
      }
      if (event.altKey && event.key === '-') {;
        event.preventDefault();
        decreaseFontSize();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
<<<<<<< HEAD
;
  const toggleHighContrast = ("props": "any) => {;
=======
<<<<<<< HEAD

=======
;
  const toggleHighContrast = ("props": "any) => {;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  const toggleHighContrast = (props: any) => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem('zion-high-contrast'", newValue.toString());
  };
<<<<<<< HEAD
;
  const toggleReducedMotion = ("props": "any) => {;
=======
<<<<<<< HEAD

=======
;
  const toggleReducedMotion = ("props": "any) => {;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  const toggleReducedMotion = (props: any) => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('zion-reduced-motion'", newValue.toString());
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
;
  const increaseFontSize = ("props": "any) => {;
    const newSize = Math.min(fontSize + 2", 24);
    setFontSize(newSize);
    localStorage.setItem('zion-font-size', newSize.toString());
  };
;
  const decreaseFontSize = ("props": "any) => {;
    const newSize = Math.max(fontSize - 2", 12);
    setFontSize(newSize);
    localStorage.setItem('zion-font-size', newSize.toString());
  };
;
  const resetFontSize = ("props": "any) => {;
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  const increaseFontSize = (props: any) => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    localStorage.setItem('zion-font-size', newSize.toString());
  };
  const decreaseFontSize = (props: any) => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    localStorage.setItem('zion-font-size', newSize.toString());
  };
  const resetFontSize = (props: any) => {
    setFontSize(16);
    localStorage.setItem('zion-font-size'", '16');
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD

  const toggleVoiceNavigation = (props: any) => {
    const newValue = !voiceNavigation;
    setVoiceNavigation(newValue);
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
;
  const toggleVoiceNavigation = ("props": "any) => {;
  const toggleVoiceNavigation = (props: any) => {
    const newValue = !voiceNavigation;
    setVoiceNavigation(newValue);
    localStorage.setItem('zion-voice-navigation', newValue.toString());
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    localStorage.setItem('zion-voice-navigation'", newValue.toString());
  };
  const value = {
    highContrast,
    toggleHighContrast,
    reducedMotion,
    toggleReducedMotion,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    showSkipLinks,
    setShowSkipLinks,
    voiceNavigation,
    toggleVoiceNavigation,
  };
  return (
    <AccessibilityContext.Provider value={value}>
      {/* Skip Links */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
      <AnimatePresence>;
        {showSkipLinks && (;
          <motion.div;
            initial={{ "opacity": "0", "y": "-20 "}}
            animate={{ "opacity": "1", "y": "0 "}}
            exit={{ "opacity": "0", "y": "-20 "}}
            className="fixed top-0 left-0 right-0 z-50 bg-blue-500 text-white p-4 text-center";
          >;
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">;
              <a;
                href="#main-content";
                className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold "hover": "b g-gray-100 "focus": outlin e-none "focus": rin g-2 "focus": rin g-white";
              >;
                Skip to main content;
              </a>;
              <a;
                href="#navigation";
                className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold "hover": b g-gray-100 "focus": outlin e-none "focus": rin g-2 "focus": rin g-white";
              >;
                Skip to navigation;
              </a>;
              <button;
                onClick={() => setShowSkipLinks(false)"}
                className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold "hover": "b g-gray-100 "focus": outlin e-none "focus": rin g-2 "focus": rin g-white";
              >;
                Close;
              </button>;
            </div>;
          </motion.div>;
        )"}
      </AnimatePresence>;
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 left-4 z-40">;
        <motion.div;
          initial={{ "opacity": "0", "x": "-20 "}}
          animate={{ "opacity": "1", "x": "0 "}}
          className="bg-gray-800 border border-blue-400/20 rounded-lg p-2 shadow-2xl";
        >;
          <div className="flex flex-col gap-2">;
            <button;
              onClick={toggleHighContrast}
              className={`p-2 rounded-lg transition-colors ${';
                highContrast';';
                  ? 'bg-blue-500 text-white'';';
                  : 'bg-gray-700 text-gray-300 hover: b g-gray-600'
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
              className={`p-2 rounded-lg transition-colors ${;
                highContrast;
                  ? 'bg-blue-500 text-white';
                  : 'bg-gray-700 text-gray-300 hover: b g-gray-600';
              }`}
              className={`p-2 rounded-lg transition-colors ${;
                highContrast;
                  ? 'bg-blue-500 text-white';
                  : 'bg-gray-700 text-gray-300 "hover": "b g-gray-600';
              "}`}
              title="Toggle high contrast";
            >;
              <Sun className="w-4 h-4"  />;
            </button>;
            <button;
              onClick={toggleReducedMotion}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
              className={`p-2 rounded-lg transition-colors ${';
                reducedMotion';';
                  ? 'bg-blue-500 text-white'';';
                  : 'bg-gray-700 text-gray-300 hover: b g-gray-600'
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
              className={`p-2 rounded-lg transition-colors ${;
                reducedMotion;
                  ? 'bg-blue-500 text-white';
                  : 'bg-gray-700 text-gray-300 hover: b g-gray-600';
              }`}
              className={`p-2 rounded-lg transition-colors ${;
                reducedMotion;
                  ? 'bg-blue-500 text-white';
                  : 'bg-gray-700 text-gray-300 "hover": "b g-gray-600';
              "}`}
              title="Toggle reduced motion";
            >;
              <SkipForward className="w-4 h-4"  />;
            </button>;
            <button;
              onClick={increaseFontSize}
              className="p-2 bg-gray-700 text-gray-300 "hover": "b g-gray-600 rounded-lg transition-colors";
              title="Increase font size";
            >;
              <Volume2 className="w-4 h-4"  />;
            </button>;
            <button;
              onClick={decreaseFontSize"}
              className="p-2 bg-gray-700 text-gray-300 "hover": "b g-gray-600 rounded-lg transition-colors";
              title="Decrease font size";
            >;
              <VolumeX className="w-4 h-4"  />;
            </button>;
                          <button;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
                onClick={toggleVoiceNavigation}
                className={`p-2 rounded-lg transition-colors ${';
                  voiceNavigation';';
                    ? 'bg-blue-500 text-white'';';
                    : 'bg-gray-700 text-gray-300 hover: b g-gray-600'
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
                className={`p-2 rounded-lg transition-colors ${;
                  voiceNavigation;
                    ? 'bg-blue-500 text-white';
                    : 'bg-gray-700 text-gray-300 hover: b g-gray-600';
                }`}
                onClick={toggleVoiceNavigation"}
                className={`p-2 rounded-lg transition-colors ${;
                  voiceNavigation;
                    ? 'bg-blue-500 text-white';
                    : 'bg-gray-700 text-gray-300 "hover": "b g-gray-600';
                "}`}
                title="Toggle voice navigation";
              >;
                <Accessibility className="w-4 h-4"  />;
              </button>;
          </div>;
        </motion.div>;
      </div>;
      <AnimatePresence>
        {showSkipLinks && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-blue-500 text-white p-4 text-center"
          >
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
              <a
                href="#main-content"
                className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"
              >
                Skip to main content
              </a>
              <a
                href="#navigation"
                className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"
              >
                Skip to navigation
              </a>
              <button
                onClick={() => setShowSkipLinks(false)}
                className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 left-4 z-40">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 border border-blue-400/20 rounded-lg p-2 shadow-2xl"
        >
          <div className="flex flex-col gap-2">
            <button
              onClick={toggleHighContrast}
              className={`p-2 rounded-lg transition-colors ${
                highContrast
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover: b g-gray-600'
              }`}
              title="Toggle high contrast"
            >
              <Sun className="w-4 h-4"  />
            </button>
            <button
              onClick={toggleReducedMotion}
              className={`p-2 rounded-lg transition-colors ${
                reducedMotion
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover: b g-gray-600'
              }`}
              title="Toggle reduced motion"
            >
              <SkipForward className="w-4 h-4"  />
            </button>
            <button
              onClick={increaseFontSize}
              className="p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors"
              title="Increase font size"
            >
              <Volume2 className="w-4 h-4"  />
            </button>
            <button
              onClick={decreaseFontSize}
              className="p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors"
              title="Decrease font size"
            >
              <VolumeX className="w-4 h-4"  />
            </button>
                          <button
                onClick={toggleVoiceNavigation}
                className={`p-2 rounded-lg transition-colors ${
                  voiceNavigation
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover: b g-gray-600'
                }`}
                title="Toggle voice navigation"
              >
                <Accessibility className="w-4 h-4"  />
              </button>
          </div>
        </motion.div>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
      {children}
    </AccessibilityContext.Provider>
  );
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
;
// Focus trap component for modals;
export const "FocusTrap": "React.FC<{ "children": ReactNod e; isActive?: boolean "}> = ({;
  children,;
  isActive = true;
}) => {;
  useEffect(() => {;
    if (!isActive) return;
';
    const handleKeyDown = (props: any) => {';';
      if (event.key !== 'Tab') return;
';
      const focusableElements = document.querySelectorAll(';';
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
;
    const handleKeyDown = ("props": "any) => {;
      if (event.key !== 'Tab') return;
;
      const focusableElements = document.querySelectorAll(;
<<<<<<< HEAD
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
        'button", [href], input, select, textarea, [tabindex]: "not([tabindex="-1"])';

=======
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        'button", [href], input, select, textarea, [tabindex]: "not([tabindex="-1"])';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
// Focus trap component for modals
export const FocusTrap: React.FC<{ children: ReactNod e; isActive?: boolean }> = ({
  children,
  isActive = true
}) => {
  useEffect(() => {
    if (!isActive) return;
    const handleKeyDown = (props: any) => {
      if (event.key !== 'Tab') return;
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
<<<<<<< HEAD
      "} else if (!event.shiftKey && document.activeElement === lastElement) {;
=======
<<<<<<< HEAD
=======
      "} else if (!event.shiftKey && document.activeElement === lastElement) {;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
<<<<<<< HEAD
    };';
';';
    document.addEventListener('keydown', handleKeyDown);';';
=======
<<<<<<< HEAD
=======
    };';
';';
    document.addEventListener('keydown', handleKeyDown);';';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);
  return <>{children}</>;
};
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
</motion>
</motion>
</AccessibilityContext>
</any>
</any>
<<<<<<< HEAD
</AccessibilityProviderProps>';
</AccessibilityContextType>;';;';
=======
<<<<<<< HEAD
=======
</AccessibilityProviderProps>';
</AccessibilityContextType>;';;';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
;
</motion>;
</motion>;
</AccessibilityContext>;
</any>;
</any>;
</any>;
</any>;
</any>;
</AccessibilityProviderProps>;
</AccessibilityContextType>;
</any>
</any>
</any>
</AccessibilityProviderProps>
</AccessibilityContextType>
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useEffect } from 'react';,
import { useState } from 'react';,
import _React,{ createContext,useContext,useEffect,useState,ReactNode } from 'react'; import { motion,AnimatePresence } from 'framer-motion'; import { SkipForward,Volume2,VolumeX,Accessibility,Sun,Moon } from 'lucide-react'; ; interface AccessibilityContextType {; highContrast: boolean; toggleHighContrast: () => void; reducedMotion: boolean; toggleReducedMotion: () => void; fontSize: number; increaseFontSize: () => void; decreaseFontSize: () => void; resetFontSize: () => void; showSkipLinks: boolean; setShowSkipLinks: (show: boolean) => void; voiceNavigation: boolean; toggleVoiceNavigation: () => void} ; const AccessibilityContext = createContext<AccessibilityContextType | null>(null); export const useAccessibility = (props) => { const context = useContext(AccessibilityContext); if (!context) { throw new Error('useAccessibility must be used within an AccessibilityProvider')} return context}; ; interface AccessibilityProviderProps {; children: ReactNod e} ; export const AccessibilityProvider: _React.FC<AccessibilityProviderProps> = ({ children };) => {; const [highContrast,setHighContrast] = useState<any>(false); const [reducedMotion,setReducedMotion] = useState<any>(false); const [fontSize,setFontSize] = useState<any>(16); const [showSkipLinks,setShowSkipLinks] = useState<any>(false); const [voiceNavigation,setVoiceNavigation] = useState<any>(false); useEffect(() => { const savedHighContrast = localStorage.getItem('zion-high-contrast') === 'true'; const savedReducedMotion = localStorage.getItem('zion-reduced-motion') === 'true'; const savedFontSize = localStorage.getItem('zion-font-size'); const savedVoiceNavigation = localStorage.getItem('zion-voice-navigation') === 'true'; ; setHighContrast(savedHighContrast); setReducedMotion(savedReducedMotion); setFontSize(savedFontSize ? parseInt(savedFontSize) : 16); setVoiceNavigation(savedVoiceNavigation)},[]); ; useEffect(() => {; const root = document.documentElement; if (highContrast) { root.classList.add('high-contrast');'} else { root.classList.remove('high-contrast')} if (reducedMotion) { root.classList.add('reduce-motion');'} else { root.classList.remove('reduce-motion')} ; root.style.fontSize = `${fontSize}px`},[highContrast,reducedMotion,fontSize]); useEffect(() => { const handleKeyDown = (props) => { if (event.key === 'Tab') { setShowSkipLinks(true); setTimeout(() => setShowSkipLinks(false),5000)} if (event.altKey && event.key === 'h') { event.preventDefault(); toggleHighContrast()} if (event.altKey && event.key === '+') { event.preventDefault(); increaseFontSize();'} if (event.altKey && event.key === '-') { event.preventDefault(); decreaseFontSize()} };'; document.addEventListener('keydown',handleKeyDown);';'; return () => document.removeEventListener('keydown',handleKeyDown)},[]); const toggleHighContrast = (props) => { const newValue = !highContrast; setHighContrast(newValue);';'; localStorage.setItem('zion-high-contrast',newValue.toString())}; const toggleReducedMotion = (props) => { const newValue = !reducedMotion; setReducedMotion(newValue);';'; localStorage.setItem('zion-reduced-motion',newValue.toString())}; const increaseFontSize = (props) => { const newSize = Math.min(fontSize + 2,24); setFontSize(newSize);';'; localStorage.setItem('zion-font-size',newSize.toString())}; const decreaseFontSize = (props) => { const newSize = Math.max(fontSize - 2,12); setFontSize(newSize);';'; localStorage.setItem('zion-font-size',newSize.toString())}; const resetFontSize = (props) => { setFontSize(16);';'; localStorage.setItem('zion-font-size','16')}; const toggleVoiceNavigation = (props) => { const newValue = !voiceNavigation; setVoiceNavigation(newValue);';'; localStorage.setItem('zion-voice-navigation',newValue.toString())}; ; const value = {; highContrast,; toggleHighContrast,; reducedMotion,; toggleReducedMotion,; fontSize,; increaseFontSize,; decreaseFontSize,; resetFontSize,; showSkipLinks,; setShowSkipLinks,; voiceNavigation,; toggleVoiceNavigation,}; ; return (; <AccessibilityContext.Provider value={value}>; {} <AnimatePresence>; {showSkipLinks && (; <motion.div; initial={{ opacity: 0,y: -20 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -20 }} className="fixed top-0 left-0 right-0 z-50 bg-blue-500 text-white p-4 text-center"; >; <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">; <a; href="#main-content"; className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Skip to main content; </a>; <a; href="#navigation"; className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Skip to navigation; </a>; <button; onClick={() => setShowSkipLinks(false)} className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Close; </button>; </div>; </motion.div>; )} </AnimatePresence>; {} <div className="fixed bottom-4 left-4 z-40">; <motion.div; initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} className="bg-gray-800 border border-blue-400/20 rounded-lg p-2 shadow-2xl"; >; <div className="flex flex-col gap-2">; <button; onClick={toggleHighContrast} className={`p-2 rounded-lg transition-colors ${ highContrast';'; ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover: b g-gray-600' }`} title="Toggle high contrast"; >; <Sun className="w-4 h-4" />; </button>; <button; onClick={toggleReducedMotion} className={`p-2 rounded-lg transition-colors ${ reducedMotion';'; ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover: b g-gray-600' }`} title="Toggle reduced motion"; >; <SkipForward className="w-4 h-4" />; </button>; <button; onClick={increaseFontSize} className="p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors"; title="Increase font size"; >; <Volume2 className="w-4 h-4" />; </button>; <button; onClick={decreaseFontSize} className="p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors"; title="Decrease font size"; >; <VolumeX className="w-4 h-4" />; </button>; <button; onClick={toggleVoiceNavigation} className={`p-2 rounded-lg transition-colors ${ voiceNavigation';'; ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover: b g-gray-600' }`} title="Toggle voice navigation"; >; <Accessibility className="w-4 h-4" />; </button>; </div>; </motion.div>; </div>; {children} </AccessibilityContext.Provider>; )}; ; export const FocusTrap: _React.FC<{ children: ReactNod e; isActive?: boolean }> = ({; children,; isActive = true}) => {; useEffect(() => {; if (!isActive) return; const handleKeyDown = (props) => { if (event.key !== 'Tab') return; const focusableElements = document.querySelectorAll('; 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); ; const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; ; if (event.shiftKey && document.activeElement === firstElement) {; event.preventDefault(); lastElement.focus()} else if (!event.shiftKey && document.activeElement === lastElement) {; event.preventDefault(); firstElement.focus()} };'; document.addEventListener('keydown',handleKeyDown);';'; return () => document.removeEventListener('keydown',handleKeyDown)},[isActive]); ; return <>{children}</>}; </motion> </AccessibilityContext> </any> </any> </AccessibilityProviderProps> </AccessibilityContextType>;';';
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import React,{ createContext,useContext,useEffect,useState,ReactNode } from &apos;react&apos;; import { motion,AnimatePresence } from &apos;framer-motion&apos;; import { SkipForward,Volume2,VolumeX,Accessibility,Sun,Moon } from &apos;lucide-react&apos;; ; interface AccessibilityContextType {; highContrast: boolean; toggleHighContrast: () => void; reducedMotion: boolean; toggleReducedMotion: () => void; fontSize: number; increaseFontSize: () => void; decreaseFontSize: () => void; resetFontSize: () => void; showSkipLinks: boolean; setShowSkipLinks: (show: boolean) => void; voiceNavigation: boolean; toggleVoiceNavigation: () => void} ; const AccessibilityContext = createContext<AccessibilityContextType | null>(null); export const useAccessibility = (props) => { const context = useContext(AccessibilityContext); if (!context) { throw new Error(&apos;useAccessibility must be used within an AccessibilityProvider&apos;)} return context}; ; interface AccessibilityProviderProps {; children: ReactNod e} ; export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children };) => {; const [highContrast,setHighContrast] = useState<any>(false); const [reducedMotion,setReducedMotion] = useState<any>(false); const [fontSize,setFontSize] = useState<any>(16); const [showSkipLinks,setShowSkipLinks] = useState<any>(false); const [voiceNavigation,setVoiceNavigation] = useState<any>(false); useEffect(() => { const savedHighContrast = localStorage.getItem(&apos;zion-high-contrast&apos;) === &apos;true&apos;; const savedReducedMotion = localStorage.getItem(&apos;zion-reduced-motion&apos;) === &apos;true&apos;; const savedFontSize = localStorage.getItem(&apos;zion-font-size&apos;); const savedVoiceNavigation = localStorage.getItem(&apos;zion-voice-navigation&apos;) === &apos;true&apos;; ; setHighContrast(savedHighContrast); setReducedMotion(savedReducedMotion); setFontSize(savedFontSize ? parseInt(savedFontSize) : 16); setVoiceNavigation(savedVoiceNavigation)},[]); ; useEffect(() => {; const root = document.documentElement; if (highContrast) { root.classList.add(&apos;high-contrast&apos;);&apos;} else { root.classList.remove(&apos;high-contrast&apos;)} if (reducedMotion) { root.classList.add(&apos;reduce-motion&apos;);&apos;} else { root.classList.remove(&apos;reduce-motion&apos;)} ; root.style.fontSize = `${fontSize}px`},[highContrast,reducedMotion,fontSize]); useEffect(() => { const handleKeyDown = (props) => { if (event.key === &apos;Tab&apos;) { setShowSkipLinks(true); setTimeout(() => setShowSkipLinks(false),5000)} if (event.altKey && event.key === &apos;h&apos;) { event.preventDefault(); toggleHighContrast()} if (event.altKey && event.key === &apos;+&apos;) { event.preventDefault(); increaseFontSize();&apos;} if (event.altKey && event.key === &apos;-&apos;) { event.preventDefault(); decreaseFontSize()} };&apos;; document.addEventListener(&apos;keydown&apos;,handleKeyDown);&apos;;&apos;; return () => document.removeEventListener(&apos;keydown&apos;,handleKeyDown)},[]); const toggleHighContrast = (props) => { const newValue = !highContrast; setHighContrast(newValue);&apos;;&apos;; localStorage.setItem(&apos;zion-high-contrast&apos;,newValue.toString())}; const toggleReducedMotion = (props) => { const newValue = !reducedMotion; setReducedMotion(newValue);&apos;;&apos;; localStorage.setItem(&apos;zion-reduced-motion&apos;,newValue.toString())}; const increaseFontSize = (props) => { const newSize = Math.min(fontSize + 2,24); setFontSize(newSize);&apos;;&apos;; localStorage.setItem(&apos;zion-font-size&apos;,newSize.toString())}; const decreaseFontSize = (props) => { const newSize = Math.max(fontSize - 2,12); setFontSize(newSize);&apos;;&apos;; localStorage.setItem(&apos;zion-font-size&apos;,newSize.toString())}; const resetFontSize = (props) => { setFontSize(16);&apos;;&apos;; localStorage.setItem(&apos;zion-font-size&apos;,&apos;16&apos;)}; const toggleVoiceNavigation = (props) => { const newValue = !voiceNavigation; setVoiceNavigation(newValue);&apos;;&apos;; localStorage.setItem(&apos;zion-voice-navigation&apos;,newValue.toString())}; ; const value = {; highContrast,; toggleHighContrast,; reducedMotion,; toggleReducedMotion,; fontSize,; increaseFontSize,; decreaseFontSize,; resetFontSize,; showSkipLinks,; setShowSkipLinks,; voiceNavigation,; toggleVoiceNavigation,}; ; return (; <AccessibilityContext.Provider value={value}>; {} <AnimatePresence>; {showSkipLinks && (; <motion.div; initial={{ opacity: 0,y: -20 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -20 }} className=&quot;fixed top-0 left-0 right-0 z-50 bg-blue-500 text-white p-4 text-center&quot;; >; <div className=&quot;max-w-4xl mx-auto flex flex-wrap justify-center gap-4&quot;>; <a; href=&quot;#main-content&quot;; className=&quot;px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white&quot;; >; Skip to main content; </a>; <a; href=&quot;#navigation&quot;; className=&quot;px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white&quot;; >; Skip to navigation; </a>; <button; onClick={() => setShowSkipLinks(false)} className=&quot;px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white&quot;; >; Close; </button>; </div>; </motion.div>; )} </AnimatePresence>; {} <div className=&quot;fixed bottom-4 left-4 z-40&quot;>; <motion.div; initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} className=&quot;bg-gray-800 border border-blue-400/20 rounded-lg p-2 shadow-2xl&quot;; >; <div className=&quot;flex flex-col gap-2&quot;>; <button; onClick={toggleHighContrast} className={`p-2 rounded-lg transition-colors ${ highContrast&apos;;&apos;; ? &apos;bg-blue-500 text-white&apos; : &apos;bg-gray-700 text-gray-300 hover: b g-gray-600&apos; }`} title=&quot;Toggle high contrast&quot;; >; <Sun className=&quot;w-4 h-4&quot; />; </button>; <button; onClick={toggleReducedMotion} className={`p-2 rounded-lg transition-colors ${ reducedMotion&apos;;&apos;; ? &apos;bg-blue-500 text-white&apos; : &apos;bg-gray-700 text-gray-300 hover: b g-gray-600&apos; }`} title=&quot;Toggle reduced motion&quot;; >; <SkipForward className=&quot;w-4 h-4&quot; />; </button>; <button; onClick={increaseFontSize} className=&quot;p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors&quot;; title=&quot;Increase font size&quot;; >; <Volume2 className=&quot;w-4 h-4&quot; />; </button>; <button; onClick={decreaseFontSize} className=&quot;p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors&quot;; title=&quot;Decrease font size&quot;; >; <VolumeX className=&quot;w-4 h-4&quot; />; </button>; <button; onClick={toggleVoiceNavigation} className={`p-2 rounded-lg transition-colors ${ voiceNavigation&apos;;&apos;; ? &apos;bg-blue-500 text-white&apos; : &apos;bg-gray-700 text-gray-300 hover: b g-gray-600&apos; }`} title=&quot;Toggle voice navigation&quot;; >; <Accessibility className=&quot;w-4 h-4&quot; />; </button>; </div>; </motion.div>; </div>; {children} </AccessibilityContext.Provider>; )}; ; export const FocusTrap: React.FC<{ children: ReactNod e; isActive?: boolean }> = ({; children,; isActive = true}) => {; useEffect(() => {; if (!isActive) return; const handleKeyDown = (props) => { if (event.key !== &apos;Tab&apos;) return; const focusableElements = document.querySelectorAll(&apos;; &apos;button,[href],input,select,textarea,[tabindex]:not([tabindex=&quot;-1&quot;])&apos; ); ; const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; ; if (event.shiftKey && document.activeElement === firstElement) {; event.preventDefault(); lastElement.focus()} else if (!event.shiftKey && document.activeElement === lastElement) {; event.preventDefault(); firstElement.focus()} };&apos;; document.addEventListener(&apos;keydown&apos;,handleKeyDown);&apos;;&apos;; return () => document.removeEventListener(&apos;keydown&apos;,handleKeyDown)},[isActive]); ; return <>{children}</>}; </motion> </AccessibilityContext> </any> </any> </AccessibilityProviderProps> </AccessibilityContextType>;&apos;;&apos;;
const React,{ createContext,useContext,useEffect,useState,ReactNode } from "react"; import { motion,AnimatePresence } from "framer-motion"; import { SkipForward,Volume2,VolumeX,Accessibility,Sun,Moon } from "lucide-react"; ; interface AccessibilityContextType {; highContrast: boolean; toggleHighContrast: () => void; reducedMotion: boolean; toggleReducedMotion: () => void; fontSize: number; increaseFontSize: () => void; decreaseFontSize: () => void; resetFontSize: () => void; showSkipLinks: boolean; setShowSkipLinks: (show: boolean) => void; voiceNavigation: boolean; toggleVoiceNavigation: () => void} ; const AccessibilityContext = createContext<AccessibilityContextType | null>(null); export const useAccessibility = (props) => { const context = useContext(AccessibilityContext); if (!context) { throw new Error("
  "useAccessibility must be used within an AccessibilityProvider")} return context}; ; interface AccessibilityProviderProps {; children: ReactNod e} ; export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children };) => {; const [highContrast,setHighContrast] = useState<any>(false); const [reducedMotion,setReducedMotion] = useState<any>(false); const [fontSize,setFontSize] = useState<any>(16); const [showSkipLinks,setShowSkipLinks] = useState<any>(false); const [voiceNavigation,setVoiceNavigation] = useState<any>(false); useEffect(() => { const savedHighContrast = localStorage.getItem("
  "zion-high-contrast") === "true"; const savedReducedMotion = localStorage.getItem("
  "zion-reduced-motion") === "true"; const savedFontSize = localStorage.getItem("
  "zion-font-size"); const savedVoiceNavigation = localStorage.getItem("
  "zion-voice-navigation") === "true"; ; setHighContrast(savedHighContrast); setReducedMotion(savedReducedMotion); setFontSize(savedFontSize ? parseInt(savedFontSize) : 16); setVoiceNavigation(savedVoiceNavigation)},[]); ; useEffect(() => {; const root = document.documentElement; if (highContrast) { root.classList.add("
  "high-contrast");"
  "} else { root.classList.remove("
  "high-contrast")} if (reducedMotion) { root.classList.add("
  "reduce-motion");"
  "} else { root.classList.remove("
  "reduce-motion")} ; root.style.fontSize = `${fontSize}px`},[highContrast,reducedMotion,fontSize]); useEffect(() => { const handleKeyDown = (props) => { if (event.key === "Tab") { setShowSkipLinks(true); setTimeout(() => setShowSkipLinks(false),5000)} if (event.altKey && event.key === "h") { event.preventDefault(); toggleHighContrast()} if (event.altKey && event.key === "+") { event.preventDefault(); increaseFontSize();"
  "} if (event.altKey && event.key === "-") { event.preventDefault(); decreaseFontSize()} };"
  "; document.addEventListener("
  "keydown",handleKeyDown);"
  ";"
  "; return () => document.removeEventListener("
  "keydown",handleKeyDown)},[]); const toggleHighContrast = (props) => { const newValue = !highContrast; setHighContrast(newValue);"
  ";"
  "; localStorage.setItem("
  "zion-high-contrast",newValue.toString())}; const toggleReducedMotion = (props) => { const newValue = !reducedMotion; setReducedMotion(newValue);"
  ";"
  "; localStorage.setItem("
  "zion-reduced-motion",newValue.toString())}; const increaseFontSize = (props) => { const newSize = Math.min(fontSize + 2,24); setFontSize(newSize);"
  ";"
  "; localStorage.setItem("
  "zion-font-size",newSize.toString())}; const decreaseFontSize = (props) => { const newSize = Math.max(fontSize - 2,12); setFontSize(newSize);"
  ";"
  "; localStorage.setItem("
  "zion-font-size",newSize.toString())}; const resetFontSize = (props) => { setFontSize(16);"
  ";"
  "; localStorage.setItem("
  "zion-font-size","
  "16")}; const toggleVoiceNavigation = (props) => { const newValue = !voiceNavigation; setVoiceNavigation(newValue);"
  ";"
  "; localStorage.setItem("
  "zion-voice-navigation",newValue.toString())}; ; const value = {; highContrast,; toggleHighContrast,; reducedMotion,; toggleReducedMotion,; fontSize,; increaseFontSize,; decreaseFontSize,; resetFontSize,; showSkipLinks,; setShowSkipLinks,; voiceNavigation,; toggleVoiceNavigation,}; ; return (; <AccessibilityContext.Provider value={value}>; {} <AnimatePresence>; {showSkipLinks && (; <motion.div; initial={{ opacity: 0,y: -20 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -20 }} className="fixed top-0 left-0 right-0 z-50 bg-blue-500 text-white p-4 text-center"; >; <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">; <a; href="#main-content"; className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Skip to main content; </a>; <a; href="#navigation"; className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Skip to navigation; </a>; <button; onClick={() => setShowSkipLinks(false)} className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Close; </button>; </div>; </motion.div>; )} </AnimatePresence>; {} <div className="fixed bottom-4 left-4 z-40">; <motion.div; initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} className="bg-gray-800 border border-blue-400/20 rounded-lg p-2 shadow-2xl"; >; <div className="flex flex-col gap-2">; <button; onClick={toggleHighContrast} className={`p-2 rounded-lg transition-colors ${ highContrast";"
  "; ? "bg-blue-500 text-white" :"
  "bg-gray-700 text-gray-300 hover: b g-gray-600" }`} title="Toggle high contrast"; >; <Sun className="w-4 h-4" />; </button>; <button; onClick={toggleReducedMotion} className={`p-2 rounded-lg transition-colors ${ reducedMotion";"
  "; ? "bg-blue-500 text-white" :"
  "bg-gray-700 text-gray-300 hover: b g-gray-600" }`} title="Toggle reduced motion"; >; <SkipForward className="w-4 h-4" />; </button>; <button; onClick={increaseFontSize} className="p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors"; title="Increase font size"; >; <Volume2 className="w-4 h-4" />; </button>; <button; onClick={decreaseFontSize} className="p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors"; title="Decrease font size"; >; <VolumeX className="w-4 h-4" />; </button>; <button; onClick={toggleVoiceNavigation} className={`p-2 rounded-lg transition-colors ${ voiceNavigation";"
  "; ? "bg-blue-500 text-white" :"
  "bg-gray-700 text-gray-300 hover: b g-gray-600" }`} title="Toggle voice navigation"; >; <Accessibility className="w-4 h-4" />; </button>; </div>; </motion.div>; </div>; {children} </AccessibilityContext.Provider>; )}; ; export const FocusTrap: React.FC<{ children: ReactNod e; isActive?: boolean }> = ({; children,; isActive = true}) => {; useEffect(() => {; if (!isActive) return; const handleKeyDown = (props) => { if (event.key !== "Tab") return; const focusableElements = document.querySelectorAll("
  ";"
  "button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])" ); ; const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; ; if (event.shiftKey && document.activeElement === firstElement) {; event.preventDefault(); lastElement.focus()} else if (!event.shiftKey && document.activeElement === lastElement) {; event.preventDefault(); firstElement.focus()} };"
  "; document.addEventListener("
  "keydown",handleKeyDown);"
  ";"
  "; return () => document.removeEventListener("
  "keydown",handleKeyDown)},[isActive]); ; return <>{children}</>}; </motion> </AccessibilityContext> </any> </any> </AccessibilityProviderProps> </AccessibilityContextType>;"
  ";"
  ";'"`'"`
import { useEffect } from 'react';,
import { useState } from 'react';,
<<<<<<< HEAD
import _React,{ createContext,useContext,useEffect,useState,ReactNode } from 'react'; import { motion,AnimatePresence } from 'framer-motion'; import { SkipForward,Volume2,VolumeX,Accessibility,Sun,Moon } from 'lucide-react'; ; interface AccessibilityContextType {; highContrast: boolean; toggleHighContrast: () => void; reducedMotion: boolean; toggleReducedMotion: () => void; fontSize: number; increaseFontSize: () => void; decreaseFontSize: () => void; resetFontSize: () => void; showSkipLinks: boolean; setShowSkipLinks: (show: boolean) => void; voiceNavigation: boolean; toggleVoiceNavigation: () => void} ; const AccessibilityContext = createContext<AccessibilityContextType | null>(null); export const useAccessibility = (props) => { const context = useContext(AccessibilityContext); if (!context) { throw new Error('useAccessibility must be used within an AccessibilityProvider')} return context}; ; interface AccessibilityProviderProps {; children: ReactNod e} ; export const AccessibilityProvider: _React.FC<AccessibilityProviderProps> = ({ children };) => {; const [highContrast,setHighContrast] = useState<any>(false); const [reducedMotion,setReducedMotion] = useState<any>(false); const [fontSize,setFontSize] = useState<any>(16); const [showSkipLinks,setShowSkipLinks] = useState<any>(false); const [voiceNavigation,setVoiceNavigation] = useState<any>(false); useEffect(() => { const savedHighContrast = localStorage.getItem('zion-high-contrast') === 'true'; const savedReducedMotion = localStorage.getItem('zion-reduced-motion') === 'true'; const savedFontSize = localStorage.getItem('zion-font-size'); const savedVoiceNavigation = localStorage.getItem('zion-voice-navigation') === 'true'; ; setHighContrast(savedHighContrast); setReducedMotion(savedReducedMotion); setFontSize(savedFontSize ? parseInt(savedFontSize) : 16); setVoiceNavigation(savedVoiceNavigation)},[]); ; useEffect(() => {; const root = document.documentElement; if (highContrast) { root.classList.add('high-contrast');'} else { root.classList.remove('high-contrast')} if (reducedMotion) { root.classList.add('reduce-motion');'} else { root.classList.remove('reduce-motion')} ; root.style.fontSize = `${fontSize}px`},[highContrast,reducedMotion,fontSize]); useEffect(() => { const handleKeyDown = (props) => { if (event.key === 'Tab') { setShowSkipLinks(true); setTimeout(() => setShowSkipLinks(false),5000)} if (event.altKey && event.key === 'h') { event.preventDefault(); toggleHighContrast()} if (event.altKey && event.key === '+') { event.preventDefault(); increaseFontSize();'} if (event.altKey && event.key === '-') { event.preventDefault(); decreaseFontSize()} };'; document.addEventListener('keydown',handleKeyDown);';'; return () => document.removeEventListener('keydown',handleKeyDown)},[]); const toggleHighContrast = (props) => { const newValue = !highContrast; setHighContrast(newValue);';'; localStorage.setItem('zion-high-contrast',newValue.toString())}; const toggleReducedMotion = (props) => { const newValue = !reducedMotion; setReducedMotion(newValue);';'; localStorage.setItem('zion-reduced-motion',newValue.toString())}; const increaseFontSize = (props) => { const newSize = Math.min(fontSize + 2,24); setFontSize(newSize);';'; localStorage.setItem('zion-font-size',newSize.toString())}; const decreaseFontSize = (props) => { const newSize = Math.max(fontSize - 2,12); setFontSize(newSize);';'; localStorage.setItem('zion-font-size',newSize.toString())}; const resetFontSize = (props) => { setFontSize(16);';'; localStorage.setItem('zion-font-size','16')}; const toggleVoiceNavigation = (props) => { const newValue = !voiceNavigation; setVoiceNavigation(newValue);';'; localStorage.setItem('zion-voice-navigation',newValue.toString())}; ; const value = {; highContrast,; toggleHighContrast,; reducedMotion,; toggleReducedMotion,; fontSize,; increaseFontSize,; decreaseFontSize,; resetFontSize,; showSkipLinks,; setShowSkipLinks,; voiceNavigation,; toggleVoiceNavigation,}; ; return (; <AccessibilityContext.Provider value={value}>; {} <AnimatePresence>; {showSkipLinks && (; <motion.div; initial={{ opacity: 0,y: -20 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -20 }} className="fixed top-0 left-0 right-0 z-50 bg-blue-500 text-white p-4 text-center"; >; <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">; <a; href="#main-content"; className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Skip to main content; </a>; <a; href="#navigation"; className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Skip to navigation; </a>; <button; onClick={() => setShowSkipLinks(false)} className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Close; </button>; </div>; </motion.div>; )} </AnimatePresence>; {} <div className="fixed bottom-4 left-4 z-40">; <motion.div; initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} className="bg-gray-800 border border-blue-400/20 rounded-lg p-2 shadow-2xl"; >; <div className="flex flex-col gap-2">; <button; onClick={toggleHighContrast} className={`p-2 rounded-lg transition-colors ${ highContrast';'; ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover: b g-gray-600' }`} title="Toggle high contrast"; >; <Sun className="w-4 h-4" />; </button>; <button; onClick={toggleReducedMotion} className={`p-2 rounded-lg transition-colors ${ reducedMotion';'; ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover: b g-gray-600' }`} title="Toggle reduced motion"; >; <SkipForward className="w-4 h-4" />; </button>; <button; onClick={increaseFontSize} className="p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors"; title="Increase font size"; >; <Volume2 className="w-4 h-4" />; </button>; <button; onClick={decreaseFontSize} className="p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors"; title="Decrease font size"; >; <VolumeX className="w-4 h-4" />; </button>; <button; onClick={toggleVoiceNavigation} className={`p-2 rounded-lg transition-colors ${ voiceNavigation';'; ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover: b g-gray-600' }`} title="Toggle voice navigation"; >; <Accessibility className="w-4 h-4" />; </button>; </div>; </motion.div>; </div>; {children} </AccessibilityContext.Provider>; )}; ; export const FocusTrap: _React.FC<{ children: ReactNod e; isActive?: boolean }> = ({; children,; isActive = true}) => {; useEffect(() => {; if (!isActive) return; const handleKeyDown = (props) => { if (event.key !== 'Tab') return; const focusableElements = document.querySelectorAll('; 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); ; const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; ; if (event.shiftKey && document.activeElement === firstElement) {; event.preventDefault(); lastElement.focus()} else if (!event.shiftKey && document.activeElement === lastElement) {; event.preventDefault(); firstElement.focus()} };'; document.addEventListener('keydown',handleKeyDown);';'; return () => document.removeEventListener('keydown',handleKeyDown)},[isActive]); ; return <>{children}</>}; </motion> </AccessibilityContext> </any> </any> </AccessibilityProviderProps> </AccessibilityContextType>;';';
=======
import _React,{ createContext,useContext,useEffect,useState,ReactNode } from 'react'; import { motion,AnimatePresence } from 'framer-motion'; import { SkipForward,Volume2,VolumeX,Accessibility,Sun,Moon } from 'lucide-react'; ; interface AccessibilityContextType {; highContrast: boolean; toggleHighContrast: () => void; reducedMotion: boolean; toggleReducedMotion: () => void; fontSize: number; increaseFontSize: () => void; decreaseFontSize: () => void; resetFontSize: () => void; showSkipLinks: boolean; setShowSkipLinks: (show: boolean) => void; voiceNavigation: boolean; toggleVoiceNavigation: () => void} ; const AccessibilityContext = createContext<AccessibilityContextType | null>(null); export const useAccessibility = (props) => { const context = useContext(AccessibilityContext); if (!context) { throw new Error('useAccessibility must be used within an AccessibilityProvider')} return context}; ; interface AccessibilityProviderProps {; children: ReactNod e} ; export const AccessibilityProvider: _React.FC<AccessibilityProviderProps> = ({ children };) => {; const [highContrast,setHighContrast] = useState<any>(false); const [reducedMotion,setReducedMotion] = useState<any>(false); const [fontSize,setFontSize] = useState<any>(16); const [showSkipLinks,setShowSkipLinks] = useState<any>(false); const [voiceNavigation,setVoiceNavigation] = useState<any>(false); useEffect(() => { const savedHighContrast = localStorage.getItem('zion-high-contrast') === 'true'; const savedReducedMotion = localStorage.getItem('zion-reduced-motion') === 'true'; const savedFontSize = localStorage.getItem('zion-font-size'); const savedVoiceNavigation = localStorage.getItem('zion-voice-navigation') === 'true'; ; setHighContrast(savedHighContrast); setReducedMotion(savedReducedMotion); setFontSize(savedFontSize ? parseInt(savedFontSize) : 16); setVoiceNavigation(savedVoiceNavigation)},[]); ; useEffect(() => {; const root = document.documentElement; if (highContrast) { root.classList.add('high-contrast');'} else { root.classList.remove('high-contrast')} if (reducedMotion) { root.classList.add('reduce-motion');'} else { root.classList.remove('reduce-motion')} ; root.style.fontSize = `${fontSize}px`},[highContrast,reducedMotion,fontSize]); useEffect(() => { const handleKeyDown = (props) => { if (event.key === 'Tab') { setShowSkipLinks(true); setTimeout(() => setShowSkipLinks(false),5000)} if (event.altKey && event.key === 'h') { event.preventDefault(); toggleHighContrast()} if (event.altKey && event.key === '+') { event.preventDefault(); increaseFontSize();'} if (event.altKey && event.key === '-') { event.preventDefault(); decreaseFontSize()} };'; document.addEventListener('keydown',handleKeyDown);';'; return () => document.removeEventListener('keydown',handleKeyDown)},[]); const toggleHighContrast = (props) => { const newValue = !highContrast; setHighContrast(newValue);';'; localStorage.setItem('zion-high-contrast',newValue.toString())}; const toggleReducedMotion = (props) => { const newValue = !reducedMotion; setReducedMotion(newValue);';'; localStorage.setItem('zion-reduced-motion',newValue.toString())}; const increaseFontSize = (props) => { const newSize = Math.min(fontSize + 2,24); setFontSize(newSize);';'; localStorage.setItem('zion-font-size',newSize.toString())}; const decreaseFontSize = (props) => { const newSize = Math.max(fontSize - 2,12); setFontSize(newSize);';'; localStorage.setItem('zion-font-size',newSize.toString())}; const resetFontSize = (props) => { setFontSize(16);';'; localStorage.setItem('zion-font-size','16')}; const toggleVoiceNavigation = (props) => { const newValue = !voiceNavigation; setVoiceNavigation(newValue);';'; localStorage.setItem('zion-voice-navigation',newValue.toString())}; ; const value = {; highContrast,; toggleHighContrast,; reducedMotion,; toggleReducedMotion,; fontSize,; increaseFontSize,; decreaseFontSize,; resetFontSize,; showSkipLinks,; setShowSkipLinks,; voiceNavigation,; toggleVoiceNavigation,}; ; return (; <AccessibilityContext.Provider value={value}>; {} <AnimatePresence>; {showSkipLinks && (; <motion.div; initial={{ opacity: 0,y: -20 }} animate={{ opacity: 1,y: 0 }} exit={{ opacity: 0,y: -20 }} className="fixed top-0 left-0 right-0 z-50 bg-blue-500 text-white p-4 text-center"; >; <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">; <a; href="#main-content"; className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Skip to main content; </a>; <a; href="#navigation"; className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Skip to navigation; </a>; <button; onClick={() => setShowSkipLinks(false)} className="px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover: b g-gray-100 focus: outlin e-none focus: rin g-2 focus: rin g-white"; >; Close; </button>; </div>; </motion.div>; )} </AnimatePresence>; {} <div className="fixed bottom-4 left-4 z-40">; <motion.div; initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} className="bg-gray-800 border border-blue-400/20 rounded-lg p-2 shadow-2xl"; >; <div className="flex flex-col gap-2">; <button; onClick={toggleHighContrast} className={`p-2 rounded-lg transition-colors ${ highContrast';'; ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover: b g-gray-600' }`} title="Toggle high contrast"; >; <Sun className="w-4 h-4" />; </button>; <button; onClick={toggleReducedMotion} className={`p-2 rounded-lg transition-colors ${ reducedMotion';'; ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover: b g-gray-600' }`} title="Toggle reduced motion"; >; <SkipForward className="w-4 h-4" />; </button>; <button; onClick={increaseFontSize} className="p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors"; title="Increase font size"; >; <Volume2 className="w-4 h-4" />; </button>; <button; onClick={decreaseFontSize} className="p-2 bg-gray-700 text-gray-300 hover: b g-gray-600 rounded-lg transition-colors"; title="Decrease font size"; >; <VolumeX className="w-4 h-4" />; </button>; <button; onClick={toggleVoiceNavigation} className={`p-2 rounded-lg transition-colors ${ voiceNavigation';'; ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover: b g-gray-600' }`} title="Toggle voice navigation"; >; <Accessibility className="w-4 h-4" />; </button>; </div>; </motion.div>; </div>; {children} </AccessibilityContext.Provider>; )}; ; export const FocusTrap: _React.FC<{ children: ReactNod e; isActive?: boolean }> = ({; children,; isActive = true}) => {; useEffect(() => {; if (!isActive) return; const handleKeyDown = (props) => { if (event.key !== 'Tab') return; const focusableElements = document.querySelectorAll('; 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])' ); ; const firstElement = focusableElements[0] as HTMLElement; const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement; ; if (event.shiftKey && document.activeElement === firstElement) {; event.preventDefault(); lastElement.focus()} else if (!event.shiftKey && document.activeElement === lastElement) {; event.preventDefault(); firstElement.focus()} };'; document.addEventListener('keydown',handleKeyDown);';'; return () => document.removeEventListener('keydown',handleKeyDown)},[isActive]); ; return <>{children}</>}; </motion> </AccessibilityContext> </any> </any> </AccessibilityProviderProps> </AccessibilityContextType>;';';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
