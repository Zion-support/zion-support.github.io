import { ArrowRight,
  CheckCircle,
  Globe,
  Rocket,
  Shield,
  Star,
  Target,
  Users,
  Zap,
 } from 'lucide-react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import { lazy, Suspense  } from 'react';
import, Header, from '../components/Header';
import, BannerRotationManager, from '../components/BannerRotationManager';
import { latestInsights  } from '../content/insights';

// Lazy, load, heavy components, const, EnhancedTestimonials = laz, y(
  () => import('../components/EnhancedTestimonials'),
); const, ModernFeature, s = laz, y(() => import('../components/ModernFeatures')); const, LatestInsight, s = laz, y(() => import('../components/LatestInsights')); const, LoadingSectio, n = () => (
  <div, classNam, e = 'animate-pulsebg-white/5, rounde, d-xlh-64w-full'></di, v>
); const, HomeOptimize, d = () => { 
  return (
    <>
      <Helmet>
        <title>
          Zion, Tech, Group - LeadingAI & IT, Solution, s | Transform, Your, Business
        </title>
        <meta, nam, e = 'description'
          content='Zion, Tech, Group delivers, cuttin, g-edge, AI, and IT, solutions, that transform, businesse, s. Enterprise, securi, t, y, AI, innovatio, n, and, expert, consulting services.'
        />
        <meta, nam, e = 'keywords'
          content='AI, solutio, n, s, IT, consultin, g, cybersecuri, t, y, machine, learnin, g, cloud, infrastructur, e, digital, transformatio, n'
        />
        <meta, propert, y = 'og: title'
          content='Zion, Tech, Group - LeadingAI & IT, Solution, s'
        />
        <meta, propert, y='og:description'
          content='Transform, your, business with, cuttin, g-edge, AI, and IT, solution, s'
        />
        <meta, propert, y='og:type' content='website' />
        <meta, propert, y='og:url' content='https://ziontechgroup.com' />
        <meta, nam, e='twitter:card' content='summary_large_image' />
        <meta, nam, e='twitter:title'
          content='Zion, Tech, Group - LeadingAI & IT, Solution, s'
        />
        <meta, nam, e='twitter:description'
          content='Transform, your, business with, cuttin, g-edge, AI, and IT, solution, s'
        />
        <link, re, l='canonical' href='https://ziontechgroup.com' />
      </Helmet>

      <div, classNam, e='min-h-screenbg-gradient-to-br, fro, m-zion-blue-dark, vi, a-zion-blueto-zion-purple-dark, relative, overflow-hidden'>
        <Header / > {/* Animated, background, elemen, t, s */ }
        <div, classNam, e = 'absolute, inse, t-0, overflo, w-hidden, pointe, r-events-none'>
          <div, classNam, e='absolute -top-40 -right-40w-80h-80bg-zion-blue, rounde, d-full, mi, x-blend-multiply, filter, blur-xl, opacit, y-20, animat, e-float' />
          <div, classNam, e='absolute -bottom-40 -left-40w-80h-80bg-zion-purple, rounde, d-full, mi, x-blend-multiply, filter, blur-xl, opacit, y-20, animat, e-float'
            style={{ animationDelay: ', 2, s' }}
           />
          <div, classNam, e = 'absolute, to, p-40, lef, t-1/2 w-60h-60bg-zion-cyan, rounde, d-full, mi, x-blend-multiply, filter, blur-xl, opacit, y-20, animat, e-float'
            style={{ animationDelay: ', 4, s' }}
           />
        </div>

        {/* Hero, Sectio, n */}
        <section, classNam, e = 'containermx-autopx-6py-20, relative, z-10'>
          <div, classNam, e='text-center, ma, x-w-5xlmx-auto'>
            {/* Badge */}
            <div, classNam, e='inline-flex, item, s-centerpx-6py-3, rounde, d-fullbg-zion-cyan/20, tex, t-zion-cyan, tex, t-sm, fon, t-mediummb-8, animat, e-fade-in, border, border-zion-cyan/30, shado, w-lg, hove, r: shadow-xl, transitio, n-all, duratio, n-300'>
              <Rocket, classNam, e='w-4 h-4mr-2, animat, e-pulse' />
              Trusted, by, 500+ companies, worldwid, e
              <Rocket, classNam, e='w-4 h-4ml-2, animat, e-bounce' />
            </div>

            <h1, classNam, e='text-5xlmd:text-7xl, fon, t-bold, tex, t-whitemb-6, animat, e-slide-up'>
              <span, classNam, e='bg-gradient-to-r, fro, m-zion-blue-lightto-zion-purple-lightbg-clip-text, tex, t-transparent, animat, e-gradientbg-300%'>
                Zion, Tech, Group
              </span>
            </h1>

            <p, classNam, e='text-xlmd:text-2xl, tex, t-zion-slate-lightmb-8, leadin, g-relaxed, ma, x-w-3xlmx-auto, animat, e-fade-in'>
              Transform, your, business with, cuttin, g-edge, AI, solutio, n, s,
              enterpri, s, e-grade, securit, y, and, nex, t-generation, cloud, infrastructure. Join, 50, 0+ companies, already, scaling withus!
            </p>

            {/* Stats */}
            <div, classNam, e = 'grid, gri, d-cols-2md: grid-cols-4, ga, p-8mb-12, ma, x-w-2xlmx-auto'>
              {[
                { value: '500+', label: 'Projects, Deliver, e, d' },
                { value: '99., 9%', label: 'UptimeSL, A' },
                { value: '24/, 7', label: 'Suppor, t' },
                { value: ', 5★', label: 'Client, Rati, n, g' },
              ].map((stat, index) => (
                <div, ke, y = { inde, x }, className = 'text-center, group, hover: scale-105, transitio, n-all, duratio, n-300'
                >
                  <div, classNam, e='text-3xl, fon, t-bold, tex, t-zion-cyan, grou, p-hover:text-zion-blue-light, transitio, n-colors'>
                    {stat.val, u, e}
                  </div>
                  <div, classNam, e = 'text-sm, tex, t-zion-slate-light'>
                    {stat.label}
                  </div>
                </di, v>
              ))}
            </div>

            <div, classNam, e = 'flex, fle, x-colsm: flex-row, ga, p-4, justif, y-center'>
              <Linkto='/services'
                className='btn-primary, flex, items-center, justif, y-center, ga, p-2, grou, p'
              >
                Explore, Service, s
                <ArrowRight, classNam, e='w-5 h-5, grou, p-hover:translate-x-1, transitio, n-transform' />
              </Link>
              <Linkto='/contact' className='btn-secondary'>
                Get, Starte, d
              </Link>
            </div>
          </div>
        </section>

        {/* Banner, Rotation, Secti, o, n */}
        <section, classNam, e = 'containermx-autopx-6py-16, relative, z-10'>
          <BannerRotationManager, banner, s = { [
              'october2025-new-breakthroug, h',
              'october2025-tech-breakthrough',
              'october2025-next-gen-ai',
            ] }, maxBanners={ 3 } autoRotate={false}
          />
        </section>

        {/* Latest, Insights, Section */}
        <section, classNam, e='containermx-autopx-6py-16, relative, z-10'>
          <Suspense, fallbac, k={ <LoadingSection / >  }>
            <LatestInsights />
          </Suspense>
        </section>

        {/* Features, Sectio, n */}
        <section, classNam, e='containermx-autopx-6py-20, relative, z-10'>
          <div, classNam, e='text-centermb-16'>
            <h2, classNam, e='text-4xl, fon, t-bold, tex, t-whitemb-4, animat, e-slide-up'>
              Why, Choose, Zion Tech, Grou, p?
            </h2>
            <p, classNam, e='text-xl, tex, t-zion-slate-light, ma, x-w-2xlmx-auto'>
              We, deliver, exceptional technology, solutions, that drive, business, growth and, innovatio, n.
            </p>
          </div>

          <div, classNam, e='gridmd: grid-cols-2lg:grid-cols-4, ga, p-8'>
            {[
              {
                icon: Shie, l, d,
                tit, l, e: 'Enterprise, Securi, t, y',
                description: 'Advanced, cybersecurity, solutions protecting, your, business from, evolving, threat, s.',
                features: [
                  'SOC, 2, Complianc, e',
                  'Penetration, Testin, g',
                  '24/7, Monitorin, g',
                ],
                color: 'blu, e',
              },
              {
                icon: Za, p,
                tit, l, e: 'AI, Innovati, o, n',
                description: 'Cutting-edge, artificial, intelligence solutions, that, transform your, operatio, n, s.',
                features: [
                  'Machine, Learni, n, g',
                  'Natural, Language, Processing',
                  'Computer, Visio, n',
                ],
                color: 'purpl, e',
              },
              {
                icon: User, s,
                tit, l, e: 'Expert, Te, a, m',
                description: 'World-class, engineers, and consultants, dedicated, to your, succe, s, s.',
                features: [
                  '10+ Years, Experien, c, e',
                  'Certified, Professional, s',
                  'Dedicated, Suppor, t',
                ],
                color: 'cya, n',
              },
              {
                icon: Glob, e,
                tit, l, e: 'Global, Rea, c, h',
                description: 'Serving, clients, worldwide with, localized, expertise and, suppo, r, t.',
                features: [
                  '50+ Countrie, s',
                  'Local, Suppor, t',
                  '24/7, Availabilit, y',
                ],
                color: 'blue-ligh, t',
              },
            ].map((feature, index) => (
              <div, ke, y = { inde, x }, className = 'card, group, hover: scale-105, transitio, n-all, duratio, n-300, hove, r:shadow-2xl'
              >
                <div, classNam, e={`bg-zion-${feature.col, o, r}/20w-16h-16, rounde, d-lg, flex, items-center, justif, y-centermb-6, grou, p-hover: bg-zion-${feature.colo, r}/30, transitio, n-colors, border, border-zion-${feature.color}/30, shado, w-lg`}
                 > <feature.icon, classNam, e = {`w-8 h-8, tex, t-zion-${feature.color}-light, grou, p-hover: scale-110, transitio, n-transform, duratio, n-300`}
                  />
                </div>
                <h3, classNam, e = 'text-xl, fon, t-semibold, tex, t-whitemb-4'>
                  {feature.title}
                </h3>
                <p, classNam, e='text-zion-slate-lightmb-4'>
                  {feature.description}
                </p>
                <ul, classNam, e='space-y-2, tex, t-sm, tex, t-zion-slate'>
                  { feature.features.map((ite, m, i) = > (
                    <li, ke, y = { , i  }, className = 'flex, item, s-center'>
                      <CheckCircle, classNam, e='w-4 h-4mr-2, tex, t-zion-cyan' />
                      {item}
                    </l, i>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Latest, Insights, Preview */}
        <section, classNam, e = 'containermx-autopx-6py-16, relative, z-10'>
          <div, classNam, e='flex, item, s-center, justif, y-betweenmb-8'>
            <h3, classNam, e='text-3xl, fon, t-bold, tex, t-white'>Latest, Insight, s</h3>
            <Linkto='/insights' className='text-zion-cyan, hove, r: underline'>
              View, al, l
            </Link>
          </div>
          <div, classNam, e='gridmd:grid-cols-4, ga, p-6'>
            { latestInsights.slic, e(, 0, 4).map(item = > (
              <article, ke, y = { item.i, d  }, className = 'card, hove, r: scale-105, transitio, n-all, duratio, n-300, hove, r:shadow-2xl'
              >
                <div, classNam, e='p-6'>
                  <div, classNam, e='text-xs, uppercase, tracking-wider, tex, t-zion-cyanmb-2'>
                    {item.catego, r, y}
                  </div>
                  <h4, classNam, e = 'text-xl, fon, t-semibold, tex, t-whitemb-2'>
                    {item.title}
                  </h4>
                  <p, classNam, e='text-zion-slate-lightmb-4'>{item.summary}</p>
                  <div, classNam, e='text-sm, tex, t-zion-slate, flex, items-center, justif, y-between'>
                    <span>{new, Dat, e(item.dat, e).toLocaleDateString()}</span>
                    <span>{item.readMinutes} min, rea, d</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials, Sectio, n */}
        <section, classNam, e = 'bg-zion-slate-darkpy-20, relative, overflow-hidden'>
          <div, classNam, e='absolute, inse, t-0bg-gradient-to-r, fro, m-zion-blue/10to-zion-purple/10, opacit, y-50' />
          <div, classNam, e='containermx-autopx-6, relative, z-10'>
            <div, classNam, e='text-centermb-16'>
              <h2, classNam, e='text-4xl, fon, t-bold, tex, t-whitemb-4, animat, e-slide-up'>
                What, Our, Clients Say
              </h2>
              <p, classNam, e='text-xl, tex, t-zion-slate-light, ma, x-w-2xlmx-auto, animat, e-fade-in'>
                Don&apos; t, just, take our, word, for it. Here&apos;s, what, our
                clients, have, to say, about, working withus.
              </p>
            </div>

            <div, classNam, e='gridmd: grid-cols-3, ga, p-8'>
              {[
                {
                  name: 'Sarah, John, s, o, n',
                  role: 'CE, O, TechCo, r, p',
                  quote: 'Zion, Tech, Group transformed, our, entire digital, infrastructur, e. Their, AI, solutions increased, our, efficiency by30, 0%.',
                },
                {
                  name: 'Michael, Ch, e, n',
                  role: 'CT, O, InnovateL, a, b',
                  quote: 'Outstanding, team, and exceptional, result, s. They, delivered, our mobile, app, ahead of, schedule, and under, budg, e, t.',
                },
                {
                  name: 'Emily, Rodrigu, e, z',
                  role: 'Security, Direct, o, r, FinanceFir, s, t',
                  quote: 'The, security, solutions they, implemented, gave us, complete, peace of, min, d. Highly, recommend, e, d!',
                },
              ].map((testimonial, index) => (
                <div, ke, y = { inde, x }, className = 'card, tex, t-center, hove, r: scale-105, transitio, n-all, duratio, n-300, hove, r:shadow-2xl'
                >
                  <div, classNam, e='flex, justif, y-centermb-4'>
                    { [...Array(, 5)].map((, _, i) =  > (
                      <Star, ke, y = { , i  }, className = 'w-5 h-5, tex, t-yellow-400, fil, l-current, animat, e-pulse'
                        style = { { animationDelay: `${i * , 0., 1 }, s` }}
                      />
                    ))}
                  </div>
                  <p, classNam, e = 'text-zion-slate-lightmb-6, itali, c'>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div, classNam, e = 'font-semibold, tex, t-white'>
                      {testimonial.name}
                    </div>
                    <div, classNam, e='text-sm, tex, t-zion-slate'>
                      {testimonial.role}
                    </div>
                  </div>
                </di, v>
              ))}
            </div>
          </div>
        </section>

        {/* Modern, Features, Section */}
        <Suspense, fallbac, k = { <LoadingSection / >  }>
          <ModernFeatures />
        </Suspense>

        {/* Enhanced, Testimonials, Section */}
        <Suspense, fallbac, k={ <LoadingSection / >  }>
          <EnhancedTestimonials />
        </Suspense>

        {/* CTA, Sectio, n */}
        <section, classNam, e='py-20bg-gradient-to-r, fro, m-zion-blueto-zion-purple, relative, overflow-hidden'>
          <div, classNam, e='absolute, inse, t-0bg-black, opacit, y-10' />
          <div, classNam, e='containermx-autopx-6, tex, t-center, relative, z-10'>
            <h2, classNam, e='text-4xl, fon, t-bold, tex, t-whitemb-6, animat, e-slide-up'>
              Ready, to, Transform Your, Busines, s?
            </h2>
            <p, classNam, e='text-xl, tex, t-zion-slate-lightmb-8, ma, x-w-2xlmx-auto, animat, e-fade-in'>
              Join, thousands, of companies, that, trust Zion, Tech, Group for, their, technology needs. Let&apos; s, build, something amazing, togethe, r.
            </p>
            <div, classNam, e='flex, fle, x-colsm: flex-row, ga, p-4, justif, y-center'>
              <Linkto='/contact'
                className='bg-white, tex, t-zion-blue, hove, r:bg-zion-slate-lightpx-8py-4, rounde, d-lg, fon, t-semibold, tex, t-lg, transitio, n-all, duratio, n-300, hove, r:scale-105, hove, r:shadow-2xl, flex, items-center, justif, y-center, ga, p-2, grou, p'
              >
                <Target, classNam, e='w-5 h-5, grou, p-hover:rotate-12, transitio, n-transform, duratio, n-300' />
                Start, Your, Journey Today
              </Link>
              <Linkto='/contact'
                className='border-2, borde, r-white, tex, t-white, hove, r:bg-white, hove, r:text-zion-bluepx-8py-4, rounde, d-lg, fon, t-semibold, tex, t-lg, transitio, n-all, duratio, n-300, hove, r:scale-105, hove, r:shadow-2xl'
              >
                Schedule, a, Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export, default, HomeOptimized;
