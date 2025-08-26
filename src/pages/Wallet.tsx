import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Wallet, 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Minus,
  Copy,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle,
  History,
  Settings,
  Shield,
  Zap
} from 'lucide-react';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'payment' | 'refund' | 'commission';
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  description: string;
  date: string;
  reference: string;
}

interface PaymentMethod {
  id: string;
  type: 'card' | 'bank' | 'paypal';
  name: string;
  last4?: string;
  expiry?: string;
  isDefault: boolean;
  isVerified: boolean;
}

export default function WalletPage() {
  const [balance, setBalance] = useState({
    available: 0,
    pending: 0,
    total: 0
  });
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Simulate loading wallet data
    const loadWalletData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setBalance({
        available: 1250.75,
        pending: 450.00,
        total: 1700.75
      });
      
      setTransactions([
        {
          id: '1',
          type: 'payment',
          amount: 250.00,
          currency: 'USD',
          status: 'completed',
          description: 'AI Consulting Services - Project Alpha',
          date: '2025-01-15 14:30',
          reference: 'TXN-001234'
        },
        {
          id: '2',
          type: 'deposit',
          amount: 500.00,
          currency: 'USD',
          status: 'completed',
          description: 'Bank Transfer from Chase Bank',
          date: '2025-01-14 09:15',
          reference: 'DEP-001235'
        },
        {
          id: '3',
          type: 'commission',
          amount: 75.50,
          currency: 'USD',
          status: 'completed',
          description: 'Referral Commission - Sarah Chen',
          date: '2025-01-13 16:45',
          reference: 'COM-001236'
        },
        {
          id: '4',
          type: 'withdrawal',
          amount: 300.00,
          currency: 'USD',
          status: 'pending',
          description: 'Withdrawal to Bank of America',
          date: '2025-01-12 11:20',
          reference: 'WTH-001237'
        },
        {
          id: '5',
          type: 'refund',
          amount: 125.00,
          currency: 'USD',
          status: 'completed',
          description: 'Refund for Cancelled Project',
          date: '2025-01-11 13:10',
          reference: 'REF-001238'
        }
      ]);
      
      setPaymentMethods([
        {
          id: '1',
          type: 'card',
          name: 'Visa ending in 4242',
          last4: '4242',
          expiry: '12/26',
          isDefault: true,
          isVerified: true
        },
        {
          id: '2',
          type: 'bank',
          name: 'Chase Bank',
          last4: '1234',
          isDefault: false,
          isVerified: true
        },
        {
          id: '3',
          type: 'paypal',
          name: 'PayPal Account',
          isDefault: false,
          isVerified: true
        }
      ]);
      
      setIsLoading(false);
    };

    loadWalletData();
  }, []);

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'deposit': return <ArrowDownRight className="w-5 h-5 text-green-400" />;
      case 'withdrawal': return <ArrowUpRight className="w-5 h-5 text-red-400" />;
      case 'payment': return <ArrowUpRight className="w-5 h-5 text-blue-400" />;
      case 'refund': return <ArrowDownRight className="w-5 h-5 text-green-400" />;
      case 'commission': return <ArrowDownRight className="w-5 h-5 text-purple-400" />;
      default: return <DollarSign className="w-5 h-5 text-zion-slate-light" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'deposit': return 'text-green-400';
      case 'withdrawal': return 'text-red-400';
      case 'payment': return 'text-blue-400';
      case 'refund': return 'text-green-400';
      case 'commission': return 'text-purple-400';
      default: return 'text-zion-slate-light';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/40';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
      case 'failed': return 'bg-red-500/20 text-red-400 border-red-500/40';
      default: return 'bg-zion-slate/20 text-zion-slate-light border-zion-slate/40';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'failed': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zion-blue p-6">
        <div className="container mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-zion-blue-dark rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-32 bg-zion-blue-dark rounded"></div>
              ))}
            </div>
            <div className="h-96 bg-zion-blue-dark rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zion-blue p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Wallet</h1>
          <p className="text-zion-slate-light">Manage your funds, transactions, and payment methods</p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zion-slate-light">Available Balance</CardTitle>
              <Wallet className="h-4 w-4 text-zion-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{formatCurrency(balance.available, 'USD')}</div>
              <p className="text-xs text-zion-slate-light">
                Ready for withdrawal or spending
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zion-slate-light">Pending Balance</CardTitle>
              <Clock className="h-4 w-4 text-zion-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{formatCurrency(balance.pending, 'USD')}</div>
              <p className="text-xs text-zion-slate-light">
                Processing or in transit
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zion-slate-light">Total Balance</CardTitle>
              <TrendingUp className="h-4 w-4 text-zion-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{formatCurrency(balance.total, 'USD')}</div>
              <p className="text-xs text-zion-slate-light">
                <span className="text-green-400">+12.5%</span> this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-zion-blue-dark border-zion-purple/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription className="text-zion-slate-light">
              Manage your wallet and funds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                <Plus className="w-4 h-4 mr-2" />
                Add Funds
              </Button>
              <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                <ArrowUpRight className="w-4 h-4 mr-2" />
                Withdraw
              </Button>
              <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                <CreditCard className="w-4 h-4 mr-2" />
                Add Payment Method
              </Button>
              <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                <History className="w-4 h-4 mr-2" />
                View History
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
            <TabsTrigger value="overview" className="data-[state=active]:bg-zion-purple/20">
              Overview
            </TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-zion-purple/20">
              Transactions
            </TabsTrigger>
            <TabsTrigger value="payment-methods" className="data-[state=active]:bg-zion-purple/20">
              Payment Methods
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-zion-purple/20">
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Transactions */}
              <Card className="bg-zion-blue-dark border-zion-purple/20">
                <CardHeader>
                  <CardTitle className="text-white">Recent Transactions</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Your latest financial activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.slice(0, 5).map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 bg-zion-blue-light/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-zion-blue-light/20 rounded-full">
                            {getTransactionIcon(transaction.type)}
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">{transaction.description}</div>
                            <div className="text-zion-slate-light text-xs">{transaction.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                            {transaction.type === 'withdrawal' ? '-' : '+'}{formatCurrency(transaction.amount, transaction.currency)}
                          </div>
                          <Badge variant="outline" size="sm" className={getStatusColor(transaction.status)}>
                            {getStatusIcon(transaction.status)}
                            <span className="ml-1">{transaction.status}</span>
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods Summary */}
              <Card className="bg-zion-blue-dark border-zion-purple/20">
                <CardHeader>
                  <CardTitle className="text-white">Payment Methods</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Your connected payment options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center justify-between p-3 bg-zion-blue-light/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-zion-purple/20 rounded-full">
                            <CreditCard className="w-5 h-5 text-zion-cyan" />
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">{method.name}</div>
                            <div className="text-zion-slate-light text-xs">
                              {method.isVerified ? 'Verified' : 'Unverified'}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {method.isDefault && (
                            <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                              Default
                            </Badge>
                          )}
                          <Button variant="ghost" size="sm" className="text-zion-slate-light hover:text-white">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Transaction History</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Complete record of all your financial activities
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      placeholder="Search transactions..."
                      className="w-64 bg-zion-blue-light/10 border-zion-blue-light text-white placeholder:text-zion-slate-light"
                    />
                    <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 bg-zion-blue-light/10 rounded-lg hover:bg-zion-blue-light/20 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-zion-blue-light/20 rounded-full">
                          {getTransactionIcon(transaction.type)}
                        </div>
                        <div>
                          <div className="text-white font-medium">{transaction.description}</div>
                          <div className="text-zion-slate-light text-sm">{transaction.date}</div>
                          <div className="text-zion-slate-light text-xs">Ref: {transaction.reference}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xl font-bold ${getTransactionColor(transaction.type)}`}>
                          {transaction.type === 'withdrawal' ? '-' : '+'}{formatCurrency(transaction.amount, transaction.currency)}
                        </div>
                        <Badge variant="outline" className={getStatusColor(transaction.status)}>
                          {getStatusIcon(transaction.status)}
                          <span className="ml-1">{transaction.status}</span>
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment-methods" className="space-y-6">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Payment Methods</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Manage your connected payment options
                    </CardDescription>
                  </div>
                  <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Method
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paymentMethods.map((method) => (
                    <Card key={method.id} className="bg-zion-blue-light/10 border-zion-blue-light/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-zion-purple/20 rounded-full">
                            <CreditCard className="w-6 h-6 text-zion-cyan" />
                          </div>
                          {method.isDefault && (
                            <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                              Default
                            </Badge>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-white mb-2">{method.name}</h3>
                        
                        <div className="space-y-2 text-sm text-zion-slate-light mb-4">
                          {method.last4 && (
                            <div>Card ending in {method.last4}</div>
                          )}
                          {method.expiry && (
                            <div>Expires {method.expiry}</div>
                          )}
                          <div className="flex items-center gap-2">
                            {method.isVerified ? (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-yellow-400" />
                            )}
                            {method.isVerified ? 'Verified' : 'Unverified'}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="flex-1 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                            Remove
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-zion-blue-dark border-zion-purple/20">
                <CardHeader>
                  <CardTitle className="text-white">Security Settings</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Protect your wallet and transactions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-zion-blue-light/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-zion-cyan" />
                      <div>
                        <div className="text-white font-medium">Two-Factor Authentication</div>
                        <div className="text-zion-slate-light text-sm">Enhanced security for your wallet</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                      Enable
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-zion-blue-light/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-zion-cyan" />
                      <div>
                        <div className="text-white font-medium">Transaction Limits</div>
                        <div className="text-zion-slate-light text-sm">Set daily withdrawal limits</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                      Configure
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-zion-blue-light/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-zion-cyan" />
                      <div>
                        <div className="text-white font-medium">Fraud Alerts</div>
                        <div className="text-zion-slate-light text-sm">Get notified of suspicious activity</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                      Enable
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-purple/20">
                <CardHeader>
                  <CardTitle className="text-white">Activity Log</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Recent security events and actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-zion-blue-light/10 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <div className="text-sm">
                        <div className="text-white">Login from new device</div>
                        <div className="text-zion-slate-light">San Francisco, CA • 2 hours ago</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-zion-blue-light/10 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <div className="text-sm">
                        <div className="text-white">Payment method added</div>
                        <div className="text-zion-slate-light">Visa card ending in 4242 • 1 day ago</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-zion-blue-light/10 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <div className="text-sm">
                        <div className="text-white">Password changed</div>
                        <div className="text-zion-slate-light">Account security updated • 3 days ago</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}