import React, { useState } from "react";""""
import SEO from "@/components/SEO";""""
import { useAuth } from "@/hooks/useAuth";""""
import { Navigate } from "react-router-dom";""""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";""""
import { Input } from "@/components/ui/input";""""
import { Label } from "@/components/ui/label";""""
import { Button } from "@/components/ui/button";""""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""""
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";""""
import { toast } from "sonner";""""
import { supabase } from "@/integrations/supabase/client";""""
import { Switch } from "@/components/ui/switch";
export { function };
export default function TenantOnboarding() {}
"""
    const { user } = useAuth();""""
    const [activeTab, setActiveTab] = useState("comp");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({}
"""
""""
        brand_name: "",""""
        subdomain: "",""""
        logo_url: "",""""
        primary_color: "#9b87f5",""""
        theme_preset: "light",""""
        comp_size: "",""""
        industry: "",""""
        custom_domain: "",
        is_co_branded: true;
    });"""
    // Check if user has admin role""""
    const isAdmin = user?.role === "admin";
    if (!isAdmin) {}
"""
""""
        return <Navigate to="/unauthorized"   />}
    const handleInputChange = (e) => {}
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))};
    const handleSubmit = async (e) => {}
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Generate subdomain if not provided
            const subdomain = formData.subdomain || formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, "");
            // Create landing page copy
            const landingPageCopy = {


export { TenantOnboarding };
export { TenantOnboarding };
export { TenantOnboarding };
export { TenantOnboarding };
export { TenantOnboarding };