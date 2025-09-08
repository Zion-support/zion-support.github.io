

import { Badge } from "@/components/ui/badge",import { Button } from "@/components/ui/button",import { Card, CardContent, CardFooter } from "@/components/ui/card",import { MapPin, Clock, ArrowRight, CheckCircle2  } from 'lucide-react';
import { FavoriteButton } from "@/components/FavoriteButton",export const TalentCard = React && React.memo(TalentCardComponent)TalentCard && TalentCard.displayName = 'TalentCard';import React from 'react';
import { useRouter  } from 'next/router';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { Card, CardContent, CardFooter  } from '@/components/ui/card';
import { FavoriteButton  } from '@/components/FavoriteButton';
import { TalentProfile  } from '@/types/talent';
import { RatingStars   } from '@/components/RatingStars';
import { useAuth   } from '@/context/auth/AuthProvider';
import { useCart  } from '@/context/CartContext';
import { TalentProfile } from "@/types/talent",import { RatingStars } from '@/components/RatingStars',import { useAuth } from '@/context/auth/AuthProvider',import { useCart } from '@/context/CartContext',export interface TalentCardProps  {talent: TalentProfile;
import { Badge } from @/components/ui/badge",import { Button } from "@/components/ui/button,import { Card, CardContent, CardFooter } from @/components/ui/card",import { MapPin, Clock, ArrowRight, CheckCircle2  } from lucide-react';
import { FavoriteButton } from "@/components/FavoriteButton,export const TalentCard = React && React.memo(TalentCardComponent)TalentCard && TalentCard.displayName = 'TalentCard;import React from react';
import { useRouter  } from 'next/router;
import { Badge  } from @/components/ui/badge';
import { Button  } from '@/components/ui/button;
import { Card, CardContent, CardFooter  } from @/components/ui/card';
import { FavoriteButton  } from '@/components/FavoriteButton;
import { TalentProfile  } from @/types/talent';
import { RatingStars   } from '@/components/RatingStars;
import { useAuth   } from @/context/auth/AuthProvider';
import { useCart  } from '@/context/CartContext;
import { TalentProfile } from @/types/talent",import { RatingStars } from @/components/RatingStars',import { useAuth } from '@/context/auth/AuthProvider,import { useCart } from @/context/CartContext',export interface TalentCardProps  {talent: TalentProfile;
  onViewProfile: (id: string,) => void;
  onRequestHire: (talent: TalentProfile,) => void;
  isAuthenticated: boolean;
import React from 'react',import { useRouter } from 'next/router',export interface TalentCardProps  {talent: TalentProfile,onViewProfile: (id: string) => void,onRequestHire: (talent: TalentProfile) => void,isAuthenticated: boolean;}
const TalentCardComponent = ({talent;
  onViewProfile;
  onRequestHire;
  isAuthenticated;
}: TalentCardProps,) => {const router = useRouter()const handleViewProfile = () => {// Navigate directly to the talent profile;
    router.push(`/talent/${talent.id}`)// Also call the onViewProfile callback if provided;
    if (onViewProfile) {onViewProfile(talent.id)}const handleRequestHire = (e: React.MouseEvent,) => {e.preventDefault()e.stopPropagation()if (onRequestHire) {onRequestHire(talent)},// Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice(0, 5) |[];
export interface TalentCardProps  {talent: TalentProfile,onViewProfile: (id: string,) => void,onRequestHire: (talent: TalentProfile,) => void,isAuthenticated: boolean;
}const TalentCardComponent = ({talent,onViewProfile,onRequestHire,isAuthenticated;
}: TalentCardProps,) => {const router  = useRouter(),const handleViewProfile = () => {// Navigate directly to the talent profile;
    router && router.push(`/talent/${talent && talent.id}`),// Also call the onViewProfile callback if provided;
    if (onViewProfile) {onViewProfile(talent && talent.id)}
  },if (onRequestHire) {onRequestHire(talent)}
  },const handleRequestHire = (e: React.MouseEvent,) => {e.preventDefault()e.stopPropagation()if (onRequestHire) {onRequestHire(talent)}
  },return (<Card;
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple";


      </div>;</Card>)},export const TalentCard = React.memo (TalentCardComponent),TalentCard.display_name = 'TalentCard',export const TalentCard = React.memo (TalentCardComponent)TalentCard.display_name = 'TalentCard';export const TalentCard = React.memo(TalentCardComponent),TalentCard.displayName = 'TalentCard'},export const TalentCard = React.memo(TalentCardComponent),TalentCard.displayName = 'TalentCard',export interface TalentCardProps  {)}";
      </div>;</Card>)},export const TalentCard = React.memo (TalentCardComponent),TalentCard.display_name = 'TalentCard',export const TalentCard = React.memo (TalentCardComponent)TalentCard.display_name = TalentCard;export const TalentCard = React.memo(TalentCardComponent),TalentCard.displayName = 'TalentCard'},export const TalentCard = React.memo(TalentCardComponent),TalentCard.displayName = 'TalentCard',export interface TalentCardProps  {)}";
export interface TalentCardProps {
  );
};
"
