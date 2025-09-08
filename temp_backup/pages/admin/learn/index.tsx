import React, { useState } from 'react'
import Head from 'next/head'
const AdminLearnPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('')
  const categories = [
    'AI Development',
    'Freelancing', 
    'Remote Hiring',
    'Cloud Architecture',
    'Web Development',
    'Mobile Development',
    'DevOps',
    'Data Science'
  ]
  const levels = ['Beginner', 'Intermediate', 'Advanced']
  return (
    <>
      <Head>
        <title>Admin Learning Center - Zion Tech Group</title>
        <meta name="description" content="Admin learning resources and training materials" />
      </Head>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Learning Center</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Filter Resources</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">All Levels</option>
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Learning Resources</h2>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">Getting Started with AI Development</h3>
                  <p className="text-gray-600 mb-2">Learn the fundamentals of AI development and machine learning.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">AI Development</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Beginner</span>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">Advanced Cloud Architecture</h3>
                  <p className="text-gray-600 mb-2">Master cloud architecture patterns and best practices.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Cloud Architecture</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Advanced</span>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">Remote Team Management</h3>
                  <p className="text-gray-600 mb-2">Best practices for managing remote development teams.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm">Remote Hiring</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default AdminLearnPage