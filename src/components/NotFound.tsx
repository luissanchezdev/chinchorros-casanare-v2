import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="text-8xl mb-6 opacity-20">🧶</div>
      <h1 className="font-display text-4xl font-bold text-text mb-4">
        Página no encontrada
      </h1>
      <p className="text-text-muted text-lg mb-8 max-w-md">
        Lo sentimos, no pudimos encontrar la página que buscas.
        Quizás te interese explorar nuestra colección de chinchorros.
      </p>
      <Link
        to="/"
        className="btn-primary px-8 py-3 rounded-xl inline-flex items-center gap-2"
      >
        Volver al inicio
      </Link>
    </div>
  )
}