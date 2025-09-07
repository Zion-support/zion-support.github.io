/* eslint-disable */
 export function ProjectOfferBanner () {;
  const router = useRouter ();
const {;
  projects, isLoading ;
}= useProjects ();
const [pendingOffers, setPendingOffers] = useState<Project[]> ([]);
const [dismissed, setDismissed] = useState<Set<string>> (new Set () );
useEffect ( () => {;
  if (projects && !isLoading) {;
  const offers = projects.filter (p => p.status === 'offer sent');
setPendingOffers (offers) ;
}
}, [projects, isLoading]);
const handleDismiss = (projectId: string, e: React.MouseEvent) => {;
  e.stopPropagation ();
setDismissed (prev => {;
  const updated = new Set (prev);
updated.add (projectId);
return updated;
}) ;
};
const handleViewOffer = (projectId: string) => {;
  router.push (`/project/$ {;
  projectId ;`
}`) ;
};
if (isLoading || pendingOffers.length === 0 || pendingOffers.every (p => dismissed.has (p.id) ) ) {;
  return null;
}return (<div className="mb-6 space-y-3" > {;""
  pendingOffers offer.id ";""
}> <CardContent className="p-4 flex items-center justify-between" > <div className="flex items-center gap-2" > <div className="bg-primary/10 rounded-full p-2" > <Bell className="h-4 w-4 text-primary" /> </div> <div> </p> </div> </div> <div className="flex items-center gap-2" > <Button size="sm" className="whitespace-nowrap" > View Offer </Button> <Button > <X className="h-4 w-4" /> </Button> </div> </CardContent> </Card>) ) ;'"
}</div>) ;'"'"
}'"'"'"`