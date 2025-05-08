import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-emerald-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Faça parte da revolução sustentável
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Entre em contato para saber mais sobre como implementar a LIS em sua cidade 
            ou estabelecimento. Juntos, podemos criar um futuro mais sustentável.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Send className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Envie uma mensagem</h3>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
            
            <div className="bg-emerald-700 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Próximos passos</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Análise inicial</h4>
                    <p className="text-emerald-100 text-sm">
                      Avaliamos suas necessidades e elaboramos uma proposta personalizada
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Planejamento</h4>
                    <p className="text-emerald-100 text-sm">
                      Definimos juntos o melhor local e quantidade de lixeiras necessárias
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Implementação</h4>
                    <p className="text-emerald-100 text-sm">
                      Instalamos as lixeiras e configuramos todo o sistema
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Acompanhamento</h4>
                    <p className="text-emerald-100 text-sm">
                      Oferecemos suporte contínuo e monitoramento dos resultados
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-emerald-800 rounded-lg">
                <p className="text-emerald-100 text-sm">
                  "A implementação da LIS reduziu em 40% nossos custos com gestão de resíduos."
                </p>
                <p className="text-emerald-200 text-sm mt-2">
                  — João Silva, Gestor Ambiental
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;