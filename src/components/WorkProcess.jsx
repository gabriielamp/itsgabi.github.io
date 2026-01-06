export default function WorkProcess() {
    const steps = [
        {
            id: "01",
            title: "Análisis",
              desc: "Iniciamos con una reunión para entender tus objetivos y definir la dirección del proyecto.",
            icon: "🤝",
        },
        {
            id: "02",
            title: "Diseño",
            desc: "Transformo ideas en una propuesta visual atractiva y alineada con tu marca.",
            icon: "💡",
        },
        {
            id: "03",
            title: "Desarrollo",
            desc: "Construyo el sitio con código limpio, optimizado y completamente responsivo.",
            icon: "💻",
        },
        {
            id: "04",
            title: "Entrega",
            desc: "Realizo pruebas, ajustes y optimización final antes del lanzamiento.",
            icon: "🚀",
        },
    ];

    return (
        <section id="proceso" className="py-20 bg-white font-poppins">
            <div className="max-w-6xl mx-auto text-center px-6">
                {/* Subtítulo */}
                {/* <p className="text-sm text-blue-500 font-medium">// Our Work Process</p> */}
                <span className="text-sm inline-block text-[#2262EA] font-bold tracking-[0.18em] font-poppins uppercase">
                    Flujo de Trabajo
                </span>
                {/* Título */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2  font-passionate">
                    Mi proceso de <span className="text-[#2262EA]">Trabajo</span>
                </h2>

                {/* Steps */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex flex-col items-center text-center">
                            {/* Icono circular */}
                            <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 text-white text-3xl font-bold shadow-md">
                                {step.icon}
                                {/* Número */}
                                <span className="absolute -bottom-3 right-0 bg-white text-blue-600 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                    {step.id}
                                </span>
                            </div>

                            {/* Texto */}
                            <h3 className="mt-6 text-lg font-semibold text-gray-800">{step.title}</h3>
                            <p className="text-sm text-gray-500 mt-2 max-w-[200px]">{step.desc}</p>

                            {/* Línea conectora (solo en pantallas grandes y excepto el último) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 right-0 w-full border-t border-gray-300 -z-10"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
