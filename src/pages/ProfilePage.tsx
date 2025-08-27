<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
<<<<<<< HEAD
import { SEO } from "../components/SEOHead";
=======
import { SEO } from "@/components/SEO";
<<<<<<< HEAD
import { AppHeader } from "@/components/layout/AppHeader";
import { Footer } from "@/components/Footer";
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { HireNowCTA } from "@/components/profile/HireNowCTA";
import { MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from "lucide-react";
export default function ProfilePage() {
<<<<<<< HEAD
    var _a;
=======
    // useParams may be untyped in this environment, so avoid passing a
    // type argument and cast the result instead to prevent TS2347 errors.
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
    const { profileId } = useParams();
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchProfile = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const { data, error } = await supabase
                    .from("talent_profiles")
                    .select("*")
                    .eq("id", profileId)
                    .single();
                if (error) {
                    throw error;
                }
                setProfileData(data);
            }
            catch (error) {
                console.error("Error fetching profile:", error);
                setIsError(true);
                toast({
                    title: "Error",
                    description: "Failed to load profile. Please try again later.",
                    variant: "destructive",
                });
            }
            finally {
                setIsLoading(false);
            }
        };
        if (profileId) {
            fetchProfile();
        }
    }, [profileId]);
    if (isLoading) {
<<<<<<< HEAD
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("span", { className: "loading loading-ring loading-lg" }) }));
    }
    if (isError || !profileData) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("p", { className: "text-red-500", children: "Failed to load profile." }) }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: `${profileData.full_name} | Talent Profile`, description: profileData.bio || "View the profile of this talented individual." }), _jsx(AppHeader, {}), _jsx("div", { className: "container mx-auto px-4 py-8", children: _jsxs("div", { className: "grid grid-cols-12 gap-6", children: [_jsxs("div", { className: "col-span-12 lg:col-span-8", children: [_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6", children: [_jsxs("div", { className: "flex items-start", children: [_jsxs("div", { className: "relative mr-4", children: [_jsx(Avatar, { className: "w-24 h-24", children: profileData.profile_picture_url ? (_jsx(AvatarImage, { src: profileData.profile_picture_url, alt: profileData.full_name })) : (_jsx(AvatarFallback, { children: (_a = profileData.full_name) === null || _a === void 0 ? void 0 : _a.charAt(0) })) }), profileData.is_verified && (_jsx("div", { className: "absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full", children: _jsx(CheckCircle2, { className: "w-5 h-5 text-zion-cyan" }) }))] }), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "flex justify-between items-start", children: _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-white", children: profileData.full_name }), _jsx("p", { className: "text-zion-cyan font-medium", children: profileData.professional_title })] }) }), _jsxs("div", { className: "mt-2 flex flex-wrap gap-3 text-sm", children: [profileData.location && (_jsxs("div", { className: "flex items-center text-zion-slate-light", children: [_jsx(MapPin, { className: "h-4 w-4 mr-1" }), _jsx("span", { children: profileData.location })] })), profileData.availability && (_jsxs("div", { className: "flex items-center text-zion-slate-light", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), _jsx("span", { children: profileData.availability })] }))] })] })] }), profileData.skills && profileData.skills.length > 0 && (_jsxs("div", { className: "mt-4", children: [_jsx("h4", { className: "text-lg font-bold text-white mb-2", children: "Skills" }), _jsx("div", { className: "flex flex-wrap gap-2", children: profileData.skills.map((skill, index) => (_jsx(Badge, { variant: "secondary", children: skill }, index))) })] }))] }), _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6", children: [_jsx("h2", { className: "text-xl font-bold text-white mb-3", children: "About Me" }), _jsx("p", { className: "text-zion-slate-light", children: profileData.bio || "No bio provided." })] }), _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6", children: [_jsx("h2", { className: "text-xl font-bold text-white mb-3", children: "Portfolio" }), _jsx("div", { className: "space-y-3", children: profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (profileData.portfolio_links.map((link, index) => (_jsxs("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "flex items-center text-zion-cyan hover:text-white transition-colors", children: [_jsx(LinkIcon, { className: "h-4 w-4 mr-2" }), link] }, index)))) : (_jsx("p", { className: "text-zion-slate-light", children: "No portfolio links provided." })) })] }), _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6", children: [_jsx("h2", { className: "text-xl font-bold text-white mb-3", children: "Experience" }), _jsx("p", { className: "text-zion-slate-light", children: profileData.experience || "No experience provided." })] }), _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6", children: [_jsx("h2", { className: "text-xl font-bold text-white mb-3", children: "Connect" }), _jsxs("div", { className: "flex space-x-4", children: [profileData.github_link && (_jsx("a", { href: profileData.github_link, target: "_blank", rel: "noopener noreferrer", className: "text-zion-cyan hover:text-white transition-colors", children: _jsx(Github, { className: "h-6 w-6" }) })), profileData.twitter_link && (_jsx("a", { href: profileData.twitter_link, target: "_blank", rel: "noopener noreferrer", className: "text-zion-cyan hover:text-white transition-colors", children: _jsx(Twitter, { className: "h-6 w-6" }) })), profileData.linkedin_link && (_jsx("a", { href: profileData.linkedin_link, target: "_blank", rel: "noopener noreferrer", className: "text-zion-cyan hover:text-white transition-colors", children: _jsx(Linkedin, { className: "h-6 w-6" }) }))] })] })] }), _jsx("div", { className: "col-span-12 lg:col-span-4 space-y-6", children: _jsx(HireNowCTA, { talentProfile: {
                                    id: (profileData === null || profileData === void 0 ? void 0 : profileData.id) || '',
                                    full_name: (profileData === null || profileData === void 0 ? void 0 : profileData.full_name) || '',
                                    professional_title: (profileData === null || profileData === void 0 ? void 0 : profileData.professional_title) || '',
                                    hourly_rate: (profileData === null || profileData === void 0 ? void 0 : profileData.hourly_rate) || 0
                                } }) })] }) }), _jsx(Footer, {})] }));
