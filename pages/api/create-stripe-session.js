import { api } from "../../utils/woocommerce";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

async function CreateStripeSession(req, res) {
    const { cart } = req.body;

    const response = await api.get("products")
    const modemName = response.data[4].name
    const modemPrice = parseInt(response.data[4].price)
    const subTotal = modemPrice * cart.qty

    const session = await stripe.checkout.sessions.create({
        success_url: 'https://rent-internet.com/succesful',
        cancel_url: 'https://rent-internet.com/cancel',
        mode: 'payment',
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: modemName,
                    },
                    unit_amount: subTotal * 100,
                },
                quantity: 1,
            }
        ]
    });

    res.json({ id: session.id })
}

export default CreateStripeSession