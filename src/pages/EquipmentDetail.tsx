import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

export default function EquipmentDetail() {
    const { equipmentId } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    // Mock equipment data - in a real app, this would come from an API
    const equipment = {
        id: equipmentId,
        name: 'Sample Equipment',
        description: 'This is a sample equipment item for demonstration purposes.',
        price: 999.99,
        images: ['/placeholder-image.jpg'],
        category: 'Hardware',
        availability: 'In Stock'
    };

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
            // Simulate checkout process
            setTimeout(() => {
                toast({ title: 'Checkout', description: 'Redirecting to checkout...' });
                setIsAdding(false);
            }, 1000);
        } catch (err) {
            toast({ title: 'Payment error', description: 'Could not start checkout.' });
            setIsAdding(false);
        }
    };

    return (
<<<<<<< HEAD
      <>
        <Header />
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-white mb-4">Equipment Not Found</h1>
              <p className="text-zion-slate-light mb-8">The equipment you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
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
      const response = await fetch('/api/checkout_sessions', {
      const response = await fetch('/checkout/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: equipmentId }),
      });
      const { sessionId } = await response.json();
      const stripe = await getStripe();
      if (stripe && sessionId) {
        await stripe.redirectToCheckout({ sessionId });
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
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                {/* Main Image */}
                <div className="aspect-video w-full relative">
                  <img 
                    src={equipment.images[selectedImageIndex]} 
                    alt={equipment.name} 
                    className="w-full h-full object-contain bg-zion-blue-light/10 p-4"
                  />
                </div>
                
                {/* Thumbnail Gallery */}
                {equipment.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">
                    {equipment.images.map((image, index) => (
                      <div 
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`${equipment.name} - image ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details Tabs */}
              <div className="mt-8">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="bg-zion-blue-dark border border-zion-blue-light grid grid-cols-3 h-auto">
                    <TabsTrigger value="description" className="py-3 data-[state=active]:bg-zion-purple/10">
                      Description
                    </TabsTrigger>
                    <TabsTrigger value="specifications" className="py-3 data-[state=active]:bg-zion-purple/10">
                      Specifications
                    </TabsTrigger>
                    <TabsTrigger value="features" className="py-3 data-[state=active]:bg-zion-purple/10">
                      Features
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-4">
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                      <p className="text-zion-slate-light whitespace-pre-line">
                        {equipment.description}
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specifications" className="mt-4">
                    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {equipment.specifications.map((spec, index) => (
                          <div key={index} className="border-b border-zion-blue-light pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">
                            <div className="flex justify-between">
                              <span className="text-zion-slate-light">{spec.name}</span>
                              <span className="text-white font-medium">{spec.value}</span>
=======
        <>
            <SEO 
                title="Equipment Details - Zion Tech Group" 
                description="View detailed information about tech equipment and rental options." 
                canonical="https://ziontechgroup.com/equipment" 
            />
            <Header />
            <div className="min-h-screen bg-zion-blue py-12 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Images */}
                        <div className="lg:col-span-2">
                            <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                                {/* Main Image */}
                                <div className="aspect-video w-full relative">
                                    <img 
                                        src={equipment.images[selectedImageIndex]} 
                                        alt={equipment.name} 
                                        className="w-full h-full object-contain bg-zion-blue-light/10 p-4"
                                    />
                                </div>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
                            </div>

                            {/* Product Details Tabs */}
                            <div className="mt-8">
                                <Tabs defaultValue="description" className="w-full">
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="description">Description</TabsTrigger>
                                        <TabsTrigger value="specifications">Specifications</TabsTrigger>
                                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="description" className="mt-4">
                                        <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                                            <p className="text-zion-slate-light">{equipment.description}</p>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="specifications" className="mt-4">
                                        <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                                            <p className="text-zion-slate-light">Specifications coming soon...</p>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="reviews" className="mt-4">
                                        <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                                            <p className="text-zion-slate-light">Reviews coming soon...</p>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>

                        {/* Right Column - Product Info & Actions */}
                        <div className="space-y-6">
                            <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                                <h1 className="text-2xl font-bold text-white mb-2">{equipment.name}</h1>
                                <div className="flex items-center gap-2 mb-4">
                                    <Badge variant="secondary">{equipment.category}</Badge>
                                    <Badge variant="outline">{equipment.availability}</Badge>
                                </div>
                                <div className="text-3xl font-bold text-zion-cyan mb-6">
                                    ${equipment.price}
                                </div>

                                {/* Quantity Selector */}
                                <div className="flex items-center gap-4 mb-6">
                                    <label className="text-zion-slate-light">Quantity:</label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                        className="w-20 px-3 py-2 bg-zion-blue-light border border-zion-blue-lighter rounded text-white"
                                    />
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-3">
                                    <Button 
                                        onClick={handleAddToCart}
                                        disabled={isAdding}
                                        className="w-full bg-zion-purple hover:bg-zion-purple-dark"
                                    >
                                        <ShoppingCart className="w-4 h-4 mr-2" />
                                        {isAdding ? 'Adding...' : 'Add to Cart'}
                                    </Button>
                                    <Button 
                                        onClick={handleBuyNow}
                                        disabled={isAdding}
                                        className="w-full bg-zion-cyan hover:bg-zion-cyan-dark"
                                    >
                                        {isAdding ? 'Processing...' : 'Buy Now'}
                                    </Button>
                                </div>

                                {/* Features */}
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-3 text-zion-slate-light">
                                        <Truck className="w-5 h-5 text-zion-cyan" />
                                        <span>Free shipping</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zion-slate-light">
                                        <Shield className="w-5 h-5 text-zion-cyan" />
                                        <span>1 year warranty</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zion-slate-light">
                                        <RotateCcw className="w-5 h-5 text-zion-cyan" />
                                        <span>30-day returns</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
