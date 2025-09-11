import React, { useEffect, useState } from 'react';
import { MessageSquare, Video } from 'lucide-react';
import { use_messaging } from '@/context / MessagingContext';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { ConversationsList, ConversationDetailView } from '@/components / messaging';
import { useIsMobile } from '@/hooks / use - mobile';
<<<<<<< HEAD
<<<<<<< HEAD


import React, { useEffect, useState } from 'react';
import { MessageSquare, Video } from 'lucide-react';
import { useMessaging } from '@/context/MessagingContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ConversationsList, ConversationDetailView } from '@/components/messaging';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from 'sonner';
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
import {logErrorToProduction} from '@/utils/productionLogger';
import {logErrorToProduction} from '@/utils/productionLogger';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { toast } from 'sonner';

import { useRouter } from 'next/router', // Changed from react-router-dom;

import {logErrorToProduction} from '@/utils/productionLogger';
export default function MessagingInbox() {;
import { useRouter } from 'next/router'; // Changed from react-router-dom

import {logErrorToProduction} from '@/utils/productionLogger';

import React, { useEffect, useState } from 'react',
import { MessageSquare, Video } from 'lucide-react'
import { useMessaging } from '@/context/MessagingContext',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { ConversationsList, ConversationDetailView } from '@/components/messaging',
import { useIsMobile } from '@/hooks/use-mobile',
import { toast } from 'sonner',
import { Button } from '@/components/ui/button',
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states',
<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter } from 'next/router', // Changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger',
export default function MessagingInbox() {

import {logErrorToProduction} from '@/utils/productionLogger',
xport default function MessagingInbox() {
=======
import { useRouter } from 'next/router', // Changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger',
export default function MessagingInbox() {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


export default function MessagingInbox() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const {
    conversations
    activeConversation
    setActiveConversation
<<<<<<< HEAD
export default function MessagingInbox() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useRouter } from 'next/router', // Changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger',


export default function MessagingInbox() {



<<<<<<< HEAD
=======
  const { ;
    conversations;
    activeConversation, ;
    setActiveConversation, ;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    markAsRead;
    fetchConversations;
    isLoading
  } = useMessaging();

  const isMobile = useIsMobile();
  const router = useRouter(), // Changed from navigate
  const [activeCall, setActiveCall] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect((,) => {
  const { 
    conversations,
  const { 
    conversations,
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
  const [activeCall, setActiveCall] = useState<string | null>(null),
  
  useEffect(() => {
    // Fetch conversations when component mounts
    const loadData = async () => {
=======

  const { 
    conversations,


    // Fetch conversations when component mounts
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  useEffect((,) => {
  const { 
    conversations,


    // Fetch conversations when component mounts
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const loadData = async () => {
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
    },
    
    loadData()
  }, [fetchConversations]),
    }
    loadData()
  }, [fetchConversations]);
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    };
    
    loadData()
  }, [fetchConversations]);
  
  const startVideoCall = () => {
<<<<<<< HEAD
  
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!activeConversation) {
      toast.error("Please select a conversation first");
      return;
    }
    
    const roomId = `msg-${activeConversation.id}`;
    setActiveCall(roomId);

    },
    
    loadData()
  }, [fetchConversations]),
  
  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first"),
      return
    }
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
<<<<<<< HEAD
    
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
<<<<<<< HEAD
    });
    
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  };
    }),
    
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  },
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."


  
<<<<<<< HEAD
  
  
=======


  
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
=======
  return (
    <ProtectedRoute>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>
              <MessageSquare className="h-6 w-6" />
              Messages
            </h1>


  useEffect((,) => {;


            
<<<<<<< HEAD

            {activeConversation && (
              <Button 
                onClick={startVideoCall}
<<<<<<< HEAD
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
            {activeConversation && (
              <Button
                onClick = {startVideoCall,}
            
              <Button 
                onClick={startVideoCall}
            {activeConversation && (
              <Button
                onClick = {startVideoCall,}
            
            {activeConversation && (
              <Button 
                onClick={startVideoCall}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            {activeConversation && (
              <Button 
                onClick={startVideoCall}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
              >
                <Video className="h-4 w-4" />
                Start Call
              </Button>
            )}
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          

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

              

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <Button
                onClick = {startVideoCall,}
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light">;
                <Video className="h-4 w-4" />;
                Start Call;
              </Button>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
          </div>;
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
;


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Conversation Detail */}
=======
              {/* Conversation Detail */}
              <ConversationDetailView />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </div>
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>
    </ProtectedRoute>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
);
}
loadData () ;
}, [fetchConversations]);
<<<<<<< HEAD
}const roomId = `msg-$ {activeConversation.id ;
}`;
setActiveCall (roomId);
//Show toast notification //Navigate to video call page router.push (`/call/$ {roomId ;
}`), //Changed from navigate ;
}
return (<ProtectedRoute> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto py-8 px-4" > <div className="flex justify-between items-center mb-6" > <h1 className= {`text-$ {;
  isMobile ? '2xl' : '3xl' ;
}font-bold text-white flex items-center gap-2` ";
}> <MessageSquare className="h-6 w-6" /> activeConversation && (<Button onClick={startVideoCall ";
}className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light" > <Video className="h-4 w-4" /> Start Call </Button>) ;
}</div> </div>) : (<ConversationsList conversations= {conversations ;
}activeConversation= {activeConversation ;
}setActiveConversation= {setActiveConversation ;
}markAsRead= {markAsRead ;
=======


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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}/>) ;
}{/* Conversation Detail */ ;
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) ;
}'"}
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
;
  )
}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
