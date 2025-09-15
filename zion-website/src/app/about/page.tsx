        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Zion Tech Group</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">We help organizations accelerate with AI, automation, and secure infrastructure.</p>
        </div>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <v.icon className="h-5 w-5 text-blue-400" />
                  {v.name}
                </dt>
                <dd className="mt-3 text-sm text-gray-300">{v.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
