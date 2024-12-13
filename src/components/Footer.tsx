import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3  className="text-xl font-bold mb-4" >
              ArlLima
            </h3>
            <p className="text-gray-400">
              Sua parceira em transporte químico seguro e eficiente.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Certificações</h3>
            <p className="text-gray-400">
              ISO 9001:2015
              <br />
              SASSMAQ
              <br />
              Certificação Ambiental
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ArliLima. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
