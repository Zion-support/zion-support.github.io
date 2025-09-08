const handleSaveNotes = () => {



    // Here you would save the notes to the database
    // For now, well just show a toast
    toast({

    // For now, we'll just show a toast
    toast({

      title: 'Notes saved,
      description: Your notes have been saved'})
    setShowNotes(false)
  }
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal
    toast({
      title: 'Hiring process initiated
      description: Offer has been sent to the talent.'
    })
  }



import { useState } from react';


  const candidateName = application.talent_profile?.full_name || 'Candidate'
import { useState } from 'react';

// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.
import { Draggable } from "@/lib/dnd-stub,
import { formatDistanceToNow } from date-fns",
import Link from "next/link,
import { JobApplication } from @/types/jobs",
import { Card, CardContent } from "@/components/ui/card,
import { Avatar as AvatarPrimitive } from @/components/ui/avatar", // Renamed to avoid conflict
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from lucide-react
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu,
import { ScoreBadge } from @/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast;
import { HireConfirmationModal } from ./HireConfirmationModal";
import Image from 'next/image', // Import next/image

interface CandidateCardProps {
  application: JobApplication;
  index: number
export function CandidateCard({ application, index }: CandidateCardProps) {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application.notes || ");
  const [showHireModal, setShowHireModal] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  // Check if application is stalled (no activity for 7 days)
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
        {provided => (
          <Card
            className=mb-2 p-0 shadow-sm border
            ref={provided.innerRef}            {...provided.draggableProps}

      title: Notes saved",
      description: "Your notes have been saved
    }),
    setShowNotes(false)
  },
  
    // Hiring process completed via the modal
    toast({
      title: Hiring process initiated",
      description: "Offer has been sent to the talent.
    })
  },

  const candidateName = application.talent_profile?.full_name || Candidate",
  
  return (
    <>
      <Draggable draggableId={application.id} index={index}>

        {(provided) => (
          <Card 

            className="mb-2 p-0 shadow-sm border"
import { useState } from "react",;
// Local stub is used in place of the @hello-pangea/dnd package which isn't;

// available in this environment.;
import { Avatar as AvatarPrimitive } from @/components/ui/avatar", // Renamed to avoid conflict;
import { Button } from "@/components/ui/button,
import { Textarea } from @/components/ui/textarea",
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react';
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu,
import { toast } from "@/hooks/use-toast,
import { HireConfirmationModal } from ./HireConfirmationModal",
import Image from next/image, // Import next/image;
interface CandidateCardProps {
  application: JobApplication,
  index: number;
}
export function CandidateCard({ application, index }: CandidateCardProps) {
  const [showNotes, setShowNotes] = useState(false),
  const [notes, setNotes] = useState(application.notes || "),
  const [showHireModal, setShowHireModal] = useState(false),
  const [avatarError, setAvatarError] = useState(false),
  // Check if application is stalled (no activity for 7 days);
  const isStalled = application.updated_at &&;
    new Date(application.updated_at).getTime() <;
    (Date.now() - 7 * 24 * 60 * 60 * 1000),
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({

    <>;
      <Draggable draggableId={application.id} index={index}>;
        {(provided) => (;
          <Card;
            className=mb-2 p-0 shadow-sm border";
            ref={provided.innerRef}
            {...provided.draggableProps}

            {...provided.dragHandleProps}
          >;
            <CardContent className="p-3>;
              {/* Candidate Header */}


              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
                  <AvatarPrimitive className="h-8 w-8"> {/* Using renamed AvatarPrimitive */}
                    {application.talent_profile?.profile_picture_url && !avatarError ? (;
                      <Image;
                        src={application.talent_profile.profile_picture_url} ;
                        alt={candidateName}

                        width={32} // Match h-8 w-8;
                        height={32} // Match h-8 w-8;
                        className="rounded-full object-cover // Ensure rounded and object-cover;
                        onError={() => setAvatarError(true)}
                        priority={false} // Avatars are usually not LCP;
                      />;


                    )}
                  </AvatarPrimitive>;
                  <div>;
                    <h4 className="font-medium text-sm>;
                      {candidateName}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant=ghost" className="h-8 w-8 p-0>
                      <MoreVertical className=h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end>
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>



                  </AvatarPrimitive>;
                  <div>;
                    <h4 className=font-medium text-sm'>{candidateName}</h4>;
                    <p className='text-xs text-muted-foreground>;
                      {application && application.talent_profile?.professional_title ||;
                        Applicant'}
                    </p>;
                  </div>;
                </div>;

                <DropdownMenu>;
                  <DropdownMenuTrigger asChild>;
                    <Button variant='ghost className=h-8 w-8 p-0'>;
                      <MoreVertical className='h-4 w-4 />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align=end'>;
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;
                      {showNotes ? 'Hide notes : Add notes'}
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;


                      Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;
                      <Link
                        href={`/messages?talentId=${application && application.talent_id}`}>;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application && application.resume?.file_url && (;
                      <DropdownMenuItem asChild>;
                        <a
                          href={application && application.resume.file_url}


                          View Resume;
                        </a>;
                      </DropdownMenuItem>;

                    )}



                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;

                    Stalled;
                  </div>;
                )}
              </div>;

                )}
              {/* Notes Section */}


                    onChange={e => setNotes(e && e.target.value)}                  />;
                  <div className=flex justify-end mt-2'>;
                    <Button size='sm onClick={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>;
              )}
              {/* Action Buttons */}

              <div className=flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline 
                  size=sm" 
                  className="flex-1
                  asChild
                >

                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className=h-3 w-3 mr-1" /> Message
                  </Link>
                </Button>



                <Button 
                  variant="outline 
                  size=sm" 
                  className="flex-1
                  asChild
                >

                  {application.resume?.file_url ? (
                    <a href={application.resume.file_url} target=_blank" rel="noopener noreferrer>
                      <FileText className=h-3 w-3 mr-1" /> Resume
                    </Link>
                  ) : (
                    <span>
                      <FileText className="h-3 w-3 mr-1 /> No Resume
                    </span>
                  )}



                <Button 
                  variant=default" 
                  size="sm 
                  className=flex-1"
                  onClick={() => setShowHireModal(true)}
                >;
                  <BriefcaseIcon className="h-3 w-3 mr-1 /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}

      </Draggable>;

      {/* Hire Confirmation Modal */}
      <HireConfirmationModal


  );

  //Here you would save the notes to the database //For now, well just show a toast toast ({
  setShowNotes (false);


  application.id ;
}index= {
  index ;
}> {
  (provided) => (<Card className=mb-2 p-0 shadow-sm border" ref= {
  provided.innerRef ;
}{
  ...provided.draggableProps ;
}{
  ...provided.dragHandleProps ";
origin/cursor/automate-test-improve-and-merge-code-2533
}> <CardContent className=p-3> {
  /* Candidate Header */ ";
}<div className="flex justify-between items-start mb-2> <div className=flex items-center gap-2"> <AvatarPrimitive className="h-8 w-8> {
  /* Using renamed AvatarPrimitive */ ;
}{
  application.talent profile?.profile picture url && !avatarError ? (<Image src= {
  application.talent profile.profile picture url ;
}alt= {
  candidateName ;
}width= {
  32 ;
}//Match h-8 w-8 height= {
  32 ;
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {
origin/cursor/automate-test-improve-and-merge-code-2533


  () => setAvatarError (true) ;
}priority= {
  false ";
}//Avatars are usually not LCP />) : (<User className=h-4 w-4 />) ";
}</AvatarPrimitive> <div> <h4 className="font-medium text-sm> {
  candidateName ;
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className=h-8 w-8 p-0> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Link href= {
  `/messages?talentId=$ {
  application.talent id ;
}` ;


origin/cursor/automate-test-improve-and-merge-code-2533
  addSuffix: true ;
});
}</div> {";
  isStalled && (<div className=flex items-center text-amber-500> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>) ;
}</div> {
  /* Match Score */ ;


  application ;
}/> </div>) ";
}<Textarea placeholder="Add private notes about this candidate... className=text-xs min-h-[60px]" value= {
  notes ;
}onChange= {
  (e) => setNotes (e.target.value) ;
}/> </div> </div>) ";
}<Button variant=outline size="sm" className=flex-1 asChild > </Link> </Button> <Button variant="outline" size=sm className="flex-1" asChild > <FileText className=h-3 w-3 mr-1 /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) ;
}</Button> <Button variant=default" size="sm className=flex-1" onClick={
origin/cursor/automate-test-improve-and-merge-code-2533
  () => setShowHireModal (true) ";
}> <BriefcaseIcon className=h-3 w-3 mr-1 /> Hire </Button> </div> </CardContent> </Card>) ;
}</Draggable> {
  /* Hire Confirmation Modal */ ;
}<HireConfirmationModal isOpen= {
  showHireModal ;

}onClose= {

origin/cursor/automate-test-improve-and-merge-code-2533
  () => setShowHireModal (false) ;
}application= {
  application ;
}onConfirm= {
  handleHireConfirmed ;
}/> </>) ;



      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        application={application}
        onConfirm={handleHireConfirmed}
      />;
    </>;


  );
}