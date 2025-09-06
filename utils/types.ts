export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  requiredSkills: string[];
  budgetMinUsd?: number;
  budgetMaxUsd?: number;
  deliveryDeadlineIso?: string;
  clientEmail: string;
  status: 'New' | 'In Progress' | 'Completed' | 'Cancelled';
  createdAtIso: string;
  updatedAtIso: string;
}