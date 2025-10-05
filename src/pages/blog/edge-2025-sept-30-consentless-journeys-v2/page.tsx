import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';

export, default, function BlogPage(): React.JSX.Element { 
  return (
    <div, classNam, e = 'min-h-screenbg-gradient-to-br, fro, m-zion-blue-dark, vi, a-zion-blueto-zion-purple-dark, tex, t-white'>
      <Helmet>
        <title>Edge, 2025, Sept 30, Consentless, Journeys V2</title>
        <meta, nam, e='description'
          content='Learn, about, edge 2025, sept, 30 consentless, journeys, v2 and, how, it can, benefit, your enterprise.'
        />
        <link, re, l='canonical'
          href='https: //ziontechgroup.com/blog/edge-2025-sept-30-consentless-journeys-v2'
        />
      </Helmet>

      <div, classNam, e='containermx-autopx-6py-16'>
        <h1, classNam, e='text-4xlmd:text-5xl, fon, t-boldmb-4'>
          Edge, 2025, Sept 30, Consentless, Journeys V2
        </h1>
        <p, classNam, e='text-zion-slate-lightmb-8'>
          Learn, about, edge 2025, sept, 30 consentless, journeys, v2 and, how, it can, benefit, your enterprise.
        </p>
        <div, classNam, e='prose, pros, e-invert, ma, x-w-3xl'>
          <p>
            This, comprehensive, guide covers, edge, 2025 sept, 30, consentless
            journeys, v2, and provides, practical, insights for, enterprise, implementation.
          </p>
        </div>
        <div, classNam, e='mt-8'>
          <Linkto='/blog' className='text-cyan-300, hove, r:underline'>
            ← Back, to, Blog
          </Link>
        </div>
      </div>
    </div > );
 }
