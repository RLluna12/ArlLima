import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Entre em Contato
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <Phone className="w-6 h-6 text-yellow-500" />
                            <div>
                                <h3 className="font-semibold">Telefone</h3>
                                <p>(11) 977246448</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail className="w-6 h-6 text-yellow-500" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p>rh.transportes@arllima.com.br</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPin className="w-6 h-6 text-yellow-500" />
                            <div>
                                <h3 className="font-semibold">Endereço</h3>
                                <p>
                                    Av. Humberto de Campos, 2177 - Bocaina,
                                    Ribeirão Pires - SP
                                </p>
                            </div>
                        </div>
                    </div>
                    <form
                        action="https://formspree.io/f/meoqwwrd"
                        method="POST"
                        className="space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nome
                            </label>
                            <input
                                type="text"
                                name="nome"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Mensagem
                            </label>
                            <textarea
                                rows={4}
                                name="mensagem"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
