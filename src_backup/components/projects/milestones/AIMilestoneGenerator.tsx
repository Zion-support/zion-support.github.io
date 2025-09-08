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

interface AIMilestoneGeneratorProps  {import React, { useState } from 'react';
import { Button   } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
import { Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger  } from '@/components/ui/accordion';
import { Loader2, Sparkles, Plus, Calendar  } from 'lucide-react';
import { format, parseISO   } from 'date-fns';
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator   } from '@/hooks/useMilestoneGenerator';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
  AccordionContent;
  AccordionItem;
  AccordionTrigger;
 } from '@/components/ui/accordion';
import { format, parseISO  } from 'date-fns';
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator  } from '@/hooks/useMilestoneGenerator';
import { Badge } from '@/components/ui/badge';
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
<<<<<<< HEAD
=======
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator  } from @/hooks/useMilestoneGenerator';
import { Badge } from '@/components/ui/badge;
import React, { useState } from react'
import { Button } from '@/components/ui/button
import { Card, CardContent } from @/components/ui/card'
>>>>>>> origin/resolved-merge-conflicts
import {
  Accordion
  AccordionContent
  AccordionItem
  AccordionTrigger
} from '@/components/ui/accordion'
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react'
import { format, parseISO } from 'date-fns'
  MilestoneInput
  GeneratedMilestone
  useMilestoneGenerator
} from '@/hooks/useMilestoneGenerator'
import { Badge } from '@/components/ui/badge'
interface AIMilestoneGeneratorProps {
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
interface AIMilestoneGeneratorProps {;
=======
interface AIMilestoneGeneratorProps {
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface AIMilestoneGeneratorProps {;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useState } from 'react';
import { Button  } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger } from '@/components/ui/accordion';
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react'
import { format, parseISO  } from 'date-fns';
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator  } from '@/hooks/useMilestoneGenerator';
import { Badge } from '@/components/ui/badge';
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion
  AccordionContent
  AccordionItem
  AccordionTrigger
} from '@/components/ui/accordion'
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react'
import { format, parseISO } from 'date-fns'
  MilestoneInput
  GeneratedMilestone
  useMilestoneGenerator
} from '@/hooks/useMilestoneGenerator'
import { Badge } from '@/components/ui/badge'
interface AIMilestoneGeneratorProps {
origin/cursor/automate-test-improve-and-merge-code-2533
  scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;
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



=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (!scope || !startDate || !projectType) {

      return;

    }
    const input: MilestoneInput = {}
      scope;
      startDate;
      endDate;
      projectType;
import React, { useState } from 'react';'
import { Button } from '@/components / ui / button';'
import { Card, CardContent } from '@/components / ui / card';
import {}
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,';
} from '@/components / ui / accordion';'
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react';'
import { format, parseISO } from 'date - fns';
  MilestoneInput,
  GeneratedMilestone,
  useMilestoneGenerator,'
} from '@/hooks / useMilestoneGenerator';'
import { Badge } from '@/components / ui / badge';
interface AIMilestoneGeneratorProps {}
  scope: string;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  MilestoneInput;
  GeneratedMilestone;
  useMilestoneGenerator;
} from '@/hooks/useMilestoneGenerator';
interface AIMilestoneGeneratorProps  {scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;if (!scope || !startDate || !projectType) {return;}
    const input: MilestoneInput = {scope;
      startDate;
      endDate;
      projectType;
import { Button  } from '@/components / ui / button';
import { Card, CardContent  } from '@/components / ui / card';
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger} from '@/components / ui / accordion';
import { format, parseISO  } from 'date - fns';
  MilestoneInput,GeneratedMilestone,useMilestoneGenerator} from '@/hooks / useMilestoneGenerator';
import { Badge  } from '@/components / ui / badge';
interface AIMilestoneGeneratorProps  {scope: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  start_date: string;
  end_date: string | null;
  project_type: string;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void;
  onAddMilestone: (milestone: GeneratedMilestone) => void;
export /**;
 * AIMilestoneGenerator - Function description;
 */
function AIMilestoneGenerator() {}
  const {}
    generate_milestones,
    generated_milestones,
    is_generating,
    clearGeneratedMilestones,
  } = useMilestoneGenerator ();
  const [selected_milestones, setSelectedMilestones] = useState<;
    Record < string, boolean>;
  >({});
  const handleGenerateMilestones = async () => {}
    // Check condition;
