import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { ServiceItem } from './EnhancedMarketplaceCard';

export type QuoteFormValues = {
  serviceTitle: string;
  projectDescription: string;
  timelineStart?: string;
  timelineEnd?: string;
  budgetRange?: string;
  email: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  service?: ServiceItem | null;
  onSubmit: (values: QuoteFormValues) => Promise<void> | void;
};

const budgetOptions = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
];

export default function QuoteRequestModal({ open, onClose, service, onSubmit }: Props) {
  const [values, setValues] = useState<QuoteFormValues>({
    serviceTitle: service?.title ?? '',
    projectDescription: '',
    timelineStart: '',
    timelineEnd: '',
    budgetRange: budgetOptions[0],
    email: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    if (service) {
      setValues((prev) => ({ ...prev, serviceTitle: service.title }));
    }
  }, [service]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await onSubmit(values);
      setConfirmed(true);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  const content = confirmed ? (
    <div className="text-center py-10">
      <h3 className="text-xl font-semibold text-white">Request received</h3>
      <p className="mt-2 text-white/80">Well review your project and the provider will respond shortly.</p>
      <button onClick={onClose} className="mt-6 rounded-full px-5 py-2 bg-white/10 text-white border border-white/20 hover:bg-white/15">Close</button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-white/80 mb-1">Service</label>
        <input
          value={values.serviceTitle}
          onChange={(e) => setValues({ ...values, serviceTitle: e.target.value })}
          className="w-full rounded-lg bg-white/10 text-white border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          placeholder="Select a service"
          required
        />
      </div>
      <div>
        <label className="block text-sm text-white/80 mb-1">Project description</label>
        <textarea
          value={values.projectDescription}
          onChange={(e) => setValues({ ...values, projectDescription: e.target.value })}
          className="w-full min-h-[120px] rounded-lg bg-white/10 text-white border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          placeholder="Tell us about your goals, scope, and constraints"
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/80 mb-1">Timeline start</label>
          <input
            type="date"
            value={values.timelineStart}
            onChange={(e) => setValues({ ...values, timelineStart: e.target.value })}
            className="w-full rounded-lg bg-white/10 text-white border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          />
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1">Timeline end</label>
          <input
            type="date"
            value={values.timelineEnd}
            onChange={(e) => setValues({ ...values, timelineEnd: e.target.value })}
            className="w-full rounded-lg bg-white/10 text-white border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/80 mb-1">Budget</label>
          <select
            value={values.budgetRange}
            onChange={(e) => setValues({ ...values, budgetRange: e.target.value })}
            className="w-full rounded-lg bg-white/10 text-white border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-white/80 mb-1">Contact email</label>
          <input
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className="w-full rounded-lg bg-white/10 text-white border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            placeholder="you@company.com"
            required
          />
        </div>
      </div>

      {error && <div className="text-sm text-red-300">{error}</div>}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-medium shadow hover:shadow-lg disabled:opacity-60"
        >
          {submitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>
    </form>
  );

const QuoteRequestModal: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">QuoteRequestModal</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default QuoteRequestModal;
