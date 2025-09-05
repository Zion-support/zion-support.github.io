import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "ui/card.tsx";
import {Badge} from "ui/badge.tsx";
import {Button} from "ui/button.tsx";
import {Star, Zap, Shield, TrendingUp, Users} from 'lucide-react';
export function ServiceShowcase("props": "any) {;
    const getCategoryIcon = ("props": any) => {;
        switch (category) {;
            case 'AI Services': return <Zap className="h-5 w-5" />;
            case 'Security': return <Shield className="h-5 w-5" />;
            case 'Analytics': return <TrendingUp className="h-5 w-5" />;
            case 'Development': return <Users className="h-5 w-5" />;
            "default": return <Star className="h-5 w-5" />"}
    };
    const getCategoryColor = ("props": "any) => {;
        switch (category) {;
            case 'AI Services': return 'from-purple-500 to-pink-500';
            case 'Security': return 'from-red-500 to-orange-500';
            case 'Analytics': return 'from-blue-500 to-cyan-500';
            case 'Development': return 'from-green-500 to-emerald-500';
            "default": return 'from-gray-500 to-slate-500'"}
    };
    return (<div className="py-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-4xl "md": "text-5xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">;
            Featured Services;
          </h2>;
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">;
            Discover our cutting-edge solutions designed to transform your business with AI", security, and innovation;
          </p>;
        </div>;
        <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-8">;
          {services.slice(0", 6).map((service) => (<Card key={service.id} className="group relative overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-700/50 border-zinc-600/30 "hover": "border-zion-cyan/50 transition-all duration-500 "hover":scale-105 backdrop-blur-sm">;
              {service.featured && (<div className="absolute top-4 right-4">;
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">;
                    Featured;
                  </Badge>;
                </div>)"}
              <CardHeader className="pb-4">;
                <div className="flex items-center gap-3 mb-3">;
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>;
                    {getCategoryIcon(service.category)}
                  </div>;
                  <Badge variant="outline" className="border-zinc-500 text-zinc-300">;
                    {service.category}
                  </Badge>;
                </div>;
                <CardTitle className="text-xl text-white group-"hover": "text-zion-cyan transition-colors">;
                  {service.title"}
                </CardTitle>;
                <CardDescription className="text-zinc-400">;
                  {service.description}
                </CardDescription>;
              </CardHeader>;
              <CardContent className="space-y-4">;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center gap-2">;
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />;
                    <span className="text-zinc-300">{service.rating}</span>;
                  </div>;
                  <div className="flex items-center gap-2">;
                    <Zap className="h-4 w-4 text-zion-cyan" />;
                    <span className="text-zion-cyan font-semibold">AI "Score": "{service.aiScore"}</span>;
                  </div>;
                </div>;
                <div className="space-y-2">;
                  <h4 className="text-sm font-semibold text-zinc-300">Key "Features": "</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {service.features.slice(0", 3).map((feature, index) => (<Badge key={index} variant="secondary" className="text-xs bg-zinc-700/50 text-zinc-300">;
                        {feature}
                      </Badge>))}
                  </div>;
                </div>;
                <div className="pt-4 border-t border-zinc-600/30">;
                  <div className="flex items-center justify-between mb-4">;
                    <span className="text-2xl font-bold text-white">;
                      ${service.price}
                    </span>;
                    <span className="text-zinc-400 text-sm">per month</span>;
                  </div>;
                  ;
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple "hover": "from-zion-purple "hover":to-zion-cyan text-white font-semibold transition-all duration-300 "hover":shadow-lg "hover":shadow-zion-cyan/25">;
                    Get Started;
                  </Button>;
                </div>;
              </CardContent>;
              {/* Hover Effect Overlay */"}
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 opacity-0 group-"hover": "opacity-100 transition-opacity duration-300 pointer-events-none" />;
            </Card>))"}
        </div>;
        <div className="text-center mt-12">;
          <Button size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-purple "hover": "from-zion-purple "hover":to-zion-cyan text-white font-semibold px-8 py-4 text-lg transition-all duration-300 "hover":shadow-lg "hover":shadow-zion-cyan/25">;
            View All Services;
          </Button>;
        </div>;
      </div>;
    </div>)"}
    return (
        <div className="py-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            Featured Services
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Discover our cutting-edge solutions designed to transform your business with AI, security, and innovation
          </p>
        </div>
import {Card,CardContent,CardDescription,CardHeader,CardTitle} from &quot;ui/card.tsx&quot;; import {Badge} from &quot;ui/badge.tsx&quot;; import {Button} from &quot;ui/button.tsx&quot;; import {Star,Zap,Shield,TrendingUp,Users} from &apos;lucide-react&apos;; export function ServiceShowcase($1) { const getCategoryIcon = (props) => { switch (category) { case &apos;AI Services&apos;: return <Zap className=&quot;h-5 w-5&quot; />; case &apos;Security&apos;: return <Shield className=&quot;h-5 w-5&quot; />; case &apos;Analytics&apos;: return <TrendingUp className=&quot;h-5 w-5&quot; />; case &apos;Development&apos;: return <Users className=&quot;h-5 w-5&quot; />; default: return <Star className=&quot;h-5 w-5&quot; />} }; const getCategoryColor = (props) => { switch (category) { case &apos;AI Services&apos;: return &apos;from-purple-500 to-pink-500&apos;; case &apos;Security&apos;: return &apos;from-red-500 to-orange-500&apos;; case &apos;Analytics&apos;: return &apos;from-blue-500 to-cyan-500&apos;; case &apos;Development&apos;: return &apos;from-green-500 to-emerald-500&apos;; default: return &apos;from-gray-500 to-slate-500&apos;} }; return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;container mx-auto px-4&quot;> <div className=&quot;text-center mb-12&quot;> <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent&quot;> Featured Services </h2> <p className=&quot;text-xl text-zinc-300 max-w-3xl mx-auto&quot;> Discover our cutting-edge solutions designed to transform your business with AI,security,and innovation </p> </div> <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;> {services.slice(0,6).map((service) => (<Card key={service.id} className=&quot;group relative overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-700/50 border-zinc-600/30 hover:border-zion-cyan/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm&quot;> {service.featured && (<div className=&quot;absolute top-4 right-4&quot;> <Badge className=&quot;bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold&quot;> Featured </Badge> </div> )} <CardHeader className=&quot;pb-4&quot;> <div className=&quot;flex items-center gap-3 mb-3&quot;> <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}> {getCategoryIcon(service.category)} </div> <Badge variant=&quot;outline&quot; className=&quot;border-zinc-500 text-zinc-300&quot;> {service.category} </Badge> </div> <CardTitle className=&quot;text-xl text-white group-hover:text-zion-cyan transition-colors&quot;> {service.title} </CardTitle> <CardDescription className=&quot;text-zinc-400&quot;> {service.description} </CardDescription> </CardHeader> <CardContent className=&quot;space-y-4&quot;> <div className=&quot;flex items-center justify-between&quot;> <div className=&quot;flex items-center gap-2&quot;> <Star className=&quot;h-4 w-4 text-yellow-400 fill-current&quot; /> <span className=&quot;text-zinc-300&quot;>{service.rating}</span> </div> <div className=&quot;flex items-center gap-2&quot;> <Zap className=&quot;h-4 w-4 text-zion-cyan&quot; /> <span className=&quot;text-zion-cyan font-semibold&quot;>AI Score: {service.aiScore}</span> </div> </div> <div className=&quot;space-y-2&quot;> <h4 className=&quot;text-sm font-semibold text-zinc-300&quot;>Key Features:</h4> <div className=&quot;flex flex-wrap gap-2&quot;> {service.features.slice(0,3).map((feature,index) => (<Badge key={index} variant=&quot;secondary&quot; className=&quot;text-xs bg-zinc-700/50 text-zinc-300&quot;> {feature} </Badge>))} </div> </div> <div className=&quot;pt-4 border-t border-zinc-600/30&quot;> <div className=&quot;flex items-center justify-between mb-4&quot;> <span className=&quot;text-2xl font-bold text-white&quot;> ${service.price} </span> <span className=&quot;text-zinc-400 text-sm&quot;>per month</span> </div> <Button className=&quot;w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25&quot;> Get Started </Button> </div> </CardContent> {} <div className=&quot;absolute inset-0 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none&quot; /> </Card>))} </div> <div className=&quot;text-center mt-12&quot;> <Button size=&quot;lg&quot; className=&quot;bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25&quot;> View All Services </Button> </div> </div> </div> )} ;&apos;;&apos;;