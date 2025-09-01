import React, { useState } from 'react';'
import { motion } from 'framer-motion';
import {

  Brain,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Code,
  FileText,
  Wrench,
  Cpu,
  Target,
  Rocket,
  Lightbulb,
  Gauge,
  Network,
  Server,
  Building,
  Car,
  Plane,
  Factory,
  Cog,
  BarChart3,
  TrendingUp,
  MapPin,
  Layers,
  RefreshCw,
  AlertTriangle,
  Package,
  Warehouse,
  Route,
  Navigation,
  Box,
  Ship,
  Train,
  Truck,
  Cloud,
  Settings,
  Palette,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  HardDrive,
  MemoryStick,
  Router,
  Switch,
  Hub,
  Modem,
  Firewall,
  LoadBalancer,
  Gateway,
  Proxy,
  VPN,
  SSL,
  TLS,
  SSH,
  FTP,
  HTTP,
  HTTPS,
  DNS,
  DHCP,
  NTP,
  SMTP,
  POP3,
  IMAP,
  LDAP,
  Kerberos,
  OAuth,
  JWT,
  SAML,
  OpenID,
  Radius,
  Tacacs,
  Syslog,
  SNMP,
  NetFlow,
  sFlow,
  IPFIX,
  BGP,
  OSPF,
  EIGRP,
  RIP,
  VLAN,
  VXLAN,
  GRE,
  IPSec,
  MPLS,
  SDN,
  NFV,
  VNF,
  Container,
  Pod,
  Service,
  Ingress,
  Egress,
  Cluster,
  Node,
  Namespace,
  ConfigMap,
  Secret,
  PersistentVolume,
  StorageClass,
  StatefulSet,
  DaemonSet,
  Job,
  CronJob,
  HorizontalPodAutoscaler,
  VerticalPodAutoscaler,
  NetworkPolicy,
  PodSecurityPolicy,
  Role,
  RoleBinding,
  ClusterRole,
  ClusterRoleBinding,
  ServiceAccount,'
  X} from 'lucide-react';

