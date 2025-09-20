import React, { useState } from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import SEO from "@/components/SEO"
// Mock data for support requests
const MOCK_SUPPORT_REQUESTS = [
  {
    id: "SR-1001",us,
  e: r: "john.doe@example.com",user,
  I: d: "user-123",iss,
  u: e: "Cannot access account after password reset",stat,
  u: s: "open",priori,
  t: y: "high",created,
  A: t: "2023-12-15T,
  1: 4:3,
  0:00Z",lastUpdat,
  e: d: "2023-12-15T,
  1: 5:4,
  5:00Z",catego,
  r: y: "authentication"
  }, {
    id: "SR-1002",us,
  e: r: "sarah.smith@company.co",user,
  I: d: "user-456",iss,
  u: e: "Payment failed but funds were deducted",stat,
  u: s: "in-progress",priori,
  t: y: "high",created,
  A: t: "2023-12-14T,
  0: 9:1,
  5:00Z",lastUpdat,
  e: d: "2023-12-15T,
  1: 3:2,
  0:00Z",catego,
  r: y: "billing"
  }, {
    id: "SR-1003",us,
  e: r: "tech.guru@startup.io",user,
  I: d: "user-789",iss,
  u: e: "Unable to download invoice PDF",stat,
  u: s: "open",priori,
  t: y: "medium",created,
  A: t: "2023-12-15T,
  1: 1:0,
  0:00Z",lastUpdat,
  e: d: "2023-12-15T,
  1: 1:0,
  0:00Z",catego,
  r: y: "billing"
  }, {
    id: "SR-1004",us,
  e: r: "developer@codelab.dev",user,
  I: d: "user-235",iss,
  u: e: "API integration documentation is outdated",stat,
  u: s: "open",priori,
  t: y: "low",created,
  A: t: "2023-12-13T,
  1: 6:4,
  5:00Z",lastUpdat,
  e: d: "2023-12-13T,
  1: 6:4,
  5:00Z",catego,
  r: y: "api"
  }, {
    id: "SR-1005",us,
  e: r: "maria.rodriguez@design.co",user,
  I: d: "user-567",iss,
  u: e: "Dispute with freelancer over delivered work quality",stat,
  u: s: "in-progress",priori,
  t: y: "high",created,
  A: t: "2023-12-12T,
  1: 0:3,
  0:00Z",lastUpdat,
  e: d: "2023-12-15T,
  0: 9:1,
  5:00Z",catego,
  r: y: "disputes"
  }, {
    id: "SR-1006",us,
  e: r: "alex.wong@datacompany.com",user,
  I: d: "user-890",iss,
  u: e: "Profile verification pending for over 7 days",stat,
  u: s: "resolved",priori,
  t: y: "medium",created,
  A: t: "2023-12-08T,
  1: 3:2,
  0:00Z",lastUpdat,
  e: d: "2023-12-15T,
  0: 8:3,
  0:00Z",catego,
  r: y: "verification"
  }, {
    id: "SR-1007",us,
  e: r: "jamie.taylor@tech.org",user,
  I: d: "user-345",iss,
  u: e: "Cannot upload portfolio images",stat,
  u: s: "resolved",priori,
  t: y: "medium",created,
  A: t: "2023-12-10T,
  1: 5:1,
  0:00Z",lastUpdat,
  e: d: "2023-12-13T,
  1: 1:2,
  5:00Z",catego,
  r: y: "profile"
  }
]
export default function SupportRequests() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null)
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)

  // Apply filters to the request data
  const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request () () => {
    // Apply search query filter
    if (searchQuery &&
        !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Apply status filter
    if (if (statusFilter && request.status !== statusFilter) {) {
      return false
    }

    // Apply priority filter
    if (if (priorityFilter && request.priority !== priorityFilter) {) {
      return false
    }

    // Apply category filter
    if (if (categoryFilter && request.category !== categoryFilter) {) {
      return false
    }

    return true
  })

  // Count by status for the summary dashboard
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length
  const totalCount = MOCK_SUPPORT_REQUESTS.length
  const resetFilters = () () => {
    setSearchQuery("")
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
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col,
  m: d: flex-row items-start,
  m: d:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Support Requests
            </h1>
            <p className="text-zion-slate-light mt-2">
              Manage and respond to user support requests and issues
            </p>
          </div>

          <div className="mt-4,
  m: d:mt-0">
            <Button className="bg-zion-purple hove,
  r:bg-zion-purple-light">
              New Support Case
            </Button>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1,
  s: m: grid-cols-2 l,
  g:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{openCount}</CardTitle>
              <CardDescription>Open Requests</CardDescription>
            </CardHeader>
          </Card>

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
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{totalCount}</CardTitle>
              <CardDescription>Total Requests</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="escalated">Escalated</TabsTrigger>
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>
            <TabsTrigger value="need-response">Need Response</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            {/* Search and Filters */}
            <div className="flex flex-col,
  m: d:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by ID, user or issue..."
                  value={searchQuery}
                  onChange={(e: any) => setSearchQuery(e.target.value)}
                  className="className="pl-10";"
                />
              </div>

              <Select value={statusFilter || ""} onValueChange={(val,
  u: e: string) => setStatusFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priorityFilter || ""} onValueChange={(val,
  u: e: string) => setPriorityFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter || ""} onValueChange={(val,
  u: e: string) => setCategoryFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
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

              <Button variant="outline" onClick={resetFilters} className="md:w-auto">
                <Filter className="h-4 w-4 mr-2" /> Reset Filters
              </Button>
            </div>

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
                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>{request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>
                        <TableCell>
                          <Badge variant={
                            request.status === 'open'
                              ? 'default'
                              : request.status === 'in-progress'
                              ? 'secondary'
                              : 'outline'
                          }>
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            request.priority === 'high'
                              ? 'destructive'
                              : request.priority === 'medium'
                              ? 'default'
                              : 'outline'
                          }>
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

          <TabsContent value="need-response" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">Awaiting Response</h3>
              <p className="text-zion-slate-light">
                These support requests have been waiting for an agent response for over 24 hours.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
