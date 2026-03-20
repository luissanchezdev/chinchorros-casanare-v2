import { createFileRoute, Link } from '@tanstack/react-router'
import { Filter, X } from 'lucide-react'
import { useState, useMemo } from 'react'
import { products, formatPrice } from '~/data/products'
import { CATEGORIES, WEAVE_TYPES } from '~/data/constants'
import { ProductCard } from '~/components/features/ProductCard'
import type { Product } from '~/types'

export const Route = createFileRoute('/tienda/')({
  component: ShopPage,
})

interface Filters {
  category: string | null
  weaveType: string | null
  priceRange: [number, number]
  sortBy: 'newest' | 'price_asc' | 'price_desc' | 'name'
}

function ShopPage() {
  const [filters, setFilters] = useState<Filters>({
    category: null,
    weaveType: null,
    priceRange: [0, 2000000],
    sortBy: 'newest',
  })
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category)
    }
    if (filters.weaveType) {
      result = result.filter((p) => p.weaveType === filters.weaveType)
    }
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 2000000) {
      result = result.filter(
        (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      )
    }

    switch (filters.sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price_desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'newest':
      default:
        result.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
    }

    return result
  }, [filters])

  const clearFilters = () => {
    setFilters({
      category: null,
      weaveType: null,
      priceRange: [0, 2000000],
      sortBy: 'newest',
    })
  }

  const hasActiveFilters = filters.category || filters.weaveType

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Nuestra Colección
        </span>
        <h1 className="font-display text-4xl font-bold text-text mt-2">
          Tienda
        </h1>
        <p className="text-text-muted mt-3 max-w-xl mx-auto">
          Explora nuestra colección de chinchorros artesanales tejidos a mano en Casanare.
          Cada pieza es única.
        </p>
      </div>

      {/* Filters bar */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-sm text-text-muted">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
        </p>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-light hover:border-primary hover:text-primary transition-colors text-sm font-medium lg:hidden"
        >
          {showFilters ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
          {showFilters ? 'Ocultar filtros' : 'Filtros'}
        </button>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside
          className={`w-full lg:w-64 shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}
        >
          <div className="sticky top-24 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-semibold text-text mb-3">Categoría</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setFilters({ ...filters, category: null })}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    !filters.category
                      ? 'bg-primary text-white'
                      : 'hover:bg-surface-high text-text-muted'
                  }`}
                >
                  Todas
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setFilters({ ...filters, category: cat.value })}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      filters.category === cat.value
                        ? 'bg-primary text-white'
                        : 'hover:bg-surface-high text-text-muted'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Weave Types */}
            <div>
              <h3 className="font-semibold text-text mb-3">Tipo de Tejido</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setFilters({ ...filters, weaveType: null })}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    !filters.weaveType
                      ? 'bg-primary text-white'
                      : 'hover:bg-surface-high text-text-muted'
                  }`}
                >
                  Todos
                </button>
                {WEAVE_TYPES.map((weave) => (
                  <button
                    key={weave.value}
                    onClick={() => setFilters({ ...filters, weaveType: weave.value })}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      filters.weaveType === weave.value
                        ? 'bg-primary text-white'
                        : 'hover:bg-surface-high text-text-muted'
                    }`}
                  >
                    {weave.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-semibold text-text mb-3">Ordenar por</h3>
              <select
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    sortBy: e.target.value as Filters['sortBy'],
                  })
                }
                className="w-full px-3 py-2 rounded-lg border border-border-light bg-white text-sm focus:border-primary focus:outline-none"
              >
                <option value="newest">Más recientes</option>
                <option value="price_asc">Precio: menor a mayor</option>
                <option value="price_desc">Precio: mayor a menor</option>
                <option value="name">Nombre A-Z</option>
              </select>
            </div>

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full px-4 py-2 text-sm text-primary hover:bg-surface-high rounded-lg transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 rounded-2xl bg-surface-high flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-text-light" />
              </div>
              <p className="text-lg font-medium text-text mb-1">
                No se encontraron productos
              </p>
              <p className="text-sm text-text-muted mb-5">
                Intenta ajustar los filtros de búsqueda.
              </p>
              <button
                onClick={clearFilters}
                className="btn-primary px-6 py-2 rounded-lg text-sm"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}