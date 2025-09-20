interface Service {
id: string;,
name: string;
}

import React { useEffect useState } from "react";
import { MessageSquare; Video } from "lucide-react";
import { useMessaging } from "@/context/MessagingContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ConversationsList; ConversationDetailView } from "@/components/messaging";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/enhanced-loading-states";
import { useRouter } from "next/router"; // Changed from react-router-dom;

import React { useEffect useState } from "react";
import { MessageSquare; Video } from "lucide-react";
import { useMessaging } from "@/context/MessagingContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ConversationsList; ConversationDetailView } from "@/components/messaging";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/enhanced-loading-states";
import { useRouter } from "next/router";, // Changed from react-router-dom;
import { logErrorToProduction } from "@/utils/productionLogger";
export default function MessagingInbox() {markAsRead;
fetchConversations;
isLoading} = useMessaging();
return (
<ProtectedRoute>;
<div className="min-h-screen bg-zion-blue">;
<div className="container mx-auto py-8 px-4">;
<div className="flex justify-between items-center mb-6">;
<h1 className={`text-${isMobile ? "2xl" : "3xl"} font-bold text-white flex items-center gap-2`}>;
<MessageSquare className="h-6 w-6" />;
Messages;
</h1>;
{activeConversation && (
<Button;
onClick = {startVideoCall}
className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
>;
<Video className="h-4 w-4" />;
Start Call;
</Button>;
)}
</div>;
<div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">;
<div className={`flex flex-col md:flex-row h-[${isMobile ? "85vh" : "75vh"}]`}>;
{/* Conversations List */}
{isLoading ? (
<div className="flex-1 flex items-center justify-center p-8">;
<LoadingSpinner variant="primary" />;
</div>;
) : (
<ConversationsList;
conversations = {conversations}
<<<<<<< HEAD
                  activeConversation = {activeConversation}
                  setActiveConversation = {setActiveConversation}
                  markAsRead = {markAsRead}
                />
              )}
              {/* Conversation Detail */}
              <ConversationDetailView />
            </div>
          </div>
        </div>
        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
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
=======
activeConversation = {activeConversation}
setActiveConversation = {setActiveConversation}
markAsRead = {markAsRead}
/>;
)}
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
}
loadData () ;
}, [fetchConversations]);
}const roomId = `msg-$ {activeConversation.id ;
}`;
setActiveCall (roomId);
//Show toast notification //Navigate to video call page router.push (`/call/$ {roomId ;
}`), //Changed from navigate ;
}
return (<ProtectedRoute> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto py-8 px-4" > <div className="flex justify-between items-center mb-6" > <h1 className= {`text-$ {;
isMobile ? "2xl" : "3xl" ;
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
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
