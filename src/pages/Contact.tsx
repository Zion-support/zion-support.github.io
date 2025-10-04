import React from "react";";
impo, r, t {
} fr, o, m "luci, d, e-rea, c, t";";
import, Header, from "../componen, t, s/Head, e, r";";
import, Footer, from "../componen, t, s/Foot, e, r";";
// Fallback, form, in environments, without, the enhanced, componen, t
  const, ContactFormComponen, t: Rea, c, t.FC = () => nu, l, l
=======
const, ContactFormComponen, t: Rea, c, t.FC = () => nu, l, l;
export, default, function Conta, c, t(): Rea, c, t.J, S, X.Eleme, n, t {
  const, contactInf, o = [
    {
      i, c, o
  n: <Mail, className="w-6 h-6" />
      tit, l, e: "Email, U, s"
      detai, l, s: "hel, l, o@ziontechgro, u, p.c, o, m"
      descripti, o, n: "Send, us, an email, anytim, e"
    }
    {
      ic, o, n: <Phone, className="w-6 h-6" />
      tit, l, e: "Call, U, s"
      detai, l, s: "+1 (5, 5, 5) 1, 2, 3-45, 6, 7"
      descripti, o, n: "M, o, n-Fri, from, 9am to, 6p, m"
    }
    {
      ic, o, n: <MapPin, className="w-6 h-6" />
      tit, l, e: "Visit, U, s"
      detai, l, s: "123, Tech, Street, San, Francisc, o, CA, 9410, 5"
      descripti, o, n: "Come, say, hello at, our, office"
    }
    {
      ic, o, n: <Clock, className="w-6 h-6" />
      tit, l, e: "Response, Tim, e"
      detai, l, s: "Within, 24, hours"
      descripti, o, n: "We, respond, to all, inquiries, quickly"
    }
=======
      ic, o, n: <Mail, className="w-6 h-6" />,";
      tit, l, e: "Email, U, s",";
      detai, l, s: "hel, l, o@ziontechgro, u, p.c, o, m",";
      descripti, o, n: "Send, us, an email, anytim, e",";
    }
    {
      ic, o, n: <Phone, className="w-6 h-6" />,";
      tit, l, e: "Call, U, s",";
      detai, l, s: "+1 (5, 5, 5) 1, 2, 3-45, 6, 7",";
      descripti, o, n: "M, o, n-Fri, from, 9am to, 6p, m",";
    }
    {
      ic, o, n: <MapPin, className="w-6 h-6" />,";
      tit, l, e: "Visit, U, s",";
      detai, l, s: "123, Tech, Street, San, Francisc, o, CA, 9410, 5",";
      descripti, o, n: "Come, say, hello at, our, office",";
    }
    {
      ic, o, n: <Clock, className="w-6 h-6" />,";
      tit, l, e: "Response, Tim, e",";
      detai, l, s: "Within, 24, hours",";
      descripti, o, n: "We, respond, to all, inquiries, quickly",";
    }
  ];
  const, stat, s = [
    {
      ic, o, n: <Users, className="w-8 h-8" />
      val, u, e: "5, 0, 0+"
      lab, e, l: "Happy, Client, s"
    }
    {
      ic, o, n: <Award, className="w-8 h-8" />
      val, u, e: "99.9%"
      lab, e, l: "Satisfaction, Rat, e"
    }
    {
      ic, o, n: <Globe, className="w-8 h-8" />
      val, u, e: "50+"
      lab, e, l: "Countries, Serve, d"
    }
    {
      ic, o, n: <Zap, className="w-8 h-8" />
      val, u, e: "24/7"
      lab, e, l: "Support, Availabl, e"
    }
=======
      ic, o, n: <Users, className="w-8 h-8" />,";
      val, u, e: "5, 0, 0+",";
      lab, e, l: "Happy, Client, s",";
    }
    {
      ic, o, n: <Award, className="w-8 h-8" />,";
      val, u, e: "99.9%",";
      lab, e, l: "Satisfaction, Rat, e",";
    }
    {
      ic, o, n: <Globe, className="w-8 h-8" />,";
      val, u, e: "50+",";
      lab, e, l: "Countries, Serve, d",";
    }
    {
      ic, o, n: <Zap, className="w-8 h-8" />,";
      val, u, e: "24/7",";
      lab, e, l: "Support, Availabl, e",";
    }
  ];
  return (
    <>
      <Helmet>
        <title>
          Contact, Zion, Tech Gro, u, p - Get, in, Touch | AI & Technology, Solution, s;
        </title>
        <me, t, a
  na, m, e="descripti, o, n"
          content="Contact, Zion, Tech Group, for, AI solutio, n, s, cloud, service, s, and, technology, consulting. Get, expert, advice and, start, your digital, transformation, journey." /><me, t, a
  na, m, e="keywor, d, s"
          content="conta, c, t, AI, consultin, g, technology, solution, s, cloud, service, s, digital, transformatio, n" /><me, t, a
  proper, t, y="og: tit, l, e"
          content="Contact, Zion, Tech Gro, u, p - Get, in, Touch" /><me, t, a
  proper, t, y="og:descripti, o, n"
          content="Contact, us, for AI, solution, s, cloud, service, s, and, technology, consulting" /><meta, propert, y="og:ty, p, e" content="websi, t, e" />
        <meta, propert, y="og: u, r, l" content="ht, t, p
  s://ziontechgro, u, p.c, o, m/conta, c, t" />
        <link, re, l="canonic, a, l" hr, e, f="htt, p, s://ziontechgro, u, p.c, o, m/conta, c, t/>"
      </Helmet>
      <div, className="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-gr, a, y-50, t, o-gr, a, y-100, dar, k: fr, o, m-gr, a, y-900, da, r
  k:to-gr, a, y-8, 0, 0">"
=======
          content="conta, c, t, AI, consultin, g, technology, solution, s, cloud, service, s, digital, transformatio, n"
         />
        <me, t, a 
  proper, t, y="og: tit, l, e"
          content="Contact, Zion, Tech Gro, u, p - Get, in, Touch"  />
        <me, t, a 
  proper, t, y="og: descripti, o, n"
          content="Contact, us, for AI, solution, s, cloud, service, s, and, technology, consulting"  />
        <meta, propert, y="og: ty, p, e" content="websi, t, e" />";
        <meta, propert, y="og: u, r, l" content="htt, p, s://ziontechgro, u, p.c, o, m/conta, c, t" />";
        <link, re, l="canonic, a, l" hr, e, f="htt, p, s: //ziontechgro, u, p.c, o, m/conta, c, t" />";
      </Helmet>
      <div, className="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-gr, a, y-50, t, o-gr, a, y-100, dar, k: fr, o, m-gr, a, y-900, da, r
  k:to-gr, a, y-8, 0, 0">";
        <Head, e, r   />
        {/* Hero, Sectio, n */}
        <section, className="py-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-600, relative, overflow-hidd, e, n">";
          <div, className="absolute, inse, t-0">";
            <div, className="absolute, to, p-20, lef, t-2, 0, w-3, 2, h-32, b, g-whi, t, e/10, rounde, d-full, blu, r-xl, animat, e-pul, s, e"></d, i, v>";
            <d, i, v
  classNa, m, e="absolute, botto, m-20, righ, t-2, 0, w-4, 0, h-40, b, g-whi, t, e/10, rounde, d-full, blu, r-xl, animat, e-pul, s, e"
              sty, l, e={{ animationDel, a, y: "1s" }}";
            ></d, i, v>
            <d, i, v
  classNa, m, e="absolute, to, p-1/2, lef, t-1/2, transfor, m -transla, t, e-x-1/2 -transla, t, e-y-1/2 w-6, 0, h-60, b, g-whi, t, e/5, rounde, d-full, blu, r-2xl, animat, e-pul, s, e"
              sty, l, e={{ animationDel, a, y: "2s" }}";
            ></d, i, v>
          </d, i, v>
          <div, className="container, m, x-auto, p, x-6, tex, t-center, relative, z-10">
            <div, className="inli, n, e-flex, item, s-center, p, x-4, p, y-2, rounde, d-full, b, g-whi, t, e/20, backdro, p-bl, u, r-sm, tex, t-white, tex, t-sm, fon, t-medium, m, b-6">
              <MessageSquare, className="w-4 h-4, m, r-2  />
              L, e, t&ap, o, s;s, Start, a Conversati, o, n;
            </d, i, v>
            <h1, className="te, x, t-5xl, m, d: te, x, t-6xl, fon, t-bold, tex, t-white, m, b-6">"
              Get, in, Touch;
            </h1>
            <p, className="te, x, t-xl, m, d: te, x, t-2xl, tex, t-whi, t, e/90, m, b-8, ma, x-w-3xl, m, x-au, t, o">"
=======
          <div, className="container, m, x-auto, p, x-6, tex, t-center, relative, z-10">";
            <div, className="inli, n, e-flex, item, s-center, p, x-4, p, y-2, rounde, d-full, b, g-whi, t, e/20, backdro, p-bl, u, r-sm, tex, t-white, tex, t-sm, fon, t-medium, m, b-6">";
              <MessageSquare, className="w-4 h-4, m, r-2" />";
              L, e, t&ap, o, s;s, Start, a Conversati, o, n;
            </d, i, v>
            <h1, className="te, x, t-5xl, m, d: te, x, t-6xl, fon, t-bold, tex, t-white, m, b-6">";
              Get, in, Touch;
            </h1>
            <p, className="te, x, t-x, l, m
  d: te, x, t-2xl, tex, t-whi, t, e/90, m, b-8, ma, x-w-3xl, m, x-au, t, o">";
              Ready, to, transform your, business, with cutti, n, g-edge, technolog, y?
              L, e, t&ap, o, s;s, discuss, your project, and, explore the, possibilitie, s.
            </p>
          </d, i, v>
        </secti, o, n>
        {/* Contact, Informatio, n */}
        <section, className="py-16, b, g-white, dar, k: bg-gr, a, y-8, 0, 0">"
          <div, className="container, m, x-auto, p, x-6">
            <div, className="text-center mb-12">
              <h2, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, dar, k: te, x, t-white, m, b-4">"
                Multiple, Ways, to Reach, U, s;
              </h2>
              <p, className="te, x, t-lg, tex, t-gr, a, y-600, dar, k: te, x, t-gr, a, y-3, 0, 0">"
=======
        <section, className="py-16, b, g-white, dar, k: bg-gr, a, y-8, 0, 0">";
          <div, className="container, m, x-auto, p, x-6">";
            <div, className="text-center mb-12">";
              <h2, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, dar, k: te, x, t-white, m, b-4">";
                Multiple, Ways, to Reach, U, s;
              </h2>
              <p, className="te, x, t-lg, tex, t-gr, a, y-600, dar, k: te, x, t-gr, a, y-3, 0, 0">";
                Choose, the, communication method, that, works best, for, you;
              </p>
            </d, i, v>
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-8">"
=======
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-8">";
              {contactIn, f, o.m, a, p((in, f, o, ind, e, x) => (
                <d, i, v
  k, e, y={ind, e, x}
                  classNa, m, e="te, x, t-cente, r, p-6, b, g-gr, a, y-50, dar, k: bg-gr, a, y-700, rounde, d-2xl, hove, r:shad, o, w-lg, transitio, n-all, duratio, n-300, hov, e
  r:sca, l, e-1, 0, 5"
                >
                  <div, className="inli, n, e-fle, x, p-4, rounde, d-xl, b, g-gradie, n, t-to-r, fro, m-bl, u, e-500, t, o-purp, l, e-600, tex, t-white, m, b-4">";
                    {in, f, o.ic, o, n}
                  </d, i, v>
                  <h3, className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-900, dar, k: te, x, t-white, m, b-2">"
                    {in, f, o.tit, l, e}
                  </h3>
                  <p, className="te, x, t-lg, fon, t-medium, tex, t-bl, u, e-600, dar, k: te, x, t-bl, u, e-400, m, b-2">"
                    {in, f, o.detai, l, s}
                  </p>
                  <p, className="te, x, t-sm, tex, t-gr, a, y-600, dar, k: te, x, t-gr, a, y-3, 0, 0">"
=======
                  <h3, className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-900, dar, k: te, x, t-white, m, b-2">";
                    {in, f, o.tit, l, e}
                  </h3>
                  <p, className="te, x, t-lg, fon, t-medium, tex, t-bl, u, e-600, dar, k: te, x, t-bl, u, e-400, m, b-2">";
                    {in, f, o.detai, l, s}
                  </p>
                  <p, className="te, x, t-sm, tex, t-gr, a, y-600, dar, k: te, x, t-gr, a, y-3, 0, 0">";
                    {in, f, o.descripti, o, n}
                  </p>
                </d, i, v>
              ))}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Enhanced, Contact, Form */}
        <section, className="py-20, b, g-gr, a, y-50, dar, k: bg-gr, a, y-9, 0, 0">"
          <div, className="container, m, x-auto, p, x-6">
            <div, className="text-center mb-12">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, dar, k: te, x, t-white, m, b-4">"
                Start, Your, Project Tod, a, y;
              </h2>
              <p, className="te, x, t-xl, tex, t-gr, a, y-600, dar, k: te, x, t-gr, a, y-300, ma, x-w-3xl, m, x-au, t, o">"
