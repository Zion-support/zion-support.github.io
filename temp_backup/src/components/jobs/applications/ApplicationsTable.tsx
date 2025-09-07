/* eslint-disable */
 import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
TableRow import Image from 'next/image';
<<<<<<< HEAD
//Import next/image   /* Using Renamed AvatarPrimitive */ ;
=======
//Import next/image >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 return (<AvatarPrimitive className="h-8 w-8" > {;
  /* Using Renamed AvatarPrimitive */ ;
>>>>>>> origin/resolved-merge-conflicts
}{;
  application.talent profile?.profile picture url && !avatarError ? (<Image src= {;
  application.talent profile.profile picture url ;
}alt= {;
  talentName ;
}width= {;
  32 ;"
}//for h-8 w-8 height= {;""
  32 ";""
}//for h-8 w-8 className="rounded-full object-cover" onError= {;
  () => setAvatarError (true) ;"
}priority= {;""
  false ";""
}h-4 w-4"/>) ;"
}</AvatarPrimitive>) ;""
};";""
return (<> <div className=" rounded-md border"> hidden md:table-cell" >Applied</TableHead> <TableHead className="hidden md:table-cell" >Status</TableHead> <TableHead className="hidden lg:table-cell" >Match Score</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  applications.map ( (application) => (<TableRow key= {;
  application.id ;
}> <TableCell> </div> </div> </div> </TableCell> onClick={;
  () => onViewScore (application) ;"
}> {;""
  application.match score ";""
}% </ClickableBadge>) : (<span className="text-muted-foreground text-sm" >Not scored</span>) ";""
}</TableCell> <TableCell className="text-right" > <div className="flex items-center justify-end gap-2" > <ClickableBadge > <Briefcase className="h-3 w-3 mr-1" /> Hire </ClickableBadge> <ApplicationActions application= {;
  application ;
}processingId= {;
  processingId ;
}onViewApplication= {;
  onViewApplication ;
}onStatusChange= {;
  onStatusChange ;
}/> </div> </TableCell> </TableRow>) ) ;
}</TableBody> </Table> </div> <HireConfirmationModal isOpen= {;
  hireModalOpen ;
}onClose= {;
  () => setHireModalOpen (false) ;
}application= {;
  selectedApplication || undefined ;
}onConfirm= {;
  handleHireConfirmed ;'"
}/> </>) ;'"'"
}'"'"'"