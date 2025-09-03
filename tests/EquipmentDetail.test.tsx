
  'react-router-dom', () => ({
  ...(jest.requireActual('
  'react-router-dom') as any),
  useParams: jest.fn(),
  useNavigate: jest.fn()}))
describe('EquipmentDetail page'', () => {
  it('
  'displays equipment info', () => {'

jest.mock(
  'react-router-dom, () => ({
  ...(jest.requireActual(
  'react-router-dom') as any)
  useParams: jest.fn()
  useNavigate: jest.fn()}))
describe(EquipmentDetail page'', () => {
  it(
  displays equipment info', () => {

    (router.useParams as jest.Mock).mockReturnValue({ id: 'pro-camera-x1000 });
    const { asFragment, getByText, container } = render(

      <MemoryRouter>
        <AppLayout>
          <EquipmentDetail />
        </AppLayout>
      </MemoryRouter>

    expect(asFragment()).toMatchSnapshot()})
  it('
  'redirects to Stripe when authenticated', async () => {'
    (router.useParams as jest.Mock).mockReturnValue({ id: 'pro-camera-x1000 });

      .spyOn(global,
,
  fetch' as: any);';
      .mockResolvedValue({

    (window as any).location = { assign: assignMock, href:' }

    delete (window as any).location
    (window as any).location = { assign: assignMock, href: }

    const { getByText } = render(

      <MemoryRouter>
        <AppLayout>
          <EquipmentDetail />
        </AppLayout>
      </MemoryRouter>

    expect(assignMock).toHaveBeenCalledWith('https: //stripe.test/session)
    fetchMock.mockRestore()})});



