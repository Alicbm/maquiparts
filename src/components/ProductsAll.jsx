import { useState, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PRODUCTS, CATEGORIES, BRANDS_LIST, buildWaUrl } from '../data/products'
import { ProductCard } from './Products'

function CheckboxItem({ label, checked, count, onChange }) {
  return (
    <label className="flex items-center justify-between gap-2 py-1.5 cursor-pointer group">
      <div className="flex items-center gap-2.5">
        <div className="w-4 h-4 rounded-sm flex items-center justify-center shrink-0 transition-all duration-150"
          style={{
            background: checked ? '#FFC300' : 'transparent',
            border: checked ? '1px solid #FFC300' : '1px solid rgba(255,255,255,0.2)',
          }}>
          {checked && (
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="3.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          )}
        </div>
        <span className="font-body text-xs transition-colors duration-150"
          style={{ color: checked ? '#F5F5F0' : '#888' }}
          onClick={onChange}>
          {label}
        </span>
      </div>
      <span className="font-body text-[9px] px-1.5 py-0.5 rounded-sm"
        style={{ background: 'rgba(255,255,255,0.06)', color: '#5A5A5A' }}>
        {count}
      </span>
    </label>
  )
}

export default function ProductsAll() {
  const [search, setSearch] = useState('')
  const [selCats, setSelCats] = useState([])
  const [selBrands, setSelBrands] = useState([])
  const [onlyStock, setOnlyStock] = useState(false)
  const [sortBy, setSortBy] = useState('default')
  const [showFilters, setShowFilters] = useState(false)
  const topRef = useRef(null)

  const toggleCat = (cat) =>
    setSelCats(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])
  const toggleBrand = (b) =>
    setSelBrands(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b])

  const clearAll = () => { setSelCats([]); setSelBrands([]); setOnlyStock(false); setSearch('') }

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter(p => {
      if (onlyStock && !p.stock) return false
      if (selCats.length && !selCats.includes(p.category)) return false
      if (selBrands.length && !selBrands.includes(p.brand)) return false
      if (search.trim()) {
        const q = search.toLowerCase()
        if (!p.name.toLowerCase().includes(q) && !p.ref.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q))
          return false
      }
      return true
    })
    if (sortBy === 'name-asc') list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    if (sortBy === 'name-desc') list = [...list].sort((a, b) => b.name.localeCompare(a.name))
    if (sortBy === 'brand') list = [...list].sort((a, b) => a.brand.localeCompare(b.brand))
    if (sortBy === 'category') list = [...list].sort((a, b) => a.category.localeCompare(b.category))
    return list
  }, [search, selCats, selBrands, onlyStock, sortBy])

  const catCounts = useMemo(() =>
    Object.fromEntries(CATEGORIES.map(c => [c, PRODUCTS.filter(p => p.category === c && (selBrands.length ? selBrands.includes(p.brand) : true)).length])),
    [selBrands])
  const brandCounts = useMemo(() =>
    Object.fromEntries(BRANDS_LIST.map(b => [b, PRODUCTS.filter(p => p.brand === b && (selCats.length ? selCats.includes(p.category) : true)).length])),
    [selCats])

  const hasFilters = selCats.length || selBrands.length || onlyStock || search.trim()
  const brandsWithProducts = BRANDS_LIST.filter(b => PRODUCTS.some(p => p.brand === b))

  const FilterSidebar = () => (
    <div className="flex flex-col gap-0">

      {/* Search */}
      <div className="mb-5">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" width="13" height="13"
            viewBox="0 0 24 24" fill="none" stroke="#5A5A5A" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Buscar repuesto o ref…"
            className="w-full font-body text-xs py-2.5 pl-8 pr-3 rounded-sm outline-none transition-all duration-200"
            style={{
              background: '#1E1E1E', color: '#F5F5F0',
              border: '1px solid rgba(255,255,255,0.1)',
              caretColor: '#FFC300',
            }}
          />
          {search && (
            <button onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2"
              style={{ color: '#5A5A5A' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Stock toggle */}
      <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="font-body text-[10px] uppercase tracking-[0.2em] font-semibold"
            style={{ color: onlyStock ? '#FFC300' : '#5A5A5A' }}>
            Solo en stock
          </span>
          <button onClick={() => setOnlyStock(v => !v)}
            className="w-9 h-5 rounded-full relative transition-colors duration-200"
            style={{ background: onlyStock ? '#FFC300' : 'rgba(255,255,255,0.1)' }}>
            <div className="w-3.5 h-3.5 rounded-full absolute top-0.75 transition-all duration-200"
              style={{
                background: onlyStock ? '#0D0D0D' : '#444',
                left: onlyStock ? '18px' : '3px',
                top: '3px',
              }} />
          </button>
        </label>
      </div>

      {/* Categories */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-3">
          <p className="font-body text-[9px] uppercase tracking-[0.25em] font-semibold" style={{ color: '#5A5A5A' }}>
            Categorías
          </p>
          {selCats.length > 0 && (
            <button onClick={() => setSelCats([])} className="font-body text-[9px]" style={{ color: '#FFC300' }}>
              Limpiar
            </button>
          )}
        </div>
        <div className="flex flex-col">
          {CATEGORIES.map(cat => (
            <CheckboxItem key={cat} label={cat} checked={selCats.includes(cat)}
              count={catCounts[cat] || 0} onChange={() => toggleCat(cat)} />
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-3">
          <p className="font-body text-[9px] uppercase tracking-[0.25em] font-semibold" style={{ color: '#5A5A5A' }}>
            Marcas
          </p>
          {selBrands.length > 0 && (
            <button onClick={() => setSelBrands([])} className="font-body text-[9px]" style={{ color: '#FFC300' }}>
              Limpiar
            </button>
          )}
        </div>
        <div className="flex flex-col">
          {brandsWithProducts.map(b => (
            <CheckboxItem key={b} label={b} checked={selBrands.includes(b)}
              count={brandCounts[b] || 0} onChange={() => toggleBrand(b)} />
          ))}
        </div>
      </div>

      {/* Clear all */}
      {hasFilters && (
        <button onClick={clearAll}
          className="w-full py-2 rounded-sm font-body text-xs uppercase tracking-[0.18em] font-bold transition-all duration-200"
          style={{ background: 'rgba(255,195,0,0.08)', color: '#FFC300', border: '1px solid rgba(255,195,0,0.25)' }}>
          Limpiar filtros
        </button>
      )}
    </div>
  )

  return (
    <section id="todos" ref={topRef} className="py-16 lg:py-24" style={{ background: '#141414' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="accent-line" />
            <span className="label-mq">Todos los repuestos</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div style={{ overflow: 'hidden' }}>
              <h2 className="section-heading leading-none" style={{ fontSize: 'clamp(1.8rem, 4vw, 4rem)' }}>
                Catálogo <span style={{ color: '#FFC300' }}>Completo</span>
              </h2>
            </div>
            <p className="font-body text-mq-gray text-sm">
              Filtra por categoría, marca o disponibilidad
            </p>
          </div>
        </div>

        {/* Sort bar + mobile filter toggle */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button onClick={() => setShowFilters(v => !v)}
              className="flex lg:hidden items-center gap-2 px-3 py-2 rounded-sm font-body text-[10px] uppercase tracking-widest font-bold transition-all"
              style={{ background: showFilters ? '#FFC300' : '#1E1E1E', color: showFilters ? '#0D0D0D' : '#888',
                border: '1px solid rgba(255,255,255,0.1)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
              </svg>
              Filtros {hasFilters ? `(${(selCats.length + selBrands.length + (onlyStock ? 1 : 0))})` : ''}
            </button>

            {/* Results count */}
            <span className="font-body text-xs" style={{ color: '#5A5A5A' }}>
              <span style={{ color: '#FFC300', fontWeight: 700 }}>{filtered.length}</span> repuestos encontrados
            </span>

            {/* Active filter chips */}
            <div className="hidden sm:flex flex-wrap gap-1.5">
              {selCats.map(c => (
                <span key={c} onClick={() => toggleCat(c)}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full cursor-pointer font-body text-[9px] uppercase tracking-widest"
                  style={{ background: 'rgba(255,195,0,0.12)', color: '#FFC300', border: '1px solid rgba(255,195,0,0.3)' }}>
                  {c} ×
                </span>
              ))}
              {selBrands.map(b => (
                <span key={b} onClick={() => toggleBrand(b)}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full cursor-pointer font-body text-[9px] uppercase tracking-widest"
                  style={{ background: 'rgba(255,195,0,0.06)', color: '#888', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {b} ×
                </span>
              ))}
            </div>
          </div>

          {/* Sort dropdown */}
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}
            className="font-body text-xs py-2 px-3 rounded-sm outline-none cursor-pointer"
            style={{ background: '#1E1E1E', color: '#888', border: '1px solid rgba(255,255,255,0.08)' }}>
            <option value="default">Ordenar: Defecto</option>
            <option value="name-asc">Nombre A→Z</option>
            <option value="name-desc">Nombre Z→A</option>
            <option value="brand">Por marca</option>
            <option value="category">Por categoría</option>
          </select>
        </div>

        {/* Mobile filters drawer */}
        <AnimatePresence>
          {showFilters && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden mb-6 rounded-sm p-4"
              style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)' }}>
              <FilterSidebar />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main layout: sidebar + grid */}
        <div className="flex gap-8">

          {/* Desktop filter sidebar — sticky */}
          <aside className="hidden lg:flex flex-col shrink-0" style={{ width: '220px' }}>
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4" style={{ filter: 'grayscale(1)', opacity: 0.3 }}>🔩</div>
                <p className="font-display font-bold uppercase text-mq-gray" style={{ fontSize: '1.2rem' }}>
                  Sin resultados
                </p>
                <p className="font-body text-mq-gray-muted text-sm mt-2">
                  Prueba con otros filtros o{' '}
                  <button onClick={clearAll} style={{ color: '#FFC300' }}>limpia la búsqueda</button>
                </p>
              </div>
            ) : (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                <AnimatePresence mode="popLayout">
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} inView={true} />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>

        {/* WhatsApp CTA at bottom */}
        <div className="mt-12 text-center py-8 rounded-sm" style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="font-body text-mq-gray text-sm mb-3">
            ¿No encontraste lo que buscas? Tenemos más de 5.000 referencias disponibles.
          </p>
          <a href="https://wa.me/573172823206?text=Hola,%20busco%20un%20repuesto%20específico%20que%20no%20aparece%20en%20el%20catálogo:%20"
            target="_blank" rel="noopener noreferrer"
            className="btn-wapp inline-flex">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.107 1.52 5.83L0 24l6.335-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 0 1-5.007-1.364l-.36-.213-3.726.977.997-3.645-.234-.375A9.81 9.81 0 0 1 2.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
            </svg>
            Consultar referencia por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
