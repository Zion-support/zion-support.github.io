<<<<<<< HEAD:src_backup/components/quotes/EmptyStateCard.tsx

import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { MessageSquare, ArchiveIcon } from 'lucide-react'

type EmptyStateCardProps = {
  type: 'active' | 'archived'
},
=======
import React from "react","
import { Card, CardContent } from "@/components/ui/card",
"
import React from "react""
import { Card, CardContent } from "@/components/ui/card"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/EmptyStateCard.tsx

<<<<<<< HEAD:src/components/quotes/EmptyStateCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {
  const isActive = type === 'active',
  
  return (
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">
      <CardContent>
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">
          {isActive ? (
            <MessageSquare className="h-8 w-8 text-white" />
          ) : (
            <ArchiveIcon className="h-8 w-8 text-white" />
          )}
        </div>
        <h3 className="text-xl font-medium text-white mb-2">
          {isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>
        <p className="text-zion-slate-light max-w-md mx-auto">
          {isActive 
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."
import React from "react",;
import { Card, CardContent } from "@/components/ui/card",;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { MessageSquare, ArchiveIcon } from 'lucide-react'
'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'';
import React from './react';'
import { Card, CardContent  } from '@/components / ui / card';'
import { MessageSquare, ArchiveIcon } from 'lucide-react';'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
type EmptyStateCardProps = {}
'
import { MessageSquare, ArchiveIcon } from 'lucide-react';'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';'
import { MessageSquare, ArchiveIcon } from 'lucide-react';
<<<<<<< HEAD:src_backup/components/quotes/EmptyStateCard.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { MessageSquare, ArchiveIcon } from 'lucide-react';
type EmptyStateCardProps = {;
=======
type EmptyStateCardProps = {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/EmptyStateCard.tsx
  type: 'active' | 'archived';
=======
},;
<<<<<<< HEAD:src_backup/components/quotes/EmptyStateCard.tsx
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308:src_backup/components/quotes/EmptyStateCard.tsx

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;
=======
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ type }) => {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/EmptyStateCard.tsx
  const isActive = type === 'active';  ;

  return ("
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">;
      <CardContent>;"
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">;
          {isActive ? (;"
            <MessageSquare className="h-8 w-8 text-white" />;
          ) : (;"
            <ArchiveIcon className="h-8 w-8 text-white" />;
          )}
        </div>;"
        <h3 className="text-xl font-medium text-white mb-2">;'
          {isActive ? 'No hire requests yet' : 'No archived requests'}
<<<<<<< HEAD:src_backup/components/quotes/EmptyStateCard.tsx
<<<<<<< HEAD
=======

  type: 'active' | 'archived'

  return (
=======
'
  type: 'active' | 'archived'


  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/EmptyStateCard.tsx
    <Card className="bg-zion-blue-dark border border-zion-blue-light text-center py-12">
      <CardContent>"
        <div className="mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4">
          {isActive ? ("
            <MessageSquare className="h-8 w-8 text-white" />
          ) : ("
            <ArchiveIcon className="h-8 w-8 text-white" />
          )}
        </div>"
        <h3 className="text-xl font-medium text-white mb-2">'
          {isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>"
        <p className="text-zion-slate-light max-w-md mx-auto">

          {isActive '"
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."'"
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."

          }
        </p>
      </CardContent>
    </Card>
  )
}

<<<<<<< HEAD:src_backup/components/quotes/EmptyStateCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </h3>;
=======
        </h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/EmptyStateCard.tsx
        <p className="text-zion-slate-light max-w-md mx-auto">;
          {isActive;'"
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";'"
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
<<<<<<< HEAD
<<<<<<< HEAD
          }
        </p>;
      </CardContent>;
    </Card>;
  );
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          }
        </p>
      </CardContent>;
    </Card>;
  );

<<<<<<< HEAD:src_backup/components/quotes/EmptyStateCard.tsx
export const EmptyStateCard: React.FC < EmptyStateCardProps> = ({ type }) => {
=======

export const EmptyStateCard: React.FC < EmptyStateCardProps> = ({ type }) => {';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/EmptyStateCard.tsx
  const is_active = type === 'active';
  return ("
    <Card className="bg - zion - blue - dark border border - zion - blue - light text - center py - 12">;
      <CardContent>;"
        <div className="mx - auto w - 16 h - 16 bg - zion - blue - light opacity - 60 rounded - full flex items - center justify - center mb - 4">;
          {is_active ? ("
            <MessageSquare className="h - 8 w - 8 text - white" />) : ("
            <ArchiveIcon className="h - 8 w - 8 text - white" />)}
        </div>;"
        <h3 className="text - xl font - medium text - white mb - 2">;'
          {is_active ? 'No hire requests yet' : 'No archived requests'}
        </h3>;"
        <p className="text - zion - slate - light max - w-md mx - auto">;
          {is_active;'"
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients.";'"
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized.";
          }
        </p>;
      </CardContent>;
    </Card>);
}

<<<<<<< HEAD:src_backup/components/quotes/EmptyStateCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
};
=======
};
type EmptyStateCardProps = any;
<<<<<<< HEAD:src/components/quotes/EmptyStateCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/quotes/EmptyStateCard.tsx
=======
};'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/quotes/EmptyStateCard.tsx
