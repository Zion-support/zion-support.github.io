
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import Link from "next/link",
import { useRouter } from "next/router",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Card, CardContent } from "@/components/ui/card",
import { Separator } from "@/components/ui/separator",
import { Alert, AlertDescription } from "@/components/ui/alert",
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle } from 'lucide-react'
import { formatDistanceToNow, format } from "date-fns",
import { ForumPost, ForumReply } from "@/types/community",
import { useAuth } from "@/hooks/useAuth",
import ReplyCard from "@/components/community/ReplyCard",
import ReplyForm from "@/components/community/ReplyForm",
import { useToast } from "@/hooks/use-toast",
=======
import { useState } from &quot;react&quot;;
import Link from &quot;next/link&quot;;
import { useRouter } from &quot;next/router&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Separator } from &quot;@/components/ui/separator&quot;;
import { Alert, AlertDescription } from &quot;@/components/ui/alert&quot;;
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle } from 'lucide-react'
import { formatDistanceToNow, format } from &quot;date-fns&quot;;
import { ForumPost, ForumReply } from &quot;@/types/community&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import ReplyCard from &quot;@/components/community/ReplyCard&quot;;
import ReplyForm from &quot;@/components/community/ReplyForm&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
=======
import Link from "next/link";
import ReplyCard from "@/components/community/ReplyCard";
import ReplyForm from "@/components/community/ReplyForm";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Mock data for a forum post
<<<<<<< HEAD
const mockPost: ForumPost = {
  id: &quot;1&quot;,
  title: &quot;Best practices for AI model fine-tuning&quot;,
  content: &quot;I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\nFirst, it's important to carefully prepare your training data. Clean, well-structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine-tuning process.\n\nSecond, for parameter optimization, I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm-up period tends to yield more stable results.\n\nThird, regularization techniques like dropout and weight decay help prevent overfitting, especially when working with smaller datasets.\n\nFinally, evaluating your fine-tuned model requires looking beyond standard metrics. I always test with diverse real-world examples to ensure the model generalizes well.\n\nWhat has been your experience with fine-tuning? Any techniques you've found particularly effective?&quot;,
  authorId: &quot;user1&quot;,
  authorName: &quot;Alex Johnson&quot;,
  authorAvatar: &quot;https://i.pravatar.cc/150?img=3&quot;,
  authorRole: &quot;Verified Talent&quot;,
  categoryId: &quot;ai-tools&quot;,
  tags: [&quot;machine-learning&quot;, &quot;fine-tuning&quot;, &quot;gpt&quot;],
  createdAt: &quot;2025-04-01T12:00:00Z&quot;,
  updatedAt: &quot;2025-04-01T12:00:00Z&quot;,
  upvotes: 48,
  downvotes: 2,
  replyCount: 4,
  isAnswered: true,
  isFeatured: true
},

