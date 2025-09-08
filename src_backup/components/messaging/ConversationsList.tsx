<<<<<<< HEAD


=======
<<<<<<< HEAD
import React, { useMemo } from 'react';
import { User } from 'lucide-react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useMemo } from 'react',;
import { User } from 'lucide-react';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useMemo } from 'react';
import { User } from 'lucide-react';
import React, { useMemo } from 'react;
import { User } from lucide-react';
>>>>>>> origin/resolved-merge-conflicts

import { Conversation } from '@/types/messaging',;
import { ConversationItem } from './ConversationItem',;
import { FixedSizeList as List, ListChildComponentProps } from 'react-window',;
interface ConversationsListProps {;
  conversations: Conversation[],;
  activeConversation: Conversation | null,;
  setActiveConversation: (conversation: Conversation) => void,;
  markAsRead: (conversationId: string) => Promise<void>;

}
;
import React, { useMemo } from 'react',import { User  } from 'lucide-react';
import { Conversation } from '@/types/messaging',import { ConversationItem } from './ConversationItem',import { FixedSizeList as List, ListChildComponentProps } from 'react-window',interface ConversationsListProps  {conversations: Conversation[],activeConversation: Conversation | null,setActiveConversation: (conversation: Conversation) => void,markAsRead: (conversationId: string) => Promise<void>;
}export function ConversationsList() {const itemSize = 80,const listHeight = useMemo(() => {return Math.min(conversations.length * itemSize, 600)}, [conversations.length]),const Row = ({ index, style }: ListChildComponentProps) => {const conversation = conversations[index],if (!conversation) {return <div style={style} />;
    }return (<div style={style}>;
=======
import React, { useMemo } from 'react',;
import { User } from 'lucide-react';
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Conversation } from '@/types/messaging',;
import { ConversationItem } from './ConversationItem',;
import { FixedSizeList as List, ListChildComponentProps } from 'react-window',;
interface ConversationsListProps {;
  conversations: Conversation[],;
  activeConversation: Conversation | null,;
  setActiveConversation: (conversation: Conversation) => void,;
  markAsRead: (conversationId: string) => Promise<void>;

}
;
export function ConversationsList({;
  conversations,;
  activeConversation,;
  setActiveConversation,;
  markAsRead;
}: ConversationsListProps) {;
  const itemSize = 80,;
  const listHeight = useMemo(() => {;
    return Math.min(conversations.length * itemSize, 600);
  }, [conversations.length]),;
  const Row = ({ index, style }: ListChildComponentProps) => {;
    const conversation = conversations[index],;
    if (!conversation) {;
      return <div style={style} />;
    }
;
    return (;
      <div style={style}>;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <ConversationItem;
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}
          onClick={() => {;
            setActiveConversation(conversation);
            markAsRead(conversation.id);
          }
        />
      </div>
    )
  },

import React, { useMemo } from 'react';
import { User } from 'lucide-react';
import { Conversation } from '@/types/messaging';
import { ConversationItem } from './ConversationItem';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

import React, { useMemo } from 'react';
import { User } from 'lucide-react'
import { Conversation  } from '@/types/messaging';
import { ConversationItem  } from './ConversationItem';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
    <div className='w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto'>;
  markAsRead: (conversationId: string) => Promise<void>;
export function ConversationsList() {const itemSize  = null;return (<div className='w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto'>;
      <div className='p-3 border-b border-zion-purple/20'>;
        <h3 className='font-medium text-white'>Conversations</h3>;
      </div>;{conversations && conversations.length === 0 ? (<div className='p-8 text-center text-zion-slate'>;
          <User className='h-10 w-10 mx-auto mb-2 text-zion-purple/40' />;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className='w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto>;
  markAsRead: (conversationId: string) => Promise<void>;
export function ConversationsList() {const itemSize  = null;return (<div className=w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto'>;
      <div className='p-3 border-b border-zion-purple/20>;
        <h3 className=font-medium text-white'>Conversations</h3>;
      </div>;{conversations && conversations.length === 0 ? (<div className='p-8 text-center text-zion-slate>;
          <User className=h-10 w-10 mx-auto mb-2 text-zion-purple/40' />;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className='w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto'>;
      <div className='p-3 border-b border-zion-purple/20'>;
        <h3 className='font-medium text-white'>Conversations</h3>;
      </div>;

      {conversations && conversations.length === 0 ? (;
        <div className='p-8 text-center text-zion-slate'>;
          <User className='h-10 w-10 mx-auto mb-2 text-zion-purple/40' />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <p>No conversations yet</p>;
          <p className='text-sm mt-1'>;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>;
      ) : (;

        <List
          height={listHeight}
          itemCount={conversations && conversations.length}
          itemSize={itemSize}
<<<<<<< HEAD


=======
<<<<<<< HEAD
          width='100%';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
          width="100%"
        >
          {Row}
        </List>
      )}
    </div>
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          width="100%;
>>>>>>> origin/resolved-merge-conflicts
        >;
=======
          width="100%"
        >
>>>>>>> origin/chore/fix-lint-and-merge
          {Row}
        </List>
      )}
<<<<<<< HEAD
    </div>;
  )}<div className='w - full md:w - 80 border - r border - zion - purple / 20 overflow - y-auto'>;
      <div className='p - 3 border - b border - zion - purple / 20'>;
        <h3 className='font - medium text - white'>Conversations</h3>;
      </div>;
      {conversations.length === 0 ? (<div className='p - 8 text - center text - zion - slate'>;
          <User className='h - 10 w - 10 mx - auto mb - 2 text - zion - purple / 40' />;
          <p > No conversations yet</p>;
          <p className='text - sm mt - 1'>;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>) : (<List;
          height={list_height}
          item_count={conversations.length}
          item_size={item_size}
          width='100%'        >;
          {Row}
        </List>)}
    </div>)}{Row}
        </List>;
      )}</div>;
  )}
          width='100%';
        >;
          {Row}
        </List>;
      )}
    </div>;
  )}interface ConversationsListProps  {conversations: Conversation[];
  activeConversation: Conversation | null;
  onConversationSelect: (conversation: Conversation) => void;
  loading?: boolean;
}export const ConversationsList: React.FC<ConversationsListProps> = ({conversations,activeConversation,onConversationSelect,loading = false}) => {const sortedConversations = useMemo(() => {return [...conversations].sort((a, b) => {const aTime = new Date(a.lastMessage?.timestamp || a.createdAt).getTime()const bTime = new Date(b.lastMessage?.timestamp || b.createdAt).getTime()return bTime - aTime;
    })}, [conversations])const ConversationRow = ({ index, style }: ListChildComponentProps) => {const conversation = sortedConversations[index];
    return (<div style={style}>;
        <ConversationItem;
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}
          onClick={() => onConversationSelect(conversation)}
        />;
      </div>;
    )}if (loading) {return (<div className='flex items-center justify-center h-full'>;
        <div className='text-center'>;
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto'></div>;
          <p className='mt-2 text-sm text-gray-500'>Loading conversations...</p>;
        </div>;
      </div>;
    )}if (conversations.length === 0) {return (<div className='flex items-center justify-center h-full'>;
        <div className='text-center'>;
          <User className='mx-auto h-12 w-12 text-gray-400' />;
          <h3 className='mt-2 text-sm font-medium text-gray-900'>No conversations</h3>;
          <p className='mt-1 text-sm text-gray-500'>;
            Start a conversation to see it here.;
          </p>;
        </div>;
      </div>;
    )}return (<div className='h-full'>;
      <List;
        height={600}
        itemCount={sortedConversations.length}
        itemSize={80}
        width='100%';
      >;
        {ConversationRow}
      </List>
    </div>
  );
};

  );
origin/cursor/automate-test-improve-and-merge-code-2533
      </List>;
    </div>;
  )})
    </div>
=======
    </div>
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
