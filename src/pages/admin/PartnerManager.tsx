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
import { supabase } from "@/integrations/supabase/client";
import { logErrorToProduction  } from '@/utils/productionLogger';
import { EmptyState } from "@/components/ui/empty-state";
interface PartnerProfile {


  onViewDetails, }
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
interface PartnerProfile {
;
;
