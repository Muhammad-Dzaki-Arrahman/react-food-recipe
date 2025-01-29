import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";
function App() {
  const url = "https://spoonacular.com/food-api/docs";
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/recipes" element={<Recipes />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
