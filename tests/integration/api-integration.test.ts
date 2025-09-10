import React, { useEffect, useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

function TestComponent() {
  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/test');
      const json = await res.json();
      setData(json.data);
    })();
  }, []);
  return <div>{data ? <span>{data}</span> : null}</div>;
}

describe('API Integration', () => {
  it('should fetch and display data', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ data: 'test data' })
    } as unknown as Response);

    render(<TestComponent />);

    await waitFor(() => {
      expect(screen.getByText('test data')).toBeInTheDocument();
    });
  });
});
