import { Truck, ShieldCheck, Clock, BarChart } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Truck className="w-12 h-12 text-yellow-500" />,
            title: "Transporte Especializado",
            description:
                "Frota moderna e adequada para diferentes tipos de produtos químicos",
        },
        {
            icon: <ShieldCheck className="w-12 h-12 text-yellow-500" />,
            title: "Segurança Certificada",
            description:
                "Cumprimento rigoroso das normas de segurança e regulamentações",
        },
        {
            icon: <Clock className="w-12 h-12 text-yellow-500" />,
            title: "Pontualidade",
            description:
                "Compromisso com prazos e planejamento logístico eficiente",
        },
        {
            icon: <BarChart className="w-12 h-12 text-yellow-500" />,
            title: "Rastreamento",
            description: "Monitoramento em tempo real de toda a sua carga",
        },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Nossos Serviços
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 border rounded-lg hover:shadow-lg transition"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
