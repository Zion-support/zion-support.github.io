/* eslint-disable */
 export function DisputeDetail () {;
  const router = useRouter ();
const {;
  disputeId ;
}= router.query as {;
  disputeId?: string ;
};
const {;
  user ;
}= useAuth ();
const {;
  getDisputeById, updateDisputeStatus, resolveDispute,  getDisputeMessages, addDisputeMessage ;
}= useDisputes ();
overview");
//Check if user is admin (placeholder - implement proper admin check) ;
}setDispute (disputeData);
const messagesData = await getDisputeMessages (disputeId);
setMessages (messagesData) ;
}catch (error) {;
}finally {;
  setIsLoading (false) ;
}

const success = await resolveDispute(disputeId, {resolution_type:;}
        (resolution.resolution_type as ResolutionType) |'compromise';}
    })if (success && dispute) {setDispute({})} else {toast.error('Failed to resolve dispute')}
  }

const handleSendMessage = async () => {setIsSending(true)try ;
  const success = await addDisputeMessage(disputeId, message, isAdmin)if (success) {// Refresh messages;}
}
};
const handleResolveDispute = async () => {;
  if (!disputeId) return;
if (!resolution.summary) {;
}const success = await resolveDispute (disputeId, {;
  summary: resolution.summary;
if (success && dispute) {;
  setDispute ({;
  ...dispute;
resolution summary: resolution.summary;
resolution type: resolution.resolution type;
resolved at: new Date () .toISOString () ;
}) ;
}else {;
}
};
const handleSendMessage = async () => {;
  if (!disputeId || !message.trim () ) return;
try {;
}
}catch (error) {;
  logErrorToProduction ('Error sending message:', {;
  data: error ;
}) ;
}finally {;
  setIsSending (false) ;
}"
};""
if (isLoading) {";""
  return (<div className=" p-8 text-center"> <div className=" w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div> <p>Loading dispute details...</p> </div>) ;""
}if (!dispute) {";""
  return (<div className=" p-8 text-center"> () => router.push (" /dashboard/disputes") ";""
}className=" mt-4"> Back to Disputes </Button> </div>) ;
}"
}""
};";""
container mx-auto p-4 space-y-6" > <div className="flex flex-wrap items-center justify-between gap-4" > <div> Start Review </Button>) ";""
}</div> </div> <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900"> <Check className="h-4 w-4" /> <AlertTitle>This dispute has been resolved</AlertTitle> <AlertDescription> {;"
  dispute.resolution summary ;""
}</AlertDescription> </Alert>) ";""
}<div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className="lg:col-span-2"> </TabsList> <TabsContent value="overview" className="space-y-6"> <Card> <CardHeader> <CardTitle>Dispute Details</CardTitle> <CardDescription>Information about this dispute case</CardDescription> </CardHeader> <CardContent className="space-y-4"> <div> <h3 className="font-medium">Reason</h3> <p> {;""
  disputeReasonLabels[ dispute.reason code ] ?? dispute.reason code ";""
}</p> </div> <div> <h3 className="font-medium">Description</h3> <p className="whitespace-pre-wrap"> {;"
  dispute.description ;""
}</p> </div> <div> </div> {";""
  dispute.milestone id && (<div> <h3 className="font-medium">Related Milestone</h3> <p className="text-sm">Milestone ID: {;"
  dispute.milestone id ;""
}</p> </div>) ";""
}<div> <h3 className="font-medium">Timeline</h3> <ul className="space-y-2 mt-2"> <span>Under review</span> </li>) ;""
}</li>) ";""
}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Resolution</CardTitle> </CardHeader> <CardContent> <p className="whitespace-pre-wrap"> {;
  dispute.resolution summary ;"
}</p> </Badge> </div>) ;""
}</CardContent> </Card>) ";""
}</TabsContent> <TabsContent value="messages" className="space-y-6"> <Card> <CardHeader> <CardTitle>Messages</CardTitle> <CardDescription>Communication regarding this dispute</CardDescription> </CardHeader> <CardContent> <div className="space-y-6 max-h-[600px] overflow-y-auto p-2"> {";""
  messages.length === 0 ? (<div className="text-center py-12"> <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground">No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note) return (<div key= {;
  msg.id ;'
}className= {;''
  `flex $ {';''
  isCurrentUser ? 'justify-end' : 'justify-start' ;`
}` ;'
}> <div className= {;''`
  `max-w-[80%] $ {';''"
  isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted' ;""`
}p-4 rounded-lg` ";""
}> <div className="flex items-center gap-2 mb-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {;"
  msg.user profile?.avatar url ;""
}alt= {";"'"
  msg.user profile?.display name || "User avatar" ;''"
}/> <AvatarFallback> {';'"'"
  msg.user profile?.display name?.[0] || '?' ";'"'"
}</AvatarFallback> </Avatar> <span className="text-sm font-medium"> {';'"'"
  msg.user profile?.display name || 'Unknown User' ";'"'"
}</span> <span className="text-xs opacity-70"> {';'"'"
  format (new Date (msg.created at),  'MMM d, h:mm a') ";""
}</span> </div> <p className="whitespace-pre-wrap"> {;
  msg.message ;"
}</p> </div> </div>) ;""
}) ) ";""
}</div> </CardContent> <CardFooter> <div className="w-full space-y-4" > <Textarea className="min-h-[100px]" disabled= {;""
  isSending ";""
}/> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle>Attachments</CardTitle> <CardDescription>Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className="text-center py-12"> <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground" >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle>Admin Actions</CardTitle> <CardDescription>Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className="space-y-6"> <div> <h3 className="font-medium mb-2">Change Status</h3> <div className="flex gap-2" > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className="font-medium mb-2">Resolve Dispute</h3> <div className="space-y-4" > <Textarea placeholder="Enter resolution summary..." value= {;
  resolution.summary ;
}onChange= {;
  (e) => setResolution ({;'"
  ...resolution, summary: e.target.value ;'"'"
}) '";'"'"
}className="min-h-[100px]" /> <div className="grid grid-cols-2 gap-4"> <div> <label className="text-sm font-medium mb-1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor</option> <option value="talent favor" >In Talent's Favor</option> <option value="compromise" >Compromise</option> <option value="dismissed" >Dismissed</option> </select> </div> </div> <Button onClick={;
  handleResolveDispute ;'
}>Resolve Dispute</Button> </div> </div>) ;''
}<div> <AvatarFallback> {';''"
  msg.user profile?.display name?.[0] || 'A' ;""
}</AvatarFallback> </Avatar>) ";""
}</div> <Separator className="my-4" /> <div className="space-y-4" > <Textarea ;
}"
}""
}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>) ";""
}</Tabs> </div> <div className="space-y-6"> <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> <CardContent className="space-y-6"> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {;"
  dispute.client profile?.avatar url ;""
}alt= {";""
  dispute.client profile?.display name || "Client avatar" ";""
}/> <AvatarFallback>C</AvatarFallback> </Avatar> <div> <p className="font-medium">Client</p> </p> </div> </div> <div className="flex justify-center"> <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {;"
  dispute.talent profile?.avatar url ;""
}alt= {";""
  dispute.talent profile?.display name || "Talent avatar" ";""
}/> <AvatarFallback>T</AvatarFallback> </Avatar> <div> <p className="font-medium">Talent</p> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Case Information</CardTitle> </CardHeader> <CardContent className="space-y-4 text-sm"> <div className="flex justify-between"> <span className="font-medium">Case ID:</span> <span className="font-mono"> {;""
  dispute.id ";"'"
}</span> </div> <div className="flex justify-between"> </div> </CardContent> </Card> </div> </div> </div>) ;'"'"
}'"'"'"`