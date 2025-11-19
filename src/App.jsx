import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";

const App = () => (
  <div className="font-inter bg-hero min-h-[250vh] text-white">
    <Header />
    <main className="container">
      <HeroSection />
    </main>
  </div>
);
export default App;
