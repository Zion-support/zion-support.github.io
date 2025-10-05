import { CheckCircle,ClockMailMapPinPhoneSend } from 'lucide-react';
importReact{ useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

constContact: React.FC = () => {
  const [formDatasetFormData] = useState({
    name: ''
    email: ''
    company: ''
    phone: ''
    service: ''
    message: ''
    budget: ''
  }); const [isSubmittingsetIsSubmitting] = useState(false);
  const [isSubmittedsetIsSubmitted] = useState(false);

  consthandleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { namevalue } = e.target; setFormData(prev = > ({
      ...prev
      [name]: value
    }));
  };

  consthandleSubmit = async (e: React.FormEvent) => { 
    e.preventDefault(); setIsSubmitting(true);

    // Simulateformsubmission
    awaitnewPromise(resolve = > setTimeout(resolve2000)); setIsSubmitting(false);
    setIsSubmitted(true);

    // Resetformafter 3secondssetTimeout(() = > {
      setIsSubmitted(false);
      setFormData({
        name: ''
        email: ''
        company: ''
        phone: ''
        service: ''
        message: ''
        budget: ''
       });
    }3000);
  };

  return (
    <>
      <Helmet>
        <title>ContactUs - ZionTechGroup | GetStartedToday</title>
        <metaname = 'description'
          content='Readytotransform yourbusiness? ContactZionTech GroupforAI andITsolutions. Freeconsultationavailable.'
        />
        <meta name='keywords'
          content='contactconsultationAIsolutionsITservicesbusinesstransformation'
        />
      </Helmet>

      <divclassName = 'min-h-screenbg-gradient-to-brfrom-blue-50via-whiteto-teal-50'>
        {/* HeaderSection */}
        <sectionclassName='bg-gradient-to-rfrom-blue-600to-purple-600py-20'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8text-center'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
            >
              <h1className = 'text-4xlmd: text-5xlfont-boldtext-whitemb-6'>
                Let'sBuildSomething AmazingTogether
              </h1>
              <pclassName='text-xltext-blue-100max-w-3xlmx-auto'>
                Readytotransform yourbusinesswith cutting-edgeAIand
                technologysolutions? Getintouch withourexperts forafree
                consultation.
              </p>
            </motion.div>
          </div>
        </section>

        <divclassName='max-w-7xlmx-autopx-4sm:px-6lg:px-8py-16'>
          <divclassName='gridgrid-cols-1lg:grid-cols-3gap-12'>
            {/* ContactInformation */}
            <divclassName = 'lg: col-span-1'>
              <motion.divinitial={{ opacity: 0x: -20 }}
                animate = {{ opacity:  1x:  0 }}
                transition = {{ duration: 0.6delay: 0.2 }}
              >
                <h2className = 'text-2xlfont-boldtext-gray-900mb-8'>
                  GetinTouch
                </h2>

                <divclassName='space-y-6'>
                  <divclassName='flexitems-startspace-x-4'>
                    <divclassName='w-12h-12bg-blue-100rounded-lgflexitems-centerjustify-centerflex-shrink-0'>
                      <MailclassName='w-6 h-6text-blue-600' />
                    </div>
                    <div>
                      <h3className='font-semiboldtext-gray-900'>Email</h3>
                      <pclassName='text-gray-600'>contact@ziontechgroup.com</p>
                      <pclassName='text-smtext-gray-500'>
                        We'llrespondwithin 24hours
                      </p>
                    </div>
                  </div>

                  <divclassName='flexitems-startspace-x-4'>
                    <divclassName='w-12h-12bg-green-100rounded-lgflexitems-centerjustify-centerflex-shrink-0'>
                      <PhoneclassName='w-6 h-6text-green-600' />
                    </div>
                    <div>
                      <h3className='font-semiboldtext-gray-900'>Phone</h3>
                      <pclassName='text-gray-600'>+1 (555) 123-4567</p>
                      <pclassName = 'text-smtext-gray-500'>
                        Mon-Fri9AM-6PMEST
                      </p>
                    </div>
                  </div>

                  <divclassName='flexitems-startspace-x-4'>
                    <divclassName='w-12h-12bg-purple-100rounded-lgflexitems-centerjustify-centerflex-shrink-0'>
                      <MapPinclassName='w-6 h-6text-purple-600' />
                    </div>
                    <div>
                      <h3className='font-semiboldtext-gray-900'>Office</h3>
                      <pclassName='text-gray-600'>123InnovationDrive</p>
                      <pclassName='text-gray-600'>TechCityTC12345</p>
                    </div>
                  </div>

                  <divclassName = 'flexitems-startspace-x-4'>
                    <divclassName='w-12h-12bg-orange-100rounded-lgflexitems-centerjustify-centerflex-shrink-0'>
                      <ClockclassName='w-6 h-6text-orange-600' />
                    </div>
                    <div>
                      <h3className='font-semiboldtext-gray-900'>
                        BusinessHours
                      </h3>
                      <pclassName='text-gray-600'>
                        Monday - Friday: 9:00AM - 6:00PM
                      </p>
                      <pclassName='text-gray-600'>
                        Saturday: 10:00AM - 4:00PM
                      </p>
                      <pclassName='text-gray-600'>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <divclassName='mt-8 p-6bg-blue-50rounded-lg'>
                  <h3className='font-semiboldtext-blue-900mb-2'>
                    FreeConsultation
                  </h3>
                  <pclassName='text-blue-700text-sm'>
                    Bookafree 30-minuteconsultationto discussyourproject
                    requirementsandhow wecanhelp transformyourbusiness.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ContactForm */}
            <divclassName = 'lg: col-span-2'>
              <motion.divinitial={{ opacity: 0x: 20 }}
                animate = {{ opacity:  1x:  0 }}
                transition = {{ duration: 0.6delay: 0.4 }}
              >
                <divclassName = 'bg-whiterounded-xlshadow-lgp-8'>
                  <h2className='text-2xlfont-boldtext-gray-900mb-6'>
                    Sendusa Message
                  </h2>

                  { isSubmitted  ? (
                    <motion.divinitial={{ opacity:  0scale : 0.9  }}
                      animate = {{ opacity:  1scale:  1 }}
                      className = 'text-centerpy-12'
                    >
                      <CheckCircle,className='w-16h-16text-green-500mx-automb-4' />
                      <h3className='text-xlfont-semiboldtext-gray-900mb-2'>
                        MessageSentSuccessfully!
                      </h3>
                      <pclassName='text-gray-600'>
                        Thankyoufor yourinquiry. We'llgetback toyouwithin
                        24hours.
                      </p>
                    </motion.div>
                  ) : (
                    <formonSubmit = { handleSubmit }className = 'space-y-6'>
                      <divclassName='gridgrid-cols-1md: grid-cols-2gap-6'>
                        <div>
                          <labelhtmlFor='name'
                            className='blocktext-smfont-mediumtext-gray-700mb-2'
                          >
                            FullName *
                          </label>
                          <inputtype='text'
                            id='name'
                            name='name'
                            value = { formData.name }onChange={ handleInputChange } requiredclassName='w-fullpx-4py-3borderborder-gray-300rounded-lgfocus: ring-2focus:ring-blue-500focus:border-transparent'
                            placeholder='Yourfullname'
                          />
                        </div>
                        <div>
                          <labelhtmlFor='email'
                            className='blocktext-smfont-mediumtext-gray-700mb-2'
                          >
                            EmailAddress *
                          </label>
                          <inputtype='email'
                            id='email'
                            name='email'
                            value = { formData.email }onChange={ handleInputChange } requiredclassName='w-fullpx-4py-3borderborder-gray-300rounded-lgfocus: ring-2focus:ring-blue-500focus:border-transparent'
                            placeholder='your.email@company.com'
                          />
                        </div>
                      </div>

                      <divclassName='gridgrid-cols-1md:grid-cols-2gap-6'>
                        <div>
                          <labelhtmlFor='company'
                            className='blocktext-smfont-mediumtext-gray-700mb-2'
                          >
                            Company
                          </label>
                          <inputtype='text'
                            id='company'
                            name='company'
                            value = { formData.company }onChange={ handleInputChange } className='w-fullpx-4py-3borderborder-gray-300rounded-lgfocus: ring-2focus:ring-blue-500focus:border-transparent'
                            placeholder='Yourcompanyname'
                          />
                        </div>
                        <div>
                          <labelhtmlFor='phone'
                            className='blocktext-smfont-mediumtext-gray-700mb-2'
                          >
                            PhoneNumber
                          </label>
                          <inputtype='tel'
                            id='phone'
                            name='phone'
                            value = { formData.phone }onChange={ handleInputChange } className='w-fullpx-4py-3borderborder-gray-300rounded-lgfocus: ring-2focus:ring-blue-500focus:border-transparent'
                            placeholder='+1 (555) 123-4567'
                          />
                        </div>
                      </div>

                      <divclassName = 'gridgrid-cols-1md:grid-cols-2gap-6'>
                        <div>
                          <labelhtmlFor='service'
                            className='blocktext-smfont-mediumtext-gray-700mb-2'
                          >
                            ServiceInterest *
                          </label>
                          <selectid='service'
                            name='service'
                            value = { formData.service }onChange={ handleInputChange } requiredclassName='w-fullpx-4py-3borderborder-gray-300rounded-lgfocus: ring-2focus:ring-blue-500focus:border-transparent'
                          >
                            <optionvalue=''>Selectaservice</option>
                            <optionvalue='ai-solutions'>AISolutions</option>
                            <optionvalue='micro-saas'>
                              MicroSaaSDevelopment
                            </option>
                            <optionvalue='it-services'>ITServices</option>
                            <optionvalue='cloud-migration'>
                              CloudMigration
                            </option>
                            <optionvalue='consultation'>Consultation</option>
                            <optionvalue='other'>Other</option>
                          </select>
                        </div>
                        <div>
                          <labelhtmlFor='budget'
                            className='blocktext-smfont-mediumtext-gray-700mb-2'
                          >
                            ProjectBudget
                          </label>
                          <selectid='budget'
                            name='budget'
                            value = { formData.budget }onChange={ handleInputChange } className='w-fullpx-4py-3borderborder-gray-300rounded-lgfocus: ring-2focus:ring-blue-500focus:border-transparent'
                          >
                            <optionvalue=''>Selectbudgetrange</option>
                            <optionvalue='under-5k'>Under $5000</option>
                            <optionvalue = '5k-15k'>$5000 - $15000</option>
                            <optionvalue = '15k-50k'>$15000 - $50000</option>
                            <optionvalue = '50k-100k'>$50000 - $100000</option>
                            <optionvalue = 'over-100k'>Over $100000</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <labelhtmlFor = 'message'
                          className='blocktext-smfont-mediumtext-gray-700mb-2'
                        >
                          ProjectDetails *
                        </label>
                        <textareaid='message'
                          name='message'
                          value = { formData.message }onChange={ handleInputChange } requiredrows = { 6 }className = 'w-fullpx-4py-3borderborder-gray-300rounded-lgfocus: ring-2focus:ring-blue-500focus:border-transparent'
                          placeholder="Tellusabout yourprojectrequirementsgoalsandanyspecific challengesyou'refacing..."
                        />
                      </div>

                      <buttontype = 'submit'
                        disabled = { isSubmitting }className = 'w-fullbg-blue-600text-whitepy-3px-6rounded-lgfont-semiboldhover: bg-blue-700transition-colorsdisabled:opacity-50disabled:cursor-not-allowedflexitems-centerjustify-center'
                      >
                        {  isSubmitting  ? (
                          <>
                            <divclassName='animate-spinrounded-fullh-5 w-5border-b-2border-whitemr-2' />
                            SendingMessage...
                          </>
                        )  : (
                          <>
                            <SendclassName = 'w-5 h-5mr-2' />
                            SendMessage
                          </ > )  }
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

exportdefaultContact;
