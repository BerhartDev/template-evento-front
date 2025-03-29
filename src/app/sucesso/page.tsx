'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <svg
            className="w-24 h-24 text-green-500 mx-auto"
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
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Compra Realizada com Sucesso!
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Seus ingressos para o SEPSE 2024 foram confirmados. Você receberá um
          e-mail com os detalhes da sua compra.
        </p>
        <div className="space-y-4">
          <Link href="/" className="btn-primary block">
            Voltar para a Página Inicial
          </Link>
          <Link href="/ingressos" className="btn-secondary block">
            Comprar Mais Ingressos
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 