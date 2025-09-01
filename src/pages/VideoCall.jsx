import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { 
    Phone, 
    PhoneOff, 
    Video, 
    VideoOff, 
    Mic, 
    MicOff, 
    Monitor, 
    Users, 
    Settings,
    MessageCircle
} from 'lucide-react';

export default function VideoCall() {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const [isJoining, setIsJoining] = useState(false);
    const [hasJoined, setHasJoined] = useState(false);
    const [isVideoEnabled, setIsVideoEnabled] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isScreenSharing, setIsScreenSharing] = useState(false);
    const [participants, setParticipants] = useState([
        {
            id: 'user-1',
            name: 'You',
            isVideoEnabled: true,
            isMuted: false,
            isScreenSharing: false
        }
    ]);

    const handleJoinCall = () => {
        setIsJoining(true);
        // Simulate connection delay
        setTimeout(() => {
            setHasJoined(true);
            setIsJoining(false);
        }, 1500);
    };

    const handleLeaveCall = () => {
        setHasJoined(false);
        // Navigate back after a short delay
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    };

    const toggleVideo = () => {
        setIsVideoEnabled(!isVideoEnabled);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const toggleScreenShare = () => {
        setIsScreenSharing(!isScreenSharing);
    };

    const simulateUserJoining = () => {
        // This is just for demo purposes - in a real app, this would be handled by the video call service
        const mockUsers = [
            { id: 'user-2', name: 'Alex Chen', isVideoEnabled: true, isMuted: false, isScreenSharing: false },
            { id: 'user-3', name: 'Taylor Kim', isVideoEnabled: false, isMuted: true, isScreenSharing: false },
            { id: 'user-4', name: 'Jordan Smith', isVideoEnabled: true, isMuted: false, isScreenSharing: true }
        ];
        const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
        if (!participants.find(p => p.id === randomUser.id)) {
            setParticipants(prev => [...prev, randomUser]);
        }
    };

    return (
        <>
            <SEO title={`Video Call - Room ${roomId}`} description="Zion video call" />

            <main className="container mx-auto py-8 min-h-[calc(100vh-200px)]">
                {!hasJoined ? (
                    <div className="flex flex-col items-center justify-center h-96 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-8">
                        <h1 className="text-3xl font-bold mb-6 text-white">Join Video Call</h1>
                        <p className="text-gray-300 mb-8">Room ID: {roomId}</p>
                        <Button 
                            onClick={handleJoinCall} 
                            disabled={isJoining} 
                            size="lg" 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                            {isJoining ? "Connecting..." : "Join Call"}
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Video Call Interface */}
                        <div className="bg-gray-900 rounded-lg p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                {participants.map((participant) => (
                                    <div key={participant.id} className="relative">
                                        <div className="bg-gray-800 rounded-lg p-4 text-center">
                                            <div className="w-full h-32 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                                                {participant.isVideoEnabled ? (
                                                    <div className="text-gray-400 text-2xl">📹</div>
                                                ) : (
                                                    <div className="text-gray-400 text-2xl">👤</div>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-center gap-2 mb-2">
                                                <span className="text-white font-medium">{participant.name}</span>
                                                {participant.isMuted && <MicOff className="w-4 h-4 text-red-400" />}
                                                {participant.isScreenSharing && <Monitor className="w-4 h-4 text-blue-400" />}
                                            </div>
                                            {participant.id === 'user-1' && (
                                                <div className="text-xs text-gray-400">(You)</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Call Controls */}
                            <div className="flex items-center justify-center gap-4">
                                <Button
                                    onClick={toggleMute}
                                    variant={isMuted ? "destructive" : "outline"}
                                    size="lg"
                                    className="rounded-full w-14 h-14"
                                >
                                    {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                                </Button>

                                <Button
                                    onClick={toggleVideo}
                                    variant={!isVideoEnabled ? "destructive" : "outline"}
                                    size="lg"
                                    className="rounded-full w-14 h-14"
                                >
                                    {isVideoEnabled ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
                                </Button>

                                <Button
                                    onClick={toggleScreenShare}
                                    variant={isScreenSharing ? "default" : "outline"}
                                    size="lg"
                                    className="rounded-full w-14 h-14"
                                >
                                    <Monitor className="w-6 h-6" />
                                </Button>

                                <Button
                                    onClick={handleLeaveCall}
                                    variant="destructive"
                                    size="lg"
                                    className="rounded-full w-14 h-14"
                                >
                                    <PhoneOff className="w-6 h-6" />
                                </Button>
                            </div>

                            {/* Additional Controls */}
                            <div className="flex items-center justify-center gap-4 mt-4">
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Chat
                                </Button>
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                    <Users className="w-4 h-4 mr-2" />
                                    Participants
                                </Button>
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                    <Settings className="w-4 h-4 mr-2" />
                                    Settings
                                </Button>
                            </div>
                        </div>

                        {/* Demo Controls */}
                        <div className="flex justify-center">
                            <Button 
                                variant="outline" 
                                onClick={simulateUserJoining} 
                                className="text-sm border-gray-600 text-gray-300 hover:bg-gray-700"
                            >
                                Simulate user joining (demo only)
                            </Button>
                        </div>

                        {/* Call Info */}
                        <div className="text-center text-gray-400 text-sm">
                            <p>Room ID: {roomId}</p>
                            <p>Participants: {participants.length}</p>
                            <p>Call Duration: 00:00:00</p>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}
