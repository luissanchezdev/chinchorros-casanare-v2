import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import type { Product } from '~/types'
import { formatPrice } from '~/data/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const firstImage = product.images[0]

  return (
    <Link
      to="/tienda/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="card overflow-hidden bg-white">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {firstImage ? (
            <img
              src={firstImage.url}
              alt={firstImage.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-surface-high flex items-center justify-center">
              <span className="text-4xl opacity-30">🧶</span>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm rounded-full text-text">
              {product.category}
            </span>
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-base font-semibold text-text group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>

          <p className="text-sm text-text-muted mt-1 line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="font-display text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-text-light flex items-center gap-1 group-hover:text-primary transition-colors">
              Ver más
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}