import React from 'react';
import { Wifi, Camera, BarChart } from 'lucide-react';

const WasteBinIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8 relative">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Lixeira Inteligente</h3>
          
          {/* WiFi Icon */}
          <div className="absolute top-12 right-12 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
            <Wifi className="w-5 h-5 text-teal-600" />
          </div>
          
          {/* Camera Icon */}
          <div className="absolute top-28 left-8 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Camera className="w-5 h-5 text-blue-600" />
          </div>
          
          {/* Analytics Icon */}
          <div className="absolute top-28 right-8 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <BarChart className="w-5 h-5 text-orange-600" />
          </div>
          
          {/* Smart Bin Illustration */}
          <div className="relative mt-2 border-2 border-gray-300 w-48 h-56 rounded-t-3xl">
            {/* Sensor/Camera at top */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-700 rounded-full"></div>
            
            {/* Bin compartments */}
            <div className="absolute bottom-0 left-0 w-full grid grid-cols-3 h-1/3 border-t-2 border-gray-300">
              <div className="border-r-2 border-gray-300 flex flex-col items-center justify-center">
                <div className="text-[10px] text-gray-600">Orgânico</div>
                <div className="w-full h-1 bg-green-500 absolute bottom-0"></div>
              </div>
              <div className="border-r-2 border-gray-300 flex flex-col items-center justify-center">
                <div className="text-[10px] text-gray-600">Reciclável</div>
                <div className="w-full h-1 bg-blue-500 absolute bottom-0"></div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-[10px] text-gray-600">Eletrônico</div>
                <div className="w-full h-1 bg-orange-500 absolute bottom-0"></div>
              </div>
            </div>
          </div>
          
          {/* Bin Base */}
          <div className="bg-gray-800 w-60 h-3 rounded-b-lg"></div>
          
          {/* Action Button */}
          <div className="mt-8 w-full">
            <button className="w-full py-3 bg-teal-600 text-white rounded-md font-medium hover:bg-teal-700 transition-colors">
              Conectar Dispositivo
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl blur opacity-30 animate-pulse"></div>
    </div>
  );
};

export default WasteBinIllustration;