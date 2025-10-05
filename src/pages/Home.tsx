import { CheckCircle, } from 'lucide-react';
import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
constHome: React.FC = () => { 
  return (
    <>
      <Helmet>
        <title>
          ZionTechGroup - LeadingAI & ITSolutions | TransformYourBusiness
        </title>
        <metaname = 'description'
          content='ZionTechGroup deliverscutting-edgeAIand ITsolutionsthat transformbusinesses. Expertconsultingservices withprovenresults.'
        />
        <meta name='keywords'
          content='AIsolutionsITconsultingcybersecuritymachinelearningcloudinfrastructuredigitaltransformation'
        />
      </Helmet>

      <divclassName = 'min-h-screenbg-gradient-to-brfrom-blue-50via-whiteto-teal-50' > {/* HeroSection */ }
        <sectionclassName='relativebg-gradient-to-brfrom-blue-50to-indigo-100py-20'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <divclassName='text-center'>
              <divclassName='inline-flexitems-centerpx-6py-3rounded-fullbg-blue-100text-blue-800text-smfont-mediummb-8'>
                <spanclassName='w-4 h-4mr-2'>✨</span>
                Trustedby500+ companiesworldwide
                <spanclassName='w-4 h-4ml-2'>🚀</span>
              </div>
              <h1className='text-4xlmd:text-6xlfont-boldtext-gray-900mb-6'>
                LeadingAI & TechnologySolutions
              </h1>
              <pclassName='text-xltext-gray-600mb-8max-w-3xlmx-auto'>
                Transformyourbusiness withcutting-edgeAImicro SaaSandenterprise ITsolutions. Buildfasterscalesmarterandachieveunprecedented results.
              </p>
              <divclassName = 'flexflex-colsm: flex-rowgap-4justify-center'>
                <Linkto='/services'
                  className='bg-blue-600text-whitepx-8py-3rounded-lgfont-semiboldhover:bg-blue-700transition-colors'
                >
                  ExploreServices
                </Link>
                <Linkto='/contact'
                  className='borderborder-blue-600text-blue-600px-8py-3rounded-lgfont-semiboldhover:bg-blue-50transition-colors'
                >
                  GetStarted
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FeaturedServices */}
        <sectionclassName = 'py-20bg-white'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <divclassName='text-centermb-16'>
              <h2className='text-3xlmd:text-4xlfont-boldtext-gray-900mb-4'>
                OurCoreServices
              </h2>
              <pclassName='text-xltext-gray-600max-w-2xlmx-auto'>
                Comprehensivesolutionsdesigned toaccelerateyour digitaltransformation
              </p>
            </div>
            <divclassName='gridgrid-cols-1md:grid-cols-2lg:grid-cols-3gap-8'>
              <divclassName='bg-whiterounded-xlshadow-lghover:shadow-xltransition-allduration-300p-6borderborder-gray-200hover:border-blue-300'>
                <divclassName='text-centermb-6'>
                  <divclassName='w-16h-16bg-blue-100rounded-lgflexitems-centerjustify-centermx-automb-4'>
                    <spanclassName='w-8 h-8text-blue-600'>⚡</span>
                  </div>
                  <h3className='text-xlfont-boldtext-gray-900mb-3'>
                    AIServices & Solutions
                  </h3>
                  <pclassName='text-gray-600mb-4'>
                    Advancedartificialintelligence solutionsincludingmachine
                    learningdeeplearningandAIautomation.
                  </p>
                  <divclassName = 'text-3xlfont-boldtext-blue-600mb-4'>
                    Startingat $5000
                  </div>
                </div>
                <ulclassName = 'space-y-3mb-6'>
                  <liclassName='flexitems-centergap-3'>
                    <spanclassName='w-5 h-5text-green-600'>✔️</span>
                    <spanclassName='text-gray-700'>
                      MachineLearningModels
                    </span>
                  </li>
                  <liclassName='flexitems-centergap-3'>
                    <spanclassName='w-5 h-5text-green-600'>✔️</span>
                    <spanclassName='text-gray-700'>DeepLearningSystems</span>
                  </li>
                  <liclassName='flexitems-centergap-3'>
                    <spanclassName='w-5 h-5text-green-600'>✔️</span>
                    <spanclassName='text-gray-700'>AIAutomation</span>
                  </li>
                  <liclassName='flexitems-centergap-3'>
                    <spanclassName='w-5 h-5text-green-600'>✔️</span>
                    <spanclassName='text-gray-700'>PredictiveAnalytics</span>
                  </li>
                </ul>
                <Linkto='/services/ai-services'
                  className='blockw-fulltext-centerpy-3px-4rounded-lgfont-semiboldbg-blue-600text-whitehover: bg-blue-700transition-colors'
                >
                  LearnMore
                </Link>
              </div>

              <divclassName='bg-whiterounded-xlshadow-lghover:shadow-xltransition-allduration-300p-6borderborder-blue-300ring-2ring-blue-100relative'>
                <divclassName='absolute -top-3left-1/2transform -translate-x-1/2'>
                  <spanclassName='bg-gradient-to-rfrom-blue-600to-purple-600text-whitepx-4py-1rounded-fulltext-smfont-bold'>
                    MostPopular
                  </span>
                </div>
                <divclassName='text-centermb-6'>
                  <divclassName='w-16h-16bg-purple-100rounded-lgflexitems-centerjustify-centermx-automb-4'>
                    <spanclassName='w-8 h-8text-purple-600'>🚀</span>
                  </div>
                  <h3className='text-xlfont-boldtext-gray-900mb-3'>
                    MicroSaaSSolutions
                  </h3>
                  <pclassName='text-gray-600mb-4'>
                    Scalablesoftware-as-a-serviceapplicationsdesigned forrapiddeployment andgrowth.
                  </p>
                  <divclassName='text-3xlfont-boldtext-blue-600mb-4'>
                    Startingat $3000
                  </div>
                </div>
                <ulclassName = 'space-y-3mb-6'>
                  <liclassName='flexitems-centergap-3'>
                    <CheckCircle,className='w-5 h-5text-green-600' />
                    <spanclassName='text-gray-700'>RapidDevelopment</span>
                  </li>
                  <liclassName='flexitems-centergap-3'>
                    <CheckCircle,className='w-5 h-5text-green-600' />
                    <spanclassName='text-gray-700'>ScalableArchitecture</span>
                  </li>
                  <liclassName='flexitems-centergap-3'>
                    <CheckCircle,className='w-5 h-5text-green-600' />
                    <spanclassName='text-gray-700'>Cloud-NativeDesign</span>
                  </li>
                  <liclassName='flexitems-centergap-3'>
                    <CheckCircle,className='w-5 h-5text-green-600' />
                    <spanclassName='text-gray-700'>API-FirstApproach</span>
                  </li>
                </ul>
                <Linkto='/services/micro-saas'
                  className='blockw-fulltext-centerpy-3px-4rounded-lgfont-semiboldbg-gradient-to-rfrom-blue-600to-purple-600text-whitehover: from-blue-700hover:to-purple-700transition-colors'
                >
                  LearnMore
                </Link>
              </div>

              <divclassName='bg-whiterounded-xlshadow-lghover:shadow-xltransition-allduration-300p-6borderborder-gray-200hover:border-blue-300'>
                <divclassName='text-centermb-6'>
                  <divclassName='w-16h-16bg-green-100rounded-lgflexitems-centerjustify-centermx-automb-4'>
                    <spanclassName='w-8 h-8text-green-600'>🛡️</span>
                  </div>
                  <h3className='text-xlfont-boldtext-gray-900mb-3'>
                    ITServices & Solutions
                  </h3>
                  <pclassName='text-gray-600mb-4'>
                    ComprehensiveITinfrastructurecloudmigrationandDevOpsservices.
                  </p>
                  <divclassName = 'text-3xlfont-boldtext-blue-600mb-4'>
                    Startingat $2500
                  </div>
                </div>
                <ulclassName = 'space-y-3mb-6'>
                  <liclassName='flexitems-centergap-3'>
                    <CheckCircle,className='w-5 h-5text-green-600' />
                    <spanclassName='text-gray-700'>CloudMigration</span>
                  </li>
                  <liclassName='flexitems-centergap-3'>
                    <CheckCircle,className='w-5 h-5text-green-600' />
                    <spanclassName='text-gray-700'>DevOps & SRE</span>
                  </li>
                  <liclassName='flexitems-centergap-3'>
                    <CheckCircle,className='w-5 h-5text-green-600' />
                    <spanclassName='text-gray-700'>
                      InfrastructureManagement
                    </span>
                  </li>
                  <liclassName='flexitems-centergap-3'>
                    <CheckCircle,className='w-5 h-5text-green-600' />
                    <spanclassName='text-gray-700'>Security & Compliance</span>
                  </li>
                </ul>
                <Linkto='/services/it-services'
                  className='blockw-fulltext-centerpy-3px-4rounded-lgfont-semiboldbg-blue-600text-whitehover: bg-blue-700transition-colors'
                >
                  LearnMore
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTASection */}
        <sectionclassName = 'py-20bg-blue-600'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8text-center'>
            <h2className='text-3xlmd:text-4xlfont-boldtext-whitemb-4'>
              ReadytoTransform YourBusiness?
            </h2>
            <pclassName='text-xltext-blue-100mb-8max-w-2xlmx-auto'>
              Joinhundredsof enterprisesalreadyleveraging ourAIand
              technologysolutions.
            </p>
            <divclassName='flexflex-colsm:flex-rowgap-4justify-center'>
              <Linkto='/contact'
                className='bg-whitetext-blue-600px-8py-3rounded-lgfont-semiboldhover:bg-gray-100transition-colors'
              >
                StartYourProject
              </Link>
              <Linkto='/about'
                className='borderborder-whitetext-whitepx-8py-3rounded-lgfont-semiboldhover:bg-blue-700transition-colors'
              >
                LearnMore
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

exportdefaultHome;
