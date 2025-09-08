import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Users, Shield, BarChart3, Zap, Globe, Phone } from 'lucide-react';
export default function Enterprise() {
    const features = [
        {
            icon: <Users className="h-8 w-8 text-zion-cyan"/>,
            title: "Team Management",
            description: "Manage multiple teams, projects, and stakeholders with enterprise-grade collaboration tools."
        },
        {
            icon: <Shield className="h-8 w-8 text-zion-cyan"/>,
            title: "Advanced Security",
            description: "Enterprise-level security with SSO, role-based access control, and compliance certifications."
        },
        {
            icon: <BarChart3 className="h-8 w-8 text-zion-cyan"/>,
            title: "Analytics & Reporting",
            description: "Comprehensive insights into team performance, project metrics, and ROI tracking."
        },
        {
            icon: <Zap className="h-8 w-8 text-zion-cyan"/>,
            title: "Custom Integrations",
            description: "Seamlessly integrate with your existing tools and workflows through our API."
        },
        {
            icon: <Globe className="h-8 w-8 text-zion-cyan"/>,
            title: "Global Talent Pool",
            description: "Access to verified tech professionals from around the world, available 24/7."
        },
        {
            icon: <Phone className="h-8 w-8 text-zion-cyan"/>,
            title: "Dedicated Support",
            description: "Priority support with dedicated account managers and 24/7 technical assistance."
        }
    ];
    const plans = [
        {
            name: "Starter",
            price: "$999",
            period: "/month",
            description: "Perfect for growing teams",
            features: [
                "Up to 25 team members",
                "Basic analytics",
                "Email support",
                "Standard integrations"
            ]
        },
        {
            name: "Professional",
            price: "$2,499",
            period: "/month",
            description: "Ideal for established companies",
            features: [
                "Up to 100 team members",
                "Advanced analytics",
                "Priority support",
                "Custom integrations",
                "SSO authentication"
            ]
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "For large organizations",
            features: [
                "Unlimited team members",
                "Custom analytics",
                "Dedicated support",
                "Full API access",
                "Custom security",
                "On-premise options"
            ]
        }
    ];
    return (<div className="min-h-screen bg-background">
      <SEO title="Enterprise Solutions - Zion Tech Group" description="Enterprise-grade AI and tech solutions for large organizations. Scale your tech operations with Zion Tech Group's comprehensive enterprise platform." keywords="enterprise solutions, enterprise AI, tech consulting, team management, Zion Tech Group" canonical="https://ziontechgroup.com/enterprise"/>

const Enterprise: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Enterprise Solutions</h1>
      <p className="mt-4 text-gray-700">
        Explore our enterprise-grade AI, cloud, and cybersecurity solutions tailored for large organizations.
      </p>
      <ul className="mt-6 list-disc pl-6 space-y-2 text-gray-700">
        <li>AI-powered analytics and automation</li>
        <li>Cloud modernization and FinOps</li>
        <li>Zero Trust cybersecurity and compliance</li>
        <li>Scalable infrastructure and observability</li>
      </ul>
      <a href="/contact" className="mt-8 inline-block rounded-md bg-blue-600 px-5 py-2.5 text-white hover: bg-blue-700">
        Talk to an expert
      </a>
    </div>
  )};

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Everything you need to manage large-scale tech operations efficiently and securely
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (<Card key={index} className="bg-zion-blue border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enterprise Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your organization's needs and scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (<Card key={index} className={`bg-zion-blue-dark border-zion-purple/20 ${plan.name === "Professional" ? "ring-2 ring-zion-purple" : ""}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <Check className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0"/>
                        {feature}
                      </li>))}
                  </ul>
                  <Button className={`w-full ${plan.name === "Professional"
                ? "bg-zion-purple hover:bg-zion-purple-light"
                : "bg-zion-blue hover:bg-zion-blue-light"}`}>
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Scale Your Tech Operations?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join leading organizations that trust Zion Tech Group for their enterprise tech needs. 
              Get started today with a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>);
}
