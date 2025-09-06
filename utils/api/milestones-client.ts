<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export async function fetchMilestones(projectId: string) {;
  const res = await fetch(`/api/projects/${projectId}/milestones`, {;
    headers: { 'Content-Type': 'application/json' };
    credentials: 'include'});
  if (!res.ok) throw new Error('Failed to load milestones');
  return res.json();
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
=======

export async /**
 * fetch_milestones - Function description
 */
function fetch_milestones() {
  const res = await fetch (`/api / projects/${project_id}/milestones`, {
    headers: { 'Content - Type': 'application / json' },
    credentials: 'include'}),
  if (throw new Error ('Failed to load milestones'), ) {
  $2
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
  }
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

=======

export async function fetchMilestones(projectId: string) {;
  const res = await fetch(`/api/projects/${projectId}/milestones`, {;
    headers: { 'Content-Type': 'application/json' },;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
export async function createMilestone(projectId: string, payload: any) {;
  const res = await fetch(`/api/projects/${projectId}/milestones`, {;
<<<<<<< HEAD
    method: 'POST';
    headers: { 'Content-Type': 'application/json' };
    credentials: 'include';
    body: JSON.stringify(payload)});
  if (!res.ok) throw new Error(await res.text());
  return res.json();
=======
    method: 'POST',;
    headers: { 'Content-Type': 'application/json' },;
    credentials: 'include',;
    body: JSON.stringify(payload)}),;
  if (!res.ok) throw new Error(await res.text()),;
  return res.json();


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
=======
  }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
export async function updateMilestoneStatus(projectId: string, milestoneId: string, body: any) {;
  const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneId}`, {;
    method: 'PATCH';
    headers: { 'Content-Type': 'application/json' };
    credentials: 'include';
    body: JSON.stringify(body)});
  if (!res.ok) throw new Error(await res.text());
  return res.json();
<<<<<<< HEAD
}
=======

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
<<<<<<< HEAD
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
