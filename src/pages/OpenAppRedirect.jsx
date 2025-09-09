import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/Button';

// This component handles deep linking to the mobile app
const OpenAppRedirect = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('redirecting');

  useEffect(() => {
    const attemptAppOpen = async () => {
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);
      
      // App scheme URLs (these would be your actual app's URL schemes)
      const appScheme = "zion://";
      const androidAppUrl = "market://details?id=app.zion.marketplace";
      const iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000";
      const fallbackUrl = "/mobile-launch"; // Fallback to mobile launch page
      
      let timeout;

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
        }, 2000);
      }
    };

    attemptAppOpen();
  }, [navigate]);

  const getStatusMessage = () => {
    switch (status) {
      case 'redirecting':
        return 'Opening Zion App...';
      case 'timeout':
        return 'Redirecting to App Store...';
      case 'failed':
        return 'Redirecting to mobile page...';
      default:
        return 'Loading...';
    }
  };

  return (
    <>
      <SEO
        title="Open Zion App"
        description="Redirecting to the Zion mobile application"
        canonical="/open-app"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Zion App</h1>
            <p className="text-xl opacity-90">{getStatusMessage()}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
            
            <p className="text-sm opacity-75">
              If the app doesn't open automatically, you'll be redirected to the app store.
            </p>
            
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="mt-4 bg-white text-blue-600 hover:bg-gray-100"
            >
              Return to Website
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenAppRedirect;