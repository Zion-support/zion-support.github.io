


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
        logErrorToProduction('Failed to load conversations:', { data: error })
        toast.error("Failed to load messages. Please try again.")
      }

  const startVideoCall = () => {
    if (!activeConversation) {
      toast.error("Please select a conversation first"),
      return
    }

=======
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),
    
    const roomId = `msg-${activeConversation.id}`,
    setActiveCall(roomId),

    
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Show toast notification
    toast.success("Starting video call", {
      description: "Initializing video call connection..."

    }),

    // Navigate to video call page
    router.push(`/call/${roomId}`), // Changed from navigate
  },

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className={`text-${isMobile ? '2xl' : '3xl'} font-bold text-white flex items-center gap-2`}>
              <MessageSquare className="h-6 w-6" />
              Messages
            </h1>

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
