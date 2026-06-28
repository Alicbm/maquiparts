import { motion } from 'framer-motion'

const PRODUCT_CATS = ['Motor', 'Transmisión', 'Frenos', 'Suspensión', 'Rodamientos', 'Hidráulica', 'Eléctrico', 'Filtros']
const NAV_LINKS = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Marcas',   href: '#marcas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Por qué elegirnos', href: '#ventajas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="divider-mq" />

      {/* Watermark */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden"
        style={{
          fontSize: 'clamp(8rem, 22vw, 22rem)',
          lineHeight: 0.85,
          color: 'rgba(255,195,0,0.025)',
          fontFamily: 'Barlow Condensed, Impact, sans-serif',
          fontWeight: 800,
          letterSpacing: '-0.05em',
        }}>
        MQ
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        {/* Top section */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          style={{ borderBottom: '1px solid rgba(255,195,0,0.07)' }}>

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded flex items-center justify-center shrink-0"
                style={{ background: '#FFC300' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0D0D0D">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.34.07-.68.07-1.08s-.03-.73-.07-1.08l2.31-1.81c.21-.16.27-.45.14-.68l-2.2-3.81c-.12-.22-.39-.3-.61-.22l-2.74 1.1c-.57-.44-1.18-.81-1.86-1.08L14.06.38C14 .15 13.79 0 13.56 0h-3.12c-.23 0-.44.15-.5.38l-.41 2.92c-.68.27-1.29.64-1.86 1.08L4.93 3.28c-.22-.08-.49 0-.61.22L2.12 7.31c-.13.23-.07.52.14.68l2.31 1.81C4.53 10.27 4.5 10.62 4.5 11s.03.73.07 1.08L2.26 13.89c-.21.16-.27.45-.14.68l2.2 3.81c.12.22.39.3.61.22l2.74-1.1c.57.44 1.18.81 1.86 1.08l.41 2.92c.06.23.27.38.5.38h3.12c.23 0 .44-.15.5-.38l.41-2.92c.68-.27 1.29-.64 1.86-1.08l2.74 1.1c.22.08.49 0 .61-.22l2.2-3.81c.12-.23.07-.52-.14-.68l-2.31-1.81z"/>
                </svg>
              </div>
              <span className="font-display font-bold uppercase text-mq-white" style={{ fontSize: '1.15rem', letterSpacing: '0.04em' }}>
                MAQUI<span style={{ color: '#FFC300' }}>PARTS</span>
              </span>
            </div>
            <p className="font-body text-mq-gray text-sm leading-relaxed mb-5">
              Distribuidores autorizados de repuestos para maquinaria pesada y vehículos de carga desde 1998.
            </p>
            <a href="https://wa.me/573172823206" target="_blank" rel="noopener noreferrer"
              className="btn-wapp text-xs">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.107 1.52 5.83L0 24l6.335-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 0 1-5.007-1.364l-.36-.213-3.726.977.997-3.645-.234-.375A9.81 9.81 0 0 1 2.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
              </svg>
              +57 317 282 3206
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-mq-gray-muted mb-4">Navegación</p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}
                    className="font-body text-sm text-mq-gray hover:text-mq-yellow-DEFAULT transition-colors duration-200 flex items-center gap-2 group cursor-pointer">
                    <span className="w-2 h-0.5 transition-all duration-200 group-hover:w-4"
                      style={{ background: '#FFC300', opacity: 0.6 }} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-mq-gray-muted mb-4">Categorías</p>
            <ul className="flex flex-col gap-2">
              {PRODUCT_CATS.map((cat) => (
                <li key={cat}>
                  <a href="#catalogo"
                    className="font-body text-sm text-mq-gray hover:text-mq-yellow-DEFAULT transition-colors duration-200 flex items-center gap-2 group cursor-pointer">
                    <span className="w-2 h-0.5 transition-all duration-200 group-hover:w-4"
                      style={{ background: '#FFC300', opacity: 0.6 }} />
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-mq-gray-muted mb-4">Contacto</p>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  text: 'Bogotá, Colombia\nZona Industrial Puente Aranda',
                },
                {
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.21 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                  text: '+57 317 282 3206',
                  href: 'tel:+573172823206',
                },
                {
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  text: 'alicbarandicamejia@gmail.com',
                  href: 'mailto:alicbarandicamejia@gmail.com',
                },
                {
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                  text: 'Lun–Vie 7:00am–6:00pm\nSáb 8:00am–1:00pm',
                },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0" style={{ color: '#FFC300' }}>{c.icon}</div>
                  {c.href ? (
                    <a href={c.href} className="font-body text-mq-gray text-sm hover:text-mq-yellow-DEFAULT transition-colors duration-200 cursor-pointer">
                      {c.text}
                    </a>
                  ) : (
                    <p className="font-body text-mq-gray text-sm whitespace-pre-line">{c.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-mq-gray-muted text-xs">
            © {new Date().getFullYear()} MaquiParts Colombia S.A.S — Todos los derechos reservados.
          </p>
          <a
            href="https://alicbarandica.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[10px] flex items-center gap-1.5 transition-colors duration-200 group"
            style={{ color: '#3A3A3A' }}>
            Diseñado y desarrollado por{' '}
            <span className="font-semibold transition-colors duration-200 group-hover:text-mq-yellow-DEFAULT"
              style={{ color: '#5A5A5A' }}>
              Alic Barandica
            </span>
          </a>
          <p className="font-body text-mq-gray-muted text-xs">
            Distribuidores autorizados · Bogotá, Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
