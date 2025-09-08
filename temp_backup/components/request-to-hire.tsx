
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }static getDerivedStateFromError(error) {return {hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
    }
    return this.props.children;
  }
}
import React from 'react';

import { useEffect, useMemo, useState } from 'react';

export default function RequestToHirePage() {
}
  const router = null;}
  });

const [submitting, setSubmitting] = useState(false);

const [result, setResult] = useState<null | {id: string; message: string}
} />(
    null;
  );

const [error, setError] = useState<string | null />(null);
      setError('Please fill in name, email, and description.');

return;

    }

const normalizedBudget = form.budget.replace(/[^0-9.\-]/g, '')setSubmitting(true)try ;
  const res = await fetch('/api/requests/create', {method: 'POST';}
        headers: { 'Content-Type': 'application/json',}
}
        body: JSON.stringify({...form,budget: normalizedBudget,talentSlug: selected?.slug || null,}),})const data = await res.json()if (!res.ok) throw new Error(data.error |'Failed to submit')setResult({ id: data.id, message: 'Request submitted successfully.' })} catch (err: any) {setError(err.message |'Something went wrong')} finally {setSubmitting(false)}
 ,
}
  if (result) ;
  return (<div className='max-w-xl mx-auto py-12' />;
        <h1 className='text-2xl font-semibold mb-2' />Thanks!</h1>;
        <p className='text-gray-600 mb-4' />;
          We received your request. We will notify the appropriate team.;
        </p>;
        <div className='text-sm text-gray-500' />;
          Confirmation ID: {result.i,}
}

        </div>
      </div>
    );
  }
  return (
    <div className='max-w-xl mx-auto' />;

      <h1 className='text-2xl font-semibold mb-4' />;
        Request to Hire{selected ? ` — ${selected && selected.name}` : ''}
      </h1>;
      <form className='space-y-4' onSubmit={onSubmit} />;
        <div />;
          <label className='block text-sm font-medium mb-1' />Your Name</label>;
          <input;
            className='w-full border rounded px-3 py-2';
            value={form && form.name}
            onChange={e = /> setForm({ ...form, name: e && e.target.value },
}
          />;
        </div>;
        <div />;
          <label className='block text-sm font-medium mb-1' />Email</label>;
          <input;
            type='email';
            className='w-full border rounded px-3 py-2';
            value={form && form.email}
            onChange={e = /> setForm({ ...form, email: e && e.target.value },
}
          />;
        </div>;
        <div />;
          <label className='block text-sm font-medium mb-1' />Budget (USD)</label>;
          <input;
            className='w-full border rounded px-3 py-2';
            placeholder='$5,000';
            value={form && form.budget}
            onChange={e = /> setForm({ ...form, budget: e && e.target.value },
}
          />;
        </div>;
        <div />;
          <label className='block text-sm font-medium mb-1' />Timeline</label>;
          <input;
            className='w-full border rounded px-3 py-2';
            placeholder='2-3 months';
            value={form && form.timeline}
            onChange={e = /> setForm({ ...form, timeline: e && e.target.value },
}
          />;
        </div>;
        <div />;
          <label className='block text-sm font-medium mb-1' />;
            Project Description;
          </label>;
          <textarea;
            className='w-full border rounded px-3 py-2';
            rows={5}
            value={form && form.description}
            onChange={e = /> setForm({ ...form, description: e && e.target.value },
}
          />;
        </div>;
        {error && <div className='text-sm text-red-600' />{error}</div>}

        <button;
disabled={submitting}

          className='px-4 py-2 rounded bg-black text-white'
         />
          {submitting ? 'Submitting…' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
}

