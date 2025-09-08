

import React from 'react';,
</Head> <QuickNavigation /> > Research Reports </motion.h1> <motion.p  /> Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making. </motion.p> <motion.div </span /> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"  /> Featured Report </h2> </motion.div> {
import React from 'react';

 </Head> <QuickNavigation /> > Research Reports </motion.h1> <motion.p  /> Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making. </motion.p> <motion.div </span /> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"  /> Featured Report </h2> </motion.div> {

</Head> <QuickNavigation /> > Research Reports </motion.h1> <motion.p  /> Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making. </motion.p> <motion.div </span /> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"  /> Featured Report </h2> </motion.div> {

import React from 'react';

 </Head> <QuickNavigation /> > Research Reports </motion.h1> <motion.p  /> Access our comprehensive research, industry analysis, and technology insights that drive innovation and strategic decision-making. </motion.p> <motion.div </span /> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"  /> Featured Report </h2> </motion.div> {
  reports.filter (report => report.featured) .map ( (report, index) => (<motion.div key= {}
  index}
}</span />) )
}</div> </div> </div> <div className="flex flex-col sm: flex-row gap-4 justify-center"  /> <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2"  /> <Download className="w-5 h-5" /> <span />Download Full Report</span> </button> <button className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-2"  /> <Eye className="w-5 h-5" /> <span />Preview Report</span> </button> </div> </motion.div>) )
}</div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"  /> All Reports </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto"  /> Explore our comprehensive research across different technology domains </p> </motion.div> {}
  /* Category Pills */,}
}<motion.div  /> {
  categories.map ( (category, index) => (<button key= {}
  index}
}className= {
  `px-6 py-3 rounded-full font-medium transition-all duration-200 $ {
  category.active ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
}`
}> {
  category.name
}({
  category.count
}) </button>) )
}</motion.div> > <div className= {
  `w-16 h-16 bg-gradient-to-br $ {
  report.color
}rounded-xl flex items-center justify-center text-white mb-6`
} /> {}
  report.icon }
}</div> </span> <button className="text-cyan-400 hover: text-cyan-300 transition-colors duration-200 inline-flex items-center space-x-1"  /> <span />Download</span> <Download className="w-4 h-4" /> </button> </div> </motion.article>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6"  /> Need Custom Research? </h2> <p className="text-xl text-gray-300 mb-8"  /> Our research team can conduct custom studies and analysis tailored to your specific industry needs and challenges. </p> <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center space-x-2"  /> <span />Request Custom Research</span> <ArrowRight className="w-5 h-5" /> </a> <a href="/services" className="border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200"  /> View Research Services </a> </div> </motion.div> </div> </section> </div> </UltraAdvancedFuturisticBackground>) ,
};

export default ReportsPage;
import Head from 'next/head';
import { motion } from 'framer-motion';

import { FileText;
  Download;
  Calendar;
  User;
  Tag;
  ArrowRight;
  TrendingUp;
  BarChart3;
  Brain;
  Atom;
  Globe;
  Shield;
  Zap;
  Eye;
  Clock;}
  Award;}
  } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

const ReportsPage: React.FC;

