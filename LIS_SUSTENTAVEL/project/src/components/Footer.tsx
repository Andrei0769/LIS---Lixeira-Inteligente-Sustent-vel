import React from 'react';
import { Recycle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Recycle className="h-8 w-8 text-emerald-500" />
          <span className="text-2xl font-bold">LIS</span>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">
            Transformando a gestão de resíduos com tecnologia e sustentabilidade.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LIS - Lixeira Inteligente Sustentável. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;