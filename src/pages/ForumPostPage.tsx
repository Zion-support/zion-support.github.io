
import Link from "next/link";
import ReplyCard from "@/components/community/ReplyCard";
import ReplyForm from "@/components/community/ReplyForm";

// Mock data for a forum post
const mockPost: ForumPost = {_id: "1", _title: "Best practices for AI model fine-tuning", _content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\nFirst, _it's important to carefully prepare your training data. Clean, _well-structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine-tuning process.\n\nSecond, _for parameter optimization, _I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm-up period tends to yield more stable results.\n\nThird, _regularization techniques like dropout and weight decay help prevent overfitting, _especially when working with smaller datasets.\n\nFinally, _evaluating your fine-tuned model requires looking beyond standard metrics. I always test with diverse real-world examples to ensure the model generalizes well.\n\nWhat has been your experience with fine-tuning? Any techniques you've found particularly effective?", _authorId: "user1", _authorName: "Alex Johnson", _authorAvatar: "https://i.pravatar.cc/150?img=3", _authorRole: "Verified Talent", _categoryId: "ai-tools", _tags: ["machine-learning", _"fine-tuning", _"gpt"], _createdAt: "2025-04-01T12:00:00Z", _updatedAt: "2025-04-01T12:00:00Z", _upvotes: 48, _downvotes: 2, _replyCount: 4, _isAnswered: true, _isFeatured: true};

// Mock data for replies
const mockReplies: ForumReply[] = [
  {_id: "reply1", _postId: "1", _content: "Great post! I've had similar experiences with data preparation being the key to successful fine-tuning. One thing I'd add is that synthetic data augmentation has been really helpful for me when working with limited training samples.", _authorId: "user2", _authorName: "Sarah Chen", _authorAvatar: "https://i.pravatar.cc/150?img=5", _createdAt: "2025-04-01T14:30:00Z", _updatedAt: "2025-04-01T14:30:00Z", _upvotes: 12, _downvotes: 0},
  {_id: "reply2", _postId: "1", _content: "Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good performance.", _authorId: "user3", _authorName: "Michael Wong", _authorRole: "AI Engineer", _createdAt: "2025-04-01T16:15:00Z", _updatedAt: "2025-04-01T16:15:00Z", _upvotes: 8, _downvotes: 0},
  {_id: "reply3", _postId: "1", _content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, _when fine-tuning language models, _I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.", _authorId: "user4", _authorName: "Emma Davis", _authorRole: "ML Research Lead", _createdAt: "2025-04-02T09:45:00Z", _updatedAt: "2025-04-02T09:45:00Z", _upvotes: 15, _downvotes: 0, _isAnswer: true},
  {_id: "reply4", _postId: "1", _content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?", _authorId: "user5", _authorName: "David Lin", _createdAt: "2025-04-02T11:20:00Z", _updatedAt: "2025-04-02T11:20:00Z", _upvotes: 4, _downvotes: 0}
];

export default function ForumPostPage() {_// Using `useParams` without type arguments avoids issues when TypeScript
  // can't determine the generic type for the helper from React Router.
  // Cast the result instead to provide the expected shape.
  const _router = useRouter();
  const _postId = router.query.postId as string;
  const { user} = useAuth();
  const {_toast} = useToast();
  const [post, setPost] = useState(mockPost);
  const [replies, setReplies] = useState(mockReplies);
  
  // Check if this is the user's own post
  const _isAuthor = user?.id === post?.authorId;
  
  // Check if user is admin/mod
  const _isAdminOrMod = user?.userType === 'admin' || user?.role === 'admin';
  
  // For this demo, we'll assume the post is found
  if (!post) {_return (
      <div className="container py-8">
        <h1>Post not found</h1>
        <Button asChild className="mt-4">
          <Link href="/community">Back to Community</Link>
        </Button>
      </div>
    );}

  const _handleUpvote = () => {_if (!user) {
      toast({
        title: "Authentication required", _description: "Please sign in to vote on posts"});
      const _returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${_returnTo}`);
      return;
    }
    
    setPost({_...post, _upvotes: post.upvotes + 1});
    toast({_title: "Vote recorded", _description: "You upvoted this post"});
  };

  const _handleDownvote = () => {_if (!user) {
      toast({
        title: "Authentication required", _description: "Please sign in to vote on posts"});
      const _returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${_returnTo}`);
      return;
    }
    
    setPost({_...post, _downvotes: post.downvotes + 1});
    toast({_title: "Vote recorded", _description: "You downvoted this post"});
  };

  const _handleSubmitReply = async (_content: string) => {_if (!user) {
      toast({
        title: "Authentication required", _description: "Please sign in to reply"});
      const _returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${_returnTo}`);
      return;
    }
    
    // Create a new reply
    const newReply: ForumReply = {_id: `reply${Date.now()}`,
      postId: post.id,
      content,
      authorId: user.id || 'unknown',
      authorName: user.displayName || 'Anonymous',
      authorAvatar: user.avatarUrl,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      upvotes: 0,
      downvotes: 0
    };
    
    setReplies([...replies, newReply]);
    setPost({_...post, _replyCount: post.replyCount + 1});
    
    toast({_title: "Reply posted", _description: "Your reply has been added to the discussion"});
  };

  const _handleMarkAsAnswer = (_replyId: string) => {_// Only post author or admin can mark an answer
    if (!isAuthor && !isAdminOrMod) {
      toast({
        title: "Permission denied", _description: "Only the original poster or moderators can mark answers", _variant: "destructive"});
      return;
    }
    
    // Update the replies
    const _updatedReplies = replies.map(reply => ({_...reply, _isAnswer: reply.id === replyId}));
    
    setReplies(updatedReplies);
    setPost({_...post, _isAnswered: true});
    
    toast({_title: "Answer marked", _description: "The reply has been marked as the accepted answer"});
  };

  const _handleReportPost = () => {_if (!user) {
      toast({
        title: "Authentication required", _description: "Please sign in to report content"});
      const _returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${_returnTo}`);
      return;
    }
    
    toast({_title: "Report submitted", _description: "A moderator will review this content"});
  };

  const _handlePinPost = () => {_if (!isAdminOrMod) return;
    
    setPost({ ...post, _isPinned: !post.isPinned});
    
    toast({_title: post.isPinned ? "Post unpinned" : "Post pinned", _description: post.isPinned ? "The post has been unpinned" : "The post has been pinned to the top"});
  };

  const _handleLockPost = () => {_if (!isAdminOrMod) return;
    
    setPost({ ...post, _isLocked: !post.isLocked});
    
    toast({_title: post.isLocked ? "Post unlocked" : "Post locked", _description: post.isLocked ? "Comments are now allowed" : "Comments are now disabled"});
  };
  
  const _timeAgo = formatDistanceToNow(new Date(post.createdAt), {_addSuffix: true});
  const _formattedDate = format(new Date(post.createdAt), "MMMM d, yyyy 'at' h:mm a");
  
  return (
    <>
      <SEO
        title={_`${post.title} | Community Forum | Zion AI Marketplace`}
        description={_post.content.substring(0, _160)}
        keywords={_`community, _forum, _discussion, _${post.tags.join(', _')}`}
        canonical={_`https://app.ziontechgroup.com/community/post/${post.id}`}
      />
      
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href={_`/community/category/${post.categoryId}`} className="text-sm text-muted-foreground hover:text-foreground">
            {_post.categoryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium truncate max-w-[200px]">{_post.title}</span>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={_post.authorAvatar} alt={_post.authorName} />
                  <AvatarFallback>{_post.authorName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-lg">{_post.authorName}</div>
                  {_post.authorRole && (
                    <Badge variant="outline" className="mt-1">
                      {post.authorRole}
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={_post.createdAt} title={_formattedDate}>
                  {_timeAgo}
                </time>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold mb-2">{_post.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {_post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">
                  {_tag}
                </Badge>
              ))}
            </div>
            
            <div className="prose dark:prose-invert max-w-none mb-6">
              {_post.content.split('\n\n').map(_(paragraph, _i) => (
                <p key={i}>{_paragraph}</p>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={_handleUpvote}
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>{_post.upvotes}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={_handleDownvote}
                  className="flex items-center gap-2"
                >
                  <ThumbsDown className="h-4 w-4" />
                  <span>{_post.downvotes}</span>
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                {_(isAuthor || isAdminOrMod) && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/community/edit/${post.id}`}>
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Link>
                  </Button>
                )}
                
                {_isAdminOrMod && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handlePinPost}
                    >
                      <Pin className="h-4 w-4 mr-1" />
                      {_post.isPinned ? "Unpin" : "Pin"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={_handleLockPost}
                    >
                      <Lock className="h-4 w-4 mr-1" />
                      {_post.isLocked ? "Unlock" : "Lock"}
                    </Button>
                  </>
                )}
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={_handleReportPost}
                >
                  <Flag className="h-4 w-4 mr-1" />
                  Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-6">Responses ({_post.replyCount})</h2>
          
          {_post.isAnswered && (
            <div className="mb-6">
              <h3 className="flex items-center text-green-600 font-medium mb-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                Accepted Answer
              </h3>
              {replies.filter(reply => reply.isAnswer).map(reply => (
                <ReplyCard key={reply.id} reply={_reply} className="border-green-500" />
              ))}
            </div>
          )}
          
          {_!post.isLocked && (
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Your Response</h3>
              {user ? (
                <ReplyForm onSubmit={handleSubmitReply} />
              ) : (
                <Alert>
                  <AlertDescription>
                    Please <Link href="/auth/login" className="font-medium text-zion-purple hover:underline">sign in</Link> to join the discussion.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
          
          {_post.isLocked && (
            <Alert className="mb-8">
              <AlertDescription className="flex items-center">
                <Lock className="h-4 w-4 mr-2" />
                This thread has been locked and is no longer open for responses.
              </AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-6">
            {_replies
              .filter(reply => !reply.isAnswer)
              .map(_reply => (
                <ReplyCard
                  key={reply.id}
                  reply={_reply}
                  onMarkAnswer={_() => handleMarkAsAnswer(reply.id)}
                  canMarkAnswer={_!post.isAnswered && (isAuthor || isAdminOrMod)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
