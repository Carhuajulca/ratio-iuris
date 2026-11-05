import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { whatsappNumber } from '../data'

const navigation = [
  ['/', 'Inicio'],
  ['/estudio', 'El estudio'],
  ['/equipo', 'Equipo'],
  ['/servicios', 'Servicios'],
  ['/sedes', 'Sedes'],
  ['/contacto', 'Contacto'],
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="RATIO IURIS, página de inicio">
          <img src="/images/logo-mark.png" alt="" />
          <span><strong>RATIO IURIS</strong><small>Abogados Asociados</small></span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
          {navigation.map(([path, label]) => (
            <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>
          ))}
          <a className="nav-consult" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            Consultar ahora
          </a>
        </nav>
      </header>

      <main><Outlet /></main>

      <footer className="site-footer">
        <div className="footer-lead">
          <img src="/images/logo.png" alt="Logotipo de RATIO IURIS" />
          <div>
            <p>Cuando el asunto importa,</p>
            <h2>la estrategia también.</h2>
          </div>
          <Link className="button button-light" to="/contacto">Cuéntenos su caso</Link>
        </div>
        <div className="footer-grid">
          <div>
            <strong>RATIO IURIS</strong>
            <p>Abogados Asociados<br />Morales, San Martín</p>
          </div>
          <div>
            <strong>Contacto</strong>
            <a href="tel:+51964259954"><Phone size={16} /> 964 259 954</a>
            <a href="mailto:asociadosabogados744@gmail.com"><Mail size={16} /> asociadosabogados744@gmail.com</a>
          </div>
          <div>
            <strong>En redes</strong>
            <div className="social-links">
              <a href="https://instagram.com/ratio_iurisabog" target="_blank" rel="noreferrer" aria-label="Instagram de RATIO IURIS" title="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook de RATIO IURIS" title="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-8h2.75l.41-3H13.5V8.08c0-.87.24-1.46 1.58-1.46h1.69V3.94a22.7 22.7 0 0 0-2.46-.13c-2.43 0-4.1 1.49-4.1 4.21V10H7.46v3h2.75v8h3.29Z" />
                </svg>
              </a>
            </div>
          </div>
          <p className="copyright">© {new Date().getFullYear()} RATIO IURIS</p>
        </div>
      </footer>

      <a className="whatsapp-float" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
        <Phone size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
