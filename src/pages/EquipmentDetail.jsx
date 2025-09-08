import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FuturisticNavigation } from "@/components/FuturisticNavigation";
import { FuturisticFooter } from "@/components/FuturisticFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { EQUIPMENT_DETAILS } from "@/data/equipmentDetails";


export default function EquipmentDetail() {
    const { equipmentId } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    // In a real app, this would fetch from an API
    const equipment = equipmentId ? EQUIPMENT_DETAILS[equipmentId] : undefined;
    if (!equipment) {
        return (<>
        <FuturisticNavigation />
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>);
    }
    const handleAddToCart = () => {
        setIsAdding(true);
        // Simulate API call
        setTimeout(() => {
            setIsAdding(false);
            toast({
                title: "Added to cart",
                description: `${quantity}x ${equipment.name} added to your cart.`,
            });
        }, 800);
    };
    const handleBuyNow = async () => {
        if (!isAuthenticated) {
            navigate(`/login?next=/equipment/${equipmentId}`);
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
                window.location.href = url;
            }
        }
        catch (err) {
            toast({ title: 'Payment error', description: 'Could not start checkout.' });
        }
        finally {
            setIsAdding(false);
        }
    };
    return (<>
      <FuturisticNavigation />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                {/* Main Image */}
                <div className="aspect-video w-full relative">
                  <img src={equipment.images[selectedImageIndex]} alt={equipment.name} className="w-full h-full object-contain bg-zion-blue-light/10 p-4"/>
                </div>
                
                {/* Thumbnail Gallery */}
                {equipment.images.length > 1 && (<div className="flex p-4 gap-2 overflow-x-auto">
                    {equipment.images.map((image, index) => (<div key={index} onClick={() => setSelectedImageIndex(index)} className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${index === selectedImageIndex ? "border-zion-purple" : "border-transparent"}`}>
                        <img src={image} alt={`${equipment.name} - image ${index + 1}`} className="w-full h-full object-cover"/>
                      </div>))}
                  </div>)}
              </div>



