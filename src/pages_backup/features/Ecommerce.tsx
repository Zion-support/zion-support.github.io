'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
    <d iv c las sNa me="m in-h-s cre en bg-g rad ient-to-br from-s late-900 via-purple-900 to-s late-900">
      <Helmet>
        <title>Ecommerce - Zion Tech Group</title>
        <meta name="description" content="Professional ecommerce services and solutions." />
        <meta name="keywords" content="ecommerce, services, solutions, technology" />
      </Helmet>
      <Navigation />
      <m ain c las sNa me="p t-16">
        <d iv c las sNa me="f l ex i tems-c enter j ust ify-c enter m in-h-s cre en">
          <d iv c las sNa me="t e xt-c enter">
            <h1 c las sNa me="t e xt-4xl f ont-b old t ext-w hit-e mb-4">Ecommerce</h1>
            <p c las sNa me="t e xt-g ray-300 mb-8">T his p age is u nder cons tru ction.</p>
            <b utt on c las sNa me="b g-g rad ient-to-r from-purple-500 to-p ink-500 t ext-w hit-e px-8 py-3 roun ded-lg f ont-semibold hover:from-purple-600 hover:to-p ink-600 transition-all duration-300 flex i tems-c enter j ust ify-c enter mx-auto">
              L earn M ore
              <ArrowRight c las sNa me="w-5 h-5 m l-2" />
            </b utt on>
          </d iv>
      </m ain>
      <Footer />
    </d iv>
  );
};
export default EcommercePage;
