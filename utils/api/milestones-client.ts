<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
    credentials: 'include'});
  if (!res.ok) throw new Error('Failed to load milestones');
  return res.json();
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export async function fetchMilestones(projectId: string) {;
  const res = await fetch(`/api/projects/${projectId}/milestones`, {;
    headers: { 'Content-Type': 'application/json' },;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    credentials: 'include'}),;
  if (!res.ok) throw new Error('Failed to load milestones'),;
  return res.json();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    credentials: 'include'});
  if (!res.ok) throw new Error('Failed to load milestones');
  return res.json();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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

<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
export async function updateMilestoneStatus(projectId: string, milestoneId: string, body: any) {;
  const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneId}`, {;
    method: 'PATCH',;
    headers: { 'Content-Type': 'application/json' },;
    credentials: 'include',;
    body: JSON.stringify(body)}),;
  if (!res.ok) throw new Error(await res.text());
  return res.json();
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

}
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
