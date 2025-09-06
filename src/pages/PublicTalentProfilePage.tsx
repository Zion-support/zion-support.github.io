<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
import { HireNowCTA } from "@/components/profile/HireNowCTA";
import { logErrorToProduction } from '@/utils/productionLogger';
import { logErrorToProduction } from '@/utils/productionLogger'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect } from "react",
import { useRouter } from "next/router",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/components/ui/use-toast",
import { SEO } from "@/components/SEO",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      try {
=======
>>>>>>>       try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      try {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        if (error) {
=======
          .single()
>>>>>>>         if (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          throw error
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          .single()
          .single(),

        if (error) {
          throw error
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
if (error) {
          throw error
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        }
        setProfileData(data)
      } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),

<<<<<<< HEAD
        toast({
=======
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' })
        setIsError(true)
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),
        setIsError(true)
>>>>>>>         toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
      } finally {
        setIsLoading(false)
<<<<<<< HEAD
=======
      }
    }
    if (profileId) {
      fetchProfile()
    }
  }, [profileId])
>>>>>>>   if (isLoading) {
ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' })
        setIsError(true)
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),
        setIsError(true),
<<<<<<< HEAD
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),
        setIsError(true)
        setIsError(true),
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        toast({
          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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

=======
      } finally {
        setIsLoading(false)
      }
    }
    if (profileId) {
      fetchProfile()
    }
  }, [profileId])
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
          .single();

=======
          .single(),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  if (isLoading) {
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     return (
=======
    return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <div className="min-h-screen flex items-center justify-center">;
        <span className="loading loading-ring loading-lg"></span>;
      </div>;
    );
  }


  if (isError || !profileData) {;

    return (
      <div className="min-h-screen flex items-center justify-center">;
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <>
      <SEO
<<<<<<< HEAD

    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    )
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <>
      <SEO
        title={`${profileData.full_name} | Talent Profile`}
<<<<<<< HEAD

<<<<<<< HEAD
=======
        description = {profileData.bio |"View the profile of this talented individual.",}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        title={`${profileData.full_name} | Talent Profile`}
        description = {profileData.bio |"View the profile of this talented individual.",}
        description = {profileData.bio || "View the profile of this talented individual.",}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
;
  return (;
    <>;
      <SEO;
        title={`${profileData.full_name} | Talent Profile`}
        description={profileData.bio || "View the profile of this talented individual."}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      />
=======
>>>>>>>       />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
              {/* Skills */}
=======
                  </div>
                </div>
              </div>
>>>>>>>               {/* Skills */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              {profileData.skills && profileData.skills.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill: string, index: number) => (
                      <Badge key={skill + index} variant="secondary">{skill}</Badge>
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
        title={`${profileData && profileData.full_name} | Talent Profile`}
        description = {profileData && profileData.bio || "View the profile of this talented individual.",}
      />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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

                </div>;


=======
                </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold text-white">{profileData.full_name}</h1>
                      <p className="text-zion-cyan font-medium">{profileData.professional_title}</p>
                    </div>
                    {/* Add Save/Unsave Button Here */}
<<<<<<< HEAD

                  </div>;


=======
                  </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

                  </div>;
                </div>;
              </div>;



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              {/* Skills */}
              {profileData && profileData.skills && profileData && profileData.skills.length > 0 && (;
                <div className="mt-4">;
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {profileData && profileData.skills.map((skill: string, index: number,) => (;
                      <Badge key={skill + index} variant="secondary">{skill}</Badge>;
>>>>>>>                     ))}
                  </div>;
                </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
                    ))}
                  </div>
                </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              )}
            </div>
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
              <p className="text-zion-slate-light">{profileData.bio |"No bio provided."}</p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              )}


              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
              </div>
            </div>
<<<<<<< HEAD
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
              <p className="text-zion-slate-light">{profileData.experience |"No experience provided."}</p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            </div>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              </div>;
            </div>;

            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.experience || "No experience provided."}</p>;
            </div>;

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <p className="text-zion-slate-light">{profileData.experience |"No experience provided."}</p>
              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}</p>
            </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>
              <div className="flex space-x-4">
                {profileData.github_link && (
                  <a
<<<<<<< HEAD
                    href = {profileData && profileData.github_link,}
=======
                    href={profileData.github_link}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="GitHub"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    title="GitHub"
                  >
                    <Github className="h-6 w-6" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  </a>
                )}
                {profileData.twitter_link && (
                  <a
                    href = {profileData.twitter_link,}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                     target="_blank"
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  </Link>
                )}
                {profileData.twitter_link && (;
                  <a;
                    href={profileData.twitter_link}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    target="_blank"
>>>>>>>                     rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="Twitter"
<<<<<<< HEAD
                    title="Twitter">;
                    <Twitter className="h-6 w-6" />;
                  </a>;
                )}
                {profileData && profileData.linkedin_link && (;
                  <a
                    href = {profileData && profileData.linkedin_link,}
=======
                    title="Twitter"
                  >
                    <Twitter className="h-6 w-6" />
                  </Link>
                )}
                {profileData.linkedin_link && (;
                  <a;
                    href={profileData.linkedin_link}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="LinkedIn"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    title="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
                )}
=======
                  </a>
>>>>>>>                 )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </div>
            </div>
          </div>
ursor/fix-website-loading-errors-and-merge-6662
=======
                  </Link>


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                )}

              </div>;
            </div>;
          </div>;


>>>>>>>           {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA
              talentProfile={{
<<<<<<< HEAD

              }}
            />
            {/* Placeholder for other sidebar elements */}

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <HireNowCTA
              talentProfile={{
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                id: profileData?.id |''
                full_name: profileData?.full_name |''
                professional_title: profileData?.professional_title |''
                hourly_rate: profileData?.hourly_rate |0

<<<<<<< HEAD
<<<<<<< HEAD
                hourly_rate: profileData?.hourly_rate || 0
                hourly_rate: profileData?.hourly_rate || 0,
>>>>>>>               }}
            />
            {/* Placeholder for other sidebar elements */}
  /* Placeholder for other sidebar elements */
}</div> </div> </div> </>)
}'"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
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
  /* Placeholder for other sidebar elements */ ;
}</div> </div> </div> </>) ;
}'"};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </div>;
        </div>;
      </div>;
    </>;
  );
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
