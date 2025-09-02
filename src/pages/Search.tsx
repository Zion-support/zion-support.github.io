import React, { useState } from 'react'
import { Search as SearchIcon, Filter } from 'lucide-react'
const Search: React.FC = () => {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', query)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Search</h1>
          <p className='text-xl text-gray-600'>Find what you're looking for</p>
        </div>
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>
          <form onSubmit={handleSearch} className='mb-6'>
            <div className='flex'>
              <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search our website...'
                className='flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button
                type='submit'
                className='px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors'
              >
                <SearchIcon className='h-5 w-5' />
              </button>
            </div>
          </form>
          <div className='text-center text-gray-500'>
            <SearchIcon className='h-12 w-12 mx-auto mb-4 text-gray-300' />
            <p>Enter a search term to find relevant content</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search