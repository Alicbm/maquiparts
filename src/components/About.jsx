import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import aboutBg from '../images/about.jpg'

const STATS = [
  { value: '1998', label: 'Fundados en' },
  { value: '50+',  label: 'Marcas distribuidoras' },
  { value: '5.000+', label: 'Referencias en stock' },
  { value: '12',   label: 'Ciudades con cobertura' },
]

const MILESTONES = [
  { year: '1998', event: 'Apertura de nuestra primera bodega en Bogotá.' },
  { year: '2005', event: 'Primer acuerdo de distribución autorizada con Cummins y Bosch.' },
  { year: '2012', event: 'Expansión a Medellín, Cali y Barranquilla.' },
  { year: '2020', event: 'Catálogo digital e integración de pedidos por WhatsApp.' },
  { year: '2024', event: 'Más de 5.000 referencias y 50 marcas en portafolio.' },
]

export default function About() {
  const ref = useRef(null)
  const imgRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section id="nosotros" ref={ref} className="py-20 lg:py-32 relative overflow-hidden" style={{ background: '#141414' }}>
      <div className="divider-mq mb-0" />

      {/* Background texture number */}
      <div className="absolute right-0 top-0 pointer-events-none select-none overflow-hidden"
        style={{
          fontSize: 'clamp(12rem, 30vw, 28rem)',
          lineHeight: 0.85,
          color: 'rgba(255,195,0,0.025)',
          fontFamily: 'Barlow Condensed, Impact, sans-serif',
          fontWeight: 800,
          letterSpacing: '-0.05em',
        }}>
        MQ
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — images */}
          <motion.div ref={imgRef}
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1">

            {/* Yellow corner accent */}
            <div className="absolute -top-4 -left-4 w-20 h-20 pointer-events-none z-10"
              style={{ borderTop: '3px solid #FFC300', borderLeft: '3px solid #FFC300' }} />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 pointer-events-none z-10"
              style={{ borderBottom: '3px solid #FFC300', borderRight: '3px solid #FFC300' }} />

            {/* Main image */}
            <div style={{ overflow: 'hidden', borderRadius: '2px', aspectRatio: '4/3' }}>
              <motion.img
                src={aboutBg}
                alt="Taller de maquinaria pesada"
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ y: imgY, scale: 1.08 }}
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(13,13,13,0.2) 0%, transparent 60%)' }} />
            </div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }} animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -right-5 bottom-10 p-5 rounded"
              style={{ background: '#FFC300', minWidth: '130px', textAlign: 'center' }}>
              <p className="font-display font-bold leading-none" style={{ fontSize: '3rem', color: '#0D0D0D' }}>20+</p>
              <p className="font-body font-semibold text-xs uppercase tracking-wider mt-1" style={{ color: 'rgba(13,13,13,0.7)' }}>
                Años de experiencia
              </p>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-5">
              <span className="accent-line" />
              <span className="label-mq">Quiénes somos</span>
            </motion.div>

            <div style={{ overflow: 'hidden' }}>
              <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="section-heading leading-none"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)' }}>
                Más de dos décadas
              </motion.h2>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold uppercase leading-none"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', color: '#FFC300' }}>
                haciendo mover a Colombia
              </motion.h2>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.7 }}>
              <p className="font-body text-mq-gray-light text-base leading-loose mt-6 mb-4">
                Somos una empresa colombiana especializada en la distribución de repuestos originales y de línea para maquinaria pesada, camiones de carga y equipos de construcción.
              </p>
              <p className="font-body text-mq-gray text-sm leading-loose mb-8">
                Desde 1998 trabajamos con los mayores distribuidores y fabricantes del mundo. Nuestro compromiso es garantizar la continuidad operativa de nuestros clientes con repuestos de calidad certificada, despacho rápido y soporte técnico especializado.
              </p>

              {/* Timeline */}
              <div className="flex flex-col gap-0 mb-8"
                style={{ borderLeft: '2px solid rgba(255,195,0,0.3)', paddingLeft: '20px' }}>
                {MILESTONES.map((m, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.5 }}
                    className="relative py-3">
                    <div className="absolute -left-[25px] top-4 w-2 h-2 rounded-full" style={{ background: '#FFC300' }} />
                    <span className="font-display font-bold text-mq-yellow-DEFAULT text-sm mr-2">{m.year}</span>
                    <span className="font-body text-mq-gray text-sm">{m.event}</span>
                  </motion.div>
                ))}
              </div>

              <a href="#catalogo" className="btn-mq-yellow">
                Ver catálogo completo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats row — distinct background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="relative overflow-hidden mt-20 rounded-sm"
          style={{ background: '#0A0A0A', border: '1px solid rgba(255,195,0,0.12)' }}>

          {/* Diagonal stripe texture */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,195,0,0.02) 0px, rgba(255,195,0,0.02) 2px, transparent 2px, transparent 28px)',
            }} />
          {/* Top yellow line */}
          <div className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: 'linear-gradient(to right, transparent, #FFC300 20%, #FFC300 80%, transparent)' }} />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-x"
            style={{ borderColor: 'rgba(255,195,0,0.08)' }}>
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col items-center py-10 px-4 group relative"
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,195,0,0.04)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                style={{ borderRight: i < 3 ? '1px solid rgba(255,195,0,0.08)' : 'none', transition: 'background 0.2s' }}>
                {/* Yellow dot accent */}
                <div className="w-1.5 h-1.5 rounded-full mb-3 transition-transform duration-300 group-hover:scale-150"
                  style={{ background: '#FFC300' }} />
                <p className="font-display font-bold mb-1 leading-none"
                  style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.02em', color: '#F5F5F0' }}>
                  {s.value}
                </p>
                <p className="font-body text-xs uppercase tracking-wider text-center"
                  style={{ color: '#5A5A5A', marginTop: '6px' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
