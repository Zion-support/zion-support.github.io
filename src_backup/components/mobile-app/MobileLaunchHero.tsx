<<<<<<< HEAD

=======
<<<<<<< HEAD
import { ArrowRight, Smartphone } from 'lucide-react'
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { ArrowRight, Smartphone } from 'lucide-react
>>>>>>> origin/resolved-merge-conflicts

<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/components/mobile-app/MobileLaunchHero.tsx
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Smartphone } from 'lucide-react'

<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { AppStoreButtons } from "./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card";
=======
import { Button } from "@/components/ui/button,
import { AppStoreButtons } from ./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card;
=======
import { Button } from "@/components/ui/button",
import { AppStoreButtons } from "./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

              In Your Pocket


return (
    <section className='relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>
          <div className='flex-1 text-white'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>
              The Power of <span className='text-zion-cyan'>Zion</span>
              <br />
              In Your Pocket
            </h1>


              Find top AI talent or global IT jobs on the go. Track projects,

            <p className='text-lg md:text-xl opacity-90 mb-8'>
              Find top AI talent or global IT jobs on the go. Track projects

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

              message candidates, and get AI-powered matches instantly with our

              mobile app.
            </p>'
            <div className='mb-8'>
              <AppStoreButtons
                appStoreUrl={appStoreUrl}
<<<<<<< HEAD


=======
<<<<<<< HEAD
            <div className="mb-8">
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className=mb-8">
>>>>>>> origin/resolved-merge-conflicts
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}              />
            </div>
            <div className='flex flex-wrap gap-4'>
<div className='flex flex-wrap gap-4'>
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD
<div className='flex flex-wrap gap-4'>
=======
<div className=flex flex-wrap gap-4>
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
:src/components/mobile-app/MobileLaunchHero.tsx
                googlePlayUrl={googlePlayUrl}              />
            </div>
            <div className='flex flex-wrap gap-4'>
              <Link href='/open-app'>
                <Button
                  variant='outline'
                  size='lg'
                  className='flex gap-2 border-white text-white hover:bg-white/10'
                >                  Open App
                  <ArrowRight size={20} />
                </Button>
              </Link>
            <div className="flex flex-wrap gap-4">
              <Link href="/open-app">
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href='#features'>
                <Button
                  variant='ghost'
                  size='lg'
                  className='text-white hover:bg-white/10'
<<<<<<< HEAD
=======
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
              In Your Pocket
            </h1>

                >                  See Features              
            
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.
            </p>
            
            <div className="mb-8">
              <AppStoreButtons 
                appStoreUrl={appStoreUrl}
>>>>>>> merged-prs-20250907-203621
                >                  See Features
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
                googlePlayUrl={googlePlayUrl}
              />
            </div>

<<<<<<< HEAD


=======
<<<<<<< HEAD
              <Link href="#features">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <Link href="#features">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <Link href=#features">
                <Button variant="ghost size=lg" className="text-white hover:bg-white/10>
>>>>>>> origin/resolved-merge-conflicts

                >
=======
              <Link href="#features">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                >
origin/cursor/automate-test-improve-and-merge-code-2533
                  See Features

                </Button>
              </Link>
            </div>
          </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>
              
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <div className="flex-1 flex justify-center md:justify-end">

            <div className="relative">
              {/* Phone mockup with glow effect */}"
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>
=======
<<<<<<< HEAD
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <div className=absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2></div>
>>>>>>> origin/resolved-merge-conflicts


<<<<<<< HEAD
=======


<<<<<<< HEAD
<div className='flex-1 flex justify-center md:justify-end'>
=======
<div className=flex-1 flex justify-center md:justify-end>
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<div className='flex-1 flex justify-center md:justify-end'>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <div className='relative'>
              {/* Phone mockup with glow effect */}
              <div className='absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2'></div>
              <Card className='relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3'>
                <CardContent className='p-0'>
                  <div className='w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center'>
<<<<<<< HEAD




=======
<<<<<<< HEAD
:src/components/mobile-app/MobileLaunchHero.tsx
                    <Smartphone className='w-40 h-40 text-white opacity-40' />                    {/* In production, replace with actual app screenshot */}              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">
                <CardContent className="p-0">
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">
                    <Smartphone className="w-40 h-40 text-white opacity-40" />
<<<<<<< HEAD
=======


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <Smartphone className='w-40 h-40 text-white opacity-40' />
                    {/* In production, replace with actual app screenshot */}

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

<<<<<<< HEAD


