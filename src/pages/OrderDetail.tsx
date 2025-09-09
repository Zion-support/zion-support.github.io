import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  Package, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Truck, 
  CreditCard, 
  User, 
  MapPin, 
  Phone,
  Mail,
  Calendar,
  DollarSign,
  FileText,
  Download,
  Printer,
  MessageSquare,
  Star,
  Eye,
  EyeOff
} from 'lucide-react';

interface OrderItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
}

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  items: OrderItem[];
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  paymentMethod: {
    type: string;
    last4: string;
    expiry: string;
  };
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  trackingNumber?: string;
  estimatedDelivery?: string;
  notes?: string;
}

export default function OrderDetailPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Simulate loading order data
    const loadOrderData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock order data
      setOrder({
        id: orderId || '1',
        orderNumber: 'ORD-2025-001234',
        date: '2025-01-15',
        status: 'shipped',
        total: 1250.75,
        subtotal: 1150.00,
        tax: 92.00,
        shipping: 8.75,
        items: [
          {
            id: '1',
            name: 'AI Development Services - Project Alpha',
            description: 'Custom AI solution development including machine learning models and API integration',
            quantity: 1,
            unitPrice: 1150.00,
            totalPrice: 1150.00,
            status: 'shipped'
          }
        ],
        customer: {
          name: 'John Smith',
          email: 'john.smith@company.com',
          phone: '+1 (555) 123-4567',
          address: '123 Business Ave, Suite 100, San Francisco, CA 94105'
        },
        paymentMethod: {
          type: 'Credit Card',
          last4: '4242',
          expiry: '12/26'
        },
        shippingAddress: {
          name: 'John Smith',
          address: '123 Business Ave, Suite 100',
          city: 'San Francisco',
          state: 'CA',
          zipCode: '94105',
          country: 'United States'
        },
        trackingNumber: 'TRK-123456789',
        estimatedDelivery: '2025-01-20',
        notes: 'Please deliver during business hours. Contact John Smith upon arrival.'
      });
      
      setIsLoading(false);
    };

    loadOrderData();
  }, [orderId]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
      case 'processing': return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'shipped': return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
      case 'delivered': return 'bg-green-500/20 text-green-400 border-green-500/40';
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/40';
      default: return 'bg-zion-slate/20 text-zion-slate-light border-zion-slate/40';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'processing': return <Package className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'cancelled': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zion-blue p-6">
        <div className="container mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-zion-blue-dark rounded w-1/4 mb-6"></div>
            <div className="h-96 bg-zion-blue-dark rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-zion-blue p-6">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Order Not Found</h1>
            <p className="text-zion-slate-light mb-6">The order you're looking for could not be found.</p>
            <Button asChild className="bg-zion-purple hover:bg-zion-purple-dark">
              <Link to="/dashboard">Back to Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`Order ${order.orderNumber} - Zion Tech Group`}
        description={`View details for order ${order.orderNumber}`}
        keywords="order details, order tracking, Zion Tech Group"
        canonical={`https://ziontechgroup.com/orders/${order.id}`}
      />
      <div className="min-h-screen bg-zion-blue p-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Button asChild variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                <Link to="/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Order {order.orderNumber}</h1>
                <p className="text-zion-slate-light">Placed on {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className={getStatusColor(order.status)}>
                  {getStatusIcon(order.status)}
                  <span className="ml-1 capitalize">{order.status}</span>
                </Badge>
                <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Invoice
                </Button>
                <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
              <TabsTrigger value="overview" className="data-[state=active]:bg-zion-purple/20">
                Overview
              </TabsTrigger>
              <TabsTrigger value="items" className="data-[state=active]:bg-zion-purple/20">
                Order Items
              </TabsTrigger>
              <TabsTrigger value="shipping" className="data-[state=active]:bg-zion-purple/20">
                Shipping & Tracking
              </TabsTrigger>
              <TabsTrigger value="payment" className="data-[state=active]:bg-zion-purple/20">
                Payment Details
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Order Summary */}
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-white">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Subtotal:</span>
                      <span className="text-white">{formatCurrency(order.subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Tax:</span>
                      <span className="text-white">{formatCurrency(order.tax)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Shipping:</span>
                      <span className="text-white">{formatCurrency(order.shipping)}</span>
                    </div>
                    <div className="border-t border-zion-blue-light pt-2">
                      <div className="flex justify-between">
                        <span className="text-white font-semibold">Total:</span>
                        <span className="text-white font-bold text-xl">{formatCurrency(order.total)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Customer Information */}
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-white">Customer Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-zion-cyan" />
                      <span className="text-white">{order.customer.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-zion-cyan" />
                      <span className="text-zion-slate-light">{order.customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-zion-cyan" />
                      <span className="text-zion-slate-light">{order.customer.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-zion-cyan mt-1" />
                      <span className="text-zion-slate-light text-sm">{order.customer.address}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Status */}
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-white">Order Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r ${getStatusColor(order.status).replace('bg-', '').replace('/20', '')} mb-2`}>
                        {getStatusIcon(order.status)}
                      </div>
                      <div className="text-white font-semibold capitalize">{order.status}</div>
                      <div className="text-zion-slate-light text-sm">Order placed on {new Date(order.date).toLocaleDateString()}</div>
                    </div>
                    {order.estimatedDelivery && (
                      <div className="text-center pt-4 border-t border-zion-blue-light">
                        <div className="text-zion-slate-light text-sm">Estimated Delivery</div>
                        <div className="text-white font-semibold">{new Date(order.estimatedDelivery).toLocaleDateString()}</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="items" className="space-y-6">
              <Card className="bg-zion-blue-dark border-zion-purple/20">
                <CardHeader>
                  <CardTitle className="text-white">Order Items</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {order.items.length} item{order.items.length !== 1 ? 's' : ''} in this order
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-zion-blue-light/10 rounded-lg">
                        <div className="flex-1">
                          <div className="text-white font-medium">{item.name}</div>
                          <div className="text-zion-slate-light text-sm mt-1">{item.description}</div>
                          <div className="text-zion-slate-light text-sm mt-2">
                            Qty: {item.quantity} × {formatCurrency(item.unitPrice)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold text-lg">{formatCurrency(item.totalPrice)}</div>
                          <Badge variant="outline" className={getStatusColor(item.status)}>
                            {getStatusIcon(item.status)}
                            <span className="ml-1 capitalize">{item.status}</span>
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Shipping Address */}
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-white">Shipping Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-white font-medium">{order.shippingAddress.name}</div>
                    <div className="text-zion-slate-light">{order.shippingAddress.address}</div>
                    <div className="text-zion-slate-light">
                      {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                    </div>
                    <div className="text-zion-slate-light">{order.shippingAddress.country}</div>
                  </CardContent>
                </Card>

                {/* Tracking Information */}
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-white">Tracking Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {order.trackingNumber ? (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="text-zion-slate-light">Tracking Number:</span>
                          <span className="text-white font-mono">{order.trackingNumber}</span>
                        </div>
                        {order.estimatedDelivery && (
                          <div className="flex items-center justify-between">
                            <span className="text-zion-slate-light">Estimated Delivery:</span>
                            <span className="text-white">{new Date(order.estimatedDelivery).toLocaleDateString()}</span>
                          </div>
                        )}
                        <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                          Track Package
                        </Button>
                      </>
                    ) : (
                      <div className="text-zion-slate-light text-center py-4">
                        Tracking information will be available once the order ships.
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {order.notes && (
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-white">Delivery Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zion-slate-light">{order.notes}</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="payment" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Payment Method */}
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-white">Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-zion-cyan" />
                      <div>
                        <div className="text-white font-medium">{order.paymentMethod.type}</div>
                        <div className="text-zion-slate-light">•••• •••• •••• {order.paymentMethod.last4}</div>
                        <div className="text-zion-slate-light text-sm">Expires {order.paymentMethod.expiry}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Summary */}
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-white">Payment Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Amount Paid:</span>
                      <span className="text-white font-semibold">{formatCurrency(order.total)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Payment Date:</span>
                      <span className="text-white">{new Date(order.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Payment Status:</span>
                      <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/40">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Paid
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-zion-purple hover:bg-zion-purple-dark">
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button asChild variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
              <Link to="/dashboard">Back to Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}