import Stripe from 'stripe',

const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY || process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-05-28.basil', // Updated to the expected version
  typescript: true
}),

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed'),
    return
  }

  try {
    const { productId, customerEmail } = req.body || {},
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: productId, quantity: 1 }],
      mode: 'payment',
      customer_email: customerEmail || undefined,
      success_url: `${req.headers.origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cart`
    }),

    res.status(200).json({ sessionId: session.id }),
  } catch (err: any) {
    console.error('Checkout error:', err),
    res.status(500).json({ error: err.message || 'Checkout failed' }),
  }
}
