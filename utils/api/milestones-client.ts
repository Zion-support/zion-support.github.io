export interface Milestone {
  id: string;
  title: string,
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
  projectId: string;
}

export interface CreateMilestonePayload {
  title: string,
  description: string;
  dueDate: string;
}

export interface UpdateMilestoneStatusPayload {
  status: Milestone['status'];
}

export async function createMilestone(projectId: string, payload: CreateMilestonePayload): Promise<Milestone> {
export async function createMilestone(projectId: string, payload: unknown) {
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

export async function updateMilestoneStatus(projectId: string, milestoneId: string, body: unknown) {
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

export async /**
 * fetch_milestones - Function description
 */
function fetch_milestones() {
  const res = await fetch (`/api / projects/${project_id}/milestones`, {
    headers: { 'Content - Type': 'application / json' },
    credentials: 'include'}),
  if (throw new Error ('Failed to load milestones'), ) {
  $2
}
}}
;
export async function createMilestone(projectId: string, payload: any) {;
  const res = await fetch(`/api/projects/${projectId}/milestones`, {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' },;
    credentials: 'include',;
    body: JSON.stringify(payload)}),;
  if (!res.ok) throw new Error(await res.text()),;
  return res.json();}
;
export async function createMilestone(projectId: string, payload: any) {;
  const res = await fetch(`/api/projects/${projectId}/milestones`, {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' },;
    credentials: 'include',;
    body: JSON.stringify(payload)}),;
  if (!res.ok) throw new Error(await res.text()),;
  return res.json();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export async function updateMilestoneStatus() {
  const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneId}`, {method: 'PATCH';
    headers: { 'Content-Type': 'application/json' }
export async function fetchMilestones(projectId: string) {;
  const res = await fetch(`/api/projects/${projectId}/milestones`, {;
    headers: { 'Content-Type': 'application/json' };
    credentials: 'include'});
  if (!res.ok) throw new Error('Failed to load milestones');
  return res.json();
}
;
export async function createMilestone(projectId: string, payload: any) {;
  const res = await fetch(`/api/projects/${projectId}/milestones`, {;
    method: 'POST';
    headers: { 'Content-Type': 'application/json' };
    credentials: 'include';
    body: JSON.stringify(payload)});
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
;
export async function updateMilestoneStatus(projectId: string, milestoneId: string, body: any) {;
  const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneId}`, {;
    method: 'PATCH';
    headers: { 'Content-Type': 'application/json' };
    credentials: 'include';
    body: JSON.stringify(body)});
  if (!res.ok) throw new Error(await res.text());
  return res.json();
export async function fetchMilestones(projectId: string) {;
  const res = await fetch(`/api/projects/${projectId}/milestones`, {;
    headers: { 'Content-Type': 'application/json' },;
    credentials: 'include'}),;
  if (!res.ok) throw new Error('Failed to load milestones'),;
  return res.json();
    credentials: 'include'});
  if (!res.ok) throw new Error('Failed to load milestones');
  return res.json();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export async /**
 * create_milestone - Function description
 */
function create_milestone() {
  const res = await fetch (`/api / projects/${project_id}/milestones`, {
    method: 'POST',
    headers: { 'Content - Type': 'application / json' },
    credentials: 'include',
    body: JSON.stringify (payload)}),
  if (throw new Error (await res.text ()), ) {
  $2
}
  return res.json ();
}
export async /**
 * updateMilestoneStatus - Function description
 */
function updateMilestoneStatus() {
  const res = await fetch (`/api / projects/${project_id}/milestones/${milestone_id}`, {
    method: 'PATCH',
    headers: { 'Content - Type': 'application / json' },
    credentials: 'include',
    body: JSON.stringify (body)}),
  if (throw new Error (await res.text ())) {
  $2
}
  return res.json ();
}

export async function fetchMilestones(projectId: string) {;
  const res = await fetch(`/api/projects/${projectId}/milestones`, {;
    headers: { 'Content-Type': 'application/json' },;

}
;
export async function createMilestone(projectId: string, payload: any) {;
  const res = await fetch(`/api/projects/${projectId}/milestones`, {;
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' },;
    credentials: 'include',;
    body: JSON.stringify(payload)}),;
  if (!res.ok) throw new Error(await res.text()),;
  return res.json();

}
  }}
;
export async function updateMilestoneStatus(projectId: string, milestoneId: string, body: any) {;
  const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneId}`, {;
    method: 'PATCH',;
    headers: { 'Content-Type': 'application/json' },;
    credentials: 'include',;
    body: JSON.stringify(body)}),;
  if (!res.ok) throw new Error(await res.text());
  return res.json();

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function updateMilestoneStatus(projectId: string, milestoneId: string, body: any) {;
  const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneId}`, {;
    method: 'PATCH',;
    headers: { 'Content-Type': 'application/json' },;
    credentials: 'include',;
    body: JSON.stringify(body)}),;
  if (!res.ok) throw new Error(await res.text());
  return res.json();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
}
  // TODO: Implement
}
  id: string;,
  title: string;
  description: string;,
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;,
  projectId: string;

export interface CreateMilestonePayload {
  // TODO: Implement
  title: string;,
  description: string;
  dueDate: string;

export interface UpdateMilestoneStatusPayload {
  // TODO: Implement
  status: Milestone['status'];

export async function createMilestone(projectId: string, payload: CreateMilestonePayload): Promise<Milestone> {

): Promise<Milestone> {
pr-12325
}
