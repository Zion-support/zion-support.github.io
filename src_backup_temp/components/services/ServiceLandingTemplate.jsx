import {GradientHeading} from &quot;@/components/GradientHeading&quot;; import {Button} from &quot;@/components/ui/button&quot;; import {Card,CardContent,CardFooter} from &quot;@/components/ui/card&quot;; export const ServiceLandingTemplate = (props) => { return ( <div className=&quot;min-h-screen bg-white&quot;> <section className=&quot;bg-zion-blue py-16 px-4 text-center&quot;> <div className=&quot;container mx-auto&quot;> <GradientHeading level=&quot;h1&quot; className=&quot;mb-4&quot;> {title} </GradientHeading> <p className=&quot;text-xl text-zion-slate-light max-w-3xl mx-auto&quot;> {subtitle} </p> {heroImage && (<img loading=&quot;lazy&quot; src={heroImage} alt={title} className=&quot;mx-auto mt-8 rounded-lg shadow-xl max-w-3xl&quot; />)} </div> </section> <section className=&quot;py-12 px-4&quot;> <div className=&quot;container mx-auto text-center&quot;> <p className=&quot;text-lg text-zion-slate-light max-w-3xl mx-auto&quot;> {description} </p> </div> </section> <section className=&quot;py-16 bg-zion-blue-light&quot;> <div className=&quot;container mx-auto px-4&quot;> <h2 className=&quot;text-2xl font-bold text-white text-center mb-8&quot;> Benefits </h2> <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;> {benefits.map((benefit,idx) => (<div key={idx} className=&quot;bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/20 text-center&quot;> {benefit.icon && (<div className=&quot;mb-4 flex justify-center text-zion-cyan&quot;> {benefit.icon}; </div> )} <h3 className=&quot;text-lg font-bold mb-2&quot;>{benefit.title}</h3> <p className=&quot;text-zion-slate-light&quot;>{benefit.description}</p> </div>))} </div> </div> </section> <section className=&quot;py-16 bg-zion-blue&quot;> <div className=&quot;container mx-auto px-4&quot;> <h2 className=&quot;text-2xl font-bold text-white text-center mb-8&quot;> What Our Clients Say </h2> <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;> {testimonials.map((t,idx) => (<Card key={idx} className=&quot;bg-zion-blue-dark border-zion-purple/30&quot;> <CardContent className=&quot;pt-6&quot;> <p className=&quot;text-gray-200 mb-6&quot;>&quot;{t.text}&quot;</p> </CardContent> <CardFooter className=&quot;border-t border-zion-purple/20 pt-4&quot;> <div className=&quot;flex items-center&quot;> {t.avatar && (<img loading=&quot;lazy&quot; src={t.avatar} alt={t.name} className=&quot;h-10 w-10 rounded-full mr-4&quot; />)} <div> <p className=&quot;font-semibold text-white&quot;>{t.name}</p> {t.role && (<p className=&quot;text-sm text-gray-400&quot;>{t.role}</p>)} </div> </div> </CardFooter> </Card>))} </div> </div> </section> <section className=&quot;py-12 bg-zion-blue-dark text-center&quot;> <Button size=&quot;lg&quot; className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white&quot; asChild> <a href={ctaLink}>{ctaText}</a> </Button> </section> </div>)}; ;
import {GradientHeading} from "@/components/GradientHeading";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
export const ServiceLandingTemplate = ("props": "any) => {;
    return (<div className="bg-background text-white">;
      <section className="bg-zion-blue py-16 px-4 text-center">;
        <div className="container mx-auto">;
          <GradientHeading level="h1" className="mb-4">;
            {title"}
          </GradientHeading>;
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
export const ServiceLandingTemplate = (props: any) => {
    return (
        <div className="bg-background text-white">
export const ServiceLandingTemplate = (props) => {
    return (
    <div className="min-h-screen bg-white">
      <section className="bg-zion-blue py-16 px-4 text-center">
        <div className="container mx-auto">
          <GradientHeading level="h1" className="mb-4">
            {title}
          </GradientHeading>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            {subtitle}
          </p>;
          {heroImage && (<img loading="lazy" src={heroImage} alt={title} className="mx-auto mt-8 rounded-lg shadow-xl max-w-3xl"  />)}
        </div>;
      </section>;
      <section className="py-12 px-4">;
        <div className="container mx-auto text-center">;
          <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">;
            {description}
          </p>;
        </div>;
      </section>;
      <section className="py-16 bg-zion-blue-light">;
        <div className="container mx-auto px-4">;
          <h2 className="text-2xl font-bold text-white text-center mb-8">;
            Benefits;
          </h2>;
          <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-6">;
            {benefits.map((benefit", idx) => (<div key={idx} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/20 text-center">;
                {benefit.icon && (<div className="mb-4 flex justify-center text-zion-cyan">;
                    {benefit.icon}
                  </div>)}
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>;
                <p className="text-zion-slate-light">{benefit.description}</p>;
              </div>))}
          </div>;
        </div>;
      </section>;
      <section className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4">;
          <h2 className="text-2xl font-bold text-white text-center mb-8">;
            What Our Clients Say;
          </h2>;
          <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-6">;
            {testimonials.map((t", idx) => (<Card key={idx} className="bg-zion-blue-dark border-zion-purple/30">;
                <CardContent className="pt-6">;
                  <p className="text-gray-200 mb-6">"{t.text}"</p>;
                </CardContent>;
                <CardFooter className="border-t border-zion-purple/20 pt-4">;
                  <div className="flex items-center">;
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </section>
      <section className="py-16 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Benefits
          </h2>
          <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (<div key={idx} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/20 text-center">
                {benefit.icon && (<div className="mb-4 flex justify-center text-zion-cyan">
                    {benefit.icon}
                  </div>)}
                <h3 className="text-lg font-bold mb-2">{benefit.title}
                    {benefit.icon};
                      </div>
  );
}
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 "md": grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (<Card key={idx} className="bg-zion-blue-dark border-zion-purple/30">
                <CardContent className="pt-6">
                  <p className="text-gray-200 mb-6">"{t.text}"</p>
                </CardContent>
                <CardFooter className="border-t border-zion-purple/20 pt-4">
                  <div className="flex items-center">
                    {t.avatar && (<img loading="lazy" src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full mr-4"  />)}
                    <div>;
                      <p className="font-semibold text-white">{t.name}</p>;
                      {t.role && (<p className="text-sm text-gray-400">{t.role}</p>)}
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      <section className="py-12 bg-zion-blue-dark text-center">;
        <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white" asChild>;
          <a href={ctaLink}>{ctaText}</a>;
        </Button>;
      </section>;
    </div>);
          </div>
        </div>
      </section>
      <section className="py-12 bg-zion-blue-dark text-center">
        <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white" asChild>
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </section>
    </div>
    );
};
import {GradientHeading} from "@/components/GradientHeading"; import {Button} from "@/components/ui/button"; import {Card,CardContent,CardFooter} from "@/components/ui/card"; export const ServiceLandingTemplate = (props) => { return ( <div className="min-h-screen bg-white"> <section className="bg-zion-blue py-16 px-4 text-center"> <div className="container mx-auto"> <GradientHeading level="h1" className="mb-4"> {title} </GradientHeading> <p className="text-xl text-zion-slate-light max-w-3xl mx-auto"> {subtitle} </p> {heroImage && (<img loading="lazy" src={heroImage} alt={title} className="mx-auto mt-8 rounded-lg shadow-xl max-w-3xl" />)} </div> </section> <section className="py-12 px-4"> <div className="container mx-auto text-center"> <p className="text-lg text-zion-slate-light max-w-3xl mx-auto"> {description} </p> </div> </section> <section className="py-16 bg-zion-blue-light"> <div className="container mx-auto px-4"> <h2 className="text-2xl font-bold text-white text-center mb-8"> Benefits </h2> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {benefits.map((benefit,idx) => (<div key={idx} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-purple/20 text-center"> {benefit.icon && (<div className="mb-4 flex justify-center text-zion-cyan"> {benefit.icon}; </div> )} <h3 className="text-lg font-bold mb-2">{benefit.title}</h3> <p className="text-zion-slate-light">{benefit.description}</p> </div>))} </div> </div> </section> <section className="py-16 bg-zion-blue"> <div className="container mx-auto px-4"> <h2 className="text-2xl font-bold text-white text-center mb-8"> What Our Clients Say </h2> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {testimonials.map((t,idx) => (<Card key={idx} className="bg-zion-blue-dark border-zion-purple/30"> <CardContent className="pt-6"> <p className="text-gray-200 mb-6">"{t.text}"</p> </CardContent> <CardFooter className="border-t border-zion-purple/20 pt-4"> <div className="flex items-center"> {t.avatar && (<img loading="lazy" src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full mr-4" />)} <div> <p className="font-semibold text-white">{t.name}</p> {t.role && (<p className="text-sm text-gray-400">{t.role}</p>)} </div> </div> </CardFooter> </Card>))} </div> </div> </section> <section className="py-12 bg-zion-blue-dark text-center"> <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white" asChild> <a href={ctaLink}>{ctaText}</a> </Button> </section> </div>)}; ;