interface PageHeroProps {
  section: string
  title: string
  text: string
}

export default function PageHero({ section, title, text }: PageHeroProps) {
  return (
    <section className="page-hero">
      <p className="section-tag">{section}</p>
      <h1>{title}</h1>
      <p className="page-hero-text">{text}</p>
    </section>
  )
}
