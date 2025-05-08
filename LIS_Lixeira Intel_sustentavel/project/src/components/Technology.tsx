import React from 'react';
import { Cpu, Wifi, Database, Smartphone, Camera, Scale, RefreshCw } from 'lucide-react';

interface TechItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Technology: React.FC = () => {
  const technologies: TechItem[] = [
    {
      icon: <Camera className="h-5 w-5 text-purple-600" />,
      title: 'Câmera com Visão Computacional',
      description: 'Identifica visualmente o tipo de resíduo utilizando algoritmos de inteligência artificial'
    },
    {
      icon: <Scale className="h-5 w-5 text-blue-600" />,
      title: 'Sensores de Proximidade e Peso',
      description: 'Detectam a presença de usuários e monitoram o nível de enchimento dos compartimentos'
    },
    {
      icon: <Cpu className="h-5 w-5 text-emerald-600" />,
      title: 'Microcontrolador ESP32',
      description: 'Processa os dados dos sensores e controla todo o sistema de automação da lixeira'
    },
    {
      icon: <Wifi className="h-5 w-5 text-cyan-600" />,
      title: 'Conectividade IoT',
      description: 'Transmite dados em tempo real para a nuvem e recebe atualizações de configuração'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-orange-600" />,
      title: 'Aplicativo Móvel',
      description: 'Interface para usuários acompanharem seu histórico de reciclagem e receberem recompensas'
    },
    {
      icon: <Database className="h-5 w-5 text-indigo-600" />,
      title: 'Banco de Dados na Nuvem',
      description: 'Armazena informações de uso, estatísticas e perfis de usuários para análise'
    }
  ];

  return (
    <section id="technology" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Tecnologia</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Tecnologias utilizadas</h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              Combinamos hardware e software avançados para criar uma solução 
              completa e eficiente para o gerenciamento de resíduos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                {tech.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <RefreshCw className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">Ciclo de funcionamento</h3>
                  <p className="text-gray-600 mt-1">Como as tecnologias trabalham juntas no sistema LIS</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center z-10">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <div className="w-1 h-24 bg-gradient-to-b from-blue-300 to-purple-300 my-4"></div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <h4 className="font-semibold text-gray-800 mb-2">Detecção</h4>
                      <p className="text-sm text-gray-600">O sensor detecta a presença do usuário e ativa a câmera.</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-12 left-full w-8 h-1 bg-gradient-to-r from-blue-300 to-transparent hidden md:block"></div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center z-10">
                      <span className="font-bold text-purple-600">2</span>
                    </div>
                    <div className="w-1 h-24 bg-gradient-to-b from-purple-300 to-emerald-300 my-4"></div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                      <h4 className="font-semibold text-gray-800 mb-2">Identificação</h4>
                      <p className="text-sm text-gray-600">A IA analisa a imagem e identifica o tipo de resíduo.</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-12 left-full w-8 h-1 bg-gradient-to-r from-purple-300 to-transparent hidden md:block"></div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center z-10">
                    <span className="font-bold text-emerald-600">3</span>
                  </div>
                  <div className="w-1 h-24 bg-gradient-to-b from-emerald-300 to-orange-300 my-4"></div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">Ação</h4>
                    <p className="text-sm text-gray-600">O sistema abre o compartimento correto e registra o descarte.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-16 bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Arquitetura do Sistema</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Hardware</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span className="text-gray-700">Microcontrolador ESP32 com WiFi integrado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span className="text-gray-700">Sensores de proximidade infravermelhos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span className="text-gray-700">Células de carga para medição de peso</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span className="text-gray-700">Servomotores para abertura de compartimentos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                        <span className="text-gray-700">Câmera OV7670 para captura de imagens</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Software</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-gray-700">Backend Node.js com API REST</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-gray-700">Banco de dados MongoDB para armazenamento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-gray-700">Processamento de imagem com TensorFlow Lite</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-gray-700">Aplicativo React Native para interface mobile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-gray-700">Dashboard administrativo com análise de dados</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;