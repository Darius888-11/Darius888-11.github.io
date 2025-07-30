
import React from 'react';
import { CatIcon, RabbitIcon, FoxIcon, ButterflyIcon, OwlIcon, UnicornIcon } from './IconComponents';

const galleryItems = [
  { Icon: CatIcon, name: 'Gatinhos', color: 'text-pink-400' },
  { Icon: RabbitIcon, name: 'Coelhinhos', color: 'text-gray-400' },
  { Icon: FoxIcon, name: 'Raposinhas', color: 'text-orange-400' },
  { Icon: ButterflyIcon, name: 'Borboletas', color: 'text-fuchsia-400' },
  { Icon: OwlIcon, name: 'Corujinhas', color: 'text-indigo-400' },
  { Icon: UnicornIcon, name: 'Unicórnios', color: 'text-violet-400' },
];

const Gallery: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="font-dancing-script text-3xl md:text-4xl text-purple-700 mb-6">
        Nossos Guardiões Mágicos
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
        {galleryItems.map(({ Icon, name, color }) => (
          <div 
            key={name} 
            className="flex flex-col items-center justify-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-md border border-white
                       transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white"
          >
            <Icon className={`w-16 h-16 ${color}`} />
            <p className="mt-2 text-sm font-medium text-purple-700">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
