<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>;
      <button
        onClick={toggleSection}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
  { id: 'North America', label: 'North America' },{ id: 'Europe', label: 'Europe' },{ id: 'Asia', label: 'Asia' },{ id: 'South America', label: 'South America' },{ id: 'Australia', label: 'Australia' },{ id: 'Africa', label: 'Africa' }];
export /**;
 * RegionFilter - Function description;
 */;
function RegionFilter() {return (<div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  { id: North America', label: 'North America },{ id: Europe', label: 'Europe },{ id: Asia', label: 'Asia },{ id: South America', label: 'South America },{ id: Australia', label: 'Australia },{ id: Africa', label: 'Africa }];
export /**;
 * RegionFilter - Function description;
 */;
function RegionFilter() {return (<div className=mb - 6 border - b border - zion - blue - light pb - 6'>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <button;
        on_click={toggle_section}
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Region</span>;
        {expanded ? (
          <ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : (
          <ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}
      </button>;

      {expanded && (
        <div className='mt - 4 space - y-2'>;
          {REGION_OPTIONS.map (region => (
            <div key={region.id} className='flex items - center'>              <Checkbox;
                id={`region-${region.id}`}

      </button>;

  { id: "North America", label: "North America" },
  { id: "Europe", label: "Europe" },
  { id: "Asia", label: "Asia" },
  { id: "South America", label: "South America" },
  { id: "Australia", label: "Australia" },

      {expanded && (;
        <div className='mt-4 space-y-2'>;
          {REGION_OPTIONS && REGION_OPTIONS.map(region => (;
            <div key={region && region.id} className='flex items-center'>              <Checkbox
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}
            <div key={region && region.id} className="flex items-center">;
<<<<<<< HEAD

import { ChevronDown, ChevronUp } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox",;
import { RegionFilterProps } from "@/types/filters",;
=======
            <div key={region && region.id} className=flex items-center">;


import { ChevronDown, ChevronUp } from 'lucide-react';
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
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

const REGION_OPTIONS = [;

  { id: "North America", label: "North America" },;
  { id: "Europe", label: "Europe" },;
  { id: "Asia", label: "Asia" },;
  { id: "South America", label: "South America" },;
  { id: "Australia", label: "Australia" },;

  { id: "Africa", label: "Africa" }
],

import { Checkbox } from "@/components/ui/checkbox";
import { RegionFilterProps } from "@/types/filters";
const REGION_OPTIONS = null;
const REGION_OPTIONS = [
<<<<<<< HEAD


=======
<<<<<<< HEAD
            <div key={region && region.id} className="flex items-center">;import { Checkbox  } from '@/components/ui/checkbox';
import { RegionFilterProps  } from '@/types/filters';
import { Checkbox } from "@/components/ui/checkbox",import { RegionFilterProps } from "@/types/filters",const REGION_OPTIONS = [;
  { id: "North America", label: "North America" },{ id: "Europe", label: "Europe" },{ id: "Asia", label: "Asia" },{ id: "South America", label: "South America" },{ id: "Australia", label: "Australia" },{ id: "Africa", label: "Africa" }
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div key={region && region.id} className="flex items-center>;import { Checkbox  } from '@/components/ui/checkbox;
import { RegionFilterProps  } from @/types/filters';
import { Checkbox } from @/components/ui/checkbox",import { RegionFilterProps } from "@/types/filters,const REGION_OPTIONS = [;
  { id: North America", label: "North America },{ id: Europe", label: "Europe },{ id: Asia", label: "Asia },{ id: South America", label: "South America },{ id: Australia", label: "Australia },{ id: Africa", label: "Africa }
>>>>>>> origin/resolved-merge-conflicts
];
export function RegionFilter(): any ({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {return (<div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
        <span>Region</span>;
        {expanded ? (<ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />;const REGION_OPTIONS = null;
const REGION_OPTIONS = [;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  { id: 'North America', label: 'North America' }
  { id: 'Europe', label: 'Europe' }
  { id: 'Asia', label: 'Asia' }
  { id: 'South America', label: 'South America' }
  { id: 'Australia', label: 'Australia' }
  { id: 'Africa', label: 'Africa' }
];
export function RegionFilter() {return (<div className='mb-6 border-b border-zion-blue-light pb-6'>;
      <button;
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >;
        <span>Region</span>;
        {expanded ? (<ChevronUp className='h-4 w-4 text-zion-slate-light' />;
        ) : (<ChevronDown className='h-4 w-4 text-zion-slate-light' />;
        )}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  { id: 'North America', label: 'North America' }
  { id: 'Europe', label: 'Europe' }
  { id: 'Asia', label: 'Asia' }
  { id: 'South America', label: 'South America' }
  { id: 'Australia', label: 'Australia' }
  { id: 'Africa', label: 'Africa' }
<<<<<<< HEAD
=======
  { id: 'North America, label: North America' }
  { id: 'Europe, label: Europe' }
  { id: 'Asia, label: Asia' }
  { id: 'South America, label: South America' }
  { id: 'Australia, label: Australia' }
  { id: 'Africa, label: Africa' }
>>>>>>> origin/resolved-merge-conflicts
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

        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Region</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />

        )}
      </button>
      
      {expanded && (
        <div className="mt-4 space-y-2">
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className="flex items-center">

              <Checkbox
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />;
              <label
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </button>;
      {expanded && (<div className='mt-4 space-y-2'>;
          {REGION_OPTIONS.map(region => (<div key={region.id} className='flex items-center'>;
export function RegionFilter() {return (<div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Region</span>;
        {expanded ? (<ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}<Checkbox;
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />;
              <label;
=======
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />;
              <label
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                htmlFor={`region-${region && region.id}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'>                {region && region.label}                className="ml-2 text-sm text-zion-slate-light cursor-pointer";
               htmlFor="input-;
                {region && region.label}
              ">;
              </label>;
            </div>;

              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}

              <label

                htmlFor={`region-${region.id}`}

<<<<<<< HEAD


=======
<<<<<<< HEAD
                onCheckedChange={() => toggleRegion(region.id)}className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                onCheckedChange={() => toggleRegion(region.id)}className=border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
>>>>>>> origin/resolved-merge-conflicts
              />;
                className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'              />;
              <label;
                htmlFor={`region-${region.id}`}))}
        </div>;
      )}</div>;
  )toggleSection ;
}className="flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />)}</button> {REGION OPTIONS && OPTIONS.map (region => (<divkey= {region && region.id ";
}className="flex items-center"> <Checkbox > {region && region.label ;
}</label> </div>) )}</div>)}</div>)}"}checked={selected_regions.includes (region.id)}
                onCheckedChange={() => toggle_region (region.id)}
            <div key={region.id} className="flex items - center">;
import { Checkbox   } from '@/components / ui / checkbox';
import { RegionFilterProps   } from '@/types / filters';
const REGION_OPTIONS = [;
  { id: "North America", label: "North America" },{ id: "Europe", label: "Europe" },{ id: "Asia", label: "Asia" },{ id: "South America", label: "South America" },{ id: "Australia", label: "Australia" },{ id: "Africa", label: "Africa" }
];
export /**;
 * RegionFilter - Function description;
 */;
function RegionFilter() {return (<div className="mb - 6 border - b border - zion - blue - light pb - 6">;
      <button;
        on_click={toggle_section}
        className="flex w - full items - center justify - between text - white font - medium";
      >;
        <span > Region</span>;
        {expanded ? (<ChevronUp className="h - 4 w - 4 text - zion - slate - light" />) : (<ChevronDown className="h - 4 w - 4 text - zion - slate - light" />)}
      </button>;
<<<<<<< HEAD
      {expanded && (<div className="mt - 4 space - y-2">;
          {REGION_OPTIONS.map (region => (<div key={region.id} className="flex items - center">;
=======
      {expanded && (<div className="mt - 4 space - y-2>;
          {REGION_OPTIONS.map (region => (<div key={region.id} className=flex items - center">;
  { id: "North America, label: North America" },
  { id: "Europe, label: Europe" },
  { id: "Asia, label: Asia" },
  { id: "South America, label: South America" },
  { id: "Australia, label: Australia" },
  { id: "Africa, label: Africa" }
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
const REGION_OPTIONS = [;
  { id: "North America", label: "North America" },;
  { id: "Europe", label: "Europe" },;
  { id: "Asia", label: "Asia" },;
  { id: "South America", label: "South America" },;
  { id: "Australia", label: "Australia" },;
  { id: "Africa", label: "Africa" }
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
];

            <div key={region.id} className="flex items-center">;
              <Checkbox;
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
                className="border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label;

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
<<<<<<< HEAD


=======
<<<<<<< HEAD
  )}className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                htmlFor={`region-${region.id}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )}className='border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple;
>>>>>>> origin/resolved-merge-conflicts
              />;
              <label;
                htmlFor={`region-${region.id}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer';
              >;
=======
                htmlFor={`region-${region.id}`}
                className='ml-2 text-sm text-zion-slate-light cursor-pointer'
              >
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
}"
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}"
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
>>>>>>> origin/resolved-merge-conflicts
    </div>;
  )toggleSection ;
}className="flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />)}</button> {REGION OPTIONS.map (region => (<div key= {region.id ";
}className="flex items-center" > <Checkbox > {region.label ;
}</label> </div>) )}</div>)}</div>)}";
origin/cursor/automate-test-improve-and-merge-code-2533
=======
}"
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
