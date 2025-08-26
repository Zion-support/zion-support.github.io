import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

export default function PrivacySettings() {
  const [analytics, setAnalytics] = useState(true);
  const [ads, setAds] = useState(false);

  const handleSave = () => {
    // Save preferences to localStorage
    localStorage.setItem('privacy-analytics', analytics.toString());
    localStorage.setItem('privacy-ads', ads.toString());
    alert('Preferences saved!');
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold">Privacy Settings</h1>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Analytics Cookies</span>
            <Switch checked={analytics} onCheckedChange={setAnalytics} />
          </div>
          <div className="flex items-center justify-between">
            <span>Advertising Cookies</span>
            <Switch checked={ads} onCheckedChange={setAds} />
          </div>
          <Button onClick={handleSave}>Save Preferences</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
