 import {
  {
  {
  ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone 
}from 'lucide-react' export default function LandingPage () {
  const {
  t 
}= useTranslation ();
const {
  isRTL 
}= useLanguage ();
//Tools and features showcase const toolsFeatures = [ {
  title: t ("home.tool ai matcher");
description: t ("home.tool ai matcher desc");
icon: <Sparkles className="h-6 w-6 text-zion-cyan" />;
link: "/match" 
};
{
  title: t ("home.tool talent");
description: t ("home.tool talent desc");
icon: <Users className="h-6 w-6 text-zion-purple" />;
link: "/talent" 
};
{
  title: t ("home.tool services");
description: t ("home.tool services desc");
icon: <Zap className="h-6 w-6 text-zion-cyan" />;
link: "/services" 
};
{
  title: t ("home.tool equipment");
description: t ("home.tool equipment desc");
icon: <Settings className="h-6 w-6 text-zion-purple" />;
link: "/equipment" 
};
{
  title: t ("home.tool analytics");
description: t ("home.tool analytics desc");
icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />;
link: "/analytics" 
};
{
  title: "Mobile App";
description: "Take Zion with you on the go with our mobile app for iOS and Android";
icon: <Smartphone className="h-6 w-6 text-zion-purple" />;
link: "/mobile-launch" 
}];
min-h-screen bg-zion-blue text-white" > <SEO /> <Header /> <HeroSection /> </p> </div> <div className= {
  `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto $ {
  isRTL ? 'rtl' : '' 
}` 
}> {
  toolsFeatures.map ( (feature, index) => (<Link key= {
  index 
}</div> </Link>) ) 
}</div> </div> </section> <CategoriesSection /> <BenefitsSection /> {
  /* Add the comprehensive features guide section */ 
}<FeaturesGuideSection /> <HowItWorksSection /> <FeaturedListingsSection /> <TestimonialCarousel /> <TrustedBySection /> <BlogSection /> {
  /* Add social share section to encourage users to spread the word */ 
}<SocialShareSection /> <WaitlistSection /> <FloatingCTA /> </div>) 
}