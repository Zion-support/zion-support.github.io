<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Mock data for support requests

const MOCK_SUPPORT_REQUESTS = [
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
const MOCK_SUPPORT_REQUESTS = [
  {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    id: 'SR - 1001',
    user: 'john.doe@example.com',
    user_id: 'user - 123',
    issue: 'Cannot access account after password reset',
    status: 'open',
    priority: 'high',
    created_at: '2023 - 12 - 15T14:30:00Z',
    last_updated: '2023 - 12 - 15T15:45:00Z',
    category: 'authentication',

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  {
    id: "SR-1002",
    user: "sarah.smith@company.co",
    userId: "user-456",
    issue: "Payment failed but funds were deducted",
    status: "in-progress",
    priority: "high",
    createdAt: "2023-12-14T09:15:00Z",
    lastUpdated: "2023-12-15T13:20:00Z",
    category: "billing"
  },
  {
    id: "SR-1003",
    user: "tech.guru@startup.io",
    userId: "user-789",
    issue: "Unable to download invoice PDF",
    status: "open",
    priority: "medium",
    createdAt: "2023-12-15T11:00:00Z",
    lastUpdated: "2023-12-15T11:00:00Z",
    category: "billing"
  },
  {
    id: "SR-1004",
    user: "developer@codelab.dev",
    userId: "user-235",
    issue: "API integration documentation is outdated",
    status: "open",
    priority: "low",
    createdAt: "2023-12-13T16:45:00Z", 
    lastUpdated: "2023-12-13T16:45:00Z",
    category: "api"
  },
  {
    id: "SR-1005",
    user: "maria.rodriguez@design.co",
    userId: "user-567",
    issue: "Dispute with freelancer over delivered work quality",
    status: "in-progress",
    priority: "high",
    createdAt: "2023-12-12T10:30:00Z",
    lastUpdated: "2023-12-15T09:15:00Z",
    category: "disputes"
  },
  {
<<<<<<< HEAD
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
=======
=======
    id: 'SR - 1006',
    user: 'alex.wong@datacompany.com',
    user_id: 'user - 890',
    issue: 'Profile verification pending for over 7 days',
    status: 'resolved',
    priority: 'medium',
    created_at: '2023 - 12 - 08T13:20:00Z',
    last_updated: '2023 - 12 - 15T08:30:00Z',
    category: 'verification',
  },
  {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
],

export default function SupportRequests() {
  const [searchQuery, setSearchQuery] = useState(""),
  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null),
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null),
=======
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
  // Apply filters to the request data
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {
    // Apply search query filter
    if (searchQuery && 
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Search, Filter } from 'lucide-react';
import { SEO } from "@/components/SEO",;
// Mock data for support requests;
const MOCK_SUPPORT_REQUESTS = [;
  {;
    id: "SR-1001",;
    user: "john.doe@example.com",;
    userId: "user-123",;
    issue: "Cannot access account after password reset",;
    status: "open",;
    priority: "high",;
    createdAt: "2023-12-15T14:30:00Z",;
    lastUpdated: "2023-12-15T15:45:00Z",;
    category: "authentication";
  },;
  {;
    id: "SR-1002",;
    user: "sarah.smith@company.co",;
    userId: "user-456",;
    issue: "Payment failed but funds were deducted",;
    status: "in-progress",;
    priority: "high",;
    createdAt: "2023-12-14T09:15:00Z",;
    lastUpdated: "2023-12-15T13:20:00Z",;
    category: "billing";
  },;
  {;
    id: "SR-1003",;
    user: "tech.guru@startup.io",;
    userId: "user-789",;
    issue: "Unable to download invoice PDF",;
    status: "open",;
    priority: "medium",;
    createdAt: "2023-12-15T11:00:00Z",;
    lastUpdated: "2023-12-15T11:00:00Z",;
    category: "billing";
  },;
  {;
    id: "SR-1004",;
    user: "developer@codelab.dev",;
    userId: "user-235",;
    issue: "API integration documentation is outdated",;
    status: "open",;
    priority: "low",;
    createdAt: "2023-12-13T16:45:00Z",;
    lastUpdated: "2023-12-13T16:45:00Z",;
    category: "api";
  },;
  {;
    id: "SR-1005",;
    user: "maria.rodriguez@design.co",;
    userId: "user-567",;
    issue: "Dispute with freelancer over delivered work quality",;
    status: "in-progress",;
    priority: "high",;
    createdAt: "2023-12-12T10:30:00Z",;
    lastUpdated: "2023-12-15T09:15:00Z",;
    category: "disputes";
  },;
  {;
    id: "SR-1006",;
    user: "alex.wong@datacompany.com",;
    userId: "user-890",;
    issue: "Profile verification pending for over 7 days",;
    status: "resolved",;
    priority: "medium",;
    createdAt: "2023-12-08T13:20:00Z",;
    lastUpdated: "2023-12-15T08:30:00Z",;
    category: "verification";
  },;
  {;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    
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
  
<<<<<<< HEAD
  
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  return (
    <>;


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          
          <div className="mt-4 md:mt-0">
            <Button className="bg-zion-purple hover:bg-zion-purple-light">


<<<<<<< HEAD
<<<<<<< HEAD
          <div className='mt-4 md:mt-0'>
            <Button className='bg-zion-purple hover:bg-zion-purple-light'>
          
          <div className="mt-4 md:mt-0">
            <Button className="bg-zion-purple hover:bg-zion-purple-light">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              New Support Case
            </Button>
          </div>
        </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        


<<<<<<< HEAD
<<<<<<< HEAD
        {/* Status Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
            <CardHeader className='pb-2'>
              <CardTitle className='text-2xl font-bold'>{openCount}</CardTitle>
        
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{openCount}</CardTitle>
              <CardDescription>Open Requests</CardDescription>
            </CardHeader>
          </Card>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          


          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{inProgressCount}</CardTitle>
              <CardDescription>In Progress</CardDescription>
            </CardHeader>
          </Card>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          


          <Card>
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
          
<<<<<<< HEAD
=======


          


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{totalCount}</CardTitle>
              <CardDescription>Total Requests</CardDescription>
            </CardHeader>
          </Card>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <Tabs defaultValue='all' className='mb-8'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
        <Tabs defaultValue="all" className="mb-8">


          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="escalated">Escalated</TabsTrigger>
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>
            <TabsTrigger value="need-response">Need Response</TabsTrigger>
          </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD
          <TabsContent value='all' className='mt-6'>
          
          <TabsContent value="all" className="mt-6">
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          
          <TabsContent value="all" className="mt-6">

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
<<<<<<< HEAD
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
=======
=======

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


          
          <TabsContent value="all" className="mt-6">

            {/* Search and Filters */}
            <div className='flex flex-col md:flex-row gap-4 mb-6'>;
              <div className='relative flex-1'>;
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />;
                <Input
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                value={statusFilter || ''}
                onValueChange={value => setStatusFilter(value || null)}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
<<<<<<< HEAD
<<<<<<< HEAD
              <Select
                value={priorityFilter |''}
                onValueChange={value => setPriorityFilter(value |null)}
                value={priorityFilter || ''}
                onValueChange={value => setPriorityFilter(value || null)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                value={priorityFilter || ''}
                onValueChange={value => setPriorityFilter(value || null)}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Priority' />
              
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
<<<<<<< HEAD
<<<<<<< HEAD
              
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
<<<<<<< HEAD
<<<<<<< HEAD
              <Select
                value={categoryFilter |''}
                onValueChange={value => setCategoryFilter(value |null)}
                value={categoryFilter || ''}
                onValueChange={value => setCategoryFilter(value || null)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                value={categoryFilter || ''}
                onValueChange={value => setCategoryFilter(value || null)}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Category' />
              
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
              <Button
                variant='outline'
                onClick={resetFilters}
                className='md:w-auto'
              >
                <Filter className='h-4 w-4 mr-2' /> Reset Filters
              </Button>
            </div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='pl-10'                />;
              </div>;

              <Select
                value={statusFilter || ''}
                onValueChange={value => setStatusFilter(value || null)}

<<<<<<< HEAD
<<<<<<< HEAD
                        <TableCell>{request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>
                        <TableCell>

                            {request.priority}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              
              <Button variant="outline" onClick={resetFilters} className="md:w-auto">
                <Filter className="h-4 w-4 mr-2" /> Reset Filters
              </Button>
            </div>
            
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                    {filteredRequests.map(request => (                      <TableRow key={request.id}>
                        <TableCell className='font-medium'>
                          {request.id}
                        </TableCell>
                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>

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
=======

                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <TableCell>{request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>
                        <TableCell>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        title="Support Requests | Admin Dashboard";
        description="Manage and track user support requests and issues";
      />;
      <div className="container mx-auto px-4 py-8">;
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">;
          <div>;
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Support Requests;
            </h1>;
            <p className="text-zion-slate-light mt-2">;
              Manage and respond to user support requests and issues;
            </p>;
          </div>;
          <div className="mt-4 md:mt-0">;
            <Button className="bg-zion-purple hover:bg-zion-purple-light">;
              New Support Case;
            </Button>;
          </div>;
        </div>;
        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{openCount}</CardTitle>;
              <CardDescription>Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{inProgressCount}</CardTitle>;
              <CardDescription>In Progress</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{resolvedCount}</CardTitle>;
              <CardDescription>Resolved</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{totalCount}</CardTitle>;
              <CardDescription>Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;
        <Tabs defaultValue="all" className="mb-8">;
          <TabsList>;
            <TabsTrigger value="all">All Requests</TabsTrigger>;
            <TabsTrigger value="escalated">Escalated</TabsTrigger>;
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>;
            <TabsTrigger value="need-response">Need Response</TabsTrigger>;
          </TabsList>;
          <TabsContent value="all" className="mt-6">;
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">;
              <div className="relative flex-1">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
                <Input;
                  placeholder="Search by ID, user or issue...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10";
                />;
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
                  <SelectItem value="">All Statuses</SelectItem>;
                  <SelectItem value="open">Open</SelectItem>;
                  <SelectItem value="in-progress">In Progress</SelectItem>;
                  <SelectItem value="resolved">Resolved</SelectItem>;
                </SelectContent>;
              </Select>;
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Priority" />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Priorities</SelectItem>;
                  <SelectItem value="high">High</SelectItem>;
                  <SelectItem value="medium">Medium</SelectItem>;
                  <SelectItem value="low">Low</SelectItem>;
                </SelectContent>;
              </Select>;
<<<<<<< HEAD
<<<<<<< HEAD
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Category" />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <Select;
                value={category_filter || ''}
                onValueChange={value => setCategoryFilter (value || null)}

              >;
                <SelectTrigger className='w-[180px]'>;
                  <SelectValue placeholder='Category' />;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Categories</SelectItem>;
                  <SelectItem value="authentication">Authentication</SelectItem>;
                  <SelectItem value="billing">Billing</SelectItem>;
                  <SelectItem value="api">API</SelectItem>;
                  <SelectItem value="disputes">Disputes</SelectItem>;
                  <SelectItem value="verification">Verification</SelectItem>;
                  <SelectItem value="profile">Profile</SelectItem>;
                </SelectContent>;
              </Select>;
<<<<<<< HEAD
<<<<<<< HEAD
              <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
                <Filter className="h-4 w-4 mr-2" /> Reset Filters;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <Button;
                variant='outline';
                on_click={reset_filters}
                className='md:w - auto';
              >;
                <Filter className='h - 4 w - 4 mr - 2' /> Reset Filters;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Button>;
            </div>;
            {/* Support Requests Table */}
            <Card>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <TableCell>{request.user}</TableCell>;
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>;
                        <TableCell>;
                          <Badge variant={;
                            request.status === 'open';
                              ? 'default';
                              : request.status === 'in-progress';
                              ? 'secondary';
                              : 'outline';
                          }>;
                            {request.status}
                          </Badge>;
                        </TableCell>;
                        <TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD
                          <Badge variant={;
                            request.priority === 'high';
                              ? 'destructive';
                              : request.priority === 'medium';
                              ? 'default';
                              : 'outline';
                          }>;
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
                      </TableRow>))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='escalated' className='mt-6'>
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'>
              <h3 className='text-xl font-medium mb-4'>Escalated Requests</h3>
              <p className='text-zion-slate-light'>
                This tab will show support requests that have been escalated by
                agents or the system.
=======

                            {request.priority}
=======

                            {request.priority}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          
          <TabsContent value="need-response" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">Awaiting Response</h3>
              <p className="text-zion-slate-light">
                These support requests have been waiting for an agent response for over 24 hours.
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
  request.status === 'open' ? 'default' : request.status === 'in-progress' ? 'secondary' : 'outline'
}> {
  request.status
}</Badge> </TableCell> <TableCell> <Badge variant= {'
  request.priority === 'high' ? 'destructive' : request.priority === 'medium' ? 'default' : 'outline'
}> {
  request.priority
}</Badge> </TableCell> <TableCell> {
  request.category
}</TableCell> <TableCell> {
  new Date (request.createdAt) .toLocaleDateString ()
}</TableCell> <TableCell> {
  new Date (request.last_updated) .toLocaleDateString () ";
}</TableCell> <TableCell> <Button variant=" ghost"size=" sm">View</Button> <Button variant=" ghost"size=" sm">Assign</Button> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </CardContent> </Card> </TabsContent> <TabsContent value=" escalated"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">Escalated Requests</h3> <p className=" text - zion - slate - light"> This tab will show support requests that have been escalated by agents or the system. </p> </div> </TabsContent> <TabsContent value=" ai - flagged"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">AI Flagged Issues</h3> <p className=" text - zion - slate - light"> This tab shows issues that our AI system has identified as requiring human attention. </p> </div> </TabsContent> <TabsContent value=" need - response"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">Awaiting Response</h3> <p className=" text - zion - slate - light" > These support requests have been waiting for an agent response for over 24 hours. </p> </div> </TabsContent> </Tabs> </div> </>);
<<<<<<< HEAD
}'"}
=======
}'"}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  request.status === 'open' ? 'default' : request.status === 'in - progress' ? 'secondary' : 'outline';
}> {
  request.status;
}</Badge> </TableCell> <TableCell> <Badge variant= {';
  request.priority === 'high' ? 'destructive' : request.priority === 'medium' ? 'default' : 'outline';
}> {
  request.priority;
}</Badge> </TableCell> <TableCell> {
  request.category;
}</TableCell> <TableCell> {
  new Date (request.created_at) .toLocaleDateString ();
}</TableCell> <TableCell> {
  new Date (request.last_updated) .toLocaleDateString () ";
}</TableCell> <TableCell> <Button variant=" ghost"size=" sm">View</Button> <Button variant=" ghost"size=" sm">Assign</Button> </TableCell> </TableRow>) ) ";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
