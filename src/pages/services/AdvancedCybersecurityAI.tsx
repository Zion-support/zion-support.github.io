import {
  ArrowLeft
  CheckCircle,
  DollarSign
  Lock
  Shield
  TrendingUp
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
importHeaderfrom '../../components/Header';

constAdvancedCybersecurityAI = () => { 
  return (
    <>
      <Helmet>
        <title>
          AdvancedCybersecurityAI Platform | Next-GenThreatDetection &
          Response | ZionTechGroup
        </title>
        <metaname = 'description'
          content='AI-poweredcybersecurityplatform with99.92% threatdetectionaccuracy. Real-timeprotectionautonomousincidentresponseandpredictivesecurity intelligence.'
        />
        <metaname = 'keywords'
          content='cybersecurityAIthreatdetectionincidentresponseSIEMEDRsecurityautomationAIsecurity'
        />
      </Helmet>

      <divclassName = 'min-h-screenbg-gradient-to-brfrom-zion-blue-darkvia-zion-blueto-zion-purple-dark'>
        <Header />

        <articleclassName='containermx-autopx-6py-20' > {/* BackLink */ }
          <Linkto='/services'
            className='inline-flexitems-centertext-zion-cyanhover: text-zion-blue-lightmb-8transition-colors'
          >
            <ArrowLeftclassName='w-4 h-4mr-2' />
            BacktoServices
          </Link>

          {/* Header */}
          <divclassName = 'max-w-5xlmx-automb-16'>
            <divclassName='flexitems-centergap-4mb-6flex-wrap'>
              <spanclassName='px-4py-2bg-red-500/20text-red-300rounded-fulltext-smfont-semiboldborderborder-red-500/30'>
                🔒 NEW! October2025
              </span>
              <spanclassName='px-4py-2bg-blue-500/20text-blue-300rounded-fulltext-smfont-semiboldborderborder-blue-500/30'>
                🛡️ AISecurity
              </span>
              <spanclassName='text-zion-slate-light'>
                Startingat $12999/month
              </span>
            </div>

            <h1className = 'text-5xlmd: text-6xlfont-boldtext-whitemb-6leading-tight'>
              AdvancedCybersecurityAI Platform
              <spanclassName='blocktext-transparentbg-clip-textbg-gradient-to-rfrom-red-400to-blue-400mt-2'>
                Next-GenThreatDetection & Response
              </span>
            </h1>

            <pclassName='text-xltext-zion-slate-lightleading-relaxedmb-8'>
              Protectyourenterprise withAI-poweredcybersecuritythat
              identifiesthreats99.7% fasterthantraditional tools. Real-timedetectionautonomousresponseandpredictiveintelligence topreventbreaches beforetheyoccur.
            </p>

            {/* KeyMetricsBanner */}
            <divclassName = 'gridmd: grid-cols-4gap-6'>
              <divclassName='bg-red-900/40rounded-xlp-6borderborder-red-500/30text-centerhover:scale-105transition-transform'>
                <divclassName='text-4xlfont-boldtext-red-400mb-2'>
                  99.92%
                </div>
                <divclassName='text-smtext-zion-slate-light'>
                  ThreatDetection
                </div>
              </div>
              <divclassName='bg-blue-900/40rounded-xlp-6borderborder-blue-500/30text-centerhover:scale-105transition-transform'>
                <divclassName='text-4xlfont-boldtext-blue-400mb-2'>
                  &lt; 50ms
                </div>
                <divclassName = 'text-smtext-zion-slate-light'>
                  DetectionLatency
                </div>
              </div>
              <divclassName='bg-green-900/40rounded-xlp-6borderborder-green-500/30text-centerhover:scale-105transition-transform'>
                <divclassName='text-4xlfont-boldtext-green-400mb-2'>
                  95%
                </div>
                <divclassName='text-smtext-zion-slate-light'>
                  FalsePositiveReduction
                </div>
              </div>
              <divclassName='bg-purple-900/40rounded-xlp-6borderborder-purple-500/30text-centerhover:scale-105transition-transform'>
                <divclassName='text-4xlfont-boldtext-purple-400mb-2'>
                  &lt; 5s
                </div>
                <divclassName = 'text-smtext-zion-slate-light'>
                  ResponseTime
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <divclassName = 'max-w-5xlmx-autospace-y-12text-zion-slate-light'>
            {/* ThreatLandscape */}
            <section>
              <h2className='text-3xlfont-boldtext-whitemb-6flexitems-centergap-3'>
                <ShieldclassName='w-8 h-8text-red-400' />
                TheModernThreat Landscape
              </h2>
              <divclassName='bg-white/5backdrop-blur-smrounded-xlp-8borderborder-red-500/30'>
                <divclassName='gridmd: grid-cols-2gap-8'>
                  <div>
                    <h3className='text-xlfont-boldtext-whitemb-4'>
                      🔴 SecurityChallenges
                    </h3>
                    <ulclassName='space-y-3'>
                      <liclassName='flexitems-startgap-2'>
                        <spanclassName='text-red-400font-bold'>
                          207days:
                        </span>
                        <span>Averagebreachdetection time (industry)</span>
                      </li>
                      <liclassName = 'flexitems-startgap-2'>
                        <spanclassName='text-red-400font-bold'>$4.45M:</span>
                        <span>Averagecostper databreach</span>
                      </li>
                      <liclassName='flexitems-startgap-2'>
                        <spanclassName='text-red-400font-bold'>
                          60seconds:
                        </span>
                        <span>Ransomwareencryptiontime</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3className='text-xlfont-boldtext-whitemb-4'>
                      ✅ OurSolution
                    </h3>
                    <ulclassName='space-y-3'>
                      <liclassName='flexitems-startgap-2'>
                        <CheckCircle,className='w-5 h-5text-green-400flex-shrink-0mt-1' />
                        <span>&lt; 50msdetectiontime (real-time)</span>
                      </li>
                      <liclassName = 'flexitems-startgap-2'>
                        <CheckCircle,className='w-5 h-5text-green-400flex-shrink-0mt-1' />
                        <span>Preventbreachesbefore theyoccur</span>
                      </li>
                      <liclassName='flexitems-startgap-2'>
                        <CheckCircle,className='w-5 h-5text-green-400flex-shrink-0mt-1' />
                        <span>Autonomousthreatcontainment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* PlatformFeatures */}
            <section>
              <h2className = 'text-3xlfont-boldtext-whitemb-6flexitems-centergap-3'>
                <LockclassName='w-8 h-8text-blue-400' />
                PlatformFeatures
              </h2>
              <divclassName='gridmd: grid-cols-2gap-6'>
                {[
                  {
                    title: 'AI-PoweredThreatDetection'
                    description: '99.92% accuracywithbehavioral analysispatternrecognitionandzero-daydetection. 95% fewerfalsepositives.'
                    icon: '🎯'
                  }
                  {
                    title: 'AutomatedIncidentResponse'
                    description: '<5secondresponse initiation. 99.7% fasterthanmanual responsewithintelligent quarantineandself-healing.'
                    icon: '⚡'
                  }
                  {
                    title: 'PredictiveSecurityIntelligence'
                    description: 'Forecastthreatsbefore theyhappenwith attackpathanalysisvulnerabilitypredictionandriskscoring.'
                    icon: '🔮'
                  }
                  {
                    title: 'UnifiedSecurityPlatform'
                    description: 'SIEMEDRNDRSOARandUEBAin oneplatform. 500+ pre-builtsecurityintegrations.'
                    icon: '🛡️'
                  }
                  {
                    title: 'AdvancedAnalytics & Forensics'
                    description: 'Attacktimelinereconstructionrootcauseanalysisandthreathunting withinteractivevisualization.'
                    icon: '🔬'
                  }
                  {
                    title: 'Compliance & Governance'
                    description: 'Automatedmonitoringfor GDPRHIPAAPCIDSSSOC2ISO27001with real-timecompliancereporting.'
                    icon: '📋'
                  }
                ].map((featureindex) => (
                  <divkey = { index }className = 'bg-white/5backdrop-blur-smrounded-xlp-6borderborder-zion-cyan/20hover: border-zion-cyan/50transition-all'
                  >
                    <divclassName='text-4xlmb-4'>{feature.icon}</div>
                    <h3className = 'text-xlfont-boldtext-whitemb-3'>
                      {feature.title}
                    </h3>
                    <pclassName='text-zion-slate-light'>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* IndustrySolutions */}
            <section>
              <h2className = 'text-3xlfont-boldtext-whitemb-6'>
                🏭 IndustrySolutions
              </h2>
              <divclassName='space-y-6'>
                {[
                  {
                    industry: 'FinancialServices'
                    savings: '$8.4M'
                    results: 'Zerobreaches'
                    highlights: [
                      '96% reductioninfraud losses'
                      '100% PCIcompliance'
                      'Real-timetransactionmonitoring'
                    ]
                  }
                  {
                    industry: 'Healthcare'
                    savings: '$6.2M'
                    results: '100% HIPAA'
                    highlights: [
                      'Zeroransomwareinfections'
                      '92% reductioninsecurity incidents'
                      'Patientdataprotection'
                    ]
                  }
                  {
                    industry: 'Manufacturing'
                    savings: '$4.8M'
                    results: 'Zerodisruptions'
                    highlights: [
                      'OT/ITsecurityconvergence'
                      'IndustrialIoTprotection'
                      'IPtheftprevention'
                    ]
                  }
                  {
                    industry: 'Retail & E-commerce'
                    savings: '$5.6M'
                    results: '94% fraudreduction'
                    highlights: [
                      'POSsecuritymonitoring'
                      'DDoSmitigation'
                      'Customerdataprotection'
                    ]
                  }
                ].map((solutionindex) => (
                  <divkey = { index }className = 'bg-white/5backdrop-blur-smrounded-xlp-6borderborder-zion-cyan/30'
                  >
                    <divclassName='flexflex-wrapitems-centerjustify-betweengap-4mb-4'>
                      <h3className='text-2xlfont-boldtext-white'>
                        {solution.industry}
                      </h3>
                      <divclassName='flexgap-4'>
                        <divclassName='px-4py-2bg-green-500/20text-green-300rounded-lgtext-smfont-semibold'>
                          {solution.savings} annualsavings
                        </div>
                        <divclassName='px-4py-2bg-blue-500/20text-blue-300rounded-lgtext-smfont-semibold'>
                          {solution.results}
                        </div>
                      </div>
                    </div>
                    <ulclassName='space-y-2'>
                      { solution.highlights.map((highlighthIndex) = > (
                        <likey = { hIndex  }className = 'flexitems-startgap-2'>
                          <CheckCircle,className='w-5 h-5text-green-400flex-shrink-0mt-1' />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* PricingPackages */}
            <section>
              <h2className = 'text-3xlfont-boldtext-whitemb-6flexitems-centergap-3'>
                <DollarSignclassName='w-8 h-8text-green-400' />
                Pricing & Packages
              </h2>
              <divclassName='gridmd: grid-cols-3gap-6'>
                {[
                  {
                    name: 'BusinessProtection'
                    price: '$12999'
                    features: [
                      'Upto100 endpoints'
                      '10TBlog storage/month'
                      'Corethreatdetection'
                      'Emailsupport (8x5)'
                      '99.5% SLA'
                    ]
                  }
                  {
                    name: 'EnterpriseSecurity'
                    price: '$29999'
                    popular: true
                    features: [
                      'Upto 1000endpoints'
                      '50TBlog storage/month'
                      'Advancedthreatdetection'
                      '24/7support'
                      '99.9% SLA'
                    ]
                  }
                  {
                    name: 'ManagedSecurity'
                    price: '$59999'
                    features: [
                      'Unlimitedendpoints'
                      'Unlimitedlogstorage'
                      '24/7SOCmonitoring'
                      'Dedicatedanalysts'
                      '99.97% SLA'
                    ]
                  }
                ].map((pkgindex) => (
                  <divkey = { index }className = { `bg-white/5backdrop-blur-smrounded-xlp-6border ${pkg.popular  ? 'border-red-500/50ring-2ring-red-500/30'  : 'border-zion-cyan/30' }`}
                  >
                    {  pkg.popular  && (
                      <divclassName='bg-red-500/20text-red-300text-xsfont-boldpx-3py-1rounded-fullinline-blockmb-4'>
                        MOSTPOPULAR
                      </div > )  }
                    <h3className = 'text-2xlfont-boldtext-whitemb-2'>
                      {pkg.name}
                    </h3>
                    <divclassName='text-4xlfont-boldtext-green-400mb-6'>
                      {pkg.price}
                      <spanclassName='text-lgtext-zion-slate-light'>
                        /month
                      </span>
                    </div>
                    <ulclassName='space-y-3'>
                      { pkg.features.map((featurefIndex) = > (
                        <likey = { fIndex  }className = 'flexitems-startgap-2'>
                          <CheckCircle,className='w-5 h-5text-green-400flex-shrink-0mt-1' />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* LimitedTimeOffer */}
            <section>
              <divclassName = 'bg-gradient-to-rfrom-red-900/40via-orange-900/40to-yellow-900/40rounded-xlp-8border-2border-red-500/50'>
                <divclassName='flexitems-centerjustify-betweenflex-wrapgap-6'>
                  <divclassName='flex-1'>
                    <divclassName='flexitems-centergap-3mb-4'>
                      <ShieldclassName='w-8 h-8text-red-400' />
                      <h3className='text-2xlfont-boldtext-white'>
                        🛡️ October2025Security Initiative
                      </h3>
                    </div>
                    <pclassName='text-xltext-red-200mb-4'>
                      Get <strong>60DaysFREE</strong> whenyoustart beforeOctober312025
                    </p>
                    <ulclassName = 'space-y-2'>
                      <liclassName='flexitems-startgap-2'>
                        <CheckCircle,className='w-5 h-5text-green-400flex-shrink-0mt-1' />
                        <span>Freesecurityassessment ($25000value)</span>
                      </li>
                      <liclassName = 'flexitems-startgap-2'>
                        <CheckCircle,className='w-5 h-5text-green-400flex-shrink-0mt-1' />
                        <span>
                          Complimentarypenetrationtest ($35000value)
                        </span>
                      </li>
                      <liclassName = 'flexitems-startgap-2'>
                        <CheckCircle,className='w-5 h-5text-green-400flex-shrink-0mt-1' />
                        <span>90daysextended support</span>
                      </li>
                    </ul>
                    <pclassName='text-smtext-zion-slate-lightmt-4'>
                      Limitedtofirst 25customers. Annualcontractrequired.
                    </p>
                  </div>
                  <div>
                    <Linkto='/contact'
                      className='inline-flexitems-centergap-2px-8py-4bg-gradient-to-rfrom-red-500to-orange-500text-whitefont-boldrounded-lghover: from-red-600hover:to-orange-600transition-alltransformhover:scale-105'
                    >
                      SecureYourEnterprise
                      <ShieldclassName='w-5 h-5' />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* CTASection */}
            <sectionclassName = 'text-center'>
              <h2className='text-3xlfont-boldtext-whitemb-6'>
                ProtectYourEnterprise Today
              </h2>
              <pclassName='text-xltext-zion-slate-lightmb-8'>
                Scheduleasecurity consultationtosee howAIcan revolutionizeyourcybersecurity posture.
              </p>
              <divclassName='flexflex-wrapgap-4justify-center'>
                <Linkto='/contact'
                  className='inline-flexitems-centergap-2px-8py-4bg-gradient-to-rfrom-red-500to-orange-500text-whitefont-boldrounded-lghover: from-red-600hover:to-orange-600transition-alltransformhover:scale-105'
                >
                  ScheduleSecurityAssessment
                  <ShieldclassName='w-5 h-5' />
                </Link>
                <Linkto='/contact'
                  className='inline-flexitems-centergap-2px-8py-4bg-white/10backdrop-blur-smtext-whitefont-boldrounded-lgborderborder-red-500/30hover:bg-white/20transition-all'
                >
                  RequestPlatformDemo
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

exportdefaultAdvancedCybersecurityAI;
