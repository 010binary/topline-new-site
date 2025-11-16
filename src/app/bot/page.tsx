import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import CTASection from '@/components/bot/cta-section';
import AboutRobotSection from '@/components/bot/about-robot-section';
import VideoReviewsSection from '@/components/bot/video-reviews-section';
import AdvantagesSection from '@/components/bot/advantages-section';
import HowItWorksSection from '@/components/bot/how-it-works-section';
import TestimonialsSection from '@/components/bot/testimonials-section';
import PricingPlansSection from '@/components/bot/pricing-plans-section';

const page = () => {
    return (
        <>
            <main>
                <Header />
                <CTASection />
                <AboutRobotSection />
                <VideoReviewsSection />
                <AdvantagesSection />
                <HowItWorksSection />
                <PricingPlansSection />
                <TestimonialsSection />
                <Footer />
            </main>
        </>
    )
}

export default page