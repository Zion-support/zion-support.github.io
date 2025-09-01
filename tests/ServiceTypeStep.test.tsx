import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ServiceTypeStep } from '@/components/QuoteRequestForm/ServiceTypeStep';
import { QuoteFormData } from '@/types/quotes';

const baseData: QuoteFormData = {
  serviceType: '',
  serviceCategory: '',
  specificItem: null,
  projectName: '',
  projectDescription: '',
  startDate: undefined,
  endDate: undefined,
  timeline: 'flexible',
<<<<<<< HEAD
  budget: { amount: 0, type: 'fixed' },
  contactInfo: { name: '', email: '', phone: '', company: '' },
=======
<<<<<<< HEAD
  budget: { amount: 0,
  type: 'fixed' 

},
  contactInfo: { name: '', email: '', phone: '', comp: '' },
=======;
  budget: { amount: 0,;
  type: 'fixed' ;
;
;


},;
  contactInfo: { name: '', email: '', phone: '', company: '' },;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> cursor/add-new-services-and-advertise-them-971c
};

it('shows results when searching services', async () => {
  const data = { ...baseData };
  const updateFormData = (d: Partial<QuoteFormData>) => Object.assign(data, d);
<<<<<<< HEAD

  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: 'service-3', title: 'IT Consulting', category: 'service' },
    ],
=======
<<<<<<< HEAD
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: 'service-3', title: 'IT Consulting', category: 'service' },;
    ],;
  }) as ;render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);
=======
  global.fetch = jest.fn().mockResolvedValue({;
    ok: true,;
    json: async () => [;
      { id: 'service-3', title: 'IT Consulting', category: 'service' },;
    ],;
>>>>>>> cursor/add-new-services-and-advertise-them-971c
  }) as any;

  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> cursor/add-new-services-and-advertise-them-971c
  fireEvent.click(screen.getByText('Services'));

  const input = screen.getByPlaceholderText(/search service/i);
  fireEvent.change(input, { target: { value: 'IT' } });

  await waitFor(() => {
    expect(screen.getAllByRole('button', { name: /request quote/i }).length).toBeGreaterThan(0);
  });
});

it('renders services from api response', async () => {
  const data = { ...baseData };
  const updateFormData = (d: Partial<QuoteFormData>) => Object.assign(data, d);

  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
<<<<<<< HEAD
    json: async () => [
      { id: '1', title: 'First', category: 'service' },
      { id: '2', title: 'Second', category: 'service' },
      { id: '3', title: 'Third', category: 'service' },
    ],
=======
<<<<<<< HEAD
    json: async () => [
      { id: 's1', title: 'A', category: 'service' },
      { id: 's2', title: 'B', category: 'service' },
      { id: 's3', title: 'C', category: 'service' },;
    ],;
  }) as ;render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);
=======
    json: async () => [;
      { id: 's1', title: 'A', category: 'service' },;
      { id: 's2', title: 'B', category: 'service' },;
      { id: 's3', title: 'C', category: 'service' },;
    ],;
>>>>>>> cursor/add-new-services-and-advertise-them-971c
  }) as any;

  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> cursor/add-new-services-and-advertise-them-971c
  fireEvent.click(screen.getByText('Services'));

  await waitFor(() => {
    expect(screen.getAllByRole('button', { name: /request quote/i })).toHaveLength(3);
  });
});

