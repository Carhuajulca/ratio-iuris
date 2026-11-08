import { MapPin, Phone } from 'lucide-react'
import ContactBand from '../components/ContactBand'
import PageHero from '../components/PageHero'
import { locationDetails } from '../data'
import Seo from '../components/Seo'

export default function Locations() {
  return (
    <>
      <Seo title="Sedes y atención legal | RATIO IURIS" description="Consulte las sedes de RATIO IURIS en Morales, Lamas, Lima, Jaén, Yurimaguas y San José de Sisa. Coordine su visita antes de acudir." />
      <PageHero
        section="Sedes"
        title="Asesoría legal más cerca de usted."
        text="Atendemos en Morales, Lamas, Lima, Jaén, Yurimaguas y San José de Sisa. Contáctenos antes de su visita para confirmar disponibilidad."
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
            <a href="tel:+51964259954"><Phone size={16} /> Coordinar una visita</a>
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
