<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src && src.pages.disabled/ProjectRoom && ProjectRoom.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ProjectRoom && ProjectRoom.jsx import React from \'react\'; export default function ProjectRoom () { const { projectId } = useParams () ; const [activeTab,setActiveTab] = useState (\"chat\") ; const [isInCall,setIsInCall] = useState (false) ; const [callParticipants,setCallParticipants] = useState ([{ \"id\": \"user - 1\",\"name\": \"You\",\"isHost\": \'true\',\"isVideoEnabled\": \'true\',\"isMuted\": false ]) ; const startVideoCall = () => { setIsInCall (true) ; toast && toast.success (\"Video call started\",{ \"description\": \"Others can join with the project room link\" }) ; import React from \'react\'; export default function ProjectRoom () { const { projectId } = useParams () ; const [activeTab,setActiveTab] = useState (\"chat\") ; const [isInCall,setIsInCall] = useState (false) ; const [callParticipants,setCallParticipants] = useState ([{ \"id\": \"user - 1\",\"name\": \"You\",\"isHost\": \'true\',\"isVideoEnabled\": \'true\',\"isMuted\": false ]) ; const startVideoCall = () => { setIsInCall (true) ; toast && toast.success (\"Video call started\",{ \"description\": \"Others can join with the project room link\" }) ;\";
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/ProjectRoom && ProjectRoom.jsx import _React from 'react'; export default function ProjectRoom () { const { projectId } = useParams () ; const [activeTab,setActiveTab] = useState ("chat") ; const [isInCall,setIsInCall] = useState (false) ; const [callParticipants,setCallParticipants] = useState ([{ "id": "user - 1","name": "You","isHost": 'true',"isVideoEnabled": 'true',"isMuted": false ]) ; const startVideoCall = () => { setIsInCall (true) ; toast && toast.success ("Video call started",{ "description": "Others can join with the project room link" }) ; import _React from 'react'; export default function ProjectRoom () { const { projectId } = useParams () ; const [activeTab,setActiveTab] = useState ("chat") ; const [isInCall,setIsInCall] = useState (false) ; const [callParticipants,setCallParticipants] = useState ([{ "id": "user - 1","name": "You","isHost": 'true',"isVideoEnabled": 'true',"isMuted": false ]) ; const startVideoCall = () => { setIsInCall (true) ; toast && toast.success ("Video call started",{ "description": "Others can join with the project room link" }) ;";
=======
<<<<<<< "HEAD": src && src.pages.disabled/ProjectRoom && ProjectRoom.jsx import _React from 'react'; export default function ProjectRoom () { const { projectId } = useParams () ; const [activeTab,setActiveTab] = useState ("chat") ; const [isInCall,setIsInCall] = useState (false) ; const [callParticipants,setCallParticipants] = useState ([{ "id": "user - 1","name": "You","isHost": 'true',"isVideoEnabled": 'true',"isMuted": false ]) ; const startVideoCall = () => { setIsInCall (true) ; toast && toast.success ("Video call started",{ "description": "Others can join with the project room link" }) ; import _React from 'react'; export default function ProjectRoom () { const { projectId } = useParams () ; const [activeTab,setActiveTab] = useState ("chat") ; const [isInCall,setIsInCall] = useState (false) ; const [callParticipants,setCallParticipants] = useState ([{ "id": "user - 1","name": "You","isHost": 'true',"isVideoEnabled": 'true',"isMuted": false ]) ; const startVideoCall = () => { setIsInCall (true) ; toast && toast.success ("Video call started",{ "description": "Others can join with the project room link" }) ;";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
