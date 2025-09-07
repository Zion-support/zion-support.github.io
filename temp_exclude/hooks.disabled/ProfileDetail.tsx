useEffect((,) => {;
    const fetchProfile = async () => {;
      setIsLoading(true);
      setError(null);
      try {;
        if (!profileId) {;
          setError("Profile ID is missing.");
          return;

  useEffect(() => {}
    const fetchProfile = async () => {}
      setIsLoading(true),
      setError(null),

          setError("Profile ID is missing."),
          return

        }

          .single(),

        if (error) {}
          throw new Error(error.message)
        }

          .eq("id", profileId);
          .single();

        if (error) {;
          throw new Error(error && error.message);
        }

        if (!data) {;
"
          setError("Profile not found.");
          return;

      }

    },

    fetchProfile()
  }, [profileId]),

      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    )
  }

      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    )
  }

      <div className="min-h-screen flex items-center justify-center">
        <p>Profile not found.</p>
      </div>

import { useState, useEffect } from "react",;
import { useRouter } from "next/router",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { SEO } from "@/components/SEO",;
import { Header } from "@/components/Header",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2, Mail, Phone, Globe } from 'lucide-react';

import { HireNowCTA } from "@/components/profile/HireNowCTA",;
export default function ProfileDetail() { return null; }
        }
;
        const { data, error } = await supabase;"
          .from("talent_profiles");"
          .select("*");"
          .eq("id", profileId);
          .single(),;
        if (error) {;
          throw new Error(error.message);
        }
;
        if (!data) {;"
          setError("Profile not found."),;
          return;
        }
;
        setProfileData(data);
      } catch (err: any) {;"
        setError(err.message || "Failed to fetch profile."),;
        toast({;"
          title: "Error","
          description: err.message || "Failed to fetch profile.",;"
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
    },;
    fetchProfile();
  }, [profileId]),;
  if (isLoading) {;
    return (;"
      <div className="min-h-screen flex items-center justify-center">;
        <p>Loading profile...</p>;
      </div>;
    );
  }
;
  if (error) {;
    return (;"
      <div className="min-h-screen flex items-center justify-center">;
        <p>Error: {error}</p>;
      </div>;
    );
  }
;
  if (!profileData) {;
    return (;"
      <div className="min-h-screen flex items-center justify-center">;
        <p>Profile not found.</p>;
      </div>;
    );
  }
;
  return (;
    <>;

      <SEO;
        title={`${profileData.full_name} | Zion AI Marketplace`}'"
        description={profileData.bio || "Check out this talent's profile on Zion!"}

      />

          <div className="col-span-12 lg:col-span-8">
            {/* Profile Header */}"
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>"
                <div className="flex items-center space-x-4">"
                  <Avatar className="w-20 h-20">
                    {profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />
                    ) : (
                      <AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  <div>"
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                      {profileData.full_name}
                      {profileData.is_verified && ("
                        <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
                      )}

            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>"
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>
              </CardHeader>

            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>"
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>
              </CardHeader>
              <CardContent>"
                <div className="flex flex-wrap gap-2">

            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>"
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.experience ? (

                      <p className="text-zion-slate-light">{exp.description}</p>
                    </div>
                  ))
                ) : ("
                  <p className="text-zion-slate-light">No experience provided.</p>
                )}

            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>"
                <CardTitle className="text-xl font-bold text-white">Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.portfolio_links ? ("
                  <div className="flex flex-col gap-3">
                    {profileData.portfolio_links.map((link: any, index: number) => (
                      <a;
                        key={index}
                        href={link.url}"
                        target="_blank""
                        rel="noopener noreferrer""
                        className="text-zion-cyan hover:text-white flex items-center gap-2"
                      >"
                        <LinkIcon className="h-4 w-4" />

                    ))}
                  </div>
                ) : ("
                  <p className="text-zion-slate-light">No portfolio links provided.</p>
                )}
              </CardContent>;
            </Card>;
          </div>;

                professional_title: profileData?.professional_title || '',

              }}

              <div className="flex flex-col space-y-3">
                {profileData.email && ("
                  <div className="flex items-center gap-2 text-zion-slate-light">"
                    <Mail className="h-4 w-4" />"`
                    <a href={`mailto:${profileData.email}`} className="hover:text-zion-cyan">{profileData.email}</Link>
                  </div>
                )}
                {profileData.phone && ("
                  <div className="flex items-center gap-2 text-zion-slate-light">"
                    <Phone className="h-4 w-4" />
                    <span>{profileData.phone}</span>
                  </div>
                )}
                {profileData.website && ("
                  <div className="flex items-center gap-2 text-zion-slate-light">"
                    <Globe className="h-4 w-4" />"
                    <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">
                      Website;
                    </Link>
                  </div>
                )}

              </div>;
            </div>;

                    title="GitHub"
                  >"
                    <Github className="h-4 w-4" />

                  </Link>
                )}
                {profileData.twitter_url && (;
                  <a;
                    href={profileData.twitter_url}

                    title="Twitter"
                  >"
                    <Twitter className="h-4 w-4" />

                  </Link>
                )}
                {profileData.linkedin_url && (;
                  <a;
                    href={profileData.linkedin_url}

                    title="LinkedIn"
                  >"
                    <Linkedin className="h-4 w-4" />

                  </Link>
                )}
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}

;