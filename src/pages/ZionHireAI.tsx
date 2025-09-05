
<<<<<<< HEAD
import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { useWhitelabel } from "@/context/WhitelabelContext",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from 'lucide-react'
import { useAuth } from "@/hooks/useAuth",
import Link from "next/link",
=======
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { useWhitelabel } from &quot;@/context/WhitelabelContext&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from 'lucide-react'
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import Link from &quot;next/link&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel(),
  const { isAuthenticated } = useAuth(),
  
  return (
    <>
      <SEO 
        title=&quot;Zion Hire AI - White-labeled AI Recruiting Assistant&quot; 
        description=&quot;Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience.&quot;
      />
      <Header />
      <main className=&quot;flex-1&quot;>
        {/* Hero Section */}
        <section 
          className=&quot;relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24&quot;
          style={primaryColor ? { backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, rgba(25, 33, 52, 1))` } : {}}
        >
          <div className=&quot;container mx-auto px-4 md:px-6&quot;>
            <div className=&quot;grid gap-6 md:grid-cols-2 items-center&quot;>
              <div className=&quot;space-y-4&quot;>
                <h1 className=&quot;text-3xl md:text-5xl font-bold tracking-tighter text-white&quot;>
                  {isWhitelabel ? `${brandName} Recruiting Assistant` : &quot;Zion Hire AI&quot;}
                </h1>
                <p className=&quot;text-lg text-zion-slate-light max-w-[600px]&quot;>
                  Empower your team with AI-driven talent acquisition. Streamline your hiring process, 
                  improve candidate matches, and enhance the applicant experience.
                </p>
                <div className=&quot;flex flex-col sm:flex-row gap-3 pt-4&quot;>
                  <Button 
                    size=&quot;lg&quot; 
                    className=&quot;bg-zion-purple hover:bg-zion-purple-light text-white&quot;
                    asChild
                  >
                    <Link href={isAuthenticated ? &quot;/enterprise/admin&quot; : &quot;/login&quot;}>
                      Get Started <ArrowRight className=&quot;ml-2 h-4 w-4&quot; />
                    </Link>
                  </Button>
                  <Button 
                    variant=&quot;outline&quot; 
                    size=&quot;lg&quot;
                    className=&quot;bg-transparent border-white text-white hover:bg-white/10&quot;
                    asChild
                  >
                    <Link href=&quot;/enterprise/demo&quot;>
                      Request Demo
                    </Link>
                  </Button>
                </div>
              </div>
              <div className=&quot;relative hidden md:block&quot;>
                <div className=&quot;absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl&quot;></div>
                <img
                  src=&quot;https://placehold.co/600x400/192134/9b87f5?text=Zion+Hire+AI&quot;
                  alt=&quot;Zion Hire AI Dashboard&quot;
                  className=&quot;relative z-10 rounded-lg shadow-xl&quot;
                  loading=&quot;lazy&quot;
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-16 bg-background&quot;>
          <div className=&quot;container mx-auto px-4 md:px-6&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-3xl font-bold tracking-tight&quot;>Powerful AI Hiring Tools</h2>
              <p className=&quot;text-muted-foreground mt-4 max-w-3xl mx-auto&quot;>
                Our comprehensive suite of AI-powered hiring tools help you streamline your recruiting process,
                find better candidates, and make data-driven decisions.
              </p>
            </div>
            
            <div className=&quot;grid gap-6 md:grid-cols-2 lg:grid-cols-3&quot;>
              <Card className=&quot;bg-card border border-border&quot;>
                <CardHeader>
                  <Briefcase className=&quot;h-10 w-10 text-zion-purple mb-2&quot; />
                  <CardTitle>Job Description Generator</CardTitle>
                  <CardDescription>
                    Create compelling job descriptions with AI assistance to attract top talent.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className=&quot;space-y-2 text-sm&quot;>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>AI</span>
                      <span>Automated skill requirements</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>AI</span>
                      <span>Optimized for inclusivity</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>Template</span>
                      <span>Industry-specific templates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className=&quot;bg-card border border-border&quot;>
                <CardHeader>
                  <PenTool className=&quot;h-10 w-10 text-zion-purple mb-2&quot; />
                  <CardTitle>Resume Screener</CardTitle>
                  <CardDescription>
                    Automatically evaluate and score candidate resumes against job requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className=&quot;space-y-2 text-sm&quot;>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>AI</span>
                      <span>Identify skill matches</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>AI</span>
                      <span>Experience verification</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>Custom</span>
                      <span>Customizable scoring criteria</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className=&quot;bg-card border border-border&quot;>
                <CardHeader>
                  <Users className=&quot;h-10 w-10 text-zion-purple mb-2&quot; />
                  <CardTitle>Candidate Matchmaker</CardTitle>
                  <CardDescription>
                    Find the best candidates for each position with AI-powered matching.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className=&quot;space-y-2 text-sm&quot;>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>AI</span>
                      <span>Relevancy scoring</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>AI</span>
                      <span>Culture fit prediction</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>Data</span>
                      <span>Performance tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className=&quot;bg-card border border-border&quot;>
                <CardHeader>
                  <Globe className=&quot;h-10 w-10 text-zion-purple mb-2&quot; />
                  <CardTitle>Embeddable Widget</CardTitle>
                  <CardDescription>
                    Add an AI assistant to your careers page to answer applicant questions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className=&quot;space-y-2 text-sm&quot;>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-green-100 text-green-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>AI</span>
                      <span>Instant FAQ responses</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>Custom</span>
                      <span>Customizable branding</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>Code</span>
                      <span>Simple JavaScript snippet</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className=&quot;bg-card border border-border&quot;>
                <CardHeader>
                  <BarChart3 className=&quot;h-10 w-10 text-zion-purple mb-2&quot; />
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>
                    Track recruiting metrics and optimize your hiring process with data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className=&quot;space-y-2 text-sm&quot;>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>Data</span>
                      <span>Time-to-hire tracking</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>Data</span>
                      <span>Candidate funnel metrics</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>Data</span>
                      <span>Cost per hire analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className=&quot;bg-card border border-border&quot;>
                <CardHeader>
                  <Shield className=&quot;h-10 w-10 text-zion-purple mb-2&quot; />
                  <CardTitle>White-Labeled Platform</CardTitle>
                  <CardDescription>
                    Customize the platform with your company's branding and identity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className=&quot;space-y-2 text-sm&quot;>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>Custom</span>
                      <span>Custom logo and colors</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>Custom</span>
                      <span>Co-branded or white-labeled</span>
                    </li>
                    <li className=&quot;flex items-center&quot;>
                      <span className=&quot;bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-0.5 rounded&quot;>Access</span>
                      <span>Team roles & permissions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;bg-zion-blue-dark py-16&quot;>
          <div className=&quot;container mx-auto px-4 md:px-6 text-center&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Ready to transform your hiring process?</h2>
            <p className=&quot;text-zion-slate-light max-w-2xl mx-auto mb-8&quot;>
              Join leading companies using Zion Hire AI to find better talent faster, 
              reduce time-to-hire, and improve candidate experience.
            </p>
            <Button 
<<<<<<< HEAD
              size="lg" 
              className="bg-zion-purple hover: bg-zion-purple-light text-white"
=======
              size=&quot;lg&quot; 
              className=&quot;bg-zion-purple hover:bg-zion-purple-light text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              asChild
            >
              <Link href=&quot;/enterprise/demo&quot;>
                Schedule a Demo
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
