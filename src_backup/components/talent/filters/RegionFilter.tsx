<<<<<<< HEAD:src/components/talent/filters/RegionFilter.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox",
import { RegionFilterProps } from "@/types/filters",
const REGION_OPTIONS = [
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>;
      <button
        onClick={toggleSection}

        className="flex w-full items-center justify-between text-white font-medium"
      >

        <span>Region</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}

import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from '@/components / ui / checkbox';
import { RegionFilterProps } from '@/types / filters';
const REGION_OPTIONS = [;
  { id: 'North America', label: 'North America' },
  { id: 'Europe', label: 'Europe' },
  { id: 'Asia', label: 'Asia' },
  { id: 'South America', label: 'South America' },
  { id: 'Australia', label: 'Australia' },
  { id: 'Africa', label: 'Africa' },
];
export /**
 * RegionFilter - Function description
 */
function RegionFilter() {
  return (
    <div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
      <button;
        on_click={toggle_section}
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Region</span>;
        {expanded ? (
          <ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : (
          <ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}
      </button>;

<<<<<<< HEAD
      

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      {expanded && (
        <div className='mt - 4 space - y-2'>;
          {REGION_OPTIONS.map (region => (
            <div key={region.id} className='flex items - center'>              <Checkbox;
                id={`region-${region.id}`}

      </button>;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

      {expanded && (;
        <div className='mt-4 space-y-2'>;
          {REGION_OPTIONS && REGION_OPTIONS.map(region => (;
            <div key={region && region.id} className='flex items-center'>              <Checkbox
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}
            <div key={region && region.id} className="flex items-center">;

import { ChevronDown, ChevronUp } from 'lucide-react';
<<<<<<< HEAD
import { Checkbox } from "@/components/ui/checkbox";
import { RegionFilterProps } from "@/types/filters";const REGION_OPTIONS = [;
=======
=======
import { Checkbox } from "@/components/ui/checkbox",;
import { RegionFilterProps } from "@/types/filters",;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/filters/RegionFilter.tsx

const REGION_OPTIONS = [;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  { id: "North America", label: "North America" },;
  { id: "Europe", label: "Europe" },;
  { id: "Asia", label: "Asia" },;
  { id: "South America", label: "South America" },;
  { id: "Australia", label: "Australia" },;

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  { id: "Africa", label: "Africa" }
],

<<<<<<< HEAD:src/components/talent/filters/RegionFilter.tsx
<<<<<<< HEAD
export function RegionFilter(): any ({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {;
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button
        onClick={toggleSection}
<<<<<<< HEAD
<<<<<<< HEAD
=======
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Region</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/filters/RegionFilter.tsx
import { Checkbox } from "@/components/ui/checkbox";
import { RegionFilterProps } from "@/types/filters";
const REGION_OPTIONS = null;
const REGION_OPTIONS = [
  { id: 'North America', label: 'North America' }
  { id: 'Europe', label: 'Europe' }
  { id: 'Asia', label: 'Asia' }
  { id: 'South America', label: 'South America' }
  { id: 'Australia', label: 'Australia' }
  { id: 'Africa', label: 'Africa' }
]
export function RegionFilter({
  selectedRegions
  toggleRegion
  expanded
  toggleSection
  isMobileFilterOpen
}: RegionFilterProps) {
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >
        <span>Region</span>
        {expanded ? (
          <ChevronUp className='h-4 w-4 text-zion-slate-light' />
        ) : (
          <ChevronDown className='h-4 w-4 text-zion-slate-light' />
        )}
      </button>
      {expanded && (
        <div className='mt-4 space-y-2'>
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className='flex items-center'>
origin/cursor/automate-test-improve-and-merge-code-2533
export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Region</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
<<<<<<< HEAD:src/components/talent/filters/RegionFilter.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/filters/RegionFilter.tsx
        )}
      </button>
      
      {expanded && (
        <div className="mt-4 space-y-2">
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className="flex items-center">
=======
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Region</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;        )}
=======
        )}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

              <Checkbox
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />;
              <label
                htmlFor={`region-${region && region.id}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'>                {region && region.label}                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
               htmlFor="input-;
                {region && region.label}
              ">;
              </label>;
            </div>;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
<<<<<<< HEAD:src/components/talent/filters/RegionFilter.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple"
<<<<<<< HEAD
              />
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/filters/RegionFilter.tsx
              <label
=======
              />              <label
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                htmlFor={`region-${region.id}`}
<<<<<<< HEAD
                className="ml-2 text-sm text-zion-slate-light cursor-pointer"
              >
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox",;
import { RegionFilterProps } from "@/types/filters",;
=======

          ))}
        </div>
      )}

    </div>;
  );

  toggleSection ;
}className="flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) ;
}</button> {;
  REGION OPTIONS && OPTIONS.map (region => (<divkey= {
  region && region.id "
}className="flex items-center"> <Checkbox > {;
  region && region.label ;
}</label> </div>) ) ;
}</div>) ;
}</div>) ;
}"}

                checked={selected_regions.includes (region.id)}
                onCheckedChange={() => toggle_region (region.id)}
            <div key={region.id} className="flex items-center">;
import { Checkbox  } from '@/components / ui / checkbox';
import { RegionFilterProps  } from '@/types / filters';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const REGION_OPTIONS = [;
  { id: "North America", label: "North America" },;
  { id: "Europe", label: "Europe" },;
  { id: "Asia", label: "Asia" },;
  { id: "South America", label: "South America" },;
  { id: "Australia", label: "Australia" },;
  { id: "Africa", label: "Africa" }
];
<<<<<<< HEAD
export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {;
  return (;
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Region</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      {expanded && (;
        <div className="mt-4 space-y-2">;
          {REGION_OPTIONS.map(region => (;
=======
export /**
 * RegionFilter - Function description
 */
function RegionFilter() {
  return (
    <div className="mb - 6 border - b border - zion - blue - light pb-6">;
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font-medium";
      >;
        <span > Region</span>;
        {expanded ? (
          <ChevronUp className="h - 4 w - 4 text - zion - slate-light" />) : (
          <ChevronDown className="h - 4 w - 4 text - zion - slate-light" />)}
      </button>;
      {expanded && (
        <div className="mt - 4 space-y-2">;
          {REGION_OPTIONS.map (region => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <div key={region.id} className="flex items-center">;
              <Checkbox;
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label;
<<<<<<< HEAD
                htmlFor={`region-${region.id}`}
=======
                html_for={`region-${region.id}`}
                className='ml - 2 text - sm text - zion - slate - light cursor - pointer';
              >                {region.label}                className="ml - 2 text - sm text - zion - slate - light cursor-pointer";
              html_for="input-;
                {region.label}
              ">;
              </label>;
            </div>))}
        </div>)}
    </div>);
  toggle_section;
}className="flex w - full items - center justify - between text - white font-medium" > <span > Region</span>) : (<ChevronDown className="h - 4 w - 4 text - zion - slate-light" />);
}</button> {
  REGION OPTIONS.map (region => (<div key= {
  region.id ";
}className="flex items-center" > <Checkbox > {
  region.label;
}</label> </div>) );
}</div>);
}</div>);
}"}

  region.label 
}</label> </div>) ) 
}</div>) ;
}</div>) ;
}"};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
              >;
                {region.label}
              </label>;
            </div>;
          ))}
        </div>;
      )}
    </div>;
  );
}
;
className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'
              />
              <label
                htmlFor={`region-${region.id}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >
                {region.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
toggleSection ;
}className="flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />) ;
}</button> {;
  REGION OPTIONS.map (region => (<div key= {;
  region.id ";
}className="flex items-center" > <Checkbox > {;
  region.label ;
}</label> </div>) ) ;
}</div>) ;
}</div>) ;
}"
origin/cursor/automate-test-improve-and-merge-code-2533
