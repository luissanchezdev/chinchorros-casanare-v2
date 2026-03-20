import { ErrorComponentProps } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="text-8xl mb-6 opacity-20">⚠️</div>
      <h1 className="font-display text-4xl font-bold text-text mb-4">
        Algo salió mal
      </h1>
      <p className="text-text-muted text-lg mb-8 max-w-md">
        Ha ocurrido un error inesperado. Por favor, intenta nuevamente.
      </p>
      {import.meta.env.DEV && (
        <pre className="bg-surface-high p-4 rounded-lg text-sm text-left max-w-lg overflow-auto mb-6">
          {error.message}
        </pre>
      )}
      <Link
        to="/"
        className="btn-primary px-8 py-3 rounded-xl inline-flex items-center gap-2"
      >
        Volver al inicio
      </Link>
    </div>
  )
}