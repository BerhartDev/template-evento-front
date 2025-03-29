'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const artists = [
  {
    id: 1,
    name: 'DJ Alok',
    genre: 'House',
    time: '22:00',
    stage: 'Main Stage',
    image: '/artist-1.jpg',
    description: 'Um dos maiores DJs do Brasil, conhecido por suas produções e performances energéticas.',
  },
  {
    id: 2,
    name: 'Martin Garrix',
    genre: 'EDM',
    time: '23:30',
    stage: 'Main Stage',
    image: '/artist-2.jpg',
    description: 'Superstar holandês que domina as paradas mundiais com seus hits.',
  },
  {
    id: 3,
    name: 'Charlotte de Witte',
    genre: 'Techno',
    time: '01:00',
    stage: 'Underground',
    image: '/artist-3.jpg',
    description: 'Rainha do techno belga, conhecida por suas sets poderosas e minimalistas.',
  },
  {
    id: 4,
    name: 'Armin van Buuren',
    genre: 'Trance',
    time: '02:30',
    stage: 'Main Stage',
    image: '/artist-4.jpg',
    description: 'Lenda do trance e um dos DJs mais influentes da história da música eletrônica.',
  },
  // Add more artists as needed
];

export default function Lineup() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12"
        >
          Line-Up 2024
        </motion.h1>

        {/* Stage Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {['Main Stage', 'Underground', 'Beach Stage'].map((stage) => (
            <button
              key={stage}
              className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200"
            >
              {stage}
            </button>
          ))}
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 rounded-lg overflow-hidden group"
            >
              <div className="relative h-64">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-gray-300">{artist.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                <div className="flex justify-between items-center text-gray-400">
                  <span>{artist.genre}</span>
                  <span>{artist.time}</span>
                </div>
                <div className="mt-2 text-sm text-purple-400">{artist.stage}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Horários</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 px-6 text-left">Horário</th>
                  <th className="py-4 px-6 text-left">Main Stage</th>
                  <th className="py-4 px-6 text-left">Underground</th>
                  <th className="py-4 px-6 text-left">Beach Stage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '22:00', main: 'DJ Alok', underground: 'Local DJ', beach: 'Sunset Set' },
                  { time: '23:30', main: 'Martin Garrix', underground: 'Deep House', beach: 'Chill Vibes' },
                  { time: '01:00', main: 'Special Guest', underground: 'Charlotte de Witte', beach: 'Late Night' },
                  { time: '02:30', main: 'Armin van Buuren', underground: 'Techno Night', beach: 'After Hours' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-4 px-6">{row.time}</td>
                    <td className="py-4 px-6">{row.main}</td>
                    <td className="py-4 px-6">{row.underground}</td>
                    <td className="py-4 px-6">{row.beach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 