import { motion } from 'framer-motion'
import imgBg from '../images/hero_bg.jpg'

export default function Hero() {
  return (
    <section className="h-dvh flex flex-col overflow-hidden" style={{ background: '#0D0D0D', position: 'relative' }}>

      {/* ── Photo + overlays ── */}
      <div className="absolute inset-0">
        <img
          src={imgBg}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.5) contrast(1.1) saturate(0.65)' }}
        />
        {/* Gradient: opaque left → transparent right */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(112deg, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.88) 38%, rgba(13,13,13,0.45) 65%, rgba(13,13,13,0.15) 100%)' }} />
        {/* Bottom vignette for stats strip */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.5) 16%, transparent 38%)' }} />
        {/* Blueprint grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,195,0,0.025) 1px, transparent 1px), linear-gradient(to right, rgba(255,195,0,0.025) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }} />
      </div>

      {/* ── Yellow left bar ── */}
      <div className="absolute left-0 top-0 bottom-0 z-20"
        style={{ width: '5px', background: 'linear-gradient(to bottom, #FFC300 0%, #E6A800 100%)' }} />

      {/* ── Watermark ── */}
      <div className="absolute right-0 bottom-16 pointer-events-none select-none overflow-hidden"
        style={{ fontSize: 'clamp(10rem, 28vw, 28rem)', lineHeight: 0.85,
          color: 'rgba(255,195,0,0.03)', fontFamily: 'Barlow Condensed, Impact, sans-serif',
          fontWeight: 800, letterSpacing: '-0.05em' }}>
        MQ
      </div>

      {/* ── Content — flex-1 min-h-0 prevents overflow ── */}
      <div className="relative flex-1 min-h-0 flex flex-col justify-center max-w-7xl mx-auto w-full px-8 lg:px-14 pt-20">

        {/* Label */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-mq-yellow-DEFAULT animate-pulse" />
          <span className="label-mq">Distribuidores autorizados · Colombia desde 1998</span>
        </motion.div>

        {/* 3-line headline — clamp conservatively so it fits h-dvh */}
        {['REPUESTOS', 'MAQUINARIA', 'PESADA'].map((word, i) => (
          <div key={word} style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '105%' }} animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'Barlow Condensed, Impact, sans-serif',
                fontWeight: 800, textTransform: 'uppercase',
                fontSize: 'clamp(3.2rem, 9vw, 9.5rem)',
                letterSpacing: '-0.02em', lineHeight: 0.9,
                display: 'block',
                color: i === 1 ? '#FFC300' : '#F5F5F0',
              }}>
              {word}
            </motion.h1>
          </div>
        ))}

        {/* Rule + subtext */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.52, duration: 0.7 }}
          className="flex items-start gap-4 mt-5 mb-5">
          <div className="h-0.5 w-8 shrink-0 mt-2.5" style={{ background: '#FFC300' }} />
          <p className="font-body text-mq-gray-light text-sm lg:text-base leading-relaxed max-w-lg">
            Motor · Transmisión · Frenos · Hidráulica · Rodamientos — stock permanente, despacho a todo Colombia.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }} className="flex flex-wrap gap-3">
          <a href="#catalogo" className="btn-mq-yellow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            Ver catálogo
          </a>
          <a href="https://wa.me/573172823206?text=Hola,%20necesito%20cotizar%20repuestos%20para%20maquinaria%20pesada."
            target="_blank" rel="noopener noreferrer"
            className="btn-wapp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.107 1.52 5.83L0 24l6.335-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 0 1-5.007-1.364l-.36-.213-3.726.977.997-3.645-.234-.375A9.81 9.81 0 0 1 2.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
            </svg>
            Cotizar ahora
          </a>
        </motion.div>
      </div>

    </section>
  )
}
