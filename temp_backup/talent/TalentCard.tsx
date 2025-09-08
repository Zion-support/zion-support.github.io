/* eslint-disable */
 export interface TalentCardProps {;
  talent: TalentProfile;
onViewProfile: (id: string) => void;
onRequestHire: (talent: TalentProfile) => void;
isAuthenticated: boolean ;
}const TalentCardComponent = ({;
  talent;
onViewProfile;
onRequestHire;
isAuthenticated ;
}: TalentCardProps) => {;
  const router = useRouter ();
//Navigate directly to the talent profile router.push (`/talent/$ {;
  talent.id ;`
}`);
//Also call the onViewProfile callback if provided </div>) ;
}</div> <span> {;
  talent.availability type ;
}</span> </div>) ;
}</div> </div> </div> <span key= {;
  index ;
}className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light" > {;
  skill ;
}</span>) ) ;
}+ {;
  (talent.skills?.length || 0) - 5 ;
}more </span>) ;
}</div> </div>) ;"
}$ {;""
  talent.hourly rate ";""
}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) : (<div className="text-zion-slate-light" >Rate not specified</div>) ";""
}</div> <Button size="sm" variant="secondary" onClick={;""
  handleRequestHire ";""
}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) ";""
}<Button ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) ;"
};""
"""`