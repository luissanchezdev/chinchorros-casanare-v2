// Product Types
export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductVariant {
  color: string;
  colorHex: string;
  available: boolean;
}

export interface ProductDimensions {
  largo: number; // cm
  ancho: number; // cm
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number; // COP
  dimensions: ProductDimensions;
  weight: number; // kg
  maxWeight: number; // kg supported
  material: string;
  weaveType: string;
  vueltas: number;
  images: ProductImage[];
  variants: ProductVariant[];
  decoraciones: string;
  fabricationDays: number;
  category: 'mediano' | 'personal' | 'grande';
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

// Order Types
export type OrderStatus =
  | 'pendiente'
  | 'pago_verificado'
  | 'en_fabricacion'
  | 'listo_entrega'
  | 'entregado'
  | 'cancelado';

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  selectedColor: string;
  customizations?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  customerCity: string;
  customerDepartment: string;
  items: OrderItem[];
  totalAmount: number;
  advanceAmount: number;
  remainingAmount: number;
  status: OrderStatus;
  paymentProofUrl?: string;
  advancePaidAt?: string;
  remainingPaidAt?: string;
  noReturnsAccepted: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  customizations?: string;
}

// Filter Types
export interface FilterOptions {
  priceRange: [number, number];
  colors: string[];
  weaveTypes: string[];
  categories: string[];
  sortBy: 'price_asc' | 'price_desc' | 'name' | 'newest';
}

// Customer Types
export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  department: string;
}

// Quote Request Types
export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  productType: string;
  dimensions?: ProductDimensions;
  weaveType?: string;
  colors?: string[];
  quantity: number;
  message: string;
}