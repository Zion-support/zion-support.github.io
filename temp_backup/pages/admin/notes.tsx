import React, { useState, useEffect } from 'react'
import Head from 'next/head'
interface Note {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  updatedAt: string
  tags: string[]
  isPrivate: boolean
}

const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Project Alpha Status Update',
    content: 'The Alpha project is progressing well. We have completed 75% of the planned features and are on track for the Q1 release.',
    author: 'John Doe',
    createdAt: '2025-01-15T09:00:00Z',
    updatedAt: '2025-01-15T09:00:00Z',
    tags: ['project', 'alpha', 'status'],
    isPrivate: false
  },
  {
    id: '2',
    title: 'Security Audit Findings',
    content: 'Critical security vulnerabilities found in the authentication system. Immediate action required.',
    author: 'Jane Smith',
    createdAt: '2025-01-15T10:30:00Z',
    updatedAt: '2025-01-15T10:30:00Z',
    tags: ['security', 'audit', 'critical'],
    isPrivate: true
  },
  {
    id: '3',
    title: 'Team Meeting Notes',
    content: 'Discussed upcoming features and resource allocation. Need to hire 2 additional developers.',
    author: 'Mike Johnson',
    createdAt: '2025-01-15T14:00:00Z',
    updatedAt: '2025-01-15T14:00:00Z',
    tags: ['meeting', 'team', 'hiring'],
    isPrivate: false
  }
]
const AdminNotesPage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTag, setFilterTag] = useState('')
  const [showPrivate, setShowPrivate] = useState(false)
  const [isAdmin, setIsAdmin] = useState(true)
  useEffect(() => {

        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search notes..."
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Filter by Tag</label>
              <select
                value={filterTag}
                onChange={(e) => setFilterTag(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showPrivate}
                  onChange={(e) => setShowPrivate(e.target.checked)}
                  className="mr-2"
                />
                <span>Show Private Notes</span>
              </label>
            </div>
          </div>
        </div>

        {/* Notes List */}
        {loading ? (
          <div className="text-center py-8">Loading notes...</div>
        ) : filteredNotes.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No notes found matching your criteria.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredNotes.map((note) => (
              <div key={note.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{note.title}</h3>
                  <div className="flex items-center gap-2">
                    {note.isPrivate && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                        Private
                      </span>
                    )}
                    <span className="text-sm text-gray-500">
                      {new Date(note.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{note.content}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs cursor-pointer hover:bg-blue-200"
                        onClick={() => setFilterTag(tag)}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    By {note.author}
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm">
                    Delete
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm">
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );

