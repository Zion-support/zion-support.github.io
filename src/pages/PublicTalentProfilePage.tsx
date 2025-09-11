<<<<<<< HEAD
<<<<<<< HEAD
import { HireNowCTA } from "@/components/profile/HireNowCTA";
import { logErrorToProduction } from '@/utils/productionLogger';
import { logErrorToProduction } from '@/utils/productionLogger'

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
import { logErrorToProduction } from '@/utils/productionLogger'
import { Star, MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.

  const router = useRouter()
  const profileId = router.query.profileId as string
  const [profileData, setProfileData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect((,) => {
    const fetchProfile = async () => {
      setIsLoading(true)
      setIsError(false)
import { useState, useEffect } from "react",
import { useRouter } from "next/router",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/components/ui/use-toast",
import { SEO } from "@/components/SEO",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { HireNowCTA } from "@/components/profile/HireNowCTA",
import { logErrorToProduction } from '@/utils/productionLogger',
import { Star, MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react'

export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const router = useRouter(),
  const profileId = router.query.profileId as string,
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [isError, setIsError] = useState(false),

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true),
      setIsError(false),
      try {
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
          .single()
          throw error
          .single()
          .single(),

        if (error) {
          throw error
if (error) {
          throw error
        }
        setProfileData(data)
      } catch (error) {
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' })
        setIsError(true)
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),
        setIsError(true)
          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }
    }
    if (profileId) {
      fetchProfile()
    }
  }, [profileId])
ursor/fix-website-loading-errors-and-merge-6662
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' })
        setIsError(true)
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),
        setIsError(true),


        toast({
          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
if (error) {
          throw error
        }


        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),
        setIsError(true),

        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),
<<<<<<< HEAD

        setIsError(true),


        toast({
          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        setProfileData (data);
      } catch (error) {
        logErrorToProduction (error instanceof Error ? error.message : String (error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),
        setIsError (true);
        toast ({
          title: "Error",
          description: "Failed to load profile. Please try again later.",
          variant: "destructive"});
      } finally {

import { Star, MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
        setIsLoading(false)

<<<<<<< HEAD
      } finally {
        setIsLoading(false)
      }
    }
    if (profileId) {
      fetchProfile()
    }
  }, [profileId])
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState, useEffect } from "react",;
import { useRouter } from "next/router",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/components/ui/use-toast",;
import { SEO } from "@/components/SEO",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { HireNowCTA } from "@/components/profile/HireNowCTA",;
import { logErrorToProduction } from '@/utils/productionLogger',;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Star, MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const router = useRouter(),;
  const profileId = router.query.profileId as string,;
  const [profileData, setProfileData] = useState<any>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [isError, setIsError] = useState(false),;
  useEffect(() => {;
    const fetchProfile = async () => {;
      setIsLoading(true),;
      setIsError(false),;
      try {;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);
<<<<<<< HEAD
          .single(),;
=======
          .single();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        if (error) {;
          throw error;
        }
;
        setProfileData(data);
      } catch (error) {;
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),;
        setIsError(true),;
        toast({;
          title: "Error",;
          description: "Failed to load profile. Please try again later.",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
    },;
    if (profileId) {;
      fetchProfile();
    }
  }, [profileId]),

<<<<<<< HEAD
    return (
      <div className="min-h-screen flex items-center justify-center">;
        <span className="loading loading-ring loading-lg"></span>;
      </div>;
    );
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  if (isError || !profileData) {;

<<<<<<< HEAD
    return (
      <div className="min-h-screen flex items-center justify-center">;
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        setIsError(true)
        setIsError(true),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    )
  }
  if (isError |!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    )
  }

<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <>
      <SEO
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (isError || !profileData) {;

    return (
      <div className="min-h-screen flex items-center justify-center">;
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }
  return (
    <>
      <SEO

    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    )
  }



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>
      <SEO
        title={`${profileData.full_name} | Talent Profile`}
<<<<<<< HEAD
<<<<<<< HEAD
        description = {profileData.bio |"View the profile of this talented individual.",}
        title={`${profileData.full_name} | Talent Profile`}
        description = {profileData.bio |"View the profile of this talented individual.",}
        description = {profileData.bio || "View the profile of this talented individual.",}
