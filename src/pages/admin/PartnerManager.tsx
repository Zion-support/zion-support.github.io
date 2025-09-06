
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

=======


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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
interface PartnerProfile {
  id: string,
  user_id: string,
  name: string,
  status: 'pending' | 'approved' | 'rejected',
  created_at: string,
  niche: string,
  audience_size: string,
<<<<<<< HEAD

  social_media?: Record<string string>,
  website?: string,
  bio?: string,
  payout_method?: string,
  fraud_flags?: number,

  commission_rate?: number
  commission_rate?: number;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

}
<<<<<<< HEAD


>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
