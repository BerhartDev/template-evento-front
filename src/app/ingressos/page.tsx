'use client';

import { motion } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';

const tickets = [
  {
    id: 1,
    name: 'Pista',
    price: 299.90,
    description: 'Acesso à área principal do festival',
    features: [
      'Acesso à pista principal',
      'Banheiros',
      'Bebidas não incluídas',
      'Comida não incluída',
    ],
    image: '/ticket-pista.jpg',
  },
  {
    id: 2,
    name: 'VIP',
    price: 499.90,
    description: 'Experiência premium com benefícios exclusivos',
    features: [
      'Acesso VIP',
      'Banheiros exclusivos',
      'Open bar',
      'Open food',
      'Área com vista privilegiada',
    ],
    image: '/ticket-vip.jpg',
  },
  {
    id: 3,
    name: 'Camarote',
    price: 799.90,
    description: 'A experiência mais luxuosa do festival',
    features: [
      'Acesso ao camarote',
      'Banheiros privativos',
      'Open bar premium',
      'Open food premium',
      'Vista panorâmica',
      'Meet & Greet com artistas',
    ],
    image: '/ticket-camarote.jpg',
  },
];

export default function Tickets() {
  const { addToCart, canAddMore } = useCartStore();

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12"
        >
          Ingressos SEPSE 2024
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={ticket.image}
                  alt={ticket.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{ticket.name}</h3>
                <p className="text-gray-400 mb-4">{ticket.description}</p>
                <div className="text-3xl font-bold text-purple-500 mb-6">
                  R$ {ticket.price.toFixed(2)}
                </div>
                <ul className="space-y-2 mb-6">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-purple-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => addToCart(ticket)}
                  disabled={!canAddMore(ticket.id)}
                  className={`w-full btn-primary ${
                    !canAddMore(ticket.id)
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                >
                  {canAddMore(ticket.id)
                    ? 'Adicionar ao Carrinho'
                    : 'Limite de Ingressos Atingido'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-black/30 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Informações Importantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Formas de Pagamento</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Cartão de Crédito (até 12x)</li>
                <li>• PIX (10% de desconto)</li>
                <li>• PayPal</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Política de Cancelamento</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Cancelamento até 7 dias antes: 100% de reembolso</li>
                <li>• Cancelamento até 3 dias antes: 50% de reembolso</li>
                <li>• Menos de 3 dias: sem reembolso</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 