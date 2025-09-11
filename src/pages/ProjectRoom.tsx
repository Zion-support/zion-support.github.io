import React, { useState } from 'react',;
import { useRouter } from 'next/router', // Changed from useParams;
import { Header } from '@/components/Header',;
import { SEO } from '@/components/SEO',;
import { Button } from '@/components/ui/button',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { MessageSquare, FileText, Video, Calendar, Users, Settings, X } from 'lucide-react';
import { VideoCallRoom } from '@/components/video/VideoCallRoom',;
import { toast } from 'sonner',;
export default function ProjectRoom() {;
  const router = useRouter(),;
  const { projectId: rawProjectId } = router.query,;
  const projectId = typeof rawProjectId === 'string' ? rawProjectId : '', // Ensure string, default to empty if not;
  const [activeTab, setActiveTab] = useState('chat'),;
  const [isInCall, setIsInCall] = useState(false),;
  const [callParticipants, setCallParticipants] = useState<Array<{;
    id: string,;
    name: string,;
    avatar?: string,;
    isMuted?: boolean,;
    isVideoEnabled?: boolean,;
    isScreenSharing?: boolean,;
    isHost?: boolean;
  }>>([;
    {;
      id: 'user-1',;
      name: 'You',;
      isHost: true,;
      isVideoEnabled: true,;
      isMuted: false;
    }
  ]),
  
  const startVideoCall = () => {
    setIsInCall(true),
    toast.success("Video call started", {
      description: "Others can join with the project room link"
    }),
    // Switch to video tab if not already there
    if (activeTab !== 'video') {
      setActiveTab('video')
    }
  },
  
  const endVideoCall = () => {
    setIsInCall(false),
    toast.info("Video call ended", {
      description: "Call duration and participants will be logged"
    })
  },
  
  const simulateUserJoining = () => {
    // This is just for demo purposes - in a real app, this would be handled by the video call service
    const mockUsers = [
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },
  ]),;
  const startVideoCall = () => {;
    setIsInCall(true),;
    toast.success("Video call started", {;
      description: "Others can join with the project room link";
    }),;
    // Switch to video tab if not already there;
    if (activeTab !== 'video') {;
      setActiveTab('video');
    }
  },;
  const endVideoCall = () => {;
    setIsInCall(false),;
    toast.info("Video call ended", {;
      description: "Call duration and participants will be logged";
    });
  },;
  const simulateUserJoining = () => {;
    // This is just for demo purposes - in a real app, this would be handled by the video call service;
    const mockUsers = [;
      { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false },;
      { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true },;
      { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
    ],;
    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)],;
    if (randomUser && !callParticipants.find(p => p.id === randomUser.id)) {;
      setCallParticipants(prev => [...prev, randomUser]);
      toast(`${randomUser.name} joined the call`);
    }
  },

  return (
    <>
      <SEO
        title="Project Room | Zion AI Marketplace"
        description="Collaborate with your team in real-time"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Project Room</h1>
        <p className="text-muted-foreground">
          Real-time collaboration features coming soon.
        </p>
      </div>
    </>

}

}

}

;
}
}
  )
}

