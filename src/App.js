import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import WorkPage from "./components/WorkPage";

function App() {
  return (    
  <Router>
    <div className="App  max-w-6xl container mx-auto px-4 mt-1  md:mt-7 md:text-lg tracking-wide  h-screen text-pretty">
      <Navbar />
      <main className="content mt-10 md:mt-20">
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/workpage" element={<WorkPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
