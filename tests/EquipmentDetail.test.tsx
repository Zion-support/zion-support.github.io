<<<<<<< HEAD
import { render } from '@testing-library/react;
import { MemoryRouter } from 'react-router-dom';
import EquipmentDetail from @/pages/EquipmentDetail';
import { AppLayout } from '@/layout/AppLayout;
import * as router from 'react-router-dom';
<<<<<<< HEAD
jest.mock('
  '@/hooks/useAuth', () => ({ useAuth: () => ({ isAuthenticate,
    d: true })}));
jest.mock('
  'react-router-dom', () => ({
  ...(jest.requireActual('
  'react-router-dom') as any),
  useParams: jest.fn(),
  useNavigate: jest.fn()}))
describe('EquipmentDetail page'', () => {
  it('
  'displays equipment info', () => {'
=======
jest.mock(
  @/hooks/useAuth', () => ({ useAuth: () => ({ isAuthenticated: true })}));
=======
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EquipmentDetail from '@/pages/EquipmentDetail'
import { AppLayout } from '@/layout/AppLayout'
import * as router from 'react-router-dom'
jest.mock(
  '@/hooks/useAuth', () => ({ useAuth: () => ({ isAuthenticated: true })}))
>>>>>>> main
jest.mock(
  'react-router-dom, () => ({
  ...(jest.requireActual(
  'react-router-dom') as any)
  useParams: jest.fn()
  useNavigate: jest.fn()}))
describe(EquipmentDetail page'', () => {
  it(
  displays equipment info', () => {
>>>>>>> main
    (router.useParams as jest.Mock).mockReturnValue({ id: 'pro-camera-x1000 });
    const { asFragment, getByText, container } = render(
      <MemoryRouter>
        <AppLayout>
          <EquipmentDetail />
        </AppLayout>
      </MemoryRouter>
<<<<<<< HEAD
    );
    expect(getByText(/Pro Camera X1000/i)).toBeInTheDocument();
    expect(getByText(/Full-frame CMOS/i)).toBeInTheDocument();
    expect(container.querySelectorAll(,
<<<<<<< HEAD
  .navbar')).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot()})
  it('
  'redirects to Stripe when authenticated', async () => {'
    (router.useParams as jest.Mock).mockReturnValue({ id: 'pro-camera-x1000 });
=======
  .navbar)).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot()});
  it(
  'redirects to Stripe when authenticated', async () => {
    (router.useParams as jest.Mock).mockReturnValue({ id: pro-camera-x1000 });
>>>>>>> main
    const fetchMock = jest;
      .spyOn(global,
,
  fetch' as any);
      .mockResolvedValue({
<<<<<<< HEAD
        json: () => Promise.resolve({ ur,
    l:;
  'http,
    s://stripe.test/session })} as any);
    const assignMock = jest.fn();
    delete (window as any).location'
    (window as any).location = { assign: assignMock, href:' }
=======
        json: () => Promise.resolve({ url: ;
  'https: //stripe.test/session })} as any);
    const assignMock = jest.fn();
=======
    )
    expect(getByText(/Pro Camera X1000/i)).toBeInTheDocument()
    expect(getByText(/Full-frame CMOS/i)).toBeInTheDocument()
    expect(container.querySelectorAll(
  .navbar')).toHaveLength(1)
    expect(asFragment()).toMatchSnapshot()})
  it(
  'redirects to Stripe when authenticated', async () => {
    (router.useParams as jest.Mock).mockReturnValue({ id: 'pro-camera-x1000 })
    const fetchMock = jest
      .spyOn(global

  fetch' as any)
      .mockResolvedValue({
        json: () => Promise.resolve({ url:
  'https://stripe.test/session })} as any)
    const assignMock = jest.fn()
>>>>>>> main
    delete (window as any).location
    (window as any).location = { assign: assignMock, href: }
>>>>>>> main
    const { getByText } = render(
      <MemoryRouter>
        <AppLayout>
          <EquipmentDetail />
        </AppLayout>
      </MemoryRouter>
<<<<<<< HEAD
    );
    getByText('Buy Now;
  ').click();
    await Promise.resolve();
    expect(fetchMock).toHaveBeenCalledWith(/checkout/create-session;
  ', expect.any(Object));
<<<<<<< HEAD
    expect(assignMock).toHaveBeenCalledWith('https: //stripe.test/session);
    fetchMock.mockRestore()})})
=======
    expect(assignMock).toHaveBeenCalledWith('https: //stripe.test/session)
    fetchMock.mockRestore()})});
=======
    )
    getByText('Buy Now
  ').click()
    await Promise.resolve()
    expect(fetchMock).toHaveBeenCalledWith('/checkout/create-session
  ', expect.any(Object))
    expect(assignMock).toHaveBeenCalledWith('https: //stripe.test/session)
    fetchMock.mockRestore()})})
>>>>>>> main
>>>>>>> main
