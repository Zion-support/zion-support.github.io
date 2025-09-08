const handleSaveNotes = () => {

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/hiring-tracker/CandidateCard.tsx
import { Draggable } from '@/lib/dnd-stub'
import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'
import { JobApplication } from '@/types/jobs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  MessageSquare
  User
  FileText
  MoreVertical
  Calendar
  AlertTriangle
  BriefcaseIcon
} from 'lucide-react';// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.
import { Draggable } from "@/lib/dnd-stub"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { JobApplication } from "@/types/jobs"
import { Card, CardContent } from "@/components/ui/card"

import { Avatar as AvatarPrimitive  } from "@/components/ui/avatar"; // Renamed to avoid conflict
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react'

  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ScoreBadge } from '@/components/jobs/applications/ScoreBadge'
import { toast } from '@/hooks/use-toast';
import { HireConfirmationModal } from './HireConfirmationModal';
import Image from 'next/image'; // Import next/image

interface CandidateCardProps {
  application: JobApplication;
  index: number
export function CandidateCard({ application, index }: CandidateCardProps) {

  const [showNotes, setShowNotes] = useState(false)
  const [notes, setNotes] = useState(application.notes |'')
  const [showHireModal, setShowHireModal] = useState(false)
  const [avatarError, setAvatarError] = useState(false)
  // Check if application is stalled (no activity for 7 days)
  const isStalled = null;
    application.updated_at &&
    new Date(application.updated_at).getTime() <
      Date.now() - 7 * 24 * 60 * 60 * 1000
  const handleSaveNotes = () => {
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({
<<<<<<< HEAD
      title: 'Notes saved'
      description: 'Your notes have been saved'
=======
      title: Notes saved'
      description: 'Your notes have been saved
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Here you would save the notes to the database
    // For now, we'll just show a toast
    toast({

    // For now, we'll just show a toast
    toast({

      title: 'Notes saved',
      description: 'Your notes have been saved',

    })
    setShowNotes(false)
  }
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal
    toast({
      title: 'Hiring process initiated'
      description: 'Offer has been sent to the talent.'
    })
  }
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/hiring-tracker/CandidateCard.tsx
<<<<<<< HEAD
  const candidateName = application.talent_profile?.full_name |'Candidate'
=======
  const candidateName = application.talent_profile?.full_name |'Candidate
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useState } from 'react';

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const candidateName = application.talent_profile?.full_name || 'Candidate'

import { useState } from 'react';
=======
<<<<<<< HEAD
  const candidateName = application.talent_profile?.full_name || 'Candidate
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const candidateName = application.talent_profile?.full_name || 'Candidate'
import { useState } from 'react';
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Local stub is used in place of the @hello-pangea/dnd package which isn't
// available in this environment.
import { Draggable } from "@/lib/dnd-stub",
import { formatDistanceToNow } from "date-fns",
import Link from "next/link",
import { JobApplication } from "@/types/jobs",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react'
import {
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",
import { toast } from "@/hooks/use-toast";
import { HireConfirmationModal } from "./HireConfirmationModal";
import Image from 'next/image', // Import next/image

interface CandidateCardProps {
  application: JobApplication;
  index: number
export function CandidateCard({ application, index }: CandidateCardProps) {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(application.notes || "");
  const [showHireModal, setShowHireModal] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  // Check if application is stalled (no activity for 7 days)
  const isStalled = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
        {provided => (
          <Card
            className='mb-2 p-0 shadow-sm border'
            ref={provided.innerRef}            {...provided.draggableProps}

      title: "Notes saved",
      description: "Your notes have been saved"
    }),
    setShowNotes(false)
  },
  
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal
    toast({
      title: "Hiring process initiated",
      description: "Offer has been sent to the talent."
    })
  },

  const candidateName = application.talent_profile?.full_name || "Candidate",
  
  return (
    <>
      <Draggable draggableId={application.id} index={index}>

        {(provided) => (
          <Card 
<<<<<<< HEAD

            className="mb-2 p-0 shadow-sm border"
import { useState } from "react",;
// Local stub is used in place of the @hello-pangea/dnd package which isn't;

=======
<<<<<<< HEAD
            className="mb-2 p-0 shadow-sm border"
import { useState } from "react",;

;
=======
<<<<<<< HEAD
            className="mb-2 p-0 shadow-sm border
import { useState } from react",
>>>>>>> origin/resolved-merge-conflicts
  const handleSaveNotes = () => {const handleSaveNotes = () => {// Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({title: 'Notes saved',description: 'Your notes have been saved'})setShowNotes(false)}
  const handleHireConfirmed = () => {// Hiring process completed via the modal;
<<<<<<< HEAD
    toast({title: 'Hiring process initiated';
      description: 'Offer has been sent to the talent.';
    })}import { useState  } from 'react';
  const candidateName = application.talent_profile?.full_name || 'Candidate';
// Local stub is used in place of the @hello-pangea/dnd package which isn't;
=======
    toast({title: Hiring process initiated';
      description: 'Offer has been sent to the talent.;
    })}import { useState  } from react';
  const candidateName = application.talent_profile?.full_name || 'Candidate;
// Local stub is used in place of the @hello-pangea/dnd package which isnt;
=======
            className="mb-2 p-0 shadow-sm border"
import { useState } from "react",;
// Local stub is used in place of the @hello-pangea/dnd package which isn't;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
// available in this environment.;
import { Draggable } from "@/lib/dnd-stub",;
import { formatDistanceToNow } from "date-fns",;
import Link from "next/link",;
import { JobApplication } from "@/types/jobs",;
import { Card, CardContent } from "@/components/ui/card",;
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
import { ScoreBadge } from "@/components/jobs/applications/ScoreBadge",;
import { toast } from "@/hooks/use-toast",;
import { HireConfirmationModal } from "./HireConfirmationModal",;
import Image from 'next/image', // Import next/image;
interface CandidateCardProps {;
  application: JobApplication,;
  index: number;
}
;
export function CandidateCard({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false),;
  const [notes, setNotes] = useState(application.notes || ""),;
  const [showHireModal, setShowHireModal] = useState(false),;
  const [avatarError, setAvatarError] = useState(false),;
  // Check if application is stalled (no activity for 7 days);
  const isStalled = application.updated_at &&;
    new Date(application.updated_at).getTime() <;
    (Date.now() - 7 * 24 * 60 * 60 * 1000),;
  const handleSaveNotes = () => {;
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast({;

    <>;
      <Draggable draggableId={application.id} index={index}>;
        {(provided) => (;
          <Card;
            className="mb-2 p-0 shadow-sm border";
            ref={provided.innerRef}
            {...provided.draggableProps}

            {...provided.dragHandleProps}
          >;
            <CardContent className="p-3">;
              {/* Candidate Header */}
<<<<<<< HEAD

=======
<<<<<<< HEAD
:src/components/hiring-tracker/CandidateCard.tsx
              <div className='flex justify-between items-start mb-2'>
                <div className='flex items-center gap-2'>
                  <AvatarPrimitive className='h-8 w-8'>
                    {' '}
                    {/* Using renamed AvatarPrimitive */}
                    {application.talent_profile?.profile_picture_url &&
                    !avatarError ? (
                      <Image
                        src={application.talent_profile.profile_picture_url}
                        alt={candidateName}
                        width={32} // Match h-8 w-8
                        height={32} // Match h-8 w-8
                        className='rounded-full object-cover' // Ensure rounded and object-cover
                        onError={() => setAvatarError(true)}                        priority={false} // Avatars are usually not LCP
                      />
                    ) : (
                      <User className='h-4 w-4' />
                    )}
                  </AvatarPrimitive>
                  <div>
                    <h4 className='font-medium text-sm'>{candidateName}</h4>
                    <p className='text-xs text-muted-foreground'>
                      {application.talent_profile?.professional_title |
                        'Applicant'}
                    </p>
                  </div>
                </div>

              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
                  <AvatarPrimitive className="h-8 w-8"> {/* Using renamed AvatarPrimitive */}
                    {application.talent_profile?.profile_picture_url && !avatarError ? (<Image;
                        src={application.talent_profile.profile_picture_url}alt={candidateName}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <div className="flex justify-between items-start mb-2">;
                <div className="flex items-center gap-2">;
                  <AvatarPrimitive className="h-8 w-8"> {/* Using renamed AvatarPrimitive */}
                    {application.talent_profile?.profile_picture_url && !avatarError ? (;
                      <Image;
                        src={application.talent_profile.profile_picture_url} ;
                        alt={candidateName}
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        width={32} // Match h-8 w-8;
                        height={32} // Match h-8 w-8;
                        className="rounded-full object-cover" // Ensure rounded and object-cover;
                        onError={() => setAvatarError(true)}
                        priority={false} // Avatars are usually not LCP;
                      />;
<<<<<<< HEAD


=======
<<<<<<< HEAD
                    ) : (<User className="h-4 w-4" />;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    ) : (;
                      <User className="h-4 w-4" />;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    ) : (<User className=h-4 w-4" />;
=======
                    ) : (;
                      <User className="h-4 w-4" />;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    )}
                  </AvatarPrimitive>;
                  <div>;
                    <h4 className="font-medium text-sm">;
                      {candidateName}
<<<<<<< HEAD
                    </h4>;
                    <p className="text-xs text-muted-foreground">;
=======
                    </h4>
                    <p className="text-xs text-muted-foreground">
>>>>>>> origin/resolved-merge-conflicts
                      {application.talent_profile?.professional_title || "Applicant"}
                    </p>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;
                  <DropdownMenuTrigger asChild>;
                    <Button variant='ghost' className='h-8 w-8 p-0'>;
                      <MoreVertical className='h-4 w-4' />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align='end'>;
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  </AvatarPrimitive>;
                  <div>;
                    <h4 className='font-medium text-sm'>{candidateName}</h4>;
                    <p className='text-xs text-muted-foreground'>;
                      {application && application.talent_profile?.professional_title ||;
                        'Applicant'}
                    </p>;
                  </div>;
                </div>;

                <DropdownMenu>;
                  <DropdownMenuTrigger asChild>;
                    <Button variant='ghost' className='h-8 w-8 p-0'>;
                      <MoreVertical className='h-4 w-4' />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align='end'>;
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;
                      {showNotes ? 'Hide notes' : 'Add notes'}
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      <BriefcaseIcon;
<<<<<<< HEAD
                        className='h-4 w-4 mr-2';
                        aria-hidden='true';
                      />{' '}
=======
                        className='h-4 w-4 mr-2;
                        aria-hidden=true';
                      />{' }
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      <BriefcaseIcon
                        className='h-4 w-4 mr-2'
                        aria-hidden='true'
                      />{' '}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
                          target='_blank';
                          rel='noopener noreferrer'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
                          target=_blank';
                          rel='noopener noreferrer>;
=======
=======
=======
<<<<<<< HEAD
                          target=_blank';
                          rel='noopener noreferrer>;
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          target='_blank'
                          rel='noopener noreferrer'>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          View Resume;
                        </a>;
                      </DropdownMenuItem>;

                    )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/hiring-tracker/CandidateCard.tsx
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {/* Application Info */}
              <div className='flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2'>
                <div className='flex items-center'>
                  <Calendar className='h-3 w-3 mr-1' />
                  {formatDistanceToNow(new Date(application.created_at), {
                    addSuffix: true
                  })}
                </div>
                {isStalled && (
                  <div className='flex items-center text-amber-500'>
                    <AlertTriangle className='h-3 w-3 mr-1' />
                    Stalled
                  </div>
                )}
              </div>
              {/* Match Score */}
              {application.match_score !== null &&
                application.match_score !== undefined && (
                  <div className='mb-2'>
                    <ScoreBadge application={application} />
                  </div>
                )}
              {/* Notes Section */}
              {showNotes && (
<<<<<<< HEAD
                <div className='mt-2'>
=======
                <div className=mt-2'>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;

                    Stalled;
                  </div>;
                )}
              </div>;

                )}
              {/* Notes Section */}
<<<<<<< HEAD


=======
<<<<<<< HEAD
              {showNotes && (<div className='mt-2'>;
                  <Textarea;
                    placeholder='Add private notes about this candidate...';
                    className='text-xs min-h-[60px]';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
              {showNotes && (;
                <div className='mt-2'>;
                  <Textarea
                    placeholder='Add private notes about this candidate...'
                    className='text-xs min-h-[60px]'
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {showNotes && (<div className='mt-2>;
                  <Textarea;
                    placeholder=Add private notes about this candidate...';
                    className='text-xs min-h-[60px];
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
                    value={notes}
:src/components/hiring-tracker/CandidateCard.tsx
                    onChange={e => setNotes(e.target.value)}                  />
                  <div className='flex justify-end mt-2'>
                    <Button size='sm' onClick={handleSaveNotes}>
                      Save Notes
                    </Button>
                  </div>
                </div>
              )}
              {/* Action Buttons */}
<<<<<<< HEAD
              <div className='flex justify-between mt-2 gap-1'>
                <Button variant='outline' size='sm' className='flex-1' asChild>
=======
              <div className=flex justify-between mt-2 gap-1'>
                <Button variant='outline size=sm' className='flex-1 asChild>
=======
              {showNotes && (;
                <div className='mt-2'>;
                  <Textarea
                    placeholder='Add private notes about this candidate...'
                    className='text-xs min-h-[60px]'
                    value={notes}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    onChange={e => setNotes(e && e.target.value)}                  />;
                  <div className='flex justify-end mt-2'>;
                    <Button size='sm' onClick={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>;
              )}
              {/* Action Buttons */}

              <div className="flex justify-between mt-2 gap-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >

                  <Link href={`/messages?talentId=${application.talent_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Message
                  </Link>
                </Button>
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/hiring-tracker/CandidateCard.tsx
<<<<<<< HEAD
                <Button variant='outline' size='sm' className='flex-1' asChild>
=======
                <Button variant=outline' size='sm className=flex-1' asChild>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >

                  {application.resume?.file_url ? (
                    <a href={application.resume.file_url} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-3 w-3 mr-1" /> Resume
                    </Link>
                  ) : (
                    <span>
                      <FileText className="h-3 w-3 mr-1" /> No Resume
                    </span>
                  )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/hiring-tracker/CandidateCard.tsx
                </Button>
                <Button
                  variant='default'
                  size='sm'
                  className='flex-1'
                  onClick={() => setShowHireModal(true)}                >
                  <BriefcaseIcon className='h-3 w-3 mr-1' /> Hire
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </Draggable>
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => setShowHireModal(true)}
                >;
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        )}

      </Draggable>;

      {/* Hire Confirmation Modal */}
      <HireConfirmationModal
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
        isOpen = {showHireModal,}
        onClose = {() => setShowHireModal(false),}
        application = {application,}
        onConfirm = {handleHireConfirmed,}
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        isOpen = {showHireModal}
        onClose = {() => setShowHireModal(false)}
        application = {application}
        onConfirm = {handleHireConfirmed}
>>>>>>> origin/resolved-merge-conflicts
        )}</Draggable>;{/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        isOpen = {showHireModal}
        onClose = {() => setShowHireModal(false)}
        application = {application}
        onConfirm = {handleHireConfirmed}// Local stub is used in place of the @hello - pangea / dnd package which isn't;
// available in this environment.;
import { Draggable  } from '@/lib / dnd - stub';
import { formatDistanceToNow  } from 'date - fns';
import Link from 'next / link';
import { JobApplication  } from '@/types / jobs';
import { Card, CardContent  } from '@/components / ui / card';
import { Avatar as AvatarPrimitive } from '@/components / ui / avatar'; // Renamed to avoid conflict;
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
  MessageSquare,User,FileText,MoreVertical,Calendar,AlertTriangle,BriefcaseIcon} from 'lucide-react';// Local stub is used in place of the @hello - pangea / dnd package which isn't;
// available in this environment.;
import { Draggable   } from '@/lib / dnd - stub';
import { formatDistanceToNow   } from './date - fns';
import Link from './next / link';
import { JobApplication   } from '@/types / jobs';
import { Card, CardContent   } from '@/components / ui / card';
import { Avatar as AvatarPrimitive  } from '@/components / ui / avatar';, // Renamed to avoid conflict;
import { Button   } from '@/components / ui / button';
import { Textarea   } from '@/components / ui / textarea';
  DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger} from '@/components / ui / dropdown - menu';
import { ScoreBadge  } from '@/components / jobs / applications / ScoreBadge';
import { toast  } from '@/hooks / use - toast';
import Image from 'next / image'; // Import next / image;
interface CandidateCardProps  {application: JobApplication;
  index: number;
export /**;
 * CandidateCard - Function description;
 */;
function CandidateCard() {const [show_notes, setShowNotes] = useState (false)const [notes, set_notes] = useState (application.notes || '')const [showHireModal, setShowHireModal] = useState (false)const [avatar_error, setAvatarError] = useState (false)// Check if application is stalled (no activity for 7 days)const is_stalled =;
    application.updated_at &&;
    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
  const handleSaveNotes = () =>: any {// Here you would save the notes to the database;
    // For now, we'll just show a toast;
    toast ({title: 'Notes saved',description: 'Your notes have been saved'})setShowNotes (false)}
  const handleHireConfirmed = () =>: any {// Hiring process completed via the modal;
    toast ({title: 'Hiring process initiated',description: 'Offer has been sent to the talent.'})}
  const candidate_name = application.talent_profile?.full_name || 'Candidate';
  return (<>;
      <Draggable draggable_id={application.id} index={index}>;
        {provided => (<Card;
            className='mb - 2 p - 0 shadow - sm border';
            ref={provided.inner_ref}            {...provided.draggable_props}
            {...provided.dragHandleProps}
          >;
            <CardContent className='p - 3'>;
              {/* Candidate Header */}
              <div className='flex justify - between items - start mb - 2'>;
                <div className='flex items - center gap - 2'>;
                  <AvatarPrimitive className='h - 8 w - 8'>;
                    {' '}
                    {/* Using renamed AvatarPrimitive */}
                    {application.talent_profile?.profile_picture_url &&;
                    !avatar_error ? (<Image;
                        src={application.talent_profile.profile_picture_url}
                        alt={candidate_name}
                        width={32} // Match h - 8 w - 8;
                        height={32} // Match h - 8 w - 8;
                        className='rounded - full object - cover' // Ensure rounded and object - cover;
                        on_error={() => setAvatarError (true)}                        priority={false} // Avatars are usually not LCP;
                      />) : (<User className='h - 4 w - 4' />)}
                  </AvatarPrimitive>;
                  <div>;
                    <h4 className='font - medium text - sm'>{candidate_name}</h4>;
                    <p className='text - xs text - muted - foreground'>;
                      {application.talent_profile?.professional_title ||;
                        'Applicant'}
                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;
                  <DropdownMenuTrigger as_child>;
                    <Button variant='ghost' className='h - 8 w - 8 p - 0'>;
                      <MoreVertical className='h - 4 w - 4' />;
                    </Button>;
                  </DropdownMenuTrigger>;
                  <DropdownMenuContent align='end'>;
                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;
                      {show_notes ? 'Hide notes' : 'Add notes'}
                    </DropdownMenuItem>;
                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;
                      <BriefcaseIcon;
                        className='h - 4 w - 4 mr - 2';
                        aria - hidden='true';
                      />{' '}
                      Hire Candidate;
                    </DropdownMenuItem>;
                    <DropdownMenuItem as_child>;
                      <Link;
                        href={`/messages?talent_id=${application.talent_id}`}
                      >;
                        Message;
                      </Link>;
                    </DropdownMenuItem>;
                    {application.resume?.file_url && (<DropdownMenuItem as_child>;
                        <a;
                          href={application.resume.file_url}
                          target='_blank';
                          rel='noopener noreferrer';
                        >;
                          View Resume;
                        </a>;
                      </DropdownMenuItem>)}
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;
              {/* Application Info */}
              <div className='flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2'>;
                <div className='flex items - center'>;
                  <Calendar className='h - 3 w - 3 mr - 1' />;
                  {formatDistanceToNow (new Date (application.created_at), {add_suffix: true})}
                </div>;
                {is_stalled && (<div className='flex items - center text - amber - 500'>;
                    <AlertTriangle className='h - 3 w - 3 mr - 1' />;
                    Stalled;
                  </div>)}
              </div>;
              {/* Match Score */}
              {application.match_score !== null &&;
                application.match_score !== undefined && (<div className='mb - 2'>;
                    <ScoreBadge application={application} />;
                  </div>)}
              {/* Notes Section */}
              {show_notes && (<div className='mt - 2'>;
                  <Textarea;
                    placeholder='Add private notes about this candidate...';
                    className='text - xs min - h-[60px]';
                    value={notes}
                    on_change={e => set_notes (e.target.value)}                  />;
                  <div className='flex justify - end mt - 2'>;
                    <Button size='sm' on_click={handleSaveNotes}>;
                      Save Notes;
                    </Button>;
                  </div>;
                </div>)}
              {/* Action Buttons */}
              <div className='flex justify - between mt - 2 gap - 1'>;
                <Button variant='outline' size='sm' className='flex - 1' as_child>;
                  <Link href={`/messages?talent_id=${application.talent_id}`}>;
                    <MessageSquare className='h - 3 w - 3 mr - 1' /> Message;
                  </Link>;
                </Button>;
                <Button variant='outline' size='sm' className='flex - 1' as_child>;
                  {application.resume?.file_url ? (<a;
                      href={application.resume.file_url}
                      target='_blank';
                      rel='noopener noreferrer';
                    >;
                      <FileText className='h - 3 w - 3 mr - 1' /> Resume;
                    </a>) : (<span>;
                      <FileText className='h - 3 w - 3 mr - 1' /> No Resume;
                    </span>)}
                </Button>;
                <Button;
                  variant='default';
                  size='sm';
                  className='flex - 1';
                  on_click={() => setShowHireModal (true)}                >;
                  <BriefcaseIcon className='h - 3 w - 3 mr - 1' /> Hire;
                </Button>;
              </div>;
            </CardContent>;
          </Card>)}
      </Draggable>;
      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        is_open = {showHireModal }
        on_close = {() => setShowHireModal (false) }
        application = {application }
        on_confirm = {handleHireConfirmed }
      />;
    </>)//Here you would save the notes to the database //For now, we'll just show a toast toast ({setShowNotes (false)}
  //Hiring process completed via the modal toast ({application.id;
}index= {index;
}> {(provided) => (<Card className="mb - 2 p - 0 shadow - sm border" ref= {provided.inner_ref;
}{...provided.draggable_props;
}{...provided.dragHandleProps ";
}> <CardContent className="p - 3"> {/* Candidate Header */ ";
}<div className="flex justify - between items - start mb - 2"> <div className="flex items - center gap - 2"> <AvatarPrimitive className="h - 8 w - 8"> {/* Using renamed AvatarPrimitive */;
}{application.talent profile?.profile picture url && !avatar_error ? (<Image src= {application.talent profile.profile picture url;
}alt= {candidate_name;
}width= {32;
}//Match h - 8 w - 8 height= {32 ";
}//Match h - 8 w - 8 className="rounded - full object - cover" //Ensure rounded and object - cover on_error= {() => setAvatarError (true)}priority= {false ";
}//Avatars are usually not LCP />) : (<User className="h - 4 w - 4" />) ";
}</AvatarPrimitive> <div> <h4 className="font - medium text - sm"> {candidate_name ";
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger as_child> <Button variant="ghost" className="h - 8 w - 8 p - 0"> <MoreVertical className="h - 4 w - 4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem as_child> <Link href= {`/messages?talent_id=$ {application.talent id;
}`;
}> Message </Link> </DropdownMenuItem> {application.resume?.file url && (<DropdownMenuItem as_child> <a href= {application.resume.file url ";
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>)}</DropdownMenuContent> </DropdownMenu> </div> {/* Application Info */ ";
}<div className="flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2"> <div className="flex items - center"> <Calendar className="h - 3 w - 3 mr - 1" /> {formatDistanceToNow (new Date (application.created at), {/>;
    </>;/>;
    </>;
      />
    </>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> merged-prs-20250907-203621
      />
    </>
:src/components/hiring-tracker/CandidateCard.tsx
  )
  //Here you would save the notes to the database //For now, we'll just show a toast toast ({
  setShowNotes (false)
}
  //Hiring process completed via the modal toast ({
  application.id
}index= {
  index
}> {
  (provided) => (<Card className="mb-2 p-0 shadow-sm border" ref= {
  provided.innerRef
}{
  ...provided.draggableProps
}{
  ...provided.dragHandleProps "
}> <CardContent className="p-3"> {
  /* Candidate Header */ "
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <AvatarPrimitive className="h-8 w-8"> {
  /* Using renamed AvatarPrimitive */
}{
  application.talent profile?.profile picture url && !avatarError ? (<Image src= {
  application.talent profile.profile picture url
}alt= {
  candidateName
}width= {
  32
}//Match h-8 w-8 height= {
  32 "
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {
  () => setAvatarError (true)
}priority= {
  false "
}//Avatars are usually not LCP />) : (<User className="h-4 w-4" />) "
}</AvatarPrimitive> <div> <h4 className="font-medium text-sm"> {
  candidateName "
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Link href= {
  `/messages?talentId=$ {
  application.talent id
}`
}> Message </Link> </DropdownMenuItem> {
  application.resume?.file url && (<DropdownMenuItem asChild> <a href= {
  application.resume.file url "
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>)
}</DropdownMenuContent> </DropdownMenu> </div> {
  /* Application Info */ "
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {
  formatDistanceToNow (new Date (application.created at), {
  addSuffix: true
})
}</div> {"
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>)
}</div> {
  /* Match Score */
}{"
  application.match score !== null && application.match score !== undefined && (<div className="mb-2"> <ScoreBadge application= {
  application
}/> </div>) "
}<Textarea placeholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {
  notes
}onChange= {
  (e) => setNotes (e.target.value)
}/> </div> </div>) "
}<Button variant="outline" size="sm" className="flex-1" asChild > </Link> </Button> <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) "
}</Button> <Button variant="default" size="sm" className="flex-1" onClick={
  () => setShowHireModal (true) "
}> <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire </Button> </div> </CardContent> </Card>)
}</Draggable> {
  /* Hire Confirmation Modal */
}<HireConfirmationModal isOpen= {
  showHireModal
}onClose= {
  () => setShowHireModal (false)
}application= {
  application
}onConfirm= {
  handleHireConfirmed
}/> </>)
}'"}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
        isOpen = {showHireModal,}
        onClose = {() => setShowHireModal(false),}
        application = {application,}
        onConfirm = {handleHireConfirmed,}
      />
    </>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );

  //Here you would save the notes to the database //For now, we'll just show a toast toast ({;
  setShowNotes (false);
<<<<<<< HEAD


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


=======
<<<<<<< HEAD
};
  //Hiring process completed via the modal toast ({;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
};
  //Hiring process completed via the modal toast ({;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
  //Hiring process completed via the modal toast ({
>>>>>>> origin/resolved-merge-conflicts
  application && application.id ;
}index= {;
  index ;
}> {;
  (provided) => (<CardclassName="mb-2 p-0 shadow-sm border" ref= {
  provided && provided.innerRef 
}{
  ...provided && provided.draggableProps 
}{
<<<<<<< HEAD
  ...provided && provided.dragHandleProps "
=======
  ...provided && provided.dragHandleProps 
=======
};
  //Hiring process completed via the modal toast ({;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  application.id ;
}index= {;
  index ;
}> {;
  (provided) => (<Card className="mb-2 p-0 shadow-sm border" ref= {;
  provided.innerRef ;
}{;
  ...provided.draggableProps ;
}{;
  ...provided.dragHandleProps ";
origin/cursor/automate-test-improve-and-merge-code-2533
}> <CardContent className="p-3"> {;
  /* Candidate Header */ ";
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <AvatarPrimitive className="h-8 w-8"> {;
  /* Using renamed AvatarPrimitive */ ;
}{;
  application.talent profile?.profile picture url && !avatarError ? (<Image src= {;
  application.talent profile.profile picture url ;
}alt= {;
  candidateName ;
}width= {;
  32 ;
}//Match h-8 w-8 height= {;
  32 ";
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {;
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  application && application.talent profile?.profile picture url && !avatarError ? (<Imagesrc= {
  application && application.talent profile && profile.profile picture url 
}alt= {
  candidateName 
}width= {
  32 
}//Match h-8 w-8 height= {
<<<<<<< HEAD
  32 "
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {
=======
  32 
}//Match h-8 w-8 className=rounded-full object-cover" //Ensure rounded and object-cover onError= {
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  () => setAvatarError (true) ;
}priority= {;
  false ";
}//Avatars are usually not LCP />) : (<User className="h-4 w-4" />) ";
}</AvatarPrimitive> <div> <h4 className="font-medium text-sm"> {;
  candidateName ";
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Link href= {;
  `/messages?talentId=$ {;
  application.talent id ;
}` ;
<<<<<<< HEAD


=======
<<<<<<< HEAD
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Linkhref= {
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant=ghost className="h-8 w-8 p-0"> <MoreVertical className=h-4 w-4 /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Linkhref= {
>>>>>>> origin/resolved-merge-conflicts
  `/messages?talentId=$ {
  application && application.talent id 
}` 
}> Message </Link> </DropdownMenuItem> {;
  application && application.resume?.file url && (<DropdownMenuItem asChild> <ahref= {
  application && application.resume.file url "
}> Message </Link> </DropdownMenuItem> {;
  application.resume?.file url && (<DropdownMenuItem asChild> <a href= {;
  application.resume.file url ";
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
}target=blank rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>) ;
}</DropdownMenuContent> </DropdownMenu> </div> {
  /* Application Info */ ;
}<div className=flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center> <Calendar className=h-3 w-3 mr-1" /> {
  formatDistanceToNow (new Date (application && application.created at), {
  formatDistanceToNow (new Date (application.created at), {
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}> Message </Link> </DropdownMenuItem> {;
  application.resume?.file url && (<DropdownMenuItem asChild> <a href= {;
  application.resume.file url ";
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/resolved-merge-conflicts
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>) ;
}</DropdownMenuContent> </DropdownMenu> </div> {;
  /* Application Info */ ";
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {;
<<<<<<< HEAD
  formatDistanceToNow (new Date (application && application.created at), {;
  formatDistanceToNow (new Date (application.created at), {;
=======
  formatDistanceToNow (new Date (application.created at), {;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
  addSuffix: true ;
});
}</div> {";
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>) ;
}</div> {;
  /* Match Score */ ;
<<<<<<< HEAD


=======
<<<<<<< HEAD
}{";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}{;
>>>>>>> origin/resolved-merge-conflicts
  )//Here you would save the notes to the database //For now, we'll just show a toast toast ({setShowNotes (false)}//Hiring process completed via the modal toast ({application && application.id ;
}index= {index ;
}> {(provided) => (<CardclassName="mb-2 p-0 shadow-sm border" ref= {provided && provided.innerRef;
}{...provided && provided.draggableProps;
}{...provided && provided.dragHandleProps ";
  application.id ;
}index= {index ;
}> {(provided) => (<Card className="mb-2 p-0 shadow-sm border" ref= {provided.innerRef ;
}{...provided.draggableProps ;
}{...provided.dragHandleProps ";}> <CardContent className="p-3"> {/* Candidate Header */ ";
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <AvatarPrimitive className="h-8 w-8"> {/* Using renamed AvatarPrimitive */ ;
}{application && application.talent profile?.profile picture url && !avatarError ? (<Imagesrc= {application && application.talent profile && profile.profile picture url;
}alt= {candidateName;
}width= {32;
}//Match h-8 w-8 height= {32 ";
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {application.talent profile?.profile picture url && !avatarError ? (<Image src= {application.talent profile.profile picture url ;
}alt= {candidateName ;
}width= {32 ;
}//Match h-8 w-8 height= {32 ";
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {() => setAvatarError (true)}priority= {false ";
}//Avatars are usually not LCP />) : (<User className="h-4 w-4" />) ";
}</AvatarPrimitive> <div> <h4 className="font-medium text-sm"> {candidateName ";}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Linkhref= {`/messages?talentId=$ {application && application.talent id;
}`;
}> Message </Link> </DropdownMenuItem> {application && application.resume?.file url && (<DropdownMenuItem asChild> <ahref= {application && application.resume.file url ";
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Link href= {`/messages?talentId=$ {application.talent id ;
}` ;
}> Message </Link> </DropdownMenuItem> {application.resume?.file url && (<DropdownMenuItem asChild> <a href= {application.resume.file url ";}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>)}</DropdownMenuContent> </DropdownMenu> </div> {/* Application Info */ ";
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {formatDistanceToNow (new Date (application && application.created at), {formatDistanceToNow (new Date (application.created at), {addSuffix: true ;
})}</div> {";
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>)}</div> {/* Match Score */ ;
}{";application && application.match score !== null && application && application.match score !== undefined && (<div className="mb-2"> <ScoreBadgeapplication= {application;
}/> </div>) ";
}<Textareaplaceholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {notes;
}onChange= {(e) => setNotes (e && e.target.value)}/> </div> </div>) ";
}<Button variant="outline" size="sm" className="flex-1" asChild > </Link> </Button> <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) ";
}</Button> <Buttonvariant="default" size="sm" className="flex-1" onClick={application.match score !== null && application.match score !== undefined && (<div className="mb-2"> <ScoreBadge application= {application ;
}/> </div>) ";
}<Textarea placeholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {notes ;
}onChange= {(e) => setNotes (e.target.value)}/> </div> </div>) ";
}<Button variant="outline" size="sm" className="flex-1" asChild > </Link> </Button> <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) ";
}</Button> <Button variant="default" size="sm" className="flex-1" onClick={;
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
  application && application.match score !== null && application && application.match score !== undefined && (<div className="mb-2"> <ScoreBadgeapplication= {
  application 
  application.match score !== null && application.match score !== undefined && (<div className="mb-2"> <ScoreBadge application= {;
=======
}</Button> <Button variant=default size="sm" className=flex-1 onClick={
origin/cursor/automate-test-improve-and-merge-code-2533
  application && application.match score !== null && application && application.match score !== undefined && (<div className="mb-2"> <ScoreBadgeapplication= {
  application 
  application.match score !== null && application.match score !== undefined && (<div className=mb-2> <ScoreBadge application= {
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}{";
  application.match score !== null && application.match score !== undefined && (<div className="mb-2"> <ScoreBadge application= {;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  application ;
}/> </div>) ";
}<Textarea placeholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {;
  notes ;
}onChange= {;
  (e) => setNotes (e.target.value) ;
}/> </div> </div>) ";
}<Button variant="outline" size="sm" className="flex-1" asChild > </Link> </Button> <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) ";
}</Button> <Button variant="default" size="sm" className="flex-1" onClick={;
origin/cursor/automate-test-improve-and-merge-code-2533
  () => setShowHireModal (true) ";
}> <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire </Button> </div> </CardContent> </Card>) ;
}</Draggable> {;
  /* Hire Confirmation Modal */ ;
}<HireConfirmationModal isOpen= {;
  showHireModal ;
<<<<<<< HEAD

}onClose= {

=======
<<<<<<< HEAD
}onClose= {;
=======
<<<<<<< HEAD
}onClose= {;
=======
}onClose= {
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
  () => setShowHireModal (false) ;
}application= {;
  application ;
}onConfirm= {;
  handleHireConfirmed ;
}/> </>) ;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}'"}

}'"
origin/cursor/automate-test-improve-and-merge-code-2533
}</Button> <Button variant="default" size="sm" className="flex-1" onClick={() => setShowHireModal (true) ";
}> <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire </Button> </div> </CardContent> </Card>)}</Draggable> {/* Hire Confirmation Modal */ ;}<HireConfirmationModalisOpen= {showHireModal;
}onClose= {}<HireConfirmationModal isOpen= {showHireModal ;
}onClose= {() => setShowHireModal (false)}application= {application ;
}onConfirm= {handleHireConfirmed ;
}/> </>)}'"}add_suffix: true;
})}</div> {";
  is_stalled && (<div className="flex items - center text - amber - 500"> <AlertTriangle className="h - 3 w - 3 mr - 1" /> Stalled </div>)}</div> {/* Match Score */;
}{";
  application.match score !== null && application.match score !== undefined && (<div className="mb - 2"> <ScoreBadge application= {application;
}/> </div>) ";
}<Textarea placeholder="Add private notes about this candidate..." className="text - xs min - h-[60px]" value= {notes;
}on_change= {(e) => set_notes (e.target.value)}/> </div> </div>) ";
}<Button variant="outline" size="sm" className="flex - 1" as_child > </Link> </Button> <Button variant="outline" size="sm" className="flex - 1" as_child > <FileText className="h - 3 w - 3 mr - 1" /> Resume </Link>) : (<span> <FileText className="h - 3 w - 3 mr - 1" /> No Resume </span>) ";
}</Button> <Button variant="default" size="sm" className="flex - 1" on_click={() => setShowHireModal (true) ";
}> <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire </Button> </div> </CardContent> </Card>)}</Draggable> {/* Hire Confirmation Modal */;
<<<<<<< HEAD
=======
}</Button> <Button variant=default" size="sm className=flex - 1" on_click={() => setShowHireModal (true) ";
}> <BriefcaseIcon className=h - 3 w - 3 mr - 1 /> Hire </Button> </div> </CardContent> </Card>)}</Draggable> {/* Hire Confirmation Modal */;
>>>>>>> origin/resolved-merge-conflicts
}<HireConfirmationModal is_open= {showHireModal;
}on_close= {() => setShowHireModal (false)}application= {application;
}on_confirm= {handleHireConfirmed;
}/> </>)}'"}</Draggable>;
}</Button> <Button variant="default" size="sm" className="flex - 1" on_click={
  () => setShowHireModal (true) ";
}> <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire </Button> </div> </CardContent> </Card>);
}</Draggable> {
  /* Hire Confirmation Modal */;
}<HireConfirmationModal is_open= {
  showHireModal;
}on_close= {
  () => setShowHireModal (false);
}application= {
  application;
}on_confirm= {
  handleHireConfirmed;
}/> </>);
}'"}
      </Draggable>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      {/* Hire Confirmation Modal */}
      <HireConfirmationModal;
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
        application={application}
        onConfirm={handleHireConfirmed}
      />;
    </>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
  )}'";
=======
<<<<<<< HEAD
<<<<<<< HEAD
  )}}'";
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
  )}}'";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );
}