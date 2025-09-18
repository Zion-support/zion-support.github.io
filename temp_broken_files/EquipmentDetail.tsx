                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <NextSeo
        title={`${equipment.name} - Zion Marketplace`}
        description={equipment.description}
        openGraph={{
          title: `${equipment.name} - Zion Marketplace`,
          description: equipment.description,
          images: equipment.images.length > 0 && equipment.images[0] ? [{ url: equipment.images[0] }] : undefined
        }}
      />
      <div className="min-h-screen bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <divnav 
            className="flex mb-8"
          >
            <button
              onClick={() => router.push('/equipment')}
              className="text-zion-cyan hover:text-white transition-colors"
            >
              Equipment
            <span className="mx-2 text-zion-slate-light">/</span>
            <span className="text-zion-slate-light">{equipment.name}</span>
          </divnav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div 
              className="space-y-4"
            >
              <AspectRatio ratio={1} className="bg-zion-blue-light rounded-lg overflow-hidden">
                <ImageWithRetry
                  src={equipment.images[selectedImageIndex] || equipment.images[0] || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'}
                  alt={equipment.name}
                  className="object-cover"
                />
              {equipment.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {equipment.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index
                          ? 'border-zion-cyan'
                          : 'border-transparent hover:border-zion-slate-light'
                      }`}
                    >
                      <ImageWithRetry
                        src={image}
                        alt={`${equipment.name} view ${index + 1}`}
                        className="object-cover"
                      />
                  ))}
              )}
            </div>

            {/* Product Details */}
            <div 
              className="space-y-6"
            >
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20">
                    {equipment.category}
                  <Badge variant="outline" className="border-zion-slate-light text-zion-slate-light">
                    {equipment.brand}
                <h1 className="text-3xl font-bold text-white">{equipment.name}</h1>
                {equipment.rating && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(equipment.rating!) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-zion-slate-light'
                          }`}
                        />
                      ))}
                    <span className="text-sm text-zion-slate-light">
                      {equipment.rating?.toFixed(1)} ({equipment.reviewCount} reviews)
                )}
              {/* Price */}
              <div className="bg-zion-blue-light rounded-lg p-4">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  {formatPrice(equipment.price)}
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-zion-cyan" />
                  <span className={equipment.inStock ? 'text-green-400' : 'text-yellow-400'}>
                    {equipment.expectedShipping}
              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Description</h3>
                <p className="text-zion-slate-light leading-relaxed">{equipment.description}</p>
              {/* Specifications */}
              {equipment.specifications.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Specifications</h3>
                  <div className="grid gap-2">
                    {equipment.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-zion-blue-light">
                        <span className="text-zion-slate-light">{spec.name}</span>
                        <span className="text-white">{spec.value || 'Enterprise Grade'}</span>
                    ))}
              )}
              {/* Add to Cart */}
              <div className="space-y-4 pt-6 border-t border-zion-blue-light">
                <div className="flex items-center gap-4">
                  <label className="text-white font-medium">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-8 w-8 p-0"
                    >
                      -
                    <span className="text-white w-8 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
                      +
                <Button
                  onClick={handleAddToCart}
                  disabled={isAdding || !equipment.inStock}
                  size="lg"
                  variant="outline"
                  className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  data-testid="add-to-cart-button"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isAdding ? 'Adding...' : inCart ? 'In Cart' : 'Add to Cart'}
              {/* Additional Info */}
              <div className="space-y-4 border-t border-zion-blue-light pt-4">
                {/* Shipping */}
                <div className="flex gap-3 text-zion-slate-light">
                  <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Free Shipping</p>
                    <p className="text-xs">For orders over $100 within the US</p>
                {/* Warranty */}
                {equipment.warranty && (
                  <div className="flex gap-3 text-zion-slate-light">
                    <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Warranty</p>
                      <p className="text-xs">{equipment.warranty}</p>
                )}
                {/* Return Policy */}
                {equipment.returnPolicy && (
                  <div className="flex gap-3 text-zion-slate-light">
                    <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Returns</p>
                      <p className="text-xs">{equipment.returnPolicy}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};


export default EquipmentDetail;
import React from 'react';

const function EquipmentDetail() {: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function EquipmentDetail() {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default function EquipmentDetail() {;
