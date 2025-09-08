<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

;
method: string;endpoint: string;
description: string;
note?: string;
params?: EndpointParam[];code_examples?: Record < string string>;
response_examples?: {success: string;
}export /**;
 * ApiDocumentation - Function description;
 */;
function ApiDocumentation() {return (<Card className="bg - zinc - 900 border - zinc - 800 text - white" > text - xl flex items - center"> <BookOpen className=" mr - 2"size= {20 ";
}/> API Documentation </CardTitle> <CardDescription className=" text - zinc - 400"> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className=" bg - blue - 900 / 30 border - blue - 800 mb - 6"> <Terminal className=" h - 4 w - 4"/> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs default_value=" jobs"className=" space - y-4"> <TabsList className=" bg - zinc - 800 border - zinc - 700"> <TabsTrigger value=" jobs">Jobs</TabsTrigger> <TabsTrigger value=" talent">Talent</TabsTrigger> <TabsTrigger value=" quotes">Quotes</TabsTrigger> <TabsTrigger value=" webhooks">Webhooks</TabsTrigger> <TabsTrigger value=" errors">Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space - y-6"> <EndpointSection headers = headers) data = response.json () print (data) `;
}response_examples= {success: ` {";
  " data": [ {'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json';
import { useState } from "react",import { BookOpen, Terminal  } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",import { Alert, AlertDescription } from "@/components/ui/alert",import { Badge } from "@/components/ui/badge",import CodeBlock from "./CodeBlock",import { logInfo } from '@/utils/productionLogger',interface EndpointParam  {name: string,type: string,description: string,required?: boolean;
interface EndpointParam  {name: string,type: string,description: string,required?: boolean;
}interface EndpointSectionProps  {method: string,endpoint: string,description: string,note?: string,params?: EndpointParam[],codeExamples?: Record<string string>,responseExamples?: { success: string }
}export function ApiDocumentation() {return (<Card className;
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import { Card;
  CardContent;
  CardDescription;
  CardHeader;
  CardTitle;
 } from '@/components/ui/card';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { Badge  } from '@/components/ui/badge';
import CodeBlock from './CodeBlock';
import { logInfo  } from '@/utils/productionLogger';
interface EndpointParam  {name: string;
type: string;
description: string;
required?: boolean;
}interface EndpointSectionProps  {method: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
method: string;

endpoint: string;
description: string;

note?: string;
params?: EndpointParam[];
<<<<<<< HEAD



  Authorization': 'Bearer YOUR API KEYContent-Type: application/json' 
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts



  {
  success: ` {";
  " data": [ {


<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useState } from "react",
import { BookOpen, Terminal } from 'lucide-react'
origin/cursor/automate-test-improve-and-merge-code-2533
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Alert, AlertDescription } from "@/components/ui/alert",
import { Badge } from "@/components/ui/badge",
import CodeBlock from "./CodeBlock",
import { logInfo } from '@/utils/productionLogger',
interface EndpointParam {
  name: string,
  type: string,
  description: string,
  required?: boolean
import { useState } from "react",;
import { BookOpen, Terminal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { Badge } from "@/components/ui/badge",;
import CodeBlock from "./CodeBlock",;
import { logInfo } from '@/utils/productionLogger',;
interface EndpointParam {;
  name: string,;
  type: string,,
  description: string,;
  required?: boolean;
}
;
interface EndpointSectionProps {;
  method: string,;
  endpoint: string,,
  description: string,;
  note?: string,;
  params?: EndpointParam[],;
  codeExamples?: Record<string string>,;
  responseExamples?: { success: string }
}

export function ApiDocumentation() {
  return (
    <Card className;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import CodeBlock from './CodeBlock'
import { logInfo } from '@/utils/productionLogger'
interface EndpointParam {
  name: string
type: string
description: string
required?: boolean
}interface EndpointSectionProps {
  method: string
endpoint: string
description: string
note?: string
params?: EndpointParam[]
codeExamples?: Record<string string>
responseExamples?: {
  success: string
}export function ApiDocumentation () {
  return (<Card className="bg-zinc-900 border-zinc-800 text-white" > text-xl flex items-center"> <BookOpen className=" mr-2"size= {
  20 "
}/> API Documentation </CardTitle> <CardDescription className=" text-zinc-400"> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className=" bg-blue-900/30 border-blue-800 mb-6"> <Terminal className=" h-4 w-4"/> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs defaultValue=" jobs"className=" space-y-4"> <TabsList className=" bg-zinc-800 border-zinc-700"> <TabsTrigger value=" jobs">Jobs</TabsTrigger> <TabsTrigger value=" talent">Talent</TabsTrigger> <TabsTrigger value=" quotes">Quotes</TabsTrigger> <TabsTrigger value=" webhooks">Webhooks</TabsTrigger> <TabsTrigger value=" errors">Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space-y-6"> <EndpointSection headers=headers) data = response.json () print (data) `
}responseExamples= {
  {
  success: ` {"
  " data": [ {
}`
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/jobs/\$ {
  jobId
}\`, {
  method: 'GET'
headers: {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json'

export function ApiDocumentation() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <BookOpen className="mr-2" size={20} /> API Documentation
        </CardTitle>
        <CardDescription className="text-zinc-400">
          Reference documentation for integrating with the Zion Marketplace API.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Alert className="bg-blue-900/30 border-blue-800 mb-6">
          <Terminal className="h-4 w-4" />
          <AlertDescription>
            Make sure to include your API key in all requests as a Bearer token in the Authorization header.
          </AlertDescription>
        </Alert>

}` 

}/> <EndpointSectionconst response = await fetch (\`https://api && api.ziontechgroup.com/v1/jobs/\$ {
  jobId 
}\`, {
  method: 'GET'
headers: {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 

export function ApiDocumentation() {
  return (
<<<<<<< HEAD


=======
<<<<<<< HEAD
    <Card className='bg-zinc-900 border-zinc-800 text-white'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <Card className='bg-zinc-900 border-zinc-800 text-white'>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <Card className=bg-zinc-900 border-zinc-800 text-white'>;
>>>>>>> origin/resolved-merge-conflicts
codeExamples?: Record<string string>;
responseExamples?: {success: string;
}export function ApiDocumentation () {return (<Card className="bg-zinc-900 border-zinc-800 text-white" > text-xl flex items-center"> <BookOpen className=" mr-2"size= {20 ";
}/> API Documentation </CardTitle> <CardDescription className=" text-zinc-400"> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className=" bg-blue-900/30 border-blue-800 mb-6"> <Terminal className=" h-4 w-4"/> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs defaultValue=" jobs"className=" space-y-4"> <TabsList className=" bg-zinc-800 border-zinc-700"> <TabsTrigger value=" jobs">Jobs</TabsTrigger> <TabsTrigger value=" talent">Talent</TabsTrigger> <TabsTrigger value=" quotes">Quotes</TabsTrigger> <TabsTrigger value=" webhooks">Webhooks</TabsTrigger> <TabsTrigger value=" errors">Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space-y-6"> <EndpointSection headers=headers) data = response.json () print (data) `;
}responseExamples= {success: ` {";
  " data": [ {}`;
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/jobs/\$ {jobId;
<<<<<<< HEAD
}\`, {method: 'GET';
headers: {';
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json';
export function ApiDocumentation() {return (<Card className='bg-zinc-900 border-zinc-800 text-white'>;
=======
}\`, {method: 'GET;
headers: {;
  'Authorization': Bearer YOUR API KEYContent-Type: 'application/json';
export function ApiDocumentation() {return (<Card className=bg-zinc-900 border-zinc-800 text-white>;
=======
    <Card className='bg-zinc-900 border-zinc-800 text-white'>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <CardHeader>;
        <CardTitle className='text-xl flex items-center'>;
          <BookOpen className='mr-2' size={20} /> API Documentation;
        </CardTitle>;
        <CardDescription className='text-zinc-400'>;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;

      <CardContent>;
        <Alert className='bg-blue-900/30 border-blue-800 mb-6'>;
          <Terminal className='h-4 w-4' />;
}`;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\$ {
  job_id;
}\`, {
  method: 'GET';
headers: {';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}/> <EndpointSectionconst response = await fetch (\`https://api && api.ziontechgroup.com/v1/jobs/\$ {jobId;
}\`, {method: 'GET';
headers: {';
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json';
export function ApiDocumentation() {return (<Card className='bg-zinc-900 border-zinc-800 text-white'>;
      <CardHeader>;
        <CardTitle className='text-xl flex items-center'>;
          <BookOpen className='mr-2' size={20} /> API Documentation;
        </CardTitle>;
        <CardDescription className='text-zinc-400'>;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;<CardContent>;
        <Alert className='bg-blue-900/30 border-blue-800 mb-6'>;
          <Terminal className='h-4 w-4' />;
}`;
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\$ {job_id;
}\`, {method: 'GET';
headers: {';
  'Authorization': 'Bearer YOUR API KEYContent - Type': 'application / json';
export /**;
 * ApiDocumentation - Function description;
 */;
<<<<<<< HEAD
function ApiDocumentation() {return (<Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
=======
=======
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\$ {
  job_id;
}\`, {
  method: 'GET';
headers: {';
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  'Authorization': 'Bearer YOUR API KEYContent - Type': 'application / json';
export /**
 * ApiDocumentation - Function description
 */
function ApiDocumentation() {
  return (
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <CardHeader>;
        <CardTitle className='text - xl flex items - center'>;
          <BookOpen className='mr - 2' size={20} /> API Documentation;
        </CardTitle>;
        <CardDescription className='text - zinc - 400'>;
          Reference documentation for integrating with the Zion Marketplace API.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
        <Alert className='bg - blue - 900 / 30 border - blue - 800 mb - 6'>;
          <Terminal className='h - 4 w - 4' />;<AlertDescription>Make sure to include your API key in all requests as a Bearer token;
            in the Authorization header.;
          </AlertDescription>;
        </Alert>;<Tabs default_value='jobs' className='space - y-4'>;
          <TabsList className='bg - zinc - 800 border - zinc - 700'>;<TabsTrigger value='jobs'>Jobs</TabsTrigger>;
            <TabsTrigger value='talent'>Talent</TabsTrigger>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <Alert className='bg - blue - 900 / 30 border - blue - 800 mb - 6'>;
          <Terminal className='h - 4 w - 4' />;

          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token;
            in the Authorization header.;
          </AlertDescription>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <Alert className=bg - blue - 900 / 30 border - blue - 800 mb - 6>;
          <Terminal className='h - 4 w - 4' />;<AlertDescription>Make sure to include your API key in all requests as a Bearer token;
            in the Authorization header.;
          </AlertDescription>;
        </Alert>;<Tabs default_value=jobs className='space - y-4'>;
          <TabsList className=bg - zinc - 800 border - zinc - 700>;<TabsTrigger value='jobs'>Jobs</TabsTrigger>;
            <TabsTrigger value=talent>Talent</TabsTrigger>;
=======
        <Alert className='bg - blue - 900 / 30 border - blue - 800 mb - 6'>;
          <Terminal className='h - 4 w - 4' />;

          <AlertDescription>;
            Make sure to include your API key in all requests as a Bearer token;
            in the Authorization header.;
          </AlertDescription>;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </Alert>;

        <Tabs default_value='jobs' className='space - y-4'>;
          <TabsList className='bg - zinc - 800 border - zinc - 700'>;

            <TabsTrigger value='jobs'>Jobs</TabsTrigger>;
            <TabsTrigger value='talent'>Talent</TabsTrigger>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <TabsTrigger value='quotes'>Quotes</TabsTrigger>;
            <TabsTrigger value='webhooks'>Webhooks</TabsTrigger>;
            <TabsTrigger value='errors'>Errors</TabsTrigger>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
          </TabsList>;<TabsContent value='jobs' className='space - y-6'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
          </TabsList>;

          <TabsContent value='jobs' className='space - y-6'>;
            <EndpointSection;
              method='GET';
              endpoint='/api / jobs';
              description='List all available jobs with optional filtering.';
              note='';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </TabsList>;<TabsContent value=jobs className='space - y-6'>;
=======
          </TabsList>;

          <TabsContent value='jobs' className='space - y-6'>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
            <EndpointSection;
              method='GET';
              endpoint='/api / jobs';
              description='List all available jobs with optional filtering.';
              note='';
<<<<<<< HEAD
              params={[;{name: 'page';
=======
<<<<<<< HEAD
              params={[;{name: page;
>>>>>>> origin/resolved-merge-conflicts
                  type: 'integer';
                  description: 'Page number for pagination (default: 1)';
                }
                {name: 'limit',type: 'integer',description:;
                    'Number of results per page (default: 20, max: 100)'},{name: 'category';
                  type: 'string';
                  description: 'Filter by job category';
                }
                {name: 'skills',type: 'string[]',description: 'Filter by required skills (comma - separated)'},{name: 'status';
                  type: 'string';
                  description: 'Filter by job status (new, active, closed)';
                }<Tabs defaultValue="jobs" className="space-y-4">;
          <TabsList className="bg-zinc-800 border-zinc-700">;
            <TabsTrigger value="jobs">Jobs</TabsTrigger>;
            <TabsTrigger value="talent">Talent</TabsTrigger>;
            <TabsTrigger value="quotes">Quotes</TabsTrigger>;
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>;
            <TabsTrigger value="errors">Errors</TabsTrigger>;
          </TabsList>;
          <TabsContent value="jobs" className="space-y-6">;
            <EndpointSection;
<<<<<<< HEAD
              method="GET";
              endpoint="/api/jobs";
              description="List all available jobs with optional filtering.";
              note="";
=======
              method="GET;
              endpoint=/api/jobs";
              description="List all available jobs with optional filtering.;
              note=";
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              params={[;

                {
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
                {

                  name: 'limit',
                  type: 'integer',
                  description:
                    'Number of results per page (default: 20, max: 100)',
                },

                {
                  name: 'category'
                  type: 'string'
                  description: 'Filter by job category'
                }
                {

                  name: 'skills',
                  type: 'string[]',
                  description: 'Filter by required skills (comma - separated)',
                },

                {
                  name: 'status'
                  type: 'string'
                  description: 'Filter by job status (new, active, closed)'
                }

        <Tabs defaultValue="jobs" className="space-y-4">
          <TabsList className="bg-zinc-800 border-zinc-700">
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="talent">Talent</TabsTrigger>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="jobs" className="space-y-6">

            <EndpointSection

              method="GET"
              endpoint="/api/jobs"
              description="List all available jobs with optional filtering."
              note=""
              params={[

<<<<<<< HEAD

=======
<<<<<<< HEAD
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "category", type: "string", description: "Filter by job category" },
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" },
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },{ name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },{ name: "category", type: "string", description: "Filter by job category" },{ name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" },{ name: "status", type: "string", description: "Filter by job status (new, active, closed)" }]}-H "Content-Type: application/json"`,javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {code_examples = {curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development', {method: 'GET',headers: {'Authorization': 'Bearer YOUR_API_KEY','Content-Type': 'application/json';
=======
<<<<<<< HEAD
                { name: "page, type: integer", description: "Page number for pagination (default: 1) },
                { name: limit", type: "integer, description: Number of results per page (default: 20, max: 100)" },
                { name: "category, type: string", description: "Filter by job category },
                { name: skills", type: "string[], description: Filter by required skills (comma-separated)" },
                { name: "status, type: string", description: "Filter by job status (new, active, closed) }
                { name: page", type: "integer, description: Page number for pagination (default: 1)" },{ name: "limit, type: integer", description: "Number of results per page (default: 20, max: 100) },{ name: category", type: "string, description: Filter by job category" },{ name: "skills, type: string[]", description: "Filter by required skills (comma-separated) },{ name: status", type: "string, description: Filter by job status (new, active, closed)" }]}-H "Content-Type: application/json`,javascript: `const response = await fetch(https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development, {code_examples = {{curl: `curl -X GET https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development" \\;
  -H "Authorization: Bearer YOUR_API_KEY \\;
  -H Content - Type: application / json"`,javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development', {method: GET,headers: {'Authorization': Bearer YOUR_API_KEY,'Content-Type': application/json;
>>>>>>> origin/resolved-merge-conflicts
  }
})



}` ;
}';
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z' ;
}) ;



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "category", type: "string", description: "Filter by job category" },
                { name: "skills", type: "string[]", description: "Filter by required skills (comma-separated)" },
                { name: "status", type: "string", description: "Filter by job status (new, active, closed)" }
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

              ]}

  -H "Content-Type: application/json"`,
                javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs?limit=10&category=development', {
              code_examples = {
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs?limit = 10 & category = development', {

  method: 'GET',
  headers: {

    'Authorization': 'Bearer YOUR_API_KEY',

    'Content-Type': 'application/json'
  }
})

}` ;

}';
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z' ;
});

});'

'deadline': '2025-06-30T23:59:59Z' '
}response = requests.post ('https: //api.ziontechgroup.com/v1/jobs'
headers=headers
data=json.dumps (payload) ) data = response.json () print (data) `
}responseExamples= {
  {
  success: ` {
}`
}"
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSection headers=headers) data = response.json () print (data) `

const data = await response && response.json ()
logInfo (data), `
python: `import requests headers = {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}job id '
}'
headers=headers) data = response && response.json () print (data) ` 

}responseExamples= {
  {
  success: ` {

}` 
}'
}/> <EndpointSectiondeadline: '2025-06-30T23:59:59Z' 
}) 
})'
'deadline': '2025-06-30T23:59:59Z' '
}response = requests && requests.post ('https: //api && api.ziontechgroup.com/v1/jobs'
headers=headers
data=json && json.dumps (payload) ) data = response && response.json () print (data) ` 

}responseExamples= {
  {
  success: ` {

}` 
}"
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSectionheaders=headers) data = response && response.json () print (data) ` 

}responseExamples= {
<<<<<<< HEAD


=======
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  }
});
const data = await response.json ();
log_info (data), `;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    'Authorization': Bearer YOUR_API_KEY,
    'Content - Type': application / json;
>>>>>>> origin/resolved-merge-conflicts
})}` ;
}';
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z' ;
})]}
              codeExamples={curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs?limit=10&category=development" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/jobs?limit=10&category=development', {method: 'GET';
  headers: {'Content-Type': 'application/json';
  }
})const data = await response.json ()logInfo (data), `;
python: `import requests headers = {';
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json';
}job id ';
}';
headers=headers) data = response.json () print (data) `;
}responseExamples= {success: ` {})';
'deadline': '2025-06-30T23:59:59Z' ';
}response = requests.post ('https: //api.ziontechgroup.com/v1/jobs';
headers=headers;
data=json.dumps (payload) ) data = response.json () print (data) `;
}responseExamples= {success: ` {}`;
}";
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSection headers=headers) data = response.json () print (data) `;
const data = await response && response.json ()logInfo (data), `;
python: `import requests headers = {';
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json';
}job id ';
}';
headers=headers) data = response && response.json () print (data) `;
}responseExamples= {success: ` {}`;
}';
}/> <EndpointSectiondeadline: '2025-06-30T23:59:59Z';
})})';
'deadline': '2025-06-30T23:59:59Z' ';
}response = requests && requests.post ('https: //api && api.ziontechgroup.com/v1/jobs';
headers=headers;
data=json && json.dumps (payload) ) data = response && response.json () print (data) `;
}responseExamples= {success: ` {}`;
}";
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSectionheaders=headers) data = response && response.json () print (data) `;
}responseExamples= {'Authorization': 'Bearer YOUR_API_KEY','Content - Type': 'application / json';
  }
})const data = await response.json ()log_info (data), `;
=======
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  }
});
const data = await response.json ();
log_info (data), `;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
python: `import requests headers = {';
  'Authorization': 'Bearer YOUR API KEYContent - Type': 'application / json';
}job id ';
}';
headers = headers) data = response.json () print (data) `;
<<<<<<< HEAD
}response_examples= {success: ` {}`;
}';
}/> <EndpointSection deadline: '2025 - 06 - 30T23:59:59Z';
=======
}response_examples= {
  {
  success: ` {
}`;
}';
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}/> <EndpointSection deadline: 2025 - 06 - 30T23:59:59Z;
>>>>>>> origin/resolved-merge-conflicts
})})';
'deadline': '2025 - 06 - 30T23:59:59Z' ';
}response = requests.post ('https: //api.ziontechgroup.com / v1 / jobs';
headers = headers;
data = json.dumps (payload) ) data = response.json () print (data) `;
<<<<<<< HEAD
}response_examples= {success: ` {}`;
}";
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSection headers = headers) data = response.json () print (data) `;
=======
}response_examples= {{success: ` {}`;
};
}/> </TabsContent> <TabsContent value=" talent"className= space-y-6> <EndpointSection headers = headers) data = response.json () print (data) `;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}/> <EndpointSection deadline: '2025 - 06 - 30T23:59:59Z';
});
});';
'deadline': '2025 - 06 - 30T23:59:59Z' ';
}response = requests.post ('https: //api.ziontechgroup.com / v1 / jobs';
headers = headers;
data = json.dumps (payload) ) data = response.json () print (data) `;
}response_examples= {
  {
  success: ` {
}`;
}";
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSection headers = headers) data = response.json () print (data) `;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
}response_examples= {
  {
  success: ` {";
  " data": [ {

}` 

}/> <EndpointSectionconst response = await fetch (\`https://api && api.ziontechgroup.com/v1/talent/\$ {
  talentId 
}\`, {'
  method: 'GET'
headers: {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/jobs',
    params={'limit': 10, 'category': 'development'},
    headers=headers
)

data = response && response.json()
print(data)`,

}`;
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\$ {
  talent_id;
}\`, {';
  method: 'GET';
headers: {';
  'Authorization': 'Bearer YOUR API KEYContent - Type': 'application / json';
response = requests.get (
    'https://api.ziontechgroup.com / v1 / jobs',
    params={'limit': 10, 'category': 'development'},
    headers = headers);
data = response.json ();
print (data)`,

print(data)`,

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

  }

}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/jobs',;
    params={'limit': 10, 'category': 'development'},;
    headers=headers;
);
data = response.json();
print(data)`;

<<<<<<< HEAD
              }
              response_examples={
=======
              }}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              response_examples={{
>>>>>>> origin/resolved-merge-conflicts
                success: `{
  "data": [;
    {

      "id": "job_abc123",
      "title": "Senior React Developer",
      "description": "We need an experienced React developer...",
      "category": "development",
      "skills": ["react", "typescript", "node && node.js"],

      "budget": {


  ],



<<<<<<< HEAD
              responseExamples={
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
              responseExamples={{
>>>>>>> origin/resolved-merge-conflicts
                success: `{
  "data": [

      "id": "job_abc123",
      "title": "Senior React Developer",
      "description": "We need an experienced React developer...",
      "category": "development",
      "skills": ["react", "typescript", "node.js"],
      "budget": {

  "meta": {

    "total": 42
    "page": 1
    "limit": 10

}`
  }

<<<<<<< HEAD


=======
<<<<<<< HEAD
}`,
              }
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}`,
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}`}}
>>>>>>> origin/resolved-merge-conflicts
            />
=======
}`,
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <EndpointSection

              method='GET'
              endpoint='/api/jobs/:id'
              description='Get detailed information about a specific job.'
<<<<<<< HEAD


=======
<<<<<<< HEAD
              note=''
response = requests.get ('https://api.ziontechgroup.com / v1 / jobs',params={'limit': 10, 'category': 'development'},headers = headers)data = response.json ()print (data)`,print(data)`,'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
              note=''
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              note=
response = requests.get ('https://api.ziontechgroup.com / v1 / jobs',params={limit: 10, 'category': development},headers = headers)data = response.json ()print (data)`,print(data)`,'Authorization': Bearer YOUR_API_KEYContent-Type: 'application/json';
>>>>>>> origin/resolved-merge-conflicts
  }
}),const data = await response.json(),logInfo(data),`,python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}response = requests.get('https: //api.ziontechgroup.com/v1/jobs',params={'limit': 10, 'category': 'development'},headers=headers;
)data = response.json()print(data)`;}responseExamples={success: `{"data": [;
    {response_examples={success: `{"data": [;
    {"id": "job_abc123","title": "Senior React Developer","description": "We need an experienced React developer...","category": "development","skills": ["react", "typescript", "node && node.js"],"budget": {],"meta": {"total": 42;
    "page": 1;
    "limit": 10;
        "min": 5000,"max": 10000,"currency": "USD";
      },"status": "active","client_id": "user_xyz789","created_at": "2025 - 05 - 15T10:30:00Z";
    },// More jobs...;
  ],"meta": {"total": 42,"page": 1,"limit": 10;}`;
  }`}
            />;
              }/>;<EndpointSection;
              method='GET';
              endpoint='/api/jobs/:id';
              description='Get detailed information about a specific job.';
              note='';
              params={[;

=======
              note=''
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

              params={[
            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / jobs/:id';
              description='Get detailed information about a specific job.';
              note='';
              params={[;

                {
                  name: 'id'
                  type: 'string'
                  description: 'The job ID'
                  required: true
                },              ]}

                javascript: `const jobId = 'job_abc123'
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
<<<<<<< HEAD
              code_examples={
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs / job_abc123" \\;
=======
              code_examples={{
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs / job_abc123 \\;
>>>>>>> origin/resolved-merge-conflicts
              params={[;{name: 'id';
                  type: 'string';
                  description: 'The job ID';
                  required: true;
                }              ]}-H "Content-Type: application/json"`,javascript: `const jobId = 'job_abc123';
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/jobs/\${jobId}\`, {code_examples={curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs / job_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,javascript: `const job_id = 'job_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\${job_id}\`, {method: 'GET',headers: {const data = await response && response.json ()logInfo (data), `;
python: `import requests headers = {';
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json';
}talent id ';
}';
headers=headers) data = response && response.json () print (data) `;
<<<<<<< HEAD
job_id = 'job_abc123';
response = requests && requests.get(f'https://api && api.ziontechgroup.com/v1/jobs/{job_id}',headers=headers;
)data = response && response.json()print(data)`,'Authorization': 'Bearer YOUR_API_KEY','Content - Type': 'application / json';
=======
job_id = 'job_abc123;
response = requests && requests.get(fhttps://api && api.ziontechgroup.com/v1/jobs/{job_id}',headers=headers;
)data = response && response.json()print(data)`,'Authorization: Bearer YOUR_API_KEY','Content - Type: application / json';
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / jobs / job_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const job_id = 'job_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / jobs/\${job_id}\`, {
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
const data = await response && response.json ()
logInfo (data), `
python: `import requests headers = {'
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' 
}talent id '
}'
headers=headers) data = response && response.json () print (data) ` 
job_id = 'job_abc123'
response = requests && requests.get(
    f'https://api && api.ziontechgroup.com/v1/jobs/{job_id}',
    headers=headers
)

data = response && response.json()
print(data)`,

    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
});
const data = await response.json ();
log_info (data), `;
python: `import requests headers = {';
  'Authorization': 'Bearer YOUR API KEYContent - Type': 'application / json';
}talent id ';
}';
headers = headers) data = response.json () print (data) `;
job_id = 'job_abc123';
response = requests.get (
    f'https://api.ziontechgroup.com / v1 / jobs/{job_id}',
    headers = headers);
data = response.json ();
<<<<<<< HEAD
=======
<<<<<<< HEAD
print (data)`,

}`;
response = requests.get (f'https://api.ziontechgroup.com / v1 / jobs/{job_id}',headers = headers)data = response.json ()print (data)`}`;
              }
=======
<<<<<<< HEAD
print (data)`}`;
response = requests.get (fhttps://api.ziontechgroup.com / v1 / jobs/{job_id},headers = headers)data = response.json ()print (data)`}`;
              }}
>>>>>>> origin/resolved-merge-conflicts
            />;
>>>>>>> origin/cursor/delete-old-data-records-6bba

print (data)`,

}`;
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

              }
            />
            
            <EndpointSection
              method="GET"
              endpoint="/api/jobs/:id"
              description="Get detailed information about a specific job."
              note=""
              params={[
                { name: "id", type: "string", description: "The job ID", required: true }
              ]}

              codeExamples={
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,

              }
              responseExamples={
                success: `{
  "data": {
    "id": "job_abc123",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",
    "skills": ["react", "typescript", "node.js"],
    "budget": {
      "min": 5000,
      "max": 10000,

    },
    "status": "active",
    "client_id": "user_xyz789",
    "created_at": "2025-05-15T10:30:00Z",
    "deadline": "2025-06-30T23:59:59Z",
    "application_count": 12
  }

            <EndpointSection
              method="POST"
              endpoint="/api/jobs"
              description="Create a new job listing."
              note="Requires jobs:write scope"
              params={[
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <EndpointSection;
              method="GET";
              endpoint="/api/jobs/:id";
              description="Get detailed information about a specific job.";
              note="";
              params={[;
                { name: "id", type: "string", description: "The job ID", required: true }
              ]}codeExamples={curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`}
              response_examples={success: `{"data": {"id": "job_abc123","title": "Senior React Developer","description": "We need an experienced React developer...","category": "development","skills": ["react", "typescript", "node && node.js"],"budget": {"min": 5000,"max": 10000,"currency": "USD";},"status": "active","client_id": "user_xyz789","created_at": "2025 - 05 - 15T10:30:00Z","deadline": "2025 - 06 - 30T23:59:59Z","application_count": 12;
  }/>;<EndpointSection;
              method='POST';
              endpoint='/api/jobs';
              description='Create a new job listing.';
              note='Requires jobs:write scope';
              params={[;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

            />;
            <EndpointSection;
              method='POST';
              endpoint='/api / jobs';
              description='Create a new job listing.';
              note='Requires jobs:write scope';
              params={[;

                {

                  name: 'title'
                  type: 'string'
                  description: 'Job title'
                  required: true
<<<<<<< HEAD


=======
<<<<<<< HEAD
              params={[;{name: 'title';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              params={[;{name: 'title';
              params={[;{name: title;
>>>>>>> origin/resolved-merge-conflicts
                  type: 'string';
                  description: 'Job title';
                  required: true;
                }
                {name: 'description';
                  type: 'string';
                  description: 'Detailed job description';
                  required: true;
                }
                {name: 'category';
                  type: 'string';
                  description: 'Job category';
                  required: true;
                }
                {name: 'skills';
                  type: 'string[]';
                  description: 'Required skills';
                  required: true;
                }
<<<<<<< HEAD
                {
                }
                {
                  name: 'description'
=======
                {}
                {
                  name: description
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                }
                {
                  name: 'description'
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  type: 'string'
                  description: 'Detailed job description'
                  required: true
                }
                {
                  name: 'category'
                  type: 'string'
                  description: 'Job category'
                  required: true
                }
                {
                  name: 'skills'
                  type: 'string[]'
                  description: 'Required skills'
                  required: true
                }
                {

                {
                  name: 'deadline'
                  type: 'string'
                  description: 'Job deadline (ISO date string)'
                }

                { name: "title", type: "string", description: "Job title", required: true },
                { name: "description", type: "string", description: "Detailed job description", required: true },
                { name: "category", type: "string", description: "Job category", required: true },
                { name: "skills", type: "string[]", description: "Required skills", required: true },
                { name: "budget.min", type: "number", description: "Minimum budget" },
                { name: "budget.max", type: "number", description: "Maximum budget" },
                { name: "budget.currency", type: "string", description: "Currency code (default: USD)" },
                { name: "deadline", type: "string", description: "Job deadline (ISO date string)" }

<<<<<<< HEAD


=======
<<<<<<< HEAD
                {name: 'budget && budget.min',type: 'number',description: 'Minimum budget'},{name: 'budget && budget.max',type: 'number',description: 'Maximum budget'},{name: 'budget && budget.currency',type: 'string',description: 'Currency code (default: USD)'},{name: 'deadline';
                  type: 'string';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {name: budget && budget.min,type: 'number',description: Minimum budget},{name: 'budget && budget.max',type: number,description: 'Maximum budget'},{name: budget && budget.currency,type: 'string',description: Currency code (default: USD)},{name: 'deadline';
                  type: string;
>>>>>>> origin/resolved-merge-conflicts
                  description: 'Job deadline (ISO date string)';
                }]}
              codeExamples={curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`,javascript: `const jobId = 'job_abc123',const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {method: 'GET',headers: {'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  }
}),const data = await response.json(),logInfo(data),`,python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}job_id = 'job_abc123';
response = requests.get(f'https://api.ziontechgroup.com/v1/jobs/{job_id}',headers=headers;
)data = response.json()print(data)`;
              }
              responseExamples={success: `{"data": {"id": "job_abc123";
    "title": "Senior React Developer";
    "description": "We need an experienced React developer...";
    "category": "development";
    "skills": ["react", "typescript", "node.js"];
    "budget": {"min": 5000;
      "max": 10000;
      "currency": "USD";
}`;
              }
            />;
            <EndpointSection;
              method="POST";
              endpoint="/api/jobs";
              description="Create a new job listing.";
              note="Requires jobs:write scope";
              params={[;
              ]}
<<<<<<< HEAD
              codeExamples={curl: `curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\;
=======
              codeExamples={{curl: `curl -X POST "https://api.ziontechgroup.com/v1/jobs" \\;
>>>>>>> origin/resolved-merge-conflicts
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json" \\;
  -d '{"title": "Senior React Developer";
    "description": "We need an experienced React developer...";
    "category": "development";
    "skills": ["react", "typescript", "node.js"];
    "budget": {"min": 5000;
      "max": 10000;
      "currency": "USD";
    },
    "deadline": "2025 - 06 - 30T23:59:59Z";
  }'`,
                javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs', {

  method: 'POST',
  headers: {


    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

  },
  body: JSON && JSON.stringify({
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  },
  body: JSON.stringify ({
    title: 'Senior React Developer',
    description: 'We need an experienced React developer...',
    category: 'development',

    skills: ['reacttypescriptnode.js'],


    budget: {

              ]}
<<<<<<< HEAD
              codeExamples={;
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123" \\;
=======
              codeExamples={{
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/jobs/job_abc123 \\;
  -H Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json`,
                javascript: `const jobId = job_abc123,
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {
  method: 'GET',
  headers: {
    Authorization: 'Bearer YOUR_API_KEYContent-Type': application/json;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`,;
                javascript: `const jobId = 'job_abc123',;
const response = await fetch(\`https://api.ziontechgroup.com/v1/jobs/\${jobId}\`, {;
  method: 'GET',;
  headers: {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
job_id = 'job_abc123';
response = requests.get(;
    f'https://api.ziontechgroup.com/v1/jobs/{job_id}',;
    headers=headers;
);
data = response.json();
print(data)`;
              }
              responseExamples={
                success: `{
  "data": {
    "id": "job_abc123"
    "title": "Senior React Developer"
    "description": "We need an experienced React developer..."
    "category": "development"
    "skills": ["react", "typescript", "node.js"]
    "budget": {

    skills: ['reacttypescriptnode.js'],

    budget: {

const data = await response && response.json()
logInfo(data)`,

                python: `import requests
import json
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'

});
const data = await response.json();

logInfo(data);`,

}),

const data = await response.json(),
logInfo(data),`,

                python: `import requests
import json
headers = {
<<<<<<< HEAD


=======
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
=======
<<<<<<< HEAD
<<<<<<< HEAD
    'Authorization': Bearer YOUR_API_KEY
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
    'Authorization': Bearer YOUR_API_KEY
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

    'Authorization': 'Bearer YOUR_API_KEY',

    'Content-Type': 'application/json'

}` 
}'"
}/> </TabsContent> <TabsContent value=" quotes"className=" space-y-6"> <EndpointSectionresponse = requests && requests.post ('https: //api && api.ziontechgroup.com/v1/quotes'
headers=headers
data=json && json.dumps (payload) ) data = response && response.json () print (data) ` 
response = requests && requests.post(
    'https://api && api.ziontechgroup.com/v1/jobs',
    headers=headers,
    data=json && json.dumps(payload)
)

data = response && response.json()
print(data)`,

      min: 5000,
      max: 10000,
      currency: 'USD'
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD
                { name: "title", type: "string", description: "Job title", required: true },{ name: "description", type: "string", description: "Detailed job description", required: true },{ name: "category", type: "string", description: "Job category", required: true },{ name: "skills", type: "string[]", description: "Required skills", required: true },{ name: "budget.min", type: "number", description: "Minimum budget" },{ name: "budget.max", type: "number", description: "Maximum budget" },{ name: "budget.currency", type: "string", description: "Currency code (default: USD)" },{ name: "deadline", type: "string", description: "Job deadline (ISO date string)" }]}code_examples={curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;-d '{"title": "Senior React Developer","description": "We need an experienced React developer...","category": "development","skills": ["react", "typescript", "node && node.js"],"budget": {}'`,javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs', {"min": 5000,"max": 10000,"currency": "USD";
    },"deadline": "2025 - 06 - 30T23:59:59Z";
  }'`,javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs', {method: 'POST',headers: {'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  },body: JSON && JSON.stringify({'Authorization': 'Bearer YOUR_API_KEY','Content - Type': 'application / json';
  },body: JSON.stringify ({title: 'Senior React Developer',description: 'We need an experienced React developer...',category: 'development',skills: ['reacttypescriptnode.js'],budget: {const data = await response && response.json()logInfo(data)`,python: `import requests;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                { name: "title", type: string, description: "Job title", required: true },{ name: description, type: "string", description: Detailed job description, required: true },{ name: "category", type: string, description: "Job category", required: true },{ name: skills, type: "string[]", description: Required skills, required: true },{ name: "budget.min", type: number, description: "Minimum budget" },{ name: budget.max, type: "number", description: Maximum budget },{ name: "budget.currency", type: string, description: "Currency code (default: USD)" },{ name: deadline, type: "string", description: Job deadline (ISO date string) }]}code_examples={{curl: `curl -X POST "https://api.ziontechgroup.com / v1 / jobs" \\;
  -H Authorization: Bearer YOUR_API_KEY \\;
  -H "Content - Type: application / json" \\;-d {title: "Senior React Developer",description: "We need an experienced React developer...",category: "development",skills: ["react", typescript, "node && node.js"],budget: {}'`,javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/jobs, {"min": 5000,max: 10000,"currency": USD;
    },"deadline": 2025 - 06 - 30T23:59:59Z;
  }`,javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / jobs', {method: POST,headers: {'Authorization': Bearer YOUR_API_KEYContent-Type: 'application/json';
  },body: JSON && JSON.stringify({Authorization: 'Bearer YOUR_API_KEY',Content - Type: 'application / json';
  },body: JSON.stringify ({title: Senior React Developer,description: 'We need an experienced React developer...',category: development,skills: ['reacttypescriptnode.js'],budget: {const data = await response && response.json()logInfo(data)`,python: `import requests;
>>>>>>> origin/resolved-merge-conflicts
import json;
headers = {'Authorization': 'Bearer YOUR_API_KEY';
})const data = await response.json()logInfo(data)`}),const data = await response.json(),logInfo(data),`,python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEY';
    'Authorization': 'Bearer YOUR_API_KEY','Content-Type': 'application/json';
}`;
}'";
}/> </TabsContent> <TabsContent value=" quotes"className=" space-y-6"> <EndpointSectionresponse = requests && requests.post ('https: //api && api.ziontechgroup.com/v1/quotes';
headers=headers;
data=json && json.dumps (payload) ) data = response && response.json () print (data) `;
response = requests && requests.post('https://api && api.ziontechgroup.com/v1/jobs',headers=headers,data=json && json.dumps(payload))data = response && response.json()print(data)`,min: 5000,max: 10000,currency: 'USD';
    },deadline: '2025 - 06 - 30T23:59:59Z';
  })})const data = await response.json ()log_info (data)`,python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEY','Content - Type': 'application / json';
}`;
}'";
}/> </TabsContent> <TabsContent value=" quotes"className=" space - y-6"> <EndpointSection response = requests.post ('https: //api.ziontechgroup.com / v1 / quotes';
headers = headers;
data = json.dumps (payload) ) data = response.json () print (data) `;
response = requests.post (
    'https://api.ziontechgroup.com / v1 / jobs',
    headers = headers,
    data = json.dumps (payload));
data = response.json ();
print (data)`,
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    deadline: '2025-06-30T23:59:59Z'
  })
}),

const data = await response.json(),
logInfo(data),`,
                python: `import requests
import json

headers = {

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'

}
;
payload = {;
    'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'],;
    'budget': {;
        'min': 5000,;
        'max': 10000,;
        'currency': 'USD';
    },;
    'deadline': '2025-06-30T23:59:59Z';
}
;
response = requests.post(;
    'https://api.ziontechgroup.com/v1/jobs',;
    headers=headers,;
    data=json.dumps(payload);
);
data = response.json();
print(data)`;

              }
              response_examples={
                success: `{
  "data": {

    "id": "job_def456",
    "title": "Senior React Developer",
    "description": "We need an experienced React developer...",
    "category": "development",

            <EndpointSection
              method="GET"
              endpoint="/api/talent"
              description="List talent profiles with optional filtering."
              note=""
              params={[

<<<<<<< HEAD


=======
<<<<<<< HEAD
response = requests.post ('https://api.ziontechgroup.com / v1 / jobs',headers = headers,data = json.dumps (payload))data = response.json ()print (data)`,print(data)`,'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}payload = {'title': 'Senior React Developerdescription': 'We need an experienced React developer...category': 'developmentskills': ['reacttypescriptnode.js'],'budget': {'min': 5000,'max': 10000,'currency': 'USD';
    },'deadline': '2025-06-30T23:59:59Z';
}response = requests.post('https://api.ziontechgroup.com/v1/jobs',headers=headers,data=json.dumps(payload))data = response.json()print(data)`;}
              response_examples={success: `{"data": {"id": "job_def456","title": "Senior React Developer","description": "We need an experienced React developer...","category": "development","skills": ["react", "typescript", "node && node.js"],"budget": {"min": 5000,"max": 10000,"currency": "USD";},"status": "new","client_id": "user_xyz789","created_at": "2025 - 05 - 16T14:22:10Z","deadline": "2025 - 06 - 30T23:59:59Z";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
response = requests.post (https://api.ziontechgroup.com / v1 / jobs,headers = headers,data = json.dumps (payload))data = response.json ()print (data)`,print(data)`,'Authorization': Bearer YOUR_API_KEYContent-Type: 'application/json';
}payload = {title: 'Senior React Developerdescription': We need an experienced React developer...category: 'developmentskills': [reacttypescriptnode.js],'budget': {min: 5000,'max': 10000,currency: 'USD';
    },deadline: '2025-06-30T23:59:59Z';
}response = requests.post(https://api.ziontechgroup.com/v1/jobs,headers=headers,data=json.dumps(payload))data = response.json()print(data)`;}}
              response_examples={{success: `{"data": {id: "job_def456",title: "Senior React Developer",description: "We need an experienced React developer...",category: "development",skills: ["react", typescript, "node && node.js"],budget: {"min": 5000,max: 10000,"currency": USD;},"status": new,"client_id": user_xyz789,"created_at": 2025 - 05 - 16T14:22:10Z,"deadline": 2025 - 06 - 30T23:59:59Z;
>>>>>>> origin/resolved-merge-conflicts
  }/>;
          </TabsContent>;<TabsContent value='talent' className='space-y-6'>;"min": 5000;
      "max": 10000;
      "currency": "USD";
}`;
              }
            />;
          </TabsContent>;
          <TabsContent value="talent" className="space-y-6">;
            <EndpointSection;
              method='GET';
              endpoint='/api/talent';
              description='List talent profiles with optional filtering.';
              note='';
              params={[;
            />;
          </TabsContent>;
          <TabsContent value='talent' className='space - y-6'>;
            <EndpointSection;
              method='GET';
              endpoint='/api / talent';
              description='List talent profiles with optional filtering.';
              note='';
              params={[;


      "min": 5000
      "max": 10000
      "currency": "USD"
}`;
              }
            />
          </TabsContent>
          
<<<<<<< HEAD
          <TabsContent value="talent" className="space-y-6">
=======
          <TabsContent value="talent" className=space-y-6>
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {

                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }

                {

                  name: 'limit',
                  type: 'integer',
                  description:
                    'Number of results per page (default: 20, max: 100)',
                },
                {
                  name: 'skills',
                  type: 'string[]',
                  description: 'Filter by skills (comma - separated)',
                },

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {
                  name: 'availability'
                  type: 'string'
                  description: 'Filter by availability status'
                }

<<<<<<< HEAD

=======
<<<<<<< HEAD
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" },
                { name: "availability", type: "string", description: "Filter by availability status" }
=======
<<<<<<< HEAD
                { name: "page", type: integer, description: "Page number for pagination (default: 1)" },
                { name: limit, type: "integer", description: Number of results per page (default: 20, max: 100) },
                { name: "skills", type: string[], description: "Filter by skills (comma-separated)" },
                { name: availability, type: "string", description: Filter by availability status }
>>>>>>> origin/resolved-merge-conflicts
              params={[;{name: 'page';
                  type: 'integer';
                  description: 'Page number for pagination (default: 1)';
                }
                {name: 'limit',type: 'integer',description:;
                    'Number of results per page (default: 20, max: 100)'},{name: 'skills',type: 'string[]',description: 'Filter by skills (comma - separated)'},{name: 'availability';
                  type: 'string';
                  description: 'Filter by availability status';
                }]}
              codeExamples={curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {method: 'GET';
  headers: { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },{ name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },{ name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" },{ name: "availability", type: "string", description: "Filter by availability status" }]}-H "Content-Type: application/json"`,javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/talent?skills=react,typescript', {code_examples = {curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent?skills = react, typescript" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / talent?skills = react, typescript', {method: 'GET',headers: {const data = await response && response.json()logInfo(data)`,'Authorization': 'Bearer YOUR_API_KEY','Content-Type': 'application/json';
  }
});
const data = await response.json();
logInfo(data);`,


              ]}
              codeExamples={
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent?skills=react,typescript" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/talent?skills=react,typescript', {
  method: 'GET'
  headers: {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "skills", type: "string[]", description: "Filter by skills (comma-separated)" },
                { name: "availability", type: "string", description: "Filter by availability status" }
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
              ]}

                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'

response = requests && requests.get(
    'https://api && api.ziontechgroup.com/v1/talent',
    params={'skills': 'react,typescript'},
    headers=headers
)

data = response && response.json()
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
print(data)`,


print(data)`,

    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';
  }
});
const data = await response.json ();
log_info (data);`,
                python: `import requests;


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

print(data)`,

print(data)`,

print(data)`,

print(data)`,

headers = {;

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'},;
    headers=headers;
);
data = response.json();
print(data)`;

              }

            <EndpointSection

              method='GET'
              endpoint='/api/talent/:id'
              description='Get detailed information about a specific talent profile.'
              note=''

              params={[
            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / talent/:id';
              description='Get detailed information about a specific talent profile.';
              note='';
              params={[;

                {
                  name: 'id'
                  type: 'string'
                  description: 'The talent ID'
                  required: true
                },              ]}

                javascript: `const talentId = 'talent_abc123'
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {
              code_examples={
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,
                javascript: `const talent_id = 'talent_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {

  method: 'GET',
  headers: {

  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/talent',;
    params={'skills': 'react,typescript'},;
    headers=headers;
);
data = response.json();
print(data)`;
<<<<<<< HEAD
              }
              responseExamples={
=======
              }}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              responseExamples={{
>>>>>>> origin/resolved-merge-conflicts
                success: `{
  "data": [
    {
      "id": "talent_abc123"
      "display_name": "Jane Smith"
      "headline": "Senior Frontend Developer"
      "skills": ["react", "typescript", "javascript"]
      "availability": "available"
      "average_rating": 4.8
      "rating_count": 15
    }
    // More talent profiles...
  "meta": {
    "total": 28
    "page": 1
    "limit": 20
  }
              }
            />
            <EndpointSection
              method='GET'
              endpoint='/api/talent/:id'
              description='Get detailed information about a specific talent profile.'
              note=''
              params={[
})const data = await response.json()logInfo(data)`,python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEY';
    'Content-Type': 'application/json';
response = requests && requests.get('https://api && api.ziontechgroup.com/v1/talent',params={'skills': 'react,typescript'},headers=headers;
)data = response && response.json()print(data)`,print(data)`}
}),const data = await response.json(),logInfo(data),`,python: `import requests;'Authorization': 'Bearer YOUR_API_KEY','Content - Type': 'application / json';
  }
})const data = await response.json ()log_info (data)`,python: `import requests;headers = {'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}response = requests.get('https: //api.ziontechgroup.com/v1/talent',params={'skills': 'react,typescript'},headers=headers;
)data = response.json()print(data)`;}responseExamples={success: `{"data": [;
    {"id": "talent_abc123";
      "display_name": "Jane Smith";
      "headline": "Senior Frontend Developer";
      "skills": ["react", "typescript", "javascript"];
      "availability": "available";
      "average_rating": 4.8;
      "rating_count": 15;
    }
    // More talent profiles...;
  "meta": {"total": 28;
    "page": 1;
    "limit": 20;
  }
              }
            />;
              response_examples={success: `{"data": [;
    {"id": "talent_abc123","display_name": "Jane Smith","headline": "Senior Frontend Developer","skills": ["react", "typescript", "javascript"],"availability": "available"}/>;<EndpointSection;
              method='GET';
              endpoint='/api/talent/:id';
              description='Get detailed information about a specific talent profile.';
              note='';
              params={[;

            />;
            <EndpointSection;
              method='GET';
              endpoint='/api / talent/:id';
              description='Get detailed information about a specific talent profile.';
              note='';
              params={[;

                {
                  name: 'id'
                  type: 'string'
                  description: 'The talent ID'
                  required: true
                },              ]}

  -H "Content-Type: application/json"`,

                javascript: `const talentId = 'talent_abc123'
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {
              code_examples={
                curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;
              params={[;{name: 'id';
                  type: 'string';
                  description: 'The talent ID';
                  required: true;
                }              ]}-H "Content-Type: application/json"`,javascript: `const talentId = 'talent_abc123';
const response = await fetch(\`https://api && api.ziontechgroup.com/v1/talent/\${talentId}\`, {code_examples={curl: `curl -X GET "https://api.ziontechgroup.com / v1 / talent / talent_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,javascript: `const talent_id = 'talent_abc123';
const response = await fetch (\`https://api.ziontechgroup.com / v1 / talent/\${talent_id}\`, {method: 'GET',headers: {const data = await response && response.json()logInfo(data)`,python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEY';
    'Content-Type': 'application/json';
talent_id = 'talent_abc123';
response = requests && requests.get(f'https://api && api.ziontechgroup.com/v1/talent/{talent_id}',headers=headers;
)data = response && response.json()print(data)`,'Authorization': 'Bearer YOUR_API_KEY','Content - Type': 'application / json';
  }
})const data = await response.json ()log_info (data)`,python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEY','Content - Type': 'application / json';
talent_id = 'talent_abc123';
response = requests.get (f'https://api.ziontechgroup.com / v1 / talent/{talent_id}',headers = headers)data = response.json ()print (data)`}
              response_examples = {}`;
              }
            />;
          </TabsContent>;

          <TabsContent value='quotes' className='space-y-6'>;

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

}`;
              }
            />
            
            <EndpointSection
              method="GET"
              endpoint="/api/talent/:id"
              description="Get detailed information about a specific talent profile."
              note=""
              params={[
                { name: "id", type: "string", description: "The talent ID", required: true }
              ]}

              codeExamples={
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,

                success: `{
  "data": {
    "id": "talent_abc123",
    "display_name": "Jane Smith",
    "headline": "Senior Frontend Developer",
    "bio": "10+ years of experience in frontend development...",
    "skills": ["react", "typescript", "javascript", "css", "html"],
    "availability": "available",
    "average_rating": 4.8,
    "rating_count": 15,
    "portfolio": [
      {
        "id": "proj_123",

    ],
    "certifications": [
      {
        "name": "AWS Certified Developer",
        "issuing_organization": "Amazon Web Services",
        "issue_date": "2024-01-15"
      }

            <EndpointSection
              method="POST"
              endpoint="/api/quotes"
              description="Create a quote request for a talent."
              note="Requires quotes:write scope"
              params={[
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

            <EndpointSection;
              method="GET";
              endpoint="/api/talent/:id";
              description="Get detailed information about a specific talent profile.";
              note="";
              params={[;
                { name: "id", type: "string", description: "The talent ID", required: true }
              ]}codeExamples={curl: `curl -X GET "https://api.ziontechgroup.com/v1/talent/talent_abc123" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`,success: `{"data": {"id": "talent_abc123","display_name": "Jane Smith","headline": "Senior Frontend Developer","bio": "10+ years of experience in frontend development...","skills": ["react", "typescript", "javascript", "css", "html"],"availability": "available","average_rating": 4 && 4.8,"rating_count": 15,"portfolio": [;
      {"id": "proj_123"],"certifications": [;
      {"name": "AWS Certified Developer","issuing_organization": "Amazon Web Services","issue_date": "2024 - 01 - 15";
      }/>;
          </TabsContent>;<TabsContent value='quotes' className='space-y-6'>;<EndpointSection;
              method='POST';
              endpoint='/api/quotes';
              description='Create a quote request for a talent.';
              note='Requires quotes:write scope';
              params={[;
            />;
          </TabsContent>;
          <TabsContent value='quotes' className='space - y-6'>;
            <EndpointSection;
              method='POST';
              endpoint='/api / quotes';
              description='Create a quote request for a talent.';
              note='Requires quotes:write scope';
              params={[;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                {

                  name: 'talent_id'
                  type: 'string'
                  description: 'ID of the talent to request a quote from'
                  required: true
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                }
                {
                  name: 'project_name'
                  type: 'string'
                  description: 'Name of the project'
                  required: true
                }
                {
                  name: 'project_summary'
                  type: 'string'
                  description: 'Brief summary of the project'
                  required: true
                }
                {
                  name: 'project_description'
                  type: 'string'
                  description: 'Detailed project description'
                }
                {
                  name: 'timeline'
                  type: 'string'
                  description: 'Expected timeline'
                  required: true
                }
                {
                  name: 'budget_min'
                  type: 'number'
                  description: 'Minimum budget'
                }
                {
                  name: 'budget_max'
                  type: 'number'
                  description: 'Maximum budget'
                }
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              params={[;{name: 'talent_id';
                  type: 'string';
                  description: 'ID of the talent to request a quote from';
                  required: true;
                }
                {name: 'project_name';
                  type: 'string';
                  description: 'Name of the project';
                  required: true;
                }
                {name: 'project_summary';
                  type: 'string';
                  description: 'Brief summary of the project';
                  required: true;
                }
                {name: 'project_description';
                  type: 'string';
                  description: 'Detailed project description';
                }
                {name: 'timeline';
                  type: 'string';
                  description: 'Expected timeline';
                  required: true;
                }
                {name: 'budget_min';
                  type: 'number';
                  description: 'Minimum budget';
                }
                {name: 'budget_max';
                  type: 'number';
                  description: 'Maximum budget';
                }
                {name: 'requester_name';
                  type: 'string';
                  description: 'Name of the requester';
                  required: true;
=======
                }
                {
                  name: 'project_name'
                  type: 'string'
                  description: 'Name of the project'
                  required: true
                }
                {
                  name: 'project_summary'
                  type: 'string'
                  description: 'Brief summary of the project'
                  required: true
                }
                {
                  name: 'project_description'
                  type: 'string'
                  description: 'Detailed project description'
                }
                {
                  name: 'timeline'
                  type: 'string'
                  description: 'Expected timeline'
                  required: true
                }
                {
                  name: 'budget_min'
                  type: 'number'
                  description: 'Minimum budget'
                }
                {
                  name: 'budget_max'
                  type: 'number'
                  description: 'Maximum budget'
                }
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {
                  name: 'requester_name'
                  type: 'string'
                  description: 'Name of the requester'
                  required: true
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                }
                {
                  name: 'requester_email'
                  type: 'string'
                  description: 'Email of the requester'
                  required: true
                }

<<<<<<< HEAD

=======
<<<<<<< HEAD
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true },
                { name: "project_name", type: "string", description: "Name of the project", required: true },
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true },
                { name: "project_description", type: "string", description: "Detailed project description" },
                { name: "timeline", type: "string", description: "Expected timeline", required: true },
                { name: "budget_min", type: "number", description: "Minimum budget" },
                { name: "budget_max", type: "number", description: "Maximum budget" },
                { name: "requester_name", type: "string", description: "Name of the requester", required: true },
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }
    talent_id: 'talent_abc123',
    project_name: 'E - commerce Website Redesign',
    project_summary: 'Redesign our outdated e - commerce website with modern UI',
              ]}
=======
<<<<<<< HEAD
                { name: "talent_id", type: string, description: "ID of the talent to request a quote from", required: true },
                { name: project_name, type: "string", description: Name of the project, required: true },
                { name: "project_summary", type: string, description: "Brief summary of the project", required: true },
                { name: project_description, type: "string", description: Detailed project description },
                { name: "timeline", type: string, description: "Expected timeline", required: true },
                { name: budget_min, type: "number", description: Minimum budget },
                { name: "budget_max", type: number, description: "Maximum budget" },
                { name: requester_name, type: "string", description: Name of the requester, required: true },
                { name: "requester_email", type: string, description: "Email of the requester", required: true }
    talent_id: talent_abc123,
    project_name: 'E - commerce Website Redesign',
    project_summary: Redesign our outdated e - commerce website with modern UI]}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                { name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true },
                { name: "project_name", type: "string", description: "Name of the project", required: true },
                { name: "project_summary", type: "string", description: "Brief summary of the project", required: true },
                { name: "project_description", type: "string", description: "Detailed project description" },
                { name: "timeline", type: "string", description: "Expected timeline", required: true },
                { name: "budget_min", type: "number", description: "Minimum budget" },
                { name: "budget_max", type: "number", description: "Maximum budget" },
                { name: "requester_name", type: "string", description: "Name of the requester", required: true },
                { name: "requester_email", type: "string", description: "Email of the requester", required: true }
              ]}
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },
  body: JSON.stringify({

    project_description: 'Our current website is 5 years old and needs a complete overhaul...',
    timeline: '2-3 months',
    budget_min: 8000,
    budget_max: 12000,
    requester_name: 'John Doe',

    'Authorization': 'Bearer YOUR_API_KEY',
    'Content - Type': 'application / json';

payload = {

    'talent_id': 'talent_abc123',
    'project_name': 'E - commerce Website Redesign',
    'project_summary': 'Redesign our outdated e - commerce website with modern UI',
    'project_description': 'Our current website is 5 years old and needs a complete overhaul...',
    'timeline': '2 - 3 months',
    'budget_min': 8000,
    'budget_max': 12000,
    'requester_name': 'John Doe',

              }
              response_examples = {

    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  },
  body: JSON.stringify({
    talent_id: 'talent_abc123',
    project_name: 'E-commerce Website Redesign',
    project_summary: 'Redesign our outdated e-commerce website with modern UI',
    project_description: 'Our current website is 5 years old and needs a complete overhaul...',
    timeline: '2-3 months',
    budget_min: 8000,
    budget_max: 12000,
    requester_name: 'John Doe',
    requester_email: 'john@example.com'
  })

                python: `import requests

import json

headers = {

                success: `{
  "data": {
    "id": "quote_def456",
    "talent_id": "talent_abc123",
    "requester_id": "user_xyz789",
    "project_name": "E-commerce Website Redesign",
    "project_summary": "Redesign our outdated e-commerce website with modern UI",
    "project_description": "Our current website is 5 years old and needs a complete overhaul...",
    "timeline": "2-3 months",
    "budget_min": 8000,
    "budget_max": 12000,
    "budget_display": "$8,000 - $12,000",
    "requester_name": "John Doe",
    "requester_email": "john@example.com",
    "status": "new",
    "created_at": "2025-05-16T14:30:15Z"
  }
<<<<<<< HEAD


=======
<<<<<<< HEAD
}`,              }
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}`,              }}
}`}}
>>>>>>> origin/resolved-merge-conflicts
            />;

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <EndpointSection
              method="GET"
              endpoint="/api/quotes"
              description="List quote requests that you've created."

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                {name: 'requester_email';
                  type: 'string';
                  description: 'Email of the requester';
                  required: true;
                }{ name: "talent_id", type: "string", description: "ID of the talent to request a quote from", required: true },{ name: "project_name", type: "string", description: "Name of the project", required: true },{ name: "project_summary", type: "string", description: "Brief summary of the project", required: true },{ name: "project_description", type: "string", description: "Detailed project description" },{ name: "timeline", type: "string", description: "Expected timeline", required: true },{ name: "budget_min", type: "number", description: "Minimum budget" },{ name: "budget_max", type: "number", description: "Maximum budget" },{ name: "requester_name", type: "string", description: "Name of the requester", required: true },{ name: "requester_email", type: "string", description: "Email of the requester", required: true }]}code_examples={curl: `curl -X POST "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json" \\;-d '{"talent_id": "talent_abc123","project_name": "E - commerce Website Redesign","project_summary": "Redesign our outdated e - commerce website with modern UI","project_description": "Our current website is 5 years old and needs a complete overhaul...","timeline": "2 - 3 months","budget_min": 8000,"budget_max": 12000,"requester_name": "John Doe",headers: {},body: JSON && JSON.stringify({'Authorization': 'Bearer YOUR_API_KEY','Content - Type': 'application / json';
  },body: JSON.stringify ({talent_id: 'talent_abc123',project_name: 'E - commerce Website Redesign',project_summary: 'Redesign our outdated e - commerce website with modern UI',project_description: 'Our current website is 5 years old and needs a complete overhaul...',timeline: '2 - 3 months',budget_min: 8000,budget_max: 12000,requester_name: 'John Doe',requester_email: 'john@example.com';
  })})const data = await response.json ()log_info (data)`,python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEY','Content - Type': 'application / json';payload = {'talent_id': 'talent_abc123','project_name': 'E - commerce Website Redesign','project_summary': 'Redesign our outdated e - commerce website with modern UI','project_description': 'Our current website is 5 years old and needs a complete overhaul...','timeline': '2 - 3 months','budget_min': 8000,'budget_max': 12000,'requester_name': 'John Doe'}
              response_examples = {'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  },body: JSON.stringify({talent_id: 'talent_abc123',project_name: 'E-commerce Website Redesign',project_summary: 'Redesign our outdated e-commerce website with modern UI',project_description: 'Our current website is 5 years old and needs a complete overhaul...',timeline: '2-3 months',budget_min: 8000,budget_max: 12000,requester_name: 'John Doe',requester_email: 'john@example.com';
  })python: `import requests;
headers = {success: `{"data": {"id": "quote_def456","talent_id": "talent_abc123","requester_id": "user_xyz789","project_name": "E - commerce Website Redesign","project_summary": "Redesign our outdated e - commerce website with modern UI","project_description": "Our current website is 5 years old and needs a complete overhaul...","timeline": "2 - 3 months","budget_min": 8000,"budget_max": 12000,"budget_display": "$8, 000 - $12, 000","requester_name": "John Doe","requester_email": "john@example && example.com","status": "new","created_at": "2025 - 05 - 16T14:30:15Z";
  }`              }
            />;<EndpointSection;
              method='GET';
              endpoint='/api/quotes';
              description="List quote requests that you've created.";
              note='';
              params={[;
            <EndpointSection;
              method='GET';
              endpoint='/api / quotes';
              description="List quote requests that you've created.";
              note='';
              params={[;


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {
                  name: 'page'
                  type: 'integer'
                  description: 'Page number for pagination (default: 1)'
                }
                {

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {
  method: 'GET'
  headers: {
                python: `import requests
headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
print(data)`,
<<<<<<< HEAD
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
=======
                { name: "page", type: integer, description: "Page number for pagination (default: 1)" },
                { name: limit, type: "integer", description: Number of results per page (default: 20, max: 100) },
                { name: "status", type: string, description: "Filter by status (new, viewed, replied, archived)" }
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },
                { name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },
                { name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

              ]}
              codeExamples={
                curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\

                python: `import requests
headers = {
<<<<<<< HEAD


=======
<<<<<<< HEAD
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    Authorization: 'Bearer YOUR_API_KEY'
    Content-Type: 'application/json'
>>>>>>> origin/resolved-merge-conflicts
response = requests.get(
    'https://api.ziontechgroup.com/v1/quotes'
    headers=headers
)
data = response.json()
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json'
  }
}),;
const data = await response.json(),;
logInfo(data),`,;
                python: `import requests;
=======
    'Authorization': 'Bearer YOUR_API_KEY'
    'Content-Type': 'application/json'
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

headers = {;
    'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}
;
response = requests.get(;
    'https: //api.ziontechgroup.com/v1/quotes',;
    headers=headers;
);
data = response.json();
print(data)`;

<<<<<<< HEAD


=======
<<<<<<< HEAD
              responseExamples={
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              responseExamples={{
>>>>>>> origin/resolved-merge-conflicts
                success: `{
  "data": [
    {
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                success: `{
  "data": [
    {

  ],

  "meta": {
    "total": 5
    "page": 1
    "limit": 20

}`

  }

<<<<<<< HEAD


=======
<<<<<<< HEAD
}`,
              }
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}`,
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}`}}
>>>>>>> origin/resolved-merge-conflicts
            />
          </TabsContent>
          <TabsContent value='webhooks' className='space-y-6'>
            <div className='prose prose-invert max-w-none'>
              <h3 className='text-lg font-semibold mb-2'>Webhook Events</h3>
              <p className='text-zinc-400 mb-4'>
                The Zion API can send webhook notifications when certain events
                occur in your account. You can configure webhooks in the
                Webhooks tab of the Developer Dashboard.
              </p>
              <h4 className='text-md font-semibold mt-6 mb-2'>
                Authentication
              </h4>
              <p className='text-zinc-400 mb-4'>
                When you create a webhook, you can optionally provide a secret
                key. If a secret is provided, each webhook request will include
                a signature in the
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                  X-Zion-Signature
                </code>{' '}
                header. This signature is an HMAC SHA-256 hash of the request
                body using your webhook secret as the key.
              </p>
              <CodeBlock
                code={`import crypto from 'crypto'
// Function to verify webhook signature
function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret)
  const expectedSignature = hmac.update(payload).digest('hex')
=======
}`,
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

}`;

              }
            />
          </TabsContent>
          
          <TabsContent value="webhooks" className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>
              <p className="text-zinc-400 mb-4">
                The Zion API can send webhook notifications when certain events occur in your account.
                You can configure webhooks in the Webhooks tab of the Developer Dashboard.
              </p>
              
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>
              <p className="text-zinc-400 mb-4">
                When you create a webhook, you can optionally provide a secret key.
                If a secret is provided, each webhook request will include a signature in the
                <code className="bg-zinc-800 px-1 py-0.5 rounded">X-Zion-Signature</code> header.
                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.
              </p>
              
              <CodeBlock
                code={`import crypto from 'crypto',
// Function to verify webhook signature
function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret),
  const expectedSignature = hmac.update(payload).digest('hex'),

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )

}
;
// Example usage in Express.js;
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {;
  const signature = req.headers['x-zion-signature'],;
  const payload = req.body.toString(),;
  const webhookSecret = process.env.WEBHOOK_SECRET,;
  if (!verifyWebhookSignature(payload, signature, webhookSecret)) {;
    return res.status(401).send('Invalid signature');
  }
  
  // Process the webhook event
  const event = JSON.parse(payload),
  logInfo('Received valid webhook:', { data: event }),
  
  // Respond to acknowledge receipt
  res.status(200).send('Webhook received')
}),`}
                language="javascript"
                showLineNumbers={true}
              />
              
              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>
              <table className="w-full border-collapse mt-2">

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <thead>
                  <tr className='border-b border-zinc-800'>
                    <th className='py-2 px-4 text-left'>Event Type</th>
                    <th className='py-2 px-4 text-left'>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4 font-mono text-sm'>
                      new_application
                    </td>
                    <td className='py-2 px-4'>
                      When a talent applies to one of your jobs
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4 font-mono text-sm'>
                      quote_received
                    </td>
                    <td className='py-2 px-4'>
                      When you receive a quote from talent
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4 font-mono text-sm'>
                      milestone_approved
                    </td>
                    <td className='py-2 px-4'>
                      When a project milestone is approved
                    </td>
                  </tr>
                  <tr className='border-b border-zinc-800'>
                    <td className='py-2 px-4 font-mono text-sm'>
                      talent_hired
                    </td>
                    <td className='py-2 px-4'>
                      When you hire talent for a project
                    </td>
                  </tr>
                </tbody>
              </table>

              params={[;{name: 'page';
                  type: 'integer';
                  description: 'Page number for pagination (default: 1)';
                }
                {const response = await fetch(\`https://api.ziontechgroup.com/v1/talent/\${talentId}\`, {method: 'GET';
  headers: {python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEY';
    'Content-Type': 'application/json';
print(data)`,print(data)`}
}),const data = await response.json(),logInfo(data),`,python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}talent_id = 'talent_abc123';
response = requests.get(f'https://api.ziontechgroup.com/v1/talent/{talent_id}',headers=headers;
)data = response.json()print(data)`;
              }
              responseExamples={success: `{"data": {"id": "talent_abc123";
    "display_name": "Jane Smith";
    "headline": "Senior Frontend Developer";
    "bio": "10+ years of experience in frontend development...";
    "skills": ["react", "typescript", "javascript", "css", "html"];
    "availability": "available";
    "average_rating": 4.8;
    "rating_count": 15;
    "portfolio": [;
      {"id": "proj_123";
        "title": "E-commerce Platform";
        "description": "Built a modern e-commerce platform using React...";
        "technologies": ["react", "redux", "node.js"];
        "image_url": "https://example.com/portfolio/123.jpg";
    ];
  }
}`;
              }
            />;
          </TabsContent>;
          <TabsContent value="quotes" className="space-y-6">;
            <EndpointSection;
              method="POST";
              endpoint="/api/quotes";
              description="Create a quote request for a talent.";
              note="Requires quotes:write scope";
              params={[;
              ]}
              codeExamples={curl: `curl -X POST "https://api.ziontechgroup.com/v1/quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json" \\;
  -d '{"talent_id": "talent_abc123";
    "project_name": "E-commerce Website Redesign";
    "project_summary": "Redesign our outdated e-commerce website with modern UI";
    "project_description": "Our current website is 5 years old and needs a complete overhaul...";
    "timeline": "2-3 months";
    "budget_min": 8000;
    "budget_max": 12000;
    "requester_name": "John Doe";
    "requester_email": "john@example.com";
  }'`;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {method: 'POST';
  headers: {}),const data = await response.json(),logInfo(data),`,python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}payload = {'talent_id': 'talent_abc123project_name': 'E-commerce Website Redesignproject_summary': 'Redesign our outdated e-commerce website with modern UIproject_description': 'Our current website is 5 years old and needs a complete overhaul...timeline': '2-3 monthsbudget_min': 8000,'budget_max': 12000,'requester_name': 'John Doerequester_email': 'john@example.com';
}response = requests.post('https://api.ziontechgroup.com/v1/quotes',headers=headers,data=json.dumps(payload))data = response.json()print(data)`;
              }
              responseExamples={success: `{"data": {"id": "quote_def456";
    "talent_id": "talent_abc123";
    "requester_id": "user_xyz789";
    "project_name": "E-commerce Website Redesign";
    "project_summary": "Redesign our outdated e-commerce website with modern UI";
    "project_description": "Our current website is 5 years old and needs a complete overhaul...";
    "timeline": "2-3 months";
    "budget_min": 8000;
    "budget_max": 12000;
    "budget_display": "$8,000 - $12,000";
    "requester_name": "John Doe";
    "requester_email": "john@example.com";
    "status": "new";
    "created_at": "2025-05-16T14:30:15Z";
  }
            <EndpointSection;
              method="GET";
              endpoint="/api/quotes";
              description="List quote requests that you've created.";
              note="";
              params={[;
              ]}
              codeExamples={curl: `curl -X GET "https://api.ziontechgroup.com/v1/quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`;
                javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/quotes', {method: 'GET';
  headers: { name: "page", type: "integer", description: "Page number for pagination (default: 1)" },{ name: "limit", type: "integer", description: "Number of results per page (default: 20, max: 100)" },{ name: "status", type: "string", description: "Filter by status (new, viewed, replied, archived)" }]}
              codeExamples = {curl: `curl -X GET "https://api && api.ziontechgroup.com/v1/quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content-Type: application/json"`,javascript: `const response = await fetch('https://api && api.ziontechgroup.com/v1/quotes', {name: 'limit',type: 'integer',description:;
                    'Number of results per page (default: 20, max: 100)'},{name: 'status',type: 'string',description:;
                    'Filter by status (new, viewed, replied, archived)'}]}
              code_examples = {curl: `curl -X GET "https://api.ziontechgroup.com / v1 / quotes" \\;
  -H "Authorization: Bearer YOUR_API_KEY" \\;
  -H "Content - Type: application / json"`,javascript: `const response = await fetch ('https://api.ziontechgroup.com / v1 / quotes', {method: 'GET',headers: {const data = await response && response.json()logInfo(data)`,'Authorization': 'Bearer YOUR_API_KEY','Content-Type': 'application/json';
  }
})const data = await response.json()logInfo(data)`,python: `import requests;
headers = {'Authorization': 'Bearer YOUR_API_KEY';
    'Content-Type': 'application/json';
response = requests.get('https://api.ziontechgroup.com/v1/quotes';
    headers=headers;
)data = response.json()'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
  }
}),const data = await response.json(),logInfo(data),`,python: `import requests;response = requests && requests.get('https://api && api.ziontechgroup.com/v1/quotes',headers=headers;
)data = response && response.json()print(data)`,print(data)`,'Authorization': 'Bearer YOUR_API_KEY','Content - Type': 'application / json';
  }
})const data = await response.json ()log_info (data)`,python: `import requests;headers = {'Authorization': 'Bearer YOUR_API_KEYContent-Type': 'application/json';
}response = requests.get('https: //api.ziontechgroup.com/v1/quotes',headers=headers;
)data = response.json()print(data)`;}responseExamples={success: `{"data": [;
    {response_examples={success: `{"data": [;
    {],"meta": {"total": 5;
    "page": 1;
    "limit": 20;
      "id": "quote_def456","talent_id": "talent_abc123","project_name": "E - commerce Website Redesign","project_summary": "Redesign our outdated e - commerce website with modern UI","budget_display": "$8, 000 - $12, 000","status": "new","created_at": "2025 - 05 - 16T14:30:15Z","viewed_at": null,"replied_at": null;
    },// More quotes...;
  ],"meta": {"total": 5,"page": 1,"limit": 20;}`;
  }`}
            />;
          </TabsContent>;
          <TabsContent value='webhooks' className='space-y-6'>;
            <div className='prose prose-invert max-w-none'>;
              <h3 className='text-lg font-semibold mb-2'>Webhook Events</h3>;
              <p className='text-zinc-400 mb-4'>;
                The Zion API can send webhook notifications when certain events;
                occur in your account. You can configure webhooks in the;
                Webhooks tab of the Developer Dashboard.;
              </p>;
              <h4 className='text-md font-semibold mt-6 mb-2'>;
                Authentication;
              </h4>;
              <p className='text-zinc-400 mb-4'>;
                When you create a webhook, you can optionally provide a secret;
                key. If a secret is provided, each webhook request will include;
                a signature in the;
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                  X-Zion-Signature;
                </code>{' '}
                header. This signature is an HMAC SHA-256 hash of the request;
                body using your webhook secret as the key.;
              </p>;
              <CodeBlock;
                code={`import crypto from 'crypto';
// Function to verify webhook signature;
function verifyWebhookSignature() {const hmac = crypto.createHmac('sha256', secret)const expectedSignature = hmac.update(payload).digest('hex')}}`;
              }
            />;
          </TabsContent>;
          <TabsContent value="webhooks" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Webhook Events</h3>;
              <p className="text-zinc-400 mb-4">;
                The Zion API can send webhook notifications when certain events occur in your account.;
                You can configure webhooks in the Webhooks tab of the Developer Dashboard.;
              </p>;
              <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4>;
              <p className="text-zinc-400 mb-4">;
                When you create a webhook, you can optionally provide a secret key.;
                If a secret is provided, each webhook request will include a signature in the;
                <code className="bg-zinc-800 px-1 py-0.5 rounded">X-Zion-Signature</code> header.;
                This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key.;
              </p>;
              <CodeBlock;
                code={`import crypto from 'crypto',// Function to verify webhook signature;
function verifyWebhookSignature() {const hmac = crypto.createHmac('sha256', secret),const expectedSignature = hmac.update(payload).digest('hex'),return crypto.timingSafeEqual(Buffer.from(signature)Buffer.from(expectedSignature))}// Example usage in Express.js;
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {const signature = req.headers['x-zion-signature'],const payload = req.body.toString(),const webhookSecret = process.env.WEBHOOK_SECRET,if (!verifyWebhookSignature(payload, signature, webhookSecret)) {return res.status(401).send('Invalid signature')}// Process the webhook event;
  const event = JSON.parse(payload),logInfo('Received valid webhook:', { data: event }),// Respond to acknowledge receipt;
  res.status(200).send('Webhook received')}),`}
                language="javascript";
                showLineNumbers={true}
              />;
              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>;
              <table className="w-full border-collapse mt-2">;
                <thead>;
                  <tr className='border-b border-zinc-800'>;
                    <th className='py-2 px-4 text-left'>Event Type</th>;
                    <th className='py-2 px-4 text-left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      new_application;
                    </td>;
                    <td className='py-2 px-4'>;
                      When a talent applies to one of your jobs;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      quote_received;
                    </td>;
                    <td className='py-2 px-4'>;
                      When you receive a quote from talent;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      milestone_approved;
                    </td>;
                    <td className='py-2 px-4'>;
                      When a project milestone is approved;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      talent_hired;
                    </td>;
                    <td className='py-2 px-4'>;
                      When you hire talent for a project;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;
            />;
          </TabsContent>;<TabsContent value='webhooks' className='space-y-6'>;
            <div className='prose prose-invert max-w-none'>;
              <h3 className='text-lg font-semibold mb-2'>Webhook Events</h3>;
              <p className='text-zinc-400 mb-4'>;
                The Zion API can send webhook notifications when certain events;
                occur in your account. You can configure webhooks in the;
                Webhooks tab of the Developer Dashboard.;
              </p>;<h4 className='text-md font-semibold mt-6 mb-2'>;
                Authentication;
              </h4>;
              <p className='text-zinc-400 mb-4'>;
                When you create a webhook, you can optionally provide a secret;
                key. If a secret is provided, each webhook request will include;
                a signature in the;
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                  X-Zion-Signature;
                </code>{' '}
                header. This signature is an HMAC SHA-256 hash of the request;
                body using your webhook secret as the key.;
              </p>;<CodeBlock;
                code={`import crypto from 'crypto';
// Function to verify webhook signature;
function verifyWebhookSignature(): any (payload, signature, secret) {const hmac = crypto && crypto.createHmac('sha256', secret)const expectedSignature = hmac && hmac.update(payload).digest('hex')return crypto && crypto.timingSafeEqual(Buffer && Buffer.from(signature),Buffer && Buffer.from(expectedSignature))// Example usage in Express && Express.js;
app && app.post('/webhook', express && express.raw({type: 'application/json'}), (req, res) => {const signature = req && req.headers['x-zion-signature'];
  const payload = req && req.body.toString()const webhookSecret  = process && process.env.WEBHOOK_SECRET;if (!verifyWebhookSignature(payload, signature, webhookSecret)) {return res && res.status(401).send('Invalid signature')}// Process the webhook event;
  const event = JSON && JSON.parse(payload)logInfo('Received valid webhook:', { data: event })// Respond to acknowledge receipt;
  res && res.status(200).send('Webhook received')})`}
                language='javascript';
                showLineNumbers={true}              />;<h4 className='text-md font-semibold mt-6 mb-2'>Event Types</h4>;
              <table className='w-full border-collapse mt-2'>;
                <thead>;
                  <tr className='border-b border-zinc-800'>;
                    <th className='py-2 px-4 text-left'>Event Type</th>;
                    <th className='py-2 px-4 text-left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      new_application;
                    </td>;
                    <td className='py-2 px-4'>;
                      When a talent applies to one of your jobs;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      quote_received;
                    </td>;
                    <td className='py-2 px-4'>;
                      When you receive a quote from talent;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      milestone_approved;
                    </td>;
                    <td className='py-2 px-4'>;
                      When a project milestone is approved;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4 font-mono text-sm'>;
                      talent_hired;
                    </td>;
                    <td className='py-2 px-4'>;
                      When you hire talent for a project;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;<h4 className='text-md font-semibold mt-6 mb-2'>;
                Sample Payloads;
              </h4>;
              <p className='text-zinc-400 mb-2'>;Here's an example of a{' '}
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                  new_application;
                </code>{' '}webhook payload:;
              </p>;<CodeBlock;
                code = {`{"event_type": "new_application";
  "event_id": "evt_abc123def456";
  "timestamp": "2025-05-16T15:30:00Z";
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>;
              <p className="text-zinc-400 mb-2">;
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:;
              </p>;



=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <CodeBlock
                code = {`{
  "event_type": "new_application"
  "event_id": "evt_abc123def456"
  "timestamp": "2025-05-16T15:30:00Z"

              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>
              <p className="text-zinc-400 mb-2">
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:
              </p>
              
              <CodeBlock
                code={`{
  "event_type": "new_application",
  "event_id": "evt_abc123def456",
  "timestamp": "2025-05-16T15:30:00Z",
  "data": {
    "application_id": "app_123456",
    "job_id": "job_abc123",
    "talent_id": "talent_xyz789",
    "applied_at": "2025-05-16T15:28:30Z",
    "status": "new",
    "match_score": 85
  }
}`}
<<<<<<< HEAD


=======
<<<<<<< HEAD
                language="json"
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                language=json
>>>>>>> origin/resolved-merge-conflicts
              <CodeBlock;
                code={`{"event_type": "new_application","event_id": "evt_abc123def456","timestamp": "2025-05-16T15:30:00Z","data": {"application_id": "app_123456";
    "job_id": "job_abc123";
    "talent_id": "talent_xyz789";
    "applied_at": "2025-05-16T15:28:30Z";
    "status": "new";
    "match_score": 85;
  }
}`}language="json";
                showLineNumbers={true}
              />;
            </div>;
          </TabsContent>;
          <TabsContent value="errors" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;
              <p className="text-zinc-400 mb-4">;
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.;
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the;
                provided information, and codes in the 5xx range indicate an error with our servers.;
              </p>;
              <table className="w-full border-collapse mt-4">;
                <thead>;
                  <tr className='border-b border-zinc-800'>;
                    <th className='py-2 px-4 text-left'>Status Code</th>;
                    <th className='py-2 px-4 text-left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                        200 OK;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>The request was successful.</td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                        201 Created;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      The resource was successfully created.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                        400 Bad Request;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      The request was invalid or cannot be otherwise served.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                        401 Unauthorized;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      Authentication credentials were missing or invalid.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                        403 Forbidden;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      The request is understood, but it has been refused or;
                      access is not allowed.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                        404 Not Found;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      The requested resource does not exist.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                        422 Unprocessable Entity;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      The request was well-formed but was unable to be followed;
                      due to semantic errors.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                        429 Too Many Requests;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      The request was rejected due to rate limiting.;
                    </td>;
                  </tr>;
                  <tr className='border-b border-zinc-800'>;
                    <td className='py-2 px-4'>;
                      <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                        500 Internal Server Error;
                      </code>;
                    </td>;
                    <td className='py-2 px-4'>;
                      Something went wrong on our end.;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;
                showLineNumbers={true}              />;
            </div>;
          </TabsContent>;<TabsContent value='errors' className='space-y-6'>;
            <div className='prose prose-invert max-w-none'>;
              <h3 className='text-lg font-semibold mb-2'>Error Responses</h3>;
              <p className='text-zinc-400 mb-4'>;
            />;
          </TabsContent>;
          <TabsContent value='webhooks' className='space - y-6'>;
            <div className='prose prose - invert max - w-none'>;
              <h3 className='text - lg font - semibold mb - 2'>Webhook Events</h3>;
              <p className='text - zinc - 400 mb - 4'>;
                The Zion API can send webhook notifications when certain events;
                occur in your account. You can configure webhooks in the;
                Webhooks tab of the Developer Dashboard.;
              </p>;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>;
                Authentication;
              </h4>;
              <p className='text - zinc - 400 mb - 4'>;
                When you create a webhook, you can optionally provide a secret;
                key. If a secret is provided, each webhook request will include;
                a signature in the;
                <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                  X - Zion - Signature;
                </code>{' '}
                header. This signature is an HMAC SHA - 256 hash of the request;
                body using your webhook secret as the key.;
              </p>;
              <CodeBlock;
                code={`import crypto from 'crypto';
// Function to verify webhook signature;
/**;
 * verifyWebhookSignature - Function description;
 */;
function verifyWebhookSignature() {const hmac = crypto.create_hmac ('sha256', secret)const expected_signature = hmac.update (payload).digest ('hex')return crypto.timingSafeEqual (Buffer.from (signature),Buffer.from (expected_signature))// Example usage in Express.js;
app.post ('/webhook', express.raw ({type: 'application / json'}), (req, res) => {const signature = req.headers['x - zion - signature'];
  const payload = req.body.to_string ()const webhook_secret = process.env.WEBHOOK_SECRET;
  if () {) {$2;
}
    return res.status (401).send ('Invalid signature')}
  // Process the webhook event;
  const event = JSON.parse (payload)log_info ('Received valid webhook:', { data: event })// Respond to acknowledge receipt;
  res.status (200).send ('Webhook received')})`}
                language='javascript';
                showLineNumbers={true}              />;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>Event Types</h4>;
              <table className='w - full border - collapse mt - 2'>;
                <thead>;
                  <tr className='border - b border - zinc - 800'>;
                    <th className='py - 2 px - 4 text - left'>Event Type</th>;
                    <th className='py - 2 px - 4 text - left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      new_application;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When a talent applies to one of your jobs;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      quote_received;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When you receive a quote from talent;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      milestone_approved;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When a project milestone is approved;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4 font - mono text - sm'>;
                      talent_hired;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      When you hire talent for a project;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>;
                Sample Payloads;
              </h4>;
              <p className='text - zinc - 400 mb - 2'>;
                Here's an example of a{' '}
                <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                  new_application;
                </code>{' '}
                webhook payload:;
              </p>;
              <CodeBlock;
                code = {`{"event_type": "new_application","event_id": "evt_abc123def456","timestamp": "2025 - 05 - 16T15:30:00Z","data": {"application_id": "app_123456","job_id": "job_abc123","talent_id": "talent_xyz789","applied_at": "2025 - 05 - 16T15:28:30Z","status": "new","match_score": 85;
   }
}`}
                language='json';
                showLineNumbers={true}              />;
            </div>;
          </TabsContent>;
          <TabsContent value='errors' className='space - y-6'>;
            <div className='prose prose - invert max - w-none'>;
              <h3 className='text - lg font - semibold mb - 2'>Error Responses</h3>;
              <p className='text - zinc - 400 mb - 4'>;The Zion API uses conventional HTTP status codes to indicate the;
                success or failure of an API request. In general, codes in the;
                2xx range indicate success, codes in the 4xx range indicate an;
                error with the provided information, and codes in the 5xx range;
                indicate an error with our servers.;
              </p>;<table className='w - full border - collapse mt - 4'>;
                <thead>;
                  <tr className='border - b border - zinc - 800'>;
                    <th className='py - 2 px - 4 text - left'>Status Code</th>;
                    <th className='py - 2 px - 4 text - left'>Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        200 OK;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>The request was successful.</td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        201 Created;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The resource was successfully created.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        400 Bad Request;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The request was invalid or cannot be otherwise served.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        401 Unauthorized;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      Authentication credentials were missing or invalid.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        403 Forbidden;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;The request is understood, but it has been refused or;
                      access is not allowed.;
                    </td>;
                  </tr>;<tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        404 Not Found;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The requested resource does not exist.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        422 Unprocessable Entity;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The request was well - formed but was unable to be followed;
                      due to semantic errors.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        429 Too Many Requests;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;
                      The request was rejected due to rate limiting.;
                    </td>;
                  </tr>;
                  <tr className='border - b border - zinc - 800'>;
                    <td className='py - 2 px - 4'>;
                      <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                        500 Internal Server Error;
                      </code>;
                    </td>;
                    <td className='py - 2 px - 4'>;Something went wrong on our end.;
                    </td>;
                  </tr>;
                </tbody>;
              </table>;


              
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                language="json"

                showLineNumbers={true}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="errors" className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>
              <p className="text-zinc-400 mb-4">
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the
                provided information, and codes in the 5xx range indicate an error with our servers.
              </p>
              
              <table className="w-full border-collapse mt-4">

                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-2 px-4 text-left">Status Code</th>
                    <th className="py-2 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td>
                    <td className="py-2 px-4">The request was successful.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td>
                    <td className="py-2 px-4">The resource was successfully created.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td>
                    <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td>
                    <td className="py-2 px-4">Authentication credentials were missing or invalid.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td>
                    <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td>
                    <td className="py-2 px-4">The requested resource does not exist.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td>
                    <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td>
                    <td className="py-2 px-4">The request was rejected due to rate limiting.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td>
                    <td className="py-2 px-4">Something went wrong on our end.</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>
              <p className="text-zinc-400 mb-2">
                Error responses include a consistent JSON object with the following format:
              </p>

              <CodeBlock
                code={`{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": [
      {
<<<<<<< HEAD
=======
<<<<<<< HEAD
              </table>;<h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </table>;<h4 className=text-md font-semibold mt-6 mb-2>Error Response Format</h4>;
>>>>>>> origin/resolved-merge-conflicts
              <p className="text-zinc-400 mb-2">;
                Error responses include a consistent JSON object with the following format:;
              </p>;
              <CodeBlock;
                code = {`{"error": {"code": "invalid_request";
    "message": "The request was invalid";
    "details": [;
      {}
    ];
      ,}
    ]
  }
}`}
                language='json';
              />;
              <h4 className='text-md font-semibold mt-6 mb-2'>Rate Limiting</h4>;
              <p className='text-zinc-400 mb-4'>;
                The Zion API implements rate limiting to protect our;
                infrastructure and ensure fair usage. Rate limits are applied on;
                a per-API key basis. If you exceed the rate limits, you will;

                receive a{' '}
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                  429 Too Many Requests;
                </code>{' '}

                receive a{' '}
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                  429 Too Many Requests;
                </code>{' '}
                response.;
              </p>;
              <p className='text-zinc-400 mb-2'>;
                Rate limit information is included in the response headers:;
              </p>;
              <ul className='list-disc pl-6 space-y-1 text-zinc-400'>;
                <li>;
                  <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                    X-RateLimit-Limit;
                  </code>;
                  : Number of requests allowed in the time window;
                </li>;
                <li>;
                  <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                    X-RateLimit-Remaining;
                  </code>;
                  : Number of requests remaining in the current window;
                </li>;
                <li>;
                  <code className='bg-zinc-800 px-1 py-0.5 rounded'>;
                    X-RateLimit-Reset;
                  </code>;
                  : Unix timestamp when the rate limit resets;
                </li>;// Process the webhook event;
  const event = JSON.parse(payload),logInfo('Received valid webhook:', { data: event }),// Respond to acknowledge receipt;
  res.status(200).send('Webhook received')}),`}
                language="javascript";
                showLineNumbers={true}
              />;
              <h4 className="text-md font-semibold mt-6 mb-2">Event Types</h4>;
              <table className="w-full border-collapse mt-2">;
                <thead>;
                  <tr className="border-b border-zinc-800">;
                    <th className="py-2 px-4 text-left">Event Type</th>;
                    <th className="py-2 px-4 text-left">Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">new_application</td>;
                    <td className="py-2 px-4">When a talent applies to one of your jobs</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">quote_received</td>;
                    <td className="py-2 px-4">When you receive a quote from talent</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">milestone_approved</td>;
                    <td className="py-2 px-4">When a project milestone is approved</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4 font-mono text-sm">talent_hired</td>;
                    <td className="py-2 px-4">When you hire talent for a project</td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className="text-md font-semibold mt-6 mb-2">Sample Payloads</h4>;
              <p className="text-zinc-400 mb-2">;
                Here's an example of a <code className="bg-zinc-800 px-1 py-0.5 rounded">new_application</code> webhook payload:;
              </p>;
              <CodeBlock;
                code={`{"event_type": "new_application","event_id": "evt_abc123def456","timestamp": "2025-05-16T15:30:00Z","data": {"application_id": "app_123456","job_id": "job_abc123","talent_id": "talent_xyz789","applied_at": "2025-05-16T15:28:30Z","status": "new","match_score": 85;
  }
}`}
                language="json";
                showLineNumbers={true}
              />;
            </div>;
          </TabsContent>;
          <TabsContent value="errors" className="space-y-6">;
            <div className="prose prose-invert max-w-none">;
              <h3 className="text-lg font-semibold mb-2">Error Responses</h3>;
              <p className="text-zinc-400 mb-4">;
                The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request.;
                In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the;
                provided information, and codes in the 5xx range indicate an error with our servers.;
              </p>;
              <table className="w-full border-collapse mt-4">;
                <thead>;
                  <tr className="border-b border-zinc-800">;
                    <th className="py-2 px-4 text-left">Status Code</th>;
                    <th className="py-2 px-4 text-left">Description</th>;
                  </tr>;
                </thead>;
                <tbody>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td>;
                    <td className="py-2 px-4">The request was successful.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td>;
                    <td className="py-2 px-4">The resource was successfully created.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td>;
                    <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td>;
                    <td className="py-2 px-4">Authentication credentials were missing or invalid.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td>;
                    <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td>;
                    <td className="py-2 px-4">The requested resource does not exist.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td>;
                    <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td>;
                    <td className="py-2 px-4">The request was rejected due to rate limiting.</td>;
                  </tr>;
                  <tr className="border-b border-zinc-800">;
                    <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td>;
                    <td className="py-2 px-4">Something went wrong on our end.</td>;
                  </tr>;
                </tbody>;
              </table>;
              <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4>;
              <p className="text-zinc-400 mb-2">;
                Error responses include a consistent JSON object with the following format:;
              </p>;
              <CodeBlock;
                code={`{"error": {"code": "invalid_request","message": "The request was invalid","details": [;
      {"field": "project_name","message": "Project name is required";
      }
    ];
  }
}`}
                language="json";
              />;
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;
              <p className="text-zinc-400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive;
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.;
              </p>;
              <p className="text-zinc-400 mb-2">;
                Rate limit information is included in the response headers: </p>;
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;
              />;<h4 className='text-md font-semibold mt-6 mb-2'>Rate Limiting</h4>;
              <p className='text-zinc-400 mb-4'>;
                The Zion API implements rate limiting to protect our;
                infrastructure and ensure fair usage. Rate limits are applied on;
                a per-API key basis. If you exceed the rate limits, you will;receive a{' '}
                <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                  429 Too Many Requests;
                </code>{' '}</ul>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;
    </Card>;
  )}// Helper component for API endpoint documentation;
function EndpointSection() {response.;</p>;<p className='text-zinc-400 mb-2'>;
                Rate limit information is included in the response headers:;
              </p>;<ul className='list-disc pl-6 space-y-1 text-zinc-400'>;
                language="json"
              />
              
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>
              <p className="text-zinc-400 mb-4">
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive 
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.
              </p>
              
              <p className="text-zinc-400 mb-2">
                Rate limit information is included in the response headers: </p>
              
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>
<<<<<<< HEAD
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>
=======
                <li><code className=bg-zinc-800 px-1 py-0.5 rounded>X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>
=======

                receive a{' '}
                <code className='bg-zinc-800 px-1 py-0.5 rounded'>
                  429 Too Many Requests
                </code>{' '}

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </ul>

            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )

}

// Helper component for API endpoint documentation
function EndpointSection({
  method,
  endpoint,
  description,
  note,
  params = [],
  codeExamples,
  responseExamples
}: EndpointSectionProps) {

              </p>;

              <p className='text-zinc-400 mb-2'>;
                Rate limit information is included in the response headers:;
              </p>;

              <ul className='list-disc pl-6 space-y-1 text-zinc-400'>;
                <li>;
                  <code className='bg-zinc-800 px-1 py-0 && 0.5 rounded'>;
                    X-RateLimit-Limit;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>;
                Error Response Format;
              </h4>;
              <p className='text - zinc - 400 mb - 2'>;
                Error responses include a consistent JSON object with the;
                following format:;
              </p>;
              <CodeBlock;
<<<<<<< HEAD


=======
<<<<<<< HEAD
                code = {`{"error": {"code": "invalid_request","message": "The request was invalid","details": [;
      {"field": "project_name","message": "Project name is required";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                code = {`{"error": {"code": "invalid_request","message": "The request was invalid","details": [;
      {"field": "project_name","message": "Project name is required";
                code = {`{"error": {code: "invalid_request",message: "The request was invalid",details: [;
      {"field": project_name,"message": Project name is required;
>>>>>>> origin/resolved-merge-conflicts
       }
    ];
  }
}`}
                language='json';const [activeTab, setActiveTab] = useState('curl')return (<div className='border border-zinc-800 rounded-md'>;
      <div className='p-4'>;
        <div className='flex items-center'>;
          <Badge;
            variant='outline';
            className={method === 'GET';
                ? 'border-green-500 text-green-400 font-mono';
                : method === 'POST';
                  ? 'border-blue-500 text-blue-400 font-mono';
                  : method === 'PUT';
                    ? 'border-yellow-500 text-yellow-400 font-mono';
                    : 'border-red-500 text-red-400 font-mono';
            }          >;
            {method}
          </Badge>;
          <span className='ml-2 font-mono text-sm text-white'>{endpoint}</span>;
          {note && (<Badge className='ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800'>;
  const [activeTab, setActiveTab] = useState("curl"),return (<div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
          <Badge;
            variant="outline";
            className={method === 'GET';
                ? "border-green-500 text-green-400 font-mono";
                : method === 'POST';
                ? "border-blue-500 text-blue-400 font-mono";
                : method === 'PUT';
                ? "border-yellow-500 text-yellow-400 font-mono";
                : "border-red-500 text-red-400 font-mono";
                language="json";
              />;
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;
              <p className="text-zinc-400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive;
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.;
              </p>;
              <p className="text-zinc-400 mb-2">;
                Rate limit information is included in the response headers: </p>;
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li>;/>;
              <h4 className='text - md font - semibold mt - 6 mb - 2'>Rate Limiting</h4>;
              <p className='text - zinc - 400 mb - 4'>;
                The Zion API implements rate limiting to protect our;
                infrastructure and ensure fair usage. Rate limits are applied on;
                a per - API key basis. If you exceed the rate limits, you will;
                receive a{' '}
                <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                  429 Too Many Requests;
                </code>{' '}
                response.;
              </p>;
              <p className='text - zinc - 400 mb - 2'>;
                Rate limit information is included in the response headers:;
              </p>;
              <ul className='list - disc pl - 6 space - y-1 text - zinc - 400'>;
                <li>;
                  <code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Limit;</code>;
                  : Number of requests allowed in the time window;
                </li>;
                <li>;<code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Remaining;</code>;
                  : Number of requests remaining in the current window;
                </li>;
                <li>;<code className='bg - zinc - 800 px - 1 py - 0.5 rounded'>;
                    X - RateLimit - Reset;</code>;
                  : Unix timestamp when the rate limit resets;
                </li>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                code = {`{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": [;
      {
        "field": "project_name",
        "message": "Project name is required";
      , }
    ];
  }
}`}
                language='json';

  return (
    <div className='border border-zinc-800 rounded-md'>
      <div className='p-4'>
        <div className='flex items-center'>
          <Badge
            variant='outline'
            className={
              method === 'GET'
                ? 'border-green-500 text-green-400 font-mono'
                : method === 'POST'
                  ? 'border-blue-500 text-blue-400 font-mono'
                  : method === 'PUT'
                    ? 'border-yellow-500 text-yellow-400 font-mono'
                    : 'border-red-500 text-red-400 font-mono'
            }          >
            {method}
          </Badge>
          <span className='ml-2 font-mono text-sm text-white'>{endpoint}</span>
          {note && (
            <Badge className='ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800'>
  const [activeTab, setActiveTab] = useState("curl"),
  
  return (
    <div className="border border-zinc-800 rounded-md">
      <div className="p-4">
        <div className="flex items-center">
          <Badge 
            variant="outline" 
            className={
              method === 'GET' 
                ? "border-green-500 text-green-400 font-mono" 
                : method === 'POST' 
                ? "border-blue-500 text-blue-400 font-mono"
                : method === 'PUT'
                ? "border-yellow-500 text-yellow-400 font-mono"
                : "border-red-500 text-red-400 font-mono"
                language="json";

              />;
              <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4>;
              <p className="text-zinc-400 mb-4">;
                The Zion API implements rate limiting to protect our infrastructure and ensure fair usage.;
                Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive;
                a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response.;
              </p>;
              <p className="text-zinc-400 mb-2">;
                Rate limit information is included in the response headers: </p>;
              <ul className="list-disc pl-6 space-y-1 text-zinc-400">;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li>;
                <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li>;

              </ul>;

            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;

    </Card>;
  );
}
;
// Helper component for API endpoint documentation;
function EndpointSection({;
  method,;
  endpoint,;
  description,;
  note,;
  params = [],;
  codeExamples;
  responseExamples;
}: EndpointSectionProps) {;
  const [activeTab, setActiveTab] = useState("curl");
  return (;
    <div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
          <Badge;
            variant="outline";
            className={;
              method === 'GET';
                ? "border-green-500 text-green-400 font-mono";
                : method === 'POST';
                ? "border-blue-500 text-blue-400 font-mono";
                : method === 'PUT';
                ? "border-yellow-500 text-yellow-400 font-mono";
                : "border-red-500 text-red-400 font-mono";
            }
          >;
            {method}
          </Badge>;
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;
          {note && (;
            <Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;

              {note}
            </Badge>
          )}
        </div>

        <p className="mt-2 text-zinc-400">{description}</p>
      </div>

      {params.length > 0 && (
        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Parameters</h4>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-zinc-800 text-sm">
                <th className="pb-2">Name</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Description</th>
              </tr>
            </thead>
            <tbody>

              {params.map((param, index) => (

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <tr
                  key={index}
                  className={
                    index < params && params.length - 1 ? 'border-b border-zinc-800' : ''
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </li>;</ul>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </CardContent>;</Card>;
  )}// Helper component for API endpoint documentation;
function EndpointSection() {const [activeTab, setActiveTab] = useState("curl")return (<div className="border border-zinc-800 rounded-md">;
      <div className="p-4">;
        <div className="flex items-center">;
          <Badge;
            variant="outline";
            className={method === 'GET';
                ? "border-green-500 text-green-400 font-mono";
                : method === 'POST';
                ? "border-blue-500 text-blue-400 font-mono";
                : method === 'PUT';
                ? "border-yellow-500 text-yellow-400 font-mono";
                : "border-red-500 text-red-400 font-mono";
            }
          >;
            {method}
          </Badge>;
          <span className="ml-2 font-mono text-sm text-white">{endpoint}</span>;
          {note && (<Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800">;
              {note}
            </Badge>;
          )}

        </div>;
        <p className='mt-2 text-zinc-400'>{description}</p>;
      </div>;
              {note}
            </Badge>;
          )}</div>;
        <p className="mt-2 text-zinc-400">{description}</p>;
      </div>;
      {params.length > 0 && (<div className='border-t border-zinc-800 p-4'>;
          <h4 className='font-medium mb-2'>Parameters</h4>;
          <table className='w-full'>;
            <thead>;
              <tr className='text-left border-b border-zinc-800 text-sm'>;
                <th className='pb-2'>Name</th>;
                <th className='pb-2'>Type</th>;
                <th className='pb-2'>Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params && params.map((param, index) => (;


                <tr
              {params.map((param, index) => (</div>;<p className='mt-2 text-zinc-400'>{description}</p>;
      </div>;{params && params.length > 0 && (<div className='border-t border-zinc-800 p-4'>;
          <h4 className='font-medium mb-2'>Parameters</h4>;
          <table className='w-full'>;
            <thead>;
              <tr className='text-left border-b border-zinc-800 text-sm'>;
                <th className='pb-2'>Name</th>;
                <th className='pb-2'>Type</th>;
                <th className='pb-2'>Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params && params.map((param, index) => (<tr;
                  key={index}
<<<<<<< HEAD
                  className={index < params && params.length - 1 ? 'border-b border-zinc-800' : '';
=======
                  className={index < params && params.length - 1 ? border-b border-zinc-800 : '';
=======
                <tr
                  key={index}
                  className={
                    index < params && params.length - 1 ? 'border-b border-zinc-800' : ''
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  }>;
                  <td className='py-2 font-mono text-sm'>                    {param && param.name}
                    {param && param.required && <span className='text-red-500'>*</span>}
                  </td>;
                  <td className='py-2 text-sm text-zinc-400'>{param && param.type}</td>;
                  <td className='py-2 text-sm text-zinc-400'>;
                    {param && param.description}
                  </td>;
                </tr>;

                </tr>
<<<<<<< HEAD


=======
<<<<<<< HEAD
                </tr>;<tr key={index} className={index < params.length - 1 ? "border-b border-zinc-800" : ""}>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </tr>;<tr key={index} className={index < params.length - 1 ? "border-b border-zinc-800" : }>;
>>>>>>> origin/resolved-merge-conflicts
                  <td className="py-2 font-mono text-sm">;
                    {param.name}
                    {param.required && <span className="text-red-500">*</span>}
                  </td>;
                  <td className="py-2 text-sm text-zinc-400">{param.type}</td>;
                  <td className="py-2 text-sm text-zinc-400">{param.description}</td>;
                </tr>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
              ))}
            </tbody>;
          </table>;
        </div>;
      )}

      {codeExamples && (

        <div className='border-t border-zinc-800 p-4'>
          <div className='flex items-center mb-2'>
            <h4 className='font-medium'>Request Example</h4>
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>
              {Object.keys(codeExamples).map(lang => (                <button
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

      {codeExamples && (;
        <div className='border-t border-zinc-800 p-4'>;
          <div className='flex items-center mb-2'>;
            <h4 className='font-medium'>Request Example</h4>;
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>;
              {Object && Object.keys(codeExamples).map(lang => (                <button
                  key = {lang,}

      
      {codeExamples && (
        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center mb-2">
            <h4 className="font-medium">Request Example</h4>
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">
              {Object.keys(codeExamples).map((lang) => (
                <button
                  key={lang}

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  className={`px-3 py-1 text-xs font-medium ${
                    activeTab === lang
                      ? 'bg-zinc-700 text-white'
                      : 'text-zinc-400 hover:bg-zinc-800'

                  }`}
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

      )}{codeExamples && (<div className='border-t border-zinc-800 p-4'>;
          <div className='flex items-center mb-2'>;
            <h4 className='font-medium'>Request Example</h4>;
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>;
              {Object.keys(codeExamples).map(lang => (                <button;
      {codeExamples && (<div className='border-t border-zinc-800 p-4'>;
          <div className='flex items-center mb-2'>;
            <h4 className='font-medium'>Request Example</h4>;
            <div className='ml-auto flex border border-zinc-700 rounded-md overflow-hidden'>;
              {Object && Object.keys(codeExamples).map(lang => (                <button;
                  key = {lang}{codeExamples && (<div className="border-t border-zinc-800 p-4">;
          <div className="flex items-center mb-2">;
            <h4 className="font-medium">Request Example</h4>;
            <div className="ml-auto flex border border-zinc-700 rounded-md overflow-hidden">;
              {Object.keys(codeExamples).map((lang) => (<button;
                  key={lang}className={`px-3 py-1 text-xs font-medium ${activeTab === lang;
                      ? 'bg-zinc-700 text-white';
                      : 'text-zinc-400 hover:bg-zinc-800';
                  }`}</Card>)// Helper component for API endpoint documentation;
/**;
 * EndpointSection - Function description;
 */;
function EndpointSection() {const [active_tab, setActiveTab] = useState ('curl')return (<div className='border border - zinc - 800 rounded - md'>;
      <div className='p - 4'>;
        <div className='flex items - center'>;
          <Badge;
            variant='outline';
            className={method === 'GET';
                ? 'border - green - 500 text - green - 400 font - mono';
                : method === 'POST';
                  ? 'border - blue - 500 text - blue - 400 font - mono';
                  : method === 'PUT';
                    ? 'border - yellow - 500 text - yellow - 400 font - mono';
                    : 'border - red - 500 text - red - 400 font - mono';
            }          >;
            {method}
          </Badge>;
          <span className='ml - 2 font - mono text - sm text - white'>{endpoint}</span>;
          {note && (<Badge className='ml - auto bg - amber - 800 text - amber - 200 hover:bg - amber - 800'>;
              {note}
            </Badge>)}
        </div>;
        <p className='mt - 2 text - zinc - 400'>{description}</p>;
      </div>;
      {params.length > 0 && (<div className='border - t border - zinc - 800 p - 4'>;
          <h4 className='font - medium mb - 2'>Parameters</h4>;
          <table className='w - full'>;
            <thead>;
              <tr className='text - left border - b border - zinc - 800 text - sm'>;
                <th className='pb - 2'>Name</th>;
                <th className='pb - 2'>Type</th>;
                <th className='pb - 2'>Description</th>;
              </tr>;
            </thead>;
            <tbody>;
              {params.map ((param, index) => (<tr;
                  key={index}
                  className={index < params.length - 1 ? 'border - b border - zinc - 800' : '';
                  }
                >;
                  <td className='py - 2 font - mono text - sm'>                    {param.name}
                    {param.required && <span className='text - red - 500'>*</span>}
                  </td>;
                  <td className='py - 2 text - sm text - zinc - 400'>{param.type}</td>;
                  <td className='py - 2 text - sm text - zinc - 400'>;
                    {param.description}
                  </td>;
                </tr>))}
            </tbody>;
          </table>;
        </div>)}
      {code_examples && (<div className='border - t border - zinc - 800 p - 4'>;
          <div className='flex items - center mb - 2'>;
            <h4 className='font - medium'>Request Example</h4>;
            <div className='ml - auto flex border border - zinc - 700 rounded - md overflow - hidden'>;
              {Object.keys (code_examples).map (lang => (                <button;
                  key = {lang }
                  className={`px - 3 py - 1 text - xs font - medium ${active_tab === lang;
                      ? 'bg - zinc - 700 text - white';
                      : 'text - zinc - 400 hover:bg - zinc - 800';
                  }`}
                  on_click = {(, ) => setActiveTab (lang) }>;
                  {lang === 'curl';
                    ? 'cURL';
                    : lang === 'javascript';
                      ? 'JavaScript';
                      : 'Python'}code={codeExamples[activeTab] || '// Code example not available'}
            language={activeTab === 'curl' ? 'bash' : activeTab}          />;
        </div>;
      )}{responseExamples && (<div className='border-t border-zinc-800 p-4'>;
          <h4 className='font-medium mb-2'>Response</h4>;
          <CodeBlock code={responseExamples && responseExamples.success} language='json' />        </div>;
      )}
    </div>;
  )}</button>))}
            </div>;
          </div>;
          <CodeBlock;
            code={code_examples[active_tab] || '// Code example not available'}
            language={active_tab === 'curl' ? 'bash' : active_tab}          />;
        </div>)}
      {response_examples && (<div className='border - t border - zinc - 800 p - 4'>;
          <h4 className='font - medium mb - 2'>Response</h4>;
          <CodeBlock code={response_examples.success} language='json' />        </div>)}
    </div>);
}
;
<<<<<<< HEAD
=======
    </div>);
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  onClick={() => setActiveTab(lang)}

                >
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>)}onClick={() => setActiveTab(lang)}
                >;
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>;
=======
                  {lang === "curl" ? "cURL" : lang === "javascript" ? "JavaScript" : "Python"}
                </button>
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
              ))}
            </div>
          </div>

          />
        </div>
      )}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>;
          </div>;
          <CodeBlock;
            code={codeExamples[activeTab] || "// Code example not available"}
            language={activeTab === "curl" ? "bash" : activeTab}/>;
        </div>;
      )}{responseExamples && (<div className='border-t border-zinc-800 p-4'>;
          <h4 className='font-medium mb-2'>Response</h4>;
          <CodeBlock code={responseExamples.success} language='json' />        </div>;
      )}
    </div>;
  )}
        <div className="border-t border-zinc-800 p-4">;
          <h4 className="font-medium mb-2">Response</h4>;
          <CodeBlock;
            code={responseExamples.success}
            language="json";
          />;
        </div>;
      )}
    </div>;
  )}{responseExamples && ()
        <div className='border-t border-zinc-800 p-4'>
          <h4 className='font-medium mb-2'>Response</h4>
          <CodeBlock code={responseExamples.success} language='json' />        </div>
      )}
    </div>
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        <div className="border-t border-zinc-800 p-4">
          <h4 className="font-medium mb-2">Response</h4>
          <CodeBlock
            code={responseExamples.success}
            language="json"
          />
        </div>
      )}