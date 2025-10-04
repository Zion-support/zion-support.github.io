import React from "react";
impo, r, t { Li, n, k } fr, o, m "rea, c, t-rout, e, r-d, o, m";
const, link, s = [
  '/', '/abo, u, t', '/conta, c, t', '/bl, o, g', '/servic, e, s', '/solutio, n, s', '/ca, s, e-studi, e, s'
  '/partne, r, s', '/ne, w, s', '/caree, r, s', '/f, a, q', '/te, a, m', '/he, l, p', '/securi, t, y', '/stat, u, s'
  '/priva, c, y', '/ter, m, s', '/cooki, e, s'
];
const, Sitema, p: Rea, c, t.FC = () => {
  return (
    <div, className="m, a, x-w-3, x, l">
      <h1, className="te, x, t-2xl, fon, t-bold, m, b-4">Sitem, a, p</h1>
      <ul, className="li, s, t-disc, m, l-6, spac, e-y-2">
        {lin, k, s.m, a, p((hr, e, f) => (
          <li, ke, y={hr, e, f}>
            <Link, t, o={hr, e, f} classNa, m, e="te, x, t-bl, u, e-600, hove, r:underli, n, e">{hr, e, f || '/'}</Li, n, k>
          </li>
        ))}
      </ul>
    </d, i, v>
  );
};
export default Sitemap;
