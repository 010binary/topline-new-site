"use client"

import { CircleCheckBig } from "lucide-react"
import Container from "@/components/layout/container";
import Image from "next/image";
import { PaymentIcon } from "@/assets";
// import { Button } from "@/components/ui/button"

interface PricingTier {
    name: string
    price: string
    period: string
    description: string
    isPopular?: boolean
    features: string[]
    topdescription?: string
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
        topdescription: "We offer an ability to learn forex trading and still earn money from the market.",
        description: "You can choose for training to be physical or online.",
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
        description: "Book a session with us.",
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
        <Image src={PaymentIcon} alt="Visa" className="px-8" />
    </div>
)

export default function PricingCards() {
    return (
        <Container>
            <section className="relative py-18">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 md:gap-2.5 max-w-7xl mx-auto">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl border transition-all duration-300 bg-(--card-color) ${tier.isPopular
                                    ? "border-slate-700/50 hover:border-slate-600/50 md:scale-110 z-10"
                                    : "border-slate-700/50 hover:border-slate-600/50"
                                    }`}
                            >
                                {tier.isPopular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-[#a855f7] text-white px-4 py-1.5 rounded-b-lg text-xs font-bold uppercase tracking-wider">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="p-8 h-full flex flex-col py-20">
                                    {/* Header */}
                                    <div className="mb-6 gap-2 flex flex-col items-center">
                                        <h3 className="text-xl font-semibold text-white mb-4 text-center">{tier.name}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed text-center">{tier.topdescription}</p>
                                        <div className="flex gap-2 mb-4 justify-center items-center">
                                            <span className="text-5xl font-extrabold text-[#a855f7] text-center">{tier.price}</span>
                                            <span className="text-sm text-slate-400 uppercase tracking-wide text-center">{tier.period}</span>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed text-center">{tier.description}</p>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-slate-700/50 my-6" />

                                    {/* Features */}
                                    <div className="mb-8 grow">
                                        <p className="text-white font-semibold text-sm mb-4">Features include:</p>
                                        <ul className="space-y-3">
                                            {tier.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-3 border-t border-slate-700/50 pt-1.5">
                                                    <CircleCheckBig className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                                                    <span className="text-slate-300 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Button and Payment Methods */}
                                    <div className="space-y-4">
                                        <button
                                            className="w-full bg-linear-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-full py-4 text-base transition-all duration-200"
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
            </section>
        </Container>
    )
}
