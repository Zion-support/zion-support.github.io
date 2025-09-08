


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
interface AIMilestoneGeneratorProps {;








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




import React, { useState } from 'react',;
import { Button } from '@/components/ui/button',;


}
;
export function AIMilestoneGenerator({;
  scope,;
  startDate,;
  endDate,;
  projectType,;
  onAddMilestones,;


          variant='outline'
  }import React, { useState } from 'react',import { Button } from '@/components/ui/button',import { Card, CardContent } from '@/components/ui/card',import {Accordion,AccordionContent,AccordionItem,AccordionTrigger} from '@/components/ui/accordion',import { format, parseISO } from 'date-fns',import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',import { Badge } from '@/components/ui/badge',interface AIMilestoneGeneratorProps  {scope: string,startDate: string,endDate: string | null,projectType: string,onAddMilestones: (milestones: GeneratedMilestone[]) => void,onAddMilestone: (milestone: GeneratedMilestone) => void;scope,startDate,endDate,projectType,onAddMilestones,const handleGenerateMilestones = async () => {if (!scope || !startDate || !projectType) {return;
          variant="outline
  }import React, { useState } from react,import { Button } from '@/components/ui/button',import { Card, CardContent } from @/components/ui/card,import {Accordion,AccordionContent,AccordionItem,AccordionTrigger} from '@/components/ui/accordion',import { format, parseISO } from date-fns,import { MilestoneInput, GeneratedMilestone, useMilestoneGenerator } from '@/hooks/useMilestoneGenerator',import { Badge } from @/components/ui/badge,interface AIMilestoneGeneratorProps  {scope: string,startDate: string,endDate: string | null,projectType: string,onAddMilestones: (milestones: GeneratedMilestone[]) => void,onAddMilestone: (milestone: GeneratedMilestone) => void;scope,startDate,endDate,projectType,onAddMilestones,const handleGenerateMilestones = async () => {if (!scope || !startDate || !projectType) {return;
    }const input: MilestoneInput = {scope,startDate,endDate,try {return format(parseISO(dateString), 'MMM dd, yyyy')} catch (error) {return dateString;
    },return (<Button;
          disabled={isGenerating || !scope || !startDate || !projectType}        >;
          variant='outline';
                      }'
                      className='mr-2'
                        className='mr-2 w-4 h-4 rounded text-primary';


                        className=mr-2 w-4 h-4 rounded text-primary;
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


    </div>

    </div>;
  );
      )}</div>;
  )}<Button;
                      variant='ghost';
                      size='sm';
                      on_click={e => {e.stop_propagation ()handleAddSingleMilestone (milestone) }
