import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const apiServices = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling']
  },
  {
    title: 'GraphQL API',
    description: 'Flexible query language for APIs',
    icon: Code,
    features: ['Single Endpoint', 'Type Safety', 'Real-time Subscriptions', 'Introspection']
  },
  {
    title: 'WebSocket API',
    description: 'Real-time bidirectional communication',
    icon: Zap,
    features: ['Real-time Updates', 'Low Latency', 'Persistent Connection', 'Event-driven']
  },
  {
    title: 'Authentication API',
    description: 'Secure user authentication and authorization',
    icon: Lock,
    features: ['OAuth 2.0', 'JWT Tokens', 'Multi-factor Auth', 'Session Management']
  },
  {
    title: 'Data API',
    description: 'Access and manage your data',
    icon: Database,
    features: ['CRUD Operations', 'Data Validation', 'Query Optimization', 'Caching']
  },
  {
    title: 'Analytics API',
    description: 'Track and analyze usage patterns',
    icon: Server,
    features: ['Usage Metrics', 'Performance Data', 'Custom Events', 'Real-time Dashboards']
  }
];

const apiFeatures = [
  {
    title: "RESTful APIs",
    description: "Clean, intuitive REST API endpoints for easy integration",
    icon: Code,
    benefits: [
      "Standard HTTP methods",
      "JSON request/response format",
      "Comprehensive error handling",
      "Rate limiting and throttling"
    ]
  },
  {
    title: "Real-time Communication",
    description: "WebSocket and Server-Sent Events for live updates",
    icon: Zap,
    benefits: [
      "Instant data synchronization",
      "Low-latency communication",
      "Scalable connection management",
      "Automatic reconnection"
    ]
  },
  {
    title: "Security & Authentication",
    description: "Enterprise-grade security with multiple auth methods",
    icon: Shield,
    benefits: [
      "OAuth 2.0 and OpenID Connect",
      "JWT token management",
      "API key authentication",
      "Role-based access control"
    ]
  },
  {
    title: "Developer Experience",
    description: "Comprehensive documentation and developer tools",
    icon: Book,
    benefits: [
      "Interactive API documentation",
      "SDKs for multiple languages",
      "Code examples and tutorials",
      "Sandbox environment"
    ]
  }
];

export default function APIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>api | Zion Tech Group</title>
        <meta name="description" content="api - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">api</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default api;
