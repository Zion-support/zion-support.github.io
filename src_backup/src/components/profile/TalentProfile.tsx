import { Button } from '@/components/ui/button',import { HireNowCTA } from './HireNowCTA',import { ProfileHero } from './ProfileHero',import { ProfileSkills } from './ProfileSkills',import { ProfileExperience } from './ProfileExperience',import { ProfileProjects } from './ProfileProjects',import { ProfileAvailability } from './ProfileAvailability',import { ProfileContact } from './ProfileContact',import { ProfileRatings } from './ProfileRatings',import { TalentProfile as TalentProfileType } from '@/types/talent',import React from 'react';'
interface TalentProfileProps  {'profile': TalentProfileType;
  }
  'onRequestHire': () => void;
  onMessageTalent?: () => void;
export function TalentProfile(): any ({profile,onRequestHire,onMessageTalent}: TalentProfileProps) {const { isAuthenticated }  = useAuth()// Create proper availability object from talent profile;
  const 'availability': Availability = {'status':;
          : 'unavailable','message': `${profile && profile.professional_title} with ${profile && profile.years_experience} years of experience`}// Create proper skills array for ProfileSkills component;`  const skillsArray =;
    profile && profile.skills?.map(skill => ({'name': skill,'level': 3, // Default level since we don't have this data;'
    })) || [];// Create proper projects array for ProfileProjects component;
  const projectsArray =;
    profile && profile.key_projects?.map((proj, i) => ({'id': `project-${i}`,'title': proj && proj.title,'description': proj && proj.description,'date': new Date().toISOString(), // Default date since we don't have this data;'    })) || [];interface TalentProfileProps  {'profile': TalentProfileType;
  }
  'onRequestHire': () => void;
  onMessageTalent?: () => void;
}export function TalentProfile() {const { isAuthenticated } = useAuth()// Create proper availability object from talent profile;
  const 'availability': Availability;return (<div className='container mx-auto px-4 py-8'>;'
      <div className='grid grid-cols-1 'lg':grid-cols-3 gap-8 mt-8'>;'
        <div className=''lg':col-span-2 space-y-8'>;'
interface TalentProfileProps  {'profile': TalentProfileType;
  }
  'onRequestHire': () => void;
          : 'unavailable','message': `${profile.professional_title} with ${profile.years_experience} years of experience`}`  // Create proper skills array for ProfileSkills component;
  const skills_array =;
    profile.skills?.map (skill => ({'name': skill,'level': 3, // Default level since we don't have this data;'
    })) || [];
  // Create proper projects array for ProfileProjects component;
  const projects_array =;
    profile.key_projects?.map ((proj, i) => ({'id': `project-${i}`,'title': proj.title,'description': proj.description,'date': new Date ().toISOString (), // Default date since we don't have this data;'    })) || [];
  return (<div className='container mx - auto px - 4 py - 8'>;'status': profile.availability_type === 'full_time' ? 'available' :;'
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable','message': `${profile.professional_title} with ${profile.years_experience} years of experience`;`  },// Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({'name': skill,'level': 3 // Default level since we don't have this data;'
  })) || [],// Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({'id': `project-${i}`,'title': proj.title,'description': proj.description,'date': new Date().toISOString() // Default date since we don't have this data;'  })) || [],return (<div className='container mx-auto px-4 py-8'>;'
import React from 'react',import { useAuth } from '@/hooks/useAuth',import { Availability } from '@/types/profile',interface TalentProfileProps  {'profile': TalentProfileType,'onRequestHire': () => void,onMessageTalent?: () => void;'
}export function TalentProfile() {const { isAuthenticated } = useAuth(),// Create proper availability object from talent profile;
  const 'availability': Availability = {'status': profile.availability_type === 'full_time' ? 'available' :;'
            }
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',"message": `${profile.professional_title} with ${profile.years_experience} years of experience`;`  },// Create proper skills array for ProfileSkills component;
  })) || [],// Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({'id': `project-${i}`,'title': proj.title,'description': proj.description;`    'date': new Date().toISOString() // Default date since we don't have this data;'
  })) || [];
  return (<div className='container mx-auto px-4 py-8'>;{/* Profile Header */}'
        profileType='talent';'
        rating={profile.average_rating}
        reviewCount={profile.rating_count}
      />;{/* Main content area */}
      <div className='grid grid - cols - 1 'lg':grid - cols - 3 gap - 8 mt - 8'>;'
        <div className=''lg':col - span - 2 space - y-8'>;'
                    className='bg-zion-purple text-white 'hover':bg-zion-purple-dark';'
                      className='border-zion-purple text-zion-purple 'hover':bg-zion-purple/10';'
                      onClick={onMessageTalent}>;
                      <MessageSquare className='mr-2 h-5 w-5' />;'
                      Message;
                    </Button>;interface TalentProfileProps  {'profile': TalentProfileType,'onRequestHire': () => void,onMessageTalent?: () => void;
}export function TalentProfile() {/* Left Column - Skills & Info */}
        <div className='space-y-8'>;'
            profileType='talent';' />;
        </div>;
        {/* Right Column - Bio & Projects */}
        <div className=''lg':col-span-2 space-y-8'>;'
          {/* Bio Section */}
          <div className='bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6'>;'
            <h2 className='text-xl font-bold text-white mb-4'>About {profile.full_name}</h2>;'
            <div className='prose prose-invert max-w-none'>;'
              <p className='text-zion-slate whitespace-pre-wrap'>{profile.bio}</p>;'
          <div className='bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6'>;'
            <h2 className='text-xl font-bold text-white mb-4 flex items-center'>;'
              <Star className='mr-2 h-5 w-5 text-yellow-400' />;'
          {isAuthenticated && (<div className='bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8'>;'
              <div className='flex flex-col items-center text-center'>;'
                <h3 className='text-xl font-bold text-white mb-2'>Ready to collaborate?</h3>;'
                <p className='text-zion-slate mb-6 max-w-md'>;'
                <div className='flex flex-wrap gap-4 justify-center'>;'
                  <Button;
                    size='lg';'
                    className='bg-zion-purple text-white 'hover':bg-zion-purple-dark';'
                    onClick={onRequestHire}
                  >;
                    <Handshake className='mr-2 h-5 w-5' />;'
                      size='lg';'
                      variant='outline';'
                      className='border-zion-purple text-zion-purple 'hover':bg-zion-purple/10';'
                      onClick={onMessageTalent}
                    >;
                      <MessageSquare className='mr-2 h-5 w-5' />;'
                    className='bg - zion - purple text - white 'hover':bg - zion - purple - dark';'
                      className='border - zion - purple text - zion - purple 'hover':bg - zion - purple / 10';'
