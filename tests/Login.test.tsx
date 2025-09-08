
  'LoginForm', () => {
  it('
  'shows server error on 401 response', async () => {'
    vi.spyOn(authService'loginUser').mockResolvedValue({

  Invalid credentials' }
    });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>

    // wait for error message to appear
    await screen.findByText('
  'Invalid credentials')})})


