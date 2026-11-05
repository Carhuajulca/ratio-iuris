import { Check, MessageCircle, Plus } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ContactBand from '../components/ContactBand'
import { services, whatsappNumber } from '../data'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service) return <Navigate to="/servicios" replace />

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, necesito orientación sobre ${service.title}.`)}`

  return (
    <>
      <section className="service-hero">
        <Link className="back-link" to="/servicios">Todos los servicios</Link>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
        <a className="button button-gold" href={whatsappHref} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> Consultar este asunto
        </a>
      </section>

      <section className="service-overview section-pad">
        <div className="service-intro">
          <p className="section-tag">Cuándo podemos ayudarle</p>
          <h2>Orientación concreta desde el primer análisis.</h2>
          <p>{service.intro}</p>
        </div>
        <div className="service-problems">
          {service.problems.map((problem) => (
            <article key={problem.title}>
              <Check size={20} aria-hidden="true" />
              <div><h3>{problem.title}</h3><p>{problem.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-approach section-pad">
        <div>
          <p className="section-tag">Cómo trabaja el estudio</p>
          <h2>{service.approach.title}</h2>
        </div>
        <div className="service-approach-copy">
          <p>{service.approach.text}</p>
          <ul>
            {service.approach.principles.map((principle) => <li key={principle}><Check size={18} aria-hidden="true" /> {principle}</li>)}
          </ul>
        </div>
      </section>

      <section className="service-process section-pad">
        <div className="service-section-heading">
          <div><p className="section-tag">Proceso de atención</p><h2>Una ruta comprensible, paso a paso.</h2></div>
          <p>La estrategia se adapta al caso, pero la atención siempre comienza por comprender los hechos y explicar las alternativas.</p>
        </div>
        <ol>
          {service.process.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="service-inline-cta">
          <div><strong>¿Necesita evaluar su situación?</strong><p>Cuéntenos brevemente qué ocurre para coordinar una primera orientación.</p></div>
          <a className="button button-gold" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar por WhatsApp</a>
        </div>
      </section>

      <section className="service-faq section-pad">
        <div className="service-faq-heading">
          <p className="section-tag">Preguntas frecuentes</p>
          <h2>Antes de dar el siguiente paso.</h2>
        </div>
        <div className="service-faq-list">
          {service.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<Plus size={20} aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  )
}
