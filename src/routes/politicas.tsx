import { createFileRoute } from '@tanstack/react-router'
import { Shield, Truck, RotateCcw, CreditCard, Package, MessageCircle } from 'lucide-react'

export const Route = createFileRoute('/politicas')({
  component: PoliciesPage,
})

function PoliciesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Información Legal
        </span>
        <h1 className="font-display text-4xl font-bold text-text mt-3">
          Políticas de la Tienda
        </h1>
        <p className="text-text-muted mt-3">
          Conoce nuestras políticas de compra, envío y devoluciones.
        </p>
      </div>

      <div className="space-y-8">
        {/* Production & Delivery */}
        <section className="p-6 rounded-2xl bg-surface-low">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-3">
                Producción y Entrega
              </h2>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>• Cada chinchorro es fabricado bajo pedido, lo que garantiza un producto personalizado.</li>
                <li>• Tiempo de fabricación: 2-4 semanas según el diseño y la complejidad.</li>
                <li>• Tiempo de envío: 3-7 días hábiles después de la finalización del producto.</li>
                <li>• Realizamos envíos a toda Colombia a través de transportadoras certificadas.</li>
                <li>• El cliente recibirá guía de seguimiento para rastrear su pedido.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Payment */}
        <section className="p-6 rounded-2xl bg-surface-low">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-3">
                Métodos de Pago
              </h2>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>• Se requiere un anticipo del 50% para iniciar la fabricación.</li>
                <li>• El 50% restante se cancela antes del envío del producto terminado.</li>
                <li>• Aceptamos transferencias bancarias, Nequi y Daviplata.</li>
                <li>• También aceptamos pagos a través de MercadoPago.</li>
                <li>• Para pedidos mayoreo, consulte condiciones especiales de pago.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Returns */}
        <section className="p-6 rounded-2xl bg-surface-low">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <RotateCcw className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-3">
                Política de Devoluciones
              </h2>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>• Los chinchorros son productos artesanales hechos a medida, por lo que no aceptamos devoluciones por cambio de opinión.</li>
                <li>• Si el producto presenta defectos de fabricación, se ofrecerá reparación o reemplazo sin costo adicional.</li>
                <li>• Es responsabilidad del cliente revisar el producto al momento de la entrega y reportar cualquier daño en un plazo de 24 horas.</li>
                <li>• Los daños por mal uso, exposición prolongada al sol o mal almacenamiento no son cubiertos por la garantía.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Warranty */}
        <section className="p-6 rounded-2xl bg-surface-low">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-3">
                Garantía de Calidad
              </h2>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>• Garantía de 6 meses por defectos de fabricación.</li>
                <li>• Cada chinchorro es revisado minuciosamente antes del envío.</li>
                <li>• Vida útil estimada: más de 10 años con cuidado adecuado.</li>
                <li>• Ofrecemos asesoría gratuita para el mantenimiento y cuidado del producto.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Shipping */}
        <section className="p-6 rounded-2xl bg-surface-low">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-3">
                Envíos
              </h2>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>• Envíos a toda Colombia.</li>
                <li>• El costo del envío se calcula según la ciudad de destino y se informa antes de confirmar el pedido.</li>
                <li>• Empacamos cada chinchorro con cuidado para evitar daños durante el transporte.</li>
                <li>• Entrega en puerta o punto de recogida según disponibilidad en la ciudad.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-3">
                ¿Tienes dudas?
              </h2>
              <p className="text-text-muted text-sm mb-4">
                Si tienes alguna pregunta sobre nuestras políticas o necesitas asesoría personalizada, no dudes en contactarnos.
              </p>
              <a
                href="https://wa.me/573209614542"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-2 rounded-lg text-sm inline-flex items-center gap-2"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Last updated */}
      <p className="text-center text-xs text-text-light mt-12">
        Última actualización: Enero 2025
      </p>
    </div>
  )
}