<<<<<<< HEAD

=======
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Download, 
  Smartphone, 
  Globe, 
  CheckCircle, 
  Clock,
  ArrowRight,
  Loader2,
  Phone,
  Mail
} from 'lucide-react';

<<<<<<< HEAD
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

// This component handles deep linking to the mobile app
<<<<<<< HEAD
const OpenAppRedirect = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('redirecting' as 'redirecting' | 'failed' | 'timeout');
  
  useEffect(() => {
    const attemptAppOpen = async () => {
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);
      
      // App scheme URLs (these would be your actual app's URL schemes)
      const appScheme = "zion://";
      const androidAppUrl = "market://details?id=app.zion.marketplace";
      const iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000";
      const fallbackUrl = "/mobile-launch"; // Fallback to mobile launch page
      
      let timeout: number | undefined;
      
      // Try to open the app
      if (isAndroid || isiOS) {
        // Set a timeout to redirect to app store if the app doesn't open
        timeout = window.setTimeout(() => {
          setStatus('timeout');
          if (isAndroid) {
            window.location.href = androidAppUrl;
          } else if (isiOS) {
            window.location.href = iosAppUrl;
          }
        }, 2500); // Wait 2.5 seconds before redirecting to store
        
        // Try to open the app
        window.location.href = appScheme;
      } else {
        // Not on mobile, redirect to mobile launch page
        setStatus('failed');
        setTimeout(() => {
          navigate(fallbackUrl);
        }, 1500);
      }
      
      // Clear timeout if page visibility changes (meaning app opened successfully)
      document.addEventListener("visibilitychange", () => {
        if (document.hidden && timeout) {
          clearTimeout(timeout);
        }
      });
    };
    
    attemptAppOpen();
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-blue">
      <SEO 
        title="Opening Zion App" 
        description="Redirecting to the Zion AI Marketplace mobile app"
        // noindex removed - not supported in new SEO component
      />
      <div className="text-center p-8">
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        
        {status === 'redirecting' && (
          <>
            <h1 className="text-2xl font-bold mb-2">Opening Zion App...</h1>
            <p className="text-gray-300">
              If nothing happens, download the app first.
            </p>
          </>
        )}
        
        {status === 'timeout' && (
          <>
            <h1 className="text-2xl font-bold mb-2">App Not Installed</h1>
            <p className="text-gray-300 mb-6">
              We're redirecting you to download the Zion app.
            </p>
          </>
        )}
        
        {status === 'failed' && (
          <>
            <h1 className="text-2xl font-bold mb-2">Opening App Failed</h1>
            <p className="text-gray-300 mb-6">
              We're taking you to our mobile app page where you can download the app.
            </p>
            <Link to="/mobile-launch">
              <Button className="bg-zion-cyan hover:bg-zion-cyan/80">
                Go to Mobile App Page
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
const OpenAppRedirect = () => {
  const [countdown, setCountdown] = useState<number>(5);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setIsRedirecting(true);
          // Simulate redirect
          setTimeout(() => {
            window.location.href = 'https://ziontechgroup.com';
          }, 1000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleManualRedirect = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = 'https://ziontechgroup.com';
    }, 500);
  };

  const appInfo = {
    name: "Zion Tech Group",
    description: "Your comprehensive technology solutions partner",
    features: [
      "AI-Powered Services",
      "IT Infrastructure Solutions",
      "Micro SAAS Platforms",
      "24/7 Technical Support",
      "Custom Development",
      "Cloud Migration"
    ],
    platforms: [
      {
        name: "Web Application",
        url: "https://ziontechgroup.com",
        icon: <Globe className="h-6 w-6" />,
        description: "Access all services through our web platform"
      },
      {
        name: "Mobile App",
        url: "#",
        icon: <Smartphone className="h-6 w-6" />,
        description: "Coming soon - Mobile app for iOS and Android"
      }
    ]
  };
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Opening <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {appInfo.name}
              </span>
            </h1>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Redirecting you to our comprehensive technology platform. Please wait while we prepare your experience.
            </p>
          </div>

          {/* Redirect Status */}
          <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-12">
            <CardContent className="p-8">
              {isRedirecting ? (
                <div className="text-center">
                  <Loader2 className="h-12 w-12 text-zion-cyan animate-spin mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Redirecting...</h3>
                  <p className="text-zion-slate-light">Taking you to Zion Tech Group</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-6xl font-bold text-zion-cyan mb-2">{countdown}</div>
                    <p className="text-zion-slate-light">seconds until automatic redirect</p>
                  </div>
                  <Button 
                    onClick={handleManualRedirect}
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white"
                  >
                    Open Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* App Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <CardTitle className="text-white">What You'll Find</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Comprehensive technology solutions at your fingertips
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {appInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Platforms */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <CardTitle className="text-white">Access Options</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Choose your preferred platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appInfo.platforms.map((platform, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-zion-cyan/10">
                      <div className="text-zion-cyan">
                        {platform.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="text-white font-medium">{platform.name}</h4>
                        <p className="text-zion-slate-light text-sm">{platform.description}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white"
                        onClick={() => window.open(platform.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
            <CardHeader>
              <CardTitle className="text-white">Need Help?</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Our team is here to assist you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-zion-cyan mb-2">
                    <Phone className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-zion-slate-light">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="text-zion-cyan mb-2">
                    <Mail className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="text-zion-cyan mb-2">
                    <Globe className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="text-white font-medium mb-1">Website</h4>
                  <p className="text-zion-slate-light">ziontechgroup.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Manual Redirect Button */}
          {!isRedirecting && (
            <div className="mt-8">
              <Button 
                variant="outline"
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
                onClick={handleManualRedirect}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Open Zion Tech Group
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

export default OpenAppRedirect;
