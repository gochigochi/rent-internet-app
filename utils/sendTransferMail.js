import nodemailer from 'nodemailer'

const prepareHtml = ( data ) => { // recibir products
    // const productsHtml = products.map(product => `<p>${product.description} - u$d${product.price.unit_amount * 100}</p>`).join('<br>')

    const htmlBody = `
        <h2 style="color:blue;font-size:46px;">TEST Hemos recibido tu pago!</h2><br>
        <p>Tu id de compra es: ${session.id}</p><br>
        <p>Total: u$d ${session.amount_total / 100}</p><br>
        <div>
            <ul>
                <li>${session.metadata.customerName}</li>
            </ul>
        </div>
    `

    // return `${htmlBody} ${productsHtml}`
    return `${htmlBody}`
}

export const sendMail = async ( session ) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const html = prepareHtml( session ) //pasarle products

    try {
        await transporter.sendMail({
            from: "rent@rent-internet.com",
            to: session.customer_details.email,
            subject: `Booking confirmation from Rent Internet v7`,
            html: html,
        })
    } catch (error) {
        return console.log('Error sendind e-mail: ', error)
    }
}