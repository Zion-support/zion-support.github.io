import { motion } from 'framer-motionimport { Link } from react-router-domimport {Brain,';
  Shield,;
  Cloud,;
  Database,;
  Globe,;
  Zap,;
  ArrowRight,;
  Star,;
  TrendingUp,;
  Users,;
  Clock,;
  CheckCircle,;
  Search} from lucide-reactexport const "EnhancedServicesShowcase": "React.FC = () => {;
  const services = [{;
      "title": AI Workflow Automation",';
      "description": 'Transform business operations with intelligent automation that learns and scales',;
      "price": 'From $299/month',;
      "path": '/services/ai-workflow-automation',;
              "icon": "GitFor k",;
      "category": 'AI & Automation',;
      "features": "['Process optimization'", 'AI-powered workflows', 'Real-time analytics', 'Scalable automation'],;
      "benefits": "['Reduce manual work by 70-85%'", 'Improve efficiency by 60%', 'Cut operational costs by 40-50%'],;
      "color": 'from-cyan-500 to-blue-600',;
      "glowColor": 'cyan'},;
    {;
      "title": 'AI Cybersecurity',;
      "description": 'Protect your business with AI-powered threat detection and prevention',;
      "price": 'From $499/month',;
      "path": '/services/ai-cybersecurity',;
      "icon": "Shiel d",;
      "category": 'Security',;
      "features": "['Threat detection'", 'Behavioral analytics', 'Automated response', 'Compliance monitoring'],;
      "benefits": "['Detect threats 10x faster'", 'Reduce false positives by 85%', 'Prevent 99.9% of attacks'],;
      "color": 'from-purple-500 to-indigo-600',;
      "glowColor": 'purple'},;
    {;
      "title": 'Quantum Computing',;
      "description": 'Solve complex problems 1000x faster with quantum computing solutions',;
      "price": 'From $2,999/month',;
      "path": '/services/quantum-computing-solutions',;
      "icon": "Ato m",;
      "category": 'Quantum Tech',;
      "features": "['Quantum algorithms'", 'ML acceleration', 'Financial modeling', 'Drug discovery'],;
      "benefits": "['1000x faster computation'", 'Breakthrough discoveries', 'Unbreakable encryption'],;
      "color": 'from-green-500 to-emerald-600',;
      "glowColor": 'green'},;
    {;
      "title": 'IoT Edge Computing',;
      "description": 'Process data at the edge and reduce latency by 90%',;
      "price": 'From $399/month',;
      "path": '/services/iot-edge-computing',;
      "icon": "Cp u",;
      "category": 'IoT & Edge',;
      "features": "['Edge processing'", 'Device management', 'Real-time analytics', 'AI at the edge'],;
      "benefits": "['Reduce latency by 90%'", 'Cut bandwidth costs by 60-80%', 'Scale to millions of devices'],;
      "color": 'from-orange-500 to-red-600',;
      "glowColor": 'orange'},;
    {;
      "title": 'Cloud & DevOps',;
      "description": 'Build, deploy, and scale with enterprise-grade cloud infrastructure',;
      "price": 'From $799/month',;
      "path": '/services/cloud-devops',;
      "icon": "Clou d",;
      "category": 'Infrastructure',;
      "features": "['Cloud migration'", 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],;
      "benefits": "['Faster deployments'", 'Improved reliability', 'Cost optimization', 'Scalability'],;
      "color": 'from-blue-500 to-cyan-600',;
      "glowColor": 'blue'},;
    {;
      "title": 'AI Sales Copilot',;
      "description": 'Automate sales processes and boost conversion rates with AI',;
      "price": 'From $1,500/month',;
      "path": '/services/ai-sales-copilot',;
      "icon": "Brai n",;
      "category": 'Sales AI',;
      "features": "['Lead scoring'", 'CRM automation', 'Sales analytics', 'Predictive insights'],;
      "benefits": "['Reduce admin time by 40-60%'", 'Improve conversion rates', 'Shorten sales cycles'],;
      "color": 'from-pink-500 to-rose-600',;
      "glowColor": 'pink'}
  ];
  const containerVariants = {;
    "hidden": "{ "opacity": 0 "},;
    "visible": "{;
      "opacity": 1",;
      "transition": "{;
        "staggerChildren": 0.1"}
