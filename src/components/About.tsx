import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sobre a ArlLima</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Há mais de uma década, a ArliLima se destaca no mercado de
            transporte de produtos químicos, oferecendo soluções logísticas
            seguras e eficientes em todo o território nacional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6">
            <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Compromisso com Segurança
            </h3>
            <p className="text-gray-600">
              Seguimos rigorosamente todas as normas e regulamentações do setor
              químico.
            </p>
          </div>
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Excelência Reconhecida
            </h3>
            <p className="text-gray-600">
              Certificações e prêmios que atestam nossa qualidade e
              comprometimento.
            </p>
          </div>
          <div className="text-center p-6">
            <Clock className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Pontualidade Garantida
            </h3>
            <p className="text-gray-600">
              Entregas no prazo com monitoramento em tempo real da sua carga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
