/* eslint-disable */
 import {;
  {;
  {;
  Star ;
}from 'lucide-react' interface SaveTalentButtonProps {;
  talentId: string;
onSave: (talentId: string) => void;
isSaved: boolean ;
}talentId, onSave, isSaved ;
}: SaveTalentButtonProps) {;
  return (<Button onClick={;
  () => onSave (talentId) ;'
}> <Star className= {;''
  `h-4 w-4 $ {';''
  isSaved ? 'fill-current' : '' ;'`
}mr-1` ;''
}/> {';''
  isSaved ? 'Saved': 'Save' ;'
}</Button>) ;''
}'''`