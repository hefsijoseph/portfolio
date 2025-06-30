import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Footer from "./Footer";
import WorkPage from "./WorkPage";

function App() {
  return (    
  <Router>
    <div className="App  max-w-6xl container mx-auto px-4 mt-7 md:text-lg tracking-wide  h-screen text-pretty">
      <Navbar />
      <main className="content mt-20">
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