=======
<<<<<<< HEAD
;
import { ArrowRight, Smartphone  } from 'lucide-react';
import { Button } from "@/components/ui/button",import { AppStoreButtons  } from './AppStoreButtons';
import { Card, CardContent  } from '@/components/ui/card';
export const MobileLaunchHero: React.FC;export const MobileLaunchHero: React.FC = () => {// App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
  return (<section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;
      <div className="container mx-auto px-4 lg:px-8">;
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;
          <div className="flex-1 text-white">;
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;
              The Power of <span className="text-zion-cyan">Zion</span><br />;
              In Your Pocket;
            </h1>;
return (<section className='relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24'>;
      <div className='container mx-auto px-4 lg:px-8'>;
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>;
          <div className='flex-1 text-white'>;
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight'>;
              The Power of <span className='text-zion-cyan'>Zion</span>;
              <br />;
              In Your Pocket;
            </h1>;
              Find top AI talent or global IT jobs on the go. Track projects,message candidates, and get AI-powered matches instantly with our;
              mobile app.;
            </p>;
            <div className='mb-8'>;
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
            <div className="mb-8">;
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}              />;
            </div>;
            <div className='flex flex-wrap gap-4'>;
<div className='flex flex-wrap gap-4'>;
              <Link href='/open-app'>;
                <Button;
                  variant='outline';
                  size='lg';
                  className='flex gap-2 border-white text-white hover:bg-white/10';
                >;
                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;
<Link href='#features'>;
                <Button;
                  variant='ghost';
                  size='lg';
                  className='text-white hover:bg-white/10';
import React from 'react';
import Link from 'next/link';
import { Button  } from '@/components/ui/button';
export const MobileLaunchHero: React.FC = () => {// App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
  return (<section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;
      <div className="container mx-auto px-4 lg:px-8">;
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;
          <div className="flex-1 text-white">;
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;
              The Power of <span className="text-zion-cyan">Zion</span><br />;
              In Your Pocket;
            </h1>;
                >                  See Features;
            <p className="text-lg md:text-xl opacity-90 mb-8">;
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.;
            </p>;
            <div className="mb-8">;
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
            <div className="flex flex-wrap gap-4">;
              <Link href="/open-app">;
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;
                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;
              <Link href="#features">;
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">;
                >;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;
          <div className="flex-1 flex justify-center md:justify-end">;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;
                <CardContent className="p-0">;
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;
                    <Smartphone className="w-40 h-40 text-white opacity-40" />;
                    {/* In production, replace with actual app screenshot */}<div className='flex-1 flex justify-center md:justify-end'>;
            <div className='relative'>;
              {/* Phone mockup with glow effect */}
              <div className='absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2'></div>;
              <Card className='relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3'>;
                <CardContent className='p-0'>;
                  <div className='w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center'>;
                    <Smartphone className='w-40 h-40 text-white opacity-40' />;
                    {/* In production, replace with actual app screenshot */}</div>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  )}
"  )}import React from "react",import Link from "next/link",import { AppStoreButtons } from "./AppStoreButtons",import { Card, CardContent } from "@/components/ui/card",export const MobileLaunchHero: React.FC = () => {// App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
  return (<section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;
      <div className="container mx-auto px-4 lg:px-8">;
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;
          <div className="flex-1 text-white">;
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;
              The Power of <span className="text-zion-cyan">Zion</span><br />;
              In Your Pocket;
            </h1>;
            <p className="text-lg md:text-xl opacity-90 mb-8">;
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.;
            </p>;
            <div className="mb-8">;
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
            <div className="flex flex-wrap gap-4">;
              <Link href="/open-app">;
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;
                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;
              <Link href="#features">;
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;
          <div className="flex-1 flex justify-center md:justify-end">;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;

>>>>>>> merged-prs-20250907-203621
:src/components/mobile-app/MobileLaunchHero.tsx
  )
}
"  )
}
<<<<<<< HEAD
=======
          </div>;<div className="flex-1 flex justify-center md:justify-end">;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
<<<<<<< HEAD
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;<Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;

import React from 'react';
import Link from 'next/link';
=======
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;<Card className=relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3>;
>>>>>>> merged-prs-20250907-203621

=======
import React from 'react';
import Link from 'next/link';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from "react",;
import Link from "next/link",;
import { ArrowRight, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { AppStoreButtons } from "./AppStoreButtons",;

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

          <div className="flex-1 flex justify-center md:justify-end">;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;

              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;

                <CardContent className="p-0">;
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;

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

};

};

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
<<<<<<< HEAD

=======
<<<<<<< HEAD
            </h1>;'
            <p className='text - lg md:text - xl opacity - 90 mb - 8'>;
=======
<<<<<<< HEAD
            </h1>;
            <p className=text - lg md:text - xl opacity - 90 mb - 8'>;
>>>>>>> origin/resolved-merge-conflicts
              Find top AI talent or global IT jobs on the go. Track projects,message candidates, and get AI - powered matches instantly with our;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </h1>;'
            <p className='text - lg md:text - xl opacity - 90 mb - 8'>;
              Find top AI talent or global IT jobs on the go. Track projects,
              message candidates, and get AI - powered matches instantly with our;
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
              mobile app.;
            </p>;'
            <div className='mb - 8'>;
              <AppStoreButtons                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;

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

                  <ArrowRight size={20} />;
                </Button>;
              </Link>;'
              <Link href='#features'>;
                <Button;'
                  variant='ghost';'
                  size='lg';'
                  className='text - white hover:bg - white / 10';

                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;'
          <div className='flex - 1 flex justify - center md:justify - end'>;'
            <div className='relative'>;

                  </div>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>);
}"
<<<<<<< HEAD


=======
<<<<<<< HEAD
"  );
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
"  );
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
>>>>>>> origin/resolved-merge-conflicts
    </section>)}
"  )})}";

}
=======
"  );
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
