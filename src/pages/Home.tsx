import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactBand from '../components/ContactBand'
import Seo from '../components/Seo'
import { locations, services, team, whatsappNumber } from '../data'

export default function Home() {
  return (
    <>
      <Seo title="Abogados en San Martín | RATIO IURIS" description="Estudio jurídico en San Martín. Asesoría en derecho penal, civil, familiar, laboral y conciliación. Coordine una consulta con RATIO IURIS." />
      <section className="home-hero">
        <div className="hero-copy">
          <p className="section-tag">Estudio jurídico en San Martín</p>
          <h1>Claridad legal para tomar decisiones firmes.</h1>
          <p className="hero-intro">Defendemos sus derechos con estrategia, atención directa y conocimiento del entorno local.</p>
          <div className="hero-actions">
            <a className="button button-gold" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Consultar por WhatsApp
            </a>
            <Link className="text-link" to="/servicios">Ver especialidades jurídicas</Link>
          </div>
          <div className="hero-locations">
            <MapPin size={17} />
            <p><strong>Atención en seis ciudades</strong>{locations.join(' · ')}</p>
          </div>
        </div>
        <div className="hero-portrait" aria-label="Equipo de RATIO IURIS">
          <img src="/images/director.webp" alt="Abogado de RATIO IURIS en la sede del estudio" />
          <p>Defensa, asesoría<br />y conciliación</p>
        </div>
      </section>

      <section className="practice-index section-pad">
        <div className="section-heading">
          <div>
            <p className="section-tag">Cómo podemos ayudarle</p>
            <h2>Especialidades jurídicas</h2>
          </div>
          <p>Un problema legal no llega ordenado. Nuestro primer trabajo es entenderlo, separar lo urgente y definir una ruta posible.</p>
        </div>
        <div className="practice-list">
          {services.map((service) => (
            <Link to={`/servicios/${service.slug}`} key={service.slug}>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="statement-section section-pad">
        <div className="statement-photo">
          <img src="/images/abogado-joven.webp" alt="Integrante del equipo legal de RATIO IURIS" loading="lazy" />
        </div>
        <div className="statement-copy">
          <p className="section-tag">Nuestra forma de trabajar</p>
          <h2>Primero entendemos los hechos. Después construimos la estrategia.</h2>
          <p>Explicamos cada alternativa con lenguaje claro, anticipamos riesgos y mantenemos una comunicación directa durante todo el proceso.</p>
          <Link className="text-link" to="/estudio">Conocer al estudio</Link>
        </div>
        <blockquote>“La confianza comienza cuando usted entiende qué sigue.”</blockquote>
      </section>

      <section className="home-team section-pad">
        <div className="section-heading">
          <div>
            <p className="section-tag">Personas que escuchan y actúan</p>
            <h2>El equipo detrás de la estrategia.</h2>
          </div>
          <div className="team-heading-copy">
            <p>Distintas especialidades, una misma forma de trabajar: preparación rigurosa, comunicación directa y responsabilidad en cada decisión.</p>
            <Link className="text-link" to="/equipo">Conocer a todo el equipo <ArrowUpRight size={18} /></Link>
          </div>
        </div>
        <div className="home-team-grid">
          {team.slice(0, 4).map((person, index) => (
            <Link to="/equipo" key={person.name} className={`home-person-card ${index === 0 ? 'lead-preview' : ''}`}>
              <span className="home-person-arch" aria-hidden="true" />
              <img className={person.portrait} src={person.image} alt={`${person.name}, ${person.role}`} loading="lazy" />
              <div>
                <strong>{person.name}</strong>
                <span>{person.specialty}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="regional-section section-pad">
        <div>
          <p className="section-tag">Presencia regional</p>
          <h2>Cerca de donde necesita resolver.</h2>
        </div>
        <div className="location-wordmark">
          {locations.map((location, index) => <span key={location} className={index === 0 ? 'active' : ''}>{location}</span>)}
        </div>
        <Link className="button button-outline" to="/sedes">Consultar nuestras sedes</Link>
      </section>

      <ContactBand />
    </>
  )
}
