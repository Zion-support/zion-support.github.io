<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/mobile-app/AppTestimonials.tsx
import React from "react";
import { Star } from 'lucide-react'

import React from "react";
import { Star } from 'lucide-react'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
const testimonials = [
  {
    name: 'Alex Johnson'
    role: 'AI Developer'
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!"
    rating: 5
    avatar: '/placeholder.svg'
  }
const testimonials = [
const testimonials = [
  {
{
    name: "Alex Johnson",
    role: "AI Developer",
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and I've landed 3 contracts in my first month!",
    rating: 5,
    avatar: "/placeholder.svg"
  },
:src/components/mobile-app/AppTestimonials.tsx
const testimonials = [
  {
    name: 'Sarah Williams'
    role: 'Tech Recruiter'
    text: 'As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.'
    rating: 5
    avatar: '/placeholder.svg'
  }
  {
<<<<<<< HEAD
    name: 'Michael Chen'
    role: 'Full Stack Developer'
    text: 'I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.'
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
{
    name: Alex Johnson",
    role: "AI Developer,
    text: The Zion app has completely changed how I find work. The AI matching is spot on and Ive landed 3 contracts in my first month!",
    rating: 5,
    avatar: "/placeholder.svg
  },
<<<<<<< HEAD

=======
<<<<<<< HEAD
:src/components/mobile-app/AppTestimonials.tsx
  {
    name: Sarah Williams'
    role: 'Tech Recruiter
    text: As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.'
    rating: 5
    avatar: '/placeholder.svg
  }
  {
    name: Michael Chen'
    role: 'Full Stack Developer
    text: I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.'
>>>>>>> origin/resolved-merge-conflicts
    rating: 4
    avatar: '/placeholder.svg'
  },]
export const AppTestimonials: React.FC = () => {
  return (    avatar: "/placeholder.svg"
  }
]
export const AppTestimonials: React.FC = () => {
  return (
    <section className='py-16 bg-zion-blue'>
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
<<<<<<< HEAD
{{name: 'Sarah Williams';
    role: 'Tech Recruiter';
    text: 'As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
{{{name: 'Sarah Williams';
    role: 'Tech Recruiter';
    text: 'As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.';
{{{name: Sarah Williams';
    role: 'Tech Recruiter;
    text: As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.';
>>>>>>> origin/resolved-merge-conflicts
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
              key={index}
              className='bg-zion-blue-dark border-zion-purple/30';
            >;
              <CardContent className='pt-6'>;
                <div className='flex mb-4'>;
                  {Array.from({ length: 5 }).map((_, i) => (<Star;
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}                    />
<<<<<<< HEAD
=======
                      className={`h-5 w-5 ${i < testimonial.rating ? text-yellow-400 fill-yellow-400' : 'text-gray-400}`}                    />
>>>>>>> origin/resolved-merge-conflicts
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

              key={index}
              className='bg-zion-blue-dark border-zion-purple/30'
            >
              <CardContent className='pt-6'>
                <div className='flex mb-4'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
<<<<<<< HEAD
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}                    />
=======
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400 : text-gray-400'}`}                    />
<<<<<<< HEAD

=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    name: "Sarah Williams",
    role: "Tech Recruiter",
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.",
    rating: 5,
    avatar: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Full Stack Developer",
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",
    rating: 4,
    avatar: "/placeholder.svg"
  }
],

    name: 'Sarah Williams'
    role: 'Tech Recruiter'
    text: 'As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.'
    rating: 5
    avatar: '/placeholder.svg'
  }
  {

import { Card, CardContent, CardFooter } from "@/components/ui/card";
const testimonials = null;
origin/cursor/automate-test-improve-and-merge-code-2533
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
              key={index}
              className='bg-zion-blue-dark border-zion-purple/30'
            >
              <CardContent className='pt-6'>
                <div className='flex mb-4'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
  },;
  {;
    name: "Michael Chen",;
    role: "Full Stack Developer",;
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",;
    rating: 4,;
<<<<<<< HEAD
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}                    />;
    avatar: "/placeholder.svg";
  }
],export const AppTestimonials: React.FC = () => {return (<section className="py-16 bg-zion-blue">;
=======
    avatar: "/placeholder.svg";
  }
],;
export const AppTestimonials: React.FC = () => {;
  return (;
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {testimonials.map((testimonial, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">;
              <CardContent className="pt-6">;
                <div className="flex mb-4">;
                  {Array.from({ length: 5 }).map((_, i) => (;
                    <Star;
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
        </div>
      </div>
    </section>
:src/components/mobile-app/AppTestimonials.tsx
  )
}
{"
  name: "Sarah Williams";"
role: "Tech Recruiter";"
text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive."
rating: 5;"
avatar: "/placeholder.svg"
}
{"
  name: "Michael Chen";"
role: "Full Stack Developer";"
text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful."
rating: 4;"
avatar: "/placeholder.svg"
}]
export const AppTestimonials: React.FC = () => {"
  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >What Our Users Say</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" >
}</div> </div> </section>)
}
'"}
  )
}
);
};
origin/cursor/automate-test-improve-and-merge-code-2533
{";
  name: "Sarah Williams";";
role: "Tech Recruiter";";
text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";
rating: 5;";
avatar: "/placeholder.svg" ;
};
origin/cursor/automate-test-improve-and-merge-code-2533
{";
  name: "Michael Chen";";
role: "Full Stack Developer";";
text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.";
rating: 4;";
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },
  {
    name: Michael Chen,
    role: "Full Stack Developer",
    text: I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.,
    rating: 4,
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400 : text-gray-400'}`}                    />;
>>>>>>> merged-prs-20250907-203621
    avatar: "/placeholder.svg";
  }
],export const AppTestimonials: React.FC = () => {return (<section className=py-16 bg-zion-blue>;
=======
  },;
  {;
    name: "Michael Chen",;
    role: "Full Stack Developer",;
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.",;
    rating: 4,;
    avatar: "/placeholder.svg";
  }
],;
export const AppTestimonials: React.FC = () => {;
  return (;
    <section className="py-16 bg-zion-blue">;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
<<<<<<< HEAD

=======
<<<<<<< HEAD
          {testimonials.map((testimonial, index) => (<Card key={index} className="bg-zion-blue-dark border-zion-purple/30">;
=======
<<<<<<< HEAD
          {testimonials.map((testimonial, index) => (<Card key={index} className=bg-zion-blue-dark border-zion-purple/30>;
>>>>>>> origin/resolved-merge-conflicts
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          {testimonials.map((testimonial, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">;
              <CardContent className="pt-6">;
                <div className="flex mb-4">;
                  {Array.from({ length: 5 }).map((_, i) => (;
                    <Star;

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
<<<<<<< HEAD

        </div>
      </div>
    </section>

=======
<<<<<<< HEAD
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
    </section>)}
        </div>;
      </div>;
    </section>;
)}{";
    </section>);
        </div>
      </div>
    </section>
:src/components/mobile-app/AppTestimonials.tsx
  )
}
{"
  name: "Sarah Williams";"
role: "Tech Recruiter";"
text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive."
rating: 5;"
avatar: "/placeholder.svg"
}
{"
  name: "Michael Chen";"
role: "Full Stack Developer";"
text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful."
rating: 4;"
avatar: "/placeholder.svg"
}]
export const AppTestimonials: React.FC = () => {"
  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >What Our Users Say</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" >
}</div> </div> </section>)
}
'"}
  )
}
=======
        </div>
      </div>
    </section>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
);
<<<<<<< HEAD
};
=======
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD

=======
<<<<<<< HEAD
{;
  name: Sarah Williams";";
role: Tech Recruiter;";
text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.;
rating: 5;;
avatar: "/placeholder.svg";
}
avatar: /placeholder.svg ;
}
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
{";
  name: "Sarah Williams";";
role: "Tech Recruiter";";
text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";
rating: 5;";
avatar: "/placeholder.svg";
}
avatar: "/placeholder.svg" ;
};
origin/cursor/automate-test-improve-and-merge-code-2533
{";
avatar: "/placeholder.svg";
}
avatar: "/placeholder.svg" ;
}{";
<<<<<<< HEAD
  name: "Michael Chen";";
role: "Full Stack Developer";";
=======
  name: Michael Chen;";
role: "Full Stack Developer;;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
{";
  name: "Sarah Williams";";
role: "Tech Recruiter";";
text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.";
rating: 5;";
avatar: "/placeholder.svg" ;
};
origin/cursor/automate-test-improve-and-merge-code-2533
{";
  name: "Michael Chen";";
role: "Full Stack Developer";";
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.";
rating: 4;";

    name: 'Michael Chen',
    role: 'Full Stack Developer',
    text: 'I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.',
    rating: 4,

<<<<<<< HEAD

=======
<<<<<<< HEAD
avatar: "/placeholder.svg";
=======
<<<<<<< HEAD
avatar: /placeholder.svg";
>>>>>>> origin/resolved-merge-conflicts
}];
export const AppTestimonials: React.FC = () => {";
  return (<section className="py - 16 bg - zion - blue" > <div className="container mx - auto px - 4" > <div className="text - center mb - 12" > <h2 className="text - 3xl md:text - 4xl font - bold mb - 4" >What Our Users Say</h2> <p className="text - lg text - gray - 300 max - w-2xl mx - auto" >;
}</div> </div> </section>);
}
'"},
<<<<<<< HEAD
=======
import React from "react,
import { Star } from 'lucide-react;
import { Card, CardContent, CardFooter } from @/components/ui/card",
  {
    name: "Alex Johnson,
    role: AI Developer",
    text: "The Zion app has completely changed how I find work. The AI matching is spot on and Ive landed 3 contracts in my first month!,
    rating: 5,
    avatar: /placeholder.svg";
  },
  {
    name: "Sarah Williams,
    role: Tech Recruiter",
    text: "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive.,
    rating: 5,
    avatar: /placeholder.svg";
  },
  {
    name: "Michael Chen,
    role: Full Stack Developer",
    text: "I love being able to check job matches and respond to clients while on the go. The notification system is particularly useful.,
    rating: 4,
    avatar: /placeholder.svg";
=======
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    avatar: "/placeholder.svg";
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
],;
export const AppTestimonials: React.FC = () => {;
  return (;
    <section className="py-16 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Join thousands of satisfied users who have transformed their tech careers with the Zion mobile app.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
          {testimonials.map((testimonial, index) => (;
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30">;
              <CardContent className="pt-6">;
                <div className="flex mb-4">;
                  {Array.from({ length: 5 }).map((_, i) => (;
                    <Star;
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
        </div>;
      </div>;
    </section>;
  );

<<<<<<< HEAD
avatar: "/placeholder.svg" ;
=======
avatar: "/placeholder.svg ;
}];
export const AppTestimonials: React.FC = () => {;
  return (<section className="py-16 bg-zion-blue" > <div className=container mx-auto px-4 > <div className="text-center mb-12" > <h2 className=text-3xl md:text-4xl font-bold mb-4 >What Our Users Say</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" > ;
}</div> </div> </section>) ;
};
<<<<<<< HEAD

=======
<<<<<<< HEAD
'"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
avatar: /placeholder.svg";
>>>>>>> origin/resolved-merge-conflicts
}];
export const AppTestimonials: React.FC = () => {";
  return (<section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" >What Our Users Say</h2> <p className="text-lg text-gray-300 max-w-2xl mx-auto" > ;
}</div> </div> </section>) ;
};
'"
origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD

=======
=======
'"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
