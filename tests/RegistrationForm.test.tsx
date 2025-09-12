<<<<<<< HEAD:tests/RegistrationForm.test.tsx
=======
import { render, screen, fireEvent } from '@testing-library/react';
=======
>>>>>>> origin/content/blog-sept12:tests.disabled/RegistrationForm.test.tsx.backup.1755989866
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from '@/pages/Signup';
import * as toastHook from '@/hooks/use-toast';
import * as router from 'react-router-dom';
import { mockFetch } from './__mocks__/server';
<<<<<<< HEAD:tests/RegistrationForm.test.tsx
=======

jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
>>>>>>> origin/content/blog-sept12:tests.disabled/RegistrationForm.test.tsx.backup.1755989866

jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    loginWithGoogle: jest.fn(),
    loginWithFacebook: jest.fn(),
    loginWithTwitter: jest.fn(),
<<<<<<< HEAD:tests/RegistrationForm.test.tsx
=======
=======
    loginWithGoogle: jest.fn(),
    loginWithFacebook: jest.fn(),
    loginWithTwitter: jest.fn(),
>>>>>>> origin/content/blog-sept12:tests.disabled/RegistrationForm.test.tsx.backup.1755989866
    isAuthenticated: false,
    user: null,
  }),
}));

<<<<<<< HEAD:tests/RegistrationForm.test.tsx
=======
jest.mock('@/hooks/use-toast');

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: jest.fn(),
}));

describe('RegistrationForm', () => {
  beforeEach(() => {
>>>>>>> origin/content/blog-sept12:tests.disabled/RegistrationForm.test.tsx.backup.1755989866
jest.mock('@/hooks/use-toast');

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: jest.fn(),
}));

describe('RegistrationForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
<<<<<<< HEAD:tests/RegistrationForm.test.tsx
=======
=======
    jest.clearAllMocks();
>>>>>>> origin/content/blog-sept12:tests.disabled/RegistrationForm.test.tsx.backup.1755989866
  });

  it('renders form fields', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
  });

  it('submits valid form', async () => {
<<<<<<< HEAD:tests/RegistrationForm.test.tsx
=======
    const navigateMock = jest.fn();
    (router.useNavigate as jest.Mock).mockReturnValue(navigateMock);
    (toastHook.toast.success as jest.Mock).mockImplementation(() => {});
=======
>>>>>>> origin/content/blog-sept12:tests.disabled/RegistrationForm.test.tsx.backup.1755989866
    const navigateMock = jest.fn();
    (router.useNavigate as jest.Mock).mockReturnValue(navigateMock);
    (toastHook.toast.success as jest.Mock).mockImplementation(() => {});
    mockFetch({ token: 'jwt' }, 201);

    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

<<<<<<< HEAD:tests/RegistrationForm.test.tsx
=======
    expect(global.fetch).toHaveBeenCalledWith('/api/auth/register', expect.objectContaining({ method: 'POST' }));
    expect(toastHook.toast.success).toHaveBeenCalledWith('Account created');
    expect(navigateMock).toHaveBeenCalledWith('/dashboard');
  });

  it('shows error toast on server 400', async () => {
    (toastHook.toast.error as jest.Mock).mockImplementation(() => {});
    mockFetch({ error: 'Bad' }, 400);
=======
>>>>>>> origin/content/blog-sept12:tests.disabled/RegistrationForm.test.tsx.backup.1755989866
    expect(global.fetch).toHaveBeenCalledWith('/api/auth/register', expect.objectContaining({ method: 'POST' }));
    expect(toastHook.toast.success).toHaveBeenCalledWith('Account created');
    expect(navigateMock).toHaveBeenCalledWith('/dashboard');
  });

  it('shows error toast on server 400', async () => {
    (toastHook.toast.error as jest.Mock).mockImplementation(() => {});
    mockFetch({ error: 'Bad' }, 400);

    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

<<<<<<< HEAD:tests/RegistrationForm.test.tsx
=======
    expect(toastHook.toast.error).toHaveBeenCalledWith('Bad');
  });
});

=======
>>>>>>> origin/content/blog-sept12:tests.disabled/RegistrationForm.test.tsx.backup.1755989866
    expect(toastHook.toast.error).toHaveBeenCalledWith('Bad');
  });
});

