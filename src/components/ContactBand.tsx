import { Link } from 'react-router-dom'
import { ExternalLink, MessageCircle, Star } from 'lucide-react'
import { whatsappNumber } from '../data'

export default function ContactBand() {
  return (
    <section className="contact-band">
      <div>
        <p>Una conversación a tiempo puede cambiar el rumbo de un caso.</p>
        <h2>Explíquenos qué está ocurriendo.</h2>
      </div>
      <div className="contact-band-actions">
        <a className="button button-gold" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> Hablar por WhatsApp
        </a>
        <a
          className="text-link light-link"
          href="https://www.google.com/maps/search/?api=1&query=RATIO%20IURIS%20Abogados%20Asociados%20Morales%20San%20Mart%C3%ADn%20Per%C3%BA"
          target="_blank"
          rel="noreferrer"
        >
          <Star size={17} aria-hidden="true" /> Ver reseñas en Google Maps <ExternalLink size={15} aria-hidden="true" />
        </a>
        <Link className="text-link light-link" to="/contacto">Otras formas de contacto</Link>
      </div>
    </section>
  )
}
