import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import SmoothScroll from "./components/animations/SmoothScroll";
import Preloader from "./components/common/Preloader";

import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
