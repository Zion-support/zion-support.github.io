<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
{

=======
  {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/AppTestimonials.tsx
    name: 'Sarah Williams'
    role: 'Tech Recruiter'
    text: 'As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.'
    rating: 5
    avatar: '/placeholder.svg'
  }
  {
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card";
const testimonials = null;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  },]
export const AppTestimonials: React.FC = () => {
  return (    avatar: "/placeholder.svg";
  }
];
export const AppTestimonials: React.FC = () => {
  return (
    <section className='py-16 bg-zion-blue'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/AppTestimonials.tsx
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            What Our Users Say
          </h2>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            Join thousands of satisfied users who have transformed their tech
            careers with the Zion mobile app.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <Card
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
=======
{{{name: 'Sarah Williams';
    role: 'Tech Recruiter';
    text: 'As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.';
    rating: 5;
    avatar: '/placeholder.svg';
  }
  {}];
export const AppTestimonials: React.FC = () => {return (    avatar: "/placeholder.svg";
  }
];
export const AppTestimonials: React.FC = () => {return (<section className='py-16 bg-zion-blue'>;
import { Card, CardContent, CardFooter  } from '@/components/ui/card';
const testimonials  = null;<div className='container mx-auto px-4'>;
        <div className='text-center mb-12'>;
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>;
            What Our Users Say;
          </h2>;
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>;
            Join thousands of satisfied users who have transformed their tech;
            careers with the Zion mobile app.;
          </p>;
        </div>;
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
          {testimonials.map((testimonial, index) => (<Card;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/mobile-app/AppTestimonials.tsx
              key={index}
              className='bg-zion-blue-dark border-zion-purple/30';
            >;
              <CardContent className='pt-6'>;
                <div className='flex mb-4'>;
                  {Array.from({ length: 5 }).map((_, i) => (<Star;
                      key={i}
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}                    />
                  ))}
                </div>
                <p className='text-gray-200 mb-6'>"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className='border-t border-zion-purple/20 pt-4'>
                <div className='flex items-center'>
                  <div className='h-10 w-10 rounded-full overflow-hidden mr-4'>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className='h-full w-full object-cover'
                      loading='lazy'
                    />
                  </div>
                  <div>
                    <p className='font-semibold text-white'>
                      {testimonial.name}
                    </p>
                    <p className='text-sm text-gray-400'>{testimonial.role}</p>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
              key={index}
              className='bg-zion-blue-dark border-zion-purple/30'
            >
              <CardContent className='pt-6'>
                <div className='flex mb-4'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}                    />
    avatar: "/placeholder.svg"
  }
],

export const AppTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                  ))}
                </div>
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="border-t border-zion-purple/20 pt-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div>




                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/AppTestimonials.tsx
                  </div>
                </div>
              </CardFooter>
            </Card>


}</div> </div> </section>) 
}
'"},

  );
};

