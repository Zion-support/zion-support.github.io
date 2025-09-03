import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import CartPage from '@/pages/Cart'
import { CartProvider } from '@/context/CartContext'
import { AuthContext } from '@/context/auth/AuthContext'
import { safeStorage } from '@/utils/safeStorage'
import { getCartKey }  from '@/utils/cartUtils'vi.mock(
  'next/router', () => ({
<<<<<<< HEAD
  useRouter: () => ({ push: vi.fn() })}))
=======
  useRouter: () => ({ push: vi.fn() })
}))

vi.mock('
  'next/router', () => ({
<<<<<<< HEAD
  useRouter: () => ({ pus,
    h: vi.fn() })}));
>>>>>>> main
const item = { id:,
=======
  useRouter: () => ({ push: vi.fn() })}))
const item = { id:
>>>>>>> main
  1', name: 'Test Item, price: 10, quantity: 1 }

function renderCart(user: any) {
  return render(
    <AuthContext.Provider value={{ user isLoadin,
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
describe('
  'cart persistence', () => {
  it('
  'shows item added before login after logging in', () => {
<<<<<<< HEAD
    safeStorage.setItem('
  'guestCart', JSON.stringify([item]));
<<<<<<< HEAD
=======
    const { rerender } = renderCart(null);
    expect(screen.getByText(/Test Item/i)).toBeInTheDocument();
=======
    safeStorage.setItem(
  'guestCart', JSON.stringify([item]))
>>>>>>> main
    const { rerender } = renderCart(null)
    expect(screen.getByText(/Test Item/i)).toBeInTheDocument()
>>>>>>> main
    rerender(
      <AuthContext.Provider value={{ user: { i,
    d:'
  'u1 } isLoading: false } as any}>
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
<<<<<<< HEAD
    );
    expect(screen.getByText(/Test Item/i)).toBeInTheDocument()})})
=======
    )
    expect(screen.getByText(/Test Item/i)).toBeInTheDocument()})})
>>>>>>> main
