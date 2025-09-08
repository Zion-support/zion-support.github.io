import React from 'react';
import SEO from '../SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Code, BookOpen, Zap, Shield, Users, MessageSquare, Github, ExternalLink, Terminal, Webhook, Key, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function DeveloperPortal() {
    const apiFeatures = [
        {
            title: 'RESTful APIs',
            description: 'Clean, intuitive REST APIs for all major platform features',
            icon: Code,
            status: 'Stable',
            docs: '/api-docs'
        },
        {
            title: 'Webhooks',
            description: 'Real-time notifications for platform events and updates',
            icon: Webhook,
            status: 'Beta',
            docs: '/api-docs/webhooks'
        },
        {
            title: 'Authentication',
            description: 'Secure OAuth 2.0 and API key authentication',
            icon: Key,
            status: 'Stable',
            docs: '/api-docs/auth'
        },
        {
            title: 'SDKs & Libraries',
            description: 'Official SDKs for JavaScript, Python, and more',
            icon: Terminal,
            status: 'Stable',
            docs: '/api-docs/sdks'
        }
    ];
    const quickStartSteps = [
        {
            step: 1,
            title: 'Get API Keys',
            description: 'Sign up and generate your API keys from the dashboard',
            action: 'Get Started'
        },
        {
            step: 2,
            title: 'Read Documentation',
            description: 'Explore our comprehensive API documentation and guides',
            action: 'View Docs'
        },
        {
            step: 3,
            title: 'Test Endpoints',
            description: 'Use our interactive API playground to test endpoints',
            action: 'Try API'
        },
        {
            step: 4,
            title: 'Build & Deploy',
            description: 'Integrate our APIs into your applications',
            action: 'View Examples'
        }
    ];
    const resources = [
        {
            title: 'API Reference',
            description: 'Complete API endpoint documentation with examples',
            icon: BookOpen,
            href: '/api-docs',
            badge: 'Complete'
        },
        {
            title: 'Getting Started Guide',
            description: 'Step-by-step tutorial for new developers',
            icon: Zap,
            href: '/api-docs/getting-started',
            badge: 'Beginner'
        },
        {
            title: 'Code Samples',
            description: 'Ready-to-use code examples in multiple languages',
            icon: Code,
            href: '/api-docs/samples',
            badge: 'Examples'
        },
        {
            title: 'SDK Downloads',
            description: 'Official SDKs and client libraries',
            icon: Terminal,
            href: '/api-docs/sdks',
            badge: 'Download'
        },
        {
            title: 'Community Forum',
            description: 'Connect with other developers and get help',
            icon: Users,
            href: '/community',
            badge: 'Community'
        },
        {
            title: 'Support & Help',
            description: 'Technical support and troubleshooting guides',
            icon: MessageSquare,
            href: '/help',
            badge: 'Support'
        }
    ];
    return (<div className="min-h-screen bg-background">
      <SEOHead title="Developer Portal | Zion Tech Group" description="Build powerful applications with Zion Tech Group's comprehensive APIs, SDKs, and developer tools." keywords="developer portal, API, SDK, documentation, Zion Tech Group, developers" canonical="https://ziontechgroup.com/developers"/>









