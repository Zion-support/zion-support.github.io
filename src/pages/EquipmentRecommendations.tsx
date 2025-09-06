import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, Filter, Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';

interface Equipment {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  brand: string;
  inStock: boolean;
  features: string[];
}

const EquipmentRecommendations: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Mock data - in real app, this would come from API
    const mockEquipment: Equipment[] = [
      {
        id: '1',
        name: 'Dell PowerEdge R750 Server',
        description: 'High-performance rack server for enterprise workloads',
        price: 2500,
        rating: 4.8,
        reviewCount: 24,
        image: '/api/placeholder/300/200',
        category: 'servers',
        brand: 'Dell',
        inStock: true,
        features: ['Intel Xeon', '32GB RAM', '1TB SSD', 'Redundant PSU']
      },
      {
        id: '2',
        name: 'Cisco Catalyst 9300 Switch',
        description: 'Enterprise-grade network switch with advanced features',
        price: 1800,
        rating: 4.6,
        reviewCount: 18,
        image: '/api/placeholder/300/200',
        category: 'networking',
        brand: 'Cisco',
        inStock: true,
        features: ['48 Ports', 'PoE+', 'Stackable', 'Management']
      }
    ];

    setEquipment(mockEquipment);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading recommendations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load recommendations</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Equipment Recommendations | Zion Tech Group</title>
        <meta name="description" content="Get personalized IT equipment recommendations based on your business needs." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipment Recommendations</h1>
              <p className="text-xl text-blue-100 mb-8">
                Personalized IT equipment recommendations based on your business needs
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Recommendations */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended for You</h2>
            <p className="text-gray-600 mb-6">
              Based on your profile and requirements, here are our top recommendations:
            </p>
          </div>

          {/* Equipment Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
                      <CardDescription className="mb-3">
                        {item.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        ${item.price.toLocaleString()}
                      </div>
                      {!item.inStock && (
                        <Badge variant="destructive" className="mt-1">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(item.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {item.rating} ({item.reviewCount} reviews)
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span className="font-medium">{item.brand}</span>
                    <span className="mx-2">•</span>
                    <span className="capitalize">{item.category}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {item.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1" 
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need More Recommendations?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experts can provide personalized recommendations based on your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">Get Expert Advice</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/equipment">Browse All Equipment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentRecommendations;