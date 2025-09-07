
import React, { useState } from "react,
import { Avatar, AvatarImage, AvatarFallback } from @/components/ui/avatar",
import { Button } from "@/components/ui/button,
import { Input } from @/components/ui/input",
import { Send, PaperclipIcon, ChevronLeft, MoreVertical, Video, Phone } from 'lucide-react
import { cn } from "@/lib/utils;
import { useRouter  } from next/router';
import { toast } from sonner";
import React, { useState } from 'react
import { Avatar, AvatarImage, AvatarFallback } from @/components/ui/avatar'
import { Button } from '@/components/ui/button
import { Input } from @/components/ui/input'
import {
  Send
  PaperclipIcon
  ChevronLeft
  MoreVertical
  Video
  Phone
} from 'lucide-react
import { cn } from @/lib/utils'
import { useRouter } from 'next/router
import { toast } from sonner'
interface Message {
  id: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  content: string;
  timestamp: string;
  isMe: boolean;
  sender?: string;
  avatar?: string;

  status?: 'sent | delivered' | 'read;

interface MobileChatViewProps {
  contact: {

    id: string;
    name: string;
    avatar?: string;
    status?: string
  },
  messages: Message[];
  onBack: () => void;
  onSendMessage: (content: string) => void

}

export function MobileChatView({ contact, messages, onBack, onSendMessage }: MobileChatViewProps) {
  const [newMessage, setNewMessage] = useState(");
  const router = null;
                message.isMe ? text-primary-foreground/80" : "text-muted-foreground
              )}>
origin/cursor/automate-test-improve-and-merge-code-2533
                {message.timestamp}

                {message.isMe && message.status && (;
                  <span className=ml-1">;


                    {message.status === read' ? '✓✓ : ✓'}

              </div>;
            </div>;
          </div>;
        ))}

      
      <div className="sticky bottom-0 bg-background border-t border-border p-2>
        <div className=flex items-center gap-2">
          <Button variant="ghost size=icon" aria-label="Attach file>
            <PaperclipIcon className=h-5 w-5" />

          </Button>
          <Input
            value={newMessage}

            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...
            className=flex-1'          />

          <Button
            size='icon
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? opacity-50' : '}
            aria-label=Send message'          >
            <Send className='h-5 w-5 />
      
      <div className="sticky bottom-0 bg-background border-t border-border p-2>
        <div className=flex items-center gap-2">
          <Button variant="ghost size=icon" aria-label="Attach file>
            <PaperclipIcon className=h-5 w-5" />
          </Button>
          <Input
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder=Type a message...'
            className='flex-1          />

          <Button
            size=icon'
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? 'opacity-50 : '}
            aria-label='Send message          >
            <Send className=h-5 w-5' />
          </Button>
        </div>
      </div>;
    </div>;
  );
}
}
}
      
      <div className="sticky bottom-0 bg-background border-t border-border p-2>
        <div className=flex items-center gap-2">
          <Button variant="ghost size=icon" aria-label="Attach file>
            <PaperclipIcon className=h-5 w-5" />
          </Button>
          
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...
            className=flex-1"
          />
          
          <Button
            size="icon
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={!newMessage.trim() ? opacity-50" : "}
            aria-label=Send message"
          >
            <Send className="h-5 w-5 />
          </Button>
        </div>

      </div>;

      <div className='sticky bottom-0 bg-background border-t border-border p-2>;
        <div className=flex items-center gap-2'>;
          <Button variant='ghost size=icon' aria-label='Attach file>;
            <PaperclipIcon className=h-5 w-5' />;
          </Button>;

          <Input
            value={newMessage}


            onChange={(e) => setNewMessage(e.target.value)}

            onKeyDown={handleKeyDown}

            className={!newMessage.trim() ? opacity-50" : "}
            aria-label=Send message"
          >
            <Send className="h-5 w-5" />



          </Button>
        </div>
      </div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
