import {
  ArrowRight,
  CheckCircle,
  Globe
  Rocket
  Shield
  Star
  Target
  Users
  Zap
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { lazySuspense } from 'react';
importHeaderfrom '../components/Header';
importBannerRotationManagerfrom '../components/BannerRotationManager';
import { latestInsights } from '../content/insights';

// Lazyloadheavy componentsconstEnhancedTestimonials = lazy(
  () => import('../components/EnhancedTestimonials')
); constModernFeatures = lazy(() => import('../components/ModernFeatures')); constLatestInsights = lazy(() => import('../components/LatestInsights')); const LoadingSection = () => (
  <divclassName = 'animate-pulsebg-white/5rounded-xlh-64w-full'></div>
); constHomeOptimized = () => { 
  return (
    <>
      <Helmet>
        <title>
          ZionTechGroup - LeadingAI & ITSolutions | TransformYourBusiness
        </title>
        <metaname = 'description'
          content='ZionTechGroup deliverscutting-edgeAIand ITsolutionsthat transformbusinesses. EnterprisesecurityAIinnovationandexpertconsulting services.'
        />
        <metaname = 'keywords'
          content='AIsolutionsITconsultingcybersecuritymachinelearningcloudinfrastructuredigitaltransformation'
        />
        <metaproperty = 'og: title'
          content='ZionTechGroup - LeadingAI & ITSolutions'
        />
        <metaproperty='og:description'
          content='Transformyourbusiness withcutting-edgeAIand ITsolutions'
        />
        <metaproperty='og:type' content='website' />
        <metaproperty='og:url' content='https://ziontechgroup.com' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title'
          content='ZionTechGroup - LeadingAI & ITSolutions'
        />
        <meta name='twitter:description'
          content='Transformyourbusiness withcutting-edgeAIand ITsolutions'
        />
        <linkrel='canonical' href='https://ziontechgroup.com' />
      </Helmet>

      <divclassName='min-h-screenbg-gradient-to-brfrom-zion-blue-darkvia-zion-blueto-zion-purple-darkrelativeoverflow-hidden'>
        <Header / > {/* Animatedbackgroundelements */ }
        <divclassName = 'absoluteinset-0overflow-hiddenpointer-events-none'>
          <divclassName='absolute -top-40 -right-40w-80h-80bg-zion-bluerounded-fullmix-blend-multiplyfilterblur-xlopacity-20animate-float' />
          <divclassName='absolute -bottom-40 -left-40w-80h-80bg-zion-purplerounded-fullmix-blend-multiplyfilterblur-xlopacity-20animate-float'
            style={{ animationDelay: '2s' }}
           />
          <divclassName = 'absolutetop-40left-1/2 w-60h-60bg-zion-cyanrounded-fullmix-blend-multiplyfilterblur-xlopacity-20animate-float'
            style={{ animationDelay: '4s' }}
           />
        </div>

        {/* HeroSection */}
        <sectionclassName = 'containermx-autopx-6py-20relativez-10'>
          <divclassName='text-centermax-w-5xlmx-auto'>
            {/* Badge */}
            <divclassName='inline-flexitems-centerpx-6py-3rounded-fullbg-zion-cyan/20text-zion-cyantext-smfont-mediummb-8animate-fade-inborderborder-zion-cyan/30shadow-lghover: shadow-xltransition-allduration-300'>
              <RocketclassName='w-4 h-4mr-2animate-pulse' />
              Trustedby500+ companiesworldwide
              <RocketclassName='w-4 h-4ml-2animate-bounce' />
            </div>

            <h1className='text-5xlmd:text-7xlfont-boldtext-whitemb-6animate-slide-up'>
              <spanclassName='bg-gradient-to-rfrom-zion-blue-lightto-zion-purple-lightbg-clip-texttext-transparentanimate-gradientbg-300%'>
                ZionTechGroup
              </span>
            </h1>

            <pclassName='text-xlmd:text-2xltext-zion-slate-lightmb-8leading-relaxedmax-w-3xlmx-autoanimate-fade-in'>
              Transformyourbusiness withcutting-edgeAIsolutions
              enterprise-gradesecurityandnext-generationcloudinfrastructure. Join500+ companiesalreadyscaling withus!
            </p>

            {/* Stats */}
            <divclassName = 'gridgrid-cols-2md: grid-cols-4gap-8mb-12max-w-2xlmx-auto'>
              {[
                { value: '500+'label: 'ProjectsDelivered' }
                { value: '99.9%'label: 'UptimeSLA' }
                { value: '24/7'label: 'Support' }
                { value: '5★'label: 'ClientRating' }
              ].map((statindex) => (
                <divkey = { index }className = 'text-centergrouphover: scale-105transition-allduration-300'
                >
                  <divclassName='text-3xlfont-boldtext-zion-cyangroup-hover:text-zion-blue-lighttransition-colors'>
                    {stat.value}
                  </div>
                  <divclassName = 'text-smtext-zion-slate-light'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <divclassName = 'flexflex-colsm: flex-rowgap-4justify-center'>
              <Linkto='/services'
                className='btn-primaryflexitems-centerjustify-centergap-2group'
              >
                ExploreServices
                <ArrowRight,className='w-5 h-5group-hover:translate-x-1transition-transform' />
              </Link>
              <Linkto='/contact' className='btn-secondary'>
                GetStarted
              </Link>
            </div>
          </div>
        </section>

        {/* BannerRotationSection */}
        <sectionclassName = 'containermx-autopx-6py-16relativez-10'>
          <BannerRotationManagerbanners = { [
              'october2025-new-breakthrough'
              'october2025-tech-breakthrough'
              'october2025-next-gen-ai'
            ] }maxBanners={ 3 } autoRotate={false}
          />
        </section>

        {/* LatestInsightsSection */}
        <sectionclassName='containermx-autopx-6py-16relativez-10'>
          <Suspensefallback={ <LoadingSection / >  }>
            <LatestInsights />
          </Suspense>
        </section>

        {/* FeaturesSection */}
        <sectionclassName='containermx-autopx-6py-20relativez-10'>
          <divclassName='text-centermb-16'>
            <h2className='text-4xlfont-boldtext-whitemb-4animate-slide-up'>
              WhyChooseZion TechGroup?
            </h2>
            <pclassName='text-xltext-zion-slate-lightmax-w-2xlmx-auto'>
              Wedeliverexceptional technologysolutionsthat drivebusinessgrowth andinnovation.
            </p>
          </div>

          <divclassName='gridmd: grid-cols-2lg:grid-cols-4gap-8'>
            {[
              {
                icon: Shield
                title: 'EnterpriseSecurity'
                description: 'Advancedcybersecuritysolutions protectingyourbusiness fromevolvingthreats.'
                features: [
                  'SOC2Compliance'
                  'PenetrationTesting'
                  '24/7Monitoring'
                ]
                color: 'blue'
              }
              {
                icon: Zap
                title: 'AIInnovation'
                description: 'Cutting-edgeartificialintelligence solutionsthattransform youroperations.'
                features: [
                  'MachineLearning'
                  'NaturalLanguageProcessing'
                  'ComputerVision'
                ]
                color: 'purple'
              }
              {
                icon: Users
                title: 'ExpertTeam'
                description: 'World-classengineersand consultantsdedicatedto yoursuccess.'
                features: [
                  '10+ YearsExperience'
                  'CertifiedProfessionals'
                  'DedicatedSupport'
                ]
                color: 'cyan'
              }
              {
                icon: Globe
                title: 'GlobalReach'
                description: 'Servingclientsworldwide withlocalizedexpertise andsupport.'
                features: [
                  '50+ Countries'
                  'LocalSupport'
                  '24/7Availability'
                ]
                color: 'blue-light'
              }
            ].map((featureindex) => (
              <divkey = { index }className = 'cardgrouphover: scale-105transition-allduration-300hover:shadow-2xl'
              >
                <divclassName={`bg-zion-${feature.color}/20w-16h-16rounded-lgflexitems-centerjustify-centermb-6group-hover: bg-zion-${feature.color}/30transition-colorsborderborder-zion-${feature.color}/30shadow-lg`}
                 > <feature.iconclassName = {`w-8 h-8text-zion-${feature.color}-lightgroup-hover: scale-110transition-transformduration-300`}
                  />
                </div>
                <h3className = 'text-xlfont-semiboldtext-whitemb-4'>
                  {feature.title}
                </h3>
                <pclassName='text-zion-slate-lightmb-4'>
                  {feature.description}
                </p>
                <ulclassName='space-y-2text-smtext-zion-slate'>
                  { feature.features.map((itemi) = > (
                    <likey = { i  }className = 'flexitems-center'>
                      <CheckCircle,className='w-4 h-4mr-2text-zion-cyan' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* LatestInsightsPreview */}
        <sectionclassName = 'containermx-autopx-6py-16relativez-10'>
          <divclassName='flexitems-centerjustify-betweenmb-8'>
            <h3className='text-3xlfont-boldtext-white'>LatestInsights</h3>
            <Linkto='/insights' className='text-zion-cyanhover: underline'>
              Viewall
            </Link>
          </div>
          <divclassName='gridmd:grid-cols-4gap-6'>
            { latestInsights.slice(04).map(item = > (
              <articlekey = { item.id  }className = 'cardhover: scale-105transition-allduration-300hover:shadow-2xl'
              >
                <divclassName='p-6'>
                  <divclassName='text-xsuppercasetracking-widertext-zion-cyanmb-2'>
                    {item.category}
                  </div>
                  <h4className = 'text-xlfont-semiboldtext-whitemb-2'>
                    {item.title}
                  </h4>
                  <pclassName='text-zion-slate-lightmb-4'>{item.summary}</p>
                  <divclassName='text-smtext-zion-slateflexitems-centerjustify-between'>
                    <span>{newDate(item.date).toLocaleDateString()}</span>
                    <span>{item.readMinutes} minread</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TestimonialsSection */}
        <sectionclassName = 'bg-zion-slate-darkpy-20relativeoverflow-hidden'>
          <divclassName='absoluteinset-0bg-gradient-to-rfrom-zion-blue/10to-zion-purple/10opacity-50' />
          <divclassName='containermx-autopx-6relativez-10'>
            <divclassName='text-centermb-16'>
              <h2className='text-4xlfont-boldtext-whitemb-4animate-slide-up'>
                WhatOurClients Say
              </h2>
              <pclassName='text-xltext-zion-slate-lightmax-w-2xlmx-autoanimate-fade-in'>
                Don&apos; tjusttake ourwordfor it. Here&apos;swhatour
                clientshaveto sayaboutworking withus.
              </p>
            </div>

            <divclassName='gridmd: grid-cols-3gap-8'>
              {[
                {
                  name: 'SarahJohnson'
                  role: 'CEOTechCorp'
                  quote: 'ZionTechGroup transformedourentire digitalinfrastructure. TheirAIsolutions increasedourefficiency by300%.'
                }
                {
                  name: 'MichaelChen'
                  role: 'CTOInnovateLab'
                  quote: 'Outstandingteamand exceptionalresults. Theydeliveredour mobileappahead ofscheduleand underbudget.'
                }
                {
                  name: 'EmilyRodriguez'
                  role: 'SecurityDirectorFinanceFirst'
                  quote: 'Thesecuritysolutions theyimplementedgave uscompletepeace ofmind. Highlyrecommended!'
                }
              ].map((testimonialindex) => (
                <divkey = { index }className = 'cardtext-centerhover: scale-105transition-allduration-300hover:shadow-2xl'
                >
                  <divclassName='flexjustify-centermb-4'>
                    { [...Array(5)].map((_i) =  > (
                      <Starkey = { i  }className = 'w-5 h-5text-yellow-400fill-currentanimate-pulse'
                        style = { { animationDelay: `${i * 0.1 }s` }}
                      />
                    ))}
                  </div>
                  <pclassName = 'text-zion-slate-lightmb-6italic'>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <divclassName = 'font-semiboldtext-white'>
                      {testimonial.name}
                    </div>
                    <divclassName='text-smtext-zion-slate'>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ModernFeaturesSection */}
        <Suspensefallback = { <LoadingSection / >  }>
          <ModernFeatures />
        </Suspense>

        {/* EnhancedTestimonialsSection */}
        <Suspensefallback={ <LoadingSection / >  }>
          <EnhancedTestimonials />
        </Suspense>

        {/* CTASection */}
        <sectionclassName='py-20bg-gradient-to-rfrom-zion-blueto-zion-purplerelativeoverflow-hidden'>
          <divclassName='absoluteinset-0bg-blackopacity-10' />
          <divclassName='containermx-autopx-6text-centerrelativez-10'>
            <h2className='text-4xlfont-boldtext-whitemb-6animate-slide-up'>
              ReadytoTransform YourBusiness?
            </h2>
            <pclassName='text-xltext-zion-slate-lightmb-8max-w-2xlmx-autoanimate-fade-in'>
              Jointhousandsof companiesthattrust ZionTechGroup fortheirtechnology needs. Let&apos; sbuildsomething amazingtogether.
            </p>
            <divclassName='flexflex-colsm: flex-rowgap-4justify-center'>
              <Linkto='/contact'
                className='bg-whitetext-zion-bluehover:bg-zion-slate-lightpx-8py-4rounded-lgfont-semiboldtext-lgtransition-allduration-300hover:scale-105hover:shadow-2xlflexitems-centerjustify-centergap-2group'
              >
                <TargetclassName='w-5 h-5group-hover:rotate-12transition-transformduration-300' />
                StartYourJourney Today
              </Link>
              <Linkto='/contact'
                className='border-2border-whitetext-whitehover:bg-whitehover:text-zion-bluepx-8py-4rounded-lgfont-semiboldtext-lgtransition-allduration-300hover:scale-105hover:shadow-2xl'
              >
                ScheduleaCall
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

exportdefaultHomeOptimized;
