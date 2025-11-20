import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import TrendSection from "./components/sections/trend";
import TopSection from "./components/sections/top";
import ReviewSection from "./components/sections/review";
import RecommendationSection from "./components/sections/recommend";
import Footer from "./components/sections/footer";

const App = () => (
  <div className="font-inter flex flex-col items-center bg-[#1A2217] text-white">
    <div className="bg-hero flex w-screen flex-col items-center">
      <Header />
      <main className="container">
        <HeroSection />
        <TrendSection />
      </main>
    </div>
    <main className="container flex flex-col items-center">
      <TopSection />
      <ReviewSection />
      <RecommendationSection />
    </main>
    <Footer />
  </div>
);

export default App;
