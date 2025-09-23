import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight, Clock, Users, Award, Zap, Shield, Rocket, Brain, TrendingUp, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const featuredListings = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with AI-driven product recommendations and personalized shopping experience",
    rating: 4.9,
    reviews: 127,
    views: 2847,
    likes: 156,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$15,000",
    tags: ["React", "Node.js", "AI/ML", "E-commerce"],
    duration: "3-4 months",
    team: "5 experts",
    location: "Remote",
    featured: true,
    technologies: ["React", "Node.js", "MongoDB", "AI/ML", "AWS"],
    highlights: ["AI Recommendations", "Real-time Analytics", "Mobile Responsive", "SEO Optimized"],
    link: "/services/ai-ecommerce"
  },
  {
    id: 2,
    title: "Mobile Banking Application",
    category: "Mobile Development",
    description: "Secure and user-friendly mobile banking app with biometric authentication and real-time transactions",
    rating: 4.8,
    reviews: 89,
    views: 1956,
    likes: 134,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$22,000",
    tags: ["React Native", "Security", "FinTech", "Biometrics"],
    duration: "4-5 months",
    team: "6 experts",
    location: "Hybrid",
    featured: true,
    technologies: ["React Native", "Node.js", "PostgreSQL", "Biometrics", "Security"],
    highlights: ["Biometric Auth", "Real-time Transactions", "Security Compliance", "Cross-platform"],
    link: "/services/mobile-banking"
  },
  {
    id: 3,
    title: "Cloud Infrastructure Migration",
    category: "Cloud & DevOps",
    description: "Complete migration from on-premise to cloud with automated CI/CD pipelines and monitoring",
    rating: 4.7,
    reviews: 156,
    views: 3241,
    likes: 189,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    price: "$18,500",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    duration: "2-3 months",
    team: "4 experts",
    location: "On-site",
    featured: true,
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Prometheus"],
    highlights: ["Zero Downtime", "Auto-scaling", "Monitoring", "Security"],
    link: "/services/cloud-migration"
  },
  {
    id: 4,
    title: "Healthcare AI Diagnostic System",
    category: "AI & Machine Learning",
    description: "Advanced medical diagnostic platform using computer vision and machine learning for accurate disease detection",
    rating: 4.9,
    reviews: 203,
    views: 4567,
    likes: 278,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    price: "$35,000",
    tags: ["Python", "TensorFlow", "Computer Vision", "Healthcare"],
    duration: "6-8 months",
    team: "8 experts",
    location: "Remote",
    featured: true,
    technologies: ["Python", "TensorFlow", "OpenCV", "Docker", "AWS"],
    highlights: ["AI Diagnostics", "Medical Imaging", "HIPAA Compliant", "Real-time Analysis"],
    link: "/services/healthcare-ai"
  },
  {
    id: 5,
    title: "IoT Smart City Platform",
    category: "IoT & Smart Cities",
    description: "Comprehensive IoT platform for smart city management including traffic, utilities, and public services",
    rating: 4.6,
    reviews: 78,
    views: 1890,
    likes: 112,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$28,000",
    tags: ["IoT", "Smart Cities", "Real-time Data", "Analytics"],
    duration: "5-7 months",
    team: "7 experts",
    location: "Hybrid",
    featured: false,
    technologies: ["IoT Sensors", "Apache Kafka", "Elasticsearch", "React", "Node.js"],
    highlights: ["Real-time Monitoring", "Predictive Analytics", "Scalable Architecture", "Dashboard"],
    link: "/services/iot-smart-city"
  }
];

export function FeaturedListingsSection() {
  const [hoveredListing, setHoveredListing] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Featured Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our most popular and innovative solutions that are transforming businesses worldwide
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredListing(listing.id)}
              onMouseLeave={() => setHoveredListing(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {listing.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium ml-1">{listing.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {listing.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{listing.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {listing.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {listing.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{listing.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{listing.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{listing.team}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-gray-900">{listing.price}</div>
                  <div className="text-sm text-gray-500">
                    {listing.reviews} reviews
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {listing.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {listing.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{listing.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {listing.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <Link to={listing.link} className="flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="group-hover:bg-blue-50">
                    <Heart className="w-4 h-4 group-hover:text-red-500 transition-colors" />
                  </Button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <AnimatePresence>
                {hoveredListing === listing.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-purple-600/90 flex items-center justify-center"
                  >
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl font-bold mb-2">{listing.title}</h3>
                      <p className="text-sm mb-4 opacity-90">{listing.description}</p>
                      <Button className="bg-white text-blue-600 hover:bg-gray-100">
                        <Link to={listing.link} className="flex items-center gap-2">
                          Explore Now
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of businesses already using our solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/contact" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Sales
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link to="/services" className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Browse All Services
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
