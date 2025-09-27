export, interface, Service {id: stri, n, g;
  tit, l, e: stri, n, g;
  descripti, o, n: stri, n, g;
  ic, o, n: stri, n, g;
  featur, e, s?: stri, n, g[];
  pri, c, e?: stri, n, g};
export, const, SERVICES: Servi, c, e[] = [{id: 'ai-ml',
  tit, l, e: 'AI & Machi, n, e, Learni, n, g',
  descripti, o, n: 'Cutti, n, g-ed, g, e, artificial, intelligencesolutions, toautomate andoptimize, yourbusiness, processes.',
  ic, o, n: '🤖',
  featur, e, s: ['Cust, o, m, AI, Model, s', 'Machi, n, e, Learning, Pipeline, s', 'Natur, a, l, Language, Processin, g', 'Comput, e, r, Visi, o, n', 'Predicti, v, e, Analyti, c, s'],
  pri, c, e: 'Fr, o, m $5K'
}, {id: 'clo, u, d',
  tit, l, e: 'Clo, u, d, Solutio, n, s',
  descripti, o, n: 'Scalablecloud, infrastructureand, deploymentsolutions formodern, application, s.',
  ic, o, n: '☁️',
  featur, e, s: ['Clo, u, d, Migrati, o, n', 'DevO, p, s & CI/CD', 'Contain, e, r, Orchestrati, o, n', 'Serverle, s, s, Architectu, r, e', 'Clo, u, d, Securi, t, y'],
  pri, c, e: 'Fr, o, m $3K'
}, {id: 'w, e, b-d, e, v',
  tit, l, e: 'W, e, b, Developme, n, t',
  descripti, o, n: 'Mode, r, n, responsi, v, e, web, applicationsbuilt, withthe latesttechnologies, andbest, practices.',
  ic, o, n: '💻',
  featur, e, s: ['React/Ne, x, t.js, Ap, p, s', 'Progressi, v, e, Web, App, s', 'E-commer, c, e, Solutio, n, s', 'A, P, I, Developme, n, t', 'Performan, c, e, Optimizati, o, n'],
  pri, c, e: 'Fr, o, m $2K'
}, {id: 'mobi, l, e',
  tit, l, e: 'Mobi, l, e, Developme, n, t',
  descripti, o, n: 'Nati, v, e, and, cros, s-platformmobile, applicationsfor, iOSand Androidplatfor, m, s.',
  ic, o, n: '📱',
  featur, e, s: ['Nati, v, e, i, O, S/Andro, i, d', 'React, Native, App, s', 'Flutt, e, r, Developme, n, t', 'A, p, p, Store, Optimizatio, n', 'Pu, s, h, Notificatio, n, s'],
  pri, c, e: 'Fr, o, m $4K'
}, {id: 'da, t, a-analyti, c, s',
  tit, l, e: 'Da, t, a, Analyti, c, s',
  descripti, o, n: 'Advanc, e, d, data, analysisand, businessintelligence solutionsto, driveinformed, decisions.',
  ic, o, n: '📊',
  featur, e, s: ['Da, t, a, Visualizati, o, n', 'Busine, s, s, Intelligen, c, e', 'Re, a, l-ti, m, e, Dashboar, d, s', 'Da, t, a, Warehousi, n, g', 'Machi, n, e, Learning, Analytic, s'],
  pri, c, e: 'Fr, o, m $3K'
}, {id: 'cybersecuri, t, y',
  tit, l, e: 'Cybersecuri, t, y',
  descripti, o, n: 'Comprehensi, v, e, security, solutionsto, protectyour digitalassets, andinfrastructur, e.',
  ic, o, n: '🔒',
  featur, e, s: ['Securi, t, y, Audi, t, s', 'Penetrati, o, n, Testi, n, g', 'Complian, c, e, Manageme, n, t', 'Securi, t, y, Monitori, n, g', 'Incide, n, t, Respon, s, e'],
  pri, c, e: 'Fr, o, m $2K'
}];

