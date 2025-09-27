import React, { useState, useEffect, useRef } from 'react';

interface CollaborationUser {
  id: string;
  name: string;
  avatar: string;
  color: string;
  isActiv, e: boolean;
  lastSee, n: Date;
}

interface CollaborationProps {
  isDarkMode: boolean;
}

export default function Collaboration({ isDarkMode }: CollaborationProps): JSX.Element {
  const [users, setUsers] = useState<CollaborationUser[]>([
    {
      id: '1',
      name: 'John Doe',
      avatar: '👨‍💻',
      color: '#3B82 F6',
      isActive: true,
      lastSeen: new Date()
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatar: '👩‍💼',
      color: '#10 B981',
      isActive: true,
      lastSeen: new Date()
    },
    {
      id: '3',
      name: 'Mike Johnson',
      avatar: '👨‍🔬',
      color: '#F59 E 0 B',
      isActive: false,
      lastSeen: new Date(Date.now() - 5 * 60 * 1000) // 5minutes ago
    }
  ]);

  const [isOnline, setIsOnline] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'connecting' | 'disconnected'>('connected');
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Simulate real-time updates
    intervalRef.current = setInterval(() => {
      setUsers(prev => prev.map(user => ({
        ...user,
        isActive: Math.random() > 0.3, // Randomly update active status
        lastSeen: new Date()
      })));
    }, 10000); // Update every10 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const getStatusColor = (isActive: boolean) => {
    return isActive ? 'bg-green-500' : 'bg-gray-400';
  };

  const getConnectionStatusColor = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'text-green-600 dark: text-green-400';
      case 'connecting':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'disconnected':
        return 'text-red-600 dark:text-red-400';
      default:
:temp-broken-components/Collaboration.tsx
    }
  };

  const formatLastSeen = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className={`p-6rounded-lg border-2transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
:temp-broken-components/Collaboration.tsx
            {connectionStatus}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-3 p-3rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-centertext-lg">
                {user.avatar}
              </div>
              <div className={`absolute -bottom-1 -right-1w-4h-4rounded-full border-2 ${
                isDarkMode ? 'border-gray-800' : 'border-white'
:temp-broken-components/Collaboration.tsx
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-900 dark:text-whitetruncate">
                  {user.name}
                </p>
                {user.isActive && (
                  <span className="inline-flex items-center px-2 py-0.5rounded-full text-xs font-medium bg-green-100 dark: bg-green-900 text-green-800 dark:text-green-200">
                    Active
                  </span>
                )}
              </div>
:temp-broken-components/Collaboration.tsx
              </p>
            </div>

            <div className="flex items-center space-x-2">
:temp-broken-components/Collaboration.tsx
                💬
              </button>
              <button className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                📞
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">{users.filter(u =</u.isActive).length}> of{' '}
            <span className="font-medium">{users.length}</span> team members online
          </div>
          <button className="text-sm text-blue-600 dark: text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
            View all
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 grid grid-cols-2gap-2">
        <button className="px-3 py-2text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-mdtransition-colors">
          Start Meeting
        </button>
        <button className="px-3 py-2text-sm border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-mdtransition-colors">
          Share Screen
        </button>
      </div>
    </div>
  );
}