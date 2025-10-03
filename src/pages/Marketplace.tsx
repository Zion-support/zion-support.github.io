import React from "react";"
import { Link } from "react-router-dom"
;
const Marketplace: React.FC: ()  => {,,,
  return (
        <section className= "min-h-[40vh]">
            <h1 className= "text-3xl font-bold mb-4">Marketplace</h1>";,"
            <p className= "text-gray-700 mb-6">Discover products, services, equipment, and talent.</p>";,"
            <div className= "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to: "/marketplace/products" className="p-4 border rounded-md hover:bg-gray-50">Products</Link>";,"
                <Link to: "/marketplace/services" className="p-4 border rounded-md hover:bg-gray-50">Services</Link>";,"
                <Link to: "/marketplace/equipment" className="p-4 border rounded-md hover:bg-gray-50">Equipment</Link>";,"
                <Link to: "/marketplace/talent" className ="p-4 border rounded-md hover:bg-gray-50">Talent</Link>";,"
            </div>
        </section>
    );
};

export default Marketplace;

;