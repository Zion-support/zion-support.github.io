import {Link} from &apos;react-router-dom&apos;; import {Button} from &apos;@/components/ui/button&apos;; import {Card,CardContent,CardDescription,CardHeader,CardTitle} from &apos;@/components/ui/card&apos;; import {Badge} from &apos;@/components/ui/badge&apos;; import {SERVICE_CATEGORIES} from &apos;@/data/microSaasServices&apos;; import { Sparkles,Zap,TrendingUp,ArrowRight,Star,CheckCircle,Globe,MessageCircle export function NewServicesShowcase($1) { const featuredServices = SERVICE_CATEGORIES.map(category => category.services[0]).filter(Boolean); return (<section className=&quot;py-20 bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate relative overflow-hidden&quot;> {} <div className=&quot;absolute inset-0&quot;> <div className=&quot;absolute top-1/4 left-1/4 w-64 h-64 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse&quot;></div> <div className=&quot;absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000&quot;></div> <div className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/5 rounded-full filter blur-3xl animate-pulse animation-delay-4000&quot;></div> </div> <div className=&quot;container mx-auto px-4 relative z-10&quot;> {} <div className=&quot;text-center mb-16&quot;> <div className=&quot;flex items-center justify-center gap-2 mb-4&quot;> <Sparkles className=&quot;w-8 h-8 text-zion-cyan&quot; /> <h2 className=&quot;text-3xl md:text-4xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent&quot;> Revolutionary AI & Micro SAAS Services </h2> <Sparkles className=&quot;w-8 h-8 text-zion-cyan&quot; /> </div> <p className=&quot;text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed&quot;> Transform your business with cutting-edge AI solutions,professional IT services,and affordable micro SAAS tools. <span className=&quot;text-zion-cyan font-semibold&quot;> Save up to 55% </span> on enterprise-grade technology solutions. </p> </div> {} <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12&quot;> {featuredServices.map((service,index) => (<Card key={service.id} className=&quot;group relative overflow-hidden border-0 bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate/50 backdrop-blur-sm hover:from-zion-blue-dark/70 hover:to-zion-slate/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/20&quot; style=&quot;{{{ animationDelay: `${index * 200}}&quot;ms` }}> <div className=&quot;absolute inset-0 bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500&quot;></div> <CardHeader className=&quot;relative z-10&quot;> <div className=&quot;flex items-center justify-between mb-4&quot;> <Badge variant=&quot;secondary&quot; className=&quot;bg-zion-purple/20 text-zion-cyan border-zion-purple/30&quot;> {service.category} </Badge> <div className=&quot;flex items-center gap-1 text-yellow-500&quot;> <Star className=&quot;w-4 h-4 fill-current&quot; /> <span className=&quot;text-sm font-medium&quot;>{service.rating}</span> </div> </div> <CardTitle className=&quot;text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors&quot;> {service.title} </CardTitle> <CardDescription className=&quot;text-zion-slate-light text-sm leading-relaxed&quot;> {service.description} </CardDescription> </CardHeader> <CardContent className=&quot;relative z-10 space-y-4&quot;> {} <div className=&quot;flex items-center justify-between p-3 bg-zion-blue/20 rounded-lg border border-zion-blue-light/20&quot;> <div> <div className=&quot;text-2xl font-bold text-white&quot;> ${service.zionPrice} <spanclassName=&quot;text-sm text-zion-slate-light ml-1&quot;> {service.pricingModel === &apos;monthly&apos; ? &apos;/month&apos; : service.pricingModel === &apos;yearly&apos; ? &apos;/year&apos; : &quot;} </span> </div> <div className=&quot;text-sm text-zion-slate-light&quot;> Market: ${service.averageMarketPrice} </div> </div> <div className=&quot;text-right&quot;> <Badge className=&quot;bg-green-600 text-white&quot;> Save {service.savings}% </Badge> </div> </div> {} <div> <h4 className=&quot;text-sm font-semibold text-zion-cyan mb-2&quot;>Key Features</h4> <div className=&quot;space-y-1&quot;> {service.features.slice(0,3).map((feature,idx) => (<div key={idx} className=&quot;flex items-center gap-2 text-xs text-zion-slate-light&quot;> <CheckCircle className=&quot;w-3 h-3 text-zion-cyan&quot; /> <span className=&quot;truncate&quot;>{feature}</span> </div>))} </div> </div> {} <div className=&quot;flex items-center justify-between text-sm&quot;> <div className=&quot;flex items-center gap-2&quot;> <Zap className=&quot;w-4 h-4 text-zion-cyan&quot; /> <span className=&quot;text-zion-slate-light&quot;>AI Score:</span> <span className=&quot;text-zion-cyan font-semibold&quot;>{service.aiScore}</span> </div> <div className=&quot;flex items-center gap-2&quot;> <TrendingUp className=&quot;w-4 h-4 text-zion-cyan&quot; /> <span className=&quot;text-zion-slate-light&quot;>{service.reviewCount} reviews</span> </div> </div> {} <Button className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:scale-105 transition-transform duration-300&quot; asChild> <Link to={service.contactLink}> Get Started <ArrowRight className=&quot;w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300&quot; /> </Link> </Button> </CardContent> </Card>))} </div> {} <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 mb-12&quot;> {SERVICE_CATEGORIES.map((category,index) => (<div key={category.name} className=&quot;text-center p-6 rounded-lg bg-zion-blue-dark/30 border border-zion-blue-light/20 hover:border-zion-cyan/30 transition-all duration-300 hover:scale-105&quot; style=&quot;{{{ animationDelay: `${index * 300}}&quot;ms` }}> <div className=&quot;text-4xl mb-4&quot;>{category.icon}</div> <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{category.name}</h3> <p className=&quot;text-zion-slate-light mb-4&quot;>{category.description}</p> <div className=&quot;text-2xl font-bold text-zion-cyan mb-2&quot;> {category.services.length}+ Services </div> <Button variant=&quot;outline&quot; className=&quot;border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10&quot; asChild> <Link to=&quot;/micro-saas-services&quot;> Explore {category.name} <ArrowRight className=&quot;w-4 h-4 ml-2&quot; /> </Link> </Button> </div>))} </div> {} <div className=&quot;text-center&quot;> <div className=&quot;bg-gradient-to-r from-zion-blue-dark/50 to-zion-slate/50 rounded-2xl p-8 border border-zion-blue-light/20&quot;> <h3 className=&quot;text-2xl md:text-3xl font-bold text-white mb-4&quot;> Ready to Transform Your Business? </h3> <p className=&quot;text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto&quot;> Join thousands of businesses that have already revolutionized their operations with our AI-powered solutions and professional IT services. </p> <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;> <Button size=&quot;lg&quot; className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3&quot; asChild> <Link to=&quot;/micro-saas-services&quot;> <Globe className=&quot;w-5 h-5 mr-2&quot; /> View All Services </Link> </Button> <Button size=&quot;lg&quot; variant=&quot;outline&quot; className=&quot;border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3&quot; asChild> <Link to=&quot;/contact&quot;> <MessageCircle className=&quot;w-5 h-5 mr-2&quot; /> Get Free Consultation </Link> </Button> </div> <div className=&quot;mt-8 flex flex-wrap justify-center gap-8 text-sm text-zion-slate-light&quot;> <div className=&quot;flex items-center gap-2&quot;> <CheckCircle className=&quot;w-4 h-4 text-zion-cyan&quot; /> <span>24/7 Expert Support</span> </div> <div className=&quot;flex items-center gap-2&quot;> <CheckCircle className=&quot;w-4 h-4 text-zion-cyan&quot; /> <span>Enterprise Security</span> </div> <div className=&quot;flex items-center gap-2&quot;> <CheckCircle className=&quot;w-4 h-4 text-zion-cyan&quot; /> <span>AI-Powered Solutions</span> </div> </div> </div> </div> </div> </section>)} export default NewServicesShowcase;&apos;;&apos;;
import {Link} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {SERVICE_CATEGORIES} from '@/data/microSaasServices';
import { Sparkles, Zap, TrendingUp, ArrowRight, Star, CheckCircle, Globe, MessageCircle export function NewServicesShowcase("props": "any) {;
    // Get featured services from each category;
    const featuredServices = SERVICE_CATEGORIES.map(category => category.services[0]).filter(Boolean);
    return (<section className="py-20 bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate relative overflow-hidden">;
      {/* Animated Background Elements */"}
      <div className="absolute inset-0">;
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>;
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/5 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>;
      </div>;
      <div className="container mx-auto px-4 relative z-10">;
        {/* Section Header */}
        <div className="text-center mb-16">;
          <div className="flex items-center justify-center gap-2 mb-4">;
            <Sparkles className="w-8 h-8 text-zion-cyan" />;
            <h2 className="text-3xl "md": "text-4xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">;
              Revolutionary AI & Micro SAAS Services;
            </h2>;
            <Sparkles className="w-8 h-8 text-zion-cyan" />;
          </div>;
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">;
            Transform your business with cutting-edge AI solutions", professional IT services, and affordable micro SAAS tools.;
            <span className="text-zion-cyan font-semibold"> Save up to 55% </span>;
            on enterprise-grade technology solutions.;
          </p>;
        </div>;
        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-8 mb-12">;
          {featuredServices.map((service", index) => (<Card key={service.id} className="group relative overflow-hidden border-0 bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate/50 backdrop-blur-sm "hover": "from-zion-blue-dark/70 "hover":to-zion-slate/70 transition-all duration-500 "hover":scale-105 "hover":shadow-2xl "hover":shadow-zion-purple/20" style="{{{ "animationDelay": `${index * 200"}}"ms` }}>;
              <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5 opacity-0 group-"hover": "opacity-100 transition-opacity duration-500"></div>;
              <CardHeader className="relative z-10">;
                <div className="flex items-center justify-between mb-4">;
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">;
                    {service.category"}
                  </Badge>;
                  <div className="flex items-center gap-1 text-yellow-500">;
                    <Star className="w-4 h-4 fill-current" />;
                    <span className="text-sm font-medium">{service.rating}</span>;
                  </div>;
                </div>;
                <CardTitle className="text-xl font-bold text-white mb-3 group-"hover": "text-zion-cyan transition-colors">;
                  {service.title"}
                </CardTitle>;
                <CardDescription className="text-zion-slate-light text-sm leading-relaxed">;
                  {service.description}
                </CardDescription>;
              </CardHeader>;
              <CardContent className="relative z-10 space-y-4">;
import { Sparkles, Zap, TrendingUp, ArrowRight, Star, CheckCircle, Globe, MessageCircle export function NewServicesShowcase($1) {
    // Get featured services from each category
    const featuredServices = SERVICE_CATEGORIES.map(category => category.services[0]).filter(Boolean);
    return (<section className="py-20 bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/5 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-zion-cyan" />
            <h2 className="text-3xl "md": text-4xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Revolutionary AI & Micro SAAS Services
            </h2>
            <Sparkles className="w-8 h-8 text-zion-cyan" />
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI solutions, professional IT services, and affordable micro SAAS tools.
            <span className="text-zion-cyan font-semibold"> Save up to 55% </span>
            on enterprise-grade technology solutions.
          </p>
        </div>
        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (<Card key={service.id} className="group relative overflow-hidden border-0 bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate/50 backdrop-blur-sm "hover": from-zion-blue-dark/70 hover:to-zion-slate/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/20" style="{{{ animationDelay: `${index * 200}}"ms` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5 opacity-0 group-"hover": opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                    {service.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-white mb-3 group-"hover": text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                {/* Pricing */}
                <div className="flex items-center justify-between p-3 bg-zion-blue/20 rounded-lg border border-zion-blue-light/20">;
                  <div>;
                    <div className="text-2xl font-bold text-white">;
                      ${service.zionPrice}
                      <span className="text-sm text-zion-slate-light ml-1">;
                        {service.pricingModel === 'monthly' ? '/month' : "service.pricingModel === 'yearly' ? '/year' : ''"}
                      </span>;
                    </div>;
                    <div className="text-sm text-zion-slate-light">;
                      "Market": "${service.averageMarketPrice"}
                    </div>;
                  </div>;
                  <div className="text-right">;
                    <Badge className="bg-green-600 text-white">;
                      Save {service.savings}%;
                    </Badge>;
                  </div>;
                </div>;
                      <spanclassName="text-sm text-zion-slate-light ml-1">
                        {service.pricingModel === 'monthly' ? '/month' : service.pricingModel === 'yearly' ? '/year' : "}
                      </span>
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      "Market": ${service.averageMarketPrice}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-600 text-white">
                      Save {service.savings}%
                    </Badge>
                  </div>
                </div>
                {/* Key Features */}
                <div>;
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>;
                  <div className="space-y-1">;
                    {service.features.slice(0, 3).map((feature, idx) => (<div key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">;
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />;
                        <span className="truncate">{feature}</span>;
                      </div>))}
                  </div>;
                </div>;
                {/* AI Score */}
                <div className="flex items-center justify-between text-sm">;
                  <div className="flex items-center gap-2">;
                    <Zap className="w-4 h-4 text-zion-cyan" />;
                    <span className="text-zion-slate-light">AI "Score": "</span>;
                    <span className="text-zion-cyan font-semibold">{service.aiScore"}</span>;
                  </div>;
                  <div className="flex items-center gap-2">;
                    <TrendingUp className="w-4 h-4 text-zion-cyan" />;
                    <span className="text-zion-slate-light">{service.reviewCount} reviews</span>;
                  </div>;
                </div>;
                {/* CTA Button */}
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover": "from-zion-purple-light "hover":to-zion-purple text-white group-"hover":scale-105 transition-transform duration-300" asChild>;
                  <Link to={service.contactLink"}>;
                    Get Started;
                    <ArrowRight className="w-4 h-4 ml-2 group-"hover": "translate-x-1 transition-transform duration-300" />;
                  </Link>;
                </Button>;
              </CardContent>;
            </Card>))"}
        </div>;
        {/* Category Overview */}
        <div className="grid grid-cols-1 "md": "grid-cols-3 gap-8 mb-12">;
          {SERVICE_CATEGORIES.map((category", index) => (<div key={category.name} className="text-center p-6 rounded-lg bg-zion-blue-dark/30 border border-zion-blue-light/20 "hover": "border-zion-cyan/30 transition-all duration-300 "hover":scale-105" style="{{{ "animationDelay": `${index * 300"}}"ms` }}>;
              <div className="text-4xl mb-4">{category.icon}</div>;
              <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>;
              <p className="text-zion-slate-light mb-4">{category.description}</p>;
              <div className="text-2xl font-bold text-zion-cyan mb-2">;
                {category.services.length}+ Services;
              </div>;
              <Button variant="outline" className="border-zion-cyan/30 text-zion-cyan "hover": "bg-zion-cyan/10" asChild>;
                <Link to="/micro-saas-services">;
                  Explore {category.name"}
                  <ArrowRight className="w-4 h-4 ml-2" />;
                </Link>;
              </Button>;
            </div>))}
        </div>;
        {/* CTA Section */}
        <div className="text-center">;
          <div className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-slate/50 rounded-2xl p-8 border border-zion-blue-light/20">;
            <h3 className="text-2xl "md": "text-3xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">;
              Join thousands of businesses that have already revolutionized their operations with our AI-powered solutions and professional IT services.;
            </p>;
            <div className="flex flex-col "sm":flex-row gap-4 justify-center">;
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover":from-zion-purple-light "hover":to-zion-purple text-white px-8 py-3" asChild>;
                <Link to="/micro-saas-services">;
                  <Globe className="w-5 h-5 mr-2" />;
                  View All Services;
                </Link>;
              </Button>;
              <Button size="lg" variant="outline" className="border-zion-cyan/30 text-zion-cyan "hover":bg-zion-cyan/10 px-8 py-3" asChild>;
                <Link to="/contact">;
                  <MessageCircle className="w-5 h-5 mr-2" />;
                  Get Free Consultation;
                </Link>;
              </Button>;
            </div>;
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-zion-slate-light">;
              <div className="flex items-center gap-2">;
                <CheckCircle className="w-4 h-4 text-zion-cyan" />;
                <span>24/7 Expert Support</span>;
              </div>;
              <div className="flex items-center gap-2">;
                <CheckCircle className="w-4 h-4 text-zion-cyan" />;
                <span>Enterprise Security</span>;
              </div>;
              <div className="flex items-center gap-2">;
                <CheckCircle className="w-4 h-4 text-zion-cyan" />;
                <span>AI-Powered Solutions</span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>)"}
;
export default NewServicesShowcase;
                  </div>
                </div>
                {/* AI Score */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light">AI "Score": </span>
                    <span className="text-zion-cyan font-semibold">{service.aiScore}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-slate-light">{service.reviewCount} reviews</span>
                  </div>
                </div>
                {/* CTA Button */}
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover": from-zion-purple-light hover:to-zion-purple text-white group-hover:scale-105 transition-transform duration-300" asChild>
                  <Link to={service.contactLink}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-"hover": translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>))}
        </div>
        {/* Category Overview */}
        <div className="grid grid-cols-1 "md": grid-cols-3 gap-8 mb-12">
          {SERVICE_CATEGORIES.map((category, index) => (<div key={category.name} className="text-center p-6 rounded-lg bg-zion-blue-dark/30 border border-zion-blue-light/20 "hover": border-zion-cyan/30 transition-all duration-300 hover:scale-105" style="{{{ animationDelay: `${index * 300}}"ms` }}>
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{category.name}
              <p className="text-zion-slate-light mb-4">{category.description}</p>
              <div className="text-2xl font-bold text-zion-cyan mb-2">
                {category.services.length}+ Services
              </div>
              <Button variant="outline" className="border-zion-cyan/30 text-zion-cyan "hover": bg-zion-cyan/10" asChild>
                <Link to="/micro-saas-services">
                  Explore {category.name}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>))}
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-slate/50 rounded-2xl p-8 border border-zion-blue-light/20">
            <h3 className="text-2xl "md": text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already revolutionized their operations with our AI-powered solutions and professional IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3" asChild>
                <Link to="/micro-saas-services">
                  <Globe className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3" asChild>
                <Link to="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-zion-slate-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-zion-cyan" />
                <span>AI-Powered Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)}
export default NewServicesShowcase;';';
import {Link} from 'react-router-dom'; import {Button} from '@/components/ui/button'; import {Card,CardContent,CardDescription,CardHeader,CardTitle} from '@/components/ui/card'; import {Badge} from '@/components/ui/badge'; import {SERVICE_CATEGORIES} from '@/data/microSaasServices'; import { Sparkles,Zap,TrendingUp,ArrowRight,Star,CheckCircle,Globe,MessageCircle export function NewServicesShowcase($1) { const featuredServices = SERVICE_CATEGORIES.map(category => category.services[0]).filter(Boolean); return (<section className="py-20 bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate relative overflow-hidden"> {} <div className="absolute inset-0"> <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div> <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div> <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/5 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div> </div> <div className="container mx-auto px-4 relative z-10"> {} <div className="text-center mb-16"> <div className="flex items-center justify-center gap-2 mb-4"> <Sparkles className="w-8 h-8 text-zion-cyan" /> <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent"> Revolutionary AI & Micro SAAS Services </h2> <Sparkles className="w-8 h-8 text-zion-cyan" /> </div> <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed"> Transform your business with cutting-edge AI solutions,professional IT services,and affordable micro SAAS tools. <span className="text-zion-cyan font-semibold"> Save up to 55% </span> on enterprise-grade technology solutions. </p> </div> {} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"> {featuredServices.map((service,index) => (<Card key={service.id} className="group relative overflow-hidden border-0 bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate/50 backdrop-blur-sm hover:from-zion-blue-dark/70 hover:to-zion-slate/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/20" style="{{{ animationDelay: `${index * 200}}"ms` }}> <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <CardHeader className="relative z-10"> <div className="flex items-center justify-between mb-4"> <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30"> {service.category} </Badge> <div className="flex items-center gap-1 text-yellow-500"> <Star className="w-4 h-4 fill-current" /> <span className="text-sm font-medium">{service.rating}</span> </div> </div> <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors"> {service.title} </CardTitle> <CardDescription className="text-zion-slate-light text-sm leading-relaxed"> {service.description} </CardDescription> </CardHeader> <CardContent className="relative z-10 space-y-4"> {} <div className="flex items-center justify-between p-3 bg-zion-blue/20 rounded-lg border border-zion-blue-light/20"> <div> <div className="text-2xl font-bold text-white"> ${service.zionPrice} <spanclassName="text-sm text-zion-slate-light ml-1"> {service.pricingModel === 'monthly' ? '/month' : service.pricingModel === 'yearly' ? '/year' : "} </span> </div> <div className="text-sm text-zion-slate-light"> Market: ${service.averageMarketPrice} </div> </div> <div className="text-right"> <Badge className="bg-green-600 text-white"> Save {service.savings}% </Badge> </div> </div> {} <div> <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4> <div className="space-y-1"> {service.features.slice(0,3).map((feature,idx) => (<div key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light"> <CheckCircle className="w-3 h-3 text-zion-cyan" /> <span className="truncate">{feature}</span> </div>))} </div> </div> {} <div className="flex items-center justify-between text-sm"> <div className="flex items-center gap-2"> <Zap className="w-4 h-4 text-zion-cyan" /> <span className="text-zion-slate-light">AI Score:</span> <span className="text-zion-cyan font-semibold">{service.aiScore}</span> </div> <div className="flex items-center gap-2"> <TrendingUp className="w-4 h-4 text-zion-cyan" /> <span className="text-zion-slate-light">{service.reviewCount} reviews</span> </div> </div> {} <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:scale-105 transition-transform duration-300" asChild> <Link to={service.contactLink}> Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" /> </Link> </Button> </CardContent> </Card>))} </div> {} <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> {SERVICE_CATEGORIES.map((category,index) => (<div key={category.name} className="text-center p-6 rounded-lg bg-zion-blue-dark/30 border border-zion-blue-light/20 hover:border-zion-cyan/30 transition-all duration-300 hover:scale-105" style="{{{ animationDelay: `${index * 300}}"ms` }}> <div className="text-4xl mb-4">{category.icon}</div> <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3> <p className="text-zion-slate-light mb-4">{category.description}</p> <div className="text-2xl font-bold text-zion-cyan mb-2"> {category.services.length}+ Services </div> <Button variant="outline" className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10" asChild> <Link to="/micro-saas-services"> Explore {category.name} <ArrowRight className="w-4 h-4 ml-2" /> </Link> </Button> </div>))} </div> {} <div className="text-center"> <div className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-slate/50 rounded-2xl p-8 border border-zion-blue-light/20"> <h3 className="text-2xl md:text-3xl font-bold text-white mb-4"> Ready to Transform Your Business? </h3> <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto"> Join thousands of businesses that have already revolutionized their operations with our AI-powered solutions and professional IT services. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3" asChild> <Link to="/micro-saas-services"> <Globe className="w-5 h-5 mr-2" /> View All Services </Link> </Button> <Button size="lg" variant="outline" className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3" asChild> <Link to="/contact"> <MessageCircle className="w-5 h-5 mr-2" /> Get Free Consultation </Link> </Button> </div> <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-zion-slate-light"> <div className="flex items-center gap-2"> <CheckCircle className="w-4 h-4 text-zion-cyan" /> <span>24/7 Expert Support</span> </div> <div className="flex items-center gap-2"> <CheckCircle className="w-4 h-4 text-zion-cyan" /> <span>Enterprise Security</span> </div> <div className="flex items-center gap-2"> <CheckCircle className="w-4 h-4 text-zion-cyan" /> <span>AI-Powered Solutions</span> </div> </div> </div> </div> </div> </section>)} export default NewServicesShowcase;';';