=======
        <section, className="py-20, b, g-gr, a, y-50, dar, k: bg-gr, a, y-9, 0, 0">";
          <div, className="container, m, x-auto, p, x-6">";
            <div, className="text-center mb-12">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, dar, k: te, x, t-white, m, b-4">";
                Start, Your, Project Tod, a, y;
              </h2>
              <p, className="te, x, t-xl, tex, t-gr, a, y-600, da, r
  k: te, x, t-gr, a, y-300, ma, x-w-3xl, m, x-au, t, o">";
                Fill, out, the form, below, and our, team, will get, back, to you, withi, n
  24, hours, with a, personalized, proposal for, your, project.
              </p>
            </d, i, v>
            <ContactFormCompone, n, t   />
          </d, i, v>
        </secti, o, n>
        {/* Stats, Sectio, n */}
        <section, className="py-16, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-6, 0, 0">";
          <div, className="container, m, x-auto, p, x-6">";
            <div, className="text-center mb-12">";
              <h2, className="te, x, t-3xl, fon, t-bold, tex, t-white, m, b-4">";
                Why, Choose, Zion Tech, Grou, p?
              </h2>
              <p, className="te, x, t-xl, tex, t-whi, t, e/90">";
                Our, track, record speaks, for, itself;
              </p>
            </d, i, v>
            <div, className="grid, gri, d-co, l, s-2, m, d: gr, i, d-co, l, s-4, ga, p-8">"
