import React from 'react';
import SEO from '../components/SEO';
// import { Header } from '../components/header/Header.jsx';
import { Footer } from '../components/Footer';
;
import { MobileFeatureShowcase } from '../components/mobile-app/MobileFeatureShowcase.jsx';
import { AppTestimonials } from '../components/mobile-app/AppTestimonials.jsx';
import { MobileEmailCapture } from '../components/mobile-app/MobileEmailCapture.jsx';
import { AppStoreBanner } from '../components/mobile-app/AppStoreBanner.jsx';
import { QrCodeDownload } from '../components/mobile-app/QrCodeDownload.jsx';
import { CommunityTrust } from '../components/mobile-app/CommunityTrust.jsx';
export const MobileLaunchPage = () => {}
  return()
    <>
      <SEO;
        title="Zion Mobile App - Download IT Asset Management App""""
        description="Download Zion mobile app for iOS and Android. Professional IT asset management in your pocket with real-time sync, offline mode, and enterprise security.""""
        keywords="zion mobile app, IT asset management app, download, iOS, Android, mobile app"""
      />
      {/* <Header /> */}
      <main>
        <MobileLaunchHero />
        <MobileFeatureShowcase />
        <AppTestimonials />
        <MobileEmailCapture />
        <AppStoreBanner />
        <QrCodeDownload />
        <CommunityTrust />
      </main>
      <Footer />
    </>
  );
};'"""
'"'"""