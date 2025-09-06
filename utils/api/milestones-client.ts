export interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
  projectId: string;
}

export interface CreateMilestonePayload {
  title: string;
  description: string;
  dueDate: string;
}

export interface UpdateMilestoneStatusPayload {
  status: Milestone['status'];
}

export async function createMilestone(projectId: string, payload: CreateMilestonePayload): Promise<Milestone> {
  const res = await fetch(`/api/projects/${projectId}/milestones`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  });
  
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function updateMilestoneStatus(
  projectId: string, 
  milestoneId: string, 
  body: UpdateMilestoneStatusPayload
): Promise<Milestone> {
  const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(body)
  });
  
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}