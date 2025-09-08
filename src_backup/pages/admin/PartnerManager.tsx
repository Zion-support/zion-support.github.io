import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,;
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { toast } from '@/hooks/use-toast';
import { Check, Flag, Search, Settings, X, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { logErrorToProduction } from '@/utils/productionLogger';
import { EmptyState } from '@/components/ui/empty-state';

interface PartnerProfile {
  id: string;
  user_id: string;
  name: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  niche: string;
  audience_size: string;
  social_media?: Record<string, string>,
origin/cursor/automate-test-improve-and-merge-code-2533
  website?: string;
  bio?: string;
  payout_method?: string;
  fraud_flags?: number;
  commission_rate?: number
}
export default function PartnerManager() {
  );

};
try {;
  //Update commission rate setPartners (partners.map (p => filterPartners (partners.map (p => p.id === selectedPartner.id ? {;
  ...p, commission rate: commissionRate ;
}: p);
activeTab;
searchQuery);
setIsSettingsOpen (false) ;
}catch (error) {;
  logErrorToProduction (error instanceof Error ? error.message : String (error),  error instanceof Error ? error : undefined, {';
  message: 'Error updating partner settings' ;
});
toast ({;
  ;

};
const getStatusBadge = (status: string) => {;
  switch (status) {';
  case 'pending': ;

};
return (<Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600 flex items-center gap-1"> <Flag className="h-3 w-3" /> {;
  flags ;
}</Badge>) ;
};";
return (<div className="container max-w-7xl py-10"> <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"> <div> <h1 className="text-3xl font-bold tracking-tight text-white">Partner Management</h1> <p className="text-zion-slate-light">Approve and manage affiliate partners</p> </div> </div> <Card className="bg-zion-blue-dark border-zion-blue-light mb-8"> <CardHeader className="pb-3"> <CardTitle>Overview</CardTitle> </CardHeader> <CardContent> <div className="grid gap-4 md:grid-cols-3"> <Card className="bg-zion-blue border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-sm font-medium text-zion-slate-light"> Pending Applications </CardTitle> <div className="text-2xl font-bold text-white"> {';
  partners.filter (p => p.status === 'pending') .length ";
}</div> </CardHeader> <CardContent className="pt-0"> <p className="text-xs text-zion-slate-light"> Partners waiting for review and approval </p> </CardContent> </Card> <Card className="bg-zion-blue border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-sm font-medium text-zion-slate-light"> Active Partners </CardTitle> <div className="text-2xl font-bold text-white"> {';
  partners.filter (p => p.status === 'approved') .length ";
}</div> </CardHeader> <CardContent className="pt-0"> <p className="text-xs text-zion-slate-light"> Currently approved and active partners </p> </CardContent> </Card> <Card className="bg-zion-blue border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-sm font-medium text-zion-slate-light"> Fraud Flags </CardTitle> <div className="text-2xl font-bold text-white"> {;
  partners.reduce ( (total,  p) => total + (p.fraud flags || 0), 0) ";
}</div> </CardHeader> <CardContent className="pt-0"> <p className="text-xs text-zion-slate-light"> Total potential fraud flags detected </p> </CardContent> </Card> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader className="pb-3 flex flex-col md:flex-row justify-between md:items-center gap-4"> <div> <CardTitle>Partners</CardTitle> <CardDescription>Manage partnership applications and settings</CardDescription> </div> <div className="w-full md:w-80"> <div className="relative"> <Search className="absolute left-2 top-2.5 h-4 w-4 text-zion-slate-light" /> <Input placeholder="Search partners..." className="pl-8" value= {;
  searchQuery ;
}onChange= {;
  handleSearch ";
}/> </div> </div> </CardHeader> <CardContent> </TabsList> <TabsContent value="pending" className="space-y-4" > <PartnerTable partners= {;
  filteredPartners ;
}isLoading= {;
  isLoading ;
}onViewDetails= {;
  handleViewDetails ;
}onUpdateStatus= {;
  handleUpdateStatus ;
}onOpenSettings= {;
  handleOpenSettings ;
}getStatusBadge= {;
  getStatusBadge ;
}getFraudFlagBadge= {;
  getFraudFlagBadge ";
}/> </TabsContent> <TabsContent value="approved" className="space-y-4" > <PartnerTable partners= {;
  filteredPartners ;
}isLoading= {;
  isLoading ;
}onViewDetails= {;
  handleViewDetails ;
}onUpdateStatus= {;
  handleUpdateStatus ;
}onOpenSettings= {;
  handleOpenSettings ;
}getStatusBadge= {;
  getStatusBadge ;
}getFraudFlagBadge= {;
  getFraudFlagBadge ";
}/> </TabsContent> <TabsContent value="rejected" className="space-y-4" > <PartnerTable partners= {;
  filteredPartners ;
}isLoading= {;
  isLoading ;
}onViewDetails= {;
  handleViewDetails ;
}onUpdateStatus= {;
  handleUpdateStatus ;
}onOpenSettings= {;
  handleOpenSettings ;
}getStatusBadge= {;
  getStatusBadge ;
}getFraudFlagBadge= {;
  getFraudFlagBadge ";
}/> </TabsContent> <TabsContent value="all" className="space-y-4"> <PartnerTable partners= {;
  filteredPartners ;
}isLoading= {;
  isLoading ;
}onViewDetails= {;
  handleViewDetails ;
}onUpdateStatus= {;
  handleUpdateStatus ;
}onOpenSettings= {;
  handleOpenSettings ;
}getStatusBadge= {;
  getStatusBadge ;
}getFraudFlagBadge= {;
  getFraudFlagBadge ;
}/> </TabsContent> </Tabs> </CardContent> </Card> {;
  /* Partner Details Dialog */ ;
}<Dialog open= {;
  isDetailsOpen ;
}onOpenChange= {;
  setIsDetailsOpen ";
}> <DialogContent className="sm:max-w-lg bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Partner Details</DialogTitle> <DialogDescription> Review the details of the partner application </DialogDescription> </DialogHeader> {";
  selectedPartner && (<div className="space-y-4"> <div className="grid grid-cols-2 gap-2"> <div> <p className="text-xs text-zion-slate-light">Name</p> <p className="font-medium text-white"> {;
  selectedPartner.name ";
}</p> </div> <div> <p className="text-xs text-zion-slate-light">Status</p> <div> {;
  getStatusBadge (selectedPartner.status) ";
}</div> </div> </div> <div> <p className="text-xs text-zion-slate-light">Bio</p> </div> <div className="grid grid-cols-2 gap-2"> <div> <p className="text-xs text-zion-slate-light">Niche</p> <p className="text-white"> {;
  selectedPartner.niche ";
}</p> </div> <div> <p className="text-xs text-zion-slate-light">Audience Size</p> <p className="text-white"> {;
  getAudienceSizeLabel (selectedPartner.audience size) ;
}</p> </div> </div> {";
  selectedPartner.website && (<div> <p className="text-xs text-zion-slate-light">Website</p> <p className="text-zion-cyan"> {;
  selectedPartner.website ;
}</p> </div>) ;
}{";
  selectedPartner.social media && Object.keys (selectedPartner.social media) .length > 0 && (<div> <p className="text-xs text-zion-slate-light">Social Media</p> <div className="grid grid-cols-2 gap-2"> {;
  Object.entries (selectedPartner.social media) .map ( ([platform, handle]) => (<p key= {;
  platform ";
}className="text-white"> <span className="font-medium"> {;
  platform ;
}: </span> {;
  handle ;
}</p>) ) ;
}</div> </div>) ";
}<div className="grid grid-cols-2 gap-2"> <div> <p className="text-xs text-zion-slate-light">Payout Method</p> </div> <div> <p className="text-xs text-zion-slate-light">Commission Rate</p> <p className="text-white"> {;
  selectedPartner.commission rate || 25 ;
}%</p> </div> </div> {";
  selectedPartner.fraud flags && selectedPartner.fraud flags > 0 && (<Alert className="bg-red-900/20 border-red-900/50 text-red-500"> <AlertTitle className="flex items-center gap-2"> <Flag className="h-4 w-4" /> Potential Fraud Detected ({;
  selectedPartner.fraud flags ;
}) </AlertTitle> <AlertDescription> This application has triggered our fraud detection system. Review carefully before approving. </AlertDescription> </Alert>) ";
}> <X className="h-4 w-4 mr-1" /> Reject </Button> <Button className="bg-green-600 hover:bg-green-700" onClick={';
  () => handleUpdateStatus (selectedPartner.id, 'approved') ";
}> <Check className="h-4 w-4 mr-1" /> Approve </Button> </div>) ;
}</div>) ;
}</DialogContent> </Dialog> {;
  /* Partner Settings Dialog */ ;
}<Dialog open= {;
  isSettingsOpen ;
}onOpenChange= {;
  setIsSettingsOpen ";
}> <DialogContent className="bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Partner Settings</DialogTitle> <DialogDescription> Configure commission rates and other settings </DialogDescription> </DialogHeader> {";
  selectedPartner && (<div className="space-y-4"> <div> <label className="text-sm font-medium text-white">Partner Name</label> <p className="text-zion-slate-light"> {;
  selectedPartner.name ";
}</p> </div> <div> <label className="text-sm font-medium text-white" htmlFor="commission-rate" > Commission Rate (%) </label> <Input /> <p className="text-xs text-zion-slate-light mt-1" > Percentage of reward granted to this partner for successful referrals </p> </div> <DialogFooter> Cancel </Button> <Button onClick={;
  handleSaveSettings ";
}className="bg-zion-purple hover:bg-zion-purple-dark"> Save Changes </Button> </DialogFooter> </div>) ;
}</DialogContent> </Dialog> </div>) ;
}function PartnerTable ({;
  partners, isLoading, onViewDetails, onUpdateStatus, onOpenSettings,  getStatusBadge, getFraudFlagBadge ;
}: PartnerTableProps) {;
  if (isLoading) {";
  return (<div className="text-center py-8"> <p className="text-zion-slate-light">Loading partner data...</p> </div> if (partners.length === 0) {";
  return (<div className="py-8"> <EmptyState icon= {";
  <Users className="h-8 w-8" /> ";
}title="No Partners Found" description="There are no partner applications to display." className="border-none bg-transparent text-center" /> </div>) ";
}return (<Table> <TableHeader> <TableRow className="hover:bg-transparent"> <TableHead>Name</TableHead> <TableHead>Niche</TableHead> <TableHead>Audience</TableHead> <TableHead>Status</TableHead> <TableHead>Date</TableHead> <TableHead className="text-right">Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  partners.map ( (partner) => (<TableRow key= {;
  partner.id ";
}className="border-zion-blue-light hover:bg-zion-blue-light/10"> <TableCell className="font-medium text-white"> <div className="flex items-center gap-2"> {;
  partner.name ;
}{;
  getFraudFlagBadge (partner.fraud flags) ;
}</div> </TableCell> <TableCell> {;
  partner.niche ;
}</TableCell> <TableCell> </TableCell> <TableCell> {;
  getStatusBadge (partner.status) ;
}</TableCell> <TableCell> {;
  new Date (partner.created at) .toLocaleDateString () ";
}</TableCell> <TableCell className="text-right"> className="text-red-500 hover:text-red-600 hover:bg-red-900/20" > <X className="h-4 w-4" /> <span className="sr-only" >Reject</span> </Button> <Button className="text-green-500 hover:text-green-600 hover:bg-green-900/20" > <Check className="h-4 w-4" /> <span className="sr-only" >Approve</span> </Button> </>) ";
}<Button className="text-zion-slate-light hover:text-white" > <Settings className="h-4 w-4" /> <span className="sr-only" >Settings</span> </Button> <Button > View </Button> </div> </TableCell> </TableRow>) ) ;
}</TableBody> </Table>) ;
}'"
  )
}
origin/cursor/automate-test-improve-and-merge-code-2533
