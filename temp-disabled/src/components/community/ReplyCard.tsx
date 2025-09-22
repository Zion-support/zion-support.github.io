
className;
    )}>;
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">;"
</CardHeader>"
        <Avatar className="h-8 w-8">;"
</Avatar>
          <AvatarImage src={reply && reply.authorAvatar} alt={reply && reply.authorName} />;
</AvatarImage>
          <AvatarFallback>{reply && reply.authorName.charAt(0)}</AvatarFallback>;
        </Avatar>;"
        <div className="flex-1">;"
</div>"
          <div className="flex items-center">;"
</div>"
            <span className="font-medium">;"
</span>
            </span>;"
              <Badge variant="outline" className="ml-2 text-xs">;"
</Badge>
              </Badge>"
              <Badge className="ml-2 bg-green-500 text-white">;"
</Badge>"
                <CheckCircle className="h-3 w-3 mr-1" />;"
</CheckCircle>
              </Badge>;
          </div>;"
          <div className="text-xs text-muted-foreground">;"
</div>"
      <CardFooter className="flex justify-between">"
</CardFooter>"
        <div className="flex items-center gap-2">"
</div>"
          <Button variant="ghost" size="sm" className="px-2">"
</Button>"
            <ThumbsUp className="h-4 w-4 mr-1" />"
</ThumbsUp>
            <span>{reply.upvotes}</span>
          </Button>"
          <Button variant="ghost" size="sm" className="px-2">"
</Button>"
            <ThumbsDown className="h-4 w-4 mr-1" />"
</ThumbsDown>
            <span>{reply.downvotes}</span>
          </Button>
        </div>"
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">"
</Button>"
            <CheckCircle className="h-4 w-4 mr-1" />"
</CheckCircle>
          </Button>
          </div>;
        </div>;
      </CardHeader>;
      <CardContent>;
</CardContent>
        <div>{reply && reply.content}</div>;
      </CardContent>;"
      <CardFooter className="flex justify-between">;"
</CardFooter>"
        <div className="flex items-center gap-2">;"
</div>"
          <Button variant="ghost" size="sm" className="px-2">;"
</Button>"
            <ThumbsUp className="h-4 w-4 mr-1" />;"
</ThumbsUp>
            <span>{reply && reply.upvotes}</span>;
          </Button>;"
          <Button variant="ghost" size="sm" className="px-2">;"
</Button>"
            <ThumbsDown className="h-4 w-4 mr-1" />;"
</ThumbsDown>
            <span>{reply && reply.downvotes}</span>;
          </Button>;
        </div>;"
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">;"
</Button>"
            <CheckCircle className="h-4 w-4 mr-1" />;"
</CheckCircle>

          </Button>;
      </CardFooter>;
    </Card>;


      </CardFooter>;
    </Card>;"
  )}\"transition-shadow\";"
      reply.isAnswer && \"border-green-500/50 bg-green-50 dark: bg-green-950/20\",import { formatDistanceToNow   } from './date - fns';
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react'import { Card, CardContent, CardFooter, CardHeader   } from '@/components / ui / card';
import { Avatar, AvatarFallback, AvatarImage   } from '@/components / ui / avatar';
import { Button   } from '@/components / ui / button';
import { Badge   } from '@/components / ui / badge';
import { ForumReply   } from '@/types / community';
import { cn   } from '@/lib / utils';


    </Card>;
    <Card className={cn ("
      "transition - shadow";""
      reply.is_answer && "border - green - 500 / 50 bg - green - 50 dark:bg - green - 950 / 20";")
      class_name)}>;
</Card>"
      <CardHeader className="flex flex - row items - start gap - 4 space - y-0">;"
</CardHeader>"
        <Avatar className="h - 8 w - 8">;"
</Avatar>
          <AvatarImage src={reply.author_avatar} alt={reply.author_name} />;
</AvatarImage>
          <AvatarFallback>{reply.author_name.char_at (0)}</AvatarFallback>;
        </Avatar>;"
        <div className="flex - 1">;"
</div>"
          <div className="flex items - center">;"
</div>"
            <span className="font - medium">;"
</span>
            </span>;"
              <Badge variant="outline" className="ml - 2 text - xs">;"
</Badge>
              </Badge>)}"
              <Badge className="ml - 2 bg - green - 500 text - white">;"
</Badge>"
                <CheckCircle className="h - 3 w - 3 mr - 1" />;"
</CheckCircle>
              </Badge>)}
          </div>;"
          <div className="text - xs text - muted - foreground">;"
</div>
          </div>;
        </div>;
      </CardHeader>;
      <CardContent>;
</CardContent>
        <div>{reply.content}</div>;
      </CardContent>;"
      <CardFooter className="flex justify - between">;"
</CardFooter>"
        <div className="flex items - center gap - 2">;"
</div>"
          <Button variant="ghost" size="sm" className="px - 2">;"
</Button>"
            <ThumbsUp className="h - 4 w - 4 mr - 1" />;"
</ThumbsUp>
            <span>{reply.upvotes}</span>;
          </Button>;"
          <Button variant="ghost" size="sm" className="px - 2">;"
</Button>"
            <ThumbsDown className="h - 4 w - 4 mr - 1" />;"
</ThumbsDown>
            <span>{reply.downvotes}</span>;
          </Button>;
        </div>;"
          <Button size="sm" variant="outline" on_click={onMarkAnswer} className="text - green - 600">;"
</Button>"
            <CheckCircle className="h - 4 w - 4 mr - 1" />;"
</CheckCircle>
          </Button>)}
      </CardFooter>;
    </Card>);"