// Mock data for replies
const mockReplies: ForumReply[] = [
  {
    id: &quot;reply1&quot;,
    postId: &quot;1&quot;,
    content: &quot;Great post! I've had similar experiences with data preparation being the key to successful fine-tuning. One thing I'd add is that synthetic data augmentation has been really helpful for me when working with limited training samples.&quot;,
    authorId: &quot;user2&quot;,
    authorName: &quot;Sarah Chen&quot;,
    authorAvatar: &quot;https://i.pravatar.cc/150?img=5&quot;,
    createdAt: &quot;2025-04-01T14:30:00Z&quot;,
    updatedAt: &quot;2025-04-01T14:30:00Z&quot;,
    upvotes: 12,
    downvotes: 0
  },
  {
<<<<<<< HEAD
    id: "reply2",
    postId: "1",
    content: "Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good window.window.window.performance.",
    authorId: "user3",
    authorName: "Michael Wong",
    authorRole: "AI Engineer",
    createdAt: "2025-04-01T16:15:00Z",
    updatedAt: "2025-04-01T16:15:00Z",
=======
    id: &quot;reply2&quot;,
    postId: &quot;1&quot;,
    content: &quot;Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good performance.&quot;,
    authorId: &quot;user3&quot;,
    authorName: &quot;Michael Wong&quot;,
    authorRole: &quot;AI Engineer&quot;,
    createdAt: &quot;2025-04-01T16:15:00Z&quot;,
    updatedAt: &quot;2025-04-01T16:15:00Z&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    upvotes: 8,
    downvotes: 0
  },
  {
    id: &quot;reply3&quot;,
    postId: &quot;1&quot;,
    content: &quot;A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.&quot;,
    authorId: &quot;user4&quot;,
    authorName: &quot;Emma Davis&quot;,
    authorRole: &quot;ML Research Lead&quot;,
    createdAt: &quot;2025-04-02T09:45:00Z&quot;,
    updatedAt: &quot;2025-04-02T09:45:00Z&quot;,
    upvotes: 15,
    downvotes: 0,
    isAnswer: true
  },
  {
    id: &quot;reply4&quot;,
    postId: &quot;1&quot;,
    content: &quot;Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?&quot;,
    authorId: &quot;user5&quot;,
    authorName: &quot;David Lin&quot;,
    createdAt: &quot;2025-04-02T11:20:00Z&quot;,
    updatedAt: &quot;2025-04-02T11:20:00Z&quot;,
    upvotes: 4,
    downvotes: 0
  }
],
=======
const mockPost: ForumPost = {_id: "1", _title: "Best practices for AI model fine-tuning", _content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me.\n\nFirst, _it's important to carefully prepare your training data. Clean, _well-structured data makes a huge difference. I typically spend more time on data preparation than on the actual fine-tuning process.\n\nSecond, _for parameter optimization, _I've found that learning rate scheduling plays a critical role. Starting with a smaller learning rate and using a warm-up period tends to yield more stable results.\n\nThird, _regularization techniques like dropout and weight decay help prevent overfitting, _especially when working with smaller datasets.\n\nFinally, _evaluating your fine-tuned model requires looking beyond standard metrics. I always test with diverse real-world examples to ensure the model generalizes well.\n\nWhat has been your experience with fine-tuning? Any techniques you've found particularly effective?", _authorId: "user1", _authorName: "Alex Johnson", _authorAvatar: "https://i.pravatar.cc/150?img=3", _authorRole: "Verified Talent", _categoryId: "ai-tools", _tags: ["machine-learning", _"fine-tuning", _"gpt"], _createdAt: "2025-04-01T12:00:00Z", _updatedAt: "2025-04-01T12:00:00Z", _upvotes: 48, _downvotes: 2, _replyCount: 4, _isAnswered: true, _isFeatured: true};

// Mock data for replies
const mockReplies: ForumReply[] = [
  {_id: "reply1", _postId: "1", _content: "Great post! I've had similar experiences with data preparation being the key to successful fine-tuning. One thing I'd add is that synthetic data augmentation has been really helpful for me when working with limited training samples.", _authorId: "user2", _authorName: "Sarah Chen", _authorAvatar: "https://i.pravatar.cc/150?img=5", _createdAt: "2025-04-01T14:30:00Z", _updatedAt: "2025-04-01T14:30:00Z", _upvotes: 12, _downvotes: 0},
  {_id: "reply2", _postId: "1", _content: "Have you tried using LoRA or QLoRA for efficient fine-tuning? I've found them to be much more resource-friendly while maintaining good performance.", _authorId: "user3", _authorName: "Michael Wong", _authorRole: "AI Engineer", _createdAt: "2025-04-01T16:15:00Z", _updatedAt: "2025-04-01T16:15:00Z", _upvotes: 8, _downvotes: 0},
  {_id: "reply3", _postId: "1", _content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso, _when fine-tuning language models, _I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.", _authorId: "user4", _authorName: "Emma Davis", _authorRole: "ML Research Lead", _createdAt: "2025-04-02T09:45:00Z", _updatedAt: "2025-04-02T09:45:00Z", _upvotes: 15, _downvotes: 0, _isAnswer: true},
  {_id: "reply4", _postId: "1", _content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?", _authorId: "user5", _authorName: "David Lin", _createdAt: "2025-04-02T11:20:00Z", _updatedAt: "2025-04-02T11:20:00Z", _upvotes: 4, _downvotes: 0}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function ForumPostPage() {_// Using `useParams` without type arguments avoids issues when TypeScript
  // can't determine the generic type for the helper from React Router.
  // Cast the result instead to provide the expected shape.
<<<<<<< HEAD
  const router = useRouter(),
  const postId = router.query.postId as string,
  const { user } = useAuth(),
  const { toast } = useToast(),
  const [post, setPost] = useState(mockPost),
  const [replies, setReplies] = useState(mockReplies),
  
  // Check if this is the user's own post
  const isAuthor = user?.id === post?.authorId,
  
  // Check if user is admin/mod
  const isAdminOrMod = user?.userType === 'admin' || user?.role === 'admin',
  
  // For this demo, we'll assume the post is found
  if (!post) {
    return (
      <div className=&quot;container py-8&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <h1>Post not found</h1>
        <Button asChild className=&quot;mt-4&quot;>
          <Link href=&quot;/community&quot;>Back to Community</Link>
        </Button>
      </div>
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleUpvote = () => {_if (!user) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please sign in to vote on posts"}),
      const returnTo = encodeURIComponent(router.asPath),
      router.push(`/auth/login?returnTo=${returnTo}`),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please sign in to vote on posts&quot;});
      const returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${returnTo}`);
=======
        title: "Authentication required", _description: "Please sign in to vote on posts"});
      const _returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${_returnTo}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
<<<<<<< HEAD
    setPost({ ...post, upvotes: post.upvotes + 1 }),
    toast({
<<<<<<< HEAD
      title: "Vote recorded",
      description: "You upvoted this post"})
  },
=======
      title: &quot;Vote recorded&quot;,
      description: &quot;You upvoted this post&quot;});
=======
    setPost({_...post, _upvotes: post.upvotes + 1});
    toast({_title: "Vote recorded", _description: "You upvoted this post"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const _handleDownvote = () => {_if (!user) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please sign in to vote on posts"}),
      const returnTo = encodeURIComponent(router.asPath),
      router.push(`/auth/login?returnTo=${returnTo}`),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please sign in to vote on posts&quot;});
      const returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${returnTo}`);
=======
        title: "Authentication required", _description: "Please sign in to vote on posts"});
      const _returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${_returnTo}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
<<<<<<< HEAD
    setPost({ ...post, downvotes: post.downvotes + 1 }),
    toast({
<<<<<<< HEAD
      title: "Vote recorded",
      description: "You downvoted this post"})
  },
=======
      title: &quot;Vote recorded&quot;,
      description: &quot;You downvoted this post&quot;});
