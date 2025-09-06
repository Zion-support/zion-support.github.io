<<<<<<< HEAD
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import { Check, Flag, Search, Settings, X, Users } from 'lucide-react'import { supabase } from "@/integrations/supabase/client";
import { logErrorToProduction } from '@/utils/productionLogger';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useRouter } from 'next/router'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/hooks/use-toast"
import { Check, Flag, Search, Settings, X, Users } from 'lucide-react'import { supabase } from "@/integrations/supabase/client"
import { logErrorToProduction } from '@/utils/productionLogger'
import { EmptyState } from "@/components/ui/empty-state"
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { useState, useEffect } from "react",
import { useAuth } from "@/hooks/useAuth";
import { useRouter  } from 'next/router';
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",
import { toast } from "@/hooks/use-toast",
import { Check, Flag, Search, Settings, X, Users } from 'lucide-react'
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { supabase } from "@/integrations/supabase/client";
import { logErrorToProduction  } from '@/utils/productionLogger';
import { EmptyState } from "@/components/ui/empty-state";
interface PartnerProfile {

  id: string
  user_id: string
  name: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  niche: string
  audience_size: string
  social_media?: Record<string, string>
  website?: string
  bio?: string
  payout_method?: string
  fraud_flags?: number

  commission_rate?: number
}
export default function PartnerManager() {

  const [partners, setPartners] = useState<PartnerProfile[]>([])
  const [filteredPartners, setFilteredPartners] = useState<PartnerProfile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("pending")
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [commissionRate, setCommissionRate] = useState(25)
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  useEffect((,) => {
    if (!isAuthenticated) {
      router.push('/auth/login?returnTo=' + encodeURIComponent('/admin/partners'))
      return
    }
    fetchPartners()
  }, [isAuthenticated, router])
  const fetchPartners = async () => {
    try {
      setIsLoading(true)
      // In a real application, check admin permissions here
      const { data, error } = await supabase
        .from('partner_profiles')
        .select('*')
        .order('created_at', { ascending: false })
        return <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600">Pending</Badge>
        return <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600">Rejected</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
  partners
  isLoading
  onViewDetails, }

  )
}

<<<<<<< HEAD
import { use_router } from 'next / router';
import { Button  } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { Input  } from '@/components / ui / input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow  } from '@/components / ui / table';
import { Badge  } from '@/components / ui / badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger  } from '@/components / ui / dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { Alert, AlertDescription, AlertTitle  } from '@/components / ui / alert';
import { toast  } from '@/hooks / use - toast';
import { Check, Flag, Search, Settings, X, Users } from 'lucide-react'import { supabase  } from '@/integrations / supabase / client';
import { logErrorToProduction } from '@/utils / production_logger';
import { EmptyState  } from '@/components / ui / empty - state';
=======


=======
import { supabase } from "@/integrations/supabase/client",
import { logErrorToProduction } from '@/utils/productionLogger',
import { EmptyState } from "@/components/ui/empty-state",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface PartnerProfile {
  id: string,
  user_id: string,
  name: string,
  status: 'pending' | 'approved' | 'rejected',
  created_at: string,
  niche: string,
  audience_size: string,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  social_media?: Record<string, string>
  website?: string
  bio?: string
  payout_method?: string
  fraud_flags?: number
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  social_media?: Record<string string>,
  website?: string,
  bio?: string,
  payout_method?: string,
  fraud_flags?: number,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  commission_rate?: number
}
export default function PartnerManager() {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [partners, setPartners] = useState<PartnerProfile[]>([])
  const [filteredPartners, setFilteredPartners] = useState<PartnerProfile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("pending")
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [commissionRate, setCommissionRate] = useState(25)
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  useEffect((,) => {
    if (!isAuthenticated) {
      router.push('/auth/login?returnTo=' + encodeURIComponent('/admin/partners'))
      return;
    }
    fetchPartners()
  }, [isAuthenticated, router])
  const fetchPartners = async () => {
    try {
      setIsLoading(true)
      // In a real application, check admin permissions here
      const { data, error } = await supabase
        .from('partner_profiles')
        .select('*')
        .order('created_at', { ascending: false })
        return <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600">Pending</Badge>
        return <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600">Rejected</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
<<<<<<< HEAD
  partners
  isLoading
  onViewDetails, }

  )
=======
  partners, 
  isLoading, ;
  onViewDetails, };
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======
  const [partners, setPartners] = useState<PartnerProfile[]>([]),
  const [filteredPartners, setFilteredPartners] = useState<PartnerProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [searchQuery, setSearchQuery] = useState(""),
  const [activeTab, setActiveTab] = useState("pending"),
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null),
  const [isDetailsOpen, setIsDetailsOpen] = useState(false),
  const [isSettingsOpen, setIsSettingsOpen] = useState(false),
  const [commissionRate, setCommissionRate] = useState(25),
  const { user, isAuthenticated } = useAuth(),
  const router = useRouter(),

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login?returnTo=' + encodeURIComponent('/admin/partners')),
      return
