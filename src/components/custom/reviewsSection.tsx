"use client"

import { Phone } from "lucide-react"

export default function ReviewsSection() {
    const avatars = [
        { id: 1, name: "Person 1", initials: "P1" },
        { id: 2, name: "Person 2", initials: "P2" },
        { id: 3, name: "Person 3", initials: "P3" },
        { id: 4, name: "Person 4", initials: "P4" },
    ]

    return (
        <section className="relative w-full bg-slate-950 py-16 md:py-24 lg:py-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Reviews</h2>
                    <p className="text-lg md:text-xl text-gray-400">Join the Largest Forex Trading Academy in Nigeria.</p>
                </div>

                {/* Main Card Section */}
                <div className="bg-gradient-to-r from-purple-950/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 border border-purple-500/20">
                    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8 md:gap-12">
                        {/* Left Section - Avatars (Mobile: Center, Tablet/Desktop: Left) */}
                        <div className="flex flex-col items-center md:items-start lg:items-start gap-6 md:gap-8 flex-shrink-0">
                            {/* Overlapping Avatars */}
                            <div className="flex -space-x-4">
                                {avatars.map((avatar, index) => (
                                    <div
                                        key={avatar.id}
                                        className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 border-4 border-white flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg hover:scale-110 transition-transform"
                                        style={{ zIndex: avatars.length - index }}
                                    >
                                        <img
                                            src={`/professional-headshot-person.png?height=80&width=80&query=professional+headshot+person+${index + 1}`}
                                            alt={avatar.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Middle Section - Text Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Need help?</h3>
                            <p className="text-base md:text-lg text-gray-400">For further enquiries contact us</p>
                        </div>

                        {/* Right Section - Button (Mobile: Full Width, Tablet/Desktop: Right) */}
                        <div className="w-full md:w-auto flex-shrink-0">
                            <button className="w-full md:w-auto px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/50">
                                <span>Contact us</span>
                                <Phone size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
