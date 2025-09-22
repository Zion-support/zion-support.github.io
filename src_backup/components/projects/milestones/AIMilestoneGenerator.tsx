:src/components/projects/milestones/AIMilestoneGenerator.tsx
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
interface AIMilestoneGeneratorProps {;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx

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
:src/components/projects/milestones/AIMilestoneGenerator.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

<<<<<<< HEAD:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from 'react',;
import { Button } from '@/components/ui/button',;
=======
'
import React, { useState } from 'react',;'
import { Button } from '@/components/ui/button',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AIMilestoneGenerator.tsx
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
:src/components/projects/milestones/AIMilestoneGenerator.tsx
<<<<<<< HEAD
export function AIMilestoneGenerator(): any ({;  scope,;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx

  scope,;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  startDate,;
  endDate,;
  projectType,;
  onAddMilestones,;
<<<<<<< HEAD
<<<<<<< HEAD
  onAddMilestone,;
}: AIMilestoneGeneratorProps) {;
  const {;
    generateMilestones,;
    generatedMilestones,;
    isGenerating,;
    clearGeneratedMilestones,;
  } = useMilestoneGenerator();
  const [selectedMilestones, setSelectedMilestones] = useState<;
    Record<string, boolean>;
  >({});
  const { generateMilestones, generatedMilestones, isGenerating, clearGeneratedMilestones } = useMilestoneGenerator(),;
  const [selectedMilestones, setSelectedMilestones] = useState<Record<string boolean>>({}),;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const handleGenerateMilestones = async () => {;
    if (!scope || !startDate || !projectType) {;
      return;
    }
:src/components/projects/milestones/AIMilestoneGenerator.tsx
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    const input: MilestoneInput = {;
      scope,;
      startDate,;
      endDate,;
:src/components/projects/milestones/AIMilestoneGenerator.tsx
<<<<<<< HEAD
      projectType,
};
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx

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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
    try {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AIMilestoneGenerator.tsx
      return format(parseISO(dateString), 'MMM dd, yyyy');
    } catch (error) {;
      return dateString;
    }
  },

  return (
:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-primary" />
          AI Milestone Generator;
        </h3>
:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx
<Button
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx

        <Button
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

        <Button
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

          disabled={isGenerating || !scope || !startDate || !projectType}        >

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        <Button;
          disabled={isGenerating || !scope || !startDate || !projectType}        >
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AIMilestoneGenerator.tsx
          variant="outline"
          onClick={handleGenerateMilestones}
          disabled={isGenerating || !scope || !startDate || !projectType}
        >

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {isGenerating ? (
:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx
            <>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className='mr-2 h-4 w-4' />
              Generate Milestones
            </>
          )}
        </Button>
      </div>

      {generatedMilestones.length > 0 && (
:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx
        <Card>
          <CardContent className='pt-6'>
            <div className='flex justify-between items-center mb-4'>
              <p className='text-sm text-muted-foreground'>
                {generatedMilestones.length} milestones generated based on your
                project scope
              </p>

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <Button 
=======
              <Button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AIMilestoneGenerator.tsx
                onClick={handleAddToProject}
                disabled={!Object.values(selectedMilestones).some(Boolean)}
              >
                Add Selected to Project;
              </Button>
            </div>
"
            <Accordion type="multiple" className="w-full">
              {generatedMilestones.map((milestone, index) => ("`
                <AccordionItem value={`item-${index}`} key={index} className="border p-2 rounded-md mb-2">"
                  <div className="flex items-center justify-between">"
                    <div className="flex items-center flex-1">
                      <input"
                        type="checkbox"`
                        id={`milestone-${index}`}
                        checked={selectedMilestones[index] || false}
                        onChange={() => toggleMilestoneSelection(index)}"
                        className="mr-2 w-4 h-4 rounded text-primary"
                      />"
                      <AccordionTrigger className="hover:no-underline flex-1 text-left">"
                        <div className="flex items-center">"
                          <span className="font-medium">{milestone.title}</span>"
                          <Badge variant="secondary" className="ml-2 flex items-center">"
                            <Sparkles className="w-3 h-3 mr-1" />

:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx
                            AI Suggested
                          </Badge>
                        </div>
                      </AccordionTrigger>
                    </div>
:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx
                    <Button

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      variant="ghost"
=======
                    <Button;
"
                      variant="ghost""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AIMilestoneGenerator.tsx
                      size="sm"
                      onClick={(e) => {}
                        e.stopPropagation(),
                        handleAddSingleMilestone(milestone)
                      }}"
                      className="mr-2"

:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx
                      variant="ghost"
                      size="sm"
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
                      }}"
                      className="mr-2"
:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx
                    >
                      <Plus className='h-4 w-4' />
                    </Button>
                  </div>
                  <AccordionContent>
                    <div className='pl-6 space-y-2'>
                      <p className='text-sm'>{milestone.description}</p>
                      <div className='flex items-center text-sm text-muted-foreground'>
                        <Calendar className='w-4 h-4 mr-1' />
                        Due: {formatDate(milestone.dueDate)}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Estimated effort: {milestone.estimatedHours} hours
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx
              ))}
            </Accordion>;
          </CardContent>;
        </Card>;
      )}
:src/components/projects/milestones/AIMilestoneGenerator.tsx
<<<<<<< HEAD
    </div>;
  );
}
;

    </div>;
  );
}

                    <Button;'
                      variant='ghost';'
                      size='sm';
                      on_click={e => {}
                        e.stop_propagation ();
                        handleAddSingleMilestone (milestone) }}'
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
:src_backup/components/projects/milestones/AIMilestoneGenerator.tsx
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/projects/milestones/AIMilestoneGenerator.tsx
