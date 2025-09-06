 function bad (res: NextApiResponse, message: string, code = 400) {
  return res.status (code) .json ({
  ok: false, error: message 
}) 
}function canAccess (user: ReturnType<typeof getDemoUser>, project: Project) {
  
}export default function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
  const note: ProjectNote = {
  id: uuidv4 ();
authorId: user.id;
authorRole: user.role;
content;
createdAtIso: new Date () .toISOString () 
};
project.notes.push (note);
saveProject (project);
return res.json ({
  ok: true, project 
}) 
}const doc: ProjectDocument = {
  id: uuidv4 ();
name;
url;
uploadedAtIso: new Date () .toISOString () 
};
project.documents.push (doc);
saveProject (project);
return res.json ({
  ok: true, project 
}) 
}project.timeline = Array.isArray (timeline) ? timeline : project.timeline;
saveProject (project);
return res.json ({
  ok: true, project 
});
}saveProject (project);
return res.json ({
  ok: true, project 
});
}return bad (res, "Unknown action");
}
}
}