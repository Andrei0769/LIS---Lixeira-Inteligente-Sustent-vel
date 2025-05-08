import React from 'react';
import { Trash2, AlertTriangle, Trash } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <Trash2 size={24} className="text-red-500" />,
      title: 'Descarte incorreto',
      description: 'Muitas pessoas jogam resíduos recicláveis, orgânicos e eletrônicos tudo no mesmo lugar.'
    },
    {
      icon: <AlertTriangle size={24} className="text-amber-500" />,
      title: 'Coleta seletiva prejudicada',
      description: 'A mistura de materiais dificulta e encarece o processo de separação e reciclagem.'
    },
    {
      icon: <Trash size={24} className="text-gray-500" />,
      title: 'Impacto ambiental',
      description: 'Resíduos mal descartados geram poluição e danos severos ao meio ambiente.'
    }
  ];

  return (
    <section id="problem" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">O Desafio</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">O problema que estamos resolvendo</h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              O descarte incorreto de lixo ainda é um sério problema em nossa sociedade,
              causando impactos negativos ao meio ambiente e dificultando processos de reciclagem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-50 border border-red-100 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Trash2 size={64} className="text-red-500" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">!</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Você sabia?</h3>
              <p className="text-gray-700 mb-4">
                Segundo pesquisas recentes, cerca de 80% dos resíduos que vão para aterros sanitários 
                poderiam ser reciclados ou compostados. A separação incorreta é um dos maiores obstáculos 
                para alcançarmos metas de sustentabilidade.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white py-2 px-4 rounded-full text-red-600 text-sm font-medium shadow-sm">76% dos eletrônicos são descartados incorretamente</div>
                <div className="bg-white py-2 px-4 rounded-full text-red-600 text-sm font-medium shadow-sm">30% de contaminação em recicláveis</div>
                <div className="bg-white py-2 px-4 rounded-full text-red-600 text-sm font-medium shadow-sm">Baixa adesão à coleta seletiva</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;