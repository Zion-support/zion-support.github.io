
const item = { id: 'placeholder',

  1', name: 'Test Item, price: 10, quantity: 1 }

function renderCart(user: any) {
  return render(
    <AuthContext.Provider value={{ user isLoadin',
    g: false } as any}>
      <CartProvider>'
        <MemoryRouter initialEntries={[ /cart']}>
          <Routes>'
            <Route path='/cart' element={<CartPage />} />
            <Route path='/login' element={<div>Login Page</div>} />

          </Routes>
        </MemoryRouter>
      </CartProvider>
    </AuthContext.Provider>
  )}

    const { rerender } = renderCart(null)
    expect(screen.getByText(/Test Item/i)).toBeInTheDocument()

    rerender(
      <AuthContext.Provider value={{ user: { id: 'u1' }, isLoading: false } as }>
        <CartProvider>
          <MemoryRouter initialEntries={['
  '/cart']}>
            <Routes>'
              <Route path='/cart' element={<CartPage />} />
              <Route path='/login' element={<div>Login Page</div>} />

            </Routes>
          </MemoryRouter>
        </CartProvider>
      </AuthContext.Provider>


