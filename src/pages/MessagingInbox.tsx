
import {logErrorToProduction} from '@/utils/productionLogger';
export default function MessagingInbox() {;
import { useRouter } from 'next/router'; // Changed from react-router-dom

import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function MessagingInbox() {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
    });
    
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  };
    }),
    
    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  },
export default function MessagingInbox() {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


export default function MessagingInbox() {

  const {
    conversations
    activeConversation
    setActiveConversation

    markAsRead;
    fetchConversations;
    isLoading
  } = useMessaging();

  const isMobile = useIsMobile();
  const router = useRouter(), // Changed from navigate
  const [activeCall, setActiveCall] = useState<string | null>(null);
  useEffect((,) => {
  const { 
    conversations,
    // Fetch conversations when component mounts
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

    },
    
    loadData()
  }, [fetchConversations]),
  
  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first"),
      return
    }

    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),

    
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>
              <MessageSquare className="h-6 w-6" />
              Messages
            </h1>
=======


  useEffect((,) => {;


            
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
            {activeConversation && (
              <Button
                onClick={startVideoCall}

                className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light"
              >
                <Video className="h-4 w-4" />
                Start Call
              </Button>
            )}
          </div>

          <div className="bg-zion-blue-light/10 rounded-lg shadow-lg border border-zion-purple/20 overflow-hidden">
            <div className={`flex flex-col md:flex-row h-[${isMobile ? '85vh' : '75vh'}]`}>
              {/* Conversations List */}
              {isLoading ? (
                <div className="flex-1 flex items-center justify-center p-8">
                  <LoadingSpinner variant="primary" />
                </div>
              ) : (
                <ConversationsList
                  conversations = {conversations,}
                  activeConversation = {activeConversation,}
                  setActiveConversation = {setActiveConversation,}
                  markAsRead = {markAsRead,}
                />
              )}
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