=======
    setPost({_...post, _downvotes: post.downvotes + 1});
    toast({_title: "Vote recorded", _description: "You downvoted this post"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const _handleSubmitReply = async (_content: string) => {_if (!user) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please sign in to reply"}),
      const returnTo = encodeURIComponent(router.asPath),
      router.push(`/auth/login?returnTo=${returnTo}`),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please sign in to reply&quot;});
      const returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${returnTo}`);
=======
        title: "Authentication required", _description: "Please sign in to reply"});
      const _returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${_returnTo}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
    },
    
<<<<<<< HEAD
    setReplies([...replies, newReply]),
    setPost({ ...post, replyCount: post.replyCount + 1 }),
    
    toast({
<<<<<<< HEAD
      title: "Reply posted",
      description: "Your reply has been added to the discussion"})
  },
=======
      title: &quot;Reply posted&quot;,
      description: &quot;Your reply has been added to the discussion&quot;});
=======
    setReplies([...replies, newReply]);
    setPost({_...post, _replyCount: post.replyCount + 1});
    
    toast({_title: "Reply posted", _description: "Your reply has been added to the discussion"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const _handleMarkAsAnswer = (_replyId: string) => {_// Only post author or admin can mark an answer
    if (!isAuthor && !isAdminOrMod) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Permission denied",
        description: "Only the original poster or moderators can mark answers",
        variant: "destructive"
      }),
      return
=======
        title: &quot;Permission denied&quot;,
        description: &quot;Only the original poster or moderators can mark answers&quot;,
        variant: &quot;destructive&quot;
      });
=======
        title: "Permission denied", _description: "Only the original poster or moderators can mark answers", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Update the replies
<<<<<<< HEAD
    const updatedReplies = replies.map(reply => ({
      ...reply,
      isAnswer: reply.id === replyId
    })),
    
    setReplies(updatedReplies),
    setPost({ ...post, isAnswered: true }),
    
    toast({
<<<<<<< HEAD
      title: "Answer marked",
      description: "The reply has been marked as the accepted answer"})
  },
=======
      title: &quot;Answer marked&quot;,
      description: &quot;The reply has been marked as the accepted answer&quot;});
=======
    const _updatedReplies = replies.map(reply => ({_...reply, _isAnswer: reply.id === replyId}));
    
    setReplies(updatedReplies);
    setPost({_...post, _isAnswered: true});
    
    toast({_title: "Answer marked", _description: "The reply has been marked as the accepted answer"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const _handleReportPost = () => {_if (!user) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please sign in to report content&quot;});
      const returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${returnTo}`);
      return;
    }
    
    toast({
      title: &quot;Report submitted&quot;,
      description: &quot;A moderator will review this content&quot;});
