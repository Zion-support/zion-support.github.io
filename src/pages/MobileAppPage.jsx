import React from 'react';
import { AppFeatures } from '@/components / mobile - app / AppFeatures';
import { AppScreenshots } from '@/components / mobile - app / AppScreenshots';
import { AppStoreBanner } from '@/components / mobile - app / AppStoreBanner';
import { AppTestimonials } from '@/components / mobile - app / AppTestimonials';
import { DownloadSection } from '@/components / mobile - app / DownloadSection';
import { MobileAppHero } from '@/components / mobile - app / MobileAppHero';
import SEO from '@/components / SEO';
export default MobileAppPage;


const MobileAppPage = () => {
  return ( (<SEO
        title="Zion AI Marketplace App"
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now."
        keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs"
      />) , (<MobileAppHero />) , (<AppFeatures />) , (<AppScreenshots />) , (<AppTestimonials />) , (<DownloadSection />) , (<AppStoreBanner />) ) ;
};
