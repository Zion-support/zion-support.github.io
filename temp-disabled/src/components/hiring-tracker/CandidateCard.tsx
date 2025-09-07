
const handleSaveNotes = () => {
    // Here you would save the notes to the database;
    // For now, we'll just show a toast;'
    toast({

'
      title: 'Notes saved',''
      description: 'Your notes have been saved',')
    })
    setShowNotes(false)
  }
  const handleHireConfirmed = () => {
    // Hiring process completed via the modal;
    toast({'
      title: 'Hiring process initiated'','
  description: 'Offer has been sent to the talent.'')
    })
  }

'
import { useState } from 'react';''
  const candidateName = application.talent_profile?.full_name || 'Candidate''
  return (
    <>
      <Draggable draggableId={application.id} index={index}>
</Draggable>
          <Card;'
            className='mb-2 p-0 shadow-sm border''
            ref={provided.innerRef}            {...provided.draggableProps}
'
      title: "Notes saved",""
      description: "Your notes have been saved"")
    }),
    setShowNotes(false)
  },
  
  const handleHireConfirmed = () => {
</Card>
    <>
      <Draggable draggableId={application.id} index={index}>
</Draggable>
          <Card;"
            className="mb-2 p-0 shadow-sm border"""
import { useState } from "react",;""
// Local stub is used in place of the @hello-pangea/dnd package which isn't;'
// available in this environment.;'
import { Draggable } from '@/lib/dnd-stub';''
import { formatDistanceToNow } from 'date-fns';''
import Link from 'next/link';''
import { JobApplication } from '@/types/jobs';''
import { Card, CardContent } from '@/components/ui/card';''
import { Avatar as AvatarPrimitive } from '@/components/ui/avatar'; // Renamed to avoid conflict;''
import { Button } from '@/components/ui/button';''
import { Textarea } from '@/components/ui/textarea';'
import {;
  MessageSquare,;
  User,;
  FileText,;
  MoreVertical,;
  Calendar,;
  AlertTriangle,;
  BriefcaseIcon,;'
} from 'lucide-react';// Local stub is used in place of the @hello-pangea/dnd package which isn't;'
// available in this environment.;'
import { Draggable } from "@/lib/dnd-stub";""
import { formatDistanceToNow } from "date-fns";""
import Link from "next/link";""
import { JobApplication } from "@/types/jobs";""
import { Card, CardContent } from "@/components/ui/card";""
import { Avatar as AvatarPrimitive } from "@/components/ui/avatar", // Renamed to avoid conflict;""
import { Button } from "@/components/ui/button";""
import { Textarea } from "@/components/ui/textarea";""
import { MessageSquare, User, FileText, MoreVertical, Calendar, AlertTriangle, BriefcaseIcon } from 'lucide-react';'
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;'
} from '@/components/ui/dropdown-menu';''
import { ScoreBadge } from '@/components/jobs/applications/ScoreBadge';''
import { toast } from '@/hooks/use-toast';''
import { HireConfirmationModal } from './HireConfirmationModal';''
import Image from 'next/image'; // Import next/image;'
interface CandidateCardProps {;
  application: JobApplication;,
  index: number;

export function CandidateCard(): any ({ application, index }: CandidateCardProps) {;
  const [showNotes, setShowNotes] = useState(false);'
  const [notes, setNotes] = useState(application && application.notes || '');'

  const [showHireModal, setShowHireModal] = useState(false);
  const [avatarError, setAvatarError]  = useState(false)// Check if application is stalled (no activity for 7 days)const isStalled =;
    application && application.updated_at &&;
    new Date(application && application.updated_at).getTime() <;
      Date && Date.now() - 7 * 24 * 60 * 60 * 1000;


  const handleSaveNotes = () => {;
</Card>
    <>;

      <Draggable draggableId={application.id} index={index}>;
</Draggable>
          <Card;'
            className="mb-2 p-0 shadow-sm border";"
            ref={provided.innerRef}
            {...provided.draggableProps}


            {...provided.dragHandleProps}
          >
</Card>"
            <CardContent className='p-3'>'
</CardContent>'
              <div className="flex justify-between items-start mb-2">;"
</div>"
                <div className="flex items-center gap-2">;"
</div>"
                  <AvatarPrimitive className="h-8 w-8"> {/* Using renamed AvatarPrimitive */}"
</AvatarPrimitive>
                      <Image;
                        src={application.talent_profile.profile_picture_url} ;
                        alt={candidateName}
                        width={32} // Match h-8 w-8;
                        height={32} // Match h-8 w-8;"
                        className="rounded-full object-cover" // Ensure rounded and object-cover;"
                        onError={() => setAvatarError(true)}
</Image>"
                      <User className="h-4 w-4" />;"
</User>
                  </AvatarPrimitive>;
                  <div>;
</div>"
                    <h4 className="font-medium text-sm">;"
</h4>
                    </h4>"
                    <p className="text-xs text-muted-foreground">"
</p>
                    </p>
                  </div>
                </div>
                

                <DropdownMenu>
</DropdownMenu>
                  <DropdownMenuTrigger asChild>
</DropdownMenuTrigger>"
                    <Button variant='ghost' className='h-8 w-8 p-0'>'
</Button>'
                      <MoreVertical className='h-4 w-4' />'
</MoreVertical>
                    </Button>
                  </DropdownMenuTrigger>'
                  <DropdownMenuContent align='end'>'
</DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>
</DropdownMenuItem>
                  </AvatarPrimitive>;
                  <div>;
</div>'
                    <h4 className='font-medium text-sm'>{candidateName}</h4>;''
                    <p className='text-xs text-muted-foreground'>;'
</p>
                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;
</DropdownMenu>
                  <DropdownMenuTrigger asChild>;
</DropdownMenuTrigger>'
                    <Button variant='ghost' className='h-8 w-8 p-0'>;'
</Button>'
                      <MoreVertical className='h-4 w-4' />;'
</MoreVertical>
                    </Button>;
                  </DropdownMenuTrigger>;'
                  <DropdownMenuContent align='end'>;'
</DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setShowNotes(!showNotes)}>;
</DropdownMenuItem>
                    </DropdownMenuItem>;
                    <DropdownMenuItem onClick={() => setShowHireModal(true)}>;
</DropdownMenuItem>
                      <BriefcaseIcon;'
                        className='h-4 w-4 mr-2'''
                        aria-hidden='true'''
                      />{' '}'
</BriefcaseIcon>
                    </DropdownMenuItem>;
                    <DropdownMenuItem asChild>;
</DropdownMenuItem>
                      <Link;
                        href={`/messages?talentId=${application && application.talent_id}`}>;
</Link>
                      </Link>;
                    </DropdownMenuItem>;
                      <DropdownMenuItem asChild>;
</DropdownMenuItem>
                        <a;
                          href={application && application.resume.file_url}'
                          target='_blank'''
                          rel='noopener noreferrer'>;'
</a>
                        </a>;
                      </DropdownMenuItem>;
                  </DropdownMenuContent>;
                </DropdownMenu>;
              </div>;'
              <div className='flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2'>;'
</div>'
                <div className='flex items-center'>;'
</div>'
                  <Calendar className='h-3 w-3 mr-1' />;'
</Calendar>
                </div>;'
                  <div className='flex items-center text-amber-500'>;'
</div>'
                    <AlertTriangle className='h-3 w-3 mr-1' />;'
</AlertTriangle>
                  </div>;
              </div>;'
                  <div className='mb-2'>;'
</div>
                    <ScoreBadge application={application} />;
</ScoreBadge>
                  </div>;'
                <div className='mt-2'>;'
</div>
                  <Textarea;'
                    placeholder='Add private notes about this candidate...'''
                    className='text-xs min-h-[60px]''
                    value={notes}
                    onChange={e => setNotes(e && e.target.value)}                  />;
</Textarea>'
                  <div className='flex justify-end mt-2'>;'
</div>'
                    <Button size='sm' onClick={handleSaveNotes}>;'
</Button>
                    </Button>;
                  </div>;
                </div>;'
              <div className="flex justify-between mt-2 gap-1">"
</div>
                <Button;"
                  variant="outline"""
                  size="sm"""
                  className="flex-1""
                  asChild;
                >
</Button>


                  <Link href={`/messages?talentId=${application.talent_id}`}>
</Link>"
                    <MessageSquare className='h-3 w-3 mr-1' /> Message;'
</MessageSquare>
                  </Link>
                </Button>


                
                <Button;'
                  variant="outline"""
                  size="sm"""
                  className="flex-1""
                  asChild;
                >
</Button>"
              <div className='flex justify-between mt-2 gap-1'>;'
</div>'
                <Button variant='outline' size='sm' className='flex-1' asChild>;'
</Button>
                  <Link href={`/messages?talentId=${application && application.talent_id}`}>;
</Link>'
                    <MessageSquare className='h-3 w-3 mr-1' /> Message;'
</MessageSquare>
                  </Link>;
                </Button>;'
                <Button variant='outline' size='sm' className='flex-1' asChild>;'
</Button>
                    <a;
                      href={application && application.resume.file_url}'
                      target='_blank'''
                      rel='noopener noreferrer'>;'
</a>'
                      <FileText className='h-3 w-3 mr-1' /> Resume;'
</FileText>
                    </a>;
                    <span>;
</span>'
                      <FileText className='h-3 w-3 mr-1' /> No Resume;'
</FileText>
                    </span>;
                </Button>;
                <Button;'
                  variant='default'''
                  size='sm'''
                  className='flex-1''
                  onClick={() => setShowHireModal(true)}                >;
</Button>'
                  <BriefcaseIcon className='h-3 w-3 mr-1' /> Hire;'
</BriefcaseIcon>
                </Button>
}/> </>) '
}'"};"
;

                
                <Button;"
                  variant="default"""
                  size="sm"""
                  className="flex-1""
                  onClick={() => setShowHireModal(true)}