if ( {) {}
  $2;
}
      return;
    }
    const input: MilestoneInput = {}
      scope,
      start_date,
      end_date,
      project_type,
    }
    await generate_milestones (input);
    // Initially select all milestones;
    const initial_selection: Record < number, boolean> = {}
    generated_milestones.for_each ((_, index: number) => {}
      initial_selection[index] = true;
    });
    setSelectedMilestones (initial_selection);
  }
  const handleAddToProject = () => {}
    const selectedMilestonesList = generatedMilestones.filter(
      (_, index) => selectedMilestones[index]
    )
    onAddMilestones(selectedMilestonesList)
    clearGeneratedMilestones()
    setSelectedMilestones({})
  }

  const toggleMilestoneSelection = (index: number, ) =>: any {}
    setSelectedMilestones (prev => ({}
      ...prev,
      [index]: !prev[index],
    }));

  }
  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {}
    onAddMilestone(milestone)
  }
  const formatDate = (dateString: string,) => {}
    try {'
      return format(parseISO(dateString), 'MMM dd, yyyy')
    } catch (error) {}
      return dateString;
    }
  }

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


<<<<<<< HEAD
import React, { useState } from 'react',;
import { Button } from '@/components/ui/button',;
=======
import React, { useState } from react',
import { Button } from '@/components/ui/button,
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from 'react',;
import { Button } from '@/components/ui/button',;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Card, CardContent } from '@/components/ui/card',;
import {;
  Accordion,;
  AccordionContent,;
  AccordionItem,;'
  AccordionTrigger} from '@/components/ui/accordion',;'
