import { createFileRoute } from '@tanstack/react-router'
import { Heart, Users, Award, Leaf } from 'lucide-react'

export const Route = createFileRoute('/nosotros')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface-low to-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Nuestra Historia
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mt-3">
            Tejiendo tradición desde el corazón del Llano
          </h1>
          <p className="text-text-muted mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            Somos una familia de artesanos dedicados a preservar la tradición del tejido de chinchorros en Casanare. Cada pieza que creamos lleva el alma y la herencia de generaciones de tejedores llaneros.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-text mb-6">
              Una tradición que se teje con las manos y el corazón
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                En los Llanos Orientales de Colombia, el chinchorro es más que una hamaca: es símbolo de descanso, de hogar, de tradición. Por generaciones, las familias llaneras han perfeccionado el arte de tejer estas piezas con nylon de alta resistencia.
              </p>
              <p>
                Desde Paz de Ariporo, Casanare, llevamos esta tradición a hogares de toda Colombia. Cada chinchorro que sale de nuestras manos representa semanas de trabajo dedicado, más de 1000 vueltas de tejido meticuloso, y el compromiso de ofrecer productos que durarán más de una década.
              </p>
              <p>
                Nuestro taller es familiar. Las técnicas las aprendimos de nuestros abuelos, y ahora las enseñamos a las nuevas generaciones. Creemos en el comercio justo, en preservar oficios ancestrales, y en crear productos que cuenten una historia.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-surface-low overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-8xl opacity-30">
                🧶
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-primary/10 -z-10" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-low">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-text">
              Nuestros Valores
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Heart,
                title: 'Hecho con Amor',
                description: 'Cada chinchorro es tejido a mano con dedicación y cariño, no en líneas de producción.',
              },
              {
                icon: Users,
                title: 'Comercio Justo',
                description: 'Apoyamos a familias artesanas del Casanare con precios justos y condiciones dignas.',
              },
              {
                icon: Award,
                title: 'Calidad Premium',
                description: 'Usamos nylon de alta resistencia que garantiza más de 10 años de vida útil.',
              },
              {
                icon: Leaf,
                title: 'Sostenible',
                description: 'Productos artesanales que respetan el medio ambiente y las tradiciones locales.',
              },
            ].map((value) => (
              <div key={value.title} className="card p-6 text-center bg-white">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-text mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-text">
            Nuestro Proceso
          </h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto">
            Cada chinchorro pasa por un proceso artesanal que puede tomar entre 2 y 4 semanas.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Selección de Materiales',
              description: 'Elegimos el mejor nylon resistente y los colores que darán vida a cada diseño.',
            },
            {
              step: '02',
              title: 'Tejido Artesanal',
              description: 'Más de 1000 vueltas tejidas a mano con la técnica tradicional llanera.',
            },
            {
              step: '03',
              title: 'Revisión y Empaque',
              description: 'Cada pieza es revisada minuciosamente antes de ser empacada con cuidado.',
            },
          ].map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                <span className="font-display text-lg font-bold text-white">{item.step}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-text mt-5 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary/5 via-surface to-primary/10">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-bold text-text mb-4">
            ¿Quieres conocer más sobre nuestro trabajo?
          </h2>
          <p className="text-text-muted mb-8">
            Visítanos en Casanare o contáctanos para conocer de cerca nuestro proceso artesanal.
          </p>
          <a
            href="https://wa.me/573209614542"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-xl inline-flex items-center gap-2"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  )
}