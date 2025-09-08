import React, { useState, useEffect } from 'react'
import Head from 'next/head'
interface LogEntry {
  id: string
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical'
  message: string
  category: string
  component?: string
  timestamp: string
  sessionId?: string
  userId?: string
  error?: {
    name: string
    stack?: string
  }
  performance?: {
    duration: number
    memory?: number
  }
}

const mockLogs: LogEntry[] = [
  {
    id: '1',
    level: 'info',
    message: 'User logged in successfully',
    category: 'authentication',
    component: 'LoginForm',
    timestamp: '2025-01-15T10:00:00Z',
    sessionId: 'sess_123',
    userId: 'user_456'
  },
  {
    id: '2',
    level: 'error',
    message: 'Failed to process payment',
    category: 'payment',
    component: 'PaymentProcessor',
    timestamp: '2025-01-15T10:05:00Z',
    sessionId: 'sess_124',
    userId: 'user_789',
    error: {
      name: 'PaymentError',
      stack: 'Error: Payment failed\n    at PaymentProcessor.process...'
    }
  },
  {
    id: '3',
    level: 'warn',
    message: 'High memory usage detected',
    category: 'performance',
    component: 'MemoryMonitor',
    timestamp: '2025-01-15T10:10:00Z',
    performance: {
      duration: 1500,
      memory: 85
    }
  }
]
const AdminLogsPage: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [filteredLogs, setFilteredLogs] = useState<LogEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [levelFilter, setLevelFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  useEffect(() => {
    // Simulate loading logs
    setTimeout(() => {
      setLogs(mockLogs)
      setFilteredLogs(mockLogs)
      setLoading(false)
    }, 1000)
  }, [])
  useEffect(() => {
    let filtered = [...logs]
    if (searchTerm) {
      filtered = filtered.filter(log => 
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (log.component && log.component.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (levelFilter !== 'all') {
      filtered = filtered.filter(log => log.level === levelFilter)
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(log => log.category === categoryFilter)
    }

    setFilteredLogs(filtered)
  }, [logs, searchTerm, levelFilter, categoryFilter])
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'debug': return 'bg-blue-100 text-blue-800'
      case 'info': return 'bg-green-100 text-green-800'
      case 'warn': return 'bg-yellow-100 text-yellow-800'
      case 'error': return 'bg-red-100 text-red-800'
      case 'critical': return 'bg-red-200 text-red-900'
      default: return 'bg-gray-100 text-gray-800'
    }
  }
  const formatPerformance = (performance: LogEntry['performance']) => {
    if (!performance) return null
    const parts = []
    if (performance.duration) parts.push(`${performance.duration}ms`)
    if (performance.memory) parts.push(`${performance.memory}% memory`)
    return parts.length > 0 ? parts.join(', ') : null
  }
  const errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length
  const warningCount = logs.filter(log => log.level === 'warn').length
  const totalCount = logs.length
  return (
    <>
      <Head>
        <title>Admin Logs - Zion Tech Group</title>
        <meta name="description" content="System logs and monitoring dashboard" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">System Logs</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Logs</h3>
            <p className="text-2xl font-bold">{totalCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Errors</h3>
            <p className="text-2xl font-bold text-red-600">{errorCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Warnings</h3>
            <p className="text-2xl font-bold text-yellow-600">{warningCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
            <p className="text-sm">{new Date().toLocaleString()}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search logs..."
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Level</label>
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Levels</option>
                <option value="debug">Debug</option>
                <option value="info">Info</option>
                <option value="warn">Warning</option>
                <option value="error">Error</option>
                <option value="critical">Critical</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="all">All Categories</option>
                <option value="authentication">Authentication</option>
                <option value="payment">Payment</option>
                <option value="performance">Performance</option>
                <option value="system">System</option>
              </select>
            </div>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Log Entries ({filteredLogs.length})</h2>
          </div>
          <div className="p-6">
            {loading ? (
              <div className="text-center py-8">Loading logs...</div>
            ) : filteredLogs.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No logs found matching the current filters.
              </div>
            ) : (
              <div className="space-y-4">
                {filteredLogs.map((log) => (
                  <div key={log.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getLevelColor(log.level)}`}>
                            {log.level.toUpperCase()}
                          </span>
                          <span className="text-sm text-gray-500">{log.category}</span>
                          {log.component && (
                            <span className="text-sm text-gray-500">• {log.component}</span>
                          )}
                        </div>
                        <p className="text-gray-900 mb-2">{log.message}</p>
                        {log.error && (
                          <details className="mb-2">
                            <summary className="cursor-pointer text-sm text-red-600 hover:text-red-800">
                              View Error Details
                            </summary>
                            <div className="mt-2 p-2 bg-red-50 rounded">
                              <div><strong>Name:</strong> {log.error.name}</div>
                              {log.error.stack && (
                                <div className="mt-2">
                                  <strong>Stack:</strong>
                                  <pre className="text-xs mt-1 whitespace-pre-wrap">{log.error.stack}</pre>
                                </div>
                              )}
                            </div>
                          </details>
                        )}
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div>
                            {log.sessionId && <span>Session: {log.sessionId}</span>}
                            {log.userId && <span> • User: {log.userId}</span>}
                          </div>
                          {log.performance && (
                            <div>{formatPerformance(log.performance)}</div>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 ml-4">
                        {new Date(log.timestamp).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
export default AdminLogsPage