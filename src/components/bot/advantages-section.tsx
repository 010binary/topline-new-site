import React from 'react';
import { Zap, Shield, Book, TrendingUp } from 'lucide-react';

export default function AdvantagesSection() {
    const advantages = [
        {
            icon: Zap,
            title: 'Fast execution without emotional decisions',
        },
        {
            icon: Shield,
            title: 'Secure, reliable, and always running',
        },
        {
            icon: Book,
            title: 'Designed to grow your account steadily',
        },
        {
            icon: TrendingUp,
            title: 'We offer Subscription to Bennydc forex trading signals.',
        },
    ];

    return (
        <section className="bg-slate-900 py-16 sm:py-20 md:py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 sm:mb-16">
                    <p className="text-purple-400 text-sm sm:text-base font-semibold uppercase tracking-wider mb-2">
                        Our Advantages
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-slate-400 text-base sm:text-lg">
                        Proven strategies with real market data
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8">
                    {advantages.map((advantage, index) => {
                        const Icon = advantage.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center">
                                {/* Icon Circle */}
                                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-slate-700 flex items-center justify-center mb-6 sm:mb-8">
                                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
                                </div>
                                {/* Text */}
                                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                    {advantage.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
