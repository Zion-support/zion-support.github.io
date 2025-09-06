<<<<<<< HEAD

<<<<<<< HEAD
=======
import React, { useState } from 'react'
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Search, Filter } from 'lucide-react'
import { SEO } from '@/components/SEO'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { Search, Filter } from 'lucide-react'
import { SEO } from "@/components/SEO";
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Search, Filter } from 'lucide-react'
import { SEO } from "@/components/SEO",
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Mock data for support requests

const MOCK_SUPPORT_REQUESTS = [
  {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components / ui / select';
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Search, Filter } from 'lucide-react';
import { SEO } from '@/components / SEO';
// Mock data for support requests;
const MOCK_SUPPORT_REQUESTS = [;
  {
    id: 'SR - 1001',
    user: 'john.doe@example.com',
    user_id: 'user - 123',
    issue: 'Cannot access account after password reset',
    status: 'open',
    priority: 'high',
    created_at: '2023 - 12 - 15T14:30:00Z',
    last_updated: '2023 - 12 - 15T15:45:00Z',
    category: 'authentication',

<<<<<<< HEAD
=======
const MOCK_SUPPORT_REQUESTS = [
  {
    id: 'SR-1001'
    user: 'john.doe@example.com'
    userId: 'user-123'
    issue: 'Cannot access account after password reset'
    status: 'open'
    priority: 'high'
    createdAt: '2023-12-15T14:30:00Z'
    lastUpdated: '2023-12-15T15:45:00Z'
    category: 'authentication'
  }
  {
    id: 'SR-1002'
    user: 'sarah.smith@company.co'
    userId: 'user-456'
    issue: 'Payment failed but funds were deducted'
    status: 'in-progress'
    priority: 'high'
    createdAt: '2023-12-14T09:15:00Z'
    lastUpdated: '2023-12-15T13:20:00Z'
    category: 'billing'
  }
  {
    id: 'SR-1003'
    user: 'tech.guru@startup.io'
    userId: 'user-789'
    issue: 'Unable to download invoice PDF'
    status: 'open'
    priority: 'medium'
    createdAt: '2023-12-15T11:00:00Z'
    lastUpdated: '2023-12-15T11:00:00Z'
    category: 'billing'
  }
  {
    id: 'SR-1004'
    user: 'developer@codelab.dev'
    userId: 'user-235'
    issue: 'API integration documentation is outdated'
    status: 'open'
    priority: 'low'
    createdAt: '2023-12-13T16:45:00Z'
    lastUpdated: '2023-12-13T16:45:00Z'
    category: 'api'
  }
  {
    id: 'SR-1005'
    user: 'maria.rodriguez@design.co'
    userId: 'user-567'
    issue: 'Dispute with freelancer over delivered work quality'
    status: 'in-progress'
    priority: 'high'
    createdAt: '2023-12-12T10:30:00Z'
    lastUpdated: '2023-12-15T09:15:00Z'
    category: 'disputes'
  }
  {
    id: 'SR-1006'
    user: 'alex.wong@datacompany.com'
    userId: 'user-890'
    issue: 'Profile verification pending for over 7 days'
    status: 'resolved'
    priority: 'medium'
    createdAt: '2023-12-08T13:20:00Z'
    lastUpdated: '2023-12-15T08:30:00Z'
    category: 'verification'
  }
  {
    id: 'SR-1007'
    user: 'jamie.taylor@tech.org'
    userId: 'user-345'
    issue: 'Cannot upload portfolio images'
    status: 'resolved'
    priority: 'medium'
    createdAt: '2023-12-10T15:10:00Z'
    lastUpdated: '2023-12-13T11:25:00Z'
    category: 'profile'
  }
]
export default function SupportRequests() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null)
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  // Apply filters to the request data
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {
    // Apply search query filter
    if (
      searchQuery &&
      !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !request.id.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }
    // Apply status filter
    if (statusFilter && request.status !== statusFilter) {
      return false
    }
    // Apply priority filter
    if (priorityFilter && request.priority !== priorityFilter) {
      return false
    }
    // Apply category filter
    if (categoryFilter && request.category !== categoryFilter) {
      return false
    }
    return true
  })
  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS.filter(
    r => r.status === 'open'
  ).length
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(
    r => r.status === 'in-progress'
  ).length
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(
    r => r.status === 'resolved'
  ).length
  const totalCount = MOCK_SUPPORT_REQUESTS.length
  const resetFilters = () => {
    setSearchQuery('')
    setStatusFilter(null)
    setPriorityFilter(null)
    setCategoryFilter(null)
  }

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    id: "SR-1001",
    user: "john.doe@example.com",
    userId: "user-123",
    issue: "Cannot access account after password reset",
    status: "open",
    priority: "high",
    createdAt: "2023-12-15T14:30:00Z",
    lastUpdated: "2023-12-15T15:45:00Z",
    category: "authentication"
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
  {
    id: 'SR - 1002',
    user: 'sarah.smith@company.co',
    user_id: 'user - 456',
    issue: 'Payment failed but funds were deducted',
    status: 'in - progress',
    priority: 'high',
    created_at: '2023 - 12 - 14T09:15:00Z',
    last_updated: '2023 - 12 - 15T13:20:00Z',
    category: 'billing',
  },
  {
    id: 'SR - 1003',
    user: 'tech.guru@startup.io',
    user_id: 'user - 789',
    issue: 'Unable to download invoice PDF',
    status: 'open',
    priority: 'medium',
    created_at: '2023 - 12 - 15T11:00:00Z',
    last_updated: '2023 - 12 - 15T11:00:00Z',
    category: 'billing',
  },
  {
    id: 'SR - 1004',
    user: 'developer@codelab.dev',
    user_id: 'user - 235',
    issue: 'API integration documentation is outdated',
    status: 'open',
    priority: 'low',
    created_at: '2023 - 12 - 13T16:45:00Z',
    last_updated: '2023 - 12 - 13T16:45:00Z',
    category: 'api',
  },
  {
    id: 'SR - 1005',
    user: 'maria.rodriguez@design.co',
    user_id: 'user - 567',
    issue: 'Dispute with freelancer over delivered work quality',
    status: 'in - progress',
    priority: 'high',
    created_at: '2023 - 12 - 12T10:30:00Z',
    last_updated: '2023 - 12 - 15T09:15:00Z',
    category: 'disputes',
  },
  {
    id: "SR-1006",
    user: "alex.wong@datacompany.com",
    userId: "user-890",
    issue: "Profile verification pending for over 7 days",
    status: "resolved",
    priority: "medium",
    createdAt: "2023-12-08T13:20:00Z",
    lastUpdated: "2023-12-15T08:30:00Z",
    category: "verification"
  },
  {
<<<<<<< HEAD
=======
  },
  {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
<<<<<<< HEAD
  }
=======
    id: 'SR-1007',
    user: 'jamie.taylor@tech.org',
    userId: 'user-345',
    issue: 'Cannot upload portfolio images',
    status: 'resolved',
    priority: 'medium',
    createdAt: '2023-12-10T15:10:00Z',
    lastUpdated: '2023-12-13T11:25:00Z',
    category: 'profile',
  },
]
export default function SupportRequests() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null)
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  // Apply filters to the request data
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {
    // Apply search query filter
    if (
      searchQuery &&
      !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !request.id.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Apply status filter
    if (statusFilter && request.status !== statusFilter) {
      return false
    }

    // Apply priority filter
    if (priorityFilter && request.priority !== priorityFilter) {
      return false
    }

    // Apply category filter
    if (categoryFilter && request.category !== categoryFilter) {
      return false
    }

    return true
  })
  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS.filter(
    r => r.status === 'open'
  ).length
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(
    r => r.status === 'in-progress'
  ).length
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(
    r => r.status === 'resolved'
  ).length
  const totalCount = MOCK_SUPPORT_REQUESTS.length
  const resetFilters = () => {
    setSearchQuery('')
    setStatusFilter(null)
    setPriorityFilter(null)
    setCategoryFilter(null)
  }
    id: "SR-1007",
    user: "jamie.taylor@tech.org",
    userId: "user-345",
    issue: "Cannot upload portfolio images",
    status: "resolved",
    priority: "medium",
    createdAt: "2023-12-10T15:10:00Z",
    lastUpdated: "2023-12-13T11:25:00Z",
    category: "profile"
  }
],

