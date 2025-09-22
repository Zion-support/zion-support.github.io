:src/components/mobile-app/MobileLaunchHero.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import Link from "next/link",
import { ArrowRight, Smartphone } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { AppStoreButtons } from "./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card";
export const MobileLaunchHero: React.FC;
origin/cursor/automate-test-improve-and-merge-code-2533
export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#", // Replace with actual App Store URL
  const googlePlayUrl = "#", // Replace with actual Google Play URL

  return (
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              The Power of <span className="text-zion-cyan">Zion</span><br />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              In Your Pocket
:src/components/mobile-app/MobileLaunchHero.tsx
            </h1>              message candidates, and get AI-powered matches instantly with our
              message candidates, and get AI-powered matches instantly with our
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
              message candidates, and get AI-powered matches instantly with our;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/MobileLaunchHero.tsx
              mobile app.
            </p>'
            <div className='mb-8'>
              <AppStoreButtons
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
            </div>
:src/components/mobile-app/MobileLaunchHero.tsx
<div className="mb-8">

<<<<<<< HEAD
              <AppStoreButtons
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}              />
            </div>
            <div className='flex flex-wrap gap-4'>
<div className='flex flex-wrap gap-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <Link href='/open-app'>
                <Button'
                  variant='outline''
                  size='lg''
                  className='flex gap-2 border-white text-white hover:bg-white/10'
:src_backup/components/mobile-app/MobileLaunchHero.tsx
                >
                  Open App
                  <ArrowRight size={20} />
                </Button>
              </Link>
<Link href='#features'>
                <Button
                  variant='ghost'
                  size='lg'
                  className='text-white hover:bg-white/10'

import React from "react";
import Link from "next/link";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { ArrowRight, Smartphone } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { AppStoreButtons } from "./AppStoreButtons",
import { Card, CardContent } from "@/components/ui/card",

export const MobileLaunchHero: React.FC = () => {}
  // App store links - these would come from environment variables in production"
  const appStoreUrl = "#", // Replace with actual App Store URL";
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
  return ("
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">"
      <div className="container mx-auto px-4 lg:px-8">"
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">"
          <div className="flex-1 text-white">"
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">"
              The Power of <span className="text-zion-cyan">Zion</span><br />
              In Your Pocket;
            </h1>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src_backup/components/mobile-app/MobileLaunchHero.tsx
                >                  See Features              

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.
            </p>
            "
            <div className="mb-8">
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
            </div>
            "
            <div className="flex flex-wrap gap-4">"
              <Link href="/open-app">"
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">
                  Open App;
                  <ArrowRight size={20} />
                </Button>
              </Link>

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <Link href="#features">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                >
origin/cursor/automate-test-improve-and-merge-code-2533
                  See Features
=======
"
              <Link href="#features">"
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  See Features;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/MobileLaunchHero.tsx
                </Button>
              </Link>
            </div>
          </div>
:src/components/mobile-app/MobileLaunchHero.tsx
<<<<<<< HEAD

:src_backup/components/mobile-app/MobileLaunchHero.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              {/* Phone mockup with glow effect */}"
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>

:src/components/mobile-app/MobileLaunchHero.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

:src_backup/components/mobile-app/MobileLaunchHero.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/MobileLaunchHero.tsx
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">
                <CardContent className="p-0">
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">
                    <Smartphone className="w-40 h-40 text-white opacity-40" />

{/* In production, replace with actual app screenshot */}

<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/MobileLaunchHero.tsx
<div className='flex-1 flex justify-center md:justify-end'>
            <div className='relative'>
              {/* Phone mockup with glow effect */}
              <div className='absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2'></div>
              <Card className='relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3'>
                <CardContent className='p-0'>
                  <div className='w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center'>
                    <Smartphone className='w-40 h-40 text-white opacity-40' />
                    {/* In production, replace with actual app screenshot */}
:src/components/mobile-app/MobileLaunchHero.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

:src_backup/components/mobile-app/MobileLaunchHero.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import Link from 'next/link';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
import Link from "next/link",;
import { ArrowRight, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { AppStoreButtons } from "./AppStoreButtons",;
=======
'
import React from 'react';'
import Link from 'next/link';

"
import React from "react",;"
import Link from "next/link",;'
import { ArrowRight, Smartphone } from 'lucide-react';"
import { Button } from "@/components/ui/button",;"
import { AppStoreButtons } from "./AppStoreButtons",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/MobileLaunchHero.tsx
import { Card, CardContent } from "@/components/ui/card",;
export const MobileLaunchHero: React.FC = () => {;
  // App store links - these would come from environment variables in production;"
  const appStoreUrl = "#", // Replace with actual App Store URL;"
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
  return (;"
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;"
      <div className="container mx-auto px-4 lg:px-8">;"
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;"
          <div className="flex-1 text-white">;"
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;"
              The Power of <span className="text-zion-cyan">Zion</span><br />;
              In Your Pocket;
            </h1>;"
            <p className="text-lg md:text-xl opacity-90 mb-8">;
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.;
            </p>;"
            <div className="mb-8">;
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;"
            <div className="flex flex-wrap gap-4">;"
              <Link href="/open-app">;"
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;
                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;"
              <Link href="#features">;"
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">;
                  See Features;
                </Button>;
              </Link>;
            </div>;
:src_backup/components/mobile-app/MobileLaunchHero.tsx
          </div>;
<<<<<<< HEAD
          <div className="flex-1 flex justify-center md:justify-end">;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;
:src/components/mobile-app/MobileLaunchHero.tsx
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;
=======
}
"  )
}              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <CardContent className="p-0">;
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;
=======
          </div>;"
          <div className="flex-1 flex justify-center md:justify-end">;"
            <div className="relative">;
              {/* Phone mockup with glow effect */}"
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;"
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;"
                <CardContent className="p-0">;"
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/MobileLaunchHero.tsx
                    <Smartphone className="w-40 h-40 text-white opacity-40" />;
                    {/* In production, replace with actual app screenshot */}
                  </div>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
);
};
};

};
:src_backup/components/mobile-app/MobileLaunchHero.tsx

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Smartphone } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { AppStoreButtons } from './AppStoreButtons';
import { Card, CardContent } from '@/components / ui / card';
export const MobileLaunchHero: React.FC = () => {};
  // App store links - these would come from environment variables in production;'
  const appStoreUrl = '#'; // Replace with actual App Store URL;'
  const googlePlayUrl = '#'; // Replace with actual Google Play URL;
  return ('
    <section className='relative bg - gradient - to - r from - zion - blue - dark via - zion - blue to - zion - purple / 40 py - 16 md:py - 24'>;'
      <div className='container mx - auto px - 4 lg:px - 8'>;'
        <div className='flex flex - col md:flex - row items - center gap - 8 md:gap - 16'>;'
          <div className='flex - 1 text - white'>;'
            <h1 className='text - 4xl md:text - 5xl lg:text - 6xl font - bold mb - 4 leading - tight'>;'
              The Power of <span className='text - zion - cyan'>Zion</span>;
              <br />;
              In Your Pocket;
            </h1>;'
            <p className='text - lg md:text - xl opacity - 90 mb - 8'>;
              Find top AI talent or global IT jobs on the go. Track projects,
              message candidates, and get AI - powered matches instantly with our;
              mobile app.;
            </p>;'
            <div className='mb - 8'>;
              <AppStoreButtons                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
:src_backup/components/mobile-app/MobileLaunchHero.tsx
            </div>;
            <div className="mb-8">;
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}              />;
            </div>;'
            <div className='flex flex - wrap gap - 4'>;'
              <Link href='/open - app'>;
                <Button;'
                  variant='outline';'
                  size='lg';'
                  className='flex gap - 2 border - white text - white hover:bg - white / 10';
                >                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
