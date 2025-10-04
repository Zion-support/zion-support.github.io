import React from "react";
impo, r, t {
Helm, e, t;
} fr, o, m "rea, c, t-helm, e, t-asy, n, c";
import, ContentShowcase, from "../componen, t, s/ContentShowca, s, e";
import, FeaturedServiceCard, from "../componen, t, s/FeaturedServiceCa, r, d";
import, SuccessStoriesShowcase, from "../componen, t, s/SuccessStoriesShowca, s, e";
import, LatestInsights, from "../componen, t, s/LatestInsigh, t, s";
const, HomePag, e: Rea, c, t.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion, Tech, Group - Advanced, AI, and IT, Solution, s</title>
        <meta name="descripti, o, n" content="Leading, provider, of AI-powered, IT, solutions, digital, transformatio, n, and, enterprise, automation servic, e, s."  />
        <meta name="keywor, d, s" content="AI, solution, s, IT, service, s, digital, transformatio, n, enterprise, automatio, n, cloud, computin, g"  />
      </Helmet>
      <div, className="container mx-auto px-4 py-8">
        {/* Hero, Sectio, n */}
        <section, className="text-center mb-12">
          <h1, className="te, x, t-4xl, m, d:te, x, t-6xl, fon, t-bold, tex, t-gr, a, y-900, m, b-6">
            Advanced, A, I & IT, Solution, s;
          </h1>
          <p, className="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3xl, m, x-auto, m, b-8">
            Transform, your, business with, cuttin, g-edge, AI, technologies, cloud, solution, s
            and, digital, innovation strategi, e, s.
          </p>
          <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">
            <button, className="bg-bl, u, e-600, tex, t-white, p, x-8, p, y-3, rounde, d-lg, hove, r:bg-bl, u, e-700, transitio, n-colo, r, s">
              Get, Starte, d;
            </butt, o, n>
            <button, className="border, borde, r-bl, u, e-600, tex, t-bl, u, e-600, p, x-8, p, y-3, rounde, d-lg, hov, e
  r:bg-bl, u, e-50, transitio, n-colo, r, s">
              Learn, Mor, e;
            </butt, o, n>
          </d, i, v>
        </secti, o, n>
        {/* Featured, Service, s */}
        <section, className="mb-12">
          <h2, className="te, x, t-3xl, fon, t-bold, tex, t-center, m, b-8">Our, Service, s</h2>
          <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-3, ga, p-6">
            <FeaturedServiceCa, r, d 
  tit, l, e="AI, Solution, s"
              descripti, o, n="Advanced, artificial, intelligence implementations, for, enterprise nee, d, s"
              ic, o, n="🤖"  />
            <FeaturedServiceCa, r, d 
  tit, l, e="Cloud, Computin, g"
              descripti, o, n="Scalable, cloud, infrastructure and, migration, services"
              ic, o, n="☁️"  />
            <FeaturedServiceCa, r, d 
  tit, l, e="Digital, Transformatio, n"
              descripti, o, n="Complete, digital, modernization strategi, e, s"
              ic, o, n="🚀"  />
          </d, i, v>
        </secti, o, n>
        {/* Content, Showcas, e */}
        <ContentShowca, s, e   />
        {/* Success, Storie, s */}
        <SuccessStoriesShowca, s, e   />
        {/* Latest, Insight, s */}
        <LatestInsigh, t, s   />
      </d, i, v>
    < />
  );
};
export default HomePage;