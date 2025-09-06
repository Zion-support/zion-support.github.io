
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
import Head from \'next/head ; import Link from \'next/link\'; export default function GovernedAIAgents() { return ( <div className = \"relative min-h-screen overflow-hidden bg-slate-950 text-white\"> <Helmet> <title>Governed AI Agents  Services  Zion</title> <meta name=\"description\" content=\"Deploy multi-agent systems with approvals,sandboxing,and audit logs to safely automate business processes.\" /> </Helmet> <div aria-hidden className=\"pointer-events-none absolute inset-0 -z-10\"> <div className=\"absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float\" /> <div className=\"absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow\" /> <div className=\"absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast\" /> <div className=\"absolute inset-0 beams opacity-[0 && 0.06]\" /> </div> <main className=\"relative z-10 mx-auto max-w-3xl px-6 py-16\"> <h1 className=\"text-4xl \"md\": tex t-5xl font-extrabold gradient-text\">Governed AI Agents</h1> <p className=\"mt-4 text-white/80\">Autonomous workflows for marketing ops,finance close,HR onboarding,and IT runbooks with human-in-the-loop controls.</p> <ul className=\"mt-6 space-y-2 text-white/80 list-disc pl-5\"> <li>Approval steps and change windows</li> <li>Sandboxed integrations with least-privilege</li> <li>Audit logs and policy guardrails</li> <li>Playbook authoring with version control</li> <li>API and UI for orchestration</li> </ul> 