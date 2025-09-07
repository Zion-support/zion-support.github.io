/* eslint-disable */
 export interface Benefit {;
  title: string;
  description: string;
  icon?: React.ReactNode
}
export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  avatar?: string
}
interface ServiceLandingTemplateProps {
  title: string;
subtitle: string;
heroImage?: string;
description: string;
benefits: Benefit[];
testimonials: Testimonial[];
ctaText: string;
ctaLink: string ;
}export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({;
  title;
subtitle;
heroImage;
description;
benefits;
testimonials;
ctaText;
ctaLink ;
}) => {;
  return (<div className="bg-background text-white" > <section className="bg-zion-blue py-16 px-4 text-center" > <div className="container mx-auto" > <GradientHeading level="h1" className="mb-4" > {;""
  title ";""
}</GradientHeading> <p className="text-xl text-zion-slate-light max-w-3xl mx-auto" > {;"
  subtitle ;""
}</p> {";""
  heroImage && (<div className="mx-auto mt-8 rounded-lg shadow-xl max-w-3xl relative h-80" > <Image src= {;
  heroImage ;"
}alt= {;""
  title ";""
}className="object-cover rounded-lg" loading="lazy" ";""
}</div> </section> </p> </div> </section> <section className="py-16 bg-zion-blue-light" > <div className="container mx-auto px-4" > <h2 className="text-2xl font-bold text-white text-center mb-8" > Benefits </h2> <div key= {;""
  idx ";""
}className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/20 text-center" > </div>) ) ";""
}</div> </div> </section> <section className="py-16 bg-zion-blue" > <div className="container mx-auto px-4" > <h2 className="text-2xl font-bold text-white text-center mb-8" > What Our Clients Say </h2> <Card key= {;""
  idx ";""
}className="bg-zion-blue-dark border-zion-purple/30" >) ;""
}</div> </div> </CardFooter> </Card>) ) ";""
}</div> </div> </section> <section className="py-12 bg-zion-blue-dark text-center" > <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white" asChild > </Button> </section> </div>) ;"
};""
"""