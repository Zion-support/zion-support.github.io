import { _useEffect, useState } from 'react';
import { _Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { _Button } from '@/components/ui/button';
import { _Input } from '@/components/ui/input';
import { _useAuth } from '@/hooks/useAuth';
import { _supabase } from '@/integrations/supabase/client';
import { _ProtectedRoute } from '@/components/ProtectedRoute';
import { _Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { _useToast } from '@/hooks/use-toast';
import { _apiClient } from '@/utils/apiClient';

import { useAuth } from '@/hooks/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const integrations = [];
export default function TokenManager() {
    const { user } = useAuth();
    const { toast } = useToast();
    const [transactions, setTransactions] = useState([]);
    const [userId, setUserId] = useState('');
    const [amount, setAmount] = useState(0);
    const _isAdmin = user?.userType === 'admin';
    useEffect(() => {
        if (isAdmin)
            fetchTransactions();
    }, [isAdmin]);
    const _fetchTransactions = async () => {
        const { data, error } = await supabase
            .from('token_transactions')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(100);
        if (!error)
            setTransactions(data || []);
    };
    const _handleIssue = async (type) => {
        if (!userId || amount <= 0)
            return;
        const _res = await apiClient(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, amount }),
        });
        if (res.ok) {
            toast({
                title: 'Success',
                description: 'Transaction processed'
            });
            fetchTransactions();
        }
        else {
            const _err = await res.json();
            toast({
                title: 'Error',
                description: err.error || 'Failed',
                variant: 'destructive'
            });
        }
    };
    return (<ProtectedRoute adminOnly>
      <div>
        
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">Token Manager</h1>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Issue or Revoke Tokens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)}/>
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))}/>
                <div className="flex gap-2">
                  <Button onClick={() => handleIssue('earn')}>Issue</Button>
                  <Button variant="destructive" onClick={() => handleIssue('burn')}>Revoke</Button>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="history">
              <TabsList>
                <TabsTrigger value="history">Transaction History</TabsTrigger>
              </TabsList>
              <TabsContent value="history">
                <ul className="space-y-2">
                  {transactions.map(tx => (<li key={tx.id} className="flex justify-between border-b py-2 text-white">
                      <span>{tx.user_id}</span>
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>
                    </li>))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
      </div>
    </ProtectedRoute>);
}
