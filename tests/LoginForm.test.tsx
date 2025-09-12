import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
<<<<<<< HEAD:tests/LoginForm.test.tsx
=======
=======
>>>>>>> origin/content/blog-sept12:tests.disabled/LoginForm.test.tsx.backup.1755989866
import { LoginForm } from '@/components/auth/login';
import * as authService from '@/services/authService';
import * as toastMod from '@/hooks/use-toast';
import * as router from 'react-router-dom';

<<<<<<< HEAD:tests/LoginForm.test.tsx
=======
jest.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ isLoading: false }) }));
jest.mock('@/hooks/use-toast');
jest.mock('@/services/authService');
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: jest.fn(),
}));

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('valid credentials navigates to dashboard', async () => {
    (authService.loginUser as jest.Mock).mockResolvedValue({
      res: { status: 200 },
      data: { token: 'jwt' },
    });
>>>>>>> origin/content/blog-sept12:tests.disabled/LoginForm.test.tsx.backup.1755989866
jest.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ isLoading: false }) }));
jest.mock('@/hooks/use-toast');
jest.mock('@/services/authService');
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: jest.fn(),
}));

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('valid credentials navigates to dashboard', async () => {
    (authService.loginUser as jest.Mock).mockResolvedValue({
      res: { status: 200 },
      data: { token: 'jwt' },
    });
    (toastMod.toast.error as jest.Mock).mockImplementation(() => {});
    const navigateMock = jest.fn();
    (router.useNavigate as jest.Mock).mockReturnValue(navigateMock);
<<<<<<< HEAD:tests/LoginForm.test.tsx
=======
=======
    (toastMod.toast.error as jest.Mock).mockImplementation(() => {});
    const navigateMock = jest.fn();
    (router.useNavigate as jest.Mock).mockReturnValue(navigateMock);
>>>>>>> origin/content/blog-sept12:tests.disabled/LoginForm.test.tsx.backup.1755989866

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'user@test.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'secret' } });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    await screen.findByRole('button', { name: /login/i });
    expect(authService.loginUser).toHaveBeenCalledWith('user@test.com', 'secret');
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('invalid credentials show error', async () => {
<<<<<<< HEAD:tests/LoginForm.test.tsx
=======
    (authService.loginUser as jest.Mock).mockResolvedValue({
      res: { status: 401 },
      data: { error: 'Invalid credentials' },
    });
    (toastMod.toast.error as jest.Mock).mockImplementation(() => {});
=======
>>>>>>> origin/content/blog-sept12:tests.disabled/LoginForm.test.tsx.backup.1755989866
    (authService.loginUser as jest.Mock).mockResolvedValue({
      res: { status: 401 },
      data: { error: 'Invalid credentials' },
    });
    (toastMod.toast.error as jest.Mock).mockImplementation(() => {});

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'bad@test.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'wrong' } });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    await screen.findByRole('button', { name: /login/i });
<<<<<<< HEAD:tests/LoginForm.test.tsx
=======
    expect(toastMod.toast.error).toHaveBeenCalledWith('Invalid credentials');
=======
>>>>>>> origin/content/blog-sept12:tests.disabled/LoginForm.test.tsx.backup.1755989866
    expect(toastMod.toast.error).toHaveBeenCalledWith('Invalid credentials');
  });
});

