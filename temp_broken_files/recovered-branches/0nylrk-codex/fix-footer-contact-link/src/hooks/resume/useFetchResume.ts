 setIsLoading (true);
setError (null);
}// Fetch work experience const {
  data: workData, error: workError 
}= await supabase .from ('work history') .select ('*') .eq ('resume id', resumeData.id) if (workError) throw workError;
// Fetch education const {
  data: educationData, error: educationError 
}= await supabase .from ('education') .select ('*') .eq ('resume id', resumeData.id) if (educationError) throw educationError;
// Fetch skills const {
  data: skillsData, error: skillsError 
}= await supabase .from ('resume skills') .select ('*') .eq ('resume id', resumeData.id);
if (skillsError) throw skillsError;
// Fetch certifications const {
  data: certData, error: certError 
}= await supabase .from ('certifications') .select ('*') .eq ('resume id', resumeData.id);
if (certError) throw certError;
const fullResume: Resume = {
  id: resumeData.id, user id: resumeData.user id, basic info: {
  id: resumeData.id, title: resumeData.title, headline: resumeData.headline, summary: resumeData.summary 
};
work experience: workData || [];
education: educationData || [];
skills: skillsData || [];
certifications: certData || [];
is active: resumeData.is active 
};
}