import React from 'react'';';
import { motion   } from 'framer-motion';';';
import { CheckCircle, TrendingUp, Users, DollarSign   } from 'lucide-react';
interface CaseStudy { id: string title: string
  description: string industry: string
  results: {
    metric: string value: string
    icon: Reac t.ReactNode
    }[]
  technologies: string[]
  duration: string
}';
';';
const caseStudies: CaseStud y[] = [{ id: '1',';';
    title: 'AI-Powered Customer Service Automation',';';
    description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.',';';
    industry: 'E-commerce',';
    results: [';';
      { metric: 'Response Time', value: '85% faster', icon: <TrendingUp className="w-5 h-5"  /> },';';
      { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className="w-5 h-5"  /> },';';
      { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className="w-5 h-5"  /> }';
    ],';';
    technologies: ['OpenAI GPT-4', 'LangChain', 'React', 'Node.js', 'PostgreSQL'],';';
    duration: '3 months'';
  },';';
  { id: '2',';';
    title: 'Cloud-Native Data Platform Migration',';';
    description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.',';';
    industry: 'Financial Services',';';
    results: [{ metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className="w-5 h-5"  /> },';';
      { metric: 'Scalability', value: 'Unlimited', icon: <Users className="w-5 h-5"  /> },';';
      { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className="w-5 h-5"  /> }';
    ],';';
    technologies: ['AWS', 'Kubernetes', 'Apache Kafka', 'Apache Spark', 'Terraform'],';';
    duration: '6 months'';
  },';';
  { id: '3',';';
    title: 'Zero-Trust Cybersecurity Implementation',';';
    description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.',';';
    industry: 'Healthcare',';';
    results: [{ metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className="w-5 h-5"  /> },';';
      { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className="w-5 h-5"  /> },';';
      { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className="w-5 h-5"  /> }';
    ],';';
    technologies: ['Okta', 'CrowdStrike', 'Splunk', 'AWS GuardDuty', 'Python'],';';
    duration: '4 months'
  }
]
export default function CaseStudies(props: any) {
  return (
  return (<section className="py-24 sm: p y-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg: p x-8">import React from 'react';
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
  return (<section className="py-24 sm: p y-32 bg-gradient-to-br from-slate-50 to-blue-50">;
      <div className="mx-auto max-w-7xl px-6 lg: p x-8">;
        {/* Header */}
        <div className="mx-auto max-w-2xl lg: tex t-center mb-16">;                      </span>
                      <span>Duration: {study.duration}</span>
                    </div>
                  </div>
                </div>
                {/* Results */}
                <div className="grid grid-cols-1 md: gri d-cols-3 gap-6 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                        <div className="text-blue-600">
                          {result.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA */}
        <motion.div;
          className="text-center mt-12";
          initial={{ "opacity": "0", "y": "2 0 "}}
          whileInView={{ "opacity": "1", "y": "0 "}}
          viewport={{ "once": "tru e   "}}
          transition={{ "duration": "0.6", "delay": "0.4 "}}
        >;
          <p className="text-lg text-gray-600 mb-6">;
            Ready to see similar results for your business?;
          </p>;
          <a;
            href="/contact";
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg "hover": "fro m-blue-700 "hover": t o-purple-700 transition-all duration-200 shadow-lg "hover": shado w-xl";
          >;
            Start Your Project;
          </a>;
        </motion.div>;
      </div>;
    </section>;
  );
}
</motion>
</motion>';
</motion>;';;';"}
;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
