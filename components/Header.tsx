
import React from 'react';
import { HeartIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="text-center relative py-8">
       <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-50">
        <HeartIcon className="w-16 h-16 text-fuchsia-300 transform -scale-x-100" />
      </div>
       <div className="absolute bottom-0 left-0 -ml-4 -mb-4 opacity-50">
        <HeartIcon className="w-12 h-12 text-violet-300" />
      </div>
      <h1 className="font-dancing-script text-5xl md:text-7xl font-bold text-purple-800">
        Obrigado por esses 6 meses
      </h1>
      <p className="mt-4 text-xl text-purple-600">
        Meu presente pra você pelos nossos 6 meses juntos.  >.&lt;
      </p>
    </header>
  );
};

export default Header;