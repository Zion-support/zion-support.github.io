return (
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

return (<div className='space-y-3'>;
      <div className='flex justify-between items-center px-4'>;
<<<<<<< HEAD
    <div className='space-y-3'>;'
      <div className='flex justify-between items-center px-4'>;'
        <div className='flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar'>;
=======
        <div className=flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar'>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className='space-y-3'>;'
      <div className='flex justify-between items-center px-4'>;'
        <div className='flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar'>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Sheet>;
            <SheetTrigger asChild>;'
              <Button variant='outline' size='sm' className='gap-1'>;'
                <Filter className='h-3 && 3.5 w-3 && 3.5' />;
                Filter;
              </Button>;
            </SheetTrigger>;'
            <SheetContent side='bottom' className='h-[85vh] rounded-t-xl'>;
              <SheetHeader>;
                <SheetTitle>;'
                  Filter {type === 'jobs' ? 'Jobs' : 'Talents'}

                </SheetTitle>;
              </SheetHeader>;
'
              <div className='py-6 space-y-6'>;'
                {type === 'jobs' ? (;
                  <>;'
                    <div className='space-y-2'>;
                      <Label>Job Type</Label>;'
                      <div className='flex gap-2 flex-wrap'>;

                        <Badge'
                          variant='outline''
                          className='cursor-pointer hover:bg-primary/5'>;
                          Full Time;
                        </Badge>;
                        <Badge'
                          variant='outline''
                          className='cursor-pointer hover:bg-primary/5'>;
                          Part Time;
                        </Badge>;
                        <Badge'
                          variant='outline''
                          className='cursor-pointer hover:bg-primary/5'>;
                          Contract;
                        </Badge>;
                        <Badge'
                          variant='outline'
'
                          className='cursor-pointer hover:bg-primary/5'>;'
import React, { useState } from 'react';'
import { Button } from '@/components / ui / button';'
import { Slider } from '@/components / ui / slider';'
import { Switch } from '@/components / ui / switch';'
import { Input } from '@/components / ui / input';
import {}
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,';
} from '@/components / ui / select';'
import { X, Filter } from 'lucide-react';
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,'
} from '@/components / ui / sheet';'
import { Badge } from '@/components / ui / badge';'
import { Label } from '@/components / ui / label';
interface BrowseFiltersProps {'
  type: 'jobs' | 'talents';
export /**;
 * BrowseFilters - Function description;
 */
function BrowseFilters() {}
  const [active_filters, setActiveFilters] = useState < string[]>([]);
  const add_filter = (filter: string) =>: any {    if () {) {}
  $2;
}
      setActiveFilters ([...active_filters, filter]);
    }
  }
  const remove_filter = (filter: string) =>: any {}
    setActiveFilters (active_filters.filter (function => f !== filter));
  }
  return ('
    <div className='space - y-3'>;'
      <div className='flex justify - between items - center px - 4'>;'
        <div className='flex items - center gap - 2 overflow - x-auto py - 1 hide - scrollbar'>;
          <Sheet>;
            <SheetTrigger as_child>;'
              <Button variant='outline' size='sm' className='gap - 1'>;'
                <Filter className='h - 3.5 w - 3.5' />;
                Filter;
              </Button>;
            </SheetTrigger>;'
            <SheetContent side='bottom' className='h-[85vh] rounded - t-xl'>;
              <SheetHeader>;
                <SheetTitle>;'
                  Filter {type === 'jobs' ? 'Jobs' : 'Talents'}
                </SheetTitle>;
              </SheetHeader>;'
              <div className='py - 6 space - y-6'>;'
                {type === 'jobs' ? (
                  <>;'
                    <div className='space - y-2'>;
                      <Label > Job Type</Label>;'
                      <div className='flex gap - 2 flex - wrap'>;
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
                        >;
                          Full Time;
                        </Badge>;
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
                        >;
                          Part Time;
                        </Badge>;
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
                        >;
                          Contract;
                        </Badge>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
=======
<<<<<<< HEAD
                        <Badge;
                          variant='outline';
                          className=cursor - pointer hover:bg - primary / 5';
>>>>>>> origin/resolved-merge-conflicts
                        >;Freelance;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
                        >;

                          Freelance;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        </Badge>;
                      </div>;
                    </div>;
'
                    <div className='space - y-2'>;
                      <Label > Experience Level</Label>;'
                      <div className='flex gap - 2 flex - wrap'>;
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
                        >;
                          Entry Level;
                        </Badge>;
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
                        >;
                          Mid Level;
                        </Badge>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
=======
<<<<<<< HEAD
                        <Badge;
                          variant='outline';
                          className=cursor - pointer hover:bg - primary / 5';
>>>>>>> origin/resolved-merge-conflicts
                        >;Senior;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
                        >;

                          Senior;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        </Badge>;
                      </div>;
                    </div>;
'
                          className='cursor-pointer hover:bg-primary/5'>;
                  </>) : (
                  <>;'
                    <div className='space - y-2'>;
                      <Label > Specialization</Label>;'
                      <div className='flex gap - 2 flex - wrap'>;
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
                        >;
                          Developer;
                        </Badge>;
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
                        >;
                          Designer;
                        </Badge>;
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
                        >;
                          Marketing;
                        </Badge>;
                        <Badge;'
                          variant='outline';'
                          className='cursor - pointer hover:bg - primary / 5';
                        >;

                          Content;
                        </Badge>;
                      </div>;
<<<<<<< HEAD


                    </div>;

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from @/components/ui/sheet",
import { Badge } from "@/components/ui/badge,
import { Label } from @/components/ui/label";
origin/cursor/automate-test-improve-and-merge-code-2533


=======
<<<<<<< HEAD
                    </div>;import React, { useState } from 'react',import { Button } from '@/components/ui/button',import { Slider } from '@/components/ui/slider',import { Switch } from '@/components/ui/switch',import { Input } from '@/components/ui/input',import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select',import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components/ui/sheet',import { Badge } from '@/components/ui/badge',import { Label } from '@/components/ui/label',import { Label  } from '@/components/ui/label';
interface BrowseFiltersProps  {return (<div className='space-y-3'>;
      <div className='flex justify-between items-center px-4'>;
        <div className='flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </div>;import React, { useState } from "react,import { Button } from @/components/ui/button",import { Slider } from "@/components/ui/slider,import { Switch } from @/components/ui/switch",import { Input } from "@/components/ui/input,import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from @/components/ui/select",import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet,import { Badge } from @/components/ui/badge",import { Label } from "@/components/ui/label,import { Label  } from @/components/ui/label;
interface BrowseFiltersProps  {return (<div className=space-y-3">;
      <div className="flex justify-between items-center px-4>;
        <div className=flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar">;
>>>>>>> origin/resolved-merge-conflicts
          <Sheet>;
            <SheetTrigger asChild>;
              <Button variant='outline' size='sm' className='gap-1'>;
                <Filter className='h-3.5 w-3.5' />;
                Filter;
              </Button>;
            </SheetTrigger>;
            <SheetContent side='bottom' className='h-[85vh] rounded-t-xl'>;
              <SheetHeader>;
                <SheetTitle>Filter {type === 'jobs' ? 'Jobs' : 'Talents'}</SheetTitle>;
              </SheetHeader>;
              <div className='py-6 space-y-6'>;
                {type === 'jobs' ? (<>;
                    <div className='space-y-2'>;
                      <Label>Job Type</Label>;
                      <div className='flex gap-2 flex-wrap'>;
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Full Time</Badge>;
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Part Time</Badge>;
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Contract</Badge>;
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Freelance</Badge>;
                      </div>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </div>;

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components/ui/sheet',
import { Badge } from '@/components/ui/badge',
import { Label } from '@/components/ui/label';
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components/ui/sheet',
import { Badge } from '@/components/ui/badge',
import { Label } from '@/components/ui/label';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet,
import { Badge } from @/components/ui/badge",
import { Label } from "@/components/ui/label;
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface BrowseFiltersProps {

  return (
    <div className='space-y-3'>
      <div className='flex justify-between items-center px-4'>

        <div className='flex items-center gap-2 overflow-x-auto py-1 hide-scrollbar'>
          <Sheet>
            <SheetTrigger asChild>'
              <Button variant='outline' size='sm' className='gap-1'>'
                <Filter className='h-3.5 w-3.5' /> ;
                Filter;
              </Button>
            </SheetTrigger>'
            <SheetContent side='bottom' className='h-[85vh] rounded-t-xl'>
              <SheetHeader>'
                <SheetTitle>Filter {type === 'jobs' ? 'Jobs' : 'Talents'}</SheetTitle>
              </SheetHeader>

              <div className='py-6 space-y-6'>
                {type === 'jobs' ? (
                  <>

                    <div className='space-y-2'>
                      <Label>Job Type</Label>'
                      <div className='flex gap-2 flex-wrap'>'
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Full Time</Badge>'
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Part Time</Badge>'
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Contract</Badge>'
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Freelance</Badge>
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <Label>Experience Level</Label>
                      <div className='flex gap-2 flex-wrap'>
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Entry Level</Badge>
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Mid Level</Badge>

                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Senior</Badge>
                      </div>
                    </div>
                  </>
                ) : (
                  <>'
                    <div className='space-y-2'>
                      <Label>Specialization</Label>'
                      <div className='flex gap-2 flex-wrap'>'
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Developer</Badge>'
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Designer</Badge>'
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Marketing</Badge>'
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Content</Badge>
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <Label>Experience (years)</Label>
<<<<<<< HEAD
                      <Slider'
                        aria-label='Years of experience'
                    <div className='space-y-2'>;
=======
                      <Slider"
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                        aria-label="Years of experience"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        aria-label="Years of experience
                    <div className=space-y-2">;
>>>>>>> origin/resolved-merge-conflicts
                      <Label>Experience Level</Label>;
                      <div className='flex gap-2 flex-wrap'>;
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Entry Level</Badge>;
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Mid Level</Badge>;
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Senior</Badge>;
                      </div>;
                    </div>;
                  </>;
                ) : (<>;
                    <div className='space-y-2'>;
                      <Label>Specialization</Label>;
                      <div className='flex gap-2 flex-wrap'>;
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Developer</Badge>;
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Designer</Badge>;
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Marketing</Badge>;
                        <Badge variant='outline' className='cursor-pointer hover:bg-primary/5'>Content</Badge>;
                      </div>;
                    </div>;
                    <div className='space-y-2'>;
                      <Label>Experience (years)</Label>;
                      <Slider;
<<<<<<< HEAD
                        aria-label='Years of experience';
=======
                        aria-label="Years of experience;
=======
                        aria-label="Years of experience"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        defaultValue={[0, 10]}
                        max={20}
                        step={1}'
                        className='my-4'
                      />'
                      <div className='flex justify-between text-xs text-muted-foreground'>
                        <span>0+ years</span>
                        <span>20+ years</span>
                      </div>
                    </div>
                  </>
                )}

                <div className='space-y-2'>
                  <Label>Location</Label>
                  <Select>

                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>

                <div className='space-y-2'>

                  <Label>Salary Range</Label>
                  <div className='flex gap-4 items-center'>
                    <Input placeholder='Min' type='number' className='w-full' />
                    <span>to</span>
                    <Input placeholder='Max' type='number' className='w-full' />                  </div>

                  </div>
                </div>

                <div className='space-y-2'>

                <div className='space-y-2'>

                <div className='space-y-2'>

                  <Label>Only show verified profiles</Label>
                  <Switch />
                </div>
              </div>

              <SheetFooter>
                <Button variant='outline' className='w-full'>
                  Reset
                </Button>
                <Button
                  className='w-full'
                  onClick={() => addFilter('Experience: 3+ years')}
                >
                  Apply Filters
                </Button>

              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Select>
            <SelectTrigger className='w-[120px] h-8'>
              <SelectValue placeholder='Sort By' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='newest'>Newest</SelectItem>
              <SelectItem value='relevance'>Best Match</SelectItem>
              <SelectItem value='salary'>Highest Pay</SelectItem>
            </SelectContent>
          </Select>

                      className='cursor-pointer hover:bg-primary/5 justify-start'>;
                      Node && Node.js;
                    </Badge>;
                  </div>;
                </div>;
'
                <div className='flex items-center justify-between'>;
                  <Label>Only show verified profiles</Label>;
                  <Switch />;
                </div>;
              </div>;

              <SheetFooter>;'
                <Button variant='outline' className='w-full'>;
                  Reset;
                </Button>;
                <Button'
                  className='w-full''
                  onClick={() => addFilter('Experience: 3+ years')}'
                <div className='space - y-2'>;
                  <Label > Salary Range</Label>;'
                  <div className='flex gap - 4 items - center'>;'
                    <Input placeholder='Min' type='number' className='w - full' />;
                    <span > to</span>;'
                    <Input placeholder='Max' type='number' className='w - full' />;
                  </div>;
                </div>;'
                <div className='space - y-2'>;
                  <Label > Skills</Label>;'
                  <div className='grid grid - cols - 2 gap - 2'>;
                    <Badge;'
                      variant='outline';'
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      JavaScript;
                    </Badge>;
                    <Badge;'
                      variant='outline';'
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      React;
                    </Badge>;
                    <Badge;'
                      variant='outline';'
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      Python;
                    </Badge>;
                    <Badge;'
                      variant='outline';'
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      Figma;
                    </Badge>;
                    <Badge;'
                      variant='outline';'
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      UI / UX;
                    </Badge>;
                    <Badge;'
                      variant='outline';'
                      className='cursor - pointer hover:bg - primary / 5 justify - start';
                    >;
                      Node.js;
                    </Badge>;
                  </div>;
                </div>;'
                <div className='flex items - center justify - between'>;
                  <Label > Only show verified profiles</Label>;
                  <Switch />;
                </div>;
              </div>;
              <SheetFooter>;'
                <Button variant='outline' className='w - full'>;
                  Reset;
                </Button>;
                <Button;'
                  className='w - full';'
                  on_click={() => add_filter ('Experience: 3+ years')}

                >;
                  Apply Filters;
                </Button>;
              </SheetFooter>;
            </SheetContent>;
          </Sheet>;

          <Select>;'
            <SelectTrigger className='w-[120px] h - 8'>;
'
              <SelectValue placeholder='Sort By' />;
            </SelectTrigger>;
            <SelectContent>;'
              <SelectItem value='newest'>Newest</SelectItem>;'
              <SelectItem value='relevance'>Best Match</SelectItem>;'
              <SelectItem value='salary'>Highest Pay</SelectItem>;
            </SelectContent>;
          </Select>;

      </div>;
    </div>;
  )
};

          {activeFilters.map((filter) => (
            <Badge;
              key={filter} '
              variant='secondary''
              className='flex items-center gap-1'
            >
              {filter}
              <X '
                className='h-3 w-3 cursor-pointer' 
                onClick={() => removeFilter(filter)} 
              />
            </Badge>
          ))}
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        </div>
      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
              <X;
                className='h-3 w-3 cursor-pointer';
                onClick={() => removeFilter(filter)}/>;
            </Badge>;
          ))}</div>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </div>;
      </div>;
    </div>;
  );
}

          {active_filters.map (filter => (
            <Badge;
              key={filter}'
              variant='secondary';'
              className='flex items - center gap - 1';
            >;
              {filter}
              <X;'
                className='h - 3 w - 3 cursor - pointer';
                on_click={() => remove_filter (filter)}              />;
            </Badge>))}
        </div>;
      </div>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    </div>)}</div>;
      </div>;
    </div>;
  )
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </div>);
}

        </div>
      </div>
    </div>
  );