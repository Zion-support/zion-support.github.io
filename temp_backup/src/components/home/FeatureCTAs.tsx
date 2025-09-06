/* eslint-disable */
 interface FeatureCTAsProps {;
  className?: string;
style?: React.CSSProperties ;
}export function FeatureCTAs ({;
  className, style ;
}: FeatureCTAsProps) {;
  const {;
  t ;
}= useTranslation ();
const features = [ {;
  key: 'ai talent matching';';''
descriptionKey: 'ai talent matching desc';';''
detailsKey: 'ai talent matching details';''
icon: <Search className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />;';''
link: '/match';';''
badge: 'popular' ;'
};''
{';''
  key: 'talent directory';';''"
descriptionKey: 'talent directory desc';';'"'"
detailsKey: 'talent directory details';";'"'"
icon: <Users className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />;';''
link: '/talent' ;'
};''
{';''
  key: 'services marketplace';';''"
descriptionKey: 'services marketplace desc';';'"'"
detailsKey: 'services marketplace details';";'"'"
icon: <Zap className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />;';''
link: '/services';';''
badge: 'new' ;'
};''
{';''
  key: 'equipment catalog';';''"
descriptionKey: 'equipment catalog desc';';'"'"
detailsKey: 'equipment catalog details';";'"'"
icon: <Settings className="h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" />;';''
link: '/equipment' ;'
};''
{';''
  key: 'community hub';';''"
descriptionKey: 'community hub desc';';'"'"
detailsKey: 'community hub details';";'"'"
icon: <MessageSquare className="h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" />;';''
link: '/community' ;'
};''
{';''
  key: 'mobile app';';''"
descriptionKey: 'mobile app desc';';'"'"
detailsKey: 'mobile app details';";'"'"
icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />;';''
link: '/mobile-launch';';''
badge: 'featured' ;'
};''
{';''
  key: 'enterprise solutions';';''"
descriptionKey: 'enterprise solutions desc';';'"'"
detailsKey: 'enterprise solutions details';";'"'"
icon: <Building className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />;';''
link: '/enterprise' ;'
};''
{';''
  key: 'developer tools';';''"
descriptionKey: 'developer tools desc';';'"'"
detailsKey: 'developer tools details';";'"'"
icon: <Code className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />;';''
link: '/developers' ;'
};''
{';''
  key: 'learning resources';';''"
descriptionKey: 'learning resources desc';';'"'"
detailsKey: 'learning resources details';";'"'"
icon: <BookOpen className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />;';''
link: '/blog' ;'
};''
{';''
  key: 'project management';';''"
descriptionKey: 'project management desc';';'"'"
detailsKey: 'project management details';";'"'"
icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />;';''
link: '/project-milestones' ;'
};''
{';''
  key: 'zion hire ai';';''"
descriptionKey: 'zion hire ai desc';';'"'"
detailsKey: 'zion hire ai details';";'"'"
icon: <Clock className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />;';''
link: '/zion-hire-ai';';''
badge: 'premium' ;"
}];""
return (<section className= {";""
  cn ("py-16 bg-gradient-to-b from-background to-background/90";
className ;
}style= {;
  style ;
}> {;
  t (`badges.$ {;
  feature.badge ;`
}`) ;
}</Badge>) ;
}</div> {;`
  t (`features.$ {;
  feature.descriptionKey ;`
}`) ;
}</CardDescription>) ;
}</CardHeader> <CardContent> {;`
  t (`features.$ {;
  feature.detailsKey ;"`
}`) ;""
}</p>) ";""
}</CardContent> <CardFooter> <Button asChild className="w-full gap-1" > <Link </Link> </Button> </CardFooter> </Card>) ) ;'"
}</div> </div> </section>) ;'"'"
}'"'"'"`