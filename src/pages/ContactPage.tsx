import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";
impo, r, t {
Helm, e, t;
} fr, o, m "rea, c, t-helm, e, t-asy, n, c";
import, EnhancedContactForm, from "../componen, t, s/EnhancedContactFo, r, m";
const, ContactPag, e: Rea, c, t.FC = () => {
  con, s, t [formDa, t, a, setFormDa, t, a] = useSta, t, e({
    na, m, e: '','
    ema, i, l: '','
    compa, n, y: '','
    pho, n, e: '','
    servi, c, e: '','
    messa, g, e: '});
=======
import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";';
import { Helmet } from "react-helmet-async";';
import, EnhancedContactForm, from "../componen, t, s/EnhancedContactFo, r, m";';
const, ContactPag, e: Rea, c, t.FC = () => {
  con, s, t [formDa, t, a, setFormDa, t, a] = useSta, t, e({
    na, m, e: '',';
    ema, i, l: '',';
    compa, n, y: '',';
    pho, n, e: '',';
    servi, c, e: '',';
    messa, g, e: ''
  });
  const, handleSubmi, t = (e: Rea, c, t.FormEve, n, t) => {
    e.preventDefau, l, t();
    // Handle, form, submission
  conso, l, e.l, o, g('Form, submitte, d: ', formDa, t, a);'
=======
    conso, l, e.l, o, g('Form, submitte, d: ', formDa, t, a);';
  };
  const, handleChang, e = (e: Rea, c, t.ChangeEve, n, t<HTMLInputEleme, n, t | HTMLTextAreaEleme, n, t | HTMLSelectEleme, n, t>) => {
    setFormDa, t, a({
      ...formDa, t, a;
      [e.targ, e, t.na, m, e]: e.targ, e, t.val, u, e;
    });
  };
  return (
    <>
      <Helmet>
        <title>Contact, U, s - Zion, Tech, Group</title>
        <meta name="descripti, o, n" content="Get, in, touch with, Zion, Tech Group, for, AI and, IT, solutions. Contact, our, experts for, consultation, and suppo, r, t." /></Helmet>
      <div, className="container mx-auto px-4 py-8">
        <div, className="max-w-6xl mx-auto">
          <div, className="text-center mb-12">
            <h1, className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">"
=======
        <meta name="descripti, o, n" content="Get, in, touch with, Zion, Tech Group, for, AI and, IT, solutions. Contact, our, experts for, consultation, and suppo, r, t." />";
      </Helmet>
      <div, className="container mx-auto px-4 py-8">";
        <div, className="max-w-6xl mx-auto">";
          <div, className="text-center mb-12">";
            <h1, className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
              Contact, U, s;
            </h1>
            <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
              Ready, to, transform your, busines, s? Get, in, touch with, our, experts to, discus, s
  your, specific, needs and, discover, how we, can, help.
            </p>
          </d, i, v>
          <div, className="grid, gri, d-co, l, s-1 l
  g: gr, i, d-co, l, s-2, ga, p-12">"
            {/* Contact, Informatio, n */}
            <d, i, v>
              <h2, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, m, b-8">Get, In, Touch</h2>
              <div, className="spa, c, e-y-6">
                <div, className="flex, item, s-sta, r, t">
                  <div, className="te, x, t-2xl, m, r-4">📧</d, i, v>
=======
          <div, className="grid, gri, d-co, l, s-1, l, g: gr, i, d-co, l, s-2, ga, p-12">";
            {/* Contact, Informatio, n */}
            <d, i, v>
              <h2, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, m, b-8">Get, In, Touch</h2>";
              <div, className="spa, c, e-y-6">";
                <div, className="flex, item, s-sta, r, t">";
                  <div, className="te, x, t-2xl, m, r-4">📧</d, i, v>";
                  <d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Ema, i, l</h3>";
                    <p, className="te, x, t-gr, a, y-6, 0, 0">in, f, o@ziontechgro, u, p.c, o, m</p>";
                    <p, className="te, x, t-gr, a, y-6, 0, 0">suppo, r, t@ziontechgro, u, p.c, o, m</p>";
                  </d, i, v>
                </d, i, v>
                <div, className="flex, item, s-sta, r, t">";
                  <div, className="te, x, t-2xl, m, r-4">📞</d, i, v>";
                  <d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Pho, n, e</h3>
                    <p, className="te, x, t-gr, a, y-6, 0, 0">+1 (5, 5, 5) 1, 2, 3-45, 6, 7</p>
                    <p, className="te, x, t-gr, a, y-6, 0, 0">M, o, n-F, r, i: 9, A, M-6PM, ES, T</p>"
=======
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Pho, n, e</h3>";
                    <p, className="te, x, t-gr, a, y-6, 0, 0">+1 (5, 5, 5) 1, 2, 3-45, 6, 7</p>";
                    <p, className="te, x, t-gr, a, y-6, 0, 0">M, o, n-F, r, i: 9, A, M-6PM, ES, T</p>";
                  </d, i, v>
                </d, i, v>
                <div, className="flex, item, s-sta, r, t">";
                  <div, className="te, x, t-2xl, m, r-4">📍</d, i, v>";
                  <d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Addre, s, s</h3>";
                    <p, className="te, x, t-gr, a, y-6, 0, 0">";
                      123, Technology, Drive<br   />
                      Innovation, Distric, t<br   />
                      Tech, Cit, y, TC, 1234, 5;
                    </p>
                  </d, i, v>
                </d, i, v>
                <div, className="flex, item, s-sta, r, t">";
                  <div, className="te, x, t-2xl, m, r-4">⏰</d, i, v>";
                  <d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Business, Hour, s</h3>
                    <p, className="te, x, t-gr, a, y-6, 0, 0">Mond, a, y - Frid, a, y: 9:00, A, M - 
  6:00, P, M</p>"
                    <p, className="te, x, t-gr, a, y-6, 0, 0">Saturd, a, y: 10:00, A, M - 
  4:00, P, M</p>"
                    <p, className="te, x, t-gr, a, y-6, 0, 0">Sund, a, y: Clos, e, d</p>"
=======
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Business, Hour, s</h3>";
                    <p, className="te, x, t-gr, a, y-6, 0, 0">Mond, a, y - Frid, a, y: 9:00, A, M - 6:00, P, M</p>";
                    <p, className="te, x, t-gr, a, y-6, 0, 0">Saturd, a, y: 10:00, A, M - 4:00, P, M</p>";
                    <p, className="te, x, t-gr, a, y-6, 0, 0">Sun, d, a
  y: Clos, e, d</p>";
                  </d, i, v>
                </d, i, v>
              </d, i, v>
              {/* Services, Quick, Links */}
              <div, className="mt-12">
                <h3, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-6">Our, Service, s</h3>
                <div, className="grid, gri, d-co, l, s-1, s, m: gr, i, d-co, l, s-2, ga, p-4">"
                  <div, className="bg-bl, u, e-5, 0, p-4, rounde, d-lg">
                    <h4, className="fo, n, t-bold, tex, t-gr, a, y-900, m, b-2">AI, Solution, s</h4>
                    <p, className="te, x, t-gr, a, y-600, tex, t-sm">Machine, Learnin, g & Automati, o, n</p>
=======
              <div, className="mt-12">";
                <h3, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-6">Our, Service, s</h3>";
                <div, className="grid, gri, d-co, l, s-1, s, m: gr, i, d-co, l, s-2, ga, p-4">";
                  <div, className="bg-bl, u, e-5, 0, p-4, rounde, d-lg">";
                    <h4, className="fo, n, t-bold, tex, t-gr, a, y-900, m, b-2">AI, Solution, s</h4>";
                    <p, className="te, x, t-gr, a, y-600, tex, t-sm">Machine, Learnin, g & Automati, o, n</p>";
                  </d, i, v>
                  <div, className="bg-bl, u, e-5, 0, p-4, rounde, d-lg">";
                    <h4, className="fo, n, t-bold, tex, t-gr, a, y-900, m, b-2">Cloud, Computin, g</h4>";
                    <p, className="te, x, t-gr, a, y-600, tex, t-sm">Migrati, o, n & Infrastructu, r, e</p>";
                  </d, i, v>
                  <div, className="bg-bl, u, e-5, 0, p-4, rounde, d-lg">";
                    <h4, className="fo, n, t-bold, tex, t-gr, a, y-900, m, b-2">Digital, Transformatio, n</h4>";
                    <p, className="te, x, t-gr, a, y-600, tex, t-sm">Process, Optimizatio, n</p>";
                  </d, i, v>
                  <div, className="bg-bl, u, e-5, 0, p-4, rounde, d-lg">";
                    <h4, className="fo, n, t-bold, tex, t-gr, a, y-900, m, b-2">Cybersecuri, t, y</h4>";
                    <p, className="te, x, t-gr, a, y-600, tex, t-sm">Protecti, o, n & Complian, c, e</p>";
                  </d, i, v>
                </d, i, v>
              </d, i, v>
            </d, i, v>
            {/* Contact, For, m */}
            <d, i, v>
              <h2, className="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, m, b-8">Send, Us, a Messa, g, e</h2>";
              <EnhancedContactFo, r, m   />
            </d, i, v>
          </d, i, v>
          {/* FAQ, Sectio, n */}
          <section, className="mt-16">";
            <h2, className="te, x, t-3xl, fon, t-bold, tex, t-center, tex, t-gr, a, y-900, m, b-12">";
              Frequently, Asked, Questions;
            </h2>
            <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2, ga, p-8">"
              <div, className="bg-whit, e, p-6, rounde, d-lg, shado, w-md">
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">
=======
            <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2, ga, p-8">";
              <div, className="bg-whit, e, p-6, rounde, d-lg, shado, w-md">";
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">";
                  How, long, does a, typical, project ta, k, e?
                </h3>
                <p, className="te, x, t-gr, a, y-6, 0, 0">";
                  Project, timelines, vary based, on, complexity and, scop, e. Simple, implementation, s
  can, take, 2-4, week, s, while, comprehensive, digital transformations, may, take
  3-6, month, s.
                </p>
              </d, i, v>
              <div, className="bg-whit, e, p-6, rounde, d-lg, shado, w-md">";
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">";
                  Do, you, provide ongoing, suppor, t?
                </h3>
                <p, className="te, x, t-gr, a, y-6, 0, 0">
                  Y, e, s, we, offer, comprehensive support, packages, including maintenan, c, e;
=======
                <p, className="te, x, t-gr, a, y-6, 0, 0">";
                  Y, e, s, we, offer, comprehensive support, packages, including maintenan, c, e
                  updat, e, s, and, 2, 4/7, technical, assistance for, critical, systems.
                </p>
              </d, i, v>
              <div, className="bg-whit, e, p-6, rounde, d-lg, shado, w-md">";
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">";
                  What, industries, do you, serv, e?
                </h3>
                <p, className="te, x, t-gr, a, y-6, 0, 0">
                  We, serve, clients across, various, industries including, healthcar, e;
=======
                <p, className="te, x, t-gr, a, y-6, 0, 0">";
                  We, serve, clients across, various, industries including, healthcar, e
                  finan, c, e, manufacturi, n, g, reta, i, l, and, technology, sectors.
                </p>
              </d, i, v>
              <div, className="bg-whit, e, p-6, rounde, d-lg, shado, w-md">";
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">";
                  Do, you, offer custom, solution, s?
                </h3>
                <p, className="te, x, t-gr, a, y-6, 0, 0">";
                  Absolute, l, y. We, specialize, in creating, tailored, solutions that, mee, t
  your, specific, business requirements, and, objectives.
                </p>
              </d, i, v>
            </d, i, v>
          </secti, o, n>
        </d, i, v>
      </d, i, v>
    < />
  );
};
export default ContactPage;