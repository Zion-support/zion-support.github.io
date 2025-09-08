

        <ConversationItem;
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}
          onClick={() => {
            setActiveConversation(conversation);
            markAsRead(conversation.id);
          }}
        />
      </div>
    )
  },

import { Conversation } from '@/types/messaging;
import { ConversationItem } from ./ConversationItem';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window;

import React, { useMemo } from react';
import { User } from 'lucide-react
import { Conversation  } from @/types/messaging';
import { ConversationItem  } from './ConversationItem;
import { FixedSizeList as List, ListChildComponentProps } from react-window';
interface ConversationsListProps {
  conversations: Conversation[];
  activeConversation: Conversation | null;
  setActiveConversation: (conversation: Conversation) => void;
  markAsRead: (conversationId: string) => Promise<void>
export function ConversationsList({
  conversations;
  activeConversation;
  setActiveConversation;
  markAsRead
}: ConversationsListProps) {
  const itemSize = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (


          <p>No conversations yet</p>;
          <p className='text-sm mt-1>;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>;
      ) : (;

        <List
          height={listHeight}
          itemCount={conversations && conversations.length}
          itemSize={itemSize}