export default function SupportRequests() {
  const [searchQuery, setSearchQuery] = useState(""),
  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null),
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  
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
import React, { useState } from 'react';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';
import { SEO } from '@/components/SEO';
// Mock data for support requests;
const MOCK_SUPPORT_REQUESTS = [;
  {;
    id: 'SR-1001',;
    user: 'john && john.doe@example && example.com',;
    userId: 'user-123',;
    issue: 'Cannot access account after password reset',;
    status: 'open',;
    priority: 'high',;
    createdAt: '2023-12-15T14:30:00Z',;
    lastUpdated: '2023-12-15T15:45:00Z',;
    category: 'authentication',;
  },;
  {;
    id: 'SR-1002',;
    user: 'sarah && sarah.smith@company && company.co',;
    userId: 'user-456',;
    issue: 'Payment failed but funds were deducted',;
    status: 'in-progress',;
    priority: 'high',;
    createdAt: '2023-12-14T09:15:00Z',;
    lastUpdated: '2023-12-15T13:20:00Z',;
    category: 'billing',;
  },;
  {;
    id: 'SR-1003',;
    user: 'tech && tech.guru@startup && startup.io',;
    userId: 'user-789',;
    issue: 'Unable to download invoice PDF',;
    status: 'open',;
    priority: 'medium',;
    createdAt: '2023-12-15T11:00:00Z',;
    lastUpdated: '2023-12-15T11:00:00Z',;
    category: 'billing',;
  },;
  {;
    id: 'SR-1004',;
    user: 'developer@codelab && codelab.dev',;
    userId: 'user-235',;
    issue: 'API integration documentation is outdated',;
    status: 'open',;
    priority: 'low',;
    createdAt: '2023-12-13T16:45:00Z',;
    lastUpdated: '2023-12-13T16:45:00Z',;
    category: 'api',;
  },;
  {;
    id: 'SR-1005',;
    user: 'maria && maria.rodriguez@design && design.co',;
    userId: 'user-567',;
    issue: 'Dispute with freelancer over delivered work quality',;
    status: 'in-progress',;
    priority: 'high',;
    createdAt: '2023-12-12T10:30:00Z',;
    lastUpdated: '2023-12-15T09:15:00Z',;
    category: 'disputes',;
  },;
  {;
    id: 'SR-1006',;
    user: 'alex && alex.wong@datacompany && datacompany.com',;
    userId: 'user-890',;
    issue: 'Profile verification pending for over 7 days',;
    status: 'resolved',;
    priority: 'medium',;
    createdAt: '2023-12-08T13:20:00Z',;
    lastUpdated: '2023-12-15T08:30:00Z',;
    category: 'verification',;
  },;
  {;
<<<<<<< HEAD
    id: 'SR-1007',;
    user: 'jamie && jamie.taylor@tech && tech.org',;
    userId: 'user-345',;
    issue: 'Cannot upload portfolio images',;
    status: 'resolved',;
    priority: 'medium',;
    createdAt: '2023-12-10T15:10:00Z',;
    lastUpdated: '2023-12-13T11:25:00Z',;
    category: 'profile',;
  },;
];

