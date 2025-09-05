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
export default MainNavigation;
=======
"}
;
export default MainNavigation;
=======
import { useState } from 'react';,
import _React,{ useState } from 'react'; import { Link } from 'react-router-dom'; import { ChevronDown,Zap,Brain,Shield,Users,HardDrive,TrendingUp,Building2,FileText,HelpCircle,BarChart3,Rocket,Server,Cloud,Lock,Workflow,Database,MessageCircle,CheckCircle,ArrowRight,ExternalLink,Handshake,Monitor,GraduationCap,Lightbulb,Code,Activity,Target';'} from 'lucide-react'; interface MainNavigationProps { className?: string} export function MainNavigation(props: MainNavigationProps) { const [isServicesOpen,setIsServicesOpen] = useState<boolean>(false); const [isSolutionsOpen,setIsSolutionsOpen] = useState<boolean>(false); const [isCompanyOpen,setIsCompanyOpen] = useState<boolean>(false); return ( <nav className={`flex items-center space-x-8 ${props.className || "}`}> {} <Link to="/" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Home </Link> {} <div className="relative group"> <button onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > <Zap className="w-4 h-4" /> <span>Services</span> <ChevronDown className="w-3 h-3" /> </button> {isServicesOpen && ( <div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50" > <div className="p-4"> <div className="grid grid-cols-3 gap-4"> <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Rocket className="w-4 h-4 mr-2" /> Micro SAAS </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> All Services </Link> </li> <li> <Link to="/services/ai-sales-copilot" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Sales Copilot </Link> </li> <li> <Link to="/services/cloud-finops-optimizer" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Cloud FinOps Optimizer </Link> </li> <li> <Link to="/services/ai-compliance-assistant" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Compliance Assistant </Link> </li> <li> <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Business Intelligence </Link> </li> <li> <Link to="/services/ai-customer-support-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Customer Support </Link> </li> </ul> </div> {} <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Shield className="w-4 h-4 mr-2" /> IT Services </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/services/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Quantum Computing </Link> </li> <li> <Link to="/services/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Cybersecurity </Link> </li> <li> <Link to="/services/cloud-devops" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Cloud DevOps </Link> </li> <li> <Link to="/services/data-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Data Analytics </Link> </li> <li> <Link to="/services/it-infrastructure" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> IT Infrastructure </Link> </li> </ul> </div> <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Brain className="w-4 h-4 mr-2" /> AI Solutions </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/services/ai-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Services </Link> </li> <li> <Link to="/services/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Solutions </Link> </li> <li> <Link to="/services/ai-project-management" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Project Management </Link> </li> <li> <Link to="/services/ai-marketing-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Marketing Automation </Link> </li> <li> <Link to="/services/ai-financial-analytics" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> AI Financial Analytics </Link> </li> </ul> </div> </div> <div className="mt-4 pt-4 border-t border-zion-purple/20"> <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center" > View All Services <TrendingUp className="w-4 h-4 ml-2" /> </Link> </div> </div> </div> )} </div> {} <div className="relative group"> <button onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > <Brain className="w-4 h-4" /> <span>Solutions</span> <ChevronDown className="w-3 h-3" /> </button> {isSolutionsOpen && ( <div onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)} className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50" > <div className="p-4"> <div className="grid grid-cols-2 gap-4"> {} <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <Building2 className="w-4 h-4 mr-2" /> Enterprise </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Enterprise Solutions </Link> </li> <li> <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Healthcare Solutions </Link> </li> <li> <Link to="/solutions/finance" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Financial Solutions </Link> </li> <li> <Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Retail Solutions </Link> </li> </ul> </div> <div> <h4 className="text-zion-cyan font-semibold mb-3 flex items-center"> <HardDrive className="w-4 h-4 mr-2" /> Resources </h4> <ul className="space-y-2 text-sm"> <li> <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Case Studies </Link> </li> <li> <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> White Papers </Link> </li> <li> <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Webinars </Link> </li> <li> <Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Marketplace </Link> </li> </ul> </div> </div> <div className="mt-4 pt-4 border-t border-zion-purple/20"> <Link to="/request-quote" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center" > Get Custom Quote <TrendingUp className="w-4 h-4 ml-2" /> </Link> </div> </div> </div> )} </div> {} <div className="relative group"> <button onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className="flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > <Building2 className="w-4 h-4" /> <span>Company</span> <ChevronDown className="w-3 h-3" /> </button> {isCompanyOpen && ( <div onMouseEnter={() => setIsCompanyOpen(true)} onMouseLeave={() => setIsCompanyOpen(false)} className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50" > <div className="p-4"> <ul className="space-y-2 text-sm"> <li> <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> About Us </Link> </li> <li> <Link to="/team" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Our Team </Link> </li> <li> <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Careers </Link> </li> <li> <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> News </Link> </li> <li> <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Partners </Link> </li> <li> <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors"> Contact </Link> </li> </ul> </div> </div> )} </div> {} <Link to="/resources" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Resources </Link> {} <Link to="/blog" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Blog </Link> {} <Link to="/contact" className="text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors" > Contact </Link> </nav> )} export default MainNavigation; </li> </ul> </div> </any> </any>;';';
