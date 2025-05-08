import React from 'react';
import { Leaf, Users, TrendingUp } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Nosso Impacto</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Transformando o futuro</h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              Nossa solução está gerando resultados significativos em diversas áreas,
              contribuindo para um mundo mais sustentável.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Impacto Ambiental</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                <span className="text-gray-600">Redução de 30% no descarte incorreto</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                <span className="text-gray-600">Aumento de 45% na taxa de reciclagem</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                <span className="text-gray-600">Diminuição da contaminação do solo</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Impacto Social</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                <span className="text-gray-600">Mais de 10.000 usuários ativos</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                <span className="text-gray-600">Educação ambiental aprimorada</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                <span className="text-gray-600">Comunidades mais conscientes</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Impacto Econômico</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                <span className="text-gray-600">Redução de 40% nos custos de coleta</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                <span className="text-gray-600">Otimização de rotas e recursos</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></div>
                <span className="text-gray-600">Valorização de materiais recicláveis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Números que fazem a diferença</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">30%</div>
              <p className="text-gray-600 mt-1">Redução de resíduos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">10k+</div>
              <p className="text-gray-600 mt-1">Usuários ativos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">45%</div>
              <p className="text-gray-600 mt-1">Mais reciclagem</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">40%</div>
              <p className="text-gray-600 mt-1">Economia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;