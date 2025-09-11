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
;
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
;
export default ServiceShowcase;
    return (
        <div className="py-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            Featured Services
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Discover our cutting-edge solutions designed to transform your business with AI, security, and innovation
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "ui/card.tsx";""
import {Badge} from "ui/badge.tsx";""
import {Button} from "ui/button.tsx";""
import {Star, Zap, Shield, TrendingUp, Users} from 'lucide-react';'
export function ServiceShowcase($1) {}
    const getCategoryIcon = (props) => {}
        switch (category) {'}
            case 'AI Services': return <Zap className="h-5 w-5" />;"
</Zap>"
            case 'Security': return <Shield className="h-5 w-5" />;"
</Shield>"
            case 'Analytics': return <TrendingUp className="h-5 w-5" />;"
</TrendingUp>"
            case 'Development': return <Users className="h-5 w-5" />;"
</Users>"
            "default": return <Star className="h-5 w-5" />}"
</Star>"
    <div className="min-h-screen bg-white">"
</div>"
      <div className="container mx-auto px-4">"
</div>"
        <div className="text-center mb-12">"
</div>"
          <h2 className="text-4xl "md": text-5xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">"
</h2>
          </h2>"
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">"
</p>
          </p>
        </div>"
        <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-8">"
</div>"
          {services.slice(0, 6).map((service) => (<Card key={service.id} className="group relative overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-700/50 border-zinc-600/30 "hover": border-zion-cyan/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">")
</Card>"
              {service.featured && (<div className="absolute top-4 right-4">"})
</div>"
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold">"
</Badge>
                  </Badge>
                    </div>"
              <CardHeader className="pb-4">"
</CardHeader>"
                <div className="flex items-center gap-3 mb-3">"
</div>);
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
</div>
                  </div>
                  <Badge variant="outline" className="border-zinc-500 text-zinc-300">"
</Badge>
                  </Badge>
                </div>"
                <CardTitle className="text-xl text-white group-"hover": text-zion-cyan transition-colors">"
</CardTitle>
                </CardTitle>"
                <CardDescription className="text-zinc-400">"
</CardDescription>
                </CardDescription>
              </CardHeader>"
              <CardContent className="space-y-4">"
</CardContent>"
                <div className="flex items-center justify-between">"
</div>"
                  <div className="flex items-center gap-2">"
</div>"
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />"
</Star>"
                    <span className="text-zinc-300">{service.rating}</span>"
                  </div>"
                  <div className="flex items-center gap-2">"
</div>"
                    <Zap className="h-4 w-4 text-zion-cyan" />"
</Zap>"
                    <span className="text-zion-cyan font-semibold">AI "Score": {service.aiScore}</span>"
                  </div>
                </div>"
                <div className="space-y-2">"
</div>"
                  <h4 className="text-sm font-semibold text-zinc-300">Key "Features": </h4>""
                  <div className="flex flex-wrap gap-2">"
</div>"
                    {service.features.slice(0, 3).map((feature, index) => (<Badge key={index} variant="secondary" className="text-xs bg-zinc-700/50 text-zinc-300">")
</Badge>);
                      </Badge>))};
                  </div>
                </div>"
                <div className="pt-4 border-t border-zinc-600/30">"
</div>"
                  <div className="flex items-center justify-between mb-4">"
</div>"
                    <span className="text-2xl font-bold text-white">"
</span>
                    </span>"
                    <span className="text-zinc-400 text-sm">per month</span>"
                  </div>"
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple "hover": from-zion-purple hover:to-zion-cyan text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">"
</Button>
                  </Button>
                </div>
              </CardContent>"
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 opacity-0 group-"hover": opacity-100 transition-opacity duration-300 pointer-events-none" />"
</div>
            </Card>))};
        </div>"
        <div className="text-center mt-12">"
</div>"
          <Button size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-purple "hover": from-zion-purple hover:to-zion-cyan text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">"
</Button>
          </Button>
        </div>
      </div>
        </div>"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge } from 'lucide-react'; import { Button, Star, Zap, Shield, TrendingUp, Users } from 'lucide-react'; export function ServiceShowcase($1) { const getCategoryIcon = (props) => { switch (category) { case 'AI Services': return <Zap className="h-5 w-5" />; case 'Security': return <Shield className="h-5 w-5" />; case 'Analytics': return <TrendingUp className="h-5 w-5" />; case 'Development': return <Users className="h-5 w-5" />; default: return <Star className="h-5 w-5" />} }; const getCategoryColor = (props) => { switch (category) { case 'AI Services': return 'from-purple-500 to-pink-500'; case 'Security': return 'from-red-500 to-orange-500'; case 'Analytics': return 'from-blue-500 to-cyan-500'; case 'Development': return 'from-green-500 to-emerald-500'; default: return 'from-gray-500 to-slate-500'} }; return ( <div className="min-h-screen bg-white"> <div className="container mx-auto px-4"> <div className="text-center mb-12"> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent"> Featured Services </h2> <p className="text-xl text-zinc-300 max-w-3xl mx-auto"> Discover our cutting-edge solutions designed to transform your business with AI,security,and innovation </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.slice(0,6).map((service) => (<Card key={service.id} className="group relative overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-700/50 border-zinc-600/30 hover:border-zion-cyan/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"> {service.featured && (<div className="absolute top-4 right-4"> <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold"> Featured </Badge> </div> )} <CardHeader className="pb-4"> <div className="flex items-center gap-3 mb-3"> <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}> {getCategoryIcon(service.category)} </div> <Badge variant="outline" className="border-zinc-500 text-zinc-300"> {service.category} </Badge> </div> <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors"> {service.title} </CardTitle> <CardDescription className="text-zinc-400"> {service.description} </CardDescription> </CardHeader> <CardContent className="space-y-4"> <div className="flex items-center justify-between"> <div className="flex items-center gap-2"> <Star className="h-4 w-4 text-yellow-400 fill-current" /> <span className="text-zinc-300">{service.rating}</span> </div> <div className="flex items-center gap-2"> <Zap className="h-4 w-4 text-zion-cyan" /> <span className="text-zion-cyan font-semibold">AI Score: {service.aiScore}</span> </div> </div> <div className="space-y-2"> <h4 className="text-sm font-semibold text-zinc-300">Key Features:</h4> <div className="flex flex-wrap gap-2"> {service.features.slice(0,3).map((feature,index) => (<Badge key={index} variant="secondary" className="text-xs bg-zinc-700/50 text-zinc-300"> {feature} </Badge>))} </div> </div> <div className="pt-4 border-t border-zinc-600/30"> <div className="flex items-center justify-between mb-4"> <span className="text-2xl font-bold text-white"> ${service.price} </span> <span className="text-zinc-400 text-sm">per month</span> </div> <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"> Get Started </Button> </div> </CardContent> {} <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" /> </Card>))} </div> <div className="text-center mt-12"> <Button size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"> View All Services </Button> </div> </div> </div> )} ;';';'
</Zap>'