import React,{useState,useEffect} from &quot;react&quot;; import {safeStorage} from &quot;@/utils/safeStorage&quot;; import {X,ArrowRight} from &apos;lucide-react&apos;; import {Link} from &apos;react-router-dom&apos;; import {useIsMobile} from &quot;@/hooks/use-mobile&quot;; export const SmartAppBanner = (props) => { const [isVisible,setIsVisible] = useState(false); const isMobile = useIsMobile(); useEffect(() => { if (isMobile && !safeStorage.getItem(&quot;smartBannerDismissed&quot;)) { const timer = setTimeout(() => { setIsVisible(true)},delay); return () => clearTimeout(timer)} },[isMobile,delay]); const dismissBanner = (props) => {setIsVisible(false); safeStorage.setItem(&quot;smartBannerDismissed&quot;,&quot;true&quot;)}; const resetBanner = (props) => {safeStorage.removeItem(&quot;smartBannerDismissed&quot;); setIsVisible(true)}; if (!isMobile || !isVisible) { return process.env.NODE_ENV === &apos;development&apos; ? (<div className=&quot;bg-zion-blue-dark p-2 text-xs text-center text-gray-300&quot;> Smart banner hidden. <button onClick={resetBanner} className=&quot;text-zion-cyan underline&quot;>Show banner</button> (development only) </div>) : null} const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent); const bannerLink = isIOS ? appStoreUrl : googlePlayUrl; return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;flex items-center&quot;> <div className=&quot;w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center&quot;> {appIconSrc ? (<img loading=&quot;lazy&quot; src={appIconSrc} alt={appName} className=&quot;w-10 h-10 rounded-md&quot; />) : (<div className=&quot;text-zion-cyan font-bold text-lg&quot;>Z </div> )} </div> <div className=&quot;flex-1&quot;> <h4 className=&quot;font-semibold text-white&quot;>{appName}</h4> <p className=&quot;text-xs text-gray-300&quot;>Get our app for the best experience</p> </div> <div className=&quot;flex items-center gap-3&quot;> <Link href=&quot;/open-app&quot; className=&quot;flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium&quot;> View <ArrowRight className=&quot;w-3 h-3 ml-1&quot; /> </Link> <button onClick={dismissBanner} className=&quot;text-gray-300&quot; aria-label=&quot;Dismiss&quot;> <X className=&quot;h-5 w-5&quot; /> </button> </div> </div> </div>)};&apos;; ;&apos;;&apos;;
import React, {useState, useEffect} from "react";
import {safeStorage} from "@/utils/safeStorage";
import {X, ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import {useIsMobile} from "@/hooks/use-mobile";
export const SmartAppBanner = ("props": "any) => {;
    const [isVisible", setIsVisible] = useState(false);
export const SmartAppBanner = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useIsMobile();
    useEffect(() => {;
        // Only show banner on mobile devices and if it hasn't been dismissed;
        if (isMobile && !safeStorage.getItem("smartBannerDismissed")) {;
            const timer = setTimeout(() => {;
                setIsVisible(true);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [isMobile, delay]);
    const dismissBanner = ("props": "any) => {setIsVisible(false);
        safeStorage.setItem("smartBannerDismissed"", "true");};
    const resetBanner = ("props": "any) => {safeStorage.removeItem("smartBannerDismissed");
        setIsVisible(true);"};
    // Only render on mobile devices;
    if (!isMobile || !isVisible) {;
        return process.env.NODE_ENV === 'development' ? (<div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-300">;
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only);
      </div>) : "null;
    "}
    // Detect iOS or Android;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const bannerLink = isIOS ? appStoreUrl : "googlePlayUrl;
    return (<div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">;
          {appIconSrc ? (<img loading="lazy" src={appIconSrc"} alt={appName} className="w-10 h-10 rounded-md"  />) : "(<div className="text-zion-cyan font-bold text-lg">Z</div>)"}
        </div>;
        ;
        <div className="flex-1">;
          <h4 className="font-semibold text-white">{appName}</h4>;
          <p className="text-xs text-gray-300">Get our app for the best experience</p>;
        </div>;
        ;
        <div className="flex items-center gap-3">;
          <Link href="/open-app" className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium">;
            View;
            <ArrowRight className="w-3 h-3 ml-1" />;
          </Link>;
          ;
          <button onClick={dismissBanner} className="text-gray-300" aria-label="Dismiss">;
            <X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>);
    const dismissBanner = (props) => {setIsVisible(false);
        safeStorage.setItem("smartBannerDismissed", "true");};
    const resetBanner = (props) => {safeStorage.removeItem("smartBannerDismissed");
        setIsVisible(true);};
    // Only render on mobile devices
    if (!isMobile || !isVisible) {
        return process.env.NODE_ENV === 'development' ? (<div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-300">
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only)
      </div>) : null;
    }
    // Detect iOS or Android
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const bannerLink = isIOS ? appStoreUrl : googlePlayUrl;
    return (
        <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">
    <div className="min-h-screen bg-white">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">
          {appIconSrc ? (<img loading="lazy" src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md"  />) : (<div className="text-zion-cyan font-bold text-lg">Z    </div>
  );
}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-white">{appName}</h4>
          <p className="text-xs text-gray-300">Get our app for the best experience</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/open-app" className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium">
            View
            <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
          <button onClick={dismissBanner} className="text-gray-300" aria-label="Dismiss">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    );
};
    </div>);
};';';';
import React,{useState,useEffect} from "react"; import {safeStorage} from "@/utils/safeStorage"; import {X,ArrowRight} from 'lucide-react'; import {Link} from 'react-router-dom'; import {useIsMobile} from "@/hooks/use-mobile"; export const SmartAppBanner = (props) => { const [isVisible,setIsVisible] = useState(false); const isMobile = useIsMobile(); useEffect(() => { if (isMobile && !safeStorage.getItem("smartBannerDismissed")) { const timer = setTimeout(() => { setIsVisible(true)},delay); return () => clearTimeout(timer)} },[isMobile,delay]); const dismissBanner = (props) => {setIsVisible(false); safeStorage.setItem("smartBannerDismissed","true")}; const resetBanner = (props) => {safeStorage.removeItem("smartBannerDismissed"); setIsVisible(true)}; if (!isMobile || !isVisible) { return process.env.NODE_ENV === 'development' ? (<div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-300"> Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only) </div>) : null} const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent); const bannerLink = isIOS ? appStoreUrl : googlePlayUrl; return ( <div className="min-h-screen bg-white"> <div className="flex items-center"> <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center"> {appIconSrc ? (<img loading="lazy" src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" />) : (<div className="text-zion-cyan font-bold text-lg">Z </div> )} </div> <div className="flex-1"> <h4 className="font-semibold text-white">{appName}</h4> <p className="text-xs text-gray-300">Get our app for the best experience</p> </div> <div className="flex items-center gap-3"> <Link href="/open-app" className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium"> View <ArrowRight className="w-3 h-3 ml-1" /> </Link> <button onClick={dismissBanner} className="text-gray-300" aria-label="Dismiss"> <X className="h-5 w-5" /> </button> </div> </div> </div>)};'; ;';';