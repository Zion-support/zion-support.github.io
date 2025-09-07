/* eslint-disable */
 import {;
  {;
  {;
  Check, Pencil ;
}from 'lucide-react' interface GeneratedDescriptionDisplayProps {;
  description: string;
onSave: (editedDescription: string) => void ;
}export function GeneratedDescriptionDisplay ({;
  description;
onSave ;
}: GeneratedDescriptionDisplayProps) {;
  const {;
  toast ;
}= useToast ();
const [isEditing, setIsEditing] = useState (false);
const [editedDescription, setEditedDescription] = useState (description);
const handleSave = () => {;
  onSave (editedDescription);
setIsEditing (false);
toast ({;
};
  isEditing ? (<> <Check className="h-4 w-4 mr-1" /> Done </>) : (<> <Pencil className="h-4 w-4 mr-1" /> Edit </>) ;
}</Button> </CardTitle> </CardHeader> <CardContent> {;
  isEditing ? (<Textarea value= {;
  editedDescription ;
}</div>) ;
}</CardContent> {;"
  isEditing && (<CardFooter> <Button onClick={;""
  handleSave ";""
}className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white" > Save Changes </Button> </CardFooter>) ;'"
}</Card>) ;'"'"
}'"'"'"