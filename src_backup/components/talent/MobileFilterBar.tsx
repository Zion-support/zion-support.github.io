<<<<<<< HEAD:src_backup/components/talent/MobileFilterBar.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button",
import { Search, Sliders } from 'lucide-react'
import { Input } from "@/components/ui/input",
interface MobileFilterBarProps {
  searchTerm: string,
  setSearchTerm: (value: string) => void,
  setIsMobileFilterOpen: (isOpen: boolean) => void
=======
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Sliders } from 'lucide-react';
import { Input } from '@/components/ui/input';

import React from "react",
import { Button } from "@/components/ui/button";
import { Search, Sliders } from 'lucide-react'
import { Input } from "@/components/ui/input";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface MobileFilterBarProps {
=======
interface MobileFilterBarProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/MobileFilterBar.tsx
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
}

<<<<<<< HEAD:src_backup/components/talent/MobileFilterBar.tsx
export function MobileFilterBar({ 
<<<<<<< HEAD
  searchTerm,
  setSearchTerm, 
=======
  searchTerm;
  setSearchTerm;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
=======
export function MobileFilterBar({}
  searchTerm,
  setSearchTerm, ;
  setIsMobileFilterOpen;
}: MobileFilterBarProps) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/MobileFilterBar.tsx
  return (
    <div className='lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4'>
      <Button;
        onClick={() => setIsMobileFilterOpen(true)}
<<<<<<< HEAD



          Search talents;
        </label>'
        <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate' />'
        variant='outline';'
        className='w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light'      >;'
        <Sliders className='h-4 w-4' />;
        Filter Talents;
      </Button>;
'
      <div className='relative mt-4'>;'
        <label htmlFor='mobile-talent-search' className='sr-only'>;
          Search talents;
        </label>;'
        <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate' />;
        <Input;
          Search by name or skill;
        </p>
      </div>
    </div>;
  );
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

<<<<<<< HEAD:src_backup/components/talent/MobileFilterBar.tsx
export function MobileFilterBar({ 
  searchTerm,
  setSearchTerm, 
  setIsMobileFilterOpen 
}: MobileFilterBarProps) {
  return (
    <div className="lg:hidden mb-4 sticky top-0 z-20 bg-zion-blue pt-2 pb-4">
      <Button 
        onClick={() => setIsMobileFilterOpen(true)} 
        variant="outline"
        className="w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light"
      >
        <Sliders className="h-4 w-4" />
        Filter Talents
      </Button>
      
      <div className="relative mt-4">
        <label htmlFor="mobile-talent-search" className="sr-only">
          Search talents
        </label>
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
          id="mobile-talent-search"
=======
          id="mobile-talent-search""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/MobileFilterBar.tsx
          placeholder="Search talents..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}"
          aria-describedby="mobile-talent-search-help""
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate"
        />"
        <p id="mobile-talent-search-help" className="sr-only">



<<<<<<< HEAD:src_backup/components/talent/MobileFilterBar.tsx
=======
        variant='outline'
        className='w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light'      >
        <Sliders className='h-4 w-4' />
        Filter Talents
      </Button>
      <div className='relative mt-4'>
        <label htmlFor='mobile-talent-search' className='sr-only'>
          Search talents
        </label>
        <Search className='absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate' />
        <Input
          id='mobile-talent-search'
          placeholder='Search talents...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='mobile-talent-search-help'
          className='pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate'        />
        <p id='mobile-talent-search-help' className='sr-only'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          Search by name or skill
=======
          Search by name or skill;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/MobileFilterBar.tsx
        </p>
      </div>
    </div>
<<<<<<< HEAD
  )
<<<<<<< HEAD
=======

          onChange={e => setSearchTerm(e && e.target.value)}'
          aria-describedby='mobile-talent-search-help';'
          className='pl-8 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate'        />;'
        <p id='mobile-talent-search-help' className='sr-only'>;

<<<<<<< HEAD:src_backup/components/talent/MobileFilterBar.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Search, Sliders } from 'lucide-react';
=======
"
import React from "react",;"
import { Button } from "@/components/ui/button",;'
import { Search, Sliders } from 'lucide-react';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/MobileFilterBar.tsx
import { Input } from "@/components/ui/input",;
interface MobileFilterBarProps {;
  searchTerm: string,;
  setSearchTerm: (value: string) => void,;
  setIsMobileFilterOpen: (isOpen: boolean) => void;
}
;
export function MobileFilterBar() { return null; }
        onClick={() => setIsMobileFilterOpen(true)} ;"
        variant="outline";"
        className="w-full flex items-center justify-center gap-2 border-zion-blue-light text-zion-slate-light";
      >;"
        <Sliders className="h-4 w-4" />;
        Filter Talents;
      </Button>;"
      <div className="relative mt-4">;"
        <label htmlFor="mobile-talent-search" className="sr-only">;
          Search talents;
        </label>;"
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />;
        <Input;"
          id="mobile-talent-search";"
          placeholder="Search talents...";
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}"
          aria-describedby="mobile-talent-search-help";"
          className="pl-8 bg-zion-blue border-zion-blue-light text-white placeholder: text-zion-slate";
        />;"
        <p id="mobile-talent-search-help" className="sr-only">;
          Search by name or skill;
        </p>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
=======

'
import React from 'react';'
import { Button } from '@/components / ui / button';'
import { Search, Sliders } from 'lucide-react';'
import { Input } from '@/components / ui / input';
interface MobileFilterBarProps {}
  search_term: string;
  setSearchTerm: (value: string) => void;
  setIsMobileFilterOpen: (is_open: boolean) => void;
export /**;
 * MobileFilterBar - Function description;
 */
function MobileFilterBar() {}
  return ('
    <div className='lg:hidden mb - 4 sticky top - 0 z - 20 bg - zion - blue pt - 2 pb - 4'>;
      <Button;
        on_click={() => setIsMobileFilterOpen (true)}'
        variant='outline';'
        className='w - full flex items - center justify - center gap - 2 border - zion - blue - light text - zion - slate - light'      >;'
        <Sliders className='h - 4 w - 4' />;
        Filter Talents;
      </Button>;'
      <div className='relative mt - 4'>;'
        <label html_for='mobile - talent - search' className='sr - only'>;
          Search talents;
        </label>;'
        <Search className='absolute left - 2 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate' />;
        <Input;'
          id='mobile - talent - search';'
          placeholder='Search talents...';
          value={search_term}
          on_change={e => setSearchTerm (e.target.value)}'
          aria - describedby='mobile - talent - search - help';'
          className='pl - 8 bg - zion - blue border - zion - blue - light text - white placeholder:text - zion - slate'        />;'
        <p id='mobile - talent - search - help' className='sr - only'>;
          Search by name or skill;
        </p>;
      </div>;
    </div>);
}
<<<<<<< HEAD:src_backup/components/talent/MobileFilterBar.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/MobileFilterBar.tsx
