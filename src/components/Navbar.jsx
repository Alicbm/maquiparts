import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Marcas',   href: '#marcas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-[800] transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(13,13,13,0.97)' : 'rgba(13,13,13,0.6)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(255,195,0,0.12)' : '1px solid transparent',
      }}>
      <nav className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 select-none cursor-pointer">
          {/* Gear icon */}
          <div className="w-8 h-8 rounded flex items-center justify-center shrink-0"
            style={{ background: '#FFC300' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#0D0D0D">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.34.07-.68.07-1.08s-.03-.73-.07-1.08l2.31-1.81c.21-.16.27-.45.14-.68l-2.2-3.81c-.12-.22-.39-.3-.61-.22l-2.74 1.1c-.57-.44-1.18-.81-1.86-1.08L14.06.38C14 .15 13.79 0 13.56 0h-3.12c-.23 0-.44.15-.5.38l-.41 2.92c-.68.27-1.29.64-1.86 1.08L4.93 3.28c-.22-.08-.49 0-.61.22L2.12 7.31c-.13.23-.07.52.14.68l2.31 1.81C4.53 10.27 4.5 10.62 4.5 11s.03.73.07 1.08L2.26 13.89c-.21.16-.27.45-.14.68l2.2 3.81c.12.22.39.3.61.22l2.74-1.1c.57.44 1.18.81 1.86 1.08l.41 2.92c.06.23.27.38.5.38h3.12c.23 0 .44-.15.5-.38l.41-2.92c.68-.27 1.29-.64 1.86-1.08l2.74 1.1c.22.08.49 0 .61-.22l2.2-3.81c.12-.23.07-.52-.14-.68l-2.31-1.81z"/>
            </svg>
          </div>
          <div>
            <span className="font-display font-bold uppercase text-mq-white leading-none"
              style={{ fontSize: '1.15rem', letterSpacing: '0.04em' }}>
              MAQUI<span style={{ color: '#FFC300' }}>PARTS</span>
            </span>
            <p className="font-body text-mq-gray text-[9px] uppercase tracking-[0.18em] leading-none mt-0.5 hidden sm:block">
              Repuestos & Maquinaria
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}
              className="font-body text-sm font-medium text-mq-gray-light hover:text-mq-yellow-DEFAULT transition-colors duration-200 cursor-pointer">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a href="https://wa.me/573172823206?text=Hola,%20necesito%20cotizar%20repuestos."
            target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex btn-wapp text-xs px-4 py-2.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.107 1.52 5.83L0 24l6.335-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 0 1-5.007-1.364l-.36-.213-3.726.977.997-3.645-.234-.375A9.81 9.81 0 0 1 2.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
            </svg>
            Cotiza ahora
          </a>

          {/* Hamburger */}
          <button className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(v => !v)} aria-label="Menú">
            <span className="block w-5 h-0.5 transition-all duration-300"
              style={{ background: menuOpen ? '#FFC300' : '#F5F5F0', transform: menuOpen ? 'rotate(45deg) translate(3px,3px)' : 'none' }} />
            <span className="block w-5 h-0.5 bg-mq-white/80 transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-0.5 transition-all duration-300"
              style={{ background: menuOpen ? '#FFC300' : '#F5F5F0', transform: menuOpen ? 'rotate(-45deg) translate(3px,-3px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }} className="lg:hidden overflow-hidden"
            style={{ background: 'rgba(13,13,13,0.98)', borderTop: '1px solid rgba(255,195,0,0.12)' }}>
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                  className="font-body text-sm font-medium text-mq-gray-light hover:text-mq-yellow-DEFAULT py-3 border-b cursor-pointer transition-colors duration-200"
                  style={{ borderColor: 'rgba(255,195,0,0.08)' }}>
                  {l.label}
                </a>
              ))}
              <a href="https://wa.me/573172823206" target="_blank" rel="noopener noreferrer"
                className="btn-wapp mt-3 justify-center">
                Cotiza por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
