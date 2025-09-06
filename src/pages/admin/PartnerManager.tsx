onViewDetails, }

  )
}



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
interface PartnerProfile {
  id: string,
  user_id: string,
  name: string,
  status: 'pending' | 'approved' | 'rejected',
  created_at: string,
  niche: string,
  audience_size: string,
  social_media?: Record<string string>,
  website?: string,
  bio?: string,
  payout_method?: string,
  fraud_flags?: number,
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
    }
  },

  const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {
    let filtered = partners,
    
    // Filter by status
    if (status !== "all") {
      filtered = filtered.filter(p => p.status === status)
    } catch (error) {;
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching partners' }),;
      toast({;
        title: "Error",;
        description: "Failed to load partner data",;
        variant: "destructive"});
    } finally {;
      setIsLoading(false);
    }
  },;
  const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {;
    let filtered = partners,;
    // Filter by status;
    if (status !== "all") {;
      filtered = filtered.filter(p => p.status === status);
    }
;
    // Filter by search query;
    if (query) {;
      const lowerQuery = query.toLowerCase(),;
      filtered = filtered.filter(p =>;
        p.name.toLowerCase().includes(lowerQuery) ||;
        p.niche.toLowerCase().includes(lowerQuery) ||;
        p.bio?.toLowerCase().includes(lowerQuery) ||;
        p.website?.toLowerCase().includes(lowerQuery);
      );
    }
    
    setFilteredPartners(filtered)
  },

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value),
    filterPartners(partners, activeTab, e.target.value)
  },

  const handleTabChange = (value: string) => {
    setActiveTab(value),
    filterPartners(partners, value, searchQuery)
  },

  const handleViewDetails = (partner: PartnerProfile) => {
    setSelectedPartner(partner),
    setIsDetailsOpen(true)
  },

  const handleOpenSettings = (partner: PartnerProfile) => {
    setSelectedPartner(partner),
    setCommissionRate(partner.commission_rate || 25),
    setIsSettingsOpen(true)
  },

  const handleUpdateStatus = async (partnerId: string, status: 'approved' | 'rejected') => {
    try {
      // In a real app, this would update the database
      setPartners(partners.map(p => 
        p.id === partnerId ? { ...p, status } : p
      )),
      
      filterPartners(
        partners.map(p => p.id === partnerId ? { ...p, status } : p),
        activeTab,
        searchQuery
      ),
      
      toast({
        title: status === 'approved' ? "Partner Approved" : "Partner Rejected",
        description: `The partner has been ${status}.`,
        variant: status === 'approved' ? "default" : "destructive"}),
      
      // Close the dialog if open
      if (isDetailsOpen && selectedPartner?.id === partnerId) {
        setIsDetailsOpen(false)
      }
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error updating partner status' }),
      toast({
        title: "Error",
        description: "Failed to update partner status",
        variant: "destructive"})
    }
  },

  const handleSaveSettings = async () => {
    if (!selectedPartner) return,
    
    try {
      // Update commission rate
      setPartners(partners.map(p => 
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p
      )),
      
      filterPartners(
        partners.map(p => p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p),
        activeTab,
        searchQuery
      ),
      
      toast({
        title: "Settings Updated",
        description: "Partner settings have been updated successfully.",
        variant: "default"}),
      
      setIsSettingsOpen(false)
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error updating partner settings' }),
      toast({
        title: "Error",
        description: "Failed to update partner settings",
        variant: "destructive"})
;
    setFilteredPartners(filtered);
  },;
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {;
    setSearchQuery(e.target.value),;
    filterPartners(partners, activeTab, e.target.value);
  },;
  const handleTabChange = (value: string) => {;
    setActiveTab(value),;
    filterPartners(partners, value, searchQuery);
  },;
  const handleViewDetails = (partner: PartnerProfile) => {;
    setSelectedPartner(partner),;
    setIsDetailsOpen(true);
  },;
  const handleOpenSettings = (partner: PartnerProfile) => {;
    setSelectedPartner(partner),;
    setCommissionRate(partner.commission_rate || 25),;
    setIsSettingsOpen(true);
  },;
  const handleUpdateStatus = async (partnerId: string, status: 'approved' | 'rejected') => {;
    try {;
      // In a real app, this would update the database;
      setPartners(partners.map(p =>;
        p.id === partnerId ? { ...p, status } : p;
      )),;
      filterPartners(;
        partners.map(p => p.id === partnerId ? { ...p, status } : p),;
        activeTab,;
        searchQuery;
      ),;
      toast({;
        title: status === 'approved' ? "Partner Approved" : "Partner Rejected",;
        description: `The partner has been ${status}.`,;
        variant: status === 'approved' ? "default" : "destructive"}),;
      // Close the dialog if open;
      if (isDetailsOpen && selectedPartner?.id === partnerId) {;
        setIsDetailsOpen(false);
      }
    } catch (error) {;
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error updating partner status' }),;
      toast({;
        title: "Error",;
        description: "Failed to update partner status",;
        variant: "destructive"});
    }
  },;
  const handleSaveSettings = async () => {;
    if (!selectedPartner) return,;
    try {;
      // Update commission rate;
      setPartners(partners.map(p =>;
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p;
      )),;
      filterPartners(;
        partners.map(p => p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p),;
        activeTab,;
        searchQuery;
      ),;
      toast({;
        title: "Settings Updated",;
        description: "Partner settings have been updated successfully.",;
        variant: "default"}),;
      setIsSettingsOpen(false);
    } catch (error) {;
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error updating partner settings' }),;
      toast({;
        title: "Error",;
        description: "Failed to update partner settings",;
        variant: "destructive"});
    }
  },;
  const getAudienceSizeLabel = (size: string) => {;
    switch (size) {;
      case 'under1k': return 'Under 1,000',;
      case '1k-10k': return '1,000 - 10,000',;
      case '10k-50k': return '10,000 - 50,000',;
      case '50k-100k': return '50,000 - 100,000',;
      case 'over100k': return 'Over 100,000',;
      default: return size;
    }
  },

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600">Pending</Badge>,
      case 'approved':
        return <Badge variant="outline" className="bg-green-900/30 text-green-500 border-green-600">Approved</Badge>,
      case 'rejected':
        return <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600">Rejected</Badge>,
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  },

  const getFraudFlagBadge = (flags: number = 0) => {
    if (flags === 0) return null,
    
    return (
      <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600 flex items-center gap-1">
        <Flag className="h-3 w-3" />
  },;
  const getStatusBadge = (status: string) => {;
    switch (status) {;
      case 'pending':;
        return <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600">Pending</Badge>,;
      case 'approved':;
        return <Badge variant="outline" className="bg-green-900/30 text-green-500 border-green-600">Approved</Badge>,;
      case 'rejected':;
        return <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600">Rejected</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;
  partners,
  is_loading,
  onViewDetails, }
  );
}
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
