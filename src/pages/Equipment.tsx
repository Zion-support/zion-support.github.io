import React, { useState } from 'react';'
import { motion } from 'framer-motion';
import {

  Server,
  Search,
  Filter,
  Grid,
  List,
  Star,
  MapPin,
  Clock,
  DollarSign,  Briefcase,
  Cpu,
  HardDrive,
  Network,'
  Zap} from 'lucide-react';

const Equipment: React.FC = () => {
'
  const [view, setView] = useState<'grid' | 'list'>('grid');'
  const [searchQuery, setSearchQuery] = useState('');

  const equipmentItems = [
    {

      id: 1,'
      name: 'High-Performance Server','
      category: 'Servers','
      location: 'Data Center A','
      status: 'Available',
      rating: 4.8,'
      price: '$2,500/month','
      description: 'Enterprise-grade server with latest Intel processors'},
    {

      id: 2,'
      name: 'Network Switch','
      category: 'Networking','
      location: 'Data Center B','
      status: 'In Use',
      rating: 4.6,'
      price: '$800/month','
      description: '48-port gigabit network switch with PoE support'},
    {

      id: 3,'
      name: 'Storage Array','
      category: 'Storage','
      location: 'Data Center A','
      status: 'Available',
      rating: 4.9,'
      price: '$1,200/month','
      description: 'High-capacity storage array with RAID protection'},
  ];

  const filteredItems = equipmentItems.filter()
    item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}"
          className="text-center mb-12"
        >"
          <h1 className="text-5xl font-bold text-white mb-4">
            Equipment & Hardware
          </h1>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access to enterprise-grade hardware, servers, networking equipment,
            and specialized devices for your technology needs.
          </p>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}"
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20"
        >"
          <div className="flex flex-col md:flex-row gap-4 items-center">"
            <div className="relative flex-1">"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input"                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}"
                placeholder="Search equipment...""
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
"
            <div className="flex gap-2">
              <button'
                onClick={() => setView('grid')}
                className={`p-3 rounded-lg transition-colors ${
'
                  view === 'grid''
                    ? 'bg-blue-600 text-white''
                    : 'bg-white/10 text-gray-400 hover:text-white'`
                }`}
              >"
                <Grid className="w-5 h-5" />              </button>
              <button'
                onClick={() => setView('list')}`
                className={`p-3 rounded-lg transition-colors ${
'
                  view === 'list''
                    ? 'bg-blue-600 text-white''
                    : 'bg-white/10 text-gray-400 hover:text-white'`
                }`}
              >"
                <List className="w-5 h-5" />              </button>
            </div>
          </div>
        </motion.div>

        {/* Equipment Grid / List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {filteredItems.length > 0 ? (
            <div
              className={
'
                view === 'grid''
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6''
                  : 'space-y-4'
              }
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}"
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >"
                  <div className="flex items-start justify-between mb-4">"
                    <div className="flex items-center gap-3">"
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">'
                        {item.category === 'Servers' && ("
                          <Server className="w-6 h-6 text-blue-400" />
                        )}'
                        {item.category === 'Networking' && ("
                          <Network className="w-6 h-6 text-green-400" />
                        )}'
                        {item.category === 'Storage' && ("
                          <HardDrive className="w-6 h-6 text-purple-400" />
                        )}                      </div>
                      <div>"
                        <h3 className="text-lg font-semibold text-white">
                          {item.name}
                        </h3>"
                        <p className="text-sm text-gray-400">{item.category}</p>
                      </div>
                    </div>"
                    <div className="flex items-center gap-1">"
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />"                      <span className="text-sm text-white">{item.rating}</span>
                    </div>
                  </div>
"
                  <p className="text-gray-300 mb-4">{item.description}</p>
"
                  <div className="space-y-3 mb-4">"
                    <div className="flex items-center gap-2 text-sm text-gray-400">"
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>"
                    <div className="flex items-center gap-2 text-sm text-gray-400">"
                      <Clock className="w-4 h-4" />
                      <span>{item.status}</span>
                    </div>"
                    <div className="flex items-center gap-2 text-sm text-gray-400">"
                      <DollarSign className="w-4 h-4" />                      <span>{item.price}</span>
                    </div>
                  </div>
"
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Request Access
                  </button>
                </motion.div>
              ))}
            </div>
          ) : ("
            <div className="text-center py-16">"
              <div className="w-20 h-20 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-6">"
                <Search className="w-10 h-10 text-gray-400" />
              </div>"
              <h3 className="text-2xl font-semibold text-white mb-4">
                No Equipment Found
              </h3>"              <p className="text-gray-400 mb-6">
                No equipment matches your search criteria. Try adjusting your
                search terms.
              </p>
              <button'
                onClick={() => setSearchQuery('')}"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Clear Search
              </button>
            </div>) }
        </motion.div>
      </div>
    </div>) ;
};
export default Equipment;
'"`