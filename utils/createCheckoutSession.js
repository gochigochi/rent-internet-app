import { loadStripe } from '@stripe/stripe-js'

export const createCheckOutSession = async ( cart, customer ) => {

    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

    const stripePromise = loadStripe(publishableKey)

    const redirect = async (id) => {
        const stripe = await stripePromise
        stripe.redirectToCheckout({sessionId: id})
    }

    fetch('/api/create-stripe-session', {
        method: "POST",
        body: JSON.stringify({cart: cart, customer: customer }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(res => res.json())
    .then(json => redirect(json.id))
    .catch(err => console.log('Error creating checkout: ' + err))
}