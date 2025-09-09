
jest.mock(
  'react-router-dom, () => ({
  ...(jest.requireActual(

  beforeEach(() => {
    (router.useParams as jest.Mock).mockReturnValue({ id: 2u-rack-mount-server });
    safeStorage.removeItem(

  'cart');
    jest.useFakeTimers()});

  'cart')

    jest.useFakeTimers()})

  afterEach(() => {


    render(
      <MemoryRouter>
        <EquipmentDetail: />
      </MemoryRouter>


    fireEvent.click(button);

    act(() => {

  'button' { name: /Added/i });
    fireEvent.click(addedButton);
    act(() => {
      jest.runAllTimers()});
    const cart = JSON.parse(safeStorage.getItem(,

    expect(cart).toHaveLength(1)
    expect(cart[0]).toEqual(
      expect.objectContaining({ id: '2u-rack-mount-server, quantity: 2 }))})});



