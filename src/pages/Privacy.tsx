import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

constPrivacy: React.FC = () => { 
  return (
    <>
      <Helmet>
        <title>PrivacyPolicy - ZionTechGroup</title>
        <metaname = 'description'
          content='LearnhowZion TechGroupprotects yourprivacyand handlesyourpersonal informationinaccordance withapplicablelaws andregulations.'
        />
        <meta name='keywords'
          content='privacypolicydataprotectionpersonalinformationGDPRprivacyrights'
        />
      </Helmet>

      <divclassName = 'min-h-screenbg-gradient-to-brfrom-blue-50via-whiteto-teal-50' > {/* HeaderSection */ }
        <sectionclassName='bg-gradient-to-rfrom-blue-600to-purple-600py-20'>
          <divclassName='max-w-7xlmx-autopx-4sm: px-6lg:px-8text-center'>
            <motion.divinitial={{ opacity: 0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.6 }}
            >
              <h1className = 'text-4xlmd: text-5xlfont-boldtext-whitemb-6'>
                PrivacyPolicy
              </h1>
              <pclassName='text-xltext-blue-100max-w-3xlmx-auto'>
                Yourprivacyis importanttous. Thispolicyexplains howwecollectuseandprotectyour personalinformation.
              </p>
            </motion.div>
          </div>
        </section>

        <divclassName = 'max-w-4xlmx-autopx-4sm: px-6lg:px-8py-16'>
          <motion.divinitial={{ opacity: 0y: 20 }}
            animate = {{ opacity:  1y:  0 }}
            transition = {{ duration: 0.6delay: 0.2 }}
            className = 'bg-whiterounded-xlshadow-lgp-8proseprose-lgmax-w-none'
          >
            <pclassName='text-smtext-gray-600mb-8'>
              <strong>LastUpdated: </strong> January 152025
            </p>

            <h2className = 'text-2xlfont-boldtext-gray-900mb-4'>
              1. Introduction
            </h2>
            <pclassName='text-gray-600mb-6'>
              ZionTechGroup ("we" "our" or "us") iscommittedto protectingyourprivacy. ThisPrivacyPolicy explainshowwe collectuse
              discloseandsafeguardyour informationwhenyou visitourwebsite oruseour services.
            </p>

            <h2className = 'text-2xlfont-boldtext-gray-900mb-4'>
              2. InformationWeCollect
            </h2>
            <h3className='text-xlfont-semiboldtext-gray-900mb-3'>
              2.1PersonalInformation
            </h3>
            <pclassName='text-gray-600mb-4'>
              Wemaycollect personalinformationthat youvoluntarilyprovide
              tousincluding: </p>
            <ulclassName = 'list-disclist-insidetext-gray-600mb-6space-y-2'>
              <li>
                Nameandcontact information (emailaddressphonenumber
                mailingaddress)
              </li>
              <li>Companyinformationand jobtitle</li>
              <li>Projectrequirementsand businessneeds</li>
              <li>Communicationpreferences</li>
              <li>Paymentandbilling information</li>
            </ul>

            <h3className = 'text-xlfont-semiboldtext-gray-900mb-3'>
              2.2AutomaticallyCollected Information
            </h3>
            <pclassName='text-gray-600mb-4'>
              Whenyouvisit ourwebsitewemayautomatically collectcertaininformationincluding: </p>
            <ulclassName = 'list-disclist-insidetext-gray-600mb-6space-y-2'>
              <li>IPaddressand deviceinformation</li>
              <li>Browsertypeand version</li>
              <li>Operatingsystem</li>
              <li>Pagesvisitedand timespenton ourwebsite</li>
              <li>Referringwebsiteinformation</li>
              <li>Cookiesandsimilar trackingtechnologies</li>
            </ul>

            <h2className='text-2xlfont-boldtext-gray-900mb-4'>
              3. HowWeUse YourInformation
            </h2>
            <pclassName='text-gray-600mb-4'>
              Weusethe collectedinformationfor variouspurposesincluding: </p>
            <ulclassName = 'list-disclist-insidetext-gray-600mb-6space-y-2'>
              <li>Providingandimproving ourservices</li>
              <li>Communicatingwithyou aboutourservices</li>
              <li>Processingtransactionsand payments</li>
              <li>Respondingtoyour inquiriesandsupport requests</li>
              <li>Analyzingwebsiteusage andperformance</li>
              <li>Marketingandpromotional activities (withyourconsent)</li>
              <li>Complyingwithlegal obligations</li>
            </ul>

            <h2className = 'text-2xlfont-boldtext-gray-900mb-4'>
              4. InformationSharingand Disclosure
            </h2>
            <pclassName='text-gray-600mb-4'>
              Wedonot selltradeorrentyour personalinformationto thirdparties. Wemayshare yourinformationin thefollowingcircumstances: </p>
            <ulclassName = 'list-disclist-insidetext-gray-600mb-6space-y-2'>
              <li>
                Withserviceproviders whoassistus inoperatingour business
              </li>
              <li>Whenrequiredby laworto protectourrights</li>
              <li>Inconnectionwith abusinesstransfer ormerger</li>
              <li>Withyourexplicit consent</li>
            </ul>

            <h2className='text-2xlfont-boldtext-gray-900mb-4'>
              5. DataSecurity
            </h2>
            <pclassName='text-gray-600mb-6'>
              Weimplementappropriate technicalandorganizational measurestoprotect yourpersonalinformation againstunauthorizedaccess
              alterationdisclosureordestruction. Howevernomethodof
              transmissionoverthe internetorelectronic storageis100%
              secure.
            </p>

            <h2className = 'text-2xlfont-boldtext-gray-900mb-4'>
              6. CookiesandTracking Technologies
            </h2>
            <pclassName='text-gray-600mb-4'>
              Weusecookies andsimilartracking technologiestoenhance yourexperienceon ourwebsite. Youcancontrol cookiesettingsthrough
              yourbrowserpreferences.
            </p>

            <h2className='text-2xlfont-boldtext-gray-900mb-4'>
              7. YourRights
            </h2>
            <pclassName='text-gray-600mb-4'>
              Dependingonyour locationyoumayhave certainrightsregarding
              yourpersonalinformationincluding: </p>
            <ulclassName = 'list-disclist-insidetext-gray-600mb-6space-y-2'>
              <li>Righttoaccess yourpersonalinformation</li>
              <li>Righttocorrect inaccurateinformation</li>
              <li>Righttodelete yourpersonalinformation</li>
              <li>Righttorestrict processingofyour information</li>
              <li>Righttodata portability</li>
              <li>Righttoobject toprocessing</li>
            </ul>

            <h2className='text-2xlfont-boldtext-gray-900mb-4'>
              8. DataRetention
            </h2>
            <pclassName='text-gray-600mb-6'>
              Weretainyour personalinformationonly foraslong asnecessaryto fulfillthepurposes outlinedinthis PrivacyPolicyunlessalonger retentionperiodis requiredbylaw.
            </p>

            <h2className = 'text-2xlfont-boldtext-gray-900mb-4'>
              9. InternationalDataTransfers
            </h2>
            <pclassName='text-gray-600mb-6'>
              Yourinformationmay betransferredto andprocessedin countriesotherthan yourown. Weensureappropriate safeguardsarein placetoprotect yourinformationduring suchtransfers.
            </p>

            <h2className='text-2xlfont-boldtext-gray-900mb-4'>
              10. Children'sPrivacy
            </h2>
            <pclassName='text-gray-600mb-6'>
              Ourservicesare notintendedfor childrenunder13 yearsofage.
              Wedonot knowinglycollectpersonal informationfromchildren
              under13.
            </p>

            <h2className='text-2xlfont-boldtext-gray-900mb-4'>
              11. ChangestoThis PrivacyPolicy
            </h2>
            <pclassName='text-gray-600mb-6'>
              Wemayupdate thisPrivacyPolicy fromtimeto time. Wewillnotify youofany changesbyposting thenewPrivacy Policyonthis pageandupdating the "LastUpdated" date.
            </p>

            <h2className='text-2xlfont-boldtext-gray-900mb-4'>
              12. ContactUs
            </h2>
            <pclassName='text-gray-600mb-4'>
              Ifyouhave anyquestionsabout thisPrivacyPolicy orourprivacy
              practicespleasecontactus: </p>
            <divclassName = 'bg-blue-50p-6rounded-lg'>
              <pclassName='text-gray-700mb-2'>
                <strong>Email:</strong> privacy@ziontechgroup.com
              </p>
              <pclassName='text-gray-700mb-2'>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <pclassName = 'text-gray-700'>
                <strong>Address:</strong> 123InnovationDriveTechCityTC12345
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

exportdefaultPrivacy;
