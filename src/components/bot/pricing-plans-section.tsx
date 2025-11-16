import Container from "../layout/container";
import { CircleCheckBig } from "lucide-react";

export default function PricingPlansSection() {
    const features = [
        "Priority Support",
        "Free Upgrades to New Versions",
        "5 Days Money-Back Guarantee"
    ];
    return (
        <Container>
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-8">
                            {/* Label */}
                            <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-4">
                                Pricing Plans
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                What Is Lux pips?
                            </h2>
                            <div>
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 pt-1.5">
                                        <CircleCheckBig className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                                        <span className="text-slate-300 text-base">{feature}</span>
                                    </li>
                                ))}
                            </div>
                            <h2
                                className="font"
                            >
                                Ultimate - N450,000 (One-time)
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}
