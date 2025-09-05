import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Search, FileText, Database, Server, Shield, 
  Brain, Rocket, Globe, ArrowRight, Copy, Check,
  Download, Bookmark, Share2, Clock, User, Tag,
  Zap, Lock, Globe2, Cpu
} from 'lucide-react';
import Link from 'next/link';

const APIDocs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAPI, setSelectedAPI] = useState('all');
  const [copiedEndpoint, setCopiedEndpoint] = useState('');

  const apiCategories = [
    { id: 'all', name: 'All APIs', icon: <Code className=&quot;w-4 h-4&quot; /> },
    { id: 'ai', name: 'AI & ML', icon: <Brain className=&quot;w-4 h-4&quot; /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Cpu className=&quot;w-4 h-4&quot; /> },
    { id: 'space', name: 'Space Technology', icon: <Rocket className=&quot;w-4 h-4&quot; /> },
    { id: 'metaverse', name: 'Metaverse', icon: <Globe className=&quot;w-4 h-4&quot; /> },
    { id: 'security', name: 'Security', icon: <Shield className=&quot;w-4 h-4&quot; /> }
  ];

  const apis = [
    {
      name: 'AI Consciousness Platform',
      category: 'ai',
      description: 'Advanced AI consciousness and machine learning APIs',
      version: 'v2.1.0',
      status: 'Production',
      baseUrl: 'https://api.ziontechgroup.com/ai/v2',
      endpoints: [
        { method: 'POST', path: '/consciousness/analyze', description: 'Analyze consciousness level of AI models' },
        { method: 'GET', path: '/models', description: 'List available AI models' },
        { method: 'POST', path: '/training/start', description: 'Start AI model training' },
        { method: 'GET', path: '/training/status/{id}', description: 'Get training status' }
      ],
      icon: <Brain className=&quot;w-8 h-8&quot; />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Quantum Computing API',
      category: 'quantum',
      description: 'Quantum computing and quantum algorithm APIs',
      version: 'v1.8.0',
      status: 'Beta',
      baseUrl: 'https://api.ziontechgroup.com/quantum/v1',
      endpoints: [
        { method: 'POST', path: '/circuit/execute', description: 'Execute quantum circuit' },
        { method: 'GET', path: '/qubits/available', description: 'Get available qubits' },
        { method: 'POST', path: '/algorithm/run', description: 'Run quantum algorithm' },
        { method: 'GET', path: '/results/{id}', description: 'Get computation results' }
      ],
      icon: <Cpu className=&quot;w-8 h-8&quot; />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Space Resource Intelligence',
      category: 'space',
      description: 'Satellite data and space resource analysis APIs',
      version: 'v1.5.0',
      status: 'Production',
      baseUrl: 'https://api.ziontechgroup.com/space/v1',
      endpoints: [
        { method: 'GET', path: '/satellites', description: 'List active satellites' },
        { method: 'POST', path: '/analysis/request', description: 'Request space data analysis' },
        { method: 'GET', path: '/resources/near-earth', description: 'Get near-Earth resources' },
        { method: 'POST', path: '/mining/calculate', description: 'Calculate mining feasibility' }
      ],
      icon: <Rocket className=&quot;w-8 h-8&quot; />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Metaverse Development',
      category: 'metaverse',
      description: 'Virtual world creation and management APIs',
      version: 'v1.2.0',
      status: 'Alpha',
      baseUrl: 'https://api.ziontechgroup.com/metaverse/v1',
      endpoints: [
        { method: 'POST', path: '/worlds/create', description: 'Create new virtual world' },
        { method: 'GET', path: '/worlds/{id}', description: 'Get world details' },
        { method: 'PUT', path: '/worlds/{id}/update', description: 'Update world properties' },
        { method: 'POST', path: '/assets/upload', description: 'Upload 3D assets' }
      ],
      icon: <Globe className=&quot;w-8 h-8&quot; />,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Quantum Cybersecurity',
      category: 'security',
      description: 'Quantum-resistant security and encryption APIs',
      version: 'v1.0.0',
      status: 'Production',
      baseUrl: 'https://api.ziontechgroup.com/security/v1',
      endpoints: [
        { method: 'POST', path: '/encrypt', description: 'Encrypt data with quantum-resistant algorithm' },
        { method: 'POST', path: '/decrypt', description: 'Decrypt quantum-encrypted data' },
        { method: 'GET', path: '/keys/generate', description: 'Generate quantum-resistant keys' },
        { method: 'POST', path: '/verify', description: 'Verify quantum signatures' }
      ],
      icon: <Shield className=&quot;w-8 h-8&quot; />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const authenticationMethods = [
    {
      name: 'API Key',
      description: 'Simple API key authentication for basic access',
      example: 'Authorization: Bearer YOUR_API_KEY',
      security: 'Basic'
    },
    {
      name: 'OAuth 2.0',
      description: 'Full OAuth 2.0 flow for secure applications',
      example: 'Authorization: Bearer ACCESS_TOKEN',
      security: 'High'
    },
    {
      name: 'JWT',
      description: 'JSON Web Token authentication for stateless APIs',
      example: 'Authorization: Bearer JWT_TOKEN',
      security: 'High'
    }
  ];

  const rateLimits = [
    {
      tier: 'Free',
      requests: '1,000/month',
      burst: '10/minute',
      description: 'Basic access for development and testing'
    },
    {
      tier: 'Professional',
      requests: '100,000/month',
      burst: '100/minute',
      description: 'Production applications and businesses'
    },
    {
      tier: 'Enterprise',
      requests: 'Unlimited',
      burst: 'Custom',
      description: 'High-volume enterprise applications'
    }
  ];

  const codeExamples = [
    {
      language: 'Python',
      title: 'AI Consciousness Analysis',
      code: `import requests

url = &quot;https://api.ziontechgroup.com/ai/v2/consciousness/analyze&quot;
headers = {
    &quot;Authorization&quot;: &quot;Bearer YOUR_API_KEY&quot;,
    &quot;Content-Type&quot;: &quot;application/json&quot;
}

data = {
    &quot;model_id&quot;: &quot;gpt-4&quot;,
    &quot;text&quot;: &quot;Hello, how are you today?&quot;
}

response = requests.post(url, json=data, headers=headers)
result = response.json()
print(f&quot;Consciousness Level: {result['consciousness_score']}&quot;)`
    },
    {
      language: 'JavaScript',
      title: 'Quantum Circuit Execution',
      code: `const axios = require('axios');

const url = 'https://api.ziontechgroup.com/quantum/v1/circuit/execute';
const headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
};

const data = {
    qubits: 2,
    gates: ['H', 'CNOT', 'H'],
    measurements: [0, 1]
};

axios.post(url, data, { headers })
    .then(response => {
        // console.log('Result:', response.data.result);
    })
    .catch(error => {
        console.error('Error:', error.response.data);
    });`
    },
    {
      language: 'cURL',
      title: 'Space Resource Analysis',
      code: `curl -X POST &quot;https://api.ziontechgroup.com/space/v1/analysis/request&quot; \\
  -H &quot;Authorization: Bearer YOUR_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot; \\
  -d '{
    &quot;satellite_id&quot;: &quot;sat_001&quot;,
    &quot;coordinates&quot;: {
      &quot;lat&quot;: 40.7128,
      &quot;lng&quot;: -74.0060
    },
    &quot;analysis_type&quot;: &quot;mineral_detection&quot;
  }'`
    }
  ];

  const filteredAPIs = apis.filter(api => {
    if (selectedAPI === 'all') return true;
    return api.category === selectedAPI;
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(text);
    setTimeout(() => setCopiedEndpoint(''), 2000);
  };

export default function ApiDocs() {
	return (
		<div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
			<Head>
				<title>API Docs | Zion Tech Group</title>
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/api-docs&quot; />
			</Head>
			<div className=&quot;max-w-3xl mx-auto space-y-6&quot;>
				<h1 className=&quot;text-4xl md:text-5xl font-bold text-white&quot;>API Docs</h1>
				<p className=&quot;text-slate-300&quot;>See the <a className=&quot;text-cyan-400 underline&quot; href=&quot;/api-documentation&quot;>API Reference</Link> for full details. This page exists to support existing links.</p>
			</div>
		</div>
	);
}
