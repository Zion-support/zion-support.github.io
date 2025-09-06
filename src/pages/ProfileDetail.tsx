=======
export default function ProfileDetail() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const router = useRouter();
  const profileId = router && router.query.profileId as string;
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { useState, useEffect } from "react",
import { useRouter } from "next/router",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { SEO } from "@/components/SEO",
import { Header } from "@/components/Header",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2, Mail, Phone, Globe } from 'lucide-react'
import { HireNowCTA } from "@/components/profile/HireNowCTA";
export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  const router = useRouter();
  const profileId = router.query.profileId as string;
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
  useEffect((,) => {;
    const fetchProfile = async () => {;
      setIsLoading(true);
      setError(null);
      try {;
        if (!profileId) {;
          setError("Profile ID is missing.");
          return;
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

import { useState, useEffect } from "react",
import { useRouter } from "next/router",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { SEO } from "@/components/SEO",
import { Header } from "@/components/Header",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2, Mail, Phone, Globe } from 'lucide-react'

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true),
      setError(null),
      try {
        if (!profileId) {

        }
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)

        if (error) {
          throw new Error(error.message)
        }
        if (!data) {

        }

        setProfileData(data)
      } catch (err: any) {
        setError(err.message |"Failed to fetch profile.")
        toast({
          title: "Error"
          description: err.message |"Failed to fetch profile."
          variant: "destructive"})

      } finally {
      } catch (err: any) {;
        setError(err && err.message || "Failed to fetch profile."),;
        toast({;
          title: "Error",;
          description: err && err.message || "Failed to fetch profile.",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }

  if (isLoading) {

            {/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">{profileData.bio |"No bio provided."}</p>
              </CardContent>
            </Card>
            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills?.map((skill: string, index: number) => (
                    <Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{skill}</Badge>
                  )) |<p className="text-zion-slate-light">No skills provided.</p>}
                </div>
              </CardContent>
            </Card>
            {/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.experience ? (
                  profileData.experience.map((exp: any, index: number) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-bold text-white">{exp.title}</h4>
                      <p className="text-zion-cyan">{exp.company}</p>
                      <p className="text-sm text-zion-slate-light">{exp.start_date} - {exp.end_date |"Present"}</p>
                      <p className="text-zion-slate-light">{exp.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No experience provided.</p>
                )}
              </CardContent>
            </Card>
            {/* Portfolio Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.portfolio_links ? (
                  <div className="flex flex-col gap-3">
                    {profileData.portfolio_links.map((link: any, index: number) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-cyan hover:text-white flex items-center gap-2"
                      >
                        <LinkIcon className="h-4 w-4" />

=======
                </div>;
              </CardContent>;
            </Card>;

            {/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className="text-zion-slate-light">{profileData && profileData.bio || "No bio provided."}</p>;
              </CardContent>;
            </Card>;

            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="flex flex-wrap gap-2">;
                  {profileData && profileData.skills?.map((skill: string, index: number,) => (;
                    <Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{skill}</Badge>;
                  )) || <p className="text-zion-slate-light">No skills provided.</p>}
                </div>;
              </CardContent>;
            </Card>;

            {/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {profileData && profileData.experience ? (;
                  profileData && profileData.experience.map((exp: any, index: number,) => (;
                    <div key={index} className="mb-4">;
                      <h4 className="font-bold text-white">{exp && exp.title}</h4>;
                      <p className="text-zion-cyan">{exp && exp.company}</p>;
                      <p className="text-sm text-zion-slate-light">{exp && exp.start_date} - {exp && exp.end_date || "Present"}</p>;
                      <p className="text-zion-slate-light">{exp && exp.description}</p>;
                    </div>;
                  ));
                ) : (;
                  <p className="text-zion-slate-light">No experience provided.</p>;

                        {link.title || link.url}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>

                )}
              </CardContent>;
            </Card>;

            {/* Portfolio Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Portfolio</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {profileData && profileData.portfolio_links ? (;
                  <div className="flex flex-col gap-3">;
                    {profileData && profileData.portfolio_links.map((link: any, index: number,) => (;
                      <a
                        key = {index,}
                        href = {link && link.url,}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zion-cyan hover:text-white flex items-center gap-2">;
                        <LinkIcon className="h-4 w-4" />;
                        {link && link.title || link && link.url}
                      </a>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                    ))}
                  </div>
                ) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>
                )}

              </CardContent>;
            </Card>;
          </div>;


          {/* Sidebar with HireNowCTA */}
          <div className="col-span-4 lg:col-span-1">
            <HireNowCTA
              talentProfile={{
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              }}
            />
            {/* Contact Information */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="flex flex-col space-y-3">
                {profileData.email && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${profileData.email}`} className="hover:text-zion-cyan">{profileData.email}</Link>
                  </div>
                )}
                {profileData.phone && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Phone className="h-4 w-4" />
                    <span>{profileData.phone}</span>
                  </div>
                )}
                {profileData.website && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Globe className="h-4 w-4" />
                    <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">
                      Website
                    </Link>
                  </div>
                )}
=======
              </div>
            </div>
              </div>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD

            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">;
              <h3 className="text-xl font-bold mb-4">Social</h3>;
              <div className="flex flex-col space-y-3">;
                {profileData && profileData.github_url && (;
                  <a

                    href = {profileData && profileData.github_url,}

                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="GitHub"

                    href = {profileData && profileData.twitter_url,}

                    title="GitHub"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
=======
                  </a>
                )}
                {profileData.twitter_url && (
                  <a
                    href = {profileData.twitter_url,}
                  </Link>
                )}
                {profileData.twitter_url && (;
                  <a;
                    href={profileData.twitter_url}
<<<<<<< HEAD
<<<<<<< HEAD

                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="Twitter"

                    href = {profileData && profileData.linkedin_url,}

                    title="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
=======
                  </a>
                )}
                {profileData.linkedin_url && (
                  <a
                    href = {profileData.linkedin_url,}
                  </Link>
                )}
                {profileData.linkedin_url && (;
                  <a;
                    href={profileData.linkedin_url}
<<<<<<< HEAD
<<<<<<< HEAD

                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="LinkedIn"

                <div className="flex flex - wrap gap - 4 text - sm">;
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
                  {profile_data.hourly_rate && (
                    <div className="text - white font - bold">;
                      ${profile_data.hourly_rate}
                      <span className="text - zion - slate - light font - normal">/hr</span>;
                    </div>)}
                </div>;
              </CardContent>;
            </Card>;
            {/* About Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue - light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text - white">About Me</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className="text - zion - slate - light">{profile_data.bio || "No bio provided."}</p>;
              </CardContent>;
            </Card>;
            {/* Skills Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue - light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text - white">Skills</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="flex flex - wrap gap - 2">;
                  {profile_data.skills?.map ((skill: string, index: number, ) => (
                    <Badge key={index} className="bg - zion - blue - light text - zion - slate - light border - none">{skill}</Badge>)) || <p className="text - zion - slate - light">No skills provided.</p>}
                </div>;
              </CardContent>;
            </Card>;
            {/* Experience Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue - light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text - white">Experience</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {profile_data.experience ? (
                  profile_data.experience.map ((exp: any, index: number, ) => (
                    <div key={index} className="mb - 4">;
                      <h4 className="font - bold text - white">{exp.title}</h4>;
                      <p className="text - zion - cyan">{exp.company}</p>;
                      <p className="text - sm text - zion - slate - light">{exp.start_date} - {exp.end_date || "Present"}</p>;
                      <p className="text - zion - slate - light">{exp.description}</p>;
                    </div>))) : (
                  <p className="text - zion - slate - light">No experience provided.</p>)}
              </CardContent>;
            </Card>;
            {/* Portfolio Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue - light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text - white">Portfolio</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {profile_data.portfolio_links ? (
                  <div className="flex flex - col gap - 3">;
                    {profile_data.portfolio_links.map ((link: any, index: number, ) => (
                      <a;
                        key = {index, }
                        href = {link.url, }
                        target="_blank";
                        rel="noopener noreferrer";
                        className="text - zion - cyan hover:text - white flex items - center gap - 2";
                      >;
                        <LinkIcon className="h - 4 w - 4" />;
                        {link.title || link.url}
                      </a>))}
                  </div>) : (
                  <p className="text - zion - slate - light">No portfolio links provided.</p>)}
              </CardContent>;
            </Card>;
          </div>;
          {/* Sidebar with HireNowCTA */}
          <div className="col - span - 4 lg:col - span - 1">;
            <HireNowCTA;
              talent_profile={{
                id: profile_data?.id || '',
                full_name: profile_data?.full_name || '',
                professional_title: profile_data?.professional_title || '',
                hourly_rate: profile_data?.hourly_rate || 0,
              }}
            />;
            {/* Contact Information */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mt - 6">;
              <h3 className="text - xl font - bold mb - 4">Contact</h3>;
              <div className="flex flex - col space - y-3">;
                {profile_data.email && (
                  <div className="flex items - center gap - 2 text - zion - slate - light">;
                    <Mail className="h - 4 w - 4" />;
                    <a href={`mailto:${profile_data.email}`} className="hover:text - zion - cyan">{profile_data.email}</a>;
                  </div>)}
                {profile_data.phone && (
                  <div className="flex items - center gap - 2 text - zion - slate - light">;
                    <Phone className="h - 4 w - 4" />;
                    <span>{profile_data.phone}</span>;
                  </div>)}
                {profile_data.website && (
                  <div className="flex items - center gap - 2 text - zion - slate - light">;
                    <Globe className="h - 4 w - 4" />;
                    <a href={profile_data.website} target="_blank" rel="noopener noreferrer" className="hover:text - zion - cyan">;
                      Website;
                    </a>;
                  </div>)}
              </div>;
            </div>;
            {/* Social Links */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mt - 6">;
              <h3 className="text - xl font - bold mb - 4">Social</h3>;
              <div className="flex flex - col space - y-3">;
                {profile_data.github_url && (
                  <a;
                    href = {profile_data.github_url, }
                    target="_blank";
                    rel="noopener noreferrer";
                    className="flex items - center gap - 2 text - zion - slate - light hover:text - zion - cyan";
                    aria - label="GitHub";
                    title="GitHub";
                  >;
                    <Github className="h - 4 w - 4" />;
                    GitHub;
                  </a>)}
                {profile_data.twitter_url && (
                  <a;
                    href = {profile_data.twitter_url, }
                    target="_blank";
                    rel="noopener noreferrer";
                    className="flex items - center gap - 2 text - zion - slate - light hover:text - zion - cyan";
                    aria - label="Twitter";
                    title="Twitter";
                  >;
                    <Twitter className="h - 4 w - 4" />;
                    Twitter;
                  </a>)}
                {profile_data.linkedin_url && (
                  <a;
                    href = {profile_data.linkedin_url, }
                    target="_blank";
                    rel="noopener noreferrer";
                    className="flex items - center gap - 2 text - zion - slate - light hover:text - zion - cyan";
                    aria - label="LinkedIn";
                    title="LinkedIn";
                  >;
                    <Linkedin className="h - 4 w - 4" />;
                    LinkedIn;
                  </a>)}

                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
<<<<<<< HEAD
