import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '~/components/layout/Header'
import { Footer } from '~/components/layout/Footer'
import { WhatsAppButton } from '~/components/features/WhatsAppButton'
import '~/styles/globals.css'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  ),
})