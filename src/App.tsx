import { Route, Routes } from "react-router-dom";
import "./App.css";
import GalleryContent from "./components/Content/GalleryContent";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<p>HOME</p>} />
        <Route path="/Gallery" element={<GalleryContent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
