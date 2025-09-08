


        className="flex w-full items-center justify-between text-white font-medium
      >

        <span>Region</span>
        {expanded ? (
          <ChevronUp className=h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light />
        )}

import { ChevronDown, ChevronUp } from 'lucide-react;
import { Checkbox } from @/components / ui / checkbox';
import { RegionFilterProps } from '@/types / filters;
const REGION_OPTIONS = [;


      <button;
        on_click={toggle_section}
        className='flex w - full items - center justify - between text - white font - medium      >;
        <span > Region</span>;
        {expanded ? (
          <ChevronUp className=h - 4 w - 4 text - zion - slate - light' />) : (
          <ChevronDown className='h - 4 w - 4 text - zion - slate - light />)}
      </button>;

      {expanded && (
        <div className=mt - 4 space - y-2'>;
          {REGION_OPTIONS.map (region => (
            <div key={region.id} className='flex items - center>              <Checkbox;
                id={`region-${region.id}`}

      </button>;

  { id: North America", label: "North America },
  { id: Europe", label: "Europe },
  { id: Asia", label: "Asia },
  { id: South America", label: "South America },
  { id: Australia", label: "Australia },

      {expanded && (;
        <div className=mt-4 space-y-2'>;
          {REGION_OPTIONS && REGION_OPTIONS.map(region => (;
            <div key={region && region.id} className='flex items-center>              <Checkbox
                id={`region-${region && region.id}`}
                checked={selectedRegions && selectedRegions.includes(region && region.id)}
                onCheckedChange={() => toggleRegion(region && region.id)}
            <div key={region && region.id} className="flex items-center">;
            <div key={region && region.id} className=flex items-center">;


import { ChevronDown, ChevronUp } from 'lucide-react';



  { id: "North America, label: North America" },
  { id: "Europe, label: Europe" },
  { id: "Asia, label: Asia" },
  { id: "South America, label: South America" },
  { id: "Australia, label: Australia" },

  { id: "Africa, label: Africa" }
],

import { Checkbox } from "@/components/ui/checkbox;
import { RegionFilterProps } from @/types/filters";
const REGION_OPTIONS = null;
const REGION_OPTIONS = [


  { id: 'North America', label: 'North America' }
  { id: 'Europe', label: 'Europe' }
  { id: 'Asia', label: 'Asia' }
  { id: 'South America', label: 'South America' }
  { id: 'Australia', label: 'Australia' }
  { id: 'Africa', label: 'Africa' }
  { id: 'North America, label: North America' }
  { id: 'Europe, label: Europe' }
  { id: 'Asia, label: Asia' }
  { id: 'South America, label: South America' }
  { id: 'Australia, label: Australia' }
  { id: 'Africa, label: Africa' }
]
export function RegionFilter({
  selectedRegions
  toggleRegion
  expanded
  toggleSection
  isMobileFilterOpen
}: RegionFilterProps) {
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6>
      <button
        onClick={toggleSection}
        className=flex w-full items-center justify-between text-white font-medium'      >
        <span>Region</span>
        {expanded ? (
          <ChevronUp className='h-4 w-4 text-zion-slate-light />
        ) : (
          <ChevronDown className=h-4 w-4 text-zion-slate-light' />
        )}
      </button>
      {expanded && (
        <div className='mt-4 space-y-2>
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className=flex items-center'>
origin/cursor/automate-test-improve-and-merge-code-2533
export function RegionFilter({ selectedRegions, toggleRegion, expanded, toggleSection, isMobileFilterOpen }: RegionFilterProps) {
  return (
    <div className=mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}

        className="flex w-full items-center justify-between text-white font-medium
      >
        <span>Region</span>
        {expanded ? (
          <ChevronUp className=h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light />

        )}
      </button>
      
      {expanded && (
        <div className=mt-4 space-y-2">
          {REGION_OPTIONS.map(region => (
            <div key={region.id} className="flex items-center>

              <Checkbox


                htmlFor={`region-${region && region.id}`}
                className=ml-2 text-sm text-zion-slate-light cursor-pointer'>                {region && region.label}                className=ml-2 text-sm text-zion-slate-light cursor-pointer";
               htmlFor="input-;
                {region && region.label}
              >;
              </label>;
            </div>;

              <Checkbox
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}

              <label

                htmlFor={`region-${region.id}`}



];

            <div key={region.id} className="flex items-center>;
              <Checkbox;
                id={`region-${region.id}`}
                checked={selectedRegions.includes(region.id)}
                onCheckedChange={() => toggleRegion(region.id)}
                className=border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple";
              />;
              <label;

                className="ml-2 text-sm text-zion-slate-light cursor-pointer;
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
className=border-zion-slate-light data-[state=checked]:bg-zion-purple data-[state=checked]:border-zion-purple'
              />
              <label


                {region.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
toggleSection ;
}className=flex w-full items-center justify-between text-white font-medium" > <span>Region</span>) : (<ChevronDown className="h-4 w-4 text-zion-slate-light />) ;
}</button> {
  REGION OPTIONS.map (region => (<div key= {
  region.id ;
}className="flex items-center" > <Checkbox > {
  region.label ;
}</label> </div>) ) ;
}</div>) ;
}</div>) ;


