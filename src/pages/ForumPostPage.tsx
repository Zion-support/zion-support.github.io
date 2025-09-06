

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
import ReplyForm from "@/components/community/ReplyForm";
import { useToast } from "@/hooks/use-toast";
// Mock data for a forum post
const mockPost: ForumPost;
  return (
    <>
      <SEO
        title={`${post.title} | Community Forum | Zion AI Marketplace`}
        description={post.content.substring(0, 160)}
        keywords={`community, forum, discussion, ${post.tags.join()}`}
        canonical={`https://app.ziontechgroup.com/community/post/${post.id}`}
      />
      
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href={`/community/category/${post.categoryId}`} className="text-sm text-muted-foreground hover:text-foreground">
            {post.categoryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium truncate max-w-[200px]">{post.title}</span>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.authorAvatar} alt={post.authorName} />
                  <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-lg">{post.authorName}</div>
                  {post.authorRole && (
                    <Badge variant="outline" className="mt-1">
                      {post.authorRole}
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={post.createdAt} title={formattedDate}>
                  {timeAgo}
                </time>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="bg-zion-purple/10 hover:bg-zion-purple/20">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="prose dark:prose-invert max-w-none mb-6">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleUpvote}
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>{post.upvotes}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownvote}
                  className="flex items-center gap-2"
                >
                  <ThumbsDown className="h-4 w-4" />
                  <span>{post.downvotes}</span>
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                {(isAuthor || isAdminOrMod) && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/community/edit/${post.id}`}>
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Link>
                  </Button>
                )}
                
                {isAdminOrMod && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handlePinPost}
                    >
                      <Pin className="h-4 w-4 mr-1" />
                      {post.isPinned ? "Unpin" : "Pin"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLockPost}
                    >
                      <Lock className="h-4 w-4 mr-1" />
                      {post.isLocked ? "Unlock" : "Lock"}
                    </Button>
                  </>
                )}
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleReportPost}
                >
                  <Flag className="h-4 w-4 mr-1" />
                  Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-6">Responses ({post.replyCount})</h2>
          
          {post.isAnswered && (
            <div className="mb-6">
              <h3 className="flex items-center text-green-600 font-medium mb-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                Accepted Answer
              </h3>
              {replies.filter(reply => reply.isAnswer).map(reply => (
                <ReplyCard key={reply.id} reply={reply} className="border-green-500" />
              ))}
            </div>
          )}
          
          {!post.isLocked && (
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
          
          {post.isLocked && (
            <Alert className="mb-8">
              <AlertDescription className="flex items-center">
                <Lock className="h-4 w-4 mr-2" />
                This thread has been locked and is no longer open for responses.
              </AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-6">
            {replies
              .filter(reply => !reply.isAnswer)
              .map(reply => (
                <ReplyCard
                  key={reply.id}
                  reply={reply}
                  onMarkAnswer={() => handleMarkAsAnswer(reply.id)}
                  canMarkAnswer={!post.isAnswered && (isAuthor || isAdminOrMod)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )

}
  );
}
;