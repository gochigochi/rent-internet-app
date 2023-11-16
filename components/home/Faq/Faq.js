import { useState } from 'react'
import chevIco from '/public/icons/chevron.svg'
import {
    Container,
    Inner,
    Title,
    Accordion,
    Item,
    Qcontainer,
    Acontainer,
    Q,
    A,
    ChevContainer,
    Chevron,
} from './Elements'

const Faq = () => {

    const data = [
        {
            id: 1,
            q: '¿Cuántos dispositivos puedo conectar al rúter de bolsillo?',
            a: 'Puedes conectar hasta 5 dispositivos simultáneamente.',
        },
        {
            id: 2,
            q: '¿Qué cantidad de datos de alta velocidad están incluidos?',
            a: 'Usted obtiene datos de alta velocidad 4G/LTE o 5G* verdaderamente ilimitados! Tanto como quieras, tan rápido como sea posible, ¡siempre!<br> <span style="font-size: .8rem">*posible con Router 5G, dependiendo de su disponibilidad. Tiene un recargo adicional.</span>',
        },
        {
            id: 3,
            q: '¿Cuántas horas dura la batería?',
            a: 'Una batería completamente cargada durará unas 8 horas de uso continuo',
        },
        {
            id: 4,
            q: '¿Cómo puedo obtener el rúter wifi de bolsillo?',
            a: 'Podemos enviar el dispositivo a tu hotel, apartamento o a la dirección en la que te alojes.',
        },
        {
            id: 5,
            q: '¿Cómo puedo devolver el rúter wifi de bolsillo?',
            a: 'Puedes obtener un sobre con devolución de prepago que podrás dejar en cualquier buzón u oficina postal. PONGA TODO EN EL SOBRE PREFRANQUEADO QUE LE ENVIAMOS.<br>Por favor, compruebe que todos los artículos están en el sobre. DEPOSITE EN UN BUZÓN DE CORREOS. Por favor, haga clic aquí para encontrar su buzón postal más cercano. Si usted se hospeda en un hotel, puede pedir en la recepción que envíen el sobre al correo o filial DHL/Correo disponible cerca de Ud.<br>Ni bien recibamos el Router por correo, y éste esté completamente en funcionamiento. Le reembolsaremos el depósito correspondiente. En caso de que el Router este dañado o averiago, y éste no se pueda reparar, estaremos obligados a descontar el monto del depósito, parcial o enteramente. Para evitar esto, compruebe que esté todo dentro del sobre y que el router funcione como lo recibió.',
        },
        {
            id: 6,
            q: '¿Cuál es el costo del alquiler por día del dispositivo Rent Internet?',
            a: 'El costo del alquiler depende de la duración de la reserva, de las opciones de envío y devolución que hayas escogido y de los accesorios que desees añadir a la reserva.<br>Puedes calcular el precio del alquiler de tu wifi de bolsillo en Suiza directamente desde nuestra página de reservas.',
        },
        {
            id: 7,
            q: '¿Cuál es el alcance de la red wifi?',
            a: 'El alcance de la red wifi, si no hay obstáculos que se interpongan con el dispositivo (como una pared) es de unos 30m. Puedes colocar el wifi de bolsillo en tu bolso o mochila y tanto tú como todo tu grupo familiar permanecerán conectados dentro de un radio de 30m.',
        },
        {
            id: 8,
            q: '¿Cuáles son los métodos de pago aceptados?',
            a: 'Los pagos se pueden realizar a través de PayPal y de las siguientes tarjetas de crédito, dependiendo de la moneda: MasterCard, Visa, American Express, Discovery, etc.',
        },
        {
            id: 9,
            q: '¿Qué tipo de dispositivos puedo contectar al rúter Rent Internet?',
            a: 'Travelers Wifi funciona con cualquier dispositivo que se pueda conectar a través de wifi, como computadoras portátiles (Windows o Apple), Smartphones (iPhone, Android, Blackberry,Windows Phone, etc.), tablets (iPad, Samsung Galaxy, Kindle) y con cualquier otro dispositivo que tenga un adaptador wifi (como las consolas de juego PS3, PS4, XBOX, Apple TV, etc).',
        },
        {
            id: 10,
            q: '¿Puedo canelar mi reserva? ¿Puedo obtener un reembolso?',
            a: 'Por favor, háganos saber de inmediato si usted tiene que cancelar su pedido. Daremos un reembolso completo si la cancelación es hecha 7 días o más antes de la fecha de inicio del período de llegada. No daremos un reembolso por cualquier cancelación realizada más tarde que eso.',
        },
        {
            id: 11,
            q: '¿Con cuántos días de anticipación debo hace un pedido?',
            a: 'Nuestro sitio web requiere al menos 2 días hábiles de antelación para realizar un pedido. Pero cuanto antes mejor, ya que podremos quedarnos sin stock.”',
        },
        {
            id: 12,
            q: '¿Qué debo hacer si pierdo el sobre devolución?',
            a: 'Vaya a una oficina de correos y envíela a nuestra dirección:',
        },
        {
            id: 13,
            q: '¿Qué sucede si no devuelvo el dispositivo?',
            a: 'Los artículos deben ser devueltos en buen estado de funcionamiento y buena condición física al final del período de alquiler. Los artículos no devueltos incurrirá en los siguientes cargos:<br><ul><li>Wi-Fi portátil + SIM: 100 U$S</li><li>Adaptador de CA: 10U$S</li></ul><br>En caso de una devolución tardía después del final del período de alquiler, incurrirá en una multa diaria de 3 € / día. Consideramos la fecha de devolución, la fecha en que el sobre es sellado por correo postal y añadimos 2 días de tolerancia adicional.',
        },
    ]

    const [ isOpenId, setIsOpenId ] = useState(0)

    const handleToggle = (id) => {
        setIsOpenId( id !== isOpenId ? id : null)
    }

    console.log(isOpenId)

    return (
        <Container id="faq-section">
            <Inner>
                <Title>Preguntas frecuentes</Title>
                <Accordion>
                    {
                        data.map(item => {
                            return(
                                <Item key={item.id}>
                                    <Qcontainer onClick={() => handleToggle(item.id)}>
                                        <Q>{item.q}</Q>
                                        <ChevContainer open={isOpenId === item.id}>
                                            <Chevron src={chevIco} fill />
                                        </ChevContainer>
                                    </Qcontainer>
                                    <Acontainer open={isOpenId === item.id}>
                                        <A dangerouslySetInnerHTML={{ __html: item.a }} />
                                    </Acontainer>
                                </Item>
                            )
                        })
                    }
                </Accordion>
            </Inner>
        </Container>
    )
}

export default Faq