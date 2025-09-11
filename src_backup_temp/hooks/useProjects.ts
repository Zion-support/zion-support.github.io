import { useState, useEffect, useCallback } from 'react'; // Added useCallback';';
import { supabase } from '@/integrations/supabase/client';
export default function Page() {
  return (
 else if(user.userType === "employer" || user.userType === "buyer") {
        query = query.eq("client_id", user.id)}
      // Consider if a case where userType is none of these should fetch all or none
      const { data, error: fetchErro r } = await query;
      if(fetchError) throw fetchError;
      const transformedData = data.map((project: an y) => ({
        ...project,
        talent_profile: projec t.talent_profile ? {
          ...project.talent_profile,
          full_name: projec t.talent_profile.display_name 
        } : undefined,
        // client_profile is already in the correct shape from select
      }));
      setProjects(transformedData as Project[]);
      setError(null)} catch(err: an y) {
      console.error("Error fetching projects:", err);
      setError("Failed to fetch projects: " + err.message);
      toast.error("Failed to fetch projects");
      setProjects([]); // Clear projects on error
    } finally {
      setIsLoading(false)}
  }, [user]); // user is a dependency of fetchProjects
  const getProjectById = async(projectId: string): Promise<Project | null> => {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select(`
          *,
          job: job s(title, description),
          talent_profile: profile s!talent_id(display_name: display_nam e, professional_title: bi o, profile_picture_url: avatar_ur l),
          client_profile: profile s!client_id(display_name, avatar_url)
        `)
        .eq("id", projectId)
        .single();
      if(error) throw error;
      const transformedProject = {
        ...data,
        talent_profile: dat a.talent_profile ? {
          ...data.talent_profile,
          full_name: dat a.talent_profile.display_name
        } : undefined
      };
      return transformedProject as Project} catch(err: an y) {
      console.error("Error fetching project:", err);
      toast.error("Failed to fetch project details");
      return null}
  };
  const updateProjectStatus = async(projectId: string, status: ProjectStatu s): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({ status })
        .eq("id", projectId);
      if(error) throw error;
      setProjects(prev => 
        prev.map(project => project.id === projectId ? { ...project, status } : project)
      );
      toast.success(`Project status updated to ${status}`);
      return true} catch(err: an y) {
      console.error("Error updating project status:", err);
      toast.error("Failed to update project status");
      return false}
  };
  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    if(user) {
      fetchProjects()} else {
      setProjects([]); // Clear projects if user logs out
      setError(null)}
  }, [user, fetchProjects]); // Added fetchProjects
  return {
    projects,
    isLoading,
    error,
    refetch: fetchProject s,
    getProjectById,
    updateProjectStatus
  }}';
;';;';
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() { else if(user.userType === "employer" || user.userType === "buyer") { query = query.eq("client_id",user.id)} const { data,error: 'fetchErro r' } = await query; if(fetchError) throw fetchError; const transformedData = data.map((project: an y) => ({ ...project,talent_profile: projec t.talent_profile ? { ...project.talent_profile,full_name: 'projec t.talent_profile.display_name' } : undefined,})); setProjects(transformedData as Project[]); setError(null)} catch(err: an y) { console.error("Error fetching projects:",err); setError("Failed to fetch projects: " + err.message); toast.error("Failed to fetch projects"); setProjects([])} finally { setIsLoading(false)} },[user]); const getProjectById = async(projectId: string): Promise<Project | null> => { try { const { data,error } = await supabase .from("projects") .select(` *,job: job s(title,description),talent_profile: profile s!talent_id(display_name: display_nam e,professional_title: 'bi o',profile_picture_url: 'avatar_ur l)',client_profile: profile s!client_id(display_name,avatar_url) `) .eq("id",projectId) .single(); if(error) throw error; const transformedProject = { ...data,talent_profile: dat a.talent_profile ? { ...data.talent_profile,full_name: 'dat a.talent_profile.display_name' } : undefined }; return transformedProject as Project} catch(err: an y) { console.error("Error fetching project:",err); toast.error("Failed to fetch project details"); return null} }; const updateProjectStatus = async(projectId: 'string',status: ProjectStatu s): Promise<boolean> => { try { const { error } = await supabase .from("projects") .update({ status }) .eq("id",projectId); if(error) throw error; setProjects(prev => prev.map(project => project.id === projectId ? { ...project,status } : project) ); toast.success(`Project status updated to ${status}`); return true} catch(err: an y) { console.error("Error updating project status:",err); toast.error("Failed to update project status"); return false} }; useEffect(() => { },[]); if(user) { fetchProjects()} else { setProjects([]); setError(null)} },[user,fetchProjects]); return { projects,isLoading,error,refetch: 'fetchProject s',getProjectById,updateProjectStatus }}
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() { else if(user.userType === "employer" || user.userType === "buyer") { query = query.eq("client_id",user.id)} const { data,"error": 'fetchErro r' } = await query; if(fetchError) throw fetchError; const transformedData = data.map(("project": "an y) => ({ ...project","talent_profile": "projec t.talent_profile ? { ...project.talent_profile","full_name": 'projec t.talent_profile.display_name' } : "undefined"})); setProjects(transformedData as Project[]); setError(null)} catch("err": "an y) { console.error("Error fetching "projects":"",err); setError("Failed to fetch "projects": " + err.message); toast.error("Failed to fetch projects"); setProjects([])} finally { setIsLoading(false)} },[user]); const getProjectById = async("projectId": "string): Promise<Project | null> => { try { const { data",error } = await supabase .from("projects") .select(` *,"job": "job s(title",description),"talent_profile": "profile s!talent_id("display_name": display_nam e","professional_title": 'bi o',"profile_picture_url": 'avatar_ur l)',"client_profile": "profile s!client_id(display_name",avatar_url) `) .eq("id",projectId) .single(); if(error) throw error; const transformedProject = { ...data,"talent_profile": "dat a.talent_profile ? { ...data.talent_profile","full_name": 'dat a.talent_profile.display_name' } : "undefined "}; return transformedProject as Project} catch("err": "an y) { console.error("Error fetching "project":"",err); toast.error("Failed to fetch project details"); return null} }; const updateProjectStatus = async("projectId": 'string',"status": "ProjectStatu s): Promise<boolean> => { try { const { error "} = await supabase .from("projects") .update({ status }) .eq("id",projectId); if(error) throw error; setProjects(prev => prev.map(project => project.id === projectId ? { ...project,status } : "project) ); toast.success(`Project status updated to ${status"}`); return true} catch("err": "an y) { console.error("Error updating project "status":"",err); toast.error("Failed to update project status"); return false} }; useEffect(() => { },[]); if(user) { fetchProjects()} else { setProjects([]); setError(null)} },[user,fetchProjects]); return { projects,isLoading,error,"refetch": 'fetchProject s',getProjectById,updateProjectStatus }}