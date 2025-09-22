<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
<<<<<<< HEAD
import React from 'react',
import { useRouter } from 'next/router',
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
=======
import { Badge } from "@/components/ui/badge","
import { Button } from "@/components/ui/button","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'"
import { FavoriteButton } from "@/components/FavoriteButton",
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
=======


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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
import { useCart } from '@/context/CartContext';
<<<<<<< HEAD:src/components/talent/TalentCard.tsx
<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { TalentProfile } from "@/types/talent",
import { RatingStars } from '@/components/RatingStars',
import { useAuth } from '@/context/auth/AuthProvider',
=======
"
import { TalentProfile } from "@/types/talent",'
import { RatingStars } from '@/components/RatingStars','
import { useAuth } from '@/context/auth/AuthProvider','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
import { useCart } from '@/context/CartContext',
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  isAuthenticated: boolean
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
import { useCart } from '@/context/CartContext',;
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire: (talent: TalentProfile) => void,;
  isAuthenticated: boolean;
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
<<<<<<< HEAD
;
=======
const TalentCardComponent = ({
  talent
  onViewProfile
  onRequestHire
  isAuthenticated
}: TalentCardProps,) => {
=======
const TalentCardComponent = ({}
  talent;
  onViewProfile;
  onRequestHire;
  isAuthenticated;
}: TalentCardProps,) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
  const router = useRouter()
  const handleViewProfile = () => {}
    // Navigate directly to the talent profile;
    router.push(`/talent/${talent.id}`)
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {}
      onViewProfile(talent.id)
    }

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
  const handleRequestHire = (e: React.MouseEvent,) => {
=======



  const handleRequestHire = (e: React.MouseEvent,) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {}
      onRequestHire(talent)
    }

  },

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
  // Extract skills - limit to 5 for display
=======



  // Extract skills - limit to 5 for display;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
  const skills = talent.skills?.slice(0, 5) |[]
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string,) => void,;
  onRequestHire: (talent: TalentProfile,) => void,;
  isAuthenticated: boolean;
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const TalentCardComponent = ({;
  talent,;
  onViewProfile,;
  onRequestHire,;
  isAuthenticated;
}: TalentCardProps) => {;
  const router = useRouter(),;
  const handleViewProfile = () => {;
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
    // Navigate directly to the talent profile;
    router.push(`/talent/${talent.id}`),;
=======
    // Navigate directly to the talent profile;`
    router && router.push(`/talent/${talent && talent.id}`),;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(talent.id);
    }
  },;
