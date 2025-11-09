import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ReviewsSection from "@/components/custom/reviewsSection";
import HeroSection from "@/components/custom/heroSection";
import FeaturesSection from "@/components/custom/featuresSection";
import MentorshipSection from "@/components/custom/mentorshipSection";
import PrivateMentorshipBanner from "@/components/custom/primaryMentorshipSection";
import ShowcaseSection from "@/components/custom/showcaseSection";

export default function Home() {
  return (
      <main>
          <Header />
          <HeroSection variant="full" />
          <FeaturesSection />
          <MentorshipSection />
          <PrivateMentorshipBanner />
          <ShowcaseSection
              label="BOT"
              heading="Automate Your Forex Trading. Maximize Your Profits."
              description="Let our AI-powered Forex Trading Robot handle the charts while you focus on what matters. Designed for consistent results, 24/7 performance, and zero emotions."
              buttonText="Learn More"
              imagePosition="right"
          >
              <div className="w-full h-full bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-gray-300">AI Trading Bot Image</span>
              </div>
          </ShowcaseSection>

          <ShowcaseSection
              label="OUR PARTNER"
              heading="BennyDC x Nefitra"
              description="Trade with real capital and keep up to 90% of your profits — with no risk to your own money. Thanks to our partnership with Nefitra, BennyDC students can access funded trading accounts starting at just $15."
              buttonText="Learn More"
              imagePosition="left"
          >
              <div className="w-full h-full bg-white flex items-center justify-center">
                  <span className="text-gray-600">Nefitra Logo</span>
              </div>
          </ShowcaseSection>
          <ReviewsSection />
          <Footer />
      </main>
  )
}
