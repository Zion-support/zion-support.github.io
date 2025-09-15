import React from 'react'
import { LightBulbIcon, CpuChipIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const areas = [
	{ name: 'Foundation Models', description: 'Training and adapting multi-modal models for enterprise tasks.', icon: LightBulbIcon },
	{ name: 'Systems & Optimization', description: 'Inference acceleration, scheduling, and cost/performance trade-offs.', icon: CpuChipIcon },
	{ name: 'Applied Science', description: 'Safety, robustness, and domain-specific evaluation methods.', icon: AcademicCapIcon },
]

export default function ResearchPage() {
	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-7xl px-6 pt-24">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Research</h1>
					<p className="mt-4 text-lg leading-8 text-gray-300">Advancing the state of the art in practical AI systems.</p>
				</div>
				<div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
					<dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
						{areas.map((area) => (
							<div key={area.name} className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
									<area.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
									{area.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
									<p className="flex-auto">{area.description}</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
<<<<<<< HEAD
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
}
>>>>>>> cursor/create-and-deploy-new-content-f175
>>>>>>> cursor/create-and-deploy-new-content-7857
=======
}
>>>>>>> origin/cursor/create-and-deploy-new-content-7e3a
