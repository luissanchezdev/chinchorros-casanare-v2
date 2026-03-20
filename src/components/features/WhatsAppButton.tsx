import { MessageCircle } from 'lucide-react'
import { BUSINESS_WHATSAPP_LINK } from '~/data/constants'

export function WhatsAppButton() {
  return (
    <a
      href={BUSINESS_WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}