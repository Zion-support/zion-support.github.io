import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface EquipmentDetails {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  specifications: string[];
  features: string[];
  warranty: string;
  returnPolicy: string;
  inStock: boolean;
}

// Sample data - in a real app this would come from an API
const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } = {
  "1": {
    id: "1",
    name: "Quantum Computing Workstation",
    description: "High-performance quantum computing workstation for advanced research and development.",
    brand: "Zion Quantum",
    category: "Computing",
    price: 49999,
    rating: 4.8,
    image: "/api/placeholder/600/400",
    specifications: [
      "128-qubit quantum processor",
      "Advanced cooling system",
      "Quantum error correction",
      "Multi-user access"
    ],
    features: [
      "Real-time quantum simulation",
      "Advanced algorithms library",
      "Cloud integration",
      "24/7 technical support"
    ],
    warranty: "3 years",
    returnPolicy: "30 days",
    inStock: true
  },
  "2": {
    id: "2",
    name: "AI Development Server",
    description: "Powerful AI development server with GPU acceleration for machine learning projects.",
    brand: "Zion AI",
    category: "AI/ML",
    price: 24999,
    rating: 4.9,
    image: "/api/placeholder/600/400",
    specifications: [
      "8x NVIDIA A100 GPUs",
      "256GB RAM",
      "10TB NVMe storage",
      "Dual Xeon processors"
    ],
    features: [
      "TensorFlow/PyTorch optimized",
      "Container support",
      "Remote access",
      "Auto-scaling"
    ],
    warranty: "2 years",
    returnPolicy: "30 days",
    inStock: true
  }
};

export default function EquipmentDetail() {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  const equipment = id ? SAMPLE_EQUIPMENT[id] : null;

  if (!equipment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Equipment Not Found</h1>
            <p className="text-zion-slate-light">The requested equipment could not be found.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${equipment.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Purchase Initiated",
      description: "Redirecting to checkout...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <AspectRatio ratio={16/9} className="bg-zion-blue-dark rounded-lg overflow-hidden">
              <img 
                src={equipment.image} 
                alt={equipment.name}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">
                {equipment.category}
              </Badge>
              <Badge variant="outline" className="text-zion-slate-light border-zion-blue-light">
                {equipment.brand}
              </Badge>
            </div>

            <h1 className="text-2xl font-bold text-white mb-1">{equipment.name}</h1>
            <p className="text-zion-cyan mb-4">Brand: {equipment.brand}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(equipment.rating)
                        ? "text-zion-cyan fill-zion-cyan"
                        : "text-zion-slate-light"
                    }`}
                  />
                ))}
              </div>
              <span className="text-zion-slate-light">({equipment.rating})</span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-white mb-6">
              ${equipment.price.toLocaleString()}
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-white font-medium">Quantity:</label>
                <div className="flex items-center border border-zion-blue-light rounded">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-white hover:bg-zion-blue-light"
                  >
                    -
                  </Button>
                  <span className="px-4 py-2 text-white">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-white hover:bg-zion-blue-light"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  onClick={handleBuyNow}
                  className="flex-1 bg-zion-blue-light hover:bg-zion-blue text-white"
                >
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 border-t border-zion-blue-light pt-4">
              <div className="flex gap-3 text-zion-slate-light">
                <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Free Shipping</p>
                  <p className="text-xs">For orders over $100 within the US</p>
                </div>
              </div>
              
              <div className="flex gap-3 text-zion-slate-light">
                <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Warranty</p>
                  <p className="text-xs">{equipment.warranty}</p>
                </div>
              </div>
              
              <div className="flex gap-3 text-zion-slate-light">
                <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Returns</p>
                  <p className="text-xs">{equipment.returnPolicy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-zion-blue-dark border border-zion-blue-light">
              <TabsTrigger value="description" className="text-white data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
                Description
              </TabsTrigger>
              <TabsTrigger value="specifications" className="text-white data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="features" className="text-white data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
                Features
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6 p-6 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
              <p className="text-zion-slate-light leading-relaxed">{equipment.description}</p>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6 p-6 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
              <ul className="space-y-2">
                {equipment.specifications.map((spec, index) => (
                  <li key={index} className="text-zion-slate-light flex items-start">
                    <span className="text-zion-cyan mr-2">•</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </TabsContent>
            
            <TabsContent value="features" className="mt-6 p-6 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
              <ul className="space-y-2">
                {equipment.features.map((feature, index) => (
                  <li key={index} className="text-zion-slate-light flex items-start">
                    <span className="text-zion-cyan mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}