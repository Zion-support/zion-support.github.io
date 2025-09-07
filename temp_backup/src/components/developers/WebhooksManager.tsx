/* eslint-disable */
 export function WebhooksManager () {;
  const {;
  webhooks;
loading;
testResult;
fetchWebhooks;
createWebhook;
toggleWebhook;
deleteWebhook;
testWebhook;
clearTestResult ;
}= useWebhooks ();
const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null> (null);
const [showTestDialog, setShowTestDialog] = useState<string | null> (null);
const [showTestResult, setShowTestResult] = useState (false);
//Create webhook form state //Load webhooks on mount await createWebhook (webhookName;
webhookUrl;
selectedEvents;
);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Event type options const eventOptions: {;
>>>>>>> origin/resolved-merge-conflicts
  value: WebhookEventType,  label: string, description: string ;
}[] = [ {;
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job' ;'
};''
{';''
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent' ;'
};''
{';''
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved' ;'
};''
{';''
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project' ;
}];
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {;""
  20 ";""
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {;
  showCreateDialog ;"
}onOpenChange= {;""
  setShowCreateDialog ";""
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {;"
  eventOptions.map ( (event) => (<div key= {;""
  event.value ";""
}className="flex items-center space-x-2"> <Checkbox id= {;
  event.value ;
}checked= {;
  selectedEvents.includes (event.value) ;
}onCheckedChange= {;
  () => toggleEvent (event.value) ;"
}/> <Label htmlFor= {;""
  event.value ";""
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) ) ;
}</div> </div> </div> <DialogFooter> ;
}
}> Cancel </Button> <Button onClick={;"
  handleCreateWebhook ;""
}disabled= {";""
  webhookName.trim () === ""|| ;"
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {;""
  /* Webhooks List */ ";""
}<div className="space-y-4"> {";""
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {;""
  24 ";""
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {;""
  webhook.id ";""
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {;""
  webhook.name ";""
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {;""
  14 ";""
}className="mr-1"/> <span className="max-w-md truncate"> {;""
  webhook.url ";""
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={;""
  () => setShowTestDialog (webhook.id) ";""
}className="cursor-pointer"> <PlayCircle size= {;""
  14 ";""
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick={;""
  () => setShowDeleteConfirm (webhook.id) ";""
}className="cursor-pointer text-red-500"> <X size= {;""
  14 ";""
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {;""
  event ";""
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {;"
  event ;"'"
}</Badge>) ) ";'"'"
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {';''
  format (new Date (webhook.created at),  'MMM d, yyyy') ;'
}</span> {;''
  webhook.last triggered at && (<span>Last triggered: {';''
  format (new Date (webhook.last triggered at),  'MMM d, yyyy HH:mm') ;"
}</span>) ;""
}</div> </div>) ) ) ";""
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {;
  /* Test Webhook Dialog */ ;
}<Dialog open= {;
  showTestDialog !== null ;
}onOpenChange= {;
  (open) => {;'
  if (!open) {;''
  setShowTestDialog (null);';''
setTestEventType ('new application');
if (showTestResult) {;"
}""
}";""
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {";""
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {;
  testEventType ;"
}onValueChange= {;""
  (value) => setTestEventType (value as WebhookEventType) ";""
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {;
  eventOptions.map ( (option) => (<SelectItem key= {;
  option.value ;
}value= {;
  option.value ;
}> {;"
  option.label ;""
}</SelectItem>) ) ";""
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={;""
  () => showTestDialog && handleTestWebhook (showTestDialog) ";""
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {;
  testResult?.status ;"
}{;""
  testResult?.statusText ";""
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null);
setShowTestResult (false);
clearTestResult ();
}
}> Close </Button> Test Another Event </Button> </DialogFooter> </>) ;
}</DialogContent> </Dialog> {;
  /* Delete Webhook Confirmation Dialog */ ;
}<AlertDialog open= {;
  showDeleteConfirm !== null ;"
}onOpenChange= {;""
  (open) => !open && setShowDeleteConfirm (null) ";"'"
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;'"'"
}'"'"'"