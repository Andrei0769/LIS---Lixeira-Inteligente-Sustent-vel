import React, { useState } from 'react';
import { Eye, Camera, Cpu, BarChart3, BellRing, Check } from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>('sensor');

  const features: Feature[] = [
    {
      id: 'sensor',
      icon: <Eye className="h-6 w-6" />,
      title: 'Sensor de Presença',
      description: 'Detecta automaticamente quando alguém se aproxima da lixeira, ativando o sistema de reconhecimento.',
      color: 'bg-blue-500'
    },
    {
      id: 'camera',
      icon: <Camera className="h-6 w-6" />,
      title: 'Câmera com IA',
      description: 'Reconhece o tipo de resíduo (orgânico, reciclável ou eletrônico) usando algoritmos de visão computacional.',
      color: 'bg-purple-500'
    },
    {
      id: 'sorting',
      icon: <Cpu className="h-6 w-6" />,
      title: 'Separação Automática',
      description: 'Abre apenas o compartimento correto para o tipo de resíduo identificado, garantindo a separação adequada.',
      color: 'bg-emerald-500'
    },
    {
      id: 'monitoring',
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Monitoramento de Nível',
      description: 'Sensores de nível informam quando cada compartimento está próximo da capacidade máxima.',
      color: 'bg-amber-500'
    },
    {
      id: 'notifications',
      icon: <BellRing className="h-6 w-6" />,
      title: 'Notificações Inteligentes',
      description: 'Alerta a central de coleta quando a lixeira precisa ser esvaziada, otimizando as rotas de coleta.',
      color: 'bg-red-500'
    }
  ];

  const getFeatureById = (id: string): Feature => {
    return features.find(feature => feature.id === id) || features[0];
  };

  const activeFeatureData = getFeatureById(activeFeature);

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Funcionalidades</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Como a LIS funciona</h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              Nossa lixeira inteligente utiliza tecnologia avançada para automatizar e 
              aprimorar o processo de descarte e separação de resíduos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-white p-6 rounded-xl shadow-lg relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-2 h-full ${activeFeatureData.color}`}></div>
              
              <div className="mb-6 flex items-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${activeFeatureData.color.replace('500', '100')}`}>
                  <div className={`text-${activeFeatureData.color.replace('bg-', '').replace('500', '600')}`}>
                    {activeFeatureData.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{activeFeatureData.title}</h3>
              </div>
              
              <div className="h-64 bg-gray-100 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                {activeFeature === 'sensor' && (
                  <div className="relative">
                    <div className="w-24 h-64 bg-gray-200 rounded-lg relative">
                      {/* Person silhouette */}
                      <div className="absolute bottom-6 left-6 w-12 h-24 bg-gray-700 rounded-t-full"></div>
                      
                      {/* Sensor waves animation */}
                      <div className="absolute top-6 left-12 w-16 h-16 rounded-full border-2 border-blue-400 opacity-0 animate-ping"></div>
                      <div className="absolute top-6 left-12 w-12 h-12 rounded-full border-2 border-blue-400 opacity-0 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-6 left-12 w-8 h-8 rounded-full border-2 border-blue-400 opacity-0 animate-ping" style={{ animationDelay: '1s' }}></div>
                      
                      {/* Sensor */}
                      <div className="absolute top-6 left-12 w-4 h-4 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                )}
                
                {activeFeature === 'camera' && (
                  <div className="relative">
                    <div className="w-48 h-48 bg-white rounded-lg shadow-md p-4 flex flex-col">
                      {/* Camera lens */}
                      <div className="w-8 h-8 bg-gray-800 rounded-full mx-auto mb-2 relative">
                        <div className="absolute inset-2 bg-gray-900 rounded-full"></div>
                        <div className="absolute top-1 right-1 w-1 h-1 bg-blue-400 rounded-full"></div>
                      </div>
                      
                      {/* Processing animation */}
                      <div className="w-full h-4 bg-gray-200 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                      </div>
                      
                      {/* Recognition results */}
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Orgânico</span>
                          <span className="text-xs font-bold text-green-600">12%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Reciclável</span>
                          <span className="text-xs font-bold text-purple-600">86%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Eletrônico</span>
                          <span className="text-xs font-bold text-gray-600">2%</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-xs text-center font-medium text-purple-600">
                        Identificado: Reciclável
                      </div>
                    </div>
                  </div>
                )}
                
                {activeFeature === 'sorting' && (
                  <div className="relative">
                    <div className="w-32 h-64 border-2 border-gray-300 rounded-t-xl bg-white relative">
                      {/* Bin compartments */}
                      <div className="absolute bottom-0 left-0 w-full h-1/3 grid grid-cols-3 border-t-2 border-gray-300">
                        <div className="border-r-2 border-gray-300 flex items-center justify-center bg-green-50"></div>
                        <div className="border-r-2 border-gray-300 flex items-center justify-center bg-blue-50 relative">
                          {/* Animated lid opening */}
                          <div className="absolute -top-6 -left-1 w-[calc(100%+2px)] h-6 bg-white border-l-2 border-r-2 border-t-2 border-gray-300 rounded-t-lg origin-bottom animate-pulse"></div>
                        </div>
                        <div className="flex items-center justify-center bg-orange-50"></div>
                      </div>
                    </div>
                    
                    {/* Arrows pointing to the active compartment */}
                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-emerald-500 animate-bounce">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
                
                {activeFeature === 'monitoring' && (
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-48 border-2 border-gray-300 rounded-md bg-white relative overflow-hidden flex flex-col-reverse">
                      <div className="bg-green-400 h-3/4 w-full relative">
                        <div className="absolute top-0 w-full h-1 bg-green-500"></div>
                        <div className="absolute top-1/4 w-full h-1 bg-green-500"></div>
                        <div className="absolute top-1/2 w-full h-1 bg-green-500"></div>
                        <div className="absolute top-3/4 w-full h-1 bg-green-500"></div>
                      </div>
                      <div className="text-center text-xs font-medium py-1">Org</div>
                    </div>
                    
                    <div className="w-16 h-48 border-2 border-gray-300 rounded-md bg-white relative overflow-hidden flex flex-col-reverse">
                      <div className="bg-blue-400 h-1/4 w-full relative">
                        <div className="absolute top-0 w-full h-1 bg-blue-500"></div>
                        <div className="absolute top-1/4 w-full h-1 bg-blue-500"></div>
                        <div className="absolute top-1/2 w-full h-1 bg-blue-500"></div>
                        <div className="absolute top-3/4 w-full h-1 bg-blue-500"></div>
                      </div>
                      <div className="text-center text-xs font-medium py-1">Rec</div>
                    </div>
                    
                    <div className="w-16 h-48 border-2 border-gray-300 rounded-md bg-white relative overflow-hidden flex flex-col-reverse">
                      <div className="bg-amber-400 h-1/2 w-full relative">
                        <div className="absolute top-0 w-full h-1 bg-amber-500"></div>
                        <div className="absolute top-1/4 w-full h-1 bg-amber-500"></div>
                        <div className="absolute top-1/2 w-full h-1 bg-amber-500"></div>
                        <div className="absolute top-3/4 w-full h-1 bg-amber-500"></div>
                      </div>
                      <div className="text-center text-xs font-medium py-1">Ele</div>
                    </div>
                  </div>
                )}
                
                {activeFeature === 'notifications' && (
                  <div className="flex space-x-4">
                    <div className="w-32 h-48 border-2 border-gray-300 rounded-t-xl bg-white relative">
                      {/* Bin with full compartment */}
                      <div className="absolute bottom-0 left-0 w-full h-1/3 grid grid-cols-3 border-t-2 border-gray-300">
                        <div className="border-r-2 border-gray-300 relative overflow-hidden">
                          <div className="absolute bottom-0 w-full h-full bg-green-200"></div>
                        </div>
                        <div className="border-r-2 border-gray-300 relative overflow-hidden">
                          <div className="absolute bottom-0 w-full h-full bg-blue-200"></div>
                        </div>
                        <div className="relative overflow-hidden">
                          <div className="absolute bottom-0 w-full h-full bg-orange-200"></div>
                        </div>
                      </div>
                      
                      {/* Alert indicator */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <svg className="w-8 h-8 text-red-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div className="text-xs text-gray-600 mt-2">Notificação</div>
                    </div>
                    
                    <div className="w-24 h-48 bg-gray-800 rounded-md p-2 flex flex-col border-2 border-gray-700">
                      <div className="bg-gray-700 rounded-sm p-1 mb-2">
                        <div className="text-[8px] text-white">Alertas</div>
                      </div>
                      <div className="bg-red-100 rounded-sm p-1 mb-1 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                        <div className="text-[6px] text-red-800">Lixeira #103 cheia</div>
                      </div>
                      <div className="text-[6px] text-gray-400 mt-1">Última atualização: agora</div>
                    </div>
                  </div>
                )}
              </div>
              
              <p className="text-gray-600">{activeFeatureData.description}</p>
            </div>
          </div>
          
          <div>
            <div className="space-y-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start gap-4 ${
                    activeFeature === feature.id 
                      ? `bg-${feature.color.replace('bg-', '').replace('500', '50')} border border-${feature.color.replace('bg-', '').replace('500', '200')}` 
                      : 'bg-white border border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activeFeature === feature.id
                      ? feature.color.replace('500', '100')
                      : 'bg-gray-100'
                  }`}>
                    <div className={activeFeature === feature.id
                      ? `text-${feature.color.replace('bg-', '').replace('500', '600')}`
                      : 'text-gray-500'
                    }>
                      {feature.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold ${
                      activeFeature === feature.id ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {feature.title}
                    </h4>
                    <p className={`text-sm mt-1 ${
                      activeFeature === feature.id ? 'text-gray-700' : 'text-gray-500'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                  
                  {activeFeature === feature.id && (
                    <div className="ml-auto">
                      <div className={`w-6 h-6 rounded-full ${feature.color} flex items-center justify-center`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Benefícios principais</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">Redução de erros na separação de resíduos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">Otimização das rotas de coleta de lixo</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">Incentivo à reciclagem através de gamificação</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">Conscientização ambiental e educação cidadã</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;