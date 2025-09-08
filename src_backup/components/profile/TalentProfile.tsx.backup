<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
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
=======
import { Handshake, MessageSquare, Star } from 'lucide-react
import { Button } from "@/components/ui/button,
import { HireNowCTA } from "./HireNowCTA",
import { ProfileHero } from ./ProfileHero","
import { ProfileSkills } from ./ProfileSkills,"
import { ProfileExperience } from "./ProfileExperience,
import { ProfileProjects } from "./ProfileProjects",
import { ProfileAvailability } from ./ProfileAvailability","
import { ProfileContact } from ./ProfileContact,"
import { ProfileRatings } from "./ProfileRatings,
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Handshake, MessageSquare, Star } from 'lucide-react'
import { Button } from "@/components/ui/button","
import { HireNowCTA } from "./HireNowCTA","
import { ProfileHero } from "./ProfileHero","
import { ProfileSkills } from "./ProfileSkills","
import { ProfileExperience } from "./ProfileExperience","
import { ProfileProjects } from "./ProfileProjects","
import { ProfileAvailability } from "./ProfileAvailability","
import { ProfileContact } from "./ProfileContact","
import { ProfileRatings } from "./ProfileRatings","
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { TalentProfile as TalentProfileType } from "@/types/talent",
>>>>>>> origin/resolved-merge-conflicts

import React from 'react';
import { Handshake, MessageSquare, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
'
import { HireNowCTA } from './HireNowCTA';'
import { ProfileHero } from './ProfileHero';'
import { ProfileSkills } from './ProfileSkills';'
import { ProfileExperience } from './ProfileExperience';'
import { ProfileProjects } from './ProfileProjects';'
import { ProfileAvailability } from './ProfileAvailability';'
import { ProfileContact } from './ProfileContact';'
import { ProfileRatings } from './ProfileRatings';'
import { TalentProfile as TalentProfileType } from '@/types/talent';'
import { useAuth } from '@/hooks/useAuth';'
import { Availability } from '@/types/profile';

export function TalentProfile(): any ({;
  profile,;
  onRequestHire,;
  onMessageTalent,;
}: TalentProfileProps) {;
  const { isAuthenticated } = useAuth();

  // Create proper availability object from talent profile;
  const availability: Availability = {;
    status:;'
      profile && profile.availability_type === 'full_time';'
        ? 'available';'
        : profile && profile.availability_type === 'part_time';'
          ? 'limited';'
          : 'unavailable',;
    message: `${profile && profile.professional_title} with ${profile && profile.years_experience} years of experience`,;
  };

  // Create proper skills array for ProfileSkills component;
  const skillsArray =;
    profile && profile.skills?.map(skill => ({;
      name: skill,;'
      level: 3, // Default level since we don't have this data;
    })) || [];

  // Create proper projects array for ProfileProjects component;
  const projectsArray =;
    profile && profile.key_projects?.map((proj, i) => ({;`
      id: `project-${i}`,;
      title: proj && proj.title,;
      description: proj && proj.description,;'
      date: new Date().toISOString(), // Default date since we don't have this data;
    })) || [];

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
  return (

<<<<<<< HEAD


=======
<<<<<<< HEAD
    <div className='container mx-auto px-4 py-8'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <div className='container mx-auto px-4 py-8'>
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className='container mx-auto px-4 py-8>
>>>>>>> origin/resolved-merge-conflicts

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
<<<<<<< HEAD
  const availability: Availability;return (<div className='container mx-auto px-4 py-8'>;
=======
  const availability: Availability;return (<div className=container mx-auto px-4 py-8'>;
=======
    <div className='container mx-auto px-4 py-8'>
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Profile Header */}
      <ProfileHero;
        name={profile.full_name}
        title={profile.professional_title}
        avatarUrl={profile.profile_picture_url}'
        profileType='talent'

        rating={profile && profile.average_rating}
        reviewCount={profile && profile.rating_count}      />;

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>;
        {/* Left Column - Skills & Info */}'
        <div className='space-y-8'>;
          <ProfileSkills skills={skillsArray} />;
          <ProfileAvailability availability={availability} />;
          <ProfileContact;
            email={profile && profile.user_id}
            profileName={profile && profile.full_name}'
<<<<<<< HEAD


=======
<<<<<<< HEAD
            profileType='talent'          />;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
            profileType='talent'          />;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            profileType=talent          />;
>>>>>>> origin/resolved-merge-conflicts
    status:;
      profile.availability_type === 'full_time';
        ? 'available';
        : profile.availability_type === 'part_time';
          ? 'limited';
          : 'unavailable',
<<<<<<< HEAD
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`,
  }
=======
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`}
=======
            profileType='talent'          />;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </div>;

        <div className='lg:col-span-2 space-y-8'>;
          {/* Bio Section */}
'
import React from 'react';'
import { Handshake, MessageSquare, Star } from 'lucide-react';'
import { Button } from '@/components / ui / button';'
import { HireNowCTA } from './HireNowCTA';'
import { ProfileHero } from './ProfileHero';'
import { ProfileSkills } from './ProfileSkills';'
import { ProfileExperience } from './ProfileExperience';'
import { ProfileProjects } from './ProfileProjects';'
import { ProfileAvailability } from './ProfileAvailability';'
import { ProfileContact } from './ProfileContact';'
import { ProfileRatings } from './ProfileRatings';'
import { TalentProfile as TalentProfileType } from '@/types / talent';'
import { use_auth } from '@/hooks / use_auth';'
import { Availability } from '@/types / profile';

    status: profile.availability_type === 'full_time' ? 'available' : 
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',

    message: `${profile.professional_title} with ${profile.years_experience} years of experience`
  },
  
  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({}
    name: skill,'
    level: 3 // Default level since we don't have this data;
  })) || [],
  
  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({}`
    id: `project-${i}`,
    title: proj.title,
    description: proj.description,'
    date: new Date().toISOString() // Default date since we don't have this data;
  })) || [],
  
  return ('
    <div className='container mx-auto px-4 py-8'>'
import React from 'react',;'
import { Handshake, MessageSquare, Star } from 'lucide-react';'
import { Button } from '@/components/ui/button',;'
import { HireNowCTA } from './HireNowCTA',;'
import { ProfileHero } from './ProfileHero',;'
import { ProfileSkills } from './ProfileSkills',;'
import { ProfileExperience } from './ProfileExperience',;'
import { ProfileProjects } from './ProfileProjects',;'
import { ProfileAvailability } from './ProfileAvailability',;'
import { ProfileContact } from './ProfileContact',;'
import { ProfileRatings } from './ProfileRatings',;'
import { TalentProfile as TalentProfileType } from '@/types/talent',;'
import { useAuth } from '@/hooks/useAuth',;'
import { Availability } from '@/types/profile',;
interface TalentProfileProps {;
  profile: TalentProfileType,;
  onRequestHire: () => void,;
  onMessageTalent?: () => void;
}
;
export function TalentProfile() { return null; }
  const { isAuthenticated } = useAuth(),;
  // Create proper availability object from talent profile;
  const availability: Availability = {;'
    status: profile.availability_type === 'full_time' ? 'available' :;'
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',;`
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`;
  },;
  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({;
    name: skill,;'
    level: 3 // Default level since we don't have this data;
  })) || [],;
  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({;`
    id: `project-${i}`,;
    title: proj.title,;
    description: proj.description;'
    date: new Date().toISOString() // Default date since we don't have this data;
  })) || [];
  return (;'
    <div className='container mx-auto px-4 py-8'>;

      {/* Profile Header */}
      <ProfileHero;
        name={profile.full_name}
        title={profile.professional_title}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        profileType='talent'
        rating={profile.average_rating}
        reviewCount={profile.rating_count}
      />;

      <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 8 mt - 8'>;
        {/* Left Column - Skills & Info */}'
        <div className='space - y-8'>;
          <ProfileSkills skills={skills_array} />;
          <ProfileAvailability availability={availability} />;
          <ProfileContact;
            email={profile.user_id}
            profile_name={profile.full_name}'
            profile_type='talent'          />;
        </div>;
        {/* Right Column - Bio & Projects */}'
        <div className='lg:col - span - 2 space - y-8'>;
          {/* Bio Section */}'
          <div className='bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6'>;'
            <h2 className='text - xl font - bold text - white mb - 4'>;

              About {profile.full_name}
            </h2>;'
            <div className='prose prose - invert max - w-none'>;'
              <p className='text - zion - slate whitespace - pre - wrap'>;
                {profile.bio}
'
          <div className='bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6'>;'
            <h2 className='text-xl font-bold text-white mb-4'>;
              About {profile && profile.full_name}
            </h2>;'
            <div className='prose prose-invert max-w-none'>;'
              <p className='text-zion-slate whitespace-pre-wrap'>;
                {profile && profile.bio}
              </p>;
            </div>;
          </div>;

          {/* Projects Section */}
          <ProfileProjects projects={projectsArray} />;

              <Star className='mr-2 h-5 w-5 text-yellow-400' />
              Reviews & Ratings;
            </h2>
            <ProfileRatings;
              </p>;
            </div>;
          </div>;
          {/* Projects Section */}

          </div>;

          {/* Hire Now CTA */}
          {is_authenticated && ('
            <div className='bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6 mb - 8'>;'
              <div className='flex flex - col items - center text - center'>;'
                <h3 className='text - xl font - bold text - white mb - 2'>;
                  Ready to collaborate?;
                </h3>;'
                <p className='text - zion - slate mb - 6 max - w-md'>;
                  Connect with {profile.full_name} for your next project and get;
                  started right away.;
                  {profile.hourly_rate &&;`
                    ` Rate starts at $${profile.hourly_rate}/hour.`}

              userId={profile && profile.id}
              averageRating={profile && profile.average_rating}
              ratingCount={profile && profile.rating_count}            />;
          </div>;

          {/* Hire Now CTA */}
          {isAuthenticated && (;'
            <div className='bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8'>;'
              <div className='flex flex-col items-center text-center'>;'
                <h3 className='text-xl font-bold text-white mb-2'>;
                  Ready to collaborate?;
                </h3>;'
                <p className='text-zion-slate mb-6 max-w-md'>;
                  Connect with {profile && profile.full_name} for your next project and get;
                  started right away.;
                  {profile && profile.hourly_rate &&;`
                    ` Rate starts at $${profile && profile.hourly_rate}/hour.`}
                </p>;
'
                <div className='flex flex-wrap gap-4 justify-center'>;
                  <Button'
                    size='lg''
                    className='bg-zion-purple text-white hover:bg-zion-purple-dark'
                    onClick={onRequestHire}>;'
                    <Handshake className='mr-2 h-5 w-5' />;
                    Hire Now;
                  </Button>;

                  {onMessageTalent && (;

                    <Button'
                      size='lg''
                      variant='outline''
                      className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
                      onClick={onMessageTalent}>;'
                      <MessageSquare className='mr-2 h-5 w-5' />;
                      Message;
                    </Button>;
'
import { useAuth } from '@/hooks/useAuth','
import { Availability } from '@/types/profile',
interface TalentProfileProps {}
  profile: TalentProfileType,
  onRequestHire: () => void,;
  onMessageTalent?: () => void;
}

export function TalentProfile({}
  profile,

        {/* Left Column - Skills & Info */}

        <div className='space-y-8'>
          <ProfileSkills skills={skillsArray} />
          <ProfileAvailability availability={availability} />

          <ProfileContact 

            email={profile.user_id}
            profileName={profile.full_name}'
            profileType='talent'
          />
        </div>
        
        {/* Right Column - Bio & Projects */}'
        <div className='lg:col-span-2 space-y-8'>
          {/* Bio Section */}'
          <div className='bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6'>'
            <h2 className='text-xl font-bold text-white mb-4'>About {profile.full_name}</h2>'
            <div className='prose prose-invert max-w-none'>'
              <p className='text-zion-slate whitespace-pre-wrap'>{profile.bio}</p>
            </div>
          </div>
          
          {/* Projects Section */}
          <ProfileProjects projects={projectsArray} />;
          {/* Ratings Section */}'
          <div className='bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6'>'
            <h2 className='text-xl font-bold text-white mb-4 flex items-center'>'
              <Star className='mr-2 h-5 w-5 text-yellow-400' />
              Reviews & Ratings;
            </h2>
            <ProfileRatings;
              userId={profile.id}
              averageRating={profile.average_rating}
              ratingCount={profile.rating_count}
            />;
          </div>;
          {/* Hire Now CTA */}
          {isAuthenticated && ('
            <div className='bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8'>'
              <div className='flex flex-col items-center text-center'>'
                <h3 className='text-xl font-bold text-white mb-2'>Ready to collaborate?</h3>'
                <p className='text-zion-slate mb-6 max-w-md'>
                  Connect with {profile.full_name} for your next project and get started right away.`
                  {profile.hourly_rate && ` Rate starts at $${profile.hourly_rate}/hour.`}
                </p>

                <div className='flex flex-wrap gap-4 justify-center'>
                  <Button '
                    size='lg' '
                    className='bg-zion-purple text-white hover:bg-zion-purple-dark'
                    onClick={onRequestHire}
                  >'
                    <Handshake className='mr-2 h-5 w-5' />
                    Hire Now;
                  </Button>
                  
                  {onMessageTalent && (
                    <Button '
                      size='lg' '
                      variant='outline''
                      className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
                      onClick={onMessageTalent}
                    >'
                      <MessageSquare className='mr-2 h-5 w-5' />

                    </Button>
                  )}
                </div>;
              </div>;
            </div>;
          )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        </div>
      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
                </div>;
              </div>;
            </div>;
          )}</div>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </div>;
      </div>;
    </div>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>);
}
<<<<<<< HEAD
;
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );
}

;

        </div>
      </div>
    </div>
  );