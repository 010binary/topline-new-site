export default function HowItWorksSection() {
    const steps = [
        {
            number: '01',
            title: 'Purchase the Robot',
            description: 'Get immediate access after payment',
        },
        {
            number: '02',
            title: 'Install on MetaTrader 4 or 5',
            description: "We'll guide you step-by-step or install it for you.",
        },
        {
            number: '03',
            title: 'Choose Your Risk Level',
            description: 'Adjust settings to suit your trading style.',
        },
        {
            number: '04',
            title: 'Sit Back & Watch It Trade',
            description: 'Our robot handles everything – from signal detection to trade execution.',
        },
    ];

    return (
        <section className="bg-slate-900 px-4 py-16 md:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto">
                {/* Heading with underline */}
                <div className="mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        How it Works
                    </h2>
                    <div className="w-20 h-1 bg-slate-600"></div>
                </div>

                {/* Grid of steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Icon box */}
                            <div className="mb-6 flex items-center justify-center">
                                <div className="w-16 h-16 bg-purple-600 rounded flex items-center justify-center">
                                    <span className="text-white font-mono text-sm font-bold text-center leading-tight">
                                        EA<br />
                                        {step.number === '01' && 'BE'}
                                        {step.number === '02' && '0D'}
                                        {step.number === '03' && '0A'}
                                        {step.number === '04' && '0E'}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
