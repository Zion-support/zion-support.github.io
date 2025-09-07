export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'active' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectRequest {
  title: string;
  description: string;
}

export async function createProject(payload: CreateProjectRequest): Promise<Project> {
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