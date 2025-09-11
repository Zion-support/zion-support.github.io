import React from "react";
import { SEO } from "@/components/SEO";
import MobileAppHero from "@/components/mobile-app/MobileAppHero";
import AppFeatures from "@/components/mobile-app/AppFeatures.tsx";
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots";
import AppTestimonials from "@/components/mobile-app/AppTestimonials.tsx";
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner";
import DownloadSection from "@/components/mobile-app/DownloadSection.tsx";
const MobileAppPage = () => {
    return (<SEO title="Zion AI Marketplace App" description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now." keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs"/>
        ,
            <MobileAppHero />
                ,
                    <AppFeatures />
                        ,
                            <AppScreenshots />
                                ,
                                    <AppTestimonials />
                                        ,
                                            <DownloadSection />
                                                ,
                                                    <AppStoreBanner />);
};
export default MobileAppPage;
