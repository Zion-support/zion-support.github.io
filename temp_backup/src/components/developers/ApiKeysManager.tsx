/* eslint-disable */
 import {;
  {;
  {;
  Button ;
}from "@/components/ui/button";
import {;
  {;"
  {;""
  Card, CardContent, CardDescription, CardFooter,  CardHeader, CardTitle ";""
}from "@/components/ui/card";
import {;
  {;"
  {;""
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader,  DialogTitle, DialogTrigger ";""
}from "@/components/ui/dialog";
import {;
  {;"
  {;""
  Input ";""
}from "@/components/ui/input";
import {;
  {;"
  {;""
  Checkbox ";""
}from "@/components/ui/checkbox";
import {;
  {;"
  {;""
  Label ";""
}from "@/components/ui/label";
import {;
  {;"
  {;""
  Badge ";""
}from "@/components/ui/badge";
import {;
  {;"
  {;""
  Popover,  PopoverContent, PopoverTrigger ";""
}from "@/components/ui/popover";
import {;
  {;"
  {;""
  DropdownMenu, DropdownMenuContent,  DropdownMenuItem, DropdownMenuTrigger ";""
}from "@/components/ui/dropdown-menu";
import {;
  {;"
  {;""
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter,  AlertDialogHeader, AlertDialogTitle ";""
}from "@/components/ui/alert-dialog";
const [showCreateDialog, setShowCreateDialog] = useState (false);
const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null> (null);
const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null> (null);
//Create key form state //Load keys on mount await createApiKey (keyName, selectedScopes);"
setShowCreateDialog (false);""
//Toggle a scope selection const toggleScope = (scope: ApiKeyScope) => {";""
  setSelectedScopes (prev => prev.includes (scope) ? prev.filter (s => s !== scope) -H "Authorization: Bearer $ {;""
  key ";""
}" \\ -H "Content-Type: application/json"` ;"
};""
//Reset form when dialog closes const handleDialogClose = () => {";""
  setKeyName ("");
setSelectedScopes ([]);"
setShowCreateDialog (false) ;""
};";""`
<<<<<<< HEAD
=======
======= return `curl -X GET " https://api.ziontechgroup.com/v1/jobs"\\ -H " Authorization: Bearer $ {;""
>>>>>>> origin/resolved-merge-conflicts
  key ";""`
}"\\ -H " Content-Type: application/json"`;""
};";""
//Reset form when dialog closes </CardTitle> <CardDescription className=" text-zinc-400"> Create and manage API keys for accessing the Zion APIs. </CardDescription> </CardHeader> <CardContent> </p> <Dialog open= {;
  showCreateDialog ;"
}onOpenChange= {;""
  setShowCreateDialog ";""
}> <DialogTrigger asChild> <Button variant=" default">Create New API Key</Button> </DialogTrigger> <DialogContent className=" bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create API Key</DialogTitle> <DialogDescription className=" text-zinc-400"> Generate a new API key for accessing the Zion APIs. </DialogDescription> </DialogHeader> <div className=" space-y-4 py-4"> <div className=" space-y-2"> <Label htmlFor=" key-name">Key Name</Label> <Input /> </div> <div className=" space-y-2"> <Label>Scopes</Label> <Checkbox id= {;
  scope.value ;
}checked= {;
  selectedScopes.includes (scope.value) ;
}onCheckedChange= {;
  () => toggleScope (scope.value) ;
}/> <Label </Label> </div>) ) ;
}</div> </div> </div> <DialogFooter> Create Key </Button> </DialogFooter> </DialogContent> </Dialog> </div> {;"
  /* New API Key Alert */ ;""
}{";""
  newApiKey && (<div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md"> <div className="flex justify-between items-start mb-2"> <span className="font-medium flex items-center"> <Check size= {;""
  16 ";""
}className="mr-2 text-green-500"/> New API Key Generated </span> <Button variant=" ghost"size=" icon"className="h-6 w-6"onClick={;
  clearNewApiKey ;"
}> <X size= {;""
  14 ";""
}/> </Button> </div> <p className="text-sm text-zinc-300 mb-2"> This key will only be displayed once. Please save it securely. </p> <CodeBlock code= {;""
  newApiKey ";""
}className="mb-3"/> <div className="text-sm text-zinc-400"> <span className="font-medium">Example usage:</span> </div> </div>) ;"
}{;""
  /* API Keys List */ ";""
}<div className="space-y-4"> {";""
  loading ? (<div className="text-center py-8 text-zinc-500">Loading API keys...</div>) : keys.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Key className="mx-auto mb-2 opacity-30"size= {;""
  24 ";""
}/> <p>No API keys found.</p> <p className="text-sm mt-1">Create one to access the Zion APIs.</p> </div>) : (keys.map ( (key) => (<div key= {;""
  key.id ";""
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div className="flex items-center"> <div> <h3 className="font-medium"> {;""
  key.name ";""
}</h3> <div className="flex items-center space-x-2 mt-1">) : (<Badge variant=" secondary"className="bg-red-900 text-white border-red-800">Revoked</Badge>) ";""
}</div> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={;""
  () => setShowRegenerateConfirm (key.id) ";""
}className="cursor-pointer"disabled= {;
  !key.is active ;"
}> <RefreshCw size= {;""
  14 ";""
}className="mr-2"/> Regenerate </DropdownMenuItem> <DropdownMenuItem onClick={;""
  () => setShowDeleteConfirm (key.id) ";""
}className="cursor-pointer text-red-500"disabled= {;
  !key.is active ;"
}> <X size= {;""
  14 ";""
}className="mr-2"/> Revoke </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> <Badge key= {;""
  scope ";""
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {;"
  scope ;""
}</Badge>) ) ";""
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {;""
  format (new Date (key.created at),  'MMM d, yyyy') ";""
}</span> <Popover> <PopoverTrigger className="flex items-center hover:text-zinc-300"> <Clock size= {;"'"
  12 ";'"'"
}className="mr-1"/> Last used: {';'"'"
  key.last used at ? format (new Date (key.last used at),  'MMM d, yyyy') : 'Never' ";'"'"
}</PopoverTrigger> <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3"> <p className="text-sm mb-1">Last Used</p> <p className="text-xs text-zinc-400"> {';''
  key.last used at ? format (new Date (key.last used at),  'MMM d, yyyy HH:mm:ss') : 'This API key has never been used' ;'
}</p> </PopoverContent> </Popover> {;''
  key.expires at && (<span>Expires: {';''
  format (new Date (key.expires at),  'MMM d, yyyy') ;"
}</span>) ;""
}</div> </div>) ) ) ";""
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Keep your API keys secure. They have the same permissions as your account. </div> Refresh </Button> </CardFooter> {;
  /* Regenerate Key Confirmation Dialog */ ;
}<AlertDialog open= {;
  showRegenerateConfirm !== null ;"
}onOpenChange= {;""
  (open) => !open && setShowRegenerateConfirm (null) ";""
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will invalidate the existing key and generate a new one. Any applications using this key will need to be updated. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction onClick={;""
  () => showRegenerateConfirm && handleRegenerateKey (showRegenerateConfirm) ";""
}className="bg-blue-600 hover:bg-blue-700"> Regenerate </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> {;
  /* Delete Key Confirmation Dialog */ ;
}<AlertDialog open= {;
  showDeleteConfirm !== null ;"
}onOpenChange= {;""
  (open) => !open && setShowDeleteConfirm (null) ";"'"
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Revoke API Key?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will revoke the API key and it can no longer be used to access the API. This action cannot be undone. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Revoke </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;'"'"
}'"'"'"`