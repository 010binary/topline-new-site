"use client"

import { Check } from "lucide-react"
import Container from "@/components/layout/container";
// import { Button } from "@/components/ui/button"

interface PricingTier {
    name: string
    price: string
    period: string
    description: string
    isPopular?: boolean
    features: string[]
}

const pricingTiers: PricingTier[] = [
    {
        name: "Physical Mentorship",
        price: "N76,500",
        period: "/LIFETIME",
        description: "Join our unique Lifetime mentorship program for an",
        features: [
            "Intensive one month training",
            "One time training fee",
            "Access to Bennydc training materials",
            "Beginners to masters materials",
            "100% deposit bonus",
            "Live trading experience during training",
            "Team work",
        ],
    },
    {
        name: "Learn and Earn",
        price: "N180,000",
        period: "/LIFETIME",
        description: "We offer an ability to learn forex trading and still earn money from the market.",
        isPopular: true,
        features: [
            "Everything in Physical Mentorship",
            "Everything in Online Private Mentorship",
            "Make money while learning",
            "Trading Signals",
            "24/7 Customer support",
        ],
    },
    {
        name: "Online Private mentorship",
        price: "N155,000",
        period: "/LIFETIME",
        description: "You can choose for training to be physical or online.",
        features: [
            "Lifetime mentorship",
            "One-time payment",
            "Access to Bennydc training materials.",
            "Live Zoom session",
            "Live trading session",
            "Access to mentorship from any location",
            "Team work",
            "Access to 100% deposit bonus",
            "Learn and earn",
        ],
    },
]

const PaymentMethods = () => (
    <div className="flex gap-2 justify-center mt-6">
        <img src="/visa-card.jpg" alt="Visa" className="w-12 h-8 bg-white rounded px-1" />
        <img src="/paypal-logo.png" alt="PayPal" className="w-12 h-8 bg-white rounded px-1" />
        <img src="/mastercard-logo.jpg" alt="Mastercard" className="w-12 h-8 bg-white rounded px-1" />
        <img src="/union-pay-logo.jpg" alt="Union Pay" className="w-12 h-8 bg-white rounded px-1" />
    </div>
)

export default function PricingCards() {
    return (
        <Container>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {pricingTiers.map((tier, index) => (
                    <div
                        key={index}
                        className={`relative rounded-2xl border transition-all duration-300 ${
                            tier.isPopular
                                ? "border-purple-500/50 bg-slate-800/80 md:scale-105 shadow-2xl shadow-purple-500/20"
                                : "border-slate-700/50 bg-slate-800/50 hover:border-slate-600/50"
                        }`}
                    >
                        {tier.isPopular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </span>
                            </div>
                        )}

                        <div className="p-8 h-full flex flex-col">
                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-white mb-4">{tier.name}</h3>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-4xl font-bold text-purple-400">{tier.price}</span>
                                    <span className="text-sm text-slate-400 uppercase tracking-wide">{tier.period}</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">{tier.description}</p>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-slate-700/50 my-6" />

                            {/* Features */}
                            <div className="mb-8 flex-grow">
                                <p className="text-white font-semibold text-sm mb-4">Features include:</p>
                                <ul className="space-y-3">
                                    {tier.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button and Payment Methods */}
                            <div className="space-y-4">
                                <button
                                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-full py-6 text-base transition-all duration-200"
                                    // size="lg"
                                >
                                    Register Now
                                </button>
                                <PaymentMethods />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </Container>
    )
}
