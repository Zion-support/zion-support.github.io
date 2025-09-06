 import {
  MessageSquare;
User;
FileText;
MoreVertical;
Calendar;
AlertTriangle;
BriefcaseIcon import {
  DropdownMenu;
DropdownMenuContent;
DropdownMenuItem;
interface CandidateCardProps {
  application: JobApplication;
index: number 
}export function CandidateCard ({
  application, index 
}: CandidateCardProps) {
  const handleSaveNotes = () => {
  //Here you would save the notes to the database //For now, we'll just show a toast toast ({
  setShowNotes (false);
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const handleHireConfirmed = () => {
  //Hiring process completed via the modal toast ({
  
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 return (<> <Draggable draggableId= {
  application.id 
}index= {
  index 
}> {
  (provided) => (<Card className="mb-2 p-0 shadow-sm border" ref= {
  provided.innerRef 
}{
  ...provided.draggableProps 
}{
  ...provided.dragHandleProps 
}> <CardContent className="p-3"> {
  /* Candidate Header */ 
}<div className="flex justify-between items-start mb-2"> <div className="flex items-center gap-2"> <Avatar className="h-8 w-8"> {
  application.talent profile?.profile picture url ? (<img src= {
  application.talent profile.profile picture url 
}alt= {
  application.talent profile.full name || "Candidate" 
}/>) : (<User className="h-4 w-4" />) 
}</Avatar> <div> </p> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" className="h-8 w-8 p-0"> <MoreVertical className="h-4 w-4" /> </Button> </DropdownMenuTrigger> </DropdownMenuItem> <DropdownMenuItem onClick= {
  () => setShowHireModal (true) 
}> <BriefcaseIcon className="h-4 w-4 mr-2" /> Hire Candidate </DropdownMenuItem> <DropdownMenuItem asChild> <Link to= {
  `/messages?talentId=$ {
  application.talent id 
}` 
}> Message </Link> </DropdownMenuItem> {
  application.resume?.file url && (<DropdownMenuItem asChild> <a href= {
  application.resume.file url 
}target="blank" rel="noopener noreferrer"> View Resume </Link> </DropdownMenuItem>) 
}</DropdownMenuContent> </DropdownMenu> </div> {
  /* Application Info */ 
}<div className="flex flex-wrap gap-2 items-center text-xs text-muted-foreground mb-2"> <div className="flex items-center"> <Calendar className="h-3 w-3 mr-1" /> {
  formatDistanceToNow (new Date (application.created at), {
  addSuffix: true 
}) 
}</div> {
  isStalled && (<div className="flex items-center text-amber-500"> <AlertTriangle className="h-3 w-3 mr-1" /> Stalled </div>) 
}</div> {
  /* Match Score */ 
}{
  application.match score !== null && application.match score !== undefined && (<div className="mb-2"> <ScoreBadge application= {
  application 
}/> </div>) 
}<Textarea placeholder="Add private notes about this candidate..." className="text-xs min-h-[60px]" value= {
  notes 
}onChange= {
  (e) => setNotes (e.target.value) 
}/> </div> </div>) 
}<Button variant="outline" size="sm" className="flex-1" asChild > </Link> </Button> <Button variant="outline" size="sm" className="flex-1" asChild > <FileText className="h-3 w-3 mr-1" /> Resume </Link>) : (<span> <FileText className="h-3 w-3 mr-1" /> No Resume </span>) 
}</Button> <Button variant="default" size="sm" className="flex-1" onClick= {
  () => setShowHireModal (true) 
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
}