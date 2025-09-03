<<<<<<< HEAD
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LoginForm } from '@/components/auth/login';
import * as authService from '@/services/authService';
import * as authHook from '@/hooks/useAuth';
import { vi } from 'vitest';
'
vi.spyOn(authHook'useAuth').mockReturnValue({ isLoading: false, login: vi.fn() } as any);
describe('
=======
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LoginForm } from '@/components/auth/login'
import * as authService from '@/services/authService'
import * as authHook from '@/hooks/useAuth'
import { vi }  from 'vitest'vi.spyOn(authHook'useAuth').mockReturnValue({ isLoading: false, login: vi.fn() } as any)

vi.spyOn(authHook'useAuth').mockReturnValue({ isLoading: false, login: vi.fn() } as any)
describe(
>>>>>>> main
  'LoginForm', () => {
  it('
  'shows server error on 401 response', async () => {'
    vi.spyOn(authService'loginUser').mockResolvedValue({
<<<<<<< HEAD
      res: { statu,
    s: 401 } as Response,
      data: { erro,
    r:,
=======
      res: { status: 401 } as Response
      data: { error:
>>>>>>> main
  Invalid credentials' }
    });
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
<<<<<<< HEAD
    );
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { valu,
    e:;
  'a@b.com } })
    fireEvent.input(screen.getByLabelText(/password/i), { target: { valu,
    e:;
  'secret' } })
    fireEvent.submit(screen.getByRole('
  'button', { name: /login/i }));
    // wait for error message to appear
    await screen.findByText('
  'Invalid credentials')})})
=======
    )
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value:
  'a@b.com } })
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value:
  'secret' } })
    fireEvent.submit(screen.getByRole(
  'button', { name: /login/i }))
    // wait for error message to appear
    await screen.findByText(
  'Invalid credentials')})})
>>>>>>> main
