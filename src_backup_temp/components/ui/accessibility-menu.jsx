import React,{useState,useEffect} from &apos;react&apos;; import {motion,AnimatePresence} from &apos;framer-motion&apos;; import {Settings,FileText,Eye,Zap,Volume2,VolumeX} from &apos;lucide-react&apos;; import {Button} from &quot;button.tsx&quot;; export function AccessibilityMenu($1) { const [isOpen,setIsOpen] = useState(false); const [settings,setSettings] = useState({ fontSize: &apos;medium&apos;,highContrast: false,reducedMotion: false,soundEnabled: true };); useEffect(() => { const savedSettings = localStorage.getItem(&apos;accessibility-settings&apos;); if (savedSettings) { setSettings(JSON.parse(savedSettings))} },[]); useEffect(() => { applySettings(settings);&apos;; localStorage.setItem(&apos;accessibility-settings&apos;,JSON.stringify(settings))},[settings]); const applySettings = (props) => { const root = document.documentElement; root.style.setProperty(&apos;--font-size-multiplier&apos;,newSettings.fontSize === &apos;small&apos; ? &apos;0.875&apos; :&apos;; newSettings.fontSize === &apos;large&apos; ? &apos;1.125&apos; : &apos;1&apos;); if (newSettings.highContrast) { root.classList.add(&apos;high-contrast&apos;)} else {root.classList.remove(&apos;high-contrast&apos;)} if (newSettings.reducedMotion) {root.classList.add(&apos;reduced-motion&apos;)} else {root.classList.remove(&apos;reduced-motion&apos;)} }; const toggleSetting = (props) => { setSettings(prev => ({ ...prev,[key]: !prev[key] }))};; const updateFontSize = (props) => { setSettings(prev => ({ ...prev,fontSize: size }))};; const resetSettings = (props) => { const defaultSettings = { fontSize: &apos;medium&apos;,highContrast: false,reducedMotion: false,;&apos;;&apos;;
import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Settings, FileText, Eye, Zap, Volume2, VolumeX} from 'lucide-react';
import {Button} from "button.tsx";
export function AccessibilityMenu("props": "any) {;
    const [isOpen", setIsOpen] = useState(false);
    const [settings, setSettings] = useState({;
        "fontSize": 'medium';
        "highContrast": "false;
        "reducedMotion": false;
        "soundEnabled": true;
    "});
    useEffect(() => {;
        // Load settings from localStorage;
export function AccessibilityMenu($1) {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        fontSize: 'medium',
        highContrast: false,
        reducedMotion: false,
        soundEnabled: true
    }
    );
        "fontSize": 'medium',
        "highContrast": false,
        "reducedMotion": false,
        "soundEnabled": true
    };);
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
    useEffect(() => {// Apply settings to document
        applySettings(settings);';
        // Save to localStorage
        localStorage.setItem('accessibility-settings', JSON.stringify(settings))}, [settings]);
    const applySettings = (props) => {
        const root = document.documentElement;
        // Font size
        root.style.setProperty('--font-size-multiplier', newSettings.fontSize === 'small' ? '0.875' :';
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
            ...prev;
            [key]: !prev[key];
        "}))};
    const updateFontSize = ("props": "any) => {;
        setSettings(prev => ({ ...prev", "fontSize": "size "}))};
    const resetSettings = ("props": "any) => {;
        const defaultSettings = {;
  "fontSize": 'medium';
            "highContrast": false;
            "reducedMotion": false"
    const toggleSetting = (props) => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }))};
    const updateFontSize = (props) => {
        setSettings(prev => ({ ...prev, "fontSize": size }))};
    const resetSettings = (props) => {
        const defaultSettings = {
  "fontSize": 'medium',
            "highContrast": false,
            "reducedMotion": false,
;';';
import React,{useState,useEffect} from 'react'; import {motion,AnimatePresence} from 'framer-motion'; import {Settings,FileText,Eye,Zap,Volume2,VolumeX} from 'lucide-react'; import {Button} from "button.tsx"; export function AccessibilityMenu($1) { const [isOpen,setIsOpen] = useState(false); const [settings,setSettings] = useState({ fontSize: 'medium',highContrast: false,reducedMotion: false,soundEnabled: true };); useEffect(() => { const savedSettings = localStorage.getItem('accessibility-settings'); if (savedSettings) { setSettings(JSON.parse(savedSettings))} },[]); useEffect(() => { applySettings(settings);'; localStorage.setItem('accessibility-settings',JSON.stringify(settings))},[settings]); const applySettings = (props) => { const root = document.documentElement; root.style.setProperty('--font-size-multiplier',newSettings.fontSize === 'small' ? '0.875' :'; newSettings.fontSize === 'large' ? '1.125' : '1'); if (newSettings.highContrast) { root.classList.add('high-contrast')} else {root.classList.remove('high-contrast')} if (newSettings.reducedMotion) {root.classList.add('reduced-motion')} else {root.classList.remove('reduced-motion')} }; const toggleSetting = (props) => { setSettings(prev => ({ ...prev,[key]: !prev[key] }))};; const updateFontSize = (props) => { setSettings(prev => ({ ...prev,fontSize: size }))};; const resetSettings = (props) => { const defaultSettings = { fontSize: 'medium',highContrast: false,reducedMotion: false,;';';