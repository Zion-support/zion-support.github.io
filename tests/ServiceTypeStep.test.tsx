<<<<<<< HEAD
import { render, screen, fireEvent, waitFor } from,
  @testing-library/react';
import { ServiceTypeStep } from '@/components/QuoteRequestForm/ServiceTypeStep';
import { QuoteFormData } from '@/types/quotes';
import { vi } from 'vitest';

const baseData: QuoteFormData = {'
  serviceTyp,
    e: ',
  serviceCategory: '',
  specificItem: null,
  projectName:',
  projectDescription: ',
  startDate: undefined,
  endDate: undefined,
  timeline:;
  'flexible',
  budget: { amoun,
    t: 0, type:,
  fixed' },
  contactInfo: { nam,
    e: ', email:', phone: ', company: '' }}
it('
=======
import { render, screen, fireEvent, waitFor } from
  @testing-library/react'
import { ServiceTypeStep } from '@/components/QuoteRequestForm/ServiceTypeStep'
import { QuoteFormData } from '@/types/quotes'
import { vi } from 'vitest'
const baseData: QuoteFormData = {
  serviceType: '
  serviceCategory: ''
  specificItem: null
  projectName:'
  projectDescription: '
  startDate: undefined
  endDate: undefined
  timeline:
  'flexible'
  budget: { amount: 0, type:
  fixed' }
  contactInfo: { name: ', email:', phone: ', company: '' }}
it(
>>>>>>> main
  'shows results when searching services', async () => {
  const data = { ...baseData }
  const updateFormData = (d: Partial<QuoteFormData>) => Object.assign(data, d)
  global.fetch = vi.fn().mockResolvedValue({
<<<<<<< HEAD
    ok: true,
    json: async () => [{ i,
    d:,
  service-3', title: 'IT Consulting, category:,
  service' }]}) as any
  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);
  fireEvent.click(screen.getByText('
  'Services'));
<<<<<<< HEAD
=======
  const input = screen.getByPlaceholderText(/search service/i);
  fireEvent.change(input, { target: { valu,
    e:'
  'IT } });
=======
    ok: true
    json: async () => [{ id:
  service-3', title: 'IT Consulting, category:
  service' }]}) as any
  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />)
  fireEvent.click(screen.getByText(
  'Services'))
>>>>>>> main
  const input = screen.getByPlaceholderText(/search service/i)
  fireEvent.change(input, { target: { value:
  'IT } })
>>>>>>> main
  await waitFor(() => {
    expect(screen.getAllByRole('
  'button', { name: /request quote/i }).length).toBeGreaterThan(0)})})
it('
  'renders services from api response', async () => {
  const data = { ...baseData }
  const updateFormData = (d: Partial<QuoteFormData>) => Object.assign(data, d)
  global.fetch = vi.fn().mockResolvedValue({
<<<<<<< HEAD
    ok: true,
    json: async () => [{ i,
    d:,
  1', title: 'First, category:,
  service' },
      { id: '2, title:,
  Second', category: 'service },
      { id:,
  3', title: 'Third, category:
  'service' }]}) as any
<<<<<<< HEAD
=======
  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);
  fireEvent.click(screen.getByText('
  'Services'))
  await waitFor(() => {
    expect(screen.getAllByRole('
  'button', { name: /request quote/i })).toHaveLength(3)})})
=======
    ok: true
    json: async () => [{ id:
  1', title: 'First, category:
  service' }
      { id: '2, title:
  Second', category: 'service }
      { id:
  3', title: 'Third, category:
  'service' }]}) as any
>>>>>>> main
  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />)
  fireEvent.click(screen.getByText(
  'Services'))
  await waitFor(() => {
    expect(screen.getAllByRole(
  'button', { name: /request quote/i })).toHaveLength(3)})})
>>>>>>> main
