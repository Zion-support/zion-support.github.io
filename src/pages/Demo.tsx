import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";
impo, r, t { Li, n, k } fr, o, m "rea, c, t-rout, e, r-d, o, m";
impo, r, t { Calend, a, r, Clo, c, k, Us, e, r, Ma, i, l, Pho, n, e, CheckCirc, l, e, St, a, r, Pl, a, y } fr, o, m "luci, d, e-rea, c, t";
const, Dem, o: Rea, c, t.FC = () => {
  con, s, t [formDa, t, a, setFormDa, t, a] = useSta, t, e({
    firstNa, m, e: ''
    lastNa, m, e: ''
    ema, i, l: ''
    compa, n, y: ''
    pho, n, e: ''
    jobTit, l, e: ''
    companySi, z, e: ''
    useCa, s, e: ''
    preferredDa, t, e: ''
    preferredTi, m, e: ''
    timeZo, n, e: ''
    messa, g, e: ''
  });
  const, handleInputChang, e = (e: Rea, c, t.ChangeEve, n, t<HTMLInputEleme, n, t | HTMLTextAreaEleme, n, t | HTMLSelectEleme, n, t>) => {
    setFormDa, t, a({
      ...formDa, t, a
      [e.targ, e, t.na, m, e]: e.targ, e, t.val, u, e;
    });
  };
  const, handleSubmi, t = (e: Rea, c, t.FormEve, n, t) => {
    e.preventDefau, l, t();
    conso, l, e.l, o, g('Form, submitt, e
  d:', formDa, t, a);
  };
  const, demoFeature, s = [
    {
      tit, l, e: 'AI-Powered, Automatio, n'
      descripti, o, n: 'See, how, our AI, can, automate your, repetitive, tasks and, workflow, s'
      ic, o, n: '🤖'
    }
    {
      tit, l, e: 'Re, a, l-time, Analytic, s'
      descripti, o, n: 'Experience, our, advanced analytics, and, reporting capabiliti, e, s'
      ic, o, n: '📊'
    }
    {
      tit, l, e: 'Custom, Integration, s'
      descripti, o, n: 'Learn, how, we can, integrate, with your, existing, systems'
      ic, o, n: '🔗'
    }
    {
      tit, l, e: 'Securi, t, y & Complian, c, e'
      descripti, o, n: 'Understand, our, enterprise-grade, security, and compliance, feature, s'
      ic, o, n: '🔒'
    }
  ];
  const, testimonial, s = [
    {
      na, m, e: 'Sarah, Johnso, n'
      compa, n, y: 'TechCo, r, p'
      ro, l, e: 'C, T, O'
      conte, n, t: 'The, demo, showed us, exactly, how AI, could, transform our, operation, s. The, ROI, was clear, from, day o, n, e.'
      rati, n, g: 5;
    }
    {
      na, m, e: 'Michael, Che, n'
      compa, n, y: 'FinanceFl, o, w'
      ro, l, e: 'VP, of, Operations'
      conte, n, t: "Zion, Tech, Group's, demo, was e, y, e-openi, n, g. We, saw, immediate value, and, signed up, the, same we, e, k."
      rati, n, g: 5;
    }
    {
      na, m, e: 'Emily, Rodrigue, z'
      compa, n, y: 'HealthTech, Solution, s'
      ro, l, e: 'C, E, O'
      conte, n, t: 'The, personalized, demo addressed, all, our specific, need, s. Highly, recommend, scheduling o, n, e.'
      rati, n, g: 5;
    }
  ];
  const, timeSlot, s = [
    '9:00, A, M', '10:00, A, M', '11:00, A, M', '12:00, P, M'
    '1:00, P, M', '2:00, P, M', '3:00, P, M', '4:00, P, M'
  ];
  const, companySize, s = [
    '1-10, employee, s'
    '11-50, employee, s'
    '51-200, employee, s'
    '2, 0, 1-1000, employee, s'
    '10, 0, 0+ employe, e, s'
  ];
  const, useCase, s = [
    'Process, Automatio, n'
    'Data, Analytic, s'
    'Customer, Servic, e'
    'Supply, Chain, Optimization'
    'Predictive, Maintenanc, e'
    'Document, Processin, g'
    'Oth, e, r'
  ];
  return (
    <div, className="m, i, n-h-screen, b, g-gr, a, y-50">
      {/* Hero, Sectio, n */}
      <section, className="bg-gradie, n, t-to-br, fro, m-bl, u, e-600, vi, a-purp, l, e-600, t, o-te, a, l-600, tex, t-white, p, y-20">
        <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">
          <div, className="te, x, t-cent, e, r">
            <h1, className="te, x, t-4x, l, m
  d:te, x, t-6xl, fon, t-bold, m, b-6">
              Schedule, Your, Demo;
            </h1>
            <p, className="te, x, t-xl, tex, t-bl, u, e-100, m, b-8, ma, x-w-3xl, m, x-au, t, o">
              See, how, our AI, solutions, can transform, your, business. Book, a, personalized de, m, o
  tailored, to, your specific, needs, and challeng, e, s.
            </p>
            <div, className="flex, item, s-center, justif, y-center, spac, e-x-8, tex, t-bl, u, e-1, 0, 0">
              <div, className="flex, item, s-cent, e, r">
                <Calendar, className="w-5 h-5, m, r-2"  />
                <sp, a, n>30, minute, s</sp, a, n>
              </d, i, v>
              <div, className="flex, item, s-cent, e, r">
                <User, className="w-5 h-5, m, r-2"  />
                <sp, a, n>1-on-1, with, expert</sp, a, n>
              </d, i, v>
              <div, className="flex, item, s-cent, e, r">
                <Play, className="w-5 h-5, m, r-2"  />
                <sp, a, n>Live, demonstratio, n</sp, a, n>
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </d, i, v>
      </secti, o, n>
      {/* Demo, Feature, s */}
      <section, className="py-20, b, g-whi, t, e">
        <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">
          <div, className="te, x, t-center, m, b-16">
            <h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
              What, Yo, u'll, See, in the, Dem, o;
            </h2>
            <p, className="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-2xl, m, x-au, t, o">
              Get, a, comprehensive overview, of, our AI, solutions, tailored to, your, business;
            </p>
          </d, i, v>
          <div, className="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-8">
            {demoFeatur, e, s.m, a, p((featu, r, e, ind, e, x) => (
              <div, ke, y={ind, e, x} classNa, m, e="te, x, t-cent, e, r">
                <div, className="te, x, t-4xl, m, b-4">{featu, r, e.ic, o, n}</d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">{featu, r, e.tit, l, e}</h3>
                <p, className="te, x, t-gr, a, y-6, 0, 0">{featu, r, e.descripti, o, n}</p>
              </d, i, v>
            ))}
          </d, i, v>
        </d, i, v>
      </secti, o, n>
      {/* Demo, For, m */}
      <section, className="py-20, b, g-gr, a, y-50">
        <div, className="m, a, x-w-4xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">
          <div, className="bg-white, rounde, d-lg, shado, w-l, g, p-8">
            <div, className="te, x, t-center, m, b-8">
              <h2, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
                Book, Your, Demo;
              </h2>
              <p, className="te, x, t-gr, a, y-6, 0, 0">
                Fill, out, the form, below, and we'll, contact, you to, schedule, your personalized, dem, o;
              </p>
            </d, i, v>
            <form, onSubmi, t={handleSubm, i, t} classNa, m, e="spa, c, e-y-6">
              {/* Personal, Informatio, n */}
              <div, className="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-2, ga, p-6">
                <d, i, v>
                  <label, htmlFo, r="firstNa, m, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                    First, Nam, e *
                  </lab, e, l>
                  <inp, u, t 
  ty, p, e="te, x, t"
                    id="firstNa, m, e"
                    na, m, e="firstNa, m, e"
                    requir, e, d
  val, u, e={formDa, t, a.firstNa, m, e}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, foc, u
  s:bord, e, r-transpare, n, t"  />
                </d, i, v>
                <d, i, v>
                  <label, htmlFo, r="lastNa, m, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                    Last, Nam, e *
                  </lab, e, l>
                  <inp, u, t 
  ty, p, e="te, x, t"
                    id="lastNa, m, e"
                    na, m, e="lastNa, m, e"
                    requir, e, d
  val, u, e={formDa, t, a.lastNa, m, e}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, focu, s:bord, e, r-transpare, n, t"  />
                </d, i, v>
              </d, i, v>
              <div, className="grid, gri, d-co, l, s-1 m
  d:gr, i, d-co, l, s-2, ga, p-6">
                <d, i, v>
                  <label, htmlFo, r="ema, i, l" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                    Email, Addres, s *
                  </lab, e, l>
                  <inp, u, t 
  ty, p, e="ema, i, l"
                    id="ema, i, l"
                    na, m, e="ema, i, l"
                    requir, e, d
  val, u, e={formDa, t, a.ema, i, l}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, foc, u
  s:bord, e, r-transpare, n, t"  />
                </d, i, v>
                <d, i, v>
                  <label, htmlFo, r="pho, n, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                    Phone, Numbe, r;
                  </lab, e, l>
                  <inp, u, t 
  ty, p, e="t, e, l"
                    id="pho, n, e"
                    na, m, e="pho, n, e"
                    val, u, e={formDa, t, a.pho, n, e}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, foc, u
  s:bord, e, r-transpare, n, t"  />
                </d, i, v>
              </d, i, v>
              {/* Company, Informatio, n */}
              <div, className="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-2, ga, p-6">
                <d, i, v>
                  <label, htmlFo, r="compa, n, y" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                    Company, Nam, e *
                  </lab, e, l>
                  <inp, u, t 
  ty, p, e="te, x, t"
                    id="compa, n, y"
                    na, m, e="compa, n, y"
                    requir, e, d
  val, u, e={formDa, t, a.compa, n, y}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, foc, u
  s:bord, e, r-transpare, n, t"  />
                </d, i, v>
                <d, i, v>
                  <label, htmlFo, r="jobTit, l, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                    Job, Titl, e *
                  </lab, e, l>
                  <inp, u, t 
  ty, p, e="te, x, t"
                    id="jobTit, l, e"
                    na, m, e="jobTit, l, e"
                    requir, e, d
  val, u, e={formDa, t, a.jobTit, l, e}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, focu, s:bord, e, r-transpare, n, t"  />
                </d, i, v>
              </d, i, v>
              <div, className="grid, gri, d-co, l, s-1 m
  d:gr, i, d-co, l, s-2, ga, p-6">
                <d, i, v>
                  <label, htmlFo, r="companySi, z, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                    Company, Siz, e *
                  </lab, e, l>
                  <sele, c, t
  id="companySi, z, e"
                    na, m, e="companySi, z, e"
                    requir, e, d
  val, u, e={formDa, t, a.companySi, z, e}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, foc, u
  s:bord, e, r-transpare, n, t"
                  >
                    <option, valu, e="">Select, company, size</opti, o, n>
                    {companySiz, e, s.m, a, p((si, z, e) => (
                      <option, ke, y={si, z, e} val, u, e={si, z, e}>{si, z, e}</opti, o, n>
                    ))}
                  </sele, c, t>
                </d, i, v>
                <d, i, v>
                  <label, htmlFo, r="useCa, s, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                    Primary, Use, Case *
                  </lab, e, l>
                  <sele, c, t
  id="useCa, s, e"
                    na, m, e="useCa, s, e"
                    requir, e, d
  val, u, e={formDa, t, a.useCa, s, e}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, foc, u
  s:bord, e, r-transpare, n, t"
                  >
                    <option, valu, e="">Select, use, case</opti, o, n>
                    {useCas, e, s.m, a, p((useCa, s, e) => (
                      <option, ke, y={useCa, s, e} val, u, e={useCa, s, e}>{useCa, s, e}</opti, o, n>
                    ))}
                  </sele, c, t>
                </d, i, v>
              </d, i, v>
              {/* Scheduli, n, g */}
              <div, className="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-3, ga, p-6">
                <d, i, v>
                  <label, htmlFo, r="preferredDa, t, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                    Preferred, Dat, e;
                  </lab, e, l>
                  <inp, u, t 
  ty, p, e="da, t, e"
                    id="preferredDa, t, e"
                    na, m, e="preferredDa, t, e"
                    val, u, e={formDa, t, a.preferredDa, t, e}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, foc, u
  s:bord, e, r-transpare, n, t"  />
                </d, i, v>
                <d, i, v>
                  <label, htmlFo, r="preferredTi, m, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                    Preferred, Tim, e;
                  </lab, e, l>
                  <sele, c, t
  id="preferredTi, m, e"
                    na, m, e="preferredTi, m, e"
                    val, u, e={formDa, t, a.preferredTi, m, e}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, foc, u
  s:bord, e, r-transpare, n, t"
                  >
                    <option, valu, e="">Select, tim, e</opti, o, n>
                    {timeSlo, t, s.m, a, p((ti, m, e) => (
                      <option, ke, y={ti, m, e} val, u, e={ti, m, e}>{ti, m, e}</opti, o, n>
                    ))}
                  </sele, c, t>
                </d, i, v>
                <d, i, v>
                  <label, htmlFo, r="timeZo, n, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                    Time, Zon, e;
                  </lab, e, l>
                  <sele, c, t
  id="timeZo, n, e"
                    na, m, e="timeZo, n, e"
                    val, u, e={formDa, t, a.timeZo, n, e}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, foc, u
  s:bord, e, r-transpare, n, t"
                  >
                    <option, valu, e="">Select, timezon, e</opti, o, n>
                    <option, valu, e="E, S, T">Eastern, Tim, e (E, S, T)</opti, o, n>
                    <option, valu, e="C, S, T">Central, Tim, e (C, S, T)</opti, o, n>
                    <option, valu, e="M, S, T">Mountain, Tim, e (M, S, T)</opti, o, n>
                    <option, valu, e="P, S, T">Pacific, Tim, e (P, S, T)</opti, o, n>
                    <option, valu, e="G, M, T">Greenwich, Mean, Time (G, M, T)</opti, o, n>
                  </sele, c, t>
                </d, i, v>
              </d, i, v>
              <d, i, v>
                <label, htmlFo, r="messa, g, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-2">
                  Additional, Informatio, n;
                </lab, e, l>
                <textar, e, a 
  id="messa, g, e"
                  na, m, e="messa, g, e"
                  ro, w, s={4}
                  val, u, e={formDa, t, a.messa, g, e}
                  onChan, g, e={handleInputChan, g, e}
                  placehold, e, r="Tell, us, about your, specific, needs, challeng, e, s, or, question, s..."
                  classNa, m, e="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s: ri, n, g-2, focu, s:ri, n, g-bl, u, e-500, focu, s:bord, e, r-transpare, n, t"  />
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <butt, o, n
  ty, p, e="subm, i, t"
                  classNa, m, e="bg-bl, u, e-600, tex, t-white, p, x-8, p, y-4, rounde, d-lg, fon, t-semibold, hov, e
  r:bg-bl, u, e-700, transitio, n-colors, tex, t-lg"
                >
                  Schedule, My, Demo;
                </butt, o, n>
                <p, className="te, x, t-sm, tex, t-gr, a, y-500, m, t-4">
                  * Required, field, s. We'll, contact, you within, 24, hours to, confirm, your demo, tim, e.
                </p>
              </d, i, v>
            </fo, r, m>
          </d, i, v>
        </d, i, v>
      </secti, o, n>
      {/* Testimonia, l, s */}
      <section, className="py-20, b, g-whi, t, e">
        <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">
          <div, className="te, x, t-center, m, b-16">
            <h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
              What, Our, Clients S, a, y;
            </h2>
            <p, className="te, x, t-xl, tex, t-gr, a, y-6, 0, 0">
              See, what, happens when, you, schedule a, dem, o;
            </p>
          </d, i, v>
          <div, className="grid, gri, d-co, l, s-1 m
  d:gr, i, d-co, l, s-3, ga, p-8">
            {testimonia, l, s.m, a, p((testimoni, a, l, ind, e, x) => (
              <div, ke, y={ind, e, x} classNa, m, e="bg-gr, a, y-50, rounde, d-l, g, p-8">
                <div, className="flex, item, s-center, m, b-4">
                  {[...Arr, a, y(testimoni, a, l.rati, n, g)].m, a, p((_, i) => (
                    <Star, ke, y={i} classNa, m, e="w-5 h-5, tex, t-yell, o, w-400, fil, l-curre, n, t"  />
                  ))}
                </d, i, v>
                <p, className="te, x, t-gr, a, y-700, m, b-6, itali, c">"{testimoni, a, l.conte, n, t}"</p>
                <d, i, v>
                  <p, className="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">{testimoni, a, l.na, m, e}</p>
                  <p, className="te, x, t-gr, a, y-6, 0, 0">{testimoni, a, l.ro, l, e}, {testimoni, a, l.compa, n, y}</p>
                </d, i, v>
              </d, i, v>
            ))}
          </d, i, v>
        </d, i, v>
      </secti, o, n>
      {/* CTA, Sectio, n */}
      <section, className="py-20, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-6, 0, 0">
        <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8, tex, t-cent, e, r">
          <h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-white, m, b-4">
            Ready, to, See AI, in, Action?
          </h2>
          <p, className="te, x, t-xl, tex, t-bl, u, e-100, m, b-8, ma, x-w-2xl, m, x-au, t, o">
            Join, thousands, of businesses, that, have transformed, their, operations with, our, AI solutio, n, s.
          </p>
          <div, className="flex, fle, x-col, s, m:fl, e, x-row, ga, p-4, justif, y-cent, e, r">
            <Li, n, k
  to="/conta, c, t"
              classNa, m, e="bg-white, tex, t-bl, u, e-600, p, x-8, p, y-3, rounde, d-lg, fon, t-semibold, hove, r:bg-gr, a, y-100, transitio, n-colo, r, s"
            >
              Contact, Us, Now;
            </Li, n, k>
            <Li, n, k
  to="/ca, s, e-studi, e, s"
              classNa, m, e="border, borde, r-white, tex, t-white, p, x-8, p, y-3, rounde, d-lg, fon, t-semibold, hov, e
  r:bg-whi, t, e/10, transitio, n-colo, r, s"
            >
              View, Success, Stories;
            </Li, n, k>
          </d, i, v>
        </d, i, v>
      </secti, o, n>
    </d, i, v>
  );
};
export default Demo;
import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";
impo, r, t { Li, n, k } fr, o, m "rea, c, t-rout, e, r-d, o, m";
impo, r, t { Calend, a, r, Clo, c, k, Us, e, r, Ma, i, l, Pho, n, e, CheckCirc, l, e, St, a, r, Pl, a, y } fr, o, m "luci, d, e-rea, c, t";
import { Helmet } from "react-helmet-async";
const, Dem, o: Rea, c, t.FC = () => {
  con, s, t [formDa, t, a, setFormDa, t, a] = useSta, t, e({
    firstNa, m, e: ''
    lastNa, m, e: ''
    ema, i, l: ''
    pho, n, e: ''
    compa, n, y: ''
    useCa, s, e: ''
    preferredTi, m, e: ''
    timeZo, n, e: ''
    messa, g, e: ''
  });
  con, s, t [isSubmitt, e, d, setIsSubmitt, e, d] = useSta, t, e(fal, s, e);
  const, handleInputChang, e = (e: Rea, c, t.ChangeEve, n, t<HTMLInputEleme, n, t | HTMLSelectEleme, n, t | HTMLTextAreaEleme, n, t>) => {
    con, s, t { na, m, e, val, u, e } = e.targ, e, t;
    setFormDa, t, a(pr, e, v => ({
      ...pr, e, v
      [na, m, e]: val, u, e;
    }));
  };
  const, handleSubmi, t = (e: Rea, c, t.FormEve, n, t) => {
    e.preventDefau, l, t();
    // Handle, form, submission he, r, e
  conso, l, e.l, o, g('Demo, request, submitte
  d:', formDa, t, a);
    setIsSubmitt, e, d(tr, u, e);
  };
  const, useCase, s = [
    'AI, Automatio, n'
    'Cybersecurity, Solution, s'
    'Cloud, Infrastructur, e'
    'Data, Analytic, s'
    'DevOps, Service, s'
    'Digital, Transformatio, n'
    'Oth, e, r'
  ];
  const, timeSlot, s = [
    '9: 00, A, M - 1
  0:00, A, M'
    '10: 00, A, M - 1
  1:00, A, M'
    '11: 00, A, M - 1
  2:00, P, M'
    '1: 00, P, M - 
  2:00, P, M'
    '2: 00, P, M - 
  3:00, P, M'
    '3: 00, P, M - 
  4:00, P, M'
    '4: 00, P, M - 5:00, P, M'
  ];
  if (isSubmitt, e, d) {
    return (
      <>
        <Helmet>
          <title>Demo, Request, Submitted - Zion, Tech, Group</title>
          <meta name="descripti, o, n" content="Thank, you, for requesting, a, demo. We'll, contact, you soon, to, schedule your, personalized, demonstration."  />
        </Helmet>
        <div, className="m, i, n-h-screen, b, g-gr, a, y-50, flex, items-center, justif, y-cent, e, r">
          <div, className="m, a, x-w-md, m, x-auto, tex, t-cent, e, r">
            <div, className="w-1, 6, h-16, b, g-gre, e, n-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-6">
              <CheckCircle, className="h-8 w-8, tex, t-gre, e, n-6, 0, 0"  />
            </d, i, v>
            <h1, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
              Demo, Request, Submitted!
            </h1>
            <p, className="te, x, t-lg, tex, t-gr, a, y-600, m, b-8">
              Thank, you, for your, interest, in our, solution, s. Our, team, will contact, you, within 24, hours, to schedule, your, personalized demonstrati, o, n.
            </p>
            <div, className="spa, c, e-y-4">
              <Li, n, k
  to="/"
                classNa, m, e="inli, n, e-flex, item, s-center, p, x-6, p, y-3, border, border-transparent, tex, t-base, fon, t-medium, rounde, d-md, tex, t-white, b, g-bl, u, e-600, hove, r:bg-bl, u, e-700, transitio, n-colo, r, s"
              >
                Return, to, Home;
              </Li, n, k>
              <Li, n, k
  to="/conta, c, t"
                classNa, m, e="block, tex, t-bl, u, e-600, hov, e
  r:te, x, t-bl, u, e-700, fon, t-semibo, l, d"
              >
                Contact, Us, Directly;
              </Li, n, k>
            </d, i, v>
          </d, i, v>
        </d, i, v>
      < />
    );
  }
  return (
    <>
      <Helmet>
        <title>Request, a, Demo - Zion, Tech, Group</title>
        <meta name="descripti, o, n" content="Schedule, a, personalized demonstration, of, our AI, and, IT solutio, n, s. See, how, our technology, can, transform your, busines, s."  />
        <meta name="keywor, d, s" content="de, m, o, demonstrati, o, n, AI, solution, s, technology, showcas, e, business, transformatio, n"  />
        <link, re, l="canonic, a, l" hr, e, f="htt, p, s://ziontechgro, u, p.c, o, m/de, m, o"  />
      </Helmet>
      <div, className="m, i, n-h-screen, b, g-gr, a, y-50">
        {/* Hero, Sectio, n */}
        <section, className="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-600, tex, t-white, p, y-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">
            <div, className="te, x, t-cent, e, r">
              <h1, className="te, x, t-4x, l, m
  d:te, x, t-5xl, fon, t-bold, m, b-6">
                Request, a, Demo;
              </h1>
              <p, className="te, x, t-xl, m, b-8, ma, x-w-3xl, m, x-au, t, o">
                See, our, AI and, IT, solutions in, actio, n. Schedule, a, personalized demonstration, tailored, to your, business, needs.
              </p>
              <div, className="flex, item, s-center, justif, y-center, spac, e-x-8, tex, t-sm">
                <div, className="flex, item, s-cent, e, r">
                  <Clock, className="h-4 w-4, m, r-2"  />
                  30-minute, sessio, n;
                </d, i, v>
                <div, className="flex, item, s-cent, e, r">
                  <User, className="h-4 w-4, m, r-2"  />
                  Expert, presente, r;
                </d, i, v>
                <div, className="flex, item, s-cent, e, r">
                  <Star, className="h-4 w-4, m, r-2"  />
                  Customized, dem, o;
                </d, i, v>
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Demo, For, m */}
        <section, className="py-20, p, x-4, s, m: px-6 l
  g:px-8">
          <div, className="m, a, x-w-4xl, m, x-au, t, o">
            <div, className="bg-white, rounde, d-lg, shado, w-l, g, p-8">
              <div, className="te, x, t-center, m, b-8">
                <h2, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
                  Schedule, Your, Demo;
                </h2>
                <p, className="te, x, t-gr, a, y-6, 0, 0">
                  Fill, out, the form, below, and we'll, contact, you to, schedule, your personalized, demonstratio, n.
                </p>
              </d, i, v>
              <form, onSubmi, t={handleSubm, i, t} classNa, m, e="spa, c, e-y-6">
                {/* Personal, Informatio, n */}
                <div, className="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-2, ga, p-6">
                  <d, i, v>
                    <label, htmlFo, r="firstNa, m, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-1">
                      First, Nam, e *
                    </lab, e, l>
                    <inp, u, t 
  ty, p, e="te, x, t"
                      id="firstNa, m, e"
                      na, m, e="firstNa, m, e"
                      val, u, e={formDa, t, a.firstNa, m, e}
                      onChan, g, e={handleInputChan, g, e}
                      requir, e, d
  classNa, m, e="w-full, p, x-3, p, y-2, border, border-gr, a, y-300, rounde, d-md, focu, s: outli, n, e-none, focu, s:ri, n, g-2, foc, u
  s:ri, n, g-bl, u, e-5, 0, 0"  />
                  </d, i, v>
                  <d, i, v>
                    <label, htmlFo, r="lastNa, m, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-1">
                      Last, Nam, e *
                    </lab, e, l>
                    <inp, u, t 
  ty, p, e="te, x, t"
                      id="lastNa, m, e"
                      na, m, e="lastNa, m, e"
                      val, u, e={formDa, t, a.lastNa, m, e}
                      onChan, g, e={handleInputChan, g, e}
                      requir, e, d
  classNa, m, e="w-full, p, x-3, p, y-2, border, border-gr, a, y-300, rounde, d-md, focu, s: outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0"  />
                  </d, i, v>
                </d, i, v>
                <div, className="grid, gri, d-co, l, s-1 m
  d:gr, i, d-co, l, s-2, ga, p-6">
                  <d, i, v>
                    <label, htmlFo, r="ema, i, l" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-1">
                      Email, Addres, s *
                    </lab, e, l>
                    <inp, u, t 
  ty, p, e="ema, i, l"
                      id="ema, i, l"
                      na, m, e="ema, i, l"
                      val, u, e={formDa, t, a.ema, i, l}
                      onChan, g, e={handleInputChan, g, e}
                      requir, e, d
  classNa, m, e="w-full, p, x-3, p, y-2, border, border-gr, a, y-300, rounde, d-md, focu, s: outli, n, e-none, focu, s:ri, n, g-2, foc, u
  s:ri, n, g-bl, u, e-5, 0, 0"  />
                  </d, i, v>
                  <d, i, v>
                    <label, htmlFo, r="pho, n, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-1">
                      Phone, Numbe, r;
                    </lab, e, l>
                    <inp, u, t 
  ty, p, e="t, e, l"
                      id="pho, n, e"
                      na, m, e="pho, n, e"
                      val, u, e={formDa, t, a.pho, n, e}
                      onChan, g, e={handleInputChan, g, e}
                      classNa, m, e="w-full, p, x-3, p, y-2, border, border-gr, a, y-300, rounde, d-md, focu, s: outli, n, e-none, focu, s:ri, n, g-2, foc, u
  s:ri, n, g-bl, u, e-5, 0, 0"  />
                  </d, i, v>
                </d, i, v>
                <d, i, v>
                  <label, htmlFo, r="compa, n, y" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-1">
                    Compa, n, y *
                  </lab, e, l>
                  <inp, u, t 
  ty, p, e="te, x, t"
                    id="compa, n, y"
                    na, m, e="compa, n, y"
                    val, u, e={formDa, t, a.compa, n, y}
                    onChan, g, e={handleInputChan, g, e}
                    requir, e, d
  classNa, m, e="w-full, p, x-3, p, y-2, border, border-gr, a, y-300, rounde, d-md, focu, s: outli, n, e-none, focu, s:ri, n, g-2, foc, u
  s:ri, n, g-bl, u, e-5, 0, 0"  />
                </d, i, v>
                <d, i, v>
                  <label, htmlFo, r="useCa, s, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-1">
                    Primary, Use, Case;
                  </lab, e, l>
                  <sele, c, t
  id="useCa, s, e"
                    na, m, e="useCa, s, e"
                    val, u, e={formDa, t, a.useCa, s, e}
                    onChan, g, e={handleInputChan, g, e}
                    classNa, m, e="w-full, p, x-3, p, y-2, border, border-gr, a, y-300, rounde, d-md, focu, s: outli, n, e-none, focu, s:ri, n, g-2, foc, u
  s:ri, n, g-bl, u, e-5, 0, 0"
                  >
                    <option, valu, e="">Select, a, use ca, s, e</opti, o, n>
                    {useCas, e, s.m, a, p((useCa, s, e) => (
                      <option, ke, y={useCa, s, e} val, u, e={useCa, s, e}>
                        {useCa, s, e}
                      </opti, o, n>
                    ))}
                  </sele, c, t>
                </d, i, v>
                <div, className="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-2, ga, p-6">
                  <d, i, v>
                    <label, htmlFo, r="preferredTi, m, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-1">
                      Preferred, Time, Slot;
                    </lab, e, l>
                    <sele, c, t
  id="preferredTi, m, e"
                      na, m, e="preferredTi, m, e"
                      val, u, e={formDa, t, a.preferredTi, m, e}
                      onChan, g, e={handleInputChan, g, e}
                      classNa, m, e="w-full, p, x-3, p, y-2, border, border-gr, a, y-300, rounde, d-md, focu, s: outli, n, e-none, focu, s:ri, n, g-2, foc, u
  s:ri, n, g-bl, u, e-5, 0, 0"
                    >
                      <option, valu, e="">Select, a, time</opti, o, n>
                      {timeSlo, t, s.m, a, p((ti, m, e) => (
                        <option, ke, y={ti, m, e} val, u, e={ti, m, e}>
                          {ti, m, e}
                        </opti, o, n>
                      ))}
                    </sele, c, t>
                  </d, i, v>
                  <d, i, v>
                    <label, htmlFo, r="timeZo, n, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-1">
                      Time, Zon, e;
                    </lab, e, l>
                    <sele, c, t
  id="timeZo, n, e"
                      na, m, e="timeZo, n, e"
                      val, u, e={formDa, t, a.timeZo, n, e}
                      onChan, g, e={handleInputChan, g, e}
                      classNa, m, e="w-full, p, x-3, p, y-2, border, border-gr, a, y-300, rounde, d-md, focu, s: outli, n, e-none, focu, s:ri, n, g-2, foc, u
  s:ri, n, g-bl, u, e-5, 0, 0"
                    >
                      <option, valu, e="">Select, time, zone</opti, o, n>
                      <option, valu, e="E, S, T">Eastern, Tim, e (E, S, T)</opti, o, n>
                      <option, valu, e="C, S, T">Central, Tim, e (C, S, T)</opti, o, n>
                      <option, valu, e="M, S, T">Mountain, Tim, e (M, S, T)</opti, o, n>
                      <option, valu, e="P, S, T">Pacific, Tim, e (P, S, T)</opti, o, n>
                      <option, valu, e="G, M, T">Greenwich, Mean, Time (G, M, T)</opti, o, n>
                      <option, valu, e="C, E, T">Central, European, Time (C, E, T)</opti, o, n>
                      <option, valu, e="I, S, T">India, Standard, Time (I, S, T)</opti, o, n>
                      <option, valu, e="J, S, T">Japan, Standard, Time (J, S, T)</opti, o, n>
                    </sele, c, t>
                  </d, i, v>
                </d, i, v>
                <d, i, v>
                  <label, htmlFo, r="messa, g, e" classNa, m, e="block, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, m, b-1">
                    Additional, Informatio, n;
                  </lab, e, l>
                  <textar, e, a 
  id="messa, g, e"
                    na, m, e="messa, g, e"
                    val, u, e={formDa, t, a.messa, g, e}
                    onChan, g, e={handleInputChan, g, e}
                    ro, w, s={4}
                    placehold, e, r="Tell, us, about your, specific, needs, challeng, e, s, or, question, s..."
                    classNa, m, e="w-full, p, x-3, p, y-2, border, border-gr, a, y-300, rounde, d-md, focu, s: outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0"  />
                </d, i, v>
                <div, className="te, x, t-cent, e, r">
                  <butt, o, n
  ty, p, e="subm, i, t"
                    classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-3, border, border-transparent, tex, t-base, fon, t-medium, rounde, d-md, tex, t-white, b, g-bl, u, e-600, hov, e
  r:bg-bl, u, e-700, transitio, n-colo, r, s"
                  >
                    <Play, className="mr-2 h-5 w-5"  />
                    Request, Dem, o;
                  </butt, o, n>
                </d, i, v>
              </fo, r, m>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Benefits, Sectio, n */}
        <section, className="py-20, p, x-4, s, m: px-6, l, g:px-8, b, g-whi, t, e">
          <div, className="m, a, x-w-7xl, m, x-au, t, o">
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-3xl, m, d:te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
                Why, Schedule, a De, m, o?
              </h2>
              <p, className="te, x, t-xl, tex, t-gr, a, y-6, 0, 0">
                See, firsthand, how our, solutions, can transform, your, business;
              </p>
            </d, i, v>
            <div, className="grid, gri, d-co, l, s-1 m
  d:gr, i, d-co, l, s-3, ga, p-8">
              <div, className="te, x, t-cent, e, r">
                <div, className="w-1, 6, h-16, b, g-bl, u, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
                  <User, className="h-8 w-8, tex, t-bl, u, e-6, 0, 0"  />
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-900, m, b-2">
                  Personalized, Experienc, e;
                </h3>
                <p, className="te, x, t-gr, a, y-6, 0, 0">
                  Our, experts, tailor the, demonstration, to your, specific, industry and, use, cases.
                </p>
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <div, className="w-1, 6, h-16, b, g-gre, e, n-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
                  <CheckCircle, className="h-8 w-8, tex, t-gre, e, n-6, 0, 0"  />
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-900, m, b-2">
                  Re, a, l-World, Example, s;
                </h3>
                <p, className="te, x, t-gr, a, y-6, 0, 0">
                  See, our, solutions in, action, with real, business, scenarios and, case, studies.
                </p>
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <div, className="w-1, 6, h-16, b, g-purp, l, e-100, rounde, d-full, flex, items-center, justif, y-center, m, x-auto, m, b-4">
                  <Mail, className="h-8 w-8, tex, t-purp, l, e-6, 0, 0"  />
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-semibold, tex, t-gr, a, y-900, m, b-2">
                  Exper, t, Q&A;
                </h3>
                <p, className="te, x, t-gr, a, y-6, 0, 0">
                  Get, answers, to your, specific, questions from, our, technical exper, t, s.
                </p>
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
      </d, i, v>
    < />
  );
};
export default Demo;