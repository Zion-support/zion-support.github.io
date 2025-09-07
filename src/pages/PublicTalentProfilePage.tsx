<<<<<<< HEAD


import { useState, useEffect } from "react",
import { useRouter } from "next/router",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/components/ui/use-toast",
import { SEO } from "@/components/SEO",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { HireNowCTA } from "@/components/profile/HireNowCTA";

import { logErrorToProduction } from '@/utils/productionLogger';
import { Star, MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
import { Star, MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.

  const router = null;
                hourly_rate: profileData?.hourly_rate || 0

=======
      try {
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
        if (error) {
          throw error
        }
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),
        setIsError(true),

        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),
        setIsError(true)
        setIsError(true),
        toast({
          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
      } finally {
        setIsLoading(false)
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">;
        <span className="loading loading-ring loading-lg"></span>;
      </div>;
    );
  }
  if (isError |!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center">;
        <span className="loading loading-ring loading-lg"></span>;
      </div>;
    );
  }
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`${profileData.full_name} | Talent Profile`}
        description = {profileData.bio || "View the profile of this talented individual.",}

;
  return (;
    <>;
      <SEO;
        title={`${profileData.full_name} | Talent Profile`}
        description={profileData.bio || "View the profile of this talented individual."}



      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">
            {/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <div className="flex items-start">
                {/* Avatar */}
                <div className="relative mr-4">
                  <Avatar className="w-24 h-24">
                    {profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />
                    ) : (
                      <AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  {profileData.is_verified && (
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
                    </div>
                  )}
                </div>
                {/* Main Info */}
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <div>;
                      <h1 className="text-2xl font-bold text-white">{profileData && profileData.full_name}</h1>;
                      <p className="text-zion-cyan font-medium">{profileData && profileData.professional_title}</p>;
                    </div>;
                    {/* Add Save/Unsave Button Here */}
                  </div>
                  {/* Location & Availability */}
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">;
                    {profileData && profileData.location && (;
                      <div className="flex items-center text-zion-slate-light">;
                        <MapPin className="h-4 w-4 mr-1" />;
                        <span>{profileData && profileData.location}</span>;
                      </div>;
                    )}
                    {profileData && profileData.availability && (;
                      <div className="flex items-center text-zion-slate-light">;
                        <Clock className="h-4 w-4 mr-1" />;
                        <span>{profileData && profileData.availability}</span>;
                      </div>;
                    )}



              {/* Skills */}
              {profileData.skills && profileData.skills.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill: string, index: number) => (
                      <Badge key={skill + index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>;
                </div>;
              )}
            </div>
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
            </div>
            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (
                  profileData.portfolio_links.map((link: string, index: number) => (
                    <a
                      key = {link + index,}
                      href = {link,}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zion-cyan hover:text-white transition-colors">;
                      <LinkIcon className="h-4 w-4 mr-2" />;
                      {link}
            </div>
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
            </div>
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;
              <div className="flex space-x-4">;
                {profileData && profileData.github_link && (;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="GitHub"


                    target="_blank"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="LinkedIn"


                )}
              </div>
            </div>
          </div>
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA
              talentProfile={{
              }}
            />
            {/* Placeholder for other sidebar elements */}
  /* Placeholder for other sidebar elements */ ;
}</div> </div> </div> </>) ;
}'"};


              }}
            />;
            {/* Placeholder for other sidebar elements */}
          </div>;
        </div>;
      </div>;
    </>;
  );
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import { SEO } from '@/components/SEO';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HireNowCTA } from '@/components/profile/HireNowCTA';
import { logErrorToProduction } from '@/utils/productionLogger';
import {
  Star,
  MapPin,
  Clock,
  Link as LinkIcon,
  Github,
  Twitter,
  Linkedin,
  CheckCircle2,;
} from 'lucide-react';

import { useState, useEffect } from "react",;
import { useRouter } from "next/router",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/components/ui/use-toast",;
import { SEO } from "@/components/SEO",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { HireNowCTA } from "@/components/profile/HireNowCTA";
import { logErrorToProduction } from '@/utils/productionLogger';
import { Star, MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const router = null;
                hourly_rate: profileData?.hourly_rate || 0
>>>>>>> origin/main
              }}
            />
            {/* Placeholder for other sidebar elements */}
          </div>
        </div>
      </div>
    </>
  );

};
if (profileId) {;
  fetchProfile () ;

}, [profileId]);
if (isLoading) {";
  return (<div className="min-h-screen flex items-center justify-center" > <span className="loading loading-ring loading-lg" ></span> </div>) ;
}if (isError || !profileData) {";
  return (<div className="min-h-screen flex items-center justify-center" > <p className="text-red-500" >Failed to load profile.</p> </div>) ;
}profileData.full name?.charAt (0) ;
}</AvatarFallback>) ;
}</Avatar> </div>) ;
}</div> </div> {;
  /* Add Save/Unsave Button Here */ ;
}</div> <span> {;
  profileData.availability ;
}</span> </div>) ;
}</div> </div> </div>) ) ;
}</div> </div>) ";
}</div>) ) ) : (<p className="text-zion-slate-light" >No portfolio links provided.</p>) ;
}</div> </div> <a href= {;
  profileData.github link ";
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" aria-label="GitHub" title="GitHub" > <Github className="h-6 w-6" /> </Link>) ;
}{;
  profileData.twitter link && (<a href= {;
  profileData.twitter link ";
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" aria-label="Twitter" title="Twitter" > <Twitter className="h-6 w-6" /> </Link>) ;
}{;
  profileData.linkedin link && (<a href= {;
  profileData.linkedin link ";
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" aria-label="LinkedIn" title="LinkedIn" > <Linkedin className="h-6 w-6" /> </Link>) ;
}</div> </div> </div> <HireNowCTA talentProfile= {;
  {';
  id: profileData?.id || '', full name: profileData?.full name || '',  professional title: profileData?.professional title || '', hourly rate: profileData?.hourly rate || 0 ;

}/> {;
  /* Placeholder for other sidebar elements */ ;
}</div> </div> </div> </>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
