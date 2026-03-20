import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { CATEGORIES, WEAVE_TYPES } from '~/data/constants'

export const Route = createFileRoute('/colecciones')({
  component: CollectionsPage,
})

function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Explora
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mt-3">
          Nuestras Colecciones
        </h1>
        <p className="text-text-muted mt-4 max-w-2xl mx-auto">
          Descubre la diversidad de nuestro arte textil. Cada colección representa una faceta única de la tradición llanera.
        </p>
      </div>

      {/* Categories */}
      <section className="mb-20">
        <h2 className="font-display text-2xl font-bold text-text mb-8 text-center">
          Por Tamaño
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.value}
              to="/tienda"
              search={{ category: category.value }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-surface-high"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-text/80 via-text/40 to-transparent z-10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  {category.label}
                </h3>
                <p className="text-white/80 text-sm mb-3">
                  {category.description}
                </p>
                <span className="text-white/90 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explorar colección
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Weave Types */}
      <section>
        <h2 className="font-display text-2xl font-bold text-text mb-8 text-center">
          Por Tipo de Tejido
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WEAVE_TYPES.map((weave) => (
            <Link
              key={weave.value}
              to="/tienda"
              search={{ weaveType: weave.value }}
              className="group p-6 rounded-2xl bg-surface-low hover:bg-surface-high transition-colors"
            >
              <h3 className="font-display text-lg font-semibold text-text group-hover:text-primary transition-colors">
                {weave.label}
              </h3>
              <p className="text-sm text-text-muted mt-2">
                {weave.description}
              </p>
              <span className="text-xs text-primary flex items-center gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver productos
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}