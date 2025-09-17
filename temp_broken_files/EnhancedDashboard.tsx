import React, { useState, useEffect } from 'react';
import { 
  ChartBarIcon, 
  CogIcon, 
  MagnifyingGlassIcon,
  BellIcon,
  UserIcon,
  HomeIcon,
  BookOpenIcon,
  BriefcaseIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import AdvancedAnalyticsTracker from './AdvancedAnalyticsTracker';
import AdvancedNotificationSystem from './AdvancedNotificationSystem';
import AdvancedSearchSystem from './AdvancedSearchSystem';
import AdvancedUserPreferences from './AdvancedUserPreferences';

interface DashboardWidget {
  id: string;
  title: string;
  component: React.ComponentType<any>;
  props?: any;
  gridSize: 'small' | 'medium' | 'large' | 'full';
  category: 'analytics' | 'content' | 'tools' | 'system';
}

interface EnhancedDashboardProps {
  showWelcome?: boolean;
  defaultLayout?: string[];
  className?: string;
}

const EnhancedDashboard: React.FC<EnhancedDashboardProps> = ({
  showWelcome = true,
  defaultLayout = ['search', 'analytics', 'quickActions'],
  className = ""
}) => {
  const [activeWidgets, setActiveWidgets] = useState<string[]>(defaultLayout);
  const [showPreferences, setShowPreferences] = useState(false);
  const [userPreferences, setUserPreferences] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Load user preferences
  useEffect(() => {
    const saved = localStorage.getItem('userPreferences');
    if (saved) {
      try {
        setUserPreferences(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading preferences:', error);
      }
    }
  }, []);

  const quickActions = [
    {
      id: 'ai-hub',
      title: 'AI Innovation Hub',
      description: 'Explore cutting-edge AI solutions',
      icon: '🧠',
      url: '/pages/AIInnovationHub2026',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'quantum',
      title: 'Quantum Computing',
      description: 'Revolutionary quantum technology',
      icon: '⚡',
      url: '/pages/QuantumComputingSolutions2026',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'neural',
      title: 'Neural Interfaces',
      description: 'Brain-computer interface tech',
      icon: '🧬',
      url: '/pages/NeuralInterfaceTechnology2026',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'blog',
      title: 'Tech Blog',
      description: 'Latest insights and articles',
      icon: '📚',
      url: '/pages/ComprehensiveBlog2026',
      color: 'from-rose-500 to-pink-600'
    },
    {
      id: 'cases',
      title: 'Case Studies',
      description: 'Success stories and examples',
      icon: '📊',
      url: '/pages/ComprehensiveCaseStudies2026',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'contact',
      title: 'Get in Touch',
      description: 'Contact our experts',
      icon: '💬',
      url: '/contact',
      color: 'from-gray-500 to-gray-700'
    }
  ];

  const recentActivity = [
    {
      id: '1',
      type: 'view',
      title: 'AI Innovation Hub 2026',
      time: '2 minutes ago',
      icon: '🧠'
    },
    {
      id: '2',
      type: 'download',
      title: 'Quantum Computing Whitepaper',
      time: '15 minutes ago',
      icon: '📄'
    },
    {
      id: '3',
      type: 'contact',
      title: 'Inquiry about Neural Interfaces',
      time: '1 hour ago',
      icon: '💬'
    },
    {
      id: '4',
      type: 'view',
      title: 'Case Study: Enterprise AI',
      time: '2 hours ago',
      icon: '📊'
    }
  ];

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1';
      case 'medium':
        return 'col-span-2 row-span-1';
      case 'large':
        return 'col-span-2 row-span-2';
      case 'full':
        return 'col-span-full row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const QuickActionsWidget = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <BriefcaseIcon className="h-5 w-5 mr-2 text-blue-600" />
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {quickActions.map((action) => (
          <a
            key={action.id}
            href={action.url}
            className={`group relative p-4 rounded-lg bg-gradient-to-r ${action.color} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
          >
            <div className="text-2xl mb-2">{action.icon}</div>
            <h4 className="font-semibold text-sm mb-1">{action.title}</h4>
            <p className="text-xs opacity-90">{action.description}</p>
          </a>
        ))}
      </div>
    </div>
  );

  const RecentActivityWidget = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <ClockIcon className="h-5 w-5 mr-2 text-green-600" />
        Recent Activity
      </h3>
      <div className="space-y-3">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="text-lg mr-3">{activity.icon}</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
            <div className={`w-2 h-2 rounded-full ${
              activity.type === 'view' ? 'bg-blue-500' :
              activity.type === 'download' ? 'bg-green-500' :
              'bg-purple-500'
            }`} />
          </div>
        ))}
      </div>
    </div>
  );

  const SystemStatusWidget = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <CogIcon className="h-5 w-5 mr-2 text-gray-600" />
        System Status
      </h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Website Performance</span>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-xs text-green-600">Excellent</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">AI Services</span>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-xs text-green-600">Online</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Quantum Systems</span>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-xs text-yellow-600">Maintenance</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Support System</span>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-xs text-green-600">Available</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gray-100 ${className}`}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Zion Tech Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowPreferences(true)}
                className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full"
                title="Preferences"
              >
                <CogIcon className="h-5 w-5" />
              </button>
              <div className="text-sm text-gray-500">
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      {showWelcome && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  {getGreeting()}! Welcome to Zion Tech Group
                </h2>
                <p className="text-blue-100 mt-1">
                  Explore revolutionary AI, quantum computing, and neural interface technologies
                </p>
              </div>
              <div className="hidden md:block">
                <div className="text-right">
                  <div className="text-blue-100 text-sm">Today</div>
                  <div className="text-xl font-semibold">
                    {currentTime.toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <AdvancedSearchSystem
            placeholder="Search AI solutions, quantum computing, neural interfaces..."
            className="w-full"
          />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Analytics */}
          {activeWidgets.includes('analytics') && (
            <div className="lg:col-span-2">
              <AdvancedAnalyticsTracker showRealtime={true} showTopPages={true} />
            </div>
          )}

          {/* System Status */}
          {activeWidgets.includes('systemStatus') && (
            <div className="lg:col-span-1">
              <SystemStatusWidget />
            </div>
          )}

          {/* Quick Actions */}
          {activeWidgets.includes('quickActions') && (
            <div className="lg:col-span-2">
              <QuickActionsWidget />
            </div>
          )}

          {/* Recent Activity */}
          {activeWidgets.includes('recentActivity') && (
            <div className="lg:col-span-1">
              <RecentActivityWidget />
            </div>
          )}
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Revolutionary Technology Portfolio</h3>
            <p className="text-gray-300">Discover our cutting-edge solutions transforming industries worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-lg font-semibold mb-2">AI Consciousness Systems</h4>
              <p className="text-gray-300 text-sm">Advanced artificial intelligence with consciousness-like capabilities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-semibold mb-2">Quantum Neural Networks</h4>
              <p className="text-gray-300 text-sm">Quantum-enhanced neural processing for unprecedented performance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🧬</div>
              <h4 className="text-lg font-semibold mb-2">Neural Interface Technology</h4>
              <p className="text-gray-300 text-sm">Direct brain-computer interfaces for seamless human-AI interaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notification System */}
      <AdvancedNotificationSystem
        position="top-right"
        maxNotifications={5}
      />

      {/* User Preferences Modal */}
      <AdvancedUserPreferences
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        onSave={(prefs) => {
          setUserPreferences(prefs);
          setShowPreferences(false);
        }}
      />
    </div>
  );
};

// Fix missing import
const ClockIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default EnhancedDashboard;