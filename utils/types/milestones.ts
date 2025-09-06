




  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];

  updatedAt: string

}
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (





    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  id: string;
  name: string;
  url: string;
  type: string;
  size: number;


  uploaded_at: string,

}






>>>>>>> origin/feature/merge-conflicts-and-improvements
  title: string;
  description?: string;

  attachments?: MilestoneAttachment[]

}





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

export interface UpdateMilestoneRequest {


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  title?: string;
  description?: string;
  dueDate?: string;
  amountUsd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];










>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


