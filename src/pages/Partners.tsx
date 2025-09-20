import { Button } from "@/components/ui/button";
import { Card,
CardContent
, CardDescription,;
CardHeader;
, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileDown, FileText, PieChart, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm";
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks";
import { PartnerDashboard } from "@/components/partners/PartnerDashboard";
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard";
import { PartnerResources } from "@/components/partners/PartnerResources";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { logInfo, logErrorToProduction } from "@/utils/productionLogger";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from 'next/link',;
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm";,
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks";,
import { PartnerDashboard } from "@/components/partners/PartnerDashboard";,
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard";,
import { PartnerResources } from "@/components/partners/PartnerResources";,
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { logInfo, logErrorToProduction } from "@/utils/productionLogger";
export default function Partners() {
return (
    <div className='container max-w-7xl py-10'>
      <h1>DEBUG: Partners Page - Authenticated View</h1>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight text-white'>
            {t('partner.dashboard_title')}
          </h1>
          <p className='text-zion-slate-light'>{t('partner.dashboard_desc')}</p>
        </div>
        <div className='flex gap-2'>
          <Button
variant='outline'
            className='flex items-center gap-2'
            onClick={() => window.print()}
          >
            <FileDown className='h-4 w-4' />            {t('partner.export_csv')}      <h1>DEBUG: Partners Page - Authenticated View</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">{t('partner.dashboard_title')}</h1>
          <p className="text-zion-slate-light">{t('partner.dashboard_desc')}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>
            <FileDown className="h-4 w-4" />
            {t('partner.export_csv')}
          </Button>
        </div>
      </div>
      <Tabs
value={activeTab}
        onValueChange={setActiveTab}
        className='space-y-4'
      >
        <TabsList className='grid grid-cols-2 md:grid-cols-5 mb-4'>
          <TabsTrigger value='overview'>
            {t('partner.tabs.overview')}
          </TabsTrigger>
          <TabsTrigger value='referrals'>
            {t('partner.tabs.referrals')}
          </TabsTrigger>
          <TabsTrigger value='earnings'>
            {t('partner.tabs.earnings')}
          </TabsTrigger>
          <TabsTrigger value='leaderboard'>
            {t('partner.tabs.leaderboard')}
          </TabsTrigger>
          <TabsTrigger value='resources'>
            {t('partner.tabs.resources')}
          </TabsTrigger>
        </TabsList>        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <PartnerDashboard />
        </TabsContent>
        <TabsContent value="referrals" className="space-y-4">
          <PartnerReferralLinks />
        </TabsContent>
        <TabsContent value='overview' className='space-y-4'>
          <PartnerDashboard />
        </TabsContent>
        <TabsContent value='referrals' className='space-y-4'>
          <PartnerReferralLinks />
        </TabsContent>
        <TabsContent value='earnings' className='space-y-4'>          <Card>
        <TabsContent value="earnings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('partner.earnings_title')}</CardTitle>
              <CardDescription>{t('partner.earnings_desc')}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* This will be implemented later */}
              <p className='text-zion-slate-light'>
                {t('partner.earnings_placeholder')}
              </p>
            </CardContent>
          </Card>
        </TabsContent>            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leaderboard" className="space-y-4">
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value='leaderboard' className='space-y-4'>
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value='resources' className='space-y-4'>          <PartnerResources />
        <TabsContent value="resources" className="space-y-4">
          <PartnerResources />
        </TabsContent>
      </Tabs>
import React from 'react';

export default function Partners() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Partners</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}