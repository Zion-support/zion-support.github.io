import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  UserPlus, 
  Share2, 
  Copy, 
  ExternalLink,
  TrendingUp,
  DollarSign,
  Gift,
  Calendar,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle,
  Clock,
  Star,
  Search
} from 'lucide-react';

interface Referral {
  id: string;
  name: string;
  email: string;
  phone?: string;
  status: 'pending' | 'contacted' | 'qualified' | 'converted' | 'lost';
  source: 'direct' | 'social' | 'email' | 'website' | 'partner';
  value: number;
  commission: number;
  date: string;
  notes: string;
  tags: string[];
}

interface ReferralStats {
  totalReferrals: number;
  pendingReferrals: number;
  convertedReferrals: number;
  totalValue: number;
  totalCommission: number;
  conversionRate: number;
  monthlyGrowth: number;
}

export default function Referrals() {
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [referralStats, setReferralStats] = useState<ReferralStats>({
    totalReferrals: 0,
    pendingReferrals: 0,
    convertedReferrals: 0,
    totalValue: 0,
    totalCommission: 0,
    conversionRate: 0,
    monthlyGrowth: 0
  });

  useEffect(() => {
    // Simulate loading referrals data
    const loadReferrals = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockReferrals: Referral[] = [
        {
          id: '1',
          name: 'Sarah Johnson',
          email: 'sarah.johnson@techcorp.com',
          phone: '+1 (555) 123-4567',
          status: 'converted',
          source: 'direct',
          value: 25000,
          commission: 2500,
          date: '2025-01-15',
          notes: 'Excellent referral from long-time client. Very interested in our AI services.',
          tags: ['AI Services', 'Enterprise', 'High Value']
        },
        {
          id: '2',
          name: 'Michael Chen',
          email: 'michael.chen@innovate.ai',
          phone: '+1 (555) 234-5678',
          status: 'qualified',
          source: 'social',
          value: 15000,
          commission: 1500,
          date: '2025-01-14',
          notes: 'Reached out through LinkedIn. Has budget and decision-making authority.',
          tags: ['Machine Learning', 'Startup', 'Decision Maker']
        },
        {
          id: '3',
          name: 'Emily Rodriguez',
          email: 'emily.rodriguez@quantumtech.com',
          phone: '+1 (555) 345-6789',
          status: 'contacted',
          source: 'email',
          value: 8000,
          commission: 800,
          date: '2025-01-13',
          notes: 'Initial contact made. Scheduled follow-up call for next week.',
          tags: ['Quantum Computing', 'Research', 'Follow-up Needed']
        },
        {
          id: '4',
          name: 'David Kim',
          email: 'david.kim@cybersec.com',
          phone: '+1 (555) 456-7890',
          status: 'pending',
          source: 'website',
          value: 12000,
          commission: 1200,
          date: '2025-01-12',
          notes: 'Submitted contact form on website. Need to reach out within 24 hours.',
          tags: ['Cybersecurity', 'Medium Business', 'Urgent']
        },
        {
          id: '5',
          name: 'Alex Thompson',
          email: 'alex.thompson@startup.io',
          phone: '+1 (555) 567-8901',
          status: 'lost',
          source: 'partner',
          value: 5000,
          commission: 0,
          date: '2025-01-10',
          notes: 'Competitor won the deal. Client chose lower price over quality.',
          tags: ['Cloud Services', 'Small Business', 'Competition Lost']
        },
        {
          id: '6',
          name: 'Rachel Green',
          email: 'rachel.green@enterprise.com',
          phone: '+1 (555) 678-9012',
          status: 'converted',
          source: 'direct',
          value: 45000,
          commission: 4500,
          date: '2025-01-08',
          notes: 'Large enterprise deal closed. Excellent relationship with referrer.',
          tags: ['Enterprise', 'High Value', 'Long-term Client']
        }
      ];
      
      setReferrals(mockReferrals);
      
      // Calculate stats
      const stats: ReferralStats = {
        totalReferrals: mockReferrals.length,
        pendingReferrals: mockReferrals.filter(r => r.status === 'pending').length,
        convertedReferrals: mockReferrals.filter(r => r.status === 'converted').length,
        totalValue: mockReferrals.reduce((sum, r) => sum + r.value, 0),
        totalCommission: mockReferrals.filter(r => r.status === 'converted').reduce((sum, r) => sum + r.commission, 0),
        conversionRate: (mockReferrals.filter(r => r.status === 'converted').length / mockReferrals.length) * 100,
        monthlyGrowth: 15.3
      };
      
      setReferralStats(stats);
      setIsLoading(false);
    };

    loadReferrals();
  }, []);

  const filteredReferrals = referrals.filter(referral => {
    const matchesSearch = 
      referral.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referral.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referral.notes.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = activeTab === 'all' || referral.status === activeTab;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
      case 'contacted': return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'qualified': return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
      case 'converted': return 'bg-green-500/20 text-green-400 border-green-500/40';
      case 'lost': return 'bg-red-500/20 text-red-400 border-red-500/40';
      default: return 'bg-zion-slate/20 text-zion-slate-light border-zion-slate/40';
    }
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'direct': return <Users className="w-4 h-4" />;
      case 'social': return <Share2 className="w-4 h-4" />;
      case 'email': return <Mail className="w-4 h-4" />;
      case 'website': return <ExternalLink className="w-4 h-4" />;
      case 'partner': return <UserPlus className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const copyReferralLink = () => {
    const link = `${window.location.origin}/refer?ref=${Math.random().toString(36).substr(2, 9)}`;
    navigator.clipboard.writeText(link);
    // You could add a toast notification here
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zion-blue p-6">
        <div className="container mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-zion-blue-dark rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[...Array(4)].map((_, i) => (
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
          <h1 className="text-3xl font-bold text-white mb-2">Referrals</h1>
          <p className="text-zion-slate-light">Manage your referral program and track conversions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zion-slate-light">Total Referrals</CardTitle>
              <Users className="h-4 w-4 text-zion-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{referralStats.totalReferrals}</div>
              <p className="text-xs text-zion-slate-light">
                <span className="text-green-400">+{referralStats.monthlyGrowth}%</span> this month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zion-slate-light">Pending</CardTitle>
              <Clock className="h-4 w-4 text-zion-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{referralStats.pendingReferrals}</div>
              <p className="text-xs text-zion-slate-light">
                Need immediate attention
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zion-slate-light">Total Value</CardTitle>
              <DollarSign className="h-4 w-4 text-zion-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${referralStats.totalValue.toLocaleString()}</div>
              <p className="text-xs text-zion-slate-light">
                Potential revenue from referrals
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zion-slate-light">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-zion-cyan" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{referralStats.conversionRate.toFixed(1)}%</div>
              <p className="text-xs text-zion-slate-light">
                {referralStats.convertedReferrals} of {referralStats.totalReferrals} converted
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Referral Link Section */}
        <Card className="bg-zion-blue-dark border-zion-purple/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Your Referral Link</CardTitle>
            <CardDescription className="text-zion-slate-light">
              Share this link with potential clients to earn commissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Input
                value={`${window.location.origin}/refer?ref=YOUR_ID`}
                readOnly
                className="bg-zion-blue-light/10 border-zion-blue-light text-white"
              />
              <Button onClick={copyReferralLink} variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
              <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
            <div className="mt-4 p-4 bg-zion-purple/10 rounded-lg">
              <div className="flex items-center gap-2 text-zion-cyan mb-2">
                <Gift className="w-4 h-4" />
                <span className="font-semibold">Referral Rewards:</span>
              </div>
              <ul className="text-sm text-zion-slate-light space-y-1">
                <li>• 10% commission on first-year revenue</li>
                <li>• $100 bonus for qualified leads</li>
                <li>• $500 bonus for converted deals over $10k</li>
                <li>• Monthly leaderboard rewards</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Referrals List */}
        <Card className="bg-zion-blue-dark border-zion-purple/20">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-white">Referral Leads</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Track and manage your referral leads
                </CardDescription>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search referrals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64 bg-zion-blue-light/10 border-zion-blue-light text-white placeholder:text-zion-slate-light"
                  />
                </div>
                
                <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Referral
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
              <TabsList className="bg-zion-blue-light/10 border border-zion-blue-light">
                <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20">
                  All ({referrals.length})
                </TabsTrigger>
                <TabsTrigger value="pending" className="data-[state=active]:bg-zion-purple/20">
                  Pending ({referrals.filter(r => r.status === 'pending').length})
                </TabsTrigger>
                <TabsTrigger value="contacted" className="data-[state=active]:bg-zion-purple/20">
                  Contacted ({referrals.filter(r => r.status === 'contacted').length})
                </TabsTrigger>
                <TabsTrigger value="qualified" className="data-[state=active]:bg-zion-purple/20">
                  Qualified ({referrals.filter(r => r.status === 'qualified').length})
                </TabsTrigger>
                <TabsTrigger value="converted" className="data-[state=active]:bg-zion-purple/20">
                  Converted ({referrals.filter(r => r.status === 'converted').length})
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Referrals Table */}
            <div className="space-y-4">
              {filteredReferrals.map((referral) => (
                <div
                  key={referral.id}
                  className="p-4 bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20 hover:border-zion-purple/40 transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={`/api/placeholder/48/48?name=${referral.name}`} />
                        <AvatarFallback className="bg-zion-purple text-white">
                          {referral.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{referral.name}</h3>
                          <Badge variant="outline" className={getStatusColor(referral.status)}>
                            {referral.status.charAt(0).toUpperCase() + referral.status.slice(1)}
                          </Badge>
                          <Badge variant="secondary" className="bg-zion-blue-light/20 text-zion-cyan">
                            {referral.source.charAt(0).toUpperCase() + referral.source.slice(1)}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-zion-slate-light">Email:</span>
                            <span className="text-white ml-2">{referral.email}</span>
                          </div>
                          {referral.phone && (
                            <div>
                              <span className="text-zion-slate-light">Phone:</span>
                              <span className="text-white ml-2">{referral.phone}</span>
                            </div>
                          )}
                          <div>
                            <span className="text-zion-slate-light">Date:</span>
                            <span className="text-white ml-2">{referral.date}</span>
                          </div>
                        </div>
                        
                        <p className="text-zion-slate-light mt-2 line-clamp-2">{referral.notes}</p>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {referral.tags.map((tag) => (
                            <Badge key={tag} variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-zion-cyan mb-1">
                        ${referral.value.toLocaleString()}
                      </div>
                      <div className="text-sm text-zion-slate-light mb-3">
                        Potential Value
                      </div>
                      
                      {referral.status === 'converted' && (
                        <div className="text-lg font-semibold text-green-400 mb-2">
                          +${referral.commission.toLocaleString()}
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                        <Button variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredReferrals.length === 0 && (
                <div className="text-center py-16">
                  <Users className="w-16 h-16 text-zion-slate-light mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold text-white mb-2">No referrals found</h3>
                  <p className="text-zion-slate-light mb-6">
                    {searchQuery ? 'Try adjusting your search terms.' : 'Start building your referral network by sharing your referral link.'}
                  </p>
                  {!searchQuery && (
                    <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Referral Link
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}