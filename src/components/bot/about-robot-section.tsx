import { RobotTrading } from "@/assets";
import Image from "next/image";
import Container from "../layout/container";

export default function AboutRobotSection() {
    const features = [
        {
            icon: "CFO",
            title: "24/7 Automated Trading",
            description:
                "The robot monitors and trades the market non-stop, so you never miss an opportunity.",
        },
        {
            icon: "API",
            title: "Smart Risk Management",
            description:
                "Includes dynamic lot sizing, stop-loss, and take-profit settings for safer trading",
        },
        {
            icon: "CED",
            title: "Multiple Currency Pairs",
            description: "Supports all major pairs – Works best for EUR/USD",
        },
        {
            icon: "BKK",
            title: "Backtested & Optimized",
            description:
                "Hundreds of hours of historical testing to ensure peak performance.",
        },
        {
            icon: "BEE",
            title: "Plug-and-Play Setup",
            description: "No coding or trading experience needed – just install and go.",
        },
    ];

    return (
        <Container>
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-8">
                            {/* Label */}
                            <div>
                                <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-4">
                                    About The Robot
                                </p>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    What Is Lux pips?
                                </h2>
                                <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                                    Lux Pips is an intelligent Forex trading algorithm built to analyze market
                                    trends, detect profitable opportunities, and execute trades automatically.
                                    Whether you're a beginner or a seasoned trader, our robot does the heavy
                                    lifting for you.
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex gap-4">
                                        {/* Icon Circle */}
                                        <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 border border-slate-700">
                                            <span className="text-purple-500 text-xs font-bold text-center px-1">
                                                {feature.icon}
                                            </span>
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex-1">
                                            <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Image with Dashed Border */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-md">
                                <div className="border-2 border-dashed border-purple-600 rounded-lg p-4">
                                    <Image
                                        src={RobotTrading}
                                        alt="Lux Pips Robot Trading Interface"
                                        className="w-full h-auto rounded-md"
                                        width={600}
                                        height={300}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}
