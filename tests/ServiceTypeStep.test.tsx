import React from 'react';
interface ServiceTypeStep.testProps {
  // Add props here as needed
}
<<<<<<< HEAD
interface ServiceTypeStep.testProps {
  // Add props here as needed
<=}

=======

const baseData: QuoteFormData = {
  serviceType: '',
  serviceCategory: '',
  specificItem: null,
  projectName: '',
  projectDescription: '',
  startDate: undefined | null,
  endDate: undefined | null,
  timeline: 'flexible',
  budget: { amount: 0, type: 'fixed' },
  contactInfo: { name: '', email: '', phone: '', company: '' },
};

it('shows results when searching services', async () => {
  const data = { ...baseData };
  const updateFormData = (d: Partial<QuoteFormData>) => Object.assign(data, d);

  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: 'service-3', title: 'IT Consulting', category: 'service' },
    ],
  }) as any;

  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);

  fireEvent.click(screen.getByText('Services'));

  const input = screen.getByPlaceholderText(/search service/i);
  fireEvent.change(input, { target: { value: 'IT' } });

  await waitFor(() => {
    expect(screen.getAllByRole('button', { name: /request quote/i }).length).toBeGreaterThan(0);
  });
});

it('renders results from api', async () => {
  const data = { ...baseData };
  const updateFormData = (d: Partial<QuoteFormData>) => Object.assign(data, d);

  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: 's1', title: 'A', category: 'service' },
      { id: 's2', title: 'B', category: 'service' },
      { id: 's3', title: 'C', category: 'service' },
    ],
  }) as any;

  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);

  fireEvent.click(screen.getByText('Services'));

  await waitFor(() => {
    expect(screen.getAllByRole('button', { name: /request quote/i })).toHaveLength(3);
  });
});

>}
>>>>>>> origin/main
>