/* eslint-disable */
 interface PostCardProps {;
  post: ForumPost;
compact?: boolean ;
}const PostCardComponent = ({;
  post, compact = false ;
}: PostCardProps) => {;
  logInfo ('PostCardComponent rendering with post:', {';''
  data: post ? post.id : 'NO POST' ;
});
const timeAgo = formatDistanceToNow (new Date (post.createdAt), {;
  addSuffix: true ;
});
return (<Card data-testid="post-card" className= {";""
  cn ("transition-shadow hover:shadow-md";";""
post.isPinned && "border-zion-purple/50";";""
post.isFeatured && "bg-zion-purple/5") ;"
}> <p>DEBUG: PostCard ID: {;""
  post?.id ";""
}</p> <CardHeader className="flex flex-row items-start gap-4 space-y-0" > <Avatar className="h-10 w-10" > <AvatarImage src= {;
  post.authorAvatar ;
}alt= {;
  post.authorName ;"
}/> <AvatarFallback> {;""
  post.authorName.charAt (0) ";""
}</AvatarFallback> </Avatar> <div className="flex-1" > <div className="flex items-center" > <Link href= {;
  `/community/post/$ {;"
  post.id ;""`
}` ";""
}className="font-semibold text-lg hover:text-zion-purple transition-colors" > {;"
  post.title ;""
}</Link> {";""
  post.isAnswered && (<CheckCircle className="h-4 w-4 text-green-500 ml-2" />) ;""
}{";""
  post.isPinned && (<Pin className="h-4 w-4 text-amber-500 ml-2" />) ;""
}{";""
  post.isLocked && (<Lock className="h-4 w-4 text-red-500 ml-2" />) ";""
}</div> <div className="text-sm text-muted-foreground" > Posted by {;
  post.authorName ;"
}{;""
  timeAgo ";""
}</div> <div className="flex flex-wrap gap-2 mt-2" > {;"
  post.tags?.map (tag => (<Badge key= {;""
  tag ";""
}variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20" > {;
  tag ;"
}""
}</div> </div> </CardHeader> {";""
  !compact && (<CardContent> <div className="line-clamp-3" > {;
  post.content ;"
}</div> </CardContent>) ;""
}</div> </div> {";""
  post.isFeatured && (<div> <Badge className="bg-zion-purple" >Featured</Badge> </div>) ;
}</CardFooter> </Card>) ;
};'"
export default PostCard;'"'"
'"'"'"`