=======
  const handleRequestHire = (e: React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/talent/TalentCard.tsx

<<<<<<< HEAD
<<<<<<< HEAD
  const handleRequestHire = (e: React && React.MouseEvent,) => {;
    e && e.preventDefault(),;
    e && e.stopPropagation(),;    if (onRequestHire) {;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    if (onRequestHire) {;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      onRequestHire(talent);
    }
  },

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx

  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) || [],
=======
  const handleRequestHire = (e: React.MouseEvent,) => {}
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {}
      onRequestHire(talent)
    }
  },
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx

  return (
    <Card"
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple"
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      onClick={handleViewProfile}
      tabIndex={0}

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
    >
      <div className="p-6">
        <div className="flex items-start">
          {/* Avatar */}
<<<<<<< HEAD:src/components/talent/TalentCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (
                <img
<<<<<<< HEAD
=======

=======
          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
              {talent && talent.profile_picture_url ? (;                <img
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
<<<<<<< HEAD:src/components/talent/TalentCard.tsx
=======
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (

                <img
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/talent/TalentCard.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/TalentCard.tsx

                <img
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

                <img
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    >"
      <div className="p-6">"
        <div className="flex items-start">
          {/* Avatar */}"
          <div className="relative mr-4">"
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (
                <img;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
                  src={talent.profile_picture_url}
                  alt={talent.full_name}
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  className="w-full h-full object-cover"
                  loading="lazy"
<<<<<<< HEAD
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
                  {talent.full_name?.charAt(0) || "T"}
=======

=======
"
                  className="w-full h-full object-cover""
                  loading="lazy"

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
                  {talent.full_name?.charAt(0) || "T"}

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  className="w-full h-full object-cover"
                  loading="lazy"

                  {talent.full_name?.charAt(0) || "T"}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
                  className="w-full h-full object-cover"
                  loading="lazy"

                  {talent.full_name?.charAt(0) || "T"}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </div>
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
              )}
            </div>
            {talent.is_verified && (
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
              </div>
=======
                />;
              ) : (;"
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;"
                  {talent && talent.full_name?.charAt(0) || "T"}
                </div>;
              )}
            </div>;
            {talent && talent.is_verified && (;"
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;"
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
            )}
          </div>;
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
          {/* Main Info */}
<<<<<<< HEAD
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>
              <FavoriteButton itemId={talent.id} className="-mt-1" />
            </div>
            <p className="text-white font-medium">{talent.professional_title}</p>
=======
          <div className="flex-1">;
            <div className="flex justify-between items-start">;
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;
=======

          {/* Main Info */}"
          <div className="flex-1">;"
            <div className="flex justify-between items-start">;"
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
              <FavoriteButton itemId={talent && talent.id} className="-mt-1" />;
            </div>;"
            <p className="text-white font-medium">{talent && talent.professional_title}</p>;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {/* Location & Availability */}
<<<<<<< HEAD:src/components/talent/TalentCard.tsx
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
<<<<<<< HEAD
            </div>;
          </div>;
        </div>;
=======
=======
            {/* Location & Availability */}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
            {/* Location & Availability */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD:src/components/talent/TalentCard.tsx
=======
=======
            {/* Location & Availability */}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
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


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/talent/TalentCard.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/TalentCard.tsx

            </div>;
          </div>;
        </div>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        {/* Skills */}
        {skills.length > 0 && ("
          <div className="mt-4">"
            <div className="flex flex-wrap gap-2">
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
=======

            </div>;
          </div>;
        </div>;
        {/* Skills */}
        {skills && skills.length > 0 && (;"
          <div className="mt-4">;"
            <div className="flex flex-wrap gap-2">;
              {skills && skills.map((skill, index,) => (;

                <span;
                  key = {index,}"
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
              {skills.map((skill, index) => (
                <span;
                  key={index}
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {skill}
                </span>;
              ))}
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
              {(talent.skills?.length || 0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more
                </span>
=======

              {(talent && talent.skills?.length || 0) > 5 && (;"
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent && talent.skills?.length || 0) - 5} more;
                </span>;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
              )}
<<<<<<< HEAD:src/components/talent/TalentCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            </div>;
<<<<<<< HEAD
          </div>;
=======
=======
<<<<<<< HEAD:src/components/talent/TalentCard.tsx
=======
            </div>
          </div>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/talent/TalentCard.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/TalentCard.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        )}
;
=======
          </div>;        )}

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======


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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          </div>
          
=======

          

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
                size="sm"
=======
"
          <div className="flex items-center gap-2">
            {isAuthenticated && (
          </div>;
"
          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
              <Button"
                size="sm""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
                variant="secondary"
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                onClick={handleRequestHire}

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire;
              </Button>
            )}
            <Button"
              size="sm""
              variant="ghost"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={(e) => {
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
              onClick={(e) => {
              onClick={(e) => {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              onClick={(e) => {}
              onClick={(e) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
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
<<<<<<< HEAD
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
=======

              onClick={(e,) => {;
                e && e.stopPropagation(),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                handleViewProfile();
              }}"
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light";
            >;"
              View <ArrowRight className="ml-1 h-4 w-4" />;
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
<<<<<<< HEAD
=======
export const TalentCard = React.memo (TalentCardComponent);
TalentCard.display_name = 'TalentCard'; import React from 'react';
import { use_router } from 'next / router';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Card, CardContent, CardFooter  } from '@/components / ui / card';
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FavoriteButton  } from '@/components / FavoriteButton';
import { TalentProfile  } from '@/types / talent';
import { RatingStars } from '@/components / RatingStars';
import { use_auth } from '@/context / auth / AuthProvider';
=======
export const TalentCard = React.memo (TalentCardComponent);'
TalentCard.display_name = 'TalentCard'; import React from 'react';'
import { use_router } from 'next / router';'
import { Badge  } from '@/components / ui / badge';'
import { Button  } from '@/components / ui / button';'
import { Card, CardContent, CardFooter  } from '@/components / ui / card';'
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';'
import { FavoriteButton  } from '@/components / FavoriteButton';'
import { TalentProfile  } from '@/types / talent';'
import { RatingStars } from '@/components / RatingStars';'
import { use_auth } from '@/context / auth / AuthProvider';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
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
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
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
=======
    <Card;"
      className="overflow - hidden transition - all hover:shadow - lg border - zion - blue - light bg - zion - blue cursor - pointer focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - zion - purple";
      on_click = {handleViewProfile, }
      tab_index = {0, }
    >;"
      <div className="p - 6">;"
        <div className="flex items - start">;
          {/* Avatar */}"
          <div className="relative mr - 4">;"
            <div className="w - 16 h - 16 rounded - full overflow - hidden bg - zion - blue - dark border border - zion - blue - light">;
              {talent.profile_picture_url ? (
                <img;
                  src = {talent.profile_picture_url, }
                  alt = {talent.full_name, }"
                  className="w - full h - full object - cover";"
                  loading="lazy";
                />) : ("
                <div className="w - full h - full flex items - center justify - center text - zion - slate - light text - xl font - bold">;"
                  {talent.full_name?.char_at (0) || "T"}
                </div>)}
            </div>;
            {talent.is_verified && ("
              <div className="absolute -bottom - 1 -right - 1 bg - zion - blue p - 0.5 rounded - full">;"
                <CheckCircle2 className="w - 5 h - 5 text - zion - cyan" />;
              </div>)}
          </div>;
          {/* Main Info */}"
          <div className="flex - 1">;"
            <div className="flex justify - between items - start">;"
              <h3 className="text - lg font - bold text - white">{talent.full_name}</h3>;"
              <FavoriteButton item_id={talent.id} className="-mt - 1" />;
            </div>;"
            <p className="text - white font - medium">{talent.professional_title}</p>;
            {/* Location & Availability */}"
            <div className="mt - 2 flex flex - wrap gap - 3 text - sm">;
              {talent.location && ("
                <div className="flex items - center text - zion - slate - light">;"
                  <MapPin className="h - 4 w - 4 mr - 1" />;
                  <span>{talent.location}</span>;
                </div>)}
              {talent.availability_type && ("
                <div className="flex items - center text - zion - slate - light">;"
                  <Clock className="h - 4 w - 4 mr - 1" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
                  <span>{talent.availability_type}</span>;
                </div>)}
            </div>;
          </div>;
        </div>;
        {/* Skills */}
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
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
=======
        {skills.length > 0 && ("
          <div className="mt - 4">;"
            <div className="flex flex - wrap gap - 2">;
              {skills.map ((skill, index, ) => (
                <span;
                  key = {index, }"
                  className="px - 2 py - 1 text - xs rounded - full bg - zion - blue - light text - zion - slate - light";
                >;
                  {skill}
                </span>))}
              {(talent.skills?.length || 0) > 5 && ("
                <span className="px - 2 py - 1 text - xs rounded - full bg - zion - purple / 20 text - zion - cyan">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
                  +{(talent.skills?.length || 0) - 5} more;
                </span>)}
            </div>;
          </div>)}
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
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
=======
        {/* Hourly Rate & Actions */}"
        <div className="mt - 5 flex items - center justify - between">;
          <div>;
            {talent.hourly_rate ? ("
              <div className="text - white font - bold">;
                ${talent.hourly_rate}"
                <span className="text - zion - slate - light font - normal">/hr</span>;
              </div>) : ("
              <div className="text - zion - slate - light">Rate not specified</div>)}
          </div>;"
          <div className="flex items - center gap - 2">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
            {is_authenticated && (
              <Button;"
                size="sm";"
                variant="secondary";
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
                on_click = {handleRequestHire, }
                className="bg - zion - purple hover:bg - zion - purple - light text-white";
=======
                on_click = {handleRequestHire, }"
                className="bg - zion - purple hover:bg - zion - purple - light text - white";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
              >;
                Hire;
              </Button>)}
            <Button;"
              size="sm";"
              variant="ghost";
              on_click={(e, ) => {}
                e.stop_propagation (),
                handleViewProfile ();
<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
              }}
              className="text - zion - cyan hover: text - white hover:bg - zion - blue-light";
            >;
              View <ArrowRight className="ml - 1 h - 4 w-4" />;
=======
              }}"
              className="text - zion - cyan hover: text - white hover:bg - zion - blue - light";
            >;"
              View <ArrowRight className="ml - 1 h - 4 w - 4" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </Button>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </Card>;
  );
},;
export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    </Card>);
},
export const TalentCard = React.memo (TalentCardComponent),'
TalentCard.display_name = 'TalentCard',;
export const TalentCard = React.memo (TalentCardComponent);'
TalentCard.display_name = 'TalentCard';

export const TalentCard = React.memo(TalentCardComponent),'
TalentCard.displayName = 'TalentCard',
},

<<<<<<< HEAD:src_backup/components/talent/TalentCard.tsx
export const TalentCard = React.memo(TalentCardComponent),
TalentCard.displayName = 'TalentCard',
<<<<<<< HEAD:src/components/talent/TalentCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/TalentCard.tsx
export interface TalentCardProps {
  );
};
"
<<<<<<< HEAD:src/components/talent/TalentCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/talent/TalentCard.tsx
=======
export const TalentCard = React.memo(TalentCardComponent),'
TalentCard.displayName = 'TalentCard','";`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/talent/TalentCard.tsx
