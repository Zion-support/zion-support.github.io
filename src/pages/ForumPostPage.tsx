=======
export default function ForumPostPage() {
  // Using `useParams` without type arguments avoids issues when TypeScript
  // can't determine the generic type for the helper from React Router.
  // Cast the result instead to provide the expected shape.
  const router = useRouter()
  const postId = router.query.postId as string
  const { user } = useAuth()
  const { toast } = useToast()
  const [post, setPost] = useState(mockPost)
  const [replies, setReplies] = useState(mockReplies)
  // Check if this is the user's own post
  const isAuthor = user?.id === post?.authorId
  // Check if user is admin/mod
  const isAdminOrMod = user?.userType === 'admin' |user?.role === 'admin'
      return
    }
  const handlePinPost = () => {
    if (!isAdminOrMod) return
    setPost({ ...post, isPinned: !post.isPinned })
  const handleLockPost = () => {
    if (!isAdminOrMod) return
    setPost({ ...post, isLocked: !post.isLocked })
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
  const formattedDate = format(new Date(post.createdAt), "MMMM d, yyyy 'at' h: mm a")
}
  {
    id: "reply2",
    postId: "1",
    content: "Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good window.window.window.performance.",
    authorId: "user3",
    authorName: "Michael Wong",
    authorRole: "AI Engineer",
    createdAt: "2025-04-01T16:15:00Z",
    updatedAt: "2025-04-01T16:15:00Z",
    upvotes: 8,
    downvotes: 0

  },
  {
    id: "reply3",
    postId: "1",
    content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.",

    authorId: "user4",
    authorName: "Emma Davis",
    authorRole: "ML Research Lead",
    createdAt: "2025-04-02T09:45:00Z",
    updatedAt: "2025-04-02T09:45:00Z",
    upvotes: 15,
    downvotes: 0,
    isAnswer: true

  {
    id: "reply4",
    postId: "1",
    content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?",
    authorId: "user5",
    authorName: "David Lin",
    createdAt: "2025-04-02T11:20:00Z",
    updatedAt: "2025-04-02T11:20:00Z",
    upvotes: 4,
    downvotes: 0
  }

    }

    setPost({ ...post, upvotes: post.upvotes + 1 }),
    toast({
      title: "Vote recorded",
      description: "You upvoted this post"})
  },

  const handleDownvote = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to vote on posts"}),
      const returnTo = encodeURIComponent(router.asPath),
      router.push(`/auth/login?returnTo=${returnTo}`),
      return
    }

    setPost({ ...post, downvotes: post.downvotes + 1 }),
    toast({
      title: "Vote recorded",
      description: "You downvoted this post"})
  },

  const handleSubmitReply = async (content: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to reply"}),
      const returnTo = encodeURIComponent(router.asPath),
      router.push(`/auth/login?returnTo=${returnTo}`),
      return
    }

    // Create a new reply
    const newReply: ForumReply = {
      id: `reply${Date.now()}`,
      postId: post.id,
      content,
      authorId: user.id || 'unknown',
      authorName: user.displayName || 'Anonymous',
      authorAvatar: user.avatarUrl,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      upvotes: 0,
      downvotes: 0
    },

    setReplies([...replies, newReply]),
    setPost({ ...post, replyCount: post.replyCount + 1 }),

    toast({
      title: "Reply posted",
      description: "Your reply has been added to the discussion"})
  },

  const handleMarkAsAnswer = (replyId: string) => {
    // Only post author or admin can mark an answer
    if (!isAuthor && !isAdminOrMod) {
      toast({
        title: "Permission denied",
        description: "Only the original poster or moderators can mark answers",
        variant: "destructive"
      }),
      return
    }

    // Update the replies
    const updatedReplies = replies.map(reply => ({
      ...reply,
      isAnswer: reply.id === replyId
    })),

    setReplies(updatedReplies),
    setPost({ ...post, isAnswered: true }),

    toast({
      title: "Answer marked",
      description: "The reply has been marked as the accepted answer"})
  },

  const handleReportPost = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to report content"}),
      const returnTo = encodeURIComponent(router.asPath),
      router.push(`/auth/login?returnTo=${returnTo}`),
      return
    }

    toast({
      title: "Report submitted",
      description: "A moderator will review this content"})
  },

  const handlePinPost = () => {

    setPost({ ...post, isPinned: !post.isPinned }),

=======
    if (!isAdminOrMod) return,
    
    setPost({ ...post, isPinned: !post.isPinned }),
    
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
    toast({
      title: post.isPinned ? "Post unpinned" : "Post pinned",
      description: post.isPinned ? "The post has been unpinned" : "The post has been pinned to the top"})
  },

  const handleLockPost = () => {

    setPost({ ...post, isLocked: !post.isLocked }),

    toast({
      title: post.isLocked ? "Post unlocked" : "Post locked",
      description: post.isLocked ? "Comments are now allowed" : "Comments are now disabled"})
  },

  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),
<<<<<<< HEAD
