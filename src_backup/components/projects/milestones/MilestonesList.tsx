
          "Break down the project into manageable milestones to track progress and payments." : 
          "No milestones have been created for this project yet."}
          "Break down the project into manageable milestones to track progress and payments. : 
          No milestones have been created for this project yet."}
        action={isClient ?;
          {text: "Create First Milestone",onClick: () => setShowAddForm(true)} : undefined;
        }if (milestones && milestones.length === 0 && !showAddForm) {return (<EmptyState;
        icon = {<span className="text-3xl">📊</span>}
        title="No Milestones Yet";
        description = {isClient ? ;
          "Break down the project into manageable milestones to track progress and payments." : ;
          "No milestones have been created for this project yet."}
        action={isClient ? ;
          {text: "Create First Milestone",onClick: (,) => setShowAddForm(true)} : undefined;



          "Break down the project into manageable milestones to track progress and payments." :;
          "No milestones have been created for this project yet." }
        action={is_client ?;
          {text: "Create First Milestone",on_click: (, ) => setShowAddForm (true)} : undefined;
          "Break down the project into manageable milestones to track progress and payments. :;
          No milestones have been created for this project yet." }
        action={is_client ?;
          {text: "Create First Milestone,on_click: (, ) => setShowAddForm (true)} : undefined;


    </div>)}
";<AddMilestoneForm;
import React, { useState } from 'react';
import { Milestone,MilestoneStatus,MilestoneActivity} from '@/hooks/useMilestones';


export const MilestonesList: React.FC<MilestonesListProps> = ({
// lucide-react doesn't export PlusIcon, use our icon wrapper
import { Plus } from 'lucide-react'
