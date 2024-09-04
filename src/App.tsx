import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/About";
import { SingleCockTail } from "./pages/singleCockTail";
import { ErrorPage } from "./pages/error";
import { Navbar } from "./compontent/navbar";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<SingleCockTail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>
  );
};
export default App;
