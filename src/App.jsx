import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  const url = "https://spoonacular.com/food-api/docs";
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="container main">
          <HeroSection />
        </div>
      </div>
    </>
  );
}

export default App;
