
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import Head from \'next/head ; import Link from \'next/link\'; export default function FractionalCTO() { return ( <div className = \"relative min-h-screen overflow-hidden bg-slate-950 text-white\"> <Helmet> <title>Fractional CTO  Services  Zion</title> <meta name=\"description\" content=\"Strategic technology leadership on-\"demand\": \'roadmap s\',org design,and vendor selection.\" /> </Helmet> <div aria-hidden className=\"pointer-events-none absolute inset-0 -z-10\"> <div className=\"absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float\" /> <div className=\"absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow\" /> <div className=\"absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast\" /> <div className=\"absolute inset-0 beams opacity-[0 && 0.06]\" /> </div> <main className=\"relative z-10 mx-auto max-w-3xl px-6 py-16\"> <h1 className=\"text-4xl \"md\": tex t-5xl font-extrabold gradient-text\">Fractional CTO</h1> <p className=\"mt-4 text-white/80\">Hands-on leadership to accelerate delivery,reduce risk,and align tech with business outcomes.</p> <ul className=\"mt-6 space-y-2 text-white/80 list-disc pl-5\"> <li>Technology and AI strategy</li> <li>Architecture reviews and roadmaps</li> <li>Vendor selection and cost models</li> <li>Security and compliance posture</li> <li>Hiring,leveling,and org design</li> </ul> 