import { useState, useEffect } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { useRouter } from 'next/router',;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;
import { toast } from "@/hooks/use-toast",;
import { Check, Flag, Search, Settings, X, Users } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client",;
import { logErrorToProduction } from '@/utils/productionLogger',;
import { EmptyState } from "@/components/ui/empty-state",;
interface PartnerProfile {;
  id: string,;
  user_id: string,;
  name: string,;
  status: 'pending' | 'approved' | 'rejected',;
  created_at: string,;
  niche: string,;
  audience_size: string,;
  social_media?: Record<string string>,;
  website?: string,;
  bio?: string,;
  payout_method?: string,;
  fraud_flags?: number,;
  commission_rate?: number;
}
export default /**
 * PartnerManager - Function description
 */
function PartnerManager() {
  const [partners, set_partners] = useState < PartnerProfile[]>([]);
  const [filtered_partners, setFilteredPartners] = useState < PartnerProfile[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [search_query, setSearchQuery] = useState ("");
  const [active_tab, setActiveTab] = useState ("pending");
  const [selected_partner, setSelectedPartner] = useState < PartnerProfile | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState (false);
  const [isSettingsOpen, setIsSettingsOpen] = useState (false);
  const [commission_rate, setCommissionRate] = useState (25);
  const { user, is_authenticated } = use_auth ();
  const router = use_router ();
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      router.push ('/auth / login?return_to=' + encodeURIComponent ('/admin / partners'));
      return;
    }
    fetch_partners ();
  }, [is_authenticated, router]);
  const fetch_partners = async () => {
    try {
      setIsLoading (true);
      // In a real application, check admin permissions here;
      const { data, error } = await supabase;
        .from ('partner_profiles');
        .select ('*');
        .order ('created_at', { ascending: false }),
        return <Badge variant="outline" className="bg - yellow - 900 / 30 text - yellow - 500 border - yellow - 600">Pending</Badge>;
        return <Badge variant="outline" className="bg - red - 900 / 30 text - red - 500 border - red - 600">Rejected</Badge>;
      default:;
        return <Badge variant="outline">{status}</Badge>;
  partners,
  is_loading,
  onViewDetails, }
  );
}
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
;
interface PartnerTableProps {;
  partners: PartnerProfile[],;
  isLoading: boolean,;
  onViewDetails: (partner: PartnerProfile) => void,;
  onUpdateStatus: (partnerId: string, status: 'approved' | 'rejected') => void,;
  onOpenSettings: (partner: PartnerProfile) => void,;
  getStatusBadge: (status: string) => JSX.Element,;
  getFraudFlagBadge: (flags?: number) => JSX.Element | null;
}
;
function PartnerTable({;
  partners,;
  isLoading,;
  onViewDetails,;
  onUpdateStatus,;
  onOpenSettings;
  getStatusBadge;
  getFraudFlagBadge;
}: PartnerTableProps) {;
  if (isLoading) {;
    return (;
      <div className="text-center py-8">;
        <p className="text-zion-slate-light">Loading partner data...</p>;
      </div>;
    );
  }
  
  if (partners.length === 0) {
    return (
      <div className="py-8">
        <EmptyState
          icon={<Users className="h-8 w-8" />}
          title="No Partners Found"
          description="There are no partner applications to display."
          className="border-none bg-transparent text-center"
        />
      </div>
    )
  }
;
  return (;
    <Table>;
      <TableHeader>;
        <TableRow className="hover:bg-transparent">;
          <TableHead>Name</TableHead>;
          <TableHead>Niche</TableHead>;
          <TableHead>Audience</TableHead>;
          <TableHead>Status</TableHead>;
          <TableHead>Date</TableHead>;
          <TableHead className="text-right">Actions</TableHead>;
        </TableRow>;
      </TableHeader>;
      <TableBody>;
        {partners.map((partner) => (;
          <TableRow key={partner.id} className="border-zion-blue-light hover:bg-zion-blue-light/10">;
            <TableCell className="font-medium text-white">;
              <div className="flex items-center gap-2">;
                {partner.name}
                {getFraudFlagBadge(partner.fraud_flags)}
              </div>;
            </TableCell>;
            <TableCell>{partner.niche}</TableCell>;
            <TableCell>;
              {partner.audience_size.replace('k,000').replace('- - ').replace('overOver ')}
            </TableCell>;
            <TableCell>{getStatusBadge(partner.status)}</TableCell>;
            <TableCell>;
              {new Date(partner.created_at).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                {partner.status === 'pending' && (
                  <>
                    <Button 
                      variant="ghost"
                      size="sm"
                      onClick={() => onUpdateStatus(partner.id, 'rejected')}
                      className="text-red-500 hover:text-red-600 hover:bg-red-900/20"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Reject</span>
                    </Button>
                    <Button 
                      variant="ghost"
                      size="sm"
                      onClick={() => onUpdateStatus(partner.id, 'approved')}
                      className="text-green-500 hover:text-green-600 hover:bg-green-900/20"
                    >
                      <Check className="h-4 w-4" />
                      <span className="sr-only">Approve</span>
                    </Button>
                  </>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onOpenSettings(partner)}
                  className="text-zion-slate-light hover:text-white"
                >
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Settings</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onViewDetails(partner)}
                >;
                  View;
                </Button>;
              </div>;
            </TableCell>;
          </TableRow>;
        ))}
      </TableBody>;
    </Table>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
