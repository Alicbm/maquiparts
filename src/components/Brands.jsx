import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BRANDS = [
  { name: 'Caterpillar', short: 'CAT',       domain: 'cat.com',           color: '#FFC300' },
  { name: 'Cummins',     short: 'Cummins',    domain: 'cummins.com',       color: '#CC0000' },
  { name: 'Bosch',       short: 'Bosch',      domain: 'bosch.com',         color: '#E00420' },
  { name: 'ZF',          short: 'ZF',         domain: 'zf.com',            color: '#BE0A26' },
  { name: 'SKF',         short: 'SKF',        domain: 'skf.com',           color: '#003B8E' },
  { name: 'Timken',      short: 'Timken',     domain: 'timken.com',        color: '#C8102E' },
  { name: 'Gates',       short: 'Gates',      domain: 'gates.com',         color: '#FF6600' },
  { name: 'Volvo',       short: 'Volvo',      domain: 'volvotrucks.com',   color: '#3377AA' },
  { name: 'Mack',        short: 'Mack',       domain: 'macktrucks.com',    color: '#5588AA' },
  { name: 'Dana',        short: 'Dana',       domain: 'dana.com',          color: '#E31837' },
  { name: 'Parker',      short: 'Parker',     domain: 'parker.com',        color: '#FFCC00' },
  { name: 'Komatsu',     short: 'Komatsu',    domain: 'komatsu.com',       color: '#4466BB' },
  { name: 'Schaeffler',  short: 'FAG/INA',    domain: 'schaeffler.com',    color: '#08954C' },
  { name: 'Wabco',       short: 'Wabco',      domain: 'wabco-auto.com',    color: '#4488BB' },
  { name: 'Garrett',     short: 'Garrett',    domain: 'garrettmotion.com', color: '#FF6B35' },
  { name: 'Bendix',      short: 'Bendix',     domain: 'bendixcvs.com',     color: '#005BAA' },
]

function BrandCard({ brand, index, inView }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.06 + index * 0.035, duration: 0.45 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center justify-center p-5 cursor-default select-none"
      style={{
        background: hovered ? '#242424' : '#1A1A1A',
        border: `1px solid ${hovered ? brand.color + '55' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '4px',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? `0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px ${brand.color}22` : 'none',
        minHeight: '88px',
      }}>

      {/* Top color accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t transition-opacity duration-300"
        style={{ background: brand.color, opacity: hovered ? 1 : 0 }} />

      {/* Logo OR fallback text */}
      <div className="h-8 flex items-center justify-center mb-2">
        {!imgFailed ? (
          <img
            src={`https://logo.clearbit.com/${brand.domain}`}
            alt={brand.name}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgFailed(true)}
            className="max-h-8 max-w-[88px] w-auto object-contain transition-all duration-300"
            style={{
              filter: hovered ? 'none' : 'brightness(0) invert(1)',
              opacity: hovered ? 1 : (imgLoaded ? 0.75 : 0),
            }}
          />
        ) : null}

        {/* Text fallback (shows if Clearbit fails) */}
        {imgFailed && (
          <span className="font-display font-bold uppercase transition-colors duration-300"
            style={{
              fontSize: brand.short.length > 6 ? '0.9rem' : '1.2rem',
              letterSpacing: '0.06em',
              color: hovered ? brand.color : 'rgba(255,255,255,0.6)',
            }}>
            {brand.short}
          </span>
        )}

        {/* Show text while image loads too */}
        {!imgFailed && !imgLoaded && (
          <span className="font-display font-bold uppercase"
            style={{
              fontSize: brand.short.length > 6 ? '0.9rem' : '1.2rem',
              letterSpacing: '0.06em',
              color: hovered ? brand.color : 'rgba(255,255,255,0.4)',
              transition: 'color 0.25s',
            }}>
            {brand.short}
          </span>
        )}
      </div>

      {/* Brand name */}
      <p className="font-body text-[9px] font-semibold uppercase tracking-[0.16em] text-center transition-colors duration-250"
        style={{ color: hovered ? brand.color : 'rgba(255,255,255,0.3)' }}>
        {brand.name}
      </p>
    </motion.div>
  )
}

export default function Brands() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="marcas" ref={ref} className="py-16 lg:py-24" style={{ background: '#141414' }}>
      <div className="divider-mq mb-0" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-3">
              <span className="accent-line" />
              <span className="label-mq">Marcas que distribuimos</span>
            </motion.div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="section-heading leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
                Distribuidores
              </motion.h2>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2 initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold uppercase leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: '#FFC300' }}>
                autorizados
              </motion.h2>
            </div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-sm">
            <p className="font-body text-mq-gray text-sm leading-relaxed">
              Solo trabajamos con marcas líderes con certificación de origen. Cada repuesto viene con garantía de fábrica.
            </p>
            <div className="flex items-center gap-2 mt-4 px-4 py-2.5 rounded-sm" style={{ width: 'fit-content',
              background: 'rgba(255,195,0,0.08)', border: '1px solid rgba(255,195,0,0.2)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFC300" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
              </svg>
              <span className="font-body text-mq-yellow-DEFAULT text-[10px] font-semibold uppercase tracking-[0.2em]">
                {BRANDS.length} marcas en portafolio
              </span>
            </div>
          </motion.div>
        </div>

        {/* Grid — dark cards with inverted logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5">
          {BRANDS.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} index={i} inView={inView} />
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8, duration: 0.6 }}
          className="font-body text-mq-gray-muted text-xs text-center mt-6">
          Pasa el cursor sobre cada marca · Distribuidores directos con acceso a precios de fábrica
        </motion.p>
      </div>

      <div className="divider-mq mt-10" />
    </section>
  )
}
