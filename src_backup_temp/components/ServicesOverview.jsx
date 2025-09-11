import {Button} from &quot;@/components/ui/button&quot;; import {Link} from &quot;react-router-dom&quot;; import { Zap,Shield,Cloud,Database,Code,ShoppingCart,BarChart3,Link as LinkIcon,Network,Monitor,Smartphone,CheckCircle,Star,Clock,Users,Globe const serviceCategories = [ { title: &quot;AI Services&quot;,description: &quot;Cutting-edge artificial intelligence solutions that transform business operations&quot;,icon: <Zap className=&quot;w-8 h-8 text-zion-cyan&quot; />,services[ { name: &quot;AI Chatbot Builder Pro&quot;,price: &quot;$299&quot;,features[&quot;No-code platform&quot;,&quot;Multi-language support&quot;,&quot;Analytics dashboard&quot;,&quot;Platform integration&quot;],benefits[&quot;24/7 customer support&quot;,&quot;Reduced response time&quot;,&quot;Scalable automation&quot;,&quot;Cost-effective solution&quot;] },{name: &quot;AI Content Generator Suite&quot;,price: &quot;$199&quot;,features[&quot;SEO optimization&quot;,&quot;Tone adjustment&quot;,&quot;Plagiarism detection&quot;,&quot;100+ content pieces/month&quot;],benefits[&quot;Faster content creation&quot;,&quot;Improved SEO rankings&quot;,&quot;Consistent brand voice&quot;,&quot;Time savings&quot;]},{name: &quot;AI Image Generator Pro&quot;,price: &quot;$399&quot;,features[&quot;Custom style training&quot;,&quot;4K resolution&quot;,&quot;Commercial licensing&quot;,&quot;Design tool integration&quot;],benefits[&quot;Unique visual content&quot;,&quot;Brand consistency&quot;,&quot;Cost-effective design&quot;,&quot;Rapid prototyping&quot;]} ],marketPrice: &quot;$150-500&quot;,deliveryTime: &quot;Immediate&quot;,link: &quot;/micro-saas-services&quot; },{ title: &quot;Business Solutions&quot;,description: &quot;Data-driven insights and analytics to drive business growth and decision-making&quot;,icon: <BarChart3 className=&quot;w-8 h-8 text-zion-purple&quot; />,services[ { name: &quot;Business Intelligence Dashboard&quot;,price: &quot;$599&quot;,features[&quot;Real-time analytics&quot;,&quot;50+ data sources&quot;,&quot;Custom dashboards&quot;,&quot;Automated reporting&quot;],benefits[&quot;Data-driven decisions&quot;,&quot;Performance insights&quot;,&quot;Operational efficiency&quot;,&quot;Competitive advantage&quot;] },{name: &quot;Predictive Analytics Engine&quot;,price: &quot;$799&quot;,features[&quot;Sales forecasting&quot;,&quot;Customer behavior analysis&quot;,&quot;Risk assessment&quot;,&quot;ML models&quot;],benefits[&quot;Future planning&quot;,&quot;Customer insights&quot;,&quot;Risk mitigation&quot;,&quot;Revenue optimization&quot;]} ],marketPrice: &quot;$500-1500&quot;,deliveryTime: &quot;1-3 weeks&quot;,link: &quot;/micro-saas-services&quot; },{ title: &quot;Cybersecurity&quot;,description: &quot;Comprehensive security solutions to protect your digital assets and ensure compliance&quot;,icon: <Shield className=&quot;w-8 h-8 text-zion-red&quot; />,services[ { name: &quot;24/7 Cybersecurity Monitoring&quot;,price: &quot;$899&quot;,features[&quot;Threat detection&quot;,&quot;SIEM integration&quot;,&quot;Compliance reporting&quot;,&quot;24/7 SOC support&quot;],benefits[&quot;Continuous protection&quot;,&quot;Compliance assurance&quot;,&quot;Incident response&quot;,&quot;Peace of mind&quot;] },{name: &quot;Penetration Testing Service&quot;,price: &quot;$2,499&quot;,features[&quot;Web app testing&quot;,&quot;Network security&quot;,&quot;Mobile app testing&quot;,&quot;Compliance documentation&quot;],benefits[&quot;Vulnerability identification&quot;,&quot;Security validation&quot;,&quot;Compliance readiness&quot;,&quot;Risk assessment&quot;]} ],marketPrice: &quot;$800-3000&quot;,deliveryTime: &quot;Immediate - 2 weeks&quot;,link: &quot;/micro-saas-services&quot; },{ title: &quot;Cloud Services&quot;,description: &quot;Scalable cloud solutions for modern business infrastructure and digital transformation&quot;,icon: <Cloud className=&quot;w-8 h-8 text-zion-blue&quot; />,services[ { name: &quot;Cloud Migration Expert&quot;,price: &quot;$3,999&quot;,features[&quot;AWS/Azure/GCP&quot;,&quot;Architecture design&quot;,&quot;Data migration&quot;,&quot;99.9% uptime guarantee&quot;],benefits[&quot;Reduced costs&quot;,&quot;Improved scalability&quot;,&quot;Enhanced security&quot;,&quot;Better performance&quot;] },{name: &quot;DevOps Automation Platform&quot;,price: &quot;$699&quot;,features[&quot;CI/CD pipelines&quot;,&quot;Kubernetes support&quot;,&quot;Infrastructure as code&quot;,&quot;Monitoring & alerting&quot;],benefits[&quot;Faster deployments&quot;,&quot;Reduced errors&quot;,&quot;Team productivity&quot;,&quot;Cost optimization&quot;]} ],marketPrice: &quot;$700-5000&quot;,deliveryTime: &quot;1-4 weeks&quot;,link: &quot;/micro-saas-services&quot; },{ title: &quot;Data Services&quot;,description: &quot;Enterprise-grade data solutions for analytics,warehousing,and business intelligence&quot;,icon: <Database className=&quot;w-8 h-8 text-zion-green&quot; />,services[ { name: &quot;Data Warehouse Solution&quot;,price: &quot;$1,299&quot;,features[&quot;ETL pipelines&quot;,&quot;Data modeling&quot;,&quot;BI integration&quot;,&quot;Data governance&quot;],benefits[&quot;Centralized data&quot;,&quot;Better insights&quot;,&quot;Improved reporting&quot;,&quot;Data quality&quot;] },{name: &quot;Database Performance Optimization&quot;,price: &quot;$899&quot;,features[&quot;Query optimization&quot;,&quot;Indexing strategies&quot;,&quot;Performance monitoring&quot;,&quot;Capacity planning&quot;],benefits[&quot;Faster queries&quot;,&quot;Better performance&quot;,&quot;Reduced costs&quot;,&quot;Improved user experience&quot;]} ],marketPrice: &quot;$900-2000&quot;,deliveryTime: &quot;1-3 weeks&quot;,link: &quot;/micro-saas-services&quot; },{ title: &quot;Development&quot;,description: &quot;Custom software development solutions for web,mobile,and enterprise applications&quot;,icon: <Code className=&quot;w-8 h-8 text-zion-orange&quot; />,services[ { name: &quot;Progressive Web App Development&quot;,price: &quot;$2,999&quot;,features[&quot;Offline functionality&quot;,&quot;Push notifications&quot;,&quot;App-like experience&quot;,&quot;SEO optimization&quot;],benefits[&quot;Better user engagement&quot;,&quot;Improved performance&quot;,&quot;Cross-platform compatibility&quot;,&quot;Enhanced SEO&quot;] },{name: &quot;Cross-Platform Mobile App&quot;,price: &quot;$4,999&quot;,features[&quot;React Native/Flutter&quot;,&quot;UI/UX design&quot;,&quot;Backend integration&quot;,&quot;App store deployment&quot;],benefits[&quot;Cost-effective development&quot;,&quot;Faster time to market&quot;,&quot;Native performance&quot;,&quot;Easy maintenance&quot;]},{name: &quot;Custom API Development&quot;,price: &quot;$1,999&quot;,features[&quot;REST/GraphQL APIs&quot;,&quot;Documentation&quot;,&quot;Testing&quot;,&quot;Developer portal&quot;],benefits[&quot;System integration&quot;,&quot;Scalable architecture&quot;,&quot;Developer experience&quot;,&quot;API monetization&quot;]} ],marketPrice: &quot;$2000-8000&quot;,deliveryTime: &quot;3-8 weeks&quot;,link: &quot;/micro-saas-services&quot; },{ title: &quot;E-commerce&quot;,description: &quot;Complete e-commerce solutions for online businesses and digital marketplaces&quot;,icon: <ShoppingCart className=&quot;w-8 h-8 text-zion-pink&quot; />,services[ { name: &quot;E-commerce Platform Development&quot;,price: &quot;$5,999&quot;,features[&quot;Payment processing&quot;,&quot;Inventory management&quot;,&quot;Order fulfillment&quot;,&quot;CRM integration&quot;],benefits[&quot;Increased sales&quot;,&quot;Better customer experience&quot;,&quot;Operational efficiency&quot;,&quot;Scalable growth&quot;] } ],marketPrice: &quot;$5000-15000&quot;,deliveryTime: &quot;8-10 weeks&quot;,link: &quot;/micro-saas-services&quot; },{ title: &quot;Marketing&quot;,description: &quot;AI-powered marketing automation and analytics solutions for business growth&quot;,icon: <BarChart3 className=&quot;w-8 h-8 text-zion-yellow&quot; />,services[ { name: &quot;Marketing Automation Platform&quot;,price: &quot;$799&quot;,features[&quot;Email marketing&quot;,&quot;Lead scoring&quot;,&quot;Campaign management&quot;,&quot;AI personalization&quot;],benefits[&quot;Increased conversions&quot;,&quot;Better lead quality&quot;,&quot;Time savings&quot;,&quot;ROI improvement&quot;] } ],marketPrice: &quot;$500-1500&quot;,deliveryTime: &quot;2-3 weeks&quot;,link: &quot;/micro-saas-services&quot; },{ title: &quot;Integration&quot;,description: &quot;Seamless third-party integrations and API synchronization services&quot;,icon: <LinkIcon className=&quot;w-8 h-8 text-zion-indigo&quot; />,services[ { name: &quot;Third-Party Integration Service&quot;,price: &quot;$1,499&quot;,features[&quot;Payment gateways&quot;,&quot;CRM systems&quot;,&quot;Marketing tools&quot;,&quot;Custom webhooks&quot;],benefits[&quot;System connectivity&quot;,&quot;Data consistency&quot;,&quot;Workflow automation&quot;,&quot;Reduced manual work&quot;] } ],marketPrice: &quot;$1000-3000&quot;,deliveryTime: &quot;2-3 weeks&quot;,link: &quot;/micro-saas-services&quot; },{ title: &quot;Blockchain&quot;,description: &quot;Next-generation blockchain and Web3 development solutions&quot;,icon: <Network className=&quot;w-8 h-8 text-zion-teal&quot; />,services[ { name: &quot;Smart Contract Development&quot;,price: &quot;$3,999&quot;,features[&quot;Ethereum/Polygon/Solana&quot;,&quot;Security auditing&quot;,&quot;DeFi protocols&quot;,&quot;NFT contracts&quot;],benefits[&quot;Decentralized solutions&quot;,&quot;Transparent transactions&quot;,&quot;Automated execution&quot;,&quot;Innovation leadership&quot;] },{name: &quot;Web3 DApp Development&quot;,price: &quot;$5,999&quot;,features[&quot;Wallet integration&quot;,&quot;Blockchain interaction&quot;,&quot;Cross-chain compatibility&quot;,&quot;User-friendly interfaces&quot;],benefits[&quot;Future-proof technology&quot;,&quot;User ownership&quot;,&quot;Global accessibility&quot;,&quot;Reduced intermediaries&quot;]} ],marketPrice: &quot;$4000-10000&quot;,deliveryTime: &quot;4-8 weeks&quot;,link: &quot;/micro-saas-services&quot; },{ title: &quot;IoT&quot;,description: &quot;Internet of Things platform development and hardware prototyping services&quot;,icon: <Monitor className=&quot;w-8 h-8 text-zion-lime&quot; />,services[ { name: &quot;IoT Platform Development&quot;,price: &quot;$4,999&quot;,features[&quot;Device management&quot;,&quot;Real-time monitoring&quot;,&quot;Edge computing&quot;,&quot;Cloud integration&quot;],benefits[&quot;Connected devices&quot;,&quot;Data insights&quot;,&quot;Operational efficiency&quot;,&quot;Innovation opportunities&quot;] } ],marketPrice: &quot;$4000-12000&quot;,deliveryTime: &quot;8-10 weeks&quot;,link: &quot;/micro-saas-services&quot; },{ title: &quot;Hardware&quot;,description: &quot;Rapid prototyping and hardware development services for IoT and embedded systems&quot;,icon: <Smartphone className=&quot;w-8 h-8 text-zion-gray&quot; />,services[ { name: &quot;Hardware Prototyping Service&quot;,price: &quot;$2,999&quot;,features[&quot;3D printing&quot;,&quot;PCB design&quot;,&quot;Component sourcing&quot;,&quot;Design validation&quot;],benefits[&quot;Faster development&quot;,&quot;Cost reduction&quot;,&quot;Design validation&quot;,&quot;Market testing&quot;] }; ],marketPrice: &quot;$2000-8000&quot;,deliveryTime: &quot;4-6 weeks&quot;,link: &quot;/micro-saas-services&quot; ]; const whyChooseUs = [ {title: &quot;Expert Team&quot;,description: &quot;Certified professionals with 10+ years of experience&quot;,icon: <Users className=&quot;w-6 h-6 text-zion-cyan&quot; />},{title: &quot;Global Reach&quot;,description: &quot;Serving clients worldwide with 24/7 support&quot;,icon: <Globe className=&quot;w-6 h-6 text-zion-purple&quot; />},{title: &quot;Fast Delivery&quot;,description: &quot;Quick turnaround times without compromising quality&quot;,icon: <Clock className=&quot;w-6 h-6 text-zion-green&quot; />};,{ title: &quot;Proven Results&quot;,description: &quot;Track record of successful project deliveries&quot;,icon: <Star className=&quot;w-6 h-6 text-zion-yellow&quot; /> ]; export function ServicesOverview($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;container mx-auto px-4&quot;> {} <div className=&quot;text-center mb-16&quot;> <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;> Comprehensive Technology Services </h2> <p className=&quot;text-zion-slate-light text-lg max-w-3xl mx-auto&quot;> Discover our complete range of professional services designed to accelerate your business growth and digital transformation </p> </div> {} <div className=&quot;grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16&quot;> {serviceCategories.map((category,index) => (<div key={index} className=&quot;bg-zion-blue rounded-lg p-6 border border-zion-blue-light hover:border-zion-cyan/50 transition-all duration-300&quot;> <div className=&quot;flex items-center mb-4&quot;> <div className=&quot;mr-4&quot;> {category.icon} </div> <div> <h3 className=&quot;text-white text-xl font-bold&quot;>{category.title}</h3> <p className=&quot;text-zion-slate-light text-sm&quot;>{category.description}</p> </div> </div> <div className=&quot;space-y-4 mb-6&quot;> {category.services.map((service,serviceIndex) => (<div key={serviceIndex} className=&quot;bg-zion-blue-dark rounded p-4&quot;> <div className=&quot;flex justify-between items-start mb-3&quot;> <h4 className=&quot;text-white font-semibold&quot;>{service.name}</h4> <span className=&quot;text-zion-cyan font-bold&quot;>{service.price}</span> </div> <div className=&quot;mb-3&quot;> <h5 className=&quot;text-zion-slate-light text-sm font-medium mb-2&quot;>Key Features:</h5> <ul className=&quot;space-y-1&quot;> {service.features.map((feature,featureIndex) => (<li key={featureIndex} className=&quot;flex items-center text-zion-slate-light text-sm&quot;> <CheckCircle className=&quot;w-4 h-4 text-zion-cyan mr-2 flex-shrink-0&quot; /> {feature} </li>))} </ul> </div> <div> <h5 className=&quot;text-zion-slate-light text-sm font-medium mb-2&quot;>Benefits:</h5> <ul className=&quot;space-y-1&quot;> {service.benefits.map((benefit,benefitIndex) => (<li key={benefitIndex} className=&quot;flex items-center text-zion-slate-light text-sm&quot;> <Star className=&quot;w-4 h-4 text-zion-purple mr-2 flex-shrink-0&quot; /> {benefit} </li>))} </ul> </div> </div>))} </div> <div className=&quot;flex items-center justify-between mb-4 text-sm&quot;> <div className=&quot;text-zion-slate-light&quot;> <span className=&quot;font-medium&quot;>Market Price:</span> {category.marketPrice} </div> <div className=&quot;text-zion-slate-light&quot;> <span className=&quot;font-medium&quot;>Delivery:</span> {category.deliveryTime} </div> </div> <Link to={category.link}> <Button className=&quot;w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white&quot;> View {category.title} </Button> </Link> </div>))} </div> {} <div className=&quot;bg-zion-blue rounded-lg p-8 mb-16&quot;> <div className=&quot;text-center mb-12&quot;> <h3 className=&quot;text-2xl md:text-3xl font-bold text-white mb-4&quot;> Why Choose Zion Tech Group? </h3> <p className=&quot;text-zion-slate-light text-lg max-w-2xl mx-auto&quot;> We combine technical expertise with business acumen to deliver solutions that drive real results </p> </div> <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;> {whyChooseUs.map((item,index) => (<div key={index} className=&quot;text-center&quot;> <div className=&quot;flex justify-center mb-4&quot;> {item.icon} </div> <h4 className=&quot;text-white text-lg font-semibold mb-2&quot;>{item.title}</h4> <p className=&quot;text-zion-slate-light&quot;>{item.description}</p> </div>))} </div> </div> {} <div className=&quot;text-center&quot;> <h3 className=&quot;text-2xl md:text-3xl font-bold text-white mb-6&quot;> Ready to Get Started? </h3> <p className=&quot;text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto&quot;> Contact us today for a free consultation and discover how our services can transform your business </p> <div className=&quot;flex flex-wrap justify-center gap-4&quot;> <Link to=&quot;/micro-saas-services&quot;> <Button size=&quot;lg&quot; className=&quot;bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg&quot;> <Zap className=&quot;w-5 h-5 mr-2&quot; /> Explore All Services </Button> </Link> <Link to=&quot;/contact&quot;> <Button size=&quot;lg&quot; variant=&quot;outline&quot; className=&quot;border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg&quot;> Contact Us </Button> </Link> </div> </div> </div> </div> )} export default ServicesOverview;
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import { Zap, Shield, Cloud, Database, Code, ShoppingCart, BarChart3, Link as LinkIcon, Network, Monitor, Smartphone, CheckCircle, Star, Clock, Users, Globe // Service categories with detailed information;
const serviceCategories = [;
    {;
        "title": "AI Services",;
        "description": "Cutting-edge artificial intelligence solutions that transform business operations",;
        "icon": "<Zap className="w-8 h-8 text-zion-cyan" />",;
        services[;
            {;
                "name": "AI Chatbot Builder Pro",;
                "price": "$299",;
                features["No-code platform", "Multi-language support", "Analytics dashboard", "Platform integration"],;
                benefits["24/7 customer support", "Reduced response time", "Scalable automation", "Cost-effective solution"];
            },;
            {"name": "AI Content Generator Suite",;
                "price": "$199",;
                features["SEO optimization", "Tone adjustment", "Plagiarism detection", "100+ content pieces/month"],;
                benefits["Faster content creation", "Improved SEO rankings", "Consistent brand voice", "Time savings"]},;
            {"name": "AI Image Generator Pro",;
                "price": "$399",;
                features["Custom style training", "4K resolution", "Commercial licensing", "Design tool integration"],;
                benefits["Unique visual content", "Brand consistency", "Cost-effective design", "Rapid prototyping"]}
        ],;
        "marketPrice": "$150-500",;
        "deliveryTime": "Immediate",;
        "link": "/micro-saas-services";
    },;
    {;
        "title": "Business Solutions",;
        "description": "Data-driven insights and analytics to drive business growth and decision-making",;
        "icon": "<BarChart3 className="w-8 h-8 text-zion-purple" />",;
        services[;
            {;
                "name": "Business Intelligence Dashboard",;
                "price": "$599",;
                features["Real-time analytics", "50+ data sources", "Custom dashboards", "Automated reporting"],;
                benefits["Data-driven decisions", "Performance insights", "Operational efficiency", "Competitive advantage"];
            },;
            {"name": "Predictive Analytics Engine",;
                "price": "$799",;
                features["Sales forecasting", "Customer behavior analysis", "Risk assessment", "ML models"],;
                benefits["Future planning", "Customer insights", "Risk mitigation", "Revenue optimization"]}
        ],;
        "marketPrice": "$500-1500",;
        "deliveryTime": "1-3 weeks",;
        "link": "/micro-saas-services";
    },;
    {;
        "title": "Cybersecurity",;
        "description": "Comprehensive security solutions to protect your digital assets and ensure compliance",;
        "icon": "<Shield className="w-8 h-8 text-zion-red" />",;
        services[;
            {;
                "name": "24/7 Cybersecurity Monitoring",;
                "price": "$899",;
                features["Threat detection", "SIEM integration", "Compliance reporting", "24/7 SOC support"],;
                benefits["Continuous protection", "Compliance assurance", "Incident response", "Peace of mind"];
            },;
            {"name": "Penetration Testing Service",;
                "price": "$2,499",;
                features["Web app testing", "Network security", "Mobile app testing", "Compliance documentation"],;
                benefits["Vulnerability identification", "Security validation", "Compliance readiness", "Risk assessment"]}
        ],;
        "marketPrice": "$800-3000",;
        "deliveryTime": "Immediate - 2 weeks",;
        "link": "/micro-saas-services";
    },;
    {;
        "title": "Cloud Services",;
        "description": "Scalable cloud solutions for modern business infrastructure and digital transformation",;
        "icon": "<Cloud className="w-8 h-8 text-zion-blue" />",;
        services[;
            {;
                "name": "Cloud Migration Expert",;
                "price": "$3,999",;
                features["AWS/Azure/GCP", "Architecture design", "Data migration", "99.9% uptime guarantee"],;
                benefits["Reduced costs", "Improved scalability", "Enhanced security", "Better performance"];
            },;
            {"name": "DevOps Automation Platform",;
                "price": "$699",;
                features["CI/CD pipelines", "Kubernetes support", "Infrastructure as code", "Monitoring & alerting"],;
                benefits["Faster deployments", "Reduced errors", "Team productivity", "Cost optimization"]}
        ],;
        "marketPrice": "$700-5000",;
        "deliveryTime": "1-4 weeks",;
        "link": "/micro-saas-services";
    },;
    {;
        "title": "Data Services",;
        "description": "Enterprise-grade data solutions for analytics, warehousing, and business intelligence",;
        "icon": "<Database className="w-8 h-8 text-zion-green" />",;
        services[;
            {;
                "name": "Data Warehouse Solution",;
                "price": "$1,299",;
                features["ETL pipelines", "Data modeling", "BI integration", "Data governance"],;
                benefits["Centralized data", "Better insights", "Improved reporting", "Data quality"];
            },;
            {"name": "Database Performance Optimization",;
                "price": "$899",;
                features["Query optimization", "Indexing strategies", "Performance monitoring", "Capacity planning"],;
                benefits["Faster queries", "Better performance", "Reduced costs", "Improved user experience"]}
        ],;
        "marketPrice": "$900-2000",;
        "deliveryTime": "1-3 weeks",;
        "link": "/micro-saas-services";
    },;
    {;
        "title": "Development",;
        "description": "Custom software development solutions for web, mobile, and enterprise applications",;
        "icon": "<Code className="w-8 h-8 text-zion-orange" />",;
        services[;
            {;
                "name": "Progressive Web App Development",;
                "price": "$2,999",;
                features["Offline functionality", "Push notifications", "App-like experience", "SEO optimization"],;
                benefits["Better user engagement", "Improved performance", "Cross-platform compatibility", "Enhanced SEO"];
            },;
            {"name": "Cross-Platform Mobile App",;
                "price": "$4,999",;
                features["React Native/Flutter", "UI/UX design", "Backend integration", "App store deployment"],;
                benefits["Cost-effective development", "Faster time to market", "Native performance", "Easy maintenance"]},;
            {"name": "Custom API Development",;
                "price": "$1,999",;
                features["REST/GraphQL APIs", "Documentation", "Testing", "Developer portal"],;
                benefits["System integration", "Scalable architecture", "Developer experience", "API monetization"]}
        ],;
        "marketPrice": "$2000-8000",;
        "deliveryTime": "3-8 weeks",;
        "link": "/micro-saas-services";
    },;
    {;
        "title": "E-commerce",;
        "description": "Complete e-commerce solutions for online businesses and digital marketplaces",;
        "icon": "<ShoppingCart className="w-8 h-8 text-zion-pink" />",;
        services[;
            {;
                "name": "E-commerce Platform Development",;
                "price": "$5,999",;
                features["Payment processing", "Inventory management", "Order fulfillment", "CRM integration"],;
                benefits["Increased sales", "Better customer experience", "Operational efficiency", "Scalable growth"];
            }
        ],;
        "marketPrice": "$5000-15000",;
        "deliveryTime": "8-10 weeks",;
        "link": "/micro-saas-services";
    },;
    {;
        "title": "Marketing",;
        "description": "AI-powered marketing automation and analytics solutions for business growth",;
        "icon": "<BarChart3 className="w-8 h-8 text-zion-yellow" />",;
        services[;
            {;
                "name": "Marketing Automation Platform",;
                "price": "$799",;
                features["Email marketing", "Lead scoring", "Campaign management", "AI personalization"],;
                benefits["Increased conversions", "Better lead quality", "Time savings", "ROI improvement"];
            }
        ],;
        "marketPrice": "$500-1500",;
        "deliveryTime": "2-3 weeks",;
        "link": "/micro-saas-services";
    },;
    {;
        "title": "Integration",;
        "description": "Seamless third-party integrations and API synchronization services",;
        "icon": "<LinkIcon className="w-8 h-8 text-zion-indigo" />",;
        services[;
            {;
                "name": "Third-Party Integration Service",;
                "price": "$1,499",;
                features["Payment gateways", "CRM systems", "Marketing tools", "Custom webhooks"],;
                benefits["System connectivity", "Data consistency", "Workflow automation", "Reduced manual work"];
            }
        ],;
        "marketPrice": "$1000-3000",;
        "deliveryTime": "2-3 weeks",;
        "link": "/micro-saas-services";
    },;
    {;
        "title": "Blockchain",;
        "description": "Next-generation blockchain and Web3 development solutions",;
        "icon": "<Network className="w-8 h-8 text-zion-teal" />",;
        services[;
            {;
                "name": "Smart Contract Development",;
                "price": "$3,999",;
                features["Ethereum/Polygon/Solana", "Security auditing", "DeFi protocols", "NFT contracts"],;
                benefits["Decentralized solutions", "Transparent transactions", "Automated execution", "Innovation leadership"];
            },;
            {"name": "Web3 DApp Development",;
                "price": "$5,999",;
                features["Wallet integration", "Blockchain interaction", "Cross-chain compatibility", "User-friendly interfaces"],;
                benefits["Future-proof technology", "User ownership", "Global accessibility", "Reduced intermediaries"]}
        ],;
        "marketPrice": "$4000-10000",;
        "deliveryTime": "4-8 weeks",;
        "link": "/micro-saas-services";
    },;
    {;
        "title": "IoT",;
        "description": "Internet of Things platform development and hardware prototyping services",;
        "icon": "<Monitor className="w-8 h-8 text-zion-lime" />",;
        services[;
            {;
                "name": "IoT Platform Development",;
                "price": "$4,999",;
                features["Device management", "Real-time monitoring", "Edge computing", "Cloud integration"],;
                benefits["Connected devices", "Data insights", "Operational efficiency", "Innovation opportunities"];
            }
        ],;
        "marketPrice": "$4000-12000",;
        "deliveryTime": "8-10 weeks",;
        "link": "/micro-saas-services";
    },;
    {;
        "title": "Hardware",;
        "description": "Rapid prototyping and hardware development services for IoT and embedded systems",;
        "icon": "<Smartphone className="w-8 h-8 text-zion-gray" />",;
        services[;
            {;
                "name": "Hardware Prototyping Service",;
                "price": "$2,999",;
                features["3D printing", "PCB design", "Component sourcing", "Design validation"],;
                benefits["Faster development", "Cost reduction", "Design validation", "Market testing"];
            }
        ],;
        "marketPrice": "$2000-8000",;
        "deliveryTime": "4-6 weeks",;
        "link": "/micro-saas-services";
];
// Why choose Zion Tech Group;
const whyChooseUs = [;
    {"title": "Expert Team",;
        "description": "Certified professionals with 10+ years of experience",;
        "icon": "<Users className="w-6 h-6 text-zion-cyan" />"},;
    {"title": "Global Reach",;
        "description": "Serving clients worldwide with 24/7 support",;
        "icon": "<Globe className="w-6 h-6 text-zion-purple" />"},;
    {"title": "Fast Delivery",;
        "description": "Quick turnaround times without compromising quality",;
        "icon": "<Clock className="w-6 h-6 text-zion-green" />"},;
    {;
        "title": "Proven Results",;
        "description": "Track record of successful project deliveries",;
        "icon": "<Star className="w-6 h-6 text-zion-yellow" />;
];
export function ServicesOverview("props": any) {;
    return (<div className="py-20 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        {/* Header */"}
        <div className="text-center mb-16">;
          <h2 className="text-3xl "md": "text-4xl font-bold text-white mb-4">;
            Comprehensive Technology Services;
          </h2>;
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
            Discover our complete range of professional services designed to accelerate your business growth and digital transformation;
          </p>;
        </div>;
        {/* Service Categories Grid */"}
        <div className="grid grid-cols-1 "lg": "grid-cols-2 "xl":grid-cols-3 gap-8 mb-16">;
          {serviceCategories.map((category", index) => (<div key={index} className="bg-zion-blue rounded-lg p-6 border border-zion-blue-light "hover": "border-zion-cyan/50 transition-all duration-300">;
              <div className="flex items-center mb-4">;
                <div className="mr-4">;
                  {category.icon"}
                </div>;
                <div>;
                  <h3 className="text-white text-xl font-bold">{category.title}</h3>;
                  <p className="text-zion-slate-light text-sm">{category.description}</p>;
                </div>;
              </div>;
              <div className="space-y-4 mb-6">;
                {category.services.map((service, serviceIndex) => (<div key={serviceIndex} className="bg-zion-blue-dark rounded p-4">;
                    <div className="flex justify-between items-start mb-3">;
                      <h4 className="text-white font-semibold">{service.name}</h4>;
                      <span className="text-zion-cyan font-bold">{service.price}</span>;
                    </div>;
                    <div className="mb-3">;
                      <h5 className="text-zion-slate-light text-sm font-medium mb-2">Key "Features": "</h5>;
                      <ul className="space-y-1">;
                        {service.features.map((feature", featureIndex) => (<li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">;
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />;
                            {feature}
                          </li>))}
                      </ul>;
                    </div>;
                    <div>;
                      <h5 className="text-zion-slate-light text-sm font-medium mb-2">"Benefits": "</h5>;
                      <ul className="space-y-1">;
                        {service.benefits.map((benefit", benefitIndex) => (<li key={benefitIndex} className="flex items-center text-zion-slate-light text-sm">;
                            <Star className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0" />;
import { Zap, Shield, Cloud, Database, Code, ShoppingCart, BarChart3, Link as LinkIcon, Network, Monitor, Smartphone, CheckCircle, Star, Clock, Users, Globe // Service categories with detailed information
const serviceCategories = [{
        "title": "AI Services",
        "description": "Cutting-edge artificial intelligence solutions that transform business operations",
        "icon": <Zap className="w-8 h-8 text-zion-cyan" />,
        services[
            {
                "name": "AI Chatbot Builder Pro",
                "price": "$299",
                features["No-code platform", "Multi-language support", "Analytics dashboard", "Platform integration"],
                benefits["24/7 customer support", "Reduced response time", "Scalable automation", "Cost-effective solution"]
            },
            {"name": "AI Content Generator Suite",
                "price": "$199",
                features["SEO optimization", "Tone adjustment", "Plagiarism detection", "100+ content pieces/month"],
                benefits["Faster content creation", "Improved SEO rankings", "Consistent brand voice", "Time savings"]},
            {"name": "AI Image Generator Pro",
                "price": "$399",
                features["Custom style training", "4K resolution", "Commercial licensing", "Design tool integration"],
                benefits["Unique visual content", "Brand consistency", "Cost-effective design", "Rapid prototyping"]}
        ],
        "marketPrice": "$150-500",
        "deliveryTime": "Immediate",
        "link": "/micro-saas-services"
    },
    {
        "title": "Business Solutions",
        "description": "Data-driven insights and analytics to drive business growth and decision-making",
        "icon": <BarChart3 className="w-8 h-8 text-zion-purple" />,
        services[{
                "name": "Business Intelligence Dashboard",
                "price": "$599",
                features["Real-time analytics", "50+ data sources", "Custom dashboards", "Automated reporting"],
                benefits["Data-driven decisions", "Performance insights", "Operational efficiency", "Competitive advantage"]
            },
            {"name": "Predictive Analytics Engine",
                "price": "$799",
                features["Sales forecasting", "Customer behavior analysis", "Risk assessment", "ML models"],
                benefits["Future planning", "Customer insights", "Risk mitigation", "Revenue optimization"]}
        ],
        "marketPrice": "$500-1500",
        "deliveryTime": "1-3 weeks",
        "link": "/micro-saas-services"
    },
    {
        "title": "Cybersecurity",
        "description": "Comprehensive security solutions to protect your digital assets and ensure compliance",
        "icon": <Shield className="w-8 h-8 text-zion-red" />,
        services[{
                "name": "24/7 Cybersecurity Monitoring",
                "price": "$899",
                features["Threat detection", "SIEM integration", "Compliance reporting", "24/7 SOC support"],
                benefits["Continuous protection", "Compliance assurance", "Incident response", "Peace of mind"]
            },
            {"name": "Penetration Testing Service",
                "price": "$2,499",
                features["Web app testing", "Network security", "Mobile app testing", "Compliance documentation"],
                benefits["Vulnerability identification", "Security validation", "Compliance readiness", "Risk assessment"]}
        ],
        "marketPrice": "$800-3000",
        "deliveryTime": "Immediate - 2 weeks",
        "link": "/micro-saas-services"
    },
    {
        "title": "Cloud Services",
        "description": "Scalable cloud solutions for modern business infrastructure and digital transformation",
        "icon": <Cloud className="w-8 h-8 text-zion-blue" />,
        services[{
                "name": "Cloud Migration Expert",
                "price": "$3,999",
                features["AWS/Azure/GCP", "Architecture design", "Data migration", "99.9% uptime guarantee"],
                benefits["Reduced costs", "Improved scalability", "Enhanced security", "Better performance"]
            },
            {"name": "DevOps Automation Platform",
                "price": "$699",
                features["CI/CD pipelines", "Kubernetes support", "Infrastructure as code", "Monitoring & alerting"],
                benefits["Faster deployments", "Reduced errors", "Team productivity", "Cost optimization"]}
        ],
        "marketPrice": "$700-5000",
        "deliveryTime": "1-4 weeks",
        "link": "/micro-saas-services"
    },
    {
        "title": "Data Services",
        "description": "Enterprise-grade data solutions for analytics, warehousing, and business intelligence",
        "icon": <Database className="w-8 h-8 text-zion-green" />,
        services[{
                "name": "Data Warehouse Solution",
                "price": "$1,299",
                features["ETL pipelines", "Data modeling", "BI integration", "Data governance"],
                benefits["Centralized data", "Better insights", "Improved reporting", "Data quality"]
            },
            {"name": "Database Performance Optimization",
                "price": "$899",
                features["Query optimization", "Indexing strategies", "Performance monitoring", "Capacity planning"],
                benefits["Faster queries", "Better performance", "Reduced costs", "Improved user experience"]}
        ],
        "marketPrice": "$900-2000",
        "deliveryTime": "1-3 weeks",
        "link": "/micro-saas-services"
    },
    {
        "title": "Development",
        "description": "Custom software development solutions for web, mobile, and enterprise applications",
        "icon": <Code className="w-8 h-8 text-zion-orange" />,
        services[{
                "name": "Progressive Web App Development",
                "price": "$2,999",
                features["Offline functionality", "Push notifications", "App-like experience", "SEO optimization"],
                benefits["Better user engagement", "Improved performance", "Cross-platform compatibility", "Enhanced SEO"]
            },
            {"name": "Cross-Platform Mobile App",
                "price": "$4,999",
                features["React Native/Flutter", "UI/UX design", "Backend integration", "App store deployment"],
                benefits["Cost-effective development", "Faster time to market", "Native performance", "Easy maintenance"]},
            {"name": "Custom API Development",
                "price": "$1,999",
                features["REST/GraphQL APIs", "Documentation", "Testing", "Developer portal"],
                benefits["System integration", "Scalable architecture", "Developer experience", "API monetization"]}
        ],
        "marketPrice": "$2000-8000",
        "deliveryTime": "3-8 weeks",
        "link": "/micro-saas-services"
    },
    {
        "title": "E-commerce",
        "description": "Complete e-commerce solutions for online businesses and digital marketplaces",
        "icon": <ShoppingCart className="w-8 h-8 text-zion-pink" />,
        services[{
                "name": "E-commerce Platform Development",
                "price": "$5,999",
                features["Payment processing", "Inventory management", "Order fulfillment", "CRM integration"],
                benefits["Increased sales", "Better customer experience", "Operational efficiency", "Scalable growth"]
            }
        ],
        "marketPrice": "$5000-15000",
        "deliveryTime": "8-10 weeks",
        "link": "/micro-saas-services"
    },
    {
        "title": "Marketing",
        "description": "AI-powered marketing automation and analytics solutions for business growth",
        "icon": <BarChart3 className="w-8 h-8 text-zion-yellow" />,
        services[{
                "name": "Marketing Automation Platform",
                "price": "$799",
                features["Email marketing", "Lead scoring", "Campaign management", "AI personalization"],
                benefits["Increased conversions", "Better lead quality", "Time savings", "ROI improvement"]
            }
        ],
        "marketPrice": "$500-1500",
        "deliveryTime": "2-3 weeks",
        "link": "/micro-saas-services"
    },
    {
        "title": "Integration",
        "description": "Seamless third-party integrations and API synchronization services",
        "icon": <LinkIcon className="w-8 h-8 text-zion-indigo" />,
        services[{
                "name": "Third-Party Integration Service",
                "price": "$1,499",
                features["Payment gateways", "CRM systems", "Marketing tools", "Custom webhooks"],
                benefits["System connectivity", "Data consistency", "Workflow automation", "Reduced manual work"]
            }
        ],
        "marketPrice": "$1000-3000",
        "deliveryTime": "2-3 weeks",
        "link": "/micro-saas-services"
    },
    {
        "title": "Blockchain",
        "description": "Next-generation blockchain and Web3 development solutions",
        "icon": <Network className="w-8 h-8 text-zion-teal" />,
        services[{
                "name": "Smart Contract Development",
                "price": "$3,999",
                features["Ethereum/Polygon/Solana", "Security auditing", "DeFi protocols", "NFT contracts"],
                benefits["Decentralized solutions", "Transparent transactions", "Automated execution", "Innovation leadership"]
            },
            {"name": "Web3 DApp Development",
                "price": "$5,999",
                features["Wallet integration", "Blockchain interaction", "Cross-chain compatibility", "User-friendly interfaces"],
                benefits["Future-proof technology", "User ownership", "Global accessibility", "Reduced intermediaries"]}
        ],
        "marketPrice": "$4000-10000",
        "deliveryTime": "4-8 weeks",
        "link": "/micro-saas-services"
    },
    {
        "title": "IoT",
        "description": "Internet of Things platform development and hardware prototyping services",
        "icon": <Monitor className="w-8 h-8 text-zion-lime" />,
        services[{
                "name": "IoT Platform Development",
                "price": "$4,999",
                features["Device management", "Real-time monitoring", "Edge computing", "Cloud integration"],
                benefits["Connected devices", "Data insights", "Operational efficiency", "Innovation opportunities"]
            }
        ],
        "marketPrice": "$4000-12000",
        "deliveryTime": "8-10 weeks",
        "link": "/micro-saas-services"
    },
    {
        "title": "Hardware",
        "description": "Rapid prototyping and hardware development services for IoT and embedded systems",
        "icon": <Smartphone className="w-8 h-8 text-zion-gray" />,
        services[{
                "name": "Hardware Prototyping Service",
                "price": "$2,999",
                features["3D printing", "PCB design", "Component sourcing", "Design validation"],
                benefits["Faster development", "Cost reduction", "Design validation", "Market testing"]
            };
        ],
        "marketPrice": "$2000-8000",
        "deliveryTime": "4-6 weeks",
        "link": "/micro-saas-services"
];
// Why choose Zion Tech Group
const whyChooseUs = [{title: "Expert Team",
        "description": "Certified professionals with 10+ years of experience",
        "icon": <Users className="w-6 h-6 text-zion-cyan" />},
    {"title": "Global Reach",
        "description": "Serving clients worldwide with 24/7 support",
        "icon": <Globe className="w-6 h-6 text-zion-purple" />},
    {"title": "Fast Delivery",
        "description": "Quick turnaround times without compromising quality",
        "icon": <Clock className="w-6 h-6 text-zion-green" />};,
    {
        "title": "Proven Results",
        "description": "Track record of successful project deliveries",
        "icon": <Star className="w-6 h-6 text-zion-yellow" />
];
export function ServicesOverview(props: any) {
    return (
        <div className="py-20 bg-zion-blue-dark">
export function ServicesOverview($1) {
    return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl "md": text-4xl font-bold text-white mb-4">
            Comprehensive Technology Services
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our complete range of professional services designed to accelerate your business growth and digital transformation
          </p>
        </div>
        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 "lg": grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (<div key={index} className="bg-zion-blue rounded-lg p-6 border border-zion-blue-light "hover": border-zion-cyan/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">{category.title}
                  <p className="text-zion-slate-light text-sm">{category.description}</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                {category.services.map((service, serviceIndex) => (<div key={serviceIndex} className="bg-zion-blue-dark rounded p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-semibold">{service.name}</h4>
                      <span className="text-zion-cyan font-bold">{service.price}</span>
                    </div>
                    <div className="mb-3">
                      <h5 className="text-zion-slate-light text-sm font-medium mb-2">Key "Features": </h5>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-zion-slate-light text-sm font-medium mb-2">"Benefits": </h5>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (<li key={benefitIndex} className="flex items-center text-zion-slate-light text-sm">
                            <Star className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0" />
                            {benefit}
                          </li>))}
                      </ul>;
                    </div>;
                  </div>))}
              </div>;
              <div className="flex items-center justify-between mb-4 text-sm">;
                <div className="text-zion-slate-light">;
                  <span className="font-medium">Market "Price": "</span> {category.marketPrice"}
                </div>;
                <div className="text-zion-slate-light">;
                  <span className="font-medium">"Delivery": "</span> {category.deliveryTime"}
                </div>;
              </div>;
              <Link to={category.link}>;
                <Button className="w-full bg-zion-cyan "hover": "bg-zion-cyan-dark text-white">;
                  View {category.title"}
                </Button>;
              </Link>;
            </div>))}
        </div>;
        {/* Why Choose Us */}
        <div className="bg-zion-blue rounded-lg p-8 mb-16">;
          <div className="text-center mb-12">;
            <h3 className="text-2xl "md": "text-3xl font-bold text-white mb-4">;
              Why Choose Zion Tech Group?;
            </h3>;
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;
              We combine technical expertise with business acumen to deliver solutions that drive real results;
            </p>;
          </div>;
          <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-4 gap-6">;
            {whyChooseUs.map((item", index) => (<div key={index} className="text-center">;
                <div className="flex justify-center mb-4">;
              </div>
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="text-zion-slate-light">
                  <span className="font-medium">Market "Price": </span> {category.marketPrice}
                </div>
                <div className="text-zion-slate-light">
                  <span className="font-medium">"Delivery": </span> {category.deliveryTime}
                </div>
              </div>
              <Link to={category.link}>
                <Button className="w-full bg-zion-cyan "hover": bg-zion-cyan-dark text-white">
                  View {category.title}
                </Button>
              </Link>
            </div>))}
        </div>
        {/* Why Choose Us */}
        <div className="bg-zion-blue rounded-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl "md": text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (<div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>;
                <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4>;
                <p className="text-zion-slate-light">{item.description}</p>;
              </div>))}
          </div>;
        </div>;
        {/* Call to Action */}
        <div className="text-center">;
          <h3 className="text-2xl "md": "text-3xl font-bold text-white mb-6">;
            Ready to Get Started?;
          </h3>;
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">;
            Contact us today for a free consultation and discover how our services can transform your business;
          </p>;
          <div className="flex flex-wrap justify-center gap-4">;
            <Link to="/micro-saas-services">;
              <Button size="lg" className="bg-zion-cyan "hover":bg-zion-cyan-dark text-white px-8 py-4 text-lg">;
                <Zap className="w-5 h-5 mr-2" />;
                Explore All Services;
              </Button>;
            </Link>;
            <Link to="/contact">;
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan "hover":bg-zion-cyan/10 px-8 py-4 text-lg">;
                Contact Us;
              </Button>;
            </Link>;
          </div>;
        </div>;
      </div>;
    </div>)"}
;
export default ServicesOverview;
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl "md": text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our services can transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
                <Zap className="w-5 h-5 mr-2" />
                Explore All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
        </div>
  );
}
export default ServicesOverview;
import {Button} from "@/components/ui/button"; import {Link} from "react-router-dom"; import { Zap,Shield,Cloud,Database,Code,ShoppingCart,BarChart3,Link as LinkIcon,Network,Monitor,Smartphone,CheckCircle,Star,Clock,Users,Globe const serviceCategories = [ { title: "AI Services",description: "Cutting-edge artificial intelligence solutions that transform business operations",icon: <Zap className="w-8 h-8 text-zion-cyan" />,services[ { name: "AI Chatbot Builder Pro",price: "$299",features["No-code platform","Multi-language support","Analytics dashboard","Platform integration"],benefits["24/7 customer support","Reduced response time","Scalable automation","Cost-effective solution"] },{name: "AI Content Generator Suite",price: "$199",features["SEO optimization","Tone adjustment","Plagiarism detection","100+ content pieces/month"],benefits["Faster content creation","Improved SEO rankings","Consistent brand voice","Time savings"]},{name: "AI Image Generator Pro",price: "$399",features["Custom style training","4K resolution","Commercial licensing","Design tool integration"],benefits["Unique visual content","Brand consistency","Cost-effective design","Rapid prototyping"]} ],marketPrice: "$150-500",deliveryTime: "Immediate",link: "/micro-saas-services" },{ title: "Business Solutions",description: "Data-driven insights and analytics to drive business growth and decision-making",icon: <BarChart3 className="w-8 h-8 text-zion-purple" />,services[ { name: "Business Intelligence Dashboard",price: "$599",features["Real-time analytics","50+ data sources","Custom dashboards","Automated reporting"],benefits["Data-driven decisions","Performance insights","Operational efficiency","Competitive advantage"] },{name: "Predictive Analytics Engine",price: "$799",features["Sales forecasting","Customer behavior analysis","Risk assessment","ML models"],benefits["Future planning","Customer insights","Risk mitigation","Revenue optimization"]} ],marketPrice: "$500-1500",deliveryTime: "1-3 weeks",link: "/micro-saas-services" },{ title: "Cybersecurity",description: "Comprehensive security solutions to protect your digital assets and ensure compliance",icon: <Shield className="w-8 h-8 text-zion-red" />,services[ { name: "24/7 Cybersecurity Monitoring",price: "$899",features["Threat detection","SIEM integration","Compliance reporting","24/7 SOC support"],benefits["Continuous protection","Compliance assurance","Incident response","Peace of mind"] },{name: "Penetration Testing Service",price: "$2,499",features["Web app testing","Network security","Mobile app testing","Compliance documentation"],benefits["Vulnerability identification","Security validation","Compliance readiness","Risk assessment"]} ],marketPrice: "$800-3000",deliveryTime: "Immediate - 2 weeks",link: "/micro-saas-services" },{ title: "Cloud Services",description: "Scalable cloud solutions for modern business infrastructure and digital transformation",icon: <Cloud className="w-8 h-8 text-zion-blue" />,services[ { name: "Cloud Migration Expert",price: "$3,999",features["AWS/Azure/GCP","Architecture design","Data migration","99.9% uptime guarantee"],benefits["Reduced costs","Improved scalability","Enhanced security","Better performance"] },{name: "DevOps Automation Platform",price: "$699",features["CI/CD pipelines","Kubernetes support","Infrastructure as code","Monitoring & alerting"],benefits["Faster deployments","Reduced errors","Team productivity","Cost optimization"]} ],marketPrice: "$700-5000",deliveryTime: "1-4 weeks",link: "/micro-saas-services" },{ title: "Data Services",description: "Enterprise-grade data solutions for analytics,warehousing,and business intelligence",icon: <Database className="w-8 h-8 text-zion-green" />,services[ { name: "Data Warehouse Solution",price: "$1,299",features["ETL pipelines","Data modeling","BI integration","Data governance"],benefits["Centralized data","Better insights","Improved reporting","Data quality"] },{name: "Database Performance Optimization",price: "$899",features["Query optimization","Indexing strategies","Performance monitoring","Capacity planning"],benefits["Faster queries","Better performance","Reduced costs","Improved user experience"]} ],marketPrice: "$900-2000",deliveryTime: "1-3 weeks",link: "/micro-saas-services" },{ title: "Development",description: "Custom software development solutions for web,mobile,and enterprise applications",icon: <Code className="w-8 h-8 text-zion-orange" />,services[ { name: "Progressive Web App Development",price: "$2,999",features["Offline functionality","Push notifications","App-like experience","SEO optimization"],benefits["Better user engagement","Improved performance","Cross-platform compatibility","Enhanced SEO"] },{name: "Cross-Platform Mobile App",price: "$4,999",features["React Native/Flutter","UI/UX design","Backend integration","App store deployment"],benefits["Cost-effective development","Faster time to market","Native performance","Easy maintenance"]},{name: "Custom API Development",price: "$1,999",features["REST/GraphQL APIs","Documentation","Testing","Developer portal"],benefits["System integration","Scalable architecture","Developer experience","API monetization"]} ],marketPrice: "$2000-8000",deliveryTime: "3-8 weeks",link: "/micro-saas-services" },{ title: "E-commerce",description: "Complete e-commerce solutions for online businesses and digital marketplaces",icon: <ShoppingCart className="w-8 h-8 text-zion-pink" />,services[ { name: "E-commerce Platform Development",price: "$5,999",features["Payment processing","Inventory management","Order fulfillment","CRM integration"],benefits["Increased sales","Better customer experience","Operational efficiency","Scalable growth"] } ],marketPrice: "$5000-15000",deliveryTime: "8-10 weeks",link: "/micro-saas-services" },{ title: "Marketing",description: "AI-powered marketing automation and analytics solutions for business growth",icon: <BarChart3 className="w-8 h-8 text-zion-yellow" />,services[ { name: "Marketing Automation Platform",price: "$799",features["Email marketing","Lead scoring","Campaign management","AI personalization"],benefits["Increased conversions","Better lead quality","Time savings","ROI improvement"] } ],marketPrice: "$500-1500",deliveryTime: "2-3 weeks",link: "/micro-saas-services" },{ title: "Integration",description: "Seamless third-party integrations and API synchronization services",icon: <LinkIcon className="w-8 h-8 text-zion-indigo" />,services[ { name: "Third-Party Integration Service",price: "$1,499",features["Payment gateways","CRM systems","Marketing tools","Custom webhooks"],benefits["System connectivity","Data consistency","Workflow automation","Reduced manual work"] } ],marketPrice: "$1000-3000",deliveryTime: "2-3 weeks",link: "/micro-saas-services" },{ title: "Blockchain",description: "Next-generation blockchain and Web3 development solutions",icon: <Network className="w-8 h-8 text-zion-teal" />,services[ { name: "Smart Contract Development",price: "$3,999",features["Ethereum/Polygon/Solana","Security auditing","DeFi protocols","NFT contracts"],benefits["Decentralized solutions","Transparent transactions","Automated execution","Innovation leadership"] },{name: "Web3 DApp Development",price: "$5,999",features["Wallet integration","Blockchain interaction","Cross-chain compatibility","User-friendly interfaces"],benefits["Future-proof technology","User ownership","Global accessibility","Reduced intermediaries"]} ],marketPrice: "$4000-10000",deliveryTime: "4-8 weeks",link: "/micro-saas-services" },{ title: "IoT",description: "Internet of Things platform development and hardware prototyping services",icon: <Monitor className="w-8 h-8 text-zion-lime" />,services[ { name: "IoT Platform Development",price: "$4,999",features["Device management","Real-time monitoring","Edge computing","Cloud integration"],benefits["Connected devices","Data insights","Operational efficiency","Innovation opportunities"] } ],marketPrice: "$4000-12000",deliveryTime: "8-10 weeks",link: "/micro-saas-services" },{ title: "Hardware",description: "Rapid prototyping and hardware development services for IoT and embedded systems",icon: <Smartphone className="w-8 h-8 text-zion-gray" />,services[ { name: "Hardware Prototyping Service",price: "$2,999",features["3D printing","PCB design","Component sourcing","Design validation"],benefits["Faster development","Cost reduction","Design validation","Market testing"] }; ],marketPrice: "$2000-8000",deliveryTime: "4-6 weeks",link: "/micro-saas-services" ]; const whyChooseUs = [ {title: "Expert Team",description: "Certified professionals with 10+ years of experience",icon: <Users className="w-6 h-6 text-zion-cyan" />},{title: "Global Reach",description: "Serving clients worldwide with 24/7 support",icon: <Globe className="w-6 h-6 text-zion-purple" />},{title: "Fast Delivery",description: "Quick turnaround times without compromising quality",icon: <Clock className="w-6 h-6 text-zion-green" />};,{ title: "Proven Results",description: "Track record of successful project deliveries",icon: <Star className="w-6 h-6 text-zion-yellow" /> ]; export function ServicesOverview($1) { return ( <div className="min-h-screen bg-white"> <div className="container mx-auto px-4"> {} <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> Comprehensive Technology Services </h2> <p className="text-zion-slate-light text-lg max-w-3xl mx-auto"> Discover our complete range of professional services designed to accelerate your business growth and digital transformation </p> </div> {} <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"> {serviceCategories.map((category,index) => (<div key={index} className="bg-zion-blue rounded-lg p-6 border border-zion-blue-light hover:border-zion-cyan/50 transition-all duration-300"> <div className="flex items-center mb-4"> <div className="mr-4"> {category.icon} </div> <div> <h3 className="text-white text-xl font-bold">{category.title}</h3> <p className="text-zion-slate-light text-sm">{category.description}</p> </div> </div> <div className="space-y-4 mb-6"> {category.services.map((service,serviceIndex) => (<div key={serviceIndex} className="bg-zion-blue-dark rounded p-4"> <div className="flex justify-between items-start mb-3"> <h4 className="text-white font-semibold">{service.name}</h4> <span className="text-zion-cyan font-bold">{service.price}</span> </div> <div className="mb-3"> <h5 className="text-zion-slate-light text-sm font-medium mb-2">Key Features:</h5> <ul className="space-y-1"> {service.features.map((feature,featureIndex) => (<li key={featureIndex} className="flex items-center text-zion-slate-light text-sm"> <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" /> {feature} </li>))} </ul> </div> <div> <h5 className="text-zion-slate-light text-sm font-medium mb-2">Benefits:</h5> <ul className="space-y-1"> {service.benefits.map((benefit,benefitIndex) => (<li key={benefitIndex} className="flex items-center text-zion-slate-light text-sm"> <Star className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0" /> {benefit} </li>))} </ul> </div> </div>))} </div> <div className="flex items-center justify-between mb-4 text-sm"> <div className="text-zion-slate-light"> <span className="font-medium">Market Price:</span> {category.marketPrice} </div> <div className="text-zion-slate-light"> <span className="font-medium">Delivery:</span> {category.deliveryTime} </div> </div> <Link to={category.link}> <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white"> View {category.title} </Button> </Link> </div>))} </div> {} <div className="bg-zion-blue rounded-lg p-8 mb-16"> <div className="text-center mb-12"> <h3 className="text-2xl md:text-3xl font-bold text-white mb-4"> Why Choose Zion Tech Group? </h3> <p className="text-zion-slate-light text-lg max-w-2xl mx-auto"> We combine technical expertise with business acumen to deliver solutions that drive real results </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {whyChooseUs.map((item,index) => (<div key={index} className="text-center"> <div className="flex justify-center mb-4"> {item.icon} </div> <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4> <p className="text-zion-slate-light">{item.description}</p> </div>))} </div> </div> {} <div className="text-center"> <h3 className="text-2xl md:text-3xl font-bold text-white mb-6"> Ready to Get Started? </h3> <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto"> Contact us today for a free consultation and discover how our services can transform your business </p> <div className="flex flex-wrap justify-center gap-4"> <Link to="/micro-saas-services"> <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg"> <Zap className="w-5 h-5 mr-2" /> Explore All Services </Button> </Link> <Link to="/contact"> <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg"> Contact Us </Button> </Link> </div> </div> </div> </div> )} export default ServicesOverview;