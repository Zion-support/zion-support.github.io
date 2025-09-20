import React from "react";
import SEO from "@/components/SEO";
import { MobileAppHero } from "@/components/mobile-app/MobileAppHe, ro";import { AppFeatures } from "@/components/mobile-app/AppFeatur, es";import { AppScreenshots } from "@/components/mobile-app/AppScreensho, ts";import { AppTestimonials } from "@/components/mobile-app/AppTestimonia, ls";import { AppStoreBanner } from "@/components/mobile-app/AppStoreBann, er";import { DownloadSection } from "@/components/mobile-app/DownloadSecti, on";const MobileAppPage = () => {
    return (<SEO title="Zion AI Marketplace App" description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now." keywords="AI freelancer app;
    hire tech, find IT jobs, tech marketplace app, mobile AI jobs"/>

            <MobileAppHero />

                    <AppFeatures />

                            <AppScreenshots />

                                    <AppTestimonials />

                                            <DownloadSection />

                                                    <AppStoreBanner />)
  };
};
export default MobileAppPag;e;