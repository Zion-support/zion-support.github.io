:src_backup/components/talent/TalentCard.tsx
import React from 'react',
import { useRouter } from 'next/router',
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'"
import { FavoriteButton } from "@/components/FavoriteButton",
:src_backup/components/talent/TalentCard.tsx

export const TalentCard = React && React.memo(TalentCardComponent);
TalentCard && TalentCard.displayName = 'TalentCard';import React from 'react';
import { useRouter } from 'next/router';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FavoriteButton } from "@/components/FavoriteButton";
import { TalentProfile } from "@/types/talent";
import { RatingStars  } from '@/components/RatingStars';
import { useAuth  } from '@/context/auth/AuthProvider';

;
export const TalentCard = React && React.memo(TalentCardComponent);'
TalentCard && TalentCard.displayName = 'TalentCard';import React from 'react';'
import { useRouter } from 'next/router';"
import { Badge } from "@/components/ui/badge";"
import { Button } from "@/components/ui/button";"
import { Card, CardContent, CardFooter } from "@/components/ui/card";'
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';"
import { FavoriteButton } from "@/components/FavoriteButton";"
import { TalentProfile } from "@/types/talent";'
import { RatingStars  } from '@/components/RatingStars';'
import { useAuth  } from '@/context/auth/AuthProvider';'
import { useCart } from '@/context/CartContext';
:src/components/talent/TalentCard.tsx
import { TalentProfile } from "@/types/talent",
import { RatingStars } from '@/components/RatingStars',
import { useAuth } from '@/context/auth/AuthProvider',
"
import { TalentProfile } from "@/types/talent",'
import { RatingStars } from '@/components/RatingStars','
import { useAuth } from '@/context/auth/AuthProvider','
import { useCart } from '@/context/CartContext',

export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  isAuthenticated: boolean

import React from 'react',;
import { useRouter } from 'next/router',;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FavoriteButton } from "@/components/FavoriteButton",;
import { TalentProfile } from "@/types/talent",;
import { RatingStars } from '@/components/RatingStars',;
import { useAuth } from '@/context/auth/AuthProvider',;
export interface TalentCardProps {};
  talent: TalentProfile;
  onViewProfile: (id: string,) => void;
  onRequestHire: (talent: TalentProfile,) => void;
  isAuthenticated: boolean;
'
import React from 'react',;'
import { useRouter } from 'next/router',;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardFooter } from "@/components/ui/card",;'
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';"
import { FavoriteButton } from "@/components/FavoriteButton",;"
import { TalentProfile } from "@/types/talent",;'
import { RatingStars } from '@/components/RatingStars',;'
import { useAuth } from '@/context/auth/AuthProvider',;'
import { useCart } from '@/context/CartContext',;
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire: (talent: TalentProfile) => void,;
  isAuthenticated: boolean;

}
:src_backup/components/talent/TalentCard.tsx
;
  const router = useRouter()
  const handleViewProfile = () => {}
    // Navigate directly to the talent profile;
    router.push(`/talent/${talent.id}`)
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {}
      onViewProfile(talent.id)
    }

:src_backup/components/talent/TalentCard.tsx
  const handleRequestHire = (e: React.MouseEvent,) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {}
      onRequestHire(talent)
    }

  },

:src_backup/components/talent/TalentCard.tsx
  // Extract skills - limit to 5 for display
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
  isAuthenticated;
}: TalentCardProps) => {;
  const router = useRouter(),;
  const handleViewProfile = () => {;
:src_backup/components/talent/TalentCard.tsx
    // Navigate directly to the talent profile;
    router.push(`/talent/${talent.id}`),;
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(talent.id);
    }
  },;

