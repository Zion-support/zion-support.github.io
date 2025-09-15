export default function Footer() {
  const links = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' },
  ]
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {links.map((l) => (
          <a key={l.name} href={l.href} className="text-sm text-gray-400 hover:text-blue-400">
            {l.name}
          </a>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Zion Tech Group</p>
    </footer>
  )
}

