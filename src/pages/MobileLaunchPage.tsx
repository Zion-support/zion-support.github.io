<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
=======

import React from "react";
import SEOHead from "@/components/SEOHead";
import { MobileLaunchHero } from "@/components/mobile-app/MobileLaunchHero";
import { MobileFeatureShowcase } from "@/components/mobile-app/MobileFeatureShowcase";
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials";
import { MobileEmailCapture } from "@/components/mobile-app/MobileEmailCapture";
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner";
import { QrCodeDownload } from "@/components/mobile-app/QrCodeDownload";
import { CommunityTrust } from "@/components/mobile-app/CommunityTrust";

const MobileLaunchPage: React.FC = () => {
  return (
    
      <SEOHead 
        title="Get the Zion App - AI Marketplace in Your Pocket"
        description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go."
        keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app"
        canonical="/mobile-launch"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mobile Launch
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Launch our mobile application
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our mobile application is coming soon. You'll be able to access Zion Tech Group on the go with our mobile app.
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function MobileLaunchPage() {
  return (
    <>
      <SEO
        title="Mobile App - Zion Tech Group"
        description="Download our mobile app for on-the-go access to the tech marketplace."
        canonical="https://ziontechgroup.com/mobile-launch"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Mobile App</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Access the Zion Tech Group marketplace from anywhere with our mobile app.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our mobile app is currently under development and will be available soon on iOS and Android.
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </>
  );
};

export default MobileLaunchPage;
=======
      </main>
      <Footer />
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
