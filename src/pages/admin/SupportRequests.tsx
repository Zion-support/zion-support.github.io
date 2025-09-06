

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
    id: 'SR - 1006',
    user: 'alex.wong@datacompany.com',
    user_id: 'user - 890',
    issue: 'Profile verification pending for over 7 days',

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
        <Tabs defaultValue='all' className='mb-8'>
          
          <TabsContent value="all" className="mt-6">


                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='pl-10'                />;
              </div>;

              <Select
                value={statusFilter || ''}
                onValueChange={value => setStatusFilter(value || null)}

              
              <Button variant="outline" onClick={resetFilters} className="md:w-auto">
                <Filter className="h-4 w-4 mr-2" /> Reset Filters
                    {filteredRequests.map(request => (                      <TableRow key={request.id}>
                        <TableCell className='font-medium'>
                          {request.id}
                        </TableCell>

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
}</TableBody> </Table> </CardContent> </Card> </TabsContent> <TabsContent value=" escalated"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">Escalated Requests</h3> <p className=" text - zion - slate - light"> This tab will show support requests that have been escalated by agents or the system. </p> </div> </TabsContent> <TabsContent value=" ai - flagged"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">AI Flagged Issues</h3> <p className=" text - zion - slate - light"> This tab shows issues that our AI system has identified as requiring human attention. </p> </div> </TabsContent> <TabsContent value=" need - response"className=" mt - 6"> <div className=" bg - zion - blue - light / 20 p - 8 rounded - lg text - center"> <h3 className=" text - xl font - medium mb - 4">Awaiting Response</h3> <p className=" text - zion - slate - light" > These support requests have been waiting for an agent response for over 24 hours. </p> </div> </TabsContent> </Tabs> </div> </>);
}'"}