=======
            <div, className="grid, gri, d-co, l, s-2, m, d: gr, i, d-co, l, s-4, ga, p-8">";
              {sta, t, s.m, a, p((st, a, t, ind, e, x) => (
                <d, i, v
  k, e, y={ind, e, x}
                  classNa, m, e="te, x, t-cente, r, p-6, b, g-whi, t, e/10, backdro, p-bl, u, r-sm, rounde, d-2xl, border, border-whi, t, e/20, hove, r: bg-whi, t, e/20, transitio, n-all, duratio, n-3, 0, 0"
                >
                  <div, className="inli, n, e-fle, x, p-4, rounde, d-xl, b, g-whi, t, e/20, tex, t-white, m, b-4">";
                    {st, a, t.ic, o, n}
                  </d, i, v>
                  <div, className="te, x, t-3xl, fon, t-bold, tex, t-white, m, b-2">";
                    {st, a, t.val, u, e}
                  </d, i, v>
                  <div, className="te, x, t-whi, t, e/80, fon, t-medi, u, m">{st, a, t.lab, e, l}</d, i, v>";
                </d, i, v>
              ))}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* FAQ, Sectio, n */}
        <section, className="py-20, b, g-white, dar, k: bg-gr, a, y-8, 0, 0">"
          <div, className="container, m, x-auto, p, x-6">
            <div, className="text-center mb-12">
              <h2, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, dar, k: te, x, t-white, m, b-4">"
                Frequently, Asked, Questions;
              </h2>
              <p, className="te, x, t-lg, tex, t-gr, a, y-600, dar, k: te, x, t-gr, a, y-3, 0, 0">"
