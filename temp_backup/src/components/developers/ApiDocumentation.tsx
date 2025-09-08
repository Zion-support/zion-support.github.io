/* eslint-disable */
 interface EndpointParam {;
  name: string;
type: string;
description: string;
note?: string;
params?: EndpointParam[];code_examples?: Record < string string>;
response_examples?: {success: string;}
}

export /**;
 * ApiDocumentation - Function description;
 */;
function ApiDocumentation() {return (<Card className="bg - zinc - 900 border - zinc - 800 text - white"  /> text - xl flex items - center"> <BookOpen className=" mr - 2"size= {20 ";}"
}/> API Documentation </CardTitle> <CardDescription className=" text - zinc - 400" /> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent /> <Alert className=" bg - blue - 900 / 30 border - blue - 800 mb - 6" /> <Terminal className=" h - 4 w - 4"/> <AlertDescription /> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs default_value=" jobs"className=" space - y-4" /> <TabsList className=" bg - zinc - 800 border - zinc - 700" /> <TabsTrigger value=" jobs" />Jobs</TabsTrigger> <TabsTrigger value=" talent" />Talent</TabsTrigger> <TabsTrigger value=" quotes" />Quotes</TabsTrigger> <TabsTrigger value=" webhooks" />Webhooks</TabsTrigger> <TabsTrigger value=" errors" />Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space - y-6" /> <EndpointSection headers = headers) data = response.json () print (data) `;"
}response_examples= {success: ` {";}"
  " data": [ {'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json';}"
import { useState } from "react",import { BookOpen, Terminal  } from 'lucide-react';"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",import { Alert, AlertDescription } from "@/components/ui/alert",import { Badge } from "@/components/ui/badge",import CodeBlock from "./CodeBlock",import { logInfo } from '@/utils/productionLogger',interface EndpointParam  {name: string,type: string,description: string,required?: boolean;
}
interface EndpointParam  {name: string,type: string,description: string,required?: boolean;}
}

interface EndpointSectionProps  {method: string,endpoint: string,description: string,note?: string,params?: EndpointParam[],codeExamples?: Record<string string />,responseExamples?: { success: string }
}

export function ApiDocumentation() {return (<Card className;}
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import { Card;
  CardContent;
  CardDescription;
  CardHeader;}
  CardTitle;}
 } from '@/components/ui/card';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { Badge  } from '@/components/ui/badge';
import CodeBlock from './CodeBlock';
import { logInfo  } from '@/utils/productionLogger';

interface EndpointParam  {name: string;
type: string;
description: string;}
required?: boolean;}
}

interface EndpointSectionProps {
  method: string;
endpoint: string;
description: string;
note?: string;
params?: EndpointParam[];
codeExamples?: Record<string string />;
responseExamples?: {success: string;}
}
}export function ApiDocumentation () {;
  return (<Card className="bg-zinc-900 border-zinc-800 text-white" > text-xl flex items-center"> <BookOpen className=" mr-2"size= {;""
  20 ";""
}/> API Documentation </CardTitle> <CardDescription className=" text-zinc-400"> Reference documentation for integrating with the Zion Marketplace API. </CardDescription> </CardHeader> <CardContent> <Alert className=" bg-blue-900/30 border-blue-800 mb-6"> <Terminal className=" h-4 w-4"/> <AlertDescription> Make sure to include your API key in all requests as a Bearer token in the Authorization header. </AlertDescription> </Alert> <Tabs defaultValue=" jobs"className=" space-y-4"> <TabsList className=" bg-zinc-800 border-zinc-700"> <TabsTrigger value=" jobs">Jobs</TabsTrigger> <TabsTrigger value=" talent">Talent</TabsTrigger> <TabsTrigger value=" quotes">Quotes</TabsTrigger> <TabsTrigger value=" webhooks">Webhooks</TabsTrigger> <TabsTrigger value=" errors">Errors</TabsTrigger> </TabsList> <TabsContent value=" jobs"className=" space-y-6"> <EndpointSection headers=headers) data = response.json () print (data) ` ;
}
}responseExamples= {;"
  {;""`
  success: ` {";""
  " data": [ {;`
}` ;
}`
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/jobs/\$ {;
  jobId ;`
}\`, {;
  method: 'GET';''
headers: {';''
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' ;
}
});
const data = await response.json ();'`
logInfo (data), `;''`
python: `import requests headers = {';''
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' ;''
}job id ';''
}';`
headers=headers) data = response.json () print (data) ` ;
}
}responseExamples= {;
  {;`
  success: ` {;
}'`
}` ;''
}';''
}/> <EndpointSection deadline: '2025-06-30T23:59:59Z' ;'
}) ;''
});';''
'deadline': '2025-06-30T23:59:59Z' ';''
}response = requests.post ('https: //api.ziontechgroup.com/v1/jobs';
headers=headers;`
data=json.dumps (payload) ) data = response.json () print (data) ` ;
}
}responseExamples= {;
  {;`
  success: ` {;
}"`
}` ;""
}";""`
}/> </TabsContent> <TabsContent value=" talent"className=" space-y-6"> <EndpointSection headers=headers) data = response.json () print (data) ` ;
}
}responseExamples= {;"
  {;""`
  success: ` {";""
  " data": [ {;`
}` ;
}`
}/> <EndpointSection const response = await fetch (\`https://api.ziontechgroup.com/v1/talent/\$ {;'
  talentId ;''`
}\`, {';''
  method: 'GET';''
headers: {';''
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' ;
}
});
const data = await response.json ();'`
logInfo (data), `;''`
python: `import requests headers = {';''
  'Authorization': 'Bearer YOUR API KEYContent-Type': 'application/json' ;''
}talent id ';''
}';`
headers=headers) data = response.json () print (data) ` ;
}
}responseExamples= {;
  {;`
  success: ` {;
  ] ;
}'"`
}` ;'"'"
}'";'"'"
}/> </TabsContent> <TabsContent value=" quotes"className=" space-y-6"> <EndpointSection response = requests.post ('https: //api.ziontechgroup.com/v1/quotes';
headers=headers;`
data=json.dumps (payload) ) data = response.json () print (data) ` ;
}
}responseExamples= {;
  {;`
  success: ` {;'`
}` ;''
}';''
}/> <EndpointSection response = requests.get ('https: //api.ziontechgroup.com/v1/quotes';`
headers=headers) data = response.json () print (data) ` ;
}
}responseExamples= {;"
  {;""`
  success: ` {";""
  " data": [ {;"`
}` ;""
}";""
}/> </TabsContent> <TabsContent value=" webhooks"className="space-y-6"> <div className="prose prose-invert max-w-none"> <h3 className="text-lg font-semibold mb-2">Webhook Events</h3> <p className="text-zinc-400 mb-4"> The Zion API can send webhook notifications when certain events occur in your account. You can configure webhooks in the Webhooks tab of the Developer Dashboard. </p> <h4 className="text-md font-semibold mt-6 mb-2">Authentication</h4> <p className="text-zinc-400 mb-4"> When you create a webhook, you can optionally provide a secret key. If a secret is provided, each webhook request will include a signature in the <code className="bg-zinc-800 px-1 py-0.5 rounded">X-Zion-Signature</code> header. This signature is an HMAC SHA-256 hash of the request body using your webhook secret as the key. </p> <CodeBlock //Respond to acknowledge receipt showLineNumbers= {;""
  true ";""
}>new application</code> webhook payload: </p> <CodeBlock /> </div> </TabsContent> <TabsContent value=" errors"className="space-y-6"> <div className="prose prose-invert max-w-none"> <h3 className="text-lg font-semibold mb-2">Error Responses</h3> <p className="text-zinc-400 mb-4"> The Zion API uses conventional HTTP status codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error with the provided information, and codes in the 5xx range indicate an error with our servers. </p> <table className="w-full border-collapse mt-4"> <thead> <tr className="border-b border-zinc-800"> <th className="py-2 px-4 text-left">Status Code</th> <th className="py-2 px-4 text-left">Description</th> </tr> </thead> <tbody> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">200 OK</code></td> <td className="py-2 px-4">The request was successful.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">201 Created</code></td> <td className="py-2 px-4">The resource was successfully created.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">400 Bad Request</code></td> <td className="py-2 px-4">The request was invalid or cannot be otherwise served.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">401 Unauthorized</code></td> <td className="py-2 px-4">Authentication credentials were missing or invalid.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">403 Forbidden</code></td> <td className="py-2 px-4">The request is understood, but it has been refused or access is not allowed.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">404 Not Found</code></td> <td className="py-2 px-4">The requested resource does not exist.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">422 Unprocessable Entity</code></td> <td className="py-2 px-4">The request was well-formed but was unable to be followed due to semantic errors.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code></td> <td className="py-2 px-4">The request was rejected due to rate limiting.</td> </tr> <tr className="border-b border-zinc-800"> <td className="py-2 px-4"><code className="bg-zinc-800 px-1 py-0.5 rounded">500 Internal Server Error</code></td> <td className="py-2 px-4">Something went wrong on our end.</td> </tr> </tbody> </table> <h4 className="text-md font-semibold mt-6 mb-2">Error Response Format</h4> <p className="text-zinc-400 mb-2"> Error responses include a consistent JSON object with the following format: </p> <CodeBlock ] ;"
}""`
}` ";"'"
}language=" json"/> <h4 className="text-md font-semibold mt-6 mb-2">Rate Limiting</h4> <p className="text-zinc-400 mb-4"> The Zion API implements rate limiting to protect our infrastructure and ensure fair usage. Rate limits are applied on a per-API key basis. If you exceed the rate limits, you will receive a <code className="bg-zinc-800 px-1 py-0.5 rounded">429 Too Many Requests</code> response. </p> <p className="text-zinc-400 mb-2"> Rate limit information is included in the response headers: </p> <ul className="list-disc pl-6 space-y-1 text-zinc-400"> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Limit</code>: Number of requests allowed in the time window</li> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: Number of requests remaining in the current window</li> <li><code className="bg-zinc-800 px-1 py-0.5 rounded">X-RateLimit-Reset</code>: Unix timestamp when the rate limit resets</li> </ul> </div> </TabsContent> </Tabs> </CardContent> </Card>) ";'"'"
}//Helper component for API endpoint documentation > <Badge variant=" outline"className= {'";'"'"
  method === 'GET' ? "border-green-500 text-green-400 font-mono": method === 'POST' ? " border-blue-500 text-blue-400 font-mono": method === 'PUT' > {;""
  method ";""
}</Badge> <span className="ml-2 font-mono text-sm text-white"> {;"
  endpoint ;""
}</span> {";""
  note && (<Badge className="ml-auto bg-amber-800 text-amber-200 hover:bg-amber-800"> {;"
  note ;""
}</Badge>) ";""
}</div> <p className="mt-2 text-zinc-400"> {;"
  description ;""
}</p> </div> {";""
  params.length > 0 && (<div className="border-t border-zinc-800 p-4"> <h4 className="font-medium mb-2">Parameters</h4> <table className="w-full"> <thead> <tr className="text-left border-b border-zinc-800 text-sm"> <th className="pb-2">Name</th> <th className="pb-2">Type</th> <th className="pb-2">Description</th> </tr> </thead> <tbody> </tr>) ) ;
}</tbody> </table> </div>) ;
}key= {;
  lang ;
}className= {;`
  `px-3 py-1 text-xs font-medium $ {;
  activeTab === lang </button>) ) ;
}</div> </div> <CodeBlock /> </div>) ;"
}<CodeBlock code= {;""
  responseExamples.success ";""
}language=" json" /> </div>) ;'"
}</div>) ;'"'"
}'"'"'"`