import React from 'react';
<<<<<<< HEAD
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">CaseStudies</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
=======
import { motion  } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, DollarSign  } from 'lucide-react';
interface CaseStudy { "id": "string "title": string;
  "description": string "industry": string;
  "results": {;
    "metric": string "value": string;
    "icon": React.ReactNode;
    "}[];
  "technologies": "string[];
  "duration": string;
"}
;
const "caseStudies": "CaseStud y[] = [{ "id": '1'",;
    "title": 'AI-Powered Customer Service Automation',;
    "description": 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.',;
    "industry": 'E-commerce',;
    "results": "[;
      { "metric": 'Response Time'", "value": '85% faster', "icon": "<TrendingUp className="w-5 h-5"  /> "},;
      { "metric": 'Customer Satisfaction', "value": '+32%', "icon": "<CheckCircle className="w-5 h-5"  /> "},;
      { "metric": 'Cost Reduction', "value": '40%', "icon": "<DollarSign className="w-5 h-5"  /> "}
    ],;
    "technologies": "['OpenAI GPT-4'", 'LangChain', 'React', 'Node.js', 'PostgreSQL'],;
    "duration": '3 months';
  },;
  { "id": '2',;
    "title": 'Cloud-Native Data Platform Migration',;
    "description": 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.',;
    "industry": 'Financial Services',;
    "results": "[{ "metric": 'Processing Speed'", "value": '10x faster', "icon": "<TrendingUp className="w-5 h-5"  /> "},;
      { "metric": 'Scalability', "value": 'Unlimited', "icon": "<Users className="w-5 h-5"  /> "},;
      { "metric": 'Infrastructure Cost', "value": '-60%', "icon": "<DollarSign className="w-5 h-5"  /> "}
    ],;
    "technologies": "['AWS'", 'Kubernetes', 'Apache Kafka', 'Apache Spark', 'Terraform'],;
    "duration": '6 months';
  },;
  { "id": '3',;
    "title": 'Zero-Trust Cybersecurity Implementation',;
    "description": 'Deployed comprehensive zero-trust security framework with automated threat detection and response.',;
    "industry": 'Healthcare',;
    "results": "[{ "metric": 'Security Incidents'", "value": '-95%', "icon": "<CheckCircle className="w-5 h-5"  /> "},;
      { "metric": 'Compliance Score', "value": '99.9%', "icon": "<CheckCircle className="w-5 h-5"  /> "},;
      { "metric": 'Detection Time', "value": 'Real-time', "icon": "<TrendingUp className="w-5 h-5"  /> "}
    ],;
    "technologies": "['Okta'", 'CrowdStrike', 'Splunk', 'AWS GuardDuty', 'Python'],;
    "duration": '4 months';
  }
];
export default function CaseStudies("props": "any) {;
  return (;
  return (;
  return (<section className="py-24 "sm": p y-32 bg-gradient-to-br from-slate-50 to-blue-50">;
      <div className="mx-auto max-w-7xl px-6 "lg": p x-8">;
        {/* Header */"}
        <div className="mx-auto max-w-2xl "lg": "tex t-center mb-16">;
          <motion.h2;
            className="text-base font-semibold leading-7 text-blue-600";
            initial={{ "opacity": 0", "y": "2 0 "}}
            whileInView={{ "opacity": "1", "y": "0 "}}
            viewport={{ "once": "tru e   "}}
            transition={{ "duration": "0.6   "}}
          >;
            Success Stories;
          </motion.h2>;
          <motion.p;
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 "sm": "tex t-4xl";
            initial={{ "opacity": 0", "y": "2 0 "}}
            whileInView={{ "opacity": "1", "y": "0 "}}
            viewport={{ "once": "tru e   "}}
            transition={{ "duration": "0.6", "delay": "0.1 "}}
          >;
            Real results from real clients;
          </motion.p>;
          <motion.p;
            className="mt-6 text-lg leading-8 text-gray-600";
            initial={{ "opacity": "0", "y": "2 0 "}}
            whileInView={{ "opacity": "1", "y": "0 "}}
            viewport={{ "once": "tru e   "}}
            transition={{ "duration": "0.6", "delay": "0.2 "}}
          >;
            See how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.</motion.p>;
        </div>;
        {/* Case Studies Grid */}
        <div className="grid gap-8 "lg": "gri d-cols-1">;
          {caseStudies.map((study", index) => (;
            <motion.div;
              key={study.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden "hover": "shado w-xl transition-all duration-300";
              initial={{ "opacity": 0", "y": "3 0 "}}
              whileInView={{ "opacity": "1", "y": "0 "}}
              viewport={{ "once": "tru e   "}}
              transition={{ "duration": "0.6", "delay": "inde x * 0.1 "}}
            >;
              <div className="p-8">;
import React from 'react'
import { motion  } from 'framer-motion'
import { CheckCircle, TrendingUp, Users, DollarSign  } from 'lucide-react'
interface CaseStudy { id: string title: string
  description: string industry: string
  results: {
    metric: string value: string
    icon: React.ReactNode
    }[]
  technologies: string[]
  duration: string
}
const caseStudies: CaseStud y[] = [{ id: '1',
    title: 'AI-Powered Customer Service Automation',
    description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.',
    industry: 'E-commerce',
    results: [
      { metric: 'Response Time', value: '85% faster', icon: <TrendingUp className="w-5 h-5"  /> },
      { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className="w-5 h-5"  /> },
      { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className="w-5 h-5"  /> }
    ],
    technologies: ['OpenAI GPT-4', 'LangChain', 'React', 'Node.js', 'PostgreSQL'],
    duration: '3 months'
  },
  { id: '2',
    title: 'Cloud-Native Data Platform Migration',
    description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.',
    industry: 'Financial Services',
    results: [{ metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className="w-5 h-5"  /> },
      { metric: 'Scalability', value: 'Unlimited', icon: <Users className="w-5 h-5"  /> },
      { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className="w-5 h-5"  /> }
    ],
    technologies: ['AWS', 'Kubernetes', 'Apache Kafka', 'Apache Spark', 'Terraform'],
    duration: '6 months'
  },
  { id: '3',
    title: 'Zero-Trust Cybersecurity Implementation',
    description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.',
    industry: 'Healthcare',
    results: [{ metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className="w-5 h-5"  /> },
      { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className="w-5 h-5"  /> },
      { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className="w-5 h-5"  /> }
    ],
    technologies: ['Okta', 'CrowdStrike', 'Splunk', 'AWS GuardDuty', 'Python'],
    duration: '4 months'
  }
]
export default function CaseStudies(props: any) {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">CaseStudies</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default CaseStudies;