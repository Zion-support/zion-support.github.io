<<<<<<< HEAD
import { useState; useEffect } from "react";,
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";,
import { Card; CardContent, CardDescription; CardHeader, CardTitle } from "@/components/ui/card";,
import { Input } from "@/components/ui/input";,
import { Table; TableBody, TableCell; TableHead, TableHeader; TableRow } from "@/components/ui/table";,
import { Badge } from "@/components/ui/badge";,
import { Dialog; DialogContent, DialogDescription; DialogFooter, DialogHeader; DialogTitle, DialogTrigger } from "@/components/ui/dialog";,
import { Tabs; TabsContent, TabsList; TabsTrigger } from "@/components/ui/tabs";,
import { Alert; AlertDescription, AlertTitle } from "@/components/ui/alert";,
import { toast } from "@/hooks/use-toast";,
import { Check; Flag, Search; Settings, X; Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { logErrorToProduction } from "@/utils/productionLogger";
import { EmptyState } from "@/components/ui/empty-state";
interface PartnerProfile {commission_rate?: number}
import React from 'react';

export default function PartnerManager() {
<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">PartnerManager</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
=======
)
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
=======
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
}