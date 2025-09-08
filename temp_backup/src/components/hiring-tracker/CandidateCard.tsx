/* eslint-disable */
 import { ;
  {;
  {;
  MessageSquare, User, FileText, MoreVertical, Calendar,  AlertTriangle, BriefcaseIcon ;
  } from "lucide-react";
import {;
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;';''
import Image from 'next/image';''
<<<<<<< HEAD
//Import next/image   //Here you would save the notes to the database //For now, we'll just show a toast toast ({;
  setShowNotes (false);
};
=======
//Import next/image >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const handleSaveNotes = () => {';''
  //Here you would save the notes to the database //For now, we'll just show a toast toast ({;
  setShowNotes (false);
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const handleHireConfirmed = () => {;
>>>>>>> origin/resolved-merge-conflicts
  //Hiring process completed via the modal toast ({;
  application.id ;
}index= {;
  index ;"
}> {;""
  (provided) => (<Card className="mb-2 p-0 shadow-sm border" ref= {;
  provided.innerRef ;
}{;
  ...provided.draggableProps ;"
}{;""
  ...provided.dragHandleProps ";""
}> <CardContent className="p-3"> {;""
  /* Candidate Header */ ";""
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <AvatarPrimitive className="h-8 w-8"> {;
  /* Using renamed AvatarPrimitive */ ;
}{;
  application.talent profile?.profile picture url && !avatarError ? (<Image src= {;
  application.talent profile.profile picture url ;
}alt= {;
  candidateName ;
}width= {;
  32 ;"
}//Match h-8 w-8 height= {;""
  32 ";""
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {;
  () => setAvatarError (true) ;"
}priority= {;""
  false ";""
}//Avatars are usually not LCP />) : (<User className="h-4 w-4" />) ";""
}</AvatarPrimitive> <div> <h4 className="font-medium text-sm"> {;""
  candidateName ";""
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Link href= {;
  `/messages?talentId=$ {;
  application.talent id ;`
}` ;
}> Message </Link> </DropdownMenuItem> {;"
  application.resume?.file url && (<DropdownMenuItem asChild> <a href= {;""
  application.resume.file url ";""
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>) ;"
}</DropdownMenuContent> </DropdownMenu> </div> {;""
  /* Application Info */ ";""
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {;
  formatDistanceToNow (new Date (application.created at), {;
  addSuffix: true ;"
}) ;""
}</div> {";""
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>) ;
}</div> {;"
  /* Match Score */ ;""
}{";""
  application.match score !== null && application.match score !== undefined && (<div className="mb-2"> <ScoreBadge application= {;"
  application ;""
}/> </div>) ";""
}<Textarea placeholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {;
  notes ;
}onChange= {;"
  (e) => setNotes (e.target.value) ;""
}/> </div> </div>) ";""
}<Button variant="outline" size="sm" className="flex-1" asChild > </Link> </Button> <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) ";""
}</Button> <Button variant="default" size="sm" className="flex-1" onClick={;""
  () => setShowHireModal (true) ";""
}> <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire </Button> </div> </CardContent> </Card>) ;
}</Draggable> {;
  /* Hire Confirmation Modal */ ;
}<HireConfirmationModal isOpen= {;
  showHireModal ;
}onClose= {;
  () => setShowHireModal (false) ;
}application= {;
  application ;
}onConfirm= {;
  handleHireConfirmed ;'"
}/> </>) ;'"'"
}'"'"'"`