=======

        description = {profileData.bio || "View the profile of this talented individual.",}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        description = {profileData.bio || "View the profile of this talented individual.",}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  return (;
    <>;
      <SEO;
        title={`${profileData.full_name} | Talent Profile`}
        description={profileData.bio || "View the profile of this talented individual."}
<<<<<<< HEAD
<<<<<<< HEAD
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
        title={`${profileData && profileData.full_name} | Talent Profile`}
        description = {profileData && profileData.bio || "View the profile of this talented individual.",}
      />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                </div>
=======

                </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold text-white">{profileData.full_name}</h1>
                      <p className="text-zion-cyan font-medium">{profileData.professional_title}</p>
                    </div>
                    {/* Add Save/Unsave Button Here */}
<<<<<<< HEAD
<<<<<<< HEAD
                  </div>
=======

                  </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* Location & Availability */}
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
                    {profileData.location && (
                      <div className="flex items-center text-zion-slate-light">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{profileData.location}</span>
                      </div>
                    )}
                    {profileData.availability && (
                      <div className="flex items-center text-zion-slate-light">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{profileData.availability}</span>
                      </div>
                    )}
<<<<<<< HEAD
<<<<<<< HEAD
                  </div>
                </div>
              </div>
              {profileData.skills && profileData.skills.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill: string, index: number) => (
                      <Badge key={skill + index} variant="secondary">{skill}</Badge>
ursor/fix-website-loading-errors-and-merge-6662
=======

=======
                  </div>
                </div>
              </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>;
                </div>;
              </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
        title={`${profileData && profileData.full_name} | Talent Profile`}
        description = {profileData && profileData.bio || "View the profile of this talented individual.",}
      />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
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
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold text-white">{profileData.full_name}</h1>
                      <p className="text-zion-cyan font-medium">{profileData.professional_title}</p>
                    </div>
                    {/* Add Save/Unsave Button Here */}
                  </div>
                  {/* Location & Availability */}
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
                    {profileData.location && (
                      <div className="flex items-center text-zion-slate-light">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{profileData.location}</span>
                      </div>
                    )}
                    {profileData.availability && (
                      <div className="flex items-center text-zion-slate-light">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{profileData.availability}</span>
                      </div>
                    )}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Skills */}
              {profileData && profileData.skills && profileData && profileData.skills.length > 0 && (;
                <div className="mt-4">;
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {profileData && profileData.skills.map((skill: string, index: number,) => (;
                      <Badge key={skill + index} variant="secondary">{skill}</Badge>;
<<<<<<< HEAD
<<<<<<< HEAD
                  </div>;
                </div>;
                  </div>
                </div>
              </div>
                  </div>;
                </div>;
              </div>;
              {/* Skills */}
              {profileData.skills && profileData.skills.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill: string, index: number) => (
                      <Badge key={skill + index} variant="secondary">{skill}</Badge>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}
                  </div>
                </div>
              )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
              <p className="text-zion-slate-light">{profileData.bio |"No bio provided."}</p>
<<<<<<< HEAD
              )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>


=======
              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
            </div>;

            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.bio || "No bio provided."}</p>;
            </div>;

            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>;
              <div className="space-y-3">;
                {profileData && profileData.portfolio_links && profileData && profileData.portfolio_links.length > 0 ? (;
                  profileData && profileData.portfolio_links.map((link: string, index: number,) => (;
                    <a
                      key = {link + index,}
                      href = {link,}
<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text-zion-slate-light">{profileData.bio |"No bio provided."}</p>
              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>
            </div>
            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (
                  profileData.portfolio_links.map((link: string, index: number) => (
                    <a
                      key={link + index}
                      href={link}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zion-cyan hover:text-white transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      {link}
                    </Link>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
              </div>
            </div>
              <p className="text-zion-slate-light">{profileData.experience |"No experience provided."}</p>
=======


              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}</p>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </div>
            </div>
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
              <p className="text-zion-slate-light">{profileData.experience |"No experience provided."}</p>
              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}</p>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
              </div>;
            </div>;

            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.experience || "No experience provided."}</p>;
            </div>;

<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text-zion-slate-light">{profileData.experience |"No experience provided."}</p>
              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}</p>
            </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>
              <div className="flex space-x-4">
                {profileData.github_link && (
                  <a
<<<<<<< HEAD
<<<<<<< HEAD
                    href={profileData.github_link}
=======
                    href = {profileData && profileData.github_link,}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    href = {profileData && profileData.github_link,}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="GitHub"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    title="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                )}
                {profileData.twitter_link && (
                  <a
                    href = {profileData.twitter_link,}
<<<<<<< HEAD
=======

                    title="GitHub"
                  >
                    <Github className="h-6 w-6" />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </Link>
                )}
                {profileData.twitter_link && (;
                  <a;
                    href={profileData.twitter_link}


                    target="_blank"
<<<<<<< HEAD
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="Twitter"
<<<<<<< HEAD
                    title="Twitter"
                  >
                    <Twitter className="h-6 w-6" />
                  </Link>
                )}
                {profileData.linkedin_link && (;
                  <a;
                    href={profileData.linkedin_link}
=======
=======
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="Twitter"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    title="Twitter">;
                    <Twitter className="h-6 w-6" />;
                  </a>;
                )}
                {profileData && profileData.linkedin_link && (;
                  <a
                    href = {profileData && profileData.linkedin_link,}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="LinkedIn"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    title="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
<<<<<<< HEAD
              </div>
            </div>
          </div>
ursor/fix-website-loading-errors-and-merge-6662
=======

                    title="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </Link>


                )}

              </div>;
            </div>;
          </div>;


<<<<<<< HEAD
<<<<<<< HEAD
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA
              talentProfile={{
                  </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <HireNowCTA
              talentProfile={{
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                id: profileData?.id |''
                full_name: profileData?.full_name |''
                professional_title: profileData?.professional_title |''
                hourly_rate: profileData?.hourly_rate |0
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
<<<<<<< HEAD
<<<<<<< HEAD
                hourly_rate: profileData?.hourly_rate || 0
                hourly_rate: profileData?.hourly_rate || 0,
                hourly_rate: profileData?.hourly_rate || 0
              }}
            />
            {/* Placeholder for other sidebar elements */}
          </div>
        </div>
      </div>
    </>
  )
}
if (profileId) {
  fetchProfile ()
}, [profileId])
if (isLoading) {"
  return (<div className="min-h-screen flex items-center justify-center" > <span className="loading loading-ring loading-lg" ></span> </div>)
}if (isError |!profileData) {"
  return (<div className="min-h-screen flex items-center justify-center" > <p className="text-red-500" >Failed to load profile.</p> </div>)
}profileData.full name?.charAt (0)
}</AvatarFallback>)
}</Avatar> </div>)
}</div> </div> {
  /* Add Save/Unsave Button Here */
}</div> <span> {
  profileData.availability
}</span> </div>)
}</div> </div> </div>) )
}</div> </div>) "
}</div>) ) ) : (<p className="text-zion-slate-light" >No portfolio links provided.</p>)
}</div> </div> <a href= {
  profileData.github link "
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" aria-label="GitHub" title="GitHub" > <Github className="h-6 w-6" /> </Link>)
}{
  profileData.twitter link && (<a href= {
  profileData.twitter link "
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" aria-label="Twitter" title="Twitter" > <Twitter className="h-6 w-6" /> </Link>)
}{
  profileData.linkedin link && (<a href= {
  profileData.linkedin link "
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" aria-label="LinkedIn" title="LinkedIn" > <Linkedin className="h-6 w-6" /> </Link>)
}</div> </div> </div> <HireNowCTA talentProfile= {
  {'
  id: profileData?.id |'', full name: profileData?.full name |'',  professional title: profileData?.professional title |'', hourly rate: profileData?.hourly rate |0
}/> {
  /* Placeholder for other sidebar elements */
}</div> </div> </div> </>)
}'"}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              }}
            />
            {/* Placeholder for other sidebar elements */}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  /* Placeholder for other sidebar elements */ ;
}</div> </div> </div> </>) ;
}'"};


          </div>;
        </div>;
      </div>;
    </>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    // Check condition
