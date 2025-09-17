import React, { useState } from 'react';

interface Feedback {
  id: string;
  type: 'bug' | 'feature' | 'improvement' | 'general';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'new' | 'in-progress' | 'resolved' | 'closed';
  votes: number;
  createdAt: string;
  user: string;
}

const UserFeedbackSystem: React.FC = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [newFeedback, setNewFeedback] = useState({
    type: 'general' as const,
    title: '',
    description: '',
    priority: 'medium' as const
  });
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<'all' | 'bug' | 'feature' | 'improvement' | 'general'>('all');

  // Sample feedback data
  const sampleFeedback: Feedback[] = [
    {
      id: '1',
      type: 'feature',
      title: 'Add dark mode support',
      description: 'It would be great to have a dark mode option for better user experience during night time usage.',
      priority: 'high',
      status: 'in-progress',
      votes: 23,
      createdAt: '2025-01-15',
      user: 'John Doe'
    },
    {
      id: '2',
      type: 'bug',
      title: 'Search functionality not working on mobile',
      description: 'The search bar returns no results when used on mobile devices, but works fine on desktop.',
      priority: 'critical',
      status: 'new',
      votes: 15,
      createdAt: '2025-01-14',
      user: 'Jane Smith'
    },
    {
      id: '3',
      type: 'improvement',
      title: 'Improve page loading speed',
      description: 'Some pages take too long to load, especially the analytics dashboard. Could we optimize the data fetching?',
      priority: 'medium',
      status: 'resolved',
      votes: 8,
      createdAt: '2025-01-13',
      user: 'Mike Johnson'
    },
    {
      id: '4',
      type: 'feature',
      title: 'Add keyboard shortcuts',
      description: 'Power users would benefit from keyboard shortcuts for common actions like search, navigation, etc.',
      priority: 'low',
      status: 'new',
      votes: 12,
      createdAt: '2025-01-12',
      user: 'Sarah Wilson'
    }
  ];

  const [feedbackList] = useState<Feedback[]>(sampleFeedback);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    const feedbackItem: Feedback = {
      id: Date.now().toString(),
      ...newFeedback,
      status: 'new',
      votes: 0,
      createdAt: new Date().toISOString().split('T')[0],
      user: 'Current User'
    };
    
    setFeedback(prev => [feedbackItem, ...prev]);
    setNewFeedback({
      type: 'general',
      title: '',
      description: '',
      priority: 'medium'
    });
    setShowForm(false);
  };

  const handleVote = (id: string) => {
    setFeedback(prev => prev.map(item => 
      item.id === id ? { ...item, votes: item.votes + 1 } : item
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'bug': return '🐛';
      case 'feature': return '✨';
      case 'improvement': return '🔧';
      case 'general': return '💬';
      default: return '📝';
    }
  };

  const filteredFeedback = feedbackList.filter(item => 
    filter === 'all' || item.type === filter
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">User Feedback System</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {showForm ? 'Cancel' : 'Submit Feedback'}
        </button>
      </div>

      {/* Feedback Form */}
      {showForm && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Submit New Feedback</h3>
          <form onSubmit={handleSubmitFeedback} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select
                  value={newFeedback.type}
                  onChange={(e) => setNewFeedback(prev => ({ ...prev, type: e.target.value as any }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="general">General</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="improvement">Improvement</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <select
                  value={newFeedback.priority}
                  onChange={(e) => setNewFeedback(prev => ({ ...prev, priority: e.target.value as any }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={newFeedback.title}
                onChange={(e) => setNewFeedback(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief description of your feedback"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={newFeedback.description}
                onChange={(e) => setNewFeedback(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Detailed description of your feedback"
                required
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Feedback
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex space-x-2 mb-6">
        {['all', 'bug', 'feature', 'improvement', 'general'].map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === filterType
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {filteredFeedback.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{getTypeIcon(item.type)}</span>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                  {item.priority}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-3">{item.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>By {item.user}</span>
                <span>{item.createdAt}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleVote(item.id)}
                  className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <span>👍</span>
                  <span>{item.votes}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">{feedbackList.length}</div>
            <div className="text-sm text-gray-600">Total Feedback</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {feedbackList.filter(item => item.status === 'resolved').length}
            </div>
            <div className="text-sm text-gray-600">Resolved</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">
              {feedbackList.filter(item => item.status === 'in-progress').length}
            </div>
            <div className="text-sm text-gray-600">In Progress</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-600">
              {feedbackList.filter(item => item.priority === 'critical').length}
            </div>
            <div className="text-sm text-gray-600">Critical</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedbackSystem;