<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
=======
<div

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { cn } from "@/lib/utils";
import { QuoteFormData } from "@/types/quotes";
import {
  Popover
  PopoverContent
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { QuoteFormData } from '@/types/quotes'
origin/cursor/automate-test-improve-and-merge-code-2533
interface TimelineStepProps {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void

<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx

import { format } from "date-fns",
import { Calendar } from "@/components/ui/calendar",
import { Button } from "@/components/ui/button",
import { Label } from "@/components/ui/label",
import { CalendarIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { cn } from "@/lib/utils",
import { QuoteFormData } from "@/types/quotes",
interface TimelineStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { format } from "date-fns",
import { Calendar } from "@/components/ui/calendar",
import { Button } from "@/components/ui/button",
import { Label } from "@/components/ui/label",
import { CalendarIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { cn } from "@/lib/utils",
import { QuoteFormData } from "@/types/quotes",
interface TimelineStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}

export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (
<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div 
=======
    <div className='space-y-6'>
      <div>

export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "fixed" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
<<<<<<< HEAD
              }`}
<<<<<<< HEAD
=======
=======
    <div className="space-y-6">
      <div>

              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.timeline === 'fixed'
                  ? 'bg-zion-purple/20 border-zion-purple'
                  : 'bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50'
              }`}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx

              onClick={() => updateFormData({ timeline: 'fixed' })}            >;
              <h4 className='font-medium text-white'>Fixed Dates</h4>;
              <p className='text-sm text-zion-slate-light'>;
                I have specific start and end dates;
              </p>;
            </div>;


            <div

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              onClick={() => updateFormData({ timeline: "fixed" })}
            >
              <h4 className="font-medium text-white">Fixed Dates</h4>
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>
            </div>
            
            <div 
=======
export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
  return (

<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.timeline === "flexible" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
=======
              }`}              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.timeline === 'flexible'
                  ? 'bg-zion-purple/20 border-zion-purple'
                  : 'bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              }`}
<<<<<<< HEAD
              onClick={() => updateFormData({ timeline: "flexible" })}
            >
              <h4 className="font-medium text-white">Flexible Timeline</h4>
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>
            </div>
          </div>
=======
              onClick={() => updateFormData({ timeline: 'flexible' })}

<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          
          {formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.startDate && "text-zion-slate-light"


                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>


              
              <div>
                <Label className="block mb-2 text-zion-slate-light">End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
=======
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.timeline === 'flexible'
                  ? 'bg-zion-purple/20 border-zion-purple'
                  : 'bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50'
              }`}
              onClick={() => updateFormData({ timeline: "flexible" })}
            >
              <h4 className="font-medium text-white">Flexible Timeline</h4>
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>
            </div>
          </div>
          {formData.timeline === 'fixed' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>          
          {formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

          </div>                I'm flexible on the timing;
              </p>;
            </div>;
          </div>;              <div>
=======
          {formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
=======


          
          {formData.timeline === "fixed" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx

              <div>
                <Label className='block mb-2 text-zion-slate-light'>
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button

<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
=======
            >;
              <h4 className='font-medium text-white'>Flexible Timeline</h4>;
              <p className='text-sm text-zion-slate-light'>;
import { format } from 'date - fns';
import { Calendar } from '@/components / ui / calendar';
import { Button } from '@/components / ui / button';
import { Label } from '@/components / ui / label';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components / ui / popover';
import { cn } from '@/lib / utils';
import { QuoteFormData } from '@/types / quotes';
interface TimelineStepProps {
  form_data: QuoteFormData;
  updateFormData: (data: Partial < QuoteFormData>) => void;
export /**
 * TimelineStep - Function description
 */
function TimelineStep() {
  return (
    <div className='space - y-6'>;
      <div>;
        <h3 className='text - xl font - semibold text - white mb - 4'>;
          When do you need this?;
        </h3>;
        <div className='space - y-4'>;
          <div className='flex items - center space - x-4'>;
            <div;
              className={`flex - 1 p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${
                form_data.timeline === 'fixed';
                  ? 'bg - zion - purple / 20 border - zion - purple';
                  : 'bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50';
              }`}
              on_click={() => updateFormData ({ timeline: 'fixed' })}            >;
              <h4 className='font - medium text - white'>Fixed Dates</h4>;
              <p className='text - sm text - zion - slate - light'>;
                I have specific start and end dates;
              </p>;
            </div>;
            <div;
              className={`flex - 1 p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${
                form_data.timeline === 'flexible';
                  ? 'bg - zion - purple / 20 border - zion - purple';
                  : 'bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50';
              }`}
              on_click={() => updateFormData ({ timeline: 'flexible' })}
            >;
              <h4 className='font - medium text - white'>Flexible Timeline</h4>;
              <p className='text - sm text - zion - slate - light'>;


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx
                I'm flexible on the timing;
              </p>;
            </div>;
          </div>;

<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
=======

                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.startDate && "text-zion-slate-light"



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar

<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
                      initialFocus
                      className="p-3 pointer-events-auto"

                    />
                  </PopoverContent>
                </Popover>
              </div>

<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
=======

              



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx
              <div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <Label className='block mb-2 text-zion-slate-light'>
                  End Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button

                      selected={formData && formData.startDate}
                      onSelect={date => updateFormData({ startDate: date })}                      initialFocus;
                      className='p-3 pointer-events-auto';

          {form_data.timeline === 'fixed' && (
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4 mt - 6'>;
              <div>;
                <Label className='block mb - 2 text - zion - slate - light'>;
                  Start Date;
                </Label>;
                <Popover>;
                  <PopoverTrigger as_child>;
                    <Button;
                      variant='outline';
                      className={cn (
                        'w - full justify - start text - left font - normal bg - zion - blue border border - zion - blue - light hover:bg - zion - blue - dark',
                        !form_data.start_date && 'text - zion - slate - light')}                    >;
                      <CalendarIcon className='mr - 2 h - 4 w - 4' />;
                      {form_data.start_date ? (
                        format (form_data.start_date, 'PPP')) : (
                        <span > Pick a date</span>)}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent;
                    className='w - auto p - 0 bg - zion - blue - dark border border - zion - blue - light';
                    align='start';
                  >;
                    <Calendar;
                      mode='single';
                      selected={form_data.start_date}
                      on_select={date => updateFormData ({ start_date: date })}                      initial_focus;
                      className='p - 3 pointer - events - auto';
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;

<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx
    <div className;
origin/cursor/automate-test-improve-and-merge-code-2533
                        !formData.endDate && "text-zion-slate-light"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.endDate ? format(formData.endDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">
                    <Calendar
<<<<<<< HEAD
                      mode="single"


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      selected={formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}
                      initialFocus
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      className="p-3 pointer-events-auto"
=======
                      className='p-3 pointer-events-auto'
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}
        </div>
      </div>
<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
<<<<<<< HEAD
    </div>;
  )
};
}                      className="p-3 pointer-events-auto"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.endDate && "text-zion-slate-light"



                      )}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent
                    className='w-auto p-0 bg-zion-blue-dark border border-zion-blue-light'
                    align='start'>;
                    <Calendar

                      initialFocus;
                      className='p-3 pointer-events-auto';
                      disabled={date =>;
                        date < (formData && formData.startDate || new Date());

                      mode="single"


                      selected={formData.endDate}
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx
                      className="p-3 pointer-events-auto"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { format } from "date-fns",;
import { Calendar } from "@/components/ui/calendar",;
import { Button } from "@/components/ui/button",;
import { Label } from "@/components/ui/label",;
import { CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",;
import { cn } from "@/lib/utils",;
import { QuoteFormData } from "@/types/quotes",;
interface TimelineStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}
;
export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {;
  return (;
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">When do you need this?</h3>;
        <div className="space-y-4">;
          <div className="flex items-center space-x-4">;
            <div;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${;
                formData.timeline === "fixed";
                  ? "bg-zion-purple/20 border-zion-purple";
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
              }`}
              onClick={() => updateFormData({ timeline: "fixed" })}
            >;
              <h4 className="font-medium text-white">Fixed Dates</h4>;
              <p className="text-sm text-zion-slate-light">I have specific start and end dates</p>;
            </div>;
            <div;
              className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-colors ${;
                formData.timeline === "flexible";
                  ? "bg-zion-purple/20 border-zion-purple";
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
              }`}
              onClick={() => updateFormData({ timeline: "flexible" })}
            >;
              <h4 className="font-medium text-white">Flexible Timeline</h4>;
              <p className="text-sm text-zion-slate-light">I'm flexible on the timing</p>;
            </div>;
          </div>;
          {formData.timeline === "fixed" && (;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">;
              <div>;
<<<<<<< HEAD
                <Label className="block mb-2 text-zion-slate-light">Start Date</Label>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <Button;
                      variant="outline";
                      className={cn(;
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark";
                        !formData.startDate && "text-zion-slate-light";
                      )}
                    >;
                      <CalendarIcon className="mr-2 h-4 w-4" />;
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">;
                    <Calendar;
                      mode="single";
                      selected={formData.startDate}
                      onSelect={(date) => updateFormData({ startDate: date })}
                      initialFocus;
                      className="p-3 pointer-events-auto";
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
              <div>;
                <Label className="block mb-2 text-zion-slate-light">End Date</Label>;
                <Popover>;
                  <PopoverTrigger asChild>;
                    <Button;
                      variant="outline";
                      className={cn(;
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark";
                        !formData.endDate && "text-zion-slate-light";
                      )}
                    >;
                      <CalendarIcon className="mr-2 h-4 w-4" />;
                      {formData.endDate ? format(formData.endDate, "PPP") : <span>Pick a date</span>}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0 bg-zion-blue-dark border border-zion-blue-light" align="start">;
                    <Calendar;
                      mode="single";
                      selected={formData.endDate}
                      onSelect={(date) => updateFormData({ endDate: date })}
                      initialFocus;
                      className="p-3 pointer-events-auto";
                      disabled={(date) => date < (formData.startDate || new Date())}
                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
            </div>;
          )}
        </div>;
      </div>;
    </div>;
  );
=======
                <Label className='block mb - 2 text - zion - slate - light'>;
                  End Date;
                </Label>;
                <Popover>;
                  <PopoverTrigger as_child>;
                    <Button;
                      variant='outline';
                      className={cn (
                        'w - full justify - start text - left font - normal bg - zion - blue border border - zion - blue - light hover:bg - zion - blue - dark',
                        !form_data.end_date && 'text - zion - slate - light')}                    >;
                      <CalendarIcon className='mr - 2 h - 4 w - 4' />;
                      {form_data.end_date ? (
                        format (form_data.end_date, 'PPP')) : (
                        <span > Pick a date</span>)}
                    </Button>;
                  </PopoverTrigger>;
                  <PopoverContent;
                    className='w - auto p - 0 bg - zion - blue - dark border border - zion - blue - light';
                    align='start';
                  >;
                    <Calendar;
                      mode='single';
                      selected={form_data.end_date}
                      on_select={date => updateFormData ({ end_date: date })}
                      initial_focus;
                      className='p - 3 pointer - events - auto';
                      disabled={date =>;
                        date < (form_data.start_date || new Date ());
                      }                    />;
                  </PopoverContent>;
                </Popover>;
              </div>;
<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======




>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx
            </div>)}
        </div>;
      </div>;
    </div>);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
<<<<<<< HEAD
                      selected={formData.endDate}
                      onSelect={date => updateFormData({ endDate: date })}
                      initialFocus
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx
;

    </div>
  );
<<<<<<< HEAD:src/components/QuoteRequestForm/TimelineStep.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/QuoteRequestForm/TimelineStep.tsx
