    const serviceTitle = 'title' in service ? service.title : service.name;
    const matchesSearch = serviceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ('tags' in service && service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
                        {typeof service.price === 'number' ? formatPrice(service.price, 'currency' in service ? (service.currency as string) : '$') : 
                         'price' in service && typeof service.price === 'object' ? 
                         `$${service.price.monthly || service.price.yearly || service.price.oneTime}` : '$99'}
                      </div>
                      <div className="text-gray-400 text-sm">per {'pricingModel' in service ? service.pricingModel : 'month'}
                      </div>
                  {'tags' in service && service.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {service.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                          +{service.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Support Level */}
                  {'supportLevel' in service && (
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">Support Level:</span>
                      <span className={`px-2 py-1 text-xs text-white rounded ${getSupportLevelColor(service.supportLevel)}`}>
                        {service.supportLevel}
                      </span>
                    </div>
                  )}
                      {getServiceProperty(service, 'estimatedDelivery', 'Custom')}
                      {'estimatedDelivery' in service ? service.estimatedDelivery : '2-4 weeks'}
