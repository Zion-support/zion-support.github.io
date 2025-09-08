import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface TokenConfig {
  conversionRate: number;
  minPurchase: number;
  maxPurchase: number;
  enabled: boolean;
}

interface Transaction {
  id: string;
  userId: string;
  amount: number;
  tokens: number;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  type: 'purchase' | 'refund' | 'bonus';
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    userId: 'user123',
    amount: 100,
    tokens: 1000,
    status: 'completed',
    createdAt: '2025-01-15T10:00:00Z',
    type: 'purchase'
  },
  {
    id: '2',
    userId: 'user456',
    amount: 50,
    tokens: 500,
    status: 'pending',
    createdAt: '2025-01-15T09:30:00Z',
    type: 'purchase'
  },
  {
    id: '3',
    userId: 'user789',
    amount: 0,
    tokens: 100,
    status: 'completed',
    createdAt: '2025-01-14T15:00:00Z',
    type: 'bonus'
  }
];

const AdminTokensPage: React.FC = () => {
  const [config, setConfig] = useState<TokenConfig>({
    conversionRate: 0.05,
    minPurchase: 10,
    maxPurchase: 1000,
    enabled: true
  });
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setTransactions(mockTransactions);
      setLoading(false);
    }, 1000);
  }, []);

  const handleConfigUpdate = async (updates: Partial<TokenConfig>) => {
    setSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setConfig(prev => ({ ...prev, ...updates }));
    } catch (error) {
      console.error('Error updating config:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleIssueTokens = async () => {
    if (config.conversionRate <= 0) {
      window.alert('Conversion rate must be greater than 0');
      return;
    }
    await handleConfigUpdate(config);
  };

  const handleRevokeTokens = async () => {
    await handleConfigUpdate({ enabled: false });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'purchase': return 'bg-blue-100 text-blue-800';
      case 'refund': return 'bg-red-100 text-red-800';
      case 'bonus': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalTokensIssued = transactions
    .filter(t => t.status === 'completed')
    .reduce((sum, t) => sum + t.tokens, 0);

  const totalRevenue = transactions
    .filter(t => t.status === 'completed' && t.type === 'purchase')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <>
      <Head>
        <title>Admin Tokens - Zion Tech Group</title>
        <meta name="description" content="Manage token system and transactions" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Token Management</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Tokens Issued</h3>
            <p className="text-2xl font-bold">{totalTokensIssued.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            <p className="text-2xl font-bold text-green-600">${totalRevenue.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">System Status</h3>
            <p className={`text-2xl font-bold ${config.enabled ? 'text-green-600' : 'text-red-600'}`}>
              {config.enabled ? 'Active' : 'Disabled'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Token Configuration</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Conversion Rate</label>
                  <input
                    type="number"
                    step="0.01"
                    value={config.conversionRate}
                    onChange={(e) => setConfig(prev => ({ ...prev, conversionRate: parseFloat(e.target.value) || 0 }))}
                    className="w-full p-2 border rounded-md"
                    placeholder="0.05"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Example: 0.05 means 100 ZION$ = $5 credit
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Min Purchase ($)</label>
                    <input
                      type="number"
                      value={config.minPurchase}
                      onChange={(e) => setConfig(prev => ({ ...prev, minPurchase: parseInt(e.target.value) || 0 }))}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Max Purchase ($)</label>
                    <input
                      type="number"
                      value={config.maxPurchase}
                      onChange={(e) => setConfig(prev => ({ ...prev, maxPurchase: parseInt(e.target.value) || 0 }))}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={config.enabled}
                    onChange={(e) => setConfig(prev => ({ ...prev, enabled: e.target.checked }))}
                    className="mr-2"
                  />
                  <label className="text-sm font-medium">Enable Token System</label>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={handleIssueTokens}
                    disabled={saving}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                  >
                    {saving ? 'Saving...' : 'Save Configuration'}
                  </button>
                  <button
                    onClick={handleRevokeTokens}
                    disabled={saving}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
                  >
                    Disable System
                  </button>
                </div>
              </div>
            </div>

            {/* Conversion Rules */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Conversion Rules</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>1 ZION$ = ${config.conversionRate} USD</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Minimum purchase: ${config.minPurchase}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Maximum purchase: ${config.maxPurchase}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>System status: {config.enabled ? 'Active' : 'Disabled'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transactions Panel */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            
            {loading ? (
              <div className="text-center py-8">Loading transactions...</div>
            ) : transactions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">No transactions found.</div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-auto">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">User: {transaction.userId}</p>
                        <p className="text-sm text-gray-600">
                          {transaction.type === 'purchase' && `$${transaction.amount} → ${transaction.tokens} tokens`}
                          {transaction.type === 'refund' && `Refund: ${transaction.tokens} tokens`}
                          {transaction.type === 'bonus' && `Bonus: ${transaction.tokens} tokens`}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getTypeColor(transaction.type)}`}>
                          {transaction.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(transaction.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminTokensPage;