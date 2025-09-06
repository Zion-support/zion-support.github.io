
import React, { useEffect, useState } from 'react';
import { MessageSquare, Video } from 'lucide-react';
import { useMessaging } from '@/context/MessagingContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ConversationsList, ConversationDetailView } from '@/components/messaging';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from 'sonner';
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { useRouter } from 'next/router'; // Changed from react-router-dom

import { useRouter } from 'next/router', // Changed from react-router-dom;

import React, { useEffect, useState } from 'react';
import { MessageSquare, Video } from 'lucide-react'
import { useMessaging  } from '@/context/MessagingContext';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { ConversationsList, ConversationDetailView  } from '@/components/messaging';
import { useIsMobile  } from '@/hooks/use-mobile';
import { toast  } from 'sonner';
import { Button  } from '@/components/ui/button';
import { LoadingSpinner  } from '@/components/ui/enhanced-loading-states';
=======

import { useRouter } from 'next/router', // Changed from react-router-dom;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {logErrorToProduction} from '@/utils/productionLogger';
export default function MessagingInbox() {;
import { useRouter } from 'next/router'; // Changed from react-router-dom

import {logErrorToProduction} from '@/utils/productionLogger';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { useRouter } from 'next/router'; // Changed from react-router-dom
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import React, { useEffect, useState } from 'react',
import { MessageSquare, Video } from 'lucide-react'
import { useMessaging } from '@/context/MessagingContext',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ConversationsList, ConversationDetailView } from '@/components/messaging',
import { useIsMobile } from '@/hooks/use-mobile',
import { toast } from 'sonner',
import { Button } from '@/components/ui/button',
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { useRouter } from 'next/router', // Changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function MessagingInbox() {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


export default function MessagingInbox() {

  const {
    conversations
    activeConversation
    setActiveConversation

    markAsRead;
    fetchConversations;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function MessagingInbox() {

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    isLoading
  } = useMessaging(),
  const isMobile = useIsMobile(),
  const router = useRouter(), // Changed from navigate
<<<<<<< HEAD
  const [activeCall, setActiveCall] = useState<string | null>(null);
  useEffect((,) => {
  const { 
    conversations,
<<<<<<< HEAD
    activeConversation, ;
    setActiveConversation;
    markAsRead;
    fetchConversations;
    activeConversation, 
    setActiveConversation, 
    markAsRead,
    fetchConversations,
    isLoading
  } = useMessaging(),
  const isMobile = useIsMobile(),
  const router = useRouter(), // Changed from navigate
  const [activeCall, setActiveCall] = useState<string | null>(null),
  
  useEffect(() => {
  const [activeCall, setActiveCall] = useState<string | null>(null);
  
  useEffect((,) => {
  const [activeCall, setActiveCall] = useState<string | null>(null),
  
  useEffect(() => {
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    // Fetch conversations when component mounts
    const loadData = async () => {
      try {
        await fetchConversations()
      } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
        logErrorToProduction('Failed to load conversations:', { data: error })
        toast.error("Failed to load messages. Please try again.")
      }
    }
    loadData()
  }, [fetchConversations]);
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    };
    
    loadData()
  }, [fetchConversations]);
  
  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first");
      return;
    }
    
    const roomId = `msg-${activeConversation.id}`;
    setActiveCall(roomId);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
        logErrorToProduction('Failed to load conversations:', { data: error })
        toast.error("Failed to load messages. Please try again.")
      }
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    },
    
    loadData()
  }, [fetchConversations]),
  
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first"),
      return
    }
