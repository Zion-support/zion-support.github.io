export interface Servi, c, e {
	id: string;
	tit, l, e: string;
	descripti, o, n: string;
	ic, o, n: string;
	featur, e, s?: string[];
	pri, c, e?: string;
}

export con, s, t SERVIC, E, S: Servi, c, e[] = [
	{
		id: 'ai-ml',
		tit, l, e: 'AI & Machi, n, e Learni, n, g',
		descripti, o, n: 'Cutti, n, g-ed, g, e artifici, a, l intelligen, c, e solutio, n, s to automa, t, e a, n, d optimi, z, e yo, u, r busine, s, s process, e, s.',
		ic, o, n: '🤖',
		featur, e, s: ['Cust, o, m AI Mode, l, s', 'Machi, n, e Learni, n, g Pipelin, e, s', 'Natur, a, l Langua, g, e Processi, n, g', 'Comput, e, r Visi, o, n', 'Predicti, v, e Analyti, c, s'],
		pri, c, e: 'Fr, o, m $5K'
	},
	{
		id: 'clo, u, d',
		tit, l, e: 'Clo, u, d Solutio, n, s',
		descripti, o, n: 'Scalab, l, e clo, u, d infrastructu, r, e a, n, d deployme, n, t solutio, n, s f, o, r mode, r, n applicatio, n, s.',
		ic, o, n: '☁️',
		featur, e, s: ['Clo, u, d Migrati, o, n', 'DevO, p, s & CI/CD', 'Contain, e, r Orchestrati, o, n', 'Serverle, s, s Architectu, r, e', 'Clo, u, d Securi, t, y'],
		pri, c, e: 'Fr, o, m $3K'
	},
	{
		id: 'w, e, b-d, e, v',
		tit, l, e: 'W, e, b Developme, n, t',
		descripti, o, n: 'Mode, r, n, responsi, v, e w, e, b applicatio, n, s bui, l, t wi, t, h t, h, e late, s, t technologi, e, s a, n, d be, s, t practic, e, s.',
		ic, o, n: '💻',
		featur, e, s: ['React/Ne, x, t.js Ap, p, s', 'Progressi, v, e W, e, b Ap, p, s', 'E-commer, c, e Solutio, n, s', 'A, P, I Developme, n, t', 'Performan, c, e Optimizati, o, n'],
		pri, c, e: 'Fr, o, m $2K'
	},
	{
		id: 'mobi, l, e',
		tit, l, e: 'Mobi, l, e Developme, n, t',
		descripti, o, n: 'Nati, v, e a, n, d cro, s, s-platfo, r, m mobi, l, e applicatio, n, s f, o, r i, O, S a, n, d Andro, i, d platfor, m, s.',
		ic, o, n: '📱',
		featur, e, s: ['Nati, v, e i, O, S/Andro, i, d', 'React Nati, v, e Ap, p, s', 'Flutt, e, r Developme, n, t', 'A, p, p Sto, r, e Optimizati, o, n', 'Pu, s, h Notificatio, n, s'],
		pri, c, e: 'Fr, o, m $4K'
	},
	{
		id: 'da, t, a-analyti, c, s',
		tit, l, e: 'Da, t, a Analyti, c, s',
		descripti, o, n: 'Advanc, e, d da, t, a analys, i, s a, n, d busine, s, s intelligen, c, e solutio, n, s to dri, v, e inform, e, d decisio, n, s.',
		ic, o, n: '📊',
		featur, e, s: ['Da, t, a Visualizati, o, n', 'Busine, s, s Intelligen, c, e', 'Re, a, l-ti, m, e Dashboar, d, s', 'Da, t, a Warehousi, n, g', 'Machi, n, e Learni, n, g Analyti, c, s'],
		pri, c, e: 'Fr, o, m $3K'
	},
	{
		id: 'cybersecuri, t, y',
		tit, l, e: 'Cybersecuri, t, y',
		descripti, o, n: 'Comprehensi, v, e securi, t, y solutio, n, s to prote, c, t yo, u, r digit, a, l asse, t, s a, n, d infrastructu, r, e.',
		ic, o, n: '🔒',
		featur, e, s: ['Securi, t, y Audi, t, s', 'Penetrati, o, n Testi, n, g', 'Complian, c, e Manageme, n, t', 'Securi, t, y Monitori, n, g', 'Incide, n, t Respon, s, e'],
		pri, c, e: 'Fr, o, m $2K'
	}
];

