<<<<<<< HEAD:src_backup/components/profile/talent-card/TalentCardBadges.tsx
=======
import React from 'react';
<<<<<<< HEAD

import React from "react";
import { Badge } from "@/components/ui/badge";
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Award } from 'lucide-react'
interface TalentCardBadgesProps {
  featured: boolean | undefined
export function TalentCardBadges({ featured }: TalentCardBadgesProps) {
import React from "react";
import { Badge } from "@/components/ui/badge";
  if (!featured) return null;
import React from "react",
import { Badge } from "@/components/ui/badge",
import { Award } from 'lucide-react'

interface TalentCardBadgesProps {
  featured: boolean | undefined
}

export function TalentCardBadges({ featured }: TalentCardBadgesProps) {
  if (!featured) return null,
  return (
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">
        <Award className="h-3 w-3" />
        <span>Featured</span>
      </Badge>
    </div>
  )
}
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Award } from 'lucide-react';
interface TalentCardBadgesProps {;
  featured: boolean | undefined;
}
;
export function TalentCardBadges({ featured }: TalentCardBadgesProps) {;
  if (!featured) return null;
  return (;
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">;
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">;
        <Award className="h-3 w-3" />;
        <span>Featured</span>;
      </Badge>;
    </div>;
  );
}
;
  if (!featured) return null;
  if (!featured) return null
  return (
    <div className='absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10'>
      <Badge className='bg-transparent border-0 flex items-center gap-1 text-white px-0'>
        <Award className='h-3 w-3' />;
        <span>Featured</span>;
      </Badge>;
    </div>;
  );  )
}
  )
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react",
import { Badge } from "@/components/ui/badge",
import { Award } from 'lucide-react'

interface TalentCardBadgesProps {
  featured: boolean | undefined
}

export function TalentCardBadges({ featured }: TalentCardBadgesProps) {
  if (!featured) return null,
  return (
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">
        <Award className="h-3 w-3" />
        <span>Featured</span>
      </Badge>
    </div>
  )
}
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { Award } from 'lucide-react';
interface TalentCardBadgesProps {;
  featured: boolean | undefined;
}
;
export function TalentCardBadges({ featured }: TalentCardBadgesProps) {;
  if (!featured) return null;
  return (;
    <div className="absolute top-0 left-0 bg-gradient-to-r from-zion-purple to-zion-cyan p-2 rounded-tl-lg rounded-br-lg z-10">;
      <Badge className="bg-transparent border-0 flex items-center gap-1 text-white px-0">;
        <Award className="h-3 w-3" />;
        <span>Featured</span>;
      </Badge>;
    </div>;
  );
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/talent-card/TalentCardBadges.tsx
const TalentCardBadges = () => {
  return (
    <div>
      {/* TalentCardBadges component */}
<<<<<<< HEAD
    </div>
=======
<<<<<<< HEAD:src_backup/components/profile/talent-card/TalentCardBadges.tsx
    </div>
=======
    </div>
  );
};

<<<<<<< HEAD
export default TalentCardBadges;
=======
export default TalentCardBadges;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/profile/talent-card/TalentCardBadges.tsx
>>>>>>> merged-prs-20250907-203621
