  pricing: {;
    starter: string;
    professional: string;
    enterprise: string;
    custom?: string;
    address: string;
  }
}
export const services: Service[] = [;
  // AI Services;
  {id: 'ai-code-assistant';
    name: 'ZionAI Code Assistant';
    category: 'AI Services';
    description: 'Advanced AI-powered code generation, review, and optimization platform with context-aware suggestions and multi-language support.';
    features: [;
      'Real-time code completion and suggestionsAutomated code review and optimizationMulti-language support (Python, JavaScript, Go, Rust)Security vulnerability detectionCode documentation generationIntegration with popular IDEsCustom model fine-tuning for enterprise codebases';
    ];
    pricing: {;
      starter: '$29/month';
      professional: '$99/month';
      enterprise: '$299/month';
      custom: 'Contact for enterprise pricing';
    }
    technologyStack: ['OpenAI GPT-4Claude 3PythonReactNode.jsPostgreSQL'];
    benefits: [;
      'Reduce development time by 40-60%Improve code quality and securityLower maintenance costsAccelerate team onboarding24/7 AI assistance';
    ];
    useCases: [;
      'Software development teamsStartups and scale-upsEnterprise developmentFreelance developersEducational institutions';
    ];
    status: 'active';
    priority: 1;
    demoUrl: 'https://ziontechgroup.com/demo/ai-code-assistant';
    documentationUrl: 'https://ziontechgroup.com/docs/ai-code-assistant';
    contactInfo: {email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  }
