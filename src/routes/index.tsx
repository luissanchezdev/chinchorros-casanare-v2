import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Sparkles, Hand, Shield, Truck, Clock } from 'lucide-react'
import { products, getFeaturedProducts, formatPrice } from '~/data/products'
import { BENEFITS, BUYING_STEPS, BUSINESS_WHATSAPP_LINK } from '~/data/constants'
import { ProductCard } from '~/components/features/ProductCard'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface-low to-surface">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23803d0a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center">
            {/* Overline */}
            <div className="animate-fade-in-up flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Artesanía Premium del Llano
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text mb-6" style={{ animationDelay: '100ms' }}>
              Chinchorros tejidos a mano con{' '}
              <span className="text-gradient">alma llanera</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up text-lg sm:text-xl text-text-muted mb-10 max-w-2xl mx-auto" style={{ animationDelay: '200ms' }}>
              Cada chinchorro es una obra de arte. 100% artesanal, tejido en Casanare con nylon de alta resistencia y más de 10 años de vida útil.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: '300ms' }}>
              <Link
                to="/tienda"
                className="btn-primary px-8 py-4 rounded-xl inline-flex items-center gap-2 text-base"
              >
                Explorar Colección
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={BUSINESS_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 rounded-xl inline-flex items-center gap-2 text-base"
              >
                Hablar por WhatsApp
              </a>
            </div>

            {/* Trust stats */}
            <div className="animate-fade-in-up mt-14 flex items-center justify-center gap-10 sm:gap-16" style={{ animationDelay: '400ms' }}>
              {[
                { value: '29+', label: 'Diseños únicos' },
                { value: '10+', label: 'Años de vida útil' },
                { value: '100%', label: 'Artesanal' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-text">{stat.value}</p>
                  <p className="text-xs text-text-light mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Colección Destacada
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-3">
            Nuestros Chinchorros
          </h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto">
            Piezas únicas tejidas a mano por artesanos del Casanare. Cada chinchorro cuenta una historia.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/tienda"
            className="btn-secondary px-8 py-3 rounded-xl inline-flex items-center gap-2"
          >
            Ver toda la colección
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface-low">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Calidad Garantizada
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-3">
              ¿Por qué elegirnos?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="card p-6 text-center bg-white"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon === 'Hand' && <Hand className="w-6 h-6 text-primary" />}
                  {benefit.icon === 'Shield' && <Shield className="w-6 h-6 text-primary" />}
                  {benefit.icon === 'Truck' && <Truck className="w-6 h-6 text-primary" />}
                  {benefit.icon === 'Clock' && <Clock className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="font-display text-lg font-semibold text-text mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="bg-text text-surface">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Proceso Simple
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
              ¿Cómo comprar?
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {BUYING_STEPS.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {i < BUYING_STEPS.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden sm:block w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                  <span className="font-display text-lg font-bold text-white">{step.number}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mt-5 mb-2">{step.title}</h3>
                <p className="text-sm text-surface/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary/5 via-surface to-primary/10">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Estamos para ayudarte
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mt-3 mb-4">
            ¿Tienes preguntas?
          </h2>
          <p className="text-text-muted mb-8">
            Escríbenos por WhatsApp y te asesoramos para elegir el chinchorro perfecto
            para tu hogar o negocio.
          </p>
          <a
            href={BUSINESS_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-xl inline-flex items-center gap-2 text-base"
          >
            Escríbenos por WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}