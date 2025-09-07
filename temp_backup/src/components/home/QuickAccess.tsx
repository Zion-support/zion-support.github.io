/* eslint-disable */
 import {;
  {;
  {;
  ArrowRight, Search, Users, Briefcase, Settings,  MessageSquare, Smartphone ;
}from 'lucide-react' interface QuickAccessProps {;
  className?: string;
style?: React.CSSProperties ;
}export function QuickAccess ({;
  className, style ;
}: QuickAccessProps) {;
  const {;
  t ;'
}= useTranslation ();''
const quickLinks = [ {';''
  title: t ('home.tool ai matcher');';''
description: t ('home.tool ai matcher desc');
icon: <Search className="h-6 w-6 text-zion-cyan" />;";""
link: "/marketplace" ;'
};''
{';''"
  title: t ('home.tool talent');';'"'"
description: t ('home.tool talent desc');";""
icon: <Users className="h-6 w-6 text-zion-purple" />;";""
link: "/talent" ;'
};''
{';''"
  title: t ('home.tool services');';'"'"
description: t ('home.tool services desc');";""
icon: <Briefcase className="h-6 w-6 text-zion-cyan" />;";""
link: "/services" ;'
};''
{';''"
  title: t ('home.tool equipment');';'"'"
description: t ('home.tool equipment desc');";""
icon: <Settings className="h-6 w-6 text-zion-purple" />;";""
link: "/equipment" ;'
};''
{';''"
  title: t ('nav.community');';'"'"
description: t ('home.tool chat desc');";""
icon: <MessageSquare className="h-6 w-6 text-zion-cyan" />;";""
link: "/community" ;
};
{;"
  ;""
}];";""
return (</p> </div> <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto" > {;
  quickLinks.map ( (link, index) => (<Link key= {;
  index ;"
}href= {;""
  link.link ";""
}className="group bg-zion-blue relative border border-zion-blue-light hover:border-zion-purple/50 rounded-xl p-4 transition-all duration-300 flex flex-col items-center text-center hover:shadow-md hover:bg-zion-blue-light/20" > <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110" > {;""
  link.icon ";""
}</div> <h3 className="text-white font-medium mb-1" > {;""
  link.title ";""
}</h3> <p className="text-zion-slate-light text-xs mb-2" > {;"'"
  link.description ";'"'"
}</p> <div className="flex items-center text-zion-cyan text-xs mt-auto" > <span> {';'"'"
  t ('general.explore') ";""
}</span> <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" /> ;
}</div> </div> </section>) ;'"
}export default QuickAccess;'"'"
'"'"'"