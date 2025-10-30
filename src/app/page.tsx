import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ReviewsSection from "@/components/custom/reviewsSection";

export default function Home() {
  return (
      <main>
          <Header />
          <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
              <h1 className="text-4xl font-bold">Welcome to bennydc</h1>
          </div>
          <ReviewsSection />
          <Footer />
      </main>
  )
}