<<<<<<< HEAD
<<<<<<< HEAD
    const roomId = `msg-${activeConversation.id}`;
    setActiveCall(roomId);
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
    });
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  }
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
<<<<<<< HEAD
<<<<<<< HEAD
    });
    
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  };
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    }),
    
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  },
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>
              <MessageSquare className="h-6 w-6" />
              Messages
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


  useEffect((,) => {;


            
=======
=======
            
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            {activeConversation && (
              <Button 
                onClick={startVideoCall}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
              >
                <Video className="h-4 w-4" />
                Start Call
              </Button>
            )}
          </div>
<<<<<<< HEAD
          
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
              {/* Conversations List */}
              {isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <LoadingSpinner variant="primary" />
                </div>
              ) : (
                <ConversationsList
<<<<<<< HEAD
<<<<<<< HEAD
                  conversations = {conversations,}
                  activeConversation = {activeConversation,}
                  setActiveConversation = {setActiveConversation,}
                  markAsRead = {markAsRead,}
                />
              )}
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import React, { useEffect, useState } from 'react',;
import { MessageSquare, Video } from 'lucide-react';
import { useMessaging } from '@/context/MessagingContext',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import { ConversationsList, ConversationDetailView } from '@/components/messaging',;
import { useIsMobile } from '@/hooks/use-mobile',;
import { toast } from 'sonner',;
import { Button } from '@/components/ui/button',;
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states',;
import { useRouter } from 'next/router', // Changed from react-router-dom;
import {logErrorToProduction} from '@/utils/productionLogger',;
export default function MessagingInbox() {;
  const {;
    conversations,;
    activeConversation,;
    setActiveConversation,;
    markAsRead,;
    fetchConversations,;
    isLoading;
  } = useMessaging(),;
  const isMobile = useIsMobile(),;
  const router = useRouter(), // Changed from navigate;
  const [activeCall, setActiveCall] = useState<string | null>(null),;
  useEffect(() => {;
    // Fetch conversations when component mounts;
    const loadData = async () => {;
      try {;
        await fetchConversations();
      } catch (error) {;
        logErrorToProduction('Failed to load conversations:', { data: error }),;
        toast.error("Failed to load messages. Please try again.");
      }
    },;
    loadData();
  }, [fetchConversations]),;
  const startVideoCall = () => {;
    if (!activeConversation) {;
      toast.error("Please select a conversation first"),;
      return;
    }
;
    const roomId = `msg-${activeConversation.id}`,;
    setActiveCall(roomId),;
    // Show toast notification;
    toast.success("Starting video call", {;
      description: "Initializing video call connection...";
    });
    // Navigate to video call page;
    router.push(`/call/${roomId}`), // Changed from navigate;
  };
  return (;
    <ProtectedRoute>;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto py-8 px-4">;
          <div className="flex justify-between items-center mb-6">;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;
              <MessageSquare className="h-6 w-6" />;
              Messages;
            </h1>;
            {activeConversation && (;
              <Button;
                onClick={startVideoCall}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light";
              >;
                <Video className="h-4 w-4" />;
                Start Call;
              </Button>;
            )}
          </div>;
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;
              {/* Conversations List */}
              {isLoading ? (;
                <div className="flex-1 flex items-center justify-center p-8">;
                  <LoadingSpinner variant="primary" />;
                </div>;
              ) : (;
                <ConversationsList;
                  conversations={conversations}
                  activeConversation={activeConversation}
                  setActiveConversation={setActiveConversation}
                  markAsRead={markAsRead}
                />;
              )}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              {/* Conversation Detail */}
              <ConversationDetailView />
            </div>
          </div>
        </div>
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
<<<<<<< HEAD
);
}
loadData () ;
}, [fetchConversations]);
}const roomId = `msg-$ {;
  activeConversation && activeConversation.id ;
}`;
setActiveCall (roomId);
//Show toast notification //Navigate to video call page router && router.push (`/call/$ {;
  roomId ;
}`), //Changed from navigate ;
};
return (<ProtectedRoute> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto py-8 px-4" > <div className="flex justify-between items-center mb-6" > <h1className= {
  `text-$ {
  isMobile ? '2xl' : '3xl' 
}font-bold text-white flex items-center gap-2` "
}> <MessageSquare className="h-6 w-6" /> activeConversation && (<ButtononClick={
  startVideoCall "
}className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"> <Video className="h-4 w-4" /> Start Call </Button>) ;
}</div> </div>) : (<ConversationsListconversations= {
  conversations 
}activeConversation= {
  activeConversation 
}setActiveConversation= {
  setActiveConversation 
}markAsRead= {
  markAsRead 

}/>) ;
}{/* Conversation Detail */ ;
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) ;
}'"}

        logErrorToProduction ('Failed to load conversations:', { data: error }),
        toast.error ("Failed to load messages. Please try again.");
      }
    }
;
    load_data ();
  }, [fetch_conversations]);
;
  const startVideoCall = () =>: any {
    // Check condition
if ( {) {
  $2
}
      toast.error ("Please select a conversation first");
      return;
    }
    const room_id = `msg-${active_conversation.id}`;
    setActiveCall (room_id);
;
    // Show toast notification;
    toast.success ("Starting video call", {
      description: "Initializing video call connection...";
    });
;
    // Navigate to video call page;
    router.push (`/call/${room_id}`), // Changed from navigate;
  }
;
  return (
    <ProtectedRoute>;
      <div className="min - h-screen bg - zion - blue">;
        <div className="container mx - auto py - 8 px - 4">;
          <div className="flex justify - between items - center mb - 6">;
            <h1 className={`text-${is_mobile ? '2xl' : '3xl'} font - bold text - white flex items - center gap - 2`}>;
              <MessageSquare className="h - 6 w - 6" />;
              Messages;
            </h1>;
            {active_conversation && (
              <Button;
                on_click = {startVideoCall, }
                className="flex items - center gap - 2 bg - zion - purple hover:bg - zion - purple - light";
              >;
                <Video className="h - 4 w - 4" />;
                Start Call;
              </Button>)}
          </div>;
          <div className="bg - zion - blue - light / 10 rounded - lg shadow - lg border border - zion - purple / 20 overflow - hidden">;
            <div className={`flex flex - col md:flex - row h-[${is_mobile ? '85vh' : '75vh'}]`}>;
              {/* Conversations List */}
              {is_loading ? (
                <div className="flex - 1 flex items - center justify - center p - 8">;
                  <LoadingSpinner variant="primary" />;
                </div>) : (
                <ConversationsList;
                  conversations = {conversations, }
                  active_conversation = {active_conversation, }
                  setActiveConversation = {setActiveConversation, }
                  markAsRead = {markAsRead, }
                />)}
              {/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {is_mobile && <div className="h - 16"></div>}
      </div>;
    </ProtectedRoute>);
;
}
load_data () ;
}, [fetch_conversations]);
}const room_id = `msg-$ {
  active_conversation.id ;
}`;
setActiveCall (room_id);
//Show toast notification //Navigate to video call page router.push (`/call/$ {
  room_id ;
}`), //Changed from navigate ;
}
return (<ProtectedRoute> <div className="min - h-screen bg - zion - blue" > <div className="container mx - auto py - 8 px - 4" > <div className="flex justify - between items - center mb - 6" > <h1 className= {
  `text-$ {
  is_mobile ? '2xl' : '3xl' ;
}font - bold text - white flex items - center gap - 2` ";
}> <MessageSquare className="h - 6 w - 6" /> active_conversation && (<Button on_click={
  startVideoCall ";
}className="flex items - center gap - 2 bg - zion - purple hover:bg - zion - purple - light" > <Video className="h - 4 w - 4" /> Start Call </Button>) ;
}</div> </div>) : (<ConversationsList conversations= {
  conversations ;
}active_conversation= {
  active_conversation ;
}setActiveConversation= {
  setActiveConversation ;
}markAsRead= {
  markAsRead ;
}/>) ;
}{
  /* Conversation Detail */ ;
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) ;
}'"}



  )
}
;
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
