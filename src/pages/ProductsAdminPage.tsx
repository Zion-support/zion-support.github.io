import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

interface Product {
  id: number;
  name: string;
  category: string;
  status: 'approved' | 'pending' | 'rejected';
}

const initialProducts: Product[] = [
  { id: 1, name: 'Alpha', category: 'Software', status: 'pending' },
  { id: 2, name: 'Beta', category: 'Hardware', status: 'approved' },
  { id: 3, name: 'Gamma', category: 'Service', status: 'rejected' },
];

export default function ProductsAdminPage() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(initialProducts);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleApproval = (id: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              status: p.status === 'approved' ? 'rejected' : 'approved',
            }
          : p
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-4 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="grid grid-cols-5 gap-4 font-medium text-gray-900 border-b border-gray-200 pb-3">
            <div>ID</div>
            <div>Name</div>
            <div>Category</div>
            <div>Status</div>
            <div className="text-center">Approve</div>
          </div>
          
          {filtered.map((p) => (
            <div key={p.id} className="grid grid-cols-5 gap-4 py-4 border-b border-gray-100 last:border-b-0">
              <div className="text-sm text-gray-900">{p.id}</div>
              <div className="text-sm text-gray-900">{p.name}</div>
              <div className="text-sm text-gray-900">{p.category}</div>
              <div>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(p.status)}`}>
                  {p.status}
                </span>
              </div>
              <div className="text-center">
                <Switch
                  checked={p.status === 'approved'}
                  onCheckedChange={() => toggleApproval(p.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
