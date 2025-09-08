
if (isLoading) {return ())}
      </div>;
    )}if (milestones.length === 0 && !showAddForm) {return (<EmptyState;
        }
        icon = {<span className="text-3xl">📊</span>}"
        title="No Milestones Yet";"
        description={isClient ?;
          "Break down the project into manageable milestones to track progress and payments." :;"
          "No milestones have been created for this project yet."}"
        action={isClient ?;
          {"text": "Create First Milestone","onClick": () => setShowAddForm(true)} : undefined;"
        }if (milestones && milestones.length === 0 && !showAddForm) {return (<EmptyState;
        }
        icon = {<span className="text-3xl">📊</span>}"
        title="No Milestones Yet";"
        description = {isClient ? ;
          "Break down the project into manageable milestones to track progress and payments." : ;"
          "No milestones have been created for this project yet."}"
        action={isClient ? ;
          {"text": "Create First Milestone","onClick": (,) => setShowAddForm(true)} : undefined;"
        }
  return ()}{showAddForm && (<Card>;
          <CardContent className="pt-6">;"
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>;"
      {showAddForm && (<Card>;
          <CardContent className="pt-6">;"
            <h3 className="text-lg font-medium mb-4">Create New Milestone</h3>;<AddMilestoneForm;"
            <AddMilestoneForm;
              }
              onSubmit = {handleSubmit}
              isSubmitting = {isSubmitting}
              onCancel = {(,) => setShowAddForm(false)}
            />;
          </CardContent>;
        </Card>;
      )}<div className="space-y-4">;"
        {milestones && milestones.map((milestone,) => (<MilestoneCard;
            }
            key = {milestone.id}
            id = {milestone.id}
            projectId = {milestone.project_id}
            title = {milestone.title}
            description = {milestone.description}
            amount = {parseFloat(milestone.amount.toString())}
            status = {milestone.status}
            dueDate = {milestone.due_date}
            onApprove = {onApprove}
            onReject = {onReject} />;
        ))}</div>;
    </div>;
  )}// Check condition;
if ( {) {$2;
}
    return (<div className="space - y-4">;"
        {[1, 2, 3].map ((i, ) => (<Card key={i}>;
            <CardContent className="p - 6">;"
              <div className="h - 6 w - 48 bg - muted rounded animate - pulse mb - 4"></div>;"
              <div className="h - 4 bg - muted rounded animate - pulse w - full mb - 2"></div>;"
              <div className="h - 4 bg - muted rounded animate - pulse w - 3/4"></div>;"
            </CardContent>;
          </Card>))}
      </div>)}
  // Check condition;
if ( {) {$2;
}
    return (<EmptyState;
        icon = {<span className="text - 3xl">📊</span> }"
        title="No Milestones Yet";"
        description = {is_client ?;
          "Break down the project into manageable milestones to track progress and payments." :;"
          "No milestones have been created for this project yet." }"
        action={is_client ?;
          {"text": "Create First Milestone","on_click": (, ) => setShowAddForm (true)} : undefined;"
        }
      />)}
  return (<div className="space - y-6">;"
      {is_client && !showAddForm && (<div className="flex justify - end">;"
          <Button on_click={(, ) => setShowAddForm (true)}>;
            <Plus className="h - 4 w - 4 mr - 2" />;"
            Add Milestone;
          </Button>;
        </div>)}
      {showAddForm && (<Card>;
          <CardContent className="pt - 6">;"
            <h3 className="text - lg font - medium mb - 4">Create New Milestone</h3>;"
            <AddMilestoneForm;
              }
              on_submit = {handle_submit }
              is_submitting = {is_submitting }
              on_cancel = {(, ) => setShowAddForm (false) }
            />;
          </CardContent>;
        </Card>)}
      <div className="space - y-4">;"
        {milestones.map ((milestone, ) => (<MilestoneCard;
            }
            key = {milestone.id }
            id = {milestone.id }
            project_id = {milestone.project_id }
            title = {milestone.title }
            description = {milestone.description }
            amount = {parse_float (milestone.amount.to_string ()) }
            status = {milestone.status }
            due_date = {milestone.due_date }
            on_approve = {on_approve }
            on_reject = {on_reject } />))}
      </div>;
    </div>)}
";<AddMilestoneForm;"
import React, { useState } from 'react';'
import { Milestone,MilestoneStatus,MilestoneActivity} from '@/hooks/useMilestones';'
import { useAuth  } from '@/hooks/useAuth';'
import { MilestoneCard  } from './MilestoneCard';'
import { AddMilestoneForm  } from './AddMilestoneForm';'
import { Button  } from '@/components/ui/button';'
import { Card, CardContent  } from '@/components/ui/card';'
// lucide-react doesn't export PlusIcon, use our icon wrapper;'
import { Plus  } from 'lucide-react';'
import { EmptyState  } from '@/components/ui/empty-state';'
import { Milestone, MilestoneStatus, MilestoneActivity   } from '@/hooks/useMilestones';'
import { useAuth   } from '@/hooks/useAuth';'
import { MilestoneCard   } from './MilestoneCard';'
import { AddMilestoneForm   } from './AddMilestoneForm';'
import { Button   } from '@/components/ui/button';'
import { Card, CardContent   } from '@/components/ui/card';'
// lucide-react doesn't export PlusIcon, use our icon wrapper;'
interface MilestonesListProps  {"milestones": Milestone[];
  }
  "activities": Record<string, MilestoneActivity[]>,"isLoading": boolean;
  "isClient": boolean;
  "onCreateMilestone": ("data": any) => Promise<Milestone | null>;
  "onUpdateStatus": ("id": string, "status": MilestoneStatus, comment?: string) => Promise<boolean>,"onDeleteMilestone": ("id": string) => Promise<boolean>;
  "onUploadDeliverable": ("id": string, "file": File) => Promise<any>;
  "isSubmitting": boolean;
  onApprove?: ("id": string) => Promise<void>;
  onReject?: ("id": string) => Promise<void>;
}
export const "MilestonesList": React.FC<MilestonesListProps> = ({