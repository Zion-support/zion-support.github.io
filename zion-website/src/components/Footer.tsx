<<<<<<< HEAD
import React from 'react'

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> 6b23b02814abc4e2b48cf43d809846f0fbf77db0
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
<<<<<<< HEAD
>>>>>>> 8431d4330936f866c5677d40e9bd7fbc17755535
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> cursor/create-and-deploy-new-content-2def
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-8472
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-3afb
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8431d4330936f866c5677d40e9bd7fbc17755535
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> cursor/create-and-deploy-new-content-2def
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> 6b23b02814abc4e2b48cf43d809846f0fbf77db0
=======
=======
>>>>>>> 17fc7cb9c7c9c1144afdca822c756f504221b8d0
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
const navigation = {
	main: [
		{ name: 'About', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'Solutions', href: '/solutions' },
		{ name: 'Research', href: '/research' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Privacy', href: '/privacy' },
		{ name: 'Terms', href: '/terms' },
	],
}
<<<<<<< HEAD

export default function Footer() {
	return (
		<footer className="bg-gray-900 border-t border-white/10">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					{navigation.main.map((item) => (
						<a key={item.name} href={item.href} className="text-base text-gray-300 hover:text-white transition-colors duration-200">
							{item.name}
						</a>
					))}
				</div>
				<div className="mt-12 border-t border-gray-800 pt-8">
					<p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-dc9e
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-2def
=======
>>>>>>> 6b23b02814abc4e2b48cf43d809846f0fbf77db0
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-634d
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa

<<<<<<< HEAD
=======
>>>>>>> 401f3529ced7 (Refactor: Clean up navigation and page components)
>>>>>>> 627246f4d0776175de27a395be76886274bd0c6a
>>>>>>> cursor/create-and-deploy-new-content-8472
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
=======
<<<<<<< HEAD
>>>>>>> 7ef5dc338d47c97be3767ff413cd3dbb4ee379e3
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-3afb
>>>>>>> 8431d4330936f866c5677d40e9bd7fbc17755535
=======
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-81d0
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-3afb
>>>>>>> cursor/create-and-deploy-new-content-dc9e
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-2def
=======
>>>>>>> 6b23b02814abc4e2b48cf43d809846f0fbf77db0
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-3afb
=======
>>>>>>> cursor/create-and-deploy-new-content-81d0
>>>>>>> cursor/create-and-deploy-new-content-634d
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-400">
          &copy; 2025 Zion Tech Group. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
>>>>>>> origin/cursor/create-and-deploy-new-content-62f5