const infrastructureSolutions = [
  {

    id: 1,'
    title: 'Network Infrastructure','
    description:''
      'Comprehensive network design, implementation, and management solutions.',
    icon: Network,'
    features: [''
      'Network design',Implementation',Management',Optimization',
    ],'
    price: 'From $100,000','
    timeline: '16-28 weeks','
    category: 'Networking','
    technologies: [''
      'Network Design',Implementation',Management',Optimization',
    ]},
  {

    id: 2,'
    title: 'Server Infrastructure','
    description:''
      'Robust server infrastructure design and deployment solutions.',
    icon: Server,'
    features: ['Server design',Deployment',Management',Maintenance'],'
    price: 'From $150,000','
    timeline: '20-32 weeks','
    category: 'Servers','
    technologies: ['Server Design',Deployment',Management',Maintenance']},
  {

    id: 3,'
    title: 'Storage Infrastructure','
    description: 'Scalable storage solutions for enterprise data management.',
    icon: Database,'
    features: [''
      'Storage design',Data management',Backup solutions',Recovery systems',
    ],'
    price: 'From $120,000','
    timeline: '18-30 weeks','
    category: 'Storage','
    technologies: ['Storage Design',Data Management',Backup',Recovery']},
  {

    id: 4,'
    title: 'Cloud Infrastructure','
    description: 'Hybrid and multi-cloud infrastructure solutions.',
    icon: Cloud,'
    features: ['Cloud design',Migration',Management',Optimization'],'
    price: 'From $200,000','
    timeline: '24-36 weeks','
    category: 'Cloud','
    technologies: ['Cloud Design',Migration',Management',Optimization']},
  {

    id: 5,'
    title: 'Security Infrastructure','
    description:''
      'Comprehensive security infrastructure and compliance solutions.',
    icon: Shield,'
    features: ['Security design',Implementation',Monitoring',Compliance'],'
    price: 'From $180,000','
    timeline: '22-34 weeks','
    category: 'Security','
    technologies: [''
      'Security Design',Implementation',Monitoring',Compliance',
    ]},
  {

    id: 6,'
    title: 'Data Center Infrastructure','
    description: 'Modern data center design and implementation solutions.',
    icon: Building,'
    features: [''
      'Data center design',Implementation',Management',Optimization',
    ],'
    price: 'From $250,000','
    timeline: '28-40 weeks','
    category: 'Data Center','
    technologies: [''
      'Data Center Design',Implementation',Management',Optimization',
    ]},
];

const ITInfrastructure = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = solution => {
    setSelectedSolution(solution) ;
    setIsModalOpen(true) ;
  };

  const closeModal = () => {
    setIsModalOpen(false) ;
    setSelectedSolution(null) ;
  };

  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">"
      {/* Header Section */}""
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}"
          transition={{ duration: 0.6 }}""
          className="text-center mb-16""
        >""
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            IT Infrastructure Solutions"
          </h1>""
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT infrastructure design, implementation, and
            management solutions that form the foundation of your digital
            transformation journey.</p>
        </motion.div>
"
        {/* Solutions Grid */}""
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {infrastructureSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.6, delay: index * 0.1 }}""
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105""
            >""
              <div className="flex items-center mb-4">""
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">""
                  <solution.icon className="w-6 h-6 text-cyan-400" />"
                </div>""
                <h3 className="text-xl font-semibold">{solution.title}</h3>
              </div>"
""
              <p className="text-gray-300 mb-4">{solution.description}</p>"
""
              <div className="space-y-2 mb-4">""
                <div className="flex items-center text-sm text-gray-400">""
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  {solution.price}"
                </div>""
                <div className="flex items-center text-sm text-gray-400">""
                  <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                  {solution.timeline}
                </div>
              </div>

              <button"
                onClick={() => openModal(solution)}""
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
              >"
                Learn More""
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>) ) }
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}"
          transition={{ duration: 0.6, delay: 0.6 }}""
          className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50""
        >""
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Infrastructure?"
          </h2>""
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let our expert team help you design and implement a robust,
            scalable, and secure IT infrastructure that drives your business
            forward."
          </p>""
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-lg font-semibold">
            Get Started Today
          </button>
        </motion.div>
      </div>

      {/* Modal */}"
      {isModalOpen && selectedSolution && (""
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}"
            exit={{ opacity: 0, scale: 0.9 }}""
            className="bg-slate-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto""
          >""
            <div className="flex items-center justify-between mb-6">""
              <h2 className="text-2xl font-bold">{selectedSolution.title}</h2>
              <button"
                onClick={closeModal}""
                className="text-gray-400 hover:text-white transition-colors""
              >""
                <X className="w-6 h-6" />
              </button>
            </div>"
""
            <p className="text-gray-300 mb-6">{selectedSolution.description}</p>"
""
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">"
              <div>""
                <h3 className="font-semibold mb-3 text-cyan-400">Features</h3>""
                <ul className="space-y-2">"
                  {selectedSolution.features.map((feature, index) => (""
                    <li key={index} className="flex items-center text-gray-300">""
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>) ) }
                </ul>
              </div>
"
              <div>""
                <h3 className="font-semibold mb-3 text-cyan-400">
                  Technologies"
                </h3>""
                <ul className="space-y-2">"
                  {selectedSolution.technologies.map((tech, index) => (""
                    <li key={index} className="flex items-center text-gray-300">""
                      <Code className="w-4 h-4 text-cyan-400 mr-2" />
                      {tech}
                    </li>) ) }
                </ul>
              </div>
            </div>"
""
            <div className="flex items-center justify-between">""
              <div className="text-2xl font-bold text-cyan-400">
                {selectedSolution.price}"
              </div>""
              <div className="text-gray-400">{selectedSolution.timeline}</div>
            </div>
          </motion.div>
        </div>) }
    </div>) ;
};

export default ITInfrastructure;'"
'"'"
