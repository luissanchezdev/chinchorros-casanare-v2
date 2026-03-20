import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Heart, Share2, Clock, Ruler, Weight, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { products, formatPrice, getProductBySlug } from '~/data/products'
import { BUSINESS_WHATSAPP_LINK, CARE_INSTRUCTIONS } from '~/data/constants'
import { ProductCard } from '~/components/features/ProductCard'

export const Route = createFileRoute('/tienda/$slug')({
  component: ProductDetailPage,
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug)
    if (!product) {
      throw new Error('Producto no encontrado')
    }
    return { product }
  },
})

function ProductDetailPage() {
  const { product } = Route.useLoaderData()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.variants[0]?.color || '')

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleWhatsApp = () => {
    const message = `Hola, me interesa el ${product.name}. ¿Podrían darme más información?`
    const url = `https://wa.me/573209614542?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <Link to="/tienda" className="hover:text-primary transition-colors">
          Tienda
        </Link>
        <span>/</span>
        <span className="text-text">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Images */}
        <div>
          {/* Main image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-low mb-4">
            {product.images[selectedImage] ? (
              <img
                src={product.images[selectedImage].url}
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl opacity-30">🧶</span>
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm rounded-full text-text">
                {product.category}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-xl overflow-hidden shrink-0 transition-all ${
                    selectedImage === index
                      ? 'ring-2 ring-primary ring-offset-2'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-text">
            {product.name}
          </h1>

          <p className="text-text-muted mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* Price */}
          <div className="mt-6 p-4 rounded-xl bg-surface-low">
            <span className="text-sm text-text-muted">Precio</span>
            <p className="font-display text-3xl font-bold text-primary">
              {formatPrice(product.price)}
            </p>
            <p className="text-xs text-text-light mt-1">
              50% de anticipo requerido para iniciar fabricación
            </p>
          </div>

          {/* Color selection */}
          {product.variants.length > 0 && (
            <div className="mt-6">
              <label className="text-sm font-medium text-text block mb-3">
                Color disponible
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.color}
                    onClick={() => setSelectedColor(variant.color)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedColor === variant.color
                        ? 'border-primary bg-primary/5'
                        : 'border-border-light hover:border-primary/50'
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full"
                      style={{ backgroundColor: variant.colorHex }}
                    />
                    <span className="text-sm">{variant.color}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Specifications */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-low">
              <Ruler className="w-5 h-5 text-primary mb-2" />
              <p className="text-xs text-text-muted">Dimensiones</p>
              <p className="font-semibold text-text">
                {product.dimensions.largo} x {product.dimensions.ancho} cm
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-low">
              <Weight className="w-5 h-5 text-primary mb-2" />
              <p className="text-xs text-text-muted">Soporta hasta</p>
              <p className="font-semibold text-text">{product.maxWeight} kg</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-low">
              <Sparkles className="w-5 h-5 text-primary mb-2" />
              <p className="text-xs text-text-muted">Tipo de tejido</p>
              <p className="font-semibold text-text capitalize">{product.weaveType}</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-low">
              <Clock className="w-5 h-5 text-primary mb-2" />
              <p className="text-xs text-text-muted">Fabricación</p>
              <p className="font-semibold text-text">{product.fabricationDays} días</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleWhatsApp}
              className="btn-primary flex-1 py-4 rounded-xl flex items-center justify-center gap-2"
            >
              Solicitar por WhatsApp
            </button>
            <Link
              to="/cotizaciones"
              className="btn-secondary flex-1 py-4 rounded-xl flex items-center justify-center gap-2"
            >
              Solicitar Cotización
            </Link>
          </div>

          {/* Care Instructions */}
          <div className="mt-8">
            <h3 className="font-semibold text-text mb-3">Cuidados</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CARE_INSTRUCTIONS.slice(0, 4).map((instruction, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="text-primary">•</span>
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-bold text-text mb-8">
            Productos relacionados
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}