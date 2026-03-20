import { Link } from '@tanstack/react-router'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { NAV_LINKS, BUSINESS_NAME } from '~/data/constants'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass border-b border-border-light">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-xl">🧶</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-text">
                {BUSINESS_NAME}
              </span>
              <span className="text-xs text-text-light hidden sm:block">
                Artesanía del Llano
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors rounded-lg hover:bg-surface-high"
                  activeProps={{
                    className: 'text-primary bg-surface-high',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted hover:text-primary hover:bg-surface-high transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-text-muted hover:text-primary hover:bg-surface-high transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border-light">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="block px-4 py-3 text-base font-medium text-text-muted hover:text-primary hover:bg-surface-high rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}