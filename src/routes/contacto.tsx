import { createFileRoute } from '@tanstack/react-router'
import { MessageCircle, Mail, MapPin, Clock, Phone } from 'lucide-react'
import { BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_LOCATION, BUSINESS_WHATSAPP_LINK } from '~/data/constants'

export const Route = createFileRoute('/contacto')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Comunícate con nosotros
        </span>
        <h1 className="font-display text-4xl font-bold text-text mt-3">
          Contacto
        </h1>
        <p className="text-text-muted mt-3">
          Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros canales.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-5 sm:grid-cols-2 mb-12">
        {/* WhatsApp */}
        <a
          href={BUSINESS_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 rounded-2xl bg-surface-low hover:bg-green-50 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-green-100 group-hover:bg-green-200 flex items-center justify-center mb-4 transition-colors">
            <MessageCircle className="w-6 h-6 text-green-700" />
          </div>
          <h2 className="font-display text-lg font-semibold text-text">
            WhatsApp
          </h2>
          <p className="text-text-muted mt-1">{BUSINESS_PHONE}</p>
          <p className="text-xs text-text-light mt-2">
            Respuesta rápida y asesoría personalizada
          </p>
        </a>

        {/* Email */}
        <a
          href={`mailto:${BUSINESS_EMAIL}`}
          className="group p-6 rounded-2xl bg-surface-low hover:bg-blue-50 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mb-4 transition-colors">
            <Mail className="w-6 h-6 text-blue-700" />
          </div>
          <h2 className="font-display text-lg font-semibold text-text">
            Correo Electrónico
          </h2>
          <p className="text-primary mt-1">{BUSINESS_EMAIL}</p>
          <p className="text-xs text-text-light mt-2">
            Respuesta en 24-48 horas
          </p>
        </a>

        {/* Location */}
        <div className="p-6 rounded-2xl bg-surface-low">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-display text-lg font-semibold text-text">
            Ubicación
          </h2>
          <p className="text-text-muted mt-1">{BUSINESS_LOCATION}</p>
          <p className="text-xs text-text-light mt-2">
            Envíos a toda Colombia
          </p>
        </div>

        {/* Hours */}
        <div className="p-6 rounded-2xl bg-surface-low">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-purple-700" />
          </div>
          <h2 className="font-display text-lg font-semibold text-text">
            Horario de Atención
          </h2>
          <p className="text-text-muted mt-1">Lunes a Sábado</p>
          <p className="text-text-muted">8:00 AM - 6:00 PM</p>
        </div>
      </div>

      {/* CTA */}
      <div className="p-10 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 text-center">
        <h2 className="font-display text-2xl font-bold text-text">
          ¿Listo para comprar tu chinchorro?
        </h2>
        <p className="text-text-muted mt-3 mb-6">
          Escríbenos por WhatsApp y te asesoramos en la elección del chinchorro perfecto para ti.
        </p>
        <a
          href={BUSINESS_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-8 py-4 rounded-xl inline-flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Escríbenos por WhatsApp
        </a>
      </div>

      {/* Map */}
      <div className="mt-12 rounded-2xl overflow-hidden bg-surface-low">
        <iframe
          title="Mapa de Paz de Ariporo, Casanare"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.858828357758!2d-71.91742652409838!3d6.106483728181101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e647371ad0b0dc1%3A0x860b5144f1df052a!2sPaz%20de%20Ariporo%2C%20Casanare%2C%20Colombia!5e0!3m2!1ses!2sco!4v1708565360008!5m2!1ses!2sco"
          className="w-full h-80 border-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}