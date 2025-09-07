<<<<<<< HEAD:src_disabled_1757239864/components/referrals/ReferralLink.tsx


import { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLink.tsx
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

<<<<<<< HEAD:src_disabled_1757239864/components/referrals/ReferralLink.tsx
=======
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLink.tsx
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
<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

  const handleCopy = () => {;
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
  }
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5" />
          Your Referral Link
        </CardTitle>
        <CardDescription>
          Share this link with others to earn rewards when they join and complete onboarding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"
            />
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
  },

<<<<<<< HEAD:src_disabled_1757239864/components/referrals/ReferralLink.tsx
    <Card className='mt - 6'>;

import { useState } from "react",import { Button } from "@/components/ui/button",import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';
import { Input  } from '@/components/ui/input';
import { useState  } from 'react';
import { Button  } from '@/components/ui/button';
import { Card;
  CardContent;
  CardDescription;
  CardFooter;
  CardHeader;
  CardTitle;
 } from '@/components/ui/card';
import { Copy, Facebook, Link, Share, Twitter  } from 'lucide-react';
interface ReferralLinkProps  {referralLink: string;
  onCopy: () => void;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;
export function ReferralLink() {const [copied, setCopied] = useState(false)const handleCopy = () => {onCopy()setCopied(true)setTimeout(() => setCopied(false), 2000)}
  return (<Card className='mt-6'>;
      <CardHeader>;
        <CardTitle className='flex items-center gap-2'>;
          <Link className='h-5 w-5' />;
          Your Referral Link;
        </CardTitle>;
        <CardDescription>Share this link with others to earn rewards when they join and;
      <CardHeader>;
        <CardTitle className='flex items - center gap - 2'>;
          <Link className='h - 5 w - 5' />;

          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and;
          complete onboarding;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;

            <p className='text-sm text-green-600 dark:text-green-500'>              Copied to clipboard!
            <p className="text-sm text-green-600 dark:text-green-500">
=======
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLink.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ReferralLinkProps {
  referralLink: string;
  onCopy: () => void;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void,
}

export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {

  const [ copied, setCopied ] = useState(false),

    onCopy($2);
    setCopied($2);
    setTimeout(() => setCopied(false), 2000)
        <div className='flex flex - col space - y-3'>;
          <div className='flex space - x-2'>;
            <Input;
              value = {referral_link, }
              read_only;
              className='font - mono text - sm';
            />;
            <Button;
              variant='outline';
              size='icon';
              on_click={handle_copy}
              aria - label='Copy referral link';
            >;
              <Copy className='h - 4 w - 4' />;
              <span className='sr - only'>Copy</span>;
            </Button>;
          </div>;
          {copied && (
            <p className='text - sm text - green - 600 dark:text - green - 500'>              Copied to clipboard!;
            <p className="text - sm text - green - 600 dark:text - green - 500">;
    on_copy ();
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
  }
          {copied && (;
            <p className='text-sm text-green-600 dark:text-green-500'>              Copied to clipboard!;
            <p className="text-sm text-green-600 dark:text-green-500">;

<<<<<<< HEAD:src_disabled_1757239864/components/referrals/ReferralLink.tsx
  const handle_copy = () =>: any {on_copy ()set_copied (true)set_timeout (() => set_copied (false), 2000)}
          {copied && (<p className='text-sm text-green-600 dark:text-green-500'>              Copied to clipboard!;
            <p className="text-sm text-green-600 dark:text-green-500">;const handleCopy  = null;return (<Card className="mt - 6">;
=======



  return (
<<<<<<< HEAD
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5" />
          Your Referral Link
        </CardTitle>
        <CardDescription>
          Share this link with others to earn rewards when they join and complete onboarding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">
=======

    <Card className="mt - 6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLink.tsx
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Link className="h - 5 w - 5" />;Your Referral Link;
        </CardTitle>;
        <CardDescription>Share this link with others to earn rewards when they join and complete onboarding;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD:src_disabled_1757239864/components/referrals/ReferralLink.tsx
      <CardContent>;<Input;
              value={referralLink}
              readOnly;
              className="font-mono text-sm";
          )}
        </div>;
      </CardContent>;
      <CardFooter className='border-t bg-muted/50 p-4'>;
        <div className='flex flex-col sm:flex-row w-full justify-between items-center gap-4'>;
          <p className='text-sm text-muted-foreground'>;
            Share on social media:;
          </p>;
          <div className='flex space-x-2'>;
            <Button;
              variant='outline';
              size='sm';
              className='flex items-center gap-2';
              onClick={() => onShare('twitter')}            <Button;
          )}
        </div>;
      </CardContent>;
          {copied && ({copied && (<p className="text-sm text-green-600 dark:text-green-500">;
              Copied to clipboard!;
            </p>;
=======
      <CardContent>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"
<<<<<<< HEAD
            />
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          {copied && (
            <p className='text-sm text-green-600 dark:text-green-500'>              Copied to clipboard!
            <p className="text-sm text-green-600 dark:text-green-500">
  const handleCopy = () => {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5" />
          Your Referral Link
        </CardTitle>
        <CardDescription>
          Share this link with others to earn rewards when they join and complete onboarding
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">
            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"
            />
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          {copied && (
          {copied && (
          
          {copied && (
            <p className="text-sm text-green-600 dark:text-green-500">
          {copied && (
          {copied && (
          
          {copied && (
              Copied to clipboard!
            </p>
=======


          )}
        </div>
      </CardContent>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick = {() => onShare('twitter'),}
    <Card className="mt - 6">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Link className="h - 5 w - 5" />;

          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and complete onboarding;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;


            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLink.tsx
          )}
        </div>
      </CardContent>

<<<<<<< HEAD:src_disabled_1757239864/components/referrals/ReferralLink.tsx

=======
          {copied && (
          
          {copied && (

            <p className="text-sm text-green-600 dark:text-green-500">
              Copied to clipboard!
            </p>
          )}
        </div>
      </CardContent>

<<<<<<< HEAD
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick = {() => onShare('twitter'),}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLink.tsx
      <CardFooter className="border-t bg-muted/50 p-4">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">Share on social media:</p>
          <div className="flex space-x-2">
            <Button 
<<<<<<< HEAD
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare('twitter')}
            >
              <Twitter className="h-4 w-4" />
              Twitter
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'              onClick={() => onShare('facebook')}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick = {() => onShare('facebook'),}
=======

              variant="outline" 

              size="sm"
              className="flex items-center gap-2"


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
<<<<<<< HEAD
              onClick={() => onShare('facebook')}
              onClick = {() => onShare('facebook'),}
              onClick={() => onShare('facebook')}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </Button>
<<<<<<< HEAD
            <Button
              variant='outline'
              size='sm'
              className='flex items-center gap-2'
              onClick={() => onShare('linkedin')}            >
              <Share className='h-4 w-4' />              LinkedIn              <Share className="h-4 w-4" />
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={() => onShare('linkedin')}
            >
              <Share className="h-4 w-4" />
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              LinkedIn
            </Button>
          </div>
        </div>
<<<<<<< HEAD
      </CardFooter>;
    </Card>;
  );
};
}
}
      </CardFooter>
    </Card>
  )
}
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Copy, Facebook, Link, Share, Twitter } from 'lucide-react';
interface ReferralLinkProps {;
  referralLink: string,;
  onCopy: () => void,;
  onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void;
}
;
export function ReferralLink({ referralLink, onCopy, onShare }: ReferralLinkProps) {;
  const [copied, setCopied] = useState(false),;
  const handleCopy = () => {;
    onCopy(),;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (;
    <Card className="mt-6">;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <Link className="h-5 w-5" />;
          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and complete onboarding;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="flex flex-col space-y-3">;
          <div className="flex space-x-2">;
=======

              onClick={() => onShare('linkedin')}            >;
              <Share className='h-4 w-4' />              LinkedIn              <Share className="h-4 w-4" />;
        <div className="flex flex - col space - y-3">;
          <div className="flex space - x-2">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Input;
              value={referralLink}
              readOnly;
              className="font-mono text-sm";
            />;
            <Button variant="outline" size="icon" onClick={handleCopy} aria-label="Copy referral link">;
              <Copy className="h-4 w-4" />;
              <span className="sr-only">Copy</span>;
            </Button>;
          </div>;
<<<<<<< HEAD:src_disabled_1757239864/components/referrals/ReferralLink.tsx
          {copied && (<p className="text - sm text - green - 600 dark:text - green - 500">;
=======
          {copied && (;
            <p className="text-sm text-green-600 dark:text-green-500">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLink.tsx
              Copied to clipboard!;
            </p>;
          )}
        </div>;
      </CardContent>;
      <CardFooter className="border-t bg-muted/50 p-4">;
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">;
          <p className="text-sm text-muted-foreground">Share on social media:</p>;
          <div className="flex space-x-2">;
            <Button;
              variant="outline";
              size="sm";
<<<<<<< HEAD:src_disabled_1757239864/components/referrals/ReferralLink.tsx
              className="flex items - center gap - 2";
              on_click = {() => on_share ('twitter') }
=======
              className="flex items-center gap-2";
              onClick={() => onShare('twitter')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLink.tsx
            >;
              <Twitter className="h-4 w-4" />;
              Twitter;
            </Button>;
            <Button;
              variant="outline";
              size="sm";
<<<<<<< HEAD:src_disabled_1757239864/components/referrals/ReferralLink.tsx
              className="flex items - center gap - 2";
              on_click = {() => on_share ('facebook') }
=======
              className="flex items-center gap-2";
              onClick={() => onShare('facebook')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLink.tsx
            >;
              <Facebook className="h-4 w-4" />;
              Facebook;
            </Button>;
            <Button;
<<<<<<< HEAD
              variant="outline";
              size="sm";
              className="flex items-center gap-2";
              onClick={() => onShare('linkedin')}
            >;
              <Share className="h-4 w-4" />;
=======
              variant='outline';
              size='sm';
              className='flex items - center gap - 2';
              on_click={() => on_share ('linkedin')}            >;
<<<<<<< HEAD:src_disabled_1757239864/components/referrals/ReferralLink.tsx
              <Share className='h - 4 w - 4' />              LinkedIn              <Share className="h - 4 w - 4" />;LinkedIn;
=======
              <Share className='h - 4 w - 4' />              LinkedIn              <Share className="h - 4 w - 4" />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              LinkedIn;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLink.tsx
            </Button>;
          </div>;
        </div>;
      </CardFooter>;
<<<<<<< HEAD
    </Card>;
  );
}
;
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
    </Card>);
}

      </CardFooter>
    </Card>
<<<<<<< HEAD:src_disabled_1757239864/components/referrals/ReferralLink.tsx
  )

  );
}
  return (

    <Card className="mt - 6">;
      <CardHeader>;
        <CardTitle className="flex items - center gap - 2">;
          <Link className="h - 5 w - 5" />;

          Your Referral Link;
        </CardTitle>;
        <CardDescription>;
          Share this link with others to earn rewards when they join and complete onboarding;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;

            <Input
              value={referralLink}
              readOnly
              className="font-mono text-sm"

=======
<<<<<<< HEAD
  )
=======
  )
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/referrals/ReferralLink.tsx
