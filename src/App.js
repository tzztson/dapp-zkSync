import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import NotFound from "./pages/notFound";
import Home from "./pages/home";
import LayoutHeader from "./components/layout/layoutHeader";
import LayoutFooter from "./components/layout/layoutFooter";

function App() {
  return (
    <div className="">
      <header className=""></header>
      <Router>
        <LayoutHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <LayoutFooter />
      </Router>
    </div>
  );
}

export default App;
