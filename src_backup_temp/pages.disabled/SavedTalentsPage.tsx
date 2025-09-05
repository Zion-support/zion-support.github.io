import React, { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import TalentCard from '@/components/talent/TalentCard';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
export default function SavedTalentsPage() {
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchSavedTalents = async () => {
      setIsLoading(true);
      try {
        if (!user) {
          setSavedTalents([]);
          return;
        }
        // Simulate fetching saved talents
        const mockTalents = [{
            "id": '1',
            "name": 'John Doe',
            "title": 'Full Stack Developer',
            "location": 'San Francisco, CA',
            "rating": 4.8,
            "hourlyRate": 75,
            "availability": 'Available now',
            "skills": ['React', 'Node.js', 'TypeScript'],
            "image": null
          },
          {
            "id": '2',
            "name": 'Jane Smith',
            "title": 'UI/UX Designer',
            "location": 'New York, NY',
            "rating": 4.9,
            "hourlyRate": 65,
            "availability": 'Available in 2 days',
            "skills": ['Figma', 'Adobe XD', 'Sketch'],
            "image": null
          };
        ];
        setSavedTalents(mockTalents);
      } catch (error) {
        console.error('Error fetching saved "talents": ', error);
        toast.error('Failed to load saved talents');
      } finally {
        setIsLoading(false);
      }
    };
    fetchSavedTalents();
  }, [user]);
  const handleRequestHire = ($1) => {
    toast.success(`Hire request sent to ${talent.name};`);
  };
  const handleViewProfile = ($1) => {
    toast.info(`Viewing profile for ${talent.name};`);
  };
  if (isLoading) {
    return (
      <>
        <SEO title="Saved Talents" description="Your saved talent profiles" />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading saved talents...</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <SEO title="Saved Talents" description="Your saved talent profiles" />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Talents</h1>
            <p className="text-gray-600">Your bookmarked talent profiles</p>
          </div>
          {savedTalents.length > 0 ? (
            <div className="grid gap-6 "md": grid-cols-2 lg:grid-cols-3">
              {savedTalents.map((talent) => (
                <TalentCard
                  key={talent.id}
                  talent={talent}
                  onBook={handleRequestHire}
                  onViewProfile={handleViewProfile}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No saved talents yet</h3>
              <p className="text-gray-600 mb-4">
                Start exploring the marketplace to find and save talented professionals.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
import React,{ useState,useEffect } from 'react'; import { SEO } from '@/components/SEO'; import TalentCard from '@/components/talent/TalentCard'; import { useAuth } from '@/hooks/useAuth'; import { supabase } from '@/integrations/supabase/client'; import { toast } from 'sonner'; export default function SavedTalentsPage() { const { user } = useAuth(); const [savedTalents,setSavedTalents] = useState([]); const [isLoading,setIsLoading] = useState(true); useEffect(() => { const fetchSavedTalents = async () => { setIsLoading(true); try { if (!user) { setSavedTalents([]); return} const mockTalents = [ { id: '1',name: 'John Doe',title: 'Full Stack Developer',location: 'San Francisco,CA',rating: 4.8,hourlyRate: 75,availability: 'Available now',skills: ['React','Node.js','TypeScript'],image: null },{ id: '2',name: 'Jane Smith',title: 'UI/UX Designer',location: 'New York,NY',rating: 4.9,hourlyRate: 65,availability: 'Available in 2 days',skills: ['Figma','Adobe XD','Sketch'],image: null }; ]; setSavedTalents(mockTalents)} catch (error) { console.error('Error fetching saved talents:',error); toast.error('Failed to load saved talents')} finally { setIsLoading(false)} }; fetchSavedTalents()},[user]); const handleRequestHire = ($1) => { toast.success(`Hire request sent to ${talent.name};`)}; const handleViewProfile = ($1) => { toast.info(`Viewing profile for ${talent.name};`)}; if (isLoading) { return ( <> <SEO title="Saved Talents" description="Your saved talent profiles" /> <div className="min-h-screen bg-gray-50 flex items-center justify-center"> <div className="text-center"> <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div> <p className="text-gray-600">Loading saved talents...</p> </div> </div> </> )} return ( <> <SEO title="Saved Talents" description="Your saved talent profiles" /> <div className="min-h-screen bg-gray-50"> <div className="container mx-auto py-8 px-4"> <div className="mb-8"> <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Talents</h1> <p className="text-gray-600">Your bookmarked talent profiles</p> </div> {savedTalents.length > 0 ? ( <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> {savedTalents.map((talent) => ( <TalentCard key={talent.id} talent={talent} onBook={handleRequestHire} onViewProfile={handleViewProfile} /> ))} </div> ) : ( <div className="text-center py-12"> <div className="text-gray-400 mb-4"> <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> </svg> </div> <h3 className="text-lg font-medium text-gray-900 mb-2">No saved talents yet</h3> <p className="text-gray-600 mb-4"> Start exploring the marketplace to find and save talented professionals. </p> </div> )} </div> </div> </> )}