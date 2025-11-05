"use client"

interface MentorshipCard {
    title: string
    price: string
    includes: string
    buttonLabel: string
    features: string[]
}

const mentorshipCards: MentorshipCard[] = [
    {
        title: "Physical Mentorship",
        price: "₦76,500",
        includes: "Includes:",
        features: ["Lifetime Mentorship", "Physical Mentorship", "One-time Fee"],
        buttonLabel: "Enroll now",
    },
    {
        title: "Online Mentorship",
        price: "₦180,000",
        includes: "Includes:",
        features: ["Lifetime Mentorship", "Online Mentorship", "One-time Fee"],
        buttonLabel: "Enroll now",
    },
    {
        title: "Learn and Earn",
        price: "₦155,000",
        includes: "Includes:",
        features: ["Everything in Physical", "Everything in Online", "One-time Fee"],
        buttonLabel: "Enroll now",
    },
    {
        title: "Private Mentorship",
        price: "Contact us",
        includes: "Includes:",
        features: ["Mentorship with a Private Tutor", "Physical Private Mentorship", "One-time Fee"],
        buttonLabel: "Book a Session",
    },
]

export default function MentorshipSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-20 md:px-8 overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="text-purple-400 text-sm font-medium tracking-widest mb-4">MENTORSHIP PROGRAMS</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Mentorship</h2>
                    <p className="text-gray-400 text-lg">Join our unique Lifetime Mentorship Program</p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mentorshipCards.map((card, index) => (
                        <div
                            key={index}
                            className="group flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                        >
                            <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/30" />
                            </div>

                            {/* Card Content */}
                            <div className="flex-1 p-6 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>

                                {/* Price */}
                                <p className="text-purple-400 text-lg font-semibold mb-4">{card.price}</p>

                                {/* Includes Section */}
                                <p className="text-gray-400 text-sm font-medium mb-3">{card.includes}</p>

                                {/* Features List */}
                                <ul className="flex-1 space-y-2 mb-6">
                                    {card.features.map((feature, idx) => (
                                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-full py-3 transition-all duration-300">
                                    {card.buttonLabel}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
