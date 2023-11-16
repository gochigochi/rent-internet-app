import { buffer } from 'micro'
import Stripe from 'stripe'
import { sendMail } from '../../utils/sendMail'
import { setWooOrder } from '../../utils/setWooOrder'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET

export const config = {
    api: {
        bodyParser: false,
    },
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const reqBuffer = await buffer(req)
        const payload = reqBuffer.toString()
        const sig = req.headers["stripe-signature"]

        let event

        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        } catch (err) {
            console.log('Error', err.message)
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object
            sendMail(session)
            setWooOrder(session)
        }
    }
}

