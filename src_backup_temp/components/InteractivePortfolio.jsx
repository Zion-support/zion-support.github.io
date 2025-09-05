import React, {useState, useRef, useEffect} from 'react';
import { ExternalLink, Github, Eye, X, ChevronLeft, ChevronRight, Star, Users, Calendar const portfolioProjects = [;
    {;
        "id": '1',;
        "title": 'AI-Powered E-commerce Platform',;
        "description": 'A next-generation e-commerce solution with AI-driven product recommendations, dynamic pricing, and intelligent inventory management.',;
        "category": 'AI & ML',;
        technologies['React', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS'],;
        "image": '"https": "//images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'",;
        "liveUrl": '"https": "//example.com'",;
        "githubUrl": '"https": "//github.com'",;
        "rating": "4.9",;
        "users": "2500",;
        "completionDate": '2024-01',;
        "featured": "true",;
        tags['Machine Learning', 'E-commerce', 'Real-time', 'Scalable'];
    },;
    {"id": '2',;
        "title": 'Blockchain Supply Chain Tracker',;
        "description": 'Transparent and immutable supply chain tracking system using blockchain technology for enhanced security and traceability.',;
        "category": 'Web3',;
        technologies['Solidity', 'React', 'Web3.js', 'IPFS', 'Ethereum'],;
        "image": '"https": "//images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop'",;
        "liveUrl": '"https": "//example.com'",;
        "githubUrl": '"https": "//github.com'",;
        "rating": "4.8",;
        "users": "1800",;
        "completionDate": '2024-02',;
        "featured": "true",;
        tags['Blockchain', 'Supply Chain', 'Decentralized', 'Security'];},;
    {"id": '3',;
        "title": 'Real-time Data Analytics Dashboard',;
        "description": 'Comprehensive analytics platform providing real-time insights with interactive charts, predictive analytics, and automated reporting.',;
        "category": 'Data Science',;
        technologies['Python', 'Django', 'D3.js', 'PostgreSQL', 'Redis'],;
        "image": '"https": "//images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'",;
        "liveUrl": '"https": "//example.com'",;
        "githubUrl": '"https": "//github.com'",;
        "rating": "4.7",;
        "users": "3200",;
        "completionDate": '2024-03',;
        "featured": "false",;
        tags['Analytics', 'Real-time', 'Predictive', 'Dashboard'];},;
    {"id": '4',;
        "title": 'Mobile-First Banking App',;
        "description": 'Secure and intuitive mobile banking application with biometric authentication, real-time notifications, and advanced security features.',;
        "category": 'Mobile',;
        technologies['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],;
        "image": '"https": "//images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'",;
        "liveUrl": '"https": "//example.com'",;
        "githubUrl": '"https": "//github.com'",;
        "rating": "4.9",;
        "users": "4500",;
        "completionDate": '2024-04',;
        "featured": "true",;
        tags['Mobile', 'Banking', 'Security', 'Biometric'];},;
    {"id": '5',;
        "title": 'IoT Smart Home Controller',;
        "description": 'Centralized smart home management system with AI-powered automation, energy optimization, and seamless device integration.',;
        "category": 'IoT',;
        technologies['Python', 'React', 'MQTT', 'TensorFlow', 'Docker'],;
        "image": '"https": "//images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'",;
        "liveUrl": '"https": "//example.com'",;
        "githubUrl": '"https": "//github.com'",;
        "rating": "4.6",;
        "users": "1200",;
        "completionDate": '2024-05',;
        "featured": "false",;
        tags['IoT', 'Smart Home', 'Automation', 'Energy'];},;
    {"id": '6',;
        "title": 'Cybersecurity Threat Detection',;
        "description": 'Advanced threat detection system using machine learning to identify and respond to security threats in real-time.',;
        "category": 'Security',;
        technologies['Python', 'TensorFlow', 'Elasticsearch', 'Kafka', 'Docker'],;
        "image": '"https": "//images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'",;
        "liveUrl": '"https": "//example.com'",;
        "githubUrl": '"https": "//github.com'",;
        "rating": "4.8",;
        "users": "2800",;
        "completionDate": '2024-06',;
        "featured": "true",;
        tags['Cybersecurity', 'Threat Detection', 'Machine Learning', 'Real-time'];}
];
const categories = ['All', 'AI & ML', 'Web3', 'Data Science', 'Mobile', 'IoT', 'Security'];
export function InteractivePortfolio("props": "any) {;
    const [selectedCategory", setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const containerRef = useRef(null);
    const filteredProjects = portfolioProjects.filter(project => selectedCategory === 'All' || project.category === selectedCategory);
    const handleProjectClick = ("props": "any) => {;
        setSelectedProject(project);
        setIsModalOpen(true)"};
    const closeModal = ("props": "any) => {setIsModalOpen(false);
        setSelectedProject(null);
        setCurrentImageIndex(0)"};
    const nextImage = ("props": "any) => {;
        if (selectedProject) {;
            setCurrentImageIndex((prev) => (prev + 1) % 1); // Only one image per project for now;

    "};
    const prevImage = ("props": "any) => {;
        if (selectedProject) {;
            setCurrentImageIndex((prev) => (prev - 1 + 1) % 1)"}
    };
    const handleKeyPress = ("props": "any) => {;
        if (e.key === 'Escape') {;
            closeModal()"}
    };
    useEffect(() => {;
        if (isModalOpen) {;
            document.body.style.overflow = 'hidden'}
        else {document.body.style.overflow = 'unset'}
        return () => {document.body.style.overflow = 'unset'}}, [isModalOpen]);
    return (<section className="py-16 bg-gradient-to-br from-zion-slate-light/5 to-zion-blue-light/5">;
      <div className="container mx-auto px-4">;
        {/* Header */}
        <div className="text-center mb-12">;
          <h2 className="text-4xl "md": "text-5xl font-bold text-gradient mb-4">;
            Our Portfolio;
          </h2>;
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
            Explore our innovative projects that demonstrate cutting-edge technology solutions and creative problem-solving;
          </p>;
        </div>;

        {/* Category Filter */"}
        <div className="flex flex-wrap justify-center gap-3 mb-12">;
          {categories.map(category => (<button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category;
                ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/30';
                : 'bg-white "dark": "bg-zion-slate text-zion-slate border border-zion-slate-light "hover":border-zion-cyan "hover":text-zion-cyan "hover":shadow-md'"}`}>;
              {category}
            </button>))}
        </div>;

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-8" ref={containerRef"}>;
          {filteredProjects.map((project) => (<div key={project.id} className={`group relative cursor-pointer transition-all duration-500 ${hoveredProject === project.id ? 'scale-105' : 'scale-100'}`} onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)} onClick={() => handleProjectClick(project)}>;
              {/* 3D Card Effect */}
              <div className={`relative bg-white "dark": "bg-zion-slate rounded-2xl overflow-hidden shadow-lg border border-zion-slate-light transition-all duration-500 ${hoveredProject === project.id;
                ? 'shadow-2xl shadow-zion-cyan/20 border-zion-cyan/30';
                : '"hover":shadow-xl'"}`} style="{{{;
                "transform": "hoveredProject === project.id;
                    ? 'perspective(1000px) rotateY(2deg) rotateX(1deg)'"}}"}>;
                {/* Featured Badge */}
                {project.featured && (<div className="absolute top-4 left-4 z-10">;
                    <span className="px-3 py-1 bg-gradient-to-r from-zion-gold to-zion-orange text-white text-xs font-medium rounded-full">;
                      Featured;
                    </span>;
                  </div>)}
;
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">;
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-"hover": "scale-110"  />;
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-"hover":opacity-100 transition-opacity duration-300" />;

                  {/* Quick Actions */"}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-"hover": "opacity-100 transition-opacity duration-300">;
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white "hover":bg-white/30 transition-colors">;
                      <Eye className="w-5 h-5" />;
                    </button>;
                    {project.liveUrl && (<button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white "hover":bg-white/30 transition-colors">;
                        <ExternalLink className="w-5 h-5" />;
                      </button>)"}
                    {project.githubUrl && (<button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white "hover": "bg-white/30 transition-colors">;
                        <Github className="w-5 h-5" />;
                      </button>)"}
                  </div>;
                </div>;

                {/* Project Info */}
                <div className="p-6">;
                  <div className="flex items-center gap-2 mb-3">;
                    <span className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full">;
                      {project.category}
                    </span>;
                    <div className="flex items-center gap-1 text-zion-gold">;
                      <Star className="w-3 h-3 fill-current" />;
                      <span className="text-xs">{project.rating}</span>;
                    </div>;
                  </div>;

