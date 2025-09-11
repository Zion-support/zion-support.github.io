import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ;
  ChevronDown, ;
  Zap, ;
  Brain, ;
  Shield, ;
  Users, ;
  HardDrive, ;
  TrendingUp, ;
  Building2, ;
  FileText, ;
  HelpCircle, ;
  BarChart3,;
  Rocket,;
  Server,;
  Cloud,;
  Lock,;
  Workflow,;
  Database,;
  MessageCircle,;
  CheckCircle,;
  ArrowRight,;
  ExternalLink,;
  Handshake,;
  Monitor,;
  GraduationCap,;
  Lightbulb,;
  Code,;
  Activity,;
  Target;
} from 'lucide-react';
;
interface MainNavigationProps {;
  className?: "string;
"}
;
export function MainNavigation("props": "MainNavigationProps) {;
  const [isServicesOpen", setIsServicesOpen] = useState<boolean>(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState<boolean>(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState<boolean>(false);
;
  return (;
    <nav className={`flex items-center space-x-8 ${props.className || ''}`}>;
      {/* Home */}
      <Link ;
        to="/" ;
        className="text-sm font-medium text-zion-slate-light "hover": "text-zion-cyan transition-colors";
      >;
        Home;
      </Link>;
      {/* Services Dropdown */"}
      <div className="relative group">;
        <button;
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light "hover": "text-zion-cyan transition-colors";
        >;
          <Zap className="w-4 h-4" />;
          <span>Services</span>;
          <ChevronDown className="w-3 h-3" />;
        </button>;
        ;
        {isServicesOpen && (;
          <div ;
            onMouseEnter={() => setIsServicesOpen(true)"} ;
            onMouseLeave={() => setIsServicesOpen(false)}
            className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    Micro SAAS
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        All Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Sales Copilot
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cloud FinOps Optimizer
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Compliance Assistant
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Business Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Customer Support
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* IT Services */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    IT Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Quantum Computing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Cloud DevOps
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/data-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Data Analytics
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        IT Infrastructure
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/services/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-project-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Project Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-marketing-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Marketing Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/ai-financial-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        AI Financial Analytics
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link 
                  to="/services" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
    </div>
  );
}
          </div>
        )}
      </div>
            className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50";
          >;
            <div className="p-4">;
              <div className="grid grid-cols-3 gap-4">;
                <div>;
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;
                    <Rocket className="w-4 h-4 mr-2" />;
                    Micro SAAS;
                  </h4>;
                  <ul className="space-y-2 text-sm">;
                    <li>;
                      <Link to="/services" className="text-zion-slate-light "hover": "text-zion-cyan transition-colors">;
                        All Services;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/ai-sales-copilot" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        AI Sales Copilot;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        Cloud FinOps Optimizer;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        AI Compliance Assistant;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/ai-business-intelligence" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        AI Business Intelligence;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        AI Customer Support;
                      </Link>;
                    </li>;
                  </ul>;
                </div>;
                ;
                {/* IT Services */"}
                <div>;
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;
                    <Shield className="w-4 h-4 mr-2" />;
                    IT Services;
                  </h4>;
                  <ul className="space-y-2 text-sm">;
                    <li>;
                      <Link to="/services/quantum-computing" className="text-zion-slate-light "hover": "text-zion-cyan transition-colors">;
                        Quantum Computing;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/cybersecurity" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        Cybersecurity;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/cloud-devops" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        Cloud DevOps;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/data-analytics" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        Data Analytics;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/it-infrastructure" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        IT Infrastructure;
                      </Link>;
                    </li>;
                  </ul>;
                </div>;
                ;
                <div>;
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;
                    <Brain className="w-4 h-4 mr-2" />;
                    AI Solutions;
                  </h4>;
                  <ul className="space-y-2 text-sm">;
                    <li>;
                      <Link to="/services/ai-services" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        AI Services;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/ai-solutions" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        AI Solutions;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/ai-project-management" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        AI Project Management;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/ai-marketing-automation" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        AI Marketing Automation;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/services/ai-financial-analytics" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        AI Financial Analytics;
                      </Link>;
                    </li>;
                  </ul>;
                </div>;
              </div>;
              ;
              <div className="mt-4 pt-4 border-t border-zion-purple/20">;
                <Link ;
                  to="/services" ;
                  className="text-zion-cyan "hover":text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center";
                >;
                  View All Services;
                  <TrendingUp className="w-4 h-4 ml-2" />;
                </Link>;
              </div>;
            </div>;
          </div>;
        )"}
      </div>;
      {/* Solutions Dropdown */}
      <div className="relative group">;
        <button;
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light "hover": "text-zion-cyan transition-colors";
        >;
          <Brain className="w-4 h-4" />;
          <span>Solutions</span>;
          <ChevronDown className="w-3 h-3" />;
        </button>;
        ;
        {isSolutionsOpen && (;
          <div ;
            onMouseEnter={() => setIsSolutionsOpen(true)"}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50";
          >;
            <div className="p-4">;
              <div className="grid grid-cols-2 gap-4">;
                {/* Enterprise Solutions */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    Enterprise
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Enterprise Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Healthcare Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/finance" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Financial Solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Retail Solutions
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <HardDrive className="w-4 h-4 mr-2" />
                    Resources
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        White Papers
                      </Link>
                    </li>
                    <li>
                      <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Webinars
                      </Link>
                    </li>
                    <li>
                      <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        Marketplace
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple/20">
                <Link 
                  to="/request-quote" 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  Get Custom Quote
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
              </div>
</div>
              </div>
  );
}
            </div>
          </div>
        )}
      </div>
                <div>;
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;
                    <Building2 className="w-4 h-4 mr-2" />;
                    Enterprise;
                  </h4>;
                  <ul className="space-y-2 text-sm">;
                    <li>;
                      <Link to="/solutions/enterprise" className="text-zion-slate-light "hover": "text-zion-cyan transition-colors">;
                        Enterprise Solutions;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/solutions/healthcare" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        Healthcare Solutions;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/solutions/finance" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        Financial Solutions;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/solutions/retail" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        Retail Solutions;
                      </Link>;
                    </li>;
                  </ul>;
                </div>;
                ;
                <div>;
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">;
                    <HardDrive className="w-4 h-4 mr-2" />;
                    Resources;
                  </h4>;
                  <ul className="space-y-2 text-sm">;
                    <li>;
                      <Link to="/case-studies" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        Case Studies;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/white-papers" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        White Papers;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/webinars" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        Webinars;
                      </Link>;
                    </li>;
                    <li>;
                      <Link to="/marketplace" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                        Marketplace;
                      </Link>;
                    </li>;
                  </ul>;
                </div>;
              </div>;
              ;
              <div className="mt-4 pt-4 border-t border-zion-purple/20">;
                <Link ;
                  to="/request-quote" ;
                  className="text-zion-cyan "hover":text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center";
                >;
                  Get Custom Quote;
                  <TrendingUp className="w-4 h-4 ml-2" />;
                </Link>;
              </div>;
            </div>;
          </div>;
        )"}
      </div>;
      {/* Company Dropdown */}
      <div className="relative group">;
        <button;
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light "hover": "text-zion-cyan transition-colors";
        >;
          <Building2 className="w-4 h-4" />;
          <span>Company</span>;
          <ChevronDown className="w-3 h-3" />;
        </button>;
        ;
        {isCompanyOpen && (;
          <div ;
            onMouseEnter={() => setIsCompanyOpen(true)"}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
</div>
              </div>
  );
}
            </div>
          </div>
        )}
      </div>
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50";
          >;
            <div className="p-4">;
              <ul className="space-y-2 text-sm">;
                <li>;
                  <Link to="/about" className="text-zion-slate-light "hover": "text-zion-cyan transition-colors">;
                    About Us;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/team" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                    Our Team;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/careers" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                    Careers;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/news" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                    News;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/partners" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                    Partners;
                  </Link>;
                </li>;
                <li>;
                  <Link to="/contact" className="text-zion-slate-light "hover":text-zion-cyan transition-colors">;
                    Contact;
                  </Link>;
                </li>;
              </ul>;
            </div>;
          </div>;
        )"}
      </div>;
      {/* Resources */}
      <Link ;
        to="/resources" ;
        className="text-sm font-medium text-zion-slate-light "hover": "text-zion-cyan transition-colors";
      >;
        Resources;
      </Link>;
      {/* Blog */"}
      <Link ;
        to="/blog" ;
        className="text-sm font-medium text-zion-slate-light "hover": "text-zion-cyan transition-colors";
      >;
        Blog;
      </Link>;
      {/* Contact */"}
      <Link ;
        to="/contact" ;
        className="text-sm font-medium text-zion-slate-light "hover": "text-zion-cyan transition-colors";
      >;
        Contact;
      </Link>;
    </nav>;
  );
}
export default MainNavigation;
</li>
</ul>
</div>
</any>';
</any>;';;';
export default MainNavigation;
"}
;
export default MainNavigation;
import React,{ useState } from &apos;react&apos;; import { Link } from &apos;react-router-dom&apos;; import { ChevronDown,Zap,Brain,Shield,Users,HardDrive,TrendingUp,Building2,FileText,HelpCircle,BarChart3,Rocket,Server,Cloud,Lock,Workflow,Database,MessageCircle,CheckCircle,ArrowRight,ExternalLink,Handshake,Monitor,GraduationCap,Lightbulb,Code,Activity,Target&apos;;&apos;} from &apos;lucide-react&apos;; interface MainNavigationProps { className?: string} export function MainNavigation(props: MainNavigationProps) { const [isServicesOpen,setIsServicesOpen] = useState<boolean>(false); const [isSolutionsOpen,setIsSolutionsOpen] = useState<boolean>(false); const [isCompanyOpen,setIsCompanyOpen] = useState<boolean>(false); return ( <nav className={`flex items-center space-x-8 ${props.className || &quot;}`}> {} <Link to=&quot;/&quot; className=&quot;text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&quot; > Home </Link> {} <div className=&quot;relative group&quot;> <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className=&quot;flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&quot; > <Zap className=&quot;w-4 h-4&quot; /> <span>Services</span> <ChevronDown className=&quot;w-3 h-3&quot; /> </button> {isServicesOpen && ( <div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className=&quot;absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&quot; > <div className=&quot;p-4&quot;> <div className=&quot;grid grid-cols-3 gap-4&quot;> <div> <h4 className=&quot;text-zion-cyan font-semibold mb-3 flex items-center&quot;> <Rocket className=&quot;w-4 h-4 mr-2&quot; /> Micro SAAS </h4> <ul className=&quot;space-y-2 text-sm&quot;> <li> <Link to=&quot;/services&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> All Services </Link> </li> <li> <Link to=&quot;/services/ai-sales-copilot&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> AI Sales Copilot </Link> </li> <li> <Link to=&quot;/services/cloud-finops-optimizer&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Cloud FinOps Optimizer </Link> </li> <li> <Link to=&quot;/services/ai-compliance-assistant&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> AI Compliance Assistant </Link> </li> <li> <Link to=&quot;/services/ai-business-intelligence&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> AI Business Intelligence </Link> </li> <li> <Link to=&quot;/services/ai-customer-support-automation&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> AI Customer Support </Link> </li> </ul> </div> {} <div> <h4 className=&quot;text-zion-cyan font-semibold mb-3 flex items-center&quot;> <Shield className=&quot;w-4 h-4 mr-2&quot; /> IT Services </h4> <ul className=&quot;space-y-2 text-sm&quot;> <li> <Link to=&quot;/services/quantum-computing&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Quantum Computing </Link> </li> <li> <Link to=&quot;/services/cybersecurity&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Cybersecurity </Link> </li> <li> <Link to=&quot;/services/cloud-devops&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Cloud DevOps </Link> </li> <li> <Link to=&quot;/services/data-analytics&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Data Analytics </Link> </li> <li> <Link to=&quot;/services/it-infrastructure&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> IT Infrastructure </Link> </li> </ul> </div> <div> <h4 className=&quot;text-zion-cyan font-semibold mb-3 flex items-center&quot;> <Brain className=&quot;w-4 h-4 mr-2&quot; /> AI Solutions </h4> <ul className=&quot;space-y-2 text-sm&quot;> <li> <Link to=&quot;/services/ai-services&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> AI Services </Link> </li> <li> <Link to=&quot;/services/ai-solutions&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> AI Solutions </Link> </li> <li> <Link to=&quot;/services/ai-project-management&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> AI Project Management </Link> </li> <li> <Link to=&quot;/services/ai-marketing-automation&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> AI Marketing Automation </Link> </li> <li> <Link to=&quot;/services/ai-financial-analytics&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> AI Financial Analytics </Link> </li> </ul> </div> </div> <div className=&quot;mt-4 pt-4 border-t border-zion-purple/20&quot;> <Link to=&quot;/services&quot; className=&quot;text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center&quot; > View All Services <TrendingUp className=&quot;w-4 h-4 ml-2&quot; /> </Link> </div> </div> </div> )} </div> {} <div className=&quot;relative group&quot;> <button onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className=&quot;flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&quot; > <Brain className=&quot;w-4 h-4&quot; /> <span>Solutions</span> <ChevronDown className=&quot;w-3 h-3&quot; /> </button> {isSolutionsOpen && ( <div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className=&quot;absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&quot; > <div className=&quot;p-4&quot;> <div className=&quot;grid grid-cols-2 gap-4&quot;> {} <div> <h4 className=&quot;text-zion-cyan font-semibold mb-3 flex items-center&quot;> <Building2 className=&quot;w-4 h-4 mr-2&quot; /> Enterprise </h4> <ul className=&quot;space-y-2 text-sm&quot;> <li> <Link to=&quot;/solutions/enterprise&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Enterprise Solutions </Link> </li> <li> <Link to=&quot;/solutions/healthcare&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Healthcare Solutions </Link> </li> <li> <Link to=&quot;/solutions/finance&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Financial Solutions </Link> </li> <li> <Link to=&quot;/solutions/retail&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Retail Solutions </Link> </li> </ul> </div> <div> <h4 className=&quot;text-zion-cyan font-semibold mb-3 flex items-center&quot;> <HardDrive className=&quot;w-4 h-4 mr-2&quot; /> Resources </h4> <ul className=&quot;space-y-2 text-sm&quot;> <li> <Link to=&quot;/case-studies&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Case Studies </Link> </li> <li> <Link to=&quot;/white-papers&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> White Papers </Link> </li> <li> <Link to=&quot;/webinars&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Webinars </Link> </li> <li> <Link to=&quot;/marketplace&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Marketplace </Link> </li> </ul> </div> </div> <div className=&quot;mt-4 pt-4 border-t border-zion-purple/20&quot;> <Link to=&quot;/request-quote&quot; className=&quot;text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center&quot; > Get Custom Quote <TrendingUp className=&quot;w-4 h-4 ml-2&quot; /> </Link> </div> </div> </div> )} </div> {} <div className=&quot;relative group&quot;> <button onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className=&quot;flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&quot; > <Building2 className=&quot;w-4 h-4&quot; /> <span>Company</span> <ChevronDown className=&quot;w-3 h-3&quot; /> </button> {isCompanyOpen && ( <div onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className=&quot;absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&quot; > <div className=&quot;p-4&quot;> <ul className=&quot;space-y-2 text-sm&quot;> <li> <Link to=&quot;/about&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> About Us </Link> </li> <li> <Link to=&quot;/team&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Our Team </Link> </li> <li> <Link to=&quot;/careers&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Careers </Link> </li> <li> <Link to=&quot;/news&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> News </Link> </li> <li> <Link to=&quot;/partners&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Partners </Link> </li> <li> <Link to=&quot;/contact&quot; className=&quot;text-zion-slate-light hover:text-zion-cyan transition-colors&quot;> Contact </Link> </li> </ul> </div> </div> )} </div> {} <Link to=&quot;/resources&quot; className=&quot;text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&quot; > Resources </Link> {} <Link to=&quot;/blog&quot; className=&quot;text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&quot; > Blog </Link> {} <Link to=&quot;/contact&quot; className=&quot;text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&quot; > Contact </Link> </nav> )} export default MainNavigation; </li> </ul> </div> </any> </any>;&apos;;&apos;;
const React,{ useState } from "react"; import { Link } from "react-router-dom"; import { ChevronDown,Zap,Brain,Shield,Users,HardDrive,TrendingUp,Building2,FileText,HelpCircle,BarChart3,Rocket,Server,Cloud,Lock,Workflow,Database,MessageCircle,CheckCircle,ArrowRight,ExternalLink,Handshake,Monitor,GraduationCap,Lightbulb,Code,Activity,Target";"} from "lucide-react"; interface MainNavigationProps { className?: string} export function MainNavigation(props: MainNavigationProps) { const [isServicesOpen,setIsServicesOpen] = useState<boolean>(false); const [isSolutionsOpen,setIsSolutionsOpen] = useState<boolean>(false); const [isCompanyOpen,setIsCompanyOpen] = useState<boolean>(false); return ( <nav className={`flex items-center space-x-8 ${props.className | "}`}> {} <Link to="/" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Home </Link> {} <div className="relative group"> <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > <Zap className="w-4 h-4" /> <span>Services</span> <ChevronDown className="w-3 h-3" /> </button> {isServicesOpen && ( <div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50" > <div className="p-4"> <div className="grid grid-cols-3 gap-4"> <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Rocket className="w-4 h-4 mr-2" /> Micro SAAS </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> All Services </Link> </li> <li> <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Sales Copilot </Link> </li> <li> <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Cloud FinOps Optimizer </Link> </li> <li> <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Compliance Assistant </Link> </li> <li> <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Business Intelligence </Link> </li> <li> <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Customer Support </Link> </li> </ul> </div> {} <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Shield className="w-4 h-4 mr-2" /> IT Services </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/services/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Quantum Computing </Link> </li> <li> <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Cybersecurity </Link> </li> <li> <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Cloud DevOps </Link> </li> <li> <Link to="/services/data-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Data Analytics </Link> </li> <li> <Link to="/services/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> IT Infrastructure </Link> </li> </ul> </div> <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Brain className="w-4 h-4 mr-2" /> AI Solutions </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/services/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Services </Link> </li> <li> <Link to="/services/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Solutions </Link> </li> <li> <Link to="/services/ai-project-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Project Management </Link> </li> <li> <Link to="/services/ai-marketing-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Marketing Automation </Link> </li> <li> <Link to="/services/ai-financial-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Financial Analytics </Link> </li> </ul> </div> </div> <div className="mt-4 pt-4 border-t border-zion-purple/20"> <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center" > View All Services <TrendingUp className="w-4 h-4 ml-2" /> </Link> </div> </div> </div> )} </div> {} <div className="relative group"> <button onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > <Brain className="w-4 h-4" /> <span>Solutions</span> <ChevronDown className="w-3 h-3" /> </button> {isSolutionsOpen && ( <div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50" > <div className="p-4"> <div className="grid grid-cols-2 gap-4"> {} <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Building2 className="w-4 h-4 mr-2" /> Enterprise </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Enterprise Solutions </Link> </li> <li> <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Healthcare Solutions </Link> </li> <li> <Link to="/solutions/finance" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Financial Solutions </Link> </li> <li> <Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Retail Solutions </Link> </li> </ul> </div> <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <HardDrive className="w-4 h-4 mr-2" /> Resources </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Case Studies </Link> </li> <li> <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> White Papers </Link> </li> <li> <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Webinars </Link> </li> <li> <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Marketplace </Link> </li> </ul> </div> </div> <div className="mt-4 pt-4 border-t border-zion-purple/20"> <Link to="/request-quote" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center" > Get Custom Quote <TrendingUp className="w-4 h-4 ml-2" /> </Link> </div> </div> </div> )} </div> {} <div className="relative group"> <button onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > <Building2 className="w-4 h-4" /> <span>Company</span> <ChevronDown className="w-3 h-3" /> </button> {isCompanyOpen && ( <div onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50" > <div className="p-4"> <ul className="space-y-2 text-sm"> <li> <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> About Us </Link> </li> <li> <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Our Team </Link> </li> <li> <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Careers </Link> </li> <li> <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> News </Link> </li> <li> <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Partners </Link> </li> <li> <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Contact </Link> </li> </ul> </div> </div> )} </div> {} <Link to="/resources" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Resources </Link> {} <Link to="/blog" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Blog </Link> {} <Link to="/contact" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Contact </Link> </nav> )} export default MainNavigation; </li> </ul> </div> </any> </any>;";";'"`'"`
import { useState } from 'react';,
import _React,{ useState } from 'react'; import { Link } from 'react-router-dom'; import { ChevronDown,Zap,Brain,Shield,Users,HardDrive,TrendingUp,Building2,FileText,HelpCircle,BarChart3,Rocket,Server,Cloud,Lock,Workflow,Database,MessageCircle,CheckCircle,ArrowRight,ExternalLink,Handshake,Monitor,GraduationCap,Lightbulb,Code,Activity,Target';'} from 'lucide-react'; interface MainNavigationProps { className?: string} export function MainNavigation(props: MainNavigationProps) { const [isServicesOpen,setIsServicesOpen] = useState<boolean>(false); const [isSolutionsOpen,setIsSolutionsOpen] = useState<boolean>(false); const [isCompanyOpen,setIsCompanyOpen] = useState<boolean>(false); return ( <nav className={`flex items-center space-x-8 ${props.className || "}`}> {} <Link to="/" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Home </Link> {} <div className="relative group"> <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > <Zap className="w-4 h-4" /> <span>Services</span> <ChevronDown className="w-3 h-3" /> </button> {isServicesOpen && ( <div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50" > <div className="p-4"> <div className="grid grid-cols-3 gap-4"> <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Rocket className="w-4 h-4 mr-2" /> Micro SAAS </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> All Services </Link> </li> <li> <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Sales Copilot </Link> </li> <li> <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Cloud FinOps Optimizer </Link> </li> <li> <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Compliance Assistant </Link> </li> <li> <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Business Intelligence </Link> </li> <li> <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Customer Support </Link> </li> </ul> </div> {} <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Shield className="w-4 h-4 mr-2" /> IT Services </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/services/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Quantum Computing </Link> </li> <li> <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Cybersecurity </Link> </li> <li> <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Cloud DevOps </Link> </li> <li> <Link to="/services/data-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Data Analytics </Link> </li> <li> <Link to="/services/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> IT Infrastructure </Link> </li> </ul> </div> <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Brain className="w-4 h-4 mr-2" /> AI Solutions </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/services/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Services </Link> </li> <li> <Link to="/services/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Solutions </Link> </li> <li> <Link to="/services/ai-project-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Project Management </Link> </li> <li> <Link to="/services/ai-marketing-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Marketing Automation </Link> </li> <li> <Link to="/services/ai-financial-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Financial Analytics </Link> </li> </ul> </div> </div> <div className="mt-4 pt-4 border-t border-zion-purple/20"> <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center" > View All Services <TrendingUp className="w-4 h-4 ml-2" /> </Link> </div> </div> </div> )} </div> {} <div className="relative group"> <button onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > <Brain className="w-4 h-4" /> <span>Solutions</span> <ChevronDown className="w-3 h-3" /> </button> {isSolutionsOpen && ( <div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50" > <div className="p-4"> <div className="grid grid-cols-2 gap-4"> {} <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Building2 className="w-4 h-4 mr-2" /> Enterprise </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Enterprise Solutions </Link> </li> <li> <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Healthcare Solutions </Link> </li> <li> <Link to="/solutions/finance" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Financial Solutions </Link> </li> <li> <Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Retail Solutions </Link> </li> </ul> </div> <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <HardDrive className="w-4 h-4 mr-2" /> Resources </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Case Studies </Link> </li> <li> <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> White Papers </Link> </li> <li> <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Webinars </Link> </li> <li> <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Marketplace </Link> </li> </ul> </div> </div> <div className="mt-4 pt-4 border-t border-zion-purple/20"> <Link to="/request-quote" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center" > Get Custom Quote <TrendingUp className="w-4 h-4 ml-2" /> </Link> </div> </div> </div> )} </div> {} <div className="relative group"> <button onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > <Building2 className="w-4 h-4" /> <span>Company</span> <ChevronDown className="w-3 h-3" /> </button> {isCompanyOpen && ( <div onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50" > <div className="p-4"> <ul className="space-y-2 text-sm"> <li> <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> About Us </Link> </li> <li> <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Our Team </Link> </li> <li> <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Careers </Link> </li> <li> <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> News </Link> </li> <li> <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Partners </Link> </li> <li> <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Contact </Link> </li> </ul> </div> </div> )} </div> {} <Link to="/resources" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Resources </Link> {} <Link to="/blog" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Blog </Link> {} <Link to="/contact" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Contact </Link> </nav> )} export default MainNavigation; </li> </ul> </div> </any> </any>;';';