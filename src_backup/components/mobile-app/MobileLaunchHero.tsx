<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx
<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx
import { Button } from "@/components/ui/button",
import { AppStoreButtons } from "./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card";
export const MobileLaunchHero: React.FC;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
import { ArrowRight, Smartphone } from 'lucide-react'

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/MobileLaunchHero.tsx
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
<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/MobileLaunchHero.tsx
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


<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/MobileLaunchHero.tsx
              message candidates, and get AI-powered matches instantly with our
              mobile app.
            </p>
            <div className='mb-8'>
              <AppStoreButtons
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
            </div>
<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx


              <AppStoreButtons 



=======
            <div className="mb-8">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/MobileLaunchHero.tsx
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}              />
            </div>
            <div className='flex flex-wrap gap-4'>
<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx
<div className='flex flex-wrap gap-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======

<div className='flex flex-wrap gap-4'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/MobileLaunchHero.tsx
              <Link href='/open-app'>
                <Button
                  variant='outline'
                  size='lg'
                  className='flex gap-2 border-white text-white hover:bg-white/10'
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



<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/MobileLaunchHero.tsx
            
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.
            </p>
            
            <div className="mb-8">
              <AppStoreButtons 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/open-app">
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">
                  Open App
                  <ArrowRight size={20} />
                </Button>
              </Link>
              




              <Link href="#features">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx
                >
origin/cursor/automate-test-improve-and-merge-code-2533
=======

                >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/MobileLaunchHero.tsx
                  See Features
                </Button>
              </Link>
            </div>
          </div>
<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>
              




=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/MobileLaunchHero.tsx
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">
                <CardContent className="p-0">
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">
                    <Smartphone className="w-40 h-40 text-white opacity-40" />
<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx

                    {/* In production, replace with actual app screenshot */}


<div className='flex-1 flex justify-center md:justify-end'>
            <div className='relative'>
              {/* Phone mockup with glow effect */}
              <div className='absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2'></div>
              <Card className='relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3'>
                <CardContent className='p-0'>
                  <div className='w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center'>
                    <Smartphone className='w-40 h-40 text-white opacity-40' />
                    {/* In production, replace with actual app screenshot */}
origin/cursor/automate-test-improve-and-merge-code-2533
=======


                    {/* In production, replace with actual app screenshot */}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/MobileLaunchHero.tsx
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx


import React from 'react';
import Link from 'next/link';


import React from "react",;
import Link from "next/link",;
import { ArrowRight, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { AppStoreButtons } from "./AppStoreButtons",;
import { Card, CardContent } from "@/components/ui/card",;
export const MobileLaunchHero: React.FC = () => {;
  // App store links - these would come from environment variables in production;
=======

;
import { ArrowRight, Smartphone  } from 'lucide-react';
import { Button } from "@/components/ui/button",import { AppStoreButtons  } from './AppStoreButtons';
import { Card, CardContent  } from '@/components/ui/card';
export const MobileLaunchHero: React.FC;export const MobileLaunchHero: React.FC = () => {// App store links - these would come from environment variables in production;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/mobile-app/MobileLaunchHero.tsx
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
<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx
          </div>;
          <div className="flex-1 flex justify-center md:justify-end">;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;

=======
  )

}
"  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/MobileLaunchHero.tsx
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;
=======
          </div>;<div className="flex-1 flex justify-center md:justify-end">;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;<Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/mobile-app/MobileLaunchHero.tsx
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
  )}}import Link from 'next / link';
import { Button  } from '@/components / ui / button';
import { Card, CardContent  } from '@/components / ui / card';
export const MobileLaunchHero: React.FC = () => {// App store links - these would come from environment variables in production;
  const appStoreUrl = '#'; // Replace with actual App Store URL;
  const googlePlayUrl = '#'; // Replace with actual Google Play URL;
  return (<section className='relative bg - gradient - to - r from - zion - blue - dark via - zion - blue to - zion - purple / 40 py - 16 md:py - 24'>;
      <div className='container mx - auto px - 4 lg:px - 8'>;
        <div className='flex flex - col md:flex - row items - center gap - 8 md:gap - 16'>;
          <div className='flex - 1 text - white'>;
            <h1 className='text - 4xl md:text - 5xl lg:text - 6xl font - bold mb - 4 leading - tight'>;
              The Power of <span className='text - zion - cyan'>Zion</span>;
              <br />;
              In Your Pocket;
            </h1>;
            <p className='text - lg md:text - xl opacity - 90 mb - 8'>;
              Find top AI talent or global IT jobs on the go. Track projects,message candidates, and get AI - powered matches instantly with our;
              mobile app.;
            </p>;
            <div className='mb - 8'>;
              <AppStoreButtons                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
            <div className="mb - 8">;
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}              />;
            </div>;
            <div className='flex flex - wrap gap - 4'>;
              <Link href='/open - app'>;
                <Button;
                  variant='outline';
                  size='lg';
                  className='flex gap - 2 border - white text - white hover:bg - white / 10';
                >                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;
            <div className="flex flex - wrap gap - 4">;
              <Link href="/open - app">;
                <Button variant="outline" size="lg" className="flex gap - 2 border - white text - white hover:bg - white / 10">;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;
              <Link href='#features'>;
                <Button;
                  variant='ghost';
                  size='lg';
                  className='text - white hover:bg - white / 10';
                >                  See Features;
              <Link href="#features">;
                <Button variant="ghost" size="lg" className="text - white hover:bg - white / 10">;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;
          <div className='flex - 1 flex justify - center md:justify - end'>;
            <div className='relative'>;
              {/* Phone mockup with glow effect */}
              <div className='absolute inset - 0 bg - zion - cyan / 20 rounded - 3xl blur - xl transform translate - y-2'></div>;
              <Card className='relative w-[280px] h-[560px] rounded - 3xl overflow - hidden border - 2 border - white / 30 bg - zion - blue - dark shadow - 2xl transform rotate - 3'>;
                <CardContent className='p - 0'>;
                  <div className='w - full h - full bg - gradient - to - br from - zion - blue - dark to - zion - purple / 60 flex items - center justify - center'>;
                    <Smartphone className='w - 40 h - 40 text - white opacity - 40' />                    {/* In production, replace with actual app screenshot */}              <div className="absolute inset - 0 bg - zion - cyan / 20 rounded - 3xl blur - xl transform translate - y-2"></div>;
              <Card className="relative w-[280px] h-[560px] rounded - 3xl overflow - hidden border - 2 border - white / 30 bg - zion - blue - dark shadow - 2xl transform rotate - 3">;
                <CardContent className="p - 0">;
                  <div className="w - full h - full bg - gradient - to - br from - zion - blue - dark to - zion - purple / 60 flex items - center justify - center">;
                    <Smartphone className="w - 40 h - 40 text - white opacity - 40" />;
                  </div>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx
    </section>);
}
"  );
<<<<<<< HEAD:src_backup/components/mobile-app/MobileLaunchHero.tsx
}

);
};
"
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    </section>)}
"  )})}";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/mobile-app/MobileLaunchHero.tsx
=======

}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/MobileLaunchHero.tsx