:src_backup/components/mobile-app/MobileLaunchHero.tsx
              </Link>;
            <div className="flex flex - wrap gap-4">;
              <Link href="/open - app">;
                <Button variant="outline" size="lg" className="flex gap - 2 border - white text - white hover:bg-white / 10">;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;'
              <Link href='#features'>;
                <Button;'
                  variant='ghost';'
                  size='lg';'
                  className='text - white hover:bg - white / 10';
:src_backup/components/mobile-app/MobileLaunchHero.tsx
                >                  See Features;
              <Link href="#features">;
                <Button variant="ghost" size="lg" className="text - white hover:bg-white / 10">;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;'
          <div className='flex - 1 flex justify - center md:justify - end'>;'
            <div className='relative'>;
:src_backup/components/mobile-app/MobileLaunchHero.tsx
              {/* Phone mockup with glow effect */}
              <div className='absolute inset - 0 bg - zion - cyan / 20 rounded - 3xl blur - xl transform translate - y-2'></div>;
              <Card className='relative w-[280px] h-[560px] rounded - 3xl overflow - hidden border - 2 border - white / 30 bg - zion - blue - dark shadow - 2xl transform rotate - 3'>;
                <CardContent className='p - 0'>;
                  <div className='w - full h - full bg - gradient - to - br from - zion - blue - dark to - zion - purple / 60 flex items - center justify - center'>;
                    <Smartphone className='w - 40 h - 40 text - white opacity - 40' />                    {/* In production, replace with actual app screenshot */}              <div className="absolute inset - 0 bg - zion - cyan / 20 rounded - 3xl blur - xl transform translate-y-2"></div>;
              <Card className="relative w-[280px] h-[560px] rounded - 3xl overflow - hidden border - 2 border - white / 30 bg - zion - blue - dark shadow - 2xl transform rotate-3">;
                <CardContent className="p-0">;
                  <div className="w - full h - full bg - gradient - to - br from - zion - blue - dark to - zion - purple / 60 flex items - center justify-center">;
                    <Smartphone className="w - 40 h - 40 text - white opacity-40" />;
                  </div>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>);
}"
"  );
:src_backup/components/mobile-app/MobileLaunchHero.tsx
<<<<<<< HEAD:src/components/mobile-app/MobileLaunchHero.tsx
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
);
};
"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}

);
};
"
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/MobileLaunchHero.tsx
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/MobileLaunchHero.tsx
