/* eslint-disable */
 interface ProfileHeroProps {;
  name: string;
  title: string;
  avatarUrl?: string;
  coverImageUrl?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
  profileType: 'service' | 'talent'
export function ProfileHero({
  name;
title;
avatarUrl;
coverImageUrl;
location;
rating;
reviewCount;
aiScore;
profileType ;
}: ProfileHeroProps) {;
  return (<div className="w-full overflow-hidden" > <div className="relative" > <AspectRatio ratio= {;""
  3/1 ";""
}className="bg-zion-blue-light" > {;
  coverImageUrl ? (<img src= {;
  coverImageUrl ;
}alt= {;
  `$ {;"
  name ;""`
}cover` ";""
}className="w-full h-full object-cover" loading="lazy" w-full h-full bg-gradient-to-r from-zion-blue via-zion-blue-light to-zion-blue-dark" />) ;
}</AspectRatio> </AvatarFallback>) ;'
}</Avatar>) ;''
}> {';''
  profileType === 'service' ? 'Service Provider' : 'Talent' ;
}</Badge> </div>) ;
}</div>) ;
}AI Match: {;
  aiScore ;
}% </div>) ;'"
}</div> </div> </div> </div> </div> </div>) ;'"'"
}'"'"'"`