import { Routes, Route, BrowserRouter } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";

import Process from "./pages/Process";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Layout from "./components/home/Layout/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
