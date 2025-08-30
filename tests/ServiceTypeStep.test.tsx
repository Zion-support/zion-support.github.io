import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ServiceTypeStep } from '@/components/QuoteRequestForm/ServiceTypeStep';
import { QuoteFormData } from '@/types/quotes';
const baseData: QuoteFormData = {
  serviceType: '',
  serviceCategory: '',
  specificItem: null,
  projectName: '',
  projectDescription: '',
  startDate: null,
  endDate: null,
  timeline: 'flexible',
<<<<<<< HEAD
  budget: { amount: 0,
  type: 'fixed' 
},
  contactInfo: { name: '', email: '', phone: '', comp: '' },
=======
  budget: { amount: 0,;
  type: 'fixed' ;
;
;


},;
  contactInfo: { name: '', email: '', phone: '', company: '' },;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
};
it('shows results when searching services', async () => {
  const data = { ...baseData };
  const updateFormData = (d: Partial<QuoteFormData>) => Object.assign(data, d);
<<<<<<< HEAD
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: 'service-3', title: 'IT Consulting', category: 'service' },
    ],;
  }) as ;render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);
=======
  global.fetch = jest.fn().mockResolvedValue({;
    ok: true,;
    json: async () => [;
      { id: 'service-3', title: 'IT Consulting', category: 'service' },;
    ],;
  }) as any;
  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
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
<<<<<<< HEAD
    json: async () => [
      { id: 's1', title: 'A', category: 'service' },
      { id: 's2', title: 'B', category: 'service' },
      { id: 's3', title: 'C', category: 'service' },
    ],;
  }) as ;render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);
=======
    json: async () => [;
      { id: 's1', title: 'A', category: 'service' },;
      { id: 's2', title: 'B', category: 'service' },;
      { id: 's3', title: 'C', category: 'service' },;
    ],;
  }) as any;
  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  fireEvent.click(screen.getByText('Services'));
  await waitFor(() => {
    expect(screen.getAllByRole('button', { name: /request quote/i })).toHaveLength(3);
  });
});