</Button>"
                  <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire;"
</BriefcaseIcon>

                </Button>;
              </div>;
            </CardContent>;
          </Card>;

      </Draggable>;
      <HireConfirmationModal;
        isOpen = {showHireModal,}
        onClose = {() => setShowHireModal(false),}
</HireConfirmationModal>
    new Date (application.updated_at).get_time () <;
      Date.now () - 7 * 24 * 60 * 60 * 1000;
  const handleSaveNotes = () =>: any {
  // TODO: Implement
}
    // Here you would save the notes to the database;"
    // For now, we'll just show a toast;'
    toast ({'
      title: 'Notes saved',''
      description: 'Your notes have been saved',')
    });
    setShowNotes (false);
  }
  const handleHireConfirmed = () =>: any {
  // TODO: Implement
}
    // Hiring process completed via the modal;
    toast ({'
      title: 'Hiring process initiated',''
      description: 'Offer has been sent to the talent.',')
    });
  }'
  const candidate_name = application.talent_profile?.full_name || 'Candidate';'
  return (
    <>;
      <Draggable draggable_id={application.id} index={index}>;
</Draggable>
          <Card;'
            className='mb - 2 p - 0 shadow - sm border';'
            ref={provided.inner_ref}            {...provided.draggable_props}
            {...provided.dragHandleProps}
          >;
</Card>'
            <CardContent className='p - 3'>;'
</CardContent>'
              <div className='flex justify - between items - start mb - 2'>;'
</div>'
                <div className='flex items - center gap - 2'>;'
</div>'
                  <AvatarPrimitive className='h - 8 w - 8'>;'
</AvatarPrimitive>
                      <Image;
                        src={application.talent_profile.profile_picture_url}
                        alt={candidate_name}
                        width={32} // Match h - 8 w - 8;
                        height={32} // Match h - 8 w - 8;'
                        className='rounded - full object - cover' // Ensure rounded and object - cover;')
                        on_error={() => setAvatarError (true)}                        priority={false} // Avatars are usually not LCP;
</Image>'
                      <User className='h - 4 w - 4' />)}'
