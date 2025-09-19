import React,{useState,useEffect,useCallback} from &apos,react&apos, import {motion,AnimatePresence} from &apos,framer-motion&apos, import {Eye,Volume2,VolumeX,Type,Contrast,ZoomIn,ZoomOut,Settings,Accessibility,X} from &apos,lucide-react&apos, import {Button} from &quot,button.tsx&quot, export function AccessibilityPanel($1) { const [isOpen,setIsOpen] = useState(false), const [settings,setSettings] = useState({ highContrast: false,largeText: false,reducedMotion: false,screenReader: false,fontSize: 16,colorBlindMode: &apos,normal&apos },), useEffect(() => { if (!enabled) return, const root = document.documentElement, if (settings.highContrast) { root.classList.add(&apos,high-contrast&apos,)} else {root.classList.remove(&apos,high-contrast&apos,)} if (settings.largeText) {root.style.fontSize = &apos,18px&apos,} else {root.style.fontSize = &apos,16px&apos,} if (settings.reducedMotion) {root.style.setProperty(&apos,--reduced-motion&apos,&apos,reduce&apos,)} else {root.style.setProperty(&apos,--reduced-motion&apos,&apos,no-preference&apos,)} root.style.setProperty(&apos,--font-size&apos,`${settings.fontSize}px`),&apos, root.setAttribute(&apos,data-color-blind&apos,settings.colorBlindMode), onSettingsChange?.(settings)},[settings,enabled,onSettingsChange]), useEffect(() => { const saved = localStorage.getItem(&apos,accessibility-settings&apos,), if (saved) { try { const parsed = JSON.parse(saved), setSettings(prev => ({ ...prev,...parsed }))} catch { const saveSettings = useCallback((newSettings) => {setSettings(newSettings), localStorage.setItem(&apos,accessibility-settings&apos,JSON.stringify(newSettings))},[]), const toggleSetting = useCallback((key,value) => { const newSettings = { ,&apos,&apos;
import React, {useState, useEffect, useCallback} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Eye, Volume2, VolumeX, Type, Contrast, ZoomIn, ZoomOut, Settings, Accessibility, X} from 'lucide-react';
import {Button} from "button.tsx";
export function AccessibilityPanel("props": "any) {;
    const [isOpen", setIsOpen] = useState(false);
    const [settings, setSettings] = useState({;
        "highContrast": "false;
        "largeText": false;
        "reducedMotion": false;
        "screenReader": false;
        "fontSize": 16;
        "colorBlindMode": 'normal';
    "});
    // Apply accessibility settings to document;
    useEffect(() => {;
        if (!enabled);
export function AccessibilityPanel($1) {,
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({,
        highContrast: false;
        largeText: false;
        reducedMotion: false;
        screenReader: false;
        fontSize: 16;
        colorBlindMode: 'normal',}
    );
        "highContrast": false;
        "largeText": false;
        "reducedMotion": false;
        "screenReader": false;
        "fontSize": 16;
        "colorBlindMode": 'normal',
    },);
    // Apply accessibility settings to document,
    useEffect(() => {,
        if (!enabled),
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
        if (settings.reducedMotion) {root.style.setProperty('--reduced-motionreduce')}
        else {root.style.setProperty('--reduced-motionno-preference')}
        // Font size;
        root.style.setProperty('--font-size', `${settings.fontSize}px`);
        // Color blind mode;
        // Font size,
        root.style.setProperty('--font-size', `${settings.fontSize}px`),';
        // Color blind mode,
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
            catch {// Silently handle parsing errors}, []);
    // Save settings to localStorage;
    const saveSettings = useCallback((newSettings) => {setSettings(newSettings);
        localStorage.setItem('accessibility-settings', JSON.stringify(newSettings))}, []);
    // Toggle settings;
    const toggleSetting = useCallback((key, value) => {;
        const newSettings = {,
    // Toggle settings,
    const toggleSetting = useCallback((key, value) => {,
        const newSettings = {,;
import React,{useState,useEffect,useCallback} from 'react', import {motion,AnimatePresence} from 'framer-motion', import {Eye,Volume2,VolumeX,Type,Contrast,ZoomIn,ZoomOut,Settings,Accessibility,X} from 'lucide-react', import {Button} from "button.tsx", export function AccessibilityPanel($1) { const [isOpen,setIsOpen] = useState(false), const [settings,setSettings] = useState({ highContrast: false,largeText: false,reducedMotion: false,screenReader: false,fontSize: 16,colorBlindMode: 'normal' ,},), useEffect(() => { if (!enabled) return, const root = document.documentElement, if (settings.highContrast) { root.classList.add('high-contrast')} else {root.classList.remove('high-contrast')} if (settings.largeText) {root.style.fontSize = '18px'} else {root.style.fontSize = '16px'} if (settings.reducedMotion) {root.style.setProperty('--reduced-motionreduce')} else {root.style.setProperty('--reduced-motionno-preference')} root.style.setProperty('--font-size',`${settings.fontSize}px`),', root.setAttribute('data-color-blind',settings.colorBlindMode), onSettingsChange?.(settings)},[settings,enabled,onSettingsChange]), useEffect(() => { const saved = localStorage.getItem('accessibility-settings'), if (saved) { try { const parsed = JSON.parse(saved), setSettings(prev => ({ ...prev,...parsed }))} catch { const saveSettings = useCallback((newSettings) => {setSettings(newSettings), localStorage.setItem('accessibility-settings',JSON.stringify(newSettings))},[]), const toggleSetting = useCallback((key,value) => { const newSettings = { ,',';
}}}}}}}}}}}}}}}}}}}}))))))