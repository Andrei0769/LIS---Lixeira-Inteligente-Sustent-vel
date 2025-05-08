import React, { useState } from 'react';
import { MapPin, BarChart2, Award, Bell } from 'lucide-react';

interface TabProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ id, icon, title, isActive, onClick }) => {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-emerald-100 text-emerald-700 font-medium' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};

const AppPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('stats');

  const tabs = [
    { id: 'stats', icon: <BarChart2 className="w-5 h-5" />, title: 'Estatísticas' },
    { id: 'map', icon: <MapPin className="w-5 h-5" />, title: 'Localização' },
    { id: 'rewards', icon: <Award className="w-5 h-5" />, title: 'Recompensas' },
    { id: 'notifications', icon: <Bell className="w-5 h-5" />, title: 'Notificações' }
  ];

  return (
    <section id="app" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Aplicativo</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Acompanhe sua reciclagem</h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              Nosso aplicativo permite que você monitore suas contribuições para o meio ambiente
              e receba recompensas pelo descarte correto de resíduos.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {tabs.map((tab) => (
                  <Tab 
                    key={tab.id}
                    id={tab.id}
                    icon={tab.icon}
                    title={tab.title}
                    isActive={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  />
                ))}
              </div>
              
              {activeTab === 'stats' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Seu impacto este mês</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                          <span className="text-sm font-medium text-gray-700">Orgânico</span>
                        </div>
                        <p className="text-2xl font-bold text-emerald-700">4,2 kg</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                          <span className="text-sm font-medium text-gray-700">Reciclável</span>
                        </div>
                        <p className="text-2xl font-bold text-blue-700">6,8 kg</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                          <span className="text-sm font-medium text-gray-700">Eletrônico</span>
                        </div>
                        <p className="text-2xl font-bold text-orange-700">0,5 kg</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                          <span className="text-sm font-medium text-gray-700">Total</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-700">11,5 kg</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Histórico recente</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          <span>Garrafa PET</span>
                        </div>
                        <div className="text-sm text-gray-500">Hoje, 14:30</div>
                      </li>
                      <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                          <span>Restos de alimentos</span>
                        </div>
                        <div className="text-sm text-gray-500">Hoje, 12:15</div>
                      </li>
                      <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                          <span>Pilha</span>
                        </div>
                        <div className="text-sm text-gray-500">Ontem, 18:45</div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-indigo-600" />
                      </div>
                      <h4 className="font-medium text-indigo-900">Parabéns!</h4>
                    </div>
                    <p className="text-sm text-indigo-700">
                      Você está entre os 10% de usuários mais ativos este mês. 
                      Continue reciclando para ganhar mais pontos!
                    </p>
                  </div>
                </div>
              )}
              
              {activeTab === 'map' && (
                <div className="space-y-6">
                  <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 opacity-50 bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')]"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <p className="bg-white px-4 py-2 rounded-lg text-gray-800 font-medium shadow-md">
                        Mapa de ecopontos próximos
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Lixeiras próximas</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Lixeira Inteligente #32</p>
                          <p className="text-sm text-gray-500">Av. Paulista, 1000</p>
                        </div>
                        <div className="text-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md">
                          300m
                        </div>
                      </li>
                      <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Lixeira Inteligente #45</p>
                          <p className="text-sm text-gray-500">Rua Augusta, 500</p>
                        </div>
                        <div className="text-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md">
                          750m
                        </div>
                      </li>
                      <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Ecoponto Central</p>
                          <p className="text-sm text-gray-500">Rua Frei Caneca, 200</p>
                        </div>
                        <div className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                          1,2km
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'rewards' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-4 rounded-lg text-white">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Seus pontos</h3>
                      <p className="text-2xl font-bold">1.250</p>
                    </div>
                    <div className="w-full bg-white/20 h-2 rounded-full">
                      <div className="bg-white h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-sm mt-2">750 pontos para o próximo prêmio</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Recompensas disponíveis</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Desconto na loja parceira</p>
                          <p className="text-sm text-gray-500">15% de desconto em compras</p>
                        </div>
                        <div className="text-sm bg-amber-100 text-amber-700 px-2 py-1 rounded-md">
                          800 pts
                        </div>
                      </li>
                      <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Kit sustentável</p>
                          <p className="text-sm text-gray-500">Canudo e talheres reutilizáveis</p>
                        </div>
                        <div className="text-sm bg-amber-100 text-amber-700 px-2 py-1 rounded-md">
                          1.200 pts
                        </div>
                      </li>
                      <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Plantio de árvore</p>
                          <p className="text-sm text-gray-500">Uma árvore plantada em seu nome</p>
                        </div>
                        <div className="text-sm bg-amber-100 text-amber-700 px-2 py-1 rounded-md">
                          2.000 pts
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Notificações recentes</h3>
                    <ul className="space-y-3">
                      <li className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <div className="flex justify-between items-start">
                          <p className="font-medium text-blue-800">Nova lixeira próxima</p>
                          <span className="text-xs text-blue-600">Hoje</span>
                        </div>
                        <p className="text-sm text-blue-700 mt-1">
                          Uma nova lixeira inteligente foi instalada a 500m da sua localização.
                        </p>
                      </li>
                      <li className="p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                        <div className="flex justify-between items-start">
                          <p className="font-medium text-emerald-800">Pontos adicionados</p>
                          <span className="text-xs text-emerald-600">Ontem</span>
                        </div>
                        <p className="text-sm text-emerald-700 mt-1">
                          Você ganhou 50 pontos por descartar corretamente resíduos recicláveis.
                        </p>
                      </li>
                      <li className="p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                        <div className="flex justify-between items-start">
                          <p className="font-medium text-amber-800">Evento de reciclagem</p>
                          <span className="text-xs text-amber-600">3 dias atrás</span>
                        </div>
                        <p className="text-sm text-amber-700 mt-1">
                          Participe do evento de reciclagem no parque central no próximo sábado.
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Configurações de notificação</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-gray-700">Pontos e recompensas</label>
                        <div className="w-10 h-5 bg-emerald-500 rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-gray-700">Lixeiras próximas</label>
                        <div className="w-10 h-5 bg-emerald-500 rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-gray-700">Eventos e campanhas</label>
                        <div className="w-10 h-5 bg-emerald-500 rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-[500px] bg-gray-900 rounded-3xl overflow-hidden border-8 border-gray-800 shadow-xl">
                <div className="h-8 bg-gray-800 flex items-center justify-center">
                  <div className="w-20 h-5 bg-black rounded-full"></div>
                </div>
                
                <div className="h-[468px] bg-emerald-50 overflow-hidden relative">
                  {activeTab === 'stats' && (
                    <div className="p-4">
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <h4 className="text-sm font-medium text-emerald-800">Seu impacto ambiental</h4>
                        <div className="mt-3 flex justify-between">
                          <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-emerald-50 rounded-full flex items-center justify-center">
                              <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
                            </div>
                            <p className="text-xs mt-1 text-gray-500">Orgânico</p>
                            <p className="text-sm font-medium">4,2 kg</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center">
                              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                            </div>
                            <p className="text-xs mt-1 text-gray-500">Reciclável</p>
                            <p className="text-sm font-medium">6,8 kg</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 mx-auto bg-orange-50 rounded-full flex items-center justify-center">
                              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                            </div>
                            <p className="text-xs mt-1 text-gray-500">Eletrônico</p>
                            <p className="text-sm font-medium">0,5 kg</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-white rounded-xl p-3 shadow-sm">
                        <h4 className="text-sm font-medium text-gray-800">Atividade recente</h4>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-md">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs">Garrafa PET</span>
                            <span className="text-xs text-gray-500 ml-auto">14:30</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-emerald-50 rounded-md">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-xs">Resto de comida</span>
                            <span className="text-xs text-gray-500 ml-auto">12:15</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'map' && (
                    <div className="absolute inset-0 opacity-50 bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')]">
                      <div className="absolute left-1/3 top-1/4 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-md"></div>
                      <div className="absolute right-1/4 top-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-md"></div>
                      <div className="absolute left-1/4 bottom-1/4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
                    </div>
                  )}
                  
                  {activeTab === 'rewards' && (
                    <div className="p-4">
                      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-3 rounded-xl text-white shadow-sm">
                        <div className="flex justify-between items-center">
                          <h4 className="text-sm font-medium">Pontos</h4>
                          <p className="text-xl font-bold">1.250</p>
                        </div>
                        <div className="w-full bg-white/20 h-1.5 rounded-full mt-2">
                          <div className="bg-white h-1.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-xs mt-1">750 pontos para o próximo prêmio</p>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-800">Recompensas</h4>
                        <div className="mt-2 space-y-2">
                          <div className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center">
                            <div>
                              <p className="text-xs font-medium">Desconto de 15%</p>
                              <p className="text-[10px] text-gray-500">Loja parceira</p>
                            </div>
                            <div className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">
                              800 pts
                            </div>
                          </div>
                          <div className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center">
                            <div>
                              <p className="text-xs font-medium">Kit sustentável</p>
                              <p className="text-[10px] text-gray-500">Talheres e canudo</p>
                            </div>
                            <div className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">
                              1.200 pts
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'notifications' && (
                    <div className="p-4">
                      <h4 className="text-sm font-medium text-gray-800">Notificações</h4>
                      <div className="mt-2 space-y-2">
                        <div className="p-2 bg-blue-50 rounded-lg border-l-2 border-blue-500">
                          <p className="text-xs font-medium text-blue-800">Nova lixeira próxima</p>
                          <p className="text-[10px] text-blue-700 mt-0.5">
                            Lixeira instalada a 500m da sua localização.
                          </p>
                          <p className="text-[10px] text-blue-600 mt-1">Hoje</p>
                        </div>
                        <div className="p-2 bg-emerald-50 rounded-lg border-l-2 border-emerald-500">
                          <p className="text-xs font-medium text-emerald-800">Pontos adicionados</p>
                          <p className="text-[10px] text-emerald-700 mt-0.5">
                            Você ganhou 50 pontos por descartar corretamente.
                          </p>
                          <p className="text-[10px] text-emerald-600 mt-1">Ontem</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 h-14 bg-white border-t border-gray-200 flex items-center justify-around px-2">
                    <button className={`w-10 h-10 rounded-full flex items-center justify-center ${activeTab === 'stats' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-500'}`}>
                      <BarChart2 className="w-5 h-5" />
                    </button>
                    <button className={`w-10 h-10 rounded-full flex items-center justify-center ${activeTab === 'map' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-500'}`}>
                      <MapPin className="w-5 h-5" />
                    </button>
                    <button className={`w-10 h-10 rounded-full flex items-center justify-center ${activeTab === 'rewards' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-500'}`}>
                      <Award className="w-5 h-5" />
                    </button>
                    <button className={`w-10 h-10 rounded-full flex items-center justify-center ${activeTab === 'notifications' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-500'}`}>
                      <Bell className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;