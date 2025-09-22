<<<<<<< HEAD:src/components/mobile-app/AppScreenshots.tsx
<<<<<<< HEAD
<<<<<<< HEAD
// These would be replaced with actual screenshots
const mockScreenshots = [
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" },
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" },
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" },
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" },
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }],

export const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null),

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount
        behavior: "smooth"})

<<<<<<< HEAD
<<<<<<< HEAD
import React, { useRef } from "react",
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button",
// These would be replaced with actual screenshots
const mockScreenshots = [
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" },
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" },
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" },
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" },
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }],
=======
=======
if (scrollContainerRef.current) {

      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount
        behavior: "smooth"})
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/AppScreenshots.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
// These would be replaced with actual screenshots;
const mockScreenshots = [;
  { id: 1, alt: "Dashboard screen", src: "/placeholder && placeholder.svg" },;
  { id: 2, alt: "Talent matching screen", src: "/placeholder && placeholder.svg" },;
  { id: 3, alt: "Resume builder screen", src: "/placeholder && placeholder.svg" },;
  { id: 4, alt: "Messaging screen", src: "/placeholder && placeholder.svg" },;
  { id: 5, alt: "Profile screen", src: "/placeholder && placeholder.svg" }],;
export const AppScreenshots: React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right",) => {;
    if (scrollContainerRef && scrollContainerRef.current) {;
      const scrollAmount = 300,;
      scrollContainerRef && scrollContainerRef.current.scrollBy({;
        left: direction === "left" ? -scrollAmount : scrollAmount,;
        behavior: "smooth"});
<<<<<<< HEAD:src/components/mobile-app/AppScreenshots.tsx
=======

      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount
        behavior: "smooth"})

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/AppScreenshots.tsx
    }
  }
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null),

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300,
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"})
    }
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a visual tour through the Zion app's intuitive interface.
          </p>
        </div>
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (

    <section className="py-16 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;

        <div className="relative">;

<<<<<<< HEAD:src/components/mobile-app/AppScreenshots.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/AppScreenshots.tsx
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
<<<<<<< HEAD:src/components/mobile-app/AppScreenshots.tsx
<<<<<<< HEAD
            onClick={() => scroll("left")}
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

            onClick={() => scroll("left")}


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/AppScreenshots.tsx
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

<<<<<<< HEAD
            aria-label="Scroll left";
          >;
            <ChevronLeft className="h-6 w-6" />;
          </Button>;

<<<<<<< HEAD:src/components/mobile-app/AppScreenshots.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/AppScreenshots.tsx
          <div
            ref = {scrollContainerRef,}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>;
            {mockScreenshots && mockScreenshots.map((screenshot,) => (;
              <div
                key = {screenshot && screenshot.id,}
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30">;

                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}

<<<<<<< HEAD
          </div>;




<<<<<<< HEAD:src/components/mobile-app/AppScreenshots.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/AppScreenshots.tsx
          
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {mockScreenshots.map((screenshot) => (
              <div 
                key={screenshot.id} 
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30"
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

<<<<<<< HEAD:src/components/mobile-app/AppScreenshots.tsx
<<<<<<< HEAD
          
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
          


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/AppScreenshots.tsx
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
<<<<<<< HEAD:src/components/mobile-app/AppScreenshots.tsx
<<<<<<< HEAD
            onClick={() => scroll("right")}
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

            onClick={() => scroll("right")}


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/AppScreenshots.tsx
            aria-label="Scroll right"
=======
        

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a visual tour through the Zion app's intuitive interface.
          </p>
        </div>            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
<<<<<<< HEAD:src/components/mobile-app/AppScreenshots.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
},
import React, { useRef } from "react",;
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button",;
// These would be replaced with actual screenshots;
const mockScreenshots = [;
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" },;
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" },;
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" },;
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" },;
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }],;
export const AppScreenshots: React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement>(null),;
  const scroll = (direction: "left" | "right") => {;
    if (scrollContainerRef.current) {;
      const scrollAmount = 300,;
      scrollContainerRef.current.scrollBy({;
        left: direction === "left" ? -scrollAmount : scrollAmount,;
        behavior: "smooth"});
    }
  };
  return (;
    <section className="py-16 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;
        <div className="relative">;
          <Button;
            variant="ghost";
            size="icon";
<<<<<<< HEAD
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white";
            onClick={() => scroll("left")}
            aria-label="Scroll left";
          >;
            <ChevronLeft className="h-6 w-6" />;
          </Button>;
          <div;
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory";
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >;
            {mockScreenshots.map((screenshot) => (;
              <div;
                key={screenshot.id} ;
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30";
              >;
                <img;
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover";
                  loading="lazy";
                />;
              </div>;
            ))}
          </div>;
          <Button;
            variant="ghost";
            size="icon";
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white";
            onClick={() => scroll("right")}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/AppScreenshots.tsx
            aria-label="Scroll right";
=======
          </div>;
          <Button;
            variant="ghost";
            size="icon";            aria-label="Scroll right";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          >;
            <ChevronRight className="h-6 w-6" />;
          </Button>;
        </div>;
      </div>;
    </section>;
  )
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
'"},;

=======
'"},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};

;
}
import React, { useRef } from './react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button  } from '@/components / ui / button';
// These would be replaced with actual screenshots;
const mock_screenshots = [;
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" },
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" },
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" },
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" },
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }],
export const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef < HTMLDivElement>(null);
  const scroll = (direction: "left" | "right", ) =>: any {
    // Check condition
if ( {) {
  $2
}
      const scroll_amount = 300,
      scrollContainerRef.current.scroll_by ({
        left: direction === "left" ? -scroll_amount : scroll_amount,
        behavior: "smooth"});
    }
  }
  return (
    <section className="py - 16 bg - zion - blue-dark">;
      <div className="container mx - auto px-4">;
        <div className="text - center mb-12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb-4">App Screenshots</h2>;
          <p className="text - lg text - gray - 300 max - w-2xl mx-auto">;
            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;
        <div className="relative">;
          <Button;
            variant="ghost";
            size="icon";
            className="absolute left - 0 top - 1/2 -translate - y-1 / 2 z - 10 bg - zion - blue - dark / 70 text-white";
            on_click = {(, ) => scroll ("left"), }
            aria - label="Scroll left";
          >;
            <ChevronLeft className="h - 6 w-6" />;
          </Button>;
          <div;
            ref = {scrollContainerRef, }
            className="flex overflow - x-auto gap - 4 py - 8 px - 4 scrollbar - hide snap - x snap-mandatory";
            style={{ scrollbar_width: "none", msOverflowStyle: "none" }}
          >;
            {mock_screenshots.map ((screenshot, ) => (
              <div;
                key = {screenshot.id, }
                className="flex - shrink - 0 w - 60 h-[500px] snap - center rounded - xl overflow - hidden border - 2 border - zion-purple / 30";
              >;
                <img;
                  src = {screenshot.src, }
                  alt = {screenshot.alt, }
                  className="w - full h - full object-cover";
                  loading="lazy";
                />;
              </div>))}
          </div>;
          <Button;
            variant="ghost";
            size="icon";
            className="absolute right - 0 top - 1/2 -translate - y-1 / 2 z - 10 bg - zion - blue - dark / 70 text-white";
            on_click = {() => scroll ("right"), }
            aria - label="Scroll right";
          >;
            <ChevronRight className="h - 6 w-6" />;
          </Button>;
        </div>;
      </div>;
    </section>);
}
'"},
}

  )
<<<<<<< HEAD:src/components/mobile-app/AppScreenshots.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  )
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/AppScreenshots.tsx
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button";
// These would be replaced with actual screenshots
  );
};
'"
<<<<<<< HEAD:src/components/mobile-app/AppScreenshots.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/AppScreenshots.tsx