import React from "react",;
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
const testimonials = [;
  {;
    name: "Alex Johnson",;
    role: "AI Developer",;
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",;
    rating: 5,;
    avatar: "/placeholder.svg";
  },;
  {;
    name: "Sarah Williams",;
    role: "Tech Recruiter",;
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",;
    rating: 5,;
    avatar: "/placeholder.svg";
  },;
  {;
    name: "Michael Chen",;
    role: "Full Stack Developer",;
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",;
    rating: 4,;
=======
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}                    />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/mobile-app/AppTestimonials.tsx
    avatar: "/placeholder.svg";
  }
],export const AppTestimonials: React.FC = () => {return (<section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {testimonials.map((testimonial, index) => (<Card key={index} className="bg-zion-blue-dark border-zion-purple/30">;
              <CardContent className="pt-6">;
                <div className="flex mb-4">;
                  {Array.from({ length: 5 }).map((_, i) => ())}
                </div>;
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>;
              </CardContent>;
              <CardFooter className="border-t border-zion-purple/20 pt-4">;
                <div className="flex items-center">;
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">;
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" loading="lazy" />;
                  </div>;
                  <div>;
                    <p className="font-semibold text-white">{testimonial.name}</p>;
                    <p className="text-sm text-gray-400">{testimonial.role}</p>;
                  ))}
                </div>;
                <p className='text-gray-200 mb-6'>"{testimonial.text}"</p>;
              </CardContent>;
              <CardFooter className='border-t border-zion-purple/20 pt-4'>;
                <div className='flex items-center'>;
                  <div className='h-10 w-10 rounded-full overflow-hidden mr-4'>;
                    <img;
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className='h-full w-full object-cover';
                      loading='lazy';
                    />;
                  </div>;
                  <div>;
                    <p className='font-semibold text-white'>;
                      {testimonial.name}
                    </p>;
                    <p className='text-sm text-gray-400'>{testimonial.role}</p>;
                  </div>;
                </div>;
              </CardFooter>;
            </Card>;
}</div> </div> </section>)}
'"},)}import React from "react",import { Star  } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card",const testimonials = [;
  {name: "Alex Johnson",role: "AI Developer",text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",rating: 5,avatar: "/placeholder.svg";
  },{name: "Sarah Williams",role: "Tech Recruiter",text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",rating: 5,avatar: "/placeholder.svg";
  },{name: "Michael Chen",role: "Full Stack Developer",text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",rating: 4,avatar: "/placeholder.svg";
  }
],export const AppTestimonials: React.FC = () => {return (<section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {testimonials.map((testimonial, index) => (<Card key={index} className="bg-zion-blue-dark border-zion-purple/30">;
              <CardContent className="pt-6">;
                <div className="flex mb-4">;
                  {Array.from({ length: 5 }).map((_, i) => (<Star;
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                    />;
                  ))}
                </div>;
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>;
              </CardContent>;
              <CardFooter className="border-t border-zion-purple/20 pt-4">;
                <div className="flex items-center">;
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">;
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" loading="lazy" />;
                  </div>;
                  <div>;
                    <p className="font-semibold text-white">{testimonial.name}</p>;
                    <p className="text-sm text-gray-400">{testimonial.role}</p>;
                  </div>;
                </div>;
              </CardFooter>;
            </Card>;
          ))}
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
        </div>
      </div>
    </section>
);
};
origin/cursor/automate-test-improve-and-merge-code-2533
{";
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/AppTestimonials.tsx
        </div>;
      </div>;
    </section>;
  )})})}<div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
          {testimonials.map ((testimonial, index) => (<Card;
              key={index}
              className='bg - zion - blue - dark border - zion - purple / 30';
            >;
              <CardContent className='pt - 6'>;
                <div className='flex mb - 4'>;
                  {Array.from ({ length: 5 }).map ((_, i) => (<Star;
                      key={i}
                      className={`h - 5 w - 5 ${i < testimonial.rating ? 'text - yellow - 400 fill - yellow - 400' : 'text - gray - 400'}`}                    />))}
                </div>;
                <p className='text - gray - 200 mb - 6'>"{testimonial.text}"</p>;
              </CardContent>;
              <CardFooter className='border - t border - zion - purple / 20 pt - 4'>;
                <div className='flex items - center'>;
                  <div className='h - 10 w - 10 rounded - full overflow - hidden mr - 4'>;
                    <img;
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className='h - full w - full object - cover';
                      loading='lazy';
                    />;
                  </div>;
                  <div>;
                    <p className='font - semibold text - white'>;
                      {testimonial.name}
                    </p>;
                    <p className='text - sm text - gray - 400'>{testimonial.role}</p>                  </div>;
                    <p className="font - semibold text - white">{testimonial.name}</p>;
                    <p className="text - sm text - gray - 400">{testimonial.role}</p>;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {testimonials.map ((testimonial, index) => (<Card key={index} className="bg - zion - blue - dark border - zion - purple / 30">;
              <CardContent className="pt - 6">;
                <div className="flex mb - 4">;
                  {Array.from ({ length: 5 }).map ((_, i) => (<Star;
                      key={i}
                      className={`h - 5 w - 5 ${i < testimonial.rating ? "text - yellow - 400 fill - yellow - 400" : "text - gray - 400"}`}
                    />))}
                </div>;
                <p className="text - gray - 200 mb - 6">"{testimonial.text}"</p>;
              </CardContent>;
              <CardFooter className="border - t border - zion - purple / 20 pt - 4">;
                <div className="flex items - center">;
                  <div className="h - 10 w - 10 rounded - full overflow - hidden mr - 4">;
                    <img src={testimonial.avatar} alt={testimonial.name} className="h - full w - full object - cover" loading="lazy" />;
                  </div>;
                  <div>;
                    <p className="font - semibold text - white">{testimonial.name}</p>;
                    <p className="text - sm text - gray - 400">{testimonial.role}</p>;
                  </div>;
                </div>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
    </section>)}
        </div>;
      </div>;
    </section>;
)}{";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/mobile-app/AppTestimonials.tsx
=======
    </section>);
}
{";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/AppTestimonials.tsx
  name: "Sarah Williams";";
role: "Tech Recruiter";";
text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";
rating: 5;";
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
avatar: "/placeholder.svg" ;
};
origin/cursor/automate-test-improve-and-merge-code-2533
=======
avatar: "/placeholder.svg";
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/AppTestimonials.tsx
{";
=======
avatar: "/placeholder.svg";
}
avatar: "/placeholder.svg" ;
}{";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/mobile-app/AppTestimonials.tsx
  name: "Michael Chen";";
role: "Full Stack Developer";";
text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.";
rating: 4;";
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx

    name: 'Michael Chen',
    role: 'Full Stack Developer',
    text: 'I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.',
    rating: 4,

=======
avatar: "/placeholder.svg";
}];
export const AppTestimonials: React.FC = () => {";
  return (<section className="py - 16 bg - zion - blue" > <div className="container mx - auto px - 4" > <div className="text - center mb - 12" > <h2 className="text - 3xl md:text - 4xl font - bold mb - 4" >What Our Users Say</h2> <p className="text - lg text - gray - 300 max - w-2xl mx - auto" >;
}</div> </div> </section>);
}
'"},
  );

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/AppTestimonials.tsx
avatar: "/placeholder.svg" ;
}];
export const AppTestimonials: React.FC = () => {";
  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >What Our Users Say</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" > ;
}</div> </div> </section>) ;
};
'"
<<<<<<< HEAD:src_backup/components/mobile-app/AppTestimonials.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======
avatar: "/placeholder.svg";
}];
export const AppTestimonials: React.FC = () => {";
  return (<section className="py - 16 bg - zion - blue" > <div className="container mx - auto px - 4" > <div className="text - center mb - 12" > <h2 className="text - 3xl md:text - 4xl font - bold mb - 4" >What Our Users Say</h2> <p className="text - lg text - gray - 300 max - w-2xl mx - auto" >;
}</div> </div> </section>)}
'"},)name: 'Michael Chen',role: 'Full Stack Developer',text: 'I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.',rating: 4,avatar: "/placeholder.svg" ;
}];
export const AppTestimonials: React.FC = () => {";
  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >What Our Users Say</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" > ;
}</div> </div> </section>)}'";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/mobile-app/AppTestimonials.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d:src/components/mobile-app/AppTestimonials.tsx
