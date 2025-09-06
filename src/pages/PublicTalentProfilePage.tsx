
import { logErrorToProduction } from '@/utils/productionLogger';
import { Star, MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
import { Star, MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const router = useRouter();
  const profileId = router && router.query.profileId as string;
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect((,) => {;
    const fetchProfile = async () => {;
      setIsLoading(true);
      setIsError(false);
      try {;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);
          .single();

        if (error) {;
          throw error;
        }

        setProfileData(data);
      } catch (error) {;
        logErrorToProduction(error instanceof Error ? error && error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' }),;
        setIsError(true);
        toast({;
          title: "Error",;
          description: "Failed to load profile. Please try again later.",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
    };

    if (profileId) {;
      fetchProfile();
    }
  }, [profileId]);

  if (isLoading) {;
    return (
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

  return (
    <>;
      <SEO
        title={`${profileData && profileData.full_name} | Talent Profile`}
        description = {profileData && profileData.bio || "View the profile of this talented individual.",}
      />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">;
            {/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <div className="flex items-start">;
                {/* Avatar */}
                <div className="relative mr-4">;
                  <Avatar className="w-24 h-24">;
                    {profileData && profileData.profile_picture_url ? (;
                      <AvatarImage src={profileData && profileData.profile_picture_url} alt={profileData && profileData.full_name} />;
                    ) : (;
                      <AvatarFallback>{profileData && profileData.full_name?.charAt(0)}</AvatarFallback>;
                    )}
                  </Avatar>;
                  {profileData && profileData.is_verified && (;
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
                    </div>;
                  )}
                </div>;

                {/* Main Info */}
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <div>;
                      <h1 className="text-2xl font-bold text-white">{profileData && profileData.full_name}</h1>;
                      <p className="text-zion-cyan font-medium">{profileData && profileData.professional_title}</p>;
                    </div>;
                    {/* Add Save/Unsave Button Here */}
                  </div>;

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
                  </div>;
                </div>;
              </div>;

              {/* Skills */}
              {profileData && profileData.skills && profileData && profileData.skills.length > 0 && (;
                <div className="mt-4">;
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {profileData && profileData.skills.map((skill: string, index: number,) => (;
                      <Badge key={skill + index} variant="secondary">{skill}</Badge>;
                    ))}
                  </div>;
                </div>;
              )}
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zion-cyan hover:text-white transition-colors">;
                      <LinkIcon className="h-4 w-4 mr-2" />;
                      {link}
                    </a>;
                  ));
                ) : (;
                  <p className="text-zion-slate-light">No portfolio links provided.</p>;
                )}
              </div>;
            </div>;

            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.experience || "No experience provided."}</p>;
            </div>;

            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;
              <div className="flex space-x-4">;
                {profileData && profileData.github_link && (;
                  <a
                    href = {profileData && profileData.github_link,}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="GitHub"
                    title="GitHub">;
                    <Github className="h-6 w-6" />;
                  </a>;
                )}
                {profileData && profileData.twitter_link && (;
                  <a
                    href = {profileData && profileData.twitter_link,}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="Twitter"
                    title="Twitter">;
                    <Twitter className="h-6 w-6" />;
                  </a>;
                )}
                {profileData && profileData.linkedin_link && (;
                  <a
                    href = {profileData && profileData.linkedin_link,}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="LinkedIn"
                    title="LinkedIn">;
                    <Linkedin className="h-6 w-6" />;
                  </a>;
                )}
              </div>;
            </div>;
          </div>;

          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA
              talentProfile={{
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0,
              }}
            />;
            {/* Placeholder for other sidebar elements */}
          </div>;
        </div>;
      </div>;
    </>;
  );

};
if (profileId) {;
  fetchProfile () ;

}, [profileId]);
if (isLoading) {";
  return (<div className="min-h-screen flex items-center justify-center" > <span className="loading loading-ring loading-lg" ></span> </div>) ;
}if (isError || !profileData) {";
  return (<div className="min-h-screen flex items-center justify-center" > <p className="text-red-500" >Failed to load profile.</p> </div>) ;
}profileData && profileData.full name?.charAt (0) ;
}</AvatarFallback>) ;
}</Avatar> </div>) ;
}</div> </div> {;
  /* Add Save/Unsave Button Here */ ;
}</div> <span> {;
  profileData && profileData.availability ;
}</span> </div>) ;
}</div> </div> </div>) ) ;
}</div> </div>) ";
}</div>) ) ) : (<p className="text-zion-slate-light" >No portfolio links provided.</p>) ;
}</div> </div> <ahref= {
  profileData && profileData.github link "
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" aria-label="GitHub" title="GitHub"> <Github className="h-6 w-6" /> </Link>) ;
}{;
  profileData && profileData.twitter link && (<ahref= {
  profileData && profileData.twitter link "
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" aria-label="Twitter" title="Twitter"> <Twitter className="h-6 w-6" /> </Link>) ;
}{;
  profileData && profileData.linkedin link && (<ahref= {
  profileData && profileData.linkedin link "
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" aria-label="LinkedIn" title="LinkedIn"> <Linkedin className="h-6 w-6" /> </Link>) ;
}</div> </div> </div> <HireNowCTAtalentProfile= {
  {'
  id: profileData?.id || '', full name: profileData?.full name || '',  professional title: profileData?.professional title || '', hourly rate: profileData?.hourly rate || 0 

}/> {;
  /* Placeholder for other sidebar elements */ ;
}</div> </div> </div> </>) ;
}'"}
