import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import repuestosBG from '../images/repuestos_bg.jpg'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-36" id="contacto">

      {/* Background photo + overlays */}
      <div className="absolute inset-0">
        <motion.div style={{ y: bgY, scale: 1.15 }} className="absolute inset-0">
          <img
            src={repuestosBG}
            alt="Maquinaria pesada en operación"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3) saturate(0.5)' }}
          />
        </motion.div>
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.6) 60%, rgba(13,13,13,0.85) 100%)' }} />
        {/* Yellow glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,195,0,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 lg:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px" style={{ background: 'rgba(255,195,0,0.5)' }} />
          <span className="label-mq">Cotización inmediata</span>
          <div className="w-8 h-px" style={{ background: 'rgba(255,195,0,0.5)' }} />
        </motion.div>

        <div style={{ overflow: 'hidden' }}>
          <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold uppercase text-mq-white leading-none"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 8rem)', letterSpacing: '-0.02em' }}>
            ¿Necesitas
          </motion.h2>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold uppercase leading-none"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 8rem)', letterSpacing: '-0.02em', color: '#FFC300' }}>
            un repuesto?
          </motion.h2>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.7 }}
          className="font-body text-mq-gray-light text-lg leading-relaxed mt-6 mb-10 max-w-xl mx-auto">
          Escríbenos por WhatsApp con el nombre o referencia del repuesto y te respondemos con precio, disponibilidad y tiempo de despacho en minutos.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }} className="flex flex-wrap gap-4 justify-center">
          <a href="https://wa.me/573172823206?text=Hola,%20necesito%20cotizar%20un%20repuesto%20para%20maquinaria%20pesada."
            target="_blank" rel="noopener noreferrer"
            className="btn-wapp text-base px-8 py-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.107 1.52 5.83L0 24l6.335-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 0 1-5.007-1.364l-.36-.213-3.726.977.997-3.645-.234-.375A9.81 9.81 0 0 1 2.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
            </svg>
            Cotizar por WhatsApp
          </a>
          <a href="#catalogo" className="btn-mq-outline text-base px-8 py-4">
            Ver catálogo completo
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { icon: '✓', text: 'Respuesta en menos de 15 min' },
            { icon: '✓', text: 'Repuestos originales con garantía' },
            { icon: '✓', text: 'Despacho a todo Colombia' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold"
                style={{ background: '#FFC300', color: '#0D0D0D' }}>✓</span>
              <span className="font-body text-mq-gray text-sm">{b.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
