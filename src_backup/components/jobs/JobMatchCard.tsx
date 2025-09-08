}

  talentId
  name
  title
  company
  avatar
  location
  category
  matchPercent

}
}

  talent_id,
  name,
  title,
  company,
  avatar,
  location,
  category,
  match_percent,
}
}

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Building, MapPin, Clock, DollarSign, Star } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { JobMatch } from '@/types/jobs';

interface JobMatchProps {
  matchId: string;
  talentId: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  location: string;
  category: string;
  matchPercent: number;
  skills: string[];
  onApply?: (matchId: string) => void;
  onViewDetails?: (matchId: string) => void;
  onInvite?: (matchId: string) => void
});

};
const handleInvite = () => {;
  if (onInvite) {;
  onInvite (matchId) ;

};
//Generate a formatted date for display const postedDate = new Date ();
postedDate.setDate (postedDate.getDate () - Math.floor (Math.random () * 14) ), //Random date within last 2 weeks return (<Card className='overflow-hidden' > <CardContent className='p-0' > {;
  /* Match score indicator */ ';
}<div className='bg-gradient-to-r from-primary/10 to-primary/5 p-3 flex justify-between items-center' > <div className='flex items-center gap-1' > <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' /> <span className='font-medium' > {;
  matchPercent ';
}% Match</span> </div> <Badge variant='outline' className='bg-background' > {;
  formatDistanceToNow (postedDate, {;
  addSuffix: true ;
});
}</Badge> </div> {;
  /* Talent details */ ';
}<div className='p-4' > <div className='flex justify-between items-start gap-2 mb-3' > <h3 className='text-lg font-bold line-clamp-2' > {;
  name ';
}</h3> <Badge variant='default' > h-3 w-3' /> </AvatarFallback>) ;
}</Avatar> </Badge>) ) ;
}</div> Apply Now </Button>) ;
}</div> </div> </CardContent> </Card>) ;
}'
}
}