import React, { useState } from 'react'
import { SEO } from '@/components/SEO'

const SearchPage: React.FC = () => {
	const [query, setQuery] = useState('')
	return (
		<div className="min-h-screen bg-slate-950 text-white py-16">
			<SEO title="Search" description="Search Zion Tech Group content and services." />
			<div className="container mx-auto max-w-3xl px-6">
				<h1 className="text-3xl font-bold mb-6">Search</h1>
				<input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search..."
					className="w-full rounded-md bg-slate-900 border border-slate-700 px-4 py-2 outline-none focus:ring-2 focus:ring-sky-600"
				/>
			</div>
		</div>
	)
}

export default SearchPage