<<<<<<< HEAD
export default function Footer() {,
  return (,
        </div>,
      </div>,
    </footer>,
  ),
=======
export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold leading-6 text-white">Zion Tech Group</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Revolutionizing AI and Technology with cutting-edge solutions for the modern world.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
            <ul className="mt-6 space-y-4">
              <li><a href="/research" className="text-sm leading-6 text-gray-300 hover:text-white">Research</a></li>
              <li><a href="/news" className="text-sm leading-6 text-gray-300 hover:text-white">News</a></li>
              <li><a href="/blog" className="text-sm leading-6 text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="/updates" className="text-sm leading-6 text-gray-300 hover:text-white">Updates</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
            <ul className="mt-6 space-y-4">
              <li><a href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">About</a></li>
              <li><a href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
}