=======
        <section, className="py-20, b, g-white, dar, k: bg-gr, a, y-8, 0, 0">";
          <div, className="container, m, x-auto, p, x-6">";
            <div, className="text-center mb-12">";
              <h2, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, dar, k: te, x, t-white, m, b-4">";
                Frequently, Asked, Questions;
              </h2>
              <p, className="te, x, t-lg, tex, t-gr, a, y-600, dar, k: te, x, t-gr, a, y-3, 0, 0">";
                Quick, answers, to common, question, s;
              </p>
            </d, i, v>
            <div, className="m, a, x-w-4xl, m, x-auto, spac, e-y-6">";
              {[
                {
                  quest, i, o
  n: "How, quickly, can you, start, my proje, c, t?"
                  answ, e, r:
                    "We, typically, begin new, projects, within 1-2, weeks, of contract, signin, g. Rush, projects, can be, accommodated, with additional, plannin, g."
                }
                {
                  questi, o, n: "Wh, a, t&ap, o, s;s, your, typical project, timelin, e?"
                  answ, e, r: "Project, timelines, vary based, on, complexity. Simple, websites, take 2-4, week, s, while, complex, AI implementations, can, take 3-6, month, s."
                }
                {
                  questi, o, n: "Do, you, provide ongoing, suppor, t?"
                  answ, e, r:
                    "Y, e, s! We, offer, comprehensive support, packages, including maintenan, c, e, updat, e, s, and, 2, 4/7, monitoring, for all, our, solutions."
                }
                {
                  questi, o, n: "What, technologies, do you, specialize, in?"
                  answ, e, r:
                    "We, specialize, in AI/ML, cloud, computin, g, cybersecuri, t, y, quantum, computin, g, and, modern, web technologies, like, React, No, d, e.js, and, Pytho, n."
                }
=======
                  questi, o, n: "How, quickly, can you, start, my proje, c, t?",";
                  answ, e, r: "We, typically, begin new, projects, within 1-2, weeks, of contract, signin, g. Rush, projects, can be, accommodated, with additional, plannin, g.",";
                }
                {
                  questi, o, n: "Wh, a, t&ap, o, s;s, your, typical project, timelin, e?",";
                  answ, e, r: "Project, timelines, vary based, on, complexity. Simple, websites, take 2-4, week, s, while, complex, AI implementations, can, take 3-6, month, s.",";
                }
                {
                  questi, o, n: "Do, you, provide ongoing, suppor, t?",";
                  answ, e, r: "Y, e, s! We, offer, comprehensive support, packages, including maintenan, c, e, updat, e, s, and, 2, 4/7, monitoring, for all, our, solutions.",";
                }
                {
                  questi, o, n: "What, technologies, do you, specialize, in?",";
                  answ, e, r: "We, specialize, in AI/ML, cloud, computin, g, cybersecuri, t, y, quantum, computin, g, and, modern, web technologies, like, React, No, d, e.js, and, Pytho, n.",";
                }
              ].m, a, p((f, a, q, ind, e, x) => (
                <d, i, v
  k, e, y={ind, e, x}
                  classNa, m, e="bg-gr, a, y-50, dar, k: bg-gr, a, y-700, rounde, d-2x, l, p-6, hov, e
  r:shad, o, w-lg, transitio, n-all, duratio, n-3, 0, 0"
                >
                  <h3, className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-900, dar, k: te, x, t-white, m, b-3">"
                    {f, a, q.questi, o, n}
                  </h3>
                  <p, className="te, x, t-gr, a, y-600, dar, k: te, x, t-gr, a, y-3, 0, 0">"
=======
                  <h3, className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-900, dar, k: te, x, t-white, m, b-3">";
                    {f, a, q.questi, o, n}
                  </h3>
                  <p, className="te, x, t-gr, a, y-600, dar, k: te, x, t-gr, a, y-3, 0, 0">";
                    {f, a, q.answ, e, r}
                  </p>
                </d, i, v>
              ))}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* CTA, Sectio, n */}
        <section, className="py-20, b, g-gradie, n, t-to-br, fro, m-gr, a, y-900, t, o-bl, u, e-9, 0, 0">
          <div, className="container, m, x-auto, p, x-6, tex, t-cent, e, r">
            <div, className="m, a, x-w-4xl, m, x-au, t, o">
              <div, className="inli, n, e-flex, item, s-center, p, x-4, p, y-2, rounde, d-full, b, g-bl, u, e-5, 0, 0/20, tex, t-bl, u, e-300, tex, t-sm, fon, t-medium, m, b-6">
                <Sparkles, className="w-4 h-4, m, r-2  />
                Ready, to, Get Start, e, d?
              </d, i, v>
              <h2, className="te, x, t-4xl, m, d: te, x, t-5xl, fon, t-bold, tex, t-white, m, b-6">"
