import Container from "../layout/container";

export default function CTASection() {
    return (
        <Container>
            <section className="w-full py-11 flex items-center justify-center bg-primary-background">
                <div className="text-center max-w-3xl">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 md:mb-6">
                        Automate Your Forex Trading
                    </h2>
                    <p className="text-xl sm:text-2xl text-slate-300 font-bold">
                        Maximize Your Profits.
                    </p>
                </div>

            </section>
        </Container>
    );
}
