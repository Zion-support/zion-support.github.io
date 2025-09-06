
import React, { useState } from "react"
import {Header} from "@/components/Header"
import {SEO} from "@/components/SEO"
import {useAuth} from "@/hooks/useAuth"
import {useRouter} from "next/router"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {toast} from "sonner"
import {supabase} from "@/integrations/supabase/client"
import {Switch} from "@/components/ui/switch"
import {logErrorToProduction} from '@/utils/productionLogger'
export default function TenantOnboarding() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("company")
  const [isSubmitting, setIsSubmitting] = useState(false)
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { useAuth } from "@/hooks/useAuth",
import { useRouter } from "next/router",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { toast } from "sonner",
import { supabase } from "@/integrations/supabase/client",
import { Switch } from "@/components/ui/switch";
import { logErrorToProduction } from '@/utils/productionLogger';
export default function TenantOnboarding() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("company");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isAdmin = user?.role === "admin";
      };
  );
};


import React, { useState } from "react";
import {Header} from "@/components/Header";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/router";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {toast} from "sonner";
import {supabase} from "@/integrations/supabase/client";
import {Switch} from "@/components/ui/switch";
import {logErrorToProduction} from '@/utils/productionLogger';

import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { SEO } from "@/components/SEO",;
import { useAuth } from "@/hooks/useAuth",;
import { useRouter } from "next/router",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { toast } from "sonner",;
import { supabase } from "@/integrations/supabase/client",;
import { Switch } from "@/components/ui/switch",;
import { logErrorToProduction } from '@/utils/productionLogger',;
;
