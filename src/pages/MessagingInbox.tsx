<<<<<<< HEAD


import React, { useEffect, useState } from 'react';
import { MessageSquare, Video } from 'lucide-react';
import { use_messaging } from '@/context / MessagingContext';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { ConversationsList, ConversationDetailView } from '@/components / messaging';
import { useIsMobile } from '@/hooks / use - mobile';
=======

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useEffect, useState } from 'react';
import { MessageSquare, Video } from 'lucide-react';
import { useMessaging } from '@/context/MessagingContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ConversationsList, ConversationDetailView } from '@/components/messaging';
import { useIsMobile } from '@/hooks/use-mobile';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { useRouter } from 'next/router'; // Changed from react-router-dom
<<<<<<< HEAD

<<<<<<< HEAD
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { useRouter } from 'next/router', // Changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger',
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function MessagingInbox() {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD

import { useRouter } from 'next/router', // Changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger',

export default function MessagingInbox() {

=======
>>>>>>> import { useRouter } from 'next/router', // Changed from react-router-dom
import {logErrorToProduction} from '@/utils/productionLogger',
xport default function MessagingInbox() {

  const {
    conversations
    activeConversation
    setActiveConversation
export default function MessagingInbox() {
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662



<<<<<<< HEAD
  const { ;
    conversations;
    activeConversation, ;
    setActiveConversation, ;
>>>>>>> 
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    markAsRead;
    fetchConversations;
    isLoading
  } = useMessaging();

  const isMobile = useIsMobile();
  const router = useRouter(), // Changed from navigate
  const [activeCall, setActiveCall] = useState<string | null>(null);
  useEffect((,) => {
<<<<<<< HEAD
=======
=======
  const { 
    conversations,
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    activeConversation, ;
    setActiveConversation;
    markAsRead;
    fetchConversations;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
    activeConversation, 
    setActiveConversation, 
    markAsRead,
    fetchConversations,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    isLoading
  } = useMessaging(),
  const isMobile = useIsMobile(),
  const router = useRouter(), // Changed from navigate
<<<<<<< HEAD
<<<<<<< HEAD

    // Fetch conversations when component mounts
=======
  const [activeCall, setActiveCall] = useState<string | null>(null),
  
  useEffect(() => {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  const [activeCall, setActiveCall] = useState<string | null>(null);
  
  useEffect((,) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  const [activeCall, setActiveCall] = useState<string | null>(null),
  
  useEffect(() => {
<<<<<<< HEAD
  const [activeCall, setActiveCall] = useState<string | null>(null);
  
  useEffect((,) => {
>>>>>>>     // Fetch conversations when component mounts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    // Fetch conversations when component mounts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const loadData = async () => {
      try {
        await fetchConversations()
      } catch (error) {
        logErrorToProduction('Failed to load conversations:', { data: error })
        toast.error("Failed to load messages. Please try again.")
      }
<<<<<<< HEAD
<<<<<<< HEAD

=======
    }
    loadData()
  }, [fetchConversations]);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    },
    
    loadData()
  }, [fetchConversations]),
<<<<<<< HEAD

=======
<<<<<<< HEAD
    }
    loadData()
  }, [fetchConversations]);
=======
    };
    
    loadData()
  }, [fetchConversations]);
  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const startVideoCall = () => {
=======
  
>>>>>>>   const startVideoCall = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (!activeConversation) {
<<<<<<< HEAD
=======
      toast.error("Please select a conversation first");
      return;
    }
    
    const roomId = `msg-${activeConversation.id}`;
    setActiveCall(roomId);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    },
    
    loadData()
  }, [fetchConversations]),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const startVideoCall = () => {
    if (!activeConversation) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast.error("Please select a conversation first"),
      return
    }
<<<<<<< HEAD
<<<<<<< HEAD

    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const roomId = `msg-${activeConversation.id}`;
    setActiveCall(roomId);
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
    });
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  }

<<<<<<< HEAD
>>>>>>>     
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
=======
=======
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
=======
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    });
    
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  };
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }),
    
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  },
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>   
>>>>>>>   return (
    
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."


  
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
>>>>>>>     <ProtectedRoute>
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>
              <MessageSquare className="h-6 w-6" />
              Messages
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD

            {activeConversation && (
              <Button 
                onClick={startVideoCall}

                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
=======
            {activeConversation && (
              <Button
                onClick = {startVideoCall,}
            
>>>>>>>             {activeConversation && (
              <Button 
                onClick={startVideoCall}
>>>>>>>                 className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
            {activeConversation && (
              <Button
                onClick = {startVideoCall,}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            {activeConversation && (
              <Button 
                onClick={startVideoCall}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >
                <Video className="h-4 w-4" />
                Start Call
              </Button>
            )}
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>           <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">
>>>>>>>             <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
=======
=======
          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Conversations List */}
              {isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <LoadingSpinner variant="primary" />
                </div>
              ) : (
                <ConversationsList
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  conversations = {conversations,}
                  activeConversation = {activeConversation,}
                  setActiveConversation = {setActiveConversation,}
                  markAsRead = {markAsRead,}
                />
              )}
<<<<<<< HEAD
=======
              
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

;
<<<<<<< HEAD

=======
>>>>>>>               {/* Conversation Detail */}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {/* Conversation Detail */}
>>>>>>>               <ConversationDetailView />
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
);
}
loadData () ;
}, [fetchConversations]);
<<<<<<< HEAD
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

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}/>) ;
}{/* Conversation Detail */ ;
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) ;
}'"}
<<<<<<< HEAD
>>>>>>> 
  )
}
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  )
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
