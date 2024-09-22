import React from 'react';
import { Printer, Share2, Download, FileText } from 'lucide-react';

const VentaExitosaModal: React.FC = () => {
  return (
      <div className="min-h-screen bg-gray-100 text-gray-800 p-4 font-sans content-center">
        <div className="max-w-2xl mx-auto">
          <div className="p-6 rounded-lg bg-white shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-2">Tu Boleta de Venta B001-00003169 ha sido ACEPTADA</h2>
            <p className="text-sm mb-4">
              Podrás encontrar todos tus documentos en la sección <span className="text-blue-400">DOCUMENTOS</span>
            </p>

            <div className="inline-block bg-yellow-600 text-yellow-100 text-xs font-semibold p-2 rounded-lg mb-6">
              DOCUMENTO SIN VALOR
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                <Printer size={18} className="mr-2" />
                <span>Imprimir</span>
              </button>
              <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                <Share2 size={18} className="mr-2" />
                <span>Compartir</span>
              </button>
              <button className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-lg">
                <Download size={18} className="mr-2" />
                <span>Descargar XML</span>
              </button>
              <button className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-lg">
                <FileText size={18} className="mr-2" />
                <span>Emitir Otro</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default VentaExitosaModal;