const handleRequestHire = (e: React && React.MouseEvent,) => {;
    e && e.preventDefault(),;
    e && e.stopPropagation(),;    if (onRequestHire) {;
    if (onRequestHire) {;
      onRequestHire(talent);
    }
  },

:src_backup/components/talent/TalentCard.tsx

  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) || [],

  return (
    <Card"
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple"
      onClick={handleViewProfile}
      tabIndex={0}

:src_backup/components/talent/TalentCard.tsx
    >
      <div className="p-6">
        <div className="flex items-start">
          {/* Avatar */}
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (
                <img

                <img

                <img


    >"
      <div className="p-6">"
        <div className="flex items-start">
          {/* Avatar */}"
          <div className="relative mr-4">"
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (
                <img;
                  src={talent.profile_picture_url}
                  alt={talent.full_name}

                  className="w-full h-full object-cover"
                  loading="lazy"
/>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
                  {talent.full_name?.charAt(0) || "T"}
                  {talent.full_name?.charAt(0) || "T"}

                  className="w-full h-full object-cover"
                  loading="lazy"

                  {talent.full_name?.charAt(0) || "T"}

                  className="w-full h-full object-cover"
                  loading="lazy"

                  {talent.full_name?.charAt(0) || "T"}

                </div>
:src_backup/components/talent/TalentCard.tsx
              )}
            </div>
            {talent.is_verified && (
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
              </div>
            )}
          </div>;
:src_backup/components/talent/TalentCard.tsx
          {/* Main Info */}
<div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>
              <FavoriteButton itemId={talent.id} className="-mt-1" />
            </div>
            <p className="text-white font-medium">{talent.professional_title}</p>
              <FavoriteButton itemId={talent && talent.id} className="-mt-1" />;
            </div>;"
            <p className="text-white font-medium">{talent && talent.professional_title}</p>;


            {/* Location & Availability */}
:src/components/talent/TalentCard.tsx
            <div className="mt-2 flex flex-wrap gap-3 text-sm">;
              {talent && talent.location && (;
                <div className="flex items-center text-zion-slate-light">;
                  <MapPin className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.location}</span>;
                </div>;
              )}
              {talent && talent.availability_type && (;
                <div className="flex items-center text-zion-slate-light">;
                  <Clock className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.availability_type}</span>;
                </div>;
              )}
            </div>;
          </div>;
        </div>;
:src/components/talent/TalentCard.tsx
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && ("
                <div className="flex items-center text-zion-slate-light">"
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
              )}
              {talent.availability_type && ("
                <div className="flex items-center text-zion-slate-light">"
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{talent.availability_type}</span>
                </div>
              )}


            </div>;
          </div>;
        </div>;


        {/* Skills */}
        {skills.length > 0 && ("
          <div className="mt-4">"
            <div className="flex flex-wrap gap-2">
:src_backup/components/talent/TalentCard.tsx
              {skills.map((skill, index) => (
                <span;
                  key={index}
:src_backup/components/talent/TalentCard.tsx

                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {skill}
                </span>;
              ))}
:src_backup/components/talent/TalentCard.tsx
              {(talent.skills?.length || 0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more
                </span>
              )}
:src/components/talent/TalentCard.tsx
            </div>;
          </div>;

        )}
;
          </div>;        )}

:src_backup/components/talent/TalentCard.tsx
        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            {talent.hourly_rate ? (
              <div className="text-white font-bold">
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>
              </div>
            ) : (
              <div className="text-zion-slate-light">Rate not specified</div>

        {/* Hourly Rate & Actions */}"
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent && talent.hourly_rate ? (;"
              <div className="text-white font-bold">;
                ${talent && talent.hourly_rate}"
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;"
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}
          </div>


          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
                size="sm"
"
          <div className="flex items-center gap-2">
            {isAuthenticated && (
          </div>;
"
          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
              <Button"
                size="sm""
                variant="secondary"

                onClick={handleRequestHire}

:src_backup/components/talent/TalentCard.tsx
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire;
              </Button>
            )}
            <Button"
              size="sm""
              variant="ghost"
              onClick={(e) => {

:src_backup/components/talent/TalentCard.tsx
              onClick={(e) => {
              onClick={(e) => {


              onClick={(e) => {}
              onClick={(e) => {}
                e.stopPropagation(),
                handleViewProfile()
              }}"
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light"
            >"
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
},

export const TalentCard = React.memo(TalentCardComponent),
TalentCard.displayName = 'TalentCard',
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}
          </div>;
          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
              <Button;
                size="sm";
                variant="secondary";
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white";
              >;
                Hire;
              </Button>;
            )}
            <Button;
              size="sm";
              variant="ghost";
              onClick={(e) => {;
                e.stopPropagation(),;
                handleViewProfile();
              }}"
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light";
            >;"
              View <ArrowRight className="ml-1 h-4 w-4" />;
:src_backup/components/talent/TalentCard.tsx
import { use_cart } from '@/context / CartContext';
export interface TalentCardProps {}
  talent: TalentProfile,
  onViewProfile: (id: string, ) => void,
  onRequestHire: (talent: TalentProfile, ) => void,;
  is_authenticated: boolean;
}
const TalentCardComponent = ({}
  talent,
  onViewProfile,
  onRequestHire,
  is_authenticated;
}: TalentCardProps, ) =>: any {}
  const router = use_router (),
  const handleViewProfile = () =>: any {}
    // Navigate directly to the talent profile;`
    router.push (`/talent/${talent.id}`),
    // Also call the onViewProfile callback if provided;
    // Check condition;
if ( {) {}
  $2;
}
      onViewProfile (talent.id);
    }
  },
  const handleRequestHire = (e: React.MouseEvent, ) =>: any {}
    e.prevent_default (),
    e.stop_propagation (),
    // Check condition;
