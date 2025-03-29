'use client';

import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { href: 'https://instagram.com', label: 'Instagram' },
    { href: 'https://facebook.com', label: 'Facebook' },
    { href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-black/80 backdrop-blur-sm text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-purple-500 mb-4">Siga-nos</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-purple-500 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lineup" className="hover:text-purple-500 transition-colors duration-200">
                  Line-Up
                </Link>
              </li>
              <li>
                <Link href="/ingressos" className="hover:text-purple-500 transition-colors duration-200">
                  Ingressos
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-purple-500 transition-colors duration-200">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-purple-500 mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>contato@emf2024.com</li>
              <li>+55 (11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} EMF 2024. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 