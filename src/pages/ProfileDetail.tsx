<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useRouter } from "next/router",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { SEO } from "@/components/SEO",
import { Header } from "@/components/Header",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2, Mail, Phone, Globe } from 'lucide-react'
import { HireNowCTA } from "@/components/profile/HireNowCTA",
=======
import { useState, useEffect } from &quot;react&quot;;
import { useRouter } from &quot;next/router&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2, Mail, Phone, Globe } from 'lucide-react'
import { HireNowCTA } from &quot;@/components/profile/HireNowCTA&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const router = useRouter(),
  const profileId = router.query.profileId as string,
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true),
      setError(null),
      try {
        if (!profileId) {
<<<<<<< HEAD
          setError("Profile ID is missing."),
          return
        }
=======

export default function ProfileDetail() {_// useParams is typed as `any` in this environment due to missing type
  // definitions, _so avoid passing a type argument to prevent TS2347.
  const _router = useRouter();
  const _profileId = router.query.profileId as string;
  const [profileData, _setProfileData] = useState<any>(null);
  const [isLoading, _setIsLoading] = useState(true);
  const [error, _setError] = useState<string | null>(null);

  useEffect__(() => {
    const _fetchProfile = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (!profileId) {
          setError("Profile ID is missing.");
          return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        const {_data, _error} = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
<<<<<<< HEAD
          .single(),
=======
          setError(&quot;Profile ID is missing.&quot;);
          return;
        }

        const { data, error } = await supabase
          .from(&quot;talent_profiles&quot;)
          .select(&quot;*&quot;)
          .eq(&quot;id&quot;, profileId)
          .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

        if (error) {
          throw new Error(error.message)
        }

        if (!data) {
<<<<<<< HEAD
          setError("Profile not found."),
          return
=======
          setError(&quot;Profile not found.&quot;);
          return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }

        setProfileData(data)
      } catch (err: any) {
<<<<<<< HEAD
        setError(err.message || "Failed to fetch profile."),
        toast({
          title: "Error",
          description: err.message || "Failed to fetch profile.",
          variant: "destructive"})
=======
        setError(err.message || &quot;Failed to fetch profile.&quot;);
        toast({
          title: &quot;Error&quot;,
          description: err.message || &quot;Failed to fetch profile.&quot;,
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsLoading(false)
      }
    },
=======
          .single();

        if (error) {_throw new Error(error.message);}

        if (!data) {_setError("Profile not found.");
          return;}

        setProfileData(data);
      } catch (err: unknown) {_setError(err.message || "Failed to fetch profile.");
        toast({
          title: "Error", _description: err.message || "Failed to fetch profile.", _variant: "destructive"});
      } finally {_setIsLoading(false);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    fetchProfile()
  }, [profileId]),

<<<<<<< HEAD
  if (isLoading) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <p>Loading profile...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
=======
  if (isLoading) {_return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );}

  if (error) {_return (
      <div className="min-h-screen flex items-center justify-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <p>Error: {error}</p>
      </div>
    )
  }

<<<<<<< HEAD
  if (!profileData) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <p>Profile not found.</p>
      </div>
    )
  }