import { motion } from 'framer-motionimport { Link } from react-router-domimport {Brain,'
  Shield,
  Cloud,
  Database,
  Globe,
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Search} from lucide-reactexport const EnhancedServicesShowcase: React.FC = () => {
  const services = [{
      title: AI Workflow Automation,'
      description: 'Transform business operations with intelligent automation that learns and scales',
      price: 'From $299/month',
      path: '/services/ai-workflow-automation',
              icon: GitFor k,
      category: 'AI & Automation',
      features: ['Process optimization', 'AI-powered workflows', 'Real-time analytics', 'Scalable automation'],
      benefits: ['Reduce manual work by 70-85%', 'Improve efficiency by 60%', 'Cut operational costs by 40-50%'],
      color: 'from-cyan-500 to-blue-600',
      glowColor: 'cyan'},
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection and prevention',
      price: 'From $499/month',
      path: '/services/ai-cybersecurity',
      icon: Shiel d,
      category: 'Security',
      features: ['Threat detection', 'Behavioral analytics', 'Automated response', 'Compliance monitoring'],
      benefits: ['Detect threats 10x faster', 'Reduce false positives by 85%', 'Prevent 99.9% of attacks'],
      color: 'from-purple-500 to-indigo-600',
      glowColor: 'purple'},
    {
      title: 'Quantum Computing',
      description: 'Solve complex problems 1000x faster with quantum computing solutions',
      price: 'From $2,999/month',
      path: '/services/quantum-computing-solutions',
      icon: Ato m,
      category: 'Quantum Tech',
      features: ['Quantum algorithms', 'ML acceleration', 'Financial modeling', 'Drug discovery'],
      benefits: ['1000x faster computation', 'Breakthrough discoveries', 'Unbreakable encryption'],
      color: 'from-green-500 to-emerald-600',
      glowColor: 'green'},
    {
      title: 'IoT Edge Computing',
      description: 'Process data at the edge and reduce latency by 90%',
      price: 'From $399/month',
      path: '/services/iot-edge-computing',
      icon: Cp u,
      category: 'IoT & Edge',
      features: ['Edge processing', 'Device management', 'Real-time analytics', 'AI at the edge'],
      benefits: ['Reduce latency by 90%', 'Cut bandwidth costs by 60-80%', 'Scale to millions of devices'],
      color: 'from-orange-500 to-red-600',
      glowColor: 'orange'},
    {
      title: 'Cloud & DevOps',
      description: 'Build, deploy, and scale with enterprise-grade cloud infrastructure',
      price: 'From $799/month',
      path: '/services/cloud-devops',
      icon: Clou d,
      category: 'Infrastructure',
      features: ['Cloud migration', 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],
      benefits: ['Faster deployments', 'Improved reliability', 'Cost optimization', 'Scalability'],
      color: 'from-blue-500 to-cyan-600',
      glowColor: 'blue'},
    {
      title: 'AI Sales Copilot',
      description: 'Automate sales processes and boost conversion rates with AI',
      price: 'From $1,500/month',
      path: '/services/ai-sales-copilot',
      icon: Brai n,
      category: 'Sales AI',
      features: ['Lead scoring', 'CRM automation', 'Sales analytics', 'Predictive insights'],
      benefits: ['Reduce admin time by 40-60%', 'Improve conversion rates', 'Shorten sales cycles'],
      color: 'from-pink-500 to-rose-600',
      glowColor: 'pink'}
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1}
    }
  }
