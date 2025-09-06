import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Code, 
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play,
  Book,
  Globe,
  Database,
  Server,
  Lock,
  Brain,
  Cloud
} from 'lucide-react';

const apiFeatures = [
  {
    name: 'AI Email Responder',
    method: 'POST',
    path: '/api/ai/email-responder',
    description: 'Generate intelligent email responses using AI',
    parameters: [
      { name: 'message', type: 'string', required: true, description: 'The email message to respond to' },
      { name: 'context', type: 'object', required: false, description: 'Additional context for the response' }
    ],
    response: {
      status: 200,
      data: {
        response: 'string',
        confidence: 'number',
        suggestions: 'array'
      }
    }
  },
  {
    name: 'Predictive Analytics',
    method: 'POST',
    path: '/api/analytics/predict',
    description: 'Get predictive insights from your data',
    parameters: [
      { name: 'data', type: 'array', required: true, description: 'Input data for prediction' },
      { name: 'model', type: 'string', required: true, description: 'Model type to use for prediction' }
    ],
    response: {
      status: 200,
      data: {
        predictions: 'array',
        confidence: 'number',
        accuracy: 'number'
      }
    }
  },
  {
    name: 'Content Generation',
    method: 'POST',
    path: '/api/ai/generate-content',
    description: 'Generate various types of content using AI',
    parameters: [
      { name: 'prompt', type: 'string', required: true, description: 'Content generation prompt' },
      { name: 'type', type: 'string', required: true, description: 'Type of content to generate' },
      { name: 'length', type: 'number', required: false, description: 'Desired content length' }
    ],
    response: {
      status: 200,
      data: {
        content: 'string',
        metadata: 'object'
      }
    }
  }
];

const apiEndpoints = [
  {
    title: 'Authentication API',
    description: 'Secure authentication and authorization endpoints',
    icon: Lock,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/auth'
  },
  {
    title: 'AI Services API',
    description: 'Access to all AI-powered services and models',
    icon: Brain,
    methods: ['POST', 'GET'],
    endpoint: '/api/ai'
  },
  {
    title: 'Data Analytics API',
    description: 'Real-time analytics and reporting endpoints',
    icon: BarChart3,
    methods: ['GET', 'POST'],
    endpoint: '/api/analytics'
  }
];

const codeExamples = [
  {
    language: 'JavaScript',
    code: `// AI Email Responder
const response = await fetch('/api/ai/email-responder', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    message: 'I need help with my account',
    context: { userId: '12345' }
  })
});

const data = await response.json();
console.log(data.response);`
  },
  {
    language: 'Python',
    code: `# Predictive Analytics
import requests

response = requests.post(
    'https://api.ziontechgroup.com/analytics/predict',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'data': [1, 2, 3, 4, 5],
        'model': 'linear_regression'
    }
)

predictions = response.json()
print(predictions['predictions'])`
  },
  {
    language: 'cURL',
    code: `# Content Generation
curl -X POST https://api.ziontechgroup.com/ai/generate-content \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write a blog post about AI trends",
    "type": "blog_post"
  }'`
  }
];

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              API <span className="text-blue-600">Documentation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
              Comprehensive API documentation for integrating with Zion Tech Group services. 
              Build powerful applications with our RESTful APIs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">API Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints for seamless integration with our services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apiEndpoints.map((endpoint, index) => {
              const IconComponent = endpoint.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{endpoint.title}</h3>
                      <p className="text-gray-600">{endpoint.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {endpoint.methods.map((method, methodIndex) => (
                      <span
                        key={methodIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          method === 'POST' ? 'bg-green-100 text-green-800' :
                          method === 'GET' ? 'bg-blue-100 text-blue-800' :
                          method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                  <code className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {endpoint.endpoint}
                  </code>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}