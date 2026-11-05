import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './pages/Contact'
import Firm from './pages/Firm'
import Home from './pages/Home'
import Locations from './pages/Locations'
import ServiceDetail from './pages/ServiceDetail'
import Services from './pages/Services'
import Team from './pages/Team'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="estudio" element={<Firm />} />
        <Route path="equipo" element={<Team />} />
        <Route path="servicios" element={<Services />} />
        <Route path="servicios/:slug" element={<ServiceDetail />} />
        <Route path="sedes" element={<Locations />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
