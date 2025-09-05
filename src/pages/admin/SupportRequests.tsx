
<<<<<<< HEAD
<<<<<<< HEAD
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
import React, { useState } from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Search, Filter } from 'lucide-react'
import { SEO } from &quot;@/components/SEO&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Mock data for support requests
const MOCK_SUPPORT_REQUESTS = [
  {
    id: &quot;SR-1001&quot;,
    user: &quot;john.doe@example.com&quot;,
    userId: &quot;user-123&quot;,
    issue: &quot;Cannot access account after password reset&quot;,
    status: &quot;open&quot;,
    priority: &quot;high&quot;,
    createdAt: &quot;2023-12-15T14:30:00Z&quot;,
    lastUpdated: &quot;2023-12-15T15:45:00Z&quot;,
    category: &quot;authentication&quot;
  },
  {
    id: &quot;SR-1002&quot;,
    user: &quot;sarah.smith@company.co&quot;,
    userId: &quot;user-456&quot;,
    issue: &quot;Payment failed but funds were deducted&quot;,
    status: &quot;in-progress&quot;,
    priority: &quot;high&quot;,
    createdAt: &quot;2023-12-14T09:15:00Z&quot;,
    lastUpdated: &quot;2023-12-15T13:20:00Z&quot;,
    category: &quot;billing&quot;
  },
  {
    id: &quot;SR-1003&quot;,
    user: &quot;tech.guru@startup.io&quot;,
    userId: &quot;user-789&quot;,
    issue: &quot;Unable to download invoice PDF&quot;,
    status: &quot;open&quot;,
    priority: &quot;medium&quot;,
    createdAt: &quot;2023-12-15T11:00:00Z&quot;,
    lastUpdated: &quot;2023-12-15T11:00:00Z&quot;,
    category: &quot;billing&quot;
  },
  {
    id: &quot;SR-1004&quot;,
    user: &quot;developer@codelab.dev&quot;,
    userId: &quot;user-235&quot;,
    issue: &quot;API integration documentation is outdated&quot;,
    status: &quot;open&quot;,
    priority: &quot;low&quot;,
    createdAt: &quot;2023-12-13T16:45:00Z&quot;, 
    lastUpdated: &quot;2023-12-13T16:45:00Z&quot;,
    category: &quot;api&quot;
  },
  {
    id: &quot;SR-1005&quot;,
    user: &quot;maria.rodriguez@design.co&quot;,
    userId: &quot;user-567&quot;,
    issue: &quot;Dispute with freelancer over delivered work quality&quot;,
    status: &quot;in-progress&quot;,
    priority: &quot;high&quot;,
    createdAt: &quot;2023-12-12T10:30:00Z&quot;,
    lastUpdated: &quot;2023-12-15T09:15:00Z&quot;,
    category: &quot;disputes&quot;
  },
  {
    id: &quot;SR-1006&quot;,
    user: &quot;alex.wong@datacompany.com&quot;,
    userId: &quot;user-890&quot;,
    issue: &quot;Profile verification pending for over 7 days&quot;,
    status: &quot;resolved&quot;,
    priority: &quot;medium&quot;,
    createdAt: &quot;2023-12-08T13:20:00Z&quot;,
    lastUpdated: &quot;2023-12-15T08:30:00Z&quot;,
    category: &quot;verification&quot;
  },
  {
    id: &quot;SR-1007&quot;,
    user: &quot;jamie.taylor@tech.org&quot;,
    userId: &quot;user-345&quot;,
    issue: &quot;Cannot upload portfolio images&quot;,
    status: &quot;resolved&quot;,
    priority: &quot;medium&quot;,
    createdAt: &quot;2023-12-10T15:10:00Z&quot;,
    lastUpdated: &quot;2023-12-13T11:25:00Z&quot;,
    category: &quot;profile&quot;
  }
],

