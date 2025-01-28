import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import QuoteSection from "./components/QuoteSection";
import ChiefSection from "./components/ChiefSection";
import Footer from "./components/Footer";
function App() {
  const url = "https://spoonacular.com/food-api/docs";
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="container main">
          <HeroSection />
          <ImproveSkills />
          <QuoteSection />
          <ChiefSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
