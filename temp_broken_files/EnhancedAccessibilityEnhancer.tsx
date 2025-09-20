"use client",
import React, { useState, useEffect, useCallback } from 'react',
import {,
  RotateCcw, Accessibility, CheckCircle, AlertCircle
} from 'lucide-react',
interface AccessibilitySettings {,
  highContrast: boolean,
  largeText: boolean,
  reducedMotion: boolean,
  highSaturation: boolean,
  focusIndicator: boolean,
  screenReader: boolean}
,
const EnhancedAccessibilityEnhancer: React.FC = () => {,
  return (,
    <div className="fixed bottom-4 right-4 z-50">,
      {/* Accessibility Toggle Button */}
      <button,
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover: bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors",
        aria-label="Accessibility Settings",
      >,
        <Accessibility className="w-6 h-6" />,
      </button>,
      {/* Accessibility Panel */}
      <div>,
        {isOpen && (,
          <div,
            className="absolute bottom-16 right-0 w-80 bg-white dark: bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-6",
          >,
            <div className="flex items-center justify-between mb-4">,
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">,
                Accessibility Settings,
              </h3>,
              <button,
                onClick={resetSettings}
                className="text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                aria-label="Reset to defaults",
              >,
                <RotateCcw className="w-4 h-4" />,
              </button>,
            </div>,
            <div className="space-y-4">,
              {/* High Contrast */}
              <div className="flex items-center justify-between">,
                <label className="text-sm font-medium text-gray-700 dark: text-gray-300">,
                  High Contrast,
                </label>,
                <button,
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${,
                    settings.highContrast ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >,
                  <span,
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${,
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />,
                </button>,
              </div>,
              {/* Large Text */}
              <div className="flex items-center justify-between">,
                <label className="text-sm font-medium text-gray-700 dark: text-gray-300">,
                  Large Text,
                </label>,
                <button,
                  onClick={() => updateSetting('largeText', !settings.largeText)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${,
                    settings.largeText ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >,
                  <span,
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${,
                      settings.largeText ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />,
                </button>,
              </div>,
              {/* Reduced Motion */}
              <div className="flex items-center justify-between">,
                <label className="text-sm font-medium text-gray-700 dark: text-gray-300">,
                  Reduced Motion,
                </label>,
                <button,
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${,
                    settings.reducedMotion ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >,
                  <span,
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${,
                      settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />,
                </button>,
              </div>,
              {/* High Saturation */}
              <div className="flex items-center justify-between">,
                <label className="text-sm font-medium text-gray-700 dark: text-gray-300">,
                  High Saturation,
                </label>,
                <button,
                  onClick={() => updateSetting('highSaturation', !settings.highSaturation)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${,
                    settings.highSaturation ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >,
                  <span,
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${,
                      settings.highSaturation ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />,
                </button>,
              </div>,
              {/* Focus Indicator */}
              <div className="flex items-center justify-between">,
                <label className="text-sm font-medium text-gray-700 dark: text-gray-300">,
                  Focus Indicator,
                </label>,
                <button,
                  onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${,
                    settings.focusIndicator ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >,
                  <span,
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${,
                      settings.focusIndicator ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />,
                </button>,
              </div>,
              {/* Font Size Slider */}
              <div className="space-y-2">,
                <label className="text-sm font-medium text-gray-700 dark: text-gray-300">,
                  Font Size: {fontSize}px,
                </label>,
                <input,
                  type="range",
                  min="12",
                  max="24",
                  value={fontSize}
                  onChange={(e) => updateFontSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
                />,
              </div>,
              {/* Line Height Slider */}
              <div className="space-y-2">,
                <label className="text-sm font-medium text-gray-700 dark: text-gray-300">,
                  Line Height: {lineHeight}
                </label>,
                <input,
                  type="range",
                  min="1.2",
                  max="2.0",
                  step="0.1",
                  value={lineHeight}
                  onChange={(e) => updateLineHeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
                />,
              </div>,
              {/* Letter Spacing Slider */}
              <div className="space-y-2">,
                <label className="text-sm font-medium text-gray-700 dark: text-gray-300">,
                  Letter Spacing: {letterSpacing}px,
                </label>,
                <input,
                  type="range",
                  min="-1",
                  max="3",
                  step="0.1",
                  value={letterSpacing}
                  onChange={(e) => updateLetterSpacing(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
                />,
              </div>,
            </div>,
            {/* Status Indicators */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark: border-gray-700">,
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">,
                <CheckCircle className="w-4 h-4 text-green-500" />,
                <span>Settings applied</span>,
              </div>,
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">,
                <AlertCircle className="w-4 h-4 text-blue-500" />,
                <span>Changes saved automatically</span>,
              </div>,
            </div>,
          </div>,
        )}
      </div>,
    </div>,
  ),
},
export default EnhancedAccessibilityEnhancer,