=======
        <section, className="py-20, b, g-gradie, n, t-to-br, fro, m-gr, a, y-900, t, o-bl, u, e-9, 0, 0">";
          <div, className="container, m, x-auto, p, x-6, tex, t-cent, e, r">";
            <div, className="m, a, x-w-4xl, m, x-au, t, o">";
              <div, className="inli, n, e-flex, item, s-center, p, x-4, p, y-2, rounde, d-full, b, g-bl, u, e-5, 0, 0/20, tex, t-bl, u, e-300, tex, t-sm, fon, t-medium, m, b-6">";
                <Sparkles, className="w-4 h-4, m, r-2" />";
                Ready, to, Get Start, e, d?
              </d, i, v>
              <h2, className="te, x, t-4xl, m, d: te, x, t-5xl, fon, t-bold, tex, t-white, m, b-6">";
                L, e, t&ap, o, s;s, Build, Something Amazing, Togethe, r;
              </h2>
              <p, className="te, x, t-xl, tex, t-gr, a, y-300, m, b-8">";
                Join, hundreds, of companies, that, trust Zion, Tech, Group for, thei, r
  technology, need, s. Your, digital, transformation starts, with, a
  single, conversatio, n.
              </p>
              <div, className="flex, fle, x-co, l, s
  m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">"
=======
              <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">";
                <a, titl, e="Internal, lin, k"
                  hr, e, f="#conta, c, t-fo, r, m"
                  classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-600, tex, t-white, rounde, d-xl, fon, t-semibold, hov, e
  r: shad, o, w-lg, transitio, n-all, duratio, n-3, 0, 0"
                >
                  <MessageSquare, className="w-5 h-5, m, r-2  />
=======
                  <MessageSquare, className="w-5 h-5, m, r-2" />";
                  Start, Your, Project;
                </a>
                <a, titl, e="Internal, lin, k"
                  hr, e, f="t, e, l: +155512345, 6, 7"
                  classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, borde, r-2, borde, r-white, tex, t-white, rounde, d-xl, fon, t-semibold, hove, r: bg-white, hov, e
  r:te, x, t-bl, u, e-600, transitio, n-all, duratio, n-3, 0, 0"
                >
                  <Phone, className="w-5 h-5, m, r-2  />
=======
                  <Phone, className="w-5 h-5, m, r-2" />";
                  Call, Us, Now;
                </a>
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        <Foot, e, r   />
      </d, i, v>
    < />
  );
}
;