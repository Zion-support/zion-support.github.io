export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'active' | 'completed' | 'cancelled';
  clientId: string;
  talentId?: string;
  budget: number;
  deadline: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectPayload {
  title: string;
  description: string;
  budget: number;
  deadline: string;
  clientId: string;
}

export interface UpdateProjectPayload {
  title?: string;
  description?: string;
  status?: Project['status'];
  budget?: number;
  deadline?: string;
}

export async function createProject(payload: CreateProjectPayload): Promise<Project> {
  const res = await fetch('/api/projects', {
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

export async function getProjects(): Promise<Project[]> {
  const res = await fetch('/api/projects', {
    method: 'GET',
    credentials: 'include'
  });
  
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function updateProject(projectId: string, payload: UpdateProjectPayload): Promise<Project> {
  const res = await fetch(`/api/projects/${projectId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  });
  
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function deleteProject(projectId: string): Promise<void> {
  const res = await fetch(`/api/projects/${projectId}`, {
    method: 'DELETE',
    credentials: 'include'
  });
  
  if (!res.ok) throw new Error(await res.text());
}