if ( {) {
  $2
}
      fetch_profile ();
    }
  }, [profile_id]);
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="min - h-screen flex items - center justify - center">;
        <span className="loading loading - ring loading - lg"></span>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="min - h-screen flex items - center justify - center">;
        <p className="text - red - 500">Failed to load profile.</p>;
      </div>);
  }
  return (
    <>;
      <SEO;
        title={`${profile_data.full_name} | Talent Profile`}
        description = {profile_data.bio || "View the profile of this talented individual.", }
      />;
      <div className="container mx - auto px - 4 py - 8">;
        <div className="grid grid - cols - 12 gap - 6">;
          {/* Main Content Area */}
          <div className="col - span - 12 lg:col - span - 8">;
            {/* Profile Header */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 6">;
              <div className="flex items - start">;
                {/* Avatar */}
                <div className="relative mr - 4">;
                  <Avatar className="w - 24 h - 24">;
                    {profile_data.profile_picture_url ? (
                      <AvatarImage src={profile_data.profile_picture_url} alt={profile_data.full_name} />) : (
                      <AvatarFallback>{profile_data.full_name?.char_at (0)}</AvatarFallback>)}
                  </Avatar>;
                  {profile_data.is_verified && (
                    <div className="absolute -bottom - 1 -right - 1 bg - zion - blue p - 0.5 rounded - full">;
                      <CheckCircle2 className="w - 5 h - 5 text - zion - cyan" />;
                    </div>)}
                </div>;
                {/* Main Info */}
                <div className="flex - 1">;
                  <div className="flex justify - between items - start">;
                    <div>;
                      <h1 className="text - 2xl font - bold text - white">{profile_data.full_name}</h1>;
                      <p className="text - zion - cyan font - medium">{profile_data.professional_title}</p>;
                    </div>;
                    {/* Add Save / Unsave Button Here */}
                  </div>;
                  {/* Location & Availability */}
                  <div className="mt - 2 flex flex - wrap gap - 3 text - sm">;
                    {profile_data.location && (
                      <div className="flex items - center text - zion - slate - light">;
                        <MapPin className="h - 4 w - 4 mr - 1" />;
                        <span>{profile_data.location}</span>;
                      </div>)}
                    {profile_data.availability && (
                      <div className="flex items - center text - zion - slate - light">;
                        <Clock className="h - 4 w - 4 mr - 1" />;
                        <span>{profile_data.availability}</span>;
                      </div>)}
                  </div>;
                </div>;
              </div>;
              {/* Skills */}
              {profile_data.skills && profile_data.skills.length > 0 && (
                <div className="mt - 4">;
                  <h4 className="text - lg font - bold text - white mb - 2">Skills</h4>;
                  <div className="flex flex - wrap gap - 2">;
                    {profile_data.skills.map ((skill: string, index: number, ) => (
                      <Badge key={skill + index} variant="secondary">{skill}</Badge>))}
                  </div>;
                </div>)}
            </div>;
            {/* Bio Section */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 6">;
              <h2 className="text - xl font - bold text - white mb - 3">About Me</h2>;
              <p className="text - zion - slate - light">{profile_data.bio || "No bio provided."}</p>;
            </div>;
            {/* Portfolio Section */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 6">;
              <h2 className="text - xl font - bold text - white mb - 3">Portfolio</h2>;
              <div className="space - y-3">;
                {profile_data.portfolio_links && profile_data.portfolio_links.length > 0 ? (
                  profile_data.portfolio_links.map ((link: string, index: number, ) => (
                    <a;
                      key = {link + index, }
                      href = {link, }
                      target="_blank";
                      rel="noopener noreferrer";
                      className="flex items - center text - zion - cyan hover:text - white transition - colors";
                    >;
                      <LinkIcon className="h - 4 w - 4 mr - 2" />;
                      {link}
                    </a>))) : (
                  <p className="text - zion - slate - light">No portfolio links provided.</p>)}
              </div>;
            </div>;
            {/* Experience Section */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 6">;
              <h2 className="text - xl font - bold text - white mb - 3">Experience</h2>;
              <p className="text - zion - slate - light">{profile_data.experience || "No experience provided."}</p>;
            </div>;
            {/* Social Links */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 6">;
              <h2 className="text - xl font - bold text - white mb - 3">Connect</h2>;
              <div className="flex space - x-4">;
                {profile_data.github_link && (
                  <a;
                    href = {profile_data.github_link, }
                    target="_blank";
                    rel="noopener noreferrer";
                    className="text - zion - cyan hover:text - white transition - colors";
                    aria - label="GitHub";
                    title="GitHub";
                  >;
                    <Github className="h - 6 w - 6" />;
                  </a>)}
                {profile_data.twitter_link && (
                  <a;
                    href = {profile_data.twitter_link, }
                    target="_blank";
                    rel="noopener noreferrer";
                    className="text - zion - cyan hover:text - white transition - colors";
                    aria - label="Twitter";
                    title="Twitter";
                  >;
                    <Twitter className="h - 6 w - 6" />;
                  </a>)}
                {profile_data.linkedin_link && (
                  <a;
                    href = {profile_data.linkedin_link, }
                    target="_blank";
                    rel="noopener noreferrer";
                    className="text - zion - cyan hover:text - white transition - colors";
                    aria - label="LinkedIn";
                    title="LinkedIn";
                  >;
                    <Linkedin className="h - 6 w - 6" />;
                  </a>)}
              </div>;
            </div>;
          </div>;
          {/* Sidebar with HireNowCTA */}
          <div className="col - span - 12 lg:col - span - 4 space - y-6">;
            <HireNowCTA;
              talent_profile={{
                id: profile_data?.id || '',
                full_name: profile_data?.full_name || '',
                professional_title: profile_data?.professional_title || '',
                hourly_rate: profile_data?.hourly_rate || 0,
              }}
            />;
            {/* Placeholder for other sidebar elements */}
          </div>;
        </div>;
      </div>;
    </>);
}
// Check condition
if ( {) {
  $2
}
  fetch_profile ();
}, [profile_id]);
// Check condition
if ( {") {
  $2
}
  return (<div className="min - h-screen flex items - center justify - center" > <span className="loading loading - ring loading - lg" ></span> </div>);
}// Check condition
if ( {") {
  $2
}
  return (<div className="min - h-screen flex items - center justify - center" > <p className="text - red - 500" >Failed to load profile.</p> </div>);
}profile_data.full name?.char_at (0);
}</AvatarFallback>);
}</Avatar> </div>);
}</div> </div> {
  /* Add Save / Unsave Button Here */;
}</div> <span> {
  profile_data.availability;
}</span> </div>);
}</div> </div> </div>) );
}</div> </div>) ";
}</div>) ) ) : (<p className="text - zion - slate - light" >No portfolio links provided.</p>);
}</div> </div> <a href= {
  profile_data.github link ";
}target="blank" rel="noopener noreferrer" className="text - zion - cyan hover:text - white transition - colors" aria - label="GitHub" title="GitHub" > <Github className="h - 6 w - 6" /> </Link>);
}{
  profile_data.twitter link && (<a href= {
  profile_data.twitter link ";
}target="blank" rel="noopener noreferrer" className="text - zion - cyan hover:text - white transition - colors" aria - label="Twitter" title="Twitter" > <Twitter className="h - 6 w - 6" /> </Link>);
}{
  profile_data.linkedin link && (<a href= {
  profile_data.linkedin link ";
}target="blank" rel="noopener noreferrer" className="text - zion - cyan hover:text - white transition - colors" aria - label="LinkedIn" title="LinkedIn" > <Linkedin className="h - 6 w - 6" /> </Link>);
}</div> </div> </div> <HireNowCTA talent_profile= {
  {';
  id: profile_data?.id || '', full name: profile_data?.full name || '',  professional title: profile_data?.professional title || '', hourly rate: profile_data?.hourly rate || 0;
}/> {
  /* Placeholder for other sidebar elements */;
}</div> </div> </div> </>);
}'"}
}
<<<<<<< HEAD
<<<<<<< HEAD
;
}
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
