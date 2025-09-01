import { useParams, Link  } from 'react-router-dom';
export default function Page() {
,
    {
        id: "reply2",
        postId: "1",
        content: "Have you tried using LoRA or QLoRA for efficient fine - tuning? I've found them to be much more resource - friendly while maintaining good performance.",
        author: {
            id: "user3",
            name: "Michael Wong",
            avatar: "https://i.pravatar.cc / 150?img = 7",
            role: "AI Engineer"
        },
        createdAt: "2025 - 04 - 01T16:15:00Z",
        updatedAt: "2025 - 04 - 01T16:15:00Z",
        likes: 8,
        isSolution: false,
        isAnswer: false
    },
    {
        id: "reply3",
        postId: "1",
        content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases.This has helped me identify issues early in the fine - tuning process.\n\nAlso, when fine - tuning language models, I've found that carefully crafting your prompts / templates for training can make a huge difference in the quality of the outputs.",
        author: {
            id: "user4",
            name: "Emma Davis",
            avatar: "https://i.pravatar.cc / 150?img = 9",
            role: "ML Research Lead"
        },
        createdAt: "2025 - 04 - 02T09:45:00Z",
        updatedAt: "2025 - 04 - 02T09:45:00Z",
        likes: 15,
        isSolution: false,
        isAnswer: true
    },
    {
        id: "reply4",
        postId: "1",
        content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?",
        author: {
            id: "user5",
            name: "David Lin",
            avatar: "https://i.pravatar.cc / 150?img = 11",
            role: "Developer"
        },
        createdAt: "2025 - 04 - 02T11:20:00Z",
        updatedAt: "2025 - 04 - 02T11:20:00Z",
        likes: 4,
        isSolution: false,
        isAnswer: false

];
    // Using `useParams` without type arguments avoids issues when TypeScript
    // can't determine the generic type for the helper from React Router.// Cast the result instead to provide the expected shape.const { postId } = useParams () ;
    const { user } = useAuth () ;
    const { toast } = useToast () ;
    const [post, setPost] = useState(mockPost);
    const [replies, setReplies] = useState(mockReplies);
    // Check if this is the user's own post
    const isAuthor = user?.id === post?.authorId;
    // Check if user is admin / mod
    const isAdminOrMod = user?.userType === 'admin' || user?.role === 'admin';
    // For this demo, we'll assume the post is found
    if(!post) {
        return (<div className="container py-8">
        <h1 > Post not found</h1>
        <Button asChild className="mt-4">
          <Link to="/community">Back to Community</Link>
        </Button>
      </div>) }
    const handleUpvote = () => {
        if(!user) {
            toast({
                title: "Authentication required",
                description: "Please sign in to vote on posts",
            }) ;
            return}
        setPost({ ...post, upvotes: post.upvotes + 1 }) ;
        toast({
            title: "Vote recorded",
            description: "You upvoted this post",
        }) };
    const handleDownvote = () => {
        if(!user) {
            toast({
                title: "Authentication required",
                description: "Please sign in to vote on posts",
            }) ;
            return}
        setPost({ ...post, downvotes: post.downvotes + 1 }) ;
        toast({
            title: "Vote recorded",
            description: "You downvoted this post",
        }) };
    const handleSubmitReply = async(content) => {
        if(!user) {
            toast({
                title: "Authentication required",
                description: "Please sign in to reply",
            }) ;
            return}
        // Create a new reply
        const newReply = {
            id: `reply${Date.now () }`,
            postId: post.id,
            content,
            author: {
                id: user.id || 'unknown',
                name: user.displayName || 'Anonymous',
                avatar: user.avatarUrl || 'https://i.pravatar.cc / 150?img = 1',
                role: user.role || 'user'
            },
            createdAt: new Date () .toISOString () ,
            updatedAt: new Date () .toISOString () ,
            likes: 0,
            isSolution: false,
            isAnswer: false
        };
        setReplies([...replies, newReply]) ;
        setPost({ ...post, replyCount: post.replyCount + 1 }) ;
        toast({
            title: "Reply posted",
            description: "Your reply has been added to the discussion",
        }) };
    const handleMarkAsAnswer = (replyId) => {
        // Only post author or admin can mark an answer
        if(!isAuthor && !isAdminOrMod) {
            toast({
                title: "Permission denied",
                description: "Only the original poster or moderators can mark answers",
                variant: "destructive"
            }) ;
            return}
        // Update the replies
        const updatedReplies = replies.map(reply => ({
            ...reply,
            isAnswer: reply.id === replyId
        }) ) ;
        setReplies(updatedReplies) ;
        setPost({ ...post, isAnswered: true }) ;
        toast({
            title: "Answer marked",
            description: "The reply has been marked as the accepted answer",
        }) };
    const handleReportPost = () => {
        if(!user) {
            toast({
                title: "Authentication required",
                description: "Please sign in to report content",
            }) ;
            return}
        toast({
            title: "Report submitted",
            description: "A moderator will review this content",
        }) };
    const handlePinPost = () => {
        if(!isAdminOrMod) return;
        setPost({ ...post, isPinned: !post.isPinned }) ;
        toast({
            title: post.isPinned ? "Post unpinned" : "Post pinned",
            description: post.isPinned ? "The post has been unpinned" : "The post has been pinned to the top",
        }) };
    const handleLockPost = () => {
        if(!isAdminOrMod) return;
        setPost({ ...post, isLocked: !post.isLocked }) ;
        toast({
            title: post.isLocked ? "Post unlocked" : "Post locked",
            description: post.isLocked ? "Comments are now allowed" : "Comments are now disabled",
        }) };
    const timeAgo = formatDistanceToNow(new Date (post.createdAt) , { addSuffix: true }) ;
    const formattedDate = format(new Date (post.createdAt) , "MMMM d, yyyy 'at' h:mm a") ;
    return (<>
      <SEO title={`${post.title} | Community Forum | Zion AI Marketplace`} description = {
  post.content.substring (0,
  160) } keywords = {
  `community, forum, discussion, ${post.tags.join(',
  ') ;

}`} canonical={`https://ziontechgroup.com / community / post/${post.id}`}/>;

      <div className="container py-8">
        <div className="flex items - center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted - foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted -foreground">/</span>
          <Link to={`/community / category/${post.categoryId}`} className="text-sm text-muted - foreground hover:text-foreground">
            {post.categoryId.split('-') .map(word => word.charAt (0) .toUpperCase () + word.slice(1) ) .join(' ') }
          </Link>
          <span className="text-muted -foreground">/</span>
          <span className="text-sm font - medium truncate max - w-[200px]">{post.title}</span>
        </div>

        <Card>
          <CardContent className="p -6">
            <div className="flex justify - between items - start mb-6">
              <div className="flex items - center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.authorAvatar}/>
                  <AvatarFallback>{post.authorName.charAt(0) }</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font - medium text-lg">{post.authorName}</div>
                  {post.authorRole && (<Badge variant="outline" className="mt-1">
                      {post.authorRole}
                    </Badge>) }
                </div>
              </div>

              <div className="flex items - center text-sm text-muted -foreground">
                <Calendar className="h-4 w-4 mr-1"/>
                <time dateTime={post.createdAt} title={formattedDate}>
                  {timeAgo}
                </time>
              </div>
            </div>

            <h1 className="text-2xl font - bold mb-2">{post.title}</h1>

            <div className="flex flex - wrap gap-2 mb-6">
              {post.tags.map(tag => (<Badge key={tag} variant="outline" className="bg-zion - purple / 10 hover:bg-zion -purple / 20">
                  {tag}
                </Badge>) ) }
            </div>

            <div className="prose dark:prose - invert max - w-none mb-6">
              {post.content.split('\n\n') .map((paragraph, i) => (<p key={i}>{paragraph}</p>) ) }
            </div>

            <div className="flex flex - wrap items - center justify - between gap-4 mt-6">
              <div className="flex items - center gap-4">
                <Button variant="outline" size="sm" onClick={handleUpvote} className="flex items - center gap-2">
                  <ThumbsUp className="h-4 w-4"/>
                  <span>{post.upvotes}</span>
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownvote} className="flex items - center gap-2">
                  <ThumbsDown className="h-4 w-4"/>
                  <span>{post.downvotes}</span>
                </Button>
              </div>

              <div className="flex items - center gap-2">
                { (isAuthor || isAdminOrMod) && (<Button variant="ghost" size="sm" asChild>
                    <Link to={`/community / edit/${post.id}`}>
                      <Edit className="h-4 w-4 mr-1"/>
                      Edit
                    </Link>
                  </Button>) }

                {isAdminOrMod && (<>
                    <Button variant="ghost" size="sm" onClick={handlePinPost}>
                      <Pin className="h-4 w-4 mr-1"/>
                      {post.isPinned ? "Unpin" : "Pin"}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleLockPost}>
                      <Lock className="h-4 w-4 mr-1"/>
                      {post.isLocked ? "Unlock" : "Lock"}
                    </Button>
                  </>) }

                <Button variant="ghost" size="sm" onClick={handleReportPost}>
                  <Flag className="h-4 w-4 mr-1"/>
                  Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8">
          <h2 className="text-xl font - bold mb-6">Responses({post.replyCount}) </h2>

          {post.isAnswered && (<div className="mb-6">
              <h3 className="flex items - center text-green - 600 font - medium mb-2">
                <CheckCircle className="h-4 w-4 mr-2"/>
                Accepted Answer
              </h3>
              {replies.filter(reply => reply.isAnswer) .map(reply => (<ReplyCard key={reply.id} reply={reply} className="border-green -500"/>) ) }
            </div>) }

          {!post.isLocked && (<div className="mb-8">
              <h3 className="text-lg font - medium mb-4">Your Response</h3>
              {user ? (<ReplyForm onSubmit={handleSubmitReply}/>) : (<Alert>
                  <AlertDescription > Please < Link to="/login" className="font - medium text-zion -purple hover:underline">sign in</Link > to join the discussion.</AlertDescription>
                </Alert>) }
            </div>) }

          {post.isLocked && (<Alert className="mb-8">
              <AlertDescription className="flex items -center">
                <Lock className="h-4 w-4 mr-2"/>
                This thread has been locked and is no longer open for responses.</AlertDescription>
            </Alert>) }

          <div className="space - y-6">
            {replies
            .filter(reply => !reply.isAnswer) .map(reply => (<ReplyCard key={reply.id} reply={reply} onMarkAnswer={ () => handleMarkAsAnswer(reply.id) } canMarkAnswer={!post.isAnswered && (isAuthor || isAdminOrMod) }/>) ) }
          </div>
        </div>
      </div>
    </>) }