</User>
                  </AvatarPrimitive>;
                  <div>;
</div>'
                    <h4 className='font - medium text - sm'>{candidate_name}</h4>;''
                    <p className='text - xs text - muted - foreground'>;'
</p>
                    </p>;
                  </div>;
                </div>;
                <DropdownMenu>;
</DropdownMenu>
                  <DropdownMenuTrigger as_child>;
</DropdownMenuTrigger>'
                    <Button variant='ghost' className='h - 8 w - 8 p - 0'>;'
</Button>'
                      <MoreVertical className='h - 4 w - 4' />;'
</MoreVertical>
                    </Button>;
                  </DropdownMenuTrigger>;'
                  <DropdownMenuContent align='end'>;'
</DropdownMenuContent>
                    <DropdownMenuItem on_click={() => setShowNotes (!show_notes)}>;
</DropdownMenuItem>
                    </DropdownMenuItem>;
                    <DropdownMenuItem on_click={() => setShowHireModal (true)}>;
</DropdownMenuItem>
                      <BriefcaseIcon;'
                        className='h - 4 w - 4 mr - 2';''
                        aria - hidden='true';''
                      />{' '}'
</BriefcaseIcon>
                    </DropdownMenuItem>;
                    <DropdownMenuItem as_child>;
</DropdownMenuItem>
                      <Link;
                        href={`/messages?talent_id=${application.talent_id}`}
                      >;
</Link>
                      </Link>;
                    </DropdownMenuItem>;
                      <DropdownMenuItem as_child>;
