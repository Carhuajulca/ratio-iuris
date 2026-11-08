import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteName = 'RATIO IURIS Abogados Asociados'
const origin = 'https://ratioiurisabogados.com'

export default function Seo({ title, description }: { title: string; description: string }) {
  const location = useLocation()
  const canonical = `${origin}${location.pathname}`

  useEffect(() => {
    document.title = title
    const setMeta = (selector: string, attribute: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector)
      if (!element) {
        element = document.createElement('meta')
        document.head.appendChild(element)
      }
      element.setAttribute(attribute, value)
    }
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:type"]', 'content', 'website')
    setMeta('meta[property="og:site_name"]', 'content', siteName)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[name="twitter:card"]', 'content', 'summary')
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical
  }, [title, description, canonical])

  return null
}