=======
  if (!profileData) {_return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Profile not found.</p>
      </div>
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <SEO
<<<<<<< HEAD
        title={`${profileData.full_name} | Zion AI Marketplace`}
        description={profileData.bio || &quot;Check out this talent's profile on Zion!&quot;}
      />
      <Header />
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;grid grid-cols-12 gap-6&quot;>
          {/* Main Content */}
          <div className=&quot;col-span-12 lg:col-span-8&quot;>
            {/* Profile Header */}
            <Card className=&quot;mb-6 bg-zion-blue border-zion-blue-light&quot;>
              <CardHeader>
                <div className=&quot;flex items-center space-x-4&quot;>
                  <Avatar className=&quot;w-20 h-20&quot;>
                    {profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />
=======
        title={_`${profileData.full_name} | Zion AI Marketplace`}
        description={_profileData.bio || "Check out this talent's profile on Zion!"}
      />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {_/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            {_/* Profile Header */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    {_profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={_profileData.full_name} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ) : (
                      <AvatarFallback>{_profileData.full_name?.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  <div>
<<<<<<< HEAD
                    <CardTitle className=&quot;text-2xl font-bold text-white flex items-center gap-2&quot;>
                      {profileData.full_name}
                      {profileData.is_verified && (
                        <CheckCircle2 className=&quot;w-5 h-5 text-zion-cyan&quot; />
                      )}
                    </CardTitle>
                    <CardDescription className=&quot;text-zion-cyan&quot;>{profileData.professional_title}</CardDescription>
=======
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                      {_profileData.full_name}
                      {_profileData.is_verified && (
                        <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
                      )}
                    </CardTitle>
                    <CardDescription className="text-zion-cyan">{_profileData.professional_title}</CardDescription>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </CardHeader>
              <CardContent>
<<<<<<< HEAD
                <div className=&quot;flex flex-wrap gap-4 text-sm&quot;>
                  {profileData.location && (
                    <div className=&quot;flex items-center text-zion-slate-light&quot;>
                      <MapPin className=&quot;h-4 w-4 mr-1&quot; />
                      <span>{profileData.location}</span>
                    </div>
                  )}
                  {profileData.availability && (
                    <div className=&quot;flex items-center text-zion-slate-light&quot;>
                      <Clock className=&quot;h-4 w-4 mr-1&quot; />
                      <span>{profileData.availability}</span>
                    </div>
                  )}
                  {profileData.hourly_rate && (
                    <div className=&quot;text-white font-bold&quot;>
=======
                <div className="flex flex-wrap gap-4 text-sm">
                  {_profileData.location && (
                    <div className="flex items-center text-zion-slate-light">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{profileData.location}</span>
                    </div>
                  )}
                  {_profileData.availability && (
                    <div className="flex items-center text-zion-slate-light">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{profileData.availability}</span>
                    </div>
                  )}
                  {_profileData.hourly_rate && (
                    <div className="text-white font-bold">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ${profileData.hourly_rate}
                      <span className=&quot;text-zion-slate-light font-normal&quot;>/hr</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

<<<<<<< HEAD
            {/* About Section */}
            <Card className=&quot;mb-6 bg-zion-blue border-zion-blue-light&quot;>
=======
            {_/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <CardHeader>
                <CardTitle className=&quot;text-xl font-bold text-white&quot;>About Me</CardTitle>
              </CardHeader>
              <CardContent>
<<<<<<< HEAD
                <p className=&quot;text-zion-slate-light&quot;>{profileData.bio || &quot;No bio provided.&quot;}</p>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className=&quot;mb-6 bg-zion-blue border-zion-blue-light&quot;>
=======
                <p className="text-zion-slate-light">{_profileData.bio || "No bio provided."}</p>
              </CardContent>
            </Card>

            {_/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <CardHeader>
                <CardTitle className=&quot;text-xl font-bold text-white&quot;>Skills</CardTitle>
              </CardHeader>
              <CardContent>
<<<<<<< HEAD
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {profileData.skills?.map((skill: string, index: number) => (
                    <Badge key={index} className=&quot;bg-zion-blue-light text-zion-slate-light border-none&quot;>{skill}</Badge>
                  )) || <p className=&quot;text-zion-slate-light&quot;>No skills provided.</p>}
=======
                <div className="flex flex-wrap gap-2">
                  {_profileData.skills?.map(_(skill: string, _index: number) => (
                    <Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{_skill}</Badge>
                  )) || <p className="text-zion-slate-light">No skills provided.</p>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </CardContent>
            </Card>

<<<<<<< HEAD
            {/* Experience Section */}
            <Card className=&quot;mb-6 bg-zion-blue border-zion-blue-light&quot;>
=======
            {_/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <CardHeader>
                <CardTitle className=&quot;text-xl font-bold text-white&quot;>Experience</CardTitle>
              </CardHeader>
              <CardContent>
<<<<<<< HEAD
                {profileData.experience ? (
                  profileData.experience.map((exp: any, index: number) => (
                    <div key={index} className=&quot;mb-4&quot;>
                      <h4 className=&quot;font-bold text-white&quot;>{exp.title}</h4>
                      <p className=&quot;text-zion-cyan&quot;>{exp.company}</p>
                      <p className=&quot;text-sm text-zion-slate-light&quot;>{exp.start_date} - {exp.end_date || &quot;Present&quot;}</p>
                      <p className=&quot;text-zion-slate-light&quot;>{exp.description}</p>
=======
                {_profileData.experience ? (_profileData.experience.map((exp: unknown, _index: number) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-bold text-white">{_exp.title}</h4>
                      <p className="text-zion-cyan">{_exp.company}</p>
                      <p className="text-sm text-zion-slate-light">{_exp.start_date} - {_exp.end_date || "Present"}</p>
                      <p className="text-zion-slate-light">{_exp.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  ))
                ) : (
                  <p className=&quot;text-zion-slate-light&quot;>No experience provided.</p>
                )}
              </CardContent>
            </Card>

<<<<<<< HEAD
            {/* Portfolio Section */}
            <Card className=&quot;mb-6 bg-zion-blue border-zion-blue-light&quot;>
=======
            {_/* Portfolio Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <CardHeader>
                <CardTitle className=&quot;text-xl font-bold text-white&quot;>Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
<<<<<<< HEAD
                {profileData.portfolio_links ? (
                  <div className=&quot;flex flex-col gap-3&quot;>
                    {profileData.portfolio_links.map((link: any, index: number) => (
                      <a
                        key={index}
                        href={link.url}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;text-zion-cyan hover:text-white flex items-center gap-2&quot;
                      >
                        <LinkIcon className=&quot;h-4 w-4&quot; />
                        {link.title || link.url}
                      </Link>
=======
                {_profileData.portfolio_links ? (_<div className="flex flex-col gap-3">
                    {profileData.portfolio_links.map((link: unknown, _index: number) => (
                      <a
                        key={index}
                        href={_link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-cyan hover:text-white flex items-center gap-2"
                      >
                        <LinkIcon className="h-4 w-4" />
                        {_link.title || link.url}
                      </a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ))}
                  </div>
                ) : (
                  <p className=&quot;text-zion-slate-light&quot;>No portfolio links provided.</p>
                )}
              </CardContent>
            </Card>
          </div>

<<<<<<< HEAD
          {/* Sidebar with HireNowCTA */}
          <div className=&quot;col-span-4 lg:col-span-1&quot;>
=======
          {_/* Sidebar with HireNowCTA */}
          <div className="col-span-4 lg:col-span-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <HireNowCTA
              talentProfile={_{
                id: profileData?.id || '', _full_name: profileData?.full_name || '', _professional_title: profileData?.professional_title || '', _hourly_rate: profileData?.hourly_rate || 0}}
            />
<<<<<<< HEAD
            {/* Contact Information */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6&quot;>
              <h3 className=&quot;text-xl font-bold mb-4&quot;>Contact</h3>
              <div className=&quot;flex flex-col space-y-3&quot;>
                {profileData.email && (
                  <div className=&quot;flex items-center gap-2 text-zion-slate-light&quot;>
                    <Mail className=&quot;h-4 w-4&quot; />
                    <a href={`mailto:${profileData.email}`} className=&quot;hover:text-zion-cyan&quot;>{profileData.email}</Link>
                  </div>
                )}
                {profileData.phone && (
                  <div className=&quot;flex items-center gap-2 text-zion-slate-light&quot;>
                    <Phone className=&quot;h-4 w-4&quot; />
                    <span>{profileData.phone}</span>
                  </div>
                )}
                {profileData.website && (
                  <div className=&quot;flex items-center gap-2 text-zion-slate-light&quot;>
                    <Globe className=&quot;h-4 w-4&quot; />
                    <a href={profileData.website} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;hover:text-zion-cyan&quot;>
=======
            {_/* Contact Information */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="flex flex-col space-y-3">
                {_profileData.email && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${profileData.email}`} className="hover:text-zion-cyan">{_profileData.email}</a>
                  </div>
                )}
                {_profileData.phone && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Phone className="h-4 w-4" />
                    <span>{profileData.phone}</span>
                  </div>
                )}
                {_profileData.website && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Globe className="h-4 w-4" />
                    <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Website
                    </Link>
                  </div>
                )}
              </div>
            </div>

<<<<<<< HEAD
            {/* Social Links */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6&quot;>
              <h3 className=&quot;text-xl font-bold mb-4&quot;>Social</h3>
              <div className=&quot;flex flex-col space-y-3&quot;>
                {profileData.github_url && (
=======
            {_/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <div className="flex flex-col space-y-3">
                {_profileData.github_url && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <a
                    href={profileData.github_url}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan&quot;
                    aria-label=&quot;GitHub&quot;
                    title=&quot;GitHub&quot;
                  >
                    <Github className=&quot;h-4 w-4&quot; />
                    GitHub
                  </Link>
                )}
                {_profileData.twitter_url && (
                  <a
                    href={profileData.twitter_url}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan&quot;
                    aria-label=&quot;Twitter&quot;
                    title=&quot;Twitter&quot;
                  >
                    <Twitter className=&quot;h-4 w-4&quot; />
                    Twitter
                  </Link>
                )}
                {_profileData.linkedin_url && (
                  <a
                    href={profileData.linkedin_url}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan&quot;
                    aria-label=&quot;LinkedIn&quot;
                    title=&quot;LinkedIn&quot;
                  >
                    <Linkedin className=&quot;h-4 w-4&quot; />
                    LinkedIn
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
