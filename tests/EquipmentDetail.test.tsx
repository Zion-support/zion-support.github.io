import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import EquipmentDetail from '@/pages/EquipmentDetail';

test('renders equipment details', async () => {
  render(
    <MemoryRouter initialEntries={['/equipment/pro-camera-x1000']}>
      <Routes>
        <Route path='/equipment/:equipmentId' element={<EquipmentDetail />} />
      </Routes>
    </MemoryRouter>
  );

    const { asFragment, getByText, container } = render(
      <MemoryRouter>
        <AppLayout>
          <EquipmentDetail />
        </AppLayout>
      </MemoryRouter>
    );
    expect(getByText(/Pro Camera X1000/i)).toBeInTheDocument();
    expect(getByText(/Full-frame CMOS/i)).toBeInTheDocument();
    expect(container.querySelectorAll('.navbar')).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot();
  });

  it('redirects to Stripe when authenticated', async () => {
    (router.useParams as jest.Mock).mockReturnValue({ id: 'pro-camera-x1000' });

    const fetchMock = jest
      .spyOn(global, 'fetch' as any)
      .mockResolvedValue({
        json: () => Promise.resolve({ url: 'https://stripe.test/session' })
      } as any);

    const assignMock = jest.fn();
    delete (window as any).location;
    (window as any).location = { assign: assignMock, href: '' };

    const { getByText } = render(
      <MemoryRouter>
        <AppLayout>
          <EquipmentDetail />
        </AppLayout>
      </MemoryRouter>
    );

    getByText('Buy Now').click();

    await Promise.resolve();
    expect(fetchMock).toHaveBeenCalledWith('/checkout/create-session', expect.any(Object));
    expect(assignMock).toHaveBeenCalledWith('https://stripe.test/session');

    fetchMock.mockRestore();
  });
});