if ( {) {}
  $2;
}
      onRequestHire (talent);
    }
  },
  // Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice (0, 5) || [],
  return (
:src_backup/components/talent/TalentCard.tsx
    <Card;
      className="overflow - hidden transition - all hover:shadow - lg border - zion - blue - light bg - zion - blue cursor - pointer focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - zion-purple";
      on_click = {handleViewProfile, }
      tab_index = {0, }
    >;
      <div className="p-6">;
        <div className="flex items-start">;
          {/* Avatar */}
          <div className="relative mr-4">;
            <div className="w - 16 h - 16 rounded - full overflow - hidden bg - zion - blue - dark border border - zion - blue-light">;
              {talent.profile_picture_url ? (
                <img;
                  src = {talent.profile_picture_url, }
                  alt = {talent.full_name, }
                  className="w - full h - full object-cover";
                  loading="lazy";
                />) : (
                <div className="w - full h - full flex items - center justify - center text - zion - slate - light text - xl font-bold">;
                  {talent.full_name?.char_at (0) || "T"}
                </div>)}
            </div>;
            {talent.is_verified && (
              <div className="absolute -bottom - 1 -right - 1 bg - zion - blue p - 0.5 rounded-full">;
                <CheckCircle2 className="w - 5 h - 5 text - zion-cyan" />;
              </div>)}
          </div>;
          {/* Main Info */}
          <div className="flex-1">;
            <div className="flex justify - between items-start">;
              <h3 className="text - lg font - bold text-white">{talent.full_name}</h3>;
              <FavoriteButton item_id={talent.id} className="-mt-1" />;
            </div>;
            <p className="text - white font-medium">{talent.professional_title}</p>;
            {/* Location & Availability */}
            <div className="mt - 2 flex flex - wrap gap - 3 text-sm">;
              {talent.location && (
                <div className="flex items - center text - zion - slate-light">;
                  <MapPin className="h - 4 w - 4 mr-1" />;
                  <span>{talent.location}</span>;
                </div>)}
              {talent.availability_type && (
                <div className="flex items - center text - zion - slate-light">;
                  <Clock className="h - 4 w - 4 mr-1" />;
                  <span>{talent.availability_type}</span>;
                </div>)}
            </div>;
          </div>;
        </div>;
        {/* Skills */}
:src_backup/components/talent/TalentCard.tsx
        {skills.length > 0 && (
          <div className="mt-4">;
            <div className="flex flex - wrap gap-2">;
              {skills.map ((skill, index, ) => (
                <span;
                  key = {index, }
                  className="px - 2 py - 1 text - xs rounded - full bg - zion - blue - light text - zion - slate-light";
                >;
                  {skill}
                </span>))}
              {(talent.skills?.length || 0) > 5 && (
                <span className="px - 2 py - 1 text - xs rounded - full bg - zion - purple / 20 text - zion-cyan">;
                  +{(talent.skills?.length || 0) - 5} more;
                </span>)}
            </div>;
          </div>)}
:src_backup/components/talent/TalentCard.tsx
        {/* Hourly Rate & Actions */}
        <div className="mt - 5 flex items - center justify-between">;
          <div>;
            {talent.hourly_rate ? (
              <div className="text - white font-bold">;
                ${talent.hourly_rate}
                <span className="text - zion - slate - light font-normal">/hr</span>;
              </div>) : (
              <div className="text - zion - slate-light">Rate not specified</div>)}
          </div>;
          <div className="flex items - center gap-2">;
            {is_authenticated && (
              <Button;"
                size="sm";"
                variant="secondary";
:src_backup/components/talent/TalentCard.tsx
                on_click = {handleRequestHire, }
                className="bg - zion - purple hover:bg - zion - purple - light text-white";
              >;
                Hire;
              </Button>)}
            <Button;"
              size="sm";"
              variant="ghost";
              on_click={(e, ) => {}
                e.stop_propagation (),
                handleViewProfile ();
:src_backup/components/talent/TalentCard.tsx
              }}
              className="text - zion - cyan hover: text - white hover:bg - zion - blue-light";
            >;
              View <ArrowRight className="ml - 1 h - 4 w-4" />;

            </Button>;
          </div>;
        </div>;
      </div>;
    </Card>;
  );
},;
export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';

    </Card>);
},
export const TalentCard = React.memo (TalentCardComponent),'
TalentCard.display_name = 'TalentCard',;
export const TalentCard = React.memo (TalentCardComponent);'
TalentCard.display_name = 'TalentCard';

export const TalentCard = React.memo(TalentCardComponent),'
TalentCard.displayName = 'TalentCard',
},

:src_backup/components/talent/TalentCard.tsx
export const TalentCard = React.memo(TalentCardComponent),
TalentCard.displayName = 'TalentCard',
export interface TalentCardProps {
  );
};
"
:src/components/talent/TalentCard.tsx