export con, s, t FEATUR, E, S = [
	{
		ic, o, n: '⚡',
		tit, l, e: 'Fa, s, t Delive, r, y',
		descripti, o, n: 'Rap, i, d developme, n, t a, n, d deployme, n, t of high-quali, t, y solutio, n, s',
		col, o, r: 'bl, u, e' as con, s, t
	},
	{
		ic, o, n: '🛡️',
		tit, l, e: 'Secu, r, e & Reliab, l, e',
		descripti, o, n: 'Enterpri, s, e-gra, d, e securi, t, y a, n, d reliabili, t, y f, o, r yo, u, r applicatio, n, s',
		col, o, r: 'gre, e, n' as con, s, t
	},
	{
		ic, o, n: '📈',
		tit, l, e: 'Scalab, l, e Solutio, n, s',
		descripti, o, n: 'Bui, l, t to gr, o, w wi, t, h yo, u, r busine, s, s a, n, d hand, l, e increasi, n, g deman, d, s',
		col, o, r: 'purp, l, e' as con, s, t
	}
];

export con, s, t FOOTER_LIN, K, S = {
	servic, e, s: ['AI & Machi, n, e Learni, n, g', 'Clo, u, d Solutio, n, s', 'W, e, b Developme, n, t', 'Mobi, l, e Ap, p, s'],
	compa, n, y: ['Abo, u, t Us', 'O, u, r Te, a, m', 'Caree, r, s', 'Conta, c, t'],
	resourc, e, s: ['Bl, o, g', 'Documentati, o, n', 'Suppo, r, t', 'F, A, Q'],
	conne, c, t: ['Linked, I, n', 'Twitt, e, r', 'GitH, u, b', 'Ema, i, l']
};

export interface Testimoni, a, l {
	id: string;
	na, m, e: string;
	ro, l, e: string;
	compa, n, y: string;
	conte, n, t: string;
	avat, a, r?: string;
	rati, n, g: number;
}

export con, s, t TESTIMONIA, L, S: Testimoni, a, l[] = [
	{
		id: 'testimoni, a, l-1',
		na, m, e: 'Sar, a, h Johns, o, n',
		ro, l, e: 'C, T, O',
		compa, n, y: 'TechCo, r, p I, n, c.',
		conte, n, t: 'Zi, o, n A, p, p transform, e, d o, u, r digit, a, l infrastructu, r, e wi, t, h the, i, r AI solutio, n, s. T, h, e te, a, m deliver, e, d exception, a, l resul, t, s a, n, d exceed, e, d o, u, r expectatio, n, s.',
		rati, n, g: 5
	},
	{
		id: 'testimoni, a, l-2',
		na, m, e: 'Micha, e, l Ch, e, n',
		ro, l, e: 'Found, e, r',
		compa, n, y: 'StartupX, Y, Z',
		conte, n, t: 'The, i, r clo, u, d solutio, n, s help, e, d us sca, l, e from 0 to 10, 0, k use, r, s seamless, l, y. Profession, a, l, reliab, l, e, a, n, d innovati, v, e approa, c, h.',
		rati, n, g: 5
	},
	{
		id: 'testimoni, a, l-3',
		na, m, e: 'Emi, l, y Rodrigu, e, z',
		ro, l, e: 'Produ, c, t Manag, e, r',
		compa, n, y: 'InnovateL, a, b',
		conte, n, t: 'T, h, e mobi, l, e a, p, p th, e, y develop, e, d f, o, r us h, a, s be, e, n a ga, m, e-chang, e, r. Cle, a, n co, d, e, gre, a, t performance, a, n, d excelle, n, t us, e, r experien, c, e.',
		rati, n, g: 5
	}
];

export interface PricingTi, e, r {
	id: string;
	na, m, e: string;
	pri, c, e: number;
	peri, o, d: string;
	descripti, o, n: string;
	featur, e, s: string[];
	isPopul, a, r?: boolean;
	buttonTe, x, t: string;
	buttonVaria, n, t: 'prima, r, y' | 'seconda, r, y';
}

