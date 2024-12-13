import React from 'react';
import { Truck, FileCheck, ClipboardCheck } from 'lucide-react';

export default function QuoteRequest() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Solicitar Cotação</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Por que escolher a ArliLima?</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Truck className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Frota Especializada</h3>
                    <p className="text-gray-600">Veículos modernos e adequados para cada tipo de produto químico.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FileCheck className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Certificações</h3>
                    <p className="text-gray-600">ISO 9001:2015, SASSMAQ e certificações ambientais.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <ClipboardCheck className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Experiência Comprovada</h3>
                    <p className="text-gray-600">Anos de experiência no transporte seguro de produtos químicos.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Contatos Diretos</h2>
              <div className="space-y-4">
                <a
                  href="mailto:rh.transportes@arllima.com.br"
                  className="block w-full text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Enviar E-mail
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511977246448&text=Fala,%20Lucas!%20Vim%20do%20teu%20portifólio"
                  className="block w-full text-center bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
                >
                  Ligar Agora
                </a>
                <a
                  href="https://linkedin.com/company/arlilima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-800 text-white py-3 rounded-md hover:bg-blue-900 transition"
                >
                  Conectar no LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form
            className="bg-white p-8 rounded-lg shadow-md"
            action="https://formspree.io/f/meoqwwrd"
            method="POST"
          >
            <h2 className="text-2xl font-semibold mb-6">Formulário de Cotação</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome da Empresa</label>
                <input
                  type="text"
                  name="company_name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pessoa de Contato</label>
                <input
                  type="text"
                  name="contact_person"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">E-mail</label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tipo de Produto Químico</label>
                <input
                  type="text"
                  name="product_type"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantidade Estimada</label>
                <input
                  type="text"
                  name="estimated_quantity"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Detalhes Adicionais</label>
                <textarea
                  name="additional_details"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white px-4 py-3 rounded-md hover:bg-yellow-600 transition font-semibold"
              >
                Solicitar Cotação
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}