export default function SupportRequests() {
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState(""),
  const [statusFilter, setStatusFilter] = useState<string | null>(null),
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null),
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null),
=======
  const [searchQuery, setSearchQuery] = useState("&quot;);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Apply filters to the request data
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {
    // Apply search query filter
    if (searchQuery && 
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
    
    return true
  }),
  
  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length,
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length,
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length,
  const totalCount = MOCK_SUPPORT_REQUESTS.length,
  
  const resetFilters = () => {
<<<<<<< HEAD
    setSearchQuery(""),
    setStatusFilter(null),
    setPriorityFilter(null),
    setCategoryFilter(null)
  },
=======
    setSearchQuery("&quot;);
    setStatusFilter(null);
    setPriorityFilter(null);
    setCategoryFilter(null);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (
    <>
      <SEO 
        title=&quot;Support Requests | Admin Dashboard&quot;
        description=&quot;Manage and track user support requests and issues&quot;
      />
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;flex flex-col md:flex-row items-start md:items-center justify-between mb-8&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent&quot;>
              Support Requests
            </h1>
            <p className=&quot;text-zion-slate-light mt-2&quot;>
              Manage and respond to user support requests and issues
            </p>
          </div>
          
          <div className=&quot;mt-4 md:mt-0&quot;>
            <Button className=&quot;bg-zion-purple hover:bg-zion-purple-light&quot;>
              New Support Case
            </Button>
          </div>
        </div>
        
        {/* Status Cards */}
        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8&quot;>
          <Card>
            <CardHeader className=&quot;pb-2&quot;>
              <CardTitle className=&quot;text-2xl font-bold&quot;>{openCount}</CardTitle>
              <CardDescription>Open Requests</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className=&quot;pb-2&quot;>
              <CardTitle className=&quot;text-2xl font-bold&quot;>{inProgressCount}</CardTitle>
              <CardDescription>In Progress</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className=&quot;pb-2&quot;>
              <CardTitle className=&quot;text-2xl font-bold&quot;>{resolvedCount}</CardTitle>
              <CardDescription>Resolved</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className=&quot;pb-2&quot;>
              <CardTitle className=&quot;text-2xl font-bold&quot;>{totalCount}</CardTitle>
              <CardDescription>Total Requests</CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        <Tabs defaultValue=&quot;all&quot; className=&quot;mb-8&quot;>
          <TabsList>
            <TabsTrigger value=&quot;all&quot;>All Requests</TabsTrigger>
            <TabsTrigger value=&quot;escalated&quot;>Escalated</TabsTrigger>
            <TabsTrigger value=&quot;ai-flagged&quot;>AI Flagged</TabsTrigger>
            <TabsTrigger value=&quot;need-response&quot;>Need Response</TabsTrigger>
          </TabsList>
          
          <TabsContent value=&quot;all&quot; className=&quot;mt-6&quot;>
            {/* Search and Filters */}
            <div className=&quot;flex flex-col md:flex-row gap-4 mb-6&quot;>
              <div className=&quot;relative flex-1&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400&quot; />
                <Input
                  placeholder=&quot;Search by ID, user or issue...&quot;
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className=&quot;pl-10&quot;
                />
              </div>
              
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
                <SelectTrigger className="w-[180px]&quot;>
                  <SelectValue placeholder=&quot;Status&quot; />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="&quot;>All Statuses</SelectItem>
                  <SelectItem value=&quot;open&quot;>Open</SelectItem>
                  <SelectItem value=&quot;in-progress&quot;>In Progress</SelectItem>
                  <SelectItem value=&quot;resolved&quot;>Resolved</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>
                <SelectTrigger className="w-[180px]&quot;>
                  <SelectValue placeholder=&quot;Priority&quot; />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="&quot;>All Priorities</SelectItem>
                  <SelectItem value=&quot;high&quot;>High</SelectItem>
                  <SelectItem value=&quot;medium&quot;>Medium</SelectItem>
                  <SelectItem value=&quot;low&quot;>Low</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>
                <SelectTrigger className="w-[180px]&quot;>
                  <SelectValue placeholder=&quot;Category&quot; />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="&quot;>All Categories</SelectItem>
                  <SelectItem value=&quot;authentication&quot;>Authentication</SelectItem>
                  <SelectItem value=&quot;billing&quot;>Billing</SelectItem>
                  <SelectItem value=&quot;api&quot;>API</SelectItem>
                  <SelectItem value=&quot;disputes&quot;>Disputes</SelectItem>
                  <SelectItem value=&quot;verification&quot;>Verification</SelectItem>
                  <SelectItem value=&quot;profile&quot;>Profile</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant=&quot;outline&quot; onClick={resetFilters} className=&quot;md:w-auto&quot;>
                <Filter className=&quot;h-4 w-4 mr-2&quot; /> Reset Filters
              </Button>
            </div>
            
            {/* Support Requests Table */}
            <Card>
              <CardContent className=&quot;p-0&quot;>
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
                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className=&quot;font-medium&quot;>{request.id}</TableCell>
                        <TableCell>{request.user}</TableCell>
                        <TableCell className=&quot;max-w-xs truncate&quot;>{request.issue}</TableCell>
                        <TableCell>
                          <Badge variant={
                            request.status === 'open' 
                              ? 'default' 
                              : request.status === 'in-progress' 
                              ? 'secondary' 
                              : 'outline'
                          }>
=======
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
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Status" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Statuses</SelectItem>;
                  <SelectItem value="open">Open</SelectItem>;
                  <SelectItem value="in-progress">In Progress</SelectItem>;
                  <SelectItem value="resolved">Resolved</SelectItem>;
                </SelectContent>;
              </Select>;
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Priority" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Priorities</SelectItem>;
                  <SelectItem value="high">High</SelectItem>;
                  <SelectItem value="medium">Medium</SelectItem>;
                  <SelectItem value="low">Low</SelectItem>;
                </SelectContent>;
              </Select>;
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Category" />;
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
              <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
                <Filter className="h-4 w-4 mr-2" /> Reset Filters;
              </Button>;
            </div>;
            {/* Support Requests Table */}
            <Card>;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                            {request.status}
                          </Badge>;
                        </TableCell>;
                        <TableCell>;
                          <Badge variant={;
                            request.priority === 'high';
                              ? 'destructive';
                              : request.priority === 'medium';
                              ? 'default';
                              : 'outline';
                          }>;
                            {request.priority}
<<<<<<< HEAD
                          </Badge>
                        </TableCell>
                        <TableCell>{request.category}</TableCell>
                        <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(request.lastUpdated).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button variant=&quot;ghost&quot; size=&quot;sm&quot;>View</Button>
                          <Button variant=&quot;ghost&quot; size=&quot;sm&quot;>Assign</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value=&quot;escalated&quot; className=&quot;mt-6&quot;>
            <div className=&quot;bg-zion-blue-light/20 p-8 rounded-lg text-center&quot;>
              <h3 className=&quot;text-xl font-medium mb-4&quot;>Escalated Requests</h3>
              <p className=&quot;text-zion-slate-light&quot;>
                This tab will show support requests that have been escalated by agents or the system.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value=&quot;ai-flagged&quot; className=&quot;mt-6&quot;>
            <div className=&quot;bg-zion-blue-light/20 p-8 rounded-lg text-center&quot;>
              <h3 className=&quot;text-xl font-medium mb-4&quot;>AI Flagged Issues</h3>
              <p className=&quot;text-zion-slate-light&quot;>
                This tab shows issues that our AI system has identified as requiring human attention.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value=&quot;need-response&quot; className=&quot;mt-6&quot;>
            <div className=&quot;bg-zion-blue-light/20 p-8 rounded-lg text-center&quot;>
              <h3 className=&quot;text-xl font-medium mb-4&quot;>Awaiting Response</h3>
              <p className=&quot;text-zion-slate-light&quot;>
                These support requests have been waiting for an agent response for over 24 hours.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
=======
                          </Badge>;
                        </TableCell>;
                        <TableCell>{request.category}</TableCell>;
                        <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>;
                        <TableCell>{new Date(request.lastUpdated).toLocaleDateString()}</TableCell>;
                        <TableCell>;
                          <Button variant="ghost" size="sm">View</Button>;
                          <Button variant="ghost" size="sm">Assign</Button>;
                        </TableCell>;
                      </TableRow>;
                    ))}
                  </TableBody>;
                </Table>;
              </CardContent>;
            </Card>;
          </TabsContent>;
          <TabsContent value="escalated" className="mt-6">;
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;
              <h3 className="text-xl font-medium mb-4">Escalated Requests</h3>;
              <p className="text-zion-slate-light">;
                This tab will show support requests that have been escalated by agents or the system.;
              </p>;
            </div>;
          </TabsContent>;
          <TabsContent value="ai-flagged" className="mt-6">;
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;
              <h3 className="text-xl font-medium mb-4">AI Flagged Issues</h3>;
              <p className="text-zion-slate-light">;
                This tab shows issues that our AI system has identified as requiring human attention.;
              </p>;
            </div>;
          </TabsContent>;
          <TabsContent value="need-response" className="mt-6">;
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;
              <h3 className="text-xl font-medium mb-4">Awaiting Response</h3>;
              <p className="text-zion-slate-light">;
                These support requests have been waiting for an agent response for over 24 hours.;
              </p>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </div>;
    </>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;