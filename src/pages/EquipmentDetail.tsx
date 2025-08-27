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
