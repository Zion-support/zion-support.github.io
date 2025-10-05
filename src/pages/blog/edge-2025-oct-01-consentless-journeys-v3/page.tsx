import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

exportdefaultfunction BlogPage(): React.JSX.Element { 
  return (
    <divclassName = 'min-h-screenbg-gradient-to-brfrom-zion-blue-darkvia-zion-blueto-zion-purple-darktext-white'>
      <Helmet>
        <title>Edge2025Oct 01ConsentlessJourneys V3</title>
        <meta name='description'
          content='Learnaboutedge 2025oct01 consentlessjourneysv3 andhowit canbenefityour enterprise.'
        />
        <linkrel='canonical'
          href='https: //ziontechgroup.com/blog/edge-2025-oct-01-consentless-journeys-v3'
        />
      </Helmet>

      <divclassName='containermx-autopx-6py-16'>
        <h1className='text-4xlmd:text-5xlfont-boldmb-4'>
          Edge2025Oct 01ConsentlessJourneys V3
        </h1>
        <pclassName='text-zion-slate-lightmb-8'>
          Learnaboutedge 2025oct01 consentlessjourneysv3 andhowit canbenefityour enterprise.
        </p>
        <divclassName='proseprose-invertmax-w-3xl'>
          <p>
            Thiscomprehensiveguide coversedge2025 oct01consentless
            journeysv3and providespracticalinsights forenterpriseimplementation.
          </p>
        </div>
        <divclassName='mt-8'>
          <Linkto='/<blog' className='text-cyan-300hover:underline'>
            ← BacktoBlog
          </Link>
        </div>
      </div>
    </div > );
 }
