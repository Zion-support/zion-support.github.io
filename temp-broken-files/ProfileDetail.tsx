<<<<<<<< HEAD:temp_broken_pages_all/ProfileDetail.tsx
import { useState, useEffect } from "react";,
import { useRouter } from "next/router";,
import { supabase } from "@/integrations/supabase/client";,
import { toast } from "@/hooks/use-toast";,
import { SEO } from "@/components/SEO";,
import { Header } from "@/components/Header";,
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";,
import { Button } from "@/components/ui/button";,
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";,
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Link, as, LinkIcon, Github, Twitter, Linkedin, CheckCircle2, Mail, Phone, Globe } from "lucide-react";
import { HireNowCTA } from "@/components/profile/HireNowCTA";
import { useState, useEffect,  } from "react",
import { useRouter,  } from "next/router",
import { supabase,  } from "@/integrations/supabase/client",
import { toast,  } from "@/hooks/use-toast",
import { SEO,  } from "@/components/SEO",
import { Header,  } from "@/components/Header",
import { Avatar,, AvatarFallback, AvatarImage,  } from "@/components/ui/avatar",
import { Button,  } from "@/components/ui/button",
import { Card,, CardContent,, CardDescription,, CardHeader, CardTitle,  } from "@/components/ui/card",
import { Badge,  } from "@/components/ui/badge";
import { MapPin,, Clock,, Link,, as,, LinkIcon,, Github,, Twitter,, Linkedin,, CheckCircle2,, Mail,, Phone, Globe,  } from 'lucide-react'
import { HireNowCTA,  } from "@/components/profile/HireNowCTA";
>>>>>>>> pr-22690:temp-broken-files/ProfileDetail.tsx
export default function ProfileDetail() {
  return (
  return (
  return (
  // useParams is typed as `any` in this environment due to missing type
  // definitions so avoid passing a type argument to prevent TS2347.
              }}
            />
            {/* Contact Information */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="flex flex-col space-y-3">
                {profileData.email && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${profileData.email}`} className="hover:text-zion-cyan">{profileData.email}</a>
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
                    </a>
                  </div>
                )}
              </div>
            </div>
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <div className="flex flex-col space-y-3">
                {profileData.github_url && (
                  <a
href = {profileData.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {profileData.twitter_url && (
                  <a
href = {profileData.twitter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="Twitter"
                    title="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                )}
                {profileData.linkedin_url && (
                  <a
href = {profileData.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
</>
);
}
}, [profileId]);
<p>Error: {error ;
}</p> </div>) ;
}return (<> <SEO) : (<AvatarFallback> {profileData.full name?.charAt (0) ;
}</AvatarFallback>) ;
}</Avatar> <div> </div> </div> </CardHeader> <CardContent> $ {profileData.hourly rate ";
}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) ";
}</div> </CardContent> </Card> <CardHeader> <CardTitle className="text-xl font-bold text-white" >About Me</CardTitle> </CardHeader> <CardContent> <CardHeader> <CardTitle className="text-xl font-bold text-white" >Skills</CardTitle> </CardHeader> <CardContent> </div> </CardContent> </Card> <CardHeader> <CardTitle className="text-xl font-bold text-white" >Experience</CardTitle> </CardHeader> <CardContent> </div>) ) ) : (<p className="text-zion-slate-light" >No experience provided.</p>) ";
}</CardContent> </Card> <CardHeader> <CardTitle className="text-xl font-bold text-white" >Portfolio</CardTitle> </CardHeader> <CardContent>) ) ";
}</div>) : (<p className="text-zion-slate-light" >No portfolio links provided.</p>) ;
}</CardContent> </Card> </div> <HireNowCTA talentProfile= {{;
  id: profileData?.id |'', full name: profileData?.full name |'',  professional title: profileData?.professional title |'', hourly rate: profileData?.hourly rate |0 ;
}/> Website </Link> </div>) ;
}</div> </div> <a href= {profileData.github url ";
}target="blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan" aria-label="GitHub" title="GitHub" > <Github className="h-4 w-4" /> GitHub </Link>) ;
}{profileData.twitter url && (<a href= {;
  profileData.twitter url ";
}target="blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan" aria-label="Twitter" title="Twitter" > <Twitter className="h-4 w-4" /> Twitter </Link>) ;
}{profileData.linkedin url && (<a href= {;
  profileData.linkedin url ";
}target="blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan" aria-label="LinkedIn" title="LinkedIn" > <Linkedin className="h-4 w-4" /> LinkedIn </Link>) ;
}</div> </div> </div> </div> </div> </>) ;
}'"}
import React from 'react';

export default function ProfileDetail() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">ProfileDetail</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}
