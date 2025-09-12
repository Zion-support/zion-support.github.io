import { render } from '@testing-library/react';
import EquipmentDetail from '@/pages/EquipmentDetail';
<<<<<<< HEAD:tests/EquipmentDetail.test.tsx
=======
=======
import EquipmentDetail from '@/pages/EquipmentDetail';
>>>>>>> origin/content/blog-sept12:tests.disabled/EquipmentDetail.test.tsx.backup.1755989866
import * as router from 'react-router-dom';
jest.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ isAuthenticated: true }) }));
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('EquipmentDetail page', () => {
  it('displays equipment info', () => {
    (router.useParams as jest.Mock).mockReturnValue({ equipmentId: 'pro-camera-x1000' });

    const { asFragment, getByText } = render(<EquipmentDetail />);
    expect(getByText(/Pro Camera X1000/i)).toBeInTheDocument();
    expect(getByText(/Full-frame CMOS/i)).toBeInTheDocument();
<<<<<<< HEAD:tests/EquipmentDetail.test.tsx
=======
    (router.useParams as jest.Mock).mockReturnValue({ equipmentId: 'pro-camera-x1000' });

    const { asFragment, getByText } = render(<EquipmentDetail />);
    expect(getByText(/Pro Camera X1000/i)).toBeInTheDocument();
    expect(getByText(/Full-frame CMOS/i)).toBeInTheDocument();
=======
>>>>>>> origin/content/blog-sept12:tests.disabled/EquipmentDetail.test.tsx.backup.1755989866
    expect(asFragment()).toMatchSnapshot();
  });
});


