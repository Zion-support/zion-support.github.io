
}
  );
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  ThumbsUp,
  ThumbsDown,
  Calendar,
  Flag,
  Edit,
  Trash2,
  Pin,
  Lock,
  CheckCircle,;
} from 'lucide-react';
import { formatDistanceToNow, format } from 'date-fns';
import { ForumPost, ForumReply } from '@/types/community';
import { useAuth } from '@/hooks/useAuth';
import ReplyCard from '@/components/community/ReplyCard';
import ReplyForm from '@/components/community/ReplyForm';
import { useToast } from '@/hooks/use-toast';

import { useState } from "react",;
import Link from "next/link",;
import { useRouter } from "next/router",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Card, CardContent } from "@/components/ui/card",;
import { Separator } from "@/components/ui/separator",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { ThumbsUp, ThumbsDown, Calendar, Flag, Edit, Trash2, Pin, Lock, CheckCircle } from 'lucide-react'
import { formatDistanceToNow, format } from "date-fns",;
import { ForumPost, ForumReply } from "@/types/community",;
import { useAuth } from "@/hooks/useAuth",;
import ReplyCard from "@/components/community/ReplyCard",;
import ReplyForm from "@/components/community/ReplyForm";
import { useToast } from "@/hooks/use-toast";
// Mock data for a forum post
  );
downvotes: 0 ;
};
{;
  id: "reply3";";
postId: "1";";
content: "A technique that's worked wonders for me is to create a validation set that specifically targets the edge cases and potential biases. This has helped me identify issues early in the fine-tuning process.\n\nAlso,  when fine-tuning language models, I've found that carefully crafting your prompts/templates for training can make a huge difference in the quality of the outputs.";";
authorId: "user4";";
authorName: "Emma Davis";";
authorRole: "ML Research Lead";";
createdAt: "2025-04-02T09:45:00Z";";
updatedAt: "2025-04-02T09:45:00Z";
upvotes: 15;
downvotes: 0;
isAnswer: true ;
};
{";
  id: "reply4";";
postId: "1";";
content: "Could you share more details about how you structure your evaluation process? What metrics do you find most useful beyond the standard ones?";";
authorId: "user5";";
authorName: "David Lin";";
createdAt: "2025-04-02T11:20:00Z";";
updatedAt: "2025-04-02T11:20:00Z";
upvotes: 4;
downvotes: 0 ;
}];'";
//Using `useParams` without type arguments avoids issues when TypeScript //can't determine the generic type for the helper from React Router. //Cast the result instead to provide the expected shape. <h1>Post not found</h1> <Button asChild className="mt-4" > <Link href="/community" >Back to Community</Link> </Button> </div> const handleUpvote = () => {;
  if (!user) {;
  toast ({;
  return;

};
  if (!user) {;
  toast ({;
  return;

};
  if (!user) {;
  toast ({;
  return;
}//Create a new reply const newReply: ForumReply = {;
  id: `reply$ {;
  Date.now () ;
}`;
postId: post.id;
content;';
authorId: user.id || 'unknown';';
authorName: user.displayName || 'Anonymous';
authorAvatar: user.avatarUrl;
createdAt: new Date () .toISOString ();
updatedAt: new Date () .toISOString ();
upvotes: 0;
downvotes: 0 ;
};
};
  //Only post author or admin can mark an answer if (!isAuthor && !isAdminOrMod) {;
  toast ({;
  return;
}//Update the replies ;
};
  if (!user) {;
  toast ({;
  ;
};
};";
  post.authorRole ;
}</Badge>) ;
}</div> </div> </time> </div> </div> </Badge>) ) ;
}</div>) ) ";
}</div> <div className=" flex flex-wrap items-center justify-between gap-4 mt-6"> <div className=" flex items-center gap-4"> <Button <Link href= {;
  `/community/edit/$ {;
  post.id ;
}` ";
}> <Edit className=" h-4 w-4 mr-1"/> Edit </Link> </Button>) ;
}{";
  isAdminOrMod && (<> <Button variant=" ghost"size=" sm"onClick={;
  handlePinPost ;
}> </Button> </>) ";
}<Button > <Flag className=" h-4 w-4 mr-1"/> Report </Button> </div> </div> </CardContent> </Card>) ) ;
}</div>) ;
}{;
  user ? (<ReplyForm onSubmit= {;
  handleSubmitReply ";
}/>) : (<Alert> <AlertDescription> Please <Link href=" /auth/login"className=" font-medium text-zion-purple hover:underline" >sign in</Link> to join the discussion. </AlertDescription> </Alert>) ;
}</div>) ;
}This thread has been locked and is no longer open for responses. </AlertDescription> </Alert>) ;
}.filter (reply => !reply.isAnswer) .map (reply => (<ReplyCard key= {;
  reply.id ;
}reply= {;
  reply ;
}onMarkAnswer= {;
  () => handleMarkAsAnswer (reply.id) ;
}canMarkAnswer= {;
  !post.isAnswered && (isAuthor || isAdminOrMod) ;
}/>) ) ;
}</div> </div> </div> </>) ;
}'"
  )
origin/cursor/automate-test-improve-and-merge-code-2533
}
