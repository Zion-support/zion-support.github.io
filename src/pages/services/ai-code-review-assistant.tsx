import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ;
  Code, Brain, Shield, Zap, CheckCircle, Star, ArrowRight,
  Users, Clock, BarChart3, GitBranch, Bug, FileText,
  ExternalLink, Phone, Mail, MapPin, Globe;
} from "lucide-react";

export default function AICodeReviewAssistant() {;
  const features = [ "AI-Powered Code Analysis",
    "Automated Security Scanning",
    "Performance Optimization Suggestions",
    "Code Quality Metrics",
    "Real-time Collaboration",
    "Integration with Git Platforms",
    "Custom Rule Configuration",
    "Automated Testing Recommendations" ];

  const benefits = [ "Reduce code review time by 70%",
    "Catch 95% of security vulnerabilities",
    "Improve code quality by 60%",
    "Accelerate development cycles",
    "Reduce production bugs by 80%",
    "Enhance team collaboration" ];

  const pricing = [;
    {;
      name: "Starter",
      price: "$299/month",
      details: ["Up to 5 developers", "Basic AI analysis", "GitHub integration", "Email support", "10,000 lines/month"];
},
    {;
      name: "Professional",
      price: "$799/month",
      details: ["Up to 25 developers", "Advanced AI analysis", "Multi-platform integration", "Priority support", "100,000 lines/month", "Custom rules"];
},
    {;
      name: "Enterprise",
      price: "$1,999/month",
      details: ["Unlimited developers", "Full AI suite", "All integrations", "24/7 support", "Unlimited lines", "Custom training", "SLA guarantee"];
}
  ];

  const useCases = [;
    {;
      title: "Startup Development Teams",
      description: "Accelerate development with AI-powered code reviews that catch issues before they reach production.",
      icon: Users;
},
    {;
      title: "Enterprise Security",
      description: "Ensure code security compliance with automated vulnerability detection and security best practices.",
      icon: Shield;
},
    {;
      title: "DevOps Integration",
      description: "Seamlessly integrate with CI/CD pipelines for automated code quality checks and deployment gates.",
      icon: GitBranch;
}
  ];

  return (;
    <>;
      <Head>;
        <title>AI Code Review Assistant - Zion Tech Group</title>;
        <meta name="description" content="Revolutionary AI-powered code review platform that automates code analysis, security scanning, and quality assurance with 95% accuracy." />;
        <meta name="keywords" content="AI code review, automated code analysis, security scanning, code quality, development tools, DevOps" />;
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-code-review-assistant" />;
      </Head>;

      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20 text-center">;
          <div className="max-w-6xl mx-auto px-6">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;
              <Code className="w-4 h-4 mr-2" />;
              AI-Powered Development Tools;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              AI Code Review Assistant;
            </h1>;
            <p className="text-blue-100 text-xl max-w-3xl mx-auto mb-8">;
              Revolutionize your development workflow with AI-powered code analysis that catches bugs,
              security vulnerabilities, and performance issues before they reach production.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <Link href="#pricing" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center font-semibold">;
                View Pricing <ArrowRight className="w-4 h-4 ml-2" />;
              </Link>;
              <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">;
                Schedule Demo <Phone className="w-4 h-4 ml-2" />;
              </Link>;
            </div>;
          </div>;
        </section>;

        {/* Features Section */}
        <section className="py-16 max-w-6xl mx-auto px-6">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced AI Features</h2>;
            <p className="text-gray-600 text-lg">Powered by cutting-edge machine learning algorithms</p>;
          </div>;
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {features.map((feature, index) => (;
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">;
                <div className="flex items-center mb-3">;
                  <Brain className="w-6 h-6 text-blue-600 mr-3" />;
                  <h3 className="font-semibold text-gray-900">{feature}</h3>;
                </div>;
                <p className="text-gray-600 text-sm">;
                  {feature === "AI-Powered Code Analysis" && "Advanced ML models analyze code patterns, complexity, and best practices"}
                  {feature === "Automated Security Scanning" && "Detect vulnerabilities, security flaws, and compliance issues automatically"}
                  {feature === "Performance Optimization Suggestions" && "Identify performance bottlenecks and suggest optimizations"}
                  {feature === "Code Quality Metrics" && "Comprehensive quality scoring and improvement recommendations"}
                  {feature === "Real-time Collaboration" && "Team-based code review workflows with instant notifications"}
                  {feature === "Integration with Git Platforms" && "Seamless integration with GitHub, GitLab, and Bitbucket"}
                  {feature === "Custom Rule Configuration" && "Define custom coding standards and business-specific rules"}
                  {feature === "Automated Testing Recommendations" && "Suggest test cases and identify untested code paths"}
                </p>;
              </div>;
            ))}
          </div>;
        </section>;

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">;
          <div className="max-w-6xl mx-auto px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>;
              <p className="text-gray-600 text-lg">Join thousands of development teams achieving better code quality</p>;
            </div>;
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {benefits.map((benefit, index) => (;
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">;
                  <div className="flex items-center mb-3">;
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />;
                    <h3 className="font-semibold text-gray-900">{benefit}</h3>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Use Cases Section */}
        <section className="py-16 max-w-6xl mx-auto px-6">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>;
            <p className="text-gray-600 text-lg">Ideal solutions for different development scenarios</p>;
          </div>;
          <div className="grid md:grid-cols-3 gap-8">;
            {useCases.map((useCase, index) => (;
              <div key={index} className="text-center">;
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <useCase.icon className="w-8 h-8 text-blue-600" />;
                </div>;
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>;
                <p className="text-gray-600">{useCase.description}</p>;
              </div>;
            ))}
          </div>;
        </section>;

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-50">;
          <div className="max-w-6xl mx-auto px-6">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Competitive Pricing</h2>;
              <p className="text-gray-600 text-lg">Choose the plan that fits your team size and needs</p>;
            </div>;
            <div className="grid md:grid-cols-3 gap-8">;
              {pricing.map((tier, index) => (;
                <div key={index} className={`bg-white rounded-xl p-8 shadow-lg ${tier.name === 'Professional' ? 'ring-2 ring-blue-500 relative' : ''}`}>;
                  {tier.name === 'Professional' && (;
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>;
                    </div>;
                  )}
                  <div className="text-center mb-6">;
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>;
                    <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>;
                    <p className="text-gray-600">per month</p>;
                  </div>;
                  <ul className="space-y-3 mb-8">;
                    {tier.details.map((detail, detailIndex) => (;
                      <li key={detailIndex} className="flex items-start">;
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />;
                        <span className="text-gray-700">{detail}</span>;
                      </li>;
                    ))}
                  </ul>;
                  <Link href="/contact" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center font-semibold">;
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />;
                  </Link>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Contact Section */}
        <section className="py-16 bg-blue-600 text-white">;
          <div className="max-w-4xl mx-auto px-6 text-center">;
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Code Reviews?</h2>;
            <p className="text-blue-100 text-lg mb-8">;
              Join thousands of development teams using AI to improve code quality and accelerate delivery.;
            </p>;
            <div className="flex flex-wrap justify-center gap-6 mb-8">;
              <div className="flex items-center">;
                <Phone className="w-5 h-5 mr-2" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center">;
                <Mail className="w-5 h-5 mr-2" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center">;
                <MapPin className="w-5 h-5 mr-2" />;
                <span>364 E Main St STE 1008, Middletown DE 19709</span>;
              </div>;
            </div>;
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center font-semibold">;
              Contact Us Today <ArrowRight className="w-4 h-4 ml-2" />;
            </Link>;
          </div>;
        </section>;
      </div>;
    </>;
  );
}