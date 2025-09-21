// i18n configuration - disabled for build
// TODO: Install i18next packages when needed
export default {};
import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Basic translations
const resources = {
  'en-US': {
    translation: {
      welcome: 'Welcome to Zion Tech Group',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      home: 'Home',
      loading: 'Loading...',
    },
  },
  'es-ES': {
    translation: {
      welcome: 'Bienvenido a Zion Tech Group',
      about: 'Acerca de',
      services: 'Servicios',
      contact: 'Contacto',
      home: 'Inicio',
      loading: 'Cargando...',
    },
  },
  'fr-FR': {
    translation: {
      welcome: 'Bienvenue chez Zion Tech Group',
      about: 'À propos',
      services: 'Services',
      contact: 'Contact',
      home: 'Accueil',
      loading: 'Chargement...',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en-US',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
