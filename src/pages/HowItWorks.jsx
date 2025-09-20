import React from "react"
import SEO from "@/components/SEO"
import { GradientHeading } from "@/components/GradientHeading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Search, UserPlus, Handshake, CheckCircle, MessageSquare, FileText, Users, Briefcase, Zap, Globe, Shield } from "lucide-react"
export default function HowItWorks() {
  const clientSteps = [
  {
  ic,
  o: n: Search,tit,
  l: e: "Search & Discover",descripti,
  o: n: "Browse our marketplace for AI and tech services, or use our AI-powered matching system to find the perfect talent for your project."
            col,
  o: r: "text-zion-cyan"
},
  {
  ic,
  o: n: Users,tit,
  l: e: "Review Profiles",descripti,
  o: n: "Examine talent portfolios, read reviews, check ratings, and compare skills to find the best match for your needs."
            col,
  o: r: "text-zion-purple"
},
  {
  ic,
  o: n: MessageSquare,tit,
  l: e: "Connect & Discuss",descripti,
  o: n: "Message potential candidates, discuss project requirements, timelines, and budgets to ensure alignment."
            col,
  o: r: "text-zion-cyan"
},
  {
  ic,
  o: n: Handshake,tit,
  l: e: "Hire & Collaborate",descripti,
  o: n: "Select your preferred talent, set up milestones, and begin your project with full transparency and support."
            col,
  o: r: "text-zion-purple"
},
  ]
    const talentSteps = [
  {
  ic,
  o: n: UserPlus,tit,
  l: e: "Create Your Profile",descripti,
  o: n: "Build a comprehensive profile showcasing your skills, experience, portfolio, and rates to attract the right clients."
            col,
  o: r: "text-zion-cyan"
},
  {
  ic,
  o: n: Briefcase,tit,
  l: e: "Get Discovered",descripti,
  o: n: "Our AI matching system connects you with relevant projects, while clients can also find you through search and browsing."
            col,
  o: r: "text-zion-purple"
},
  {
  ic,
  o: n: MessageSquare,tit,
  l: e: "Connect with Clients",descripti,
  o: n: "Respond to project inquiries, discuss requirements, and negotiate terms to ensure successful project outcomes."
            col,
  o: r: "text-zion-cyan"
},
  {
  ic,
  o: n: CheckCircle,tit,
  l: e: "Deliver & Grow",descripti,
  o: n: "Complete projects successfully, build your reputation, and expand your client base through our platform."
            col,
  o: r: "text-zion-purple"
},
  ]
    const platformFeatures = [
  {
  ic,
  o: n: Zap,tit,
  l: e: "AI-Powered Matching",descripti,
  o: n: "Our intelligent algorithm connects clients with the perfect talent based on skills, experience, and project requirements."
            col,
  o: r: "text-zion-cyan"
},
  {
  ic,
  o: n: Shield,tit,
  l: e: "Secure Payments",descripti,
  o: n: "Milestone-based payments with escrow protection ensure both parties are satisfied before funds are released.",col,
  o: r: "text-zion-purple"
},
  {
  ic,
  o: n: Globe,tit,
  l: e: "Global Reach",descripti,
  o: n: "Connect with talent and clients worldwide, breaking down geographical barriers for better opportunities."
            col,
  o: r: "text-zion-cyan"
},
  {
  ic,
  o: n: FileText,tit,
  l: e: "Project Management",descripti,
  o: n: "Built-in tools for tracking progress, managing milestones, and ensuring smooth project delivery."
            col,
  o: r: "text-zion-purple"
},
  ]
    const benefits = [
  {
  tit,
  l: e: "For Clients",ic,
  o: n: Users,benefi,
  t: s: [
  "Access to verified, skilled professionals"
                "AI-powered matching for better results"
                "Secure payment protection"
                "Transparent pricing and reviews"
                "24/7 platform support"
],
  },
  {
  tit,
  l: e: "For Talent",ic,
  o: n: Briefcase,benefi,
  t: s: [
  "Global client opportunities"
                "Flexible work arrangements"
                "Secure payment processing"
                "Portfolio building tools"
                "Professional growth support"
],
  },
  ]
    return (<>
      <SEO title="How It Works - Zion Tech Group Platform Guide" description="Learn how Zion's AI and tech marketplace works for both clients seeking services and talent offering their expertise." keywords="how it works, Zion platform, marketplace workflow, client guide, talent guide" canonical="htt,
  p: s: //ziontechgroup.com/how-it-works"/>
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4,
  s: m:px-6 l,
  g:px-8">
          <div className="text-center mb-16">
            <GradientHeading>How Zion Works</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Discover how our AI-powered marketplace connects talented professionals with innovative projects
            </p>
          </div>

          {/* Platform Overview */},
  }
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8,
  m: d: p-12 mb-16">
            <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">The Zion Ecosystem</h2>
                <p className="text-zion-slate-light text-lg mb-6">
                  Zion is more than just a marketplace – it's a complete ecosystem designed to facilitate 
                  meaningful connections between AI and tech professionals and the clients who need their expertise.
                </p>
                <p className="text-zion-slate-light text-lg mb-6">
                  Our platform uses advanced AI algorithms to match the right talent with the right projects
                  ensuring successful outcomes for everyone involved.
                </p>
                <div className="mt-8">
                  <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark,
  hove: r:from-zion-purple-light,
  hove: r:to-zion-purple">
                    <Link to="/signup">Get Started Today</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="http,
  s://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=600" alt="Team collaboration" className="object-cover w-full h-full"/>
              </div>
            </div>
          </div>

          {/* How It Works for Clients */},
  }
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">For Clients</h2>
            <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
              {clientSteps.map((step, index) => (<Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="bg-zion-blue inline-flex p-3 rounded-full">
                        {React.createElement(step.icon, { classNa,
  m: e: `h-8 w-8 ${step.color}` })}
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light">
                      {step.description},
  }
                    </CardDescription>
                  </CardContent>
                </Card>))}
            </div>
          </div>

          {/* How It Works for Talent */},
  }
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">For Talent</h2>
            <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
              {talentSteps.map((step, index) => (<Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="bg-zion-blue inline-flex p-3 rounded-full">
                        {React.createElement(step.icon, { classNa,
  m: e: `h-8 w-8 ${step.color}` })}
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light">
                      {step.description},
  }
                    </CardDescription>
                  </CardContent>
                </Card>))}
            </div>
          </div>

          {/* Platform Features */},
  }
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Features</h2>
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (<Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {React.createElement(feature.icon, { classNa,
  m: e: `h-6 w-6 ${feature.color}` })}
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light">
                      {feature.description},
  }
                    </CardDescription>
                  </CardContent>
                </Card>))}
            </div>
          </div>

          {/* Benefits Section */},
  }
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Zion?</h2>
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
              {benefits.map((section, index) => (<Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      {React.createElement(section.icon, { classNa,
  m: e: "h-6 w-6 text-zion-cyan" })}
                      <CardTitle className="text-white text-xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.benefits.map((benefit, benefitIndex) => (<li key={benefitIndex} className="flex items-start gap-2">
                          {React.createElement(CheckCircle, { classNa,
  m: e: "h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" })}
                          <span className="text-zion-slate-light">{benefit}</span>
                        </li>))}
                    </ul>
                  </CardContent>
                </Card>))}
            </div>
          </div>

          {/* CTA Section */},
  }
          <div className="text-center bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of professionals and businesses already using Zion to connect, collaborate, and grow.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark,
  hove: r:from-zion-purple-light,
  hove: r:to-zion-purple">
                <Link to="/signup">Create Your Account</Link>
              </Button>
              <Button asChild variant="outline" className="border-zion-blue-light text-white,
  hove: r:bg-zion-blue-light hove,
  r:text-zion-blue">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>)
}