=======
        title: "Authentication required", _description: "Please sign in to report content"});
      const _returnTo = encodeURIComponent(router.asPath);
      router.push(`/auth/login?returnTo=${_returnTo}`);
      return;
    }
    
    toast({_title: "Report submitted", _description: "A moderator will review this content"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  const handlePinPost = () => {
    if (!isAdminOrMod) return,
    
    setPost({ ...post, isPinned: !post.isPinned }),
    
    toast({
<<<<<<< HEAD
      title: post.isPinned ? "Post unpinned" : "Post pinned",
      description: post.isPinned ? "The post has been unpinned" : "The post has been pinned to the top"})
  },
=======
      title: post.isPinned ? &quot;Post unpinned&quot; : &quot;Post pinned&quot;,
      description: post.isPinned ? &quot;The post has been unpinned&quot; : &quot;The post has been pinned to the top&quot;});
=======
  const _handlePinPost = () => {_if (!isAdminOrMod) return;
    
    setPost({ ...post, _isPinned: !post.isPinned});
    
    toast({_title: post.isPinned ? "Post unpinned" : "Post pinned", _description: post.isPinned ? "The post has been unpinned" : "The post has been pinned to the top"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  const handleLockPost = () => {
    if (!isAdminOrMod) return,
    
    setPost({ ...post, isLocked: !post.isLocked }),
    
    toast({
<<<<<<< HEAD
      title: post.isLocked ? "Post unlocked" : "Post locked",
      description: post.isLocked ? "Comments are now allowed" : "Comments are now disabled"})
  },
  
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }),
  const formattedDate = format(new Date(post.createdAt), "MMMM d, yyyy 'at' h: mm a"),
=======
      title: post.isLocked ? &quot;Post unlocked&quot; : &quot;Post locked&quot;,
      description: post.isLocked ? &quot;Comments are now allowed&quot; : &quot;Comments are now disabled&quot;});
  };
  
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });
  const formattedDate = format(new Date(post.createdAt), &quot;MMMM d, yyyy 'at' h:mm a&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _handleLockPost = () => {_if (!isAdminOrMod) return;
    
    setPost({ ...post, _isLocked: !post.isLocked});
    
    toast({_title: post.isLocked ? "Post unlocked" : "Post locked", _description: post.isLocked ? "Comments are now allowed" : "Comments are now disabled"});
  };
  
  const _timeAgo = formatDistanceToNow(new Date(post.createdAt), {_addSuffix: true});
  const _formattedDate = format(new Date(post.createdAt), "MMMM d, yyyy 'at' h:mm a");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <>
      <SEO
<<<<<<< HEAD
        title={`${post.title} | Community Forum | Zion AI Marketplace`}
        description={post.content.substring(0, 160)}
        keywords={`community, forum, discussion, ${post.tags.join()}`}
        canonical={`https://app.ziontechgroup.com/community/post/${post.id}`}
=======
        title={_`${post.title} | Community Forum | Zion AI Marketplace`}
        description={_post.content.substring(0, _160)}
        keywords={_`community, _forum, _discussion, _${post.tags.join(', _')}`}
        canonical={_`https://app.ziontechgroup.com/community/post/${post.id}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
      
      <div className=&quot;container py-8&quot;>
        <div className=&quot;flex items-center gap-3 mb-6&quot;>
          <Link href=&quot;/community&quot; className=&quot;text-sm text-muted-foreground hover:text-foreground&quot;>
            Forum
          </Link>
<<<<<<< HEAD
          <span className=&quot;text-muted-foreground&quot;>/</span>
          <Link href={`/community/category/${post.categoryId}`} className=&quot;text-sm text-muted-foreground hover:text-foreground&quot;>
            {post.categoryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Link>
          <span className=&quot;text-muted-foreground&quot;>/</span>
          <span className=&quot;text-sm font-medium truncate max-w-[200px]&quot;>{post.title}</span>
        </div>
        
        <Card>
          <CardContent className=&quot;p-6&quot;>
            <div className=&quot;flex justify-between items-start mb-6&quot;>
              <div className=&quot;flex items-center gap-4&quot;>
                <Avatar className=&quot;h-12 w-12&quot;>
                  <AvatarImage src={post.authorAvatar} alt={post.authorName} />
                  <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className=&quot;font-medium text-lg&quot;>{post.authorName}</div>
                  {post.authorRole && (
                    <Badge variant=&quot;outline&quot; className=&quot;mt-1&quot;>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      {post.authorRole}
                    </Badge>
                  )}
                </div>
              </div>
              
<<<<<<< HEAD
              <div className=&quot;flex items-center text-sm text-muted-foreground&quot;>
                <Calendar className=&quot;h-4 w-4 mr-1&quot; />
                <time dateTime={post.createdAt} title={formattedDate}>
                  {timeAgo}
=======
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={_post.createdAt} title={_formattedDate}>
                  {_timeAgo}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </time>
              </div>
            </div>
            
<<<<<<< HEAD
            <h1 className=&quot;text-2xl font-bold mb-2&quot;>{post.title}</h1>
            
            <div className=&quot;flex flex-wrap gap-2 mb-6&quot;>
              {post.tags.map(tag => (
                <Badge key={tag} variant=&quot;outline&quot; className=&quot;bg-zion-purple/10 hover:bg-zion-purple/20&quot;>
                  {tag}
=======
            <h1 className="text-2xl font-bold mb-2">{_post.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {_post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">
                  {_tag}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Badge>
              ))}
            </div>
            
<<<<<<< HEAD
            <div className=&quot;prose dark:prose-invert max-w-none mb-6&quot;>
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
=======
            <div className="prose dark:prose-invert max-w-none mb-6">
              {_post.content.split('\n\n').map(_(paragraph, _i) => (
                <p key={i}>{_paragraph}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ))}
            </div>
            
            <div className=&quot;flex flex-wrap items-center justify-between gap-4 mt-6&quot;>
              <div className=&quot;flex items-center gap-4&quot;>
                <Button
<<<<<<< HEAD
                  variant=&quot;outline&quot;
                  size=&quot;sm&quot;
                  onClick={handleUpvote}
                  className=&quot;flex items-center gap-2&quot;
                >
                  <ThumbsUp className=&quot;h-4 w-4&quot; />
                  <span>{post.upvotes}</span>
                </Button>
                <Button
                  variant=&quot;outline&quot;
                  size=&quot;sm&quot;
                  onClick={handleDownvote}
                  className=&quot;flex items-center gap-2&quot;
                >
                  <ThumbsDown className=&quot;h-4 w-4&quot; />
                  <span>{post.downvotes}</span>
                </Button>
              </div>
              
              <div className=&quot;flex items-center gap-2&quot;>
                {(isAuthor || isAdminOrMod) && (
                  <Button variant=&quot;ghost&quot; size=&quot;sm&quot; asChild>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <Link href={`/community/edit/${post.id}`}>
                      <Edit className=&quot;h-4 w-4 mr-1&quot; />
                      Edit
                    </Link>
                  </Button>
                )}
                
                {_isAdminOrMod && (
                  <>
                    <Button
                      variant=&quot;ghost&quot;
                      size=&quot;sm&quot;
                      onClick={handlePinPost}
                    >
<<<<<<< HEAD
                      <Pin className=&quot;h-4 w-4 mr-1&quot; />
                      {post.isPinned ? &quot;Unpin&quot; : &quot;Pin&quot;}
                    </Button>
                    <Button
                      variant=&quot;ghost&quot;
                      size=&quot;sm&quot;
                      onClick={handleLockPost}
                    >
                      <Lock className=&quot;h-4 w-4 mr-1&quot; />
                      {post.isLocked ? &quot;Unlock&quot; : &quot;Lock&quot;}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Button>
                  </>
                )}
                
                <Button
<<<<<<< HEAD
                  variant=&quot;ghost&quot;
                  size=&quot;sm&quot;
                  onClick={handleReportPost}
=======
                  variant="ghost"
                  size="sm"
                  onClick={_handleReportPost}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <Flag className=&quot;h-4 w-4 mr-1&quot; />
                  Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
<<<<<<< HEAD
        <div className=&quot;mt-8&quot;>
          <h2 className=&quot;text-xl font-bold mb-6&quot;>Responses ({post.replyCount})</h2>
          
          {post.isAnswered && (
            <div className=&quot;mb-6&quot;>
              <h3 className=&quot;flex items-center text-green-600 font-medium mb-2&quot;>
                <CheckCircle className=&quot;h-4 w-4 mr-2&quot; />
                Accepted Answer
              </h3>
              {replies.filter(reply => reply.isAnswer).map(reply => (
                <ReplyCard key={reply.id} reply={reply} className=&quot;border-green-500&quot; />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ))}
            </div>
          )}
          
<<<<<<< HEAD
          {!post.isLocked && (
            <div className=&quot;mb-8&quot;>
              <h3 className=&quot;text-lg font-medium mb-4&quot;>Your Response</h3>
=======
          {_!post.isLocked && (
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Your Response</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              {user ? (
                <ReplyForm onSubmit={handleSubmitReply} />
              ) : (
                <Alert>
                  <AlertDescription>
                    Please <Link href=&quot;/auth/login&quot; className=&quot;font-medium text-zion-purple hover:underline&quot;>sign in</Link> to join the discussion.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
          
<<<<<<< HEAD
          {post.isLocked && (
            <Alert className=&quot;mb-8&quot;>
              <AlertDescription className=&quot;flex items-center&quot;>
                <Lock className=&quot;h-4 w-4 mr-2&quot; />
=======
          {_post.isLocked && (
            <Alert className="mb-8">
              <AlertDescription className="flex items-center">
                <Lock className="h-4 w-4 mr-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                This thread has been locked and is no longer open for responses.
              </AlertDescription>
            </Alert>
          )}
          
<<<<<<< HEAD
          <div className=&quot;space-y-6&quot;>
            {replies
=======
          <div className="space-y-6">
            {_replies
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
  )
}
