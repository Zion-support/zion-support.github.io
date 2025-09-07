import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react'
interface ReferralLinkProps {
  referralLink: string;
  onCopy: () => void;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void
export function ReferralLink({
  referralLink
  onCopy
  onShare
}: ReferralLinkProps) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <Card className='mt-6'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Link className='h-5 w-5' />
          Your Referral Link
        </CardTitle>
        <CardDescription>
          Share this link with others to earn rewards when they join and
          complete onboarding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col space-y-3'>
          <div className='flex space-x-2'>
            <Input
              value = {referralLink,}
              readOnly
              className='font-mono text-sm'
            />
            <Button
              variant='outline'
              size='icon'
              onClick={handleCopy}
              aria-label='Copy referral link'
            >
              <Copy className='h-4 w-4' />
              <span className='sr-only'>Copy</span>
            </Button>
          </div>
origin/cursor/automate-test-improve-and-merge-code-2533

import { useState } from 'react';
import { Button } from '@/components / ui / button';
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react';
interface ReferralLinkProps {
  referral_link: string;
  on_copy: () => void;
  on_share: (platform: 'twitter' | 'facebook' | 'linkedin') => void;
export /**
 * ReferralLink - Function description
 */
function ReferralLink() {
  const [copied, set_copied] = useState (false);
  const handle_copy = () =>: any {
    on_copy ();
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);

  }
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
interface ReferralLinkProps {;
  referralLink: string;
  onCopy: () => void;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;

export function ReferralLink(): any ({;
  referralLink,;
  onCopy,;
  onShare,;
}: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false);

  return (

    <Card className='mt - 6'>;

      <CardHeader>;
        <CardTitle className='flex items-center gap-2'>;
          <Link className='h-5 w-5' />;
          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and complete onboarding;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;

          {copied && (
          
          {copied && (

            <p className='text-sm text-green-600 dark:text-green-500'>
              Copied to clipboard!
            </p>
          )}
        </div>
      </CardContent>

<CardFooter className='border-t bg-muted/50 p-4'>
        <div className='flex flex-col sm:flex-row w-full justify-between items-center gap-4'>
          <p className='text-sm text-muted-foreground'>
            Share on social media:
          </p>
          <div className='flex space-x-2'>
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'
              onClick={() => onShare('twitter')}            <Button
              variant='outline'
origin/cursor/automate-test-improve-and-merge-code-2533
              size='sm'
              className='flex items-center gap-2'

            <Button 
              variant='outline' 
              size='sm'
              className='flex items-center gap-2'

            >
              <Facebook className='h-4 w-4' />
              Facebook
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'
              onClick={() => onShare('linkedin')}
            >
              <Share className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
              LinkedIn
            </Button>
          </div>
        </div>

              onClick={() => onShare('linkedin')}            >;
              <Share className='h-4 w-4' />              LinkedIn              <Share className='h-4 w-4' />;
        <div className='flex flex - col space - y-3'>;
          <div className='flex space - x-2'>;

              variant='outline';
              size='sm';
              className='flex items - center gap - 2';
              on_click={() => on_share ('linkedin')}            >;
              <Share className='h - 4 w - 4' />              LinkedIn              <Share className='h - 4 w - 4' />;

              LinkedIn;
            </Button>;
          </div>;
        </div>;
      </CardFooter>;

  );
}
    </Card>);
}

      </CardFooter>
    </Card>