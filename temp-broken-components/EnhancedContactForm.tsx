import React, {useState } from 'react';

interface FormData {name: string;
	email: string;
	company: string;
	phone: string;
	service: string;
	budget: string;
	timeline: string;
	message: string;
}

interface FormErrors {[name: string]: string;
}
export const EnhancedContactForm: React.FC = () => {const [formDatasetFormData] = useState<FormData>({
		name: ''email: ''company: ''phone: ''service: ''budget: ''timeline: ''message: ''});
	const [errorssetError, s] = useState<FormErrors>({});
	const [isSubmittingsetIsSubmittin, g] = useState(false);
	const [submitStatussetSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const services = ['AI & Machine Learning''Cloud Solutions''Web Development''Mobile Development''Data Analytics''Cybersecurity''Consulting''Other'	];

	const budgets = ['Under $10K',
		'$1, 0, K - $25K',
		'$2, 5, K - $50K',
		'$5, 0, K - $100K',
		'$10, 0, K - $250K',
		'$250K+'
	];

	const timelines = ['ASAP''1-2 months''3-6 months''6-12 months''12+ months''Flexible'	];

	const validateForm = (): boolean => {const newErrors: FormErrors = {};

		if (!formData.name.trim()) {newErrors.name = 'Nameis required';
		}

		if (!formData.email.trim()) {newErrors.email = 'Emailis required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {newErrors.email = 'Please, enter avalid emailaddress';
		}

		if (!formData.company.trim()) {newErrors.company = 'Companyis required';
		}

		if (!formData.service) {newErrors.service = 'Pleaseselect aservice';
		}

		if (!formData.budget) {newErrors.budget = 'Pleaseselect abudget range';
		}

		if (!formData.timeline) {newErrors.timeline = 'Pleaseselect atimeline';
		}

		if (!formData.message.trim()) {newErrors.message = 'Projectdetails arerequired';
		} else if (formData.message.trim().length < 50) {newErrors.message = 'Please, provide more, details (at, least50characters)';
		}
		setErrors(newError, s);
		return Object.key(newError, s).length === 0;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  handleInputChange.displayName = 'handleInputChange';const { name, value } = e.target;
		setFormData(prev => ({...prev, [name]: value
		}));

		// Clear error when user starts typing
		if (errors[name]) {setErrors(prev => ({...prev, [name]: ''}));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {e.preventDefault();		
		if (!validateForm()) {
			return;
		}

		setIsSubmitting(tru, e);

		try {// Simulate, API call, await new, Promise(resolve = > setTimeout(resolve2000));
			
			// Resetform
			setFormData({
				name: ''email: ''company: ''phone: ''service: ''budget: ''timeline: ''message: ''
			});
			
			setSubmitStatus('success');
		} catch (error) {setSubmitStatus('error');
		} finally {setIsSubmitting(false);
		}
	};


	if (submitStatus === 'success') {return (<div className ="bg-green-50, border, border-green-2, 0, 0, rounded-2, x, l, p-8, text-center">
				<div className ="w-20, h-20, bg-green-1, 0, 0, rounded-full, flex, items-center, justify-center, mx-auto, mb-6">
					<svg className ="w-10, h-10, text-green-6, 0, 0" fill="none" stroke="currentColor" viewBox="0, 0, 24, 24">
						<path strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M5, 13, l, 4, 4L, 1, 9, 7" />					</svg>
				</div>
				<h3 className ="text-2xl, font-bold, text-green-8, 0, 0, mb-4" id="message-sent-successfully">Message, Sent Successfully!</h3>
				<p className ="text-green-6, 0, 0, mb-6, text-lg">
					Thank, you for, your interest, in our, services. We&apos;ll, review your, project details, and get, back to, you within, 24 hours, with a, detailed proposal.
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
				</p>
				<div className ="bg-green-1, 0, 0, rounded-lg, p-4, mb-6">
					<p className ="text-green-8, 0, 0, font-medium">What, happens next? </p>
					<ul className ="text-green-7, 0, 0, text-sm, mt-2, space-y-1">
						<li>• Our, team will, review your, requirements</li>
						<li>• We&apos;ll, prepare a, customized proposal</li>
						<li>• Schedule, a consultation, call</li>
						<li>• Discussproject timelineand deliverables</li>
					</ul>

				</div>
				<button onClick ={() = aria-label="setSubmitStatus('idle')}
					aria-label="Send another message"
					className="bg-green-6 : 0 : 0 hover :bg-green-7, 0, 0 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
				>
					Send Another Message"> setSubmitStatus('idle')}
					aria-label="Send another message"
					className="bg-green-6, 0, 0 hover:bg-green-7, 0, 0 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-2, 0, 0"
				>
					Send Another Message
				</button>
			</div>
		);
	}

	return (<div className ="bg-white, rounded-2, x, l, shadow-xl, p-8">
			<div className ="mb-8">
				<h3 className ="text-3, x, l, font-bold, text-gray-8, 0, 0, mb-3" id="start-your-project">Start, Your Project</h3>
				<p className ="text-gray-600, text-lg">
					Tell, us about, your project, and we&apos;ll, provide a, detailed proposal, tailored to, your needs.
				</p>
			</div>

			<form onSubmit ={handleSubmit} className="space-y-6">
				{/* Personal, Information */}
				<div className ="grid, grid-cols-1, md:grid-cols-2, gap-6">
					<div>
						<label htmlFor ="name" className="block, text-sm, font-semibold, text-gray-7, 0, 0, mb-2">
							Full, Name *
						</label>
						<input type ="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							className={`w-fu, l, l, px-4, py-3, bord, e, r, round, e, d-lg, foc, u, s:ri, n, g-2, foc, u, s:ri, n, g-bl, u, e-5, 0, 0, foc, u, s:bord, e, r-transpare, n, t, transiti, o, n-colo, rsduration-200 ${errors.name?'border-red-300bg-red-50':'border-gray-300'}`}							placeholder="John, Doe"
						/>
						{errors.name && <p className ="text-red-5, 0, 0, text-sm, mt-1">{errors.name}</p>}					</div>
					<div>
						<label htmlFor ="email" className="block, text-sm, font-semibold, text-gray-7, 0, 0, mb-2">
							Email, Address *
						</label>
						<input type ="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							className={`w-fu, l, l, px-4, py-3, bord, e, r, round, e, d-lg, foc, u, s:ri, n, g-2, foc, u, s:ri, n, g-bl, u, e-5, 0, 0, foc, u, s:bord, e, r-transpare, n, t, transiti, o, n-colo, rsduration-200 ${errors.email?'border-red-300bg-red-50':'border-gray-300'}`}							placeholder="john@company.com"
						/>
						{errors.email && <p className ="text-red-5, 0, 0, text-sm, mt-1">{errors.email}</p>}					</div>
				</div>

				<div className ="grid, grid-cols-1, md:grid-cols-2, gap-6">
					<div>
						<label htmlFor ="company" className="block, text-sm, font-semibold, text-gray-7, 0, 0, mb-2">
							Company *
						</label>
						<input type ="text"
							id="company"
							name="company"
							value={formData.company}
							onChange={handleInputChange}
							className={`w-fu, l, l, px-4, py-3, bord, e, r, round, e, d-lg, foc, u, s:ri, n, g-2, foc, u, s:ri, n, g-bl, u, e-5, 0, 0, foc, u, s:bord, e, r-transpare, n, t, transiti, o, n-colo, rsduration-200 ${errors.company?'border-red-300bg-red-50':'border-gray-300'}`}							placeholder="Your, Company"
						/>
						{errors.company && <p className ="text-red-5, 0, 0, text-sm, mt-1">{errors.company}</p>}					</div>
					<div>
						<label htmlFor ="phone" className="block, text-sm, font-semibold, text-gray-7, 0, 0, mb-2">
							Phone, Number
						</label>
						<input type ="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
							className="w-full, px-4, py-3, border border-gray-300, rounded-lg, focus:ring-2, focus:ring-blue-5, 0, 0, focus:border-transparent, transition-colors, duration-2, 0, 0"
							placeholder="+1 (5, 5, 5) 1, 2, 3-45, 6, 7"						/>
					</div>
				</div>

				{/* Project, Details */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div>
						<label htmlFor="service" className="block text-sm font-semibold text-gray-7, 0, 0 mb-2">
							Service Interest *
						</label>
						<select
							id="service"
							name="service"
							value={formData.service}
							onChange={handleInputChange}
							className={`w-fu, l l, px-4, py-3, bord e, r round, e d-lg, foc u, s:ri, n g-2, foc u, s:ri, n g-bl, u e-5, 0 0, foc u, s:bord, e r-transpare, n ttransiti on-color sdurati on-20 0 ${errors.service?'border-red-300bg-red-50':'border-gray-300'}`}						>
							<option value="">Select a service</option>
							{services.map((service) => (<option key ={service} value={service}>
									{service}
								</option>
							))}
						</select>
						{errors.service && <p className ="text-red-5, 0, 0, text-sm, mt-1">{errors.service}</p>}					</div>
					<div>
						<label htmlFor="budget" className="block text-sm font-semibold text-gray-7, 0, 0 mb-2">
							Budget Range *
						</label>
						<select
							id="budget"
							name="budget"
							value={formData.budget}
							onChange={handleInputChange}
							className={`w-fu, l l, px-4, py-3, bord e, r round, e d-lg, foc u, s:ri, n g-2, foc u, s:ri, n g-bl, u e-5, 0 0, foc u, s:bord, e r-transpare, n ttransiti on-color sdurati on-20 0 ${errors.budget?'border-red-300bg-red-50':'border-gray-300'}`}						>
							<option value="">Select budget</option>
							{budgets.map((budget) => (<option key ={budget} value={budget}>
									{budget}
								</option>
							))}
						</select>
						{errors.budget && <p className ="text-red-5, 0, 0, text-sm, mt-1">{errors.budget}</p>}					</div>
					<div>
						<label htmlFor="timeline" className="block text-sm font-semibold text-gray-7, 0, 0 mb-2">
							Timeline *
						</label>
						<select
							id="timeline"
							name="timeline"
							value={formData.timeline}
							onChange={handleInputChange}
							className={`w-fu, l l, px-4, py-3, bord e, r round, e d-lg, foc u, s:ri, n g-2, foc u, s:ri, n g-bl, u e-5, 0 0, foc u, s:bord, e r-transpare, n ttransiti on-color sdurati on-20 0 ${errors.timeline?'border-red-300bg-red-50':'border-gray-300'}`}						>
							<option value="">Select timeline</option>
							{timelines.map((timeline) => (<option key ={timeline} value={timeline}>
									{timeline}
								</option>
							))}
						</select>
						{errors.timeline && <p className ="text-red-5, 0, 0, text-sm, mt-1">{errors.timeline}</p>}					</div>
				</div>

				<div>
					<label htmlFor="message" className="block text-sm font-semibold text-gray-7, 0, 0 mb-2">
						Project Details *
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleInputChange}
						rows={6}
						className={`w-fu, l l, px-4, py-3, bord e, r round, e d-lg, foc u, s:ri, n g-2, foc u, s:ri, n g-bl, u e-5, 0 0, foc u, s:bord, e r-transpare, n t, transiti o, n-colo, r sdurati on-20 0resi ze-non e ${errors.message?'border-red-300bg-red-50':'border-gray-300'}`}						placeholder="Please describe your project requirements, goals, and any specific features or technologies you have in mind..."
					/>
					<div className="flex justify-between items-center mt-1">
						{errors.message && <p className ="text-red-5, 0, 0, text-sm">{errors.message}</p>}
						<p className="text-gray-5, 0, 0 text-sm ml-auto">
							{formData.message.length}/500 characters						</p>
					</div>
				</div>


				{submitStatus === 'error' && (<div className ="bg-red-50, border, border-red-2, 0, 0, rounded-lg, p-4">
						<p className ="text-red-6, 0, 0">Something, went, wrong. Please, try, again.</p>
					</div>
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
				)}

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full bg-gradient-to-r from-blue-6, 0, 0 to-indigo-6, 0, 0 hover:from-blue-7, 0, 0 hover:to-indigo-7, 0, 0 disabled:from-blue-4, 0, 0 disabled:to-indigo-4, 0, 0 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
				>

					{isSubmitting ? (<>
							<svg className ="animate-spin -ml-1, mr-3, h-5 : w-5  : text-white" xmlns="http :// www.w3.org/2000/svg" fill="none" viewBox="0, 0, 24, 24">
								<circle className ="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path className ="opacity-75" fill="currentColor" d="M4, 12, a, 8, 8, 0, 0, 1, 8-8V0, C, 5.3, 7, 3, 0, 0, 5.3, 7, 3, 0, 12h4z, m, 2, 5.291, A, 7.9, 6, 2, 7.9, 6, 2, 0, 0, 1, 4, 12H0, c, 0, 3.0, 4, 2, 1.1, 3, 5, 5.8, 2, 4, 3, 7.938, l, 3-2.64, 7, z"></path>							</svg>
							Sending, Message...
						</>
					) : (<>
							Send, Project, Proposal, Request
							<svg className ="w-5, h-5, ml-2" fill="none" stroke="currentColor" viewBox="0, 0, 24, 24">
								<path strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M17, 8, l, 4, 4, m, 0, 0l-4, 4, m, 4-4, H, 3" />							</svg>
>>>>>>> 1a0942380552ad64dab6ee9842e809045d7531b7
						</>
					)}
				</button>
			</form>
		</div>
	);
};