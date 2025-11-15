"use client"

import { useState } from "react"
import Container from "@/components/layout/container";
import Image from "next/image";
import {HeroImage} from "@/assets";

interface HeroSectionProps {
    variant?: "minimal" | "full"
}

export default function HeroSection({ variant = "full" }: HeroSectionProps) {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null)

    const minimalView = variant === "minimal"

    return (
        <section className="relative w-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
            <Container>
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-transparent to-transparent" />
                <div className="relative z-10">
                    {minimalView ? (
                        // Minimal state - just buttons
                        <div className="min-h-screen flex items-center justify-start px-4 md:px-8 lg:px-12">
                            <div className="flex flex-col md:flex-row gap-4">
                                <button
                                    onMouseEnter={() => setHoveredButton("mentorship")}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 whitespace-nowrap text-sm md:text-base"
                                >
                                    Mentorship
                                </button>
                                <button
                                    onMouseEnter={() => setHoveredButton("signal")}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 whitespace-nowrap text-sm md:text-base"
                                >
                                    Signal
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Full state - complete hero section
                        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between py-11 md:py-16 gap-8 md:gap-12">
                            {/* Left content */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8">
                                {/* Subtitle badge */}
                                <div className="flex items-center justify-start">
                                    <div className="px-4 py-2 border border-purple-500/30 rounded-full text-xs md:text-sm font-medium text-purple-300 uppercase tracking-wider">
                                        Empowering Your Forex Journey
                                    </div>
                                </div>

                                {/* Main heading */}
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                                    Bennydc Forex Trading Academy
                                </h1>

                                {/* Description */}
                                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
                                    Get along with our mentorship program from beginner to masters level and start trading on your own.
                                </p>

                                {/* Call-to-action buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <button
                                        onMouseEnter={() => setHoveredButton("mentorship")}
                                        onMouseLeave={() => setHoveredButton(null)}
                                        className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm md:text-base"
                                    >
                                        Mentorship
                                    </button>
                                    <button
                                        onMouseEnter={() => setHoveredButton("signal")}
                                        onMouseLeave={() => setHoveredButton(null)}
                                        className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm md:text-base"
                                    >
                                        Signal
                                    </button>
                                </div>
                            </div>

                            {/* Right side - placeholder for image/decorative elements */}
                            <div className="w-full lg:w-1/2 flex items-center justify-center relative h-64 sm:h-80 md:h-96 lg:h-full min-h-96">
                                {/* Placeholder content area */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* Decorative gradient circles */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-600/30 to-transparent rounded-full blur-3xl" />
                                    </div>

                                    {/* Placeholder for hero image and icons */}
                                    <div className="relative z-10 text-center">
                                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-purple-500/20 to-purple-900/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                                            {/*<span className="text-gray-400 text-sm">Image Area</span>*/}
                                            <Image className="" src={HeroImage} alt={"Image Area"} />
                                        </div>
                                    </div>

                                    {/* Decorative icon placeholders */}
                                    <div className="absolute top-8 left-4 md:top-16 md:left-8 w-10 h-10 md:w-12 md:h-12 bg-purple-500/30 border border-purple-500/50 rounded-lg" />
                                    <div className="absolute top-24 right-4 md:top-32 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-blue-500/30 border border-blue-500/50 rounded-full" />
                                    <div className="absolute bottom-8 right-12 md:bottom-16 md:right-16 w-10 h-10 md:w-12 md:h-12 bg-purple-500/30 border border-purple-500/50 rounded-full" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    )
}
