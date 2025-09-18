export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Zion Tech Group</h1>
          <p className="mt-4 text-lg text-gray-300">
            We are revolutionizing AI and Technology with cutting-edge solutions for the modern world.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Our Mission</h3>
              <p className="mt-2 text-sm text-gray-300">
                To push the boundaries of artificial intelligence and technology, creating solutions that transform industries and improve lives worldwide.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Our Vision</h3>
              <p className="mt-2 text-sm text-gray-300">
                A future where AI and technology seamlessly integrate with human capabilities, creating unprecedented opportunities for growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
