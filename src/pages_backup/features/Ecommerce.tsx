'useclient'
import React from 'react'
import { Helmet   } from 'react-helmet-async'
import { ArrowRight   } from 'lucide-react'
importNavigationfrom '../components/Navigation'
importFooterfrom '../components/Footer'

    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ecommerce - ZionTechGroup</title>
        <metaname="description" content="Professionalecommerceservicesandsolutions." />
        <metaname="keywords" content="ecommerce, services, solutions, technology" />
      </Helmet>
      <Navigation />
      
      <mainclassName="p t-16">
        <divclassName="f l exitems-centerjustify-centermin-h-screen">
          <divclassName="t e xt-center">
            <h1 className="t e xt-4xlfont-boldtext-whitemb-4">Ecommerce</h1>
            <pclassName="t e xt-gray-300 mb-8">Thispageisunderconstruction.</p>
            <buttonclassName="b g-gradient-to-rfrom-purple-500 to-pink-500 text-whitepx-8 py-3 rounded-lgfont-semiboldhover:from-purple-600 hover:to-pink-600 transition-allduration-300 flexitems-centerjustify-centermx-auto">
              LearnMore
              <ArrowRightclassName="w-5 h-5 m l-2" />
            </button>
          </div>
      </main>
      <Footer />
    </div>
  );
};

exportdefaultEcommercePage;
