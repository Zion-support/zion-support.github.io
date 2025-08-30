import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
const supabase = createClient(;
  Deno.env.get("SUPABASE_URL") ?? "",;
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",;
  { auth: { persistSession: false } };
);
const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {;
  apiVersion: "2023-10-16",;
});
const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") || "";
serve(async (req) => {
  if (req.method = == "POST") {;
    const body = await req.text();
    const signature = req.headers.get("stripe-signature") || "";
    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      return new Response(`Webhook Error: ${err.message}`, { status: 400 });
<<<<<<< HEAD

    if (event.type === "checkout.session.completed") {
=======
    }
    if (event.type = == "checkout.session.completed") {;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session.metadata?.orderId;
      if (orderId) {
        await supabase.from("orders").update({ status: "paid" }).eq("id", orderId);


    return new Response(JSON.stringify({ received: true }), { status: 200 });

  return new Response("Not found", { status: 404 });
});
}}}}