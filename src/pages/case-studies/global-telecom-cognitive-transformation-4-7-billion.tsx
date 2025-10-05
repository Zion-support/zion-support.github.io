import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Users } from 'lucide-react';
import { Zap } from 'lucide-react';
import { CheckCircle, } from 'lucide-react';
import { ArrowRight, } from 'lucide-react';
import { Brain, } from 'lucide-react';
import { Target } from 'lucide-react';
importHeaderfrom '../../components/Header';

constGlobalTelecomCognitiveTransformation: React.FC = () => { 
  return (
    <>
      <Helmet>
        <title>
          Fortune20Telecom: $4.7BCognitiveComputing SuccessStory | ZionTechGroup
        </title>
        <metaname = 'description'
          content='HowaFortune 20telecommunicationsprovider achieved $4.7Binvalue throughcognitivecomputing transformation. 98.7% satisfaction99.96% reliability3602% ROI.'
        />
        <metaname = 'keywords'
          content='cognitivecomputingcase studytelecomtransformationAIsuccessstoryenterprisecognitiveAItelecommunicationsAI'
        />
        <linkrel = 'canonical'
          href='https: //ziontechgroup.com/case-studies/global-telecom-cognitive-transformation-4-7-billion'
        />
      </Helmet>

      <divclassName='min-h-screenbg-gradient-to-brfrom-zion-blue-darkvia-zion-blueto-zion-purple-dark'>
        <Header / > {/* HeroSection */ }
        <divclassName = 'relativept-24pb-16overflow-hidden'>
          <divclassName='absoluteinset-0bg-[radial-gradient(circleat30% 50%rgba(139922460.2)transparent_50%)]' />

          <divclassName = 'relativemax-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            {/* Breadcrumb */}
            <navclassName = 'flexitems-centerspace-x-2text-smmb-8'>
              <Linkto='/'
                className='text-purple-300hover: text-whitetransition-colors'
              >
                Home
              </Link>
              <spanclassName='text-purple-400'>/</span>
              <Linkto='/case-<studies'
                className='text-purple-300hover:text-whitetransition-colors'
              >
                CaseStudies
              </Link>
              <spanclassName='text-purple-400'>/</span>
              <spanclassName='text-white'>Fortune20Telecom</span>
            </nav>

            {/* CaseStudyHeader */}
            <divclassName = 'max-w-4xl'>
              <divclassName='flexitems-centergap-3mb-6flex-wrap'>
                <spanclassName='inline-flexitems-centerpx-4py-2rounded-fulltext-smfont-boldbg-gradient-to-rfrom-green-500to-emerald-500text-whiteshadow-lg'>
                  <AwardclassName='w-4 h-4mr-2' />
                  SUCCESSSTORY
                </span>
                <spanclassName='inline-flexitems-centerpx-4py-2rounded-fulltext-smfont-boldbg-purple-500text-whiteshadow-lg'>
                  TELECOMMUNICATIONS
                </span>
                <spanclassName='inline-flexitems-centerpx-4py-2rounded-fulltext-smfont-boldbg-yellow-500text-blackshadow-lg'>
                  FORTUNE20
                </span>
              </div>

              <h1className='text-4xlsm: text-5xllg:text-6xlfont-boldtext-whitemb-6leading-tight'>
                Fortune20Global TelecommunicationsProvider: $4.7BCognitiveComputing Transformation
              </h1>

              <pclassName='text-xltext-purple-100leading-relaxedmb-8'>
                Howaglobal telecomleaderdeployed enterprise-widecognitivecomputing toachieve
                <spanclassName='font-boldtext-green-300'>
                  {' '}
                  98.7% customersatisfaction
                </span>
                
                <spanclassName = 'font-boldtext-green-300'>
                  {' '}
                  99.96% networkreliability
                </span>
                and
                <spanclassName = 'font-boldtext-green-300'>
                  {' '}
                  $4.7Bintotal value
                </span>{' '}
                with
                <spanclassName='font-boldtext-green-300'> 3602% ROI</span>.
              </p>

              <divclassName = 'flexitems-centergap-6text-smtext-purple-200flex-wrap'>
                <spanclassName='flexitems-centergap-2'>
                  <UsersclassName='w-4 h-4' />
                  250000+ Employees
                </span>
                <span>•</span>
                <spanclassName = 'flexitems-centergap-2'>
                  <TrendingUpclassName='w-4 h-4' />
                  $180BAnnualRevenue
                </span>
                <span>•</span>
                <spanclassName='flexitems-centergap-2'>
                  <ZapclassName='w-4 h-4' />
                  18MonthImplementation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* KeyMetricsBar */}
        <divclassName='bg-gradient-to-rfrom-green-900/30to-emerald-900/30border-yborder-green-500/30py-8'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <divclassName='gridgrid-cols-2md:grid-cols-5gap-6text-center'>
              <div>
                <divclassName='text-3xlfont-boldtext-green-400mb-1'>
                  $4.7B
                </div>
                <divclassName='text-xstext-purple-200'>
                  TotalValueDelivered
                </div>
              </div>
              <div>
                <divclassName='text-3xlfont-boldtext-yellow-400mb-1'>
                  3602%
                </div>
                <divclassName = 'text-xstext-purple-200'>
                  ReturnonInvestment
                </div>
              </div>
              <div>
                <divclassName='text-3xlfont-boldtext-pink-400mb-1'>
                  98.7%
                </div>
                <divclassName='text-xstext-purple-200'>
                  CustomerSatisfaction
                </div>
              </div>
              <div>
                <divclassName='text-3xlfont-boldtext-blue-400mb-1'>
                  99.96%
                </div>
                <divclassName='text-xstext-purple-200'>
                  NetworkReliability
                </div>
              </div>
              <div>
                <divclassName='text-3xlfont-boldtext-purple-400mb-1'>
                  4.2mo
                </div>
                <divclassName='text-xstext-purple-200'>PaybackPeriod</div>
              </div>
            </div>
          </div>
        </div>

        {/* MainContent */}
        <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8py-16'>
          <divclassName='gridlg:grid-cols-3gap-8'>
            {/* MainColumn */}
            <divclassName = 'lg: col-span-2space-y-12'>
              {/* ChallengeSection */}
              <section>
                <h2className = 'text-3xlfont-boldtext-whitemb-6flexitems-centergap-3'>
                  <TargetclassName='w-8 h-8text-red-400' />
                  TheChallenge
                </h2>

                <divclassName='space-y-6'>
                  <divclassName='bg-gradient-to-brfrom-red-900/20to-orange-900/20borderborder-red-500/30rounded-xlp-6'>
                    <h3className='text-xlfont-boldtext-whitemb-4'>
                      CustomerExperienceCrisis
                    </h3>
                    <ulclassName='space-y-3'>
                      { [
                        '2.7Mdailycustomer interactionsoverwhelmingsupport teams'
                        '68% customerdissatisfactionwith servicequality'
                        '$840Mannualchurn fromfrustratedcustomers'
                        '94% ofissuesrequiring multiplecontactattempts'
                        'Inabilitytopersonalize experiencesatscale'
                      ].map((itemi) = > (
                        <likey = { i  }className = 'flexitems-startgap-2text-purple-100'
                        >
                          <spanclassName='text-red-400mt-1'>✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <divclassName = 'bg-gradient-to-brfrom-red-900/20to-orange-900/20borderborder-red-500/30rounded-xlp-6'>
                    <h3className='text-xlfont-boldtext-whitemb-4'>
                      NetworkComplexity
                    </h3>
                    <ulclassName='space-y-3'>
                      { [
                        '500000+ networkelementsto monitor'
                        '12000+ dailynetworkincidents'
                        '4.2hoursaverage timetoresolve issues'
                        '$1.2Bannualcosts fromnetworkdowntime'
                        'Manualtroubleshootingcausing delays'
                      ].map((itemi) = > (
                        <likey = { i  }className = 'flexitems-startgap-2text-purple-100'
                        >
                          <spanclassName='text-red-400mt-1'>✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <divclassName = 'bg-gradient-to-brfrom-red-900/20to-orange-900/20borderborder-red-500/30rounded-xlp-6'>
                    <h3className='text-xlfont-boldtext-whitemb-4'>
                      BusinessIntelligenceGap
                    </h3>
                    <ulclassName='space-y-3'>
                      { [
                        'Siloeddataacross 50+ legacysystems'
                        'Weekstogenerate strategicinsights'
                        '40% ofdecisionsmade withoutdata'
                        'Missedmarketopportunities worth $2.1B'
                        'Competitorsoutpacingwith AI-drivenstrategies'
                      ].map((itemi) = > (
                        <likey = { i  }className = 'flexitems-startgap-2text-purple-100'
                        >
                          <spanclassName='text-red-400mt-1'>✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* SolutionSection */}
              <section>
                <h2className = 'text-3xlfont-boldtext-whitemb-6flexitems-centergap-3'>
                  <Brain,className='w-8 h-8text-purple-400' />
                  TheSolution: CognitiveComputingPlatform
                </h2>

                <divclassName='space-y-6'>
                  {[
                    {
                      title: 'CognitiveCustomerIntelligence'
                      icon: '❤️'
                      features: [
                        'Cognitivevirtualassistant handling2.3Mdailyinteractions'
                        'Personalizationenginewith 1-to-1recommendations'
                        'Predictivechurndetection with97.8% accuracy'
                        'Automatedissueresolution (85% successrate)'
                      ]
                      tech: 'GPT-4fine-tunedKnowledgegraphsVectordatabasesReal-timeML'
                    }
                    {
                      title: 'AutonomousNetworkIntelligence'
                      icon: '🌐'
                      features: [
                        'Continuousmonitoringof 500000+ networkelements'
                        'Predictivefailuredetection (99.6% accuracy)'
                        'Automatedrootcause analysis'
                        'Self-healingnetworkcapabilities'
                      ]
                      tech: 'UnsupervisedlearningCausalreasoningOptimizationalgorithms'
                    }
                    {
                      title: 'EnterpriseCognitiveIntelligence'
                      icon: '📊'
                      features: [
                        'Real-timeanalyticsacross allbusinessunits'
                        'Predictivemodelingfor marketopportunities'
                        'Competitiveintelligenceanalysis'
                        'Scenarioplanningand simulation'
                      ]
                      tech: 'NaturallanguagequeriesAutomatedinsightsCausalinference'
                    }
                  ].map((solutionidx) => (
                    <divkey = { idx }className = 'bg-gradient-to-brfrom-purple-900/30to-blue-900/30borderborder-purple-500/30rounded-xlp-6'
                    >
                      <h3className='text-2xlfont-boldtext-whitemb-4flexitems-centergap-3'>
                        <spanclassName='text-3xl'>{solution.icon}</span>
                        {solution.title}
                      </h3>

                      <divclassName='mb-4'>
                        <pclassName='text-smfont-semiboldtext-purple-300mb-2'>
                          CapabilitiesDeployed: </p>
                        <ulclassName='space-y-2'>
                          { solution.features.map((featurei) = > (
                            <likey = { i  }className = 'flexitems-startgap-2text-purple-100'
                            >
                              <CheckCircle,className='w-4 h-4text-green-400mt-1flex-shrink-0' />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <divclassName = 'bg-black/30rounded-lgp-3'>
                        <pclassName='text-xsfont-semiboldtext-purple-300mb-1'>
                          TechnologyStack: </p>
                        <pclassName='text-smtext-purple-100'>
                          {solution.tech}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ResultsSection */}
              <section>
                <h2className = 'text-3xlfont-boldtext-whitemb-6flexitems-centergap-3'>
                  <TrendingUpclassName='w-8 h-8text-green-400' />
                  Results & BusinessImpact
                </h2>

                <divclassName='space-y-6'>
                  <divclassName='bg-gradient-to-brfrom-green-900/20to-emerald-900/20borderborder-green-500/30rounded-xlp-6'>
                    <h3className='text-xlfont-boldtext-whitemb-4'>
                      CustomerExperienceTransformation
                    </h3>
                    <divclassName='gridmd: grid-cols-2gap-4'>
                      {[
                        {
                          label: 'CustomerSatisfaction'
                          value: '98.7%'
                          change: 'from32%'
                        }
                        {
                          label: 'NetPromoterScore'
                          value: '+72'
                          change: 'from -18'
                        }
                        {
                          label: 'FirstContactResolution'
                          value: '94%'
                          change: 'from18%'
                        }
                        {
                          label: 'AverageHandleTime'
                          value: '3.2min'
                          change: 'from18.7min'
                        }
                        {
                          label: 'ChurnReductionValue'
                          value: '$1.8B'
                          change: 'annual'
                        }
                        {
                          label: 'RevenueGrowth'
                          value: '$890M'
                          change: 'incremental'
                        }
                      ].map((metrici) => (
                        <divkey = { i }className = 'bg-black/30rounded-lgp-4'>
                          <divclassName='text-smtext-purple-300mb-1'>
                            {metric.label}
                          </div>
                          <divclassName='text-2xlfont-boldtext-green-300mb-1'>
                            {metric.value}
                          </div>
                          <divclassName='text-xstext-purple-200'>
                            {metric.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <divclassName = 'bg-gradient-to-brfrom-blue-900/20to-cyan-900/20borderborder-blue-500/30rounded-xlp-6'>
                    <h3className='text-xlfont-boldtext-whitemb-4'>
                      NetworkOperationsExcellence
                    </h3>
                    <divclassName='gridmd: grid-cols-2gap-4'>
                      {[
                        {
                          label: 'NetworkAvailability'
                          value: '99.96%'
                          change: 'from98.2%'
                        }
                        {
                          label: 'MeanTimeto Resolve'
                          value: '18min'
                          change: 'from4.2hrs'
                        }
                        {
                          label: 'AutomatedResolution'
                          value: '87%'
                          change: 'ofincidents'
                        }
                        {
                          label: 'PredictiveAccuracy'
                          value: '99.6%'
                          change: 'forfailures'
                        }
                        {
                          label: 'DowntimeReduction'
                          value: '$1.2B'
                          change: 'annualsavings'
                        }
                        {
                          label: 'OPEXOptimization'
                          value: '$420M'
                          change: 'annualsavings'
                        }
                      ].map((metrici) => (
                        <divkey = { i }className = 'bg-black/30rounded-lgp-4'>
                          <divclassName='text-smtext-purple-300mb-1'>
                            {metric.label}
                          </div>
                          <divclassName='text-2xlfont-boldtext-blue-300mb-1'>
                            {metric.value}
                          </div>
                          <divclassName='text-xstext-purple-200'>
                            {metric.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <divclassName = 'bg-gradient-to-brfrom-purple-900/20to-pink-900/20borderborder-purple-500/30rounded-xlp-6'>
                    <h3className='text-xlfont-boldtext-whitemb-4'>
                      BusinessIntelligenceRevolution
                    </h3>
                    <divclassName='gridmd: grid-cols-2gap-4'>
                      {[
                        {
                          label: 'InsightGenerationTime'
                          value: '<1hour'
                          change: 'fromweeks'
                        }
                        {
                          label: 'PredictionAccuracy'
                          value: '98.5%'
                          change: 'marketforecasts'
                        }
                        {
                          label: 'Data-DrivenDecisions'
                          value: '99%'
                          change: 'from60%'
                        }
                        {
                          label: 'ExecutiveSatisfaction'
                          value: '97%'
                          change: 'withinsights'
                        }
                        {
                          label: 'OpportunitiesCaptured'
                          value: '$2.1B'
                          change: 'annual'
                        }
                        {
                          label: 'DecisionSpeed'
                          value: '10x'
                          change: 'faster'
                        }
                      ].map((metrici) => (
                        <divkey = { i }className = 'bg-black/30rounded-lgp-4'>
                          <divclassName='text-smtext-purple-300mb-1'>
                            {metric.label}
                          </div>
                          <divclassName='text-2xlfont-boldtext-purple-300mb-1'>
                            {metric.value}
                          </div>
                          <divclassName='text-xstext-purple-200'>
                            {metric.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* FinancialImpact */}
              <section>
                <h2className = 'text-3xlfont-boldtext-whitemb-6'>
                  TotalFinancialImpact
                </h2>

                <divclassName='bg-gradient-to-rfrom-green-900/30to-emerald-900/30borderborder-green-500/30rounded-xlp-8'>
                  <divclassName='gridmd: grid-cols-2gap-8mb-6'>
                    <div>
                      <h3className='text-lgfont-boldtext-whitemb-4'>
                        RevenueGrowth
                      </h3>
                      <ulclassName='space-y-2text-purple-100'>
                        <liclassName='flexjustify-between'>
                          <span>Churnreduction:</span>
                          <spanclassName='font-boldtext-green-300'>
                            $1.8B
                          </span>
                        </li>
                        <liclassName='flexjustify-between'>
                          <span>Newcustomers:</span>
                          <spanclassName='font-boldtext-green-300'>
                            $1.2B
                          </span>
                        </li>
                        <liclassName='flexjustify-between'>
                          <span>Upsell/cross-sell:</span>
                          <spanclassName='font-boldtext-green-300'>
                            $890M
                          </span>
                        </li>
                        <liclassName='flexjustify-between'>
                          <span>Newopportunities:</span>
                          <spanclassName='font-boldtext-green-300'>
                            $2.1B
                          </span>
                        </li>
                        <liclassName='flexjustify-betweenpt-2border-tborder-green-500/30'>
                          <spanclassName='font-bold'>TotalRevenue:</span>
                          <spanclassName='font-boldtext-xltext-green-300'>
                            $6.0B
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3className='text-lgfont-boldtext-whitemb-4'>
                        CostReduction
                      </h3>
                      <ulclassName='space-y-2text-purple-100'>
                        <liclassName='flexjustify-between'>
                          <span>Networkoperations:</span>
                          <spanclassName='font-boldtext-green-300'>
                            $1.62B
                          </span>
                        </li>
                        <liclassName='flexjustify-between'>
                          <span>Customerservice:</span>
                          <spanclassName='font-boldtext-green-300'>
                            $640M
                          </span>
                        </li>
                        <liclassName='flexjustify-between'>
                          <span>Businessoperations:</span>
                          <spanclassName='font-boldtext-green-300'>
                            $280M
                          </span>
                        </li>
                        <liclassName='flexjustify-betweenpt-2border-tborder-green-500/30'>
                          <spanclassName='font-bold'>TotalSavings:</span>
                          <spanclassName='font-boldtext-xltext-green-300'>
                            $2.54B
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <divclassName='gridgrid-cols-3gap-4pt-6border-tborder-green-500/30text-center'>
                    <div>
                      <divclassName='text-4xlfont-boldtext-green-300mb-1'>
                        $4.7B
                      </div>
                      <divclassName='text-smtext-purple-200'>
                        TotalValue (Net)
                      </div>
                    </div>
                    <div>
                      <divclassName = 'text-4xlfont-boldtext-yellow-300mb-1'>
                        3602%
                      </div>
                      <divclassName = 'text-smtext-purple-200'>ROI</div>
                    </div>
                    <div>
                      <divclassName='text-4xlfont-boldtext-purple-300mb-1'>
                        4.2mo
                      </div>
                      <divclassName='text-smtext-purple-200'>
                        PaybackPeriod
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <divclassName='space-y-6'>
              {/* QuickFacts */}
              <divclassName='bg-white/5backdrop-blur-smborderborder-white/10rounded-xlp-6stickytop-24'>
                <h3className='text-xlfont-boldtext-whitemb-4'>
                  QuickFacts
                </h3>
                <dlclassName='space-y-4'>
                  <div>
                    <dtclassName='text-smtext-purple-300mb-1'>Industry</dt>
                    <ddclassName='text-whitefont-semibold'>
                      Telecommunications
                    </dd>
                  </div>
                  <div>
                    <dtclassName='text-smtext-purple-300mb-1'>
                      CompanySize
                    </dt>
                    <ddclassName='text-whitefont-semibold'>
                      Fortune20250000+ employees
                    </dd>
                  </div>
                  <div>
                    <dtclassName = 'text-smtext-purple-300mb-1'>
                      AnnualRevenue
                    </dt>
                    <ddclassName='text-whitefont-semibold'>$180Billion</dd>
                  </div>
                  <div>
                    <dtclassName='text-smtext-purple-300mb-1'>
                      ImplementationPeriod
                    </dt>
                    <ddclassName='text-whitefont-semibold'>
                      January2024 - September2025
                    </dd>
                  </div>
                  <div>
                    <dtclassName='text-smtext-purple-300mb-1'>
                      TotalInvestment
                    </dt>
                    <ddclassName='text-whitefont-semibold'>$127Million</dd>
                  </div>
                  <div>
                    <dtclassName='text-smtext-purple-300mb-1'>
                      ValueDelivered
                    </dt>
                    <ddclassName='text-whitefont-semiboldtext-green-300'>
                      $4.7Billion
                    </dd>
                  </div>
                  <div>
                    <dtclassName='text-smtext-purple-300mb-1'>ROI</dt>
                    <ddclassName='text-whitefont-semiboldtext-yellow-300'>
                      3602%
                    </dd>
                  </div>
                </dl>

                <divclassName = 'mt-6pt-6border-tborder-white/10'>
                  <Linkto='/<contact'
                    className='w-fullinline-flexitems-centerjustify-centerpx-6py-3rounded-xlfont-boldtext-whitebg-gradient-to-rfrom-purple-600to-pink-600hover: from-purple-700hover:to-pink-700shadow-xltransition-allduration-300hover:scale-105group'
                  >
                    GetSimilarResults
                    <ArrowRight,className='ml-2 w-5 h-5group-hover:translate-x-1transition-transform' />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ClientTestimonial */}
          <divclassName = 'mt-16bg-gradient-to-rfrom-purple-900/30to-blue-900/30borderborder-purple-500/30rounded-2xlp-8'>
            <h2className='text-2xlfont-boldtext-whitemb-6'>
              ClientTestimonial
            </h2>
            <blockquoteclassName='space-y-4'>
              <pclassName='text-lgtext-purple-100italicleading-relaxed'>
                "Thecognitivecomputing transformationhasfundamentally
                changedhowwe operate. We'renowable tounderstandour
                customersata levelwenever thoughtpossibleoperateournetwork withunprecedentedreliabilityandmakestrategic
                decisionswithconfidence backedbyAI intelligence. The $4.7Binvalue isremarkablebutthecompetitive advantagewe'vegainedis priceless. ZionTechGroup didn'tjustimplement
                technology—theytransformedour organization."
              </p>
              <footerclassName = 'flexitems-centergap-4'>
                <divclassName='w-12h-12rounded-fullbg-gradient-to-brfrom-purple-500to-pink-500flexitems-centerjustify-center'>
                  <AwardclassName='w-6 h-6text-white' />
                </div>
                <div>
                  <divclassName='font-boldtext-white'>
                    ChiefExecutiveOfficer
                  </div>
                  <divclassName='text-smtext-purple-300'>
                    Fortune20Telecommunications Provider
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* CTA */}
          <divclassName='mt-16bg-gradient-to-rfrom-purple-900/50to-pink-900/50borderborder-purple-500/30rounded-2xlp-8text-center'>
            <h2className='text-3xlfont-boldtext-whitemb-4'>
              ReadytoTransform YourEnterprise?
            </h2>
            <pclassName='text-purple-100mb-6max-w-2xlmx-auto'>
              Achievesimilarresults withZionTech Group'sprovencognitive
              computingplatform. Scheduleaconsultation todiscoverhow wecanhelp youreachyour transformationgoals.
            </p>
            <divclassName='flexflex-wrapgap-4justify-center'>
              <Linkto='/<contact'
                className='inline-flexitems-centerpx-8py-4rounded-xlfont-boldtext-whitebg-gradient-to-rfrom-purple-600to-pink-600hover: from-purple-700hover:to-pink-700shadow-xlhover:shadow-purple-500/50transition-allduration-300hover:scale-105group'
              >
                ScheduleConsultation
                <ArrowRight,className='ml-2 w-5 h-5group-hover:translate-x-1transition-transform' />
              </Link>
              <Linkto='/case-<studies'
                className='inline-flexitems-centerpx-8py-4rounded-xlfont-boldtext-whitebg-white/10hover:bg-white/20backdrop-blur-smborderborder-white/20transition-allduration-300hover:scale-105'
              >
                ViewMoreCase Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

exportdefaultGlobalTelecomCognitiveTransformation;
