<<<<<<< HEAD:src/components/projects/ProjectOfferBanner.tsx
<<<<<<< HEAD
}
  const handleViewOffer = (project_id: string, ) =>: any {
    router.push (`/project/${project_id}`);
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useEffect, useState } from "react",
import { useRouter } from 'next/router',
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/ProjectOfferBanner.tsx
import { useEffect, useState } from "react";
import { useRouter  } from 'next/router';
origin/cursor/automate-test-improve-and-merge-code-2533
import { Bell, Calendar, X } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { useProjects } from "@/hooks/useProjects",
import { Project } from "@/types/projects",
export function ProjectOfferBanner() {
  const router = null;
  if (isLoading || pendingOffers.length === 0 || pendingOffers.every(p => dismissed.has(p.id))) {
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { Bell, Calendar, X } from 'lucide-react'import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useProjects } from "@/hooks/useProjects"
import { Project } from "@/types/projects"
export function ProjectOfferBanner() {
  const router = useRouter()
  const { projects, isLoading } = useProjects()
  const [pendingOffers, setPendingOffers] = useState<Project[]>([])
  const [dismissed, setDismissed] = useState<Set<string>>(new Set())
  useEffect((,) => {
origin/cursor/automate-test-improve-and-merge-code-2533
    if (projects && !isLoading) {
      const offers = projects.filter(p => p.status === 'offer_sent'),
      setPendingOffers(offers)
import { useEffect, useState } from "react",;
import { useRouter } from 'next/router',;
import { Bell, Calendar, X } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { useProjects } from "@/hooks/useProjects",;
import { Project } from "@/types/projects",;
export function ProjectOfferBanner() {;
  const router = useRouter(),;
  const { projects, isLoading } = useProjects(),;
  const [pendingOffers, setPendingOffers] = useState<Project[]>([]),;
  const [dismissed, setDismissed] = useState<Set<string>>(new Set()),;
  useEffect(() => {;
    if (projects && !isLoading) {;
      const offers = projects.filter(p => p.status === 'offer_sent'),;
      setPendingOffers(offers);
    }
<<<<<<< HEAD:src/components/projects/ProjectOfferBanner.tsx
<<<<<<< HEAD
  }, [projects, isLoading]),;
  const handleDismiss = (projectId: string, e: React.MouseEvent) => {;
    e.stopPropagation(),;
    setDismissed(prev => {;
      const updated = new Set(prev),;
      updated.add(projectId),;
      return updated;
    })
};
  const handleViewOffer = (projectId: string) => {;
    router.push(`/project/${projectId}`)
};
  if (isLoading || pendingOffers.length === 0 || pendingOffers.every(p => dismissed.has(p.id))) {;
    return null;

<<<<<<< HEAD
=======


=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/ProjectOfferBanner.tsx
  }, [projects, isLoading])
  const handleDismiss = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();    setDismissed(prev => {
      const updated = new Set(prev)
      updated.add(projectId)
      return updated
    })
  }
  const handleViewOffer = (projectId: string,) => {
    router.push(`/project/${projectId}`)
  }
  if (isLoading |pendingOffers.length === 0 |pendingOffers.every(p => dismissed.has(p.id))) {
    return null
<<<<<<< HEAD:src/components/projects/ProjectOfferBanner.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/ProjectOfferBanner.tsx
  }
  
  return (
    <div className="mb-6 space-y-3">
      {pendingOffers
        .filter(offer => !dismissed.has(offer.id))
        .map(offer => (
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <Card 
            key={offer.id} 

            className="border-2 border-primary bg-primary/5"
            onClick = {(,) => handleViewOffer(offer.id),}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 rounded-full p-2">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">🎉 New Project Offer!</h4>
                  <p className="text-sm text-muted-foreground">
                    You've been selected for "{offer.job?.title}". Review and accept to get started.
                  </p>
                </div>
              </div>

              
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <div className="flex items-center gap-2">
                <Button size="sm" className="whitespace-nowrap">
                  View Offer
                </Button>
<<<<<<< HEAD
                <Button 
=======
                <Button
                  size="sm"
import React from 'react';

import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Bell, Calendar, X } from 'lucide-react'import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types/projects";
export function ProjectOfferBanner() {;
  const router = useRouter();
  const { projects, isLoading } = useProjects();
  const [pendingOffers, setPendingOffers] = useState<Project[]>([]);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  useEffect((,) => {;
    if (projects && !isLoading) {;
      const offers = projects && projects.filter(p => p && p.status === 'offer_sent');
      setPendingOffers(offers);
    }
  }, [projects, isLoading]);

  const handleDismiss = (projectId: string, e: React && React.MouseEvent) => {;
    e && e.stopPropagation();    setDismissed(prev => {;
      const updated = new Set(prev);
      updated && updated.add(projectId),;
      return updated;
    })
};

  const handleViewOffer = (projectId: string,) => {;
    router && router.push(`/project/${projectId}`)
};

  if (isLoading || pendingOffers && pendingOffers.length === 0 || pendingOffers && pendingOffers.every(p => dismissed && dismissed.has(p && p.id))) {;
    return null;
  }

  return (
    <div className="mb-6 space-y-3">;
      {pendingOffers;
        .filter(offer => !dismissed && dismissed.has(offer && offer.id));
        .map(offer => (;
          <Card
            key = {offer && offer.id,}
            className="border-2 border-primary bg-primary/5"
            onClick = {(,) => handleViewOffer(offer && offer.id),}
          >;
            <CardContent className="p-4 flex items-center justify-between">;
              <div className="flex items-center gap-2">;
                <div className="bg-primary/10 rounded-full p-2">;
                  <Bell className="h-4 w-4 text-primary" />;
                </div>;
                <div>;
                  <h4 className="font-semibold">🎉 New Project Offer!</h4>;
                  <p className="text-sm text-muted-foreground">;
                    You've been selected for "{offer && offer.job?.title}". Review and accept to get started.;
                  </p>;
                </div>;
              </div>;

              <div className="flex items-center gap-2">;
                <Button size="sm" className="whitespace-nowrap">;
                  View Offer;
                </Button>;
                <Button
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  size="sm" 
                  variant="ghost"
                  onClick = {(e,) => handleDismiss(offer && offer.id, e),}
                >;
                  <X className="h-4 w-4" />;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        ))}
<<<<<<< HEAD:src/components/projects/ProjectOfferBanner.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  if ()) {) {
  $2
}
    return null;
  }
  return (
    <div className="mb - 6 space-y-3">;
      {pending_offers;
        .filter (offer => !dismissed.has (offer.id));
        .map (offer => (
          <Card;
            key = {offer.id, }
            className="border - 2 border - primary bg-primary / 5";
            on_click = {(, ) => handleViewOffer (offer.id), }
          >;
            <CardContent className="p - 4 flex items - center justify-between">;
              <div className="flex items - center gap-2">;
                <div className="bg - primary / 10 rounded - full p-2">;
                  <Bell className="h - 4 w - 4 text-primary" />;
                </div>;
                <div>;
                  <h4 className="font-semibold">🎉 New Project Offer!</h4>;
                  <p className="text - sm text - muted-foreground">;
                    You've been selected for "{offer.job?.title}". Review and accept to get started.;
                  </p>;
                </div>;
              </div>;
              <div className="flex items - center gap-2">;
                <Button size="sm" className="whitespace-nowrap">;
                  View Offer;
                </Button>;
                <Button;
                  size="sm";
                  variant="ghost";
                  on_click = {(e, ) => handle_dismiss (offer.id, e), }
                >;
                  <X className="h - 4 w-4" />;
                </Button>;
              </div>;
            </CardContent>;
          </Card>))}
    </div>);
}, [projects, is_loading]);
const handle_dismiss = (project_id: string, e: React.MouseEvent) =>: any {
  e.stop_propagation ();
set_dismissed (prev => {
  const updated = new Set (prev);
updated.add (project_id);
return updated;
});

}
const handleViewOffer = (project_id: string) =>: any {
  router.push (`/project/$ {

    </div>;
  );

}, [projects, isLoading]);
const handleDismiss = (projectId: string, e: React && React.MouseEvent) => {;
  e && e.stopPropagation ();
setDismissed (prev => {;
  const updated = new Set (prev);
updated && updated.add (projectId);
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/ProjectOfferBanner.tsx
    </div>
  );

}, [projects, isLoading]);
const handleDismiss = (projectId: string, e: React.MouseEvent) => {;
  e.stopPropagation ();
setDismissed (prev => {;
  const updated = new Set (prev);
updated.add (projectId);
origin/cursor/automate-test-improve-and-merge-code-2533
return updated;
}) 
};
const handleViewOffer = (projectId: string) => {;
<<<<<<< HEAD:src/components/projects/ProjectOfferBanner.tsx
<<<<<<< HEAD
  router && router.push (`/project/$ {;
  projectId ;
}`) 
};
if (isLoading || pendingOffers && pendingOffers.length === 0 || pendingOffers && pendingOffers.every (p => dismissed && dismissed.has (p && p.id) ) ) {;
  return null;
}return (<div className="mb-6 space-y-3" > {;
  pendingOffers offer && offer.id ";
}> <CardContent className="p-4 flex items-center justify-between" > <div className="flex items-center gap-2" > <div className="bg-primary/10 rounded-full p-2" > <Bell className="h-4 w-4 text-primary" /> </div> <div> </p> </div> </div> <div className="flex items-center gap-2" > <Button size="sm" className="whitespace-nowrap" > View Offer </Button> <Button > <X className="h-4 w-4" /> </Button> </div> </CardContent> </Card>) ) ;
}</div>) ;
}'"}

  project_id;
}`);
}
if () ) {) {
  $2
}
  return null;
}return (<div className="mb - 6 space-y-3" > {
  pending_offers offer.id ";
}> <CardContent className="p - 4 flex items - center justify-between" > <div className="flex items - center gap-2" > <div className="bg - primary / 10 rounded - full p-2" > <Bell className="h - 4 w - 4 text-primary" /> </div> <div> </p> </div> </div> <div className="flex items - center gap-2" > <Button size="sm" className="whitespace-nowrap" > View Offer </Button> <Button > <X className="h - 4 w-4" /> </Button> </div> </CardContent> </Card>) );
}</div>);
}'"}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </div>;
  );
}
;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/projects/ProjectOfferBanner.tsx
  router.push (`/project/$ {;
  projectId ;
}`) ;
};
if (isLoading || pendingOffers.length === 0 || pendingOffers.every (p => dismissed.has (p.id) ) ) {;
  return null;
}return (<div className="mb-6 space-y-3" > {;
  pendingOffers offer.id ";
}> <CardContent className="p-4 flex items-center justify-between" > <div className="flex items-center gap-2" > <div className="bg-primary/10 rounded-full p-2" > <Bell className="h-4 w-4 text-primary" /> </div> <div> </p> </div> </div> <div className="flex items-center gap-2" > <Button size="sm" className="whitespace-nowrap" > View Offer </Button> <Button > <X className="h-4 w-4" /> </Button> </div> </CardContent> </Card>) ) ;
}</div>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
