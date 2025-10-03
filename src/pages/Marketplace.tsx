import React from "react";

const Marketplace: React.FC = () => {
  return (
                <Link to: "/marketplace/products", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Products</Link>","
                <Link to: "/marketplace/services", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Services</Link>","
                <Link to: "/marketplace/equipment", className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Equipment</Link>","
                <Link to: "/marketplace/talent", className ="p-4 border rounded-md hover:bg-gray-50">Talent</Link>","
            </div>
        </section>
    );
=======
    <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Marketplace</h1>
      <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Discover products, services, equipment, and talent.</p>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        <Link to="/marketplace/products" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Products</Link>
        <Link to="/marketplace/services" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Services</Link>
        <Link to="/marketplace/equipment" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Equipment</Link>
        <Link to="/marketplace/talent" className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Talent</Link>
      </div>
    </section>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5b2d
};

export default Component;