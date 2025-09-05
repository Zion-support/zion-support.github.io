
import React, {_useState} from "react";

export default function TenantOnboarding() {_const { user} = useAuth();
  const [activeTab, setActiveTab] = useState("company");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({_brand_name: "", _subdomain: "", _logo_url: "", _primary_color: "#9b87f5", _theme_preset: "light", _company_size: "", _industry: "", _custom_domain: "", _is_co_branded: true});
  
  // Check if user has admin role
  const _isAdmin = user?.role === "admin";
  
  if (!isAdmin) {_return // Use router.push('/unauthorized') or redirect in getServerSideProps;}

  const _handleInputChange = (_e: React.ChangeEvent<HTMLInputElement>) => {_const { name, _value} = e.target;
    setFormData(prev => ({_...prev, _[name]: value}));
  };
  
  const _handleSelectChange = (_name: string, _value: string) => {_setFormData(prev => ({ ...prev, _[name]: value}));
  };
  
  const _handleSwitchChange = (_name: string, _checked: boolean) => {_setFormData(prev => ({ ...prev, _[name]: checked}));
  };
  
  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Generate subdomain if not provided
      const _subdomain = formData.subdomain || formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, _'');
      
      // Create landing page copy
      const _landingPageCopy = {
        headline: "AI Hiring Assistant", _subtitle: `Find the best talent for your ${formData.industry || "company"}`,
        cta: "Get Started"
      };
      
      // Submit to Supabase
      const {_data, _error} = await supabase
        .from('whitelabel_tenants')
        .insert({_brand_name: formData.brand_name, _subdomain: subdomain, _custom_domain: formData.custom_domain || null, _primary_color: formData.primary_color, _logo_url: formData.logo_url || null, _theme_preset: formData.theme_preset, _landing_page_copy: landingPageCopy, _is_active: true, _account_manager_id: user.id, _dns_verified: false, _email_template_override: null})
        .select('id, brand_name, subdomain')
        .single();
      
      if (error) throw error;
      
      toast.success("Tenant created successfully!", {_description: `${data.brand_name} is now available at ${_data.subdomain}.ziontechmarketplace.com`
      });
      
      // Reset form
      setFormData({_brand_name: "", _subdomain: "", _logo_url: "", _primary_color: "#9b87f5", _theme_preset: "light", _company_size: "", _industry: "", _custom_domain: "", _is_co_branded: true});
      
    } catch (error: unknown) {_logErrorToProduction(error instanceof Error ? error.message : String(error), _error instanceof Error ? error : undefined, _{ message: 'Error creating tenant'});
      toast.error("Failed to create tenant", {_description: error.message});
    } finally {_setIsSubmitting(false);}
  };

  return (_<>
      <SEO 
        title="Tenant Onboarding - Zion AI Marketplace"
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform."
      />
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tenant Onboarding</h1>
            <p className="text-muted-foreground mt-2">
              Create a new white-label instance of Zion Hire AI for a company.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>New Tenant Setup</CardTitle>
              <CardDescription>
                Configure the branding and details for the new white-label tenant.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={_handleSubmit} className="space-y-6">
                <Tabs value={_activeTab} onValueChange={_setActiveTab} className="w-full">
                  <TabsList className="mb-4 grid grid-cols-3 w-full">
                    <TabsTrigger value="company">Company Info</TabsTrigger>
                    <TabsTrigger value="branding">Branding</TabsTrigger>
                    <TabsTrigger value="domain">Domain Setup</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="company" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand_name">Company Name</Label>
                      <Input
                        id="brand_name"
                        name="brand_name"
                        value={_formData.brand_name}
                        onChange={_handleInputChange}
                        placeholder="Acme Corporation"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select 
                        name="industry" 
                        value={_formData.industry} 
                        onValueChange={_(value) => handleSelectChange("industry", _value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="services">Professional Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company_size">Company Size</Label>
                      <Select 
                        name="company_size" 
                        value={_formData.company_size} 
                        onValueChange={_(_value) => handleSelectChange("company_size", _value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="branding" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="logo_url">Logo window.URL</Label>
                      <Input
                        id="logo_url"
                        name="logo_url"
                        value={_formData.logo_url}
                        onChange={_handleInputChange}
                        placeholder="https://example.com/logo.png"
                      />
                      <p className="text-xs text-muted-foreground">
                        Enter a direct window.URL to your logo image (SVG or PNG with transparent background recommended)
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="primary_color">Primary Brand Color</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="primary_color"
                          name="primary_color"
                          type="color"
                          value={_formData.primary_color}
                          onChange={_handleInputChange}
                          className="w-12 p-1 h-10"
                        />
                        <Input
                          name="primary_color"
                          value={_formData.primary_color}
                          onChange={_handleInputChange}
                          placeholder="#9b87f5"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="theme_preset">Theme Preset</Label>
                      <Select 
                        name="theme_preset" 
                        value={_formData.theme_preset} 
                        onValueChange={_(_value) => handleSelectChange("theme_preset", _value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="startup">Startup</SelectItem>
                          <SelectItem value="neon">Neon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="is_co_branded">Co-branding</Label>
                        <p className="text-xs text-muted-foreground">
                          Show "Powered by Zion AI" in the footer and elsewhere
                        </p>
                      </div>
                      <Switch
                        id="is_co_branded"
                        checked={_formData.is_co_branded}
                        onCheckedChange={_(_checked) => handleSwitchChange("is_co_branded", _checked)}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="domain" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="subdomain">Subdomain</Label>
                      <div className="flex items-center">
                        <Input
                          id="subdomain"
                          name="subdomain"
                          value={_formData.subdomain}
                          onChange={_handleInputChange}
                          className="rounded-r-none"
                        />
                        <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground">
                          .ziontechmarketplace.com
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Leave blank to auto-generate from company name
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="custom_domain">Custom Domain (Optional)</Label>
                      <Input
                        id="custom_domain"
                        name="custom_domain"
                        value={_formData.custom_domain}
                        onChange={_handleInputChange}
                        placeholder="hire.yourcompany.com"
                      />
                      <p className="text-xs text-muted-foreground">
                        If you want to use your own domain, enter it here. You'll need to configure DNS records.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={_() => window.history.back()}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={_isSubmitting}>
                    {_isSubmitting ? "Creating..." : "Create Tenant"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
