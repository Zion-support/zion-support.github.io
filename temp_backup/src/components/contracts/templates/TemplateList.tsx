/* eslint-disable */
 //useRouter replaces the old useLocation hook from react-router import {;
  {;
  {;
  useRouter ;
}from 'next/router';
import {;
  AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;
  AlertDialogTitle} from "@/components/ui/alert-dialog",
import { useState } from "react";
interface TemplateListProps {
  templates: ContractTemplate[];
  isLoading: boolean;
  onSelect: (template: ContractTemplate) => void;
  onEdit: (template: ContractTemplate) => void
// useRouter replaces the old useLocation hook from react-router

  AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle} from "@/components/ui/alert-dialog"
import { useState } from "react"
interface TemplateListProps {
  templates: ContractTemplate[]
  isLoading: boolean
  onSelect: (template: ContractTemplate,) => void
  onEdit: (template: ContractTemplate,) => void

}
};
const handleSetDefault = async (templateId: string) => {;
  if (!user) {;
  const currentPath = router.asPath;
router.push (`/auth/login?returnTo=$ {;
  encodeURIComponent (currentPath) ;`
}`);
return ;
}await setDefaultTemplate.mutateAsync (templateId) ;
};
<CardContent className="p-4"> <div className="flex items-center justify-between"> <div className="space-y-1"> <div className="flex items-center gap-2"> <h3 className="font-medium"> {;"
  template.title ;""
}</h3> {";""
  template.is default && (<span className="bg-zion-purple/10 text-zion-purple text-xs px-2 py-0.5 rounded-full">Default</span>) ";""
}</div> <p className="text-xs text-muted-foreground"> Last updated: {;""
  new Date (template.updated at) .toLocaleDateString () ";""
}</p> </div> <div className="flex items-center gap-2" > <Button > <Edit className="h-4 w-4" /> </Button> {";""
  !template.is default ? (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button variant="ghost" size="icon" onClick={;""
  () => handleSetDefault (template.id) ";""
}aria-label="Set as default" > <Star className="h-4 w-4" /> </Button> </TooltipTrigger> {;""
  !user && (<TooltipContent> Please log in to use this feature </TooltipContent>) ";""
}</Tooltip> </TooltipProvider>) : (<Button variant="ghost" size="icon" disabled aria-label="Default template"> <StarOff className="h-4 w-4" /> </Button>) ";""
}<Button > <Trash className="h-4 w-4 text-destructive" /> </Button> </div> </div> <Separator className="my-3" /> <Button className="w-full" > Use This Template </Button> </CardContent> </Card>) ) ;
}<AlertDialog open= {;
  !!templateToDelete ;"
}onOpenChange= {;""
  () => setTemplateToDelete (null) ";""
}> <AlertDialogContent> <AlertDialogHeader> <AlertDialogTitle>Delete Template</AlertDialogTitle> <AlertDialogDescription> Are you sure you want to delete this template? This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel>Cancel</AlertDialogCancel> <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={;
  handleDeleteConfirm ;'"
}> Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </div>) ;'"'"
}'"'"'"`