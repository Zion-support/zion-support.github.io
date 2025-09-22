:src/components/mobile-app/CommunityTrust.tsx
<<<<<<< HEAD

import React from "react",
import { Star } from 'lucide-react'
import { Star } from 'lucide-react'
:src_backup/components/mobile-app/CommunityTrust.tsx

<<<<<<< HEAD
import { Star } from 'lucide-react';
export const CommunityTrust: React.FC = () => {
  // Stats display with social proof
  const stats = [
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export const CommunityTrust: React.FC = () => {
// Stats display with social proof
  const stats = [
import { Star } from 'lucide-react';
'
import { Star } from 'lucide-react';
export const CommunityTrust: React.FC = () => {;
  // Stats display with social proof;
  const stats = [;'
    { value: '4 && 4.8', label: 'App Store Rating' },;'
    { value: '50K+', label: 'Downloads' },;'
    { value: '96%', label: 'User Satisfaction' },;'
    { value: '12M+', label: 'Matches Made' },;
  ];

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <section className='py-16 bg-zion-blue'>;
      <div className='container mx-auto px-4'>;
        <div className='text-center mb-12'>;
          <h2 className='text-3xl md:text-4xl font-bold text-white'>;
            Trusted by the{' '}
:src/components/mobile-app/CommunityTrust.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <span className='text-zion-cyan'>Tech Community</span>;
          </h2>;'
          <p className='mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto'>;'
import React from 'react'; import { Star } from 'lucide-react';'
import React from './react';'
import { Star } from 'lucide-react';
export const CommunityTrust: React.FC = () => {};
  // Stats display with social proof;
  const stats = [;

'
    { value: '4.8', label: 'App Store Rating' },'
    { value: '50K+', label: 'Downloads' },'
    { value: '96%', label: 'User Satisfaction' },'
    { value: '12M+', label: 'Matches Made' },

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/CommunityTrust.tsx
        </div>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

        {/* Rating display */}'
        <div className='max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6'>;'
          <div className='flex justify-center mb-4'>;
            {[1, 2, 3, 4, 5].map(star => (;
              <Star;
        {/* Stats Grid */}'
        <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 16'>;
          {stats.map ((stat, index) => (
            <div;
              key={index}'
              className='bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 text - center';
            >;'
              <div className='text - 3xl md:text - 4xl font - bold text - zion - cyan mb - 2'>;
                {stat.value}
              </div>;'
              <div className='text - zion - slate - light'>{stat.label}</div>            </div>))}
        </div>;
        {/* Rating display */}'
        <div className='max - w-3xl mx - auto bg - zion - blue - dark border border - zion - purple / 30 rounded - lg p - 6'>;'
          <div className='flex justify - center mb - 4'>;
            {[1, 2, 3, 4, 5].map (star => (
              <Star;
                key={star}'
                className='w - 6 h - 6 text - zion - cyan';'
                fill='current_color';
              />            ))}

:src/components/mobile-app/CommunityTrust.tsx
  ]
:src_backup/components/mobile-app/CommunityTrust.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    { value: "4.8", label: "App Store Rating" },
    { value: "50K+", label: "Downloads" },
    { value: "96%", label: "User Satisfaction" },
    { value: "12M+", label: "Matches Made" }
  ],

  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted by the <span className="text-zion-cyan">Tech Community</span>
          </h2>"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            Join thousands of professionals who are already using the Zion mobile app to connect, hire, and work;
          </p>
        </div>
:src/components/mobile-app/CommunityTrust.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
              <div className="text-zion-slate-light">{stat.label}</div>
            </div>
import React from "react",;
import { Star } from 'lucide-react';
export const CommunityTrust: React.FC = () => {;
  // Stats display with social proof;
  const stats = [;
    { value: "4.8", label: "App Store Rating" },;
    { value: "50K+", label: "Downloads" },;
    { value: "96%", label: "User Satisfaction" },;
    { value: "12M+", label: "Matches Made" }
  ];
  return (;
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold text-white">;
            Trusted by the <span className="text-zion-cyan">Tech Community</span>;
          </h2>;
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
            Join thousands of professionals who are already using the Zion mobile app to connect, hire, and work;
          </p>;
        </div>;
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">;
          {stats.map((stat, index) => (;
            <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">;
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>;
              <div className="text-zion-slate-light">{stat.label}</div>;
            </div>;
          ))}

:src_backup/components/mobile-app/CommunityTrust.tsx
          </div>;
          <blockquote className='text-center text-lg text-white italic mb-4'>;
            "The Zion app has completely changed how I find tech talent. The AI;
=======
          </div>;'
          <blockquote className='text-center text-lg text-white italic mb-4'>;"
            "The Zion app has completely changed how I find tech talent. The AI;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/CommunityTrust.tsx
            matching is spot on and I can manage everything from anywhere.";
          </blockquote>;'
          <div className='text-center'>;'
            <div className='font-semibold text-zion-cyan'>Sarah Johnson</div>;'
            <div className='text-sm text-zion-slate-light'>CTO at TechFlow</div>          </div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>;
      </div>;
    </section>;"
          <div className="text-center">;"
            <div className="font-semibold text-zion-cyan">Sarah Johnson</div>;"
            <div className="text-sm text-zion-slate-light">CTO at TechFlow</div>;

{/* Stats Grid */}"
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => ("
            <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">"
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>"
              <div className="text-zion-slate-light">{stat.label}</div>
            </div>"
import React from "react",;'
import { Star } from 'lucide-react';
export const CommunityTrust: React.FC = () => {;
  // Stats display with social proof;
  const stats = [;"
    { value: "4.8", label: "App Store Rating" },;"
    { value: "50K+", label: "Downloads" },;"
    { value: "96%", label: "User Satisfaction" },;"
    { value: "12M+", label: "Matches Made" }

  ];
return (;
<<<<<<< HEAD:src/components/mobile-app/CommunityTrust.tsx
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold text-white">;
=======
  return (;"
    <section className="py-16 bg-zion-blue">;"
      <div className="container mx-auto px-4">;"
        <div className="text-center mb-12">;"
          <h2 className="text-3xl md:text-4xl font-bold text-white">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/CommunityTrust.tsx
            Trusted by the <span className="text-zion-cyan">Tech Community</span>;
          </h2>;"
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
            Join thousands of professionals who are already using the Zion mobile app to connect, hire, and work;
          </p>;
        </div>;

        {/* Stats Grid */}"
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">;
          {stats.map((stat, index) => (;"
            <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">;"
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>;"
              <div className="text-zion-slate-light">{stat.label}</div>;
            </div>;
          ))}
:src/components/mobile-app/CommunityTrust.tsx
<<<<<<< HEAD

        </div>;

        {/* Rating display */}"
        <div className="max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">"
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => ("
              <Star key={star} className="w-6 h-6 text-zion-cyan" fill="currentColor" />
            ))}
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/CommunityTrust.tsx
          </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <blockquote className="text-center text-lg text-white italic mb-4">
=======
          </div>"
          <blockquote className="text-center text-lg text-white italic mb-4">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/CommunityTrust.tsx
            "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere."
          </blockquote>"
          <div className="text-center">"
            <div className="font-semibold text-zion-cyan">Sarah Johnson</div>"
            <div className="text-sm text-zion-slate-light">CTO at TechFlow</div>
          </div>
          <blockquote className='text-center text-lg text-white italic mb-4'>
            "The Zion app has completely changed how I find tech talent. The AI
            matching is spot on and I can manage everything from anywhere."
          </blockquote>
          <div className='text-center'>
            <div className='font-semibold text-zion-cyan'>Sarah Johnson</div>
            <div className='text-sm text-zion-slate-light'>CTO at TechFlow</div>
origin/cursor/automate-test-improve-and-merge-code-2533
          </div>
        </div>
      </div>
    </section>
:src/components/mobile-app/CommunityTrust.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  )
},

          </div>;"
          <blockquote className="text-center text-lg text-white italic mb-4">;"
            "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere.";
          </blockquote>;"
          <div className="text-center">;"
            <div className="font-semibold text-zion-cyan">Sarah Johnson</div>;"
            <div className="text-sm text-zion-slate-light">CTO at TechFlow</div>;
          </div>;
        </div>;
      </div>;
    </section>;
  );
}</div>) ) ;

  )
},

:src_backup/components/mobile-app/CommunityTrust.tsx
}</div>) ) 
}</div> <blockquote className="text-center text-lg text-white italic mb-4" > "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere." </blockquote> <div className="text-center" > <div className="font-semibold text-zion-cyan" >Sarah Johnson</div> <div className="text-sm text-zion-slate-light" >CTO at TechFlow</div> </div> </div> </div> </section>) 
};
'"  )
};
};

          </div>;'
          <blockquote className='text - center text - lg text - white italic mb - 4'>;"
            "The Zion app has completely changed how I find tech talent. The AI;"
            matching is spot on and I can manage everything from anywhere.";
          </blockquote>;'
          <div className='text - center'>;'
            <div className='font - semibold text - zion - cyan'>Sarah Johnson</div>;'
            <div className='text - sm text - zion - slate - light'>CTO at TechFlow</div>          </div>;
        </div>;
      </div>;
    </section>;"
          <div className="text - center">;"
            <div className="font - semibold text - zion - cyan">Sarah Johnson</div>;"
            <div className="text - sm text - zion - slate - light">CTO at TechFlow</div>;
  ];
  return ("
    <section className="py - 16 bg - zion - blue">;"
      <div className="container mx - auto px - 4">;"
        <div className="text - center mb - 12">;"
          <h2 className="text - 3xl md:text - 4xl font - bold text - white">;"
            Trusted by the <span className="text - zion - cyan">Tech Community</span>;
          </h2>;"
          <p className="mt - 4 text - zion - slate - light text - xl max - w-3xl mx - auto">;
            Join thousands of professionals who are already using the Zion mobile app to connect, hire, and work;
          </p>;
        </div>;
        {/* Stats Grid */}"
        <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 16">;
          {stats.map ((stat, index) => ("
            <div key={index} className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 text - center">;"
              <div className="text - 3xl md:text - 4xl font - bold text - zion - cyan mb - 2">{stat.value}</div>;"
              <div className="text - zion - slate - light">{stat.label}</div>;
            </div>))}
        </div>;
        {/* Rating display */}"
        <div className="max - w-3xl mx - auto bg - zion - blue - dark border border - zion - purple / 30 rounded - lg p - 6">;"
          <div className="flex justify - center mb - 4">;
            {[1, 2, 3, 4, 5].map ((star) => ("
              <Star key={star} className="w - 6 h - 6 text - zion - cyan" fill="current_color" />))}
          </div>;"
          <blockquote className="text - center text - lg text - white italic mb - 4">;"
            "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere.";
          </blockquote>;"
          <div className="text - center">;"
            <div className="font - semibold text - zion - cyan">Sarah Johnson</div>;"
            <div className="text - sm text - zion - slate - light">CTO at TechFlow</div>;
          </div>;
        </div>;
      </div>;
    </section>);
}</div>) );"
}</div> <blockquote className="text - center text - lg text - white italic mb - 4" > "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere." </blockquote> <div className="text - center" > <div className="font - semibold text - zion - cyan" >Sarah Johnson</div> <div className="text - sm text - zion - slate - light" >CTO at TechFlow</div> </div> </div> </div> </section>);
}'"
'"  );
:src_backup/components/mobile-app/CommunityTrust.tsx
}
<<<<<<< HEAD:src/components/mobile-app/CommunityTrust.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/CommunityTrust.tsx
);
}</div>) ) ;
}</div> <blockquote className="text-center text-lg text-white italic mb-4" > "The Zion app has completely changed how I find tech talent. The AI matching is spot on and I can manage everything from anywhere." </blockquote> <div className="text-center" > <div className="font-semibold text-zion-cyan" >Sarah Johnson</div> <div className="text-sm text-zion-slate-light" >CTO at TechFlow</div> </div> </div> </div> </section>) ;
};
'"
:src/components/mobile-app/CommunityTrust.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/CommunityTrust.tsx
