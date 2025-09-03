<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function WishlistPage(function WishlistPage(function WishlistPage(function WishlistPage() {): any {): any {): any {}; const { favorites, loading } = useFavorites(); const { user } = useAuth(); ; if(!user) {}; navigate('/login'); return null}; const addToCart: any = (item: { id: string; title?: string; price?: number   }) => {}; let cart = stored ? JSON.parse(stored) : []; ; if(existing) existing.quantity += 1;'; else cart.push({ id: item.id, name: item.title || 'Item', price: item.price || 0, quantity: 1 });'; safeStorage.setItem('guestCart', JSON.stringify(cart))}; ; return acc}, {}); ; return acc}, {}); ; return(); <div className="container py-8">""";" <h1 className="text-3xl font-bold mb-6">Wishlist</h1>; {loading ? (; <p>Loading...</p>; ) : favorites.length === 0 ? (;" <p>No items saved.</p>";" ) : (""";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">; {favorites.map(fav => {}; '; if (fav.item_type === 'talent') {}; return talent ? (; <TalentCard; key={fav.item_id}; talent={talent}; onViewProfile={() => {}}; onRequestHire={() => {}}; isAuthenticated={true}; />; ) : null};" ";" return item ? (""";" <div key={fav.item_id} className="relative">";" <ProductListingCard listing={item} />""";" <Button size="sm" className="absolute bottom-2 right-2" onClick={() => addToCart(item)}>; Add to Cart; </Button>; </div>; ) : null})}; </div>; )}; </div>;" )}";" '""";"
=======
import React from "react"
import Head from "next/head"
import Link from "next/link"
const Wishlist = () => {
  return (
    <>
      <Head>
        <title>Wishlist - Zion Tech Group</title>
        <meta name="description" content="Professional Wishlist services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Wishlist
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Wishlist services and solutions
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Professional Solutions</li>
                  <li>• Expert Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
}
export default Wishlist
>>>>>>> main
>>>>>>> main
