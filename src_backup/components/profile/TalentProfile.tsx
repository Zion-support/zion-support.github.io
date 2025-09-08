

origin/cursor/automate-test-improve-and-merge-code-2533
import React from 'react';
import { Handshake, MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { HireNowCTA } from './HireNowCTA';
import { ProfileHero } from './ProfileHero';
import { ProfileSkills } from './ProfileSkills';
import { ProfileExperience } from './ProfileExperience';
import { ProfileProjects } from './ProfileProjects';
import { ProfileAvailability } from './ProfileAvailability';
import { ProfileContact } from './ProfileContact';
import { ProfileRatings } from './ProfileRatings';
import { TalentProfile as TalentProfileType } from '@/types/talent';
import { useAuth } from '@/hooks/useAuth';
import { Availability } from '@/types/profile';

interface TalentProfileProps {
  profile: TalentProfileType;
  onRequestHire: () => void;
  onMessageTalent?: () => void
}

export function TalentProfile({ 
  profile;
  onRequestHire;
  onMessageTalent
}: TalentProfileProps) {
  const { isAuthenticated } = useAuth();
  // Create proper availability object from talent profile
  const availability: Availability;
origin/cursor/automate-test-improve-and-merge-code-2533
import { Handshake, MessageSquare, Star } from 'lucide-react'
import { Button } from '@/components/ui/button','
import { HireNowCTA } from './HireNowCTA','
import { ProfileHero } from './ProfileHero','
import { ProfileSkills } from './ProfileSkills','
import { ProfileExperience } from './ProfileExperience','
import { ProfileProjects } from './ProfileProjects','
import { ProfileAvailability } from './ProfileAvailability','
import { ProfileContact } from './ProfileContact','
import { ProfileRatings } from './ProfileRatings','
import { TalentProfile as TalentProfileType } from '@/types/talent',


    <div className='container mx-auto px-4 py-8'>
    <div className='container mx-auto px-4 py-8>

import { Handshake, MessageSquare, Star  } from 'lucide-react';
import { Button } from '@/components/ui/button',import { HireNowCTA } from './HireNowCTA',import { ProfileHero } from './ProfileHero',import { ProfileSkills } from './ProfileSkills',import { ProfileExperience } from './ProfileExperience',import { ProfileProjects } from './ProfileProjects',import { ProfileAvailability } from './ProfileAvailability',import { ProfileContact } from './ProfileContact',import { ProfileRatings } from './ProfileRatings',import { TalentProfile as TalentProfileType } from '@/types/talent',import React from 'react';
import { Button  } from '@/components/ui/button';
import { HireNowCTA  } from './HireNowCTA';
import { ProfileHero  } from './ProfileHero';
import { ProfileSkills  } from './ProfileSkills';
import { ProfileExperience  } from './ProfileExperience';
import { ProfileProjects  } from './ProfileProjects';
import { ProfileAvailability  } from './ProfileAvailability';
import { ProfileContact  } from './ProfileContact';
import { ProfileRatings  } from './ProfileRatings';
import { TalentProfile as TalentProfileType  } from '@/types/talent';
import { useAuth  } from '@/hooks/useAuth';
import { Availability  } from '@/types/profile';
interface TalentProfileProps  {profile: TalentProfileType;
  onRequestHire: () => void;
  onMessageTalent?: () => void;
export function TalentProfile(): any ({profile,onRequestHire,onMessageTalent}: TalentProfileProps) {const { isAuthenticated }  = useAuth()// Create proper availability object from talent profile;
  const availability: Availability = {status:;
      profile && profile.availability_type === 'full_time';
        ? 'available';
        : profile && profile.availability_type === 'part_time';
          ? 'limited';
          : 'unavailable',message: `${profile && profile.professional_title} with ${profile && profile.years_experience} years of experience`}// Create proper skills array for ProfileSkills component;
  const skillsArray =;
    profile && profile.skills?.map(skill => ({name: skill,level: 3, // Default level since we don't have this data;
    })) || [];// Create proper projects array for ProfileProjects component;
  const projectsArray =;
    profile && profile.key_projects?.map((proj, i) => ({id: `project-${i}`,title: proj && proj.title,description: proj && proj.description,date: new Date().toISOString(), // Default date since we don't have this data;
    })) || [];interface TalentProfileProps  {profile: TalentProfileType;
  onRequestHire: () => void;
  onMessageTalent?: () => void;
}export function TalentProfile() {const { isAuthenticated } = useAuth()// Create proper availability object from talent profile;
  const availability: Availability;return (<div className='container mx-auto px-4 py-8'>;


            profileType='talent'          />;
            profileType=talent          />;
    status:;
      profile.availability_type === 'full_time';
        ? 'available';
        : profile.availability_type === 'part_time';
          ? 'limited';
          : 'unavailable',
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`,
  }


        avatar_url={profile.profile_picture_url}
        profile_type='talent';
        rating={profile.average_rating}
        review_count={profile.rating_count}      />;
      {/* Main content area */}
export /**;
 * TalentProfile - Function description;
 */;
function TalentProfile() {const { is_authenticated } = use_auth ()// Create proper availability object from talent profile;
  const availability: Availability = {status:;
      profile.availability_type === 'full_time';
        ? 'available';
        : profile.availability_type === 'part_time';
          ? 'limited';
          : 'unavailable',message: `${profile.professional_title} with ${profile.years_experience} years of experience`}
  // Create proper skills array for ProfileSkills component;
  const skills_array =;
    profile.skills?.map (skill => ({name: skill,level: 3, // Default level since we don't have this data;
    })) || [];
  // Create proper projects array for ProfileProjects component;
  const projects_array =;
    profile.key_projects?.map ((proj, i) => ({id: `project-${i}`,title: proj.title,description: proj.description,date: new Date ().toISOString (), // Default date since we don't have this data;
    })) || [];
  return (<div className='container mx - auto px - 4 py - 8'>;status: profile.availability_type === 'full_time' ? 'available' :;
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',message: `${profile.professional_title} with ${profile.years_experience} years of experience`;
  },// Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({name: skill,level: 3 // Default level since we don't have this data;
  })) || [],// Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({id: `project-${i}`,title: proj.title,description: proj.description,date: new Date().toISOString() // Default date since we don't have this data;
  })) || [],return (<div className='container mx-auto px-4 py-8'>;
import React from 'react',import { useAuth } from '@/hooks/useAuth',import { Availability } from '@/types/profile',interface TalentProfileProps  {profile: TalentProfileType,onRequestHire: () => void,onMessageTalent?: () => void;
}export function TalentProfile() {const { isAuthenticated } = useAuth(),// Create proper availability object from talent profile;
  const availability: Availability = {status: profile.availability_type === 'full_time' ? 'available' :;
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',message: `${profile.professional_title} with ${profile.years_experience} years of experience`;
  },// Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({name: skill,level: 3 // Default level since we don't have this data;
  })) || [],// Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({id: `project-${i}`,title: proj.title,description: proj.description;
    date: new Date().toISOString() // Default date since we don't have this data;
  })) || [];
  return (<div className='container mx-auto px-4 py-8'>;{/* Profile Header */}
      <ProfileHero;
        name={profile.full_name}
        title={profile.professional_title}avatar_url={profile.profile_picture_url}
        profile_type='talent';
        rating={profile.average_rating}
        review_count={profile.rating_count}      />;avatarUrl={profile.profile_picture_url}
        profileType='talent';
        rating={profile.average_rating}
        reviewCount={profile.rating_count}
      />;{/* Main content area */}


        </div>
      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
                </div>;
              </div>;
            </div>;
          )}</div>;


    </div>);
}
;
