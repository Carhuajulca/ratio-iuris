import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactBand from '../components/ContactBand'
import PageHero from '../components/PageHero'
import { services } from '../data'
import Seo from '../components/Seo'

export default function Services() {
  return (
    <>
      <Seo title="Servicios jurídicos en San Martín | RATIO IURIS" description="Asesoría legal en derecho penal, civil, familiar, laboral y conciliación. Conozca las áreas de práctica de RATIO IURIS." />
      <PageHero
        section="Servicios jurídicos"
        title="Una ruta clara para asuntos que no admiten improvisación."
        text="Atendemos conflictos personales, patrimoniales y empresariales con una estrategia ajustada al caso y una explicación honesta de las alternativas."
      />
      <section className="services-directory section-pad">
        {services.map((service) => (
          <article key={service.slug}>
            <div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link className="text-link" to={`/servicios/${service.slug}`}>Explorar esta área <ArrowUpRight size={18} /></Link>
            </div>
            <ul>
              {service.matters.map((matter) => <li key={matter}>{matter}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <ContactBand />
    </>
  )
}
