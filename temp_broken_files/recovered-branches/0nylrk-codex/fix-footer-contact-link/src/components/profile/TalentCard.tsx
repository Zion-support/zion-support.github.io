 export interface TalentCardProps {
  talent: TalentProfile;
onViewProfile: (id: string) => void;
onRequestHire: (talent: TalentProfile) => void;
isSaved: boolean;
onToggleSave: (id: string, isSaved: boolean) => void;
isAuthenticated: boolean 
}talent, onViewProfile, onRequestHire, isSaved, onToggleSave, isAuthenticated 
}: TalentCardProps) {
  const handleViewProfile = () => {
  if (onViewProfile) {
  </div>) 
}</div> </Button> </div> <p className="text-zion-cyan font-medium"> {
  talent.professional title 
}</p> {
  /* Location & Availability */ 
}<div className="mt-2 flex flex-wrap gap-3 text-sm"> {
  talent.location && (<div className="flex items-center text-zion-slate-light"> <MapPin className="h-4 w-4 mr-1" /> <span> {
  talent.location 
}</span> </div>) 
}{
  talent.availability type && (<div className="flex items-center text-zion-slate-light"> <Clock className="h-4 w-4 mr-1" /> <span> {
  talent.availability type 
}</span> </div>) 
}</div> </div> </div> {
  /* Skills */ 
}{
  skills.length > 0 && (<div className="mt-4"> <div className="flex flex-wrap gap-2"> {
  skills.map ( (skill, index) => (<span key= {
  index 
}className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light" > {
  skill 
}</span>) ) 
}{
  (talent.skills?.length || 0) > 5 && (<span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan"> + {
  (talent.skills?.length || 0) - 5 
}more </span>) 
}</div> </div>) 
}{
  /* Hourly Rate & Actions */ 
}<div className="mt-5 flex items-center justify-between"> <div> {
  talent.hourly rate ? (<div className="text-white font-bold"> $ {
  talent.hourly rate 
}<span className="text-zion-slate-light font-normal">/hr</span> </div>) : (<div className="text-zion-slate-light">Rate not specified</div>) 
}</div> <Button size="sm" variant="secondary" onClick= {
  handleRequestHire 
}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) 
}<Button > View <ArrowRight className="ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) 
}