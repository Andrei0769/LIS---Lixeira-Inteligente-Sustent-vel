import React from 'react';
import { Zap, LayoutGrid, Smartphone, ChevronRight } from 'lucide-react';

const Solution: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="h-5 w-5 text-emerald-600" />,
      title: 'Sensor de presença',
      description: 'Detecta aproximação e ativa o sistema automaticamente'
    },
    {
      icon: <LayoutGrid className="h-5 w-5 text-emerald-600" />,
      title: 'Separação inteligente',
      description: 'Identifica e separa os resíduos em até 3 categorias'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-emerald-600" />,
      title: 'Aplicativo integrado',
      description: 'Monitore descartes e receba recompensas pelo uso'
    }
  ];

  return (
    <section id="solution" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Nossa Solução</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">LIS - Lixeira Inteligente Sustentável</h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              Um sistema de coleta automatizado e consciente que utiliza sensores IoT e 
              inteligência artificial para identificar e separar resíduos corretamente.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main Image */}
              <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                <div className="relative">
                  <div className="w-full h-64 bg-emerald-50 rounded-lg flex items-center justify-center">
                    {/* Smart Bin Simplified Illustration */}
                    <div className="relative">
                      <div className="w-32 h-80 border-2 border-gray-300 rounded-t-2xl bg-white relative">
                        {/* Camera/Sensor */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-800 rounded-lg"></div>
                        
                        {/* Compartments */}
                        <div className="absolute bottom-0 left-0 w-full h-1/3 grid grid-cols-3 border-t-2 border-gray-300">
                          <div className="border-r-2 border-gray-300 flex items-center justify-center bg-green-50">
                            <span className="text-[10px] text-gray-600 rotate-90">Orgânico</span>
                          </div>
                          <div className="border-r-2 border-gray-300 flex items-center justify-center bg-blue-50">
                            <span className="text-[10px] text-gray-600 rotate-90">Reciclável</span>
                          </div>
                          <div className="flex items-center justify-center bg-orange-50">
                            <span className="text-[10px] text-gray-600 rotate-90">Eletrônico</span>
                          </div>
                        </div>
                        
                        {/* Level Indicators */}
                        <div className="absolute bottom-1/3 left-0 w-full grid grid-cols-3 px-1">
                          <div className="h-20 bg-green-200 rounded-sm mx-1"></div>
                          <div className="h-32 bg-blue-200 rounded-sm mx-1"></div>
                          <div className="h-12 bg-orange-200 rounded-sm mx-1"></div>
                        </div>
                        
                        {/* Animated Light */}
                        <div className="absolute -right-4 top-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Features callouts */}
                  <div className="absolute top-6 left-6 bg-white p-2 rounded-lg shadow-md flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium">Câmera IA</span>
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-white p-2 rounded-lg shadow-md flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium">Sensores</span>
                  </div>
                  
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-md">
                    <span className="text-xs font-medium text-emerald-600">3 compartimentos automáticos</span>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">Sistema LIS v1.0</h3>
                  <p className="text-sm text-gray-600 mt-1">Separação automática com IA</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Como funciona nossa solução</h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{benefit.title}</h4>
                    <p className="text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Por que a LIS é diferente?</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Reconhecimento automático do tipo de resíduo</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sistema de recompensas para incentivar o uso correto</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Conectividade IoT para monitoramento em tempo real</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <a 
                href="#features" 
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                Ver mais detalhes sobre as funcionalidades
                <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;