=======
        return (<div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>);
    }
    if (isError || !profileData) {
        return (<div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>);
    }
    return (<>
      <SEO title={`${profileData.full_name} | Talent Profile`} description={profileData.bio || "View the profile of this talented individual."}/>
      
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
                    {profileData.profile_picture_url ? (<AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name}/>) : (<AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>)}
                  </Avatar>
                  {profileData.is_verified && (<div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan"/>
                    </div>)}
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
                    {profileData.location && (<div className="flex items-center text-zion-slate-light">
                        <MapPin className="h-4 w-4 mr-1"/>
                        <span>{profileData.location}</span>
                      </div>)}
                    {profileData.availability && (<div className="flex items-center text-zion-slate-light">
                        <Clock className="h-4 w-4 mr-1"/>
                        <span>{profileData.availability}</span>
                      </div>)}
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              {profileData.skills && profileData.skills.length > 0 && (<div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (<Badge key={index} variant="secondary">{skill}</Badge>))}
                  </div>
                </div>)}
            </div>
            
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>
            </div>
            
            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (profileData.portfolio_links.map((link, index) => (<a key={index} href={link} target="_blank" rel="noopener noreferrer" className="flex items-center text-zion-cyan hover:text-white transition-colors">
                      <LinkIcon className="h-4 w-4 mr-2"/>
                      {link}
                    </a>))) : (<p className="text-zion-slate-light">No portfolio links provided.</p>)}
              </div>
            </div>
            
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}</p>
            </div>
            
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>
              <div className="flex space-x-4">
                {profileData.github_link && (<a href={profileData.github_link} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors">
                    <Github className="h-6 w-6"/>
                  </a>)}
                {profileData.twitter_link && (<a href={profileData.twitter_link} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors">
                    <Twitter className="h-6 w-6"/>
                  </a>)}
                {profileData.linkedin_link && (<a href={profileData.linkedin_link} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors">
                    <Linkedin className="h-6 w-6"/>
                  </a>)}
              </div>
            </div>
          </div>
        
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <HireNowCTA talentProfile={{
            id: profileData?.id || '',
            full_name: profileData?.full_name || '',
            professional_title: profileData?.professional_title || '',
            hourly_rate: profileData?.hourly_rate || 0
        }}/>
            {/* Placeholder for other sidebar elements */}
          </div>
        </div>
      </div>
      
    </>);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
}
