export async function fetchMilestones() {
  const res = await fetch(`/api/projects/${projectId}/milestones`, {headers: { 'Content-Type': 'application/json' }
    credentials: 'include'});
  if (!res.ok) throw new Error('Failed to load milestones');
  return res.json();
}
export async function createMilestone() {
  const res = await fetch(`/api/projects/${projectId}/milestones`, {method: 'POST';
    headers: { 'Content-Type': 'application/json' }
    credentials: 'include';
    body: JSON.stringify(payload)});
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
export async function updateMilestoneStatus() {
  const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneId}`, {method: 'PATCH';
    headers: { 'Content-Type': 'application/json' }
    credentials: 'include';
    body: JSON.stringify(body)});
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}