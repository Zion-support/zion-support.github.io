import React, { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wallet, Database, Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
export default function AccountSettings() {
  const { user } = useAuth();
  const [displayWeb3, setDisplayWeb3] = useState(false);
  const [didHandle, setDidHandle] = useState(");
  const [enableBackup, setEnableBackup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    try {
      const stored = localStorage.getItem('account_settings');
      if (stored) {
        const parsed = JSON.parse(stored);
        setDisplayWeb3(parsed.displayWeb3 || false);
        setDidHandle(parsed.didHandle || ");
        setEnableBackup(parsed.enableBackup || false);
      }
    } catch (e) {
      console.error('Error loading account settings', e);
    }
  }, []);
  const handleConnectWallet = async () => {
    try {
      if (!window.ethereum) {
        toast.error('Please install MetaMask or another Web3 wallet');
        return;
      }
      const accounts = await window.ethereum.request({ "method": 'eth_requestAccounts' };);
      if (!accounts.length) {
        toast.error('No accounts found');
        return;
      }
      const address = accounts[0];
      const message = `Zion AI Marketplace wallet verification\"nAddress": ${address}\"nTime": ${new Date().toISOString()};`;
      await window.ethereum.request({
        "method": 'personal_sign',
        "params": [address, message]
      });
      // Auto-set DID handle if ENS is available
      try {
        const provider = new window.ethers.providers.Web3Provider(window.ethereum);
        const ensName = await provider.lookupAddress(address);
        if (ensName) {
          setDidHandle(ensName);
        }
      } catch (error) {
        console.error('ENS lookup "error": ', error);
      }
      toast.success(`Wallet "connected": ${address.slice(0, 6)}...${address.slice(-4)}`);
    } catch (error) {
      toast.error(error.message || 'Failed to connect wallet');
    }
  };
  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      localStorage.setItem('account_settings', JSON.stringify({
        displayWeb3,
        didHandle,
        enableBackup
      }));
      toast.success('Settings saved successfully');
    } catch (error) {
      toast.error('Failed to save settings');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <SEO title="Account Settings" description="Manage your account" />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>
        <div className="grid gap-6 "md": grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your personal information and privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="didHandle">Web3 Identity Handle</Label>
                <div className="flex gap-2">
                  <Input
                    id="didHandle"
                    value={didHandle}
                    onChange={(e) => setDidHandle(e.target.value)}
                    placeholder="ENS / Lens / Ceramic / Farcaster"
                  />
                  <Button
                    variant="outline"
                    onClick={handleConnectWallet}
                    type="button"
                    className="flex items-center gap-1"
                  >
                    <Wallet className="w-4 h-4" />
                    Connect Wallet
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Backup Status</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">Data Backup</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {enableBackup ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">Web3 Wallet</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {displayWeb3 ? 'Connected' : 'Not connected'}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>Control your data and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="web3-toggle">Display Web3 Identity</Label>
                  <p className="text-sm text-gray-600">Show your Web3 identity in public profiles</p>
                </div>
                <Switch
                  id="web3-toggle"
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="backup-toggle">Enable Data Backup</Label>
                  <p className="text-sm text-gray-600">Automatically backup your data to secure cloud storage</p>
                </div>
                <Switch
                  id="backup-toggle"
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
                />
              </div>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-sm text-blue-800">
                  {enableBackup
                    ? 'Your data is being backed up securely. You can restore it anytime.'
                    : 'Enable backup first to use this feature'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 flex justify-end">
          <Button
            onClick={handleSave}
            disabled={isSubmitting}
            className="flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {isSubmitting ? 'Saving...' : 'Save Settings'}
          </Button>
        </div>
      </main>
    </>
  );
}
import React,{ useState,useEffect } from 'react'; import { SEO } from '@/components/SEO'; import { useAuth } from '@/hooks/useAuth'; import { Button } from '@/components/ui/button'; import { Input } from '@/components/ui/input'; import { Wallet,Database,Save } from "lucide-react"; import { Card,CardContent,CardDescription,CardHeader,CardTitle } from '@/components/ui/card'; import { Separator } from '@/components/ui/separator'; import { Switch } from '@/components/ui/switch'; import { Label } from '@/components/ui/label'; import { toast } from 'sonner'; export default function AccountSettings() { const { user } = useAuth(); const [displayWeb3,setDisplayWeb3] = useState(false); const [didHandle,setDidHandle] = useState("); const [enableBackup,setEnableBackup] = useState(false); const [isSubmitting,setIsSubmitting] = useState(false); useEffect(() => { try { const stored = localStorage.getItem('account_settings'); if (stored) { const parsed = JSON.parse(stored); setDisplayWeb3(parsed.displayWeb3 || false); setDidHandle(parsed.didHandle || "); setEnableBackup(parsed.enableBackup || false)} } catch (e) { console.error('Error loading account settings',e)} },[]); const handleConnectWallet = async () => { try { if (!window.ethereum) { toast.error('Please install MetaMask or another Web3 wallet'); return} const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' };); if (!accounts.length) { toast.error('No accounts found'); return} const address = accounts[0]; const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()};`; await window.ethereum.request({ method: 'personal_sign',params: [address,message] }); try { const provider = new window.ethers.providers.Web3Provider(window.ethereum); const ensName = await provider.lookupAddress(address); if (ensName) { setDidHandle(ensName)} } catch (error) { console.error('ENS lookup error:',error)} toast.success(`Wallet connected: ${address.slice(0,6)}...${address.slice(-4)}`)} catch (error) { toast.error(error.message || 'Failed to connect wallet')} }; const handleSave = async () => { setIsSubmitting(true); try { localStorage.setItem('account_settings',JSON.stringify({ displayWeb3,didHandle,enableBackup })); toast.success('Settings saved successfully')} catch (error) { toast.error('Failed to save settings')} finally { setIsSubmitting(false)} }; return ( <> <SEO title="Account Settings" description="Manage your account" /> <main className="container mx-auto py-8 px-4"> <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1> <div className="grid gap-6 md:grid-cols-2"> <Card> <CardHeader> <CardTitle>Profile Settings</CardTitle> <CardDescription>Manage your personal information and privacy</CardDescription> </CardHeader> <CardContent className="space-y-6"> <div className="space-y-2"> <Label htmlFor="didHandle">Web3 Identity Handle</Label> <div className="flex gap-2"> <Input id="didHandle" value={didHandle} onChange={(e) => setDidHandle(e.target.value)} placeholder="ENS / Lens / Ceramic / Farcaster" /> <Button variant="outline" onClick={handleConnectWallet} type="button" className="flex items-center gap-1" > <Wallet className="w-4 h-4" /> Connect Wallet </Button> </div> </div> <div> <h3 className="font-medium mb-2">Backup Status</h3> <div className="grid grid-cols-2 gap-2"> <div className="bg-gray-100 p-3 rounded-md"> <div className="flex items-center gap-2"> <Database className="w-4 h-4 text-blue-600" /> <span className="text-sm font-medium">Data Backup</span> </div> <p className="text-xs text-gray-600 mt-1"> {enableBackup ? 'Enabled' : 'Disabled'} </p> </div> <div className="bg-gray-100 p-3 rounded-md"> <div className="flex items-center gap-2"> <Wallet className="w-4 h-4 text-green-600" /> <span className="text-sm font-medium">Web3 Wallet</span> </div> <p className="text-xs text-gray-600 mt-1"> {displayWeb3 ? 'Connected' : 'Not connected'} </p> </div> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Privacy & Security</CardTitle> <CardDescription>Control your data and privacy settings</CardDescription> </CardHeader> <CardContent className="space-y-6"> <div className="flex items-center justify-between"> <div> <Label htmlFor="web3-toggle">Display Web3 Identity</Label> <p className="text-sm text-gray-600">Show your Web3 identity in public profiles</p> </div> <Switch id="web3-toggle" checked={displayWeb3} onCheckedChange={setDisplayWeb3} /> </div> <Separator /> <div className="flex items-center justify-between"> <div> <Label htmlFor="backup-toggle">Enable Data Backup</Label> <p className="text-sm text-gray-600">Automatically backup your data to secure cloud storage</p> </div> <Switch id="backup-toggle" checked={enableBackup} onCheckedChange={setEnableBackup} /> </div> <div className="bg-blue-50 p-4 rounded-md"> <p className="text-sm text-blue-800"> {enableBackup ? 'Your data is being backed up securely. You can restore it anytime.' : 'Enable backup first to use this feature' } </p> </div> </CardContent> </Card> </div> <div className="mt-8 flex justify-end"> <Button onClick={handleSave} disabled={isSubmitting} className="flex items-center gap-2" > <Save className="w-4 h-4" /> {isSubmitting ? 'Saving...' : 'Save Settings'} </Button> </div> </main> </> )}