;
const categories = ['All', 'AI & Analytics', 'Quantum Computing', 'Cybersecurity', 'Cloud & DevOps', 'Data & Analytics', 'Blockchain & Web3']
;
export default function EnhancedServicesShowcase(...args: unknow n[]): unknown {  const [selectedCategory, setSelectedCategory] = useState<any>('All')
  const [hoveredService, setHoveredService] = useState<string | null>(null)
</string>
</any>
import { useState } from 'react';,
; import { motion } from 'framer-motionimport { Link } from react-router-domimport {Brain,Shield,Cloud,Database,Globe,Zap,ArrowRight,Star,TrendingUp,Users,Clock,CheckCircle,Search} from lucide-reactexport const EnhancedServicesShowcase: Reac t.FC = () => { const services = [{ title: AI Workflow Automation,' description: 'Transform business operations with intelligent automation that learns and scales,price: 'From $299/month,path: '/services/ai-workflow-automation,icon: GitFor k,category: 'AI & Automation,features: ['Process optimization,'AI-powered workflows','Real-time analytics','Scalable automation'],benefits: ['Reduce manual work by 70-85%,'Improve efficiency by 60%','Cut operational costs by 40-50%'],color: 'from-cyan-500 to-blue-600,glowColor: 'cyan'},{ title: 'AI Cybersecurity,description: 'Protect your business with AI-powered threat detection and prevention,price: 'From $499/month,path: '/services/ai-cybersecurity,icon: Shiel d,category: 'Security,features: ['Threat detection,'Behavioral analytics','Automated response','Compliance monitoring'],benefits: ['Detect threats 10x faster,'Reduce false positives by 85%','Prevent 99.9% of attacks'],color: 'from-purple-500 to-indigo-600,glowColor: 'purple'},{ title: 'Quantum Computing,description: 'Solve complex problems 1000x faster with quantum computing solutions,price: 'From $2,999/month',path: '/services/quantum-computing-solutions,icon: Ato m,category: 'Quantum Tech,features: ['Quantum algorithms,'ML acceleration','Financial modeling','Drug discovery'],benefits: ['1000x faster computation,'Breakthrough discoveries','Unbreakable encryption'],color: 'from-green-500 to-emerald-600,glowColor: 'green'},{ title: 'IoT Edge Computing,description: 'Process data at the edge and reduce latency by 90%,price: 'From $399/month,path: '/services/iot-edge-computing,icon: Cp u,category: 'IoT & Edge,features: ['Edge processing,'Device management','Real-time analytics','AI at the edge'],benefits: ['Reduce latency by 90%,'Cut bandwidth costs by 60-80%','Scale to millions of devices'],color: 'from-orange-500 to-red-600,glowColor: 'orange'},{ title: 'Cloud & DevOps,description: 'Build,deploy,and scale with enterprise-grade cloud infrastructure',price: 'From $799/month,path: '/services/cloud-devops,icon: Clou d,category: 'Infrastructure,features: ['Cloud migration,'CI/CD pipelines','Infrastructure as code','Monitoring & alerting'],benefits: ['Faster deployments,'Improved reliability','Cost optimization','Scalability'],color: 'from-blue-500 to-cyan-600,glowColor: 'blue'},{ title: 'AI Sales Copilot,description: 'Automate sales processes and boost conversion rates with AI,price: 'From _,500/month',path: '/services/ai-sales-copilot,icon: Brai n,category: 'Sales AI,features: ['Lead scoring,'CRM automation','Sales analytics','Predictive insights'],benefits: ['Reduce admin time by 40-60%,'Improve conversion rates','Shorten sales cycles'],color: 'from-pink-500 to-rose-600,glowColor: 'pink'}; ]; const containerVariants = {; hidden: { opacity: 0 },; visible: {; opacity: 1,; transition: {; staggerChildren: 0.1} } } ;';'; const categories = ['All','AI & Analytics','Quantum Computing','Cybersecurity','Cloud & DevOps','Data & Analytics','Blockchain & Web3'] ;';'; export default function EnhancedServicesShowcase(...args: unknow n[]): unknown { const [selectedCategory,setSelectedCategory] = useState<any>('All') const [hoveredService,setHoveredService] = useState<string | null>(null) </string> </any>;';';
