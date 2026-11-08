import { AtSign, Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import Seo from '../components/Seo'

export default function Contact() {
  return (
    <>
      <Seo title="Contactar a RATIO IURIS | Abogados en San Martín" description="Coordine una consulta con RATIO IURIS Abogados Asociados por teléfono, WhatsApp o correo. Atención desde Morales, San Martín." />
      <PageHero
        section="Contacto"
        title="Cuéntenos qué necesita resolver."
        text="Comparta una primera descripción de su asunto. El mensaje se preparará para enviarse por WhatsApp y nuestro equipo podrá orientarle sobre el siguiente paso."
      />
      <section className="contact-page section-pad">
        <ContactForm />
        <aside className="contact-details">
          <h2>Contacto directo</h2>
          <a href="tel:+51964259954"><Phone /> <span><small>Teléfono y WhatsApp</small>964 259 954</span></a>
          <a href="mailto:asociadosabogados744@gmail.com"><Mail /> <span><small>Correo</small>asociadosabogados744@gmail.com</span></a>
          <div><MapPin /> <span><small>Sede principal</small>Morales, San Martín</span></div>
          <h3>También puede encontrarnos en</h3>
          <a href="https://instagram.com/ratio_iurisabog" target="_blank" rel="noreferrer"><AtSign /> <span><small>Instagram</small>@ratio_iurisabog</span></a>
        </aside>
      </section>
    </>
  )
}
