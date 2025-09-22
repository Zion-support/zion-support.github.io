<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LoginForm } from '@/components/auth/login';
import * as authService from '@/services/authService';
import * as authHook from '@/hooks/useAuth';
import { vi } from 'vitest';
<<<<<<< HEAD

vi.spyOn(authHook, 'useAuth').mockReturnValue({
  isLoading: false,
=======
vi.spyOn(authHook, 'useAuth').mockReturnValue({
  isLoading: false,)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  login: vi.fn()
} as any);

describe('LoginForm', () => {
  it('shows server error on 401 response', async () => {
    vi.spyOn(authService, 'loginUser').mockResolvedValue({
      res: { status: 401 } as Response,
<<<<<<< HEAD
      data: { error: 'Invalid credentials' }
=======
      data: { error: 'Invalid credentials' }')
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    });

    render(
      <MemoryRouter>
<<<<<<< HEAD
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email address/i), {
      target: { value: 'a@b.com' }
    });
    fireEvent.input(screen.getByLabelText(/password/i), {
      target: { value: 'secret' }
    });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    await screen.findByText('Invalid credentials');
  });
});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

        <LoginForm />

      )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
