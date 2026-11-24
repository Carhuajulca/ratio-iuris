import { MapPin, Phone } from 'lucide-react'
import ContactBand from '../components/ContactBand'
import PageHero from '../components/PageHero'
import { locationDetails, whatsappNumber } from '../data'
import Seo from '../components/Seo'

export default function Locations() {
  const whatsappFor = (phone?: string) => {
    const number = phone?.replace(/\D/g, '') || whatsappNumber
    return number.length === 9 ? `51${number}` : number
  }

  return (
    <>
      <Seo title="Sedes y atención legal | RATIO IURIS" description="Consulte las sedes de RATIO IURIS en Morales, Lamas, Lima, Jaén, Yurimaguas, San José de Sisa, Moyobamba y Cajamarca. Coordine su visita antes de acudir." />
      <PageHero
        section="Sedes"
        title="Asesoría legal más cerca de usted."
        text="Atendemos en Morales, Lamas, Lima, Jaén, Yurimaguas, San José de Sisa, Moyobamba y Cajamarca. Contáctenos antes de su visita para confirmar disponibilidad."
      />
      <section className="locations-grid section-pad">
        {locationDetails.map((location, index) => (
          <article key={location.city} className={index === 0 ? 'main-location' : ''}>
            <MapPin aria-hidden="true" />
            <div>
              <p>{location.kind}</p>
              <h2>{location.city}</h2>
              <span>{location.address}</span>
              <div className="location-hours">
                <strong>{location.hours}</strong>
                <span>{location.afternoonHours}</span>
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsappFor(location.phone)}?text=${encodeURIComponent(`Hola, quisiera coordinar una visita en la sede de ${location.city}.` )}`}
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={16} /> Coordinar una visita
            </a>
          </article>
        ))}
      </section>
      <section className="location-notice section-pad">
        <p>El horario de atención en todas nuestras sedes es de lunes a viernes, de 8:00 a. m. a 1:00 p. m. y de 2:00 p. m. a 5:00 p. m.</p>
      </section>
      <ContactBand />
    </>
  )
}
