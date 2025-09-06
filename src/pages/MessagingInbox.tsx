
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import React, { useEffect, useState } from 'react';
import { MessageSquare, Video } from 'lucide-react';
import { use_messaging } from '@/context / MessagingContext';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { ConversationsList, ConversationDetailView } from '@/components / messaging';
import { useIsMobile } from '@/hooks / use - mobile';
import { toast } from 'sonner';
<<<<<<< HEAD

import { useRouter } from 'next/router', // Changed from react-router-dom;

import {logErrorToProduction} from '@/utils/productionLogger';
export default function MessagingInbox() {;
=======
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { useRouter } from 'next/router'; // Changed from react-router-dom
<<<<<<< HEAD


import React, { useEffect, useState } from 'react';
import { MessageSquare, Video } from 'lucide-react'
import { useMessaging  } from '@/context/MessagingContext';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { ConversationsList, ConversationDetailView  } from '@/components/messaging';
import { useIsMobile  } from '@/hooks/use-mobile';
import { toast  } from 'sonner';
import { Button  } from '@/components/ui/button';
import { LoadingSpinner  } from '@/components/ui/enhanced-loading-states';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import { useRouter } from 'next/router'; // Changed from react-router-dom

import {logErrorToProduction} from '@/utils/productionLogger';
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function MessagingInbox() {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function MessagingInbox() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



  const { ;
    conversations;
    activeConversation, ;
    setActiveConversation, ;

    markAsRead;
    fetchConversations;
    isLoading;
  } = useMessaging();

  const isMobile = useIsMobile();
  const router = useRouter(), // Changed from navigate;
  const [activeCall, setActiveCall] = useState<string | null>(null);

  const { 
    conversations,
<<<<<<< HEAD


    // Fetch conversations when component mounts
    const loadData = async () => {
=======
import { Button } from '@/components / ui / button';
import { LoadingSpinner } from '@/components / ui / enhanced - loading - states';
import { use_router } from 'next / router'; // Changed from react-router-dom;
import {logErrorToProduction} from '@/utils / production_logger';
export default /**
 * MessagingInbox - Function description
 */
function MessagingInbox() {
  const {
    conversations,
    active_conversation,
    setActiveConversation,
    markAsRead;
    fetch_conversations;
    is_loading;
  } = use_messaging ();
  const is_mobile = useIsMobile ();
  const router = use_router (), // Changed from navigate;
  const [active_call, setActiveCall] = useState < string | null>(null);
;
  useEffect ((, ) => {
    // Fetch conversations when component mounts;
    const load_data = async () => {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      try {
        await fetch_conversations ();
      } catch (error) {


=======
<<<<<<< HEAD
    activeConversation, ;
    setActiveConversation;
    markAsRead;
    fetchConversations;
=======
    activeConversation, 
    setActiveConversation, 
    markAsRead,
    fetchConversations,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    isLoading
  } = useMessaging(),
  const isMobile = useIsMobile(),
  const router = useRouter(), // Changed from navigate
<<<<<<< HEAD
  const [activeCall, setActiveCall] = useState<string | null>(null),
  
  useEffect(() => {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  const [activeCall, setActiveCall] = useState<string | null>(null);
  
  useEffect((,) => {
=======
  const [activeCall, setActiveCall] = useState<string | null>(null),
  
  useEffect(() => {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    // Fetch conversations when component mounts
    const loadData = async () => {
      try {
        await fetchConversations()
      } catch (error) {
        logErrorToProduction('Failed to load conversations:', { data: error })
        toast.error("Failed to load messages. Please try again.")
      }
<<<<<<< HEAD
<<<<<<< HEAD
    }
    loadData()
  }, [fetchConversations]);
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    },
    
    loadData()
  }, [fetchConversations]),
  

  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first"),
      return
    }
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
=======
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
<<<<<<< HEAD

=======
=======
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    });
    
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }),
    
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  },
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


  useEffect((,) => {;
=======


=======
<<<<<<< HEAD
<<<<<<< HEAD
            {activeConversation && (
              <Button
                onClick = {startVideoCall,}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
            

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

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

              

=======
<<<<<<< HEAD
                  conversations = {conversations,}
                  activeConversation = {activeConversation,}
                  setActiveConversation = {setActiveConversation,}
                  markAsRead = {markAsRead,}
                />
              )}
<<<<<<< HEAD
=======
              
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    // Fetch conversations when component mounts;
    const loadData = async () => {;
      try {;
        await fetchConversations();
      } catch (error) {;
        logErrorToProduction('Failed to load conversations:', { data: error }),;
        toast && toast.error("Failed to load messages. Please try again.");
      }
    };

    loadData();
  }, [fetchConversations]);

  const startVideoCall = () => {;
    if (!activeConversation) {;
      toast && toast.error("Please select a conversation first");
      return;
    }

    const roomId = `msg-${activeConversation && activeConversation.id}`;
    setActiveCall(roomId);

    // Show toast notification;
    toast && toast.success("Starting video call", {;
      description: "Initializing video call connection...";
    });

    // Navigate to video call page;
    router && router.push(`/call/${roomId}`), // Changed from navigate;
  };

  return (
    <ProtectedRoute>;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto py-8 px-4">;
          <div className="flex justify-between items-center mb-6">;
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>;
              <MessageSquare className="h-6 w-6" />;
              Messages;
            </h1>;

            {activeConversation && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Button
                onClick = {startVideoCall,}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light">;
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
                <ConversationsList
                  conversations = {conversations,}
                  activeConversation = {activeConversation,}
                  setActiveConversation = {setActiveConversation,}
                  markAsRead = {markAsRead,}
                />;
              )}

;
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              {/* Conversation Detail */}
              <ConversationDetailView />
            </div>
          </div>
        </div>
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>


              {/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;

        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>;
    </ProtectedRoute>;
  );

};
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
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  )
}
;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
