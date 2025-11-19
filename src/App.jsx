import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import TrendSection from "./components/sections/trend";
import TopSection from "./components/sections/top";

const App = () => (
  <div className="font-inter flex flex-col items-center bg-[#1A2217] text-white">
    <div className="bg-hero w-screen">
      <Header />
      <main className="container">
        <HeroSection />
        <TrendSection />
      </main>
    </div>
    <main className="container">
      <TopSection />
    </main>
  </div>
);
export default App;
