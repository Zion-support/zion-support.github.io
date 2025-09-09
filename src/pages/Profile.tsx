import { useState } from 'react';
import type { GetServerSideProps } from 'next';
// Removed GetServerSidePropsContext, NextApiRequestCookies from 'next'
// Removed ParsedUrlQuery from 'querystring' as it's not directly used if context is simplified
import { ProfileForm, ProfileValues } from '@/components/profile/ProfileForm';
import { PointsBadge } from '@/components/loyalty/PointsBadge';
import type { Order } from '@/hooks/useOrders';
import Link from 'next/link';
import type { IncomingMessage, IncomingHttpHeaders } from 'http'; // For req type

import React, { useEffect } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface ProfileProps {
  user: User;
  orders?: Order[];
}

// Define a minimal context type focusing on what's used
interface MySimpleServerSidePropsContext {
  req: { headers: IncomingHttpHeaders }; // req.headers.cookie is used
  // Add other context properties if they were used by the function:
  // res?: ServerResponse; // from 'http'
  // query?: ParsedUrlQuery; // from 'querystring'
  // params?: ParsedUrlQuery;
  // resolvedUrl?: string;
  // locale?: string;
  // locales?: string[];
  // defaultLocale?: string;
}

export default function Profile({ user: initialUser, orders }: ProfileProps) {
  const [user, setUser] = useState(initialUser);

  const handleSubmit = async (values: ProfileValues) => {
    const res = await fetch(`/api/users/${user.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    setUser(data);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Account</h1>
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Profile</h2>
            <PointsBadge />
          </div>
        </div>
      </div>
      
const Profile: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Profile - Zion Tech Group</title>
        <meta name="description" content="Manage your Zion Tech Group profile. Update your information, preferences, and account settings." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Profile</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage your account information, preferences, and settings in one place.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Profile management coming soon. We're building comprehensive profile features.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ProfileProps> = async (context: MySimpleServerSidePropsContext) => {
  const { req } = context;
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const [userRes, ordersRes] = await Promise.all([
    fetch(`${base}/api/users/me`, { headers: { cookie: req?.headers.cookie || '' } }),
    fetch(`${base}/api/orders?user_id=me`, { headers: { cookie: req?.headers.cookie || '' } })
  ]);

  if (userRes.status === 401) {
    return { redirect: { destination: '/login', permanent: false } };
  }

  const user = await userRes.json();
  let orders: Order[] = [];
  if (ordersRes.ok) {
    orders = await ordersRes.json();
    orders = orders.slice(0, 3);
  }

  return { props: { user, orders } };
};
