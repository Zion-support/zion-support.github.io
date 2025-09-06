import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Star, Heart, Share2, ShoppingCart, ArrowLeft, Minus, Plus, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { useCurrency } from '@/hooks/useCurrency';
import { equipmentListings } from '@/data/equipmentListings';

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
  rating: number;
  reviewCount?: number;
  inStock: boolean;
  expectedShipping?: string;
  specifications: EquipmentSpecification[];
  features: string[];
  warranty?: string;
  returnPolicy?: string;
}

// Convert ProductListing to EquipmentDetails format
function convertProductListingToEquipmentDetails(
  item: any
): EquipmentDetails {
  return {
    id: item.id,
    name: item.title,
    description: item.description,
    brand: item.brand || 'Unknown',
    category: item.category,
    subcategory: item.subcategory,
    images: item.images || ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'],
    price: item.price || 0,
    currency: item.currency || '$',
    rating: item.rating,
    reviewCount: item.reviewCount,
    inStock: item.availability === 'In Stock' || !item.availability,
    expectedShipping: item.availability || 'In Stock',
    specifications: (item.specifications || []).map((spec: string) => ({
      name: spec,
      value: '',
    })),
    features: item.tags || [],
    warranty: '1 Year Manufacturer Warranty',
    returnPolicy: '30-day return policy',
  };
}

// Build sample data from the shared equipment listings
const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =
  equipmentListings.reduce(
    (acc, item) => {
      acc[item.id] = convertProductListingToEquipmentDetails(item);
      return acc;
    },
    {} as { [key: string]: EquipmentDetails }
  );

export default function EquipmentDetail() {
  const router = useRouter();
  const { id } = router.query as { id?: string };
  const { isAuthenticated, user } = useAuth();
  const { items, dispatch } = useCart();
  const { formatPrice } = useCurrency();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const equipment = id ? SAMPLE_EQUIPMENT[id] : null;

  if (!equipment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Equipment Not Found</h1>
          <p className="text-gray-600 mb-6">The equipment you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/equipment')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Equipment
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    setIsAdding(true);
    try {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: equipment.id,
          title: equipment.name,
          price: equipment.price,
          quantity,
          image: equipment.images[0],
        },
      });
    } finally {
      setIsAdding(false);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <button
            onClick={() => router.push('/equipment')}
            className="hover:text-blue-600"
          >
            Equipment
          </button>
          <span>/</span>
          <span className="text-gray-900">{equipment.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden">
              <img
                src={equipment.images[selectedImageIndex]}
                alt={equipment.name}
                className="w-full h-full object-cover"
              />
            </div>
            {equipment.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {equipment.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index
                        ? 'border-blue-600'
                        : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${equipment.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="outline">{equipment.brand}</Badge>
                <Badge variant="outline">{equipment.category}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {equipment.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(equipment.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {equipment.rating} ({equipment.reviewCount || 0} reviews)
                  </span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {equipment.description}
              </p>
            </div>

            <Separator />

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">
                {formatPrice(equipment.price)}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-1" />
                  {equipment.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
                {equipment.expectedShipping && (
                  <div className="flex items-center">
                    <Truck className="h-4 w-4 text-blue-600 mr-1" />
                    {equipment.expectedShipping}
                  </div>
                )}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!equipment.inStock || isAdding}
                  className="flex-1"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isAdding ? 'Adding...' : 'Add to Cart'}
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Features */}
            {equipment.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {equipment.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Truck className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="text-white text-sm font-medium">Free Shipping</p>
                  <p className="text-xs">For orders over $100 within the US</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <Shield className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <p className="text-white text-sm font-medium">Warranty</p>
                  <p className="text-xs">{equipment.warranty}</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <RotateCcw className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <p className="text-white text-sm font-medium">Returns</p>
                  <p className="text-xs">{equipment.returnPolicy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {equipment.specifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {equipment.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{spec.name}</span>
                      <span className="text-gray-600">{spec.value || 'N/A'}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}