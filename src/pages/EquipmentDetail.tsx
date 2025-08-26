import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  DollarSign,
  Shield,
  CheckCircle,
  Truck,
  Package,
  Eye,
  Heart
} from 'lucide-react';

// Mock equipment data - in a real app this would come from an API
const equipmentData = {
  id: 1,
  name: "Enterprise Network Switch - Cisco Catalyst 9300",
  category: "Networking Equipment",
  price: 2500,
  originalPrice: 3200,
  condition: "Excellent",
  location: "Middletown, DE",
  seller: "Zion Tech Group",
  rating: 4.8,
  reviewCount: 127,
  description: "High-performance enterprise-grade network switch with advanced security features, perfect for large-scale network deployments. Includes 48 PoE+ ports, advanced QoS, and comprehensive security protocols.",
  features: [
    "48 PoE+ Gigabit Ethernet ports",
    "Advanced security features",
    "Quality of Service (QoS)",
    "Energy-efficient design",
    "Comprehensive warranty",
    "Professional installation available"
  ],
  specifications: {
    "Ports": "48 x 10/100/1000 PoE+",
    "Power": "AC/DC dual power supply",
    "Management": "Web-based, CLI, SNMP",
    "Security": "802.1X, RADIUS, TACACS+",
    "Warranty": "3 years manufacturer warranty"
  },
  images: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
  ],
  availability: "In Stock",
  shipping: "Free shipping within 50 miles",
  warranty: "3 years manufacturer warranty",
  returnPolicy: "30-day return policy",
  contactInfo: {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709"
  }
};

export default function EquipmentDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            to="/equipment" 
            className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Equipment
          </Link>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={equipmentData.images[selectedImage]}
                alt={equipmentData.name}
                className="w-full h-96 object-cover rounded-xl"
              />
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
                  isFavorite 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {equipmentData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-zion-cyan' 
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${equipmentData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                  {equipmentData.category}
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                  {equipmentData.condition}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-2">
                {equipmentData.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(equipmentData.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-300">
                    {equipmentData.rating} ({equipmentData.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-baseline space-x-3 mb-4">
                <span className="text-3xl font-bold text-white">
                  ${equipmentData.price.toLocaleString()}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  ${equipmentData.originalPrice.toLocaleString()}
                </span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                  Save ${(equipmentData.originalPrice - equipmentData.price).toLocaleString()}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Availability:</span>
                  <span className="text-green-400 font-medium">{equipmentData.availability}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Shipping:</span>
                  <span className="text-zion-cyan">{equipmentData.shipping}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Warranty:</span>
                  <span className="text-zion-cyan">{equipmentData.warranty}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-200">
                Contact Seller
              </button>
              <button className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-200">
                Request Quote
              </button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-zion-cyan" />
                <span>{equipmentData.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Shield className="w-5 h-5 text-zion-cyan" />
                <span>{equipmentData.warranty}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Truck className="w-5 h-5 text-zion-cyan" />
                <span>{equipmentData.shipping}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Package className="w-5 h-5 text-zion-cyan" />
                <span>{equipmentData.returnPolicy}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Features */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Description</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {equipmentData.description}
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
            <ul className="space-y-2">
              {equipmentData.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
            <div className="space-y-4">
              {Object.entries(equipmentData.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-300 font-medium">{key}</span>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seller Information */}
        <div className="mt-16 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Seller Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">{equipmentData.seller}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <span>{equipmentData.contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <a href={`tel:${equipmentData.contactInfo.phone}`} className="hover:text-zion-cyan transition-colors">
                    {equipmentData.contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <a href={`mailto:${equipmentData.contactInfo.email}`} className="hover:text-zion-cyan transition-colors">
                    {equipmentData.contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Certified equipment with full warranty</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Professional installation and support</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Local service and quick response</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Financing options available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your equipment needs, get a custom quote, or schedule a consultation with our IT experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-zion-blue py-3 px-8 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get Custom Quote
              </button>
              <button className="border border-white text-white py-3 px-8 rounded-lg font-medium hover:bg-white hover:text-zion-blue transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
