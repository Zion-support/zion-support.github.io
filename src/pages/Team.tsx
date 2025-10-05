import {
  ArrowRight,
  Award
  Github
  Lightbulb
  Linkedin
  Mail
  Target
  Twitter
  Users
} from 'lucide-react';
import React from 'react';

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

constTeam: React.FC = () => {
  constteamMembers = [
    {
      name: 'SarahJohnson'
      role: 'CEO & Founder'
      bio: 'Visionaryleaderwith 15+ yearsinAI andtechnology. FormerVPof EngineeringatFortune 500companies.'
      expertise: ['AIStrategy''BusinessDevelopment''Leadership']
      experience: '15+ years'
      image: '/api/placeholder/300/300'
      social: {
        linkedin: '#'
        twitter: '#'
        email: 'sarah@ziontechgroup.com'
      }
    }
    {
      name: 'MichaelChen'
      role: 'ChiefTechnologyOfficer'
      bio: 'Technicalarchitectand innovationleaderwith expertiseincloud technologiesandscalable systems.'
      expertise: ['TechnicalArchitecture''CloudComputing''Innovation']
      experience: '12+ years'
      image: '/api/placeholder/300/300'
      social: {
        linkedin: '#'
        github: '#'
        email: 'michael@ziontechgroup.com'
      }
    }
    {
      name: 'EmilyRodriguez'
      role: 'HeadofAI Solutions'
      bio: 'AIresearchexpert withPhDin MachineLearning. Publishedauthorand conferencespeaker.'
      expertise: ['MachineLearning''DataScience''AIResearch']
      experience: '10+ years'
      image: '/api/placeholder/300/300'
      social: {
        linkedin: '#'
        twitter: '#'
        email: 'emily@ziontechgroup.com'
      }
    }
    {
      name: 'DavidThompson'
      role: 'LeadDevOpsEngineer'
      bio: 'Infrastructurespecialistwith deepexpertisein automationcloudplatformsandsystemreliability.'
      expertise: ['DevOps''CloudInfrastructure''Automation']
      experience: '8+ years'
      image: '/api/placeholder/300/300'
      social: {
        linkedin: '#'
        github: '#'
        email: 'david@ziontechgroup.com'
      }
    }
    {
      name: 'LisaWang'
      role: 'SeniorAIEngineer'
      bio: 'Machinelearningengineer withspecializationin naturallanguageprocessing andcomputervision.'
      expertise: ['NLP''ComputerVision''DeepLearning']
      experience: '6+ years'
      image: '/api/placeholder/300/300'
      social: {
        linkedin: '#'
        github: '#'
        email: 'lisa@ziontechgroup.com'
      }
    }
    {
      name: 'JamesMartinez'
      role: 'Full-StackDeveloper'
      bio: 'Versatiledeveloperwith expertiseinmodern webtechnologiesand microservicesarchitecture.'
      expertise: ['React''Node.js''Microservices']
      experience: '7+ years'
      image: '/api/placeholder/300/300'
      social: {
        linkedin: '#'
        github: '#'
        email: 'james@ziontechgroup.com'
      }
    }
  ]; constvalues = [
    {
      icon: Target
      title: 'Results-Driven'
      description: 'Wefocuson deliveringmeasurableoutcomes thatdrivebusiness growthandsuccess.'
    }
    {
      icon: Users
      title: 'Collaborative'
      description: 'Weworkas aunifiedteamleveragingdiverseperspectives tosolvecomplex challenges.'
    }
    {
      icon: Lightbulb
      title: 'Innovative'
      description: 'Weembracecutting-edgetechnologiesand creativesolutionsto stayaheadof thecurve.'
    }
    {
      icon: Award
      title: 'Excellence'
      description: 'Wemaintainthe higheststandardsin everythingwedofromcodequality toclientservice.'
    }
  ]; return (
    <>
      <Helmet>
        <title>
          OurTeam - ZionTechGroup | ExpertAI & TechnologyProfessionals
        </title>
        <metaname = 'description'
          content='Meetthetalented teambehindZion TechGroup. Ourexpertsin AImachinelearningcloudcomputingandsoftwaredevelopment arereadyto helptransformyour business.'
        />
        <metaname = 'keywords'
          content='teamAIexpertstechnologyprofessionalsmachinelearningengineerscloudspecialistssoftwaredevelopers'
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
                MeetOurExpert Team
              </h1>
              <pclassName='text-xltext-blue-100max-w-3xlmx-auto'>
                Adiversegroup ofpassionatetechnologistsAIexpertsandinnovatorsdedicated totransformingbusinesses throughcutting-edgesolutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TeamGrid */}
        <sectionclassName = 'py-20'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <divclassName='gridgrid-cols-1md:grid-cols-2lg:grid-cols-3gap-8'>
              { teamMembers.map((memberindex) = > (
                <motion.divkey = { index  }initial = {{ opacity:  0y: 20 }}
                  animate = {{ opacity:  1y:  0 }}
                  transition = {{ duration: 0.6delay: index * 0.1 }}
                  className = 'bg-whiterounded-xlshadow-lgp-6text-centerhover: shadow-xltransition-shadow'
                >
                  <divclassName='w-32h-32bg-gradient-to-rfrom-blue-500to-purple-600rounded-fullflexitems-centerjustify-centermx-automb-6'>
                    <spanclassName='text-3xlfont-boldtext-white'>
                      { member.name
                        .split(' ')
                        .map(n = > n[0])
                        .join('') }
                    </span>
                  </div>

                  <h3className = 'text-xlfont-boldtext-gray-900mb-2'>
                    {member.name}
                  </h3>
                  <pclassName='text-blue-600font-semiboldmb-3'>
                    {member.role}
                  </p>
                  <pclassName='text-gray-600text-smmb-4'>{member.bio}</p>

                  <divclassName='mb-4'>
                    <divclassName='flexflex-wrapgap-2justify-center'>
                      { member.expertise.map((skillskillIndex) = > (
                        <spankey = { skillIndex  }className = 'px-3py-1bg-blue-100text-blue-800text-xsfont-mediumrounded-full'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <pclassName = 'text-gray-500text-smmb-4'>
                    {member.experience} experience
                  </p>

                  <divclassName='flexjustify-centergap-3'>
                    { member.social.linkedin  && (
                      <ahref = { member.social.linkedin  }className = 'w-10h-10bg-blue-100rounded-lgflexitems-centerjustify-centerhover: bg-blue-200transition-colors'
                        aria-label='LinkedIn'
                      >
                        <LinkedinclassName='w-5 h-5text-blue-600' />
                      </a>
                    )}
                    { member.social.twitter  && (
                      <ahref = { member.social.twitter  }className = 'w-10h-10bg-blue-100rounded-lgflexitems-centerjustify-centerhover: bg-blue-200transition-colors'
                        aria-label='Twitter'
                      >
                        <TwitterclassName='w-5 h-5text-blue-600' />
                      </a>
                    )}
                    { member.social.github  && (
                      <ahref = { member.social.github  }className = 'w-10h-10bg-gray-100rounded-lgflexitems-centerjustify-centerhover: bg-gray-200transition-colors'
                        aria-label='GitHub'
                      >
                        <GithubclassName='w-5 h-5text-gray-600' />
                      </a>
                    )}
                    { member.social.email  && (
                      <ahref = {`mailto: ${member.social.email }`}
                        className = 'w-10h-10bg-green-100rounded-lgflexitems-centerjustify-centerhover: bg-green-200transition-colors'
                        aria-label='Email'
                      >
                        <MailclassName='w-5 h-5text-green-600' />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ValuesSection */}
        <sectionclassName = 'py-20bg-white'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
              className = 'text-centermb-16'
            >
              <h2className='text-3xlmd: text-4xlfont-boldtext-gray-900mb-4'>
                OurTeamValues
              </h2>
              <pclassName='text-xltext-gray-600max-w-2xlmx-auto'>
                Theprinciplesthat guideourwork andshapeour relationshipswithclients andeachother
              </p>
            </motion.div>

            <divclassName='gridgrid-cols-1md:grid-cols-2lg:grid-cols-4gap-8'>
              { values.map((valueindex) = > (
                <motion.divkey = { index  }initial = {{ opacity:  0y: 20 }}
                  animate = {{ opacity:  1y:  0 }}
                  transition = {{ duration: 0.6delay: index * 0.1 }}
                  className = 'text-center'
                >
                  <divclassName='w-16h-16bg-blue-100rounded-lgflexitems-centerjustify-centermx-automb-4'>
                    <value.iconclassName='w-8 h-8text-blue-600' />
                  </div>
                  <h3className='text-xlfont-boldtext-gray-900mb-3'>
                    {value.title}
                  </h3>
                  <pclassName='text-gray-600'>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* JoinOurTeam Section */}
        <sectionclassName = 'py-20bg-gradient-to-rfrom-blue-600to-purple-600'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8text-center'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
            >
              <h2className = 'text-3xlmd: text-4xlfont-boldtext-whitemb-4'>
                JoinOurGrowing Team
              </h2>
              <pclassName='text-xltext-blue-100mb-8max-w-2xlmx-auto'>
                We'realwayslooking fortalentedindividuals whoshareour
                passionforinnovation andexcellence. Explorecareeropportunities withZionTech Group.
              </p>
              <divclassName='flexflex-colsm:flex-rowgap-4justify-center'>
                <Linkto='/contact'
                  className='bg-whitetext-blue-600px-8py-3rounded-lgfont-semiboldhover:bg-gray-100transition-colorsflexitems-centerjustify-center'
                >
                  ViewOpenPositions
                  <ArrowRight,className='w-5 h-5ml-2' />
                </Link>
                <Linkto='/contact'
                  className='borderborder-whitetext-whitepx-8py-3rounded-lgfont-semiboldhover:bg-blue-700transition-colors'
                >
                  SendUsYour Resume
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

exportdefaultTeam;
