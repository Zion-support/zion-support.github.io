<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
import { Slider } from "@/components/ui/slider";
import { PriceFilterProps } from "@/types/filters";
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = null;
export function PriceFilter({
  priceRange
  setPriceRange
  expanded
  toggleSection
  isMobileFilterOpen
}: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0] |0, values[1] |500])
  }
  return (
    <div className='mb-6 border-b border-zion-blue-light pb-6'>
      <button
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >
        <span>Hourly Rate</span>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
return (

    <div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
      <button;
        on_click={toggle_section}
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Hourly Rate</span>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/PriceFilter.tsx
        {expanded ? (
          <ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : (
          <ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}
      </button>;
      {expanded && (
<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/PriceFilter.tsx
        <div className='mt - 6'>;
=======
return (<div className='mb - 6 border - b border - zion - blue - light pb - 6'>;
      <button;
        on_click={toggle_section}
        className='flex w - full items - center justify - between text - white font - medium'      >;
        <span > Hourly Rate</span>;
import { Slider  } from '@/components/ui/slider';
import { PriceFilterProps  } from '@/types/filters';
export function PriceFilter() {const handleChange = null;
export function PriceFilter() {const handleChange = (values: number[]) => {setPriceRange([values[0] |0, values[1] |500])}
  return (<div className='mb-6 border-b border-zion-blue-light pb-6'>;
      <button;
        onClick={toggleSection}
        className='flex w-full items-center justify-between text-white font-medium'      >;
        <span>Hourly Rate</span>;
        {expanded ? (<ChevronUp className='h - 4 w - 4 text - zion - slate - light' />) : (<ChevronDown className='h - 4 w - 4 text - zion - slate - light' />)}
      </button>;
      {expanded && (<div className='mt - 6'>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/talent/filters/PriceFilter.tsx
          <div className='flex justify - between text - sm text - zion - slate - light mb - 2'>            <span>${price_range[0]}/hr</span>;
            <span>${price_range[1]}/hr</span>;
          </div>;
          <Slider;
            aria - label='Hourly rate range'            value={[price_range[0], price_range[1]]}
        <div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
import { Slider   } from '@/components / ui / slider';
import { PriceFilterProps   } from '@/types / filters';
export /**;
 * PriceFilter - Function description;
 */;
function PriceFilter() {const handle_change = (values: number[]) =>: any {setPriceRange ([values[0] || 0, values[1] || 500])}
      </button>;{expanded && (<div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
          <Slider;
            aria-label='Hourly rate range'            value={[priceRange[0], priceRange[1]]}
        <div className="mt-6">;
<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;



import { ChevronDown, ChevronUp } from 'lucide-react'
import { Slider } from "@/components/ui/slider",
import { PriceFilterProps } from "@/types/filters",
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {
  const handleChange = (values: number[]) => {
    setPriceRange([values[0] || 0, values[1] || 500])
  },


<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <div className='mt-6'>
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/PriceFilter.tsx
  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}

        className="flex w-full items-center justify-between text-white font-medium"
      >

        <span>Hourly Rate</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>

      
      {expanded && (

        <div className="mt-6">
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <Slider
<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
import { Slider } from "@/components/ui/slider",;
import { PriceFilterProps } from "@/types/filters",;
export function PriceFilter({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;

=======

            aria-label="Hourly rate range"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { PriceFilterProps } from "@/types/filters";
export function PriceFilter(): any ({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/PriceFilter.tsx
  const handleChange = (values: number[]) => {;
    setPriceRange([values[0] || 0, values[1] || 500]);
  };

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">;
<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
=======
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;import { ChevronDown, ChevronUp  } from 'lucide-react';
import { Slider } from "@/components/ui/slider",import { PriceFilterProps } from "@/types/filters",export function PriceFilter() {const handleChange = (values: number[]) => {setPriceRange([values[0] || 0, values[1] || 500])},<div className='mt-6'>;
          <div className='flex justify-between text-sm text-zion-slate-light mb-2'>;
  return (<div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}className="flex w-full items-center justify-between text-white font-medium";
      >;
        <span>Hourly Rate</span>;
        {expanded ? (<ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}
      </button>;
      {expanded && (<div className="mt-6">;
          <div className="flex justify-between text-sm text-zion-slate-light mb-2">;
            <span>${priceRange[0]}/hr</span>;
            <span>${priceRange[1]}/hr</span>;
          </div>;
          <Slider;
            aria-label="Hourly rate range";
export function PriceFilter() {aria-label="Hourly rate range";
export function PriceFilter(): any ({ priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen }: PriceFilterProps) {export function PriceFilter() {const handleChange = (values: number[]) => {setPriceRange([values[0] || 0, values[1] || 500])}return (<div className="mb-6 border-b border-zion-blue-light pb-6">;
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/talent/filters/PriceFilter.tsx
      <button;
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium";
      >;
<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx

=======
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/PriceFilter.tsx
        <span>Hourly Rate</span>;
        {expanded ? (;
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (;
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}


          <Slider;
            aria-label="Hourly rate range";

<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
aria-label='Hourly rate range'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
        <span>Hourly Rate</span>;
        {expanded ? (<ChevronUp className="h-4 w-4 text-zion-slate-light" />;
        ) : (<ChevronDown className="h-4 w-4 text-zion-slate-light" />;
        )}<Slider;
            aria-label="Hourly rate range";aria-label='Hourly rate range';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/talent/filters/PriceFilter.tsx
=======

aria-label='Hourly rate range'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/PriceFilter.tsx
            value={[priceRange[0], priceRange[1]]}
            min={50}
            max={200}
            step={5}
<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
            onValueChange={handleChange}
<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
className='mt-6'
origin/cursor/automate-test-improve-and-merge-code-2533
=======


    </div>;
  );
}

}

            className="mt-6"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/PriceFilter.tsx
          />
        </div>
      )}
    </div>
  );
}
<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
};
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/PriceFilter.tsx

origin/cursor/automate-test-improve-and-merge-code-2533
=======
            onValueChange={handleChange}</div>;
  )}}}
}className="mt-6";
className='mt-6';
          />;
        </div>;
      )}
    </div>;
  )}<div className="mt - 6">;
          <div className="flex justify - between text - sm text - zion - slate - light mb - 2">;
            <span>${price_range[0]}/hr</span>;
            <span>${price_range[1]}/hr</span>;
          </div>;
          <Slider;
            aria - label='Hourly rate range'            aria - label="Hourly rate range";
            value={[price_range[0], price_range[1]]}
            min={50}
            max={200}
            step={5}
            onValueChange={handle_change}
            className='mt - 6'          />            className="mt - 6";
            className="mt - 6";
          />;
        </div>)}
<<<<<<< HEAD:src_backup/components/talent/filters/PriceFilter.tsx
    </div>)}}}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/talent/filters/PriceFilter.tsx
=======
    </div>);
}

;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/talent/filters/PriceFilter.tsx
