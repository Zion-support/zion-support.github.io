<<<<<<< HEAD:src_backup/components/talent/filters/SearchFilter.tsx
<<<<<<< HEAD:src_backup/components/talent/filters/SearchFilter.tsx
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/SearchFilter.tsx
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { SearchFilterProps } from '@/types/filters';

<<<<<<< HEAD:src_backup/components/talent/filters/SearchFilter.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/SearchFilter.tsx
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {


  return (
    <div className="mb-6">
      <div className="relative">
        <label htmlFor="talent-search" className="sr-only">
          Search talents
        </label>

        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />

        <Input
          id='talent-search'
          type='text'
          placeholder='Search talents...'
          value={searchTerm}
<<<<<<< HEAD:src_backup/components/talent/filters/SearchFilter.tsx
          onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='talent-search-help'
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light'
        />
        <p id='talent-search-help' className='sr-only'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/SearchFilter.tsx
          Type a name or skill to filter results
        </p>
      </div>
    </div>
<<<<<<< HEAD:src_backup/components/talent/filters/SearchFilter.tsx
        <p id="talent-search-help" className="sr-only">;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/SearchFilter.tsx

          Type a name or skill to filter results;
=======

;
import { Input  } from '@/components/ui/input';
import { SearchIcon  } from 'lucide-react';
import { SearchFilterProps  } from '@/types/filters';
export function SearchFilter() {return (<div className="mb-6">;
      <div className="relative">;
        <label htmlFor="talent-search" className="sr-only">;
          Search talents;
        </label>;
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" aria-hidden="true" />;
        <Input;
          id='talent-search';
          type='text';
          placeholder='Search talents...';
          value={searchTerm}onChange={e => setSearchTerm(e.target.value)}
          aria-describedby='talent-search-help';
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light';
        />;
        <p id='talent-search-help' className='sr-only'>;
          Type a name or skill to filter results;
        </p>;
      </div>;
    </div>;
          onChange={e => setSearchTerm(e && e.target.value)}
          aria-describedby='talent-search-help';
          className='pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light';}import { Input } from "@/components/ui/input",export function SearchFilter() {return (<div className="mb-6">;
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
<<<<<<< HEAD:src_backup/components/talent/filters/SearchFilter.tsx
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";/>;<p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">;<p id="talent-search-help" className="sr-only">;Type a name or skill to filter results;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/talent/filters/SearchFilter.tsx
=======
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light";

        />;

        <p id='talent-search-help' className='sr-only'>          Type a name or skill to filter results        <p id="talent-search-help" className="sr-only">;
          Type a name or skill to filter results;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/SearchFilter.tsx
        </p>;
      </div>;
    </div>;
  )})}import { Input  } from '@/components / ui / input';
import { SearchFilterProps  } from '@/types / filters';
  return (<div className='mb - 6'>;
      <div className='relative'>;
        <label html_for='talent - search' className='sr - only'>;
          Search talents;
        </label>;
        <SearchIcon;
          className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light';
          aria - hidden='true'        <SearchIcon className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" aria - hidden="true" />;
        <Input;
          id="talent - search";
          type="text";
          placeholder="Search talents...";
          value = {search_term }
          on_change = {(e, ) => setSearchTerm (e.target.value) }
          aria - describedby="talent - search - help";
          className="pl - 10 bg - zion - blue border - zion - blue - light text - white placeholder - zion - slate - light";
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
        <p id='talent - search - help' className='sr - only'>          Type a name or skill to filter results        <p id="talent - search - help" className="sr - only">;
          Type a name or skill to filter results;
        </p>;
      </div>;
<<<<<<< HEAD:src_backup/components/talent/filters/SearchFilter.tsx
    </div>);
}
;
<<<<<<< HEAD:src_backup/components/talent/filters/SearchFilter.tsx
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    </div>)})}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/talent/filters/SearchFilter.tsx
=======

  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/SearchFilter.tsx
