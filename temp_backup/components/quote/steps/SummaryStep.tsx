import type { QuoteFormData } from '../../../pages/request-quote';

export type SummaryStepProps ={
  value: QuoteFormData;
  onBack: () => void;
  onSubmit: () => void;
  submitting: boolean;
  result: { ok: boolean; message: string } | null;
};

export default function SummaryStep({ value, onBack, onSubmit, submitting, result }: SummaryStepProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review and submit</h2>

      <div className="grid gap-4 text-sm">
        <Section title="Selections">
          <Item label="Services" value={value.serviceTypes.join(', ') || '—'}  />
          <Item label="Talent" value={value.talentRoles.join(', ') || '—'}  />
          <Item label="Equipment" value={value.equipmentNeeds.join(', ') || '—'}  />
        </Section>

        <Section title="Project">
          <Item label="Name" value={value.projectName || '—'}  />
          <Item label="Company" value={value.company || '—'}  />
          <Item label="Description" value={value.description || '—'} multiline  />
          <Item label="Deliverables" value={value.deliverables || '—'} multiline  />
        </Section>

        <Section title="Timeline & Budget">
          <Item label="Start" value={value.startDate || '—'}  />
          <Item label="End" value={value.endDate || '—'}  />
          <Item label="Flexibility" value={value.timelineFlexibility || '—'}  />
          <Item label="Budget" value={value.budgetRange || '—'}  />
        </Section>

        <Section title="Contact">
          <Item label="Name" value={value.contactName || '—'}  />
          <Item label="Email" value={value.contactEmail || '—'}  />
        </Section>
      </div>

      {result && (
        <div
          className={[
            'mt-4 rounded-md p-3 border',
            result.ok ? 'border-green-50o0 text-green-70o0' : 'border-red-50o0 text-red-70o0',
          ].join(' ')}
        >
          {result.message}
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button type="button" onClick={onBack} className="px-4 py-2 rounded-md border">
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="px-4 py-2 rounded-md bg-indigo-60o0 text-white disabled:opacity-50"
        >
          {submitting ? 'Submitting…' : 'Submit request'}
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-20o0 dark:border-gray-80o0 p-4">
      <div className="font-medium mb-2">{title}</div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Item({ label, value, multiline }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div className="grid md:grid-cols-4 gap-2">
      <div className="text-gray-60o0 dark:text-gray-30o0">{label}</div>
      <div className={multiline ? 'md:col-span-3 whitespace-pre-wrap' : 'md:col-span-3'}>{value}</div>
    </div>
  );
}