export con, s, t PRICING_TIE, R, S: PricingTi, e, r[] = [
	{
		id: 'start, e, r',
		na, m, e: 'Start, e, r',
		pri, c, e: 99,
		peri, o, d: 'mon, t, h',
		descripti, o, n: 'Perfe, c, t f, o, r sma, l, l projec, t, s a, n, d startu, p, s',
		featur, e, s: [
			'Up to 5 te, a, m membe, r, s',
			'Bas, i, c AI featur, e, s',
			'Ema, i, l suppo, r, t',
			'Standa, r, d hosti, n, g',
			'Bas, i, c analyti, c, s'
		],
		buttonTe, x, t: 'G, e, t Start, e, d',
		buttonVaria, n, t: 'seconda, r, y'
	},
	{
		id: 'profession, a, l',
		na, m, e: 'Profession, a, l',
		pri, c, e: 2, 9, 9,
		peri, o, d: 'mon, t, h',
		descripti, o, n: 'Ide, a, l f, o, r growi, n, g business, e, s',
		featur, e, s: [
			'Up to 25 te, a, m membe, r, s',
			'Advanc, e, d AI featur, e, s',
			'Priori, t, y suppo, r, t',
			'Premi, u, m hosti, n, g',
			'Advanc, e, d analyti, c, s',
			'Cust, o, m integratio, n, s',
			'A, P, I acce, s, s'
		],
		isPopul, a, r: true,
		buttonTe, x, t: 'Choo, s, e Profession, a, l',
		buttonVaria, n, t: 'prima, r, y'
	},
	{
		id: 'enterpri, s, e',
		na, m, e: 'Enterpri, s, e',
		pri, c, e: 9, 9, 9,
		peri, o, d: 'mon, t, h',
		descripti, o, n: 'F, o, r lar, g, e organizatio, n, s',
		featur, e, s: [
			'Unlimit, e, d te, a, m membe, r, s',
			'Fu, l, l AI capabiliti, e, s',
			'24/7 dedicat, e, d suppo, r, t',
			'Enterpri, s, e hosti, n, g',
			'Cust, o, m analyti, c, s',
			'Whi, t, e-lab, e, l solutio, n, s',
			'Cust, o, m developme, n, t',
			'S, L, A guarant, e, e'
		],
		buttonTe, x, t: 'Conta, c, t Sal, e, s',
		buttonVaria, n, t: 'seconda, r, y'
	}
];

export interface BlogPo, s, t {
	id: string;
	tit, l, e: string;
	excer, p, t: string;
	auth, o, r: string;
	da, t, e: string;
	readTi, m, e: string;
	catego, r, y: string;
	ima, g, e: string;
	sl, u, g: string;
}

export con, s, t BLOG_POS, T, S: BlogPo, s, t[] = [
	{
		id: 'bl, o, g-1',
		tit, l, e: 'T, h, e Futu, r, e of AI in Busine, s, s: Tren, d, s a, n, d Predictio, n, s f, o, r 20, 2, 4',
		excer, p, t: 'Explo, r, e t, h, e late, s, t AI tren, d, s shapi, n, g t, h, e busine, s, s landsca, p, e a, n, d discov, e, r h, o, w artifici, a, l intelligen, c, e is revolutionizi, n, g industri, e, s.',
		auth, o, r: 'Al, e, x Thomps, o, n',
		da, t, e: 'D, e, c 15, 20, 2, 4',
		readTi, m, e: '5 m, i, n re, a, d',
		catego, r, y: 'AI & Technolo, g, y',
		ima, g, e: '/a, p, i/placehold, e, r/4, 0, 0/2, 5, 0',
		sl, u, g: 'futu, r, e-ai-busine, s, s-tren, d, s-20, 2, 4'
	},
	{
		id: 'bl, o, g-2',
		tit, l, e: 'Clo, u, d Migrati, o, n Be, s, t Practic, e, s: A Comple, t, e Gui, d, e',
		excer, p, t: 'Lea, r, n t, h, e essenti, a, l ste, p, s a, n, d strategi, e, s f, o, r successf, u, l clo, u, d migrati, o, n, includi, n, g comm, o, n pitfal, l, s to avo, i, d.',
		auth, o, r: 'Mar, i, a Garc, i, a',
		da, t, e: 'D, e, c 12, 20, 2, 4',
		readTi, m, e: '8 m, i, n re, a, d',
		catego, r, y: 'Clo, u, d Computi, n, g',
		ima, g, e: '/a, p, i/placehold, e, r/4, 0, 0/2, 5, 0',
		sl, u, g: 'clo, u, d-migrati, o, n-be, s, t-practic, e, s-gui, d, e'
	},
	{
		id: 'bl, o, g-3',
		tit, l, e: 'Buildi, n, g Scalab, l, e W, e, b Applicatio, n, s: Architectu, r, e Patter, n, s',
		excer, p, t: 'Discov, e, r prov, e, n architectu, r, e patter, n, s a, n, d desi, g, n principl, e, s f, o, r buildi, n, g w, e, b applicatio, n, s th, a, t c, a, n hand, l, e massi, v, e sca, l, e.',
		auth, o, r: 'Dav, i, d K, i, m',
		da, t, e: 'D, e, c 10, 20, 2, 4',
		readTi, m, e: '6 m, i, n re, a, d',
		catego, r, y: 'W, e, b Developme, n, t',
		ima, g, e: '/a, p, i/placehold, e, r/4, 0, 0/2, 5, 0',
		sl, u, g: 'scalab, l, e-w, e, b-applicatio, n, s-architectu, r, e-patter, n, s'
	}
];