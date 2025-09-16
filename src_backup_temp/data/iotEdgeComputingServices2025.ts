export interface IoTEdgeService { "id": "string; "title": string; "description": string; "longDescription": string; "icon": string; "color": string; "category": 'smart-cities' | 'industrial-iot' | 'edge-ai' | 'connected-devices' | 'sensor-networks' | 'edge-computing' | 'iot-security' | 'data-analytics'; "features": string[]; "benefits": string[]; "useCases": string[]; "pricing": { "starter": string; "professional": string; "enterprise": string"} "custom": 'string'}; "estimatedTime": "string; "technologies": string[]; image?: string; "iotScore": number; "marketPrice": string; "contactLink": string; "status": 'active' | 'beta' | 'coming-soon'; "scalability": string; "deployment": string"} export const "IOT_EDGE_COMPUTING_SERVICES_2025": "IoTEdgeService[] = [; { "id": 'smart-city-platform'","title": 'Smart City IoT Platform',"description": 'Comprehensive IoT platform for smart city infrastructure and management',"longDescription": 'Transform your city into a smart,connected ecosystem with our comprehensive IoT platform. Features traffic management,environmental monitoring,energy optimization,and citizen services.',"icon": 'Building',"color": 'from-blue-500 to-indigo-600',"category": 'smart-cities',features[; 'Traffic management','Environmental monitoring','Energy optimization','Citizen services','Public safety','Infrastructure monitoring' ],; benefits[; 'Improved city efficiency','Reduced energy consumption','Enhanced citizen experience','Better resource management' ],; useCases[; 'Municipal governments','City planners','Urban developers','Smart city initiatives' ],; "pricing": "{ "starter": '$5",999/month',"professional": '$15,999/month',"enterprise": '$39,999/month',"custom": 'Contact us' },"estimatedTime": '16-32 weeks',technologies['IoT Sensors','Edge Computing','5G Networks','Cloud Computing','AI/ML','Data Analytics'],; "iotScore": '98',"marketPrice": '$5,999-$39,999/month',"contactLink": '"https": "status": 'active',"scalability": 'City-wide deployment',"deployment": 'Phased rollout with pilot programs' },{ "id": 'industrial-iot-suite',"title": 'Industrial IoT Suite',"description": 'Advanced IoT solutions for manufacturing and industrial operations',"longDescription": 'Optimize your industrial operations with our comprehensive IoT suite. Features predictive maintenance,quality control,energy management,and real-time monitoring.',"icon": 'Factory',"color": 'from-gray-500 to-slate-600',"category": 'industrial-iot',features[; 'Predictive maintenance','Quality control','Energy management','Real-time monitoring','Asset tracking','Performance analytics' ],; benefits[; '30% reduction in downtime','Improved product quality','Energy cost savings','Enhanced operational efficiency' ],; useCases[; 'Manufacturing plants','Industrial facilities','Warehouses','Processing plants' ],; "pricing": "{ "starter": '$3",999/month',"professional": '$9,999/month',"enterprise": '$24,999/month',"custom": 'Contact us' },"estimatedTime": '12-24 weeks',technologies['Industrial Sensors','Edge Computing','PLC Integration','SCADA Systems','AI/ML','Cloud Computing'],; "iotScore": '97',"marketPrice": '$3,999-$24,999/month',"contactLink": '"https": "status": 'active',"scalability": 'Plant-wide deployment',"deployment": 'Modular installation with existing systems' },{ "id": 'edge-ai-platform',"title": 'Edge AI Computing Platform',"description": 'Intelligent edge computing with AI capabilities for real-time processing',"longDescription": 'Bring AI to the edge with our intelligent computing platform. Process data locally,reduce latency,and enable real-time decision making for IoT applications.',"icon": 'Cpu',"color": 'from-green-500 to-emerald-600',"category": 'edge-ai',features[; 'Local AI processing','Real-time analytics','Edge machine learning','Low-latency computing','Offline capabilities','Scalable deployment' ],; benefits[; '90% reduction in latency','Real-time insights','Offline operation','Reduced bandwidth usage' ],; useCases[; 'Autonomous vehicles','Smart cameras','Industrial robots','Edge devices' ],; "pricing": "{ "starter": '$2",999/month',"professional": '$7,999/month',"enterprise": '$19,999/month',"custom": 'Contact us' },"estimatedTime": '8-16 weeks',technologies['Edge Computing','AI/ML','TensorFlow Lite','Edge GPUs','5G Networks','Edge Analytics'],; "iotScore": '96',"marketPrice": '$2,999-$19,999/month',"contactLink": '"https": "status": 'active',"scalability": 'Edge device deployment',"deployment": 'Edge device installation with cloud management' },{ "id": 'connected-device-management',"title": 'Connected Device Management Platform',"description": 'Comprehensive management platform for IoT devices and sensors',"longDescription": 'Manage thousands of IoT devices with our comprehensive platform. Features device provisioning,monitoring,updates,and security management.',"icon": 'Smartphone',"color": 'from-purple-500 to-pink-600',"category": 'connected-devices',features[; 'Device provisioning','Remote monitoring','Over-the-air updates','Security management','Performance analytics','Device lifecycle management' ],; benefits[; 'Centralized device management','Reduced operational costs','Improved security','Better device performance' ],; useCases[; 'IoT deployments','Device manufacturers','Service providers','Enterprise IoT' ],; "pricing": "{ "starter": '$1",999/month',"professional": '$4,999/month',"enterprise": '$12,999/month',"custom": 'Contact us' },"estimatedTime": '6-12 weeks',technologies['Device Management','IoT Protocols','Cloud Computing','Security','Analytics','APIs'],; "iotScore": '95',"marketPrice": '$1,999-$12,999/month',"contactLink": '"https": "status": 'active',"scalability": 'Unlimited device support',"deployment": 'Cloud-based with device agents' },{ "id": 'sensor-network-platform',"title": 'IoT Sensor Network Platform',"description": 'Advanced sensor network solutions for data collection and monitoring',"longDescription": 'Deploy and manage comprehensive sensor networks with our advanced platform. Features sensor deployment,data collection,real-time monitoring,and analytics.',"icon": 'Radio',"color": 'from-teal-500 to-cyan-600',"category": 'sensor-networks',features[; 'Sensor deployment','Data collection','Real-time monitoring','Network optimization','Power management','Data analytics' ],; benefits[; 'Comprehensive monitoring','Real-time insights','Optimized network performance','Reduced maintenance costs' ],; useCases[; 'Environmental monitoring','Agricultural IoT','Infrastructure monitoring','Research applications' ],; "pricing": "{ "starter": '$1",499/month',"professional": '$3,999/month',"enterprise": '$9,999/month',"custom": 'Contact us' },"estimatedTime": '4-12 weeks',technologies['IoT Sensors','Wireless Networks','Edge Computing','Data Collection','Analytics','Cloud Computing'],; "iotScore": '94',"marketPrice": '$1,499-$9,999/month',"contactLink": '"https": "status": 'active',"scalability": 'Network expansion support',"deployment": 'Sensor deployment with network setup' },{ "id": 'edge-computing-infrastructure',"title": 'Edge Computing Infrastructure',"description": 'Scalable edge computing infrastructure for distributed applications',"longDescription": 'Build robust edge computing infrastructure with our comprehensive platform. Features edge nodes,distributed computing,load balancing,and high availability.',"icon": 'Server',"color": 'from-orange-500 to-red-600',"category": 'edge-computing',features[; 'Edge nodes','Distributed computing','Load balancing','High availability','Edge storage','Network optimization' ],; benefits[; 'Improved performance','Reduced latency','Better reliability','Scalable infrastructure' ],; useCases[; 'Edge applications','Distributed systems','Content delivery','Edge computing' ],; "pricing": "{ "starter": '$2",499/month',"professional": '$6,999/month',"enterprise": '$17,999/month',"custom": 'Contact us' },"estimatedTime": '8-16 weeks',technologies['Edge Computing','Kubernetes','Docker','Load Balancers','Storage','Networking'],; "iotScore": '95',"marketPrice": '$2,499-$17,999/month',"contactLink": '"https": "status": 'active',"scalability": 'Multi-node deployment',"deployment": 'Edge node installation with management' },{ "id": 'iot-security-platform',"title": 'IoT Security & Privacy Platform',"description": 'Comprehensive security solutions for IoT devices and networks',"longDescription": 'Protect your IoT ecosystem with our comprehensive security platform. Features device authentication,network security,data encryption,and threat detection.',"icon": 'Shield',"color": 'from-red-500 to-orange-600',"category": 'iot-security',features[; 'Device authentication','Network security','Data encryption','Threat detection','Access control','Security monitoring' ],; benefits[; 'Enhanced security','Data protection','Threat prevention','Compliance support' ],; useCases[; 'IoT deployments','Smart cities','Industrial IoT','Connected devices' ],; "pricing": "{ "starter": '$2",999/month',"professional": '$7,999/month',"enterprise": '$19,999/month',"custom": 'Contact us' },"estimatedTime": '6-12 weeks',technologies['IoT Security','Encryption','Authentication','Network Security','Threat Detection','Compliance'],; "iotScore": '98',"marketPrice": '$2,999-$19,999/month',"contactLink": '"https": "status": 'active',"scalability": 'Security across all devices',"deployment": 'Security layer integration' },{ "id": 'iot-data-analytics',"title": 'IoT Data Analytics Platform',"description": 'Advanced analytics and insights for IoT data streams',"longDescription": 'Unlock the value of your IoT data with our advanced analytics platform. Features real-time processing,predictive analytics,data visualization,and automated insights.',"icon": 'BarChart3',"color": 'from-indigo-500 to-purple-600',"category": 'data-analytics',features[; 'Real-time processing','Predictive analytics','Data visualization','Automated insights','Data integration','Performance monitoring' ],; benefits[; 'Data-driven insights','Predictive capabilities','Automated decision making','Improved efficiency' ],; useCases[; 'IoT deployments','Smart cities','Industrial monitoring','Environmental tracking' ],; "pricing": "{ "starter": '$1",999/month',"professional": '$4,999/month',"enterprise": '$12,999/month',"custom": 'Contact us' },"estimatedTime": '4-8 weeks',technologies['Big Data','AI/ML','Real-time Processing','Data Visualization','Analytics','Cloud Computing'],; "iotScore": '95',"marketPrice": '$1,999-$12,999/month',"contactLink": '"https": "status": 'active',"scalability": 'Unlimited data processing',"deployment": 'Cloud-based analytics platform' ]; export const getIoTEdgeServicesByCategory = ("category": "string): IoTEdgeService[] => {; if (category === 'All') {; return IOT_EDGE_COMPUTING_SERVICES_2025; return IOT_EDGE_COMPUTING_SERVICES_2025.filter(service => service.category === category)"}; export const getAllIoTEdgeServices = (): "IoTEdgeService[] => {; return IOT_EDGE_COMPUTING_SERVICES_2025"};
export interface IoTEdgeService { id: string; title: string; description: string; longDescription: string; icon: string; color: string; category: &apos;smart-cities&apos; | &apos;industrial-iot&apos; | &apos;edge-ai&apos; | &apos;connected-devices&apos; | &apos;sensor-networks&apos; | &apos;edge-computing&apos; | &apos;iot-security&apos; | &apos;data-analytics&apos;; features: string[]; benefits: string[]; useCases: string[]; pricing: { starter: string; professional: string; enterprise: string; custom: string}; estimatedTime: string; technologies: string[]; image?: string; iotScore: number; marketPrice: string;&apos;; contactLink: string;&apos;;&apos;; status: &apos;active&apos; | &apos;beta&apos; | &apos;coming-soon&apos;; scalability: string; deployment: string} export const IOT_EDGE_COMPUTING_SERVICES_2025: IoTEdgeService[] = [; { id: &apos;smart-city-platform&apos;,title: &apos;Smart City IoT Platform&apos;,description: &apos;Comprehensive IoT platform for smart city infrastructure and management&apos;,longDescription: &apos;Transform your city into a smart,connected ecosystem with our comprehensive IoT platform. Features traffic management,environmental monitoring,energy optimization,and citizen services.&apos;,icon: &apos;Building&apos;,color: &apos;from-blue-500 to-indigo-600&apos;,category: &apos;smart-cities&apos;,features[;&apos;;&apos;; &apos;Traffic management&apos;,&apos;Environmental monitoring&apos;,&apos;Energy optimization&apos;,&apos;Citizen services&apos;,&apos;Public safety&apos;,&apos;Infrastructure monitoring&apos; ],benefits[;&apos;;&apos;; &apos;Improved city efficiency&apos;,&apos;Reduced energy consumption&apos;,&apos;Enhanced citizen experience&apos;,&apos;Better resource management&apos; ],useCases[;&apos;;&apos;; &apos;Municipal governments&apos;,&apos;City planners&apos;,&apos;Urban developers&apos;,&apos;Smart city initiatives&apos; ],pricing: { starter: &apos;$5,999/month&apos;,professional: &apos;$15,999/month&apos;,enterprise: &apos;$39,999/month&apos;,custom: &apos;Contact us&apos; },estimatedTime: &apos;16-32 weeks&apos;,technologies[&apos;IoT Sensors&apos;,&apos;Edge Computing&apos;,&apos;5G Networks&apos;,&apos;Cloud Computing&apos;,&apos;AI/ML&apos;,&apos;Data Analytics&apos;],iotScore: 98,marketPrice: &apos;$5,999-$39,999/month&apos;,contactLink: &apos;https: status: &apos;active&apos;,scalability: &apos;City-wide deployment&apos;,deployment: &apos;Phased rollout with pilot programs&apos; },{ id: &apos;industrial-iot-suite&apos;,title: &apos;Industrial IoT Suite&apos;,description: &apos;Advanced IoT solutions for manufacturing and industrial operations&apos;,longDescription: &apos;Optimize your industrial operations with our comprehensive IoT suite. Features predictive maintenance,quality control,energy management,and real-time monitoring.&apos;,icon: &apos;Factory&apos;,color: &apos;from-gray-500 to-slate-600&apos;,category: &apos;industrial-iot&apos;,features[;&apos;;&apos;; &apos;Predictive maintenance&apos;,&apos;Quality control&apos;,&apos;Energy management&apos;,&apos;Real-time monitoring&apos;,&apos;Asset tracking&apos;,&apos;Performance analytics&apos; ],benefits[;&apos;;&apos;; &apos;30% reduction in downtime&apos;,&apos;Improved product quality&apos;,&apos;Energy cost savings&apos;,&apos;Enhanced operational efficiency&apos; ],useCases[;&apos;;&apos;; &apos;Manufacturing plants&apos;,&apos;Industrial facilities&apos;,&apos;Warehouses&apos;,&apos;Processing plants&apos; ],pricing: { starter: &apos;$3,999/month&apos;,professional: &apos;$9,999/month&apos;,enterprise: &apos;$24,999/month&apos;,custom: &apos;Contact us&apos; },estimatedTime: &apos;12-24 weeks&apos;,technologies[&apos;Industrial Sensors&apos;,&apos;Edge Computing&apos;,&apos;PLC Integration&apos;,&apos;SCADA Systems&apos;,&apos;AI/ML&apos;,&apos;Cloud Computing&apos;],iotScore: 97,marketPrice: &apos;$3,999-$24,999/month&apos;,contactLink: &apos;https: status: &apos;active&apos;,scalability: &apos;Plant-wide deployment&apos;,deployment: &apos;Modular installation with existing systems&apos; },{ id: &apos;edge-ai-platform&apos;,title: &apos;Edge AI Computing Platform&apos;,description: &apos;Intelligent edge computing with AI capabilities for real-time processing&apos;,longDescription: &apos;Bring AI to the edge with our intelligent computing platform. Process data locally,reduce latency,and enable real-time decision making for IoT applications.&apos;,icon: &apos;Cpu&apos;,color: &apos;from-green-500 to-emerald-600&apos;,category: &apos;edge-ai&apos;,features[;&apos;;&apos;; &apos;Local AI processing&apos;,&apos;Real-time analytics&apos;,&apos;Edge machine learning&apos;,&apos;Low-latency computing&apos;,&apos;Offline capabilities&apos;,&apos;Scalable deployment&apos; ],benefits[;&apos;;&apos;; &apos;90% reduction in latency&apos;,&apos;Real-time insights&apos;,&apos;Offline operation&apos;,&apos;Reduced bandwidth usage&apos; ],useCases[;&apos;;&apos;; &apos;Autonomous vehicles&apos;,&apos;Smart cameras&apos;,&apos;Industrial robots&apos;,&apos;Edge devices&apos; ],pricing: { starter: &apos;$2,999/month&apos;,professional: &apos;$7,999/month&apos;,enterprise: &apos;$19,999/month&apos;,custom: &apos;Contact us&apos; },estimatedTime: &apos;8-16 weeks&apos;,technologies[&apos;Edge Computing&apos;,&apos;AI/ML&apos;,&apos;TensorFlow Lite&apos;,&apos;Edge GPUs&apos;,&apos;5G Networks&apos;,&apos;Edge Analytics&apos;],iotScore: 96,marketPrice: &apos;$2,999-$19,999/month&apos;,contactLink: &apos;https: status: &apos;active&apos;,scalability: &apos;Edge device deployment&apos;,deployment: &apos;Edge device installation with cloud management&apos; },{ id: &apos;connected-device-management&apos;,title: &apos;Connected Device Management Platform&apos;,description: &apos;Comprehensive management platform for IoT devices and sensors&apos;,longDescription: &apos;Manage thousands of IoT devices with our comprehensive platform. Features device provisioning,monitoring,updates,and security management.&apos;,icon: &apos;Smartphone&apos;,color: &apos;from-purple-500 to-pink-600&apos;,category: &apos;connected-devices&apos;,features[;&apos;;&apos;; &apos;Device provisioning&apos;,&apos;Remote monitoring&apos;,&apos;Over-the-air updates&apos;,&apos;Security management&apos;,&apos;Performance analytics&apos;,&apos;Device lifecycle management&apos; ],benefits[;&apos;;&apos;; &apos;Centralized device management&apos;,&apos;Reduced operational costs&apos;,&apos;Improved security&apos;,&apos;Better device performance&apos; ],useCases[;&apos;;&apos;; &apos;IoT deployments&apos;,&apos;Device manufacturers&apos;,&apos;Service providers&apos;,&apos;Enterprise IoT&apos; ],pricing: { starter: &apos;$1,999/month&apos;,professional: &apos;$4,999/month&apos;,enterprise: &apos;$12,999/month&apos;,custom: &apos;Contact us&apos; },estimatedTime: &apos;6-12 weeks&apos;,technologies[&apos;Device Management&apos;,&apos;IoT Protocols&apos;,&apos;Cloud Computing&apos;,&apos;Security&apos;,&apos;Analytics&apos;,&apos;APIs&apos;],iotScore: 95,marketPrice: &apos;$1,999-$12,999/month&apos;,contactLink: &apos;https: status: &apos;active&apos;,scalability: &apos;Unlimited device support&apos;,deployment: &apos;Cloud-based with device agents&apos; },{ id: &apos;sensor-network-platform&apos;,title: &apos;IoT Sensor Network Platform&apos;,description: &apos;Advanced sensor network solutions for data collection and monitoring&apos;,longDescription: &apos;Deploy and manage comprehensive sensor networks with our advanced platform. Features sensor deployment,data collection,real-time monitoring,and analytics.&apos;,icon: &apos;Radio&apos;,color: &apos;from-teal-500 to-cyan-600&apos;,category: &apos;sensor-networks&apos;,features[;&apos;;&apos;; &apos;Sensor deployment&apos;,&apos;Data collection&apos;,&apos;Real-time monitoring&apos;,&apos;Network optimization&apos;,&apos;Power management&apos;,&apos;Data analytics&apos; ],benefits[;&apos;;&apos;; &apos;Comprehensive monitoring&apos;,&apos;Real-time insights&apos;,&apos;Optimized network performance&apos;,&apos;Reduced maintenance costs&apos; ],useCases[;&apos;;&apos;; &apos;Environmental monitoring&apos;,&apos;Agricultural IoT&apos;,&apos;Infrastructure monitoring&apos;,&apos;Research applications&apos; ],pricing: { starter: &apos;$1,499/month&apos;,professional: &apos;$3,999/month&apos;,enterprise: &apos;$9,999/month&apos;,custom: &apos;Contact us&apos; },estimatedTime: &apos;4-12 weeks&apos;,technologies[&apos;IoT Sensors&apos;,&apos;Wireless Networks&apos;,&apos;Edge Computing&apos;,&apos;Data Collection&apos;,&apos;Analytics&apos;,&apos;Cloud Computing&apos;],iotScore: 94,marketPrice: &apos;$1,499-$9,999/month&apos;,contactLink: &apos;https: status: &apos;active&apos;,scalability: &apos;Network expansion support&apos;,deployment: &apos;Sensor deployment with network setup&apos; },{ id: &apos;edge-computing-infrastructure&apos;,title: &apos;Edge Computing Infrastructure&apos;,description: &apos;Scalable edge computing infrastructure for distributed applications&apos;,longDescription: &apos;Build robust edge computing infrastructure with our comprehensive platform. Features edge nodes,distributed computing,load balancing,and high availability.&apos;,icon: &apos;Server&apos;,color: &apos;from-orange-500 to-red-600&apos;,category: &apos;edge-computing&apos;,features[;&apos;;&apos;; &apos;Edge nodes&apos;,&apos;Distributed computing&apos;,&apos;Load balancing&apos;,&apos;High availability&apos;,&apos;Edge storage&apos;,&apos;Network optimization&apos; ],benefits[;&apos;;&apos;; &apos;Improved performance&apos;,&apos;Reduced latency&apos;,&apos;Better reliability&apos;,&apos;Scalable infrastructure&apos; ],useCases[;&apos;;&apos;; &apos;Edge applications&apos;,&apos;Distributed systems&apos;,&apos;Content delivery&apos;,&apos;Edge computing&apos; ],pricing: { starter: &apos;$2,499/month&apos;,professional: &apos;$6,999/month&apos;,enterprise: &apos;$17,999/month&apos;,custom: &apos;Contact us&apos; },estimatedTime: &apos;8-16 weeks&apos;,technologies[&apos;Edge Computing&apos;,&apos;Kubernetes&apos;,&apos;Docker&apos;,&apos;Load Balancers&apos;,&apos;Storage&apos;,&apos;Networking&apos;],iotScore: 95,marketPrice: &apos;$2,499-$17,999/month&apos;,contactLink: &apos;https: status: &apos;active&apos;,scalability: &apos;Multi-node deployment&apos;,deployment: &apos;Edge node installation with management&apos; },{ id: &apos;iot-security-platform&apos;,title: &apos;IoT Security & Privacy Platform&apos;,description: &apos;Comprehensive security solutions for IoT devices and networks&apos;,longDescription: &apos;Protect your IoT ecosystem with our comprehensive security platform. Features device authentication,network security,data encryption,and threat detection.&apos;,icon: &apos;Shield&apos;,color: &apos;from-red-500 to-orange-600&apos;,category: &apos;iot-security&apos;,features[;&apos;;&apos;; &apos;Device authentication&apos;,&apos;Network security&apos;,&apos;Data encryption&apos;,&apos;Threat detection&apos;,&apos;Access control&apos;,&apos;Security monitoring&apos; ],benefits[;&apos;;&apos;; &apos;Enhanced security&apos;,&apos;Data protection&apos;,&apos;Threat prevention&apos;,&apos;Compliance support&apos; ],useCases[;&apos;;&apos;; &apos;IoT deployments&apos;,&apos;Smart cities&apos;,&apos;Industrial IoT&apos;,&apos;Connected devices&apos; ],pricing: { starter: &apos;$2,999/month&apos;,professional: &apos;$7,999/month&apos;,enterprise: &apos;$19,999/month&apos;,custom: &apos;Contact us&apos; },estimatedTime: &apos;6-12 weeks&apos;,technologies[&apos;IoT Security&apos;,&apos;Encryption&apos;,&apos;Authentication&apos;,&apos;Network Security&apos;,&apos;Threat Detection&apos;,&apos;Compliance&apos;],iotScore: 98,marketPrice: &apos;$2,999-$19,999/month&apos;,contactLink: &apos;https: status: &apos;active&apos;,scalability: &apos;Security across all devices&apos;,deployment: &apos;Security layer integration&apos; },{ id: &apos;iot-data-analytics&apos;,title: &apos;IoT Data Analytics Platform&apos;,description: &apos;Advanced analytics and insights for IoT data streams&apos;,longDescription: &apos;Unlock the value of your IoT data with our advanced analytics platform. Features real-time processing,predictive analytics,data visualization,and automated insights.&apos;,icon: &apos;BarChart3&apos;,color: &apos;from-indigo-500 to-purple-600&apos;,category: &apos;data-analytics&apos;,features[;&apos;;&apos;; &apos;Real-time processing&apos;,&apos;Predictive analytics&apos;,&apos;Data visualization&apos;,&apos;Automated insights&apos;,&apos;Data integration&apos;,&apos;Performance monitoring&apos; ],benefits[;&apos;;&apos;; &apos;Data-driven insights&apos;,&apos;Predictive capabilities&apos;,&apos;Automated decision making&apos;,&apos;Improved efficiency&apos; ],useCases[;&apos;;&apos;; &apos;IoT deployments&apos;,&apos;Smart cities&apos;,&apos;Industrial monitoring&apos;,&apos;Environmental tracking&apos; ],pricing: { starter: &apos;$1,999/month&apos;,professional: &apos;$4,999/month&apos;,enterprise: &apos;$12,999/month&apos;,custom: &apos;Contact us&apos; },estimatedTime: &apos;4-8 weeks&apos;,technologies[&apos;Big Data&apos;,&apos;AI/ML&apos;,&apos;Real-time Processing&apos;,&apos;Data Visualization&apos;,&apos;Analytics&apos;,&apos;Cloud Computing&apos;],iotScore: 95,marketPrice: &apos;$1,999-$12,999/month&apos;,contactLink: &apos;https: status: &apos;active&apos;,scalability: &apos;Unlimited data processing&apos;,deployment: &apos;Cloud-based analytics platform&apos; ];&apos;; export const getIoTEdgeServicesByCategory = (category: string): IoTEdgeService[] => {; if (category === &apos;All&apos;) {; return IOT_EDGE_COMPUTING_SERVICES_2025; return IOT_EDGE_COMPUTING_SERVICES_2025.filter(service => service.category === category)}; export const getAllIoTEdgeServices = (): IoTEdgeService[] => {; return IOT_EDGE_COMPUTING_SERVICES_2025};
export interface IoTEdgeService {
  "id": string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  category: 'smart-cities' | 'industrial-iot' | 'edge-ai' | 'connected-devices' | 'sensor-networks' | 'edge-computing' | 'iot-security' | 'data-analytics';
  features: string[];
  benefits: string[];
  useCases: string[];
pricing: {
    starter: string;
    professional: string;
    enterprise: string;
    custom: string};
  "estimatedTime": string;
  technologies: string[];
  image?: string;
  iotScore: number;
  marketPrice: string;';
  contactLink: string;';';
  status: 'active' | 'beta' | 'coming-soon';
  scalability: string;
  deployment: string}
export const "IOT_EDGE_COMPUTING_SERVICES_2025": IoTEdgeService[] = [;
  {
    id: 'smart-city-platform',
    "title": 'Smart City IoT Platform',
    "description": 'Comprehensive IoT platform for smart city infrastructure and management',
    "longDescription": 'Transform your city into a smart, connected ecosystem with our comprehensive IoT platform. Features traffic management, environmental monitoring, energy optimization, and citizen services.',
    "icon": 'Building',
    "color": 'from-blue-500 to-indigo-600',
    "category": 'smart-cities',
    features[;';';
      'Traffic management',
      'Environmental monitoring',
      'Energy optimization',
      'Citizen services',
      'Public safety',
      'Infrastructure monitoring'
    ],
    benefits[;';';
      'Improved city efficiency',
      'Reduced energy consumption',
      'Enhanced citizen experience',
      'Better resource management'
    ],
    useCases[;';';
      'Municipal governments',
      'City planners',
      'Urban developers',
      'Smart city initiatives'
    ],
    "pricing": {
      starter: '$5,999/month',
      "professional": '$15,999/month',
      "enterprise": '$39,999/month',
      "custom": 'Contact us'
    },
    "estimatedTime": '16-32 weeks',
    technologies['IoT Sensors', 'Edge Computing', '5G Networks', 'Cloud Computing', 'AI/ML', 'Data Analytics'],
    "iotScore": 98,
    "marketPrice": '$5,999-$39,999/month',
    "contactLink": 'https://ziontechgroup.com/contact',
    "status": 'active',
    "scalability": 'City-wide deployment',
    "deployment": 'Phased rollout with pilot programs'
  },
  {
    "id": 'industrial-iot-suite',
    "title": 'Industrial IoT Suite',
    "description": 'Advanced IoT solutions for manufacturing and industrial operations',
    "longDescription": 'Optimize your industrial operations with our comprehensive IoT suite. Features predictive maintenance, quality control, energy management, and real-time monitoring.',
    "icon": 'Factory',
    "color": 'from-gray-500 to-slate-600',
    "category": 'industrial-iot',
    features[;';';
      'Predictive maintenance',
      'Quality control',
      'Energy management',
      'Real-time monitoring',
      'Asset tracking',
      'Performance analytics'
    ],
    benefits[;';';
      '30% reduction in downtime',
      'Improved product quality',
      'Energy cost savings',
      'Enhanced operational efficiency'
    ],
    useCases[;';';
      'Manufacturing plants',
      'Industrial facilities',
      'Warehouses',
      'Processing plants'
    ],
    "pricing": {
      starter: '$3,999/month',
      "professional": '$9,999/month',
      "enterprise": '$24,999/month',
      "custom": 'Contact us'
    },
    "estimatedTime": '12-24 weeks',
    technologies['Industrial Sensors', 'Edge Computing', 'PLC Integration', 'SCADA Systems', 'AI/ML', 'Cloud Computing'],
    "iotScore": 97,
    "marketPrice": '$3,999-$24,999/month',
    "contactLink": 'https://ziontechgroup.com/contact',
    "status": 'active',
    "scalability": 'Plant-wide deployment',
    "deployment": 'Modular installation with existing systems'
  },
  {
    "id": 'edge-ai-platform',
    "title": 'Edge AI Computing Platform',
    "description": 'Intelligent edge computing with AI capabilities for real-time processing',
    "longDescription": 'Bring AI to the edge with our intelligent computing platform. Process data locally, reduce latency, and enable real-time decision making for IoT applications.',
    "icon": 'Cpu',
    "color": 'from-green-500 to-emerald-600',
    "category": 'edge-ai',
    features[;';';
      'Local AI processing',
      'Real-time analytics',
      'Edge machine learning',
      'Low-latency computing',
      'Offline capabilities',
      'Scalable deployment'
    ],
    benefits[;';';
      '90% reduction in latency',
      'Real-time insights',
      'Offline operation',
      'Reduced bandwidth usage'
    ],
    useCases[;';';
      'Autonomous vehicles',
      'Smart cameras',
      'Industrial robots',
      'Edge devices'
    ],
    "pricing": {
      starter: '$2,999/month',
      "professional": '$7,999/month',
      "enterprise": '$19,999/month',
      "custom": 'Contact us'
    },
    "estimatedTime": '8-16 weeks',
    technologies['Edge Computing', 'AI/ML', 'TensorFlow Lite', 'Edge GPUs', '5G Networks', 'Edge Analytics'],
    "iotScore": 96,
    "marketPrice": '$2,999-$19,999/month',
    "contactLink": 'https://ziontechgroup.com/contact',
    "status": 'active',
    "scalability": 'Edge device deployment',
    "deployment": 'Edge device installation with cloud management'
  },
  {
    "id": 'connected-device-management',
    "title": 'Connected Device Management Platform',
    "description": 'Comprehensive management platform for IoT devices and sensors',
    "longDescription": 'Manage thousands of IoT devices with our comprehensive platform. Features device provisioning, monitoring, updates, and security management.',
    "icon": 'Smartphone',
    "color": 'from-purple-500 to-pink-600',
    "category": 'connected-devices',
    features[;';';
      'Device provisioning',
      'Remote monitoring',
      'Over-the-air updates',
      'Security management',
      'Performance analytics',
      'Device lifecycle management'
    ],
    benefits[;';';
      'Centralized device management',
      'Reduced operational costs',
      'Improved security',
      'Better device performance'
    ],
    useCases[;';';
      'IoT deployments',
      'Device manufacturers',
      'Service providers',
      'Enterprise IoT'
    ],
    "pricing": {
      starter: '$1,999/month',
      "professional": '$4,999/month',
      "enterprise": '$12,999/month',
      "custom": 'Contact us'
    },
    "estimatedTime": '6-12 weeks',
    technologies['Device Management', 'IoT Protocols', 'Cloud Computing', 'Security', 'Analytics', 'APIs'],
    "iotScore": 95,
    "marketPrice": '$1,999-$12,999/month',
    "contactLink": 'https://ziontechgroup.com/contact',
    "status": 'active',
    "scalability": 'Unlimited device support',
    "deployment": 'Cloud-based with device agents'
  },
  {
    "id": 'sensor-network-platform',
    "title": 'IoT Sensor Network Platform',
    "description": 'Advanced sensor network solutions for data collection and monitoring',
    "longDescription": 'Deploy and manage comprehensive sensor networks with our advanced platform. Features sensor deployment, data collection, real-time monitoring, and analytics.',
    "icon": 'Radio',
    "color": 'from-teal-500 to-cyan-600',
    "category": 'sensor-networks',
    features[;';';
      'Sensor deployment',
      'Data collection',
      'Real-time monitoring',
      'Network optimization',
      'Power management',
      'Data analytics'
    ],
    benefits[;';';
      'Comprehensive monitoring',
      'Real-time insights',
      'Optimized network performance',
      'Reduced maintenance costs'
    ],
    useCases[;';';
      'Environmental monitoring',
      'Agricultural IoT',
      'Infrastructure monitoring',
      'Research applications'
    ],
    "pricing": {
      starter: '$1,499/month',
      "professional": '$3,999/month',
      "enterprise": '$9,999/month',
      "custom": 'Contact us'
    },
    "estimatedTime": '4-12 weeks',
    technologies['IoT Sensors', 'Wireless Networks', 'Edge Computing', 'Data Collection', 'Analytics', 'Cloud Computing'],
    "iotScore": 94,
    "marketPrice": '$1,499-$9,999/month',
    "contactLink": 'https://ziontechgroup.com/contact',
    "status": 'active',
    "scalability": 'Network expansion support',
    "deployment": 'Sensor deployment with network setup'
  },
  {
    "id": 'edge-computing-infrastructure',
    "title": 'Edge Computing Infrastructure',
    "description": 'Scalable edge computing infrastructure for distributed applications',
    "longDescription": 'Build robust edge computing infrastructure with our comprehensive platform. Features edge nodes, distributed computing, load balancing, and high availability.',
    "icon": 'Server',
    "color": 'from-orange-500 to-red-600',
    "category": 'edge-computing',
    features[;';';
      'Edge nodes',
      'Distributed computing',
      'Load balancing',
      'High availability',
      'Edge storage',
      'Network optimization'
    ],
    benefits[;';';
      'Improved performance',
      'Reduced latency',
      'Better reliability',
      'Scalable infrastructure'
    ],
    useCases[;';';
      'Edge applications',
      'Distributed systems',
      'Content delivery',
      'Edge computing'
    ],
    "pricing": {
      starter: '$2,499/month',
      "professional": '$6,999/month',
      "enterprise": '$17,999/month',
      "custom": 'Contact us'
    },
    "estimatedTime": '8-16 weeks',
    technologies['Edge Computing', 'Kubernetes', 'Docker', 'Load Balancers', 'Storage', 'Networking'],
    "iotScore": 95,
    "marketPrice": '$2,499-$17,999/month',
    "contactLink": 'https://ziontechgroup.com/contact',
    "status": 'active',
    "scalability": 'Multi-node deployment',
    "deployment": 'Edge node installation with management'
  },
  {
    "id": 'iot-security-platform',
    "title": 'IoT Security & Privacy Platform',
    "description": 'Comprehensive security solutions for IoT devices and networks',
    "longDescription": 'Protect your IoT ecosystem with our comprehensive security platform. Features device authentication, network security, data encryption, and threat detection.',
    "icon": 'Shield',
    "color": 'from-red-500 to-orange-600',
    "category": 'iot-security',
    features[;';';
      'Device authentication',
      'Network security',
      'Data encryption',
      'Threat detection',
      'Access control',
      'Security monitoring'
    ],
    benefits[;';';
      'Enhanced security',
      'Data protection',
      'Threat prevention',
      'Compliance support'
    ],
    useCases[;';';
      'IoT deployments',
      'Smart cities',
      'Industrial IoT',
      'Connected devices'
    ],
    "pricing": {
      starter: '$2,999/month',
      "professional": '$7,999/month',
      "enterprise": '$19,999/month',
      "custom": 'Contact us'
    },
    "estimatedTime": '6-12 weeks',
    technologies['IoT Security', 'Encryption', 'Authentication', 'Network Security', 'Threat Detection', 'Compliance'],
    "iotScore": 98,
    "marketPrice": '$2,999-$19,999/month',
    "contactLink": 'https://ziontechgroup.com/contact',
    "status": 'active',
    "scalability": 'Security across all devices',
    "deployment": 'Security layer integration'
  },
  {
    "id": 'iot-data-analytics',
    "title": 'IoT Data Analytics Platform',
    "description": 'Advanced analytics and insights for IoT data streams',
    "longDescription": 'Unlock the value of your IoT data with our advanced analytics platform. Features real-time processing, predictive analytics, data visualization, and automated insights.',
    "icon": 'BarChart3',
    "color": 'from-indigo-500 to-purple-600',
    "category": 'data-analytics',
    features[;';';
      'Real-time processing',
      'Predictive analytics',
      'Data visualization',
      'Automated insights',
      'Data integration',
      'Performance monitoring'
    ],
    benefits[;';';
      'Data-driven insights',
      'Predictive capabilities',
      'Automated decision making',
      'Improved efficiency'
    ],
    useCases[;';';
      'IoT deployments',
      'Smart cities',
      'Industrial monitoring',
      'Environmental tracking'
    ],
    "pricing": {
      starter: '$1,999/month',
      "professional": '$4,999/month',
      "enterprise": '$12,999/month',
      "custom": 'Contact us'
    },
    "estimatedTime": '4-8 weeks',
    technologies['Big Data', 'AI/ML', 'Real-time Processing', 'Data Visualization', 'Analytics', 'Cloud Computing'],
    "iotScore": 95,
    "marketPrice": '$1,999-$12,999/month',
    "contactLink": 'https://ziontechgroup.com/contact',
    "status": 'active',
    "scalability": 'Unlimited data processing',
    "deployment": 'Cloud-based analytics platform'
];';
export const getIoTEdgeServicesByCategory = (category: string): IoTEdgeService[] => {;
  if (category === 'All') {;
    return IOT_EDGE_COMPUTING_SERVICES_2025;
  return IOT_EDGE_COMPUTING_SERVICES_2025.filter(service => service.category === category)};
export const getAllIoTEdgeServices = (): IoTEdgeService[] => {;
  return IOT_EDGE_COMPUTING_SERVICES_2025};';
';';
export interface IoTEdgeService { id: string; title: string; description: string; longDescription: string; icon: string; color: string; category: 'smart-cities' | 'industrial-iot' | 'edge-ai' | 'connected-devices' | 'sensor-networks' | 'edge-computing' | 'iot-security' | 'data-analytics'; features: string[]; benefits: string[]; useCases: string[]; pricing: { starter: string; professional: string; enterprise: string} custom: 'string'}; estimatedTime: string; technologies: string[]; image?: string; iotScore: number; marketPrice: string; contactLink: string; status: 'active' | 'beta' | 'coming-soon'; scalability: string; deployment: string} export const IOT_EDGE_COMPUTING_SERVICES_2025: IoTEdgeService[] = [; { id: 'smart-city-platform',title: 'Smart City IoT Platform',description: 'Comprehensive IoT platform for smart city infrastructure and management',longDescription: 'Transform your city into a smart,connected ecosystem with our comprehensive IoT platform. Features traffic management,environmental monitoring,energy optimization,and citizen services.',icon: 'Building',color: 'from-blue-500 to-indigo-600',category: 'smart-cities',features[; 'Traffic management','Environmental monitoring','Energy optimization','Citizen services','Public safety','Infrastructure monitoring' ],; benefits[; 'Improved city efficiency','Reduced energy consumption','Enhanced citizen experience','Better resource management' ],; useCases[; 'Municipal governments','City planners','Urban developers','Smart city initiatives' ],; pricing: { starter: '$5,999/month',professional: '$15,999/month',enterprise: '$39,999/month',custom: 'Contact us' },estimatedTime: '16-32 weeks',technologies['IoT Sensors','Edge Computing','5G Networks','Cloud Computing','AI/ML','Data Analytics'],; iotScore: '98',marketPrice: '$5,999-$39,999/month',contactLink: 'https: status: 'active',scalability: 'City-wide deployment',deployment: 'Phased rollout with pilot programs' },{ id: 'industrial-iot-suite',title: 'Industrial IoT Suite',description: 'Advanced IoT solutions for manufacturing and industrial operations',longDescription: 'Optimize your industrial operations with our comprehensive IoT suite. Features predictive maintenance,quality control,energy management,and real-time monitoring.',icon: 'Factory',color: 'from-gray-500 to-slate-600',category: 'industrial-iot',features[; 'Predictive maintenance','Quality control','Energy management','Real-time monitoring','Asset tracking','Performance analytics' ],; benefits[; '30% reduction in downtime','Improved product quality','Energy cost savings','Enhanced operational efficiency' ],; useCases[; 'Manufacturing plants','Industrial facilities','Warehouses','Processing plants' ],; pricing: { starter: '$3,999/month',professional: '$9,999/month',enterprise: '$24,999/month',custom: 'Contact us' },estimatedTime: '12-24 weeks',technologies['Industrial Sensors','Edge Computing','PLC Integration','SCADA Systems','AI/ML','Cloud Computing'],; iotScore: '97',marketPrice: '$3,999-$24,999/month',contactLink: 'https: status: 'active',scalability: 'Plant-wide deployment',deployment: 'Modular installation with existing systems' },{ id: 'edge-ai-platform',title: 'Edge AI Computing Platform',description: 'Intelligent edge computing with AI capabilities for real-time processing',longDescription: 'Bring AI to the edge with our intelligent computing platform. Process data locally,reduce latency,and enable real-time decision making for IoT applications.',icon: 'Cpu',color: 'from-green-500 to-emerald-600',category: 'edge-ai',features[; 'Local AI processing','Real-time analytics','Edge machine learning','Low-latency computing','Offline capabilities','Scalable deployment' ],; benefits[; '90% reduction in latency','Real-time insights','Offline operation','Reduced bandwidth usage' ],; useCases[; 'Autonomous vehicles','Smart cameras','Industrial robots','Edge devices' ],; pricing: { starter: '$2,999/month',professional: '$7,999/month',enterprise: '$19,999/month',custom: 'Contact us' },estimatedTime: '8-16 weeks',technologies['Edge Computing','AI/ML','TensorFlow Lite','Edge GPUs','5G Networks','Edge Analytics'],; iotScore: '96',marketPrice: '$2,999-$19,999/month',contactLink: 'https: status: 'active',scalability: 'Edge device deployment',deployment: 'Edge device installation with cloud management' },{ id: 'connected-device-management',title: 'Connected Device Management Platform',description: 'Comprehensive management platform for IoT devices and sensors',longDescription: 'Manage thousands of IoT devices with our comprehensive platform. Features device provisioning,monitoring,updates,and security management.',icon: 'Smartphone',color: 'from-purple-500 to-pink-600',category: 'connected-devices',features[; 'Device provisioning','Remote monitoring','Over-the-air updates','Security management','Performance analytics','Device lifecycle management' ],; benefits[; 'Centralized device management','Reduced operational costs','Improved security','Better device performance' ],; useCases[; 'IoT deployments','Device manufacturers','Service providers','Enterprise IoT' ],; pricing: { starter: '$1,999/month',professional: '$4,999/month',enterprise: '$12,999/month',custom: 'Contact us' },estimatedTime: '6-12 weeks',technologies['Device Management','IoT Protocols','Cloud Computing','Security','Analytics','APIs'],; iotScore: '95',marketPrice: '$1,999-$12,999/month',contactLink: 'https: status: 'active',scalability: 'Unlimited device support',deployment: 'Cloud-based with device agents' },{ id: 'sensor-network-platform',title: 'IoT Sensor Network Platform',description: 'Advanced sensor network solutions for data collection and monitoring',longDescription: 'Deploy and manage comprehensive sensor networks with our advanced platform. Features sensor deployment,data collection,real-time monitoring,and analytics.',icon: 'Radio',color: 'from-teal-500 to-cyan-600',category: 'sensor-networks',features[; 'Sensor deployment','Data collection','Real-time monitoring','Network optimization','Power management','Data analytics' ],; benefits[; 'Comprehensive monitoring','Real-time insights','Optimized network performance','Reduced maintenance costs' ],; useCases[; 'Environmental monitoring','Agricultural IoT','Infrastructure monitoring','Research applications' ],; pricing: { starter: '$1,499/month',professional: '$3,999/month',enterprise: '$9,999/month',custom: 'Contact us' },estimatedTime: '4-12 weeks',technologies['IoT Sensors','Wireless Networks','Edge Computing','Data Collection','Analytics','Cloud Computing'],; iotScore: '94',marketPrice: '$1,499-$9,999/month',contactLink: 'https: status: 'active',scalability: 'Network expansion support',deployment: 'Sensor deployment with network setup' },{ id: 'edge-computing-infrastructure',title: 'Edge Computing Infrastructure',description: 'Scalable edge computing infrastructure for distributed applications',longDescription: 'Build robust edge computing infrastructure with our comprehensive platform. Features edge nodes,distributed computing,load balancing,and high availability.',icon: 'Server',color: 'from-orange-500 to-red-600',category: 'edge-computing',features[; 'Edge nodes','Distributed computing','Load balancing','High availability','Edge storage','Network optimization' ],; benefits[; 'Improved performance','Reduced latency','Better reliability','Scalable infrastructure' ],; useCases[; 'Edge applications','Distributed systems','Content delivery','Edge computing' ],; pricing: { starter: '$2,499/month',professional: '$6,999/month',enterprise: '$17,999/month',custom: 'Contact us' },estimatedTime: '8-16 weeks',technologies['Edge Computing','Kubernetes','Docker','Load Balancers','Storage','Networking'],; iotScore: '95',marketPrice: '$2,499-$17,999/month',contactLink: 'https: status: 'active',scalability: 'Multi-node deployment',deployment: 'Edge node installation with management' },{ id: 'iot-security-platform',title: 'IoT Security & Privacy Platform',description: 'Comprehensive security solutions for IoT devices and networks',longDescription: 'Protect your IoT ecosystem with our comprehensive security platform. Features device authentication,network security,data encryption,and threat detection.',icon: 'Shield',color: 'from-red-500 to-orange-600',category: 'iot-security',features[; 'Device authentication','Network security','Data encryption','Threat detection','Access control','Security monitoring' ],; benefits[; 'Enhanced security','Data protection','Threat prevention','Compliance support' ],; useCases[; 'IoT deployments','Smart cities','Industrial IoT','Connected devices' ],; pricing: { starter: '$2,999/month',professional: '$7,999/month',enterprise: '$19,999/month',custom: 'Contact us' },estimatedTime: '6-12 weeks',technologies['IoT Security','Encryption','Authentication','Network Security','Threat Detection','Compliance'],; iotScore: '98',marketPrice: '$2,999-$19,999/month',contactLink: 'https: status: 'active',scalability: 'Security across all devices',deployment: 'Security layer integration' },{ id: 'iot-data-analytics',title: 'IoT Data Analytics Platform',description: 'Advanced analytics and insights for IoT data streams',longDescription: 'Unlock the value of your IoT data with our advanced analytics platform. Features real-time processing,predictive analytics,data visualization,and automated insights.',icon: 'BarChart3',color: 'from-indigo-500 to-purple-600',category: 'data-analytics',features[; 'Real-time processing','Predictive analytics','Data visualization','Automated insights','Data integration','Performance monitoring' ],; benefits[; 'Data-driven insights','Predictive capabilities','Automated decision making','Improved efficiency' ],; useCases[; 'IoT deployments','Smart cities','Industrial monitoring','Environmental tracking' ],; pricing: { starter: '$1,999/month',professional: '$4,999/month',enterprise: '$12,999/month',custom: 'Contact us' },estimatedTime: '4-8 weeks',technologies['Big Data','AI/ML','Real-time Processing','Data Visualization','Analytics','Cloud Computing'],; iotScore: '95',marketPrice: '$1,999-$12,999/month',contactLink: 'https: status: 'active',scalability: 'Unlimited data processing',deployment: 'Cloud-based analytics platform' ]; export const getIoTEdgeServicesByCategory = (category: string): IoTEdgeService[] => {; if (category === 'All') {; return IOT_EDGE_COMPUTING_SERVICES_2025; return IOT_EDGE_COMPUTING_SERVICES_2025.filter(service => service.category === category)}; export const getAllIoTEdgeServices = (): IoTEdgeService[] => {; return IOT_EDGE_COMPUTING_SERVICES_2025};
  return IOT_EDGE_COMPUTING_SERVICES_2025};
export interface IoTEdgeService { id: string; title: string; description: string; longDescription: string; icon: string; color: string; category: 'smart-cities' | 'industrial-iot' | 'edge-ai' | 'connected-devices' | 'sensor-networks' | 'edge-computing' | 'iot-security' | 'data-analytics'; features: string[]; benefits: string[]; useCases: string[]; pricing: { starter: string; professional: string; enterprise: string; custom: string}; estimatedTime: string; technologies: string[]; image?: string; iotScore: number; marketPrice: string;'; contactLink: string;';'; status: 'active' | 'beta' | 'coming-soon'; scalability: string; deployment: string} export const IOT_EDGE_COMPUTING_SERVICES_2025: IoTEdgeService[] = [; { id: 'smart-city-platform',title: 'Smart City IoT Platform',description: 'Comprehensive IoT platform for smart city infrastructure and management',longDescription: 'Transform your city into a smart,connected ecosystem with our comprehensive IoT platform. Features traffic management,environmental monitoring,energy optimization,and citizen services.',icon: 'Building',color: 'from-blue-500 to-indigo-600',category: 'smart-cities',features[;';'; 'Traffic management','Environmental monitoring','Energy optimization','Citizen services','Public safety','Infrastructure monitoring' ],benefits[;';'; 'Improved city efficiency','Reduced energy consumption','Enhanced citizen experience','Better resource management' ],useCases[;';'; 'Municipal governments','City planners','Urban developers','Smart city initiatives' ],pricing: { starter: '$5,999/month',professional: '$15,999/month',enterprise: '$39,999/month',custom: 'Contact us' },estimatedTime: '16-32 weeks',technologies['IoT Sensors','Edge Computing','5G Networks','Cloud Computing','AI/ML','Data Analytics'],iotScore: 98,marketPrice: '$5,999-$39,999/month',contactLink: 'https: status: 'active',scalability: 'City-wide deployment',deployment: 'Phased rollout with pilot programs' },{ id: 'industrial-iot-suite',title: 'Industrial IoT Suite',description: 'Advanced IoT solutions for manufacturing and industrial operations',longDescription: 'Optimize your industrial operations with our comprehensive IoT suite. Features predictive maintenance,quality control,energy management,and real-time monitoring.',icon: 'Factory',color: 'from-gray-500 to-slate-600',category: 'industrial-iot',features[;';'; 'Predictive maintenance','Quality control','Energy management','Real-time monitoring','Asset tracking','Performance analytics' ],benefits[;';'; '30% reduction in downtime','Improved product quality','Energy cost savings','Enhanced operational efficiency' ],useCases[;';'; 'Manufacturing plants','Industrial facilities','Warehouses','Processing plants' ],pricing: { starter: '$3,999/month',professional: '$9,999/month',enterprise: '$24,999/month',custom: 'Contact us' },estimatedTime: '12-24 weeks',technologies['Industrial Sensors','Edge Computing','PLC Integration','SCADA Systems','AI/ML','Cloud Computing'],iotScore: 97,marketPrice: '$3,999-$24,999/month',contactLink: 'https: status: 'active',scalability: 'Plant-wide deployment',deployment: 'Modular installation with existing systems' },{ id: 'edge-ai-platform',title: 'Edge AI Computing Platform',description: 'Intelligent edge computing with AI capabilities for real-time processing',longDescription: 'Bring AI to the edge with our intelligent computing platform. Process data locally,reduce latency,and enable real-time decision making for IoT applications.',icon: 'Cpu',color: 'from-green-500 to-emerald-600',category: 'edge-ai',features[;';'; 'Local AI processing','Real-time analytics','Edge machine learning','Low-latency computing','Offline capabilities','Scalable deployment' ],benefits[;';'; '90% reduction in latency','Real-time insights','Offline operation','Reduced bandwidth usage' ],useCases[;';'; 'Autonomous vehicles','Smart cameras','Industrial robots','Edge devices' ],pricing: { starter: '$2,999/month',professional: '$7,999/month',enterprise: '$19,999/month',custom: 'Contact us' },estimatedTime: '8-16 weeks',technologies['Edge Computing','AI/ML','TensorFlow Lite','Edge GPUs','5G Networks','Edge Analytics'],iotScore: 96,marketPrice: '$2,999-$19,999/month',contactLink: 'https: status: 'active',scalability: 'Edge device deployment',deployment: 'Edge device installation with cloud management' },{ id: 'connected-device-management',title: 'Connected Device Management Platform',description: 'Comprehensive management platform for IoT devices and sensors',longDescription: 'Manage thousands of IoT devices with our comprehensive platform. Features device provisioning,monitoring,updates,and security management.',icon: 'Smartphone',color: 'from-purple-500 to-pink-600',category: 'connected-devices',features[;';'; 'Device provisioning','Remote monitoring','Over-the-air updates','Security management','Performance analytics','Device lifecycle management' ],benefits[;';'; 'Centralized device management','Reduced operational costs','Improved security','Better device performance' ],useCases[;';'; 'IoT deployments','Device manufacturers','Service providers','Enterprise IoT' ],pricing: { starter: '$1,999/month',professional: '$4,999/month',enterprise: '$12,999/month',custom: 'Contact us' },estimatedTime: '6-12 weeks',technologies['Device Management','IoT Protocols','Cloud Computing','Security','Analytics','APIs'],iotScore: 95,marketPrice: '$1,999-$12,999/month',contactLink: 'https: status: 'active',scalability: 'Unlimited device support',deployment: 'Cloud-based with device agents' },{ id: 'sensor-network-platform',title: 'IoT Sensor Network Platform',description: 'Advanced sensor network solutions for data collection and monitoring',longDescription: 'Deploy and manage comprehensive sensor networks with our advanced platform. Features sensor deployment,data collection,real-time monitoring,and analytics.',icon: 'Radio',color: 'from-teal-500 to-cyan-600',category: 'sensor-networks',features[;';'; 'Sensor deployment','Data collection','Real-time monitoring','Network optimization','Power management','Data analytics' ],benefits[;';'; 'Comprehensive monitoring','Real-time insights','Optimized network performance','Reduced maintenance costs' ],useCases[;';'; 'Environmental monitoring','Agricultural IoT','Infrastructure monitoring','Research applications' ],pricing: { starter: '$1,499/month',professional: '$3,999/month',enterprise: '$9,999/month',custom: 'Contact us' },estimatedTime: '4-12 weeks',technologies['IoT Sensors','Wireless Networks','Edge Computing','Data Collection','Analytics','Cloud Computing'],iotScore: 94,marketPrice: '$1,499-$9,999/month',contactLink: 'https: status: 'active',scalability: 'Network expansion support',deployment: 'Sensor deployment with network setup' },{ id: 'edge-computing-infrastructure',title: 'Edge Computing Infrastructure',description: 'Scalable edge computing infrastructure for distributed applications',longDescription: 'Build robust edge computing infrastructure with our comprehensive platform. Features edge nodes,distributed computing,load balancing,and high availability.',icon: 'Server',color: 'from-orange-500 to-red-600',category: 'edge-computing',features[;';'; 'Edge nodes','Distributed computing','Load balancing','High availability','Edge storage','Network optimization' ],benefits[;';'; 'Improved performance','Reduced latency','Better reliability','Scalable infrastructure' ],useCases[;';'; 'Edge applications','Distributed systems','Content delivery','Edge computing' ],pricing: { starter: '$2,499/month',professional: '$6,999/month',enterprise: '$17,999/month',custom: 'Contact us' },estimatedTime: '8-16 weeks',technologies['Edge Computing','Kubernetes','Docker','Load Balancers','Storage','Networking'],iotScore: 95,marketPrice: '$2,499-$17,999/month',contactLink: 'https: status: 'active',scalability: 'Multi-node deployment',deployment: 'Edge node installation with management' },{ id: 'iot-security-platform',title: 'IoT Security & Privacy Platform',description: 'Comprehensive security solutions for IoT devices and networks',longDescription: 'Protect your IoT ecosystem with our comprehensive security platform. Features device authentication,network security,data encryption,and threat detection.',icon: 'Shield',color: 'from-red-500 to-orange-600',category: 'iot-security',features[;';'; 'Device authentication','Network security','Data encryption','Threat detection','Access control','Security monitoring' ],benefits[;';'; 'Enhanced security','Data protection','Threat prevention','Compliance support' ],useCases[;';'; 'IoT deployments','Smart cities','Industrial IoT','Connected devices' ],pricing: { starter: '$2,999/month',professional: '$7,999/month',enterprise: '$19,999/month',custom: 'Contact us' },estimatedTime: '6-12 weeks',technologies['IoT Security','Encryption','Authentication','Network Security','Threat Detection','Compliance'],iotScore: 98,marketPrice: '$2,999-$19,999/month',contactLink: 'https: status: 'active',scalability: 'Security across all devices',deployment: 'Security layer integration' },{ id: 'iot-data-analytics',title: 'IoT Data Analytics Platform',description: 'Advanced analytics and insights for IoT data streams',longDescription: 'Unlock the value of your IoT data with our advanced analytics platform. Features real-time processing,predictive analytics,data visualization,and automated insights.',icon: 'BarChart3',color: 'from-indigo-500 to-purple-600',category: 'data-analytics',features[;';'; 'Real-time processing','Predictive analytics','Data visualization','Automated insights','Data integration','Performance monitoring' ],benefits[;';'; 'Data-driven insights','Predictive capabilities','Automated decision making','Improved efficiency' ],useCases[;';'; 'IoT deployments','Smart cities','Industrial monitoring','Environmental tracking' ],pricing: { starter: '$1,999/month',professional: '$4,999/month',enterprise: '$12,999/month',custom: 'Contact us' },estimatedTime: '4-8 weeks',technologies['Big Data','AI/ML','Real-time Processing','Data Visualization','Analytics','Cloud Computing'],iotScore: 95,marketPrice: '$1,999-$12,999/month',contactLink: 'https: status: 'active',scalability: 'Unlimited data processing',deployment: 'Cloud-based analytics platform' ];'; export const getIoTEdgeServicesByCategory = (category: string): IoTEdgeService[] => {; if (category === 'All') {; return IOT_EDGE_COMPUTING_SERVICES_2025; return IOT_EDGE_COMPUTING_SERVICES_2025.filter(service => service.category === category)}; export const getAllIoTEdgeServices = (): IoTEdgeService[] => {; return IOT_EDGE_COMPUTING_SERVICES_2025};
