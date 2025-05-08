import React from 'react';
import { ChevronDown, Leaf, BarChart3, RecycleIcon } from 'lucide-react';
import WasteBinIllustration from './WasteBinIllustration';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-emerald-600">Lixeira Inteligente</span> para um futuro sustentável
            </h1>
            
            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              A LIS utiliza sensores IoT e inteligência artificial para identificar e separar 
              automaticamente os resíduos, tornando a reciclagem mais eficiente e acessível.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg 
                font-medium transition-colors duration-300 text-center shadow-lg hover:shadow-xl"
              >
                Saiba mais
              </a>
              <a 
                href="#features" 
                className="bg-white hover:bg-gray-100 text-emerald-600 border border-emerald-600 
                px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center 
                justify-center gap-2 text-center"
              >
                Ver funcionalidades <ChevronDown size={16} />
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-600">Sustentável</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Inteligente</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                  <RecycleIcon className="h-6 w-6 text-orange-600" />
                </div>
                <p className="text-sm text-gray-600">Reciclável</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 h-full flex justify-center items-center">
            <WasteBinIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;