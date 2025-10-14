// Mock data for support requests

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
    id: 'SR - 1001',
    user: 'john.doe@example.com',
    user_id: 'user - 123',
    issue: 'Cannot access account after password reset',
    status: 'open',
    priority: 'high',
    created_at: '2023 - 12 - 15T14:30:00Z',
    last_updated: '2023 - 12 - 15T15:45:00Z',
    category: 'authentication',

    id: "SR-1001",
    user: "john.doe@example.com",
    userId: "user-123",
    issue: "Cannot access account after password reset",
    status: "open",
    priority: "high",
    createdAt: "2023-12-15T14:30:00Z",
    lastUpdated: "2023-12-15T15:45:00Z",
    category: "authentication"

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


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }



],

export default function SupportRequests() {
  const [searchQuery, setSearchQuery] = useState(""),
  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null),
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null),



  
  // Apply filters to the request data
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request =>
                {
    // Apply search query filter
    if (searchQuery && 
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
import React, { useState } from "react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",;
import { Search, Filter  } from 'lucide-react';
import { SEO  } from '@/components/SEO';,
// Mock data for support requests
const MOCK_SUPPORT_REQUESTS = [
  {
    id: "SR-1001",
    user: "john.doe@example.com",
    userId: "user-123",
    issue: "Cannot access account after password reset",
    status: "open",
    priority: "high",
    createdAt: "2023-12-15T14:30:00Z",
    lastUpdated: "2023-12-15T15:45:00Z",
    category: "authentication"
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
  // Apply filters to the request data
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request =>
                {
    // Apply search query filter
    if (searchQuery &&
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {
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




  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(
    r => r && r.status === 'open'
  ).length
  const inProgressCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(
    r => r && r.status === 'in-progress'
  ).length
  const resolvedCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(
    r => r && r.status === 'resolved'
  ).length
  const totalCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.length
  const resetFilters  = () => {
    setSearchQuery('')
    setStatusFilter(null)
    setPriorityFilter(null)
    setCategoryFilter(null)
  }




  return (
    <>
      <SEO 
        title="Support Requests | Admin Dashboard"
        description="Manage and track user support requests and issues"
      />
      <div className="container mx-auto px-4 py-8"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8"></div>
          <div></div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"></h1>
              Support Requests
            </h1>
            <p className="text-zion-slate-light mt-2"></p>
              Manage and respond to user support requests and issues
            </p>
                </div>
          <div className='mt-4 md:mt-0'></div>
            <Button className='bg-zion-purple hover:bg-zion-purple-light'>
          </Button>
          <div className="mt-4 md:mt-0"></div>
            <Button className="bg-zion-purple hover:bg-zion-purple-light">




</Button>
              New Support Case
            </Button>
                </div>
        </div>
                {/* Status Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"></div>
          <Card></Card>
            <CardHeader className="pb-2"></CardHeader>
              <CardTitle className="text-2xl font-bold"></CardTitle>
                {openCount}
                </CardTitle>
              <CardDescription>Open Requests</CardDescription>
                </CardHeader>
          </Card>
          


          <Card></Card>
            <CardHeader className="pb-2"></CardHeader>
              <CardTitle className="text-2xl font-bold"></CardTitle>
                {inProgressCount}
                </CardTitle>
              <CardDescription>In Progress</CardDescription>
                </CardHeader>
          </Card>
          


          <Card></Card>
            <CardHeader className="pb-2"></CardHeader>
              <CardTitle className="text-2xl font-bold"></CardTitle>
                {resolvedCount}
                </CardTitle>
              <CardDescription>Resolved</CardDescription>
                </CardHeader>
          </Card>
          


          <Card></Card>
            <CardHeader className="pb-2"></CardHeader>
              <CardTitle className="text-2xl font-bold"></CardTitle>
                {totalCount}
                </CardTitle>
              <CardDescription>Total Requests</CardDescription>
                </CardHeader>
          </Card>
                </div>
        <Tabs defaultValue='all' className='mb-8'>
        </Tabs>
        <Tabs defaultValue="all" className="mb-8">

</Tabs>
          <TabsList></TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="escalated">Escalated</TabsTrigger>
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>
            <TabsTrigger value="need-response">Need Response</TabsTrigger>
                </TabsList>

      />
      <div className='container mx-auto px-4 py-8'></div>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-8'></div>
          <div></div>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent'></h1>
              Support Requests</$1>
            <p className='text-zion-slate-light mt-2'></p>
              Manage and respond to user support requests and issues</$1>
                </$1>
          <div className='mt-4 md:mt-0'></div>
            <Button className='bg-zion-purple hover:bg-zion-purple-light'></Button>
              New Support Case</$1>
                </$1></$1>
                {/* Status Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'></div>
          <Card></Card>
            <CardHeader className='pb-2'></CardHeader>
              <CardTitle className='text-2xl font-bold'></CardTitle>
                {openCount}
                </CardTitle>
              <CardDescription>Open Requests</CardDescription>
                </$1></$1>
          <Card></Card>
            <CardHeader className='pb-2'></CardHeader>
              <CardTitle className='text-2xl font-bold'></CardTitle>
                {inProgressCount}
                </CardTitle>
              <CardDescription>In Progress</CardDescription>
                </$1></$1>
          <Card></Card>
            <CardHeader className='pb-2'></CardHeader>
              <CardTitle className='text-2xl font-bold'></CardTitle>
                {resolvedCount}
                </CardTitle>
              <CardDescription>Resolved</CardDescription>
                </$1></$1>
          <Card></Card>
            <CardHeader className='pb-2'></CardHeader>
              <CardTitle className='text-2xl font-bold'></CardTitle>
                {totalCount}
                </CardTitle>
              <CardDescription>Total Requests</CardDescription>
                </$1></$1>
                </$1>
        <Tabs defaultValue='all' className='mb-8'></Tabs>
          <TabsList></TabsList>
            <TabsTrigger value='all'>All Requests</TabsTrigger>
            <TabsTrigger value='escalated'>Escalated</TabsTrigger>
            <TabsTrigger value='ai-flagged'>AI Flagged</TabsTrigger>
            <TabsTrigger value='need-response'>Need Response</TabsTrigger>
                </$1>
          <TabsContent value='all' className='mt-6'></TabsContent>
          <TabsContent value="all" className="mt-6"></TabsContent>
                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6"></div>
              <div className="relative flex-1"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />



              >
                <SelectTrigger className='w-[180px]'></SelectTrigger>
                  <SelectValue placeholder='Status' />
                  placeholder="Search by ID, user or issue..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
                <SelectTrigger className="w-[180px]"></SelectTrigger>
                  <SelectValue placeholder="Status" />




                </SelectTrigger>
                <SelectContent></SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>




              >
                <SelectTrigger className='w-[180px]'></SelectTrigger>
                  <SelectValue placeholder='Priority' />
              
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>
                <SelectTrigger className="w-[180px]"></SelectTrigger>
                  <SelectValue placeholder="Priority" />




                </SelectTrigger>
                <SelectContent></SelectContent>
                  <SelectItem value="">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>




              >
                <SelectTrigger className='w-[180px]'></SelectTrigger>
                  <SelectValue placeholder='Category' />
              
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>
                <SelectTrigger className="w-[180px]"></SelectTrigger>
                  <SelectValue placeholder="Category" />




                </SelectTrigger>
                <SelectContent></SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  <SelectItem value="authentication">Authentication</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                  <SelectItem value="disputes">Disputes</SelectItem>
                  <SelectItem value="verification">Verification</SelectItem>
                  <SelectItem value="profile">Profile</SelectItem>
                </SelectContent>
              </Select>


                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='pl-10'                /></$1>
              <Select
                value={statusFilter || ''}
                onValueChange={value => setStatusFilter(value || null)}
                <Button variant="outline" onClick={resetFilters} className="md:w-auto"></Button>
                <Filter className="h-4 w-4 mr-2" /> Reset Filters
              </Button>
                </div>
                {/* Support Requests Table */}
                <Card></Card>
              <CardContent className="p-0"></CardContent>
                <Table></Table>
                  <TableHeader></TableHeader>
                    <TableRow></TableRow>
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
                  <TableBody></TableBody>
                {filteredRequests.map(request => (                      <TableRow key={request.id}></TableRow>
                        <TableCell className='font-medium'></TableCell>
                {request.id}
                </TableCell>
                {filteredRequests.map((request) => (
                      <TableRow key={request.id}></TableRow>
                        <TableCell className="font-medium"></TableCell>
                {request.id}
                </TableCell>


                        <TableCell></TableCell>
                {request.user}
                </TableCell>
                        <TableCell className="max-w-xs truncate"></TableCell>
                {request.issue}
                </TableCell>
                        <TableCell></TableCell>
                          <Badge
                            variant={
                              request.status === 'open'
                                ? 'default'
                                : request.status === 'in-progress'
                                  ? 'secondary'
                                  : 'outline'
                            }
                          ></Badge
>
                {request.status}
                </Badge>
                </TableCell>
                        <TableCell></TableCell>
                          <Badge
                            variant={
                              request.priority === 'high'
                                ? 'destructive'
                                : request.priority === 'medium'
                                  ? 'default'
                                  : 'outline'
                            }
                          ></Badge
>
                          <Badge variant={
                            request.status === 'open' 
                              ? 'default' 
                              : request.status === 'in-progress' 
                              ? 'secondary' 
                              : 'outline'
                          }>
</Badge>
    return true
  }),
  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length,
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length,
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length,
  const totalCount = MOCK_SUPPORT_REQUESTS.length,
  const resetFilters  = () => {
    setSearchQuery(""),
    setStatusFilter(null),
    setPriorityFilter(null)
    setCategoryFilter(null)
  }
  return (
    <>
      <SEO
        title="Support Requests | Admin Dashboard"
        description="Manage and track user support requests and issues"
      />
      <div className="container mx-auto px-4 py-8"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8"></div>
          <div></div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"></h1>
              Support Requests</$1>
            <p className="text-zion-slate-light mt-2"></p>
              Manage and respond to user support requests and issues</$1>
                </$1>
          <div className="mt-4 md:mt-0"></div>
            <Button className="bg-zion-purple hover:bg-zion-purple-light"></Button>
              New Support Case</$1>
                </$1></$1>
                {/* Status Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"></div>
          <Card></Card>
            <CardHeader className="pb-2"></CardHeader>
              <CardTitle className="text-2xl font-bold"></CardTitle>
                {openCount}
                </CardTitle>
              <CardDescription>Open Requests</CardDescription>
                </$1></$1>
          <Card></Card>
            <CardHeader className="pb-2"></CardHeader>
              <CardTitle className="text-2xl font-bold"></CardTitle>
                {inProgressCount}
                </CardTitle>
              <CardDescription>In Progress</CardDescription>
                </$1></$1>
          <Card></Card>
            <CardHeader className="pb-2"></CardHeader>
              <CardTitle className="text-2xl font-bold"></CardTitle>
                {resolvedCount}
                </CardTitle>
              <CardDescription>Resolved</CardDescription>
                </$1></$1>
          <Card></Card>
            <CardHeader className="pb-2"></CardHeader>
              <CardTitle className="text-2xl font-bold"></CardTitle>
                {totalCount}
                </CardTitle>
              <CardDescription>Total Requests</CardDescription>
                </$1></$1>
                </$1>
        <Tabs defaultValue="all" className="mb-8"></Tabs>
          <TabsList></TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="escalated">Escalated</TabsTrigger>
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>
            <TabsTrigger value="need-response">Need Response</TabsTrigger>
                </$1>
          <TabsContent value="all" className="mt-6"></TabsContent>
                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6"></div>
              <div className="relative flex-1"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by ID, user or issue..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                /></$1>
              <Select
                value={status_filter || ''}
                onValueChange={value => setStatusFilter (value || null)}
              >
                <SelectTrigger className='w-[180px]'></SelectTrigger>
                  <SelectValue placeholder='Status' /></$1>
                <SelectContent></SelectContent>
                  <SelectItem value=''>All Statuses</SelectItem>
                  <SelectItem value='open'>Open</SelectItem>
                  <SelectItem value='in - progress'>In Progress</SelectItem>
                  <SelectItem value='resolved'>Resolved</SelectItem>
                </$1></$1>
              <Select
                value={priority_filter || ''}
                onValueChange={value => setPriorityFilter (value || null)}


              >
                <SelectTrigger className='w-[180px]'></SelectTrigger>
                  <SelectValue placeholder='Priority' /></$1>
                <SelectContent></SelectContent>
                  <SelectItem value="">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </$1></$1>
              <Select
                value={category_filter || ''}
                onValueChange={value => setCategoryFilter (value || null)}


              >
                <SelectTrigger className='w-[180px]'></SelectTrigger>
                  <SelectValue placeholder='Category' /></$1>
                <SelectContent></SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  <SelectItem value="authentication">Authentication</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                  <SelectItem value="disputes">Disputes</SelectItem>
                  <SelectItem value="verification">Verification</SelectItem>
                  <SelectItem value="profile">Profile</SelectItem>
                </$1></$1>
              <Button
                variant='outline'
                on_click={reset_filters}
                className='md:w - auto'
              ></Button
>
                <Filter className='h - 4 w - 4 mr - 2' /> Reset Filters</$1>
                </$1>
                {/* Support Requests Table */}
                <Card></Card>
              <CardContent className='p - 0'></CardContent>
                <Table></Table>
                  <TableHeader></TableHeader>
                    <TableRow></TableRow>
                      <TableHead > ID</TableHead>
                      <TableHead > User</TableHead>
                      <TableHead > Issue</TableHead>
                      <TableHead > Status</TableHead>
                      <TableHead > Priority</TableHead>
                      <TableHead > Category</TableHead>
                      <TableHead > Created</TableHead>
                      <TableHead > Last Updated</TableHead>
                      <TableHead > Actions</TableHead>
                </$1></$1>
                  <TableBody></TableBody>
                {filteredRequests && filteredRequests.map(request => (                      <TableRow key={request && request.id}></TableRow>
                        <TableCell className='font-medium'></TableCell>
                {request && request.id}
                </TableCell>
                        <TableCell></TableCell>
                {request && request.user}
                </TableCell>
                        <TableCell className='max-w-xs truncate'></TableCell>
                {request && request.issue}
                </TableCell>
                        <TableCell></TableCell>
                          <Badge
                            variant={
                              request && request.status === 'open'
                                ? 'default'
                                : request && request.status === 'in-progress'
                                  ? 'secondary'
                                  : 'outline'
                            }></Badge
>
                {request && request.status}
                </Badge>
                </$1>
                        <TableCell></TableCell>
                          <Badge
                            variant={
                              request && request.priority === 'high'
                                ? 'destructive'
                                : request && request.priority === 'medium'
                                  ? 'default'
                                  : 'outline'
                            }></Badge
>
                {request && request.priority}
                </Badge>
                </$1>
                        <TableCell></TableCell>
                {request && request.category}
                </TableCell>
                        <TableCell></TableCell>
                {new Date(request && request.createdAt).toLocaleDateString()}
                </TableCell>
                        <TableCell></TableCell>
                {new Date(request && request.lastUpdated).toLocaleDateString()}
                <Button
                variant='outline'
                on_click={reset_filters}
                className='md:w - auto'
              ></Button
>
                <Filter className='h - 4 w - 4 mr - 2' /> Reset Filters</$1>
                </$1>
                {/* Support Requests Table */}
                <Card></Card>
              <CardContent className='p - 0'></CardContent>
                <Table></Table>
                  <TableHeader></TableHeader>
                    <TableRow></TableRow>
                      <TableHead > ID</TableHead>
                      <TableHead > User</TableHead>
                      <TableHead > Issue</TableHead>
                      <TableHead > Status</TableHead>
                      <TableHead > Priority</TableHead>
                      <TableHead > Category</TableHead>
                      <TableHead > Created</TableHead>
                      <TableHead > Last Updated</TableHead>
                      <TableHead > Actions</TableHead>
                </$1></$1>
                  <TableBody></TableBody>
                {filtered_requests.map (request => (                      <TableRow key={request.id}></TableRow>
                        <TableCell className='font - medium'></TableCell>
                {request.id}
                </TableCell>
                        <TableCell></TableCell>
                {request.user}
                </TableCell>
                        <TableCell className="max-w-xs truncate"></TableCell>
                {request.issue}
                </TableCell>
                        <TableCell></TableCell>
                          <Badge variant={
                            request.status === 'open'
                              ? 'default'
                              : request.status === 'in-progress'
                              ? 'secondary'
                              : 'outline'
                          }></Badge>
                {request.status}
                </Badge>
                </$1>
                        <TableCell></TableCell>
                          <Badge variant={
                            request.priority === 'high'
                              ? 'destructive'
                              : request.priority === 'medium'
                              ? 'default'
                              : 'outline'
                          }></Badge>
                {request.priority}
                </Badge>
                </$1>
                        <TableCell></TableCell>
                {request.category}
                </TableCell>
                        <TableCell></TableCell>
                {new Date (request.created_at).toLocaleDateString ()}
                </TableCell>
                        <TableCell></TableCell>
                {new Date (request.last_updated).toLocaleDateString ()}
                </TableCell>
                        <TableCell></TableCell>
                          <Button variant='ghost' size='sm'></Button>
                            View</$1>
                          <Button variant='ghost' size='sm'></Button>
                            Assign</$1>
                </$1>
          <TabsContent value="escalated" className="mt-6"></TabsContent>
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center"></div>
              <h3 className="text-xl font-medium mb-4">Escalated Requests</h3>
              <p className="text-zion-slate-light"></p>
                This tab will show support requests that have been escalated by agents or the system.
              </p>
                </div>
          </TabsContent>

          
          <TabsContent value="ai-flagged" className="mt-6"></TabsContent>
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center"></div>
              <h3 className="text-xl font-medium mb-4">AI Flagged Issues</h3>
              <p className="text-zion-slate-light"></p>
                This tab shows issues that our AI system has identified as requiring human attention.

              </p>
                </div>
          </TabsContent>
          
          <TabsContent value="need-response" className="mt-6"></TabsContent>
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center"></div>
              <h3 className="text-xl font-medium mb-4">Awaiting Response</h3>
              <p className="text-zion-slate-light"></p>
                These support requests have been waiting for an agent response for over 24 hours.



              </p>
                </div>
          </TabsContent>
                </Tabs>
      </div>
    </>
  )

                  </TableBody>
                </$1></$1>
                </$1></$1>
          <TabsContent value='escalated' className='mt-6'></TabsContent>
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'></div>
              <h3 className='text-xl font-medium mb-4'>Escalated Requests</h3>
              <p className='text-zion-slate-light'></p>
                This tab will show support requests that have been escalated by
                agents or the system.</$1>
                </$1></$1>
          <TabsContent value='ai-flagged' className='mt-6'></TabsContent>
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'></div>
              <h3 className='text-xl font-medium mb-4'>AI Flagged Issues</h3>
              <p className='text-zion-slate-light'></p>
                This tab shows issues that our AI system has identified as
                requiring human attention.</$1>
                </$1></$1>
          <TabsContent value='need-response' className='mt-6'></TabsContent>
            <div className='bg-zion-blue-light/20 p-8 rounded-lg text-center'></div>
              <h3 className='text-xl font-medium mb-4'>Awaiting Response</h3>
              <p className='text-zion-slate-light'></p>
                These support requests have been waiting for an agent response
                for over 24 hours.</$1>
                </$1></$1>
                </$1></$1>
    </>
  )
  return true
})
//Count by status for the summary dashboard Support Requests | Admin Dashboard"description=" Manage and track user support requests and issues"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Support Requests </h1> <p className=" text-zion-slate-light mt-2"> Manage and respond to user support requests and issues </p>
                </div> <div className=" mt-4 md:mt-0"> <Button className=" bg-zion-purple hover:bg-zion-purple-light"> New Support Case </Button>
                </div> </div> <CardDescription>Open Requests</CardDescription>
                </CardHeader> </Card> <Card> <CardDescription>In Progress</CardDescription>
                </CardHeader> </Card> <Card> <CardDescription>Resolved</CardDescription>
                </CardHeader> </Card> <Card> <CardDescription>Total Requests</CardDescription>
                </CardHeader> </Card>
                </div> <Tabs defaultValue=" all"className=" mb-8"> <TabsList> <TabsTrigger value=" all">All Requests</TabsTrigger> <TabsTrigger value=" escalated">Escalated</TabsTrigger> <TabsTrigger value=" ai-flagged">AI Flagged</TabsTrigger> <TabsTrigger value=" need-response">Need Response</TabsTrigger>
                </TabsList> </SelectTrigger> <SelectContent> <SelectItem value="">All Statuses</SelectItem> <SelectItem value=" open">Open</SelectItem> <SelectItem value=" in-progress">In Progress</SelectItem> <SelectItem value=" resolved">Resolved</SelectItem>
                </SelectContent> </Select>
                </SelectTrigger> <SelectContent> <SelectItem value="">All Priorities</SelectItem> <SelectItem value=" high">High</SelectItem> <SelectItem value=" medium">Medium</SelectItem> <SelectItem value=" low">Low</SelectItem>
                </SelectContent> </Select>
                </SelectTrigger> <SelectContent> <SelectItem value="">All Categories</SelectItem> <SelectItem value=" authentication">Authentication</SelectItem> <SelectItem value=" billing">Billing</SelectItem> <SelectItem value=" api">API</SelectItem> <SelectItem value=" disputes">Disputes</SelectItem> <SelectItem value=" verification">Verification</SelectItem> <SelectItem value=" profile">Profile</SelectItem>
                </SelectContent> </Select>
                </Button> </div>
                {/* Support Requests Table */ "
}
                <Card> <CardContent className=" p-0"> <Table> <TableHeader> <TableRow> <TableHead>ID</TableHead> <TableHead>User</TableHead> <TableHead>Issue</TableHead> <TableHead>Status</TableHead> <TableHead>Priority</TableHead> <TableHead>Category</TableHead> <TableHead>Created</TableHead> <TableHead>Last Updated</TableHead> <TableHead>Actions</TableHead>
                </TableRow> </TableHeader> <TableBody></TableBody>
                {
  filteredRequests && filteredRequests.map ( (request) => (<TableRowkey= {
  request && request.id 
}> <TableCell> <Badgevariant= {
  request && request.status === 'open' ? 'default' : request && request.status === 'in-progress' ? 'secondary' : 'outline' 
}></Badgevariant=>
                {request && request.status 
}
                </Badge>
                </TableCell> <TableCell> <Badgevariant= {'
  request && request.priority === 'high' ? 'destructive' : request && request.priority === 'medium' ? 'default' : 'outline' 
}></Badgevariant=>
                {request && request.priority 
}
                </Badge>
                </TableCell> <TableCell></TableCell>
                {request && request.category 
}
                </TableCell> <TableCell></TableCell>
                {new Date (request && request.createdAt) .toLocaleDateString () 
}
                </TableCell> <TableCell></TableCell>
                {
  new Date (request && request.lastUpdated) .toLocaleDateString () "
}

}
                </TableCell> <TableCell> <Button variant=" ghost"size=" sm">View</Button> <Button variant=" ghost"size=" sm">Assign</Button>
                </TableCell> </TableRow>) ) "
}
                </TableBody>
                </Table> </CardContent>
                </Card> </TabsContent> <TabsContent value=" escalated"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Escalated Requests</h3> <p className=" text-zion-slate-light"> This tab will show support requests that have been escalated by agents or the system. </p>
                </div> </TabsContent> <TabsContent value=" ai-flagged"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">AI Flagged Issues</h3> <p className=" text-zion-slate-light"> This tab shows issues that our AI system has identified as requiring human attention. </p>
                </div> </TabsContent> <TabsContent value=" need-response"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Awaiting Response</h3> <p className=" text-zion-slate-light" > These support requests have been waiting for an agent response for over 24 hours. </p>
                </div> </TabsContent>
                </Tabs> </div> </>) 
}'"}
                </TableRow>))}
                </TableBody>
                </$1></$1>
                </$1></$1>
          <TabsContent value='escalated' className='mt - 6'></TabsContent>
            <div className='bg - zion - blue - light / 20 p - 8 rounded - lg text - center'></div>
              <h3 className='text - xl font - medium mb - 4'>Escalated Requests</h3>
              <p className='text - zion - slate - light'></p>
                This tab will show support requests that have been escalated by
                agents or the system.</$1>
                </$1></$1>
          <TabsContent value='ai - flagged' className='mt - 6'></TabsContent>
            <div className='bg - zion - blue - light / 20 p - 8 rounded - lg text - center'></div>
              <h3 className='text - xl font - medium mb - 4'>AI Flagged Issues</h3>
              <p className='text - zion - slate - light'></p>
                This tab shows issues that our AI system has identified as
                requiring human attention.</$1>
                </$1></$1>
          <TabsContent value='need - response' className='mt - 6'></TabsContent>
            <div className='bg - zion - blue - light / 20 p - 8 rounded - lg text - center'></div>
              <h3 className='text - xl font - medium mb - 4'>Awaiting Response</h3>
              <p className='text - zion - slate - light'></p>
                These support requests have been waiting for an agent response
                for over 24 hours.</$1>
                </$1></$1>
                </$1></$1>
    </>)
  return true
})
//Count by status for the summary dashboard Support Requests | Admin Dashboard"description=" Manage and track user support requests and issues"/> <div className=" container mx - auto px - 4 py - 8"> <div className=" flex flex - col md:flex - row items - start md:items - center justify - between mb - 8"> <div> <h1 className=" text - 3xl font - bold bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent"> Support Requests </h1> <p className=" text - zion - slate - light mt - 2"> Manage and respond to user support requests and issues </p>
                </div> <div className=" mt - 4 md:mt - 0"> <Button className=" bg - zion - purple hover:bg - zion - purple - light"> New Support Case </Button>
                </div> </div> <CardDescription > Open Requests</CardDescription>
                </CardHeader> </Card> <Card> <CardDescription > In Progress</CardDescription>
                </CardHeader> </Card> <Card> <CardDescription > Resolved</CardDescription>
                </CardHeader> </Card> <Card> <CardDescription > Total Requests</CardDescription>
                </CardHeader> </Card>
                </div> <Tabs default_value=" all"className=" mb - 8"> <TabsList> <TabsTrigger value=" all">All Requests</TabsTrigger> <TabsTrigger value=" escalated">Escalated</TabsTrigger> <TabsTrigger value=" ai - flagged">AI Flagged</TabsTrigger> <TabsTrigger value=" need - response">Need Response</TabsTrigger>
                </TabsList> </SelectTrigger> <SelectContent> <SelectItem value="">All Statuses</SelectItem> <SelectItem value=" open">Open</SelectItem> <SelectItem value=" in - progress">In Progress</SelectItem> <SelectItem value=" resolved">Resolved</SelectItem>
                </SelectContent> </Select>
                </SelectTrigger> <SelectContent> <SelectItem value="">All Priorities</SelectItem> <SelectItem value=" high">High</SelectItem> <SelectItem value=" medium">Medium</SelectItem> <SelectItem value=" low">Low</SelectItem>
                </SelectContent> </Select>
                </SelectTrigger> <SelectContent> <SelectItem value="">All Categories</SelectItem> <SelectItem value=" authentication">Authentication</SelectItem> <SelectItem value=" billing">Billing</SelectItem> <SelectItem value=" api">API</SelectItem> <SelectItem value=" disputes">Disputes</SelectItem> <SelectItem value=" verification">Verification</SelectItem> <SelectItem value=" profile">Profile</SelectItem>
                </SelectContent> </Select>
                </Button> </div>
                {/* Support Requests Table */ "
}
                <Card> <CardContent className=" p - 0"> <Table> <TableHeader> <TableRow> <TableHead > ID</TableHead> <TableHead > User</TableHead> <TableHead > Issue</TableHead> <TableHead > Status</TableHead> <TableHead > Priority</TableHead> <TableHead > Category</TableHead> <TableHead > Created</TableHead> <TableHead > Last Updated</TableHead> <TableHead > Actions</TableHead>
                </TableRow> </TableHeader> <TableBody></TableBody>
                {
  filtered_requests.map ( (request) => (<TableRow key= {
  request.id
}> <TableCell> <Badge variant= {
  request.status === 'open' ? 'default' : request.status === 'in - progress' ? 'secondary' : 'outline'
}></Badge>
                {request.status
}
                </Badge>
                </TableCell> <TableCell> <Badge variant= {'
  request.priority === 'high' ? 'destructive' : request.priority === 'medium' ? 'default' : 'outline'
}></Badge>
                {request.priority
}
                </Badge>
                </TableCell> <TableCell></TableCell>
                {request.category
}
                </TableCell> <TableCell></TableCell>
                {new Date (request.created_at) .toLocaleDateString ()
}
                </TableCell> <TableCell></TableCell>
                {new Date (request.last_updated) .toLocaleDateString () "
}
                </TableCell> <TableCell> <Button variant=" ghost"size=" sm">View</Button> <Button variant=" ghost"size=" sm">Assign</Button>
                </TableCell> </TableRow>) ) "
}
                </TableBody>
                </Table> </CardContent>
                </Card> </TabsContent> <TabsContent value=" escalated"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">Escalated Requests</h3> <p className=" text - zion - slate - light"> This tab will show support requests that have been escalated by agents or the system. </p>
                </div> </TabsContent> <TabsContent value=" ai - flagged"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">AI Flagged Issues</h3> <p className=" text - zion - slate - light"> This tab shows issues that our AI system has identified as requiring human attention. </p>
                </div> </TabsContent> <TabsContent value=" need - response"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">Awaiting Response</h3> <p className=" text - zion - slate - light" > These support requests have been waiting for an agent response for over 24 hours. </p>
                </div> </TabsContent>
                </Tabs> </div> </>)
}'"}



