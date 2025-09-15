]

export default function SolutionsPage() {
  return (
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">AI Solutions for Every Industry</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">Explore our flagship platforms.</p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <div className="grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {solutions.map((s) => (
              <div key={s.name} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-x-3 mb-4">
                  <s.icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{s.name}</h3>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}
