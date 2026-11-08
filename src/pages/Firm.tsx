import ContactBand from '../components/ContactBand'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function Firm() {
  return (
    <>
      <Seo title="Estudio jurídico en San Martín | RATIO IURIS" description="Conozca RATIO IURIS, estudio jurídico con presencia en San Martín. Asesoría legal directa, responsable y comprensible." />
      <PageHero
        section="El estudio"
        title="La preparación rigurosa también puede sentirse cercana."
        text="RATIO IURIS es un equipo legal con presencia en San Martín. Trabajamos de forma directa, responsable y comprensible para cada persona que confía un asunto en nosotros."
      />

      <section className="firm-manifesto section-pad">
        <div className="manifesto-mark"><img src="/images/logo.png" alt="Logotipo de RATIO IURIS" /></div>
        <div>
          <p className="section-tag">Nuestro compromiso</p>
          <h2>El derecho no debería añadir confusión a un momento difícil.</h2>
          <p>Por eso estudiamos los hechos con método, hablamos sin tecnicismos innecesarios y proponemos acciones concretas. Cada caso recibe seguimiento y una estrategia acorde con su realidad.</p>
        </div>
      </section>

      <section className="purpose-section section-pad" aria-label="Misión y visión">
        <article className="purpose-item mission-item">
          <p className="section-tag">Nuestra misión</p>
          <h2>Servicio legal con justicia y respeto.</h2>
          <p>Brindar servicios legales de alta calidad a nuestros clientes, resolviendo sus problemas jurídicos de manera eficiente y efectiva, siempre con un enfoque en la justicia, la ética y el respeto por los derechos de las personas.</p>
        </article>
        <article className="purpose-item vision-item">
          <p className="section-tag">Nuestra visión</p>
          <h2>Liderazgo respaldado por la excelencia.</h2>
          <p>Alcanzar el liderazgo en el ámbito legal y ser reconocidos por la excelencia de nuestro servicio, la satisfacción de nuestros clientes y la calidad profesional de nuestros integrantes.</p>
        </article>
      </section>

      <section className="values-section section-pad">
        <div className="value"><strong>Criterio</strong><p>No prometemos resultados. Evaluamos escenarios y tomamos decisiones con sustento.</p></div>
        <div className="value"><strong>Presencia</strong><p>Acompañamos el proceso, respondemos preguntas y mantenemos informado al cliente.</p></div>
        <div className="value"><strong>Reserva</strong><p>Tratamos cada consulta con discreción y respeto por la información recibida.</p></div>
      </section>

      <section className="firm-team-link section-pad">
        <p className="section-tag">Las personas detrás de cada caso</p>
        <h2>Un equipo preparado para mirar el problema desde más de un ángulo.</h2>
        <Link className="button button-dark" to="/equipo">Conocer a nuestro equipo</Link>
      </section>

      <ContactBand />
    </>
  )
}