</DropdownMenuItem>
                        <a;
                          href={application.resume.file_url}'
                          target='_blank';''
                          rel='noopener noreferrer';'
                        >;
</a>

                        </a>;
                      </DropdownMenuItem>)}
                  </DropdownMenuContent>;
                </DropdownMenu>;

              </div>;'
              <div className='flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2'>;'
</div>'
                <div className='flex items - center'>;'
</div>'
                  <Calendar className='h - 3 w - 3 mr - 1' />;'
</Calendar>
                </div>;'
                  <div className='flex items - center text - amber - 500'>;'
</div>'
                    <AlertTriangle className='h - 3 w - 3 mr - 1' />;'
</AlertTriangle>
                  </div>)}
              </div>;'
                  <div className='mb - 2'>;'
</div>
                    <ScoreBadge application={application} />;
</ScoreBadge>
                  </div>)}'
                <div className='mt - 2'>;'
</div>
                  <Textarea;'
                    placeholder='Add private notes about this candidate...';''
                    className='text - xs min - h-[60px]';'
                    value={notes}
                    on_change={e => set_notes (e.target.value)}                  />;
</Textarea>'
                  <div className='flex justify - end mt - 2'>;'
</div>'
                    <Button size='sm' on_click={handleSaveNotes}>;'
</Button>
                    </Button>;
                  </div>;
                </div>)}'
              <div className='flex justify - between mt - 2 gap - 1'>;'
</div>'
                <Button variant='outline' size='sm' className='flex - 1' as_child>;'
</Button>
                  <Link href={`/messages?talent_id=${application.talent_id}`}>;
</Link>'
                    <MessageSquare className='h - 3 w - 3 mr - 1' /> Message;'
</MessageSquare>
                  </Link>;
                </Button>;'
                <Button variant='outline' size='sm' className='flex - 1' as_child>;'
</Button>
                    <a;
                      href={application.resume.file_url}'
                      target='_blank';''
                      rel='noopener noreferrer';'
                    >;
</a>'
                      <FileText className='h - 3 w - 3 mr - 1' /> Resume;'
</FileText>
                    </a>) : (
                    <span>;
</span>'
                      <FileText className='h - 3 w - 3 mr - 1' /> No Resume;'
</FileText>)
                    </span>)}
                </Button>;
                <Button;'
                  variant='default';''
                  size='sm';''
                  className='flex - 1';'
                  on_click={() => setShowHireModal (true)}                >;
</Button>'
                  <BriefcaseIcon className='h - 3 w - 3 mr - 1' /> Hire;'
</BriefcaseIcon>

                </Button>;
              </div>;
            </CardContent>;
          </Card>)}
      </Draggable>;
      <HireConfirmationModal;

        is_open = {showHireModal, }
        on_close = {() => setShowHireModal (false), }
</HireConfirmationModal>
    </>);
'
  //Here you would save the notes to the database //For now, we'll just show a toast toast ({')
  setShowNotes (false);
}
  //Hiring process completed via the modal toast ({

  application.id;
}index= {
  index;
}> {)'
  (provided) => (<Card className="mb - 2 p - 0 shadow - sm border" ref= {"
  provided.inner_ref;
}{
  ...provided.draggable_props;
}{"
  ...provided.dragHandleProps ";""
}> <CardContent className="p - 3"> {"
</Card>"
}<div className="flex justify - between items - start mb - 2"> <div className="flex items - center gap - 2"> <AvatarPrimitive className="h - 8 w - 8"> {"
</div>
  application.talent profile?.profile picture url && !avatar_error ? (<Image src= {
  application.talent profile.profile picture url;
}alt= {
  candidate_name;
}width= {
  32;
}//Match h - 8 w - 8 height= {"
  32 ";""
}//Match h - 8 w - 8 className="rounded - full object - cover" //Ensure rounded and object - cover on_error= {")
  () => setAvatarError (true);
</Image>"
}//Avatars are usually not LCP />) : (<User className="h - 4 w - 4" />) ";"
</User>"
}</AvatarPrimitive> <div> <h4 className="font - medium text - sm"> {"
</div>"
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger as_child> <Button variant="ghost" className="h - 8 w - 8 p - 0"> <MoreVertical className="h - 4 w - 4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem as_child> <Link href= {"
</DropdownMenu>
}> Message </Link> </DropdownMenuItem> {
  application.resume?.file url && (<DropdownMenuItem as_child> <a href= {
</DropdownMenuItem>)"
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>);"
}</DropdownMenuContent> </DropdownMenu> </div> {"
}<div className="flex flex - wrap gap - 2 items - center text - xs text - muted - foreground mb - 2"> <div className="flex items - center"> <Calendar className="h - 3 w - 3 mr - 1" /> {"
</div>
    </>;
  );
