"use client"

import type React from "react"
import Container from "@/components/layout/container";

interface Feature {
    icon: React.ReactNode
    title: string
    description: string
}

const features: Feature[] = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
            </svg>
        ),
        title: "Our mentorship program is lifetime based, with an opportunity to learn and earn at the same time.",
        description: "",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Get access to Bennydc technical analysis and training materials.",
        description: "",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z"
                />
            </svg>
        ),
        title:
            "Get started with our mentorship program. We offer a mentorship program from any level + Prop firm assistant.",
        description: "",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
            </svg>
        ),
        title: "We offer Subscription to Bennydc forex trading signals.",
        description: "",
    },
]

export default function FeaturesSection() {
    return (
        <section className="relative w-full bg-slate-950 py-16 md:py-24 overflow-hidden">
        <Container>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-96 h-96 md:w-[600px] md:h-[600px] bg-purple-600 rounded-full blur-3xl opacity-20" />
            </div>

            {/* Content container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-purple-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
                        Our Features
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
                    <p className="text-gray-400 text-base md:text-lg">This are some of the features we offer our students</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-purple-500/50 transition-all duration-300"
                        >
                            {/* Icon Circle */}
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 text-white">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-bold text-white leading-relaxed">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
        </section>
    )
}
