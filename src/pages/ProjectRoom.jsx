<<<<<<< HEAD
import { Video } from 'lucide-react';""
 export default function ProjectRoom () { const { projectId } = useParams ()  const [activeTab, setActiveTab] = useState('chat') const [isInCall, setIsInCall] = useState(false) const [callParticipants, setCallParticipants] = useState([{ id: 'user - 1', name: 'You', isHost: true, isVideoEnabled: true, isMuted: false ]) const startVideoCall = () => { setIsInCall(true)  toast.success('Video call started', { description: 'Others can join with the project room link' })""
","
}}}""
""
=======
import { Video } from 'lucide-react
 export default function ProjectRoom () { const { projectId } = useParams ()  const [activeTab, setActiveTab] = useState('chat') const [isInCall, setIsInCall] = useState(false) const [callParticipants, setCallParticipants] = useState([{ id: 'user - 1', name: 'You', isHost: true, isVideoEnabled: true, isMuted: false ]) const startVideoCall = () => { setIsInCall(true)  toast.success('Video call started', { description: 'Others can join with the project room link' })"
",
}}}"
 export default function ProjectRoom () { const { projectId } = useParams ()  const [activeTab, setActiveTab] = useState('chat') const [isInCall, setIsInCall] = useState(false) const [callParticipants, setCallParticipants] = useState([{ id: 'user - 1', name: 'You', isHost: true, isVideoEnabled: true, isMuted: false ]) const startVideoCall = () => { setIsInCall(true)  toast.success('Video call started', { description: 'Others can join with the project room link' }) 
"
>>>>>>> main
}}}