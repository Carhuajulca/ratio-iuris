import { FormEvent, useState } from 'react'
import { Send } from 'lucide-react'
import { whatsappNumber } from '../data'

export default function ContactForm() {
  const [error, setError] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const matter = String(data.get('matter') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !matter || !message) {
      setError('Complete su nombre, el tipo de asunto y una breve descripción.')
      return
    }

    setError('')
    const text = `Hola, soy ${name}. Necesito orientación sobre ${matter}. ${message}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <label>
        Nombre y apellido
        <input name="name" autoComplete="name" placeholder="¿Cómo podemos llamarle?" />
      </label>
      <label>
        Tipo de asunto
        <select name="matter" defaultValue="">
          <option value="" disabled>Seleccione un área</option>
          <option>Derecho penal</option>
          <option>Derecho civil</option>
          <option>Derecho familiar</option>
          <option>Derecho laboral</option>
          <option>Conciliación</option>
          <option>Otro asunto</option>
        </select>
      </label>
      <label className="full-field">
        Cuéntenos brevemente qué sucede
        <textarea name="message" rows={5} placeholder="No incluya información confidencial en este primer mensaje." />
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-dark contact-submit" type="submit"><Send size={15} /> Enviar por WhatsApp</button>
    </form>
  )
}
