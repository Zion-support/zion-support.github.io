
import { Badge } from "@/components/ui/badge",""
import { Button } from "@/components/ui/button",""
import { Card, CardContent, CardFooter } from "@/components/ui/card",""
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'''
import { FavoriteButton } from "@/components/FavoriteButton","
export const TalentCard = React && React.memo(TalentCardComponent);"
TalentCard && TalentCard.displayName = 'TalentCard';import React from 'react';''
import { useRouter } from 'next/router';''
import { Badge } from "@/components/ui/badge";""
import { Button } from "@/components/ui/button";""
import { Card, CardContent, CardFooter } from "@/components/ui/card";""
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';''
import { FavoriteButton } from "@/components/FavoriteButton";""
import { TalentProfile } from "@/types/talent";""
import { RatingStars  } from '@/components/RatingStars';''
import { useAuth  } from '@/context/auth/AuthProvider';''
import { useCart } from '@/context/CartContext';''
import { TalentProfile } from "@/types/talent",""
import { RatingStars } from '@/components/RatingStars',''
import { useAuth } from '@/context/auth/AuthProvider',''
import { useCart } from '@/context/CartContext','
export interface TalentCardProps {
  // TODO: Implement
}
  talent: TalentProfile;,
  onViewProfile: (id: string,) => void;
  onRequestHire: (talent: TalentProfile,) => void;
  isAuthenticated: boolean;'
import React from 'react',;''
import { useRouter } from 'next/router',;''
import { Badge } from "@/components/ui/badge",;""
import { Button } from "@/components/ui/button",;""
import { Card, CardContent, CardFooter } from "@/components/ui/card",;""
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';''
import { FavoriteButton } from "@/components/FavoriteButton",;""
import { TalentProfile } from "@/types/talent",;""
import { RatingStars } from '@/components/RatingStars',;''
import { useAuth } from '@/context/auth/AuthProvider',;''
import { useCart } from '@/context/CartContext',;'
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire: (talent: TalentProfile) => void,;
  isAuthenticated: boolean;


}
const TalentCardComponent = ({
  talent;
  onViewProfile;
  onRequestHire;
  isAuthenticated;)
}: TalentCardProps,) => {
  const router = useRouter()
  const handleViewProfile = () => {
    // Navigate directly to the talent profile;
    router.push(`/talent/${talent.id}`)
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {
      onViewProfile(talent.id)
    }




  const handleRequestHire = (e: React.MouseEvent,) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent)
    }


  },




  // Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice(0, 5) |[]
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string,) => void,;
  onRequestHire: (talent: TalentProfile,) => void,;
  isAuthenticated: boolean;
}

const TalentCardComponent = ({;
  talent,;
  onViewProfile,;
  onRequestHire,;
  isAuthenticated;)
}: TalentCardProps,) => {;
  const router = useRouter(),;

  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;
    router && router.push(`/talent/${talent && talent.id}`),;

    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(talent && talent.id);
    }
  },;
  const handleRequestHire = (e: React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
    }
  },

  const handleRequestHire = (e: React.MouseEvent,) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent)
    }
  },

  return (
    <Card;'
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple""
      onClick={handleViewProfile}
      tabIndex={0}


    >
</Card>"
      <div className="p-6">"
</div>"
        <div className="flex items-start">"
</div>"
          <div className="relative mr-4">"
</div>"
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">"
</div>
                <img;
                  src={talent.profile_picture_url}
                  alt={talent.full_name}

"
                  className="w-full h-full object-cover"""
                  loading="lazy"")"
                  {talent.full_name?.charAt(0) || "T"}"
                </div>
</img>"
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;"
</div>
                </div>;
            </div>;"
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;"
</div>"
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;"
</CheckCircle2>
              </div>;
          </div>;"
          <div className="flex-1">;"
</div>"
            <div className="flex justify-between items-start">;"
</div>"
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;""
              <FavoriteButton itemId={talent && talent.id} className="-mt-1" />;"
</FavoriteButton>
            </div>;"
            <p className="text-white font-medium">{talent && talent.professional_title}</p>;""
            <div className="mt-2 flex flex-wrap gap-3 text-sm">"
</div>"
                <div className="flex items-center text-zion-slate-light">"
</div>"
                  <MapPin className="h-4 w-4 mr-1" />"
</MapPin>
                  <span>{talent.location}</span>
                </div>"
                <div className="flex items-center text-zion-slate-light">"
</div>"
                  <Clock className="h-4 w-4 mr-1" />"
</Clock>
                  <span>{talent.availability_type}</span>
                </div>
            </div>;
          </div>;
        </div>;"
          <div className="mt-4">"
</div>"
            <div className="flex flex-wrap gap-2">"
</div>
            </div>;
          </div>;
        </div>;"
          <div className="mt-4">;"
</div>"
            <div className="flex flex-wrap gap-2">;"
</div>
                <span;
                  key = {index,}"
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;"
</span>
                <span;
                  key={index}
"
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light""
                >
</span>
                </span>;"
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;"
</span>
                </span>;
            </div>
          </div>"
        <div className="mt-5 flex items-center justify-between">;"
</div>
          <div>;
</div>"
              <div className="text-white font-bold">;"
</div>"
                <span className="text-zion-slate-light font-normal">/hr</span>;"
              </div>;"
              <div className="text-zion-slate-light">Rate not specified</div>;""
          <div className="flex items-center gap-2">"
</div>
          </div>;"
          <div className="flex items-center gap-2">;"
</div>
              <Button;"
                size="sm"""
                variant="secondary""
                onClick={handleRequestHire}

"
                className="bg-zion-purple hover:bg-zion-purple-light text-white""
              >
</Button>
              </Button>
            <Button;"
              size="sm"""
              variant="ghost""
              onClick={(e) => {
</Button>"
              View <ArrowRight className="ml-1 h-4 w-4" />"
</ArrowRight>
            </Button>
          </div>
        </div>
      </div>
    </Card>"
              View <ArrowRight className="ml-1 h-4 w-4" />;"
</ArrowRight>
    <Card;"
      className="overflow - hidden transition - all hover:shadow - lg border - zion - blue - light bg - zion - blue cursor - pointer focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - zion - purple";"
      on_click = {handleViewProfile, }
      tab_index = {0, }
    >;
</Card>"
      <div className="p - 6">;"
</div>"
        <div className="flex items - start">;"
</div>"
          <div className="relative mr - 4">;"
</div>"
            <div className="w - 16 h - 16 rounded - full overflow - hidden bg - zion - blue - dark border border - zion - blue - light">;"
</div>
                <img;
                  src = {talent.profile_picture_url, }
                  alt = {talent.full_name, }"
                  className="w - full h - full object - cover";""
                  loading="lazy";"
                />) : (
</img>"
                <div className="w - full h - full flex items - center justify - center text - zion - slate - light text - xl font - bold">;"
</div>)
                </div>)}
            </div>;"
              <div className="absolute -bottom - 1 -right - 1 bg - zion - blue p - 0.5 rounded - full">;"
</div>"
                <CheckCircle2 className="w - 5 h - 5 text - zion - cyan" />;"
</CheckCircle2>
              </div>)}
          </div>;"
          <div className="flex - 1">;"
</div>"
            <div className="flex justify - between items - start">;"
</div>"
              <h3 className="text - lg font - bold text - white">{talent.full_name}</h3>;""
              <FavoriteButton item_id={talent.id} className="-mt - 1" />;"
</FavoriteButton>
            </div>;"
            <p className="text - white font - medium">{talent.professional_title}</p>;""
            <div className="mt - 2 flex flex - wrap gap - 3 text - sm">;"
</div>"
                <div className="flex items - center text - zion - slate - light">;"
</div>"
                  <MapPin className="h - 4 w - 4 mr - 1" />;"
</MapPin>
                  <span>{talent.location}</span>;
                </div>)}"
                <div className="flex items - center text - zion - slate - light">;"
</div>"
                  <Clock className="h - 4 w - 4 mr - 1" />;"
</Clock>
                  <span>{talent.availability_type}</span>;
                </div>)}
            </div>;
          </div>;
        </div>;"
          <div className="mt - 4">;"
</div>"
            <div className="flex flex - wrap gap - 2">;"
</div>
                <span;
                  key = {index, }"
                  className="px - 2 py - 1 text - xs rounded - full bg - zion - blue - light text - zion - slate - light";"
                >;
</span>
                </span>))}"
                <span className="px - 2 py - 1 text - xs rounded - full bg - zion - purple / 20 text - zion - cyan">;"
</span>
                </span>)}
            </div>;
          </div>)}"
        <div className="mt - 5 flex items - center justify - between">;"
</div>
          <div>;
</div>"
              <div className="text - white font - bold">;"
</div>"
                <span className="text - zion - slate - light font - normal">/hr</span>;"
              </div>) : ()"
              <div className="text - zion - slate - light">Rate not specified</div>)}"
          </div>;"
          <div className="flex items - center gap - 2">;"
</div>
              <Button;"
                size="sm";""
                variant="secondary";"
                on_click = {handleRequestHire, }"
                className="bg - zion - purple hover:bg - zion - purple - light text - white";"
              >;
</Button>
              </Button>)}
            <Button;"
              size="sm";""
              variant="ghost";"
              on_click={(e, ) => {
</Button>"
              View <ArrowRight className="ml - 1 h - 4 w - 4" />;"
</ArrowRight>

            </Button>;
          </div>;
        </div>;
      </div>;

    </Card>);"

