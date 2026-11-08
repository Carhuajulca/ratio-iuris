import ContactBand from '../components/ContactBand'
import Seo from '../components/Seo'
import { team } from '../data'

export default function Team() {
  const [director, ...members] = team

  return (
    <>
      <Seo title="Nuestro equipo de abogados | RATIO IURIS" description="Conozca al equipo de RATIO IURIS Abogados Asociados, con atención en Morales y otras ciudades de San Martín." />
      <section className="team-compact-hero">
        <p className="section-tag">Nuestro equipo</p>
        <h1>Profesionales a su lado.</h1>
        <p>Un equipo coordinado para estudiar cada asunto con criterio, comunicar con claridad y actuar con responsabilidad.</p>
      </section>

      <section className="premium-team section-pad">
        <article className="team-lead-card">
          <div className="team-lead-photo portrait-stage">
            <span>Abogada</span>
            <img className={director.portrait} src={director.image} alt={`${director.name}, ${director.role}`} />
          </div>
          <div className="team-lead-copy">
            <p className="section-tag">Dirección y estrategia</p>
            <h2>{director.name}</h2>
            <p className="person-specialty">{director.specialty}</p>
            <p>Coordina la estrategia del estudio y la atención de asuntos que requieren análisis inmediato, preparación rigurosa y acompañamiento directo.</p>
            <blockquote>“Escuchar con atención es el primer paso para construir una defensa sólida.”</blockquote>
          </div>
        </article>

        <div className="premium-team-heading">
          <div>
            <p className="section-tag">Equipo profesional</p>
            <h2>Una práctica coordinada.</h2>
          </div>
          <p>Abogados y personal de soporte trabajando con una misma metodología en todas nuestras sedes.</p>
        </div>

        <div className="premium-team-grid">
          {members.map((person) => (
            <article key={person.name} className="person-card">
              <div className="person-photo portrait-stage">
                <span>{person.specialty}</span>
                <img
                  className={person.portrait}
                  src={person.image}
                  alt={`${person.name}, ${person.specialty}`}
                  loading="lazy"
                />
              </div>
              <div className="person-info">
                <h3>{person.name}</h3>
                <p>{person.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  )
}
