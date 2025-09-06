 interface InterviewResponseFormProps {
  interview: Interview;
onConfirm: () => Promise<void>;
onClose: () => void;
isLoading: boolean 
}export function InterviewResponseForm ({
  interview, onConfirm, onClose, isLoading 
}: InterviewResponseFormProps) {
  //Format interview date and time const interviewDate = parseISO (interview.scheduled date);
const formattedDate = format (interviewDate, 'EEEE, MMMM d');
const formattedTime = format (interviewDate, 'h: mm a');
//Calculate when interview ends const endTime = new Date (interviewDate);
endTime.setMinutes (endTime.getMinutes () + interview.duration minutes);
const formattedEndTime = format (endTime, 'h: mm a');
return (<div className="space-y-4" > <div className="p-4 bg-zion-blue-light/20 rounded-md" > <h3 className="font-medium text-lg mb-2" > {
  interview.title 
}</h3> <p className="text-sm text-zion-slate-light mb-4" > Interview requested by {
  interview.client name || 'Client' 
}</p> <div className="grid gap-3" > <div className="flex items-center gap-3" > <div className="w-24 text-sm text-zion-slate-light" >Date:</div> <div> {
  formattedDate 
}</div> </div> <div className="flex items-center gap-3" > <div className="w-24 text-sm text-zion-slate-light" >Time:</div> <div> {
  formattedTime 
}- {
  formattedEndTime 
}</div> </div> <div className="flex items-center gap-3" > <div className="w-24 text-sm text-zion-slate-light" >Duration:</div> <div> {
  interview.duration minutes 
}minutes</div> </div> {
  interview.meeting platform && (<div className="flex items-center gap-3" > <div className="w-24 text-sm text-zion-slate-light" >Platform:</div> <div className="capitalize" > {
  interview.meeting platform 
}</div> </div>) 
}{
  interview.notes && (<div className="flex gap-3" > <div className="w-24 text-sm text-zion-slate-light" >Notes:</div> <div className="text-sm" > {
  interview.notes 
}</div> 
}</div> </div> </Button> </div> </div>) 
}