import React, { useState } from 'react';
import { Sun, Moon, HelpCircle } from 'lucide-react';

const AgregarProducto: React.FC = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [useDecimals, setUseDecimals] = useState(false);
    const [plasticBagTax, setPlasticBagTax] = useState(false);
    const [addChargeDiscount, setAddChargeDiscount] = useState(false);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'} p-4 font-sans`}>
            <div className="max-w-md mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Add Item</h2>
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'}`}
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Operación Gravada</label>
                        <select className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <option>Operación Gravada</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Cantidad</label>
                            <input type="number" defaultValue={1} className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Unidades</label>
                            <select className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                <option>Unidades</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Código</label>
                            <input type="text" placeholder="(opcional)" className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`} />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Descripción detallada</label>
                        <input type="text" className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Valor unitario</label>
                        <input type="number" className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`} />
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <label className="block text-sm font-medium">IGV 18%</label>
                        <span>0.00</span>
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-sm font-medium mb-1">Precio unitario (incluye IGV)</label>
                        <input type="number" className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`} />
                        <HelpCircle size={20} className="absolute right-2 top-8 text-gray-500" />
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center">
                            <input type="checkbox" checked={useDecimals} onChange={() => setUseDecimals(!useDecimals)} className="mr-2" />
                            <span className="text-sm">usar 10 decimales</span>
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center">
                            <input type="checkbox" checked={plasticBagTax} onChange={() => setPlasticBagTax(!plasticBagTax)} className="mr-2" />
                            <span className="text-sm">Impuesto a las bolsas plásticas</span>
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center">
                            <input type="checkbox" checked={addChargeDiscount} onChange={() => setAddChargeDiscount(!addChargeDiscount)} className="mr-2" />
                            <span className="text-sm">Agregar Cargo / Descuento</span>
                        </label>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Ope. Gravada</span>
                            <span>0.00</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">IGV</span>
                            <span>0.00</span>
                        </div>
                        <div className="flex justify-between items-center font-bold">
                            <span>Importe Total</span>
                            <span>0.00</span>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                            Cancelar
                        </button>
                        <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white">
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgregarProducto;