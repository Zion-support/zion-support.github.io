/* eslint-disable */
 export interface TalentCardProps {;
  talent: TalentProfile;
onViewProfile: (id: string) => void;
onRequestHire: (talent: TalentProfile) => void;
isSaved: boolean;
onToggleSave: (id: string, isSaved: boolean) => void;
isAuthenticated: boolean ;
}export function TalentCard ({;
  talent;
onViewProfile;
onRequestHire;
isSaved;
onToggleSave;
isAuthenticated ;
}: TalentCardProps) {;
  const [avatarError, setAvatarError] = useState (false);
if (onViewProfile) {;
  return (<Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={;""
  handleViewProfile ";""
}> <div className="p-6" > <div className="flex items-start" > <div className="relative mr-4" > <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative" > {;
  /* Added relative for Image */ ;
}{;
  talent.profile picture url && !avatarError ? (<Image src= {;
  talent.profile picture url ;
}alt= {;
  talent.full name || 'Talent Avatar' ;
}fill= {;
  true ;'
}style= {;''
  {';''"
  objectFit: 'cover' ;""
}";""
}className="rounded-full" //Make sure image itself is rounded if fill is used in a rounded container onError= {;
  () => setAvatarError (true) ;"
}priority= {;""
  false ";""
}/>) : (<div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold" > {;
  talentNameInitial ;"
}</div>) ;""
}</div> {";""
  talent.is verified && (<div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full" > <CheckCircle2 className="w-5 h-5 text-zion-cyan" /> ";""
}</div> </Button> </div> <p className="text-zion-cyan font-medium"> {;""
  talent.professional title ";""
}</p> <div className="mt-2 flex flex-wrap gap-3 text-sm"> {";""
  talent.location && (<div className="flex items-center text-zion-slate-light"> <MapPin className="h-4 w-4 mr-1" /> <span> {;
  talent.location ;"
}</span> </div>) ;""
}{";""
  talent.availability type && (<div className="flex items-center text-zion-slate-light"> <Clock className="h-4 w-4 mr-1" /> <span> {;
  talent.availability type ;"
}</span> </div>) ;""
}</div> </div> </div> {";""
  skills.length > 0 && (<div className="mt-4"> <div className="flex flex-wrap gap-2"> {;"
  skills.map ( (skill, index) => (<span key= {;""
  index ";""
}className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light" > {;
  skill ;"
}</span>) ) ;""
}{";""
  (talent.skills?.length || 0) > 5 && (<span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan"> + {;
  (talent.skills?.length || 0) - 5 ;"
}more </span>) ;""
}</div> </div>) ";""
}<div className="mt-5 flex items-center justify-between"> <div> {";""
  talent.hourly rate ? (<div className="text-white font-bold"> $ {;""
  talent.hourly rate ";""
}<span className="text-zion-slate-light font-normal">/hr</span> </div>) : (<div className="text-zion-slate-light">Rate not specified</div>) ";""
}</div> <Button size="sm" variant="secondary" onClick={;""
  handleRequestHire ";""
}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) ";"'"
}<Button > View <ArrowRight className="ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) ;'"'"
}'"'"'"