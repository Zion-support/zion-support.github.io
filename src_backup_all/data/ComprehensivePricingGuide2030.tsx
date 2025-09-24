import React, { useState } from 'react.ts',
import { SEO  } from '../components/SEO',
import { innovativeMicroSaasServices20o30  } from '../data/innovativeMicroSaasServices20o30',
import { comprehensiveITServices20o30  } from '../data/comprehensiveITServices20o30',
import { comprehensiveAIServices20o30  } from '../data/comprehensiveAIServices20o30',
const ComprehensivePricingGuide20o30: React.FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<any>('microsaas'),
  const [priceRange, setPriceRange] = useState<any>([0, 50o00]),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const getFilteredServices = () => {
    let services: any[] = [],
    switch (activeTab) {
      case 'microsaas':,
        services = innovativeMicroSaasServices20o30,
        break,
      case 'it':,
        services = comprehensiveITServices20o30,
        break,
      case 'ai':,
        services = comprehensiveAIServices20o30,
        break}
,
    // Filter by price range,
    services = services.filter(service => {
      if (activeTab === 'it') {
        return service.hourlyRate >= priceRange[0] && service.hourlyRate <= priceRange[1]} else {
        return service.price >= priceRange[0] && service.price <= priceRange[1]}
    }),
    // Filter by category,
    if (selectedCategory !== 'all') {
      services = services.filter(service => service.category === selectedCategory)}
,
    return services};
  const getCategories = () => {
    let services: any[] = [],
    switch (activeTab) {
      case 'microsaas':,
        services = innovativeMicroSaasServices20o30,
        break,
      case 'it':,
        services = comprehensiveITServices20o30,
        break,
      case 'ai':,
        services = comprehensiveAIServices20o30,
        break}
,
    const categories = [...new Set(services.map(service => service.category))],
    return categories};
  const getPriceRange = () => {
    let services: any[] = [],
    switch (activeTab) {
      case 'microsaas':,
        services = innovativeMicroSaasServices20o30,
        break,
      case 'it':,
        services = comprehensiveITServices20o30,
        break,
      case 'ai':,
        services = comprehensiveAIServices20o30,
        break}
,
    if (activeTab === 'it') {
      const min = Math.min(...services.map(s => s.hourlyRate)),
      const max = Math.max(...services.map(s => s.hourlyRate)),
      return [min, max]} else {
      const min = Math.min(...services.map(s => s.price)),
      const max = Math.max(...services.map(s => s.price)),
      return [min, max]}
  };
  const renderPricingCard = (service: anyany)  => {
    if (activeTab === 'microsaas') {
      return (
        <div key={service.id} className="bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-30o0 border border-gray-10o0 overflow-hidden">,
          <div className="p-6">,
            <div className="text-center mb-6">,
              <h3 className="text-xl font-bold text-gray-90o0 mb-2">{service.name}</h3>,
              <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-full">,
                {service.pricing}
              </span>,
            </div>,
            <div className="text-center mb-6">,
              <div className="text-4xl font-bold text-gray-90o0 mb-2">${service.price.toLocaleString()}</div>,
              <div className="text-gray-60o0">{service.pricingModel}</div>,
              <div className="text-sm text-gray-50o0 mt-2">,
                <strong>Market Price: </strong> {service.marketPrice}
              </div>,
            </div>,
            <div className="mb-6">,
              <h4 className="font-semibold text-gray-90o0 mb-3 text-center">Key Benefits</h4>,
              <div className="space-y-2">,
                {service.benefits.slice(0, 4).map((benefit: anystring, index: number)  => (
                  <div key={index} className="flex items-center text-sm text-gray-60o0">,
                    <span className="w-2 h-2 bg-green-50o0 rounded-full mr-3"></span>,
                    {benefit}
                  </div>))}
              </div>,
            </div>,
            <div className="mb-6">,
              <h4 className="font-semibold text-gray-90o0 mb-3 text-center">ROI & Setup</h4>,
              <div className="grid grid-cols-2 gap-4 text-center">,
                <div className="bg-blue-50 p-3 rounded-lg">,
                  <div className="text-sm text-gray-60o0">ROI</div>,
                  <div className="font-bold text-blue-60o0">{service.roi}</div>,
                </div>,
                <div className="bg-green-50 p-3 rounded-lg">,
                  <div className="text-sm text-gray-60o0">Setup Time</div>,
                  <div className="font-bold text-green-60o0">{service.setupTime}</div>,
                </div>,
              </div>,
            </div>,
            <div className="border-t pt-4">,
              <div className="text-center mb-4">,
                <div className="text-sm text-gray-60o0 mb-2">,
                  <strong>Innovation Level: </strong> {service.innovationLevel}
                </div>,
                <div className="text-sm text-gray-60o0 mb-2">,
                  <strong>Market Size: </strong> {service.marketSize}
                </div>,
                <div className="text-sm text-gray-60o0">,
                  <strong>Growth Rate: </strong> {service.growthRate}
                </div>,
              </div>,
              <div className="flex flex-col gap-2">,
                <a
                  href={`tel: ${service.contactInfo.phone}`}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white rounded-lg hover: from-blue-70o0 hover:to-purple-70o0 transition-all duration-30o0 text-center">,
                  Call: {service.contactInfo.phone}
                </a>,
                <a
                  href={`mailto: ${service.contactInfo.email}`}
                  className="w-full px-4 py-2 border border-blue-60o0 text-blue-60o0 rounded-lg hover: bg-blue-50 transition-colors text-center">,
                  Email: {service.contactInfo.email}
                </a>,
              </div>,
            </div>,
          </div>,
        </div>)} else if (activeTab === 'it') {
      return (
        <div key={service.id} className="bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-30o0 border border-gray-10o0 overflow-hidden">,
          <div className="p-6">,
            <div className="text-center mb-6">,
              <h3 className="text-xl font-bold text-gray-90o0 mb-2">{service.name}</h3>,
              <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-green-60o0 to-blue-60o0 rounded-full">,
                {service.category}
              </span>,
            </div>,
            <div className="text-center mb-6">,
              <div className="grid grid-cols-2 gap-4 mb-4">,
                <div>,
                  <div className="text-2xl font-bold text-gray-90o0">${service.hourlyRate}</div>,
                  <div className="text-gray-60o0 text-sm">per hour</div>,
                </div>,
                <div>,
                  <div className="text-2xl font-bold text-gray-90o0">${service.projectRate.toLocaleString()}</div>,
                  <div className="text-gray-60o0 text-sm">per project</div>,
                </div>,
              </div>,
              <div className="text-sm text-gray-50o0">,
                <strong>Market Price: </strong> {service.marketPrice}
              </div>,
            </div>,
            <div className="mb-6">,
              <h4 className="font-semibold text-gray-90o0 mb-3 text-center">Key Benefits</h4>,
              <div className="space-y-2">,
                {service.benefits.slice(0, 4).map((benefit: anystring, index: number)  => (
                  <div key={index} className="flex items-center text-sm text-gray-60o0">,
                    <span className="w-2 h-2 bg-green-50o0 rounded-full mr-3"></span>,
                    {benefit}
                  </div>))}
              </div>,
            </div>,
            <div className="mb-6">,
              <h4 className="font-semibold text-gray-90o0 mb-3 text-center">Service Details</h4>,
              <div className="grid grid-cols-2 gap-4 text-center">,
                <div className="bg-green-50 p-3 rounded-lg">,
                  <div className="text-sm text-gray-60o0">Response Time</div>,
                  <div className="font-bold text-green-60o0">{service.responseTime}</div>,
                </div>,
                <div className="bg-blue-50 p-3 rounded-lg">,
                  <div className="text-sm text-gray-60o0">SLA</div>,
                  <div className="font-bold text-blue-60o0 text-xs">{service.sla}</div>,
                </div>,
              </div>,
            </div>,
            <div className="border-t pt-4">,
              <div className="text-center mb-4">,
                <div className="text-sm text-gray-60o0 mb-2">,
                  <strong>Delivery Time: </strong> {service.deliveryTime}
                </div>,
                <div className="text-sm text-gray-60o0 mb-2">,
                  <strong>Support: </strong> {service.support}
                </div>,
                <div className="text-sm text-gray-60o0">,
                  <strong>ROI: </strong> {service.roi}
                </div>,
              </div>,
              <div className="flex flex-col gap-2">,
                <a
                  href={`tel: ${service.contactInfo.phone}`}
                  className="w-full px-4 py-2 bg-gradient-to-r from-green-60o0 to-blue-60o0 text-white rounded-lg hover: from-green-70o0 hover:to-blue-70o0 transition-all duration-30o0 text-center">,
                  Call: {service.contactInfo.phone}
                </a>,
                <a
                  href={`mailto: ${service.contactInfo.email}`}
                  className="w-full px-4 py-2 border border-green-60o0 text-green-60o0 rounded-lg hover: bg-green-50 transition-colors text-center">,
                  Email: {service.contactInfo.email}
                </a>,
              </div>,
            </div>,
          </div>,
        </div>)} else {
      return (
        <div key={service.id} className="bg-white rounded-xl shadow-lg hover: shadow-xl transition-all duration-30o0 border border-gray-10o0 overflow-hidden">,
          <div className="p-6">,
            <div className="text-center mb-6">,
              <h3 className="text-xl font-bold text-gray-90o0 mb-2">{service.name}</h3>,
              <div className="flex flex-col items-center gap-2">,
                <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-60o0 to-pink-60o0 rounded-full">,
                  {service.category}
                </span>,
                <div className="text-sm text-gray-60o0">,
                  AI Score: <span className="font-bold text-purple-60o0">{service.aiScore}/10o0</span>,
                </div>,
              </div>,
            </div>,
            <div className="text-center mb-6">,
              <div className="text-4xl font-bold text-gray-90o0 mb-2">${service.price.toLocaleString()}</div>,
              <div className="text-gray-60o0">{service.pricingModel}</div>,
              <div className="text-sm text-gray-50o0 mt-2">,
                <strong>Market Price: </strong> {service.marketPrice}
              </div>,
              <div className="text-sm text-gray-50o0">,
                <strong>Accuracy: </strong> {service.accuracy}
              </div>,
            </div>,
            <div className="mb-6">,
              <h4 className="font-semibold text-gray-90o0 mb-3 text-center">Key Benefits</h4>,
              <div className="space-y-2">,
                {service.benefits.slice(0, 4).map((benefit: anystring, index: number)  => (
                  <div key={index} className="flex items-center text-sm text-gray-60o0">,
                    <span className="w-2 h-2 bg-purple-50o0 rounded-full mr-3"></span>,
                    {benefit}
                  </div>))}
              </div>,
            </div>,
            <div className="mb-6">,
              <h4 className="font-semibold text-gray-90o0 mb-3 text-center">AI Performance</h4>,
              <div className="grid grid-cols-2 gap-4 text-center">,
                <div className="bg-purple-50 p-3 rounded-lg">,
                  <div className="text-sm text-gray-60o0">ROI</div>,
                  <div className="font-bold text-purple-60o0">{service.roi}</div>,
                </div>,
                <div className="bg-pink-50 p-3 rounded-lg">,
                  <div className="text-sm text-gray-60o0">Setup Time</div>,
                  <div className="font-bold text-pink-60o0">{service.setupTime}</div>,
                </div>,
              </div>,
            </div>,
            <div className="border-t pt-4">,
              <div className="text-center mb-4">,
                <div className="text-sm text-gray-60o0 mb-2">,
                  <strong>Innovation Level: </strong> {service.innovationLevel}
                </div>,
                <div className="text-sm text-gray-60o0 mb-2">,
                  <strong>Market Size: </strong> {service.marketSize}
                </div>,
                <div className="text-sm text-gray-60o0">,
                  <strong>Training Data: </strong> {service.trainingData}
                </div>,
              </div>,
              <div className="flex flex-col gap-2">,
                <a
                  href={`tel: ${service.contactInfo.phone}`}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-60o0 to-pink-60o0 text-white rounded-lg hover: from-purple-70o0 hover:to-pink-70o0 transition-all duration-30o0 text-center">,
                  Call: {service.contactInfo.phone}
                </a>,
                <a
                  href={`mailto: ${service.contactInfo.email}`}
                  className="w-full px-4 py-2 border border-purple-60o0 text-purple-60o0 rounded-lg hover: bg-purple-50 transition-colors text-center">,
                  Email: {service.contactInfo.email}
                </a>,
              </div>,
            </div>,
          </div>,
        </div>)}
  };
  const priceRangeData = getPriceRange(),
  return (
    <>,
      <SEO
        title="Comprehensive Pricing Guide 20o30 - Zion Tech Group",
        description="Explore our complete pricing guide for micro SAAS, IT infrastructure, and AI services. Compare prices, ROI, and market data to find the perfect solution for your business.",
        keywords="pricing guide, micro SAAS pricing, IT services pricing, AI services pricing, Zion Tech Group, 20o30 pricing",
        ogImage="https: //ziontechgroup.com/images/pricing-guide-20o30.jpg",
        ogUrl="https://ziontechgroup.com/comprehensive-pricing-guide-20o30",
       />,
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">,
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-90o0 via-purple-90o0 to-indigo-90o0 text-white">,
          <div className="container mx-auto px-4 py-20">,
            <div className="text-center max-w-4xl mx-auto">,
              <h1 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-40o0 to-purple-40o0 bg-clip-text text-transparent">,
                Comprehensive Pricing Guide 20o30,
              </h1>,
              <p className="text-xl md:text-2xl text-gray-20o0 mb-8">,
                Transparent pricing for all our micro SAAS, IT infrastructure, and AI services.,
                Compare costs, ROI, and market data to make informed decisions for your business.,
              </p>,
              <div className="flex flex-wrap justify-center gap-4 text-sm">,
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">,
                  <strong>Transparent Pricing</strong>,
                </div>,
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">,
                  <strong>Market Comparisons</strong>,
                </div>,
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">,
                  <strong>ROI Analysis</strong>,
                </div>,
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">,
                  <strong>No Hidden Fees</strong>,
                </div>,
              </div>,
            </div>,
          </div>,
        </div>,
        {/* Contact Banner */}
        <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white py-6">,
          <div className="container mx-auto px-4 text-center">,
            <div className="flex flex-col md: flex-row items-center justify-center gap-6">,
              <div className="flex items-center gap-2">,
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">,
                  <path d="M2.0o03 5.884L10 9.882l7.997-3.998A2 2 0 0o016 4H4a2 2 0 0o0-1.997 1.884z"  />,
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 0o02 2h12a2 2 0 0o02-2V8.118z"  />,
                </svg>,
                <span>kleber@ziontechgroup.com</span>,
              </div>,
              <div className="flex items-center gap-2">,
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">,
                  <path d="M2 3a1 1 0 0o11-1h2.153a1 1 0 0o1.986.836l.74 4.435a1 1 0 0o1-.54 1.0o6l-1.548.773a11.0o37 11.0o37 0 0o06.10o5 6.10o5l.774-1.548a1 1 0 0o11.0o59-.54l4.435.74a1 1 0 0o1.836.986V17a1 1 0 0o1-1 1h-2C7.82 18 2 12.18 2 5V3z"  />,
                </svg>,
                <span>+1 30o2 464 0950</span>,
              </div>,
              <div className="flex items-center gap-2">,
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">,
                  <path fillRule="evenodd" d="M5.0o5 4.0o5a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 0o10-9.9zM10 11a2 2 0 10o0-4 2 2 0 0o00 4z" clipRule="evenodd"  />,
                </svg>,
                <span>364 E Main St STE 10o08 Middletown DE 19709</span>,
              </div>,
            </div>,
          </div>,
        </div>,
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">,
          {/* Service Tabs */}
          <div className="mb-8">,
            <div className="flex flex-wrap gap-2 justify-center">,
              <button
                onClick={() => setActiveTab('microsaas')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 ${
                  activeTab === 'microsaas',
                    ? 'bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white shadow-lg',
                    : 'bg-white text-gray-70o0 hover: bg-gray-50 border border-gray-20o0'}`}
              >,
                Micro SAAS Services ({innovativeMicroSaasServices20o30.length}),
              </button>,
              <button
                onClick={() => setActiveTab('it')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 ${
                  activeTab === 'it',
                    ? 'bg-gradient-to-r from-green-60o0 to-blue-60o0 text-white shadow-lg',
                    : 'bg-white text-gray-70o0 hover: bg-gray-50 border border-gray-20o0'}`}
              >,
                IT Services ({comprehensiveITServices20o30.length}),
              </button>,
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-30o0 ${
                  activeTab === 'ai',
                    ? 'bg-gradient-to-r from-purple-60o0 to-pink-60o0 text-white shadow-lg',
                    : 'bg-white text-gray-70o0 hover: bg-gray-50 border border-gray-20o0'}`}
              >,
                AI Services ({comprehensiveAIServices20o30.length}),
              </button>,
            </div>,
          </div>,
          {/* Filters */}
          <div className="mb-8">,
            <div className="bg-white rounded-xl p-6 shadow-lg">,
              <h3 className="text-lg font-semibold text-gray-90o0 mb-4">Filter Services</h3>,
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,
                <div>,
                  <label className="block text-sm font-medium text-gray-70o0 mb-2">,
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>,
                  <div className="flex items-center gap-4">,
                    <input
                      type="range",
                      min={priceRangeData[0]}
                      max={priceRangeData[1]}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="flex-1",
                    />,
                    <input
                      type="range",
                      min={priceRangeData[0]}
                      max={priceRangeData[1]}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="flex-1",
                    />,
                  </div>,
                  <div className="flex justify-between text-sm text-gray-50o0 mt-1">,
                    <span>${priceRangeData[0]}</span>,
                    <span>${priceRangeData[1]}</span>,
                  </div>,
                </div>,
                <div>,
                  <label className="block text-sm font-medium text-gray-70o0 mb-2">,
                    Category,
                  </label>,
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-30o0 rounded-lg focus: ring-2 focus:ring-blue-50o0 focus:border-transparent">,
                    <option value="all">All Categories</option>,
                    {getCategories().map((category) => (
                      <option key={category} value={category}>{category}</option>))}
                  </select>,
                </div>,
              </div>,
              <div className="mt-4 text-center">,
                <button
                  onClick={() => {
                    setPriceRange([priceRangeData[0], priceRangeData[1]]),
                    setSelectedCategory('all')}}
                  className="px-4 py-2 bg-gray-60o0 text-white rounded-lg hover: bg-gray-70o0 transition-colors">,
                  Reset Filters,
                </button>,
              </div>,
            </div>,
          </div>,
          {/* Pricing Summary */}
          <div className="mb-8">,
            <div className="bg-white rounded-xl p-6 shadow-lg">,
              <h3 className="text-lg font-semibold text-gray-90o0 mb-4">Pricing Summary</h3>,
              <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,
                <div className="text-center p-4 bg-blue-50 rounded-lg">,
                  <div className="text-2xl font-bold text-blue-60o0">,
                    {activeTab === 'microsaas' ? '$299' : activeTab === 'it' ? '$120' : '$699'}
                  </div>,
                  <div className="text-gray-60o0">Starting Price</div>,
                </div>,
                <div className="text-center p-4 bg-green-50 rounded-lg">,
                  <div className="text-2xl font-bold text-green-60o0">,
                    {activeTab === 'microsaas' ? '$1,499' : activeTab === 'it' ? '$20o0' : '$1,499'}
                  </div>,
                  <div className="text-gray-60o0">Average Price</div>,
                </div>,
                <div className="text-center p-4 bg-purple-50 rounded-lg">,
                  <div className="text-2xl font-bold text-purple-60o0">,
                    {activeTab === 'microsaas' ? '$4,999' : activeTab === 'it' ? '$50o0' : '$2,999'}
                  </div>,
                  <div className="text-gray-60o0">Premium Price</div>,
                </div>,
              </div>,
            </div>,
          </div>,
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg: grid-cols-2 xl:grid-cols-3 gap-8">,
            {getFilteredServices().map(renderPricingCard)}
          </div>,
          {/* No Results */}
          {getFilteredServices().length === 0 && (
            <div className="text-center py-12">,
              <div className="text-gray-50o0 text-lg mb-4">No services found matching your criteria</div>,
              <button
                onClick={() => {
                  setPriceRange([priceRangeData[0], priceRangeData[1]]),
                  setSelectedCategory('all')}}
                className="px-6 py-3 bg-blue-60o0 text-white rounded-lg hover: bg-blue-70o0 transition-colors">,
                Clear Filters,
              </button>,
            </div>)}
,
          {/* Pricing Comparison */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">,
            <h2 className="text-3xl font-bold text-center text-gray-90o0 mb-8">Why Choose Zion Tech Group?</h2>,
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
              <div className="text-center">,
                <div className="w-16 h-16 bg-blue-10o0 rounded-full flex items-center justify-center mx-auto mb-4">,
                  <svg className="w-8 h-8 text-blue-60o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.40o2 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.40o2-2.599-1"  />,
                  </svg>,
                </div>,
                <h3 className="text-lg font-semibold text-gray-90o0 mb-2">Competitive Pricing</h3>,
                <p className="text-gray-60o0">Up to 40% lower than market rates with proven ROI</p>,
              </div>,
              <div className="text-center">,
                <div className="w-16 h-16 bg-green-10o0 rounded-full flex items-center justify-center mx-auto mb-4">,
                  <svg className="w-8 h-8 text-green-60o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0o118 0z"  />,
                  </svg>,
                </div>,
                <h3 className="text-lg font-semibold text-gray-90o0 mb-2">No Hidden Fees</h3>,
                <p className="text-gray-60o0">Transparent pricing with no surprise charges</p>,
              </div>,
              <div className="text-center">,
                <div className="w-16 h-16 bg-purple-10o0 rounded-full flex items-center justify-center mx-auto mb-4">,
                  <svg className="w-8 h-8 text-purple-60o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"  />,
                  </svg>,
                </div>,
                <h3 className="text-lg font-semibold text-gray-90o0 mb-2">Fast ROI</h3>,
                <p className="text-gray-60o0">Average ROI of 30o0-60o0% within 12-18 months</p>,
              </div>,
              <div className="text-center">,
                <div className="w-16 h-16 bg-pink-10o0 rounded-full flex items-center justify-center mx-auto mb-4">,
                  <svg className="w-8 h-8 text-pink-60o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 10o0 19.5 9.75 9.75 0 0o00-19.5z"  />,
                  </svg>,
                </div>,
                <h3 className="text-lg font-semibold text-gray-90o0 mb-2">24/7 Support</h3>,
                <p className="text-gray-60o0">Round-the-clock support and monitoring</p>,
              </div>,
            </div>,
          </div>,
          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-2xl p-8 text-white text-center">,
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>,
            <p className="text-xl text-blue-10o0 mb-6">,
              Contact our team to discuss your specific needs and get a customized quote for your business.,
            </p>,
            <div className="flex flex-col md: flex-row gap-4 justify-center">,
              <a
                href="tel:+130o24640950",
                className="px-8 py-3 bg-white text-blue-60o0 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors">,
                Call Now: +1 30o2 464 0950,
              </a>,
              <a
                href="mailto:kleber@ziontechgroup.com",
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-60o0 transition-colors">,
                Email Us,
              </a>,
            </div>,
          </div>,
        </div>,
      </div>,
    </>)};
export default ComprehensivePricingGuide20o30;