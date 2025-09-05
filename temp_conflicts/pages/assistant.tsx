import { useEffect, useMemo, useState } from 'react';

interface Message { role: 'user' | 'assistant'; content: string }

export default function Assistant() {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const tenantId = params.get('tenantId') || '';
  const brand = params.get('brand') || 'Zion AI';

  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Hi! I am ${brand} Assistant. Ask me about roles, hiring timelines, and more.` }]);
  const [input, setInput] = useState('');

  const faqs: Record<string, string> = useMemo(() => ({
    'is this role remote': 'Many roles support remote or hybrid work. Check the job description for specifics.',
    'how soon do you hire': 'Typical timelines range from 2-4 weeks depending on role and interview availability.',
    'what is the interview process': 'Usually: recruiter screen, hiring manager interview, technical/functional round, and final round.'}), []);

  async function handleAsk(question: string) {
    const lower = question.toLowerCase();
    const faq = Object.keys(faqs).find(key => lower.includes(key));
    if (faq) {
      setMessages(prev => [...prev, { role: 'user', content: question }, { role: 'assistant', content: faqs[faq] }]);
      return;
    }
    // Basic fallback
    setMessages(prev => [...prev, { role: 'user', content: question }, { role: 'assistant', content: 'Thanks! A recruiter will follow up shortly.' }]);
  }

  return (
    <div className=&quot;min-h-full h-full w-full flex flex-col bg-white&quot;>
      <div className=&quot;px-4 py-2 border-b text-sm text-gray-600 flex items-center gap-2&quot;>
        <span className=&quot;font-semibold&quot;>{brand}</span>
        <span className=&quot;text-gray-400&quot;>Applicant Assistant</span>
        {tenantId && <span className=&quot;ml-auto text-xs text-gray-400&quot;>Tenant: {tenantId.slice(0, 8)}</span>}
      </div>
      <div className=&quot;flex-1 overflow-auto p-4 space-y-3&quot;>
        {messages.map((m, idx) => (
          <div key={idx} className={m.role === 'assistant' ? 'text-gray-800' : 'text-gray-900 font-medium'}>
            {m.content}
          </div>
        ))}
      </div>
      <form
        className=&quot;p-3 border-t flex gap-2&quot;
        onSubmit={(e) => { e.preventDefault(); if (input.trim()) { handleAsk(input.trim()); setInput(''); } }}
      >
        <input
          className=&quot;flex-1 border rounded px-3 py-2 text-sm&quot;
          placeholder=&quot;Ask about the role...&quot;
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type=&quot;submit&quot; className=&quot;bg-gray-900 text-white text-sm rounded px-3 py-2&quot;>Send</button>
      </form>
    </div>
  );
}