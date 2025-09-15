
export const metadata = { title: 'Contact | Zion Tech Group' }

export default function ContactPage() {
	return (
		<main className="bg-black min-h-screen pt-28">
			<div className="mx-auto max-w-3xl px-6">
				<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact</h1>
				<p className="mt-4 text-lg text-gray-300">Reach out to learn how we can help your organization.</p>
				<div className="mt-8">
					<a href="mailto:hello@example.com" className="text-blue-400 hover:text-blue-300 font-semibold">
						hello@example.com
					</a>
				</div>
			</div>
		</main>
	)
}
