import React, { useState } from 'react';
import { useLocalStorage } from '@/hooks';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wallet, Database, Save } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function AccountSettings() {
  const [didHandle, setDidHandle] = useState('');
  const [displayWeb3, setDisplayWeb3] = useState(false);
  const [enableBackup, setEnableBackup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async () => {
    setIsSubmitting(true);
    // Save logic here
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleConnectWallet = () => {
    // Wallet connection logic here
  };

  return (
    <>
      <SEO title='Account Settings' description='Manage your account' />
      <Header />
      <main className='container mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold mb-6 text-white'>Account Settings</h1>
        <div className='grid gap-6 md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>
                Manage your personal information and privacy
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                  id='email'
                  value='user@example.com'
                  disabled
                  className='bg-gray-100'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='didHandle'>Web3 Identity Handle</Label>
                <div className='flex gap-2'>
                  <Input
                    id='didHandle'
                    value={didHandle}
                    onChange={e => setDidHandle(e.target.value)}
                    placeholder='ENS / Lens / Ceramic / Farcaster'
                  />
                  <Button
                    variant='outline'
                    onClick={handleConnectWallet}
                    type='button'
                    className='flex items-center gap-1'
                  >
                    <Wallet className='h-4 w-4' />
                    Connect
                  </Button>
                </div>
                <p className='text-xs text-gray-500 mt-1'>
                  Connect your Web3 identity to enhance your profile
                </p>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='displayWeb3'>Display Web3 Identity</Label>
                <p className='text-xs text-gray-500'>
                  Show your Web3 handle instead of email
                </p>
              </div>
              <Button
                onClick={handleSave}
                disabled={isSubmitting}
                className='w-full'
              >
                {isSubmitting ? 'Saving...' : 'Save Settings'}
                {!isSubmitting && <Save className='ml-2 h-4 w-4' />}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}