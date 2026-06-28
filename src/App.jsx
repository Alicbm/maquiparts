import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const STATS = [
  { value: '1998',     label: 'Fundados en' },
  { value: '50+',      label: 'Marcas autorizadas' },
  { value: '5.000+',   label: 'Referencias en stock' },
  { value: 'Nacional', label: 'Cobertura' },
]

function StatsStrip() {
  return (
    <div className="w-full" style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,195,0,0.18)', borderBottom: '1px solid rgba(255,195,0,0.08)' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
            className="py-7 px-4 flex flex-col items-center lg:items-start group relative cursor-default"
            style={{ borderRight: i < 3 ? '1px solid rgba(255,195,0,0.07)' : 'none' }}>
            <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: '#FFC300' }} />
            <span className="font-display font-bold leading-none" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', color: '#FFC300' }}>
              {s.value}
            </span>
            <span className="font-body text-[10px] mt-1.5 uppercase tracking-widest" style={{ color: '#5A5A5A' }}>
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const Brands       = lazy(() => import('./components/Brands'))
const Products     = lazy(() => import('./components/Products'))
const ProductsAll  = lazy(() => import('./components/ProductsAll'))
const About        = lazy(() => import('./components/About'))
const WhyUs        = lazy(() => import('./components/WhyUs'))
const CTA          = lazy(() => import('./components/CTA'))
const Footer       = lazy(() => import('./components/Footer'))

const Fallback = () => <div className="h-24 bg-mq-dark" />

/* Fixed WhatsApp floating button */
function WaFloat() {
  return (
    <a href="https://wa.me/573172823206?text=Hola,%20necesito%20cotizar%20repuestos%20para%20maquinaria%20pesada."
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[900] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-110 cursor-pointer"
      style={{ background: '#25D366', boxShadow: '0 4px 24px rgba(37,211,102,0.45)' }}
      aria-label="Contactar por WhatsApp">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.107 1.52 5.83L0 24l6.335-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 0 1-5.007-1.364l-.36-.213-3.726.977.997-3.645-.234-.375A9.81 9.81 0 0 1 2.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
      </svg>
    </a>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsStrip />
      <Suspense fallback={<Fallback />}><About /></Suspense>
      <Suspense fallback={<Fallback />}><Brands /></Suspense>
      <Suspense fallback={<Fallback />}><Products /></Suspense>
      <Suspense fallback={<Fallback />}><ProductsAll /></Suspense>
      <Suspense fallback={<Fallback />}><WhyUs /></Suspense>
      <Suspense fallback={<Fallback />}><CTA /></Suspense>
      <Suspense fallback={<Fallback />}><Footer /></Suspense>
      <WaFloat />
    </>
  )
}
