import { createFileRoute } from '@tanstack/react-router'
import { Send, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { CATEGORIES, WEAVE_TYPES, COLOMBIAN_DEPARTMENTS, BUSINESS_WHATSAPP_LINK } from '~/data/constants'

export const Route = createFileRoute('/cotizaciones')({
  component: QuotesPage,
})

interface QuoteForm {
  name: string
  email: string
  phone: string
  productType: string
  category: string
  weaveType: string
  quantity: number
  message: string
}

function QuotesPage() {
  const [form, setForm] = useState<QuoteForm>({
    name: '',
    email: '',
    phone: '',
    productType: 'chinchorro',
    category: '',
    weaveType: '',
    quantity: 1,
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Generate WhatsApp message
    const message = `¡Hola! Quisiera solicitar una cotización:

*Nombre:* ${form.name}
*Email:* ${form.email}
*Teléfono:* ${form.phone}
*Producto:* ${form.productType}
*Categoría:* ${form.category || 'No especificada'}
*Tejido:* ${form.weaveType || 'No especificado'}
*Cantidad:* ${form.quantity}

*Mensaje:*
${form.message}`

    const url = `https://wa.me/573209614542?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    setSubmitted(true)
  }

  const updateForm = (field: keyof QuoteForm, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="font-display text-3xl font-bold text-text mb-4">
          ¡Solicitud Enviada!
        </h1>
        <p className="text-text-muted mb-8">
          Tu solicitud de cotización ha sido enviada por WhatsApp.
          Nos pondremos en contacto contigo pronto.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-secondary px-6 py-3 rounded-xl"
        >
          Enviar otra cotización
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Cotizaciones Especiales
        </span>
        <h1 className="font-display text-4xl font-bold text-text mt-3">
          Solicita tu Cotización
        </h1>
        <p className="text-text-muted mt-4 max-w-2xl mx-auto">
          ¿Necesitas un chinchorro personalizado o una cotización especial?
          Completa el formulario y te contactaremos en menos de 24 horas.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-5">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
          {/* Contact Info */}
          <div className="p-6 rounded-2xl bg-surface-low">
            <h2 className="font-semibold text-text mb-4">Información de Contacto</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-text-muted mb-1">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => updateForm('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="+57 320 961 4542"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 rounded-2xl bg-surface-low">
            <h2 className="font-semibold text-text mb-4">Detalles del Producto</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">
                  Tipo de producto
                </label>
                <select
                  value={form.productType}
                  onChange={(e) => updateForm('productType', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                >
                  <option value="chinchorro">Chinchorro</option>
                  <option value="chinchorro-personalizado">Chinchorro Personalizado</option>
                  <option value="hamaca">Hamaca</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">
                    Categoría (tamaño)
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => updateForm('category', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  >
                    <option value="">Seleccionar...</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">
                    Tipo de tejido
                  </label>
                  <select
                    value={form.weaveType}
                    onChange={(e) => updateForm('weaveType', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  >
                    <option value="">Seleccionar...</option>
                    {WEAVE_TYPES.map((weave) => (
                      <option key={weave.value} value={weave.value}>
                        {weave.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">
                  Cantidad
                </label>
                <input
                  type="number"
                  min="1"
                  value={form.quantity}
                  onChange={(e) => updateForm('quantity', parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">
              Mensaje o requerimientos especiales
            </label>
            <textarea
              value={form.message}
              onChange={(e) => updateForm('message', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
              placeholder="Describe colores, tamaños específicos, nombres para personalización, etc."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Enviar Solicitud por WhatsApp
          </button>
        </form>

        {/* Sidebar */}
        <aside className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-primary/5">
            <h3 className="font-semibold text-text mb-4">¿Por qué cotizar?</h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Precios especiales para pedidos mayoreo
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Personalización con nombres y diseños
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Descuentos en envíos múltiples
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Asesoría personalizada
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-surface-low">
            <h3 className="font-semibold text-text mb-4">Contacto Directo</h3>
            <div className="space-y-4">
              <a
                href={BUSINESS_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                +57 320 961 4542
              </a>
              <div className="flex items-center gap-3 text-sm text-text-muted">
                <Mail className="w-5 h-5 text-primary" />
                contacto@chinchorroscasanare.com
              </div>
              <div className="flex items-center gap-3 text-sm text-text-muted">
                <Clock className="w-5 h-5 text-primary" />
                Lun - Sáb: 8:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}