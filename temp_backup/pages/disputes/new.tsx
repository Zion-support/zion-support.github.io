 type ReasonType = typeof REASONS[number];
const [projectId, setProjectId] = useState (qProjectId || '');
const [reason, setReason] = useState<ReasonType> ('Scope Disagreement');
const [reasonDetails, setReasonDetails] = useState ('');
const [description, setDescription] = useState ('');
const [files, setFiles] = useState<File[]> ([]);
const [talentUserId, setTalentUserId] = useState (talentId || '');
const [clientUserId, setClientUserId] = useState (clientId || (user.role === 'client'? user.id : '') );
const [submitting, setSubmitting] = useState (false);
}return (<EnhancedLayout> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </form> </div> </EnhancedLayout>) 
}
}