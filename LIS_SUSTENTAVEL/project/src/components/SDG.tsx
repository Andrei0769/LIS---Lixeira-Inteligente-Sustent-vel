import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SDGItem {
  number: string;
  title: string;
  description: string;
  color: string;
  icon: string;
}

const SDG: React.FC = () => {
  const sdgs: SDGItem[] = [
    {
      number: '9',
      title: 'Indústria, Inovação e Infraestrutura',
      description: 'Nossa lixeira usa tecnologia inovadora para modernizar a infraestrutura de gestão de resíduos.',
      color: 'bg-orange-500',
      icon: '🏭'
    },
    {
      number: '11',
      title: 'Cidades e Comunidades Sustentáveis',
      description: 'Contribui para cidades mais limpas e resilientes, reduzindo o impacto ambiental negativo.',
      color: 'bg-amber-500',
      icon: '🏙️'
    },
    {
      number: '12',
      title: 'Consumo e Produção Responsáveis',
      description: 'Promove a gestão sustentável e o uso eficiente dos recursos naturais.',
      color: 'bg-amber-600',
      icon: '♻️'
    },
    {
      number: '13',
      title: 'Ação contra a Mudança Global do Clima',
      description: 'Reduz a emissão de gases de efeito estufa ao diminuir o volume de resíduos em aterros.',
      color: 'bg-green-600',
      icon: '🌡️'
    }
  ];

  return (
    <section id="sdg" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Objetivos de Desenvolvimento Sustentável</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Contribuindo para os ODS</h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              Nossa solução está alinhada com os Objetivos de Desenvolvimento Sustentável 
              da ONU, contribuindo para um futuro mais equilibrado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sdgs.map((sdg, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
            >
              <div className={`h-2 ${sdg.color}`}></div>
              <div className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${sdg.color} text-white rounded-lg flex items-center justify-center text-xl font-bold`}>
                    {sdg.number}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{sdg.title}</h3>
                    <span className="text-xl">{sdg.icon}</span>
                  </div>
                  <p className="text-gray-600">{sdg.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-emerald-50 rounded-xl p-6 md:p-8 border border-emerald-100">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Como estamos contribuindo</h3>
              <p className="text-gray-700 mb-6">
                A LIS (Lixeira Inteligente Sustentável) foi desenvolvida com o compromisso
                de atender aos Objetivos de Desenvolvimento Sustentável da ONU, promovendo ações
                concretas para um futuro mais sustentável.
              </p>
              <div className="p-4 bg-white rounded-lg border border-emerald-200">
                <h4 className="font-medium text-emerald-800 mb-2">Nosso impacto esperado:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Redução de 30% no lixo misturado incorretamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Aumento de 50% na eficiência da coleta seletiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Maior conscientização ambiental nas comunidades</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-800">Ambiental</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5"></div>
                      <span>Redução da poluição do solo e água</span>
                    </li>
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5"></div>
                      <span>Diminuição de emissões de metano</span>
                    </li>
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5"></div>
                      <span>Aumento da reciclagem de materiais</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-800">Social</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span>Educação ambiental para comunidades</span>
                    </li>
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span>Melhoria da saúde pública</span>
                    </li>
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                      <span>Engajamento cidadão através do app</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-800">Econômico</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                      <span>Otimização dos custos de coleta</span>
                    </li>
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                      <span>Aumento da cadeia de reciclagem</span>
                    </li>
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5"></div>
                      <span>Economia de recursos naturais</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-800">Tecnológico</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                      <span>Incentivo à inovação em IoT</span>
                    </li>
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                      <span>Desenvolvimento de IA para reciclagem</span>
                    </li>
                    <li className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                      <span>Modernização da gestão de resíduos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDG;