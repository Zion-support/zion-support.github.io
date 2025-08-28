import React from 'react';
import SEO from '../components/SEO';
import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { MobileLaunchHero } from '../components/mobile-app/MobileLaunchHero';
import { MobileFeatureShowcase } from '../components/mobile-app/MobileFeatureShowcase';
import { AppTestimonials } from '../components/mobile-app/AppTestimonials';
import { MobileEmailCapture } from '../components/mobile-app/MobileEmailCapture';
import { AppStoreBanner } from '../components/mobile-app/AppStoreBanner';
import { QrCodeDownload } from '../components/mobile-app/QrCodeDownload';
import { CommunityTrust } from '../components/mobile-app/CommunityTrust';

export const MobileLaunchPage = () => {
  return (
    <>
      <SEO 
        title="Zion Mobile App - Download IT Asset Management App"
        description="Download Zion mobile app for iOS and Android. Professional IT asset management in your pocket with real-time sync, offline mode, and enterprise security."
        keywords="zion mobile app, IT asset management app, download, iOS, Android, mobile app"
      />
      <Header />
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
};
