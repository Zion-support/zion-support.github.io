method
      headers: {

        Authorization: `Bearer ${apiKey}`,
        "Content-Type: application/json"},
      // Add timeout to prevent hanging

      try {
        options.body = JSON.stringify (JSON.parse (body));
      } catch {

    set_loading (true);
    set_response (null);

    try {
      const res = await fetch (url, options);
      const content_type = res.headers.get ('content - type);
      let response_text: string;
      if () {) {
  $2

}
        try {
          const json_data = await res.json ();
          response_text = JSON.stringify (json_data, null, 2);
        } catch {
          response_text = await res.text ();
        }
      } else {
        response_text = await res.text ();
      }

      // Format the response with status information;
      const status_info = `HTTP ${res.status} ${res.status_text}\n\n`;


}

import { useState } from 'react;
import { Input } from @/components/ui/input';
import { Textarea } from '@/components/ui/textarea;
import { Button } from @/components/ui/button';
import CodeBlock from './CodeBlock;



  name: string;
type: string;
required?: boolean ;
}interface ApiPlaygroundProps {
  method: string;
  path: string;
  params?: Param[];

export function ApiPlayground(): any ({
  method,
  path,
  params = []}: ApiPlaygroundProps) {
  const [apiKey, setApiKey] = useState('demo_key_123);
  const [paramValues, setParamValues] = useState<Record<string, string>>({});
  const [body, setBody] = useState({}');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
export function ApiPlayground({ method, path, params = [] }: ApiPlaygroundProps) {
  const [apiKey, setApiKey] = useState(demo_key_123"),
  const [paramValues, setParamValues] = useState<Record<string string>>({}),
  const [body, setBody] = useState("{}),
  const [response, setResponse] = useState<string | null>(null),
  const [loading, setLoading] = useState(false),
  const handleParamChange = (name: string, value: string) => {

    const options: RequestInit = {
      method,
      headers: {
        Authorization: `Bearer ${apiKey}`,

  return (

    <div className='space-y-4>;

      <Input
        value={apiKey}

        onChange={(e) => setApiKey(e.target.value)}
        placeholder=API Key"

      />
      {params.map(p => (
        <Input

          value={paramValues[p.name] || '}



      ))}
      {method !== GET" && method !== "DELETE && (

        <Textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}


      {response && <CodeBlock code={response} language="json" />}
    </div>
  )
}


;


export default ApiPlayground;

interface Param {