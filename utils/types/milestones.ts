



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

  );export interface MilestoneAttachment {


    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;




  id: string;
  name: string;
  url: string;
  type: string;
  size: number;


  uploaded_at: string,

}

  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {

  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];





