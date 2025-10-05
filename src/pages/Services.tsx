import {
  ArrowRight,
  Brain,
  CheckCircle,
  Cloud
  Code
  Database
  Rocket
  Shield
  Star
  TrendingUp
  Users
  Zap
} from 'lucide-react';
import React from 'react';

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

constServices: React.FC = () => {
  constservices = [
    {
      icon: Brain,
      title: 'AI & MachineLearningSolutions'
      description: 'Transformyourbusiness withcutting-edgeartificialintelligence andmachinelearning implementations.'
      features: [
        'CustomMLModel Development'
        'PredictiveAnalytics'
        'NaturalLanguageProcessing'
        'ComputerVisionSolutions'
        'AIAutomationWorkflows'
        'Real-timeDecisionMaking'
      ]
      price: 'Startingat $5000'
      popular: false
      color: 'blue'
    }
    {
      icon: Rocket
      title: 'MicroSaaSDevelopment'
      description: 'Scalablesoftware-as-a-serviceapplicationsdesigned forrapiddeployment andexponentialgrowth.'
      features: [
        'RapidPrototyping'
        'ScalableArchitecture'
        'API-FirstDesign'
        'Cloud-NativeDevelopment'
        'UserManagementSystems'
        'PaymentIntegration'
      ]
      price: 'Startingat $3000'
      popular: true
      color: 'purple'
    }
    {
      icon: Shield
      title: 'Cybersecurity & Compliance'
      description: 'Comprehensivesecuritysolutions toprotectyour digitalassetsand ensureregulatorycompliance.'
      features: [
        'SecurityAudits'
        'PenetrationTesting'
        'ComplianceManagement'
        'IncidentResponse'
        'SecurityTraining'
        'RiskAssessment'
      ]
      price: 'Startingat $4000'
      popular: false
      color: 'green'
    }
    {
      icon: Cloud
      title: 'CloudMigration & DevOps'
      description: 'Seamlesscloudmigration andDevOpsimplementation forimprovedscalability andefficiency.'
      features: [
        'CloudStrategyPlanning'
        'InfrastructureasCode'
        'CI/CDPipelineSetup'
        'ContainerOrchestration'
        'Monitoring & Logging'
        'CostOptimization'
      ]
      price: 'Startingat $6000'
      popular: false
      color: 'indigo'
    }
    {
      icon: Code
      title: 'CustomSoftwareDevelopment'
      description: 'Tailoredsoftwaresolutions builttomeet yourspecificbusiness requirementsandgoals.'
      features: [
        'WebApplicationDevelopment'
        'MobileAppDevelopment'
        'APIDevelopment'
        'DatabaseDesign'
        'Third-partyIntegrations'
        'LegacySystemModernization'
      ]
      price: 'Startingat $8000'
      popular: false
      color: 'orange'
    }
    {
      icon: Database
      title: 'DataAnalytics & BusinessIntelligence'
      description: 'Unlockinsightsfrom yourdatawith advancedanalyticsand businessintelligencesolutions.'
      features: [
        'DataWarehousing'
        'ETLPipelineDevelopment'
        'DashboardCreation'
        'PredictiveModeling'
        'DataVisualization'
        'Real-timeAnalytics'
      ]
      price: 'Startingat $5500'
      popular: false
      color: 'teal'
    }
  ]; constprocessSteps = [
    {
      step: '01'
      title: 'Discovery & Consultation'
      description: 'Westartby understandingyourbusiness goalschallengesandrequirementsthrough detailedconsultation.'
    }
    {
      step: '02'
      title: 'Strategy & Planning'
      description: 'Ourteamdevelops acomprehensivestrategy andprojectplan tailoredtoyour specificneeds.'
    }
    {
      step: '03'
      title: 'Development & Implementation'
      description: 'Webuildand implementyoursolution usingcutting-edgetechnologiesand bestpractices.'
    }
    {
      step: '04'
      title: 'Testing & QualityAssurance'
      description: 'Rigoroustestingensures yoursolutionmeets thehighestquality standardsandperformance requirements.'
    }
    {
      step: '05'
      title: 'Deployment & Launch'
      description: 'Wehandlethe completedeploymentprocess andensurea smoothlaunchof yoursolution.'
    }
    {
      step: '06'
      title: 'Support & Maintenance'
      description: 'Ongoingsupportand maintenancetoensure yoursolutioncontinues toperformoptimally.'
    }
  ]; conststats = [
    { icon: Usersvalue: '500+'label: 'HappyClients' }
    { icon: Starvalue: '98%'label: 'ClientSatisfaction' }
    { icon: TrendingUpvalue: '150%'label: 'AverageROI' }
    { icon: Zapvalue: '24/7'label: 'SupportAvailable' }
  ]; return (
    <>
      <Helmet>
        <title>OurServices - ZionTechGroup | AI & ITSolutions</title>
        <metaname = 'description'
          content='ComprehensiveAIand ITsolutionsincluding machinelearningmicroSaaSdevelopmentcybersecuritycloudmigrationandcustomsoftware development.'
        />
        <metaname = 'keywords'
          content='AIsolutionsmicroSaaScybersecuritycloudmigrationDevOpscustomsoftwaredevelopmentdataanalytics'
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
                ComprehensiveTechnologySolutions
              </h1>
              <pclassName='text-xltext-blue-100max-w-3xlmx-auto'>
                FromAIand machinelearningto cloudmigrationand customsoftwaredevelopmentweprovideend-to-endtechnologysolutions
                thatdrivebusiness growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* StatsSection */}
        <sectionclassName = 'py-16bg-white'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <divclassName='gridgrid-cols-2md:grid-cols-4gap-8'>
              { stats.map((statindex) = > (
                <motion.divkey = { index  }initial = {{ opacity:  0y: 20 }}
                  animate = {{ opacity:  1y:  0 }}
                  transition = {{ duration: 0.6delay: index * 0.1 }}
                  className = 'text-center'
                >
                  <divclassName='w-16h-16bg-blue-100rounded-lgflexitems-centerjustify-centermx-automb-4'>
                    <stat.iconclassName='w-8 h-8text-blue-600' />
                  </div>
                  <divclassName='text-3xlfont-boldtext-gray-900mb-2'>
                    {stat.value}
                  </div>
                  <divclassName='text-gray-600'>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ServicesGrid */}
        <sectionclassName = 'py-20'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
              className = 'text-centermb-16'
            >
              <h2className='text-3xlmd: text-4xlfont-boldtext-gray-900mb-4'>
                OurCoreServices
              </h2>
              <pclassName='text-xltext-gray-600max-w-2xlmx-auto'>
                Comprehensivetechnologysolutions designedtoaccelerate yourdigitaltransformation
              </p>
            </motion.div>

            <divclassName='gridgrid-cols-1md:grid-cols-2lg:grid-cols-3gap-8'>
              { services.map((serviceindex) = > (
                <motion.divkey = { index  }initial = {{ opacity:  0y: 20 }}
                  animate = {{ opacity:  1y:  0 }}
                  transition = {{ duration: 0.6delay: index * 0.1 }}
                  className = { `bg-whiterounded-xlshadow-lghover: shadow-xltransition-allduration-300p-6border ${
                    service.popular
                       ? 'border-blue-300ring-2ring-blue-100relative'
                      : 'border-gray-200hover : border-blue-300'
                   }`}
                >
                  {  service.popular  && (
                    <divclassName = 'absolute -top-3left-1/2transform -translate-x-1/2'>
                      <spanclassName='bg-gradient-to-rfrom-blue-600to-purple-600text-whitepx-4py-1rounded-fulltext-smfont-bold'>
                        MostPopular
                      </span>
                    </div > )  }

                  <divclassName = 'text-centermb-6' > <divclassName={`w-16h-16bg-${service.color}-100rounded-lgflexitems-centerjustify-centermx-automb-4`}
                     > <service.iconclassName={`w-8 h-8text-${service.color}-600`}
                      />
                    </div>
                    <h3className='text-xlfont-boldtext-gray-900mb-3'>
                      {service.title}
                    </h3>
                    <pclassName='text-gray-600mb-4'>{service.description}</p>
                    <divclassName='text-2xlfont-boldtext-blue-600mb-4'>
                      {service.price}
                    </div>
                  </div>

                  <ulclassName='space-y-3mb-6'>
                    { service.features.map((featurefeatureIndex) = > (
                      <likey = { featureIndex  }className = 'flexitems-centergap-3'
                      >
                        <CheckCircle,className='w-5 h-5text-green-600flex-shrink-0' />
                        <spanclassName='text-gray-700'>{feature}</span>
                      </li>
                    ))}
                  </ul > <Linkto = '/contact'
                    className={ `blockw-fulltext-centerpy-3px-4rounded-lgfont-semiboldtransition-colors ${
                      service.popular
                         ? 'bg-gradient-to-rfrom-blue-600to-purple-600text-whitehover: from-blue-700hover:to-purple-700'
                        : 'bg-blue-600text-whitehover : bg-blue-700'
                     }`}
                  >
                    GetStarted
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ProcessSection */}
        <sectionclassName = 'py-20bg-white'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
              className = 'text-centermb-16'
            >
              <h2className='text-3xlmd: text-4xlfont-boldtext-gray-900mb-4'>
                OurProcess
              </h2>
              <pclassName='text-xltext-gray-600max-w-2xlmx-auto'>
                Aprovenmethodology thatensuressuccessful projectdeliveryand clientsatisfaction
              </p>
            </motion.div>

            <divclassName='gridgrid-cols-1md:grid-cols-2lg:grid-cols-3gap-8'>
              { processSteps.map((stepindex) = > (
                <motion.divkey = { index  }initial = {{ opacity:  0y: 20 }}
                  animate = {{ opacity:  1y:  0 }}
                  transition = {{ duration: 0.6delay: index * 0.1 }}
                  className = 'text-center'
                >
                  <divclassName='w-16h-16bg-blue-600text-whiterounded-fullflexitems-centerjustify-centertext-xlfont-boldmx-automb-4'>
                    {step.step}
                  </div>
                  <h3className='text-xlfont-boldtext-gray-900mb-3'>
                    {step.title}
                  </h3>
                  <pclassName='text-gray-600'>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTASection */}
        <sectionclassName = 'py-20bg-gradient-to-rfrom-blue-600to-purple-600'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8text-center'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
            >
              <h2className = 'text-3xlmd: text-4xlfont-boldtext-whitemb-4'>
                ReadytoTransform YourBusiness?
              </h2>
              <pclassName='text-xltext-blue-100mb-8max-w-2xlmx-auto'>
                Let'sdiscussyour projectrequirementsand createasolution
                thatdrivesreal results.
              </p>
              <divclassName='flexflex-colsm:flex-rowgap-4justify-center'>
                <Linkto='/contact'
                  className='bg-whitetext-blue-600px-8py-3rounded-lgfont-semiboldhover:bg-gray-100transition-colorsflexitems-centerjustify-center'
                >
                  StartYourProject
                  <ArrowRight,className='w-5 h-5ml-2' />
                </Link>
                <Linkto='/about'
                  className='borderborder-whitetext-whitepx-8py-3rounded-lgfont-semiboldhover:bg-blue-700transition-colors'
                >
                  LearnMoreAbout Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

exportdefaultServices;
