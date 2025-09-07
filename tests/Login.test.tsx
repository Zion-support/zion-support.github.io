import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LoginForm } from '@/components/auth/login';
import * as authService from '@/services/authService';
import * as authHook from '@/hooks/useAuth';
import { vi } from 'vitest';

  login: vi.fn()
} as any);

describe('LoginForm', () => {
  it('shows server error on 401 response', async () => {
    vi.spyOn(authService, 'loginUser').mockResolvedValue({
      res: { status: 401 } as Response,

    });

    render(
      <MemoryRouter>