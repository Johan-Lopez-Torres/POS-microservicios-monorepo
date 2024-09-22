import React, { useState } from 'react';
import { Search, Calendar, Edit, X, Plus } from 'lucide-react';

const Factura: React.FC = () => {
  const [items, setItems] = useState([{ cant: 1, codigo: '', descripcion: 'cmcmcm', pUnit: 94.400, total: 94.40 }]);

  const addItem = () => {
    setItems([...items, { cant: 1, codigo: '', descripcion: '', pUnit: 0, total: 0 }]);
  };


  return (
    <div className="bg-gray-900 text-gray-300 p-4 font-sans p-20">
      <div className="bg-yellow-800 text-yellow-300 p-3 mb-4 text-sm rounded-md">
        <span className="font-bold">DOCUMENTO SIN VALOR:</span> Esta empresa está en modo <span className="bg-green-700 text-white  rounded-md py-1 px-2">DESARROLLO</span> (modo de pruebas)
      </div>

      <div className="flex mb-4">
        <div className="bg-pink-600 w-24 h-24 flex items-center justify-center rounded-lg mr-4">
          <div className="bg-white text-pink-600 font-bold p-2 rounded">
            Test
          </div>
        </div>
        <div className="flex-grow">
          <h1 className="text-2xl font-bold text-white">EMPRESA DE PRUEBAS</h1>
          <h2 className="text-lg">NOMBRE LEGAL DE LA EMPRESA SAC</h2>
          <p className="text-sm">Dirección fiscal de la empresa - Distrito - Provincia</p>
          <p className="text-xs text-gray-500">Acá van los datos de tu empresa como correo, redes sociales, teléfonos, etc.</p>
          <p className="text-xs text-gray-500">Por ejemplo WhatsApp 987 654 321</p>
        </div>
        <div className="text-right">
          <p className="text-sm">R.U.C. N° 20000000000</p>
          <p className="font-bold">BOLETA DE VENTA ELECTRÓNICA</p>
          <div className="flex mt-1">
            <select className="bg-gray-800 p-1 rounded-l">
              <option>B001</option>
            </select>
            <input type="text" value="00003169" className="bg-gray-800 p-1 rounded-r" readOnly />
          </div>
        </div>
      </div>

      <div className="mb-4">
          <div className="flex mb-2">
              <input type="text" placeholder="ANGEL CAVIR CABANA OCHOA"
                     className="flex-grow bg-gray-800 p-2 rounded-md mr-7"/>
              <select className="bg-gray-800 p-2 border-l border-gray-700">
                  <option>DNI</option>
              </select>
              <select className="bg-gray-800 p-2 border-l border-gray-700">

                  <option>Tipo de comprobante</option>
                  <option>Boleta</option>
                  <option>Factura</option>

              </select>

              <input type="text" placeholder="77777777" className="w-32 bg-gray-800 p-2"/>
              <button className="bg-gray-800 p-2 rounded-r"><Search size={20}/></button>
          </div>
          <input type="text" placeholder="ASENT.H. AMISTAD 8 DE OCTUBRE MZ. L LT. 2 VILLA MARIA DEL TRIUNFO LIMA LIMA"
                 className="w-full bg-gray-800 p-2 rounded" />
      </div>

      <div className="flex mb-4">
        <div className="flex-grow mr-2">
          <label className="block text-sm mb-1">F. de Emisión</label>
          <div className="relative">
            <input type="date" value="2024-09-12" className="w-full bg-gray-800 p-2 rounded" />
            <Calendar className="absolute right-2 top-2 text-gray-500" size={20} />
          </div>
        </div>
        <div className="flex-grow mr-2">
          <label className="block text-sm mb-1">Tipo de Venta</label>
          <select className="w-full bg-gray-800 p-2 rounded">
            <option>Venta Interna (productos/servicios)</option>
          </select>
        </div>
        <div className="w-48">
          <label className="block text-sm mb-1">Moneda</label>
          <select className="w-full bg-gray-800 p-2 rounded">
            <option>PEN - (S/) Sol</option>
          </select>
        </div>
      </div>

      <table className="w-full mb-4">
        <thead className="bg-gray-800 text-left">
          <tr>
            <th className="p-2">CANT</th>
            <th className="p-2">CODIGO</th>
            <th className="p-2">DESCRIPCION</th>
            <th className="p-2">P. UNIT</th>
            <th className="p-2">TOTAL</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b border-gray-800">
              <td className="p-2"><input type="number" value={item.cant} className="w-full bg-gray-900 p-1" /></td>
              <td className="p-2"><input type="text" value={item.codigo} className="w-full bg-gray-900 p-1" /></td>
              <td className="p-2"><input type="text" value={item.descripcion} className="w-full bg-gray-900 p-1" /></td>
              <td className="p-2"><input type="number" value={item.pUnit} className="w-full bg-gray-900 p-1" step="0.001" /></td>
              <td className="p-2"><input type="number" value={item.total} className="w-full bg-gray-900 p-1" readOnly /></td>
              <td className="p-2">
                <button className="text-blue-400 mr-2"><Edit size={16} /></button>
                <button className="text-red-400"><X size={16} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addItem} className="w-full bg-gray-800 p-2 rounded mb-4 flex items-center justify-center">
        <Plus size={20} className="mr-2" /> Agregar otro item
      </button>

      <div className="flex justify-end mb-4">
        <div className="w-48">
          <div className="flex justify-between mb-2">
            <span>Ope. Gravada</span>
            <span>80.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>IGV</span>
            <span>14.40</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Importe Total</span>
            <span>94.40</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">IMPORTE EN LETRAS</label>
        <input type="text" value="NOVENTA Y CUATRO CON 40/100 SOLES" className="w-full bg-gray-800 p-2 rounded" readOnly />
      </div>

      <button className="w-full bg-gray-800 p-2 rounded mb-2 flex items-center justify-center">
        <Plus size={20} className="mr-2" /> Agregar Observaciones o Notas
      </button>

      <button className="w-full bg-gray-800 p-2 rounded mb-2 flex items-center justify-center">
        <Plus size={20} className="mr-2" /> Agregar Documentos Relacionados
      </button>

      <button className="w-full bg-gray-800 p-2 rounded mb-4 flex items-center justify-center">
        <Plus size={20} className="mr-2" /> Agregar Guías Relacionadas
      </button>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Este es un mensaje de pie de página. La mayoría pone "Gracias por su compra!", pero puedes poner cualquier mensaje.</p>
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Emitir Boleta de Venta</button>
          <button className="bg-gray-800 p-2 rounded"><Search size={20} /></button>
          <button className="bg-gray-800 p-2 rounded ml-2"><Calendar size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default Factura;