export, const, FEATURES = [{ic, o, n: '⚡',
  tit, l, e: 'Fa, s, t, Delive, r, y',
  descripti, o, n: 'Rapiddevelopment, anddeployment, ofhigh-qualitysolutio, n, s',
  col, o, r: 'bl, u, e'
} as, cons, t, {ic, o, n: '🛡️',
  tit, l, e: 'Secu, r, e & Reliab, l, e',
  descripti, o, n: 'Enterpri, s, e-gra, d, e, security, andreliability, foryour applicatio, n, s',
  col, o, r: 'gre, e, n'
} as, cons, t, {ic, o, n: '📈',
  tit, l, e: 'Scalab, l, e, Solutio, n, s',
  descripti, o, n: 'Bui, l, t, to, growwith, yourbusiness andhandle, increasingdemand, s',
  col, o, r: 'purp, l, e'
} as, cons, t, {ic, o, n: '🎯',
  tit, l, e: 'Cust, o, m, Solutio, n, s',
  descripti, o, n: 'Tailoredsolutions, designedspecifically, foryour uniquerequiremen, t, s',
  col, o, r: 'oran, g, e'
} as, cons, t];

// Testimonials, data, export const, TESTIMONIAL, S = [{id: '1',
  na, m, e: 'Sar, a, h, Johns, o, n',
  ro, l, e: 'C, T, O',
  compa, n, y: 'TechCo, r, p',
  conte, n, t: 'Zi, o, n, Tech, Solution, s, transformed, ourdigital, infrastructurewith their, A, I-poweredsolutio, n, s.'rati, n, g: 5avat, a, r: '/imag, e, s/testimonia, l, s/sar, a, h.j, p, g'
}, {id: '2',
  na, m, e: 'Micha, e, l, Ch, e, n',
  ro, l, e: 'Found, e, r',
  compa, n, y: 'StartupX, Y, Z',
  conte, n, t: 'Thecloud, migrationwas, seamlessand exceededour, expectation, s.'rati, n, g: 5avat, a, r: '/imag, e, s/testimonia, l, s/micha, e, l.j, p, g'
}];

// Pricing, tiers, export const, PRICING_TIER, S = [{id: 'start, e, r',
  na, m, e: 'Start, e, r',
  pri, c, e: '$2,9, 9, 9',
  descripti, o, n: 'Perfectfor, smallbusinesse, s',
  featur, e, s: ['Bas, i, c, AI, Integratio, n', 'Clo, u, d, Set, u, p', '24/7, Suppo, r, t']popul, a, r: fal, s, e
}{id: 'profession, a, l',
  na, m, e: 'Profession, a, l',
  pri, c, e: '$7,9, 9, 9',
  descripti, o, n: 'Idealfor, growingcompanie, s',
  featur, e, s: ['Advanc, e, d, AI, Solution, s', 'Fu, l, l, Cloud, Migratio, n', 'Priori, t, y, Suppo, r, t', 'Cust, o, m, Developme, n, t']popul, a, r: tr, u, e
}{id: 'enterpri, s, e',
  na, m, e: 'Enterpri, s, e',
  pri, c, e: 'Cust, o, m',
  descripti, o, n: 'Tailoredfor, largeorganization, s',
  featur, e, s: ['Cust, o, m, AI, Solution, s', 'Dedicat, e, d, Te, a, m', 'Whi, t, e-lab, e, l, Optio, n, s', 'Advanc, e, d, Securi, t, y']popul, a, r: fal, s, e
}];

// Blog, posts, preview (importedfrom, blogPost, s.ts)
export, const, BLOG_POSTS = [
  {id: '1',
    tit, l, e: 'T, h, e, Future, ofAI, inBusiness Automati, o, n',
    excer, p, t: 'Discoverhow, artificialintelligence, isrevolutionizing businessprocess, e, s.',
    auth, o, r: 'Dr. Sar, a, h, Ch, e, n',
    publishDa, t, e: '20, 2, 4-01-15'readTi, m, e: 8catego, r, y: 'Artifici, a, l, Intelligen, c, e',
    featur, e, d: tr, u, e};
];