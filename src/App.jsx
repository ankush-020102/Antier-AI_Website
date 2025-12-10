

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import AiMlSolutions from "./pages/AiMlSolutions";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<AiMlSolutions />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
