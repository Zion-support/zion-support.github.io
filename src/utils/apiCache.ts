';'
    // Check if there's a pending request'
      cache.fetch<T>(`${baseUrl}${path}`, {...defaultOptions, ...options, method: 'GET',}),'''
      cache.fetch<T>(`${baseUrl}${path}`, {...defaultOptions, ...options, method: 'DELETE',}),'''