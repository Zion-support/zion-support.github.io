export type CourseModule = {
  id: string,
  title: string,
  points: string[]},
export const founderCourseModules: CourseModule[] = [
  {
    id: 'module-1',
    title: 'Module 1 — 🌍 Introduction to Zion',
    points: [
      'What is Zion OS?Mission: AI, Talent, Trust',
      'Multiverse and Nation-as-a-DAO',
    ],
  },
  {
    id: 'module-2',
    title: 'Module 2 — 🧠 Core Systems Overview',
    points: [
      'Marketplace logicZionGPT prompt routing',
      'DAO governanceToken economy basics (ZION$)',
      'Multiverse config',
    ]
  },
  {
    id: 'module-3',
    title: 'Module 3 — 🛠 Deployment & Setup',
    points: [
      'Using the Genesis Deploy KitEnabling modules (jobs, grants, academy)',
      'Initial DAO config + manifestos',
    ],
  },
  {
    id: 'module-4',
    title: 'Module 4 — 💬 Community, Support, Scaling',
    points: [
      'Creating nationsActivating proposals',
      'Hiring moderators, educators, ambassadorsFranchise and growth strategy',
    ],
  },
  {
    id: 'module-5',
    title: 'Module 5 — 🧾 Legal & Launch',
    points: [
      'KYC/AML overviewToken legal stack',
      'Whitepaper + governance docs',
    ]
  },
],