"use client"

import type React from "react"

interface ShowcaseSectionProps {
    label: string
    heading: string
    description: string
    buttonText: string
    imagePosition?: "right" | "left"
    children?: React.ReactNode
}

export default function ShowcaseSection({
                                            label,
                                            heading,
                                            description,
                                            buttonText,
                                            imagePosition = "right",
                                            children,
                                        }: ShowcaseSectionProps) {
    const isImageRight = imagePosition === "right"

    return (
        <section className="relative w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-slate-900">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isImageRight ? "" : "lg:grid-cols-2"}`}
                >
                    {/* Content Section */}
                    <div
                        className={`flex flex-col justify-center ${isImageRight ? "lg:col-span-1" : "lg:col-span-1 lg:order-2"}`}
                    >
                        <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">{label}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{heading}</h2>
                        <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-md">{description}</p>
                        <button className="w-fit px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
                            {buttonText}
                        </button>
                    </div>

                    {/* Image Section */}
                    <div
                        className={`flex items-center justify-center ${isImageRight ? "lg:col-span-1" : "lg:col-span-1 lg:order-1"}`}
                    >
                        <div className="w-full h-auto aspect-video md:aspect-auto md:h-96 rounded-2xl overflow-hidden border border-purple-500/30 backdrop-blur-sm bg-slate-800/50 flex items-center justify-center">
                            {children || (
                                <div className="text-gray-400 text-center">
                                    <p className="text-sm">Image Placeholder</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
