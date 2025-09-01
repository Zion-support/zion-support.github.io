<<<<<<< HEAD
import React, { useState } from 'react';'''
import { SEO } from '@/components/SEO';'''
import { WhitelabelRequestForm } from '@/components/admin/whitelabel/WhitelabelRequestForm';'''
import { TenantsList } from '@/components/admin/whitelabel/TenantsList';'''
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';'''
import { useAuth } from '@/hooks/useAuth';'''
import { Navigate } from 'react-router-dom';
export default function WhitelabelManager() {}
  const { user } = useAuth();'
  const [activeTab, setActiveTab] = useState('tenants');'
  // Check if user has admin role''
  const isAdmin = user?.role === 'admin';
  if (!isAdmin) {}
    return <Navigate to="/unauthorized" />;
  }
  return()
    <>"""
      <SEO""""
        title="White-Label Management - Zion AI Marketplace""""
        description="Create and manage white-label instances of the Zion AI Marketplace platform."""
      />"""
""""
      <main className="flex-1 container max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">""""
        <div className="flex flex-col space-y-6">"""
          <div>""""
            <h1 className="text-3xl font-bold tracking-tight">
              White-Label Management"""
            </h1>""""
            <p className="text-muted-foreground mt-2">
              Create and manage branded versions of the platform for agencies,
              startups, and enterprise clients.
            </p>
          </div>

          <Tabs;
            value={activeTab}"""
            onValueChange={setActiveTab}""""
            className="w-full""""
          >""""
            <TabsList className="mb-8">""""
              <TabsTrigger value="tenants">Tenants</TabsTrigger>""""
              <TabsTrigger value="create">Create New</TabsTrigger>""""
              <TabsTrigger value="docs">Documentation</TabsTrigger>
            </TabsList>"""
""""
            <TabsContent value="tenants" className="space-y-6">
              <TenantsList />
            </TabsContent>"""
""""
            <TabsContent value="create" className="flex justify-center">
              <WhitelabelRequestForm />
            </TabsContent>"""
""""
            <TabsContent value="docs" className="space-y-6">""""
=======
import React, { useState } from 'react';
import SEO from "@/components/SEO";
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm";
import { TenantsList } from "@/components/admin/whitelabel/TenantsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function WhitelabelManager() {

    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState("tenants");
    // Check if user has admin role
    const isAdmin = user?.role === "admin";
    if (!isAdmin) {

        return <Navigate to="/unauthorized"/>}
    return (<>
      <SEO title="White-Label Management - Zion AI Marketplace" description="Create and manage white-label instances of the Zion AI Marketplace platform."/>
      
      <main className="flex-1 container max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">White-Label Management</h1>
            <p className="text-muted-foreground mt-2">
              Create and manage branded versions of the platform for agencies, startups, and enterprise clients.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="tenants">Tenants</TabsTrigger>
              <TabsTrigger value="create">Create New</TabsTrigger>
              <TabsTrigger value="docs">Documentation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tenants" className="space-y-6">
              <TenantsList />
            </TabsContent>
            
            <TabsContent value="create" className="flex justify-center">
              <WhitelabelRequestForm />
            </TabsContent>
            
            <TabsContent value="docs" className="space-y-6">
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
              <div className="prose dark:prose-invert max-w-none">
                <h2>White-Label Documentation</h2>
                <h3>DNS Configuration</h3>
                <p>
<<<<<<< HEAD
                  To use a custom domain with your white-label instance, you;
                  need to configure the DNS records. Add a CNAME record pointing;
                  to <code>ziontechmarketplace.com</code>.
=======
                  To use a custom domain with your white-label instance, you need to configure the DNS records. 
                  Add a CNAME record pointing to <code>ziontechmarketplace.com</code>.
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Record Type</th>
                      <th>Name</th>
                      <th>Value</th>
                      <th>TTL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CNAME</td>
                      <td>marketplace</td>
                      <td>ziontechmarketplace.com</td>
                      <td>3600</td>
                    </tr>
                  </tbody>
                </table>
<<<<<<< HEAD

                <h3>Email Templates</h3>
                <p>
                  White-label instances can use customized email templates. You;
                  can upload HTML templates for the following emails: any;
=======
                
                <h3>Email Templates</h3>
                <p>
                  White-label instances can use customized email templates. You can upload HTML templates 
                  for the following emails:
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
                </p>
                <ul>
                  <li>Welcome Email</li>
                  <li>Password Reset</li>
                  <li>Quote Request</li>
                  <li>Invoice</li>
                  <li>Receipt</li>
                </ul>
<<<<<<< HEAD

                <h3>Admin Access</h3>
                <p>
                  You can assign tenant administrators who will have access to;
                  manage their white-label instance, including content, users,
                  and analytics. Tenant admins cannot access data from other;
                  tenants.
=======
                
                <h3>Admin Access</h3>
                <p>
                  You can assign tenant administrators who will have access to manage their white-label instance, 
                  including content, users, and analytics. Tenant admins cannot access data from other tenants.
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
<<<<<<< HEAD
    </>
  );
}'"""
'"'"""
=======
      
    </>)}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