import { Loader2, Sparkles, Plus, Calendar } from 'lucide-react';'
import { format, parseISO } from 'date-fns',;'
import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',;'
import { Badge } from '@/components/ui/badge',;
interface AIMilestoneGeneratorProps {;
  scope: string,;
  startDate: string,;
  endDate: string | null,;
  projectType: string,;
  onAddMilestones: (milestones: GeneratedMilestone[]) => void,;
  onAddMilestone: (milestone: GeneratedMilestone) => void;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
<<<<<<< HEAD
;
export function AIMilestoneGenerator({;
  scope,;
  startDate,;
  endDate,;
  projectType,;
  onAddMilestones,;
=======
export function AIMilestoneGenerator({
  scope,
  startDate,
  endDate,
  projectType,
  onAddMilestones,
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleGenerateMilestones = async () => {;
    if (!scope || !startDate || !projectType) {;
      return;
    }

    const input: MilestoneInput = {;
      scope,;
      startDate,;
      endDate,;

    await generateMilestones(input);
    // Initially select all milestones;
    const initialSelection: Record<number, boolean> = {};
    generatedMilestones && generatedMilestones.forEach((_, index: number) => {;
      initialSelection[index] = true;
    });
    setSelectedMilestones(initialSelection)
};

  const handleAddToProject = () => {;
    const selectedMilestonesList = generatedMilestones && generatedMilestones.filter(;
      (_, index) => selectedMilestones[index];
    );

    onAddMilestones(selectedMilestonesList);
    clearGeneratedMilestones();
    setSelectedMilestones({})
};
  const toggleMilestoneSelection = (index: number,) => {;
    setSelectedMilestones(prev => ({;
      ...prev,;
      [index]: !prev[index],;
    }))
};

  const handleAddSingleMilestone = (milestone: GeneratedMilestone) => {;
    onAddMilestone(milestone)
};
  const formatDate = (dateString: string,) => {;    try {;

    try {;

      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;
    }
  },

  return (

    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-medium flex items-center'>

          <Sparkles className='w-5 h-5 mr-2 text-primary' />
          AI Milestone Generator;
        </h3>

        <Button

          disabled={isGenerating || !scope || !startDate || !projectType}        >

<<<<<<< HEAD


=======
<<<<<<< HEAD
          variant='outline'
  }import React, { useState } from 'react',import { Button } from '@/components/ui/button',import { Card, CardContent } from '@/components/ui/card',import {Accordion,AccordionContent,AccordionItem,AccordionTrigger} from '@/components/ui/accordion',import { format, parseISO } from 'date-fns',import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',import { Badge } from '@/components/ui/badge',interface AIMilestoneGeneratorProps  {scope: string,startDate: string,endDate: string | null,projectType: string,onAddMilestones: (milestones: GeneratedMilestone[]) => void,onAddMilestone: (milestone: GeneratedMilestone) => void;scope,startDate,endDate,projectType,onAddMilestones,const handleGenerateMilestones = async () => {if (!scope || !startDate || !projectType) {return;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
          variant="outline"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          variant="outline
  }import React, { useState } from react,import { Button } from '@/components/ui/button',import { Card, CardContent } from @/components/ui/card,import {Accordion,AccordionContent,AccordionItem,AccordionTrigger} from '@/components/ui/accordion',import { format, parseISO } from date-fns,import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',import { Badge } from @/components/ui/badge,interface AIMilestoneGeneratorProps  {scope: string,startDate: string,endDate: string | null,projectType: string,onAddMilestones: (milestones: GeneratedMilestone[]) => void,onAddMilestone: (milestone: GeneratedMilestone) => void;scope,startDate,endDate,projectType,onAddMilestones,const handleGenerateMilestones = async () => {if (!scope || !startDate || !projectType) {return;
>>>>>>> origin/resolved-merge-conflicts
    }const input: MilestoneInput = {scope,startDate,endDate,try {return format(parseISO(dateString), 'MMM dd, yyyy')} catch (error) {return dateString;
    },return (<Button;
          disabled={isGenerating || !scope || !startDate || !projectType}        >;
<<<<<<< HEAD
          variant='outline';
=======
          variant=outline";
=======
          variant="outline"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
        >

          {isGenerating ? (

            </>
          )}
        </Button>
      </div>

      {generatedMilestones.length > 0 && (

              </p>

              <Button 

                onClick={handleAddToProject}
                disabled={!Object.values(selectedMilestones).some(Boolean)}
              >
                Add Selected to Project;
              </Button>
            </div>
'
            <Accordion type='multiple' className='w-full'>
              {generatedMilestones.map((milestone, index) => ('`
                <AccordionItem value={`item-${index}`} key={index} className='border p-2 rounded-md mb-2'>'
                  <div className='flex items-center justify-between'>'
                    <div className='flex items-center flex-1'>
                      <input'
                        type='checkbox'`
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] || false}
                        onChange={() => toggleMilestoneSelection(index)}'
                        className='mr-2 w-4 h-4 rounded text-primary'
                      />'
                      <AccordionTrigger className='hover:no-underline flex-1 text-left'>'
                        <div className='flex items-center'>'
                          <span className='font-medium'>{milestone.title}</span>'
                          <Badge variant='secondary' className='ml-2 flex items-center'>'
                            <Sparkles className='w-3 h-3 mr-1' />

                          </Badge>
                        </div>
                      </AccordionTrigger>
                    </div>

                      variant='ghost'

                      size='sm'
                      onClick={(e) => {}
                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
                      }'
                      className='mr-2'

                      size='sm'
                      onClick={(e) => {}
                        e.stopPropagation(),
  onAddMilestone: (milestone: GeneratedMilestone) => void
export function AIMilestoneGenerator({
  scope;
  startDate;
  endDate;
  projectType;
  onAddMilestones;
  onAddMilestone
}: AIMilestoneGeneratorProps) {
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator();
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string, boolean>>({}),

  const handleGenerateMilestones = null;
origin/cursor/automate-test-improve-and-merge-code-2533
                        handleAddSingleMilestone(milestone)
<<<<<<< HEAD
                      }'
                      className='mr-2'
                        className='mr-2 w-4 h-4 rounded text-primary';
=======
                      }}
                      className="mr-2"
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        className=mr-2 w-4 h-4 rounded text-primary;
>>>>>>> origin/resolved-merge-conflicts
                      />;
                      <AccordionTrigger className='hover:no-underline flex-1 text-left'>;
                        <div className='flex items-center'>;
                          <span className='font-medium'>{milestone.title}</span>;
                          <Badge variant='secondary' className='ml-2 flex items-center'>;
                            <Sparkles className='w-3 h-3 mr-1' />;
                            AI Suggested;
                          </Badge>;
                        </div>;
                      </AccordionTrigger>;
                    </div>;
                    <Button;
                      variant='ghost';
                      size='sm';
                      onClick={(e) => {e.stopPropagation(),handleAddSingleMilestone(milestone)}
                      className='mr-2';
                      variant='ghost';
                      size='sm';
                      onClick={(e) => {e.stopPropagation(),onAddMilestone: (milestone: GeneratedMilestone) => void;
export function AIMilestoneGenerator() {const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator()const [selectedMilestones, setSelectedMilestones] = useState<Record<string, boolean>>({}),const handleGenerateMilestones  = null;handleAddSingleMilestone(milestone)}
                      className='mr-2';
                    >;
                      <Plus className='h-4 w-4' />;
                    </Button>;
                  </div>;
                  <AccordionContent>;
                    <div className='pl-6 space-y-2'>;
                      <p className='text-sm'>{milestone.description}</p>;
                      <div className='flex items-center text-sm text-muted-foreground'>;
                        <Calendar className='w-4 h-4 mr-1' />;
                        Due: {formatDate(milestone.dueDate)}
                      </div>;
                      <div className='text-sm text-muted-foreground'>;
                        Estimated effort: {milestone.estimatedHours} hours;
                      </div>;
                    </div>;
                  </AccordionContent>;
                </AccordionItem>;
                      onClick={e => {e && e.stopPropagation()handleAddSingleMilestone(milestone)}
                      className='mr-2';
                    >;
                      <Plus className='h-4 w-4' />;
                    </Button>;
                  </div>;
                  <AccordionContent>;
                    <div className='pl-6 space-y-2'>;
                      <p className='text-sm'>{milestone && milestone.description}</p>;
                      <div className='flex items-center text-sm text-muted-foreground'>;
                        <Calendar className='w-4 h-4 mr-1' />;
                        Due: {formatDate(milestone && milestone.dueDate)}
                      </div>;
                      <div className='text-sm text-muted-foreground'>;
                        Estimated effort: {milestone && milestone.estimatedHours} hours;
                      </div>;
                    </div>;
                  </AccordionContent>;
                </AccordionItem>;))}
              ))}</Accordion>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

              ))}
            </Accordion>;
          </CardContent>;
        </Card>;
      )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

    </div>;
  );
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    </div>

    </div>;
  );
      )}</div>;
  )}<Button;
                      variant='ghost';
<<<<<<< HEAD
                      size='sm';
                      on_click={e => {e.stop_propagation ()handleAddSingleMilestone (milestone) }
=======
                      size=sm;
                      on_click={e => {e.stop_propagation ()handleAddSingleMilestone (milestone) }}
=======

    </div>;
  );
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

                    <Button;'
                      variant='ghost';'
                      size='sm';
                      on_click={e => {}
                        e.stop_propagation ();
                        handleAddSingleMilestone (milestone) }'
                      className='mr - 2';
                    >;'
                      <Plus className='h - 4 w - 4' />;
                    </Button>;
                  </div>;
                  <AccordionContent>;'
                    <div className='pl - 6 space - y-2'>;'
                      <p className='text - sm'>{milestone.description}</p>;'
                      <div className='flex items - center text - sm text - muted - foreground'>;'
                        <Calendar className='w - 4 h - 4 mr - 1' />;
                        Due: {format_date (milestone.due_date)}
                      </div>;'
                      <div className='text - sm text - muted - foreground'>;
                        Estimated effort: {milestone.estimated_hours} hours;
                      </div>;
                    </div>;
                  </AccordionContent>;
                </AccordionItem>))}
            </Accordion>;
          </CardContent>;
        </Card>)}
    </div>);