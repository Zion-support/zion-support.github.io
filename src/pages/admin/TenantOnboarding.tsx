class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
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
export default function TenantOnboarding() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("company");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({;
    brand_name: "",;
    subdomain: "",;
    logo_url: "",;
    primary_color: "#9b87f5",;
    theme_preset: "light",;
    company_size: "",;
    industry: "",;
    custom_domain: "",;
    is_co_branded: true;
  });
  // Check if user has admin role;
  const isAdmin = user?.role === "admin";
      }
  );
}
import React, { useState } from './react';
import { Header } from '@/components / Header';
import { SEO } from '@/components / SEO';
import { use_auth } from '@/hooks / use_auth';
import { use_router } from './next / router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { toast } from './sonner';
import { supabase } from '@/integrations / supabase / client';
import { Switch } from '@/components / ui / switch';
import {logErrorToProduction} from '@/utils / production_logger';
export default /**
 * TenantOnboarding - Function description
 */
function TenantOnboarding() {
  const { user } = use_auth ();
  const [active_tab, setActiveTab] = useState ("company");
  const [is_submitting, setIsSubmitting] = useState (false);
  const [form_data, setFormData] = useState ({
    brand_name: "",
    subdomain: "",
    logo_url: "",
    primary_color: "#9b87f5",
    theme_preset: "light",
    company_size: "",
    industry: "",
    custom_domain: "",
    is_co_branded: true;
  });
  // Check if user has admin role;
  const is_admin = user?.role === "admin";
      }
  );
}