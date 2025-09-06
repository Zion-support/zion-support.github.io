<<<<<<< HEAD:src/components/blog/SocialShareButtons.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { toast } from '@/hooks/use-toast',;
interface SocialShareButtonsProps {;
  title: string;
}

export function SocialShareButtons({ title }: SocialShareButtonsProps) {
  const shareUrl =
    typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '',
  const shareText = encodeURIComponent(title),

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
      '_blank'
    )
=======
const shareToTwitter = () => {
    window.open(
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function SocialShareButtons({ title }: SocialShareButtonsProps) {

  const shareUrl =
  const shareToTwitter = () => {    window.open(
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
const shareToTwitter = () => {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/blog/SocialShareButtons.tsx

    window.open(
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`
      '_blank'
    )

<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components / ui / button';
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { toast } from '@/hooks / use - toast';
interface SocialShareButtonsProps {
  title: string;
export /**
 * SocialShareButtons - Function description
 */
function SocialShareButtons() {
  const share_url =;
    typeof window !== 'undefined';
      ? encodeURIComponent (window.location.href);
      : '';
  const share_text = encodeURIComponent (title);
  const shareToTwitter = () =>: any {
    window.open (
      `https://twitter.com / intent / tweet?url=${share_url}&text=${share_text}`,
      '_blank');
  }
  const shareToFacebook = () =>: any {
    window.open (
      `https://www.facebook.com / sharer / sharer.php?u=${share_url}`,
      '_blank');
  }
  const shareToLinkedIn = () =>: any {
    window.open (
      `https://www.linkedin.com / sharing / share - offsite/?url=${share_url}`,
      '_blank');

  }
<<<<<<< HEAD:src/components/blog/SocialShareButtons.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/blog/SocialShareButtons.tsx
  const copy_link = () =>: any {
    // Check condition
if (return) {
  $2
}
    navigator.clipboard;
      .write_text (window.location.href);
      .then (() => toast.success ('Link copied to clipboard'));
      .catch (() => toast.error ('Failed to copy link'));
  }
  const buttons = [;
    {

interface SocialShareButtonsProps {;
  title: string;

export function SocialShareButtons(): any ({ title }: SocialShareButtonsProps) {;
  const shareUrl =;
    typeof window !== 'undefined';
      ? encodeURIComponent(window && window.location.href);
      : '';
  const shareText = encodeURIComponent(title);

  const shareToTwitter = () => {;
    window && window.open(;
      `https://twitter && twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,;
      '_blank';
    )
};

  const shareToFacebook = () => {;
    window && window.open(;
      `https://www && www.facebook.com/sharer/sharer && sharer.php?u=${shareUrl}`,;
      '_blank';
    )
};

  const shareToLinkedIn = () => {;
    window && window.open(;
      `https://www && www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,;
      '_blank';
    )
};

  const copyLink = () => {;
    if (typeof window === 'undefined') return;
    navigator && navigator.clipboard;
      .writeText(window && window.location.href);
      .then(() => toast && toast.success('Link copied to clipboard'));
      .catch(() => toast && toast.error('Failed to copy link'))
};
  const buttons = [;
    {;
      icon: <Twitter className='h-4 w-4' />,;
      label: 'Twitter',;
      onClick: shareToTwitter,;
    },;
    {;
      icon: <Facebook className='h-4 w-4' />,;
      label: 'Facebook',;
      onClick: shareToFacebook,;
    },;
    {;
      icon: <Linkedin className='h-4 w-4' />,;
      label: 'LinkedIn',;
      onClick: shareToLinkedIn,;
    },;
    {;
      icon: <LinkIcon className='h-4 w-4' />,;
      label: 'Copy Link',;
      onClick: copyLink,;
    },;
  ];

  return (
    <div className='mt-12 flex flex-wrap gap-2'>;
      {buttons && buttons.map(btn => (;
        <Button
          key={btn && btn.label}
          variant='outline'
          size='sm'
          onClick={btn && btn.onClick}
          aria-label={btn && btn.label}>          {btn && btn.icon}
          <span>{btn && btn.label}</span>;
        </Button>;
      ))}

<<<<<<< HEAD:src/components/blog/SocialShareButtons.tsx
=======
    </div>;
  );
}

}

}




>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/blog/SocialShareButtons.tsx
      icon: <Twitter className='h - 4 w - 4' />,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      label: 'Twitter',
      on_click: shareToTwitter,
    },
    {
      icon: <Facebook className='h - 4 w - 4' />,
      label: 'Facebook',
      on_click: shareToFacebook,
    },
    {
      icon: <Linkedin className='h - 4 w - 4' />,
      label: 'LinkedIn',
      on_click: shareToLinkedIn,
    },
    {
      icon: <LinkIcon className='h - 4 w - 4' />,
      label: 'Copy Link',
      on_click: copy_link,
    },
  ];
  return (
    <div className='mt - 12 flex flex - wrap gap - 2'>;
      {buttons.map (btn => (
        <Button;
          key={btn.label}
          variant='outline';
          size='sm';
          on_click={btn.on_click}
          aria - label={btn.label}
        >          {btn.icon}
          <span>{btn.label}</span>;
        </Button>))}
    </div>);
}
}

<<<<<<< HEAD:src/components/blog/SocialShareButtons.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/blog/SocialShareButtons.tsx
  },

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')
  },

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')
  },

  const copyLink = () => {
    if (typeof window === 'undefined') return,
<<<<<<< HEAD:src/components/blog/SocialShareButtons.tsx
<<<<<<< HEAD
      .writeText(window.location.href)
      .then(() => toast.success('Link copied to clipboard'))
      .catch(() => toast.error('Failed to copy link'))
<<<<<<< HEAD
  },
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const buttons = [
    { icon: <Twitter className="h-4 w-4" />, label: 'Twitter', onClick: shareToTwitter },
    { icon: <Facebook className="h-4 w-4" />, label: 'Facebook', onClick: shareToFacebook },
    { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn', onClick: shareToLinkedIn },
    { icon: <LinkIcon className="h-4 w-4" />, label: 'Copy Link', onClick: copyLink }],

  return (
    <div className="mt-12 flex flex-wrap gap-2">
      {buttons.map((btn) => (
        <Button key={btn.label} variant="outline" size="sm" onClick={btn.onClick} aria-label={btn.label}>
;
export function SocialShareButtons({ title }: SocialShareButtonsProps) {;
  const shareUrl =;
    typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '',;
  const shareText = encodeURIComponent(title),;
  const shareToTwitter = () => {;
    window.open(;
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,;
      '_blank';
    );
  },;
  const shareToFacebook = () => {;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
  },;
  const shareToLinkedIn = () => {;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank');
  },;
  const copyLink = () => {;
    if (typeof window === 'undefined') return,;
    navigator.clipboard;
      .writeText(window.location.href);
      .then(() => toast.success('Link copied to clipboard'));
      .catch(() => toast.error('Failed to copy link'));
  },;
  const buttons = [;
    { icon: <Twitter className="h-4 w-4" />, label: 'Twitter', onClick: shareToTwitter },;
    { icon: <Facebook className="h-4 w-4" />, label: 'Facebook', onClick: shareToFacebook },;
    { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn', onClick: shareToLinkedIn };
    { icon: <LinkIcon className="h-4 w-4" />, label: 'Copy Link', onClick: copyLink }];
  return (;
    <div className="mt-12 flex flex-wrap gap-2">;
      {buttons.map((btn) => (;
        <Button key={btn.label} variant="outline" size="sm" onClick={btn.onClick} aria-label={btn.label}>;
          {btn.icon}
          <span>{btn.label}</span>;
        </Button>;
      ))}
=======

    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success('Link copied to clipboard'))
      .catch(() => toast.error('Failed to copy link'))

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success('Link copied to clipboard'))
      .catch(() => toast.error('Failed to copy link'))


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/blog/SocialShareButtons.tsx
    </div>;
<<<<<<< HEAD
  );
<<<<<<< HEAD
=======
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
};

  },

  const buttons = [
    { icon: <Twitter className="h-4 w-4" />, label: 'Twitter', onClick: shareToTwitter },
    { icon: <Facebook className="h-4 w-4" />, label: 'Facebook', onClick: shareToFacebook },
    { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn', onClick: shareToLinkedIn },
    { icon: <LinkIcon className="h-4 w-4" />, label: 'Copy Link', onClick: copyLink }],

import React from 'react';
import { Button  } from '@/components/ui/button';
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react'
import { toast } from '@/hooks/use-toast';
interface SocialShareButtonsProps {
  title: string
export function SocialShareButtons({ title }: SocialShareButtonsProps) {
  const shareUrl = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="mt-12 flex flex-wrap gap-2">
      {buttons.map((btn) => (
        <Button key={btn.label} variant="outline" size="sm" onClick={btn.onClick} aria-label={btn.label}>
;
export function SocialShareButtons({ title }: SocialShareButtonsProps) {;
  const shareUrl =;
    typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '',;
  const shareText = encodeURIComponent(title),;
  const shareToTwitter = () => {;
    window.open(;
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,;
      '_blank';
    );
  },;
  const shareToFacebook = () => {;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
  },;
  const shareToLinkedIn = () => {;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank');
  },;
  const copyLink = () => {;
    if (typeof window === 'undefined') return,;
    navigator.clipboard;
      .writeText(window.location.href);
      .then(() => toast.success('Link copied to clipboard'));
      .catch(() => toast.error('Failed to copy link'));
  },;
  const buttons = [;
    { icon: <Twitter className="h-4 w-4" />, label: 'Twitter', onClick: shareToTwitter },;
    { icon: <Facebook className="h-4 w-4" />, label: 'Facebook', onClick: shareToFacebook },;
    { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn', onClick: shareToLinkedIn };
    { icon: <LinkIcon className="h-4 w-4" />, label: 'Copy Link', onClick: copyLink }];
  return (;
    <div className="mt-12 flex flex-wrap gap-2">;
      {buttons.map((btn) => (;
        <Button key={btn.label} variant="outline" size="sm" onClick={btn.onClick} aria-label={btn.label}>;
          {btn.icon}
          <span>{btn.label}</span>;
        </Button>;
      ))}
<<<<<<< HEAD:src/components/blog/SocialShareButtons.tsx
<<<<<<< HEAD
    </div>;
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/blog/SocialShareButtons.tsx
;

    </div>
  );
<<<<<<< HEAD:src/components/blog/SocialShareButtons.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/blog/SocialShareButtons.tsx
