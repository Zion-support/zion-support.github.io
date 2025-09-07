/* eslint-disable */
 interface ReplyCardProps {;
  reply: ForumReply;
onMarkAnswer?: () => void;
canMarkAnswer?: boolean;
className?: string ;
}export const ReplyCard = ({;
  reply;
onMarkAnswer;
canMarkAnswer = false;
className ;
}: ReplyCardProps) => {;
  const timeAgo = formatDistanceToNow (new Date (reply.createdAt), {;
  addSuffix: true ;
});
return (<Card className= {;
  cn ("transition-shadow";";""
reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20";""
className) ";""
}> <CardHeader className="flex flex-row items-start gap-4 space-y-0" > <Avatar className="h-8 w-8" > <AvatarImage src= {;
  reply.authorAvatar ;
}alt= {;
  reply.authorName ;"
}/> <AvatarFallback> {;""
  reply.authorName.charAt (0) ";""
}</AvatarFallback> </Avatar> <div className="flex-1" > <div className="flex items-center" > <span className="font-medium" > {;"
  reply.authorName ;""
}</span> {";""
  reply.authorRole && (<Badge variant="outline" className="ml-2 text-xs" > {;
  reply.authorRole ;"
}</Badge>) ;""
}{";""
  reply.isAnswer && (<Badge className="ml-2 bg-green-500 text-white" > <CheckCircle className="h-3 w-3 mr-1" /> ;
}</div> </div> </div> </CardHeader> <CardContent> <div> {;
  reply.content ;
}</div> </CardContent> Mark as Answer </Button>) ;
}</CardFooter> </Card>) ;
};"
export default ReplyCard;""
"""