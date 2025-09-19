import React from 'react';
import { newBlogPosts2026, newServices2026 } from '@/data/newContent2026';
const NewContentShowcase2026: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">,
      <div className="container mx-auto px-4 py-12">,
        {/* Header Section */,}
        <div className="text-center mb-16">,
          <h1 className="text-5xl font-bold text-gray-900 mb-6">,
            Revolutionary Content 2026,
          </h1>,
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">,
            Discover the latest breakthroughs in AI, quantum computing, and autonomous systems that are reshaping the future of technology.,
          </p>,
        </div>,
        {/* Featured Blog Posts */}
        <section className="mb-16">,
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">,
            Latest Blog Posts,
          </h2>,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {newBlogPosts2026.map((post) => (,
              <div key={post.id,} className="bg-white rounded-xl shadow-lg overflow-hidden hover: shadow-xl transition-shadow duration-300">,
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">,
                  <div className="text-white text-4xl font-bold">,
                    {post.title.charAt(0),}
                  </div>,
                </div>,
                <div className="p-6">,
                  <div className="flex items-center mb-3">,
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">,
                      {post.category}
                    </span>,
                    <span className="ml-2 text-gray-500 text-sm">{post.readTime}</span>,
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">,
                    {post.title}
                  </h3>,
                  <p className="text-gray-600 mb-4 line-clamp-3">,
                    {post.excerpt}
                  </p>,
                  <div className="flex items-center justify-between">,
                    <div>,
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>,
                      <p className="text-sm text-gray-500">{post.authorRole}</p>,
                    </div>,
                    <span className="text-sm text-gray-500">{post.publishDate}</span>,
              </div>,
            ))}
          </div>,
        </section>,
        {/* Featured Services */}
            Revolutionary Services,
            {newServices2026.map((service) => (,
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover: shadow-xl transition-shadow duration-300">,
                <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">,
                    {service.title.charAt(0),}
                  <div className="flex items-center justify-between mb-3">,
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">,
                      {service.category}
                    <div className="flex items-center">,
                      <span className="text-yellow-500 text-sm">★</span>,
                      <span className="text-sm text-gray-600 ml-1">{service.reviews.rating}</span>,
                  <h3 className="text-xl font-bold text-gray-900 mb-3">,
                    {service.title}
                    {service.description}
                  <div className="flex items-center justify-between mb-4">,
                    <span className="text-2xl font-bold text-green-600">,
                      {service.currency}{service.price.toLocaleString()}
                    <span className="text-sm text-gray-500">AI Score: {service.aiScore,}</span>,
                  <div className="flex flex-wrap gap-2 mb-4">,
                    {service.tags.slice(0, 3).map((tag) => (,
                      <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">,
                        {tag}
                      </span>,
                    ))}
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors duration-200">,
                    Learn More,
                  </button>,
        {/* Call to Action */,}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">,
          <h2 className="text-3xl font-bold mb-4">,
            Ready to Transform Your Business?,
          <p className="text-xl mb-8 opacity-90">,
            Join thousands of companies already using our revolutionary AI solutions to achieve unprecedented growth and efficiency.,
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">,
              Get Started Today,
            </button>,
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">,
              Schedule Demo,
      </div>,
    </div>,
  ),};
export default NewContentShowcase2026;
}))