import { api } from "../../utils/woocommerce"

export async function CreateWooCommerceTransferOrder(data) {

    const formatProducts = () => {
        const products = []
        //Main product
        products.push({product_id: data.id , quantity: data.qty})
        //Adapter
        if(data.adapter.is) products.push({product_id: data.adapter.product.id , quantity: 1})
        //Power Bank
        if(data.powerBank.is) products.push({product_id: data.powerBank.product.id , quantity: 1})
        //Shipping fee
        products.push({product_id: 629 , quantity: 1})

        return products
    }

    const stringTotal = data.total.toString()
    const stringDates = `Desde ${data.from} hasta ${data.to}`
    const formatedProducts = formatProducts()

    const order = {
        payment_method: "Transferencia Bancaria",
        payment_method_title: "Transferencia bancaria",
        set_paid: false,
        billing: {
            first_name: data.customerDetails.name,
            last_name: data.customerDetails.surname,
            address_1: data.customerDetails.billingAddress,
            city: data.customerDetails.billingCity,
            postcode: data.customerDetails.billingCp,
            country: data.customerDetails.billingCountry,
            email: data.customerDetails.email,
            phone: data.customerDetails.phone
        },
        shipping: {
            address_1: data.customerDetails.deliveryAddress,
            city: data.customerDetails.deliveryCity,
            postcode: data.customerDetails.deliveryCp,
            country: data.customerDetails.deliveryCountry,
            //use this to send dates information in form of string
            address_2: stringDates
        },
        total: stringTotal,
        line_items: formatedProducts,
    }


    try {
        const response = await api.post("orders", order)
        return response
    } catch (error) {
        console.log('ERROR placing order in woocommerce', error)
        return error
    }

}