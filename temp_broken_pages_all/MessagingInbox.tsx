<<<<<<< HEAD:temp_broken_pages_all/MessagingInbox.tsx
import React { useEffect useState } from 'react';
import { MessageSquare, Video } from "lucide-react";
import { useMessaging } from "@/context/MessagingContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ConversationsList, ConversationDetailView } from "@/components/messaging";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/enhanced-loading-states";
import { useRouter } from "next/router"; // Changed from react-router-dom

export default function MessagingInbox() {
  return (
    <>
      <SEO 
        title="MessagingInbox - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">MessagingInbox</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
loadData () ;
}, [fetchConversations]);
}const roomId = `msg-$ {activeConversation.id ;
}`;
setActiveCall (roomId);
//Show toast notification //Navigate to video call page router.push (`/call/$ {roomId ;
}`), //Changed from navigate ;
}
return (<ProtectedRoute> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto py-8 px-4" > <div className="flex justify-between items-center mb-6" > <h1 className={`text-$ {;
  isMobile ? '2xl' : '3xl' ;
}font-bold text-white flex items-center gap-2` ";
}> <MessageSquare className="h-6 w-6" /> activeConversation && (<Button onClick={startVideoCall ";
}className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light" > <Video className="h-4 w-4" /> Start Call </Button>) ;
}</div> </div>) : (<ConversationsList conversations= {conversations ;
}activeConversation= {activeConversation ;
}setActiveConversation= {setActiveConversation ;
}markAsRead= {markAsRead ;
}/>) ;
}{/* Conversation Detail */ ;
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) ;
}'"}
import React from 'react';

export default function MessagingInbox() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">MessagingInbox</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/MessagingInbox.tsx
