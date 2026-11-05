import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
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
        <Link className="text-link light-link" to="/contacto">Otras formas de contacto</Link>
      </div>
    </section>
  )
}
