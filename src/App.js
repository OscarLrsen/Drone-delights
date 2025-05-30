import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Komponenter/Home";
import Menu from "./Komponenter/Menu";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} /> 

      </Routes>
    </Router>
  );
}

export default App;
