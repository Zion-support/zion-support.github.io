import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';

import { useState } from "react";
import { useRouter } from 'next/router';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { getStripe } from "@/utils/getStripe";
import { useCart } from '@/context/CartContext';

interface EquipmentSpecification {
  name: string;
  value: string;
}

interface EquipmentDetails {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  subcategory?: string;
  images: string[];
  price: number;
  currency: string;
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
  expectedShipping?: string;
  specifications: EquipmentSpecification[];
  features: string[];
  warranty?: string;
  returnPolicy?: string;
}

// Sample data - in a real app this would come from an API
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } = {
  "2u-rack-mount-server": {
    id: "2u-rack-mount-server",
    name: "2U Rack Mount Server",
    description: "High‑density server optimized for virtualization and private cloud deployments.",
    brand: "DataCore",
    category: "Servers",
    images: ["/images/equipment-placeholder.svg"],
    price: 4200,
    currency: "$",
    rating: 4.8,
    reviewCount: 23,
    inStock: true,
    expectedShipping: "3-5 business days",
    specifications: [
      { name: "CPU", value: "Dual Xeon" },
      { name: "Memory", value: "64GB RAM" },
      { name: "Power", value: "Dual PSU" },
    ],
    features: ["Hot-swappable drives", "Remote management"],
    warranty: "1 year manufacturer warranty",
    returnPolicy: "30-day return policy",
  },
  "pro-camera-x1000": {
    id: "pro-camera-x1000",
    name: "Pro Camera X1000",
    description: "Professional-grade cinema camera with 8K resolution, advanced color science, and exceptional low-light performance. Designed for feature films, high-end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry-leading dynamic range.",
    brand: "CineTech",
    category: "Equipment",
    subcategory: "Cameras",
    images: [
      "/images/equipment-placeholder.svg",
      "/images/equipment-placeholder.svg",
      "/images/equipment-placeholder.svg"
    ],
    price: 6999,
    currency: "$",
    rating: 4.9,
    reviewCount: 87,
    inStock: true,
    expectedShipping: "3-5 business days",
    specifications: [
      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" },
      { name: "Resolution", value: "8K (8192 x 4320)" },
      { name: "Dynamic Range", value: "16+ stops" },
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" },
      { name: "Recording Format", value: "RAW, ProRes, H.265" },
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" },
      { name: "Storage", value: "Dual CFexpress Type B" },
      { name: "Battery Life", value: "~3 hours continuous recording" },
      { name: "Weight", value: "4.5 lbs (body only)" },
      { name: "Connectivity", value: "HDMI 2.1, USB-C, Wi-Fi, Bluetooth" }
    ],
    features: [
      "Advanced 8K full-frame sensor",
      "16+ stops of dynamic range",
      "Internal RAW recording",
      "Dual native ISO technology",
      "5-axis in-body image stabilization",
      "AI-powered autofocus with subject tracking",
      "Weather-sealed magnesium alloy body",
      "Multiple assist tools: false color, waveform, vectorscope",
      "Anamorphic de-squeeze options",
      "Custom 3D LUT support"
    ],
    warranty: "2 years manufacturer warranty",
    returnPolicy: "30-day return policy for unused items in original packaging"
  },
  "audio-mixer-pro": {
    id: "audio-mixer-pro",
    name: "AudioMixer Pro Digital Mixing Console",
    description: "Professional digital mixing console designed for studio recording, live sound mixing, and post-production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.",
    brand: "AudioTech",
    category: "Equipment",
    subcategory: "Audio",
    images: [
      "/images/equipment-placeholder.svg",
      "/images/equipment-placeholder.svg"
    ],
    price: 3499,
    currency: "$",
    rating: 4.8,
    reviewCount: 42,
    inStock: true,
    expectedShipping: "5-7 business days",
    specifications: [
      { name: "Channels", value: "32 input channels" },
      { name: "Faders", value: "16 motorized faders" },
      { name: "Preamps", value: "24 premium mic preamps" },
      { name: "Sampling Rate", value: "Up to 96kHz" },
      { name: "EQ", value: "4-band parametric per channel" },
      { name: "Dynamics", value: "Compressor/Gate on all channels" },
      { name: "Effects", value: "8 stereo effects processors" },
      { name: "Recording", value: "64-channel USB interface" },
      { name: "Weight", value: "32 lbs" }
    ],
    features: [
      "32-channel digital mixer with 24 premium mic preamps",
      "16 motorized faders with touch-sensitive control",
      "7-inch high-resolution color touchscreen",
      "Comprehensive routing matrix",
      "Onboard multi-track recording to USB",
      "iOS and Android remote control app",
      "Configurable user layers",
      "8 DCA groups and 6 mute groups",
      "Integrated WiFi for wireless control"
    ],
    warranty: "3 years manufacturer warranty",
    returnPolicy: "21-day return policy for items in original condition"
  }
};

export default function EquipmentDetail() {
  const router = useRouter();
  const { id } = router.query as { id?: string };
  const { isAuthenticated, user } = useAuth();
  const { items, dispatch } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  
  // In a real app, this would fetch from an API
  const equipment = id ? SAMPLE_EQUIPMENT[id] : undefined;
  
  if (!equipment) {
    return (
      <>
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  const inCart = items.some(i => i.id === equipment.id);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      const nextUrl = encodeURIComponent(router.asPath);
      router.push(`/login?next=${nextUrl}&msg=login_required`);
      toast.info("Please log in to add items to your cart.");
      return;
    }

    if (inCart) return;
    setIsAdding(true);
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: equipment.id, title: equipment.name, price: equipment.price } // quantity removed
    });
    toast.success(`${quantity}× ${equipment.name} added`);
    setTimeout(() => setIsAdding(false), 800);
  };

  const handleBuyNow = async () => {
    if (!isAuthenticated) {
      const next = encodeURIComponent(router.asPath); // Capture full current path
      router.push(`/login?next=${next}`);
      return;
    }

    setIsAdding(true);
    try {
      const response = await fetch('/checkout/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: equipmentId }),
      });
      const { url } = await response.json();
      if (url) {
        window.location.href = url as string;
      }
    } catch (err) {
      toast({ title: 'Payment error', description: 'Could not start checkout.' });
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <>
      <SEO 
        title={`Equipment ${id} - Zion Tech Group`}
        description="Detailed information about this equipment item."
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Equipment Details
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Detailed information about equipment item {id}.
            </p>
          </div>
          
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-zion-slate-light mb-6">
                Equipment detail pages are currently under development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentDetail;