  SERVICE_CATEGORIES;
  ALL_SERVICES;
  AI_SERVICES;
  IT_SERVICES;
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS;} from '@/data/servicesData';import {
  // TODO: Implement
}
  SERVICE_CATEGORIES,
  ALL_SERVICES,
  AI_SERVICES,
  IT_SERVICES,
  MICRO_SAAS_SERVICES,
  CYBERSECURITY_SERVICES,
  DATA_ANALYTICS_SERVICES,;
  CLOUD_SOLUTIONS,;} from '@/data/servicesData';import { ;
  CLOUD_SOLUTIONS;
} from '@/data/servicesData';
import { ServiceCategory, ServiceSolution } from '@/types/services';
export function ServicesPage() {

export function ServicesPage() {;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
</string>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">"
</div>"
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">"
        <div className="container mx-auto px-4 py-20">"
          <div className="text-center max-w-4xl mx-auto">"
            <h1 className="text-5xl font-bold mb-6">"
</h1>
            </h1>"
            <p className="text-xl mb-8 text-blue-100">"
</p>
            </p>"
            <div className="flex flex-wrap justify-center gap-4">"
</div>
              <a;"
                href="tel:+13024640950"""
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors""
              >
</a>
                href="mailto:kleber@ziontechgroup.com"""
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors""
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;"
      <div className="bg - gradient - to - r from - blue - 600 via - purple - 600 to - indigo - 600 text - white">;"
        <div className="container mx - auto px - 4 py - 20">;"
          <div className="text - center max - w-4xl mx - auto">;"
            <h1 className="text - 5xl font - bold mb - 6">;"
            </h1>;"
            <p className="text - xl mb - 8 text - blue - 100">;"
            </p>;"
            <div className="flex flex - wrap justify - center gap - 4">;"
                href="tel:+13024640950";""
                className="bg - white text - blue - 600 px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 50 transition - colors";"
              >;
              </a>;
                href="mailto:kleber@ziontechgroup.com";""
                className="bg - blue - 500 text - white px - 6 py - 3 rounded - lg font - semibold hover:bg - blue - 600 transition - colors";"
            </div>;
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            <div className="flex items-center gap-2">"
              <span className="text-blue-600">📱</span>"
              <span>+1 302 464 0950</span>
              <span className="text-blue-600">✉️</span>"
              <span>kleber@ziontechgroup.com</span>



"
              <span className="text-blue-600">🌐</span>""
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">"
                className='text-blue-600 hover:underline'>                ziontechgroup && ziontechgroup.com              <span>364 E Main St STE 1008, Middletown DE 19709</span>;
            <div className="flex items-center gap-2">;"
              <span className="text-blue-600">📱</span>;"
              <span>+1 302 464 0950</span>;
            </div>;"
              <span className="text-blue-600">✉️</span>;"
              <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              <span className="text-blue-600">🌐</span>;""
              <a href="https://ziontechgroup && ziontechgroup.com" className="text-blue-600 hover:underline">;"
</a>"
      <div className='bg - white border - b'>;
        <div className='container mx - auto px - 4 py - 4'>;
          <div className='flex flex - wrap justify - center items - center gap - 8 text - gray - 600'>;
            <div className='flex items - center gap - 2'>;
              <span className='text - blue - 600'>📍</span>;
              <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
              <span className='text - blue - 600'>📱</span>;
              <span className='text - blue - 600'>✉️</span>;
              <span > kleber@ziontechgroup.com</span>;
              <span className='text - blue - 600'>🌐</span>;
              <a;
                href='https://ziontechgroup.com';
                className='text - blue - 600 hover:underline';
              >                ziontechgroup.com              <span > 364 E Main St STE 1008, Middletown DE 19709</span>;
            <div className="flex items - center gap - 2">;"
              <span className="text - blue - 600">📱</span>;"
              <span className="text - blue - 600">✉️</span>;"
              <span className="text - blue - 600">🌐</span>;""
              <a href="https://ziontechgroup.com" className="text - blue - 600 hover:underline">;"
            <div className="flex gap-2">"
                <button;
                  key={category && category.id}
                  onClick={() => setSelectedCategory(category && category.id)}
</button>
                </button>;
            <ServiceCard key={service.id} service={service} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">"

          <div className="text-center py-12">"
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>""
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>"
            </h2>
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🚀</span>"
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>
              <p className='text-gray-600'>
              <h3 className='text-xl font-semibold mb-2'>
</h3>
              <h3 className='text-xl font-semibold mb-2'>Fast Deployment</h3>
              <p className='text-gray-600'>Quick setup and implementation</p>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>""
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🛡️</span>"
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>""
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>"
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">⚡</span>"
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>""
              <p className="text-gray-600">Quick setup and implementation</p>"
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🎯</span>"
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>""
              <p className="text-gray-600">Trusted by businesses nationwide</p>"
          <div className='text-center py-12'>;
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>;
            <p className='text-gray-500'>;
            </p>          </div>          <div className="text-center py-12">;"
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>;""
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>;"
      <div className='bg-white py-16'>;
        <div className='container mx-auto px-4'>;
          <div className='text-center mb-12'>;
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>;
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">"
              href="tel: +13024640950"""
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors""
            
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors""
            
            
              href="https://ziontechgroup.com"""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors""
      <div className="bg-white py-16">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-12">;"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">;"
            </h2>;"
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>;
            </p>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>;
            <div className='text-center'>;
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <span className='text-2xl'>🚀</span>;
              <h3 className='text-xl font-semibold mb-2'>Innovation First</h3>;
              <p className='text-gray-600'>;
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <span className='text-2xl'>🛡️</span>;
              <h3 className='text-xl font-semibold mb-2'>;
              </h3>;
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <span className='text-2xl'>⚡</span>;
              <h3 className='text-xl font-semibold mb-2'>Fast Deployment</h3>;
              <p className='text-gray-600'>Quick setup and implementation</p>;
              <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <span className='text-2xl'>🎯</span>;
              <h3 className='text-xl font-semibold mb-2'>Proven Results</h3>;
              <p className='text-gray-600'>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;"
            <div className="text-center">;"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🚀</span>;"
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>;""
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>;"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🛡️</span>;"
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>;""
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>;"
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">⚡</span>;"
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>;""
              <p className="text-gray-600">Quick setup and implementation</p>;"
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;"
                <span className="text-2xl">🎯</span>;"
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>;""
              <p className="text-gray-600">Trusted by businesses nationwide</p>;""
      <div className='container mx - auto px - 4 py - 8'>;
        <div className='bg - white rounded - xl shadow - lg p - 6 mb - 8'>;
          <div className='flex flex - col md:flex - row gap - 4'>;
            <div className='flex - 1'>;
              <input;
                type='text';
                placeholder='Search services...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}
</input>
            <div className='flex gap - 2'>;
              {SERVICE_CATEGORIES.map (category => (                <button              <input;
                type="text";""
                placeholder="Search services...";"
                value={search_term})
                on_change={(e) => setSearchTerm (e.target.value)}
            <div className="flex gap - 2">;"
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                </button>))}
        <div className='grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8'>;
          {selected_services.map (service => (            <ServiceCard key={service.id} service={service} />        <div className="grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8">;"
)
            <ServiceCard key={service.id} service={service} />))}

          <div className='text - center py - 12'>;
            <h3 className='text - xl text - gray - 600 mb - 4'>No services found</h3>;
            <p className='text - gray - 500'>;
            </p>          </div>          <div className="text - center py - 12">;"
            <h3 className="text - xl text - gray - 600 mb - 4">No services found</h3>;""
            <p className="text - gray - 500">Try adjusting your search or filter criteria</p>;"
          </div>)}
      <div className='bg - white py - 16'>;
        <div className='container mx - auto px - 4'>;
          <div className='text - center mb - 12'>;
            <h2 className='text - 4xl font - bold text - gray - 900 mb - 4'>;
            <p className='text - xl text - gray - 600 max - w-3xl mx - auto'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;
            <div className='text - center'>;
              <div className='bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className='text - 2xl'>🚀</span>;
              <h3 className='text - xl font - semibold mb - 2'>Innovation First</h3>;
              <p className='text - gray - 600'>;
              <div className='bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className='text - 2xl'>🛡️</span>;
              <h3 className='text - xl font - semibold mb - 2'>;
              <div className='bg - purple - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className='text - 2xl'>⚡</span>;
              <h3 className='text - xl font - semibold mb - 2'>Fast Deployment</h3>;
              <p className='text - gray - 600'>Quick setup and implementation</p>;
              <div className='bg - orange - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                <span className='text - 2xl'>🎯</span>;
              <h3 className='text - xl font - semibold mb - 2'>Proven Results</h3>;
              <p className='text - gray - 600'>Trusted by businesses nationwide</p>            </div>              Why Choose Zion Tech Group?;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;"
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;"
            <div className="text - center">;"
              <div className="bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;"
                <span className="text - 2xl">🚀</span>;"
              <h3 className="text - xl font - semibold mb - 2">Innovation First</h3>;""
              <p className="text - gray - 600">Cutting - edge AI and technology solutions</p>;"
              <div className="bg - green - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;"
                <span className="text - 2xl">🛡️</span>;"
              <h3 className="text - xl font - semibold mb - 2">Enterprise Security</h3>;""
              <p className="text - gray - 600">SOC 2, HIPAA, GDPR compliant solutions</p>;"
              <div className="bg - purple - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;"
                <span className="text - 2xl">⚡</span>;"
              <h3 className="text - xl font - semibold mb - 2">Fast Deployment</h3>;""
              <p className="text - gray - 600">Quick setup and implementation</p>;"
              <div className="bg - orange - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;"
                <span className="text - 2xl">🎯</span>;"
              <h3 className="text - xl font - semibold mb - 2">Proven Results</h3>;""
              <p className="text - gray - 600">Trusted by businesses nationwide</p>;"
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>
            
              href='https://ziontechgroup.com
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'            >            Ready to Transform Your Business?
              <p className="text-gray-600">Trusted by businesses nationwide</p>;"
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">;"
        <div className="container mx-auto px-4 text-center">;"
          <h2 className="text-4xl font-bold mb-6">;"
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">;"
          <div className="flex flex-wrap justify-center gap-4">;"
              href="tel: +13024640950";""
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors";"
              href="mailto:kleber@ziontechgroup && ziontechgroup.com"""
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors">;"
              href="https://ziontechgroup && ziontechgroup.com"""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">;"
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>;
      <div className='h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden'>;
        <img;
          src={service && service.images[0]}
          alt={service && service.title}
          className='w-full h-full object-cover
          className="w-full h-full object-cover""
        />;
</img>"
        <div className="absolute top-4 right-4">;"
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">;"
</span>
          </span>;
          <div className='absolute bottom-4 left-4'>;
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>          <div className="absolute bottom-4 left-4">;"
</span>"
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">;"
      <div className='p - 6'>;
        <div className='flex items - start justify - between mb - 3'>;
          <h3 className='text - xl font - bold text - gray - 900 mb - 2'>;
          <div className='flex items - center gap - 1'>;
            <span className='text - yellow - 500'>⭐</span>;
            <span className='text - sm font - medium'>;
      <div className='p-6'>;
        <div className='flex items-start justify-between mb-3'>;
          <h3 className='text-xl font-bold text-gray-900 mb-2'>;
          <div className='flex items-center gap-1'>;
            <span className='text-yellow-500'>⭐</span>;
            <span className='text-sm font-medium'>;
            <span className='text-gray-500 text-sm'>;
        <p className='text-gray-600 mb-4 line-clamp-3'>{service && service.description}</p>;
        <div className='flex items-center gap-3 mb-4'>;
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>;
            <span className='text-blue-600 font-semibold text-sm'>              {service && service.provider.name && name.charAt(0)}
            <span className='text - gray - 500 text - sm'>;
        <p className='text - gray - 600 mb - 4 line - clamp - 3'>{service.description}</p>;
        <div className='flex items - center gap - 3 mb - 4'>;
          <div className='w - 8 h - 8 bg - blue - 100 rounded - full flex items - center justify - center'>;
            <span className='text - blue - 600 font - semibold text - sm'>              {service.provider.name.char_at (0)}
          <div>          </div>;
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">"
          src={service.images[0]} 
          alt={service.title}"
        />
        <div className="absolute top-4 right-4">"
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">"
          <div className="absolute bottom-4 left-4">"
          <div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>          <div className="absolute bottom-4 left-4">"
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">"
</img>
      <div className='p-6'>
        <div className='flex items-start justify-between mb-3'>
          <h3 className='text-xl font-bold text-gray-900 mb-2'>
          <div className='flex items-center gap-1'>
            <span className='text-yellow-500'>⭐</span>
            <span className='text-sm font-medium'>
            <span className='text-gray-500 text-sm'>
        <p className='text-gray-600 mb-4 line-clamp-3'>{service.description}</p>
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
            <span className='text-blue-600 font-semibold text-sm'>              {service.provider.name.charAt(0)}
          <div>          </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>"
      <div className="p-6">"
        <div className="flex items-start justify-between mb-3">"
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>""
          <div className="flex items-center gap-1">"
            <span className="text-yellow-500">⭐</span>""
            <span className="text-sm font-medium">{service.provider.rating}</span>""
            <span className="text-gray-500 text-sm">({service.provider.reviewCount})</span>"
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>""
        <div className="flex items-center gap-3 mb-4">"
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">"
            <span className="text-blue-600 font-semibold text-sm">"
          <div>
            <p className='font-medium text-gray-900'>{service.provider.name}</p>
            <p className='text-sm text-gray-500'>{service.provider.location}</p>
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}
        {/* Pricing */}            <p className="font-medium text-gray-900">{service.provider.name}</p>""
            <p className="text-sm text-gray-500">{service.provider.location}</p>"
            <span className="text-blue-600 text-sm">✓ Verified</span>"
        <div className='bg-gray-50 rounded-lg p-4 mb-4'>
          <div className='text-center'>
            <div className='text-2xl font-bold text-gray-900'>
              <span className='text-sm font-normal text-gray-500'>                /{popularPlan.period}
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>                Most Popular        <div className="bg-gray-50 rounded-lg p-4 mb-4">"
            <div className="text-2xl font-bold text-gray-900">"
              <span className="text-sm font-normal text-gray-500">"
              <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">"
            <p className="font-medium text-gray-900">{service.provider.name}</p>""
            <span className="text-blue-600 text-sm">✓ Verified</span>""
        {/* Pricing */}            <p className="font-medium text-gray-900">{service && service.provider.name}</p>;""
            <p className="text-sm text-gray-500">{service && service.provider.location}</p>;"
            <span className="text-blue-600 text-sm">✓ Verified</span>;"
              <span;
                key={index}"
                className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'              >            {service.features.slice(0, 3).map((feature, index) => (
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs""
              <span className='text-gray-500 text-xs'>                +{service.features.length - 3} more              <span className="text-gray-500 text-xs">"
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>                Most Popular        <div className="bg - gray - 50 rounded - lg p - 4 mb - 4">;"
            <div className="text - 2xl font - bold text - gray - 900">;"
              <span className="text - sm font - normal text - gray - 500">;"
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>              <span className="bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium">;"
</span>)
              </span>)}
        <div className='mb - 4'>;
          <h4 className='font - semibold text - gray - 900 mb - 2'>Key Features:</h4>;
          <div className='flex flex - wrap gap - 2'>;
        <div className='mb-4'>;
          <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>;
          <div className='flex flex-wrap gap-2'>;
                className="bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded text - xs";"
              </span>))}
        <div className='flex gap-2'>
            onClick={() => setShowDetails(!showDetails)}
            className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'          >        <div className="flex gap-2">;"
            href={`tel:+13024640950`}
              <span className='text - gray - 500 text - xs'>                +{service.features.length - 3} more              <span className="text - gray - 500 text - xs">;"
            on_click={() => setShowDetails (!show_details)}
            className='flex - 1 bg - blue - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - blue - 700 transition - colors'          >        <div className="flex gap - 2">;"
          <a;`;
            href={`tel:+13024640950`}"
            className='bg - green - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - green - 700 transition - colors'          >            className="bg - green - 600 text - white py - 2 px - 4 rounded - lg font - medium hover:bg - green - 700 transition - colors";"
          <div className="mt-6 pt-6 border-t border-gray-200">"
                <h4 className='font-semibold text-gray-900 mb-2'>Benefits:</h4>
                <ul className='list-disc list-inside text-sm text-gray-600 space-y-1'>                  {service.benefits.slice(0, 3).map((benefit, index) => (          <div className="mt-6 pt-6 border-t border-gray-200">"
</ul>"
            <div className="space-y-4">"

                    <li key={index}>{benefit}</li>
                      key={index})"
                      className='bg-green-100 text-green-800 px-2 py-1 rounded text-xs'                    >                  {service.useCases.slice(0, 3).map((useCase, index) => (


                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs""
              <div>;
                <h4 className='font-semibold text-gray-900 mb-2'>Use Cases:</h4>;
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">;"
                      className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs'                    >                  {service.technologies.slice(0, 4).map((tech, index) => (


                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs""
                    </span>;"
              <div className="grid grid-cols-2 gap-4 text-sm">"
                </ul>;
                  <span className='font-medium text-gray-900'>Deployment:</span>
                  <p className='text-gray-600'>{service.deploymentTime}</p>

                <h4 className='font-semibold text-gray-900 mb-2'>;
</h4>
                </h4>;
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">;"
                  <span className="font-medium text-gray-900">Deployment:</span>""
                  <p className="text-gray-600">{service.deploymentTime}</p>"
                  <span className="font-medium text-gray-900">Support:</span>")"
                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
              <div className='grid grid-cols-2 gap-4 text-sm'>;
                  <span className='font-medium text-gray-900'>Deployment:</span>;
                  <p className='text-gray-600'>{service && service.deploymentTime}</p>;
                  <span className='font-medium text-gray-900'>Support:</span>;
                  </p>                </div>                <div>;
                  <span className="font-medium text-gray-900">Deployment:</span>;""
                  <p className="text-gray-600">{service && service.deploymentTime}</p>;"
                  <span className="font-medium text-gray-900">Support:</span>;""
                  <p className="text-gray-600">{service && service.support.slice(0, 2).join(', ')}</p>;
                <div className="flex gap-2 justify-center">"



                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors""
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                  
              <div className='bg-blue-50 rounded-lg p-4 text-center'>;
                <p className='text-sm text-blue-800 mb-2'>;
                <div className='flex gap-2 justify-center'>;
                    className='bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors'>                  Ready to get started with {service && service.title}?;
                <div className="flex gap-2 justify-center">;"
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">;"
                    href={`mailto:kleber@ziontechgroup && ziontechgroup.com?subject=Inquiry about ${service && service.title}`}"
                    className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'>                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors";"
          <div className='mt - 6 pt - 6 border - t border - gray - 200'>;
            <div className='space - y-4'>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>Benefits:</h4>;
                <ul className='list - disc list - inside text - sm text - gray - 600 space - y-1'>                  {service.benefits.slice (0, 3).map ((benefit, index) => (          <div className="mt - 6 pt - 6 border - t border - gray - 200">;"
            <div className="space - y-4">;"
                <h4 className="font - semibold text - gray - 900 mb - 2">Benefits:</h4>;""
                <ul className="list - disc list - inside text - sm text - gray - 600 space - y-1">;"
</ul>)
                    <li key={index}>{benefit}</li>))}
                <h4 className='font - semibold text - gray - 900 mb - 2'>Use Cases:</h4>;
                      className='bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                      className="bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs";"
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                      className='bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.technologies.slice (0, 4).map ((tech, index) => (
                      className="bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs";"
              <div className='grid grid - cols - 2 gap - 4 text - sm'>;
                  <span className='font - medium text - gray - 900'>Deployment:</span>;
                  <p className='text - gray - 600'>{service.deployment_time}</p>;
                  <span className='font - medium text - gray - 900'>Support:</span>;
                  <span className="font - medium text - gray - 900">Deployment:</span>;""
                  <p className="text - gray - 600">{service.deployment_time}</p>;"
                  <span className="font - medium text - gray - 900">Support:</span>;""
                  <p className="text - gray - 600">{service.support.slice (0, 2).join (', ')}</p>;
                <div className='space - y-2'>;
                    <div;
                      key={plan}
                      className='flex justify - between items - center text - sm';
                      <span className='capitalize font - medium'>{plan}</span>;
                      <span className='text - gray - 600'>;
                        {details.price}/{details.period}                      </span>                    <div key={plan} className="flex justify - between items - center text - sm">;"
                      <span className="capitalize font - medium">{plan}</span>;""
                      <span className="text - gray - 600">;"
                    </div>))}
              <div className='bg - blue - 50 rounded - lg p - 4 text - center'>;
                <p className='text - sm text - blue - 800 mb - 2'>;
                <div className='flex gap - 2 justify - center'>;
                    className='bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors'                  >                  Ready to get started with {service.title}?;
                <div className="flex gap - 2 justify - center">;"
                    className="bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors";"
                    href={`mailto:kleber@ziontechgroup.com?subject = Inquiry about ${service.title}`}"
                    className='bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition - colors'                  >                    className="bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition - colors";"
    </div>));"`;