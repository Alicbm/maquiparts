import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PILLARS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Despacho a todo Colombia',
    desc: 'Enviamos a cualquier ciudad del país. Contratos con operadores logísticos especializados en carga industrial para tiempos de entrega óptimos.',
    highlight: 'Entrega en 24-72h',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'Repuestos originales certificados',
    desc: 'Distribuidores autorizados directos de fábrica. Cada pieza incluye documentación de origen y garantía del fabricante.',
    highlight: 'Garantía incluida',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Respuesta en minutos',
    desc: 'Cotización inmediata por WhatsApp. Nuestro equipo técnico confirma disponibilidad y precio en menos de 15 minutos hábiles.',
    highlight: 'Respuesta < 15 min',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Soporte técnico especializado',
    desc: 'Nuestro equipo de ingenieros con más de 15 años de experiencia asesora en la selección correcta del repuesto para cada aplicación.',
    highlight: 'Asesoría sin costo',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Financiación disponible',
    desc: 'Crédito directo para empresas del sector con cupos aprobados en 48 horas. Facilitamos la operación de flotas y contratistas.',
    highlight: 'Cupo hasta $50M',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Stock permanente en bodega',
    desc: 'Más de 5.000 referencias físicas disponibles. No trabajamos bajo pedido para los items de alta rotación del sector.',
    highlight: '5.000+ en stock',
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="ventajas" ref={ref} className="py-20 lg:py-28" style={{ background: '#0D0D0D' }}>
      <div className="divider-mq mb-0" />
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-3">
              <span className="accent-line" />
              <span className="label-mq">Por qué elegirnos</span>
            </motion.div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="section-heading leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
                La diferencia que
              </motion.h2>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold uppercase leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: '#FFC300' }}>
                mueve tu flota
              </motion.h2>
            </div>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-mq-gray text-sm leading-relaxed max-w-sm lg:text-right">
            Elegir al proveedor correcto reduce el tiempo de inactividad de tu maquinaria. Así es como garantizamos que tu operación no se detenga.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,195,0,0.06)' }}>
          {PILLARS.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 relative overflow-hidden transition-all duration-300 cursor-default"
              style={{ background: '#0D0D0D' }}
              onMouseEnter={e => e.currentTarget.style.background = '#141414'}
              onMouseLeave={e => e.currentTarget.style.background = '#0D0D0D'}>

              {/* Hover yellow line top */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: '#FFC300' }} />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: 'rgba(255,195,0,0.08)', border: '1px solid rgba(255,195,0,0.15)', color: '#FFC300' }}
                  ref={el => {
                    if (el) el.addEventListener('mouseenter', () => {
                      el.style.background = 'rgba(255,195,0,0.18)'
                    })
                    if (el) el.addEventListener('mouseleave', () => {
                      el.style.background = 'rgba(255,195,0,0.08)'
                    })
                  }}>
                  {p.icon}
                </div>

                {/* Highlight badge */}
                <div className="inline-block mb-3">
                  <span className="tag-mq">{p.highlight}</span>
                </div>

                <h3 className="font-display font-bold uppercase text-mq-white text-xl mb-3 leading-tight"
                  style={{ letterSpacing: '0.01em' }}>
                  {p.title}
                </h3>
                <p className="font-body text-mq-gray text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