export default function SupportRequests() {;
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  // Apply filters to the request data;
  const filteredRequests = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(request => {;
    // Apply search query filter;
    if (;
      searchQuery &&;
      !request && request.issue.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) &&;
      !request && request.user.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) &&;
      !request && request.id.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
    ) {;
      return false;
    }

    // Apply status filter;
    if (statusFilter && request && request.status !== statusFilter) {;
      return false;
    }

    // Apply priority filter;
    if (priorityFilter && request && request.priority !== priorityFilter) {;
      return false;
    }

    // Apply category filter;
    if (categoryFilter && request && request.category !== categoryFilter) {;
      return false;
    }
<<<<<<< HEAD
=======
    
    return true
  }),
  
  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length,
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length,
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length,
  const totalCount = MOCK_SUPPORT_REQUESTS.length,
  
  const resetFilters = () => {
    setSearchQuery(""),
    setStatusFilter(null),
    setPriorityFilter(null),
    setCategoryFilter(null)
  },
  
  
  return (
    <>
      <SEO 
        title="Support Requests | Admin Dashboard"
        description="Manage and track user support requests and issues"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Support Requests
            </h1>
            <p className="text-zion-slate-light mt-2">
              Manage and respond to user support requests and issues
            </p>
          </div>
          <div className='mt-4 md:mt-0'>
            <Button className='bg-zion-purple hover:bg-zion-purple-light'>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
ursor/fix-website-loading-errors-and-merge-6662
=======
    id: "SR-1007",;
    user: "jamie.taylor@tech.org",;
    userId: "user-345",;
    issue: "Cannot upload portfolio images",;
    status: "resolved",;
    priority: "medium",;
    createdAt: "2023-12-10T15:10:00Z",;
    lastUpdated: "2023-12-13T11:25:00Z",;
    category: "profile";
  }
],;
export default function SupportRequests() {;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [statusFilter, setStatusFilter] = useState<string | null>(null),;
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null),;
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null),;
  // Apply filters to the request data;
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {;
    // Apply search query filter;
    if (searchQuery &&;
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&;
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&;
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {;
      return false;
    }
;
    // Apply status filter;
    if (statusFilter && request.status !== statusFilter) {;
      return false;
    }
;
    // Apply priority filter;
    if (priorityFilter && request.priority !== priorityFilter) {;
      return false;
    }
;
    // Apply category filter;
    if (categoryFilter && request.category !== categoryFilter) {;
      return false;
    }

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return true;
  });

  // Count by status for the summary dashboard;
  const openCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(;
    r => r && r.status === 'open';
  ).length;
  const inProgressCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(;
    r => r && r.status === 'in-progress';
  ).length;
  const resolvedCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(;
    r => r && r.status === 'resolved';
  ).length;
  const totalCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.length;

  const resetFilters = () => {;
    setSearchQuery('');
    setStatusFilter(null);
    setPriorityFilter(null);
    setCategoryFilter(null);
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    
    return true
  }),
  
  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length,
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length,
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length,
  const totalCount = MOCK_SUPPORT_REQUESTS.length,
  
  const resetFilters = () => {
    setSearchQuery(""),
    setStatusFilter(null),
    setPriorityFilter(null),
    setCategoryFilter(null)
  },
  
  return (
<<<<<<< HEAD
    <>;


          
          <div className="mt-4 md:mt-0">
            <Button className="bg-zion-purple hover:bg-zion-purple-light">


<<<<<<< HEAD
=======
          <div className='mt-4 md:mt-0'>
            <Button className='bg-zion-purple hover:bg-zion-purple-light'>
          
          <div className="mt-4 md:mt-0">
            <Button className="bg-zion-purple hover:bg-zion-purple-light">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    <>
      <SEO 
        title="Support Requests | Admin Dashboard"
        description="Manage and track user support requests and issues"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Support Requests
            </h1>
            <p className="text-zion-slate-light mt-2">
              Manage and respond to user support requests and issues
            </p>
          </div>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              New Support Case
            </Button>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        


        {/* Status Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
<<<<<<< HEAD
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-2xl font-bold'>{openCount}</CardTitle>
=======
            <CardHeader className='pb-2'>
              <CardTitle className='text-2xl font-bold'>{openCount}</CardTitle>
        
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{openCount}</CardTitle>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <CardDescription>Open Requests</CardDescription>
            </CardHeader>
          </Card>
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


          <Card>
<<<<<<< HEAD
            <CardHeader className='pb-2'>
              <CardTitle className='text-2xl font-bold'>
                {inProgressCount}
              </CardTitle>
=======
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{inProgressCount}</CardTitle>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <CardDescription>In Progress</CardDescription>
            </CardHeader>
          </Card>
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          


          <Card>
<<<<<<< HEAD
            <CardHeader className='pb-2'>
              <CardTitle className='text-2xl font-bold'>
                {resolvedCount}
              </CardTitle>
              <CardDescription>Resolved</CardDescription>
            </CardHeader>
          </Card>


          
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-2xl font-bold'>{totalCount}</CardTitle>
=======
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{resolvedCount}</CardTitle>
              <CardDescription>Resolved</CardDescription>
            </CardHeader>
          </Card>
<<<<<<< HEAD
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{totalCount}</CardTitle>
ursor/fix-website-loading-errors-and-merge-6662
          
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{inProgressCount}</CardTitle>
              <CardDescription>In Progress</CardDescription>
            </CardHeader>
          </Card>
          
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{resolvedCount}</CardTitle>
              <CardDescription>Resolved</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-2xl font-bold'>{totalCount}</CardTitle>
          
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{totalCount}</CardTitle>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <CardDescription>Total Requests</CardDescription>
            </CardHeader>
          </Card>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD


        
        <Tabs defaultValue="all" className="mb-8">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


          <TabsList>
            <TabsTrigger value='all'>All Requests</TabsTrigger>
            <TabsTrigger value='escalated'>Escalated</TabsTrigger>
            <TabsTrigger value='ai-flagged'>AI Flagged</TabsTrigger>
            <TabsTrigger value='need-response'>Need Response</TabsTrigger>
          </TabsList>
<<<<<<< HEAD

      />;
      <div className='container mx-auto px-4 py-8'>;
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-8'>;
          <div>;
            <h1 className='text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent'>;
              Support Requests;
            </h1>;
            <p className='text-zion-slate-light mt-2'>;
              Manage and respond to user support requests and issues;
            </p>;
          </div>;

          <div className='mt-4 md:mt-0'>;
            <Button className='bg-zion-purple hover:bg-zion-purple-light'>;
              New Support Case;
            </Button>;
          </div>;
        </div>;

        {/* Status Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>;
          <Card>;
            <CardHeader className='pb-2'>;
              <CardTitle className='text-2xl font-bold'>{openCount}</CardTitle>;
              <CardDescription>Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;

          <Card>;
            <CardHeader className='pb-2'>;
              <CardTitle className='text-2xl font-bold'>;
                {inProgressCount}
              </CardTitle>;
              <CardDescription>In Progress</CardDescription>;
            </CardHeader>;
          </Card>;

          <Card>;
            <CardHeader className='pb-2'>;
              <CardTitle className='text-2xl font-bold'>;
                {resolvedCount}
              </CardTitle>;
              <CardDescription>Resolved</CardDescription>;
            </CardHeader>;
          </Card>;

          <Card>;
            <CardHeader className='pb-2'>;
              <CardTitle className='text-2xl font-bold'>{totalCount}</CardTitle>;
              <CardDescription>Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;

        <Tabs defaultValue='all' className='mb-8'>;
          <TabsList>;
            <TabsTrigger value='all'>All Requests</TabsTrigger>;
            <TabsTrigger value='escalated'>Escalated</TabsTrigger>;
            <TabsTrigger value='ai-flagged'>AI Flagged</TabsTrigger>;
            <TabsTrigger value='need-response'>Need Response</TabsTrigger>;
          </TabsList>;

          <TabsContent value='all' className='mt-6'>;

=======
        <Tabs defaultValue='all' className='mb-8'>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="escalated">Escalated</TabsTrigger>
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>
            <TabsTrigger value="need-response">Need Response</TabsTrigger>
          </TabsList>
          <TabsContent value='all' className='mt-6'>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                value={statusFilter |''}
                onValueChange={value => setStatusFilter(value |null)}
ursor/fix-website-loading-errors-and-merge-6662
        <Tabs defaultValue='all' className='mb-8'>
        
        <Tabs defaultValue="all" className="mb-8">


          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="escalated">Escalated</TabsTrigger>
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>
            <TabsTrigger value="need-response">Need Response</TabsTrigger>
          </TabsList>
          <TabsContent value='all' className='mt-6'>
          
          <TabsContent value="all" className="mt-6">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

          
          <TabsContent value="all" className="mt-6">

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {/* Search and Filters */}
            <div className='flex flex-col md:flex-row gap-4 mb-6'>;
              <div className='relative flex-1'>;
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />;
                <Input
<<<<<<< HEAD
<<<<<<< HEAD


                value={statusFilter || ''}
                onValueChange={value => setStatusFilter(value || null)}

=======
                  placeholder='Search by ID, user or issue...'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className='pl-10'                />
              </div>
              <Select
                value={statusFilter |''}
                onValueChange={value => setStatusFilter(value |null)}
                value={statusFilter || ''}
                onValueChange={value => setStatusFilter(value || null)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              >
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Status' />
                  placeholder="Search by ID, user or issue..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662


                </SelectTrigger>
                  <SelectItem value=''>All Statuses</SelectItem>
                  <SelectItem value='open'>Open</SelectItem>
                  <SelectItem value='in-progress'>In Progress</SelectItem>
                  <SelectItem value='resolved'>Resolved</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



                </SelectTrigger>
                <SelectContent>
<<<<<<< HEAD
                  <SelectItem value=''>All Statuses</SelectItem>
                  <SelectItem value='open'>Open</SelectItem>
                  <SelectItem value='in-progress'>In Progress</SelectItem>
                  <SelectItem value='resolved'>Resolved</SelectItem>
                </SelectContent>
              </Select>


                value={priorityFilter || ''}
                onValueChange={value => setPriorityFilter(value || null)}

=======
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
<<<<<<< HEAD
              <Select
                value={priorityFilter |''}
                onValueChange={value => setPriorityFilter(value |null)}
                value={priorityFilter || ''}
                onValueChange={value => setPriorityFilter(value || null)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              >
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Priority' />
              
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
              
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



                </SelectTrigger>
                <SelectContent>
<<<<<<< HEAD
                  <SelectItem value=''>All Priorities</SelectItem>
                  <SelectItem value='high'>High</SelectItem>
                  <SelectItem value='medium'>Medium</SelectItem>
                  <SelectItem value='low'>Low</SelectItem>
                </SelectContent>
              </Select>


                value={categoryFilter || ''}
                onValueChange={value => setCategoryFilter(value || null)}

=======
                  <SelectItem value="">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
<<<<<<< HEAD
              <Select
                value={categoryFilter |''}
                onValueChange={value => setCategoryFilter(value |null)}
                value={categoryFilter || ''}
                onValueChange={value => setCategoryFilter(value || null)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              >
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Category' />
              
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
<<<<<<< HEAD
<<<<<<< HEAD



                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=''>All Categories</SelectItem>
                  <SelectItem value='authentication'>Authentication</SelectItem>
                  <SelectItem value='billing'>Billing</SelectItem>
                  <SelectItem value='api'>API</SelectItem>
                  <SelectItem value='disputes'>Disputes</SelectItem>
                  <SelectItem value='verification'>Verification</SelectItem>
                  <SelectItem value='profile'>Profile</SelectItem>
                </SelectContent>
              </Select>
              </Button>
            </div>
            


=======
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  <SelectItem value="authentication">Authentication</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                  <SelectItem value="disputes">Disputes</SelectItem>
                  <SelectItem value="verification">Verification</SelectItem>
                  <SelectItem value="profile">Profile</SelectItem>
                </SelectContent>
              </Select>
<<<<<<< HEAD
              <Button
                variant='outline'
                onClick={resetFilters}
                className='md:w-auto'
              >
                <Filter className='h-4 w-4 mr-2' /> Reset Filters
              </Button>
            </div>
                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='pl-10'                />;
              </div>;

              <Select
                value={statusFilter || ''}
                onValueChange={value => setStatusFilter(value || null)}

                        <TableCell>{request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>
                        <TableCell>

                            {request.priority}
              
              <Button variant="outline" onClick={resetFilters} className="md:w-auto">
                <Filter className="h-4 w-4 mr-2" /> Reset Filters
              </Button>
            </div>
            
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {/* Support Requests Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Issue</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
<<<<<<< HEAD
<<<<<<< HEAD

                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>

=======
                    {filteredRequests.map(request => (                      <TableRow key={request.id}>
                        <TableCell className='font-medium'>
                          {request.id}
                        </TableCell>
                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        <TableCell>{request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              request.status === 'open'
                                ? 'default'
                                : request.status === 'in-progress'
                                  ? 'secondary'
                                  : 'outline'
                            }
                          >
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              request.priority === 'high'
                                ? 'destructive'
                                : request.priority === 'medium'
                                  ? 'default'
                                  : 'outline'
                            }
                          >
<<<<<<< HEAD
          <TabsContent value='escalated' className='mt-6'>
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'>
              <h3 className='text-xl font-medium mb-4'>Escalated Requests</h3>
              <p className='text-zion-slate-light'>
                This tab will show support requests that have been escalated by
                agents or the system.
              </p>
            </div>
          </TabsContent>
          <TabsContent value='ai-flagged' className='mt-6'>
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'>
              <h3 className='text-xl font-medium mb-4'>AI Flagged Issues</h3>
              <p className='text-zion-slate-light'>
                This tab shows issues that our AI system has identified as
                requiring human attention.
              </p>
            </div>
          </TabsContent>
          <TabsContent value='need-response' className='mt-6'>
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'>
              <h3 className='text-xl font-medium mb-4'>Awaiting Response</h3>
              <p className='text-zion-slate-light'>
                These support requests have been waiting for an agent response
                for over 24 hours.
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        <TableCell>{request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>
                        <TableCell>

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                          <Badge variant={
                            request.status === 'open' 
                              ? 'default' 
                              : request.status === 'in-progress' 
                              ? 'secondary' 
                              : 'outline'
                          }>
;
    return true;
  }),;
  // Count by status for the summary dashboard;
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length,;
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length,;
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length,;
  const totalCount = MOCK_SUPPORT_REQUESTS.length,;
  const resetFilters = () => {;
    setSearchQuery(""),;
    setStatusFilter(null),;
    setPriorityFilter(null);
    setCategoryFilter(null);
  };
  return (;
    <>;
      <SEO;
<<<<<<< HEAD
        title='Support Requests | Admin Dashboard';
        description='Manage and track user support requests and issues';
      />;
      <div className='container mx - auto px - 4 py - 8'>;
        <div className='flex flex - col md:flex - row items - start md:items - center justify - between mb - 8'>;
          <div>;
            <h1 className='text - 3xl font - bold bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent'>;
              Support Requests;
            </h1>;
            <p className='text - zion - slate - light mt - 2'>;
              Manage and respond to user support requests and issues;
            </p>;
          </div>;
          <div className='mt - 4 md:mt - 0'>;
            <Button className='bg - zion - purple hover:bg - zion - purple - light'>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              New Support Case;
            </Button>;
          </div>;
        </div>;
        {/* Status Cards */}
<<<<<<< HEAD
        <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 4 mb - 8'>;
          <Card>;
            <CardHeader className='pb - 2'>;
              <CardTitle className='text - 2xl font - bold'>{open_count}</CardTitle>;
              <CardDescription > Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className='pb - 2'>;
              <CardTitle className='text - 2xl font - bold'>;
                {inProgressCount}
              </CardTitle>;
              <CardDescription > In Progress</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className='pb - 2'>;
              <CardTitle className='text - 2xl font - bold'>;
                {resolved_count}
              </CardTitle>;
              <CardDescription > Resolved</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className='pb - 2'>;
              <CardTitle className='text - 2xl font - bold'>{total_count}</CardTitle>;
              <CardDescription > Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;
        <Tabs default_value='all' className='mb - 8'>;
          <TabsList>;
            <TabsTrigger value='all'>All Requests</TabsTrigger>;
            <TabsTrigger value='escalated'>Escalated</TabsTrigger>;
            <TabsTrigger value='ai - flagged'>AI Flagged</TabsTrigger>;
            <TabsTrigger value='need - response'>Need Response</TabsTrigger>;
          </TabsList>;
          <TabsContent value='all' className='mt - 6'>;
            {/* Search and Filters */}
            <div className='flex flex - col md:flex - row gap - 4 mb - 6'>;
              <div className='relative flex - 1'>;
                <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - gray - 400' />;
                <Input;
                  placeholder='Search by ID, user or issue...';
                  value={search_query}
                  on_change={e => setSearchQuery (e.target.value)}
                  className='pl - 10'                />;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </div>;
              <Select;
                value={status_filter || ''}
                onValueChange={value => setStatusFilter (value || null)}
              >;
                <SelectTrigger className='w-[180px]'>;
                  <SelectValue placeholder='Status' />;
                </SelectTrigger>;
                <SelectContent>;
<<<<<<< HEAD
<<<<<<< HEAD
                  <SelectItem value=''>All Statuses</SelectItem>;
                  <SelectItem value='open'>Open</SelectItem>;

                  <SelectItem value='in - progress'>In Progress</SelectItem>;
                  <SelectItem value='resolved'>Resolved</SelectItem>;
                </SelectContent>;
              </Select>;
              <Select;
                value={priority_filter || ''}
                onValueChange={value => setPriorityFilter (value || null)}

              >;
                <SelectTrigger className='w-[180px]'>;
                  <SelectValue placeholder='Priority' />;
=======
                  <SelectItem value="">All Statuses</SelectItem>;
                  <SelectItem value="open">Open</SelectItem>;
                  <SelectItem value="in-progress">In Progress</SelectItem>;
                  <SelectItem value="resolved">Resolved</SelectItem>;
                </SelectContent>;
              </Select>;
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Priority" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value=''>All Priorities</SelectItem>;
                  <SelectItem value='high'>High</SelectItem>;
                  <SelectItem value='medium'>Medium</SelectItem>;
                  <SelectItem value='low'>Low</SelectItem>;
                </SelectContent>;
              </Select>;
<<<<<<< HEAD
<<<<<<< HEAD

              <Select;
                value={category_filter || ''}
                onValueChange={value => setCategoryFilter (value || null)}

              >;
                <SelectTrigger className='w-[180px]'>;
                  <SelectValue placeholder='Category' />;
=======
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Category" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value=''>All Categories</SelectItem>;
                  <SelectItem value='authentication'>Authentication</SelectItem>;
                  <SelectItem value='billing'>Billing</SelectItem>;
                  <SelectItem value='api'>API</SelectItem>;
                  <SelectItem value='disputes'>Disputes</SelectItem>;
                  <SelectItem value='verification'>Verification</SelectItem>;
                  <SelectItem value='profile'>Profile</SelectItem>;
                </SelectContent>;
              </Select>;
<<<<<<< HEAD
<<<<<<< HEAD

              <Button;
                variant='outline';
                on_click={reset_filters}
                className='md:w - auto';
              >;
                <Filter className='h - 4 w - 4 mr - 2' /> Reset Filters;
=======
              <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
                <Filter className="h-4 w-4 mr-2" /> Reset Filters;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </Button>;
            </div>;
            {/* Support Requests Table */}
            <Card>;
<<<<<<< HEAD
              <CardContent className='p - 0'>;
                <Table>;
                  <TableHeader>;
                    <TableRow>;
                      <TableHead > ID</TableHead>;
                      <TableHead > User</TableHead>;
                      <TableHead > Issue</TableHead>;
                      <TableHead > Status</TableHead>;
                      <TableHead > Priority</TableHead>;
                      <TableHead > Category</TableHead>;
                      <TableHead > Created</TableHead>;
                      <TableHead > Last Updated</TableHead>;
                      <TableHead > Actions</TableHead>;
                    </TableRow>;
                  </TableHeader>;
                  <TableBody>;
                    {filtered_requests.map (request => (                      <TableRow key={request.id}>;
                        <TableCell className='font - medium'>;
                          {request.id}
                        </TableCell>;
=======
              <CardContent className="p-0">;
                <Table>;
                  <TableHeader>;
                    <TableRow>;
                      <TableHead>ID</TableHead>;
                      <TableHead>User</TableHead>;
                      <TableHead>Issue</TableHead>;
                      <TableHead>Status</TableHead>;
                      <TableHead>Priority</TableHead>;
                      <TableHead>Category</TableHead>;
                      <TableHead>Created</TableHead>;
                      <TableHead>Last Updated</TableHead>;
                      <TableHead>Actions</TableHead>;
                    </TableRow>;
                  </TableHeader>;
                  <TableBody>;
                    {filteredRequests.map((request) => (;
                      <TableRow key={request.id}>;
                        <TableCell className="font-medium">{request.id}</TableCell>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        <TableCell>{request.user}</TableCell>;
                        <TableCell className='max - w-xs truncate'>;
                          {request.issue}
                        </TableCell>;
                        <TableCell>;
                          <Badge;
                            variant={
                              request.status === 'open';
                                ? 'default';
                                : request.status === 'in - progress';
                                  ? 'secondary';
                                  : 'outline';
                            }
                          >;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                            {request.status}
                          </Badge>;
                        </TableCell>;
                        <TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD

                            {request.priority}
                          </Badge>;
                        </TableCell>;
                        <TableCell>{request.category}</TableCell>;
                        <TableCell>;
                          {new Date (request.created_at).toLocaleDateString ()}
                        </TableCell>;
                        <TableCell>;
                          {new Date (request.last_updated).toLocaleDateString ()}
                        </TableCell>;
                        <TableCell>;
                          <Button variant='ghost' size='sm'>;
                            View;
                          </Button>;
                          <Button variant='ghost' size='sm'>;
                            Assign;
                          </Button>;
                        </TableCell>;


          
          <TabsContent value="escalated" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">Escalated Requests</h3>
              <p className="text-zion-slate-light">
                This tab will show support requests that have been escalated by agents or the system.
=======
                          <Badge variant={;
                            request.priority === 'high';
                              ? 'destructive';
                              : request.priority === 'medium';
                              ? 'default';
                              : 'outline';
                          }>;
=======
                        <TableCell>{request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>
                        <TableCell>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                            {request.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.category}</TableCell>
                        <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(request.lastUpdated).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Assign</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
<<<<<<< HEAD
          <TabsContent value='escalated' className='mt-6'>
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'>
              <h3 className='text-xl font-medium mb-4'>Escalated Requests</h3>
              <p className='text-zion-slate-light'>
                This tab will show support requests that have been escalated by
                agents or the system.
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="ai-flagged" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">AI Flagged Issues</h3>
              <p className="text-zion-slate-light">
                This tab shows issues that our AI system has identified as requiring human attention.
              </p>
            </div>
          </TabsContent>
<<<<<<< HEAD
=======
          <TabsContent value='need-response' className='mt-6'>
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'>
              <h3 className='text-xl font-medium mb-4'>Awaiting Response</h3>
              <p className='text-zion-slate-light'>
                These support requests have been waiting for an agent response
                for over 24 hours.
          
          <TabsContent value="escalated" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">Escalated Requests</h3>
              <p className="text-zion-slate-light">
                This tab will show support requests that have been escalated by agents or the system.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="ai-flagged" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">AI Flagged Issues</h3>
              <p className="text-zion-slate-light">
                This tab shows issues that our AI system has identified as requiring human attention.
              </p>
            </div>
          </TabsContent>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          
          <TabsContent value="need-response" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">Awaiting Response</h3>
              <p className="text-zion-slate-light">
                These support requests have been waiting for an agent response for over 24 hours.
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


              </p>
            </div>
<<<<<<< HEAD
=======
              </p>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  </TableBody>;
                </Table>;
              </CardContent>;
            </Card>;
          </TabsContent>;

          <TabsContent value='escalated' className='mt-6'>;
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'>;
              <h3 className='text-xl font-medium mb-4'>Escalated Requests</h3>;
              <p className='text-zion-slate-light'>;
                This tab will show support requests that have been escalated by;
                agents or the system.;
              </p>;
            </div>;
          </TabsContent>;

          <TabsContent value='ai-flagged' className='mt-6'>;
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'>;
              <h3 className='text-xl font-medium mb-4'>AI Flagged Issues</h3>;
              <p className='text-zion-slate-light'>;
                This tab shows issues that our AI system has identified as;
                requiring human attention.;
              </p>;
            </div>;
          </TabsContent>;

          <TabsContent value='need-response' className='mt-6'>;
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'>;
              <h3 className='text-xl font-medium mb-4'>Awaiting Response</h3>;
              <p className='text-zion-slate-light'>;
                These support requests have been waiting for an agent response;
                for over 24 hours.;
              </p>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </div>;
    </>;
  );

  return true;
});
//Count by status for the summary dashboard Support Requests | Admin Dashboard"description=" Manage and track user support requests and issues"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Support Requests </h1> <p className=" text-zion-slate-light mt-2"> Manage and respond to user support requests and issues </p> </div> <div className=" mt-4 md:mt-0"> <Button className=" bg-zion-purple hover:bg-zion-purple-light"> New Support Case </Button> </div> </div> <CardDescription>Open Requests</CardDescription> </CardHeader> </Card> <Card> <CardDescription>In Progress</CardDescription> </CardHeader> </Card> <Card> <CardDescription>Resolved</CardDescription> </CardHeader> </Card> <Card> <CardDescription>Total Requests</CardDescription> </CardHeader> </Card> </div> <Tabs defaultValue=" all"className=" mb-8"> <TabsList> <TabsTrigger value=" all">All Requests</TabsTrigger> <TabsTrigger value=" escalated">Escalated</TabsTrigger> <TabsTrigger value=" ai-flagged">AI Flagged</TabsTrigger> <TabsTrigger value=" need-response">Need Response</TabsTrigger> </TabsList> </SelectTrigger> <SelectContent> <SelectItem value="">All Statuses</SelectItem> <SelectItem value=" open">Open</SelectItem> <SelectItem value=" in-progress">In Progress</SelectItem> <SelectItem value=" resolved">Resolved</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Priorities</SelectItem> <SelectItem value=" high">High</SelectItem> <SelectItem value=" medium">Medium</SelectItem> <SelectItem value=" low">Low</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Categories</SelectItem> <SelectItem value=" authentication">Authentication</SelectItem> <SelectItem value=" billing">Billing</SelectItem> <SelectItem value=" api">API</SelectItem> <SelectItem value=" disputes">Disputes</SelectItem> <SelectItem value=" verification">Verification</SelectItem> <SelectItem value=" profile">Profile</SelectItem> </SelectContent> </Select> </Button> </div> {;
  /* Support Requests Table */ ";
}<Card> <CardContent className=" p-0"> <Table> <TableHeader> <TableRow> <TableHead>ID</TableHead> <TableHead>User</TableHead> <TableHead>Issue</TableHead> <TableHead>Status</TableHead> <TableHead>Priority</TableHead> <TableHead>Category</TableHead> <TableHead>Created</TableHead> <TableHead>Last Updated</TableHead> <TableHead>Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  filteredRequests && filteredRequests.map ( (request) => (<TableRowkey= {
  request && request.id 
}> <TableCell> <Badgevariant= {
  request && request.status === 'open' ? 'default' : request && request.status === 'in-progress' ? 'secondary' : 'outline' 
}> {;
  request && request.status ;
}</Badge> </TableCell> <TableCell> <Badgevariant= {'
  request && request.priority === 'high' ? 'destructive' : request && request.priority === 'medium' ? 'default' : 'outline' 
}> {;
  request && request.priority ;
}</Badge> </TableCell> <TableCell> {;
  request && request.category ;
}</TableCell> <TableCell> {;
  new Date (request && request.createdAt) .toLocaleDateString () ;
}</TableCell> <TableCell> {;
  new Date (request && request.lastUpdated) .toLocaleDateString () ";

}
;

<<<<<<< HEAD
}</TableCell> <TableCell> <Button variant=" ghost"size=" sm">View</Button> <Button variant=" ghost"size=" sm">Assign</Button> </TableCell> </TableRow>) ) "
}</TableBody> </Table> </CardContent> </Card> </TabsContent> <TabsContent value=" escalated"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Escalated Requests</h3> <p className=" text-zion-slate-light"> This tab will show support requests that have been escalated by agents or the system. </p> </div> </TabsContent> <TabsContent value=" ai-flagged"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">AI Flagged Issues</h3> <p className=" text-zion-slate-light"> This tab shows issues that our AI system has identified as requiring human attention. </p> </div> </TabsContent> <TabsContent value=" need-response"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Awaiting Response</h3> <p className=" text-zion-slate-light" > These support requests have been waiting for an agent response for over 24 hours. </p> </div> </TabsContent> </Tabs> </div> </>)
}'"}
}</TableCell> <TableCell> <Button variant=" ghost"size=" sm">View</Button> <Button variant=" ghost"size=" sm">Assign</Button> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </CardContent> </Card> </TabsContent> <TabsContent value=" escalated"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Escalated Requests</h3> <p className=" text-zion-slate-light"> This tab will show support requests that have been escalated by agents or the system. </p> </div> </TabsContent> <TabsContent value=" ai-flagged"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">AI Flagged Issues</h3> <p className=" text-zion-slate-light"> This tab shows issues that our AI system has identified as requiring human attention. </p> </div> </TabsContent> <TabsContent value=" need-response"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Awaiting Response</h3> <p className=" text-zion-slate-light" > These support requests have been waiting for an agent response for over 24 hours. </p> </div> </TabsContent> </Tabs> </div> </>) ;
}'"};
}
;
  return true
})
//Count by status for the summary dashboard Support Requests | Admin Dashboard"description=" Manage and track user support requests and issues"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Support Requests </h1> <p className=" text-zion-slate-light mt-2"> Manage and respond to user support requests and issues </p> </div> <div className=" mt-4 md:mt-0"> <Button className=" bg-zion-purple hover:bg-zion-purple-light"> New Support Case </Button> </div> </div> <CardDescription>Open Requests</CardDescription> </CardHeader> </Card> <Card> <CardDescription>In Progress</CardDescription> </CardHeader> </Card> <Card> <CardDescription>Resolved</CardDescription> </CardHeader> </Card> <Card> <CardDescription>Total Requests</CardDescription> </CardHeader> </Card> </div> <Tabs defaultValue=" all"className=" mb-8"> <TabsList> <TabsTrigger value=" all">All Requests</TabsTrigger> <TabsTrigger value=" escalated">Escalated</TabsTrigger> <TabsTrigger value=" ai-flagged">AI Flagged</TabsTrigger> <TabsTrigger value=" need-response">Need Response</TabsTrigger> </TabsList> </SelectTrigger> <SelectContent> <SelectItem value="">All Statuses</SelectItem> <SelectItem value=" open">Open</SelectItem> <SelectItem value=" in-progress">In Progress</SelectItem> <SelectItem value=" resolved">Resolved</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Priorities</SelectItem> <SelectItem value=" high">High</SelectItem> <SelectItem value=" medium">Medium</SelectItem> <SelectItem value=" low">Low</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Categories</SelectItem> <SelectItem value=" authentication">Authentication</SelectItem> <SelectItem value=" billing">Billing</SelectItem> <SelectItem value=" api">API</SelectItem> <SelectItem value=" disputes">Disputes</SelectItem> <SelectItem value=" verification">Verification</SelectItem> <SelectItem value=" profile">Profile</SelectItem> </SelectContent> </Select> </Button> </div> {
  /* Support Requests Table */ "
}<Card> <CardContent className=" p-0"> <Table> <TableHeader> <TableRow> <TableHead>ID</TableHead> <TableHead>User</TableHead> <TableHead>Issue</TableHead> <TableHead>Status</TableHead> <TableHead>Priority</TableHead> <TableHead>Category</TableHead> <TableHead>Created</TableHead> <TableHead>Last Updated</TableHead> <TableHead>Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  filteredRequests.map ( (request) => (<TableRow key= {
  request.id
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

}</TableCell> <TableCell> <Button variant=" ghost"size=" sm">View</Button> <Button variant=" ghost"size=" sm">Assign</Button> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </CardContent> </Card> </TabsContent> <TabsContent value=" escalated"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Escalated Requests</h3> <p className=" text-zion-slate-light"> This tab will show support requests that have been escalated by agents or the system. </p> </div> </TabsContent> <TabsContent value=" ai-flagged"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">AI Flagged Issues</h3> <p className=" text-zion-slate-light"> This tab shows issues that our AI system has identified as requiring human attention. </p> </div> </TabsContent> <TabsContent value=" need-response"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Awaiting Response</h3> <p className=" text-zion-slate-light" > These support requests have been waiting for an agent response for over 24 hours. </p> </div> </TabsContent> </Tabs> </div> </>) ;
}'"}


                      </TableRow>))}
                  </TableBody>;
                </Table>;
              </CardContent>;
            </Card>;
          </TabsContent>;
          <TabsContent value='escalated' className='mt - 6'>;
            <div className='bg - zion - blue - light / 20 p - 8 rounded - lg text - center'>;
              <h3 className='text - xl font - medium mb - 4'>Escalated Requests</h3>;
              <p className='text - zion - slate - light'>;
                This tab will show support requests that have been escalated by;
                agents or the system.;
              </p>;
            </div>;
          </TabsContent>;
          <TabsContent value='ai - flagged' className='mt - 6'>;
            <div className='bg - zion - blue - light / 20 p - 8 rounded - lg text - center'>;
              <h3 className='text - xl font - medium mb - 4'>AI Flagged Issues</h3>;
              <p className='text - zion - slate - light'>;
                This tab shows issues that our AI system has identified as;
                requiring human attention.;
              </p>;
            </div>;
          </TabsContent>;
          <TabsContent value='need - response' className='mt - 6'>;
            <div className='bg - zion - blue - light / 20 p - 8 rounded - lg text - center'>;
              <h3 className='text - xl font - medium mb - 4'>Awaiting Response</h3>;
              <p className='text - zion - slate - light'>;
                These support requests have been waiting for an agent response;
                for over 24 hours.;
              </p>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </div>;
    </>);
  return true;
});
//Count by status for the summary dashboard Support Requests | Admin Dashboard"description=" Manage and track user support requests and issues"/> <div className=" container mx - auto px - 4 py - 8"> <div className=" flex flex - col md:flex - row items - start md:items - center justify - between mb - 8"> <div> <h1 className=" text - 3xl font - bold bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent"> Support Requests </h1> <p className=" text - zion - slate - light mt - 2"> Manage and respond to user support requests and issues </p> </div> <div className=" mt - 4 md:mt - 0"> <Button className=" bg - zion - purple hover:bg - zion - purple - light"> New Support Case </Button> </div> </div> <CardDescription > Open Requests</CardDescription> </CardHeader> </Card> <Card> <CardDescription > In Progress</CardDescription> </CardHeader> </Card> <Card> <CardDescription > Resolved</CardDescription> </CardHeader> </Card> <Card> <CardDescription > Total Requests</CardDescription> </CardHeader> </Card> </div> <Tabs default_value=" all"className=" mb - 8"> <TabsList> <TabsTrigger value=" all">All Requests</TabsTrigger> <TabsTrigger value=" escalated">Escalated</TabsTrigger> <TabsTrigger value=" ai - flagged">AI Flagged</TabsTrigger> <TabsTrigger value=" need - response">Need Response</TabsTrigger> </TabsList> </SelectTrigger> <SelectContent> <SelectItem value="">All Statuses</SelectItem> <SelectItem value=" open">Open</SelectItem> <SelectItem value=" in - progress">In Progress</SelectItem> <SelectItem value=" resolved">Resolved</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Priorities</SelectItem> <SelectItem value=" high">High</SelectItem> <SelectItem value=" medium">Medium</SelectItem> <SelectItem value=" low">Low</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Categories</SelectItem> <SelectItem value=" authentication">Authentication</SelectItem> <SelectItem value=" billing">Billing</SelectItem> <SelectItem value=" api">API</SelectItem> <SelectItem value=" disputes">Disputes</SelectItem> <SelectItem value=" verification">Verification</SelectItem> <SelectItem value=" profile">Profile</SelectItem> </SelectContent> </Select> </Button> </div> {
  /* Support Requests Table */ ";
}<Card> <CardContent className=" p - 0"> <Table> <TableHeader> <TableRow> <TableHead > ID</TableHead> <TableHead > User</TableHead> <TableHead > Issue</TableHead> <TableHead > Status</TableHead> <TableHead > Priority</TableHead> <TableHead > Category</TableHead> <TableHead > Created</TableHead> <TableHead > Last Updated</TableHead> <TableHead > Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  filtered_requests.map ( (request) => (<TableRow key= {
  request.id;
}> <TableCell> <Badge variant= {
}</TableCell> <TableCell> {
  new Date (request.last_updated) .toLocaleDateString () ";
}</TableCell> <TableCell> <Button variant=" ghost"size=" sm">View</Button> <Button variant=" ghost"size=" sm">Assign</Button> </TableCell> </TableRow>) ) ";
<<<<<<< HEAD
}</TableBody> </Table> </CardContent> </Card> </TabsContent> <TabsContent value=" escalated"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">Escalated Requests</h3> <p className=" text - zion - slate - light"> This tab will show support requests that have been escalated by agents or the system. </p> </div> </TabsContent> <TabsContent value=" ai - flagged"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">AI Flagged Issues</h3> <p className=" text - zion - slate - light"> This tab shows issues that our AI system has identified as requiring human attention. </p> </div> </TabsContent> <TabsContent value=" need - response"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">Awaiting Response</h3> <p className=" text - zion - slate - light" > These support requests have been waiting for an agent response for over 24 hours. </p> </div> </TabsContent> </Tabs> </div> </>);
}'"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
