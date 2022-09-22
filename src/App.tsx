import "./App.css";
import GalleryContent from "./components/Content/GalleryContent";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <GalleryContent />
      <Footer />
    </div>
  );
}

export default App;
