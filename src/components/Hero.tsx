import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';
import Logo from '../img/caminhao.png';

export default function Hero({ onQuoteClick }) {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src={Logo}
          alt="Chemical transport"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Transporte Químico com Excelência
        </h1>
        <p className="mt-6 text-xl max-w-3xl">
          Especialistas em logística e transporte de produtos químicos, garantindo segurança
          e eficiência em todo o território nacional.
        </p>
        <div className="mt-10 flex gap-6">
          <button 
            onClick={onQuoteClick}
            className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Solicitar Cotação
          </button>
          <a 
            href="#about"
            className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
}