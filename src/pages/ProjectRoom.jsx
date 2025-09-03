<<<<<<< HEAD
 export default function ProjectRoom () {} const ;{ projectId } = useParams ()  const;const [activeTab, setActiveTab] = useState(&apos;chat&apos;)&apos;' const [isInCall, setIsInCall] = useState(false) const;const [callParticipants, setCallParticipants] = useState([{ id: &apos;user - 1&apos;, name: &apos;You&apos;, isHost: true, isVideoEnabled: true, isMuted: false ])&apos;} const startVideoCall = () => { setIsInCall(true)  toast.success(&apos;Video call started&apos;, { description: &apos;Others can join with the project room link&apos; })
';'
=======
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
>>>>>>> main
