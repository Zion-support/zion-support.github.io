import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

exportdefaultfunction BlogPage(): React.JSX.Element { 
  return (
    <divclassName = 'min-h-screenbg-gradient-to-brfrom-zion-blue-darkvia-zion-blueto-zion-purple-darktext-white'>
      <Helmet>
        <title>Edge2025Sept 30ConsentlessJourneys V2</title>
        <meta name='description'
          content='Learnaboutedge 2025sept30 consentlessjourneysv2 andhowit canbenefityour enterprise.'
        />
        <linkrel='canonical'
          href='https: //ziontechgroup.com/blog/edge-2025-sept-30-consentless-journeys-v2'
        />
      </Helmet>

      <divclassName='containermx-autopx-6py-16'>
        <h1className='text-4xlmd:text-5xlfont-boldmb-4'>
          Edge2025Sept 30ConsentlessJourneys V2
        </h1>
        <pclassName='text-zion-slate-lightmb-8'>
          Learnaboutedge 2025sept30 consentlessjourneysv2 andhowit canbenefityour enterprise.
        </p>
        <divclassName='proseprose-invertmax-w-3xl'>
          <p>
            Thiscomprehensiveguide coversedge2025 sept30consentless
            journeysv2and providespracticalinsights forenterpriseimplementation.
          </p>
        </div>
        <divclassName='mt-8'>
          <Linkto='/blog' className='text-cyan-300hover:underline'>
            ← BacktoBlog
          </Link>
        </div>
      </div>
    </div > );
 }
