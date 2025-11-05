"use client"

export default function PrivateMentorshipBanner() {
    return (
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url(/placeholder.svg?height=600&width=1400&query=professional mentorship coaching session)",
                }}
            >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-96 px-4 md:px-8">
                <div className="max-w-2xl text-center space-y-6">
                    {/* Main heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        One on one private mentorship program is also available.
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-200">Book a session with us in office or online class.</p>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <button className="px-8 py-3 md:px-10 md:py-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                            Book a Session Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
