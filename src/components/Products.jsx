import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { PRODUCTS, CATEGORIES, buildWaUrl } from '../data/products'

const WA_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.107 1.52 5.83L0 24l6.335-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 0 1-5.007-1.364l-.36-.213-3.726.977.997-3.645-.234-.375A9.81 9.81 0 0 1 2.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
  </svg>
)

export function ProductCard({ product, index, inView }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="group flex flex-col overflow-hidden cursor-default"
      style={{
        background: '#1A1A1A',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '4px',
        transition: 'border-color 0.25s, box-shadow 0.25s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,195,0,0.35)'
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.5)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.boxShadow = 'none'
      }}>

      {/* Photo */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.4) 45%, transparent 75%)' }} />

        {/* Category top-left */}
        <div className="absolute top-3 left-3">
          <span className="font-body text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-sm"
            style={{ background: 'rgba(13,13,13,0.85)', color: '#FFC300', border: '1px solid rgba(255,195,0,0.3)' }}>
            {product.category}
          </span>
        </div>

        {/* Tag top-right */}
        {product.tag && (
          <div className="absolute top-3 right-3">
            <span className="font-body text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-sm"
              style={{ background: '#FFC300', color: '#0D0D0D' }}>
              {product.tag}
            </span>
          </div>
        )}

        {/* Brand floating at bottom of photo */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#FFC300' }} />
          <span className="font-body text-[10px] font-bold uppercase tracking-widest" style={{ color: '#FFC300' }}>
            {product.brand}
          </span>
        </div>

        {/* Stock indicator bottom-right */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full"
            style={{ background: product.stock ? '#25D366' : '#888', boxShadow: product.stock ? '0 0 6px #25D36688' : 'none' }} />
          <span className="font-body text-[9px] uppercase tracking-wider text-white/60">
            {product.stock ? 'En stock' : 'Consultar'}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4">
        {/* Yellow left border + name */}
        <div className="flex gap-2.5 mb-2.5">
          <div className="w-0.5 shrink-0 rounded-full" style={{ background: '#FFC300', minHeight: '1.8rem' }} />
          <h3 className="font-display font-bold uppercase leading-tight"
            style={{ fontSize: '0.95rem', letterSpacing: '0.01em', color: '#F5F5F0' }}>
            {product.name}
          </h3>
        </div>

        {/* Reference */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-body text-[9px] uppercase tracking-[0.2em]" style={{ color: '#5A5A5A' }}>REF</span>
          <span className="font-body text-[10px] uppercase tracking-widest font-semibold" style={{ color: '#6A6A6A' }}>
            {product.ref}
          </span>
        </div>

        <div className="mt-auto">
          <div className="h-px mb-3" style={{ background: 'rgba(255,195,0,0.1)' }} />
          <a
            href={buildWaUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm font-body text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200"
            style={{ background: 'rgba(37,211,102,0.08)', color: '#25D366', border: '1px solid rgba(37,211,102,0.25)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = '#0D0D0D' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.08)'; e.currentTarget.style.color = '#25D366' }}>
            {WA_ICON}
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const PREVIEW_IDS = [1, 2, 3, 4, 6, 8, 10, 13]
const PREVIEW = PRODUCTS.filter(p => PREVIEW_IDS.includes(p.id))

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? PREVIEW : PREVIEW.filter(p => p.category === active)

  return (
    <section id="catalogo" ref={ref} className="py-16 lg:py-24" style={{ background: '#0F0F0F' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-3">
              <span className="accent-line" />
              <span className="label-mq">Catálogo de repuestos</span>
            </motion.div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="section-heading leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
                Repuestos
              </motion.h2>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold uppercase leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: '#FFC300' }}>
                disponibles
              </motion.h2>
            </div>
          </div>

          {/* "Ver todo el catálogo" link */}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
            <a href="#todos"
              className="flex items-center gap-2.5 px-6 py-3 rounded-sm font-body text-xs font-bold uppercase tracking-[0.18em] transition-all duration-200 group"
              style={{ background: 'transparent', color: '#FFC300', border: '1px solid rgba(255,195,0,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,195,0,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,195,0,0.7)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,195,0,0.35)' }}>
              Ver catálogo completo ({PRODUCTS.length} refs.)
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className="transition-transform duration-200 group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Category filter tabs */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-8">
          {['Todos', ...CATEGORIES].map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className="font-body text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-sm transition-all duration-200"
              style={{
                background: active === cat ? '#FFC300' : 'rgba(255,255,255,0.05)',
                color: active === cat ? '#0D0D0D' : '#888',
                border: active === cat ? '1px solid #FFC300' : '1px solid rgba(255,255,255,0.08)',
              }}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Product grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} inView={inView} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA — industrial striped background */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative overflow-hidden text-center mt-12 rounded-sm py-10 px-6"
          style={{
            background: 'linear-gradient(135deg, #1A1200 0%, #1E1E1E 50%, #1A1200 100%)',
            border: '1px solid rgba(255,195,0,0.18)',
          }}>

          {/* Diagonal hazard stripes */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,195,0,0.025) 0px, rgba(255,195,0,0.025) 2px, transparent 2px, transparent 24px)',
            }} />
          {/* Yellow top accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: 'linear-gradient(to right, transparent, #FFC300 30%, #FFC300 70%, transparent)' }} />

          <div className="relative">
            <p className="font-body text-mq-gray text-xs uppercase tracking-[0.2em] mb-2">
              ¿No encuentras el repuesto que buscas?
            </p>
            <h3 className="font-display font-bold uppercase mb-6"
              style={{ fontSize: 'clamp(1.3rem, 3.5vw, 2.5rem)', letterSpacing: '-0.01em', color: '#F5F5F0' }}>
              Consúltanos — manejamos más de{' '}
              <span style={{ color: '#FFC300' }}>5.000 referencias</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://wa.me/573172823206?text=Hola,%20busco%20un%20repuesto%20específico:%20"
                target="_blank" rel="noopener noreferrer"
                className="btn-wapp">
                {WA_ICON}
                Consultar referencia
              </a>
              <a href="/catalogo-maquiparts.html" target="_blank"
                className="btn-mq-outline text-xs flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                Descargar catálogo PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
