/* eslint-disable */
 interface TalentProfileProps {;
  profile: TalentProfileType;
  onRequestHire: () => void;
  onMessageTalent?: () => void
}

export function TalentProfile({
  profile
  onRequestHire

  onMessageTalent
}: TalentProfileProps) {
  const { isAuthenticated } = useAuth();
  profile,
  onRequestHire,
  onMessageTalent
}: TalentProfileProps) {
  const { isAuthenticated } = useAuth(),
  
  // Create proper availability object from talent profile

  const availability: Availability = {
    status:
      profile.availability_type === 'full_time'
        ? 'available'
        : profile.availability_type === 'part_time'
          ? 'limited'
          : 'unavailable'
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`
  }
  // Create proper skills array for ProfileSkills component
  const skillsArray = null;
    profile.skills?.map(skill => ({
      name: skill
      level: 3, // Default level since we don't have this data
    })) |[]
  // Create proper projects array for ProfileProjects component
  const projectsArray = null;
    profile.key_projects?.map((proj, i) => ({
      id: `project-${i}`
      title: proj.title
      description: proj.description
      date: new Date().toISOString(), // Default date since we don't have this data
    })) |[]

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Profile Header */}
      <ProfileHero
        name={profile.full_name}
        title={profile.professional_title}
        avatarUrl={profile.profile_picture_url}
        profileType='talent'
        rating={profile.average_rating}
        reviewCount={profile.rating_count}      />
      {/* Main content area */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
    status: profile.availability_type === 'full_time' ? 'available' : 
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`
  },
  
  // Create proper skills array for ProfileSkills component
  const skillsArray = profile.skills?.map(skill => ({
    name: skill,
    level: 3 // Default level since we don't have this data
  })) || [],
  
  // Create proper projects array for ProfileProjects component
  const projectsArray = profile.key_projects?.map((proj, i) => ({
    id: `project-${i}`,
    title: proj.title,
    description: proj.description,
    date: new Date().toISOString() // Default date since we don't have this data
  })) || [],
  
  return (
    <div className='container mx-auto px-4 py-8'>
import React from 'react',;
import { Handshake, MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { HireNowCTA } from './HireNowCTA',;
import { ProfileHero } from './ProfileHero',;
import { ProfileSkills } from './ProfileSkills',;
import { ProfileExperience } from './ProfileExperience',;
import { ProfileProjects } from './ProfileProjects',;
import { ProfileAvailability } from './ProfileAvailability',;
import { ProfileContact } from './ProfileContact',;
import { ProfileRatings } from './ProfileRatings',;
import { TalentProfile as TalentProfileType } from '@/types/talent',;
import { useAuth } from '@/hooks/useAuth',;
import { Availability } from '@/types/profile',;
interface TalentProfileProps {;
  profile: TalentProfileType,;
  onRequestHire: () => void,;
  onMessageTalent?: () => void;
}
;
export function TalentProfile({;
  profile,;
  onRequestHire,;
  onMessageTalent;
}: TalentProfileProps) {;
  const {;
  isAuthenticated ;
}= useAuth ();
//Create proper availability object from talent profile const availability: Availability = {;
  status: profile.availability type === 'full time' ? 'available' : profile.availability type === 'part time' ? 'limited' : 'unavailable';
message: `$ {;
  profile.professional title ;
}with $ {;
  profile.years experience ;`
}years of experience` ;
};'
//Create proper skills array for ProfileSkills component const skillsArray = profile.skills?.map (skill => ({;''
  name: skill;';''
level: 3 //Default level since we don't have this data ;
}) ) || [];`
id: `project-$ {;
  i ;`
}`;'
title: proj.title;''
description: proj.description;';''
date: new Date () .toISOString () //Default date since we don't have this data ;
}) ) || [];
return (</div> </div> {;
  /* Projects Section */ ;
}<ProfileProjects projects= {;
  projectsArray ;
}/> Reviews & Ratings </h2> <ProfileRatings userId= {;
  profile.id ;
}averageRating= {;
  profile.average rating ;
}ratingCount= {;
  profile.rating count ;
}/> </div> Connect with {;
  profile.full name ;
}for your next project and get started right away. {;`
  profile.hourly rate && `Rate starts at $$ {;
  profile.hourly rate ;`
}/hour.` ;
}</p> <div className='flex flex-wrap gap-4 justify-center' > <Button > <Handshake className='mr-2 h-5 w-5' /> Hire Now </Button> {';''
  onMessageTalent && (<Button size='lg' variant='outline' className='border-zion-purple text-zion-purple hover:bg-zion-purple/10' onClick={;''
  onMessageTalent ';''
}> <MessageSquare className='mr-2 h-5 w-5' /> Message </Button>) ;
}</div> </div> </div>) ;''
}</div> </div> </div>) ;''''
}''''''`