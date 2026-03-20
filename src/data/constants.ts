// Business Information
export const BUSINESS_NAME = 'Chinchorros Casanare';
export const BUSINESS_TAGLINE = 'La Mejor Calidad en Chinchorros Llaneros';
export const BUSINESS_DESCRIPTION =
  'Chinchorros artesanales 100% hechos a mano en los Llanos Orientales de Colombia. Tejido tradicional llanero en nylon de alta resistencia.';
export const BUSINESS_PHONE = '+573209614542';
export const BUSINESS_WHATSAPP_LINK = 'https://wa.me/573209614542';
export const BUSINESS_EMAIL = 'contacto@chinchorroscasanare.com';
export const BUSINESS_LOCATION = 'Yopal, Casanare, Colombia';
export const BUSINESS_CURRENCY = 'COP';
export const SITE_URL = 'https://chinchorroscasanare.com';

// Business Rules
export const ADVANCE_PERCENTAGE = 0.5; // 50%
export const PAYMENT_DEADLINE_HOURS = 48;
export const DEFAULT_FABRICATION_DAYS = 20;
export const MAX_PRODUCT_IMAGES = 5;

// R2 Configuration
export const R2_BASE_URL = 'https://pub-8a6f8df051ce4f03a1054de397fe58fb.r2.dev';

// Categories
export const CATEGORIES = [
  { value: 'mediano', label: 'Mediano', description: 'Compacto y versátil' },
  { value: 'personal', label: 'Personal', description: 'Equilibrio perfecto' },
  { value: 'grande', label: 'Grande', description: 'Máximo confort' },
] as const;

// Weave Types
export const WEAVE_TYPES = [
  { value: 'tradicional', label: 'Tradicional', description: 'Técnica ancestral heredada de generaciones' },
  { value: 'campechana', label: 'Campechana', description: 'Patrón entrelazado de textura única' },
  { value: 'tigre', label: 'Tigre', description: 'Diseño audaz con personalidad' },
  { value: 'decorado', label: 'Decorado', description: 'Patrones artísticos tejidos a mano' },
  { value: 'galleteado', label: 'Galleteado', description: 'Acabado trenzado artesanal' },
  { value: 'punta-de-lanza', label: 'Punta de Lanza', description: 'Diseño geométrico elegante' },
  { value: 'personalizado', label: 'Personalizado', description: 'Creado especialmente para ti' },
] as const;

// Order Status
export const ORDER_STATUS = {
  pendiente: { label: 'Pendiente', description: 'Esperando pago del anticipo (50%)', color: 'yellow' },
  pago_verificado: { label: 'Pago Verificado', description: 'Anticipo verificado, preparando fabricación', color: 'blue' },
  en_fabricacion: { label: 'En Fabricación', description: 'Tu chinchorro está siendo tejido a mano', color: 'indigo' },
  listo_entrega: { label: 'Listo para Entrega', description: 'Tu chinchorro está listo. Pendiente pago del saldo', color: 'green' },
  entregado: { label: 'Entregado', description: 'Pedido entregado exitosamente', color: 'emerald' },
  cancelado: { label: 'Cancelado', description: 'Pedido cancelado', color: 'red' },
} as const;

// Colombian Departments
export const COLOMBIAN_DEPARTMENTS = [
  'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá',
  'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó',
  'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila',
  'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander',
  'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia',
  'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada',
] as const;

// Care Instructions
export const CARE_INSTRUCTIONS = [
  'Lavar a mano con agua fría y jabón suave',
  'No usar blanqueador ni detergentes fuertes',
  'Secar a la sombra, evitar exposición directa al sol prolongada',
  'No retorcer; escurrir con cuidado',
  'Guardar en lugar seco y ventilado cuando no esté en uso',
  'Revisar periódicamente los puntos de amarre',
] as const;

// Benefits
export const BENEFITS = [
  { icon: 'Hand', title: '100% Artesanal', description: 'Tejidos completamente a mano por familias artesanas del Llano' },
  { icon: 'Shield', title: 'Nylon Resistente', description: 'Material de alta resistencia para máxima durabilidad' },
  { icon: 'Truck', title: 'Envío Nacional', description: 'Enviamos a toda Colombia de forma segura' },
  { icon: 'Clock', title: '10+ Años de Vida', description: 'Calidad garantizada con cuidado adecuado' },
] as const;

// How to Buy Steps
export const BUYING_STEPS = [
  { number: '01', title: 'Elige tu chinchorro', description: 'Explora nuestro catálogo y encuentra el diseño perfecto para ti.' },
  { number: '02', title: 'Paga el 50% de anticipo', description: 'Confirma tu pedido e iniciamos la fabricación artesanal.' },
  { number: '03', title: 'Recibe tu chinchorro', description: 'Paga el saldo restante y disfruta de tu pieza única.' },
] as const;

// Navigation
export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/colecciones', label: 'Colecciones' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/cotizaciones', label: 'Cotizaciones' },
  { href: '/contacto', label: 'Contacto' },
] as const;

// Footer Links
export const FOOTER_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/colecciones', label: 'Colecciones' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/politicas', label: 'Políticas' },
  { href: '/contacto', label: 'Contacto' },
] as const;