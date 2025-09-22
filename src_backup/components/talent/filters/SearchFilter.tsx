<<<<<<< HEAD:src/components/talent/filters/SearchFilter.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import { Input } from "@/components/ui/input",
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters",
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/filters/SearchFilter.tsx
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { SearchFilterProps } from '@/types/filters';

<<<<<<< HEAD:src/components/talent/filters/SearchFilter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/filters/SearchFilter.tsx
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <div className="mb-6">
      <div className="relative">
        <label htmlFor="talent-search" className="sr-only">
          Search talents
        </label>
<<<<<<< HEAD
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />
        <Input
          id="talent-search"
          type="text"
          placeholder="Search talents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby="talent-search-help"
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
        />
        <p id="talent-search-help" className="sr-only">
=======

        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />

        <Input
          id='talent-search'
          type='text'
          placeholder='Search talents...'
          value={searchTerm}
<<<<<<< HEAD:src/components/talent/filters/SearchFilter.tsx
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/filters/SearchFilter.tsx
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='talent-search-help'
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light'
        />
        <p id='talent-search-help' className='sr-only'>
<<<<<<< HEAD:src/components/talent/filters/SearchFilter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/filters/SearchFilter.tsx
          Type a name or skill to filter results
        </p>
      </div>
    </div>
<<<<<<< HEAD:src/components/talent/filters/SearchFilter.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

          onChange={e => setSearchTerm(e && e.target.value)}
          aria-describedby='talent-search-help';
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light'
};
;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Input } from "@/components/ui/input",;
import { SearchIcon } from 'lucide-react';
import { SearchFilterProps } from "@/types/filters";
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {;
  return (;
    <div className="mb-6">;
      <div className="relative">;
        <label htmlFor="talent-search" className="sr-only">;
          Search talents;
        </label>;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />;
        <Input;
          id="talent-search";
          type="text";
          placeholder="Search talents...";
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby="talent-search-help";
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";
        />;
<<<<<<< HEAD
        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">;          Type a name or skill to filter results;
=======
=======
        <p id="talent-search-help" className="sr-only">;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/filters/SearchFilter.tsx

          Type a name or skill to filter results;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        </p>;
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
=======

  );
}

import { Input } from '@/components / ui / input';
import { SearchIcon } from 'lucide-react';
import { SearchFilterProps } from '@/types / filters';
  return (
    <div className='mb - 6'>;
      <div className='relative'>;
        <label html_for='talent - search' className='sr - only'>;
          Search talents;
        </label>;
        <SearchIcon;
          className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light';
          aria - hidden='true'        <SearchIcon className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate-light" aria - hidden="true" />;
        <Input;
          id="talent - search";
          type="text";
          placeholder="Search talents...";
          value = {search_term, }
          on_change = {(e, ) => setSearchTerm (e.target.value), }
          aria - describedby="talent - search - help";
          className="pl - 10 bg - zion - blue border - zion - blue - light text - white placeholder - zion - slate-light";
        />;
        <Input;
          id='talent - search';
          type='text';
          placeholder='Search talents...';
          value={search_term}
          on_change={e => setSearchTerm (e.target.value)}
          aria - describedby='talent - search - help';
          className='pl - 10 bg - zion - blue border - zion - blue - light text - white placeholder - zion - slate - light';
        />;
        <p id='talent - search - help' className='sr - only'>          Type a name or skill to filter results        <p id="talent - search - help" className="sr-only">;
          Type a name or skill to filter results;
        </p>;
      </div>;
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
;
  );
}
<<<<<<< HEAD:src/components/talent/filters/SearchFilter.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/filters/SearchFilter.tsx
