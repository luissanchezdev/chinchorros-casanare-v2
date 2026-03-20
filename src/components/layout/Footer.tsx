import { Link } from '@tanstack/react-router'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { BUSINESS_NAME, BUSINESS_LOCATION, BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_WHATSAPP_LINK, FOOTER_LINKS } from '~/data/constants'

export function Footer() {
  return (
    <footer className="bg-text text-surface">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-xl">🧶</span>
              </div>
              <span className="font-display text-xl font-bold">{BUSINESS_NAME}</span>
            </div>
            <p className="text-surface/70 text-sm leading-relaxed mb-6">
              Chinchorros artesanales 100% tejidos a mano en los Llanos Orientales de Colombia.
              Tradición, calidad y confort desde Casanare.
            </p>
            <div className="flex items-center gap-2 text-sm text-surface/60">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{BUSINESS_LOCATION}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-5">
              Navegación
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-surface/70 hover:text-surface transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={BUSINESS_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-surface/70 hover:text-surface transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span>{BUSINESS_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="flex items-center gap-3 text-sm text-surface/70 hover:text-surface transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-surface/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span>{BUSINESS_EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-surface/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface/50">
            © {new Date().getFullYear()} {BUSINESS_NAME}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-surface/40">
            Hecho con orgullo en los Llanos Orientales 🇨🇴
          </p>
        </div>
      </div>
    </footer>
  )
}