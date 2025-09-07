export interface Milestone {
  // TODO: Implement
}
  id: string;,
  title: string;
  description: string;,
  status: 'pending' | 'in-progress' | 'completed';'
  dueDate: string;,
  projectId: string;
}

export interface CreateMilestonePayload {
  // TODO: Implement
}
  title: string;,
  description: string;
  dueDate: string;
}

export interface UpdateMilestoneStatusPayload {
  // TODO: Implement
}'
  status: Milestone['status'];'
}

export async function createMilestone(projectId: string, payload: CreateMilestonePayload): Promise<Milestone> {
</Milestone>
): Promise<Milestone> {
</Milestone>'