"
  //Here you would save the notes to the database //For now, we'll just show a toast toast ({;')
  setShowNotes (false);
};
  //Hiring process completed via the modal toast ({;
  application && application.id ;
}index= {;
  index ;
}> {;)'
  (provided) => (<CardclassName="mb-2 p-0 shadow-sm border" ref= {"
  provided && provided.innerRef;
}{
  ...provided && provided.draggableProps;
}{"
  ...provided && provided.dragHandleProps """
}> <CardContent className="p-3"> {;"
</CardclassName>"
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <AvatarPrimitive className="h-8 w-8"> {;"
</div>
  application && application.talent profile?.profile picture url && !avatarError ? (<Imagesrc= {
  application && application.talent profile && profile.profile picture url;
}alt= {
  candidateName;
}width= {
  32;
}//Match h-8 w-8 height= {"
  32 """
}//Match h-8 w-8 className="rounded-full object-cover" //Ensure rounded and object-cover onError= {")
  () => setAvatarError (true) ;
</Imagesrc>"
}//Avatars are usually not LCP />) : (<User className="h-4 w-4" />) ";"
</User>"
}</AvatarPrimitive> <div> <h4 className="font-medium text-sm"> {;"
</div>"
}</h4> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem asChild> <Linkhref= {"
</DropdownMenu>
}> Message </Link> </DropdownMenuItem> {;
  application && application.resume?.file url && (<DropdownMenuItem asChild> <ahref= {
</DropdownMenuItem>)"
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>) ;"
}</DropdownMenuContent> </DropdownMenu> </div> {;"
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {;"
</div>"
}</div> {";""
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>) ;"
}</div> {;"
  application && application.match score !== null && application && application.match score !== undefined && (<div className="mb-2"> <ScoreBadgeapplication= {"
</div>)"
}/> </div>) ";""
}<Textareaplaceholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {"
  notes;
}onChange= {
  (e) => setNotes (e && e.target.value) ;
</Textareaplaceholder>"
}/> </div> </div>) ";""
}<Button variant="outline" size="sm" className="flex-1" asChild > </Link> </Button> <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) ";""
}</Button> <Buttonvariant="default" size="sm" className="flex-1" onClick={""
  () => setShowHireModal (true) ";"
</Buttonvariant>"
}> <BriefcaseIcon className="h-3 w-3 mr-1" /> Hire </Button> </div> </CardContent> </Card>) ;"
</BriefcaseIcon>
}</Draggable> {;
}<HireConfirmationModalisOpen= {
  showHireModal;
}onClose= {
  () => setShowHireModal (false) ;
</HireConfirmationModalisOpen>
}/> </>) ;"
}'"}"
  add_suffix: true;
});"
}</div> {";""
  is_stalled && (<div className="flex items - center text - amber - 500"> <AlertTriangle className="h - 3 w - 3 mr - 1" /> Stalled </div>);"
}</div> {"
  application.match score !== null && application.match score !== undefined && (<div className="mb - 2"> <ScoreBadge application= {"
</div>)"
}/> </div>) ";""
}<Textarea placeholder="Add private notes about this candidate..." className="text - xs min - h-[60px]" value= {"
  notes;
}on_change= {
  (e) => set_notes (e.target.value);
</Textarea>"
}/> </div> </div>) ";""
}<Button variant="outline" size="sm" className="flex - 1" as_child > </Link> </Button> <Button variant="outline" size="sm" className="flex - 1" as_child > <FileText className="h - 3 w - 3 mr - 1" /> Resume </Link>) : (<span> <FileText className="h - 3 w - 3 mr - 1" /> No Resume </span>) ";""
}</Button> <Button variant="default" size="sm" className="flex - 1" on_click={""
  () => setShowHireModal (true) ";"
</Button>"
}> <BriefcaseIcon className="h - 3 w - 3 mr - 1" /> Hire </Button> </div> </CardContent> </Card>);"
</BriefcaseIcon>
}</Draggable> {
}<HireConfirmationModal is_open= {
  showHireModal;
}on_close= {
  () => setShowHireModal (false);
</HireConfirmationModal>
}/> </>);"
}'"}"
      </Draggable>;
      <HireConfirmationModal;
        isOpen={showHireModal}
        onClose={() => setShowHireModal(false)}
</HireConfirmationModal>
    </>;
  );
}
;"

